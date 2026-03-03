import { useState, useEffect } from "react";

function StudentForm({ student, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    mail: "",
    dept: "",
    yearOfPassing: "",
  });

  // Prepopulate form if editing
  useEffect(() => {
    if (student) {
      setFormData({
        studentId: student.studentId || student.id || "",
        name: student.name || "",
        mail: student.mail || "",
        dept: student.dept || "",
        yearOfPassing: student.yearOfPassing || "",
      });
    } else {
      setFormData({
        studentId: "",
        name: "",
        mail: "",
        dept: "",
        yearOfPassing: "",
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{student ? "Update Student" : "Add New Student"}</h2>
        <form onSubmit={handleSubmit} className="student-form">
          <div className="form-group">
            <label htmlFor="studentId">Student ID</label>
            <input
              type="number"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
              min="1"
              readOnly={Boolean(student)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mail">Email</label>
            <input
              type="email"
              id="mail"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dept">Department</label>
            <input
              type="text"
              id="dept"
              name="dept"
              value={formData.dept}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="yearOfPassing">Year of Passing</label>
            <input
              type="number"
              id="yearOfPassing"
              name="yearOfPassing"
              value={formData.yearOfPassing}
              onChange={handleChange}
              required
              min="1900"
              max="2100"
            />
          </div>
          <div className="form-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {student ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;
