function sumAll() {
	var sum = 0;

	console.log(typeof arguments);
	for (var i = 0; i < arguments.length; i++) {
		sum +=arguments[i]
	}
	
	return sum;
}

console.log(sumAll(1,2,3,4,5,6,7,8,9));
//배열도 객체
console.log(typeof []);
