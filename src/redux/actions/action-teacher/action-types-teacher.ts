export interface ActionTypes {
  login: string;
  logout: string;
  register: string;
  update: string;
  delete: string;
}

const actionTypesTeacher: ActionTypes = {
  login: '@user/login',
  logout: '@userTeacher/logout',
  register: '@userTeacher/register',
  update: '@userTeacher/update',
  delete: '@userTeacher/delete',
};
export default actionTypesTeacher;
