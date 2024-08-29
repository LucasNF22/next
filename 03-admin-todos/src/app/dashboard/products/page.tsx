import { ProductCard } from "@/products";


export default function ProductsPage() {



    return (
        <div className="bg-white p-5 rounded-md">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

                <ProductCard />

            </div>

        </div>


    )
}