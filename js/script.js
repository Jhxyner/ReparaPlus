document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada y lista');
  
    // Funcionalidad para el formulario de videollamada
    const videoCallForm = document.getElementById('video-call-form');
    if (videoCallForm) {
      videoCallForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Aquí se puede añadir código para manejar el inicio de la videollamada
        alert('Videollamada programada.');
      });
    }
  
    // Funcionalidad para el formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Aquí se puede añadir código para manejar el envío del mensaje
        alert('Mensaje enviado.');
      });
    }
  });
  