import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.main/header';
import Footer from './components/footer/footer';
import Home from './components/main/Home';
import Register from './components/register/register';
import Favorites from './components/favorites/favorites';
import Teachers from './components/allTeachers/Teachers';
import Teacher from './components/detailTeacher/detailTeacher';
import Booking from './components/booking/booking';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/details/:id" element={<Teacher />} />
          <Route path="/favorites/:id" element={<Favorites />} />
          <Route path="/booking/:id" element={<Booking />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
