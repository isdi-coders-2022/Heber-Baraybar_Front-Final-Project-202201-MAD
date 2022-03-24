export interface ActionTypes {
  login: string;
  logout: string;
  register: string;
}

const actionTypesUser: ActionTypes = {
  login: '@user/login',
  logout: '@user/logout',
  register: '@user/register',
};
export default actionTypesUser;
