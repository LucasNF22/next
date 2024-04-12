"use client"

import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/app/store";


export const WidgetsGrid = () => {

    const cartCount = useAppSelector( state => state.counter.count );

    return (
      <div className="flex flex-wrap p-4 gap-3 w-full items justify-center">
            <SimpleWidget 
              label={"Contador"}
              title={`${cartCount}`}            
              subTitle={"Catidad de productos en el carrito"}
              icon={<IoCartOutline size={70} className="text-cyan-700"/>}
              href="/dashboard/counter"
            />
            {/* <SimpleWidget /> */}


          </div>
    )
}
