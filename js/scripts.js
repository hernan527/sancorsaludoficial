$(document).ready(function() {
     $("#enviar").click(function(event) {
        var errors = [];
        event.preventDefault();
        $("#enviar").attr('disabled', true);
        console.log(' hola 1');
            var form = document.querySelector('#formcotizador1');

    var boton = form.querySelector('#enviar');
  var loader = form.querySelector('#loader-whats');
        // Correct object structure for form data
            // Deshabilitar el bot車n de env赤o y mostrar el loader
    boton.disabled = true;
    loader.style.display = 'block';
        var datawh = {
'nombre': $.trim($('#form-field-nombre').val()),
'telefono': $.trim($('#form-field-telefono').val()),
'email': $.trim($('#form-field-email').val()),
'edad': $.trim($('#form-field-edad').val()),
'provincia': $.trim($('#form-field-provincia').val()),
'edadpareja': $.trim($('#form-field-edadpareja').val()),
'hijosmenores21': $.trim($('#form-field-hijosmenores21').val()),
'hijosentre21y25': $.trim($('#form-field-hijosentre21y25').val()),
'hijosmayoresofamiliares': $.trim($('#form-field-hijosmayoresofamiliares').val()),
'sueldo': $.trim($('#form-field-sueldo').val()), 
'monotributo': $.trim($('#form-field-monotributo').val()),

        };


        if (datawh.nombre == "") {
            errors.push("Su <b>Nombre</b> es requerido");
        }
        if (datawh.telefono == "") {
            errors.push("Su <b>Email</b> es requerido");
        }
                if (datawh.telefono.length < 10) {
            errors.push("Su <b>telefono</b> debe alcanzar los 10 dígitos");
        }
        if (datawh.email == "") {
            errors.push("Su <b>telefono</b> es requerido");
        }
      if (!isValidEmail(datawh.email)) {
            errors.push("Su <b>Email</b> no es válido");
        }


console.log(' hola 2');
        if (errors.length > 0) {
            document.getElementById("form-errores").innerHTML = `
        <div class="alert alert-danger">
            <ul>
                ${errors.map(err => `<li>${err}</li>`).join('')}
            </ul>
        </div>
    `;
            $("#enviar").attr('disabled', false);
                loader.style.display = 'none';

        } else {
                document.getElementById("form-errores").innerHTML = "";

            console.log(' hola 4');
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://webhook.tuchat.com.ar/webhook/005fbe4d-97ce-46a7-9b2a-8cae75fef6e6');

            xhr.onload = function() {
                if (xhr.status === 200) {
      loader.style.display = 'none';
      $('#formcotizador1')[0].reset(); // Resetear el formulario

                    setTimeout(function() {
                        window.location.href = 'https://avalianonline.com.ar';
                    }, 3000);

                } else {
                    try {
                        let errors = '';
     
             boton.disabled = false;
      loader.style.display = 'none';
      $('#formcotizador1')[0].reset(); // Resetear el formulario
                        $("#enviar").attr('disabled', false);
                    } catch (error) {
                        console.log("Error al procesar la respuesta del servidor.");
                        $("#enviar").attr('disabled', false);
                    }
                }
            };

            xhr.onerror = function() {
                alert('Error en la conexión');
                $("#enviar").attr('disabled', false);
            };

            xhr.send(JSON.stringify(datawh));
        }
    });

});

