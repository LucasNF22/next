import { Pokemon } from "@/pokemons";


interface Props {
    params: { id: string };
};


const getPokemon = async( id: string ): Promise<Pokemon> => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`,{
        cache: "force-cache" // va a cambiar mas adelante
    }).then( resp => resp.json() );

    console.log('Se cargó a ',pokemon.name);
    
    return pokemon;
}


export default function PokemonPage({ params }: Props) {

    const { id } = params

    const pokemon = getPokemon( id )

    return (
        <div>
            <h1>Pokemon { id } </h1>
            
        </div>
    );
}