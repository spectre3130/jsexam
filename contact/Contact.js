class Contact {
	constructor(name,email,age,cellPhone,address){
		this.name = name;
		this.email = email;
		this.age = age;
		this.cellPhone = cellPhone;
		this.address = address;
	}
}

var contacts = [
	new Contact('홍길동','hong@gmil.com',20,'010-1111-2222','서울'),
	new Contact('둘리','dooli@gmil.com',3000000,'010-1111-2222','인천'),
	new Contact('마이콜','call@gmil.com',20,'010-1111-2222','의정부'),
	new Contact('고길동','go@gmil.com',40,'010-4444-2222','경기'),
	new Contact('도우너','douner@gmil.com',1000,'010-1111-2222','고양'),
	new Contact('또치','ddochi@gmil.com',4,'010-3333-2222','서울')
];


//같거나 반대일경우 boolean타입에 의해 0을 리턴하기 때문에 정렬이 안될 경우가 생김
contacts.sort((left,right)=>left.name>right.name);

//comapre처리를 이렇게 하자 !!(람다식)
contacts.sort((c1,c2)=>{
	if(c1.name>c2.name) return 1;
	if(c1.name<c2.name) return -1;
	return 0;
})
console.log(contacts);

// compare를  함수화 시켰다
function Compare(s1,s2) {
	if(s1>s2) return 1;
	if(s1<s2) return -1;
	return 0;
}

//sort는 정렬 후에 return this 를 해준다.
var arr =contacts.sort((c1, c2)=>Compare(c1.name, c2.name));
console.log(contacts);

//[]괄호를 써서 원하는 프로퍼티를 정렬하자.
var orderBy = 'address';
var arr = contacts.sort((c1, c2)=>Compare(c1[orderBy], c2[orderBy]));
console.log(contacts);

//address로만 이루어진 배열을 만든다.
var addressArr = arr.map(contact=>contact.address);

console.log(addressArr);


////////////////////////////
////                                                       ////
////   map & reduce pattern  ////
////                                                      ////
///////////////////////////

//property 에 따라 정렬 후 맵에 담아 하나씩 출력하기 !!(forEach는 리턴이 없기때문에 마지막에...)
contacts
	.sort((c1, c2)=>Compare(c1[orderBy], c2[orderBy]))
	.map(contact=>contact.address)
	.forEach(a=>console.log(a));

//하나의 프로퍼티만 맵으로 담으면 간결하게 할수 있다.
contacts
	.map(contact=>contact.address)
	.sort(Compare)
	.forEach(a=>console.log(a));

//ul 태그 붙여서 출력하기 
var li = contacts
		.sort((c1, c2)=>Compare(c1[orderBy], c2[orderBy]))
		.map(contact=>`<li>${contact.address}</li>`)
		.join('\n');//배열요소 사이에  넣는다.

var ul = `<ul>${li}</ul>`;
console.log(ul);


function makeTbody (contact) {
	return  `
	<tr>
		<td>${contact.name}</td>
		<td>${contact.email}</td>
		<td>${contact.age}</td>
		<td>${contact.address}</td>
	</tr>
	`
}

//contact 모델 테이블로 만들기
var tbody = contacts
		.map(makeTbody)
		.join('');
var table =`<table><tbody>${tbody}</tbody></table>`;
console.log(table);


//모든 데이터의 평균나이 계산하기 (rudece사용)
//점 -> .메서드()로 이어 주는 방법을 method chaining 밑에처럼 ...
var avrAge = contacts
		.map(contact=>contact.age)
		.reduce((pre,cur)=>pre+cur)/contacts.length;
console.log(avrAge);

//address 가'서울'인 데이터만 출력 
var tbody = contacts
			.filter(contact=>contact.address=='서울')
			.map(makeTbody)
			.join('');

 var table =`<table><tbody>${tbody}</tbody></table>`;
console.log(table);
/*                     +-------------------------------+
                         |               중간 함수 	sort                                    |
                       |	    			map                                     |
                     | 	    			filter                           |
                   |			종단함수 	reduce                         |
                 |					forEach                    |
               |                                                 join                          |
             +-------------------------------+
             									*/
//자바에서  람다를 쓰기위한 전제 조건은 인터페이스가 필요하며 추상메서드가 하나만 있어야된다.

