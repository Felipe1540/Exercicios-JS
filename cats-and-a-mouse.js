function catAndMouse(x, y, z) {
  let a = x - z;
  let b = y - z;
  
  if(Math.abs(a) < Math.abs(b)){
    return 'Cat A';
  }else if(Math.abs(b) < Math.abs(a)){
    return 'Cat B';
  } else {
    return 'Mouse C';
  }
}

console.log(catAndMouse(1,2,3));
console.log(catAndMouse(1,3,2));