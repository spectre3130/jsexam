//모듈을 만들때 사용되는 패턴
console.log('2+3 = '+function (a,b) {return a+b;}(2,3));

var result = function (a,b) {
	return a+b;
}(2,3);

console.log(result);

