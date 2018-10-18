var human = {
	name : "김상형",
	age: 29
};

console.log("name = " +human.name);
console.log("name = " +human.age);

var person={
	name: '홍길동',
	eat : function(food) {
		console.log(name + '이 '+food+' 을/를 먹습니다');
	}
};

function dinner(){
	console.log(this);
	console.log(this.name + '이 저녁을 먹습니다.');
}

var person2={
	name:'홍길동',
	eat :dinner
};
//person2.eat();
//dinner();
setTimeout(person2.eat,2000);

setTimeout(function (){
	console.log(this);
	person2.eat();
},2000);