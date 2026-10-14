
async function fetchUsers() {
    const status = document.getElementById("status");

    try {
        // Fetch data from the public API
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // Check whether the HTTP request succeeded
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        // Convert the response into JavaScript data
        const users = await response.json();

        // Display the users on the webpage
        displayUsers(users);

        status.textContent = `Loaded ${users.length} users successfully.`;

    } catch (error) {
        status.textContent =
            "Unable to load users. Please check your internet connection.";
        console.error("Error:", error);
    }
}

function displayUsers(users) {
    const container = document.getElementById("user-container");

    // Clear previous data
    container.innerHTML = "";

    users.forEach(function(user) {
        const div = document.createElement("div");
        div.className = "user-card";

        const name = document.createElement("h3");
        name.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = "Email: " + user.email;

        div.appendChild(name);
        div.appendChild(email);

        container.appendChild(div);
    });
}

// Start fetching users
fetchUsers();
