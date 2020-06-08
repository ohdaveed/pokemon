import React from 'react';

import PokemonsList from "./PokemonsList";
import Pokedex from "./Pokedex";

const App = () => (
  <PokemonProvider>
  <div className="App">
    <PokemonsList />
    <Pokedex />
    </div>
    </PokemonProvider>
);

export default App;