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
  const oddCount = values.filter(x => oddNumber(x));

  if(oddCount.length > 1){
    return false;
  }

  if(values.filter(x => (!oddCount.length || x !== oddCount[0]) && oddNumber(x)).length > 0){
    return false;
  }

  return true;
};

// test
const r = check('шашаша');
console.log(r);