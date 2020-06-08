import React from 'react';

import PokemonsList from "./PokemonsList";
import CapturedPokemons from "./CapturedPokemons";

const App = () => (
  <div className="App">
    <PokemonsList />
    <CapturedPokemons />
  </div>
);

export default App;