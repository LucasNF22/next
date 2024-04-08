import { SimpleWidget } from '../../../components/SimpleWidget';


export default function MainPage() {
  return (
    <div className="text-black p-2 flex items-center flex-col w-full">
        <h1 className="mt2 text-3xl">Dashboard</h1>
        <span className="text-xl">Información general</span>

        <div className="flex flex-wrap p-4 gap-3 w-full items justify-center">
          <SimpleWidget />
          <SimpleWidget />
          <SimpleWidget />
          <SimpleWidget />
          <SimpleWidget />
          <SimpleWidget />
        
        </div>

    </div>
  );
}