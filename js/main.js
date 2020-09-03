/**
* @name main.js
* @file Calculadora
* @author William Mannix
* @version 1.0.0
*/

"use strict";

window.addEventListener('load', calcular, false);

function calcular() {

    var numero1 = document.getElementById('numero1'); 
    var numero2 = document.getElementById('numero2'); 
    var resultado;
    var general;

    let boton = ['btn1','btn2','btn3','btn4','btn5'];
    let operacion = [sumar, restar, multiplicar, dividir, borrar];

    for (var i = 0; i < 5; i++){
        var general = document.getElementById(boton[i]);
        general.onclick = operacion[i];
    }
    
    /*var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');
    var btn5 = document.getElementById('btn5');*/

    /*btn1.onclick = sumar;
    btn2.onclick = restar;
    btn3.onclick = multiplicar;
    btn4.onclick = dividir;
    btn5.onclick = borrar;*/
    
    function sumar(e) {
        resultado = Number(numero1.value) + Number(numero2.value);
        imprimir();
    }

    function restar(e) {
        resultado = Number(numero1.value) - Number(numero2.value);
        imprimir();
    }

    function multiplicar(e) {
        resultado = Number(numero1.value) * Number(numero2.value);
        imprimir();
    }

    function dividir(e) {
        resultado = Number(numero1.value) / Number(numero2.value);
        imprimir();
    }

    function borrar(e) {
        numero1.value = '';
        numero2.value = '';
        resultado = '';
        document.getElementById("total").innerHTML = resultado;
    }

    function imprimir(e) {
        document.getElementById('total').innerHTML = resultado;
        console.log(resultado);
    }
}



