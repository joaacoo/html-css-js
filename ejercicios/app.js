// Array Parte 4

let articulos_bd = [
    {codigo: 'ART100', descripcion: 'DESCRIPCION 100', precio: 100},
    {codigo: 'ART200', descripcion: 'DESCRIPCION 200', precio: 200},
    {codigo: 'ART200', descripcion: 'DESCRIPCION 300', precio: 300},
];


// Parte 3 

// Ejercicio 1

const primerCampo = document.querySelector("#primerCampo");

primerCampo.addEventListener("input", function(){
    primerCampo.value = primerCampo.value.toUpperCase();
});

const segundoCampo = document.querySelector("#segundoCampo");

// Ejercicio 2
segundoCampo.addEventListener("blur", function(){
    segundoCampo.value = segundoCampo.value.trim().toLowerCase();
});

// Ejercicio 3
segundoCampo.addEventListener("input", function(){
    segundoCampo.value = segundoCampo.value.replaceAll("A","*");
    segundoCampo.value = segundoCampo.value.replaceAll("a","*");
});


// Ejercicio 1

const boton = document.querySelector(".botonAlerta");

boton.addEventListener("click", function() {
    const input = document.querySelector("#input-1");
    alert("Este es el id del input: " + input.id);
});

// Ejercicio 2
const buttonh3 = document.querySelector(".abrir-h3");
const textoh3 = document.querySelector(".texto-h3");

$(textoh3).hide();    

buttonh3.addEventListener("click", function() {
    $(textoh3).show();
    $(buttonh3).hide();
});


// Ejercicio 3

const input2 = document.querySelector(".input-2");
const div2 = document.querySelector(".texto-2");

const input3 = document.querySelector(".input-3");
const div3 = document.querySelector(".texto-3");

const input4 = document.querySelector(".input-4");
const div4 = document.querySelector(".texto-4");

const sumbit = document.querySelector(".sumbit");

let resultado = "Campo obligatorio"

sumbit.addEventListener("click", function() {

    if(input2.value === ""){
        div2.textContent = resultado    
    }
    
    if (input3.value === ""){
        div3.textContent = resultado
    }

    if (input4.value === ""){
        div4.textContent = resultado
    }
});


// Ejercicio 4
const select = document.querySelector(".select")

$(".motivo").hide();

select.addEventListener("change", function() {
    if (select.value === "Perdido" || select.value === "Rechazado"){
        $(".motivo").show();
    }else{
        $(".motivo").hide();
    }
});


// Parte 2 

// Ejercicio 1

const agregarFila = document.querySelector(".agregar-fila");
const cuerpoTabla = document.querySelector(".cuerpo-tabla");

agregarFila.addEventListener("click", function() {

    const crearFila = document.createElement("tr");

    // articulo
    const celdaArticulo = document.createElement("td");
    const inputArticulo = document.createElement("input");

    celdaArticulo.append(inputArticulo);
    crearFila.append(celdaArticulo);

    // descripcion
    const celdaDescripcion = document.createElement("td");
    const inputDescripcion = document.createElement("input");

    celdaDescripcion.append(inputDescripcion);
    crearFila.append(celdaDescripcion);

    // Cantidad
    const celdaCantidad = document.createElement("td");
    const inputCantidad = document.createElement("input");

    celdaCantidad.append(inputCantidad);
    crearFila.append(celdaCantidad);

    // Precio
    const celdaPrecio = document.createElement("td");
    const inputPrecio = document.createElement("input");

    celdaPrecio.append(inputPrecio);
    crearFila.append(celdaPrecio);

    // Importe
    const celdaImporte = document.createElement("td");
    const inputImporte = document.createElement("input");

    celdaImporte.append(inputImporte);
    crearFila.append(celdaImporte);

    // boton eliminar
    const celdaEliminar = document.createElement("td");
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    celdaEliminar.append(botonEliminar);
    crearFila.append(celdaEliminar);


    // Ejercicio 3
    botonEliminar.addEventListener("click", function(){
        let respuesta = confirm('¿Queres borrar esta fila en particular?')
        if(respuesta == true){
            crearFila.remove();
        }
    });

    // Ejercicio 4    
    inputCantidad.addEventListener('blur', function() {
        if (isNaN(inputPrecio.value) || isNaN(inputCantidad.value)) {
        alert("Debes ingresar números");
        
        }else{
            let ResultadoImporte = inputCantidad.value * inputPrecio.value
            inputImporte.value = ResultadoImporte;
        }
    });

    // Parte 4

    let encontrado = false

    inputArticulo.addEventListener('blur', function() {
        for (i=0; i < articulos_bd.length; i++){
            if(inputArticulo.value.trim().toUpperCase() == articulos_bd[i].codigo){
                inputDescripcion.value = articulos_bd[i].descripcion;
                inputPrecio.value = articulos_bd[i].precio;
                encontrado = true;
            }
        }
        if(encontrado === false){
            alert("No existe el codigo ingresado")
        }
    });

    
    // Agregar la fila completa
    cuerpoTabla.append(crearFila);

    arrayTabla.push(crearFila); // cree el array para el ej 2

});

// Ejercicio 2
let arrayTabla = [];

const botonEliminar = document.querySelector(".boton-eliminar");

botonEliminar.addEventListener("click", function(){
    let respuesta = confirm("¿Queres borrar todas las filas (Aceptar) o todos menos la principal (Cancelar)?");

    if(respuesta == true){
        for (i = 0; i < arrayTabla.length; i++) {
            arrayTabla[i].remove();
        }

        arrayTabla = []; // Lo vuelvo a iniciarlizar vacio porque sino quedan elementos en el array, porque remove solo borra html, no en memoria. Con esto funciona lo de borra hasta la fila principal.

    }else{
        for (i = 1; i < arrayTabla.length; i++) {
            arrayTabla[i].remove();
        }
    }
});


