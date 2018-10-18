var score =[82,96, 54, 76, 9, 100, 69, 88];
var sum =0;
// score.forEach(function(value) {
// 	sum += value;
// });

//매개변수가 하나일 경우 () 생략 가능console.log('sum = '+sum);
var test = score.forEach(value=> (sum += value));

console.log('sum = '+sum);
console.log(test);

// score.forEach(value=> (console.log(value)));
console.log('------------------------------');

score.forEach((value,ix,arr)=> (console.log(value,ix,arr)));
console.log('------------------------------');

 score.forEach(console.log);
 console.log('------------------------------');

