package com.example.student_management.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.cglib.core.Local;

import java.lang.reflect.Type;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Teachers {
    @Id
    private long teacher_id;

    private String name;

    @Email
    @NotBlank
    private String teacher_email;

    @NotBlank
    @Size(min=10, max=10, message = "Phone number must be exactly 10 digits")
    private String phone;

//    @Enumerated(EnumType.STRING)
    private String dept;

    private LocalDateTime created_at;
    private LocalDateTime updated_at;

    @PrePersist
    protected void onCreate(){
        this.created_at = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate(){
        this.updated_at = LocalDateTime.now();
    }
    @OneToMany(mappedBy = "teacher", cascade = CascadeType.ALL)
    private List<Students> studentsList;
}
