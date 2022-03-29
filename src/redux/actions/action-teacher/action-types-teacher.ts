export interface ActionTypes {
  loginTeacher: string;
  logout: string;
  registerTeacher: string;
  updateTeacher: string;
  deleteTeacher: string;
  addFavorites: string;
}

const actionTypesTeacher: ActionTypes = {
  loginTeacher: '@user/loginteacher',
  logout: '@userTeacher/logout',
  registerTeacher: '@userTeacher/registerTeacher',
  updateTeacher: '@userTeacher/updateTeacher',
  deleteTeacher: '@userTeacher/deleteTeacher',
  addFavorites: '@teachers/favorites',
};
export default actionTypesTeacher;
