//전략 패턴 java 에선 부모타입으로 자식객체를 썻다.
//javascript는  함수를 매개변수를 받아서 실행을 정하겠다!!

// var add = function (a,b) {
// 	return a+b;
// };
// var multi = function (a,b) {
// 	return a*b;
// };

// function calc(a,b,f) {
// 	return f(a,b);
// }
// console.log(`2 + 3 = ${calc(2,3,add)}`);
// console.log(`2 + 3 = ${ calc(2,3,multi)}`);


function forEach(arr,f){
	for (var i = 0; i < arr.length; i++) {
		f(arr[i], i);
	}
}

function fn(obj, i) {
	console.log(i+' : '+obj);
}

var arr = [2,8,5,4];
forEach(arr,fn);
forEach(arr,function(obj){
	console.log(obj);
});

var total = 0;
forEach(arr,function (obj) {
	total = total + obj;
});
console.log('합계 : ',total);

arr.forEach(fn); 