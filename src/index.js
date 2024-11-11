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

// Contact form submission handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const formMessage = document.getElementById("form-message");

  // Basic form validation
  if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
    formMessage.textContent = "All fields are required!";
    formMessage.style.color = "red";
    return;
  }

  // Simple email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  // Show the success message
  formMessage.textContent = "Thank you for your message!";
  formMessage.style.color = "green";

  // Clear the form and reset the size of the textarea
  this.reset();
  messageInput.style.height = ""; // Reset textarea height

  // Hide the message after 3 seconds
  setTimeout(() => {
    formMessage.textContent = "";
  }, 3000);
});

document.getElementById("subscribeForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  const emailInput = document.getElementById("subscribeEmail");
  const subscribeMessage = document.getElementById("subscribeMessage");
  const emailValue = emailInput.value.trim();
  
  // Basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    alert("Please enter a valid email address.");
    return;
  }
  
  // Show the success message
  subscribeMessage.classList.remove("hidden");
  subscribeMessage.textContent = "Thanks for subscribing!";
  
  // Clear the input field
  emailInput.value = "";
  
  // Hide the message after 3 seconds
  setTimeout(() => {
    subscribeMessage.classList.add("hidden");
  }, 3000);
});