// 8kyu Total amount of points

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

function points(games) {
  score = 0
  games.forEach((element, index) => {
    if(element.charAt(0) > element.charAt(element.length - 1)){
      score += 3
    }else if (element.charAt(0) < element.charAt(element.length - 1)){
      score = score
    }else{
      score += 1
    }
    }
  )
  return score
}

