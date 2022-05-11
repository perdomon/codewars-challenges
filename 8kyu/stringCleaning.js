// Your program will take in a string and clean out all numeric characters, and return a string 
// with spacing and special characters ~#$%^&!@*():;"'.,? all intact.


function stringClean(s){
  return s.replace(/\d/g,"")
}

// Select all digits in a string using \d

// Text between the two / is the item replace is selecting

// 'g' stands for global, which tells the method to replace all digits instead of stopping at the first one

// The second parameter tells the method what to replace. Empty quotes replaces it with nothing and effectively deletes
// the character and the space it inhabited.

// regex
