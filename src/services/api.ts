import axios, { AxiosResponse } from 'axios';

const LOGIN_API = 'http://localhost:4500/login/';

const REGISTER_TEACHER = 'http://localhost:4500/teacher/register';
const REGISTER_STUDENT = 'http://localhost:4500/student/register';

export function login(user: any): Promise<AxiosResponse> {
  return axios.post(LOGIN_API, user);
}

export function registerTeacher(user: any): Promise<AxiosResponse> {
  return axios.post(REGISTER_TEACHER, user);
}
export function registerStudent(user: any): Promise<AxiosResponse> {
  return axios.post(REGISTER_STUDENT, user);
}
