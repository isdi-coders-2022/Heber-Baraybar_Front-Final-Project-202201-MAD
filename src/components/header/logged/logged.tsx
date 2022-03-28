import React from 'react';
import './logged.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

function LoggedTeacher(): JSX.Element {
  return (
    <div className="logged">
      <p>Hi</p>
      <span>
        <FontAwesomeIcon icon={faArrowRightToBracket} />
      </span>
    </div>
  );
}
export default LoggedTeacher;
