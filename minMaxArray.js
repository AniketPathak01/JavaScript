let arr = [250,550,15,28876,12,4456]
let min1 = arr[0];
let min2 = arr[0];
let ans1 = 0;
let ans2 = 0;
for(let i = 0; i<arr.length; i++){

  if(arr[i]<min1){
    min1 = arr[i];
    ans1 = min1;
    //console.log(min1)
  }else if(arr[i]>min2){
    min2 = arr[i];
    ans2 = min2;
    //console.log(min2);
  }
}
console.log(`The Minimum number from the Array is ---> ${ans1}`);
console.log(`The Maximum number from the Array is ---> ${ans2}`);