export const dynamic = 'force-dynamic'
export const revalidate = 0

import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { NewTodo } from "@/todos/components/NewTodo";


export const metadata = {
  title: 'Listado de Todos',
  description: 'Listado de Todos',
};



export default async function ServerTodosPage() {

  console.log('construida');
  

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
    <>
      <h1 className="text-3xl mb-10 ">Server Actions</h1>

      <div className="w-full px-5 mx-5 pb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </>
  );
}