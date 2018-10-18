var obj = {name : '홍길동'};
var arr = [
	obj,
	{name : '고길동'},
	{name : '마이콜'},
];

var search = {name :'홍길동'};


var ix =arr.indexOf(search);
var ix =arr.indexOf(obj);
console.log(ix);