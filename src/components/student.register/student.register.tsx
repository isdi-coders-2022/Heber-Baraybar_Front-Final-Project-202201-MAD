import React from 'react';
import './student.register.scss';

function StudentRegister(): JSX.Element {
  return (
    <form className="form-register-student" action="">
      <h2>For Students</h2>
      <input type="mail" placeholder="  email" required />
      <input type="password" placeholder="  password" required />
      <input type="password" placeholder="  repeat your password" required />
      <input type="text" placeholder="  where are you from" required />
      <input
        type="text"
        placeholder="  what languages do you speak?"
        required
      />
      <input
        type="text"
        placeholder="  tell us something about yourself"
        required
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
export default StudentRegister;
