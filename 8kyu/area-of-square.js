// 8kyu Area of a Square

//Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

function squareArea(A){
  // C = 2(pi) * r
  // C / (2 * pi) = r
  // area of square = r^2
  // convert string to number w/2 decimal placed
  
  let radius =  (4 * A)/ (2 * Math.PI)
  let area = radius * radius
  return Number(area.toFixed(2))
}
