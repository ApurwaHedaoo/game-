class Log extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,27,height,angle);
      this.image = loadImage("asset/wood2.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }