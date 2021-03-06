import { client, checkError } from './client.js';

export async function getPokemons(from = 0, to = 30) {
  const response = await client 
    .from('pokedex')
    .select()
    .range(from, to);
  // console.log(response);
  return checkError(response);
}

export async function getPokemonById(id) {
  const response = await client 
    .from('pokedex')
    .select()
    .match({ id })
    .single();

  return checkError(response);
}