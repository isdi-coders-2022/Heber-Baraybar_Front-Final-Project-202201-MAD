import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__contact">
        <h3>CONTACT</h3>
        <p>Viriato 20</p>
        <p>28010</p>
        <p>Madrid-Spain</p>
        <p>+34 978773444</p>
      </div>
      <div className="footer__learn">
        <h3>WANT TO LEARN</h3>
        <p>
          <a href="#s">How it works?</a>
        </p>
        <p>
          <a href="#s">How much we charge?</a>
        </p>
        <p>
          <a href="#s">Leave a review</a>
        </p>
      </div>
      <div className="footer__teach">
        <h3>WANT TO TEACH</h3>
        <p>
          <a href="#s">How it works?</a>
        </p>
        <p>
          <a href="#s">How much we charge?</a>
        </p>
        <p>
          <a href="#s">Leave a review</a>
        </p>
      </div>
    </div>
  );
}
export default Footer;
