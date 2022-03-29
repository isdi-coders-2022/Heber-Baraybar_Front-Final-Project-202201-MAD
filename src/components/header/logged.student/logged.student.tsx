import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/action-student/action-creators-student';
import './logged.student.scss';

// import { useSelector } from 'react-redux';
// import { RootState } from '../../../redux/store/store';

function LoggedStudent({ student }: { student: any }): JSX.Element {
  //  const isLoggedStudent = useSelector((state: RootState) => {
  //    state.student;
  //  });
  // const isLoggedTeacher = useSelector((state: RootState) => state.teacher);
  // console.log('este es mi selector', isLoggedStudent);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className="logged">
      <div className="logged__container-name">
        <div className="logged__name">
          <p>Hi, {student.userName}</p>
          <span className="logged__image">{student.image}</span>
        </div>

        <button className="logged__button" type="button" onClick={handleClick}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default LoggedStudent;
