import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Grant from './components/Grant/Grant';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Nav />
        <Grant />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
