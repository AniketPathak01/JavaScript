
const arr = [1,2,3,4,5];
const x = arr.reduce(function(curr,acc){
  return curr+acc;
}, 0);
console.log(x);

const arr1 = ['hulk','thor','loki','batman'];
const y = arr1.reduce(function(curr,acc){
  return curr+ ' - ' +acc;
}, " ");
console.log(y);