import React from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import Player from './components/Player';
import MetaData from './components/MetaData';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <h1>Search YouTube videos</h1>
      <SearchInput />
      <Player />
      <MetaData />
      <List />
    </div>
  );
}

export default App;
