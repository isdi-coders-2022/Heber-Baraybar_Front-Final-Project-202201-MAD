import React, { useState } from 'react';
import { studentI } from '../../iterface/interfaces';
import './student.register.scss';

function StudentRegister(): JSX.Element {
  const initialState: studentI = {
    name: '',
    email: '',
    country: '',
    city: '',
    languages: [],
    image: '',
    video: '',
    comment: '',
    password: '',
  };

  const [formState, setFormState] = useState(initialState);
  function handleChange(ev: any) {
    if (ev.target.name === 'languages') {
      setFormState({
        ...formState,
        languages: [...formState.languages, ev.target.value],
      });
    } else {
      setFormState({ ...formState, [ev.target.name]: ev.target.value });
    }
  }

  return (
    <form className="form-register-student" action="">
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

      <input
        type="text"
        name="country"
        placeholder="  where country are you from"
        value={formState.country}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="city"
        placeholder="  where city are you from"
        value={formState.city}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="languages"
        placeholder="  what languages do you speak?"
        value={formState.languages}
        onChange={handleChange}
        required
      />
      <input
        type="text"
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
