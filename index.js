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

/*This lab is challenging! You will need to iterate through the tutorials array, modifying the name of each tutorial. To do this, you will also need to access and modify each individual word.

Some questions to consider:

How can we "iterate" through individual words in a string?
Can we execute an iteration inside an iteration? How?
How can we capitalize just the first letter in a word? 
*/ 


//declaring titleCased as a function in a const
const titleCased = () => {
//returning an iteration of tutorials array and identifying the element (each tutorial)
  return tutorials.map(function(tutorial) {
  //taking each tutorial and breaking down to individual words, then iterating through each word
    return tutorial.split(' ').map(function(word) {
    //taking each word and identifying the first letter, changing it to upper case and then joining them back
      return word[0].toUpperCase() + word.substr(1)}).join(' ')})
  }

/*
//const titleCased = () => {
  console.log(tutorials.map(tutorial =>
    tutorial.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.join(' '))
      //return word.join(' ')
    ))
//}*/