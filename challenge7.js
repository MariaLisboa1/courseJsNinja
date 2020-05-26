/*
Crie um array com 5 items (tipos variados).
*/
var items = [false, "Maria", function soma(x, y) {
		return x + y;
	}, {
		framework: "angular"
	},
	[1, 2, 3]
];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {

	items.push(item);
	return items;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem([true, "Nazare", 0]))

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${items[5][1]}`)

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
var countArray = items.length;
console.log(`O primeiro array tem ${countArray} itens.`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
var countArray2 = items[5].length;
console.log(`O segundo array tem ${countArray2} itens.`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log('Números pares entre 10 e 20:');
var num = 10;

while (num <= 20) {
	num % 2 === 0 ? console.log(num) : '';
	num++;
}


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log('Números ímpares entre 10 e 20:');
var num2 = 10;

while (num2 <= 20) {
	num2 % 2 !== 0 ? console.log(num2) : '';
	num2++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log('Números pares entre 100 e 120:');

for (let index = 100; index <= 120; index++) {
	index % 2 === 0 ? console.log(index) : '';
}

console.log('Números ímpares entre 111 e 125:');

for (let index = 111; index <= 125; index++) {
	index % 2 !== 0 ? console.log(index) : '';
}