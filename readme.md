# 🎓 Student CRUD Application

A full-stack **Student Management System** built using **Spring Boot (Java)** for the backend and **React.js** for the frontend.
The application allows users to perform **CRUD operations (Create, Read, Update, Delete)** on student records through a web interface.

This project demonstrates how to build a **RESTful API with Spring Boot** and connect it to a **React frontend**.

---

## 🚀 Features

* ➕ Add a new student
* 📋 View all students
* ✏️ Update student information
* ❌ Delete students
* 🔗 REST API integration between frontend and backend
* ⚡ Full-stack architecture

---

## 🛠️ Tech Stack

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* Maven

### Frontend

* React.js
* Axios
* JavaScript
* CSS / Bootstrap

### Database

* MySQL (or any configured relational database)

---

## 📂 Project Structure

```
StudentCrud
│
├── backend
│   ├── controller
│   ├── model
│   ├── repository
│   ├── service
│   └── StudentCrudApplication.java
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── App.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Backend Setup (Spring Boot)

### 1. Clone the Repository

```bash
git clone https://github.com/Suganthan1004/StudentCrud.git
cd StudentCrud
```

### 2. Configure Database

Update the `application.properties` file:

```
spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 3. Run the Backend

Using Maven:

```bash
mvn spring-boot:run
```

Or run `StudentCrudApplication.java` directly from your IDE.

Backend runs at:

```
http://localhost:8080
```

---

## 💻 Frontend Setup (React)

### 1. Navigate to the frontend folder

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the React application

```bash
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| GET    | `/students`      | Get all students     |
| GET    | `/students/{id}` | Get student by ID    |
| POST   | `/students`      | Create a new student |
| PUT    | `/students/{id}` | Update student       |
| DELETE | `/students/{id}` | Delete student       |

---

## 📊 Application Workflow

1. React UI sends HTTP requests using **Axios**
2. Spring Boot **REST Controllers** receive the requests
3. **Service layer** handles the business logic
4. **Repository layer** interacts with the database using JPA
5. The response is returned to the React frontend

---

## 🎯 Learning Objectives

This project helps understand:

* Building REST APIs with **Spring Boot**
* Creating **full-stack applications**
* Using **React with backend APIs**
* Implementing **CRUD operations with databases**
* Structuring scalable backend applications

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Submit a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.
