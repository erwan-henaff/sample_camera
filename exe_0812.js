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


// function anylyzeArr2 (arrarg) {   
//     for (let i = 1; i <= 10; i++) {
//         let boll = 1
//         for (let j = 0; j< arrarg.length; j++) {
//           if (i !== arrarg[j]) boll *= 1
//           else if (i === arrarg[j]) boll *= 0
//         }
//         if (boll === 0) continue
//         else return i
//     }
// }

// console.log(anylyzeArr2([1,2,3,4,6,7,8,9,10]))
// console.log(anylyzeArr2([1,3,4,5,10,6,7,7,3,3,3,7,2,1,1,8,10,8,3,4]))
// console.log(anylyzeArr2([5,6,7,8,8,1,1,2,4,6,7,8,9,10]))

// function removeDouble(arrNumb)  {
//     let arrClone = arrNumb
//     for (let i = 0; i < arrNumb.length-1; i++) {
//         for (let j = i+1; j < arrNumb.length; j++) {
//             if (arrNumb[j] === arrNumb [i]) {
//                 arrClone.splice(j,1)
//                 j--;
//             } 
//         }
//     }
//     return arrClone
// }

// console.log(removeDouble([1,1,2,6,4,3,7,5,5,5,1,1,1,1,9,10,45,4,34,4,22,34]))
// console.log(removeDouble([2,3,3,3,6,7,4,6,5,5,5,45,5,5,5,3,32,2]))

function finduniq2 (listes) {
    let all_the_uniq = [];
    for (let i = 0; i < listes.length; i++) {
        let boll = 1;
        for (let j = 0; j < listes.length; j++) {
            if (j===i) continue
            else {
                if (listes[i]!==listes[j]) boll *= 1
                else boll *=0
            }
            
        }
        if (boll===0) continue
        else all_the_uniq.push(listes[i])
    }
    return all_the_uniq
}
// console.log(finduniq2([33,2,5,4,4,8,3,13,2,33,4,5,6,11,12,7,546,3,-45,7,2,6,13,8,4,11]))

// function finduniq (arrarg) {
//     for (let i = 0; i < arrarg.length; i++) {
//         if (arrarg.indexOf(arrarg[i])===arrarg.lastIndexOf(arrarg[i])) return arrarg[i]
//     }
// }
// console.log(finduniq([2,3,4,3,2,4,5,6,7,7,6,8,5,4,9,9,11]))

// function toCamelCase (strg) {
//     let arrform = strg.split('');
//     // console.log(arrform);
//     for (let i = 0; i < arrform.length; i++) {
//         if (arrform[i]==='_') {
//             let capit = arrform[i+1].toUpperCase()
//             arrform.splice(i,2,capit)
//         }
//     }
//     return arrform.join('')
// }
//console.log(toCamelCase("detrgh_tt_uuu"))
// console.log(toCamelCase("hello_world"))
//console.log(toCamelCase("javascript_is_fun"))

function numberofchar (teststr,testchar) {
    let resu = 0
    teststr = teststr.toLowerCase()
    for (let i = 0; i < teststr.length; i++) {
        if (teststr[i] == testchar) resu += 1
    }
    return resu
}

function checkOandX (teststr) {
        if(numberofchar(teststr,"o") === numberofchar(teststr,"x")) return true
        else return false   
}

// console.log(checkOandX("XXooo"))
// console.log(checkOandX("XXhjjoo"))
// console.log(checkOandX("Xoocxo3x"))
// console.log(checkOandX("Xv_ofvg"))
// console.log(checkOandX("XojOoc333xox"))

function checkOandX2 (teststr) {
    teststr = teststr.toLowerCase()
    console.log(teststr.split("x"))
    return (teststr.split("x").length == teststr.split("o").length)
}

console.log(checkOandX2("oo77xxxXXooo"))
console.log(checkOandX2("xxXXhjOOjoo"))
// console.log(checkOandX2("Xoocxo3x"))
// console.log(checkOandX2("Xv_ofvg"))
// console.log(checkOandX2("XojOoc333xox"))
