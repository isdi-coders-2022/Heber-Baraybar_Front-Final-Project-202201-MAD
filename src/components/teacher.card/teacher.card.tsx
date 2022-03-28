/* eslint-disable no-underscore-dangle */
import React from 'react';
import './teacher.card.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { teacherI } from '../../iterface/interfaces';

function TeacherCard({ teacher }: { teacher: teacherI }): JSX.Element {
  console.log('Teacher ', teacher, ' de la tarjeta');

  return (
    <div className="teacher-card">
      <div className="teacher-card__data">
        <img src={teacher.image} alt="" />
        <div className="teacher-card__data-price">
          <span>{teacher.price}/h</span>
          <span>⭐5</span>
        </div>

        <Link to={`/booking/${teacher._id}`}>
          <button className="button-book" type="submit">
            Book
          </button>
        </Link>
      </div>

      <div className="teacher-card__details">
        <div className="teacher-card__name">
          <h2>{teacher.name}</h2>
          <span className="teacher-card__country-country">
            I`m from {teacher.country}
          </span>
          <span>
            <button className="heart" type="submit">
              <Link to={`/teacher/favorite/${teacher._id}`}>
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
              </Link>
            </button>
          </span>
        </div>

        <p className="teacher-card__details-text">{teacher.comment}</p>
        <div className="teacher-card__habilities">
          <div className="teacher-card__habilities-speciality">
            <h2>Speciality</h2>
            <p>
              {teacher.speciality?.map((item: { item: any }) => `${item} `)}
            </p>
          </div>
          <div className="teacher-card__habilities-languages">
            <h2>Speaks</h2>
            {teacher.languages?.map((item: { item: any }) => `${item} `)}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeacherCard;
