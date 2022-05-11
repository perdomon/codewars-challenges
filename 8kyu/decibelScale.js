// 8kyu Decibel Scale
// calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function.

function dBScale(intensity) {
  const beta = (10*Math.log10(intensity/(Math.pow(10,-12))))
  return beta
}
