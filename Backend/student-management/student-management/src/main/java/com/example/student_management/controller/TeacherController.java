package com.example.student_management.controller;


import com.example.student_management.entity.Students;
import com.example.student_management.service.TeacherService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class TeacherController {

    private final TeacherService teacherService;

    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }
    @GetMapping()
    public List<Students> getStudentDetails(){
        return teacherService.getStudentDetails();
    }

    @PostMapping()
    public ResponseEntity<?> addStudent(@RequestBody Students student){
        try{
            Students new_student = teacherService.addStudent(student);
            return new ResponseEntity<>(new_student, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Unsuccessful"+e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{student_id}")
    public ResponseEntity<?> updateStudent(@PathVariable long student_Id, @RequestBody Students student){
        try{
            Students updated_student = teacherService.updateStudent(student_Id, student);
            System.out.println("Updated Successfully");
            Map<String, String> body = new HashMap<>();
            body.put("message", "Student Updated Successfully");
            return new ResponseEntity<>(body, HttpStatus.OK);
        } catch (Exception e) {
            Map<String, String> body = new HashMap<>();
            body.put("message", "Unsuccessful"+e.getMessage());
            return new ResponseEntity<>(body, HttpStatus.NOT_MODIFIED);
        }
    }

    @DeleteMapping("/{student_id}")
    public ResponseEntity<?> deleteStudent(@PathVariable long student_id){
        try{
            teacherService.deleteByStudentId(student_id);
            Map<String, String> body = new HashMap<>();
            body.put("message", "Student Record deleted successfully");
            return new ResponseEntity<>(body, HttpStatus.OK);
        } catch (Exception e) {
            Map<String, String> body = new HashMap<>();
            body.put("message", "Student Record deletion unsuccessful");
            return new ResponseEntity<>(body, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
