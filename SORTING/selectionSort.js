
const arr = [15,7,0,5,1,3];

for(let i=0; i<arr.length - 1; i++){
  let minIndex = i;
  
  for(let j=i+1; j<arr.length; j++){
    
    if(arr[j] < arr[minIndex])
      minIndex = j;
  }
  
  [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}
console.log(arr);