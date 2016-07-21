var isPrime = function(number){
	if(number <= 1){
		return false;
	}
	else if(number <= 3){
		return true;
	}
	else if((number % 2 == 0) || (number % 3 == 0)){
		return false;
	}
	else{
		var i = 5;
		while(i * i <= number){
			if((number % i == 0) || number % (i + 2) == 0){
				return false;
			}
			i = i + 6;
		}
		return true;
	}
}

var primeArray = function(maxNumber){
	var array = [];

	for(var i = 0; i < maxNumber; i++){
		if(isPrime(i)){
			array.push(i);
		}
	}

	return array;

}

console.log(primeArray(200));