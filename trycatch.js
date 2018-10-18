//console.log(a);
try{
	console.log(a);
}catch (e){
	console.log(e.name);
	console.log(e.message);
	console.log(e.description);
}finally{
	console.log('완료');
}

console