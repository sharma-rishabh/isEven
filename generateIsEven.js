const ifBlock = (condition, statement) => {
  return `if(${condition}){${statement}}`
};

console.log(ifBlock('number===4', 'return true'));