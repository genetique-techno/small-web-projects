var obj;
var xhr;
var game_status  = document.querySelector('.game_status');
var time_left 	 = document.querySelector('.time_left');
var period 		 = document.querySelector('.period');
var t0name 		 = document.querySelector('.t0name');
var t1name		 = document.querySelector('.t1name');
var t0score 	 = document.querySelector('.t0score');
var t1score 	 = document.querySelector('.t1score');
var t0shots 	 = document.querySelector('.t0shots');
var t1shots 	 = document.querySelector('.t1shots');
var t0saves 	 = document.querySelector('.t0saves');
var t1saves	  	 = document.querySelector('.t1saves');
var t0face  	 = document.querySelector('.t0face');
var t1face  	 = document.querySelector('.t1face');
var stop_btn 	 = document.getElementById('stop_btn');
var resume_btn 	 = document.getElementById('resume_btn');

var gameIntervalId;

var offset = 1420598884 + 1260; //should be right at the start of the game
var add_time = 0;

function api_update (time) {
	url = 'http://api.onetwosee.com/nhl/update/1443221/rogers?normalize=true&now=' + time;
	xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = obj_fill;
	xhr.send();
};

obj_fill = function () {
	obj = JSON.parse(xhr.responseText);
	game_status.innerHTML = obj.game.status;
	time_left.innerHTML = obj.game.time;
	
	period.innerHTML = obj.game.period;

	t0name.innerHTML = obj.teams[0].city + ' ' + obj.teams[0].name;
	t1name.innerHTML = obj.teams[1].city + ' ' + obj.teams[1].name;	

	t0score.innerHTML = obj.boxscores[0].score;
	t1score.innerHTML = obj.boxscores[1].score;

	t0shots.innerHTML = obj.boxscores[0].shots;
	t1shots.innerHTML = obj.boxscores[1].shots;

	t0saves.innerHTML = obj.boxscores[0].saves;
	t1saves.innerHTML = obj.boxscores[1].saves;

	t0face.innerHTML = obj.boxscores[0].faceoffsWon;
	t1face.innerHTML = obj.boxscores[1].faceoffsWon;

	if (obj.game.status === 'post-event') {
		stop_all();
	}
};

poll = function () {
	add_time += 30;
	api_update(offset + add_time);
};

resume_sim = function () {

	gameIntervalId = window.setInterval(poll, 5000);
}
stop_all = function () {
	window.clearInterval(gameIntervalId);
}

window.addEventListener('load', api_update(offset));
window.addEventListener('load', resume_sim);
stop_btn.addEventListener('click', stop_all);
resume_btn.addEventListener('click', resume_sim);




