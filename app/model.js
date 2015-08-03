function travelTime(x,y)
{
	// time2-time1
	if(x.line == y.line)
	{
		var final_time = x.time-y.time;
		$('#result').text(final_time);	
	} else {
		//govno
	}
}

function travelEnd(elem) {
	$(elem).addClass('active').attr('end','');
	
	// тупо запись текста
	$('#to').text($(elem).attr('index'));
	
	travelTime(stations[$('#to').text()], stations[$('#from').text()]);
}

function travelStart(elem) {
	$(elem).addClass('active').attr('start','');
	$('#from').text($(elem).attr('index'));
}

function line()
{
    var canvas = document.getElementById('line');
    var obCanvas = canvas.getContext('2d');
    
    obCanvas.beginPath();
    obCanvas.lineWidth = 2;
    obCanvas.strokeStyle = 'red';
    obCanvas.moveTo(10, 10);
    obCanvas.lineTo(290, 140);
    obCanvas.stroke();
}