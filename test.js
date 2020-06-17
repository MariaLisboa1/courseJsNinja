(function() {
  'use strict';
  
  function myFunc() {
    
    Array.prototype.forEach.call( arguments, function(arg) {
      console.log(arg);
    });

  }

  console.log( myFunc(1,2,3,4,5,6,7) );
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7

})();

