import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

interface Segments {
    params: {
        id: string
    };
};

export async function GET(request: Request, { params }: Segments  ) {   

    const id = params.id
    const todo = await prisma.todo.findFirst({ where: { id } })     
    if ( !todo ) return NextResponse.json({ status: "400", message: 'Todo no encontrado' })
    
    return NextResponse.json( todo );
};
