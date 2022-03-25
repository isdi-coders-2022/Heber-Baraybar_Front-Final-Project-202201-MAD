import { AnyAction } from '@reduxjs/toolkit';
import actionTypesTeacher from './action-types-teacher';

const initialState = {
  userName: '',
  id: '',
  email: '',
  country: [],
  city: '',
  languages: [],
  speciality: [],
  price: '',
  image: '',
  video: '',
  comment: '',
  password: '',
  reviews: '',
  studentBooked: [],
  isLogged: false,
};

// eslint-disable-next-line default-param-last
function userTeacherReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case actionTypesTeacher.login:
      // eslint-disable-next-line no-param-reassign
      state = { ...action.payload, isLogged: true };
      return state;
    case actionTypesTeacher.logout:
      // eslint-disable-next-line no-param-reassign
      state = initialState;
      return state;
    case actionTypesTeacher.registerTeacher:
      // eslint-disable-next-line no-param-reassign
      state = { ...action.payload };
      return state;
    case actionTypesTeacher.deleteTeacher:
      // eslint-disable-next-line no-param-reassign
      state = { ...action.payload };
      return state;
    case actionTypesTeacher.updateTeacher:
      // eslint-disable-next-line no-param-reassign
      state = { ...action.payload };
      return state;
    default:
      return state;
  }
}
export default userTeacherReducer;
