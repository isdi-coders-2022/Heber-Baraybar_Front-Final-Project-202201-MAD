export interface ActionTypes {
  login: string;
  logout: string;
  registerTeacher: string;
  updateTeacher: string;
  deleteTeacher: string;
}

const actionTypesTeacher: ActionTypes = {
  login: '@user/login',
  logout: '@userTeacher/logout',
  registerTeacher: '@userTeacher/registerTeacher',
  updateTeacher: '@userTeacher/updateTeacher',
  deleteTeacher: '@userTeacher/deleteTeacher',
};
export default actionTypesTeacher;
