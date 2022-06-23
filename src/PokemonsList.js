import PokemonItem from './PokemonItem.js';
//import pokemonitem

export default function PokemonsList({ pokemons }) {
  return (
    <div className='pokemons-list'>
      {
        pokemons.map(pokemon => 
          <PokemonItem
            key={`${pokemon.id}${pokemon.name}`} pokemon={pokemon}/>)
      }
    </div>);
}
