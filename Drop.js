class RainDrop {

    constructor(x, y) {
        var options = {
            'friction' : 0.001,
            'restitution' : 0.1
        };

        this.rain = Bodies.circle(x , y , 5, options);
        World.add(world, this.rain);

        this.radius = 5;

    }

    updatePos() {
        if (this.rain.position.y > height) {
            Matter.Body.setPosition(this.rain, {x: random(0, 750), y: random(0, 100)});
        }
    }

    showRainDrop() {

        var pos = this.rain.position;

        fill(127, 145, 212);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }

}