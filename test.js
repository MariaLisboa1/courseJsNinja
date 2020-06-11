(function(win, doc) {
  'use strict';
  var $input = doc.querySelector('#username');
  var $button = doc.querySelector('#button');

  $button.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Click no botão');
  }, false);

  $input.addEventListener('click', function() {
    alert('Clicou no input');
  }, false);
  

})(window, document);