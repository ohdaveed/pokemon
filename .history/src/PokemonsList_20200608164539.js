import React, { useState, useContext } from "react";
import { PokemonContext } from './PokemonContext'

export const PokemonsList = () => {
  const { pokemons, setPokemons, capturedPokemons, setCapturedPokemons
  } = useContext(PokemonContext)
    

  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>

      {pokemons.map((pokemon) => (
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonsList;
