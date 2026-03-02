import { useState,useEffect } from "react"
import Header from "../components/Header";
import NavBar from "../components/Navbar";
import StudentTable from "../components/StudentTable";
import { addStudents, deleteStudents, getStudents, updateStudents } from "../services/api";

function StudentsList() {

    const [students,setStudents] = useState([
  {id:1, name:"Zoro", email:"zoro@email.com", yos:"IV", course:"AI&DS"},
  {id:2, name:"Sanji", email:"sanji@email.com", yos:"IV", course:"CSE"},
  {id:3, name:"Luffy", email:"luffy@email.com", yos:"IV", course:"ECE"},
  {id:4, name:"Usopp", email:"usopp@email.com", yos:"IV", course:"EEE"},
  {id:5, name:"Nami", email:"nami@email.com", yos:"IV", course:"IT"},
]);

// useEffect( () =>{loadStudents()},[]);

// const loadStudents = async() => {
//     try {
//         const res = await getStudents();
//         if (Array.isArray(res.data)) {
//             setStudents(res.data);
//         } else {
//             console.error("API response is not an array:", res.data);
//             setStudents([]);
//         }
//     } catch (error) {
//         console.error("Error loading students:", error);
//         setStudents([]);
//     }
// }

// const handleDelete = async (id) => {
//     const res = await deleteStudents();
//     loadStudents();
// }

// const handleUpdate = async (id,student) =>{
//     const res = await updateStudents(id,student);
//     loadStudents();
// }

// const onAddStudent = async(student) => {
//     const res = await addStudents(student);
//     loadStudents();
// }

  return (
    <>
    <Header/>
    <NavBar/>
    <StudentTable students={students}/>
    </>
  )
}

export default StudentsList