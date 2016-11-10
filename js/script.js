(function () {
var container = document.getElementById('container');
var input = document.querySelector('.input');
var operators = ['.', '+', '/', '*', '-'];

 container.onclick = function(e) {
 	var target = e.target;
	
	if(target.tagName != 'SPAN') {
	 	return;
	}
 	input.innerHTML += target.innerHTML;
	var inputVal = input.innerHTML;

 	if(target.innerHTML == 'C') {
 		input.innerHTML = '';
 	}
 	else if (target.innerHTML == '=') {
 		inputVal = inputVal.slice(0, -1);
 		input.innerHTML = eval(inputVal);
	}
	
	//If input field is empty only minus operator can be added
	for (var i = 0; i <= operators.length-2; i++) {
		if(inputVal[0] == operators[i]) {
			input.innerHTML = '';
		}
	}

	/*
	check if input value is operator
	replace the last operator with the newly pressed operator
	*/
	if(operators.includes(inputVal[inputVal.length - 1]) && operators.includes(inputVal[inputVal.length - 2])) {
		var sign;
		inputVal[inputVal.length - 2] = inputVal[inputVal.length - 1];
		sign = inputVal[inputVal.length - 1];
		input.innerHTML = inputVal.slice(0, -2);
		input.innerHTML += sign;
	}
 }
}());