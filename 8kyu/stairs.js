// 8kyu How many stairs will Suzuki climb in 20 years?

// Your function should return the 20 year estimate of the stairs climbed using the formula above.

function stairsIn20(s){
  // flatten nested array to put all dates in single array
  s = s.flat()
  // sum all elements to determine annual stairs climbed
  let annual = s.reduce((prev, curr) => prev + curr, 0)
  // return sum * 20 for 20-year estimate
  return(annual * 20)
}
