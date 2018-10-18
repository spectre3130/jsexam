var student = {};
student.이름 ='홍길동';
student.성별 ='남';
student.취미 = '악기';
student.특기 = '프로그래밍';
student.장래희망 = '생명공학과';
console.log(student);


// for(var k in student){
// 	console.log(k,student[k]);
// }

student.toString = function  () {
	for (var key in this) {
		if(key != 'toString'){
			console.log(key + '\t' +this[key]);
		}
	}
};
delete student.취미;
student.toString();

console.log('이름' in student);
console.log('성별' in student);