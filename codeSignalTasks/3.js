// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.

function solution(inputString) {
    let arr = inputString.split('');
    for(let i = 0, j = arr.length - 1; i < arr.length / 2; j > arr.length / 2, i++, j--){
        if(arr[i] !== arr[j]){
            return false;
        }
    }
    return true;
}
