import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import Login from '../login/login';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/LOGO.png?alt=media&token=b5cba43c-47e6-4a51-892e-9387c82f6d4c"
            alt="img-logo"
          />
        </Link>
      </div>
      <div className="header__teach-learn">
        <Link to="/register">
          <p className="header__learn">Want to learn how to cook?</p>
        </Link>
        <Link to="/register">
          <p className="header__teach">Want to teach how to cook?</p>
        </Link>
      </div>

      <div>
        <Login />
        <Link to="/register">
          <button type="submit" className="header__button-signin">
            SIGN IN
          </button>
        </Link>
      </div>
      <div className="header__table">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/mesa.jpg?alt=media&token=07045626-51be-4e1a-a278-78af7bd5a202"
          alt=""
        />
      </div>
    </header>
  );
}
export default Header;
