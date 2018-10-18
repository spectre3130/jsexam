//i 와 k 는 존재한다 top level scope 에 대신 대입이 아직 안되었기떄문에 undefined
//console.log('i = ' + i +', k = ' +k);

for (let i = 0; i < 3; i++) {
	let k = 1234;
	console.log('i = ' + i);
}

//console.log('i = ' + i +', k = ' +k);

//블럭단위 변수 사용은 var 대신에 let을 쓰면 된다.