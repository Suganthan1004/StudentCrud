import { useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../services/studentService";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getStudents();
      if (Array.isArray(response.data)) {
        setStudents(response.data);
      } else {
        setStudents([]);
        console.error("Data received is not an array:", response.data);
      }
    } catch (err) {
      console.error("Failed to fetch students:", err);
      setError(
        "Failed to load students. Please ensure the backend is running.",
      );
      setStudents([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddClick = () => {
    setEditingStudent(null);
    setIsFormVisible(true);
  };

  const handleEditClick = (student) => {
    setEditingStudent(student);
    setIsFormVisible(true);
  };

  const handleFormSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    try {
      if (editingStudent) {
        await updateStudent(editingStudent.id, formData);
      } else {
        await addStudent(formData);
      }
      setIsFormVisible(false);
      await fetchStudents();
    } catch (err) {
      console.error("Failed to save student:", err);
      const backendMessage =
        err?.response?.data?.message || err?.response?.data?.error;
      setError(
        backendMessage || "Failed to save student data. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormCancel = () => {
    setIsFormVisible(false);
    setEditingStudent(null);
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setIsLoading(true);
      setError(null);
      try {
        await deleteStudent(id);
        await fetchStudents();
      } catch (err) {
        console.error("Failed to delete student:", err);
        setError("Failed to delete student. Please try again.");
        setIsLoading(false);
      }
    }
  };

  // Derived state for filtering and sorting
  const displayedStudents = useMemo(() => {
    let filtered = [...students];

    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      filtered = filtered.filter((s) =>
        s.name.toLowerCase().includes(lowercasedTerm),
      );
    }

    if (sortOption === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "yearOfPassing") {
      filtered.sort((a, b) => a.yearOfPassing - b.yearOfPassing);
    }

    return filtered;
  }, [students, searchTerm, sortOption]);

  return (
    <div className="app-container">
      <Header />
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortOption={sortOption}
        onSortChange={setSortOption}
        onAddClick={handleAddClick}
      />

      <main className="main-content">
        {error && <div className="error-message">{error}</div>}
        {isLoading && !isFormVisible && (
          <div className="loading-state">Loading data...</div>
        )}

        {!isLoading && !error && (
          <StudentTable
            students={displayedStudents}
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        )}
      </main>

      {isFormVisible && (
        <StudentForm
          student={editingStudent}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      )}
    </div>
  );
}

export default StudentList;
