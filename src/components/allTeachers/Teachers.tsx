import React, { useEffect, useState } from 'react';
import './allTeachers.scss';

import TeacherCard from '../teacher.card/teacher.card';
import { getAllTeachers } from '../../services/api';

function Teachers(): JSX.Element {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getAllTeachers().then((resp) => {
      console.log(resp.data);
      setTeachers(resp.data);
    });
  }, []);

  return (
    <div className="allTeachers">
      <h2 className="allTeachers__title">Meet our teachers</h2>
      <div className="allTeachers__card">
        {teachers.map((item) => (
          <TeacherCard teacher={item} />
        ))}
      </div>
      <span className="allTeachers__button">
        <button type="submit">Your Teachers</button>
      </span>
    </div>
  );
}
export default Teachers;
