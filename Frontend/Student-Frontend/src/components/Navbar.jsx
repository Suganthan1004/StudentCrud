import { IoMdAdd } from "react-icons/io";


function Navbar({ searchTerm, onSearchChange, sortOption, onSortChange, onAddClick }) {
  return (
    <nav className="app-navbar">
      <div className="navbar-actions">
        <button className="btn btn-primary" onClick={onAddClick}>
           <IoMdAdd /> Add Student
        </button>
      </div>
      <div className="navbar-controls">
        <input
          type="text"
          placeholder="Filter by name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="sort-select"
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="yearOfPassing">Year of Passing</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;