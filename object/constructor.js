function Student(name, korean, math, english, science) {
	this.이름 = name;
	this.국어 = korean;
	this.수학 = math;
	this.영어 =english;
	this.과학 = science;
}

var student = new Student('김세진', 90, 83, 86, 90);
console.log(student);

var student2 = Student('김세진', 90, 83, 86, 90);
console.log(student2);