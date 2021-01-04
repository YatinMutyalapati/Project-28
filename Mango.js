class Mango
{
    constructor(x,y,r){

        this.image=loadImage("mango.png");
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
        }

		this.x=x;
		this.y=y;
		this.r=40;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
    }
    display()
	{
			
			
              var mangopos=this.body.position
			push()
			translate(mangopos.x, mangopos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}