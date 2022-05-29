const ifBlock = (condition, statement) => {
  return `if(${condition}){${statement};}`
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

const generateFunctionBlock = (upperLimit) => {
  const ifBlocks = multiIfBlocks(upperLimit);
  return `const isEven=(number)=>{${ifBlocks}return false;}`
};

console.log(generateFunctionBlock(4));