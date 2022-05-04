const TennisGame3 = function (name1, name2) {
  this.scorePlayer1 = 0;
  this.scorePlayer2 = 0;

  this.player1Name = name1;
  this.player2Name = name2;
};

TennisGame3.prototype.getScore = function () {
  const isTied = this.scorePlayer1 === this.scorePlayer2;
  const sumScores = this.scorePlayer1 + this.scorePlayer2;
  if ((this.scorePlayer1 < 4 && this.scorePlayer2 < 4) && (sumScores < 6)) {
    const scorePlayer1 = getTextPlayerScore(this.scorePlayer1);
    const scorePlayer2 = getTextPlayerScore(this.scorePlayer2)
    return getFinalScore(scorePlayer1, scorePlayer2);
  }
  if (isTied){
    return 'Deuce';
  }
  const highestScorePlayer = this.scorePlayer1 > this.scorePlayer2 ? this.player1Name : this.player2Name;
  const checkAdvantage = (this.scorePlayer1 - this.scorePlayer2) * (this.scorePlayer1 - this.scorePlayer2);
  const advantageScore = 'Advantage ' + highestScorePlayer;
  const winScore = 'Win for ' + highestScorePlayer;
  return (checkAdvantage === 1) ? advantageScore : winScore;
};

function getFinalScore(scorePlayer1, scorePlayer2){
  const isTied = scorePlayer1 === scorePlayer2;
  if(isTied){
    return scorePlayer1 + '-All';
  }
  return scorePlayer1 + '-' + scorePlayer2;
}

TennisGame3.prototype.wonPoint = function (playerName) {
  if (playerName === 'player1')
    this.scorePlayer1 += 1;
  else
    this.scorePlayer2 += 1;

};

function getTextPlayerScore(score){
  const actualScore = ['Love', 'Fifteen', 'Thirty', 'Forty'];
  return actualScore[score];
}

module.exports = TennisGame3;
