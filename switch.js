// // const grade = prompt("Enter the Grade --->");

// const grade = "A";

// switch(grade){
//   case "A":{
//     console.log("Score is between 90-100");
//     break;
//   }
//   case "B":{
//     console.log("Score is between 80-90");
//     break;
//   }
//   case "C":{
//     console.log("Score is between 60-80");
//     break;
//   }
//   case "D":{
//     console.log("Score is between 40-60");
//     break;
//   }
//   case "E":{
//     console.log("Score is between 35-40");
//     break;
//   }
//   case "F":{
//     console.log("Score is less than 35");
//     break;
//   }
//   default:{
//     console.log("Invalid Input");
//   }
    
// }

//SIMPLE CALCULATOR

const num1 = Number(prompt("Enter the  first NUmber --->"));
const num2 = Number(prompt("Enter the Second Number--->"));

const opretor = prompt("Enter any Opretor [ +, -, *, / ] --->");

switch(opretor){
  case "+":{
    let result = num1 + num2;
    console.log(result);
    break;
  }
    case "-":{
    let result = num1 - num2;
    console.log(result);
    break;
  }
    case "*":{
    let result = num1 * num2;
    console.log(result);
    break;
  }
    case "/":{
    let result = num1 / num2;
    console.log(result);
    break;
  }

    defualt:{
      console.log("Invalid Input");
    }
}