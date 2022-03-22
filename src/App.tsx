import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
