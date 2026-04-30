import { NextResponse } from 'next/server'; import { literatureOutput } from '@/lib/data/mockData'; export async function POST(){ return NextResponse.json({data:literatureOutput,mock:true}); }
