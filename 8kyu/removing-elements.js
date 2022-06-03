// 8kyu Removing Elements

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.


function removeEveryOther(arr){
  // create 'donor' array
  var newArr=[]
  // start loop counting by twos
for (i = 0; i < arr.length; i+=2){
  // push item at index 'i' to new array
  newArr.push(arr[i])
  }
  //return new array
return newArr
}
