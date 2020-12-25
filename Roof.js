class Roof{
    constructor(){
        var options={
            isStatic:true
        }

this.body=Matter.Bodies.rectangle(400,100,400,50,options);
this.width=400;
this.height=50;
World.add(world,this.body);
    }

display(){
    var posX=this.body.position.x;
    var posY=this.body.position.y;
    fill('yellow');
    rectMode(CENTER);
    rect(posX,posY,this.width,this.height);
}

};