var container = document.querySelector('.container');
var title = document.querySelector('.title');
var author = document.querySelector('.author');
var link = document.querySelector('.link');
var verse1 = document.querySelector('#verse1');
var verse2 = document.querySelector('#verse2');
var verse3 = document.querySelector('#verse3');

var offset;
var windowScroll;
var titleOpacity = 0;

var runOnScroll = function (event) {
	offset = window.scrollY * 0.78;
	windowScroll = window.scrollY;
	console.log(offset);
	container.style.backgroundPosition = '0px ' + offset.toString() + 'px';
};

var verse1scroll = function (event) {
	if (windowScroll >= 158 && windowScroll < 450) {
		verse1.style.opacity = (windowScroll - 158) / (450 - 158);
	} else if (windowScroll >= 491 && windowScroll <= 846) {
		verse1.style.opacity = -( windowScroll - 491 )/(846-491) + 1;
	}
}

var verse2scroll = function (event) {
	if (windowScroll >= 635 && windowScroll < 1042) {
		verse2.style.opacity = (windowScroll - 635) / (1042 - 635);
	} else if (windowScroll >= 1075 && windowScroll <= 1483) {
		verse2.style.opacity = -( windowScroll - 1075 )/(1483-1075) + 1;
	}
}

var verse3scroll = function (event) {
	if (windowScroll >= 1236 && windowScroll < 1583) {
		verse3.style.opacity = (windowScroll - 1236) / (1583 - 1236);
	}
}

var runFadeTitle = function () {
	if (titleOpacity < 1.0) {
		title.style.opacity = titleOpacity;
		author.style.opacity = titleOpacity;
		link.style.opacity = titleOpacity;
		titleOpacity += 0.01;
	} else {
		clearInterval(fadeIntervalId);
	}
}


// testing this implementation to see if it's possible to streamline
var runFadeOnLoad = function (intID, counter, element) {
	if (counter < 1.0) {
		element.style.opacity = counter;
		counter += 0.01;
	} else {
		clearInterval(intID);
	}
}

window.addEventListener('scroll', runOnScroll);
window.addEventListener('scroll', verse1scroll);
window.addEventListener('scroll', verse2scroll);
window.addEventListener('scroll', verse3scroll);
// window.addEventListener('load', runOnLoad);

var fadeIntervalId = setInterval(runFadeTitle, 60);