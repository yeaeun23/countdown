import { randomNumBetween } from "./utils.js";

export default class Particle {
  constructor() {
    this.r = innerHeight / 4; // 반지름
    this.angle = randomNumBetween(0, 360);

    // 화면 중앙에 원형으로 배치
    this.x = innerWidth / 2 + this.r * Math.cos((Math.PI / 180) * this.angle); // x = r·cosΘ
    this.y = innerHeight / 2 + this.r * Math.sin((Math.PI / 180) * this.angle); // y = r·sinΘ
  }
  update() {}
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
  }
}
