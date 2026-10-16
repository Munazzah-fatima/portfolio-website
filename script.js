
// 3. JavaScript — script.js
// This small JavaScript file makes the mobile menu open and close when the user clicks the ☰ button. It also closes the menu after the user selects a page.

// javascript

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Open and close the mobile menu
menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the menu when a link is clicked
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation menu");
    });
});