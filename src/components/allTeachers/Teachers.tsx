/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import './allTeachers.scss';
import { Link } from 'react-router-dom';
import TeacherCard from '../teacher.card/teacher.card';
import { getAllTeachers } from '../../services/api';
import { teacherI } from '../../iterface/interfaces';

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
        {teachers.map((item: any) => (
          <Link to={`/teachers/details/${item._id}`}>
            <TeacherCard teacher={item as teacherI} />
          </Link>
        ))}
      </div>

      <Link to="/teachers/favorites">
        <span>
          <button className="allTeachers__button" type="submit">
            Your Teachers
          </button>
        </span>
      </Link>
    </div>
  );
}
export default Teachers;
