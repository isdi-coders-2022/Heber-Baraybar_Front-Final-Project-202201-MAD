import React from 'react';
import './header.scss';
import FormLoginHeader from '../login/form.login.header';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/LOGO.png?alt=media&token=b5cba43c-47e6-4a51-892e-9387c82f6d4c"
          alt="img-logo"
        />
      </div>
      <div className="header__teach-learn">
        <p className="header__learn">
          <a href="#s">Want to learn how to cook?</a>
        </p>
        <p className="header__teach">
          <a href="#s">Want to teach how to cook?</a>
        </p>
      </div>

      <div>
        <FormLoginHeader />
        <button type="submit" className="header__button-signin">
          SIGN IN
        </button>
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
