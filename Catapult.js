class Catapult{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness: 0.04,
        length:10
    }
    this.pointB = pointB;
    this.Catapult = Constraint.create(options);
    World.add(world,this.Catapult)
    }
    display(){
        if(this.Catapult.bodyA){
        var pointA = this.Catapult.bodyA.position
        var pointB = this.pointB
        
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
fly(){
    this.Catapult.bodyA = null;
}
attach(bodyA,pointB){  
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness: 0.04,
        length:10
    }
    this.pointB = pointB;
    this.Catapult = Constraint.create(options);
    World.add(world,this.Catapult)
}
}