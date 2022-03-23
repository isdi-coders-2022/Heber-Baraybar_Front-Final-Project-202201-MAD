import React from 'react';
import './from.login.header.scss';

function FormLoginHeader(): JSX.Element {
  return (
    <div className="form">
      <p className="form__title-login">LOGIN</p>
      <input type="name" placeholder="name" />
      <input type="password" placeholder="password" />
      <button type="submit" className="form__button-go">
        GO
      </button>
    </div>
  );
}
export default FormLoginHeader;
