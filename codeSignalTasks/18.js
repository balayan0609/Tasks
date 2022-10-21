// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// solution(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

function solution(inputString) {
    
    let obj = inputString.split('').reduce((ob, el) => {
        if(!ob[el]){
            ob[el] = 1;
        }else{
            ob[el]++;
        }
        return ob;
    }, {})
    let a = Object.keys(obj);
    let b = 0;
    for (const i of a) {
        if(obj[i] % 2 === 0) b++
    }
    if(b === a.length || b === a.length - 1) {
        return true
    } else{
        return false
    }
    
}
