class Roof{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,300,30,{isStatic:true});
        World.add(world,this.body);
        this.width=300;
        this.height=30;

    }
    display(){
        var pos=this.body.position;
        push();
        rectMode(CENTER);
        fill('brown');
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
};