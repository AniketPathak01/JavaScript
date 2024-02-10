function linearSearch(arr,key){

    for(let i=0;i<arr.length;i++){
        if(arr[i] == key){
            return `Element found at index ${i}`;
        }
    }
    return "element not found";
}

const arr = [12,5,8,2,7,4];

const key = 55;

const ans = linearSearch(arr,key);
console.log(ans);