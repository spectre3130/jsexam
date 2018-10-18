

//앞에 선언했어도 찾아서 실행
func();
//함수가 생기면 새로운 scope가 생기고 그 scope는 top scope 를 향한다 
//함수의 참조가 사라져야 가비지 대상이 된다.
function func() {
	console.log(`함수안의 local = ${local}`);
	console.log(`함수안의 global = ${global}`);
	var local = '로컬';
	// 전역변수를 변경 하려 할때 오타로 인하여 변수명을 잘못 지정하였을때  syntax error 도 안난다
	//오히려 새로운 전역변수가 생긴다.
	//자바스크립트는 자바와는 다르게 stack에 할당하지 않고 scope 라는데에 생성 
	//자바스크립트에는 상단에 보이지 않는 전역 객체가 있다 
	//전역은 Top (전역) 쪽에 scope 공간에 생성  -> global , func(); 
	//func 안에 는 자신만의 scope 를 만든다. 자기를 먼저 찾은 후 없으면 top 에 가서 찾는다.
	//잘못입력된 globl변수를  func scope에 서 찾은후 없으면 top level로 가서 찾는다 
	//하지만 globl은 대입이 되었기 때문에 최종적으로 top level scope에 생성이 된다. 
	globl = '전역변경 ';
	
	//read의 경우는 식별자가 없으면 최종적으로 top level 까지 간후에 없으면 에러가 난다.
	//이러한 것을 scope chain 이라 한다 .
	//console.log(`함수밖이 global = ${globl}`);
	console.log(`함수안의 local = ${local}`);
	console.log(`함수안의 global = ${global}`);
}

func();

var global = '전역';
console.log(`함수밖이 global = ${global}`);
//console.log(`함수안의 local = ${local}`);
console.log(`함수밖이 global = ${global}`);
