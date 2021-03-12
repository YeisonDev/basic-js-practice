/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición. ****************************************************
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película. */

/* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

// const arregloPeliculas = [["az4569874","La pelicula peculiar", 1995, "Estados Unidos", [action, drama, fantasy], 5.6],[],[]]



class Pelicula {
  constructor({id, titulo, director, año, pais, generos, calificacion}) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.año = año;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(año);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificación(calificacion); 
  }

  static get listaGeneros() {
    return ["Action","Adult", "Adventure", "Animation", "Biography","Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
  }

  static generosAceptados(){
    return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`)
  }

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  validarCadena(propiedad, valor) {
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, No es una cadena de texto`)
    
    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`);

    return true;
  }

  validarNumero(propiedad, valor){
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, No es un número`); 

    return true;
  }

  validarArreglo(propiedad, valor){
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, No es un arreglo`) 
    if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene ningún dato`) 

    for  (let cadena of valor) {
      if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado no es una cadena de texto`);
    }

    return true;
  }

  //-------------------------------------------------------------------------------------------------------------------------------------------------
  
  validarIMDB(id){
    if(this.validarCadena("IMDB id", id)){
      if(!(/^[a-z]{2}[0-9]{7}$/.test(id))) {
        return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracterees, los primeros 2 letras minúsculas, y los 7 restantes, números`)
      }
    }
  }

  validarTitulo(titulo){
    if(this.validarCadena("Titulo", titulo)){
      this.validarLongitudCadena("Titulo", titulo, 100);
    }
  }

  validarDirector(director){
    if(this.validarCadena("Director", director)){
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  validarEstreno(año){
    if(this.validarNumero("Año de Estreno", año)){
      if(!(/^([0-9]){4}$/.test(año))) {
        return console.error(`Año de Estreno "${año}" no es valido, debe ser un número de 4 digitos`)
      }
    }
  }

  validarPais(pais){
    this.validarArreglo("País", pais);
  }

  validarGeneros(generos){
    if(this.validarArreglo("Generos", generos)){
      for(let genero of generos) {
        //console.log(genero, Pelicula.listaGeneros.includes(genero));
        if(!Pelicula.listaGeneros.includes(genero)){
          console.error(`Genero(s) incorrectos: "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }
 
  validarCalificación(calificacion){
    if(this.validarNumero("Año de Estreno", calificacion)){
      return (calificacion < 0 || calificacion > 10) 
      ? console.error("La calificación debe estar en un rango de 0 a 10")
      : this.calificacion = calificacion.toFixed(1);
    }
  }


  fichaTecnica(){
    console.log(`Ficha Técnica\nTitulo: "${this.titulo}\nDirector: "${this.director}"\nAño: "${this.año}"\nPaís: "${this.pais.join(", ")}"\nGéneros: "${this.generos.join(", ")}"\nCalificación: "${this.calificacion}"\nIMDB id: "${this.id}"`);
  }

}



const misPeliculas = [
  {
    id: "tt0758758",
    titulo: "Into the wild",
    director: "Sean Penn",
    año: 2007, 
    pais: ["USA"],
    generos: ["Adventure","Biography", "Drama"],
    calificacion: 8.1
  },
  {
    id: "tt0479143",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    año: 2006, 
    pais: ["USA"],
    generos: ["Action","Drama", "Sport"],
    calificacion: 7.1
  },
  {
    id: "tt0468569",
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    año: 2008, 
    pais: ["USA", "UK"],
    generos: ["Action","Crime", "Drama"],
    calificacion: 9.0
  }
];

misPeliculas.forEach(el => new Pelicula(el).fichaTecnica());