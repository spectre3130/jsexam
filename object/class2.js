//class 1 과 비교해보아라 javascript의 this

//javascript 의 constructor

//javascript의 접근제한제 없다 모두다 public 
function Student(name, korean, math, english, science) {
	this.이름 = name;
	this.국어 = korean;
	this.수학 = math;
	this.영어 = english;
	this.과학 = science;

	this.getSum = function(){
		return this.국어 + this.수학 +this.영어 + this.과학;
	};

	this.getAverage = function(){
		return this.getSum()/4;
	};

	this.toString = function(){
		return this.이름+ '\t'+this.getSum()+'\t'+this.getAverage();
	};
}

var students = [];
students.push(new Student('윤인성', 90, 83, 76, 89));
students.push(new Student('박찬호', 50, 63, 73, 74));
students.push(new Student('류현진', 90, 83, 86, 97));
students.push(new Student('이세돌', 90, 83, 79, 39));
students.push(new Student('김세진', 90, 83, 92, 87));
students.push(new Student('이하나', 90, 83, 72, 85));

// for (var i in students) {
// 	console.log(students[i].toString();
// }
var output = '이름\t총점\t평균\n';
for(var i in students) {
	output += students[i].toString()+'\n';
}

console.log(output);
