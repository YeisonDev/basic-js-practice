// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const arrayDesAsc = (arr=undefined) =>  {
    if (arr === undefined) return console.error("No has introducido el arreglo");
    if (arr.length === 0) return console.warn("El arreglo esta vacío")
    if (!(arr instanceof Array)) return console.error("Los datos ingresados no son un arreglo");
    if (/[A-z]/g.test(arr)) return console.error("El array introducido no contiene números")

    let asc = arr.map(e=>e).sort((a,b)=>a-b);
    let des = arr.map(e=>e).sort((a,b)=>b-a)
    
    console.info({
        asc,
        des 
    })
}

arrayDesAsc() //-> No has introducido el arreglo
arrayDesAsc([]) //-> El arreglo esta vacío
arrayDesAsc(false) //-> Los datos ingresados no son un arreglo
arrayDesAsc(["Queso", "Pan", "Pizza"]) //-> El array introducido no contiene números
arrayDesAsc([7, 5,7,8,6,100,500])
//-> asc: Array(7), des: Array(7)}
//-> asc: (7) [5, 6, 7, 7, 8, 100, 500]
//-> des: (7) [500, 100, 8, 7, 7, 6, 5]






// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const eliminarDuplicados = (arr=undefined) => {
    if (arr === undefined) return console.error("No has introducido el arreglo");
    if (arr.length === 0) return console.warn("El arreglo esta vacío")
    if (!(arr instanceof Array)) return console.error("Los datos ingresados no son un arreglo");

    let newArray = []

    arr.forEach(el => {if(!(newArray.includes(el))) return newArray.push(el)})

    console.info(newArray);
}

eliminarDuplicados() //-> No has introducido el arreglo
eliminarDuplicados([]) //-> El arreglo esta vacío
eliminarDuplicados("Queso") //-> Los datos ingresados no son un arreglo
eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]) //->  ["x", 10, 2, "10", true]






// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arr=undefined) => {
    if (arr === undefined) return console.error("No has introducido el arreglo");
    if (arr.length === 0) return console.warn("El arreglo esta vacío")
    if (!(arr instanceof Array)) return console.error("Los datos ingresados no son un arreglo");
    if (/[A-z]/g.test(arr)) return console.error("El arreglo introducido debe contener solamente números") 

    let suma = arr.reduce((a,b) => a + b, 0); 
    
    console.info(suma / arr.length)
}

promedio() //-> No has introducido el arreglo
promedio([]) //-> El arreglo esta vacío
promedio({}) //-> Los datos ingresados no son un arreglo
promedio(["hola", 1, "queso", 2]) //-> El arreglo introducido debe contener solamente números
promedio([9,8,7,6,5,4,3,2,1,0]) //-> 4.5
