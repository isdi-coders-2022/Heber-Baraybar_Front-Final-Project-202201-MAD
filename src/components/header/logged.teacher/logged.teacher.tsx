import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/action-teacher/action-creators-teachers';
import './logged.teacher.scss';

function LoggedTeacher({ teacher }: { teacher: any }): JSX.Element {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className="logged">
      <div className="logged__container-name">
        <div className="logged__name">
          <p>Hi, {teacher.userName}</p>
          <img
            className="logged__image"
            src={teacher.image}
            alt={teacher.name}
          />
        </div>
        <button className="logged__button" type="button" onClick={handleClick}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default LoggedTeacher;
