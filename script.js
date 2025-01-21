document.getElementById("yes-button").addEventListener("click", function() {
    const response = document.getElementById("response");
    response.textContent = "Yay! ❤️ You just made my day!";
    response.style.color = "#ff0066";  // Update color to match Valentine theme
    response.classList.add("fade-in"); // Apply fade-in animation

    // Disable buttons after click
    document.getElementById("yes-button").disabled = true;
    document.getElementById("no-button").disabled = true;
});

document.getElementById("no-button").addEventListener("click", function() {
    const response = document.getElementById("response");
    response.textContent = "Oops! Sorry this answer is invalid :/";
    response.style.color = "#cc0044";  // Update color to match Valentine theme
    response.classList.add("fade-in"); // Apply fade-in animation

    // Disable buttons after click
    document.getElementById("yes-button").disabled = true;
    document.getElementById("no-button").disabled = true;
});
