function StudentTable({ students, onEdit, onDelete }) {
  if (!students || students.length === 0) {
    return <div className="empty-state">No students found.</div>;
  }

  return (
    <div className="table-container">
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mail</th>
            <th>Dept</th>
            <th>YoP</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.mail}</td>
              <td>{s.dept}</td>
              <td>{s.yearOfPassing}</td>
              <td>{s.course}</td>
              <td className="actions-cell">
                <button
                  className="btn btn-sm btn-info"
                  onClick={() => onEdit(s)}
                >
                  Update
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(s.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;