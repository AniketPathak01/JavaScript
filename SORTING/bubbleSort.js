

const arr = [5,3,1,2,4];

for(let j = 0; j < arr.length; j++){
    for (let i = 0; i < arr.length -1 - j; i++){
        if(arr[i] > arr[i+1]){
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        }
    }
}
console.log(arr);
