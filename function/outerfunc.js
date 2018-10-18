function outer() {
	return function() {
			console.log('Hello Function.......!');
	};
}

outer()();

var fn = outer();
fn();

