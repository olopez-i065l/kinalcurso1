"use strict";

let primerNumero, segundoNumero, tipoOperacion, resultado;

// Definimos una función para limpiar la pantalla
function limpiarPantalla() {
    document.getElementById('pantalla').value = "";
}

// Definimos una función para marcar botones
function marcarBoton(boton) {
    document.getElementById('pantalla').value += boton;
}

// Definimos una función para cambiar el signo
function cambiarSigno() {
    let pantalla = document.getElementById('pantalla');
    pantalla.value = Number(pantalla.value) * -1;
}

// Definimos una función para calcular el resultado
function calcular() {
    segundoNumero = Number(document.getElementById('pantalla').value);
    limpiarPantalla();
    switch (tipoOperacion) {
        case 1:
            resultado = primerNumero + segundoNumero;
            break;
        case 2:
            resultado = primerNumero - segundoNumero;
            break;
        case 3:
            resultado = primerNumero * segundoNumero;
            break;
        case 4:
            resultado = primerNumero / segundoNumero;
            break;
        case 5:
            resultado = primerNumero % segundoNumero;
            break;
        case 6:
            resultado = Math.pow(primerNumero, segundoNumero);
            break;
        default:
            resultado = "Error";
    }
    document.getElementById('pantalla').value = resultado;
}

// Definimos una función para las operaciones
function operacion(op) {
    primerNumero = Number(document.getElementById('pantalla').value);
    limpiarPantalla();
    switch (op) {
        case '+':
            tipoOperacion = 1;
            break;
        case '-':
            tipoOperacion = 2;
            break;
        case '*':
            tipoOperacion = 3;
            break;
        case '/':
            tipoOperacion = 4;
            break;
        case '%':
            tipoOperacion = 5;
            break;
        case '^':
            tipoOperacion = 6;
            break;
        default:
            tipoOperacion = null;
    }
}

// Definimos una función para el porcentaje
function porcentaje() {
    segundoNumero = Number(document.getElementById('pantalla').value);
    limpiarPantalla();
    resultado = primerNumero * (segundoNumero / 100);
    document.getElementById('pantalla').value = resultado;
}
