var person = {
	name : '홍길동',
	eat : function(food){
		console.log(this.name +'이 '+food+'을/를 먹습니다');
	}
}

person.eat('피자');

//var name = person.name;
var eat = person.eat;
eat('라면');

function dinner(){
	console.log(this.name + '이 저녁을 먹습니다.');
}

var person2 ={
	name : '홍길동',
	eat : dinner
}
person2.eat();
dinner();

setTimeout(person2.eat(),2000);