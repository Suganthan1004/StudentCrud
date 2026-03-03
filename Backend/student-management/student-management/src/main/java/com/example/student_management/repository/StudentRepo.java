package com.example.student_management.repository;

import com.example.student_management.entity.Students;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Students, Long> {
}
