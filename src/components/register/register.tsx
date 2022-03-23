import React from 'react';
import './register.scss';
import StudentRegister from '../student.register/student.register';
import TeacherRegister from '../teacher.register/teacher.register';

function Register() : JSX.Element {
  return (

    <div className="register">
      <StudentRegister />

      <TeacherRegister />

    </div>
  );
}

export default Register;