$(document).ready(function() {
     $("#enviar1").click(function(event) {
        var errors = [];
        event.preventDefault();
        $("#enviar1").attr('disabled', true);
        console.log(' hola1 1');
            var form = document.querySelector('formcotizador2');

    var boton = form.querySelector('#enviar1');
  var loader = form.querySelector('#loader-whats1');
        // Correct object structure for form data
            // Deshabilitar el bot車n de env赤o y mostrar el loader
    boton.disabled = true;
    loader.style.display = 'block';
        var datawh = {
'nombre': $.trim($('#form-field-1-nombre').val()),
'telefono': $.trim($('#form-field-1-telefono').val()),
'email': $.trim($('#form-field-1-email').val()),
'edad': $.trim($('#form-field-1-edad').val()),
'provincia': $.trim($('#form-field-1-provincia').val()),
'edadpareja': $.trim($('#form-field-1-edadpareja').val()),
'hijosmenores21': $.trim($('#form-field-1-hijosmenores21').val()),
'hijosentre21y25': $.trim($('#form-field-1-hijosentre21y25').val()),
'hijosmayoresofamiliares': $.trim($('#form-field-1-hijosmayoresofamiliares').val()),
'sueldo': $.trim($('#form-field-1-sueldo').val()), 
'monotributo': $.trim($('#form-field-1-monotributo').val()),

        };


        if (datawh.nombre == "") {
            errors.push("Su <b>Nombre</b> es requerido");
        }
        if (datawh.telefono == "") {
            errors.push("Su <b>Email</b> es requerido");
        }
                if (datawh.telefono.length < 10) {
            errors.push("Su <b>telefono</b> debe alcanzar los 10 dígitos");
        }
        if (datawh.email == "") {
            errors.push("Su <b>telefono</b> es requerido");
        }
      if (!isValidEmail(datawh.email)) {
            errors.push("Su <b>Email</b> no es válido");
        }


console.log(' hola1 2');
        if (errors.length > 0) {
            document.getElementById("form-errores1").innerHTML = `
        <div class="alert alert-danger">
            <ul>
                ${errors.map(err => `<li>${err}</li>`).join('')}
            </ul>
        </div>
    `;
            $("#enviar1").attr('disabled', false);
                loader.style.display = 'none';

        } else {
                document.getElementById("form-errores1").innerHTML = "";

            console.log(' hola1 4');
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://webhook.tuchat.com.ar/webhook/005fbe4d-97ce-46a7-9b2a-8cae75fef6e6');

            xhr.onload = function() {
                if (xhr.status === 200) {
      loader.style.display = 'none';
      $('#formcotizador2')[0].reset(); // Resetear el formulario

                    setTimeout(function() {
                        window.location.href = 'https://avalianonline.com.ar';
                    }, 3000);

                } else {
                    try {
                        let errors = '';
     
             boton.disabled = false;
      loader.style.display = 'none';
      $('#formcotizador2')[0].reset(); // Resetear el formulario
                        $("#enviar1").attr('disabled', false);
                    } catch (error) {
                        console.log("Error al procesar la respuesta del servidor.");
                        $("#enviar1").attr('disabled', false);
                    }
                }
            };

            xhr.onerror = function() {
                alert('Error en la conexión');
                $("#enviar1").attr('disabled', false);
            };

            xhr.send(JSON.stringify(datawh));
        }
    });

});

