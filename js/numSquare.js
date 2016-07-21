var isSquare = function(number){
	var sqrRoot = Math.sqrt(number)
	if( sqrRoot * sqrRoot === number){
		return true;
	}
	else{
		return false;
	}
}

var numSquare = function(maxNumber){
	var perfects = [];
	for(var i = 0; i < maxNumber; i++){
		if(isSquare(i)){
			perfects.push(i);
		}
	}

	return perfects;
}

console.log(numSquare(200));