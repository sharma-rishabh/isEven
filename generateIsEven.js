const ifBlock = (condition, statement) => {
  return `if(${condition}){${statement}}`
};

const multiIfBlocks = (upperLimit) => {
  let number = 0;
  let ifBlocks = '';
  while (number <= upperLimit) {
    ifBlocks += ifBlock(`number===${number}`, 'return true');
    number += 2;
  }
  return ifBlocks;
};

console.log(multiIfBlocks(4));