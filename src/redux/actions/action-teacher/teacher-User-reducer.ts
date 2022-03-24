import { AnyAction } from '@reduxjs/toolkit';
import actionTypesTeacher from './action-types-teacher';

const initialState = {
  token: '',
  userName: '',
  id: '',
  isLogged: false,
};

function userTeacherReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case actionTypesTeacher.login:
      state = { ...action.payload, isLogged: true };
      return state;
    case actionTypesTeacher.logout:
      state = initialState;
      return state;
    default:
      return state;
  }
}
export default userTeacherReducer;
