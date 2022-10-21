// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// solution(inputArray) = 4.

// Check out the image below for better understanding:



function solution(inputArray) {
    let jump = 2;
    while(jump){
        let arr = [];
        let k = 0;
        while(k <= Math.max(...inputArray)){
            arr.push(k+=jump);
        }
        if(foo(inputArray, arr)){
            return jump;
        }
        jump++
    }   
}

const foo = (b1, b2) => {
    if(b2.some(el => b1.includes(el))){
        return false
    }
    return true;
}
