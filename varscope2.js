var score = 100;

function func() {
	console.log(`함수안의 score = ${score}`);
	 //top level scope 영역으로 가기때문에 대입이 일어난다.
	 score = 77;
	console.log(`함수안의 score = ${score}`);
}
func();
console.log(`함수밖의 score = ${score}`);