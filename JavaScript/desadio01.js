

function media(...args) {

  let qtd = args.length;
  let soma = 0;

  for(let i =0; i<args.length; i++)
    soma  += args[i];

    return soma /qtd;
  }


console.log("Media: ", media(4,2,10));

