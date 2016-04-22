var ways = [];

function travelEnd(elem) {
	$(elem).addClass('active').attr('end','');
	
	// тупо запись текста
	$('#to').text($(elem).attr('index'));
	
	GoTravel(stations[$('#from').text()], stations[$('#to').text()], new Array(route_model(stations[$('#from').text()])));
	console.log(ways);
}

function travelStart(elem) {
	$(elem).addClass('active').attr('start','');
	$('#from').text($(elem).attr('index'));
} 

//Move = (function(elemE, old_travel, CurrentLineStations, direction){
function Move(elemE, old_travel, CurrentLineStations, direction){
	var travel = new Array();
	if(old_travel.length != 0)
		travel = old_travel.slice();
	console.log(direction);
	for(var i in CurrentLineStations)
	{
		
		if(in_array(route_model(CurrentLineStations[i]), travel))
			return;
		
		travel[travel.length] = route_model(CurrentLineStations[i]).slice();
		// нашли конечную станцию
		if(CurrentLineStations[i] == elemE)
		{
			ways[ways.length] = travel.slice();
			return ;
		// нашли переход
		} else if(CurrentLineStations[i].pereh != 0) {
			console.log('perehod, ' + direction);
			var perehTravel = travel.slice();
			perehTravel[perehTravel.length] = route_model(stations[CurrentLineStations[i].pereh]).slice();
			
			if(stations[CurrentLineStations[i].pereh] == elemE)
			{
				ways[ways.length] = perehTravel.slice();
				return ;
			}
			
			GoTravel(stations[CurrentLineStations[i].pereh], elemE, perehTravel.slice());
		}
	}
	
 }
 
GoTravel = (function(elemS, elemE, old_travel) {

	// возвращает массивы станций CurrentLineStations.down и CurrentLineStations.up
	var CurrentLineStations = getLineStations(elemS.line, elemS.id);
	// движение в одну сторону
	//if(CurrentLineStations.down.length > 0) new Function(elemE,old_travel,CurrentLineStations.down, 'down', Move);
	if(CurrentLineStations.down.length > 0) Move(elemE,old_travel,CurrentLineStations.down, 'down');
	// движение в другую сторону
	//if(CurrentLineStations.up.length > 0) new Function(elemE,old_travel,CurrentLineStations.up, 'up', Move);
	if(CurrentLineStations.up.length > 0) Move(elemE,old_travel,CurrentLineStations.up, 'up');
 })
  
 function route_model(station) {
	return station.line + '_' + station.id;
 }
 
// получаем путь в обе стороны от станции
function getLineStations(id_line, id_station)
{
	var result = new Array();
	result.down = [];
	result.up = [];


	for(var i in stations)
	{
		if(stations[i].line == id_line && stations[i].id < id_station)
		{
			result.down[result.down.length] = stations[i];
		} else if (stations[i].line == id_line && stations[i].id > id_station)
		{
			result.up[result.up.length] = stations[i];
		}
	}
	
	result.up.sort(upStationSort);

	result.down.sort(downStationSort);

	return result;

}
 
 // sort functions
 
function upStationSort(a, b) {
	if (a.id > b.id) {
		return 1;
	}
	if (a.id < b.id) {
		return -1;
	}
	return 0;
}

function downStationSort(a, b) {
	if (a.id > b.id) {
		return -1;
	}
	if (a.id < b.id) {
		return 1;
	}
	return 0;
}
 
// /sort functions

function in_array(value, array) 
{
    for(var i = 0; i < array.length; i++) 
    {
        if(array[i] == value) return true;
    }
    return false;
}
 