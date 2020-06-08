import React, { useContext } from 'react'
import { PokemonContext } from './PokemonContext'

const CapturedPokemons = () => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  } = useContext(PokemonContext);

  const releasedPokemon = (releasedPokemon) =>
    capturedPokemons.filter((pokemon) => pokemon !== releasedPokemon);

  const release = (pokemon) => () => {
    setCapturedPokemons(releasedPokemon(pokemon));
    setPokemons([...pokemons, pokemon]);
  };

  return (
    <div className="captured-pokemons">
      <h2>CapturedPokemons</h2>

      {capturedPokemons.map((pokemon) => (
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <div>
            <span>{pokemon.name}</span>
            <button onClick={release(pokemon)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CapturedPokemons;