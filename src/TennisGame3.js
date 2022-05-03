const TennisGame3 = function (name1, name2) {
  this.scorePlayer1 = 0;
  this.scorePlayer2 = 0;

  this.player1Name = name1;
  this.player2Name = name2;
};

TennisGame3.prototype.getScore = function () {
  let s;
  if ((this.scorePlayer1 < 4 && this.scorePlayer2 < 4) && (this.scorePlayer1 + this.scorePlayer2 < 6)) {
    const p = ['Love', 'Fifteen', 'Thirty', 'Forty'];
    s = p[this.scorePlayer1];
    return (this.scorePlayer1 === this.scorePlayer2) ? s + '-All' : s + '-' + p[this.scorePlayer2];
  } else {
    if (this.scorePlayer1 === this.scorePlayer2)
      return 'Deuce';
    s = this.scorePlayer1 > this.scorePlayer2 ? this.player1Name : this.player2Name;
    return ((this.scorePlayer1 - this.scorePlayer2) * (this.scorePlayer1 - this.scorePlayer2) === 1) ? 'Advantage ' + s : 'Win for ' + s;
  }
};

TennisGame3.prototype.wonPoint = function (playerName) {
  if (playerName === 'player1')
    this.scorePlayer1 += 1;
  else
    this.scorePlayer2 += 1;

};

module.exports = TennisGame3;
