import { actionI } from '../../../iterface/interfaces';
import actionTypesTeacher from './action-types-teacher';

export const loginTeacher = (user: object): actionI => ({
  type: actionTypesTeacher.loginTeacher,
  payload: user,
});

export const logout = () => ({
  type: actionTypesTeacher.logout,
});

export const register = () => ({
  type: actionTypesTeacher.registerTeacher,
});
export const deleteTeacher = () => ({
  type: actionTypesTeacher.deleteTeacher,
});
export const addFavorites = () => ({
  type: actionTypesTeacher.addFavorites,
});
