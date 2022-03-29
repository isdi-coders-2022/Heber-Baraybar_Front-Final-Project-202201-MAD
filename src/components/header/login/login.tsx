/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginStudentI, loginTeacherI } from '../../../iterface/interfaces';
import { loginStudent, loginTeacher } from '../../../services/api';
import * as action from '../../../redux/actions/action-student/action-creators-student';
import * as actions from '../../../redux/actions/action-teacher/action-creators-teachers';
import './login.scss';
import { RootState } from '../../../redux/store/store';
import LoggedTeacher from '../logged.teacher/logged.teacher';
import LoggedStudent from '../logged.student/logged.student';

function Login() {
  const isLoggedStudent = useSelector((state: RootState) => state.student);

  const isLoggedTeacher = useSelector((state: RootState) => state.teacher);

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
      setUserForm({
        name: '',
        password: '',
      });
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
      7;
      setTeacherForm({
        name: '',
        password: '',
      });
      console.log(result.data, 'RESULT DATA E LOGIN DE TEACHER');
    } catch (error) {
      console.log(error);
    }
  }

  // eslint-disable-next-line no-nested-ternary
  return !isLoggedTeacher.isLogged && !isLoggedStudent.isLogged ? (
    <div>
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

      <Link to="/register">
        <button type="submit" className="header__button-signin">
          SIGN IN
        </button>
      </Link>
    </div>
  ) : isLoggedTeacher.isLogged ? (
    <LoggedTeacher teacher={isLoggedTeacher} />
  ) : (
    <LoggedStudent student={isLoggedStudent} />
  );
}
export default Login;
