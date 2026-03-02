import { useState } from "react"

function StudentForm() {

    const[student,setStudent] = useState({
        id:"",
        name:"",
        mail:"",
        yos:"",
        course:""
    })
  return (
    <>
    <form>
        <input placeholder="Id"/>
        <input placeholder="Name"/>
        <input placeholder="mail"/>
        <input placeholder="yos"/>
        <input placeholder="course"/>
    </form>
    </>
  )
}

export default StudentForm