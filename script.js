// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    } else {
      console.error("Modal not found:", modalId);
    }
  }
  
  // Function to close a modal
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "none";
    } else {
      console.error("Modal not found:", modalId);
    }
  }
  
  // Function to open the About Me modal
  function openAboutModal() {
    openModal("about-modal");
  }
  
  // Function to close the About Me modal
  function closeAboutModal() {
    closeModal("about-modal");
  }
  
  // Close modal if user clicks outside of it
  window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  };
  
  // Add scrolled class to navbar on scroll
  const navbar = document.querySelector("nav");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
// Function to toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  }
  
  // Close dropdown when clicking outside
  window.addEventListener("click", (event) => {
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = document.querySelector(".menu-icon");
  
    if (event.target !== menuIcon && !menuIcon.contains(event.target)) {
      navLinks.classList.remove("active");
    }
  });