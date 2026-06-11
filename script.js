function toggleMenu(){
    let navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Close menu when a link is clicked
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", function(){
        document.getElementById("navLinks").classList.remove("active");
    });
});