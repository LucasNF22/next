import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonFavState {
  [key: string]: SimplePokemon;
};

const getInitialState = (): PokemonFavState => { 
  const favorites = JSON.parse( localStorage.getItem( 'favorite-pokemons') ?? "{}" )

  return favorites
};

const initialState: PokemonFavState = {
  ...getInitialState(),
  // "1": { id: "1", name: "bulbasaur" },
  // "3": { id: "3", name: "venusaur" },
  // "4": { id: "4", name: "charmander" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {

    toogleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        delete state[id];
        return;
      } else {

        state[id] = pokemon;
      }

      // No deberia hacerse en Redux, no es buena practica disparar efectos secundarios dentro del reducer.
      localStorage.setItem("favorite-pokemons", JSON.stringify( state ));

    },


  },
});

export const { toogleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
