class Chain{
    constructor(bodyA,bodyB)
    {
        var option = {
            bodyA:bodyA,bodyB:bodyB,
            stiffness : 0.04,
            length : 10

        }
        this.chain = Matter.Constraint.create(option)
        World.add(world,this.chain);
    }
    display(){
        var pa = this.chain.bodyA.position
        var pb =  this.chain.bodyB.position
        strokeWeight(5)
        stroke("brown");
        line(pa.x,pa.y,pb.x,pb.y)
    }
}