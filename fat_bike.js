

var wheel = $('.wheel');
var wheel_inf = $('.wheel_inf');
var brakes = $('.brakes');
var brakes_inf = $('.brakes_inf');
var gears = $('.gears');
var gears_inf = $('.gears_inf');
var frame = $('.frame');
var frame_inf = $('.frame_inf');
var fork = $('.fork');
var fork_inf = $('.fork_inf');
var pedal = $('.pedal');
var pedal_inf = $('.pedal_inf');

var isHover = false;

wheel.hover( function() {
	if (!isHover) { wheel_inf.fadeIn() };
}, function () {
	wheel_inf.fadeOut();
});

brakes.hover( function() {
	isHover = true;
	brakes_inf.fadeIn();
}, function () {
	isHover = false;
	brakes_inf.fadeOut();
});

gears.hover( function () {
	isHover = true;
	gears_inf.fadeIn();
}, function () {
	isHover = false;
	gears_inf.fadeOut();
});

frame.hover( function () {
	frame_inf.fadeIn();
}, function () {
	frame_inf.fadeOut();
});

fork.hover( function () {
	isHover = true;
	fork_inf.fadeIn();
}, function () {
	isHover = false;
	fork_inf.fadeOut();
});

pedal.hover( function () {
	pedal_inf.fadeIn();
}, function () {
	pedal_inf.fadeOut();
});