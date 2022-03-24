import React from 'react';
import './teacher.card.scss';

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
          <button type="submit">Book</button>
          <span>🖤</span>
        </div>
      </div>
    </div>
  );
}
export default TeacherCard;
