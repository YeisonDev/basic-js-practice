//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". 

const invertirCadena = (texto = "") => (!texto) ? console.warn("No has introducido ningún texto") : (console.info(texto.split('').reverse().join('')));

invertirCadena() //-> No has introducido ningún texto
invertirCadena("Hola Mundo") //-> odnuM aloH



//=============================================================================================================================================================================


// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const nPalabrasRepetidas = (texto = "", palabra = undefined) => {

    //Estos if  son para que la funcion se detenga en caso de no tener alguno de los parametros, y asi no de error durante el resto del flujo del programa. 
    if (!texto) return console.warn("No has introducido ningún texto");
    if (!palabra) return console.warn("No has introducido la palabra a buscar");

    /*Expresion Regular para quitar los signos de puntuación, y que asi no interfieran a la 
    hora de detectar la palabra*/
    let signos = /[.,\/#!$%¿?\^&\*;:{}=\-_`~()”“"…]/g

    /*Uso esto en los comparadores para que el usuario tenga la opción de asignar al parametro "palabra", un argumento escrito tanto con inicial mayúscula como con inicial
    minúscula sin tener ningún problema*/
    let inicialMayuscula = palabra.charAt(0).toUpperCase() + palabra.slice(1);
    let iniciaMinuscula = palabra.charAt(0).toLowerCase() + palabra.slice(1);

    /*creando un array con cada palabra de el string y filtrandolo para obtener la cantidad de veces que se repite la palabra 
    que nosotros queramos*/
    let palabrasRep = texto.replaceAll(signos, "").split(" ").filter(el => el === inicialMayuscula || el === iniciaMinuscula);

    if (palabrasRep.length === 1) return console.info(`La palabra "${palabra}", solo aparece una vez`);
    if (!palabrasRep.length) return console.warn(`La palabra "${palabra}", no esta en el texto`);

    return console.info(`la palabra "${palabra}", se repite ${palabrasRep.length} veces`);
}

nPalabrasRepetidas();
nPalabrasRepetidas("Hola ¿como estas?, estoy acá para decir hola, y repetir hola tantas veces como sea posible, hola, adios");
nPalabrasRepetidas("Hola ¿como estas?, estoy acá para decir hola, y repetir hola tantas veces como sea posible, hola, adios", "queso");
nPalabrasRepetidas("Hola ¿como estas?, estoy acá para decir hola, y repetir hola tantas veces como sea posible, hola, adios", "hola");
nPalabrasRepetidas("Hola ¿como estas?, estoy acá para decir hola, y repetir hola tantas veces como sea posible, hola, adios", "Hola");
nPalabrasRepetidas("Hola ¿como estas?, estoy acá para decir hola, y repetir hola tantas veces como sea posible, hola, adios", "sea");



//===============================================================================================================================================================================


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. 


let esPalindromo = (cadena) => {
    if (!cadena) return console.warn("No has introducido ningúna palabra ó frase");

    /*Quita todos los espacios, signos de puntuación y las marcas diacríticas (el normalize() en especifico nos ayuda con las marcas diacrítas) usando una expRegular.
    luego convierte todo a minúscula; asi se asegura una buena identificación de los palindromos.*/
    let cadenaSinEspacios = cadena.normalize('NFD').replace(/[.,;\s\u0300-\u036f]/g, "").toLowerCase();
    //Esto crea un array con la cadena, luego usamos reverse() para invertir el orden de los caracteres y convertimos el array en una nueva cadena usando join(). 
    let cadenaReverse = cadenaSinEspacios.split("").reverse().join("");


    //ahora retornamos una operacion ternaria que compara la cadenaSinEspacios y la cadenaReverse y asi decirnos si la frace o palabra es palindromo o no. 
    return (cadenaSinEspacios === cadenaReverse) ? console.info(`El texto "${cadena}", si es un palindromo`) : console.info(`El texto "${cadena}", no es un palindromo`);
}

esPalindromo("Oso") //-> El texto "Oso", si es un palindromo
esPalindromo("Ana lava lana") //-> El texto "Ana lava lana", si es un palindromo
esPalindromo("cara de perro") //-> El texto "cara de perro", no es un palindromo
esPalindromo("Así Ramona va, no Marisa") //-> El texto "Así Ramona va, no Marisa", si es un palindromo



// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarPatron = (texto = "", patron = "", signos = "") => {
    (!texto)
    ? console.warn("no has ingresado ningun texto")
    : (!patron) ? console.warn("No has ingreaso patron de caracteres a eliminar")
    : (patron && signos) ? console.info(texto.replace(new RegExp(`[${patron}\\${signos}]`, "ig"), ""))
    : console.info(texto.replace(new RegExp(patron, "ig"), ""))
}

eliminarPatron() //-> no has ingresado ningun texto
eliminarPatron("hola1!, hola2!, hola3!, hola4!, hola5!") //-> No has ingreaso patron de caracteres a eliminar
eliminarPatron("hola1!, hola2!, hola3!, hola4!, hola5!", "hola") //-> 1!, 2!, 3!, 4!, 5!

//si también quieres eliminar signos de puntuación usas el tercer parametro
eliminarPatron("hola1!, hola2!, hola3!, hola4!, hola5!", "hola", "!,") //-> 1 2 3 4 5



