"use client"

import { useAppSelector } from "@/app/store";
import { PokemonsGrid } from "@/pokemons";

import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";


export const FavoritePokemons = () => {

    const favoritesPokemons = useAppSelector(state => Object.values(state.pokemons));
    const [pokemons, setPokemons] = useState(favoritesPokemons)


    // console.log( favoritesPokemons );


    return (
        <>
            {
                pokemons.length === 0
                    ? ( <NoFavorites /> )
                    : ( <PokemonsGrid pokemons={pokemons}  /> )

            }
        </>
    )
}

export const NoFavorites = () => {
    return (

        <div className="flex flex-col w-full h-full items-center justify-center pt-5">
            <IoHeartOutline size={150} className="text-red-500" />
            <span>Sin favoritos en colección :(</span>
        </div>
    )
}