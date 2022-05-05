const TennisGame1 = function (player1Name, player2Name) {
    this.scorePlayer1 = 0;
    this.scorePlayer2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function (playerName) {
    if (playerName === 'player1'){
      this.scorePlayer1 += 1;
    } else{
      this.scorePlayer2 += 1;
    }
};

TennisGame1.prototype.getScore = function () {
  let score = '';
  let tempScore = 0;
  const isTied = this.scorePlayer1 === this.scorePlayer2;
  if (isTied) {
      if(this.scorePlayer1 <= 2){
        score = getTiedScores(this.scorePlayer1);
      } else{
        score = 'Deuce';
      }
    } else if (this.scorePlayer1 >= 4 || this.scorePlayer2 >= 4) {
        const minusResult = this.scorePlayer1 - this.scorePlayer2;
        score = deuceSystem(minusResult);
    } else {
        for (let i = 1; i < 3; i++) {
            if (i === 1) {
              tempScore = this.scorePlayer1;
            } else {
                score += '-';
                tempScore = this.scorePlayer2;
            }
            score += getTextScores(tempScore);
        }
    }
    return score;
};

function deuceSystem(result){
  if(result === 1){
    return 'Advantage player1';
  } else if(result === -1){
    return 'Advantage player2';
  } else if(result >= 2){
    return 'Win for player1';
  }
  return 'Win for player2';
}

function getTiedScores(score){
  const textScores = ['Love-All', 'Fifteen-All', 'Thirty-All'];
  return textScores[score];
}

function getTextScores(score){
  const textScores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
  return textScores[score];
}

module.exports = TennisGame1;
