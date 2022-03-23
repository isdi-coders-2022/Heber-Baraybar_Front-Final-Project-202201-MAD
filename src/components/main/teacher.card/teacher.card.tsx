import React from 'react';
import './teacher.card.scss';

function TeacherCard(): JSX.Element {
  return (
    <div className="teacher-card">
      <span className="teacher-card__chef">
        <img src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/6concha_4e9bb800_875x540.jpg?alt=media&token=d10ba0b9-8cb9-427e-bdd3-754f336f4239" alt="" />

      </span>
      <div className="teacher-container">

        <div className="group1">
          <div className="group1__data-teacher">
            <h2>Concha</h2>
            <span>flag</span>
          </div>
          <span className="group1__price">13/h</span>
        </div>

        <div className="group2">

          <div className="group2__speciality">
            <h2>Speciality</h2>
            <p>Marroccan Food</p>
          </div>

          <div className="group2__languages">
            <h2>Speaks</h2>
            <p>English, Arabic</p>
          </div>
          <span className="group2__star">X</span>
        </div>
        <div className="group3">
          <p className="group3__text">
            Hi my name`s John i love cooking
            i will teach my secrets receipes.
          </p>
          <span>heart</span>

        </div>

        <span className="teacher-card__button">
          <button type="submit">Book</button>
        </span>
      </div>
    </div>

  );
}
export default TeacherCard;
