var num=0;
var str = '생각이란 생각할수록 생각이 나므로 생각하지 말아야 할 생각은 생각하지 않으려고 하는 생각이 옳은 생각이라 생각합니다.'
var result = str.replace(/생각|옳은/g,'[$&]');
console.log(num++ +result);
var count = 1;

result = str.replace(/생각/g,value => value + '('+count++ +')');
console.log('-------------------------------------------------------------');
console.log(num++ +str);
console.log('-------------------------------------------------------------');
console.log(num++ +result);


str = '구글 사이트는 https://google.com 입니다.';

//구글 사이트는  <a href"https://google.com">https://google.com</a>입니다.
									//플래그로 그부분을 교체
result = str.replace(/https?.*\b/g, word=>`<a href="${word}">${word}</a>`);
console.log();
console.log(num++ +result);
console.log('-------------------------------------------------------------');
//이경우에는 패턴이 3개가 된다.
str = '구글 사이트는 https://google.com 입니다. 네이버는 https://naver.com 입니다.';

str = '${name}은 나이가 ${age}입니다.';

var values  = {
	name:'홍길동',
	age:20
};

// var regexp = /\$\{\w\}/g;
var regexp = /\$\{(\w+)\}/g;

// var str2 = str.replace(regexp,word=>console.log(word)); 

//var str2 = str.replace(regexp,(word,tag)=>console.log(word,tag,values[tag]));
var str2 = str.replace(regexp,(word,tag)=>values[tag]);
// var str2 = str.replace(regexp,function(word, tag){
// 	return values[tag];
// });

console.log(str2);
