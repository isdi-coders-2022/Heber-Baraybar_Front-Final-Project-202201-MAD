import React from 'react';
import './logged.teacher.scss';

// import { useSelector } from 'react-redux';
// import { RootState } from '../../../redux/store/store';

function LoggedTeacher({ teacher }: { teacher: any }): JSX.Element {
  //  const isLoggedStudent = useSelector((state: RootState) => {
  //    state.student;
  //  });
  // const isLoggedTeacher = useSelector((state: RootState) => state.teacher);
  // console.log('este es mi selector', isLoggedStudent);

  return (
    <div className="logged">
      <div className="logged__container-name">
        <div className="logged__name">
          <p>Hi, {teacher.userName}</p>
          <img
            className="logged__image"
            src={teacher.image}
            alt={teacher.userName}
          />
        </div>
        <button className="logged__button" type="button">
          Logout
        </button>
      </div>
    </div>
  );
}
export default LoggedTeacher;
