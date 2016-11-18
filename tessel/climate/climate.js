var tessel = require('tessel');
var climatelib = require('climate-si7020');
var ambientlib = require('ambient-attx4');
var wifi = require('wifi-cc3000');
var http = require('http');

console.log("Beginning climate checking...");

var climate = climatelib.use(tessel.port['A']);
var ambient = ambientlib.use(tessel.port['B']);

var CHECK_INTERVAL = 600

function postTemperature(temp, humid, light, sound) {
  var postData = JSON.stringify({
    temperature: {
      temperature: temp.toFixed(4),
      humidity: humid.toFixed(4)
    }
  });

  var post = {
    host: "192.168.1.151",
    port: 3000,
    path: '/api/v1/temperature',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Content-Length': postData.length
    }
  };

  var statusCode = 200;
  var req = http.request(post, function (res) {
    res.setEncoding('utf8');

    // response buffer
    var buffer = '';
    res.on('data', function (data) {
      buffer += data;
    })
    res.on('end', function () {
      console.log('done.');
      console.log(buffer);
      setTimeout(loop, CHECK_INTERVAL);
    })
  }).on('error', function (e) {
    console.log("Error submitting post! Message: " + e.message)
    // console.log('not ok -', e.message, 'error event')
    setTimeout(loop, CHECK_INTERVAL);
  });

  req.write(postData);
  req.end();
}

function loop() {
  climate.readTemperature('f', function (err, temp) {
    climate.readHumidity(function (err, humid) {
      console.log('Degrees:', temp.toFixed(4) + 'F', 'Humidity:', humid.toFixed(4) + '%RH');
      // postTemperature(temp, humid);
      // 
      ambient.getLightLevel( function(err, lightdata) {
        if(!!err) {
          console.log("Error: " + err.message);  
        }
        
        ambient.getSoundLevel( function(err, sounddata) {
          console.log("Light level:", lightdata.toFixed(4), " ", "Sound Level:", sounddata.toFixed(4));
          setTimeout(loop, CHECK_INTERVAL);
        });
      });
    });
  });
}

climate.on('ready', function () {
  console.log('Connected to climate module');

  // Loop forever
  setImmediate(loop);
});

climate.on('error', function(err) {
  console.log('error connecting module', err);
});