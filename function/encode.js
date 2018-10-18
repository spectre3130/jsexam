var s = '소/녀:시@대';
console.log('원본 = '+s);

var e = encodeURIComponent(s);
console.log('인코딩 = '+e);

var u = decodeURIComponent(e);
console.log('디코딩 =' +u);	