document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
  
    navbarToggler.addEventListener("click", function () {
      navbarCollapse.classList.toggle("show");
    });
  
    // Fermer le menu lorsqu'un lien est cliqué
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navbarCollapse.classList.remove("show");
      });
    });
  });
  