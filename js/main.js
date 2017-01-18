
var can1,can2,ctx1,ctx2,lastTime,deltaTime,canWidth,canHeight,ane,fruits;
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
	drawBackGround();
	console.log('game init');
	ane=new aneObj();
	ane.init();
	fruits=new fruitObj();
	fruits.init();
}

function gameloop(){
	ctx2.drawImage(bgPic,0,0);
	window.requestAnimFrame(gameloop);//frame per second
	var now =Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	ane.draw();
	fruits.draw();
	//console.log(now)
}
