document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
  });

  // Form Alert
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Pesan telah dikirim!");
  });
});
