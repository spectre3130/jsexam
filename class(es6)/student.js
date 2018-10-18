// class Student{
// 	constructor(name){
// 		this.name = name;
// 	}
// }

// var s1 = new Student('홍길동');
// console.log(s1.name);

class Student{
	constructor(name, age){
		this._name = name;
		this.age =age;
	}

	printProfile(){
		console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
	}

	get name(){
		return this._name;
	}

	set name(name){
		this._name = name;
	}
}

var s1 = new Student('홍길동',20);
s1.printProfile();

console.log('printProfile' in s1.__proto__);
console.log('printProfile' in Student.prototype);

console.log(s1.name);
s1.name = '고길동';
console.log(s1.name);
console.log(s1);