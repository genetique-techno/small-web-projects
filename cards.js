// shuffle the cards
// http://deckofcardsapi.com/api/shuffle/?deck_count=1

// draw a card
// http://deckofcardsapi.com/api/draw/<<deck_id>>/?count=2

// reshuffle
// http://deckofcardsapi.com/api/shuffle/<<deck_id>>/

// brand new deck of cards
// http://deckofcardsapi.com/api/new/

var deck_id;
var btn_deckid = document.getElementById('btn_deckid');

function spinElem (that, elem, content) {
	var newElem = document.createElement(elem);
	newElem.innerText = content;
	that.appendChild(newElem);
}

var callback = function () {
	if (this.readyState == 4) {
		deck_id = (JSON.parse(this.responseText)).deck_id;
		spinElem(btn_deckid, 'p', deck_id);
	}
};

function request(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onreadystatechange = callback;
	xhr.send();
}

getId = function () {
	request ('http://deckofcardsapi.com/api/new/', callback);
}

btn_deckid.addEventListener ('click', getId);

