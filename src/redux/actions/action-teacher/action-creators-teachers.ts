import { actionI } from '../../../iterface/interfaces';
import actionTypesTeacher from './action-types-teacher';

export const login = (user: object): actionI => ({
  type: actionTypesTeacher.login,
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
