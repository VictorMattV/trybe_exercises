import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';
import './App.css';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }

}


export default App;
