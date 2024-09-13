import { WidgetItem } from "@/components";
import { Product, products } from "@/data/products/products";
import { ItemCard } from "@/shopping-cart";
import { cookies } from "next/headers";


export const metadata = {
  title: 'Carrito de compras',
  description: 'SEO Title',
};

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {

  const productsInCart: ProductInCart[] = [];

  for (const id of Object.keys(cart)) {
    const product = products.find(prod => prod.id === id);

    if (product) {
      productsInCart.push({ product: product, quantity: cart[id] })
    }
  }

  return productsInCart;

}

export default function CartPage() {


  const cookiesStore = cookies();
  const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as { [id: string]: number }
  const producstInCart = getProductsInCart(cart);

  const tottalToPay = producstInCart.reduce( ( prev, current ) => (current.product.price * current.quantity) + prev, 0 )


  return (
    <div>
      <h1 className="text-5xl bg-white p-5 rounded-md">Carrito de compras</h1>
      <hr className="mb-2" />

      <div className="flex flex-col sm:flex-row gap-2 w-full">

        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {
            producstInCart.map(({ product, quantity }) => (

              <ItemCard key={product.id} product={product} quantity={quantity} />
            ))
          }
        </div>

        <div className="flex flex-col w-full sm:w-4/12 bg-white p-5 rounded-md">
          <WidgetItem title="Total a Pagar">
            <div className="flex flecol">

            </div>
            <div className="mt2 flex justify-center gap-4">
              <h3 className="text-3xl text-gray-700 font-bold">
                ${ (tottalToPay * 1.21).toFixed(2) }
              </h3>
            </div>
            <span className="font-bold text-gray-500 text-center">Precio base: ${ tottalToPay.toFixed(2) }</span>
            <span className="font-bold text-gray-500 text-center">IVA 21%: ${ (tottalToPay * 0.21).toFixed(2) }</span>
          </WidgetItem>
        </div>

      </div>
    </div>
  );
}
