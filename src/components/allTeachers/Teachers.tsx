/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import './allTeachers.scss';
import { Link, useParams } from 'react-router-dom';
import TeacherCard from '../teacher.card/teacher.card';
import { getAllTeachers } from '../../services/api';
import { teacherI } from '../../iterface/interfaces';

function Teachers(): JSX.Element {
  const [teachers, setTeachers] = useState([]);
  const { id } = useParams();
  // console.log(student.id, ' id');

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
          <>
            <TeacherCard teacher={item as teacherI} />
            <Link to={`/teachers/details/${item._id}`}>
              <button type="button">about me</button>
            </Link>
          </>
        ))}
      </div>

      <Link to={`/student/favorites/${id}`}>
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
