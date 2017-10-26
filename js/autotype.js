var i = 1;
var j = -1;
var textList = ['Engineer. Saxophonist.Programmer_'];
var a = textList[0];
var len = textList.length;
var num = 0;

function autotype() {
	var tempStr = a.slice(0, i);
	
	$("#autotype").html(tempStr + '|');

	if (i >= 0) {
		if (i != a.length) {
			i++;
		} else {
			i = -1;
		}
	} else {
		if (-1 * i != a.length) {
				i--;
		} else {
			i = 1;
			var flag = return_index(a);
			a = textList[flag];
		}
	}
}

function return_index(a) {
	var index = textList.indexOf(a);
	if (index != (len - 1)) {
		return (index + 1);
	} else {
		return 0;
	}
}


setInterval(autotype, 170);
