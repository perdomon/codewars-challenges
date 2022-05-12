// 8kyu Convert number to reversed array of digits
// Given a random non-negative number, you have to return
// the digits of this number within an array in reverse order.




function digitize(n) {
  const str = n.toString()
  let splitDigits = str.split('')
  splitDigits = splitDigits.reverse()
  const numArray = splitDigits.map(Number)
  return numArray
}
