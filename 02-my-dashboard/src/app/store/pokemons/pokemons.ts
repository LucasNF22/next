import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonFavState {
  favorites: { [key: string]: SimplePokemon }
};

// const getInitialState = (): PokemonFavState => { 
//   const favorites = JSON.parse( localStorage.getItem( 'favorite-pokemons') ?? "{}" )

//   return favorites
// };

const initialState: PokemonFavState = {
  favorites: {}
  // "1": { id: "1", name: "bulbasaur" },
  // "3": { id: "3", name: "venusaur" },
  // "4": { id: "4", name: "charmander" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    
    setFavoritePkemons( state, action: PayloadAction<{ [key: string]: SimplePokemon }> ) {
      state.favorites = action.payload;
    },

    toogleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      } else {

        state.favorites[id] = pokemon;
      }

      // No deberia hacerse en Redux, no es buena practica disparar efectos secundarios dentro del reducer.
      localStorage.setItem("favorite-pokemons", JSON.stringify( state.favorites ));

    },


  },
});

export const { toogleFavorite, setFavoritePkemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
