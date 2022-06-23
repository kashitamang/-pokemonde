import './PokemonDetail.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPokemonById } from './services/fetch-utils';

export default function PokemonDetail() {
//set pokemon state 
  const [pokemon, setPokemon] = useState({});
//set route param using react hook 
  const params = useParams();
  
  useEffect(() => {
    async function fetchPokemonData() {
      const data = await getPokemonById(params.id);
      setPokemon(data);
    }
    fetchPokemonData();
  }, [params.id]);

  //function handlePokemon click leads user to official pokemon site 

  return (
    <>
      <Link to="/">home</Link>
      <div className='details'>
        <div className='pokemon-data'>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.img} className="pokemon"/>
          <p>type 1: {pokemon.type_1}</p>
          <p>type 2: {pokemon.type_2}</p>
          <p>height: {pokemon.height}</p>
          <p>weight: {pokemon.weight}</p>
          <p>candy: {pokemon.candy}</p>
          <p>candy count: {pokemon.candy_count}</p>
          <p>egg: {pokemon.egg}</p>
          <p>spawn chance: {pokemon.spawn_chance}</p>
          <p>average spawn: {pokemon.avg_spawns}</p>
          <p>spawn time: {pokemon.spawn_time}</p>

        </div>
      </div>
    </>
  );
}
