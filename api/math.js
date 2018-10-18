var ar = [0,100,2,3,4,-9,5,6,7];

console.log('최소값 : ',Math.min(...ar));
console.log('최대값: ',Math.max(...ar));

var minValue = Math.min(...ar);
var minIx = ar.indexOf(minValue);

console.log('최소값 : ',minValue+" 인덱스 : "+minIx);
console.log(Math.log(1000));
