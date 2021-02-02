//-------------------------------------------------------------------------------ejercicios de programación ---------------------------------------------------------------------------
/*
1) Programa una función que cuente el número de caracteres de una cadena 
de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

const nCaracteres = (texto) => console.log(texto.length) //-> 42
nCaracteres("Practicando con JavaScript"); //-> 26 

//======================================================================================================================================================================================


//1.2 contando el número de caracteres del string anterior, 
//pero esta vez exceptuando los espacios. 

const nCaracteresSinContarEspacios = (texto) => {
    texto = texto.replaceAll(" ", "");
    console.log(texto.length); 
}

nCaracteresSinContarEspacios("Practicando con JavaScript"); //-> 24




//======================================================================================================================================================================================


//1.3 crear una función que te diga cuantos caracteres (sin contar los espacios) han sido introducidos por medio del prompt,
//ademas que te especifique cuantos de esos caracteres son números y cuantos son letras. Luego mostrar los resultados con un alert(). 
const contarCaracteres = () => {
    let givenString = prompt("Introduce una cadena de texto:");

    //funcion regular para obtener solo los números de la cadena de texto
    let regExForNumbers = /(\d+)/g;

    //con esto se obtiene la cantidad de caracteres total (sin contar los espacios) dentro del array. 
    let cantidadTotalCaracteres = givenString.replaceAll(" ", "").length;
    
    //match para crear un array con los numeros obtenidos con la funcion regular y join para que los números que esten juntos no se cuenten como uno solo 
    //dentro del array (se quiere obtener la cantidad de caracteres número, no la cantidad de números de una, dos o mas cifras por separado).
    //ademas uso una operación ternaria para que devuelva 0 y no null en caso de que no hayan números en el string.
    let cantidadDeNumerosPrompt = (givenString.match(regExForNumbers)) ? givenString.match(regExForNumbers).join("").length : 0;
    //resta para obtener solamente la cantidad total de las letras en caso de que haya numeros en la cadena de texto
    let cantidadLetras = cantidadTotalCaracteres - cantidadDeNumerosPrompt;


    //esta función ternaria es para usar "es" o "son" dependiendo de la cantidad de caracteres que sean número en la cadena de texto
    let esSonNumeros = (cantidadDeNumerosPrompt === 1) ? "es un número" : "son números";

    //la misma funcion de arriba pero esta vez aplicada a la cantidad de letras. 
    let esSonLetras = (cantidadLetras === 1) ? "es una letra" : "son letras";
    
    //if/else para que el prompt no nos de error en caso de que no se introduzca ningún texto
    if (givenString) //true
    alert(`El string introducido tiene ${cantidadTotalCaracteres} caracteres, de esos caracteres ${cantidadDeNumerosPrompt} ${esSonNumeros} y ${cantidadLetras} ${esSonLetras}`);
    else 
    alert("No has introducido ningún texto")
}

contarCaracteres();

//=====================================================================================================================================================================================


//1.4 mostrar el numero de letras en cada elemento de un array, 
//En caso de que un elemento tenga espacios, no contarlos como letras

const animals = ["cat", "doggy Leon Mutante", "rabbit", "elephant", "frog", "caterpillar"];

animals.forEach((el) => {
    console.log(`The animal, ${el}, has a name with "${el.replaceAll(" ", "").length}" letters`);
})


//=====================================================================================================================================================================================


// 1.5 contando los caracteres del nombre completo de una persona
// que se encuentra como propiedad de un objeto

const jason = {
    nombre: "Jason",
    apellido: "Portillo",
    edad: 23,
    hobbies: ["correr", "ver peliculas", "programar"],
    presentacion() {
        let fullName = this.nombre + " " + this.apellido;
        console.log(
        `Hola! Me llamo ${fullName},h
        mi nombre completo tiene ${fullName.replaceAll(" ", "").length} letras y tengo ${this.edad} años.
        Uno de mis pasatiempos favoritos es ${this.hobbies[1]} `
        )
    },
}

jason.presentacion();



// ----------------------------------------------------------------------------------------Segunda parter------------------------------------------------------------------------------

//2) Programa una función que te devuelva el texto recortado según el número de 
//caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". 

const recortarTexto = (texto, recorteFinal) => console.log(texto.substring(0, recorteFinal));

recortarTexto("Hola mundo", 4); //-> Hola
recortarTexto("Clases de Ingles", 6) //-> Clases


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
//2.1 hacer lo mismo que el ejercicio anterior pero usando un prompt para
//obtener la cadena de texto a recortar

const recortarPrompt = (texto, recorteFinal) => {
    texto = prompt("Introduce texto");
    recorteFinal = prompt("cantidad de caracteres a cortar");
    console.log(texto.substring(0, recorteFinal));
}

recortarPrompt();

//----------------------------------------------------------------------------------------Tercera Parte--------------------------------------------------------------------------------

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const stringToArray = (texto, separador) => {
    console.log(texto.split(separador));
} 

stringToArray("Hola mundo como estas espero que bien"," ");


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3.1 crear una funcion que separe que cree un arreglo conteniendo todas
//las palabras que se introduciran por medio de un prompt. Luego mostrar ese
//arreglo por medio de una tabla en la consola
const stringToArrayPrompt = (texto) => {
    texto = prompt("Introducir texto")
    console.table(texto.split(" "))
}

stringToArrayPrompt();


//--------------------------------------------------------------------------------------------Cuarta Parte------------------------------------------------------------------------------

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repeatString = (string, nRepeticiones) => {
    //Estoy haciendo que el parametro string tenga ese espacio añadido por defecto para que las repeticiones 
    //vayan separadas por un espacio, sin necesidad de que nosotros pongamos el espacio a la hora 
    //de introducir la cadena de texto
    string += " "
    console.log(string.repeat(nRepeticiones));
}

repeatString("Hola mundo! ¿Como Estan?", 3);

