# 🚀 User CRUD Operation

A **User Management CRUD Application** built using **Spring Boot (Backend)** and **React.js (Frontend)**.
This project demonstrates full **CRUD functionality (Create, Read, Update, Delete)** using REST APIs and a modern frontend UI.

---

# 📌 Project Overview

This application allows users to **manage employee or user records** through a simple and responsive interface.

The system supports the following operations:

* ➕ Create a new user
* 📋 View all users
* ✏️ Update user details
* ❌ Delete users

The **Spring Boot backend** exposes REST APIs and the **React frontend** consumes them using the **Fetch API**.

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router
* CSS
* Fetch API

## Backend

* Java
* Spring Boot
* Spring Web
* REST API

## Database

* MySQL

## Tools

* VS Code
* Postman
* Git & GitHub
* Maven

---

# ✨ Features

* 📇 View all users in **card layout**
* ➕ Create new users
* ✏️ Update user information
* ❌ Delete users
* 📱 Responsive UI
* 🔗 React integrated with Spring Boot APIs

---

# 📂 Project Structure

## Frontend (React)

```
src
 ├── components
 │     ├── MainCardComponent
 │     ├── CreateUser
 │     ├── UpdateUser
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## Backend (Spring Boot)

```
src
 ├── controller
 │     └── UserController.java
 │
 ├── service
 │     ├── UserService.java
 │     ├── UserServiceImp.java
 │
 ├── entity
 │     └── User.java
 │
 └── repository
       └── UserRepository.java
```

---

# 🔗 API Endpoints

| Method | Endpoint            | Description    |
| ------ | ------------------- | -------------- |
| GET    | `/user/all`         | Get all users  |
| GET    | `/user/get/{id}`    | Get user by ID |
| POST   | `/user/add`         | Add new user   |
| PUT    | `/user/update/{id}` | Update user    |
| DELETE | `/user/delete/{id}` | Delete user    |

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/patilriya1183/User-CRUD-Operation.git
```

---

### 2️⃣ Run Backend (Spring Boot)

```
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

### 3️⃣ Run Frontend (React)

```
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 👩‍💻 Author

**Riya Patil**

GitHub
[https://github.com/patilriya1183](https://github.com/patilriya1183)