$(document).ready(function() {
     $("#enviar2").click(function(event) {
        var errors = [];
        event.preventDefault();
        $("#enviar2").attr('disabled', true);
        console.log(' hola2 1');
            var form = document.querySelector('#formcotizador3');

    var boton = form.querySelector('#enviar2');
  var loader = form.querySelector('#loader-whats2');
        // Correct object structure for form data
            // Deshabilitar el bot車n de env赤o y mostrar el loader
    boton.disabled = true;
    loader.style.display = 'block';
        var datawh = {
'nombre': $.trim($('#form-field-2-nombre').val()),
'telefono': $.trim($('#form-field-2-telefono').val()),
'email': $.trim($('#form-field-2-email').val()),
'edad': $.trim($('#form-field-2-edad').val()),
'provincia': $.trim($('#form-field-2-provincia').val()),
'edadpareja': $.trim($('#form-field-2-edadpareja').val()),
'hijosmenores21': $.trim($('#form-field-2-hijosmenores21').val()),
'hijosentre21y25': $.trim($('#form-field-2-hijosentre21y25').val()),
'hijosmayoresofamiliares': $.trim($('#form-field-2-hijosmayoresofamiliares').val()),
'sueldo': $.trim($('#form-field-2-sueldo').val()), 
'monotributo': $.trim($('#form-field-2-monotributo').val()),

        };


        if (datawh.nombre == "") {
            errors.push("Su <b>Nombre</b> es requerido");
        }
        if (datawh.telefono == "") {
            errors.push("Su <b>Email</b> es requerido");
        }
                if (datawh.telefono.length < 10) {
            errors.push("Su <b>telefono</b> debe alcanzar los 10 dígitos");
        }
        if (datawh.email == "") {
            errors.push("Su <b>telefono</b> es requerido");
        }
      if (!isValidEmail(datawh.email)) {
            errors.push("Su <b>Email</b> no es válido");
        }


console.log(' hola2 2');
        if (errors.length > 0) {
            document.getElementById("form-errores2").innerHTML = `
        <div class="alert alert-danger">
            <ul>
                ${errors.map(err => `<li>${err}</li>`).join('')}
            </ul>
        </div>
    `;
            $("#enviar2").attr('disabled', false);
                loader.style.display = 'none';

        } else {
                document.getElementById("form-errores2").innerHTML = "";

            console.log(' hola2 4');
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://webhook.tuchat.com.ar/webhook/005fbe4d-97ce-46a7-9b2a-8cae75fef6e6');

            xhr.onload = function() {
                if (xhr.status === 200) {
      loader.style.display = 'none';
      $('#formcotizador3')[0].reset(); // Resetear el formulario

                    setTimeout(function() {
                        window.location.href = 'https://avalianonline.com.ar';
                    }, 3000);

                } else {
                    try {
                        let errors = '';
     
             boton.disabled = false;
      loader.style.display = 'none';
      $('#formcotizador3')[0].reset(); // Resetear el formulario
                        $("#enviar2").attr('disabled', false);
                    } catch (error) {
                        console.log("Error al procesar la respuesta del servidor.");
                        $("#enviar2").attr('disabled', false);
                    }
                }
            };

            xhr.onerror = function() {
                alert('Error en la conexión');
                $("#enviar2").attr('disabled', false);
            };

            xhr.send(JSON.stringify(datawh));
        }
    });

});


$(document).ready(function() {
     $("#enviar3").click(function(event) {
        var errors = [];
        event.preventDefault();
        $("#enviar3").attr('disabled', true);
        console.log(' hola3 1');
            var form = document.querySelector('#formcotizador4');

    var boton = form.querySelector('#enviar3');
  var loader = form.querySelector('#loader-whats3');
        // Correct object structure for form data
            // Deshabilitar el bot車n de env赤o y mostrar el loader
    boton.disabled = true;
    loader.style.display = 'block';
        var datawh = {
'nombre': $.trim($('#form-field-3-nombre').val()),
'telefono': $.trim($('#form-field-3-telefono').val()),
'email': $.trim($('#form-field-3-email').val()),
'edad': $.trim($('#form-field-3-edad').val()),
'provincia': $.trim($('#form-field-3-provincia').val()),
'edadpareja': $.trim($('#form-field-3-edadpareja').val()),
'hijosmenores21': $.trim($('#form-field-3-hijosmenores21').val()),
'hijosentre21y25': $.trim($('#form-field-3-hijosentre21y25').val()),
'hijosmayoresofamiliares': $.trim($('#form-field-3-hijosmayoresofamiliares').val()),
'sueldo': $.trim($('#form-field-3-sueldo').val()), 
'monotributo': $.trim($('#form-field-3-monotributo').val()),

        };


        if (datawh.nombre == "") {
            errors.push("Su <b>Nombre</b> es requerido");
        }
        if (datawh.telefono == "") {
            errors.push("Su <b>Email</b> es requerido");
        }
                if (datawh.telefono.length < 10) {
            errors.push("Su <b>telefono</b> debe alcanzar los 10 dígitos");
        }
        if (datawh.email == "") {
            errors.push("Su <b>telefono</b> es requerido");
        }
      if (!isValidEmail(datawh.email)) {
            errors.push("Su <b>Email</b> no es válido");
        }


console.log(' hola3 2');
        if (errors.length > 0) {
            document.getElementById("form-errores3").innerHTML = `
        <div class="alert alert-danger">
            <ul>
                ${errors.map(err => `<li>${err}</li>`).join('')}
            </ul>
        </div>
    `;
            $("#enviar3").attr('disabled', false);
                loader.style.display = 'none';

        } else {
                document.getElementById("form-errores3").innerHTML = "";

            console.log(' hola3 4');
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://webhook.tuchat.com.ar/webhook/005fbe4d-97ce-46a7-9b2a-8cae75fef6e6');

            xhr.onload = function() {
                if (xhr.status === 200) {
      loader.style.display = 'none';
      $('#formcotizador2')[0].reset(); // Resetear el formulario

                    setTimeout(function() {
                        window.location.href = 'https://avalianonline.com.ar';
                    }, 3000);

                } else {
                    try {
                        let errors = '';
     
             boton.disabled = false;
      loader.style.display = 'none';
      $('#formcotizador2')[0].reset(); // Resetear el formulario
                        $("#enviar3").attr('disabled', false);
                    } catch (error) {
                        console.log("Error al procesar la respuesta del servidor.");
                        $("#enviar3").attr('disabled', false);
                    }
                }
            };

            xhr.onerror = function() {
                alert('Error en la conexión');
                $("#enviar3").attr('disabled', false);
            };

            xhr.send(JSON.stringify(datawh));
        }
    });

});


