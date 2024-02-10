
function mergeSort(arr1,arr2){
    const arr = [];
    let i=0;
    let j=0;
    
    while(i < arr1.length && j < arr2.length){
      if(arr1[i] < arr2[j]){
        arr.push(arr1[i]);
        i++;
      }else{
        arr.push(arr2[j]);
        j++
      }
    }
    
    while(i < arr1.length){
      arr.push(arr1[i]);
      i++;
    }
    
    while(j < arr2.length){
      arr.push(arr2[j]);
      j++;
    }
    return arr;
  }
  
  
  const arr1 = [3,5,7];
  const arr2 = [1,4,5,7,8];
  
  let ans = mergeSort(arr1,arr2);
  
  console.log(ans);