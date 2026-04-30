import { NextResponse } from 'next/server'; import { researchCards } from '@/lib/data/mockData'; export async function POST(){ return NextResponse.json({data:researchCards[0],mock:true}); }
