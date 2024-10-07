export const dynamic = 'force-dynamic'
export const revalidate = 0

import { getUserSessionServer } from "@/auth/actions/auth-actions";

import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { NewTodo } from "@/todos/components/NewTodo";
import { redirect } from "next/navigation";


export const metadata = {
  title: 'Listado de Todos',
  description: 'Listado de Todos',
};


export default async function ServerTodosPage() {
  
  const user = await getUserSessionServer();

  if( !user ){
    redirect('/api/auth/signin')
  }

  const todos  = await prisma.todo.findMany({ 
    where: { userId: user.id },
    orderBy: {description: 'asc'}
  
  })

  return (
    <div className="bg-white p-5 rounded-md">
      <h1 className="text-3xl mb-10 ">Server Actions</h1>

      <div className="w-full px-5 mx-5 pb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}