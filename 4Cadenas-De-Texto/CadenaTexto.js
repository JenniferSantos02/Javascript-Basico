//Una cadena de texto con tu Nombre
let nombre = "Jenniffer"
console.log(nombre)
//Otra cadena de texto con tu Apellido
let apellido = 'Santos'
console.log(apellido)
//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`
console.log(estudiante)
//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = `${estudiante}`
console.log(estudianteMayus.toUpperCase())
//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = `${estudiante}`
console.log(estudianteMinus.toLowerCase())
//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numlet = `${estudiante}`
console.log(numlet.length)
//Una variable que contenga la primera letra del Nombre
console.log(nombre.substring(0,1))
//Otra variable que contenga la última letra del Apellido
console.log(apellido.substring(apellido.length-1))
//Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(estudiante.replace(/ /g, ""))
//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(estudiante.includes(nombre))
