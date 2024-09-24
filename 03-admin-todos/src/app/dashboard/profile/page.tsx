'use client'

import { useSession } from "next-auth/react";
import { useEffect } from "react"

export default function ProfilePage()  {

    const { data: session } = useSession();

    useEffect(()=>{
        console.log('Client Side');
        
    }, [])

    return(
        <div className="bg-white p-5 rounded-md">
            <h1>Profile Page</h1>
            <hr />

            <div className="flex flex-col ">
                <span>Nombre: { session?.user?.name ?? 'No Name' }</span>
                <span>Email: { session?.user?.email ?? 'No Email' }</span>
                <span>Imagen: { session?.user?.image ?? 'No Image' }</span>
            </div>

        </div>
    )
}