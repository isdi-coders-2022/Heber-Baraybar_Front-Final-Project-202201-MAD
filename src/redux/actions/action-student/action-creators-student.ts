import actionTypesStudent from './action-types-student';
import { actionI } from '../../../iterface/interfaces';

export const login = (user: object): actionI => ({
  type: actionTypesStudent.login,
  payload: user,
});

export const logout = () => ({
  type: actionTypesStudent.logout,
});
export const register = () => ({
  type: actionTypesStudent.registerStudent,
});
export const deleteStudent = () => ({
  type: actionTypesStudent.deleteStudent,
});
