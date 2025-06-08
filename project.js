// Store token and any other necessary data
            document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        try {
            const response = await fetch("https://jodna-portfolio.onrender.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                // If user doesn't exist or credentials are invalid
                console.warn("Invalid credentials or user not found.");
                alert("Invalid login. Redirecting to signup...");
                setTimeout(() => {
                    window.location.href = "signUP.html";
                }, 1000);
                return;
            }

            const data = await response.json();

            // Store token and any other necessary data
            localStorage.setItem("authToken", data.token); // Optional: save user info
            localStorage.setItem("userEmail", data.email); // Optional for personalization
            localStorage.setItem("first-name", data.firstname);
            localStorage.setItem("last-name", data.lastname);

            alert("Login successful!");
            setTimeout(() => {
                window.location.href = "profile-dashboard.html";
            }, 1000);
        } catch (error) {
            console.error("Login failed:", error);
            alert("An error occurred during login. Please try again.");
        }
    });
});
