$(document).ready(function() {

    // esta función que verifica si un auto ha ganado la carrera
    function checkCompleto() {
        if (completo = false) {
            completo = true;
        } else {
            lugar = 'Segundo';
        }
    }

    // Darle click al boton de arracar
    $('#go').click(function() {
        // Obtenemos el ancho del carro
        let anchoCar = $('#car1').width();
        // Obtenemos el ancho de la pantalla
        let anchoPista = $(window).width() - anchoCar;

        // Generamos un número aleatorio entre 1 y 5000
        let tiempoCarrera1 = Math.floor((Math.random() * 5000) + 1);
        let tiempoCarrera2 = Math.floor((Math.random() * 5000) + 1);

        // establece una variable de marcador en FALSE de manera predeterminada
        let completo = false;

        // se establece el PRIMER lugar de forma predeterminada
        let lugar = 'Primero';

        // Se anima el carro 1
        $('#car1').animate({
            // Movemos el carro por el ancho de la pista
            left: anchoPista

        }, tiempoCarrera1, function() {
            // animar los carros

            // se ejecuta la función
            checkCompleto();

            // Muesta el resultado en el cuadro
            $('#infoCarrera1 span').text('Este auto llego ' + lugar + ' Tiempo de Carrera es: ' + tiempoCarrera1 + ' milisegundo');
        });

        // Se anima el carro 2
        $('#car2').animate({
            // Movemos el carro por el ancho de la pista
            left: anchoPista

        }, tiempoCarrera2, function() {
            // animar los carros

            // se ejecuta la función
            checkCompleto();

            //  Muesta el resultado en el cuadro
            $('#infoCarrera2 span').text('Este auto llego ' + lugar + ' Tiempo de Carrera es: ' + tiempoCarrera2 + ' milisegundo');
        });

    });

});

// Reset Boton
$('#reset').click(function() {
    $('.car').css('left', '0');
    $('.infoCarrera span').text('');
});