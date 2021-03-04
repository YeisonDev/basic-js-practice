// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const vocalesVsConsonantes = (cadena = undefined) => {
    if (cadena === undefined) return console.error("No has introducido una cadena de texto")
    if (typeof cadena !== "string") return console.error(`${cadena} no es una cadena de texto`)
    
    //normalize para quite los acentos a las vocales y asi detecte cada una de ellas sin problemas. 
    let vocales = cadena.normalize("NFD").match(/[aeiou]/ig)
    let consonantes = cadena.match(/[b-df-hj-np-tv-zñ]/ig)

    return console.info(`la cadena de texto contiene ${vocales.length} vocales y ${consonantes.length} consonantes`)
}

vocalesVsConsonantes() //-> No has introducido una cadena de texto
vocalesVsConsonantes(12) //-> 12 no es una cadena de texto
vocalesVsConsonantes("Hola Mundo") //-> la cadena de texto contiene 8 vocales y 5 consonantes
vocalesVsConsonantes("El pingüino cayó en la nieve") //-> la cadena de texto contiene 12 vocales y 11 consonantes
vocalesVsConsonantes("ñoño") //-> la cadena de texto contiene 2 vocales y 2 consonantes






// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre="") => {
    if (!nombre) return console.error("No has introducido un nombre")
    if (typeof nombre !== "string") return console.error(`${nombre} no es un nombre`)

    let expReg = /^[A-Za-zÑñÁáÉéÍiÓóÚúÜü\s]+$/g.test(nombre);

    return (expReg) 
    ? console.info("El nombre es valido")
    : console.warn("El nombre no es valido")
}

validarNombre() //-> No has introducido un nombre
validarNombre(3) //-> 3 no es un nombre
validarNombre("Jas1on Portillo") //-> El nombre no es valido
validarNombre("Juan alejandro peréz peréz") //-> El nombre es valido








// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = undefined) => {
    if (email === undefined) return console.error("No has introducido ningún e-mail") 
    if (typeof email !== "string") return console.error(`"${email}", NO es un e-mail`) 

    let expReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(email);
    
    return (expReg) ? console.info(`${email}, es un e-mail valido`)
    : console.warn(`${email}, No es un email valido`)
}

validarEmail("jonmircha@gmail.com") //-> jonmircha@gmail.com, es un e-mail valido
validarEmail("correo.com") //-> correo.com, No es un email valido
validarEmail(123) //-> "123", NO es un e-mail
validarEmail("elDon123@hotmail.com") //-> elDon123@hotmail.com, es un e-mail valido
validarEmail("estudiante@ufg.edu.sv") //-> estudiante@ufc.edu.sv, es un e-mail valido