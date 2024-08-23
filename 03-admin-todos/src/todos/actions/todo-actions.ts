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

export const addTodo = async( description: string ) => {

    try {
       
        const todo = await prisma.todo.create({ data: { description } })
        revalidatePath('./dashboard/server-todos') //Revisa el path para cambiar solo lo que halla sido modificado
        console.log('Todo creado desde el server');
        
        return todo;

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

