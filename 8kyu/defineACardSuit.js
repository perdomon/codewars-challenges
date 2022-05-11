// 8kyu Define a Card Suit
// ('3♣') -> return 'clubs'

function defineSuit(card) {
  let suit = card.charAt(card.length - 1)
  if( suit === '♣'){
    return 'clubs'
  }else if( suit === '♦'){
    return 'diamonds'
  }else if( suit === '♥'){
    return 'hearts'
  }else{
    return 'spades'
  }
}
