import prisma from '@/lib/prisma'

import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    const { searchParams } = new URL( request.url );
    const take = searchParams.get( "take" ) ?? '10';
    const skip = Number( searchParams.get( "skip" ) ?? '10' ); // Otra forma de modificar el tipo de dato

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

}