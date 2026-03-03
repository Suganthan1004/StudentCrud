package com.example.student_management.repository;


import com.example.student_management.entity.Teachers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepo extends JpaRepository<Teachers, Long> {
}
