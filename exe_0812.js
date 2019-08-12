// function rankStudent (averagemark) {
//     let result=0;
//     for (let i = 0; i < averagemark.length; i++) {
//         result += averagemark[i];
//     }
//     result = result / averagemark.length

//     if (result>100 || result<0) return undefined
//     if (result<60) return "F"
//     if (result<70) return "D"
//     if (result<80) return "C"
//     if (result<90) return "B"
//     if (result<=100) return "A"
// }

// console.log(rankStudent([80,70]))
// console.log(rankStudent([80,77,88,95,68]))
// console.log(rankStudent(998.4))

// function sumarrelem (arrarg) {
//     let result = 0;
//     for (let i = 0; i < arrarg.length; i++) {
//         result +=  arrarg[i];
//     }
//     return result;
// }
// console.log(sumarrelem([24,1,1,1]))

// function multarrelem (arrarg) {
//     let result = 1;
//     for (let i = 0; i < arrarg.length; i++) {
//         result *=  arrarg[i];
//     }
//     return result;
// }
// console.log(multarrelem([24,1,1,2]))

// let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// function printarr (arrarg) {
//     for (let i = 0; i < arrarg.length; i++) {
//         for (let j = 0; j < arrarg[i].length; j++) {
//             console.log(arrarg[i][j])
//         }
//     }
// }
// printarr(arr)

// var sum10 = 0
// for (let j = 1; j < 11; j++) {
//     sum10 +=j;
// }
// console.log(sum10)

// function anylyzeArr (arrarg) {
//     let sumarr = 0;
//     for (let i = 0; i < arrarg.length; i++) {
//         sumarr += arrarg[i];
//     }
//     return (sum10 - sumarr)
// }

// console.log(anylyzeArr([1,2,3,4,6,7,8,9,10]))
// console.log(anylyzeArr([1,2,3,4,5,6,7,9,10]))


function anylyzeArr2 (arrarg) {
    
    for (let i = 1; i <= 10; i++) {
        let boll = 1
        for (let j = 0; j< arrarg.length; j++) {
          if (i !== arrarg[j]) boll *= 1
          else if (i === arrarg[j]) boll *= 0
        }
        if (boll === 0) continue
        else return i
    }
}

console.log(anylyzeArr2([1,2,3,4,6,7,8,9,10]))
console.log(anylyzeArr2([1,3,4,5,10,6,7,7,3,3,3,7,2,1,1,8,10,8,3,4]))