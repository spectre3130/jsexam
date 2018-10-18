var a = 10;
var b=20;

function swap(a,b) {
	return [b, a];
}
console.log('호출 전',a,b);
[b,a]=swap(a,b);
console.log('호출 후 :',a,b);

var arr =[10,20];
console.log('호출 전 ',arr);
arr = swap(arr[0],arr[1]);
console.log('호출 후 ',arr);