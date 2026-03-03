import axios from "axios";

const API_BASE_URL = "http://localhost:8080/students";

// Toggle this flag when your backend is ready
const USE_MOCK_DATA = true;

// Mock database
let mockStudents = [
    { id: 1, name: "Alice Johnson", mail: "alice@example.com", dept: "CS", yearOfPassing: 2024, course: "B.Tech" },
    { id: 2, name: "Bob Smith", mail: "bob@example.com", dept: "Math", yearOfPassing: 2025, course: "B.Sc" },
    { id: 3, name: "Charlie Brown", mail: "charlie@example.com", dept: "Physics", yearOfPassing: 2023, course: "B.Sc" },
    { id: 4, name: "Diana Prince", mail: "diana@example.com", dept: "Mech", yearOfPassing: 2026, course: "B.Tech" },
    { id: 5, name: "Ethan Hunt", mail: "ethan@example.com", dept: "Business", yearOfPassing: 2024, course: "BBA" },
];

let nextId = 6;

// Helper to simulate network latency
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getStudents = async () => {
    if (USE_MOCK_DATA) {
        await delay(500);
        return { data: [...mockStudents] };
    }
    return await axios.get(API_BASE_URL);
};

export const addStudent = async (student) => {
    if (USE_MOCK_DATA) {
        await delay(500);
        const newStudent = { ...student, yearOfPassing: parseInt(student.yearOfPassing), id: nextId++ };
        mockStudents.push(newStudent);
        return { data: newStudent };
    }
    return await axios.post(API_BASE_URL, student);
};

export const updateStudent = async (id, student) => {
    if (USE_MOCK_DATA) {
        await delay(500);
        const index = mockStudents.findIndex((s) => s.id === id);
        if (index !== -1) {
            mockStudents[index] = { ...student, yearOfPassing: parseInt(student.yearOfPassing), id };
            return { data: mockStudents[index] };
        }
        throw new Error("Student not found");
    }
    return await axios.put(`${API_BASE_URL}/${id}`, student);
};

export const deleteStudent = async (id) => {
    if (USE_MOCK_DATA) {
        await delay(500);
        mockStudents = mockStudents.filter((s) => s.id !== id);
        return { data: { success: true } };
    }
    return await axios.delete(`${API_BASE_URL}/${id}`);
};
