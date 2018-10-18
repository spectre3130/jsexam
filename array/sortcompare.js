var score = [82,96,54,76,92,99,69,88,112];
console.log('before = '+score);

score.sort(function(left,right) {
	return right - left;
});
console.log('after = '+score);

// 화살표 함수(람다 )
score.sort((left,right)=>{
	return left -right;
});
console.log('after = '+score);
