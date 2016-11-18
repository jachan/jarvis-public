// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This relay module demo toggles both relay
channels every two seconds, logging the new
values to the console upon latching.
*********************************************/

var tessel = require('tessel');
var relaylib = require('relay-mono'); // Replace '../' with 'relay-mono' in your own code

var relay = relaylib.use(tessel.port['C']);

// Wait for the module to connect
relay.on('ready', function relayReady () {
  console.log('Ready! Toggling relays...');
  setInterval(function toggle() {
    // Toggle relay channel 1
    relay.toggle(1, function toggleOneResult(err) {
      if (err) console.log("Err toggling 1", err);
    });
    
  }, 500); // Every .5 seconds (500ms)
});

// When a relay channel is set, it emits the 'latch' event
relay.on('latch', function(channel, value) {
  if(value){
      console.log('latch on relay channel ' + channel + ' switched on');  
  }
  else{
      console.log('latch on relay channel ' + channel + ' switched off');
  }
});
