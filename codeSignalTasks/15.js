// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// solution(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]


function solution(picture) {
    let len;
  let arr = picture.map(el => {
      let a = el.split('');
      a.unshift('*')
      a.push('*')
      a = a.join('')
      len = a.length;
      return a;
  })
  let stars = '';
  for(let i = 0; i < len; i++) {stars+='*';}
  arr.unshift(stars)
  arr.push(stars)
  return arr;
}