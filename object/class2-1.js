//클로저를 이용하면 private 으로 만들수 있다.
function Student(name, korean, math, english, science) {
	this.getSum = function(){
		return korean + math +english + science;
	};

	this.getAverage = function(){
		return this.getSum()/4;
	};

	this.toString = function(){
		return name+ '\t'+this.getSum()+'\t'+this.getAverage();
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
