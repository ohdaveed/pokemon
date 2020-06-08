import React from 'react';

import PokemonsList from "./PokemonsList";
import CapturedPokemon from "./CapturedPokemon";

const App = () => (
  <div className="App">
    <PokemonsList />
    <CapturedPokemon />
  </div>
);

export default App;