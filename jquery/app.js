$(document).ready(function(){

/*     $('h1').html('Etiqeuta h1'); // selecionamos la etiqueta
    $('.display-4').html('desde clase'); // selecionamos la clase
    $('#h1').html('desde id'); // selecionamos el id */

/*     document.querySelector('h1').innerHTML = 'Etiqueta h1';
    document.querySelector('.display-4').innerHTML = 'desde clase';
    document.querySelector('#h1').innerHTML = 'desde id';

    $('.container h1').html('cambio de texto');
    $('.container h1:first').html('cambio de texto'); // selecionamos el primer h1
    $('.container h1:last').html('cambio de texto'); // selecionamos el ultimo h1

    $('.container h2:fist').addClass('display-4'); */

    $('#h1').addClass('text-danger');  // agregamos clases 

    $('#h1').removeClass('display-4'); // sacamos clases

    $('#contenido').append('<h1> este es un elemento al final</h1>');

    // $('#contenido').prepend('<h1> este es un elemento al principio</h1>');

    $('#color-azul').css('color', 'blue');
    $('#color-azul').css({color: 'blue', background: 'black'});

   /*  $('#color-azul').remove(); */ // remove borra 

    $('#color-azul').hide(); // hide oculta

    $('img').attr('src','https://upload.wikimedia.org/wikipedia/commons/4/42/Escudo_de_Banfield.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original');

    $('img:first').attr({width: '120px', height: '150px'});

    var resultado = $('#resultado');

   $('.btn-primary').click(function (e) {
        resultado.show(250);
   });

   $('.btn-danger').click(function (e) { 
        resultado.hide(250);
   });

   $('.btn-warning').click(function (e) {
        resultado.toggle(250);
   });

    $('#formulario').submit(function (e) { 
        e.preventDefault();
        var nombre = $('#nombre').val();
        console.log(nombre);       
    });



});