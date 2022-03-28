import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { studentI } from '../../iterface/interfaces';
import { login } from '../../redux/actions/action-student/action-creators-student';
import { registerStudent } from '../../services/api';
import './student.register.scss';

function StudentRegister(): JSX.Element {
  const initialState: Partial<studentI> = {
    name: '',
    email: '',
    country: '',
    city: '',
    languages: [],
    comment: '',
    password: '',
  };

  const [formState, setFormState] = useState(initialState);

  const dispatch = useDispatch();

  function handleChange(ev: any) {
    if (ev.target.name === 'languages') {
      setFormState({
        ...formState,
        languages: [...(formState.languages as string[]), ev.target.value],
      });
    } else {
      setFormState({ ...formState, [ev.target.name]: ev.target.value });
    }
  }

  function handleSubmit(ev: any) {
    ev.preventDefault();
    registerStudent(formState).then((resp) => {
      console.log(resp);

      dispatch(login(resp.data));
    });
  }

  return (
    <form onSubmit={handleSubmit} className="form-register-student" action="">
      <h2>For Students</h2>
      <input
        type="name"
        name="name"
        placeholder="  name"
        required
        value={formState.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="  email"
        required
        value={formState.email}
        onChange={handleChange}
      />
      <select
        name="country"
        value={formState.languages}
        onChange={handleChange}
        required
      >
        <option value="">select your country</option>
        <option value="Spain">Spain</option>
        <option value="United States">United States</option>
        <option value="China">China</option>
        <option value="India">India</option>
        <option value="Italy">Italy</option>
      </select>
      {/* <input
        type="text"
        name="country"
        placeholder="  where country are you from"
        value={formState.country}
        onChange={handleChange}
        required
      /> */}
      <input
        type="text"
        name="city"
        placeholder="  where city are you from"
        value={formState.city}
        onChange={handleChange}
        required
      />
      <select
        name="languages"
        value={formState.languages}
        onChange={handleChange}
        required
      >
        <option value="">Languages</option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="Chinese">Chinese</option>
        <option value="French">French</option>
        <option value="Italian">Italian</option>
      </select>
      {/* <input
        type="text"
        name="languages"
        placeholder="  what languages do you speak?"
        value={formState.languages}
        onChange={handleChange}
        required
      /> */}
      <textarea
        name="comment"
        placeholder="  tell us something about yourself"
        value={formState.comment}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="  password"
        value={formState.password}
        onChange={handleChange}
        required
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
export default StudentRegister;
