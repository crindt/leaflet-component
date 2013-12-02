module.exports = require('./leaflet.js')
// fix up path to installed images
if ( module.exports ) 
  module.exports.Icon.Default.imagePath='crindt-leaflet-component/images'
else if ( L )
  L.Icon.Default.imagePath='crindt-leaflet-component/images'
