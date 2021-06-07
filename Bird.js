/*class Bird{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("knife.png");
    /*this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    
  }

  display() {
    super.display();

    /*if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }*/
   

    /*for(var i=0; i<this.trajectory.length; i++){
      push();
      this.visibility=this.visibility-0.5;
      tint(255,this.visibility);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
}*/
class Bird{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.6,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("knife1.png");
      this.visibility=255;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 100, 100);
      pop();
    }
}