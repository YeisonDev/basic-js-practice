// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const randomNumber = (min = 501, max = 600) => console.info(Math.round(Math.random() * (max - min + 1) + min));

randomNumber()
//tambien puedes cambiar el rango en el que puedes obtener el número aleatorio usando los parametros
randomNumber(1, 10)







// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const esCapicua = (numero = 0) => {
    let reverse = numero.toString().split("").reverse().join("");

    let contieneLetras = numero.toString().match(/[A-z]/g);
    let contieneNumeros = numero.toString().match(/[0-9]/g);

    if (!numero) return console.warn("No has introducio un número 😑")
    if (typeof numero !== "number" && contieneLetras && contieneNumeros) return console.error(`${numero} contiene letras y números. Por favor introducir solamente números 😠`)
    if (typeof numero !== "number" && !contieneNumeros) return console.error(`${numero}, no es un número 🤨`)
    if (Math.sign(numero) === -1) return console.warn("Por favor, introduce solo números positivos 🙄")
    if (numero.toString().length === 1) return console.warn(`El número ${numero} solo tiene un dígito. Introduce números con dos o mas dígitos 😠`)
    if (numero.toString() === reverse) return console.info(`¡El número ${numero}, es capicúa!👍`)
    if (numero.toString() !== reverse) console.info(`El número ${numero} no es capicúa 😢`)
}

esCapicua(2002) //-> ¡El número 2002, es capicúa!👍
esCapicua(45) //-> El número 45, no es capicúa 😢
esCapicua(4) //-> El número 4, solo tiene un dígito. Introduce números con dos o mas dígitos 😠
esCapicua(-13) //-> Por favor, introduce solo números positivos 🙄
esCapicua("-13") //-> Por favor, introduce solo números positivos 🙄
esCapicua() //-> No has introducio un número 😑
esCapicua(2000) //-> El número 2000 no es capicúa 😢
esCapicua("2000") //-> El número 2000 no es capicúa 😢
esCapicua("2002") //-> ¡El número 2002, es capicúa!👍
esCapicua("queso") //-> queso, no es un número 🤨
esCapicua(222.222) //-> ¡El número 222.222, es capicúa!👍
esCapicua("hola1") //-> hola1 contiene letras y números. Por favor introducir solamente números 😠







// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120

const calcularFactorial = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número")
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, No es un número`);
    if(numero === 0) return console.error("El número no puede ser 0");
    if(Math.sign(numero)===-1) return console.error("El número no puede ser negativo");
    
    let factorial = 1
    for (let i = numero; i > 1; i--) {
        factorial *= i
    }
    console.log(`El factorial de ${numero} es ${factorial}`)
}

calcularFactorial() //-> No ingresaste un número
calcularFactorial("5") //-> El valor "5" ingresado, No es un número
calcularFactorial(0) //-> El número no puede ser 0
calcularFactorial(-5) //-> El número no puede ser negativo
calcularFactorial(5) //-> El factorial de 5 es 120
