import { WidgetsGrid } from "@/components";




export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard',
};


export default function MainPage() {
  return (
    <div className="text-black p-2 flex items-center flex-col w-full ">
        <h1 className="mt2 text-3xl">Dashboard</h1>
        <span className="text-xl">Información general</span>

        <WidgetsGrid />

    </div>
  );
}