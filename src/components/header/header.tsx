import React from 'react';
import './header.scss';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div>
        <img src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/LOGO.png?alt=media&token=b5cba43c-47e6-4a51-892e-9387c82f6d4c" className="header__logo" alt="" />

      </div>
      <div className="header_teach-learn">
        <p className="header__learn">
          <a href="#s">Want to learn how to cook?</a>
        </p>
        <p className="header__teach">
          <a href="#s">Want to teach how to cook?</a>
        </p>
      </div>
      <div className="form">
        <p className="form__title-login">LOGIN</p>
        <input type="name" placeholder="name" />
        <input type="password" placeholder="password" />
        <button type="submit" className="header__button-go">GO</button>
      </div>
      <div>
        <button type="submit" className="header__button-signin">SIGN IN</button>
      </div>
    </header>
  );
}
export default Header;
