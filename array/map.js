var score =[82,96, 54, 76, 9, 100, 69, 88];
// var score2 = score.map(function(value){
// 	return value * 2;
// });


//맵을 변수로 받으면 새로운 배열(가공 된)이 만들어진다. 1:1매핑
var score2 = score.map(value=>(value*2));
console.log('원본 score ='+score);
console.log('수정 score2 = '+score2);