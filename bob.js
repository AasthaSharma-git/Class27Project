class Bob{
    constructor(x){
        var options={
            isStatic:false,
            restitution:1,
            friction:1,
            density:1 
           
        }
        this.body=Bodies.circle(x,400,20,options);
        
        World.add(world,this.body)
    }
    display(){
        
        var pos=this.body.position;
        push();
        fill('pink');
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,20);
        pop();
    }
};