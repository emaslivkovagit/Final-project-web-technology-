document.addEventListener("DOMContentLoaded", function () {
  const toggleTitles = document.querySelectorAll(".toggle-title");

  toggleTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      const section = title.closest("section");
      const content = section.querySelector(".toggle-content");

      if (!content) return;

      content.classList.toggle("is-open");
    });
  });
});