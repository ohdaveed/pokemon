import React from "react";

import { PokemonProvider } from "./PokemonContext";

import PokemonsList from "./PokemonsList";
// import Pokedex from "./Pokedex";
import CapturedPokemons from "./CapturedPokemons.js";

const App = () => (
  <PokemonProvider>
    <div className="main">
      <PokemonsList />
      
      <CapturedPokemons />
    </div>
    <div className="form-wrapper"></div>
  </PokemonProvider>
);

export default App;
