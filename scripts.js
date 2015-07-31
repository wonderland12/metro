var stations = {
	'0': {
		time: 0,
		x: 0,
		y: 0,
	},
	'1': {
		time: 120,
		x: 30,
		y: 30,
	},
	'2': {
		time: 260,
		x: 60,
		y: 60,
	},
	'3': {
		time: 410,
		x: 90,
		y: 90,
	},
	'4': {
		time: 610,
		x: 120,
		y: 120,
	},
}


function travelTime(x,y)
{
	// time2-time1
	var final_time = x-y;
	$('#result').text(final_time);
	
}

//

$('.m-map .station').each(function(){
	console.log(this);
	$(this).css('left', stations[$(this).attr('index')].x).css('top', stations[$(this).attr('index')].y);
}); 

$('.station').click(function(){
	if($('.station[end]').length > 0) {
		console.log('err');
	} else if($('.station[start]').length > 0)
	{
		$(this).addClass('active').attr('end','');
		$('#to').text($(this).attr('index'));
		
		travelTime(stations[$('#to').text()].time, stations[$('#from').text()].time);
		
	} else {
		$(this).addClass('active').attr('start','');
		$('#from').text($(this).attr('index'));
	}
	
});

// change 1