import React from 'react';
import { Link } from 'react-router-dom';
import './button.meet.our.chefs.scss';

function ButtonMeet(): JSX.Element {
  return (
    <div className="button-chef">
      <Link to="/teachers">
        <button type="submit">MEET OUR CHEFS</button>
      </Link>
    </div>
  );
}
export default ButtonMeet;
