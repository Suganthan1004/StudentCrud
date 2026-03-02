import axios from 'axios'

const BASE_URL = "http://localhost:8080/api/students"

export const getStudents = () => axios.get(BASE_URL);
export const addStudents = (student) => axios.post(BASE_URL, student);
export const updateStudents = (id,student) => axios.put(`${BASE_URL}/${id}`, student);
export const deleteStudents = (id) => axios.delete(`${BASE_URL}/${id}`);
