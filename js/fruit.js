var fruitObj=function(){
	this.alive=[];
	this.orange=new Image();
	this.blue=new Image();
	this.x=[];
	this.y=[];
	this.l=[];
	this.speed=[];
}
fruitObj.prototype.num=30;
fruitObj.prototype.init=function()
{
	for(var i=0;i<this.num;i++)
	{
		this.alive[i]=true;
		this.x[i]=0;
		this.y[i]=0;
		this.l[i]=0;
		this.speed[i]=Math.random()*0.001;
		console.log(this.speed[i])
		this.born(i);
	}
	this.orange.src="./image/fruit.png";
	this.blue.src="./image/blue.png";
}

fruitObj.prototype.draw=function()
{
	for(var i=0;i<this.num;i++)
	{
		ctx2.drawImage(this.orange,this.x[i]-this.orange.width/2,this.y[i]-this.orange.height/2);
	}
}

fruitObj.prototype.update=function()
{
	var num=0;
	for( var i=0;i<this.num;i++)
	{
		if(this.alive[i])num++;
	}
}

fruitObj.prototype.born=function(i)
{
	var aneId=Math.floor(Math.random()*ane.num);
	this.x[i]=ane.x[aneId];
	this.y[i]=canHeight-ane.len[aneId];

}