import React from 'react';
import './allTeachers.scss';

import TeacherCard from '../teacher.card/teacher.card';

function Teachers(): JSX.Element {
  return (
    <div className="allTeachers">
      <h2 className="allTeachers__title">Meet our teachers</h2>
      <div className="allTeachers__card">
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </div>
      <span className="allTeachers__button">
        <button type="submit">Your Teachers</button>
      </span>
    </div>
  );
}
export default Teachers;
