//- Un nuevo Set con los nombres de tu familia
const familia = new Set (["Jennifer", "Andrea", "Ana", "Joseph", "Jennifer"])

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familia.add("Jennifer")
console.log(familia)
//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familia.add("Javascript")
console.log(familia)