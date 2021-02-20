//-------------------------------------------------------------------------------ejercicios de programación ---------------------------------------------------------------------------
/*
1) Programa una función que cuente el número de caracteres de una cadena 
de texto, Ex. miFuncion("Hola Mundo") devolverá 10.
*/

const nCaracteres = (texto="") => (!texto) ? console.warn("No has introducido un texto") : console.log(texto.length);

nCaracteres("Practicando con JavaScript"); 





// ----------------------------------------------------------------------------------------segundo ejercicio------------------------------------------------------------------------------

//2) Programa una función que te devuelva el texto recortado según el número de 
//caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". 

const recortarTexto = (texto="", recorteFinal=undefined) => (!texto) ? console.warn("No has introducido un texto") 
: (!recorteFinal) ? console.warn("No has introducido la cantidad de caracteres a cortar") 
: (Math.sign(recorteFinal) === -1) ? console.warn("Los números negativos no son validos; introduce un número positivo") 
: console.info(texto.substring(0, recorteFinal))

recortarTexto(); 
recortarTexto("Hola mundo");
recortarTexto("Hola mundo", -6);
recortarTexto("Hola mundo", 4);




//----------------------------------------------------------------------------------------Tercera Parte--------------------------------------------------------------------------------

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const stringToArray = (texto, separador) => (!texto) ? console.warn("No has introducido el texto") 
: (!separador) ? console.warn("Debes introducir indicador de separación") 
: (texto.includes(separador) === false) ? console.error("Este separador no coincide con ningun caracter del texto. Introduce un nuevo separador") 
: console.log(texto.split(separador));

stringToArray("Hola mundo ¿como estas? espero que bien"," ");
stringToArray("Hola mundo ¿como estas? espero que bien",";");
stringToArray("Hola mundo ¿como estas? espero que bien","?");
stringToArray("","?");
stringToArray("Hola mundo ¿como estas? espero que bien");








//--------------------------------------------------------------------------------------------Cuarta Parte------------------------------------------------------------------------------

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repeatString = (string="", nRepeticiones=undefined) => {
    if (!string) return console.warn("Debes introducir el texto a repetir");
    if (nRepeticiones === 0) return console.warn("El número de repeticiones no puede ser 0");
    if (!nRepeticiones) return console.warn("No has introducido el número de repeticiones"); 
    if (Math.sign(nRepeticiones)=== -1) return console.warn("No se aceptan números negativos, introduce un número positivo"); 
    
    
    for (let i = 1; i <= nRepeticiones; i++) console.info(`${string}, ${[i]}`);
}

repeatString("", 3);
repeatString("Hola mundo! ¿Como Estan?");
repeatString("Hola mundo! ¿Como Estan?", -3);
repeatString("Hola mundo! ¿Como Estan?", 0);
repeatString("Hola mundo! ¿Como Estan?", 3);




