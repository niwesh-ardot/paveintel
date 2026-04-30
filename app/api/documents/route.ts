import { NextResponse } from 'next/server'; import { documents } from '@/lib/data/mockData';
export async function GET(){ return NextResponse.json({data:documents,mock:true}); }
