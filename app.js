// Sidebar elements
const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

// Menu toggle
menu.addEventListener("click", function () {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

// Close sidebar
closeIcon.addEventListener("click", function () {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});

// Close sidebar when clicking on a link
const sidebarLinks = document.querySelectorAll(".sidebar ul a");
sidebarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
  });
});

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });
}

// Contact form handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;

    // Create email subject and body
    const subject = "New Portfolio Message from " + encodeURIComponent(name);
    const body = encodeURIComponent(
      "Name: " +
        name +
        "\n" +
        "Email: " +
        email +
        "\n\n" +
        "Message:\n" +
        message,
    );

    // Open mailto link
    window.location.href =
      "mailto:mmanugi@gmail.com?subject=" + subject + "&body=" + body;

    // Show success message
    alert("Thank you for your message! Opening your email client...");

    // Reset form
    this.reset();
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const element = document.querySelector(href);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add cute hover effect to buttons
const buttons = document.querySelectorAll(
  ".button-primary, .button-secondary, .project-link",
);
buttons.forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
  });
  button.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

console.log("✨ Welcome to Manugi's cute portfolio! 🎀");
