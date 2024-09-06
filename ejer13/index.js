/* Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Finalmente retorna el array.
De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente. */
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Lando', //lo siento, para mí no existe una tal Rey en Star Wars ;)
  'Anakin',
  'Obi-Wan'
]
const findArrayIndex = (array, text) => {
  return array.indexOf(text)
}

const removeItem = (array, text) => {
  const indice = findArrayIndex(array, text)
  if (indice !== -1) {
    array.splice(indice, 1)
  }
  return array
}
console.log(removeItem(mainCharacters, 'Darth Vader'))
console.log(removeItem(mainCharacters, 'Lando'))
console.log(removeItem(mainCharacters, 'Anakin'))
