// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const elevarAlCuadrado = (array = undefined) => {
    if (array === undefined) return console.error("No has introducido ningun arreglo");
    if (!(array instanceof Array)) return console.error("El dato introducido no es un arreglo");
    if (!/[0-9]/g.test(array)) return console.error("El arreglo introducido no contiene números");

    let newArray = []

    //con este for obtendremos solo los elementos del array que sean números en caso de que haya otro tipo de dato. 
    for (num of array) {
        if (typeof num === "number") newArray.push(Math.pow(num, 2))
    }


    return console.info(newArray)
}

elevarAlCuadrado([]) //-> El arreglo introducido no contiene números
elevarAlCuadrado() //-> No has introducido ningun arreglo
elevarAlCuadrado(["queso", "agua", "pizza"]) //-> El arreglo introducido no contiene números
elevarAlCuadrado(["queso",1,2]) //-> [1, 4]
elevarAlCuadrado([1, 4, 5]) //-> //-> [1, 16, 25]



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const nMaxMin = (array = undefined) => {
    if (array === undefined) return console.error("No has introducido ningun arreglo");
    if (!(array instanceof Array)) return console.error("El dato introducido no es un arreglo");
    if (!/[0-9]/g.test(array)) return console.error("El arreglo introducido no contiene números");

    //esto es para obtener el numero mas bajo y el mas alto de un arreglo que contenga diferentes tipos de datos
    if (/[0-9A-z]/g.test(array)) {
        let newArray = []

        for (num of array) {
            if (typeof num === "number") newArray.push(num)
        }

        return console.info(`El número mas alto del arreglo es: ${Math.max(...newArray)}; El número mas bajo del arreglo es: ${Math.min(...newArray)}`)
    }


    return console.info(`El número mas alto del arreglo es: ${Math.max(...array)}; El número mas bajo del arreglo es: ${Math.min(...array)}`)
}


nMaxMin() //-> No has introducido ningun arreglo
nMaxMin("cadena de texto") //-> El dato introducido no es un arreglo
nMaxMin([1, 4, 5, 99, -60]) //-> El número mas alto del arreglo es: 99; El número mas bajo del arreglo es: -60
nMaxMin(["gato", 5, "perro", 90, 100]) //-> El número mas alto del arreglo es: 100; El número mas bajo del arreglo es: 5
nMaxMin(["queso", "Pasta", "Aguacate"]) //-> El arreglo introducido no contiene números





// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const arrayParesImpares = (array = undefined) => {
    if (array === undefined) return console.error("No has introducido ningun arreglo");
    if (!(array instanceof Array)) return console.error("El dato introducido no es un arreglo");
    if (!/[0-9]/g.test(array)) return console.error("El arreglo introducido no contiene números");

    return console.info({
        pares: array.filter(num => num % 2 === 0),
        impares: array.filter(num => num % 2 === 1)
    })
}

arrayParesImpares() //-> No has introducido ningun arreglo
arrayParesImpares([]) //-> El arreglo introducido no contiene números
arrayParesImpares("12345") //-> El dato introducido no es un arreglo
arrayParesImpares([1,2,3,4,5,6,7,8,9,0]) 
/*-> {pares: Array(5), impares: Array(5)}
     impares: (5) [1, 3, 5, 7, 9]
     pares: (5) [2, 4, 6, 8, 0] */