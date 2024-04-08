import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";



export const metadata = {
 title: 'Favoritos',
 description: 'Listado de los pokemons favoritos',
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {

  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error('Esto es un error que no deberia suceder');

  return pokemons;
};


export default async function PokemonsPage() {

 
  return (
    <div className="flex flex-col overflow-y-hidden">

      <span className="text-xl m-4 text-center">Pokemons favoritos <small className="text-cyan-700">( Estado global )</small></span>
      <PokemonsGrid pokemons={[]} />
    </div>
  );
}