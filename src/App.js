import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import PokemondePage from './PokemondePage.js';
import PokemonDetail from './PokemonDetail.js';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            {/* this pokemonde page route should list all the pokemons */}
            <PokemondePage />
          </Route>
          <Route exact path="/pokemons/:id"> 
            {/* this route should point to a particular pokemon by id and render that specific PokemonDetail page */}
            <PokemonDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
