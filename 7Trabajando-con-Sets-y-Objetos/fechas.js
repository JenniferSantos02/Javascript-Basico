//- La fecha de hoy
const hoy = new Date()
console.log(hoy)
//- La fecha de tu nacimiento
const miFecha = new Date(1995, 1, 2)
console.log(miFecha)
//- Una variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const compara = hoy > miFecha
console.log(compara)
//- Una variable que contenga el día de tu nacimiento
const dia = miFecha.getDate()
console.log(dia)
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = miFecha.getMonth()+1
console.log(mes)
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyo = miFecha.getFullYear()
console.log(anyo)