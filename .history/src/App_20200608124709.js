import React from 'react';

import PokemonsList from "./PokemonsList";
import CapturedPokemons from "./CapturedPokemons";

const App = () => (
  <div className="App">
    <PokemonsList />
    <Pokedex />
  </div>
);

export default App;