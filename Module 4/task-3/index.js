const encode = (str) => {
  if(!str) {
    return str;
  }

  let initialLength = str.length;
  let result = [];

  let count = 1;
  let prev = str[0];

  for(let i = 1; i <= initialLength; i++) {
    const cur = str[i];
    
    if(cur !== prev || i === initialLength) {
      result.push(prev);
      result.push(count);

      count = 1;
      prev = cur;

      if(result.length > initialLength){
        return str;
      }
    } else {
      count++;
    }
  }

  return str;
};


// test
const str = 'a2b1c5a3';
const r = encode(str);
console.log(r);
