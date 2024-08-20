import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { NewTodo } from "@/todos/components/NewTodo";


export const metadata = {
 title: 'Listado de Todos',
 description: 'Listado de Todos',
};



export default async function RestTodosPage() {

  const todos  = await prisma.todo.findMany({ orderBy: {description: 'asc'}})

  return (
    <div>
      <div className="w-full px-5 mx-5 pb-5">
        
        {/* Formulario para agregar todo */}
        <NewTodo />
        
      </div>
      <TodosGrid todos={ todos } />
    </div>
  );
}