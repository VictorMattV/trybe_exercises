function sum (...numbers){
return numbers.reduce((acc, curr) => {
     return acc + curr
}, 0);
};

console.log(sum(1,2,3,10,20));
