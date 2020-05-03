// Undefined: nunca recebeu um valor - Não existe naquele contexto.

let variavelSemInicializacao;
console.log(
  variavelSemInicializacao,
  typeof(variavelSemInicializacao)
)

variavelSemInicializacao = "Hello world!!"
console.log(
  variavelSemInicializacao,
  typeof(variavelSemInicializacao)
)

// Variável não tem valor no momento
variavelSemInicializacao = null;
console.log(
  variavelSemInicializacao,
  typeof(variavelSemInicializacao)
)