/**
 * 
 */


//function sum(a, b){
//	var name = '테스트';
//	return a + b;
//}
//
//var a = new array();
//
//for(var i = 0 ; i < 5 ; i++){
//	a[i] = i ;
//}
//
//console.log(a[1]);
//console.log(a[2]);
//console.log(a[3]);
//console.log(a[4]);
//console.log(a[5]);
var arr = [1,2,3,4,5];
//var arr = new Array(1,2,3,4,5);
//var arr = Array(1,2,3,4,5);
console.log('외부 순회1');
for(var i=0; i<arr.length; i++){
	console.log(arr[i]);
}
console.log('외부 순회2');
for(var i in arr){
	console.log(arr[i]);
}
console.log('내부 순회');
arr.forEach(function(data) {
	console.log(data)
});

console.log('람다');
arr.forEach(data=>console.log(data));