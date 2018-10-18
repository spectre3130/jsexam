//자바스크립트에서 클래스 같은거 만들기
function makeStudent (name, korean, math, english, science) {
	//var student = {
	return {
		이름 : name,
		국어 : korean,
		수학 : math,
		영어 : english,
		과학 : science,

		getSum : function () {
			return this.국어 + this.수학 + this.영어 + this.과학;
		},

		getAverage :function(){
			return this.getSum()/4;
		},

		toString:function(){
			return this.이름 +'\t' +this.getSum()+'\t'+this.getAverage();
		}
	};
	//return student;
}

var students = [];
students.push(makeStudent('윤인성', 90, 83, 76, 89));
students.push(makeStudent('박찬호', 50, 63, 73, 74));
students.push(makeStudent('류현진', 90, 83, 86, 97));
students.push(makeStudent('이세돌', 90, 83, 79, 39));
students.push(makeStudent('김세진', 90, 83, 92, 87));
students.push(makeStudent('이하나', 90, 83, 72, 85));

// for (var i in students) {
// 	console.log(students[i].toString();
// }
var output = '이름\t총점\t평균\n';
for(var i in students) {
	output += students[i].toString()+'\n';
}

console.log(output);




