/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import './teacher.favorite.card.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { addFavorites } from '../../services/api';
import { teacherI } from '../../iterface/interfaces';

function FavoriteCard({
  teacher,
  remove,
}: {
  teacher: teacherI;
  remove: (teacher: teacherI) => void;
}): JSX.Element {
  console.log('Teacher favorite ', teacher, ' de la tarjeta');

  function removeFromFavorites(id: string) {
    console.log('Llega esta id :', id);
    remove(teacher);
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
          <p>{teacher.languages?.map((item: string) => `${item} `)}</p>
        </div>

        <span className="card-favorite__delete">
          <span>{teacher.country}</span>

          <FontAwesomeIcon
            icon={faTrashCan}
            type="button"
            onClick={() => removeFromFavorites(teacher._id)}
          />
        </span>
        <div>
          <Link to={`/booking/${teacher._id}`}>
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
