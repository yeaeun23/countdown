import { randomNumBetween } from "./utils.js";

export default class Particle {
  constructor() {
    // 반지름
    this.rFriction = randomNumBetween(0.95, 1.01);
    this.rAlpha = randomNumBetween(0, 5);
    this.r = innerHeight / 4;

    // 각도
    this.angleFriction = randomNumBetween(0.97, 0.99);
    this.angleAlpha = randomNumBetween(1, 2);
    this.angle = randomNumBetween(0, 360);

    // 투명도
    this.opacity = randomNumBetween(0.2, 1);
  }
  update() {
    // 대각선 방향으로 퍼지는 효과
    this.rAlpha *= this.rFriction;
    this.r += this.rAlpha;

    this.angleAlpha *= this.angleFriction;
    this.angle += this.angleAlpha;

    // 화면 중앙에 원형으로 배치
    this.x = innerWidth / 2 + this.r * Math.cos((Math.PI / 180) * this.angle); // x = r·cosΘ
    this.y = innerHeight / 2 + this.r * Math.sin((Math.PI / 180) * this.angle); // y = r·sinΘ

    // 사라지는 효과
    this.opacity -= 0.003;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.fill();
    ctx.closePath();
  }
}
