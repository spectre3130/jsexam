var now = new Date();
var now2 = new Date();

console.log(now);
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log();

Date.getDateString  = function(t, del='-') {
	var arr = t.toLocaleDateString().split('-');
	return `${arr[0]}${del}
			${arr[1]<10?'0'+arr[1]:arr[1]}${del}
			${arr[2]<10?'0'+arr[2]:arr[2]}`
};



// Date.getDateString = (t, del='-')=>
					//es6 표준 매개변수에 디폴트값지정. 뒤에서부터 지정해야된다.
function getDateString2 (t, del='-') {
	//del = del||'-';
	var year = t.getFullYear();
	var month = t.getMonth() + 1;
	month = month < 10 ? '0'+ month : month;
	var date  =t.getDate();
	date = date < 10 ? '0'+ date : date;

	return `${year}${del}${month}${del}${date}`;
}

Date.prototype.getDateString =function(del){
	return Date.getDateString(this,del);
}

console.log(now.getDateString());
console.log(now.getDateString('='));
// console.log(now2.getDateString());


// var now2 = new Date();
// console.log(now2.getDateString());