export class ParticleClass {
    constructor(size, context, width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.speed = 0;
        this.velocity = (Math.random() * 5) + 30;
        this.size = Math.random() * size + 1
        this.context = context
        this.width = width
        this.height = height
    }

    update() {
        this.y += Math.random() * 0.5;
        if (this.y >= this.height) {
            this.y = 0;
            this.x = Math.random() * this.width;
            this.velocity += 5;
        }
    }

    draw() {
        if (!this.context) return;
        this.context.beginPath();
        this.context.fillStyle = 'rgba(250, 250, 250, 0.04)'
        this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        this.context.fill()
    }
}