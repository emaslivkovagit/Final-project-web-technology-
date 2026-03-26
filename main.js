/* Wait until the HTML page is fully loaded before running the script.
   This makes sure all the elements we want to use already exist. */
document.addEventListener("DOMContentLoaded", function () {

  /* Select all elements with the class "toggle-title".
     These are the clickable headings that will open or close content. */
  const toggleTitles = document.querySelectorAll(".toggle-title");

  /* Go through each toggle title one by one. */
  toggleTitles.forEach(function (title) {

    /* Add a click event to each title.
       When a user clicks it, the function below runs. */
    title.addEventListener("click", function () {

      /* Find the closest parent <section> element of the clicked title.
         This helps connect the title to the correct content block. */
      const section = title.closest("section");

      /* Inside that section, find the element with class "toggle-content".
         This is the part that will be shown or hidden. */
      const content = section.querySelector(".toggle-content");

      /* If no content element is found, stop the code here
         so no error happens. */
      if (!content) return;

      /* Add or remove the class "is-open".
         If it is already there, it gets removed.
         If it is not there, it gets added.
         The CSS controls what happens visually. */
      content.classList.toggle("is-open");
    });
  });
});