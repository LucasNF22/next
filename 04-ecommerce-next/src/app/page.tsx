import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-5 ">
     <h1 >Hola Mundo</h1>
     <br />
     <h1 className={ `${titleFont.className} font-bold` }>Hola Mundo</h1>
     <h1 className={ `${titleFont.className}` }>Hola Mundo</h1>
    </main>
  );
}
