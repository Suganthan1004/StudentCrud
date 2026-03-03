import axios from "axios";

const API_BASE_URL = "http://localhost:8086/api";

// Toggle this flag when your backend is ready
const USE_MOCK_DATA = false;

const normalizeStudent = (student) => ({
  id: student.id ?? student.student_id,
  studentId: student.studentId ?? student.student_id ?? student.id,
  name: student.name ?? "",
  mail: student.mail ?? student.email ?? "",
  dept: student.dept ?? "",
  yearOfPassing: student.yearOfPassing ?? student.year_of_study ?? "",
  createdAt: student.createdAt ?? student.created_at ?? null,
  updatedAt: student.updatedAt ?? student.updated_at ?? null,
});

const toApiPayload = (student, id, includeStudentId = true) => {
  const resolvedId = student.studentId ?? student.id ?? id;
  const payload = {
    name: student.name,
    email: student.mail,
    dept: student.dept,
    year_of_study: parseInt(student.yearOfPassing, 10),
  };

  if (
    includeStudentId &&
    resolvedId !== undefined &&
    resolvedId !== null &&
    resolvedId !== ""
  ) {
    payload.student_id = parseInt(resolvedId, 10);
  }

  return payload;
};

// Mock database
let mockStudents = [
  {
    id: 1,
    name: "Luffy",
    mail: "luffy@example.com",
    dept: "CS",
    yearOfPassing: 2024,
  },
  {
    id: 2,
    name: "Zoro",
    mail: "zoro@example.com",
    dept: "Math",
    yearOfPassing: 2025,
  },
  {
    id: 3,
    name: "Sanji",
    mail: "sanji@example.com",
    dept: "Physics",
    yearOfPassing: 2023,
  },
  {
    id: 4,
    name: "Nami",
    mail: "nami@example.com",
    dept: "Mech",
    yearOfPassing: 2026,
  },
  {
    id: 5,
    name: "Usopp",
    mail: "usopp@example.com",
    dept: "Business",
    yearOfPassing: 2024,
  },
];

let nextId = 6;

// Helper to simulate network latency
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getStudents = async () => {
  if (USE_MOCK_DATA) {
    await delay(500);
    return { data: [...mockStudents] };
  }
  const response = await axios.get(API_BASE_URL);
  const mapped = Array.isArray(response.data)
    ? response.data.map(normalizeStudent)
    : [];
  return { ...response, data: mapped };
};

export const addStudent = async (student) => {
  if (USE_MOCK_DATA) {
    await delay(500);
    const newStudent = {
      ...student,
      studentId: parseInt(student.studentId, 10),
      yearOfPassing: parseInt(student.yearOfPassing, 10),
      id: nextId++,
    };
    mockStudents.push(newStudent);
    return { data: newStudent };
  }
  const response = await axios.post(API_BASE_URL, toApiPayload(student));
  return { ...response, data: normalizeStudent(response.data) };
};

export const updateStudent = async (id, student) => {
  if (USE_MOCK_DATA) {
    await delay(500);
    const index = mockStudents.findIndex((s) => s.id === id);
    if (index !== -1) {
      mockStudents[index] = {
        ...student,
        studentId: parseInt(student.studentId, 10),
        yearOfPassing: parseInt(student.yearOfPassing, 10),
        id,
      };
      return { data: mockStudents[index] };
    }
    throw new Error("Student not found");
  }
  const response = await axios.put(
    `${API_BASE_URL}/${id}`,
    toApiPayload(student, id, true),
  );
  return { ...response, data: normalizeStudent(response.data) };
};

export const deleteStudent = async (id) => {
  if (USE_MOCK_DATA) {
    await delay(500);
    mockStudents = mockStudents.filter((s) => s.id !== id);
    return { data: { success: true } };
  }
  return await axios.delete(`${API_BASE_URL}/${id}`);
};
