class Umbrella {
    constructor(x, y) {

        this.image = loadImage("walking_1.png");
        this.radius = 50;

        var options = {
            'isStatic': true
        };

        this.body = Bodies.circle(x , y , 50, options);
        World.add(world, this.body);
    }

    changeImg(manImg){
        this.image = manImg;
    }

    showWalkingMan() {
        var pos = this.body.position;

        imageMode(CENTER);
        //pos.y + 90 -> To make the rain drops to fall on the umbrella
        image(this.image, pos.x, pos.y + 90, 400, 400);

    }
}