// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.

function solution(n) {
    let s1 = 0;
    let s2 = 0;
    let arr = n.toString().split('');
    for(let i = 0, j = arr.length/2; i < arr.length/2, j < arr.length; i++, j++){
        s1 += (+arr[i]);
        s2 += (+arr[j]);
    }
    if(s1 === s2){
        return true;
    }else{
        return false;
    }
}
