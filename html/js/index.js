$(document).ready(function() {

  // VARIABLES GLOBALES
  var web = $(document);
  var logo = $(".logo");
  var anclas = $('a[href*="#"]');
  var website = $('html, body');  
  var buscador = $('.buscador');
  var menu_links = $('.menu.lateral a');
  
  //funcion para abrir los plegables
  buscador.blur(function(){
     $(".lista").removeClass("open"); 
    $("#expandir-todo").prop('checked', false);         
  });
  
  //Activar el buscador
  buscador.keyup(function() {    
    
    $(".lista").addClass("open");
    $("#expandir-todo").prop('checked', true);
    
    _this = this;
    // grupo de cosas que se ocultaran
    $.each($("#grupo-busqueda .seccion li, #grupo-busqueda .seccion, #grupo-busqueda .subseccion"), function() {
      if (
        $(this)
        .text()
        .toLowerCase()
        .indexOf(
          $(_this)
          .val()
          .toLowerCase()
        ) === -1
      ){
        $(this).hide();
      }
      else {
        $(this).show();
      }
    });
    
  });

// prevenir el salto de pagina en enlaces trigger
  function ancla_scroll() {
    anclas.on("click", scroll_A);  
  };

  function scroll_A (){
    event.preventDefault();
    var where = $(this).attr('href');
    website.animate({ 
      scrollTop : $( where ).offset().top-80 }, 'slow');
  };

  ancla_scroll();
  
});

const form = document.querySelector("form");
const nextBtn = form.querySelector(".nextBtn");
const allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
  allInput.forEach((input) => {
    if (input.value != "") {
      form.classList.add('secActive');
    } else {
      form.classList.remove('secActive');
    }
  });
});

const loginButton = document.getElementById('loginButton');

// Agregar evento de escucha al botón de inicio de sesión
loginButton.addEventListener('click', function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  const emailLogin = document.getElementById('emailLogin');
  const passwordLogin = document.getElementById('passwordLogin');

  // Obtener los valores de los campos de entrada
  const email = emailLogin.value;
  const password = passwordLogin.value;

  // Validar los valores del formulario
  if (email === '' || password === '') {
    alert('Por favor, ingresa tu correo electrónico y contraseña.');
  } else {
    // Validar el formato del correo electrónico utilizando una expresión regular
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return; // Detener la ejecución si el correo electrónico no es válido
    }

    // Validar la longitud de la contraseña
    const minLength = 6;
    if (password.length < minLength) {
      alert('La contraseña debe tener al menos ' + minLength + ' caracteres.');
      return; // Detener la ejecución si la contraseña es demasiado corta
    }

    // Validación adicional personalizada
    if (password !== 'contraseñaSegura') {
      alert('Contraseña incorrecta. Por favor, inténtalo de nuevo.');
      return; // Detener la ejecución si la contraseña no coincide con el valor predefinido
    }

    // Si todas las validaciones son exitosas, puedes enviar una solicitud a la API o realizar otras acciones
    alert('Inicio de sesión exitoso.');
    // Puedes redirigir al usuario a otra página utilizando window.location.href = 'URL';
  }
});
