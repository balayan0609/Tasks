// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be solution(inputString) = "dsbaz".


function solution(inputString) {
    let arr = inputString.split('');
    let alph = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'z'){
            arr[i] = 'a';
        }else{
        arr[i] = alph[alph.indexOf(arr[i])+1]
        }
    }
    return arr.join('')
}
