const check = (str) => {
  // 1 - initialize
  const oddNumber = (num) => num % 2;
  const hash = {};    

  for(let i = 0; i < str.length; i++) {
    const cur = str[i];

    if(hash[cur]){
      hash[cur] += 1;
    } else {
      hash[cur] = 1;
    }
  }

  // 2 - algorithm
  const values = Object.values(hash);

  let oddCount = 0;

  for(let i = 0; i < values.length; i++) {
    const cur = values[i];

    if(oddNumber(cur)){
      oddCount++;
      if(oddCount > 1){
        return false;
      }
    }
  }

  return true;
};

// test
const r = check('шааллшаш');
console.log(r);