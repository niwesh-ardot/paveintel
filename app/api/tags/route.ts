import { NextResponse } from 'next/server'; import { tags } from '@/lib/data/mockData'; export async function GET(){ return NextResponse.json({data:tags,mock:true}); }
