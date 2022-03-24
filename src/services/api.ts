import axios, { AxiosResponse } from 'axios';

const LOGIN_API = 'http://localhost:5000/login/';

const REGISTER_TEACHER = 'http://localhost:5000/teacher/register';
const REGISTER_STUDENT = 'http://localhost:5000/student/register';
const TEACHERS = 'http://localhost:5000/user/teacher';
const TEACHERS_FAVORITES = 'http://localhost:5000/:id/favorites';

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
export function addFavorites(): Promise<AxiosResponse> {
  return axios.patch(TEACHERS_FAVORITES);
}
