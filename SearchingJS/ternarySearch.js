
function ternarySearch(arr,s,e,target) {
  

    while(s<=e){
      
      let mid1 = s + Math.floor((e-s)/3);
      let mid2 = e - Math.floor((e-s)/3);
      
      if(arr[mid1] == target){
        return mid1;
      }
      
      if(arr[mid2] == target){
        return mid2;
      }
      
      if(target < arr[mid1]){
        e = mid1 - 1;
      }else if(target > arr[mid2]){
        s = mid2 + 1;
      }else{
        s = mid1+1;
        e = mid2-1;
      }
    }
    return -1;
  }
  
  const arr = [1,4,5,6,8,9];
  const target = 5;
  
  let s = 0;
  let e = arr.length-1;
  let ans = ternarySearch(arr,s,e,target);
  
  console.log(ans);