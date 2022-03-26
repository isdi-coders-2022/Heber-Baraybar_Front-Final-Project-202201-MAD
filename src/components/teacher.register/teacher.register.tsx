import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { teacherI } from '../../iterface/interfaces';
import { loginTeacher } from '../../redux/actions/action-teacher/action-creators-teachers';
import { registerTeacher } from '../../services/api';
// import { app } from '../../firebase/fileUpload';
import './teacher.register.scss';

function teacherRegister(): JSX.Element {
  const initialState: Partial<teacherI> = {
    name: '',
    email: '',
    country: '',
    city: '',
    languages: [],
    speciality: [],
    price: 0,
    image: '',
    video: '',
    comment: '',
    password: '',
  };
  // const storage = getStorage(app);
  // const [image, setImage] = useState<any>(null);
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
    // let url = '';
    // const imageRef = ref(storage, image.name);
    // await uploadBytes(imageRef, image);
    // url = await getDownloadURL(imageRef);
    // console.log(url);
    // setFormState({
    //   ...formState,
    //   image: url,
    //   [ev.target.image]: ev.target.value,
    // });

    registerTeacher(formState).then((resp) => {
      console.log(resp);
      dispatch(loginTeacher(resp.data));
    });
  }
  return (
    <form onSubmit={handleSubmit} className="form-register-teacher" action="">
      <h2>For teachers</h2>
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
      <select name="country" value={formState.country} onChange={handleChange}>
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
      {/* <input
        type="text"
        name="country"
        placeholder="  where country are you from"
        value={formState.country}
        onChange={handleChange}
        required
      /> */}

      <select
        name="languages"
        value={formState.languages}
        onChange={handleChange}
      >
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
      <input
        type="text"
        name="speciality"
        placeholder="  what are your specialities"
        value={formState.speciality}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="  hourly pricing"
        value={formState.price}
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
        type="text"
        name="comment"
        placeholder="  tell us something about yourself"
        value={formState.comment}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        // onChange={(e: any) => setImage(e.target.files[0])}
        name="image"
        placeholder="  photo"
        value={formState.image}
        onChange={handleChange}
        required
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
export default teacherRegister;
