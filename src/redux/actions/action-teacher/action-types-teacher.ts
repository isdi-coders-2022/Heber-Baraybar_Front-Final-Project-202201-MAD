export interface ActionTypes {
  login: string;
  logout: string;
  registerTeacher: string;
  updateTeacher: string;
  deleteTeacher: string;
  addFavorites: string;
}

const actionTypesTeacher: ActionTypes = {
  login: '@user/login',
  logout: '@userTeacher/logout',
  registerTeacher: '@userTeacher/registerTeacher',
  updateTeacher: '@userTeacher/updateTeacher',
  deleteTeacher: '@userTeacher/deleteTeacher',
  addFavorites: '@teachers/favorites',
};
export default actionTypesTeacher;
