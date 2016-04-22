
$('.m-map .station').each(function(){
	// расставление координат по каждой станции
	$(this).css('left', stations[$(this).attr('index')].x).css('top', stations[$(this).attr('index')].y);
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