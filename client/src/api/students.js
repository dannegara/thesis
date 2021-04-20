import axios from './axios';

export const getStudents = () => {
  return axios.get('students');
}
