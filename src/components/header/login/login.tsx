import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginI } from '../../../iterface/interfaces';
import { login } from '../../../services/api';
import * as action from '../../../redux/actions/action-student/action-creators-student';

import './login.scss';

function Login() {
  const [useForm, setUserForm] = useState<loginI>({ name: '', password: '' });
  const dispatch = useDispatch();
  function handleChange(ev: any) {
    setUserForm({ ...useForm, [ev.target.name]: ev.target.value });
  }
  async function handleSubmit(ev: any) {
    ev.preventDefault();
    try {
      const result = await login(useForm);
      console.log(result);

      dispatch(action.login({ ...result.data, isLogged: true }));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
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
      <button type="submit" className="form__button-go">
        GO
      </button>
    </form>
  );
}
export default Login;
