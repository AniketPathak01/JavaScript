let scores = [85, 92, 78, 65, 95];
let gradeCount = {
    A:0,
    B:0,
    C:0,
    D:0,
    F:0
};
for(let i = 0; i<scores.length; i++){
    let score = scores[i];
if(score>=90 && score<=100){

    gradeCount.A++;

}
else if(score>=80 && score<=89){
   
    gradeCount.B++;

}
else if(score>=70 && score<=79){
   
    gradeCount.C++;

}
else if(score>=60 && score<=69){
   
    gradeCount.D++;

}
else{
  
    gradeCount.F++;

}
}

console.log(gradeCount);