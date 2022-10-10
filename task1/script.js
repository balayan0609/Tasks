const array = [
    {
        name: 'Tom',
        age: 23
    },
    {
        name: 'John',
        age: 19
    },
    {
        name: 'Ann',
        age: 23
    },
    {
        name: 'Gaya',
        age: 32
    },
    {
        name: 'David',
        age: 19
    },
];

let groupByAge = arr => {
    
    let obj = {};
    arr.forEach(el => {
        let a = el.age;
        if(!obj[a]){
           obj[a] = [el];
        }else{
            obj[a].push(el); 
        }
        
    });
    return obj;
}


console.log(groupByAge(array));
