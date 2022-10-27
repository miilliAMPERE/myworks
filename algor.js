function blackjackScorer(card = []) {
  let totalScore = 0;
  let countA = 0;
  for (let i = 0; i < card.length; i++) {
    //forloop สำหรับนับค่าdataของ arr
    let score = card[i]; //กำหนดค่าตัวแปรที่มารับ arr = score
    if (score == "J" || score == "Q" || score == "K") {
      //เช็คเงื่อนไข data JQK
      score = 10; //ถ้าใช่ให้ =10
    } else if (score == "A") {
      //เช็ค A
      countA++; //นับจำนวน A
      score = 11; //ให้ค่า 'A' = 11
    } else {
      score = score;
    }
    totalScore = totalScore + parseInt(score); //เอา totalเก่าบวกกับอันใหม่ แล้วเก็บค่าใน totalScore
    //totalScore = (totalScore + parseInt(score)) -(10*countA);
  }
  if (totalScore > 21 && countA > 0) {
    //เอา totalscore มาเช็คว่าถ้า >21 หรือป่าว และมีค้่า countA มั้ย
    totalScore = totalScore - 10 * countA; //ถ้าเกิด ค่าcountA * 10 ถ้ามากกว่า 21 เอาไปลบ totalscore เดิม
  }
  if (totalScore > 21) {
    totalScore = 0;
  }
  return totalScore;
}

function blackjackGame(players = []) {
  let winner = [];
  let winnerScore = 0;
  let playerID = "";
  for (let i = 0; i < players.length; i++) {
    player = players[i];
    console.log("จำนวน player",player);
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
