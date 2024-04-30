import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';
import * as yup from 'yup';

interface Segments {
    params: {
        id: string
    };
};

const getTodo = async( id: string ): Promise<Todo | null> => {

    const todo = await prisma.todo.findFirst({ where: { id } })     

    return todo;
}


// Metodo GET
export async function GET(request: Request, { params }: Segments  ) {   

    // const id = params.id
    // const todo = await prisma.todo.findFirst({ where: { id } })   

    const todo = await getTodo(params.id) // forma utilizando funcion reutilziable

    if ( !todo ) return NextResponse.json({ status: "400", message: 'Todo no encontrado' })
    
    return NextResponse.json( todo );
};


//Modificando un todo con metodo PUT

const putSchema = yup.object({

    complete: yup.boolean().optional(),
    description: yup.string().optional(),
});


export async function PUT(request: Request, { params }: Segments  ) {   

    const todo = await getTodo( params.id )
    
    if ( !todo ) return NextResponse.json({ status: "400", message: 'Todo no encontrado' })

    try {

        const { complete, description, ...rest } = await putSchema.validate( await request.json() ); // en el ...rest se almacenan todo el resto de variables que vengan en el body, ya sea error o variables mal escritas.
        
        const updateTodo = await prisma.todo.update({
            where: { id: params.id },
            data: {
                complete, 
                description
            }
        })
    
        return NextResponse.json( updateTodo );

    } catch (error) {
        return NextResponse.json( error, { status: 400 } )    
    }



};
