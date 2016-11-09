(function () {
var container = document.getElementById('container');
var input = document.querySelector('.input');
var operators = ['+', '/', 'X', '-'];

 container.onclick = function(e) {
 	var target = e.target;
	
	if(target.tagName != 'SPAN') {
	 	return;
	}

 	input.innerHTML += target.innerHTML;
	 
 	if(target.innerHTML == 'C') {
 		input.innerHTML = '';
 	}
 	else if (target.innerHTML == '=') {
 		var last = input.innerHTML;
 		last = last.slice(0, -1);
 		input.innerHTML = eval(last);
	}
		
	
	var first = input.innerHTML;
	
	for (var i = 0; i <= operators.length-2; i++) {
		if(first[0] == operators[i]) {
			input.innerHTML = '';
		}
	}
 }
}());