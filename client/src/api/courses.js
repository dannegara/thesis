import axios from './axios';

export const inviteStudentToCourse = (courseId, studentEmail) => {
  return axios.post(`courses/${courseId}/student`, { studentEmail: studentEmail });
}