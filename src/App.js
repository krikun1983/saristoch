import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Grant from './components/Grant/Grant';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Grant />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
