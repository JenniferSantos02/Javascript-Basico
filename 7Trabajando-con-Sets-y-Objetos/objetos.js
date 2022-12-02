//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const misDatos = {
    nombre : "Jenniffer", 
    apellido: "Santos",
    edad: 27,
    altura: 1.55,
    eresDesarrollador: false
}

//- Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = misDatos.edad
console.log(miEdad)

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datos = [
  {  ...misDatos

  },
  {
    nombre : "Angie", 
    apellido: "Calderón",
    edad: 29,
    altura: 1.61,
    eresDesarrollador: false
  },

  {
    nombre : "Lucía", 
    apellido: "Castro",
    edad: 25,
    altura: 1.53,
    eresDesarrollador: false
  }
] 

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const datosOrden = datos.sort ((a, b) => b.edad - a.edad)
console.log(datosOrden)