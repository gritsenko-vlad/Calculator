(function () {
var container = document.getElementById('container');
var input = document.querySelector('.input');
var operators = ['.', '+', '/', 'x', '-'];

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
		
	
	for (var i = 0; i <= operators.length-2; i++) {
		if(inputVal[0] == operators[i]) {
			input.innerHTML = '';
		}
	}

	if(operators.includes(inputVal[inputVal.length - 1]) && operators.includes(inputVal[inputVal.length - 2])) {
		var sign;
		inputVal[inputVal.length - 2] = inputVal[inputVal.length - 1];
		sign = inputVal[inputVal.length - 1];
		input.innerHTML = inputVal.slice(0, -2);
		input.innerHTML += sign;
	}
 }
}());