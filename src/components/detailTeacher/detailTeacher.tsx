import React, { useEffect, useState } from 'react';
import './detail.teacher.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TeacherCard from '../teacher.card/teacher.card';
import { getTeacher } from '../../services/api';
import { teacherI } from '../../iterface/interfaces';
import { RootState } from '../../redux/store/store';

function Teacher(): JSX.Element {
  const [teacher, setTeacher] = useState({});
  const { id } = useParams();
  const student = useSelector((state: RootState) => state.student);
  console.log('soy student', student);

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
        <TeacherCard teacher={teacher as teacherI} />
      </div>
      {/* <div className="getTeacher__video">{teacher?.video}</div> */}
      <span className="allTeachers__button">
        <Link to={`/favorites/${id}`}>
          <button type="button">Your Teachers</button>
        </Link>
      </span>
    </div>
  );
}
export default Teacher;
