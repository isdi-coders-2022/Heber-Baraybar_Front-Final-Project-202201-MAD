import axios, { AxiosResponse } from 'axios';

const LOGIN_API = 'http://localhost:5000/user/student/login';

const REGISTER_TEACHER = 'http://localhost:5000/user/teacher/register';
const REGISTER_STUDENT = 'http://localhost:5000/user/student/register';
const TEACHERS = 'http://localhost:5000/user/teacher';

export function login(user: any): Promise<AxiosResponse> {
  return axios.post(LOGIN_API, user);
}

export function registerTeacher(user: any): Promise<AxiosResponse> {
  return axios.post(REGISTER_TEACHER, user);
}
export function registerStudent(user: any): Promise<AxiosResponse> {
  return axios.post(REGISTER_STUDENT, user);
}
export function getAllTeachers(): Promise<AxiosResponse> {
  return axios.get(TEACHERS);
}
export function getStudent(id: string): Promise<AxiosResponse> {
  const STUDENT = `http://localhost:5000/user/teacher/${id}`;
  return axios.get(STUDENT);
}

export function getTeacher(id: string): Promise<AxiosResponse> {
  const TEACHER = `http://localhost:5000/user/teacher/${id}`;
  return axios.get(TEACHER);
}
export function addFavorites(id: string): Promise<AxiosResponse> {
  const TEACHERS_FAVORITES = `http://localhost:5000/${id}/favorites`;
  // headers: {
  //     Authorization: Bearer ${getToken()},
  //   },

  return axios.patch(TEACHERS_FAVORITES);
}
