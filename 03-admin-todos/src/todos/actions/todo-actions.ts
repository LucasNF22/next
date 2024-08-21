'use server'

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const toggleTodo = async( id: string, complete: boolean): Promise<Todo> => {

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
