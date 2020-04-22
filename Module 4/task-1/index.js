const replaceSpaces = (str, actualSize) => {
  str = str.split('');
  const SPACE_CODE = '%20';
  const SPACE = ' ';
  const size = str.length;

  for(let i = actualSize - 1, j = size - 1; i >= 0; i--) {
    const cur = str[i];

    if(cur === SPACE){
      for(let k = SPACE_CODE.length - 1; k >= 0; k--) {
        str[j] = SPACE_CODE[k];
        j--;
      }
    } else {
      str[j] = str[i];
      j--;
    }
  }

  return str.join('');
};

// test
const str = 'dog is a good boy        ';

const r = replaceSpaces(str, 17);
console.log(r);