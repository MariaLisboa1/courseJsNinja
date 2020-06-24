(function() {
  'use strict';

  function myFunc() {
    return Array.prototype.reduce.call(arguments,function(acumulado, atual) {
      return acumulado + atual;
    });

  }

  console.log( myFunc( 1,2,3,4,5 ) );

})();

