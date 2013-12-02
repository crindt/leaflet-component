module.exports = require('./leaflet.js')
// fix up path to installed images
if ( module.exports.Icon ) 
  module.exports.Icon.Default.imagePath='crindt-leaflet-component/images'
else if ( L.Icon )
  L.Icon.Default.imagePath='crindt-leaflet-component/images'
else
  console.log("Error fixing leaflet image path")
