const TennisGame2 = function (namePlayer1, namePlayer2) {
  this.pointsPlayer1 = 0;
  this.pointsPlayer2 = 0;

  this.resultPlayer1 = '';
  this.resultPlayer2 = '';

  this.namePlayer1 = namePlayer1;
  this.namePlayer2 = namePlayer2;
};

TennisGame2.prototype.getScore = function () {
  let score = '';

  const isTied = this.pointsPlayer1 === this.pointsPlayer2;
  if (isTied && this.pointsPlayer1 < 3) {
    score = setTextScore(this.pointsPlayer1) + "-All";
  }
  if (isTied && this.pointsPlayer1 > 2){
    score = 'Deuce';
  }
  if (this.pointsPlayer1 > 0 && this.pointsPlayer2 === 0) {
    this.resultPlayer1 = setTextScore(this.pointsPlayer1);
    this.resultPlayer2 = 'Love';
    score = this.resultPlayer1 + '-' + this.resultPlayer2;
  }
  if (this.pointsPlayer2 > 0 && this.pointsPlayer1 === 0) {
    this.resultPlayer2 = setTextScore(this.pointsPlayer2);
    this.resultPlayer1 = 'Love';
    score = this.resultPlayer1 + '-' + this.resultPlayer2;
  }

  const higherPointsPlayer1 = this.pointsPlayer1 > this.pointsPlayer2;
  if (higherPointsPlayer1 && this.pointsPlayer1 < 4) {
    this.resultPlayer1 = setTextScore(this.pointsPlayer1);
    this.resultPlayer2 = setTextScore(this.pointsPlayer2);
    score = this.resultPlayer1 + '-' + this.resultPlayer2;
  }
  const higherPointsPlayer2 = this.pointsPlayer2 > this.pointsPlayer1;
  if (higherPointsPlayer2 && this.pointsPlayer2 < 4) {
    this.resultPlayer2 = setTextScore(this.pointsPlayer2);
    this.resultPlayer1 = setTextScore(this.pointsPlayer1);
    score = this.resultPlayer1 + '-' + this.resultPlayer2;
  }

  if (higherPointsPlayer1 && this.pointsPlayer2 >= 3) {
    score = 'Advantage player1';
  }
  if (higherPointsPlayer2 && this.pointsPlayer1 >= 3) {
    score = 'Advantage player2';
  }

  if (this.pointsPlayer1 >= 4 && this.pointsPlayer2 >= 0 && (this.pointsPlayer1 - this.pointsPlayer2) >= 2) {
    score = 'Win for player1';
  }
  if (this.pointsPlayer2 >= 4 && this.pointsPlayer1 >= 0 && (this.pointsPlayer2 - this.pointsPlayer1) >= 2) {
    score = 'Win for player2';
  }
  return score;
};

function setTextScore(pointsPlayer1){
  const textScores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
  return textScores[pointsPlayer1];
}

TennisGame2.prototype.P1Score = function () {
  this.pointsPlayer1++;
};

TennisGame2.prototype.P2Score = function () {
  this.pointsPlayer2++;
};

TennisGame2.prototype.wonPoint = function (player) {
  if (player === 'player1')
    this.P1Score();
  else
    this.P2Score();
};

module.exports = TennisGame2;
