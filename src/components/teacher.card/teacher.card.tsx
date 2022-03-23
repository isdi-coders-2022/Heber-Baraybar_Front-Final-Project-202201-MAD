import React from 'react';
import './teacher.card.scss';

function TeacherCard(): JSX.Element {
  return (
    <div className="teacher-card">

      <div className="teacher-card__data">
        <img src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/6concha_4e9bb800_875x540.jpg?alt=media&token=d10ba0b9-8cb9-427e-bdd3-754f336f4239" alt="" />
        <div className="teacher-card__data-name">
          <h2>Concha</h2>
          <span>🚩</span>
        </div>
        <span>⭐5</span>

      </div>

      <div className="teacher-card__details">
        <p className="teacher-card__details-text">
          Hi my name`s John i love cooking
          i will teach my secrets receipes.
        </p>
        <div className="teacher-card__details-habilities">
          <div className="group2__speciality">
            <h2>Speciality</h2>
            <p>Marroccan Food</p>
          </div>
          <div className="group2__languages">
            <h2>Speaks</h2>
            <p>English, Arabic</p>
          </div>
        </div>
        <button type="submit">Book</button>
      </div>

    </div>

  );
}
export default TeacherCard;
