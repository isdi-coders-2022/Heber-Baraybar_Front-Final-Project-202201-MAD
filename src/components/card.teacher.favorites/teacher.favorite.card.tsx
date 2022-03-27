import React from 'react';
import './teacher.favorite.card.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function FavoriteCard({ teacher }: { teacher: any }): JSX.Element {
  return (
    <div className="card-favorite">
      <h3>{teacher.name}</h3>
      <img className="card-favorite__img" src={teacher.image} alt="" />
      <div className="card-favorite__name">
        <span>🏳</span>
      </div>
      <span className="card-favorite__star">⭐5</span>
      <div className="card-favorite__languages">
        <p>{teacher.languages.map((item: { item: any }) => `${item} `)}</p>
        <span>
          <FontAwesomeIcon icon={faTrashCan} />
        </span>
      </div>
      <div className="card-favorite__book">
        <Link to="/booking">
          <button type="submit">Book</button>
        </Link>
      </div>
    </div>
  );
}
export default FavoriteCard;
