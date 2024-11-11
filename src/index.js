import _ from 'lodash';
import "./styles/styles.css";

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

function showPage(pageId) {
  // Hide all sections
  document.querySelectorAll("section").forEach(section => {
    section.classList.remove("active");
  });
  
  // If pageId is "Main", activate Main, Main2, and Contact sections
  if (pageId === "Main" ) {
      const sectionsToActivate = ["Main", "Main2", "contact"];
      
      sectionsToActivate.forEach(id => {
          document.getElementById(id).classList.add("active");
      });
  } else {
      // Otherwise, activate only the selected section
      document.getElementById(pageId).classList.add("active");
  }
}

// Expose the function globally
window.showPage = showPage

function toggleDropdown() {
  const dropdown = document.getElementById("vehicleDropdown");
  dropdown.classList.toggle("active");
}

window.toggleDropdown = toggleDropdown