// Calculator 
let calculator = (num1, num2) => {
    console.log(`Addition of ${num1} and ${num2} is ` + (num1 + num2));
    console.log(`Subtraction of ${num1} by ${num2} is ` + (num1 - num2));
    console.log(`Multiplication of ${num1} and ${num2} is ` + (num1 * num2));
    console.log(`Division of ${num1} by ${num2} is ` + (num1 - num2));
}

// test calculator(num1, num2) function 
calculator(16,4);


// introducing yourself 
greeting = (firstName, location, hobby) => console.log(`Hi, my name is ${firstName}. I live in ${location} and enjoy ${hobby}`);

// test greeting(firstName, location, hobby) function
greeting('Bobby', 'London', 'swimming')