import React from 'react';
import './teacher.card.scss';

function TeacherCard(): JSX.Element {
  return (
    <div className="teacher-card">
      <img src="https://elgourmet.s3.amazonaws.com/chef/chef_cover_qEs12jWCOCINEROStIQIK1U.jpg" className="teacher-card__chef" alt="" />
      <p className="teacher-card__text">
        Hi my name`s John i love cooking
        i will teach my secrets receipes.

      </p>
      <img src="https://www.hogarmania.com/archivos/201905/ramen-xl-668x400x80xX.jpg" alt="" className="teacher-card__plate" />
    </div>

  );
}
export default TeacherCard;
