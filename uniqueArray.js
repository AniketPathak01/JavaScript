let arr = [1, 2, 3, 2, 4, 4, 5];
arr.sort();
let uniq_arr = [];

for(let i=0;i<arr.length;i++){
    if(arr[i] != arr[i+1]){
        uniq_arr.push(arr[i]);
    }
}
console.log(`Unique Array -->`,uniq_arr);   