var ar = [0,1,2,3];
delete ar[2];
for (var i = 0; i < ar.length; i++) {
	console.log('['+i+']='+' '+ar[i]);
}