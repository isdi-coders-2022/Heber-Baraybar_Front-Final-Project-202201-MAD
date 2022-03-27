import React, { useEffect, useState } from 'react';
import './detail.teacher.scss';
import { Link, useParams } from 'react-router-dom';
import TeacherCard from '../teacher.card/teacher.card';
import { getTeacher } from '../../services/api';

function Teacher(): JSX.Element {
  const [teacher, setTeacher] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getTeacher(id as string).then((resp) => {
      console.log(resp.data);
      setTeacher(resp.data);
    });
  }, []);

  return (
    <div className="getTeacher">
      <h2 className="getTeacher__title">Hi i`m </h2>
      <div className="getTeacher__card">
        <TeacherCard teacher={teacher} />
      </div>
      <span className="allTeachers__button">
        <Link to="/teachers/favorites">
          <button type="submit">Your Teachers</button>
        </Link>
      </span>
    </div>
  );
}
export default Teacher;
