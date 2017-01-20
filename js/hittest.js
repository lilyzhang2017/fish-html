function hitTest(){
	for (var i = 0; i < fruits.num; i++) {
		if(fruits.alive[i]){
			var dis=calLength2(mom.x, mom.y, fruits.x[i], fruits.y[i]) 
			//console.log(dis);
			if(dis<500){
				fruits.dead(i);
			}
		}
	}
}