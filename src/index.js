import _ from 'lodash';
import "./styles/styles.css";

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

//--------------------------------------------------------------------------------------------
// ShowPage function, controlls the switching of the pages through the navbar and buttons
//--------------------------------------------------------------------------------------------
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

//--------------------------------------------------------------------------------------------
// Contact form submission handling
//--------------------------------------------------------------------------------------------
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

//--------------------------------------------------------------------------------------------
// Email Updates submission and form validation handling 
//--------------------------------------------------------------------------------------------
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

//--------------------------------------------------------------------------------------------
// Maintenance Appointment form submission handling
//--------------------------------------------------------------------------------------------
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const appointmentConfirmation = document.getElementById("appointmentConfirmation");
  const optionalInput = document.getElementById("appointmentMessage");

  // Show confirmation message
  appointmentConfirmation.textContent = "Thank you for booking!";
  appointmentConfirmation.style.color = "green"; // Green color for success message
  appointmentConfirmation.classList.remove("hidden");

  // Clear the form inputs
  this.reset();
  optionalInput.style.height = ""; // Reset textarea height

  // Hide the confirmation message after 3 seconds
  setTimeout(() => {
    appointmentConfirmation.classList.add("hidden");
  }, 3000);

  // Ensure that the page stays in the Maintenance section after the form is submitted
  // document.getElementById("Maintenance").scrollIntoView({ behavior: "smooth" });
});

//--------------------------------------------------------------------------------------------
// Carousel and Filtering in ViewAll section 
//--------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel3D");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  let angle = 0;
  const angleIncrement = 360 / totalItems;

  // Position carousel items in a circle
  items.forEach((item, index) => {
      const rotationAngle = index * angleIncrement;
      item.style.transform = `rotateY(${rotationAngle}deg) translateZ(400px)`;
  });

  // Navigation buttons
  document.getElementById("prevButton").addEventListener("click", () => {
      angle -= angleIncrement;
      carousel.style.transform = `rotateY(${angle}deg)`;
  });

  document.getElementById("nextButton").addEventListener("click", () => {
      angle += angleIncrement;
      carousel.style.transform = `rotateY(${angle}deg)`;
  });
});

//--------------------------------------------------------------------------------------------
// TestDrive section 
//--------------------------------------------------------------------------------------------

document.getElementById('testDriveForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const message = document.createElement('p');
  message.textContent = 'Thank you for booking your test drive!';
  message.style.color = 'green';
  message.style.fontSize = '1.1rem';
  message.style.marginTop = '15px';
  this.appendChild(message);

  setTimeout(() => {
    message.remove(); // Remove the thank-you message after 3 seconds
    this.reset(); // Resets the form fields
  }, 3000);
});