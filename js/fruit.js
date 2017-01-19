var fruitObj=function(){
	this.alive=[];
	this.orange=new Image();
	this.blue=new Image();
	this.x=[];
	this.y=[];
	this.l=[];
	this.speed=[];
	this.fruitType=[];
}
fruitObj.prototype.num=30;
fruitObj.prototype.init=function()
{
	for(var i=0;i<this.num;i++)
	{
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		
		this.speed[i]=Math.random()*0.05+0.02;
		this.width=0;
		this.height=0;
		this.fruitType[i]="";
	}
	this.orange.src="./image/fruit.png";
	this.blue.src="./image/blue.png";
}

fruitObj.prototype.draw=function()
{
	var pic;
	for(var i=0;i<this.num;i++)
	{
		if(this.alive[i])
		{
			if(this.l[i]<15)
			{
				this.l[i]+=this.speed[i]*deltaTime;
				
			}else{
				this.y[i]-=this.speed[i]*deltaTime;
			}
			if(this.fruitType[i]=="blue")
			{
				pic=this.blue;
			}else{
				pic=this.orange;
			}
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			if(this.y[i]<0)
			{

				this.alive[i]=false;
				
			}
		}
		
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
	this.l[i]=0;
	this.alive[i]=true;
	if(Math.random()<0.2)
	{
		this.fruitType[i]="blue";
	}else{
		this.fruitType[i]="orange";
	}

}
function sendFruit(){
	for(var i=0;i<fruits.num;i++)
	{
		if(!fruits.alive[i])
		{
			fruits.born(i);
			return;
		}
	}
}

function fruitMonitor()
{
	var num=0;
	for (var i = 0; i<fruits.num;i++) {
		 if(fruits.alive[i]) num++;
		 if(num<15)
		 {
		 	sendFruit();
		 	return;
		 }
	}

}