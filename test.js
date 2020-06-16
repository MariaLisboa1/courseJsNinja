(function(win, doc) {
  'use strict';
  
  var counter = 0;
  var $button = doc.querySelector('[data-js="button"]');
  var temporizador;

  function timer() {
    console.log( 'timer', counter++ );
  }

  temporizador = setInterval( timer , 1000);
  //ao clicar no botão ele vai parar o setInterval
  $button.addEventListener('click', function() {
    clearInterval(temporizador);
  }, false);

})(window, document);

/**
 * <button data-js="button">Parar cronômetro</button>
 */
