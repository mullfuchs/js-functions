var sillySum = function(array) {
	// body...
	var count = 0;
	for(var i = 0; i < array.length; i++){
		count += i * array[i];
	}
	return count;
}

var temp = [1,3,6,76,4,2];

console.log(sillySum(temp));