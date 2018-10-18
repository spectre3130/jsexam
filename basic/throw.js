function  func() {
	//if (true) throw "예외가 발생하였습니다.";
	//원하는 예외처리문을 출력하려면 오브젝트로 정의해서 던져줘야 된다.
	if (true) throw{
		name : '에러발생',
		message : '그냥 발생'
	};
}

try{
	func();
}catch(e){
	console.log("예외 : " +e);
	console.log("이름 : "+e.name);
	console.log("메시지 :"+e.message);
	console.log("설명 :"+e.description);
}