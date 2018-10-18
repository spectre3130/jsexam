// function fact(n){
// if(n == 1){
// 	return 1;
// } else{
// 	return n * fact(n-1);
// }
// }
// console.log(`5! = ${fact(5)}`);

console.log('5!=' + function(n){
	if(n==1){
		return 1;
	}else {
		return n *arguments.callee(n-1);
	}
}(5));

