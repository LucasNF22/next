import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';

export async function GET(request: Request) { 

    await prisma.todo.deleteMany() // Para limpiar toda al tabla
    await prisma.user.deleteMany() // Para limpiar toda al tabla

    const user = await prisma.user.create({
        data: {
            email: 'test1@gmail.com',
            password: bcrypt.hashSync('321654'),
            roles: ['admin', 'user-pro', `premium` ],
            todos: {
                create: [
                    { description: "Piedra del alma", complete: true},
                    { description: "Piedra del poder" },
                    { description: "Piedra del tiempo" },
                    { description: "Piedra del espacio",  complete: true},
                    { description: "Piedra del realidad" },
                ]
            }
        }
    })

    
    // await prisma.todo.createMany({
    //     data: [
    //         { description: "Piedra del alma", complete: true},
    //         { description: "Piedra del poder" },
    //         { description: "Piedra del tiempo" },
    //         { description: "Piedra del espacio" },
    //         { description: "Piedra del realidad" },
    //     ]
        
    // })

    

  return NextResponse.json({ message: "seed executed"})
}