package com.example.student_management.service;


import com.example.student_management.entity.Students;
import com.example.student_management.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    @Autowired
    private StudentRepo StudentRepo;

    public List<Students> getStudentDetails(){
        return StudentRepo.findAll();
    }

    public Students addStudent(Students student) {
        return StudentRepo.save(student);
    }

    public Students updateStudent(Long student_id, Students student){
        Students student_info = StudentRepo.findById(student_id)
                .orElseThrow(() -> new RuntimeException("Project not found"));
        if(student_info.getStudent_id()==(student_id)){
            student_info.setName(student.getName());
            student_info.setDept(student.getDept());
            student_info.setEmail(student.getEmail());
            student_info.setYear_of_study(student.getYear_of_study());
            return StudentRepo.save(student_info);
        }else{
            throw new RuntimeException("Unauthorized access");
        }
    }

    public void deleteByStudentId(long student_id) throws Exception{
        Students student = StudentRepo.findById(student_id).orElseThrow(()-> new RuntimeException("Error"));
        if(student.getStudent_id()==student_id){
            StudentRepo.deleteById(student_id);
        }else{
            System.out.println("Not found");
        }
    }
}
