
class pokemon {
    constructor (kind, pos, speed, width) {
        this.kind = kind[0];
        this.pos = pos;
        this.speed = speed;
        this.width = width;
    }

    move() {
        this.pos.add (this.speed);

		if (this.pos.x < 0 || this.pos.x > width) {
			this.speed.x *= -1;
		}
		if (this.pos.y < 0 || this.pos.y > height) {
			this.speed.y *= -1;
		}
    }

    show(){
        image(this.kind, this.pos.x, this.pos.y)
    }
}