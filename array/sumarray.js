function sum() {
	var total = 0;
	for (var i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}

var data = [2,3,7,9]
//펼침 연산자 이용
var total = sum(...data);
console.log(total);
