const handleEdit = () => {}
const handleDelete = () => {}

function StudentTable({students}) {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Mail id</th>
          <th>Year of Study</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        {students.map( s => (
          <tr key={s.id}>
            <td align="center">{s.id}</td>
            <td align="center">{s.name}</td>
            <td align="center">{s.email}</td>
            <td align="center">{s.yos}</td>
            <td align="center">{s.course}</td>
            <td align="center"><button onClick={handleEdit}>edit</button></td>
            <td align="center"><button onClick={handleDelete}>delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default StudentTable