$(document).ready(function() {
     $("#enviar4").click(function(event) {
        var errors = [];
        event.preventDefault();
        $("#enviar4").attr('disabled', true);
        console.log(' hola4 1');
            var form = document.querySelector('#formcontacto1');

    var boton = form.querySelector('#enviar4');
  var loader = form.querySelector('#loader-whats4');
        // Correct object structure for form data
            // Deshabilitar el bot車n de env赤o y mostrar el loader
    boton.disabled = true;
    loader.style.display = 'block';
        var datawh = {
'nombre': $.trim($('#form-field-4-nombre').val()),
'telefono': $.trim($('#form-field-4-telefono').val()),
'email': $.trim($('#form-field-4-email').val()),
'mensaje': $.trim($('#form-field-4-mensaje').val()),

        };


        if (datawh.nombre == "") {
            errors.push("Su <b>Nombre</b> es requerido");
        }
        if (datawh.telefono == "") {
            errors.push("Su <b>Email</b> es requerido");
        }
                if (datawh.telefono.length < 10) {
            errors.push("Su <b>telefono</b> debe alcanzar los 10 dígitos");
        }
        if (datawh.email == "") {
            errors.push("Su <b>telefono</b> es requerido");
        }
      if (!isValidEmail(datawh.email)) {
            errors.push("Su <b>Email</b> no es válido");
        }


console.log(' hola4 2');
        if (errors.length > 0) {
            document.getElementById("form-errores4").innerHTML = `
        <div class="alert alert-danger">
            <ul>
                ${errors.map(err => `<li>${err}</li>`).join('')}
            </ul>
        </div>
    `;
            $("#enviar4").attr('disabled', false);
                loader.style.display = 'none';

        } else {
                document.getElementById("form-errores4").innerHTML = "";

            console.log(' hola4 4');
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://webhook.tuchat.com.ar/webhook/005fbe4d-97ce-46a7-9b2a-8cae75fef6e6');

            xhr.onload = function() {
                if (xhr.status === 200) {
      loader.style.display = 'none';
      $('#formcontacto1')[0].reset(); // Resetear el formulario

                    setTimeout(function() {
                        window.location.href = 'https://avalianonline.com.ar';
                    }, 3000);

                } else {
                    try {
                        let errors = '';
     
             boton.disabled = false;
      loader.style.display = 'none';
      $('#formcontacto1')[0].reset(); // Resetear el formulario
                        $("#enviar4").attr('disabled', false);
                    } catch (error) {
                        console.log("Error al procesar la respuesta del servidor.");
                        $("#enviar4").attr('disabled', false);
                    }
                }
            };

            xhr.onerror = function() {
                alert('Error en la conexión');
                $("#enviar4").attr('disabled', false);
            };

            xhr.send(JSON.stringify(datawh));
        }
    });

});

