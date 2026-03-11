User CRUD Operation

A simple User Management CRUD Application built using Spring Boot (Backend) and React.js (Frontend).
This project demonstrates full CRUD functionality (Create, Read, Update, Delete) using REST APIs and a modern frontend interface.

Project Overview

This project allows users to manage employee or user records through a simple and responsive interface.

The application performs the following operations:

Create a new user

View all users

Update user details

Delete existing users

The backend provides REST APIs, and the frontend consumes those APIs using the Fetch API.

CRUD applications are commonly used to learn full-stack development because they demonstrate how applications interact with databases and APIs.

Tech Stack
Frontend

React.js

React Router

CSS

Fetch API

Backend

Java

Spring Boot

Spring Web

REST API

Tools

VS Code

Postman

Git & GitHub

Maven

MySQL

Features

View all users in card layout

Create new user

Update user information

Delete user

Responsive UI

API integration between React and Spring Boot

Project Structure
Frontend (React)
src
 ├── components
 │     ├── MainCardComponent
 │     ├── CreateUser
 │     ├── UpdateUser
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
Backend (Spring Boot)
src
 ├── controller
 │     └── UserController.java
 │
 ├── service
 │     └── UserService.java
 │
 ├── entity
 │     └── User.java
 │
 └── repository
       └── UserRepository.java
