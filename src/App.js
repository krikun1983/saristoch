import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Grant from './components/Grant/Grant';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Grant />
    </div>
  );
}

export default App;