$(document).ready(function() {
     $("#enviar5").click(function(event) {
        var errors = [];
        event.preventDefault();
        $("#enviar5").attr('disabled', true);
        console.log(' hola5 1');
            var form = document.querySelector('#formcontacto2');

    var boton = form.querySelector('#enviar5');
  var loader = form.querySelector('#loader-whats5');
        // Correct object structure for form data
            // Deshabilitar el bot車n de env赤o y mostrar el loader
    boton.disabled = true;
    loader.style.display = 'block';
        var datawh = {
'nombre': $.trim($('#form-field-5-nombre').val()),
'telefono': $.trim($('#form-field-5-telefono').val()),
'email': $.trim($('#form-field-5-email').val()),
'mensaje': $.trim($('#form-field-5-mensaje').val()),

        };


        if (datawh.nombre == "") {
            errors.push("Su <b>Nombre</b> es requerido");
        }
        if (datawh.telefono == "") {
            errors.push("Su <b>Email</b> es requerido");
        }
                if (datawh.telefono.length < 10) {
            errors.push("Su <b>telefono</b> debe alcanzar los 10 dígitos");
        }
        if (datawh.email == "") {
            errors.push("Su <b>telefono</b> es requerido");
        }
      if (!isValidEmail(datawh.email)) {
            errors.push("Su <b>Email</b> no es válido");
        }


console.log(' hola5 2');
        if (errors.length > 0) {
            document.getElementById("form-errores5").innerHTML = `
        <div class="alert alert-danger">
            <ul>
                ${errors.map(err => `<li>${err}</li>`).join('')}
            </ul>
        </div>
    `;
            $("#enviar5").attr('disabled', false);
                loader.style.display = 'none';

        } else {
                document.getElementById("form-errores5").innerHTML = "";

            console.log(' hola5 4');
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://webhook.tuchat.com.ar/webhook/005fbe4d-97ce-46a7-9b2a-8cae75fef6e6');

            xhr.onload = function() {
                if (xhr.status === 200) {
      loader.style.display = 'none';
      $('#formcontacto2')[0].reset(); // Resetear el formulario

                    setTimeout(function() {
                        window.location.href = 'https://avalianonline.com.ar';
                    }, 3000);

                } else {
                    try {
                        let errors = '';
     
             boton.disabled = false;
      loader.style.display = 'none';
      $('#formcontacto2')[0].reset(); // Resetear el formulario
                        $("#enviar5").attr('disabled', false);
                    } catch (error) {
                        console.log("Error al procesar la respuesta del servidor.");
                        $("#enviar5").attr('disabled', false);
                    }
                }
            };

            xhr.onerror = function() {
                alert('Error en la conexión');
                $("#enviar5").attr('disabled', false);
            };

            xhr.send(JSON.stringify(datawh));
        }
    });

});

 
 $(document).ready(function() {
     $("#enviar6").click(function(event) {
        var errors = [];
        event.preventDefault();
        $("#enviar6").attr('disabled', true);
        console.log(' hola6 1');
            var form = document.querySelector('#formcontacto3');

    var boton = form.querySelector('#enviar6');
  var loader = form.querySelector('#loader-whats6');
        // Correct object structure for form data
            // Deshabilitar el bot車n de env赤o y mostrar el loader
    boton.disabled = true;
    loader.style.display = 'block';
        var datawh = {
'nombre': $.trim($('#form-field-6-nombre').val()),
'telefono': $.trim($('#form-field-6-telefono').val()),
'email': $.trim($('#form-field-6-email').val()),
'mensaje': $.trim($('#form-field-6-mensaje').val()),

        };


        if (datawh.nombre == "") {
            errors.push("Su <b>Nombre</b> es requerido");
        }
        if (datawh.telefono == "") {
            errors.push("Su <b>Email</b> es requerido");
        }
                if (datawh.telefono.length < 10) {
            errors.push("Su <b>telefono</b> debe alcanzar los 10 dígitos");
        }
        if (datawh.email == "") {
            errors.push("Su <b>telefono</b> es requerido");
        }
      if (!isValidEmail(datawh.email)) {
            errors.push("Su <b>Email</b> no es válido");
        }


console.log(' hola6 2');
        if (errors.length > 0) {
            document.getElementById("form-errores6").innerHTML = `
        <div class="alert alert-danger">
            <ul>
                ${errors.map(err => `<li>${err}</li>`).join('')}
            </ul>
        </div>
    `;
            $("#enviar6").attr('disabled', false);
                loader.style.display = 'none';

        } else {
                document.getElementById("form-errores6").innerHTML = "";

            console.log(' hola6 4');
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://webhook.tuchat.com.ar/webhook/005fbe4d-97ce-46a7-9b2a-8cae75fef6e6');

            xhr.onload = function() {
                if (xhr.status === 200) {
      loader.style.display = 'none';
      $('#formcontacto3')[0].reset(); // Resetear el formulario

                    setTimeout(function() {
                        window.location.href = 'https://avalianonline.com.ar';
                    }, 3000);

                } else {
                    try {
                        let errors = '';
     
             boton.disabled = false;
      loader.style.display = 'none';
      $('#formcontacto3')[0].reset(); // Resetear el formulario
                        $("#enviar6").attr('disabled', false);
                    } catch (error) {
                        console.log("Error al procesar la respuesta del servidor.");
                        $("#enviar6").attr('disabled', false);
                    }
                }
            };

            xhr.onerror = function() {
                alert('Error en la conexión');
                $("#enviar6").attr('disabled', false);
            };

            xhr.send(JSON.stringify(datawh));
        }
    });

});

