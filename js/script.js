var container = document.getElementById('container');
var input = document.querySelector('.input');


 container.onclick = function(e) {
 	var target = e.target;

	if(target.tagName != 'SPAN') {
	 	return;
	}

 	input.innerHTML += target.innerHTML;
	 
	console.log(input.innerHTML)
 	if(target.innerHTML == 'C') {
 		input.innerHTML = '';
 	}
 	else if (target.innerHTML == '=') {
 		var last = input.innerHTML;
 		last = last.slice(0, -1);
 		input.innerHTML = eval(last);
	}
 }