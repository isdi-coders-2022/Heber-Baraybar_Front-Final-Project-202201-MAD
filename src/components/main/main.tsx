import React from 'react';
import './main.scss';
import Works from './works/how.works';
import TeacherCard from './teacher.card/teacher.card';

function Main(): JSX.Element {
  return (
    <div className="main">
      <h1>Have fun and learn with native cooks</h1>
      <Works />
      <div className="teacher-presentation">

        <TeacherCard />
        <img src="" alt="" />
      </div>

      <img src="" alt="" />
    </div>
  );
}
export default Main;
