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

for(var i = 0; i < 100; i++){
	console.log(i, isPrime(i));
}
