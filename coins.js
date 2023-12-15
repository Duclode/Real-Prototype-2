class Coin {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 9;
    this.colour = "yellow";
    this.collected = false;

    //animations
    this.frame = 0;
    this.maxFrame = 5;
    this.line = 0;
    this.gameFrame = 0;
    this.staggerFrames = 10;
  }
  draw() {
    if (this.collected) return;
    if (this.gameFrame % this.staggerFrames == 0) {
      this.frame = ++this.frame % this.maxFrame;
    }
    fill(this.colour);
    //circle(this.x, this.y, this.diameter);
    image(
      goldCoin,
       this.x - this.diameter / 2,
       this.y - this.diameter / 2,
       this.diameter,
       this.diameter,
       this.frame * 16,
       this.line * 16,
       16,
       16
    )
    this.gameFrame++;
  }

  ifCollected(player) {
    if (collideCircleCircle(this.x, this.y, this.diameter, player.x, player.y, player.diameter)) {
      if (!this.collected) coinsCollected++;
      this.collected = true;
    }
  }
}
  