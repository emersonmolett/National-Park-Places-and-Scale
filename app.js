console.log("loaded");

// I. IMPORT SOME DATA
    // Is the only way to import data from a .CSV to do so within D3?

var NPSData = {};
// national_park_system.csv
    // code
    // name
    // city
    // state
    // lat
    // long
    // extent

d3.csv("national_park_system.csv").then(function(NPSData) {
    // Cast strings to numbers for each record in NPSData
    NPSData.forEach(function(data) {
        data.lat = +data.lat;
        data.long = +data.long;
      });

      // set a variable that stores how many records there are in this set:
    NPSplaceCount = NPSData.length;
    NPSplaceRandom = Math.floor(Math.random() * NPSplaceCount);
 
    // look at NPSData
    console.log(`The National Park System (NPS) dataset (from .CSV) is ${NPSplaceCount} records long:`);
    console.log(NPSData);

    var NPSplaceRandomLatLong = `[${NPSData[NPSplaceRandom].lat}, ${NPSData[NPSplaceRandom].long}]`;
    console.log(`An NPS place at random from imported .CSV is ${NPSData[NPSplaceRandom].name} at ${NPSplaceRandomLatLong}.`);

});


var POIData = "";
// points_of_interest.csv
    // OBJECTID
    // MAPLABEL
    // POITYPE
    // lat
    // long

d3.csv("points_of_interest.csv").then(function(POIData) {
  
    // look at POIData
    console.log(`The points-of-interest dataset from .CSV is ${POIData.length} records long:`);
    console.log(POIData);

    // Cast strings to numbers for each record in NPSData
    POIData.forEach(function(data) {
        data.OBJECTID = +data.OBJECTID;
        data.lat = +data.lat;
        data.long = +data.long;
    });
});

// attendance.csv

var attendanceData = [];
// attendance.csv
    // code
    // name
    // a2011
    // a2012
    // a2013
    // a2014
    // a2015
    // a2016
    // a2017
    // a2018
    // a2019
    // a2020
    // average

d3.csv("attendance.csv").then(function(attendanceData) {
  
    // look at attendanceData
    console.log(`The attendance dataset from .CSV is ${attendanceData.length} records long:`);
    console.log(attendanceData);

    // Cast strings to numbers for each record in NPSData
    attendanceData.forEach(function(data) {
        data.a2011 = +data.a2011;
        data.a2012 = +data.a2012;
        data.a2013 = +data.a2013;
        data.a2014 = +data.a2014;
        data.a2015 = +data.a2015;
        data.a2016 = +data.a2016;
        data.a2017 = +data.a2017;
        data.a2018 = +data.a2018;
        data.a2019 = +data.a2019;
        data.a2020 = +data.a2020;
        data.average = +data.average;
    });
});

console.log("If the next line is an error message, that suggests I can't get at a variable declared inside a D3 function from outside D3, which suggests either doing everything inside D3 functions or finding a different way to import .CSVs into JavaScript.");
console.log(NPSplaceRandomLatLong);

var NPSplaceCount = NPSData.length;
var NPSplaceRandom = Math.floor(Math.random() * NPSplaceCount);
var NPSplaceRandomLatLong = `[${NPSData[NPSplaceRandom].lat}, ${NPSData[NPSplaceRandom].long}]`;
console.log("But if the next console.log statement works, that suggests I can.");
console.log(`An NPS place at random from a sample dataset imported from .CSV is ${NPSData[NPSplaceRandom].name} at ${NPSplaceRandomLatLong}.`);

// pass the lat long coordinates of the place chosen at random from NSP places into a new variable, centerLatLong, for mapmaking.
centerLatLong = NPSplaceRandomLatLong;


// II. MAKE A MAP

// all the MapBox styles are at https://docs.mapbox.com/api/maps/styles/#mapbox-styles
var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: maxZoomLevel,
  id: "satellite-v9",
  accessToken: API_KEY
});

var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: maxZoomLevel,
  id: "dark-v10",
  accessToken: API_KEY
});

var streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: maxZoomLevel,
  id: "streets-v11",
  accessToken: API_KEY
});

var baseMaps = {
  Satellite: satellite,
  Dark: dark,
  Streets: streets
};

// Create a map object.
var myMap = L.map("map", {
    center: centerLatLong,
    zoom: zoom
});
console.log("A map object has been created.");

  // Add the tile layer.
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 24,
    zoomOffset: -1,
  // I've just been commenting in and out different map views here.
    // id: "mapbox/streets-v11",
    // id: "mapbox/dark-v10",
    id: "mapbox/satellite-v9",

  // API key
    accessToken: API_KEY
  }).addTo(myMap);

console.log("Added a tile layer, read in the API key, and set the map view.");

console.log("-_-_-_-_-_-_-_-_-_-_-_-");

// This draws a line around the world along the 45th parallel north...
var parallel = [
  [45.00, -180],
  [45.00, 180]
];
L.polyline(parallel, {
color: "red",
weight: "0.75"
}).addTo(myMap);


// œuf de Pâques
var axeHistorique = [
    [48.890171, 2.243282],
    [48.861613, 2.333366]
    ];
    L.polyline(axeHistorique, {
    color: "lightblue",
    weight: "2"
    }).addTo(myMap);


// ...the equator...    
var parallel = [
  [0, -180],
  [0, 180]
];
L.polyline(parallel, {
color: "#9999ff",
weight: "0.75"
}).addTo(myMap);


// ...and the 45th parallel south.
var parallel = [
[-45.00, -180],
[-45.00, 180]
];
L.polyline(parallel, {
color: "red",
weight: "0.75"
}).addTo(myMap);

console.log("Drew a blue line around the world at the equator and red lines around the world at the 45th parallels north and south");
console.log("-_-_-_-_-_-_-_-_-_-_-_-");


// III. DRAW CONCENTRIC CIRCLES
// For now, this picks a number at random, although we said we'll let visitors change this for themselves:

// var miles = 300;
var miles = Math.random() * 10 + .5;
miles = Math.round((miles * 10)) / 10;
diameter = miles * 2;
// I just realized the radius of a circle is a bit abstract, but diameter is more concrete.
// We might as well let people work directly with diameter, which will take a bit of rethinking.


// State for the visitor how big the outer circle is.
console.log(`The largest circle is ${diameter} miles (${Math.round(diameter * 5280)} feet) across. Let's put that another way.`);

// Evaluate that diameter against common dimensions, from smallest (the height of a person)
// to largest (the length of Delaware) and pick the best one.
// Let' say we if it would take more than 100 of something, move to the next largest thing:
var maxCommonObjects = 100;

// Here begins a switch statement that does that:

switch (diameter / 96 < maxCommonObjects) {

  case diameter * 5280 / 5.5 < maxCommonObjects:
// 5.5 ft
// The average height of a person in the U.S. is: female: 5'4", male: 5'9". (Source: N-HANES III.)
console.log(`A person's about 5' 6" tall. If people laid down head to toe, the largest circle would be ${Math.round((miles * 2 * 5280 / 5.5) * 10) / 10} people across.`);
  break;
  
  case diameter * 5280 / 35 < maxCommonObjects:
// 35 ft
// A full-sized school bus is 35 feet long (or longer).
console.log(`Many full-sized school buses are about 35 feet long. The largest circle would be ${Math.round((miles * 2 * 5280 / 35) * 10) / 10} such school buses across.`);
  break;
        
  case diameter * 5280 / 231.3 < maxCommonObjects:
// 231.3 ft
// A 747 is 231.3 feet long.
console.log(`A 747 jet airliner is 231.3 feet long. The largest circle would be ${Math.round((miles * 2 * 5280 / 231.3) * 10) / 10} 747s across.`);
  break;
        
  case diameter * 5280 / 1063 < maxCommonObjects:
// 1063 ft
// The Eiffel Tower is currently 1063 feet tall.
console.log(`The Eiffel Tower is currently 1063 feet tall. If you could lay it on its side, the largest circle would be ${Math.round((miles * 2 * 5280 / 1063) * 10) / 10} Eiffel Towers across.`);
  break;
        
  case diameter / 13.4 < maxCommonObjects:
// 13.4 miles
// Manhattan is about 13.4 miles long.
console.log(`The island of Manhattan's about 13.4 miles from top to bottom. The largest circle would be ${Math.round((miles * 2 / 13.4) * 10) / 10} Manhattans across.`);
  break;

  case diameter / 13.4 >= maxCommonObjects:
// 96 miles
// Delaware is 96 miles long.
console.log(`Delaware is 96 miles long. The largest circle would be ${Math.round((miles * 2 / 96) * 10) / 10} Delawares long.`);
  break;
  };

