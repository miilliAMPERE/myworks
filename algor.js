let data = blackjackGame([["A", "10", "A"], ["8", "9", "5"], ["A","A", "7"], ["J", "5", "6"]]);
console.log(data);
function blackjackScorer(card = []) {
  let totalScore = 0;
  let countA = 0;
  for (let i = 0; i < card.length; i++) {
    //forloop สำหรับนับค่าdataของ arr
    let score = card[i]; //กำหนดค่าตัวแปรที่มารับ arr = score
    if (score == "J" || score == "Q" || score == "K") {
      //เช็คเงื่อนไข data JQK
      score = 10; 
      totalScore = totalScore + parseInt(score);
    } else if (score == "A") {
      //เช็ค A
      countA++; //นับจำนวน A
      score = 11; 
      totalScore = totalScore + parseInt(score);
      if (totalScore > 21) {
      //เช็ค A
      totalScore = totalScore-10; 
    }
    } else {
      score = score;
      totalScore = totalScore + parseInt(score);
    }
    // totalScore = totalScore + parseInt(score); 
    //totalScore = (totalScore + parseInt(score)) -(10*countA);
  }
  // if (totalScore > 21 && countA > 0) {
  //   //เอา totalscore มาเช็คว่าถ้า >21 
  //   countA = countA;
  //   totalScore = totalScore - 10 * countA; 
  // }
  if (totalScore > 21) {
    totalScore = 0;
  }
  return totalScore;
}

function blackjackGame(players = []) {
  let winner = [];
  let winnerScore = 1;
  let playerID = "";
  for (let i = 0; i < players.length; i++) {
    player = players[i];
    console.log("indexID",player);
    let score = blackjackScorer(player);
    console.log(i,score);
    if (winnerScore == score) {
      winner.push(i);
    } else if (winnerScore < score) {
      winnerScore = score;
      winner = [i];
    }
  }
  // for (let j = 0; (j = winner.length); j++) {
  //   playerID = playerID + winner[j];
  // }
  return winner;
}
