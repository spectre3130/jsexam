class Student{
	constructor(name, age){
		this.getName = function  () {
			return name;
		}
		this.getAge = function(){
			return age;
		}
	}

	printProfile(){
		console.log(`이름 : ${this.getName()}, 나이 : ${this.getAge()}`);
	}

}
var s1 = new Student('홍길동',20);
s1.printProfile();

console.log('printProfile' in s1.__proto__);
console.log('printProfile' in Student.prototype);
