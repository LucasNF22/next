import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    const todo = await prisma.todo.create({
        data: {
            description: "Piedra del tiempo",
            complete: true
        }
    })
    console.log(todo);
    

  return NextResponse.json({ message: "seed executed"})
}