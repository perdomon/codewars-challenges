// 8kyu Welcome to the City

// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person.
// Note that name will be an array consisting of one or more values that should be joined together with one space
// between each, and the length of the name array in test cases will vary.

function sayHello( name, city, state ) {
  
  // Convert name array to string w/ spaces between elements
  let nameStr = name.join(' ')
  
  // Template literal
  const greeting = `Hello, ${nameStr}! Welcome to ${city}, ${state}!`
  
  return greeting
}