$(document).ready(function() {
     $("#enviar7").click(function(event) {
        var errors = [];
        event.preventDefault();
        $("#enviar7").attr('disabled', true);
        console.log(' hola7 1');
            var form = document.querySelector('#formcontacto4');

    var boton = form.querySelector('#enviar7');
  var loader = form.querySelector('#loader-whats7');
        // Correct object structure for form data
            // Deshabilitar el bot車n de env赤o y mostrar el loader
    boton.disabled = true;
    loader.style.display = 'block';
        var datawh = {
'nombre': $.trim($('#form-field-7-nombre').val()),
'telefono': $.trim($('#form-field-7-telefono').val()),
'email': $.trim($('#form-field-7-email').val()),
'mensaje': $.trim($('#form-field-7-mensaje').val()),

        };


        if (datawh.nombre == "") {
            errors.push("Su <b>Nombre</b> es requerido");
        }
        if (datawh.telefono == "") {
            errors.push("Su <b>Email</b> es requerido");
        }
                if (datawh.telefono.length < 10) {
            errors.push("Su <b>telefono</b> debe alcanzar los 10 dígitos");
        }
        if (datawh.email == "") {
            errors.push("Su <b>telefono</b> es requerido");
        }
      if (!isValidEmail(datawh.email)) {
            errors.push("Su <b>Email</b> no es válido");
        }


console.log(' hola7 2');
        if (errors.length > 0) {
            document.getElementById("form-errores7").innerHTML = `
        <div class="alert alert-danger">
            <ul>
                ${errors.map(err => `<li>${err}</li>`).join('')}
            </ul>
        </div>
    `;
            $("#enviar8").attr('disabled', false);
                loader.style.display = 'none';

        } else {
                document.getElementById("form-errores7").innerHTML = "";

            console.log(' hola7 4');
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://webhook.tuchat.com.ar/webhook/005fbe4d-97ce-46a7-9b2a-8cae75fef6e6');

            xhr.onload = function() {
                if (xhr.status === 200) {
      loader.style.display = 'none';
      $('#formcontacto4')[0].reset(); // Resetear el formulario

                    setTimeout(function() {
                        window.location.href = 'https://avalianonline.com.ar';
                    }, 3000);

                } else {
                    try {
                        let errors = '';
     
             boton.disabled = false;
      loader.style.display = 'none';
      $('#formcontacto4')[0].reset(); // Resetear el formulario
                        $("#enviar7").attr('disabled', false);
                    } catch (error) {
                        console.log("Error al procesar la respuesta del servidor.");
                        $("#enviar7").attr('disabled', false);
                    }
                }
            };

            xhr.onerror = function() {
                alert('Error en la conexión');
                $("#enviar7").attr('disabled', false);
            };

            xhr.send(JSON.stringify(datawh));
        }      
    });

});


