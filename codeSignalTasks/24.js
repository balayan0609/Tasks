// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// solution(matrix) = [[1, 2, 1],
//                     [2, 1, 1],
//                     [1, 1, 1]]
// Check out the image below for better understanding:



function solution(matrix) {
    let arr = []
    for(let a = 0; a < matrix.length; a++){
        arr[a] = [0]
        for(let b = 0; b < matrix[0].length - 1; b++){
            arr[a].push(0)
        }
    }

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j]){
               if(arr[i-1]&&arr[i-1][j-1] !== undefined ) arr[i-1][j-1]++
               if(arr[i-1]&&arr[i-1][j] !== undefined ) arr[i-1][j]++
               if(arr[i-1]&&arr[i-1][j+1] !== undefined ) arr[i-1][j+1]++
               if(arr[i]&&arr[i][j-1] !== undefined ) arr[i][j-1]++
               if(arr[i]&&arr[i][j+1] !== undefined ) arr[i][j+1]++
               if(arr[i+1]&&arr[i+1][j-1] !== undefined ) arr[i+1][j-1]++
               if(arr[i+1]&&arr[i+1][j] !== undefined ) arr[i+1][j]++
               if(arr[i+1]&&arr[i+1][j+1] !== undefined ) arr[i+1][j+1]++
            
            }
        }
    }
    return arr;
}