import { Product } from "@/data/products/products";
import { cookies } from "next/headers";


export const metadata = {
 title: 'Carrito de compras',
 description: 'SEO Title',
};

interface ProductInCart {
  product: Product,
  quantity: number
}

const getProductsInCart = ( cart: {[id:string]: number }) => {

  const productsInCart: ProductInCart[] = [];

  for ( const id of Object.keys(cart)){
    const product = products.find( prod => prod.id === id )
  }


}

export default function CartPage() {


  const cookiesStore = cookies();
  const cart = JSON.parse ( cookiesStore.get('cart')?.value ?? '{}' ) as { [id:string]: number }
  const 


  return (
    <div>
      <h1 className="text-5xl bg-white p-5 rounded-md">Carrito de compras</h1>
      <hr className="mb-2"/>

      <div className="flex flex-col sm:flex-row gap-2 w-full">

        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {

          }
        </div>

      </div>
    </div>
  );
}
