if (0) {
	console.log("참입니다.");
} else{
	console.log("거짓입니다.");
}


//주의사항 : a 에 0이 대입 되면 false 가 되므로 조심하자 !!
//var a = 0;
var a = 'undefined'
// 이런식의 비교도안된다. if (a == undefined) { ,if (a == 'undefined') {  
if ( a != undefined) { 
	console.log('a=',a)		
} else{
	console.log('a는 초기화 되지 않았습니다.');
}

if ( typeof a != 'undefined') { 
	console.log('a=',a)		
} else{
	console.log('a는 초기화 되지 않았습니다.');
}

if ( a != 'undefined') { 
	console.log('a=',a)		
} else{
	console.log('a는 초기화 되지 않았습니다.');
}

console.log(typeof 52);
console.log(typeof(typeof 52));
console.log(typeof 'abc');

var b;
console.log(typeof b);