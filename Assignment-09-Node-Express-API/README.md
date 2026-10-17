# Assignment 9: Node.js and Express.js REST API

## Aim
To develop a backend server using Node.js and Express.js that serves static files and JSON data and performs CRUD operations on student records.

## Technologies Used
- Node.js
- Express.js
- HTML and CSS
- Postman
- Visual Studio Code

## Features
- Serves a welcome webpage using `express.static()`.
- Displays all student records.
- Retrieves an individual student by ID.
- Adds a new student using POST.
- Updates student details using PUT.
- Deletes a student using DELETE.
- Returns JSON responses and appropriate HTTP status codes.

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get one student |
| POST | `/students` | Add a student |
| PUT | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

## How to Run
1. Open the assignment folder in VS Code.
2. Install dependencies using `npm.cmd install`.
3. Start the server using `node server.js`.
4. Open `http://localhost:3000/` in a browser.
5. Use Postman to test the API endpoints.

## Data Storage
Student records are stored in an in-memory JavaScript array. Changes are temporary and reset when the server restarts.

## Result
A Node.js and Express.js server was developed and tested using Postman to perform CRUD operations on student records.