// 8kyu I Love You

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// I love you
// a little
// a lot
// passionately
// madly
// not at all

function howMuchILoveYou(nbPetals) {
    if (nbPetals % 6 === 1){
      return('I love you')
    }else if (nbPetals % 6 === 2){
      return('a little')
    }else if (nbPetals % 6 === 3){
      return('a lot')
    }else if (nbPetals % 6 === 4){
      return('passionately')
    }else if (nbPetals % 6 === 5){
      return('madly')
    }else{
      return('not at all')
    }
}
