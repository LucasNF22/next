import prisma from '@/lib/prisma'

import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

export async function GET(request: Request) { 

    const { searchParams } = new URL( request.url );
    const take = searchParams.get( "take" ) ?? '10';
    const skip = Number( searchParams.get( "skip" ) ?? '0' ); // Otra forma de modificar el tipo de dato

    if( isNaN( +take )){
        return NextResponse.json({ status: "400", message: 'Take debe ser un numero' })
    };
    if( isNaN( skip )){
        return NextResponse.json({ status: "400", message: 'Skip debe ser un numero' })
    };

    const todos = await prisma.todo.findMany({

        take: +take,
        skip,

    }); //Puede personalizarse la busqueda con comando tipo where o paginaciones;
      

    return NextResponse.json( todos );

};

// validacion
const postSchema = yup.object({

    description: yup.string().required(),
    complete: yup.boolean().optional().default(false) //
})

// Metodo POST - CREATE
export async function POST( request: Request ) { 
    

    try {
        
        // const body = await postSchema.validate( await request.json() );

        const { description, complete} = await postSchema.validate( await request.json() ); // asi se evitan errores cuando se envian variables que no estan en el schema
        
        const todo = await prisma.todo.create({ data: { description, complete } })
        
        return NextResponse.json( todo );

    } catch (error) {
        return NextResponse.json( error, { status: 400 } );
    }   
}

// Metodo Delete
export async function DELETE( request: Request ) { 
    
    try {

        await prisma.todo.deleteMany({ where: { complete: true} })
        
        return NextResponse.json( 'TODOS eliminados' );

    } catch (error) {
        return NextResponse.json( error, { status: 400 } );
    }


    
}