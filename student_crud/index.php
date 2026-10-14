
<?php
include "db.php";

$result = mysqli_query($conn, "SELECT * FROM students ORDER BY id DESC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Management System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f1f5f9;
            margin: 0;
            padding: 30px;
        }
        .container {
            max-width: 950px;
            margin: auto;
            background: white;
            padding: 25px;
            border-radius: 12px;
        }
        h1 { color: #1d4ed8; }
        .add-btn, button {
            background: #2563eb;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            cursor: pointer;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 12px;
            border: 1px solid #ddd;
            text-align: left;
        }
        th { background: #dbeafe; }
        .edit { color: #15803d; }
        .delete { color: #dc2626; }
        @media (max-width: 600px) {
            body { padding: 10px; }
            .container { padding: 12px; overflow-x: auto; }
        }
    </style>
</head>
<body>
<div class="container">
    <h1>Student Management System</h1>
    <p>Manage student records using PHP and MySQL.</p>

    <a class="add-btn" href="create.php">+ Add Student</a>

    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
        </tr>

        <?php while ($row = mysqli_fetch_assoc($result)) { ?>
        <tr>
            <td><?= (int)$row['id'] ?></td>
            <td><?= htmlspecialchars($row['name']) ?></td>
            <td><?= htmlspecialchars($row['email']) ?></td>
            <td><?= htmlspecialchars($row['course']) ?></td>
            <td>
                <a class="edit"
                   href="update.php?id=<?= (int)$row['id'] ?>">Edit</a>
                |
                <a class="delete"
                   href="delete.php?id=<?= (int)$row['id'] ?>"
                   onclick="return confirm('Delete this student?')">
                   Delete
                </a>
            </td>
        </tr>
        <?php } ?>
    </table>
</div>
</body>
</html>
