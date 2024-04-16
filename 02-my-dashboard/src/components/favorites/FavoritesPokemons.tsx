"use client"

import { useAppSelector } from "@/app/store";
import { PokemonsGrid } from "@/pokemons";

import { useState } from "react";


export const FavoritePokemons = () => {

    const favoritesPokemons = useAppSelector( state => Object.values( state.pokemons ));
    const [pokemons, setPokemons] = useState( favoritesPokemons )


    // console.log( favoritesPokemons );
    

    return (
        // <PokemonsGrid pokemons={ favoritesPokemons }/>
        <PokemonsGrid pokemons={ pokemons }/>
    )
}