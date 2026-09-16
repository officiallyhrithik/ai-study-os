// AI StudyOS - Interactive Features

// Sidebar navigation
const navItems = document.querySelectorAll("nav a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(nav => nav.classList.remove("active"));
        item.classList.add("active");

        console.log("Opened:", item.textContent.trim());
    });
});

// Task completion
const tasks = document.querySelectorAll(".task input");

tasks.forEach(task => {
    task.addEventListener("change", () => {
        const text = task.parentElement.querySelector("span");

        if (task.checked) {
            text.style.textDecoration = "line-through";
            text.style.opacity = "0.5";
        } else {
            text.style.textDecoration = "none";
            text.style.opacity = "1";
        }
    });
});

// AI button
const aiButton = document.querySelector(".ai-btn");

aiButton.addEventListener("click", () => {
    alert("✨ AI Study Assistant coming next!");
});

// AI options
const aiOptions = document.querySelectorAll(".ai-options button");

aiOptions.forEach(button => {
    button.addEventListener("click", () => {
        alert("🚀 " + button.textContent.trim() + " will be added soon!");
    });
});
