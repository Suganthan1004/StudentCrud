const onAddStudent = () => {

}

const data = ""

function NavBar() {
  return (
    <nav>
      <button onClick={onAddStudent}>Add Student</button>
      <input placeholder="Filter by options"/>
      <select>
        <option>Filter by Dept</option>
        <option>Filter by Year</option>
      </select>
    </nav>
  )
}

export default NavBar