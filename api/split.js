var citys = "홍길동:서울,고길동:부산,둘리:대전,도우너:광주";
var parts = citys.split(",");

var arr = parts.map(part=>{
		var elements = part.split(":");
		return {
			name : elements[0].trim(),
			city : elements[1].trim()
		}
})

arr.forEach(a=>console.log(a));

console.log(arr);