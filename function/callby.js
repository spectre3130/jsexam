function byvalue(a) {
	a = 9999;
}
function byref(a) {
	a[0] = 9999;
}
function strfn(str) {
//string은 불변객체 참조가 바뀐다.
str = 'World';
}

var int = 1000;
var ar = [1000,2000,3000];
var str = 'Hello';

console.log('호출 전', int, ar[0],str);
byvalue(int);
byref(ar);
strfn(str);
console.log('호출 후',int, ar[0],str);

