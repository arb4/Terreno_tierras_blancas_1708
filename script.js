
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-29.958026, -71.248684],
    zoom: 16,
    zoomControl: true
});


				
var	trab17_08 = L.geoJson(trab17_08, {	
              	    style: function(feature) {
        switch (feature.properties.nodo) {
            case 'A': return {color: "purple"};
            case 'B':   return {color: "green"};
			case 'C':   return {color: "blue"};
			case 'D':   return {color: "fuchsia"};
			case 'E':   return {color: "olive"};
			case 'F':   return {color: "teal"};
			case 'G':   return {color: "aquamarine"};
			case 'H':   return {color: "chocolate"};
			case 'I':   return {color: "darkcyan"};
			case 'J':   return {color: "deeppink"};
			case 'K':   return {color: "goldenrod"};
			case 'L':   return {color: "indigo"};
			case 'M':   return {color: "lime"};
			case 'N':   return {color: "mediumturquoise"};
			case 'O':   return {color: "plum"};
			case 'P':   return {color: "wheat"};
			case 'Q':   return {color: "yellowgreen"};
        }
    },

     onEachFeature: function (feature, layer) {
	var txt = "Usted está en el sector :";	 
       layer.bindPopup(txt.fontcolor("DarkGreen")+" "+" "+feature.properties.nodo.fontcolor("blue").bold().fontsize(3));
   } 	
                  
              }).addTo(map);
			  
/*L.geoJSON(trab17_08, {
    style: function(feature) {
        switch (feature.properties.nodo) {
            case 'a': return {color: "purple"};
            case 'a':   return {color: "red"};
        }
    }
}).addTo(map);		  
			  

			  */

		  
			  

		  








// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
