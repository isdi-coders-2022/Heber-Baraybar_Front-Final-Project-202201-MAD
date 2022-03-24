import { AnyAction } from '@reduxjs/toolkit';
import actionTypesStudent from './action-types-student';

const initialState = {
  token: '',
  userName: '',
  id: '',
  email: '',
  country: [],
  city: '',
  languages: [],
  comment: '',
  password: '',
  favorites: [],
  reviews: '',
  isLogged: false,
};

function userStudentReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case actionTypesStudent.registerStudent:
      return { ...action.payload };

    case actionTypesStudent.login:
      return { ...action.payload };

    case actionTypesStudent.logout:
      return initialState;

    case actionTypesStudent.updateStudent:
      return {
        ...state,
        favorites: action.payload.favorites,
      };
    default:
      return state;
  }
}
export default userStudentReducer;
