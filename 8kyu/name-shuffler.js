// 8kyu Name Shuffler

// Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
  // str.split(' ') -- split each space in string into an element in an array
  // .reverse() -- reverse all elements in the array
  // .join(' ') -- join all elements into a single string with a space separating each index
  str = str.split(' ').reverse().join(' ')
  return str
}
