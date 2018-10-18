var name = "김상형 : ";
var score = 98;
//+연산 문자열 타입이 우선이기 때문에 98은 문자열로 변환되어 합체!!
console.log(name + score  );

var value1 = "8";
var value2 = "6";
//문자열이 합처졌으므로 14가아닌 문자열 86
var add = value1 + value2 ;

console.log("add : " + add );
//다른연산자는 숫자가 우선이다.
var sub = value1 - value2;

console.log("subtract : " + sub);