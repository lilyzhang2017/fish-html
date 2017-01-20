
var can1,can2,ctx1,ctx2,lastTime,deltaTime,canWidth,canHeight,ane,fruits,mon,mx,my,baby;
var bgPic=new Image();

window.onload=game;

function game(){
	
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();//
}

function init(){
	can1=document.getElementById("canvas1");//fish,ui,circle
	ctx1=can1.getContext('2d');
	can2=document.getElementById("canvas2");//bg,any,fruit
	ctx2=can2.getContext('2d');
	bgPic.src="./image/background.jpg";
	canWidth=can1.width;
	canHeight=can1.height;
	//bg
	drawBackGround();
	console.log('game init');
	//bg tree
	ane=new aneObj();
	ane.init();
	//食物
	fruits=new fruitObj();
	fruits.init();
	//大鱼
	mom=new momObj();
	mom.init();
	//小鱼
	baby=new babyObj();
	baby.init();
	//鼠标
	mx=canWidth*0.5;
	my=canHeight*0.5;
	can1.addEventListener("mousemove", mousemove,false);
}

function gameloop(){
	
	ctx2.drawImage(bgPic,0,0);
	window.requestAnimFrame(gameloop);//frame per second
	var now =Date.now();
	deltaTime=now-lastTime;
	if(deltaTime>40) deltaTime=40;

	lastTime=now;
	ane.draw();
	fruits.draw();
	fruitMonitor();
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();
	hitTest();

	//console.log(now)
}
function mousemove(e){
	if(e.offSetX || e.layerX)
	{
		mx = e.offSetX==undefined ? e.layerX : e.offSetX;
		my = e.offSetY==undefined ? e.layerY : e.offSetY;
		//console.log(mx)
	}

}