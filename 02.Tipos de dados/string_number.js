/* 
String: um texto no JS             Number
'meu poder'                        10
"meu nome"                         0.4
`meu nome`                         10.10
"20"                               0.00001 
*/

let salarioDoAmigo = 1000;
let meuSalario = "2999";
let meuSalarioErrado = "2999aaa"
let meuSalarioCorrigido = Number(meuSalario);

// Concatenação: juntar dois textos em um único valor
console.log(salarioDoAmigo + meuSalarioCorrigido);

// typeof(): palavra chave para entender qual o tipo exato da variável
console.log(
  typeof(salarioDoAmigo),
  salarioDoAmigo
);

console.log(
  typeof(meuSalario),
  meuSalario
)

// isNaN: verifica se é um Not a Number
console.log(
  isNaN(meuSalarioErrado)
)

// Concatenando
let minhaString = "Olá";
let minhaOutraString = "mundo!";
let minhaStringComVariaveis = `${minhaString} - ${minhaOutraString} AE!`

console.log(
  minhaStringComVariaveis
)