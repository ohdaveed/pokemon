import React from 'react';

import PokemonsList from "./PokemonsList";
import Pokedex from "./Pokedex";
import CapturedPokemons from './CapturedPokemons.js'

const App = () => (
  <div className="App">
    <PokemonsList />
    <Pokedex />
  </div>
);

export default App;