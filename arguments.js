function total() {
	var s =0;
	if(typeof(arguments[0]) == 'string'){
		s='';
	}
	for (var i = 0; i < arguments.length; i++) {
		s += arguments[i];
	}
	return s;
}
//자바스크립트에서는 오버로드 가 없기때문에 함수내에서 argument를 처리해줘야된다?
console.log(total(1,2,3));
console.log(total('니들이 ','게맛을 ','알어?'));