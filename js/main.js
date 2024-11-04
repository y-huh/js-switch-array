//1
// alert("3ta son kiriting va ortachasini vilib oling")
// let a = prompt("Birinchi sonni kiriting")
// let b = prompt("Ikkinchi sonni kiriting")
// let c = prompt("Uchingchi sonni kiriting")


// if(a<b && a>c || a>b && a<c){
//     alert("Birinchi son o'rtacha: "+a)
// }
// else if(b<a && b>c || b>a && b<c){
//     alert("Ikkinchi son o'rtacha: "+b)
// }
// else if(c<b && c>a || c>b && c<a){
//     alert("Uchingchi son o'rtacha: "+c)
// }







//2
// let int = prompt("3 xonali son kiriting")-0
// let first = 0
// first = Math.floor(int/100)
// alert("Sonning birinchi raqami: "+first+" ga teng")





//3
// let int = prompt("Son kiriting")-0
// const per = 150

// let ans = 0


// ans = Math.floor((100*int)/150)
// alert("150% dan sizning ballingiz: "+ans+"% ga teng")




//4
// let ans = 0


// for(let i = 5;i<20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }



//5
// let str = ["alpha","betta","gamma","delta","salom"]
// console.log(str[4])




//6
// let str = [9,5,"betta","gamma",true,false,"delta","salom"]
// console.log(str[4]);
// console.log(str[5]);





//7
// let numbers = [1, 22, 3, 34, 53, 6, 7, 8, 59, 1076, 11, 12, 13, 148, 15, 167, 17, 198, 9179, 20];
// let juft = 0;
// let toq = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         juft += numbers[i];
//     } else {
//         toq += numbers[i];
//     }
// }

// console.log("Juftlar yigindisi: ", juft);
// console.log("Toqlar yigindisi: ", toq);



//8
// let firstNum = prompt("1chi sonni kiriting") - 0;
// let operator = prompt("Operatorni kiriting (+, -, *, /)");
// let secondNum = prompt("2-chi sonni kiriting") - 0;

// let result;

// switch (operator) {
//     case "+":
//         result = firstNum + secondNum;
//         break;
//     case "-":
//         result = firstNum - secondNum;
//         break;
//     case "*":
//         result = firstNum * secondNum;
//         break;
//     case "/":
//         if (secondNum !== 0) {
//             result = firstNum / secondNum;
//         } else {
//             result = "0 ga bo'lish mumkin emas";
//         }
//         break;
//     default:
//         result = "Notog'ri operator kiritildi";
// }

// alert("Natija: "+result);


// 9
// let numbers = [3, -7, 5, -2, 8, -4]
// let musbatAll = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         musbatAll[i] = -numbers[i];
//     } else {
//         musbatAll[i] = numbers[i];
//     }
// }

// console.log("Musbat qiymatli array: ", musbatAll);