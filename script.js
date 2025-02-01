document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    // Simple validation
    if (username === "admin" && password === "password123") {
        errorMessage.style.display = "none";
        window.location.href = "welcome.html";
        // You can redirect the user to another page if needed
        // window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.display = "block";
    }
});
