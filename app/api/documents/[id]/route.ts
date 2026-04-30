import { NextResponse } from 'next/server'; import { documents } from '@/lib/data/mockData';
export async function GET(_:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params; return NextResponse.json({data:documents.find(d=>d.id===id),mock:true});}
