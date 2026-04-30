import { NextResponse } from 'next/server'; import { comparisonResult } from '@/lib/data/mockData'; export async function POST(){ return NextResponse.json({data:comparisonResult,mock:true}); }
