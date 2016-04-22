/**
* Returns value from array of arrays
* @param arr {array} array to traverse
* @param indexes{array} indexes reperesenting path to desired value
*/
function getValueFromArray(arr, indexes){ //array[indexes[0]][indexes[1]]...
	 while(indexes.length) arr = arr[indexes.shift()]
			return arr;
}

/**
* Get object from array by key-value pair
*/
function getObjFromArray(arr, key, val) {

    for (var i = arr.length - 1; i >= 0; i--) {

        for(key in arr[i]){
            if(arr[i][key] == val)
                return arr[i];
        }
    };

    return undefined;
}

/**
* Get maximum value from an array
*/
function getMaxValue(arr){
	var max;

	for (var i = arr.length - 1; i >= 0; i--) 
		if(!max || max < +arr[i]) max = +arr[i];

	return max;
}

/**
* Creates an html element and adds properties to it
* @param type {string} tag name
* @param params {object} element properties
*/
function createHTMLElement(type, params){
	var element = document.createElement(type);

	for (var prop in params) {
		element[prop] = params[prop];
	};

	return element;
}

/**
 * Returns HTML element by id
 * @param id {string}
 */
function el(id) {
	return document.getElementById(id);
}

/**
* Returns viewport size
* @returns {object}
*/
function getViewportSize(w) {
    // Use the specified window or the current window if no argument
    w = w || window;  

    // This works for all browsers except IE8 and before
    if (w.innerWidth != null) return {w: w.innerWidth, h:w.innerHeight};

    // For IE (or any browser) in Standards mode
    var d = w.document;
    if (document.compatMode == "CSS1Compat")        return { w: d.documentElement.clientWidth,
                 h: d.documentElement.clientHeight };

    // For browsers in Quirks mode
    return { w: d.body.clientWidth, h: d.body.clientWidth };
}

/**
 * Animates bezier-curve
 * 
 * @param ctx       The canvas context to draw to
 * @param x0        The x-coord of the start point
 * @param y0        The y-coord of the start point
 * @param x1        The x-coord of the control point
 * @param y1        The y-coord of the control point
 * @param x2        The x-coord of the end point
 * @param y2        The y-coord of the end point
 * @param duration  The duration in milliseconds
 */
function Line(ctx, x0, y0, x2, y2, color) {
	ctx.beginPath();
    ctx.moveTo(x0,y0);
	ctx.lineTo(x2,y2);
	
	ctx.strokeStyle = color;
	
	ctx.stroke();
}

function dottedLine(ctx, x0, y0, x2, y2) {
	ctx.beginPath();
    ctx.moveTo(x0,y0);
	ctx.lineTo(x2,y2);
	
	ctx.strokeStyle = 'grey';
	ctx.Style = "psDot";
	
	ctx.stroke();
}

/**
 * Draws a splitted bezier-curve
 * 
 * @param ctx       The canvas context to draw to
 * @param x0        The x-coord of the start point
 * @param y0        The y-coord of the start point
 * @param x1        The x-coord of the control point
 * @param y1        The y-coord of the control point
 * @param x2        The x-coord of the end point
 * @param y2        The y-coord of the end point
 * @param t0        The start ratio of the splitted bezier from 0.0 to 1.0
 * @param t1        The start ratio of the splitted bezier from 0.0 to 1.0
 */

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
/**
 * Linearly interpolates between two numbers
 */
function lerp(v0, v1, t) {
    return ( 1.0 - t ) * v0 + t * v1;
}

/**
 * jQuery Deferred analogue
 */
function Deferred(){
  this._done = [];
  this._fail = [];
}

Deferred.prototype = {
  execute: function(list, args){
    var i = list.length;

    // convert arguments to an array
    // so they can be sent to the
    // callbacks via the apply method
    args = Array.prototype.slice.call(args);

    while(i--) list[i].apply(null, args);
  },
  resolve: function(){
    this.execute(this._done, arguments);
  },
  reject: function(){
    this.execute(this._fail, arguments);
  }, 
  done: function(callback){
    this._done.push(callback);
  },
  fail: function(callback){
    this._fail.push(callback);
  }  
}

/**
* Converts degrees to radians 
*/
function rad(degrees){
    return degrees * (Math.PI/180);
}

/**
* Converts radians to degrees 
*/
function deg(radians){
    return radians * (180/Math.PI);
}

/**
* Rounding  
*/
function round(num){
    return Math.round(num);
}

/**
* Positive number
*/
function mod(num){
    return (num >= 0) ? num : num *= -1;
}

/**
* Chooses an element from list and makes it active, other elements inactive
*/
function makeElementActiveFromList(list, elem, listElemsClassValue, choosenElemClassValue, itself){
    var llen = list.length;

    for (var i = llen - 1; i >= 0; i--) {
        var item = itself ? list[i] : list[i].parentNode; //itself or parent
            item.className = listElemsClassValue;
    };
        
    elem.className = choosenElemClassValue;
}

/**
* Appends any amount of children to DOM element (this)
*/
function appendChildren(){
     for (var i = 0; i < arguments.length; i++)
         this.appendChild(arguments[i]);
}