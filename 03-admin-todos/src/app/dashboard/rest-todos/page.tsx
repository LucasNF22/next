export const dynamic = 'force-dynamic'
export const revalidate = 0

import { getUserSessionServer } from "@/auth/actions/auth-actions";

import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { NewTodo } from "@/todos/components/NewTodo";
import { redirect } from "next/navigation";


export const metadata = {
  title: 'Server actions',
  description: 'Listado de Todos',
};


export default async function RestTodosPage() {

  const user = await getUserSessionServer();

  if( !user ){
    redirect('/api/auth/sigin')
  }

  const todos  = await prisma.todo.findMany({ 
    where: { userId: user.id },
    orderBy: {description: 'asc'}
  
  })

  return (
    <div className="bg-white p-5 rounded-md">
      <div className="w-full px-5 mx-5 pb-5">
        
        {/* Formulario para agregar todo */}
        <NewTodo />
        
      </div>
      <TodosGrid todos={ todos } />
    </div>
  );
}