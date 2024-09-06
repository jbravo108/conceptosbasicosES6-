/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:
function findArrayIndex(array, text) {}

Ej array: */
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Lando', //lo siento, para mí no existe una tal Rey en Star Wars ;)
  'Anakin',
  'Obi-Wan'
]
{
}
const findArrayIndex = (array, text) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === text) {
      console.log('La posición es: ', index)
      return
    }
  }
  console.log('No está en la lista')
}
findArrayIndex(mainCharacters, 'Luke')
findArrayIndex(mainCharacters, 'pepito')
findArrayIndex(mainCharacters, 'Anakin')
findArrayIndex(mainCharacters, 'Lando')

//opción con indexOf
const findArrayIndex2 = (array, text) => {
  return array.indexOf(text)
}
console.log(findArrayIndex2(mainCharacters, 'Obi-Wan'))
console.log(findArrayIndex2(mainCharacters, 'manolito'))