console.log("-_-_-_-_-_-_-_-_-_-_-_-");


// We said we'd give visitors a second variable to change (probably with a drop-down): divisions.
// How many divisions would the visitor like to see the largest circle divided into?
// ******

// var divisions = 10
var divisions = Math.round(Math.random() * 20)
console.log(`The outer circle has ${divisions} divisions.`);

// ******

// Radius starts at zero, but, when code gets to the loop that makes concentric circles,
// radius will iterate by radiusIncrements up to the limit set in miles.
var radius = 0;

// how many miles apart is one concentric circle from the next?
var radiusIncrements = miles / divisions;
console.log(`Each circle will be ${Math.round(radiusIncrements * 10) / 10} miles (${Math.round(radiusIncrements*5280)} feet), or about a ${Math.round(radiusIncrements*20)} minute walk, from the next.`);

// This sets a zoom level to start.
// In the long switch statement below, value are added to this.

var zoom = 2;

// This sets maximum zoom level for all tile layers
var maxZoomLevel = 22;
console.log(`Zoom level starts at ${zoom}. Visitors can't zoom in further than level ${maxZoomLevel}`);

console.log("-_-_-_-_-_-_-_-_-_-_-_-");


// Here's a long switch statement that sets zoom level based on the radius of the outermost circle, set in the variable miles.
// It deserves a bit more refinement at the small end of the scale.
switch (miles <= 1999) {

    case miles > 1999:
        zoom = zoom + 1;
        break;
    
    case miles > 999:
        zoom = zoom + 2;
        break;

    case miles > 499:
        zoom = zoom + 3;
        break;

    case miles > 249:
        zoom = zoom + 4;
        break;

    case miles >  174:
        zoom = zoom + 5;
        break;

    case miles > 99:
        zoom = zoom + 6;
        break;

    case miles > 49:
        zoom = zoom + 7;
        break;

    case miles > 34:
        zoom = zoom + 8;
        break;
        
    case miles > 16:
        zoom = zoom + 9;
        break;

    case miles > 9:
        zoom = zoom + 10;
        break;

    case miles > 8.4:
        zoom = zoom + 11;
        break;

    case miles > 5:
        zoom = zoom + 12;
        break;
    
    case miles > .5:
        zoom = zoom + 13;
        break;
            
    case miles > .1:
        zoom = 14;
        break;
      
    };

// I made a table of what size circle fit well at what zoom level on my computer.
// It would be different based on a device's screen resolution, as well as what percent of the browser window the map takes up,
// but the real point is to avoic being zoomed so far in that the visitor only sees one circle, or none at all,
// and thinks it's broken.
// zoom   mile radius
//  2      5000
//  3      2500
//  4      1000      ******
//  5       750
//  6       400
//  7       200
//  8       100      ******
//  9        50
// 10        25
// 11        10      ******
// 12         7
// 13         3
// 14         1.5    ******
// 15         0.75
// 16         0.35
// 17         0.2
// 18         0.1    ******
// 19         0.05
// 20         0.025
// 21         0.0125 ******
// 22         0.00625
// 23         0.005

console.log(`Based on a largest circle ${miles} across, this map is reset to zoom level ${zoom}.`);
console.log("The main variables are now initialized.");