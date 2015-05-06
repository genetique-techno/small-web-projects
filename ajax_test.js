
var obj = {  
    "Suburban Station Departures: May 4, 2015, 10:09 pm":[  
        {  
            "Northbound":[  
                {  
                    "direction":"N",
                    "path":"R8N",
                    "train_id":"866",
                    "origin":"Chestnut Hill West",
                    "destination":"Fox Chase",
                    "status":"2 min",
                    "service_type":"LOCAL",
                    "next_station":"30th Street Station",
                    "sched_time":"May 4 2015 10:24:00:000PM",
                    "depart_time":"May 4 2015 10:25:00:000PM",
                    "track":"1",
                    "track_change":null,
                    "platform":"B",
                    "platform_change":null
                },
                {  
                    "direction":"N",
                    "path":"R7N",
                    "train_id":"776",
                    "origin":"Trenton",
                    "destination":"Chestnut H East",
                    "status":"On Time",
                    "service_type":"LOCAL",
                    "next_station":"North Philadelphia",
                    "sched_time":"May 4 2015 10:31:00:000PM",
                    "depart_time":"May 4 2015 10:32:00:000PM",
                    "track":"2",
                    "track_change":null,
                    "platform":"B",
                    "platform_change":null
                },
                {  
                    "direction":"N",
                    "path":"R4N",
                    "train_id":"9468",
                    "origin":"Airport Terminal E-F",
                    "destination":"Temple U",
                    "status":"On Time",
                    "service_type":"LOCAL",
                    "next_station":"Airport Terminal C-D",
                    "sched_time":"May 4 2015 10:34:00:000PM",
                    "depart_time":"May 4 2015 10:35:00:000PM",
                    "track":"2",
                    "track_change":null,
                    "platform":"A",
                    "platform_change":null
                },
                {  
                    "direction":"N",
                    "path":"R3N",
                    "train_id":"396",
                    "origin":"Elwyn",
                    "destination":"West Trenton",
                    "status":"On Time",
                    "service_type":"LOCAL",
                    "next_station":"Swarthmore",
                    "sched_time":"May 4 2015 10:45:00:000PM",
                    "depart_time":"May 4 2015 10:46:00:000PM",
                    "track":"2",
                    "track_change":null,
                    "platform":"A",
                    "platform_change":null
                },
                {  
                    "direction":"N",
                    "path":"R2N",
                    "train_id":"274",
                    "origin":"Wilmington",
                    "destination":"Norristown",
                    "status":"On Time",
                    "service_type":"LOCAL",
                    "next_station":"Marcus Hook",
                    "sched_time":"May 4 2015 10:49:00:000PM",
                    "depart_time":"May 4 2015 10:50:00:000PM",
                    "track":"1",
                    "track_change":null,
                    "platform":"A",
                    "platform_change":null
                }
            ]
        },
        {  
            "Southbound":[  
                {  
                    "direction":"S",
                    "path":"R3S",
                    "train_id":"389",
                    "origin":"Trent",
                    "destination":"Elwyn",
                    "status":"19 min",
                    "service_type":"LOCAL",
                    "next_station":"Suburban Station",
                    "sched_time":"May 4 2015 09:54:00:000PM",
                    "depart_time":"May 4 2015 09:55:00:000PM",
                    "track":"3",
                    "track_change":null,
                    "platform":"A",
                    "platform_change":null
                },
                {  
                    "direction":"S",
                    "path":"R5S",
                    "train_id":"587",
                    "origin":"Doylestown",
                    "destination":"Thorndale",
                    "status":"On Time",
                    "service_type":"LOCAL",
                    "next_station":"North Broad St",
                    "sched_time":"May 4 2015 10:25:00:000PM",
                    "depart_time":"May 4 2015 10:26:00:000PM",
                    "track":"4",
                    "track_change":null,
                    "platform":"B",
                    "platform_change":null
                },
                {  
                    "direction":"S",
                    "path":"R4S",
                    "train_id":"9471",
                    "origin":null,
                    "destination":"Airport",
                    "status":"On Time",
                    "service_type":"LOCAL",
                    "next_station":null,
                    "sched_time":"May 4 2015 10:29:00:000PM",
                    "depart_time":"May 4 2015 10:30:00:000PM",
                    "track":"3",
                    "track_change":null,
                    "platform":"B",
                    "platform_change":null
                },
                {  
                    "direction":"S",
                    "path":"R2S",
                    "train_id":"277",
                    "origin":"Elm",
                    "destination":"Marcus Hook",
                    "status":"5 min",
                    "service_type":"LOCAL",
                    "next_station":"Manayunk",
                    "sched_time":"May 4 2015 10:32:00:000PM",
                    "depart_time":"May 4 2015 10:33:00:000PM",
                    "track":"4",
                    "track_change":null,
                    "platform":"A",
                    "platform_change":null
                },
                {  
                    "direction":"S",
                    "path":"R8\/7S",
                    "train_id":"8775",
                    "origin":null,
                    "destination":"Trenton",
                    "status":"On Time",
                    "service_type":"LOCAL",
                    "next_station":null,
                    "sched_time":"May 4 2015 10:42:00:000PM",
                    "depart_time":"May 4 2015 10:43:00:000PM",
                    "track":"4",
                    "track_change":null,
                    "platform":"A",
                    "platform_change":null
                }
            ]
        }
    ]
}



// MODELS
var northbound = obj["Suburban Station Departures: May 4, 2015, 10:09 pm"][0].Northbound;
var southbound = obj["Suburban Station Departures: May 4, 2015, 10:09 pm"][1].Southbound;

function paths (arr) {
	return arr.map ( function (item) {
		return item['path'];
	} )
}

function tracks (arr) {
	return arr.map ( function (item) {
		return item['track'];
	})
}

function destinations (arr) {
	return arr.map ( function (item) {
		return item['destination'];
	})
}

function statuses (arr) {
	return arr.map( function (item) {
		return item['status'];
	})
}

// VIEW
var output = document.querySelector('.output');

function display (arr) {
	output.innerHTML = '';
	for (i = 0; i < arr.length; i ++) {
		var elem = document.createElement('p');
		elem.innerHTML = arr[i];
		output.appendChild(elem);
	}
}

// CONTROLLERS
var direction;
var direction_sel = document.querySelector('.direction_sel');
var set_direction = function () {
	if (direction_sel.value === 'northbound') {
		direction = northbound;
	} else if (direction_sel.value === 'southbound') {
		direction = southbound;
	}
	/*
	switch (direction_sel.value) {
		case 'northbound':
			direction = northbound;
			break;
		case 'southbound':
			direction = southbound;
			break;
	}
	*/
}


var get_path = function () {
	var pathlist = paths(direction);
	display (pathlist);
};

var get_track = function () {
	var tracklist = tracks(direction);
	display (tracklist);
};

var get_destination = function () {
	var destinationlist = destinations (direction);
	display (destinationlist);
};

var get_status = function () {
	var statuslist = statuses (direction);
	display (statuslist);
};

var path_btn = document.querySelector('#path_btn');
var track_btn = document.getElementById('track_btn');
var destination_btn = document.getElementById('destination_btn');
var status_btn = document.getElementById('status_btn');

path_btn.addEventListener ('click', get_path);
track_btn.addEventListener ('click', get_track);
destination_btn.addEventListener ('click', get_destination);
status_btn.addEventListener ('click', get_status);
direction_sel.addEventListener ('change', set_direction);

window.addEventListener ('load', set_direction);
