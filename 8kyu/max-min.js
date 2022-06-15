// 8kyu Find Maximum and Minimum

// Make two functions (max and min, or maximum and minimum, etc., depending on the language) 
// that receive a list of integers as input and return, respectively, the largest and lowest 
// number in that list.

var min = function(list){
    // sort in ascending order
    list.sort(function(a,b){return a-b})
    // return first element in array (lowest integer)
    return list[0];
}

var max = function(list){
    // sort in ascending order
    list.sort(function(a,b){return a-b})
    // return last element in array (highest integer) using length property minus 1 for index
    return list[(list.length - 1)];
}
