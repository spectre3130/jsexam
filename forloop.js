var arScore = [88, 78, 96, 54, 23];
console.log('배열의 길이 ', arScore.length);
for (var i = 0; i < arScore.length; i++) {
    console.log(arScore[i]);
}
console.log(arScore[8]);
/*javascript 는 자동으로 배열이 확장 된다. 비어있는부분은 undefined 값이 들어간다.*/
arScore[8] = 80;
console.log('배열의 길이 ', arScore.length);
for (var i = 0; i < arScore.length; i++) {
    console.log(arScore[i]);
}
arScore.length = 3;
console.log('배열의 길이 ', arScore.length);
for (var i = 0; i < arScore.length; i++) {
    console.log(arScore[i]);
}
/*for in */
for (var i in arScore) {
    console.log(i, arScore[i]);
}
