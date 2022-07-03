class ProgressCircle {

    constructor(canvasElement) {
        this.canvas = canvasElement;
        this.radius = this.canvas.width / 2;
        this.ctx = this.canvas.getContext("2d");
        this.ctx.translate(this.radius, this.radius);
    }

    drawProgressCircle(animation) {
        let color = "rgba(255,193,7)";
        let bg_color = "rgba(0,0,0,0.3)";
        let percentage = this.canvas.firstElementChild.value / 100;
        let counter = 0, steps = (animation ? 170 : 1), value;

        setInterval(() => {
            if (counter < steps) {
                counter++;
                value = animation ? Math.min(percentage, counter / steps) : percentage;
                this.ctx.clearRect(-this.canvas.width / 2, -this.canvas.height / 2, this.canvas.width, this.canvas.height);
                // base
                this.ctx.beginPath();
                this.ctx.moveTo(0, 0);
                this.ctx.arc(0, 0, this.radius, 0, 2 * Math.PI); // vai
                this.ctx.arc(0, 0, this.radius * .75, 2 * Math.PI, 0, true); // volta
                this.ctx.fillStyle = bg_color;
                this.ctx.fill();
                // preenchido
                this.ctx.beginPath();
                this.ctx.moveTo(0, 0);
                this.ctx.arc(0, 0, this.radius, -Math.PI / 2, -Math.PI / 2 + value * 2 * Math.PI);
                this.ctx.arc(0, 0, this.radius * .75, -Math.PI / 2 + value * 2 * Math.PI, -Math.PI / 2, true);
                this.ctx.fillStyle = color;
                this.ctx.fill();
            }
        }, 1 / steps); // delay = 1 / steps
    }
}

