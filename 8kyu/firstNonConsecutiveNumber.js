// 8kyu Find the first non-consecutive number
// Find the first number in a string that is not consecutive

function firstNonConsecutive (arr) {
  
  for (i=0; i < (arr.length-1); i++){
    if(arr[i] + 1 !== arr[i+1]){
      return arr[i+1]
    }
  }
  return null

}