$(document).ready(function() {
     $("#enviar8").click(function(event) {
        var errors = [];
        event.preventDefault();
        $("#enviar8").attr('disabled', true);
        console.log(' hola8 1');
            var form = document.querySelector('#formcontactopopup1');

    var boton = form.querySelector('#enviar8');
  var loader = form.querySelector('#loader-whats8');
        // Correct object structure for form data
            // Deshabilitar el bot車n de env赤o y mostrar el loader
    boton.disabled = true;
    loader.style.display = 'block';
        var datawh = {
'nombre': $.trim($('#form-field-8-nombre').val()),
'telefono': $.trim($('#form-field-8-telefono').val()),

        };


        if (datawh.nombre == "") {
            errors.push("Su <b>Nombre</b> es requerido");
        }
        if (datawh.telefono == "") {
            errors.push("Su <b>Email</b> es requerido");
        }
                if (datawh.telefono.length < 10) {
            errors.push("Su <b>telefono</b> debe alcanzar los 10 dígitos");
        }

console.log(' errors8',errors);


console.log(' hola8 2');
        if (errors.length > 0) {
            document.getElementById("form-errores8").innerHTML = `
        <div class="alert alert-danger">
            <ul>
                ${errors.map(err => `<li>${err}</li>`).join('')}
            </ul>
        </div>
    `;
            $("#enviar8").attr('disabled', false);
                loader.style.display = 'none';

        } else {
                document.getElementById("form-errores8").innerHTML = "";

            console.log(' hola8 4');
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://webhook.tuchat.com.ar/webhook/005fbe4d-97ce-46a7-9b2a-8cae75fef6e6');

            xhr.onload = function() {
                if (xhr.status === 200) {
      loader.style.display = 'none';
      $('#formcontactopopup1')[0].reset(); // Resetear el formulario

                    setTimeout(function() {
                        window.location.href = 'https://avalianonline.com.ar';
                    }, 3000);
$.magnificPopup.close();
                } else {
                    try {
                        let errors = '';
     
             boton.disabled = false;
      loader.style.display = 'none';
      $('#formcontactopopup1')[0].reset(); // Resetear el formulario
                        $("#enviar8").attr('disabled', false);
                    } catch (error) {
                        console.log("Error al procesar la respuesta del servidor.");
                        $("#enviar8").attr('disabled', false);
                    }
                }
            };

            xhr.onerror = function() {
                alert('Error en la conexión');
                $("#enviar8").attr('disabled', false);
            };

            xhr.send(JSON.stringify(datawh));
        }      
    });

});



$(document).ready(function() {
     $("#enviar9").click(function(event) {
        var errors = [];
        event.preventDefault();
        $("#enviar9").attr('disabled', true);
        console.log(' hola9 1');
            var form = document.querySelector('#formcontactopopup2');

    var boton = form.querySelector('#enviar9');
  var loader = form.querySelector('#loader-whats9');
        // Correct object structure for form data
            // Deshabilitar el bot車n de env赤o y mostrar el loader
    boton.disabled = true;
    loader.style.display = 'block';
        var datawh = {
'nombre': $.trim($('#form-field-9-nombre').val()),
'telefono': $.trim($('#form-field-9-telefono').val()),
        };


        if (datawh.nombre == "") {
            errors.push("Su <b>Nombre</b> es requerido");
        }
        if (datawh.telefono == "") {
            errors.push("Su <b>telefono</b> es requerido");
        }
                if (datawh.telefono.length < 10) {
            errors.push("Su <b>telefono</b> debe alcanzar los 10 dígitos");
        }


console.log(' datawh',datawh);
console.log(' errors9',errors);

console.log(' hola9 2');

        if (errors.length > 0) {
            document.getElementById("form-errores9").innerHTML = `
        <div class="alert alert-danger">
            <ul>
                ${errors.map(err => `<li>${err}</li>`).join('')}
            </ul>
        </div>
    `;
            $("#enviar9").attr('disabled', false);
                loader.style.display = 'none';

        } else {
                document.getElementById("form-errores9").innerHTML = "";

            console.log(' hola9 4');
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://webhook.tuchat.com.ar/webhook/005fbe4d-97ce-46a7-9b2a-8cae75fef6e6');

            xhr.onload = function() {
                if (xhr.status === 200) {
      loader.style.display = 'none';
      $('#formcontactopopup2')[0].reset(); // Resetear el formulario

                    setTimeout(function() {
                        window.location.href = 'https://avalianonline.com.ar';
                    }, 3000);
                    $.magnificPopup.close();

                } else {
                    try {
                        let errors = '';
     
             boton.disabled = false;
      loader.style.display = 'none';
      $('#formcontactopopup2')[0].reset(); // Resetear el formulario
                        $("#enviar9").attr('disabled', false);
                    } catch (error) {
                        console.log("Error al procesar la respuesta del servidor.");
                        $("#enviar9").attr('disabled', false);
                    }
                }
            };

            xhr.onerror = function() {
                alert('Error en la conexión');
                $("#enviar9").attr('disabled', false);
            };

            xhr.send(JSON.stringify(datawh));
        }      
    });

});


function isValidEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var param = '';
    if (urlParams.get('p')) {
        param = ' - ' + (urlParams.get('p'));
    }

    $("#formasancor").find('input:not([type="hidden"]), textarea').each(function() {
        $(this).val('');
    });

    $(window).on('load', function() {
        $('header .copy, form').removeClass('hideme');
        $('.select').on('click', function() {
            $(this).find('ul').slideToggle(400);
        });
        $('.select').on('click', 'li', function() {
            var txt = $(this).html();
            $(this).parents('.select').find('input').val(txt);
        });
        $('.btAnclaCred').on('click', function(e) {
            e.preventDefault();
            $('body,html').stop(true, true).animate({
                scrollTop: 0
            }, 400);
            var dCrd = $(this).data('link');
            $('#credencial-input input').val(dCrd);
        });

     

        $("#formasancor").find('input:not([type="hidden"]), textarea').on('keydown', function() {
            $(this).removeClass('error');
            $("#formasancor").find('.valid-text').html('');
        });

        var sending = false;
     
    });


    (function($, undefined) {
        '$:nomunge';
        $.fn.serializeObject = function() {
            var obj = {};
            $.each(this.serializeArray(), function(i, o) {
                var n = o.name,
                    v = o.value;
                obj[n] = obj[n] === undefined ? v :
                    $.isArray(obj[n]) ? obj[n].concat(v) : [obj[n], v];
            });
            return obj;
        };
    })(jQuery);

    $(window).on('scroll', function() {
        var st = $(window).scrollTop();
        $('header > img').css({
            'margin-top': st * 0.3
        });
        $('.anima').each(function(i) {
            var bottom_of_object = $(this).offset().top  + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('hideme');
            }
        });

        $('.imageCont > img').each(function(i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = st + $(window).height();
            if (bottom_of_window > bottom_of_object) {

            }
        });
    });

    function sortByProperty(objArray, prop, direction) {
        if (arguments.length < 2) {
            throw new Error("ARRAY, AND OBJECT PROPERTY MINIMUM ARGUMENTS, OPTIONAL DIRECTION");
        }
        if (!Array.isArray(objArray)) {
            throw new Error("FIRST ARGUMENT NOT AN ARRAY");
        }
        const clone = objArray.slice(0);
        const direct = arguments.length > 2 ? arguments[2] : 1;
        const propPath = (prop.constructor === Array) ? prop : prop.split(".");
        clone.sort(function(a, b) {
            for (let p in propPath) {
                if (a[propPath[p]] && b[propPath[p]]) {
                    a = a[propPath[p]];
                    b = b[propPath[p]];
                }
            }
            a = a.match(/^\d+$/) ? +a : a;
            b = b.match(/^\d+$/) ? +b : b;
            return ((a < b) ? -1 * direct : ((a > b) ? 1 * direct : 0));
        });
        return clone;
    }


