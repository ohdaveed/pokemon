import React from 'react';

import PokemonsList from "./PokemonsList";
import CapturedPokemon from "./CapturedPokemon";

const App = () => (
  <div className="App">
    <PokemonsList />
    <Pokedex />
  </div>
);

export default App;