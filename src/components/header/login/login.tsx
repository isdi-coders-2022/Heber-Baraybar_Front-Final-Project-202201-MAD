import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginStudentI, loginTeacherI } from '../../../iterface/interfaces';
import { loginStudent, loginTeacher } from '../../../services/api';
import * as action from '../../../redux/actions/action-student/action-creators-student';
import * as actions from '../../../redux/actions/action-teacher/action-creators-teachers';
import './login.scss';

function Login() {
  const [useForm, setUserForm] = useState<loginStudentI>({
    name: '',
    password: '',
  });
  const [useTeacherForm, setTeacherForm] = useState<loginTeacherI>({
    name: '',
    password: '',
  });
  const dispatch = useDispatch();
  function handleChange(ev: any) {
    setUserForm({ ...useForm, [ev.target.name]: ev.target.value });
    setTeacherForm({ ...useTeacherForm, [ev.target.name]: ev.target.value });
  }

  async function handleSubmitStudent() {
    console.log('STUDENT LOGIN');

    try {
      const result = await loginStudent(useForm);

      console.log(result);
      localStorage.setItem('token', result.data.token);
      dispatch(action.login({ ...result.data, isLogged: true }));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmitTeacher() {
    console.log('TEACHER LOGIN');

    try {
      const result = await loginTeacher(useTeacherForm);
      console.log(result);
      localStorage.setItem('token', result.data.token);

      dispatch(actions.loginTeacher({ ...result.data, isLogged: true }));
      console.log(result.data, 'RESULT DATA E LOGIN DE TEACHER');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="form">
      <p className="form__title-login">LOGIN</p>
      <input
        type="name"
        placeholder="name"
        name="name"
        value={useForm.name}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={useForm.password}
        onChange={handleChange}
      />
      <button
        type="button"
        className="form__button"
        onClick={handleSubmitStudent}
      >
        Student
      </button>

      <button
        type="button"
        className="form__button"
        onClick={handleSubmitTeacher}
      >
        Teacher
      </button>
    </form>
  );
}
export default Login;
