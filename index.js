const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map ((sentence)=>{ 
    const elementWordArray = sentence.split(' ')
    const capitalizedArray = elementWordArray.map(capitalize) 
    return capitalizedArray.join(' ')
  })
}

const myElement = tutorials[1]

elementWordArray= myElement.split(' ')

console.log(elementWordArray);

const capitalizedArray = elementWordArray.map(capitalize)


function capitalize (word){
  return word[0].toUpperCase() + word.slice(1,word.length)

}

console.log(capitalizedArray.join(" "))