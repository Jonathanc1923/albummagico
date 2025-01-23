// Inicializa EmailJS
emailjs.init("nkOfrIKMdX0rJg9egQvN9"); // Reemplaza con tu User ID

// Captura el evento de envío del formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Previene la recarga de la página al enviar el formulario

  // Envía los datos del formulario a EmailJS
  emailjs.sendForm("service_yezgxgd", "template_0d3t4mr", this)
    .then(function(response) {
      alert("Correo enviado correctamente: " + response.status);
    }, function(error) {
      alert("Error al enviar el correo: " + JSON.stringify(error));
    });
});
