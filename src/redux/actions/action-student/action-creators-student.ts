import actionTypesStudent from './action-types-student';

export const login = (user: string) => ({
  type: actionTypesStudent.login,
  payload: user,
});

export const logout = () => ({
  type: actionTypesStudent.logout,
});
