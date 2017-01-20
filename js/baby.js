var babyObj=function()
{
	this.x;
	this.y;
	this.angle;
	this.bigEye=new Image();
	this.bigBody=new Image();
	this.bigTail=new Image();
}
babyObj.prototype.init=function()
{
	this.x=canWidth*0.5;
	this.y=canHeight*0.5+50;
	this.angle=0;
	
	this.bigEye.src="image/babyEye0.png";
	this.bigBody.src="image/babyFade0.png";
	this.bigTail.src="image/babyTail0.png";
}
babyObj.prototype.draw=function()
{	
	this.x= lerpDistance(mom.x, this.x, 0.9); 
	this.y= lerpDistance(mom.y, this.y, 0.9); 
	//math.atan2(y,x)
	var deltaY=mom.y-this.y;
	var deltaX=mom.x-this.x;
	//
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(beta,this.angle,0.6);

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
	ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
	ctx1.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.height*0.5);
	ctx1.restore();

}