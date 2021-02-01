append = (arr, item) => {
  arr.push(item);
  return arr;
};

truncate = (arr) => {
  arr.pop();
  return arr;
};

prepend = (arr, item) => {
  arr.unshift(item);
  return arr;
};

curtail = (arr) => {
  arr.shift();
  return arr;
};

concat = (arr1, arr2) => {
  return arr1.concat(arr2)
};

insert = (arr, item, index) => {
  arr.splice(index, 0, item);
  return arr;
}

count = (arr, item) => {
  let answer = arr.filter((element) => element === item)
  return answer.length;
};

duplicates = (arr) => {
  let map = {};
  let answer = []

  for (let element of arr) {
    map[element] = map[element] + 1 || 1;
  }

  for (let element in map) {
    if (map[element] > 1) {
      answer.push(Number(element))
    }
  }

  return answer
};

square = (arr) => {
  return arr.map((x) => Math.pow(x, 2))
};

findAllOccurrences = (arr, item) => {
  let answer = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      answer.push(i)
    }
  }

  return answer;
};
