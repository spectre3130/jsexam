var str = 's-123M test S123 s-45 s67M  s-8m s-123M s-superTM ';
//패턴을 변수처리 할때 
//문자열로 처리
var reg = new RegExp('[sS]-[0-9]*T?M');
var result = reg.exec(str);
console.log(result);

//대부분은 리터럴로 처리 한다.
reg = /[sS]-[0-9]*T?M/;
var result = reg.exec(str);
console.log(result);

//string.search return 값은 배열의 인덱스
var result = str.search(/[sS]-[0-9]*T?M/);
console.log(result);
