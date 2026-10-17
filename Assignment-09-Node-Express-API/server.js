
const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// In-memory student records
let students = [
    { id: 1, name: "Rahul Sharma", age: 20, course: "Computer Engineering" },
    { id: 2, name: "Priya Patil", age: 21, course: "Information Technology" }
];

// Welcome route
app.get("/", (req, res) => {
    res.send("Welcome to the Student Management API!");
});

// Get all students
app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// Get one student
app.get("/students/:id", (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
});

// Add a student
app.post("/students", (req, res) => {
    const { name, age, course } = req.body;

    if (!name || age === undefined || !course ||
        !Number.isFinite(Number(age)) || Number(age) <= 0) {
        return res.status(400).json({
            message: "Valid name, age, and course are required"
        });
    }

    const newStudent = {
        id: students.length
            ? Math.max(...students.map(s => s.id)) + 1
            : 1,
        name,
        age: Number(age),
        course
    };

    students.push(newStudent);
    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

// Update a student
app.put("/students/:id", (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    const { name, age, course } = req.body;

    if (!name || age === undefined || !course ||
        !Number.isFinite(Number(age)) || Number(age) <= 0) {
        return res.status(400).json({
            message: "Valid name, age, and course are required"
        });
    }

    student.name = name;
    student.age = Number(age);
    student.course = course;

    res.status(200).json({
        message: "Student updated successfully",
        student
    });
});

// Delete a student
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    const deletedStudent = students.splice(index, 1)[0];

    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
