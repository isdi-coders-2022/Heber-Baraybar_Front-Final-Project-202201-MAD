import axios, { AxiosResponse } from 'axios';

const LOGIN_STUDENT = 'http://localhost:5000/user/student/login';
const LOGIN_TEACHER = 'http://localhost:5000/user/teacher/login';

const REGISTER_TEACHER = 'http://localhost:5000/user/teacher/register';
const REGISTER_STUDENT = 'http://localhost:5000/user/student/register';

const TEACHERS = 'http://localhost:5000/user/teacher';

export function loginStudent(user: any): Promise<AxiosResponse> {
  return axios.post(LOGIN_STUDENT, user);
}
export function loginTeacher(user: any): Promise<AxiosResponse> {
  return axios.post(LOGIN_TEACHER, user);
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
  const STUDENT = `http://localhost:5000/user/student/${id}`;
  return axios.get(STUDENT);
}

export function getTeacher(id: string): Promise<AxiosResponse> {
  const TEACHER = `http://localhost:5000/user/teacher/${id}`;

  return axios.get(TEACHER);
}
function getToken() {
  return localStorage.getItem('token');
}
export function addFavorites(id: string): Promise<AxiosResponse> {
  const TEACHERS_FAVORITES = `http://localhost:5000/user/teacher/${id}/favorites`;

  return axios.patch(TEACHERS_FAVORITES, id, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
}
