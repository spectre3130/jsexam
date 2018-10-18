//파일 사이즈 math를 이용하여 구하기.

var units = ['B','K','M','G','T'];

var fileInfo = {
	name : 'face.jpg',
	size : 24000
}


function getHumanSize (size) {
	var uIx = parseInt(Math.log10(size)/3);
	var unit = units[uIx];
	var unitSize = parseInt(size /Math.pow(1000,uIx));	
	return `${unitSize}${unit}`;
}



var size = getHumanSize(fileInfo.size);

console.log(`${fileInfo.name}(${size})`);
console.log(Math.log10(1000)/3);
