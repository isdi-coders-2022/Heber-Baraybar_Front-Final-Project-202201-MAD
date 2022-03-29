import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { studentI } from '../../iterface/interfaces';
import { login } from '../../redux/actions/action-student/action-creators-student';
import { registerStudent } from '../../services/api';
import { app } from '../../firebase/fileUpload';
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
  const storage = getStorage(app);
  const [image, setImage] = useState<any>(null);

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

  async function handleSubmit(ev: any) {
    ev.preventDefault();
    let url = '';
    const imageRef = ref(storage, image.name);
    await uploadBytes(imageRef, image);
    url = await getDownloadURL(imageRef);
    console.log(url);
    setFormState({
      ...formState,
      image: url,
      [ev.target.image]: ev.target.value,
    });
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
        {/* <option value="">select your country</option> */}
        <option value="Spain">Spain</option>
        <option value="United States">United States</option>
        <option value="China">China</option>
        <option value="India">India</option>
        <option value="Italy">Italy</option>
      </select>

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
      <input
        type="file"
        onChange={(e: any) => setImage(e.target.files[0])}
        name="image"
        placeholder="  photo"
        required
      />

      <button type="submit">SUBMIT</button>
    </form>
  );
}
export default StudentRegister;
