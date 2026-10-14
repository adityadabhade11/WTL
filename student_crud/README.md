# Assignment 8: PHP MySQL CRUD Application

## Aim
To develop a web application using PHP and MySQL to perform CRUD operations on student records using XAMPP.

## Problem Statement
Develop a web application using PHP that manages student records. The application allows users to create, read, update, and delete student information stored in a MySQL database.

## Technologies Used
- PHP
- MySQL
- HTML
- CSS
- XAMPP
- Visual Studio Code

## Features
- Add new student records.
- Display all student records.
- Update existing student details.
- Delete student records.
- Store student information in a MySQL database.
- Validate required fields and email format.

## Database Details
- Database Name: `student_db`
- Table Name: `students`

### Table Columns
- `id` – Unique student ID (auto-increment).
- `name` – Student name.
- `email` – Student email address.
- `course` – Student course.

## Project Structure
```text
student_crud/
├── db.php
├── index.php
├── create.php
├── update.php
├── delete.php
└── README.md
```

## How to Run the Project
1. Install XAMPP.
2. Copy the project folder into the XAMPP `htdocs` directory.
3. Start Apache and MySQL from the XAMPP Control Panel.
4. Open phpMyAdmin at `http://localhost/phpmyadmin/`.
5. Create a database named `student_db`.
6. Create the `students` table with the required columns.
7. Open `http://localhost/student_crud/index.php` in a browser.

## Result
A PHP and MySQL-based Student Record Management System was developed to perform Create, Read, Update, and Delete (CRUD) operations on student records.