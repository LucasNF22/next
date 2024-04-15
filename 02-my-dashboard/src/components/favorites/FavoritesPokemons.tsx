"use client"

import { useAppSelector } from "@/app/store";
import { PokemonsGrid } from "@/pokemons";


export const FavoritePokemons = () => {

    const favoritesPokemons = useAppSelector( state => Object.values( state.pokemons ));
    
    console.log( favoritesPokemons );
    

    return (
        <PokemonsGrid pokemons={ favoritesPokemons }/>
    )
}