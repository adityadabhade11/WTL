
<?php
include "db.php";

$id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);
if (!$id || $id < 1) {
    exit("Invalid student ID.");
}

$stmt = mysqli_prepare(
    $conn,
    "SELECT name, email, course FROM students WHERE id = ?"
);
mysqli_stmt_bind_param($stmt, "i", $id);
mysqli_stmt_execute($stmt);
mysqli_stmt_bind_result($stmt, $name, $email, $course);

if (!mysqli_stmt_fetch($stmt)) {
    mysqli_stmt_close($stmt);
    exit("Student not found.");
}
mysqli_stmt_close($stmt);

$error = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST["name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $course = trim($_POST["course"] ?? "");

    if ($name === "" || $email === "" || $course === "") {
        $error = "Please fill in all fields.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Please enter a valid email address.";
    } else {
        $stmt = mysqli_prepare(
            $conn,
            "UPDATE students SET name = ?, email = ?, course = ? WHERE id = ?"
        );
        mysqli_stmt_bind_param($stmt, "sssi", $name, $email, $course, $id);

        if (mysqli_stmt_execute($stmt)) {
            mysqli_stmt_close($stmt);
            header("Location: index.php");
            exit;
        }

        $error = "Unable to update student.";
        mysqli_stmt_close($stmt);
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Student</title>
    <style>
        body { font-family: Arial; background: #f1f5f9; padding: 30px; }
        form { max-width: 450px; margin: auto; background: white;
               padding: 25px; border-radius: 10px; }
        input { width: 100%; padding: 10px; margin: 8px 0 16px;
                box-sizing: border-box; }
        button { padding: 10px 16px; background: #2563eb;
                 color: white; border: 0; cursor: pointer; }
        .error { color: #dc2626; }
    </style>
</head>
<body>
<form method="POST">
    <h1>Edit Student</h1>

    <?php if ($error !== "") { ?>
        <p class="error"><?= htmlspecialchars($error) ?></p>
    <?php } ?>

    <label>Name</label>
    <input type="text" name="name"
           value="<?= htmlspecialchars($name) ?>" required>

    <label>Email</label>
    <input type="email" name="email"
           value="<?= htmlspecialchars($email) ?>" required>

    <label>Course</label>
    <input type="text" name="course"
           value="<?= htmlspecialchars($course) ?>" required>

    <button type="submit">Update Student</button>
    <p><a href="index.php">Back to Student List</a></p>
</form>
</body>
</html>
