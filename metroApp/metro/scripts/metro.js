var metroModel = {
	config: {
		season: 0,
		direction: 'flyFrom', 
		maxPopulation: null,
		maxFliers: null,
		destination: null,
		lineColours: ['#ffe81c', '#ffd255', '#ffb347', '#ff6529', '#ff7455'],
		ways: [],
		pointList: [],
		currentPoint: null,
		startStation: null,
		endStation: null,
		

		peoplePerLine: 50000,
		canvasId: 'linesHolder',
		planeCanvasId: 'metroHolder',
		lineDrawingInProcess: false,
		flightDuration: 2000
	},
	
	makeDrawing: function(flightFunc) { 
	    var d = new Deferred(),
	    	duration = this.config.flightDuration;

		// draw lines for all destinations
		this.clearCanvas(this.config.canvasId); 
		flightFunc(duration);

		this.config.lineDrawingInProcess = true; // process indicator

	    setTimeout(function() {
	        metroModel.config.lineDrawingInProcess = false;
	        d.resolve(d);
	    }, duration);
	    return d;
	},
	
	clearCanvas: function(){ //any number of canvas ids
		for(var i = 0; i < arguments.length; i++)
			el(arguments[i]).getContext('2d').clearRect ( 0 , 0 , el(arguments[i]).width, el(arguments[i]).height);
	},
	
	getLineColor: function(station) {
		
		var color = '';
		
		for(var i = 0; i < lines.length; i++) {
			if(lines[i].id == station.line)
				return lines[i].color;
		}

	},
	
	drawLines: function(origin, destination, duration, lineColor, drawImage) {

		var lineCtx = el(this.config.canvasId).getContext('2d'),
			planeCtx = el(this.config.planeCanvasId).getContext('2d'),

			originSize = 0,
			destinationSize,
			
			color = this.getLineColor(origin),
	
			x0 = origin.coordinates.x,
			y0 = origin.coordinates.y,
			
			x2 = destination.coordinates.x,
			y2 = destination.coordinates.y;

			Line(lineCtx, x0, y0, x2, y2, color);
	},
	
	drawDottedLines: function(origin, destination) {
		var lineCtx = el(this.config.canvasId).getContext('2d'),
			planeCtx = el(this.config.planeCanvasId).getContext('2d'),
			
			x0 = origin.coordinates.x,
			y0 = origin.coordinates.y,
			
			x2 = destination.coordinates.x,
			y2 = destination.coordinates.y;
			
			dottedLine(lineCtx, x0, y0, x2, y2);
	},
	
	getLineStations: function(id_line, id_station)
	{
		var result = new Array();
		result.down = [];
		result.up = [];


		for(var i in metroModel.config.pointList)
		{
			if(metroModel.config.pointList[i].line == id_line && metroModel.config.pointList[i].id < id_station)
			{
				result.down[result.down.length] = metroModel.config.pointList[i];
			} else if (metroModel.config.pointList[i].line == id_line && metroModel.config.pointList[i].id > id_station)
			{
				result.up[result.up.length] = metroModel.config.pointList[i];
			}
		}
		
		result.up.sort(upStationSort);

		result.down.sort(downStationSort);

		return result;

	},
	goTravel: function(elemS, elemE, old_travel) {
		// возвращает массивы станций CurrentLineStations.down и CurrentLineStations.up
		var CurrentLineStations = this.getLineStations(elemS.line, elemS.id);
		// движение в одну сторону
		if(CurrentLineStations.down.length > 0) this.Move(elemE,old_travel,CurrentLineStations.down, 'down');
		// движение в другую сторону
		if(CurrentLineStations.up.length > 0) this.Move(elemE,old_travel,CurrentLineStations.up, 'up');
	},
	Move: function(elemE, old_travel, CurrentLineStations, direction){
		var travel = new Array();
		if(old_travel.length != 0)
			travel = old_travel.slice();
		console.log(direction);
		for(var i in CurrentLineStations)
		{		
			//if(in_array(route_model(CurrentLineStations[i]), travel))
			if(in_array(CurrentLineStations[i].title, travel))
				return;
			
			//travel[travel.length] = route_model(CurrentLineStations[i]).slice();
			travel[travel.length] = CurrentLineStations[i].title;
			// нашли конечную станцию
			if(CurrentLineStations[i] == elemE)
			{
				metroModel.config.ways.push(travel.slice());
				console.log('find station');
				return ;
			// нашли переход
			} else if(CurrentLineStations[i].pereh != 0) {
				console.log('perehod, ' + direction);
				var perehTravel = travel.slice();
				//perehTravel[perehTravel.length] = route_model(metroModel.config.pointList[CurrentLineStations[i].pereh]).slice();
				perehTravel[perehTravel.length] = metroModel.config.pointList[CurrentLineStations[i].pereh].title;
				
				if(metroModel.config.pointList[CurrentLineStations[i].pereh] == elemE)
				{
					metroModel.config.ways.push(perehTravel.slice());
					console.log('find station pereh');
					return ;
				}
				
				this.goTravel(    metroModel.config.pointList[CurrentLineStations[i].pereh]     ,     elemE      ,      perehTravel.slice()     );
			}
		}
		
	 },
	 
	Results: function() {
		var result = '';
		var effect = [];
		
		
		for(var i = 0; i < metroModel.config.ways.length; i++) {
			result += '<div><input type="checkbox" name="result[i]" value=""/>';
			
			//for(var j = 0; j < metroModel.config.ways[i].length; j++) {
			for(var station in metroModel.config.ways[i]) {
				
				//result += metroModel.config.pointList[metroModel.config.ways[i][j]] + '';
				//result += metroModel.config.ways[i][j] + ' - ';
				result += metroModel.config.ways[i][station] + ' - ';
				
				for(var pointList in metroModel.config.pointList)
				{
					if(metroModel.config.pointList[pointList].title == metroModel.config.ways[i][station])
						effect[effect.length] = metroModel.config.pointList[pointList];
				}
				
			}
			
			result+= '</div>';
		}
		
		$('#way').html(result);
		
		
		
		/*$('#way').bind(function() {
			return delay(600, function() {
				return showfeatures(success, func);
			  });
		});*/
		
	},
	
	
	drawStations: function(stations) {

		stations = stations || this.config.pointList ;

		for (var i = stations.length - 1; i >= 0; i--) {

			var stationElem = createHTMLElement('div', {className: 'station'}),
				stationName = createHTMLElement('span', {className: 'station-name', innerHTML: stations[i].title}),
				stationCircle = createHTMLElement('div', {className: 'stationCircle'});

			stationCircle.style.width = stationCircle.style.height = stationElem.style.height = stationCircle.style.borderRadius = stations[i].size + 'em';
			stationCircle.style.width = stationCircle.style.height;
			
			stationElem.style.left = stations[i].coordinates.x + 'px';
			stationElem.style.top = stations[i].coordinates.y  + 'px';

			stationElem.setAttribute('data-station', stations[i].station);

			 stationName.onclick = (function(self, station){
			 	return function(){
			 		chooseStationOnMap.call(self, station, this)
			 	};
			 })(this, stations[i]);

			 stationCircle.onclick = (function(self, station){
			 	return function(){
			 		chooseStationOnMap.call(self, station, this)
			 	};
			 })(this, stations[i]);


			 function chooseStationOnMap(station, stationItem){
				
				if(metroModel.config.endStation != null)
				{
					metroModel.config.ways = [];
					metroModel.config.startStation = metroModel.config.endStation;
					metroModel.config.endStation = station;
					this.goTravel( metroModel.config.startStation    ,     metroModel.config.endStation    ,    new Array(metroModel.config.startStation.title) );
					this.Results();
					console.log(metroModel.config.ways);
					return;
				}
				stationItem.parentNode.className = 'station active';
				
				if(metroModel.config.startStation == null)
					metroModel.config.startStation = station;
				else
				{
					metroModel.config.endStation = station;
					//this.goTravel( metroModel.config.startStation    ,     metroModel.config.endStation    ,    new Array(route_model(metroModel.config.startStation)) );
					this.goTravel( metroModel.config.startStation    ,     metroModel.config.endStation    ,    new Array(metroModel.config.startStation.title) );
					this.Results();
					console.log(metroModel.config.ways);
				}
			 }

			 appendChildren.apply(stationElem, [stationCircle, stationName])

			 el('stations').appendChild(stationElem);
		};
	},
	
	//sort data to get model
	sortData: function(data){

		for (var i = 0; i < len; i++) {

			var item = data[i],

				pointObj = {
					title: item.title,
					destinations: [], 
					coordinates: {
						x: +item.x,
						y: +item.y
					},
					population: item['Население'],
					size: 1.0, // size in em
					id: item.id,
					line: item.line,
					pereh: item.pereh,
				};

				pointObj.size = 1.0;
			


					if(item.pereh != 0)
					{
					
						var pereh = item.pereh.split('_');
						// pereh[0] - id станции внутрии линии, pereh[1] - id линии , нам нужен id объекта
						
						for (var j = 0; j < len; j++) {
							var sub_item = data[j];
							
							if(sub_item.id == pereh[0] && sub_item.line == pereh[1])
							{
								var pereh_index = j;
							}
						}
					}
					else
						var pereh_index = 0;
						
						
					pointObj.pereh = pereh_index;		


			
			metroModel.config.pointList.push(pointObj);

		} // for loop
	},

	buildLines: function(stations) {

		stations = stations || this.config.pointList ;
		
		//this.drawLines(stations[3], stations[2], 220, 'blue', false);
		
		for (var i = 0; i < stations.length; i++) {
			
			// имеем станцию, у нее следующие параметры
			/*
				coordinates: Object
				x: 258
				y: 270
				__proto__: Object
				destinations: Array[0]
				length: 0
				__proto__: Array[0]
				id: 2
				line: 3
				population: undefined
				size: 1.1
				title: "Станция10"
				ищем станцию с id + 1 и тем же параметров line
			*/
			
			if(stations[i].pereh != 0)
			{
				this.drawDottedLines(stations[i], stations[stations[i].pereh]);
			}
			
			for (var j = stations.length - 1; j >= 0; j--)
			{
				if(stations[j].id == stations[i].id + 1 && stations[j].line == stations[i].line)
				{
					this.drawLines(stations[i], stations[j]);
				}
			}
			
			
		}
		
	},
	
	init: function(data) {
		this.config.maxPopulation = 12111194; // КОСТЫЛЬ! taken from Moscow, need to calculate dynamically before sortData
		// use take val from obj func!!!

		this.sortData(data);
		this.drawStations();	
		
		// здесь у нас будет вызываться функция drawlines для кажлой точки и идти будем вперед. проверяя является ли следующий элемент станцией этой же линии. если нет. то не рисуем линию
		this.buildLines();
		
		
		console.log(this.config)
	}
}

window.onload = function () {
	metroModel.init(data, [0, 'flyFrom']);

	//костыль по комментариям
	//Хотелось бы, чтобы страница с инфографикой всегда выравнивалась по центру окна браузера. Сейчас она прибивается к левому краю и смотрится не гуд на широких экранах.
	 var viewPort = getViewportSize(),
	 	paddingLeft = viewPort.w > 1227 ? (viewPort.w - 1227) /2 : 0;
	 	//document.body.style.paddingLeft = paddingLeft / 10  + 'em';
	 	el('globalWrapper').style.left = paddingLeft / 10  + 'em';
}

var data = stations, //insert without linking
	len = data.length;