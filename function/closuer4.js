function outcount(interval) {
	var count = 0;

	var timer= setInterval(function () {
		count++;
		console.log(`인터벌[${interval}] : ${count++}`);
		
		if(count==20){
			clearInterval(timer);
		}

	},interval);
}

outcount(1000);
outcount(600);

