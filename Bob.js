class Bob{
    constructor(x){
        var options={
            isStatic:false,
            restitution:1.0,
            friction:0.0,
            frictionAir:0.0,
            slop:1.0,
            inertia:Infinity,
            density:2.0
        }
    
        this.body=Matter.Bodies.circle(x,350,25,options);
        this.radius=25;
        // this.image=image;
        World.add(world,this.body);
        
    }
    
    display(){
       var posX=this.body.position.x;
      var posY=this.body.position.y;
      var angle=this.body.angle;
      push();
      translate(posX,posY);
      rotate(angle);
     stroke('blue');
    strokeWeight(2);
      fill('lightblue');
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
        
    }
    
   
    
    };