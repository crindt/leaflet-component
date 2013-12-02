module.exports = require('./leaflet.js')
// fix up path to installed images
if ( !module.exports.Icon && L.Icon ) {
  module.exports = L
} else {
  throw new Error("Error fixing leaflet image path")
}
module.exports.Icon.Default.imagePath='crindt-leaflet-component/images'
