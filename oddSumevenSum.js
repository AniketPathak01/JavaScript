let arr = [1,2,3,4,5];

let oddSum = 0;
let evenSum = 0;
for(let i=0; i<arr.length; i++){
  if(arr[i] % 2 == 0){
    evenSum += arr[i]
  }else{
    oddSum += arr[i]
  }
}
console.log(`Even sum is --> ${evenSum}`);
console.log(` odd sum is --> ${oddSum}`);

