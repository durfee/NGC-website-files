var YOURENDTIME = 1384992000000; // The time you're counting down to in miliseconds after Jan 1, 1970
 
var clock = $('#clock').FlipClock({ autostart: false, time: 60, callbacks : { stop: newCountdown } });
 
var nextDrawingDate = (new Date(YOURENDTIME)) - (new Date());
var nextDrawingDateSeconds = Math.floor( Number( nextDrawingDate )/1000);
 
clock.setTime( nextDrawingDateSeconds );
clock.setCountdown(true);
clock.start();