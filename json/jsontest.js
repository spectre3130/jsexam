//json의 property는 문자열로 표기 한다.
//{
// 	"name":"홍길동",
// 	"age":age
// }

//json 문자열은 큰 따옴표

var s ='{"x":1, "y":2, "val":"홍길동"}';
var obj = JSON.parse(s);
console.log(obj.x);

console.log(eval(obj));
console.log();
console.log(JSON.stringify({x:1, y:2, val:'홍길동'}));


var arr = JSON.parse('[4,3,5]');
console.log(arr);

var flag = Array.isArray(arr)==true ?'true':'false';
console.log(flag);

var weather = '[{"code":"11","value":"서울특별시"},{"code":"26","value":"부산광역시"},{"code":"27","value":"대구광역시"},{"code":"28","value":"인천광역시"},{"code":"29","value":"광주광역시"},{"code":"30","value":"대전광역시"},{"code":"31","value":"울산광역시"},{"code":"41","value":"경기도"},{"code":"42","value":"강원도"},{"code":"43","value":"충청북도"},{"code":"44","value":"충청남도"},{"code":"45","value":"전라북도"},{"code":"46","value":"전라남도"},{"code":"47","value":"경상북도"},{"code":"48","value":"경상남도"},{"code":"50","value":"제주특별자치도"}]';
console.log(weather);

var weatherArr = JSON.parse(weather);

console.log(weatherArr);