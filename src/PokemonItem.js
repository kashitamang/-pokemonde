import { Link } from 'react-router-dom';

export default function PokemonItem({ pokemon }) {
  return (
    <Link to={`/pokemons/${pokemon.id}`}>
      <div className='pokemon-item'>
        <img className='pokemon-image' src={pokemon.img}/>
        <h3>{pokemon.name}</h3>
      </div>
    </Link>
  );
}
