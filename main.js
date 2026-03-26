document.addEventListener("DOMContentLoaded", function () {
  const toggleTitles = document.querySelectorAll(".toggle-title");

  toggleTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      const section = title.closest("section");
      const content = section.querySelector(".toggle-content");

      if (!content) return;

      if (getComputedStyle(content).display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});