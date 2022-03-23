import React from 'react';
import './App.css';
import Header from './components/header/header.main/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import TeacherRegister from './components/register/register';
import FavoriteCard from './components/card.teacher.favorites.scss';

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
