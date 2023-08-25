function staircase(n) {
  // Write your code here
  let symbol = '#';
  let inputLine = '';
  let inputPosition = n - 1;

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if(j < inputPosition){
        inputLine += ' ';
      }else {
        inputLine += symbol;
      }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
  }

}

staircase(100);