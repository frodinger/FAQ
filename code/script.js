
// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");

  /* 
  Toggle between hiding and showing the active description
  const description = element.nextElementSibling;
  if (description.style.display === "block") {
    description.style.display = "none";
  } else {
    description.style.display = "block";
  }
  */
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);