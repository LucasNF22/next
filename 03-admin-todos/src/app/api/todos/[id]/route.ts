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

//Modificando un todo con metodo PUT
export async function PUT(request: Request, { params }: Segments  ) {   

    const id = params.id
    const todo = await prisma.todo.findFirst({ where: { id } })     
    if ( !todo ) return NextResponse.json({ status: "400", message: 'Todo no encontrado' })

    const body = await request.json();

    const updateTodo = await prisma.todo.update({
        where: { id },
        data: {
            ...body
        }
    })


    return NextResponse.json( updateTodo );


};
