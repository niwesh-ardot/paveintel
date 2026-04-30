import { NextResponse } from 'next/server'; export async function POST(){ return NextResponse.json({answer:'Demo/sample answer with mock citations.',mock:true}); }
