// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// solution(cell1, cell2) = true.



// For cell1 = "A1" and cell2 = "H3", the output should be
// solution(cell1, cell2) = false.


function solution(cell1, cell2) {
    let a = cell1.split('');
    let b = cell2.split('');
    if(isOddOrEven(a[0].charCodeAt(), +a[1]) === isOddOrEven(b[0].charCodeAt(), +b[1])){
        return true;
   }else{
       return false;
   }
   }
   
   let isOddOrEven = (n1,n2) => {
       if(n1 % 2 === 0 && n2 % 2 === 0 || n1 % 2 !== 0 && n2 % 2 !== 0){
           return true;
       }else{
           return false
       }  
   }