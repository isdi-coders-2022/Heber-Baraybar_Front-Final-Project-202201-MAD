import React from 'react';
import '../styles/header.scss';

function Header(): JSX.Element {
  return (
    <header className="app-header">
      <div>
        <img src="" alt="" />
        LOGO
      </div>
      <div>
        <a href="#s">Want to learn how to cook?</a>
        <a href="#s">Want to teach how to cook?</a>
      </div>
      <div>
        <p>Login</p>
        <input type="name" placeholder="name" />
        <input type="password" placeholder="password" />
        <button type="submit">GO</button>
      </div>
      <div>SIGN IN</div>
    </header>
  );
}
export default Header;
