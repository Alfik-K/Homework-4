//Homework 4

//Exercise 1
//Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
//starting from a to b spaced by step.

function arrStep (a, b, step) {
    let result = [];
    for( a ; a <= b ; a += step ) {
        result.push(a);
    }
    return result;
}

//Exercise 2
//Given a string and a symbol. Find the number of occurrences of the symbol in the string.

function symbolNumInStr (str, smb) {
    let count = 0;
    for(let i = 0 ; i < str.length ; i++) {
        if(smb === str[i]){
            count++;
        }
    }
    return count;
}

//Exercise 3
//Given a string. Check whether the string is palindrome or not.

function isPalindrome (string) {
    let paliStr = "";
    for(let i = string.length - 1 ; i >= 0  ; i--) {
        paliStr += string[i];
    }
    if(paliStr === string && string !== ""){
        return "yes"
    } else {
        return "NO"
    }
}

//Exercise 4
//Given an array of numbers. Find the maximum element in array.

//1 way
function maxElementInArr (arr) {
    return Math.max(...arr);
}

//2 way
function maxElementInArr (arr) {
    let maxVal = 0;
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] > maxVal){
            maxVal = arr[i];
        }
    }
    return maxVal;
}

//Exercise 5
//Given an array. Create the array which elements are products between two neighbours.

function twoElementProdArr (arr) {
    let prodArr = [];
    for(let i = 0 ; i < arr.length - 1 ; i++) {
        prodArr.push(arr[i]*arr[i+1]);
    }
    return prodArr;
}

//Exercise 6
//Given a string and symbols. Change first symbol by the second one in the string.

//1 way
function changeSmbInStr (str, smb1, smb2) {
    return str.replaceAll(smb1, smb2);
}

//2 way
function changeSmbInStr (str, smb1, smb2) {
    let newStr = "";
    for(let i = 0 ; i < str.length ; i++) {
        if(str[i] === smb1) {
            newStr += smb2;
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

//Exercise 7
//Print the following number pattern:

function rows (num) {
    let str = "";
    for(let i = 1 ; i <= num ; i++) {
        str += i;
    }
    return str;
}

function printNumPattern (number) {
    let str = "";
    for(let i = 1; i <= number ; i++){
        str += rows(i) + " \n ";
    }

    for(let x = number - 1 ; x > 0 ; x--) {
        str += rows(x) + " \n ";
    }

    return alert(str);
}


