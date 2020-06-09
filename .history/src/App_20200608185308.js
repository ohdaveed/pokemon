import React from 'react';

import PokemonsList from "./PokemonsList";
import Pokedex from "./Pokedex";
import CapturedPokemons from './CapturedPokemons.js'

const App = () => (
  <div className="App">
    <PokemonsList />
    <Pokedex />
    <CapturedPokemons />
  </div>
);

export default App;