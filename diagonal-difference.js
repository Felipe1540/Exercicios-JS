function diagonalDifference(arr) {
  // Write your code here
  let diagonalDireita = 0;
  let diagonalEsquerda = 0;
  let diferencaAbsoluta = 0;

  for(let i = 0; i < arr.length; i++) {
    diagonalEsquerda += arr[i][i];
    diagonalDireita += arr[i][arr.length - 1 - i];
  }

  diferencaAbsoluta = diagonalEsquerda - diagonalDireita;

  return Math.abs(diferencaAbsoluta);
}

console.log(diagonalDifference([[11,2,4], [4,5,6], [10,8,-12]]));