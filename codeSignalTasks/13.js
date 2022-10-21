// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim"


function solution(inputString) {
    let arr = inputString
      let i = 0, start = 0, end = -1
      while (end < start && i < arr.length) {
          if (arr[i] == '(') {start = i}
          if (arr[i] == ')') {end = i}
          i++
      }
     
      let temp = arr.substring(start + 1, end)
      if(start !== -1 && end !== -1){
          return solution(arr.substring(0, start) + 
          [...temp].reverse().join('') + 
          arr.substring(end + 1))
      }
      return arr
  }