import React from 'react';
// import { useDispatch } from 'react-redux';
// import { logout } from '../../../redux/actions/action-student/action-creators-student';
import './logged.student.scss';

// import { useSelector } from 'react-redux';
// import { RootState } from '../../../redux/store/store';

function LoggedStudent({ student }: { student: any }): JSX.Element {
  // const dispatch = useDispatch();
  // const handleClick = () => {
  //   dispatch(logout());
  // };

  return (
    <div className="logged">
      <div className="logged__container-name">
        <div className="logged__name">
          <p>Hi, {student.name}</p>
          <img
            className="logged__image"
            src={student.image}
            alt={student.userName}
          />
        </div>
        <button className="logged__button" type="button">
          Logout
        </button>
      </div>
    </div>
  );
}
export default LoggedStudent;
