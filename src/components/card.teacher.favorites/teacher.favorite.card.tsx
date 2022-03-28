/* eslint-disable no-underscore-dangle */
import React from 'react';
import './teacher.favorite.card.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { addFavorites } from '../../services/api';

function FavoriteCard({ teacher }: { teacher: any }): JSX.Element {
  console.log('Teacher favorite ', teacher, ' de la tarjeta');

  function adFavoritesCard(id: string) {
    console.log('Llega esta id :', id);

    addFavorites(id);
  }
  return (
    <div className="container">
      <div className="card-favorite">
        <div className="card-favorite__name">
          <h3>{teacher.name}</h3>
          <span className="card-favorite__star">⭐5</span>
        </div>
        <img className="card-favorite__img" src={teacher.image} alt="" />
        <div className="card-favorite__languages">
          <p>{teacher.languages.map((item: { item: any }) => `${item} `)}</p>
        </div>
        <span className="card-favorite__delete">
          <span>🏳</span>
          <button type="button" onClick={() => adFavoritesCard(teacher._id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </span>
        <div>
          <Link to="/booking">
            <button className="button-book" type="submit">
              Book
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default FavoriteCard;
