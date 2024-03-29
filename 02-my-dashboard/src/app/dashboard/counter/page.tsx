
import { CartCounter } from "@/app/shopping-cart";


export const metadata = {
 title: 'Counter',
 description: 'Contador hecho en cliente',
};



export default function CounterPage() {
  
  return (

    <div className="flex flex-col items-center justify-center w-full h-full">

      <span>Productos en el carrito</span>

      <CartCounter value={ 102 } />

      
    </div>
  );
}