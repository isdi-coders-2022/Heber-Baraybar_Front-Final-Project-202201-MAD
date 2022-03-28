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
  TeacherBooked: [],
  isLogged: false,
};
// eslint-disable-next-line default-param-last
function userTeacherReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case actionTypesTeacher.registerTeacher:
      return { ...action.payload };

    case actionTypesTeacher.loginTeacher:
      return { ...action.payload, isLogged: true };

    case actionTypesTeacher.logout:
      return initialState;

    case actionTypesTeacher.addFavorites:
      return {
        ...state,
        favorites: action.payload.favorites,
      };

    default:
      return state;
  }
}
export default userTeacherReducer;
