var score =[82,96, 54, 76, 9, 100, 69, 88];

//reduce의 초기값은 없으면 0부터 시작
var sum =score.reduce((pre,cur)=>pre+cur);

console.log(sum);