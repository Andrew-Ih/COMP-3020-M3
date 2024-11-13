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

//--------------------------------------------------------------------------------------------
// Compare section 
//--------------------------------------------------------------------------------------------

import teslaImage from './img/tesla3.avif';
import astonMartinImage from './img/astonmartin2.webp';
import cyberTruckImage from './img/cybertruck.avif';

const carData = {
  car1: {
    name: "Tesla Model 3",
    image: teslaImage,
    performance: "Range: 358 miles, Acceleration: 0-60 mph in 3.1 seconds",
    features: "Autopilot, 15-inch touchscreen, premium audio system",
    price: "$50,000"
  },
  car2: {
    name: "Aston Martin DBX",
    image: astonMartinImage,
    performance: "Range: 305 miles, Acceleration: 0-60 mph in 4.5 seconds",
    features: "Luxury interior, advanced safety systems, 10-inch display",
    price: "$190,000"
  },
  car3: {
    name: "Cyber Truck",
    image: cyberTruckImage,
    performance: "Range: 225 miles, Acceleration: 0-60 mph in 5.0 seconds",
    features: "Spacious cabin, 14-inch display, panoramic roof",
    price: "$60,000"
  }
};

function updateCompareDetails(carId, selectedCar) {
  const carDetails = carData[selectedCar];
  document.getElementById(`${carId}-name`).textContent = carDetails.name;
  document.getElementById(`compare-${carId}`).querySelector('img').src = carDetails.image;
  document.getElementById(`${carId}-performance`).textContent = carDetails.performance;
  document.getElementById(`${carId}-features`).textContent = carDetails.features;
  document.getElementById(`${carId}-price`).textContent = carDetails.price;
}

// Expose the function globally
window.updateCompareDetails = updateCompareDetails

//--------------------------------------------------------------------------------------------
// Checkout section 
//--------------------------------------------------------------------------------------------
// const images = ['img/tesla3.jpg', 'img/tesla4.avif', 'img/cybertruck.avif'];
// let currentImageIndex = 0;

// function prevImage() {
//   currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//   document.getElementById('carImage').src = images[currentImageIndex];
// }

// function nextImage() {
//   currentImageIndex = (currentImageIndex + 1) % images.length;
//   document.getElementById('carImage').src = images[currentImageIndex];
// }

// function placeOrder() {
//   alert('Your order has been placed successfully!');
// }
// // Expose the function globally
// window.prevImage = prevImage
// window.nextImage = nextImage
// window.selectColor = selectColor
// window.placeOrder = placeOrder

// function validateCheckoutForm() {
//   const fullname = document.forms[0]["fullname"].value;
//   const email = document.forms[0]["email"].value;
//   if (fullname === "" || email === "") {
//       alert("Name and email must be filled out");
//       return false;
//   }
//   return true;
// }

window.validateCheckoutForm = validateCheckoutForm

function validateCheckoutForm() {
  let isValid = true;
  
  // Validate finance options
  const finance = document.getElementById('finance');
  if (finance.value === "") {
      alert('Please select a finance option.');
      isValid = false;
  }

  // Validate color options
  const colors = document.querySelectorAll('input[name="color"]:checked');
  if (colors.length === 0) {
      alert('Please select a color.');
      isValid = false;
  }

  // Validate protection package
  const protection = document.getElementById('protection');
  if (protection.value === "") {
      alert('Please select a protection package.');
      isValid = false;
  }

  // Validate personal details
  const fullname = document.querySelector('input[name="fullname"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const address = document.querySelector('input[name="address"]').value;
  if (!fullname || !email || !phone || !address) {
      alert('Please complete all personal details.');
      isValid = false;
  }

  // Validate payment method
  const payment = document.getElementById('payment');
  if (payment.value === "") {
      alert('Please select a payment method.');
      isValid = false;
  }

  return isValid; // Return the status of validity
}

window.validateCheckoutForm = validateCheckoutForm


function updateColorSelection(color) {
  document.getElementById('selectedColor').textContent = color;
}

window.updateColorSelection = updateColorSelection