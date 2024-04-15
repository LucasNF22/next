import { SimplePokemon } from "@/pokemons";
import { createSlice } from "@reduxjs/toolkit";


interface PokemonFavState {
    [key: string]: SimplePokemon,

};


const initialState: PokemonFavState = {
    '1': { id: "1", name: "bulbasaur"},
    '3': { id: "3", name: "askjdkajhsd"},
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

  },
});

export const {  } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
