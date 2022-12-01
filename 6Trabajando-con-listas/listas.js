//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compra = ["arroz", "naranja", "durazno", "azúcar", "manzana"]

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
compra.push('Aceite de Girasol')
console.log(compra)

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.pop('Aceite de Girasol')
console.log(compra)

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFav = [
    { titulo: "Forrest Gump", director: "Robert Zemeckis", fecha: new Date(1994, 5, 23) },
    { titulo: "Avatar", director: "James Cameron", fecha: new Date(2009, 11, 18) },
    { titulo: "Dont Look Up", director: "Adam McKay", fecha: new Date(2021, 11, 10) }
]

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliPost = peliculasFav.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))
console.log(peliPost)

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculasFav.map(direc => {
    return direc.director
})
console.log(directores)

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const tituloPeli = peliculasFav.map(peli => {
    return peli.titulo
})
console.log(tituloPeli)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const concatenar = directores.concat(tituloPeli)
console.log(concatenar)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const concatPropagacion = [...directores,...tituloPeli]
console.log(concatPropagacion)