function migratoryBirds(arr) {
  // Write your code here
  let counts = {}; // objeto contem chave e valor

  arr.forEach((contador) => { // revisar essa questao de foreach 
    counts[contador] = (counts[contador] || 0) + 1;
  });

  const maxValue = Math.max(...Object.values(counts)); //pegando o valor maximo dentre as chaves do objeto counts.
  //console.log(Object.values(counts));
  //console.log(maxValue);
  // dentro de counts estou buscando qual a o numero da chave que possui o valor maio(que se repete mais vezes)
  const num = Object.keys(counts).find((chave) => { 
    return counts[chave] === maxValue;
  });
  //console.log(Object.keys(counts));
  return num;
}

console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4])); 