function simpleArraySum(ar) {
  // Write your code here
  let soma = 0;

  for(let i = 0; i < ar.length; i++) {
    soma += ar[i];
  }
  return soma;
}

console.log(simpleArraySum([1,2,3,4,10,11]));