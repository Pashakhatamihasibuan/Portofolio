document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const projects = document.querySelectorAll(".project");
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Load Dark Mode State
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
  }

  // Toggle Dark Mode
  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      darkModeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      darkModeToggle.textContent = "🌙";
    }
  });

  // Tab Switching for Projects
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      // Update Active Button
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filter Projects
      projects.forEach((project) => {
        project.classList.toggle("hidden", !project.classList.contains(category));
      });
    });
  });

  // Set default active tab (UI Design)
  document.querySelector(".tab-btn[data-category='ui-design']").click();
});
