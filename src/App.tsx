import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
