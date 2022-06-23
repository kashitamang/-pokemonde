import { useEffect, useState } from 'react';
import './App.css';
import { getPokemons } from './services/fetch-utils.js';
import pokeball from './pokeball.png';
// import { Link } from 'react-router-dom';

//import pokemons list 
import PokemonsList from './PokemonsList.js';


export default function App() {
//set state 
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 24;

  //useEffect
  useEffect(() => {
    async function doFetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const data = await getPokemons(from, to);
    
      setPokemons(data);
    }
    doFetch();
    
  }, [page]);


  //module 
  return (
    <>
      <img className='App-pokeball' src={pokeball}/>

      <h4>page {page}</h4>
      <div className="header-buttons">
        <button disabled={page <= 0} onClick={() => setPage(page - 1)}>⬅️</button>
        <button onClick={() => setPage(page + 1)}>➡️</button>
      </div>
      <PokemonsList pokemons={pokemons}/>
      <button>back to top</button>
    </>
  );
}
