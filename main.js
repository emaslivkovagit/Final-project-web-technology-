const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const section = button.closest("section");
    const content = section.querySelector(".toggle-content");

    if (!content) return;

    if (content.style.display === "none") {
      content.style.display = "block";
      button.textContent = "Collapse";
    } else {
      content.style.display = "none";
      button.textContent = "Expand";
    }
  });
});