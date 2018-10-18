function sum(n) {
	function add(a,b) {
		s =a+b;
	}
	
	var s = 0;
	
	for (var i = 0; i <=n; i++) {
		add(s,i);
	}
	return s;
}

console.log('1~100 = '+sum(100));
console.log('1~100 = '+sum(10));

