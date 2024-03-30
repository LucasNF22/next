import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from 'next/image';

const getPokemons = async( limit= 20, offset= 0):Promise<SimplePokemon[]> => {
    
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
    .then( res => res.json());

    const pokemons = data.results.map( pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))

    return pokemons;
};


export default async function PokemonsPage() {

    const pokemons = await getPokemons(150);
    
  return (
    <div className="flex flex-col overflow-y-hidden">

      <span className="text-xl m-4 text-center">Listado de Pókemons <small>( estático )</small></span>
      <PokemonsGrid pokemons={pokemons}/>
    </div>
  );
}