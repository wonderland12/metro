// создание точек станций по информации в data.js

var html_stations = '';
for(i in stations){
	html_stations += '<div class="station" index="' +i + '" id="' + stations[i].id + '"></div>';
}
$('.m-map').html(html_stations);


$('.m-map .station').each(function(){
	// расставление координат по каждой станции
	$(this).css('left', stations[$(this).attr('index')].x).css('top', stations[$(this).attr('index')].y);
	
	$(this).html('<div style="position: absolute; top: -10px; right: -20px;">' + stations[$(this).attr('index')].line + '_' + stations[$(this).attr('index')].id + '</div>');
	
}); 

$('.station').click(function(){
	// 3 действия:
	// ниче не делать
	// ставить конец пути
	// ставить начало пути
	
	if($('.station[end]').length > 0) {
		// nothing to do
	} else if($('.station[start]').length > 0) {
		// end
		travelEnd(this);
	} else {
		// start
		travelStart(this);
	}
	
});