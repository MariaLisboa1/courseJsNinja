(function(win, doc) {
  /*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
var $visor = doc.querySelector('[type="text"]')
var $buttonsOperations = doc.querySelectorAll('[data-js="btn-operation"]');
var $butttonsNumber = doc.querySelectorAll('[data-js="btn-number"]');
var $buttonEqual = doc.querySelector('[data-js="btn-equal"]');
var $buttonCE = doc.querySelector('[data-js="btn-CE"]');


$buttonCE.addEventListener('click', handleClickCE, false);
$buttonEqual.addEventListener('click', handleClickEqual, false);

Array.prototype.forEach.call( $buttonsOperations, function(operation) {
  operation.addEventListener('click', handleClickOperation, false);
})

Array.prototype.forEach.call( $butttonsNumber, function(button) {
  button.addEventListener('click', handleClickNumber, false)
});

function handleClickOperation() {
  $visor.value = removeLastItemIfItIsOperator( $visor.value );

  $visor.value += this.value;
}

function handleClickNumber() {
  $visor.value += this.value;
}

function handleClickCE() {
  $visor.value = 0;
}

function removeLastItemIfItIsOperator( number ) {
  if (isLastItemOperation( number ))
    return number.slice(0, -1);

  return number;
}

function handleClickEqual() {
  $visor.value = removeLastItemIfItIsOperator($visor.value);

  var allValues = $visor.value.match(/\d+[+x÷-]?/g);
  $visor.value = allValues.reduce(function(accumulated, actual) {

    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsOperator( actual );
    var lastOperator = isLastItemOperation( actual ) ? actual.split('').pop() : '';

    switch (operator) {
      case '+':
        return ( Number(firstValue) + Number(lastValue) ) + lastOperator
      case '-':
        return ( Number(firstValue) - Number(lastValue) ) + lastOperator
      case 'x':
        return ( Number(firstValue) * Number(lastValue) ) + lastOperator
      case '÷':
        return ( Number(firstValue) / Number(lastValue) ) + lastOperator
    }

  });

}

function isLastItemOperation( number ) {
  const operations = [ '+', '-', 'x', '÷' ];

  const lastItem = number.split('').pop();

  return operations.includes(lastItem)


}


})(window, document)
