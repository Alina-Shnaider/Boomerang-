// const {} = require('')  подключение базы данных
// const { User } = require('../db/models');

class View {
  constructor(game) {
    this.game = game;
  }

  async render() {
    console.clear();

    const yourTeamName = 'Whales';

    // Тут всё рисуем.
    console.log(
      `Наш герой: ${this.game.hero.name}\n${this.game.hero.lifes}\nТекущий счет: ${this.game.hero.scores}\n`
    );

    if (this.game.hero.lifesCount === 0) {
      // await this.game.dieHero();

      console.log(`\nТвой текущий лучший результат: ${this.game.hero.bigscore}\n`);
    }
    console.log('\n');
    console.log(this.game.track.join(''));
    console.log('\n');
    console.log(this.game.track2.join(''));
    console.log('\n');
    console.log(`Created by "${yourTeamName}" with love\n`);
  }
}

module.exports = View;
