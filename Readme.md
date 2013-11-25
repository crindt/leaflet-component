# leaflet

  A [component](https://github.com/component) wrapper for
  [leaflet](http://leafletjs.com/).

## Installation

  Install with [component(1)](http://component.io):

    $ component install crindt/leaflet-component

## Example

    ```javascript
    var L = require('leaflet')
    
    // attach the map to the #map element in the DOM
    var map = L.map('map').setView([51.505, -0.09], 13);

    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(map);
    ```


## License

  MIT
