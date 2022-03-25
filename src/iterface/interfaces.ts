export interface studentI {
  name: string;
  email: string;
  country: string;
  city: string;
  languages: string[];
  image: string;
  video: string;
  comment: string;
  password: string;
}
export interface teacherI {
  name: string;
  email: string;
  country: string;
  city: string;
  languages: string[];
  speciality: [];
  price: number;
  image: string;
  video: string;
  comment: string;
  password: string;
}
export interface loginI {
  name: string;
  password: string;
}
export interface actionI {
  type: string;
  payload?: object;
}
