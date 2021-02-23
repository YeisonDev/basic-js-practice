// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const nPrimo = (numero = 0) => {
    if (!numero) return console.error("No has introducido níngun número");
   
    /*if para que el programa no acepte cadenas de texto que contengan letras 
    si la cadena solo contine números el programa hara la operación sin ningun problema*/
    if (typeof numero !== "number" && numero.toString().match(/[A-z]/)) return console.error(`${numero}, no es un número`);
    if (Math.sign(numero) === -1) return console.error(`${numero} es negativo. Por favor introducir solo números positivos`);
    if (numero % 2 === 0) return console.info(`${numero} no es un número primo`);
    return console.info(`¡${numero} es un numero primo! 👍`)
}

nPrimo(3) //-> ¡3 es un numero primo! 👍
nPrimo(8) //-> 8 no es un número primo
nPrimo(-4) //-> -4 es negativo. Por favor introducir solo números positivos
nPrimo("negativo4") //->negativo4, no es un número
nPrimo("5") //-> ¡5 es un numero primo! 👍
nPrimo() //-> No has introducido níngun número




// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parOImpar = (numero = 0) => {
    if (!numero) return console.error("No has introducido níngun número");
    if (typeof numero !== "number" && numero.toString().match(/[A-z]/g)) return console.error(`${numero}, no es un número`);
    
    return (numero % 2 === 0) ? console.info(`¡${numero} es un número par! ✌`) : console.info(`¡${numero} es un numero primo! ☝`)
}

parOImpar() //-> No has introducido níngun número
parOImpar(4) //-> ¡4 es un número par! ✌
parOImpar(-2) //-> ¡-2 es un número par! ✌
parOImpar("5") //-> ¡5 es un numero primo! ☝
parOImpar("carro7") //-> carro7, no es un número



// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
 


const convertirGrados = (grados=undefined, unidad = undefined) => {
    if (grados === undefined) return console.error("No has introducido los grados")
    if (typeof grados !== "number") return console.error(`${grados}, no es un número`)
    if (unidad === undefined) return console.error("No ingresaste a que tipo de grados convertir. Por favor Ingresar 'C' o 'F'")
    if (typeof unidad !== "string") return console.error(`El valor ${unidad}, no es aceptado. Ingresa "C" o "F"`)
    if (typeof unidad.length !== 1 && !/[CF]/.test(unidad)) return console.error(`El valor ${unidad} no es aceptado. Por favor ingresa "C" o "F"`)

    if (unidad === "C") {
        return console.info(`${grados}°C = ${Math.round((grados*1.8)+32)}°F`)
    } else {
        return console.info(`${grados}°F = ${Math.round((grados-32)/1.8)}°C`)
    }
}

convertirGrados("W") //-> No has introducido los grados
convertirGrados(35) //-> No ingresaste a que tipo de grados convertir. Por favor Ingresar 'C' o 'F'
convertirGrados(34, true) //-> El valor true, no es aceptado. Ingresa "C" o "F"
convertirGrados(34, "Elefante") //-> El valor Elefante no es aceptado. Por favor ingresa "C" o "F"
convertirGrados(35, "C") //-> 35°C = 95°F
convertirGrados(95, "F") //-> 95°F = 35°C
