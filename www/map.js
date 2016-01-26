/*
 * This file is licenced CC0 http://creativecommons.org/publicdomain/zero/1.0/
 *
 */

/* create the leaflet map */
//var map = L.map('map');



/* use OSM as the base map */
/*
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Base map &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        */
L.mapbox.accessToken = 'pk.eyJ1IjoiaHlkcm9sb2dpY2FsIiwiYSI6ImNpaWh1Y2JjejAwZXp2NG01aWs0YXYyOXEifQ.4g5WxB4lRYonq7YdyUmsIA';

var southWest = L.latLng(32.53427076600008, -124.40917464699993),
    northEast = L.latLng(42.009505681000064, -114.13119958999994),
    bounds = L.latLngBounds(southWest, northEast);

var map = L.mapbox.map('map', 'mapbox.streets', {
    maxBounds: bounds,
    maxZoom: 19,
    minZoom: 10
});

/* remove Leaflet attribution */
map.attributionControl.setPrefix('');
map.fitBounds(bounds);



// Add in drawing control
var featureGroup = L.featureGroup().addTo(map);

var drawControl = new L.Control.Draw({
  edit: {
    featureGroup: featureGroup
  },
  draw: {
    polygon: true,
    polyline: false,
    rectangle: false,
    circle: false,
    marker: false
  }
}).addTo(map);

map.on('draw:created', showPolygonArea);
map.on('draw:edited', showPolygonAreaEdited);


/*var customLayer = L.geoJson(null, {
    // http://leafletjs.com/reference.html#geojson-style
    style: function(feature) {
        return {
            color: '#f00'
        };
    }
});
*/

/* add the major incidents geojson feed */
/*
MAPID: hydrological.bpno5oul

$.getJSON('geojson.json', function (data) {
        addIndexLayer(map, data)
        });
        */
/*
function getColor(d) {
    var blues = ['rgb(247,251,255)','rgb(222,235,247)','rgb(198,219,239)','rgb(158,202,225)','rgb(107,174,214)','rgb(66,146,198)','rgb(33,113,181)','rgb(8,69,148)'];
    return d > 190 ? blues[7] :
           d > 162 ? blues[6] :
           d > 133 ? blues[5] :
           d > 104 ? blues[4] :
           d > 76 ? blues[3] :
           d > 47 ? blues[2] :
           d > 19 ? blues[1] :
                    blues[0] ;
}
*/
/* for each feature from the GeoJSON do some extra tasks */
// function onEachFeature(feature, layer) {
//     /* highlight feature on highlight */
//     layer.on({
//         mouseover: highlightFeature,
//         mouseout: resetHighlight
//     });
// }

// function resetHighlight(e) {
//     if (consumption_pp) {
//         consumption_pp.resetStyle(e.target);
//     }

//     info.update();
// }

// function highlightFeature(e) {
//     var layer = e.target;

//     info.update(layer.feature.properties);

//     var highlightStyle = polygonStyle(layer.feature);

//     highlightStyle.weight = 2;
//     highlightStyle.color = 'black';
//     layer.bringToFront();

//     layer.setStyle(highlightStyle);
// }

// function polygonStyle(feature) {
//     return {
//         fillColor: feature.properties.cpp_2013 ? getColor(feature.properties.cpp_2013) : 'white',
//         weight: 1,
//         opacity: 1,
//         color: 'white',
//         fillOpacity: 0.7
//     };
// }

// var info = L.control();

// info.onAdd = function (map) {
//     this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
//     this.update();
//     return this._div;
// };

// // method that we will use to update the control based on feature properties passed
// info.update = function (props) {
//     this._div.innerHTML = props ?
//         '<h1>' + props.lga_name  + '</h1>' + '<br>' +
//         '' + parseFloat(props.cpp_2012).toFixed(2) + ', ' + parseFloat(props.cpp_2013).toFixed(2)
//         : 'Hover over a state';
// };

// info.addTo(map);

// var consumption_pp = L.geoJson(null, {
//     style: polygonStyle,
//    onEachFeature: onEachFeature
// });
// var lga = omnivore.topojson('data/fldzn_x_tp.json', null, consumption_pp).addTo(map);
