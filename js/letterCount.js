
var letterCount = function(argument) {
	// body...
	console.log(argument);	
	var wordObj = {};
	for(var i = 0; i < argument.length; i++){
		if(wordObj.hasOwnProperty(argument[i]))
		{
			wordObj[argument[i]] += 1;
		}
		else
		{
			wordObj[argument[i]] = 1;
		}
	}
	return wordObj;

}

console.log(letterCount("busssssssttin"));