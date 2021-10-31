let number = [];

for(let i =0; i<3; i++){
    number[i] = Math.floor(Math.random() * 100) + 1;
}

console.log(number);

//sum number
    let sumNumber = number.reduce((sum, nums) => {
        return sum + nums;
        });
console.log(sumNumber);
        
        
//min number
let minNumber = number[0];
for(i = 0; i<number.length;i++){
    if(minNumber > number[i]){
        minNumber = number[i]
    }
}
console.log(minNumber);


//max number
let maxNumber = number[0];
for(i = 0; i<number.length;i++){
    if(maxNumber < number[i]){
        maxNumber = number[i]
    }
}

console.log(maxNumber);
