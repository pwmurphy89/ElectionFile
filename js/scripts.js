//WHen timer hits zero, stop it then find creative way to display 
var endTime = Date.now() + 10000;


function timeTillDoomsday() {

	
	var now = new Date();
	var nowTimestamp = Date.parse(now);
	var timeDifference = endTime - nowTimestamp;

	var timeStampInSeconds = timeDifference / 1000;
	var seconds = Math.floor(timeStampInSeconds % 60);
	var minutes = Math.floor(timeStampInSeconds / 60) % 60;
	var hours = Math.floor(timeStampInSeconds / (60 * 60) % 24);
	var days = Math.floor(timeStampInSeconds / (60 * 60 * 24) % 7);
	var weeks = Math.floor(timeStampInSeconds / (60 * 60 * 24 * 7));



	var timeObject = {
		weeks: weeks,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds

	};

		newFunc(timeDifference);

		return timeObject;

};


function initTimer() {

	var timer = document.getElementById("countdown-wrapper");
	var weeks = document.getElementById("weeks");
	var days = document.getElementById("days");
	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");

	console.log(weeks);

	var timeObjectReturned = timeTillDoomsday();

	weeks.innerHTML = timeObjectReturned.weeks;
	days.innerHTML = timeObjectReturned.days;
	hours.innerHTML = timeObjectReturned.hours;
	minutes.innerHTML = timeObjectReturned.minutes;
	seconds.innerHTML = timeObjectReturned.seconds;
}


initTimer();


setInterval(
	initTimer, 500
	); 

function newFunc(timeDifference) {
	if (timeDifference < 1)
		window.location = "http://www.google.com"
}



