const fs = require('fs');

const ifBlock = (condition, statement) => {
  return `if(${condition}) {\n${statement};\n\}\n`
};

const multiIfBlocks = (upperLimit) => {
  let number = 0;
  let ifBlocks = '';
  while (number <= upperLimit) {
    ifBlocks += `\t${ifBlock(`number===${number}`, 'return true')}`;
    number += 2;
  }
  return ifBlocks;
};

const generateFunctionBlock = (upperLimit) => {
  const ifBlocks = multiIfBlocks(upperLimit);
  return `const isEven=(number) =>{\n\t${ifBlocks}\treturn false;\n}`
};

const main = (upperLimit) => {
  const functionBlock = generateFunctionBlock(upperLimit);
  const fileContent = `${functionBlock}\n\nisEven(${upperLimit})`
  fs.writeFileSync('./isEven.js', fileContent)
};

main(process.argv[2]);
