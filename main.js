document.addEventListener("DOMContentLoaded", function () {
  const toggleTitles = document.querySelectorAll(".toggle-title");

  toggleTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      const content = title.parentElement.nextElementSibling;

      if (!content || !content.classList.contains("toggle-content")) return;

      if (getComputedStyle(content).display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});