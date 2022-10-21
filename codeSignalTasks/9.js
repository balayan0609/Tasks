// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].


function solution(inputArray) {
    let arr = [];
    let long = inputArray[0].length;
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > long){
            long = inputArray[i].length;
        }
    }
    for(el of inputArray){
        if(el.length == long){
            arr.push(el);
        }
    }
    return arr;
}
