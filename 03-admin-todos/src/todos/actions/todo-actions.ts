'use server'

import { getUserSessionServer } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const sleep = ( seconds: number = 0 ) => {

    return new Promise( resolve => {
        setTimeout( () => {
            resolve( true )
        }, seconds * 1000 );
    });
};


export const toggleTodo = async( id: string, complete: boolean): Promise<Todo> => {

    await sleep( 3 );

    const todo = await prisma.todo.findFirst({ where: { id }}); //Busca y almacena el TODO

    if( !todo) {
        throw `Todo con id ${ id } no encontrado`; 
    }

    const updatedTodo = await prisma.todo.update({ // Update del TODO
        where: { id },
        data: { complete }
    });

    // console.log('Llamado al server action');
    

    revalidatePath('./dashboard/server-todos') //Revisa el path para cambiar solo lo que halla sido modificado

    return updatedTodo;

}

export const addTodo = async( description: string, userId: string ) => {

    const user = await getUserSessionServer();
    try {
        if( user ){

            const todo = await prisma.todo.create({ data: { description, userId: userId } }) // revisar lo que hice
            revalidatePath('./dashboard/server-todos') //Revisa el path para cambiar solo lo que halla sido modificado
            console.log('Todo creado desde el server');
            
            return todo;
        }

    } catch (error) {
        return {
            message: 'Error al crear el TODO'
        }
    }   
}

export const deleteCompleted = async(): Promise<void> => {

   await prisma.todo.deleteMany({ where: { complete: true}});
   revalidatePath('./dashboard/server-todos');
   
}

