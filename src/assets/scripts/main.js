/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  console.log('Hello, UOC!');
} )();

$('.progress-bar').each(function() {
  "use strict";
  	var $bar = $(this);
    var progress = setInterval(function() {
      
      var currWidth = parseInt($bar.attr('aria-valuenow'));
      var maxWidth = parseInt($bar.attr('aria-valuemax'));
      
	  //update the progress
        $bar.width(currWidth+'%');
        $bar.attr('aria-valuenow',currWidth+10);
      
      //clear timer when max is reach
      if (currWidth >= maxWidth){
        clearInterval(progress);
      }
      
    }, 500);
  
});
