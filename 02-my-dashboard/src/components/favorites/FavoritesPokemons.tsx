"use client"

import { useAppSelector } from "@/app/store";
import { PokemonsGrid } from "@/pokemons";

import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";


export const FavoritePokemons = () => {

    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites));
    // const [pokemons, setPokemons] = useState(favoritePokemons)

    // useEffect(() => {
      
    //     setPokemons(favoritePokemons)
      
    // }, [favoritePokemons])
    

    return (
        <>
            {
                favoritePokemons.length === 0
                    ? ( <NoFavorites /> )
                    : ( <PokemonsGrid pokemons={favoritePokemons}  /> )

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