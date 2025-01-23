// Inicializa EmailJS
emailjs.init("6-F1FsinyTjkCvfiT");
 // Reemplaza con tu User ID

// Captura el evento de envío del formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario recargue la página

  // Envía los datos del formulario a EmailJS
  emailjs.sendForm("YOservice_yezgxgd", "template_0d3t4mr", this)
    .then(function() {
      alert("Correo enviado correctamente.");
    }, function(error) {
      alert("Error al enviar el correo: " + JSON.stringify(error));
    });
});
