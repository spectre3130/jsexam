function add(a,b) {
	var sum =a+b;
	//종종 발생하는 실수 
	if(sum%2 ==0){
		return sum;
	}
}

var c = 7-add(2,3);
console.log(c);