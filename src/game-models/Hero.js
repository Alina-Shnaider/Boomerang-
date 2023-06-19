// подключение музыки
// Наш герой.

const player = require('play-sound')

class Hero {
  constructor({
    position, boomerang, newPosition, scores,
  }) {
    this.position = position;
    this.boomerang = boomerang;
    this.skin = '🐳';

    this.newPosition = newPosition;
    this.name = 'New_Hero';
    this.lifes = 'Health: 💙💙💙';
    this.lifesCount = 3;
    this.scores = scores;
    this.bigscore = 0;
  }

  moveLeft() {
    // Идём влево.
    if (this.position > 0) {
      this.position -= 1;
    }

    if (this.newPosition > 0) {
      this.newPosition -= 1;
    }
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
    this.newPosition += 1;
  }

  moveUp() {
    if (this.newPosition >= 0) {
      this.position = this.newPosition;
      this.newPosition = undefined;
    }
  }

  moveDown() {
    if (this.position >= 0) {
      this.newPosition = this.position;
      this.position = undefined;
    }
  }

  attack() {
    // Атакуем.
    if (this.position >= 0) {
      this.boomerang.position = this.position + 1;
      this.boomerang.newPosition = undefined;
    } // Устанавливаем начальную позицию бумеранга

    if (this.newPosition >= 0) {
      this.boomerang.newPosition = this.newPosition + 1;
      this.boomerang.position = undefined;
    }
    this.boomerang.fly();
    // player.play('./src/sounds/shot.wav');
  }

  die() {
    this.skin = '🍖';
    console.log('MISHA DAVAI PO NOVOI!🥘\n');
    process.exit();
  }
}

module.exports = Hero;
