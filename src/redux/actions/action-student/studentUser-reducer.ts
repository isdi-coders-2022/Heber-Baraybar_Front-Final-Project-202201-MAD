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

// eslint-disable-next-line default-param-last
function userStudentReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case actionTypesStudent.registerStudent:
      return { ...action.payload };

    case actionTypesStudent.login:
      return { ...action.payload, isLogged: true };

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
