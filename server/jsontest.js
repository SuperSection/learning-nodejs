const obj = {
  name: "Pagol",
  age: 17,
  address: "West Bengal",
};

console.log(obj);

const jsonData = JSON.stringify(obj);
console.log(jsonData);

const objData = JSON.parse(jsonData);
console.log(objData);