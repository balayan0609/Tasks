// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

// Given a string, find out if it satisfies the IPv4 address naming rules.

// Example

// For inputString = "172.16.254.1", the output should be
// solution(inputString) = true;

// For inputString = "172.316.254.1", the output should be
// solution(inputString) = false.

// 316 is not in range [0, 255].

// For inputString = ".254.255.0", the output should be
// solution(inputString) = false.

// There is no first number.


function solution(inputString) {
    let arr = inputString.split('.');
    if(arr.length !== 4) return false;
    return arr.every(el => {
        if(el.length > 1 && el[0] === '0'){
            return false
        } else if((+el >= 0 && +el <= 255) && el !== ''){
            return true
        }
    })
    
}
