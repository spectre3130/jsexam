var score =[82,96, 54, 76, 9, 100, 69, 88];

//80이상의 값만 필터링
var score2=score.filter(function(value){
	return value >= 80;
});
console.log('score2 ='+score2);

//화살표 함수(람다)
var score2=score.filter(value=>value>80);

var score3 = score.filter(value=>value%2==1);

var score4 = score.filter(value=>value%2==0)
				.reduce((pre,cur)=>pre+cur,0);


function isEven (a) {
	return a%2==0;
}

function sum(a,b){
	return a+b;
}

var score5 = score.filter(isEven)
				.reduce(sum);

console.log(score5);
