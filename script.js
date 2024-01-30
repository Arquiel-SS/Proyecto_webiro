document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");
  var navbarHiddenClass = "navbar-hidden";

  // Verifica el estado de desplazamiento de la página al cargar y al desplazarse
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      // Si el usuario ha desplazado hacia abajo, oculta la barra de navegación
      navbar.classList.add(navbarHiddenClass);
    } else {
      // Si el usuario está en la parte superior de la página, muestra la barra de navegación
      navbar.classList.remove(navbarHiddenClass);
    }
  });
});
