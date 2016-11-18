var tessel = require('tessel');
var ambientlib = require('ambient-attx4');

var ambient = ambientlib.use(tessel.port['C']);


ambient.on( 'ready', function(){
  ambient.getLightLevel( function(err, lightdata) {
    if(!!err) {
      console.log("Error: " + err.message);  
    }
    
    ambient.getSoundLevel( function(err, sounddata) {
      console.log("Light level:", lightdata.toFixed(4), " ", "Sound Level:", sounddata.toFixed(4));
      // setTimeout(loop, CHECK_INTERVAL);
    });
  });
});