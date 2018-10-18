var a = "3";
a++;
//증감연산자만 숫자로 변환후 처리한다.
console.log(`a = ${a}, type = ${typeof(a)}`);

var a = '3';
a +=1;
console.log(a, typeof(a));

var a = '3';
a = a + 1;
console.log(a,typeof(a));