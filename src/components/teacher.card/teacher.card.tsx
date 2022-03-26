import React from 'react';
import './teacher.card.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

function TeacherCard({ teacher }: { teacher: any }): JSX.Element {
  return (
    <div className="teacher-card">
      <div className="teacher-card__data">
        <h2>{teacher.name}</h2>
        <img src={teacher.image} alt="" />
        <div className="teacher-card__data-name">
          <span>{teacher.country}</span>
          <span>{teacher.price}/h</span>
        </div>

        <span>⭐5</span>
      </div>

      <div className="teacher-card__details">
        <p className="teacher-card__details-text">{teacher.comment}</p>
        <div className="teacher-card__habilities">
          <div className="teacher-card__habilities-speciality">
            <h2>Speciality</h2>
            <p>{teacher.speciality.map((item: { item: any }) => `${item} `)}</p>
          </div>
          <div className="teacher-card__habilities-languages">
            <h2>Speaks</h2>
            <p>{teacher.languages.map((item: { item: any }) => `${item} `)}</p>
          </div>
        </div>
        <div className="teacher-card__habilities-book">
          <Link to="/booking">
            <button className="button-book" type="submit">
              Book
            </button>
          </Link>
          <span>
            <button type="submit">
              <FontAwesomeIcon icon={solidHeart} />
            </button>
          </span>
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
      </div>
    </div>
  );
}
export default TeacherCard;
