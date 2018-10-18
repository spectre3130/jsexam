//클로저 잘기억하자
function test(name) {
	var count = 0;
	var output = 'Hello ' +name+ '......!';

	// return function(){
	// 	console.log(output);
	// };
	return function(){
		console.log(count++, output);
	};
}

var fn = test('Java Script');
fn();
fn();
fn();

var fn2 = test('Hong');
fn2();
fn2();
fn2();