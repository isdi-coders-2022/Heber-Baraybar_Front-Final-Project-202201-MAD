import React from 'react';
import './student.register.scss';

function StudentRegister(): JSX.Element {
  return (
    <form className="form-register-student" action="">
      <h2>For Students</h2>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <input type="text" placeholder="repeat your password" />
      <input type="text" placeholder="where are you from" />
      <input type="text" placeholder="what languages do you speak?" />
      <input type="text" placeholder="tell us something about yourself" />
      <button type="submit">SUBMIT</button>
    </form>

  );
}
export default StudentRegister;
