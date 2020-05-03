/*

FALSO           VERDADEIRO

false            true
0                1
[]               -1 
""               0.5
''               "0"
null
undefined
NaN

*/

const podeDirigir = true;

if(podeDirigir){
  console.log('Ela pode dirigir')
}
 
const saldoEmConta = 0;

// ! -> Negação
if(!saldoEmConta){
  console.log('Não tem saldo!')
}
 
const boolComString = "Olá mundo!"

// !! -> Força o valor pra true ou false de acordo com a tabela
console.log('Afirmação', !!boolComString);
// ! -> Negação
console.log('Negação', !boolComString);
// Negação + Forçar o boolean
console.log(
  !(!!boolComString)
)