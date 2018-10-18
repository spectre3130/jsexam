var fn = function(){
	console.log('Hello javascript');
}

console.log(fn);

fn();

var fn2 = fn;
fn2();

function test() {
	console.log(test);
}
test();
test = 10;
console.log(test);
