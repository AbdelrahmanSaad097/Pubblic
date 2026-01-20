// Download CV
function downloadCV() {
    window.open("Abdelrahman-Saad-CV.pdf", "_blank");
}

// Dark Mode Toggle
const darkBtn = document.createElement("button");
darkBtn.textContent = "🌙";
darkBtn.style.position = "fixed";
darkBtn.style.bottom = "20px";
darkBtn.style.right = "20px";
darkBtn.style.padding = "10px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "50%";
darkBtn.style.cursor = "pointer";
document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkBtn.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Auto Year
document.getElementById("year").textContent =
    new Date().getFullYear();
