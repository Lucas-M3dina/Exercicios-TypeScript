function toNumber(valor : number | string) {
  if (typeof valor === 'string') {
    return Number(valor)
  } 
  else if (typeof valor === 'number') {
    return valor
  }
  else{
    throw new Error("Valor não é uma string ou um numero");
  }
}

console.log(toNumber("10"));

console.log(toNumber(1));
