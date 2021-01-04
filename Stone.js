class Stone{
    constructor(x,y){
        this.image=loadImage("sprites/stone.png")
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

}