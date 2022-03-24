export interface ActionTypes {
  login: string;
  logout: string;
  registerStudent: string;
  updateStudent: string;
  deleteStudent: string;
}

const actionTypesStudent: ActionTypes = {
  login: '@user/login',
  logout: '@userStudent/logout',
  registerStudent: '@userStudent/registerStudent',
  updateStudent: '@userStudent/updateStudent',
  deleteStudent: '@userStudent/deleteStudent',
};
export default actionTypesStudent;
