import actionTypesTeacher from './action-types-teacher';

export const login = (user: string) => ({
  type: actionTypesTeacher.login,
  payload: user,
});

export const logout = () => ({
  type: actionTypesTeacher.logout,
});
