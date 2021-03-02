// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero=undefined, base=undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número a convertir");
    if (typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un número`)
    if (base === undefined) return console.warn("no ingresaste la base a convertir"); 
    if (typeof base !== "number") return console.error(`El valor ${base} ingresado, NO es un número`)

    if (base === 2) {
        return console.info(`${numero} base ${base} es igual a ${parseInt(numero, base)} base 10 (decimal)`)
    } else if (base === 10) {
        return console.info(`${numero} base ${base} es igual a ${numero.toString(2)} base 2 (binario)`)
    } else {
        return  console.log("El tipo de base a convertir no es valido")
    }

}

convertirBinarioDecimal() //-> No ingresaste un número a convertir
convertirBinarioDecimal("100") //-> El valor 100 ingresado, NO es un número
convertirBinarioDecimal(100) //-> no ingresaste la base a convertir
convertirBinarioDecimal(100, "2") //-> El valor 2 ingresado, NO es un número
convertirBinarioDecimal(100,2) //-> 100 base 2 es igual a 4 base 10 (decimal)
convertirBinarioDecimal(1110010, 2) //-> 1110010 base 2 es igual a 114 base 10 (decimal)
convertirBinarioDecimal(114,10) //-> 114 base 10 es igual a 1110010 base 2 (binario)
convertirBinarioDecimal(4, 10) //-> 4 base 10 es igual a 100 base 2 (binario)
convertirBinarioDecimal(4, 3) //-> El tipo de base a convertir no es valido





// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (valor=0, descuento=0) => {
    if (!valor) return console.error("Introduce el precio del producto");
    if (typeof valor !== "number") return console.error(`${valor} no es un número. Introduce el precio en números`)
    if (descuento === 0) return console.error(`No has introducido el porcentaje a descontar`)
    if (typeof descuento !== "number") return console.error(`${descuento} no es un número. Por favor introducir el porcentaje a descontar en números`) 
    if (Math.sign(descuento) === -1) return console.error("El monto no puede ser negativo")
   
    return console.info(`El precio de su producto de $${valor.toFixed(2)} con el %${descuento} de descuento es: $${(valor-(valor*descuento/100)).toFixed(2)}`)
}

descuento() //-> Introduce el precio del producto
descuento("mil", 20) //-> mil no es un número. Introduce el precio en números
descuento(1000,"dos") //-> dos no es un número. Por favor introducir el porcentaje a descontar en números
descuento(1000, 20) //-> El precio de su producto de $1000.00 con el %20 de descuento es: $800.00
descuento(75,-25) //-> El monto no puede ser negativo
descuento(0.20) //-> No has introducido el porcentaje a descontar
descuento(40, 10) //-> El precio de su producto de $40.00 con el %10 de descuento es: $36.00



// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). 

const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No ingresaste la fecha")
    if (!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida")

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosEnMs = 1000*60*60*24*365
    let aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMs);

    return (Math.sign(aniosHumanos) === -1) ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
    : (Math.sign(aniosHumanos) === 1) ? console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
}

calcularAnios() //-> No ingresaste la fecha
calcularAnios([]) //-> El valor que ingresaste no es una fecha válida
calcularAnios(false) //-> El valor que ingresaste no es una fecha válida
calcularAnios(new Date()) //-> Estamos en el año actual 2021
calcularAnios(new Date(1984, 4, 23)) //-> Han pasado 36 años desde 1984
calcularAnios(new Date(1996, 5, 23)) //-> Han pasado 24 años desde 1996
calcularAnios(new Date(2084, 4, 23)) //-> Faltan 64 años para el 2084.

