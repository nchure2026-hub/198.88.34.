import { NextResponse } from "next/server";
export const runtime = "nodejs";
type Enquiry={name?:unknown;businessName?:unknown;email?:unknown;phone?:unknown;industry?:unknown;service?:unknown;message?:unknown;website?:unknown};
const rateLimitWindowMs=10*60*1000;const rateLimitMaxRequests=5;const requestLog=new Map<string,{count:number;startedAt:number}>();
function text(value:unknown):string{return typeof value==="string"?value.trim():"";}
function jsonError(message:string,status:number){return NextResponse.json({message},{status});}
function rateLimited(key:string):boolean{const now=Date.now();const record=requestLog.get(key);if(!record||now-record.startedAt>rateLimitWindowMs){requestLog.set(key,{count:1,startedAt:now});return false;}record.count+=1;return record.count>rateLimitMaxRequests;}

export async function POST(request:Request){
  const origin=request.headers.get("origin");const requestOrigin=new URL(request.url).origin;const configuredOrigin=process.env.NEXT_PUBLIC_SITE_URL;
  if(origin){const allowed=new Set([requestOrigin]);if(configuredOrigin){try{allowed.add(new URL(configuredOrigin).origin);}catch{/* Ignore an invalid optional URL. */}}if(!allowed.has(origin))return jsonError("This request could not be verified. Refresh the page and try again.",403);}
  const forwardedFor=request.headers.get("x-forwarded-for")||"";const clientKey=forwardedFor.split(",")[0].trim()||"unknown-client";
  if(rateLimited(clientKey))return jsonError("Too many enquiries were submitted from this connection. Please try again later or contact us directly.",429);
  let body:Enquiry;try{body=(await request.json()) as Enquiry;}catch{return jsonError("Please check the form and try again.",400);}
  if(text(body.website))return jsonError("The spam check could not be completed. Please refresh the page and try again.",400);
  const name=text(body.name);const businessName=text(body.businessName);const email=text(body.email);const phone=text(body.phone);const industry=text(body.industry);const service=text(body.service);const message=text(body.message);
  if(name.length<2||name.length>100)return jsonError("Enter a name between 2 and 100 characters.",400);
  if(businessName.length>120)return jsonError("The business name is too long.",400);
  if(email.length>254||! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return jsonError("Enter a valid work email address.",400);
  if(phone.length<7||phone.length>25||! /^[+0-9().\-\s]+$/.test(phone))return jsonError("Enter a valid phone number.",400);
  if(!industry||industry.length>100)return jsonError("Select an industry.",400);
  if(!service||service.length>120)return jsonError("Select a service or capability.",400);
  if(message.length<10||message.length>3000)return jsonError("Describe the business problem in 10 to 3000 characters.",400);
  const apiKey=process.env.RESEND_API_KEY;const to=process.env.CONTACT_TO_EMAIL;const from=process.env.CONTACT_FROM_EMAIL;
  if(!apiKey||!to||!from)return jsonError("The website enquiry service is not configured yet. Please email nchure2026@gmail.com or contact us on WhatsApp.",503);
  const emailText=["New enquiry from the NCHURE Technologies website","","Name: "+name,"Business: "+(businessName||"Not provided"),"Email: "+email,"Phone: "+phone,"Industry: "+industry,"Service: "+service,"","Business problem:",message].join("\n");
  try{
    const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+apiKey,"Content-Type":"application/json"},body:JSON.stringify({from,to:[to],reply_to:email,subject:"Website enquiry: "+service,text:emailText}),cache:"no-store"});
    if(!response.ok){console.error("Contact email delivery failed with status:",response.status);return jsonError("We could not deliver the enquiry email right now. Please email us directly or use WhatsApp.",502);}
    return NextResponse.json({message:"Your enquiry was sent. Thank you — the NCHURE team can now review your request."},{status:200});
  }catch{console.error("Contact email provider request failed.");return jsonError("The enquiry service is temporarily unavailable. Please email us directly or use WhatsApp.",502);}
}