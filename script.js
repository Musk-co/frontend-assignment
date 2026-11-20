const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function(l) {l.classList.remove("active"); });
        link.classList.add("active");
        
    });
});

window.addEventListener("scroll", function(){
    navbar.classList.toggle("scrolled", window.scrollY > 10);
});
