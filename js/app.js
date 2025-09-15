$(document).ready(function() {
  // Click event on the accordion label
  $(".etiqueta").click(function() {
    var contenedor = $(this).closest(".contenedor"); // Find the closest container for the clicked label
    
    // Toggle the 'activa' class to show/hide the content
    contenedor.toggleClass("activa");

    // If content is shown, adjust the height dynamically
    if (contenedor.hasClass("activa")) {
      var contentHeight = contenedor.find(".contenido")[0].scrollHeight;
      contenedor.find(".contenido").css('height', contentHeight); // Set dynamic height for smooth opening
    } else {
      contenedor.find(".contenido").css('height', '0'); // Collapse to 0 height when not active
    }
  });
});



