import React, { useEffect, useState } from 'react';
import './Home.scss';
import Works from '../works/how.works';
import TeacherCard from '../teacher.card/teacher.card';
import { getAllTeachers } from '../../services/api';
import ButtonMeet from '../button.meetOurChef/button.meet.our.chefs';

function Main() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getAllTeachers().then((resp) => {
      console.log(resp.data);
      setTeachers(resp.data);
    });
  }, []);

  return (
    <div className="main">
      <h1>Have fun and learn with native cooks</h1>
      <Works />
      <div className="teacher-presentation">
        <div className="teacher-presentation__cards">
          {teachers.map(
            (item, index) => index <= 2 && <TeacherCard teacher={item} />
          )}
        </div>
        <span className="teacher-presentation__calendary">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/calendary.png?alt=media&token=daa9b518-2e01-4f28-89c8-3eee31c24fb9"
            alt=""
          />
        </span>
      </div>
      <ButtonMeet />

      <span className="main__couple">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/kukify.appspot.com/o/online-couple.jpg?alt=media&token=62d5ce97-65fd-4298-94ac-3e90e2f3e69c"
          alt=""
        />
      </span>
    </div>
  );
}
export default Main;
