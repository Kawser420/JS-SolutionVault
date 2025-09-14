import { parseNumber, parseInteger, parseNumberArray } from '../utils';

export const solveBudget = (inputs: { [key: string]: string }): string => {
    const watches = parseInteger(inputs.watches || '0', 'Watches');
    const phones = parseInteger(inputs.phones || '0', 'Phones');
    const laptops = parseInteger(inputs.laptops || '0', 'Laptops');
    [watches, phones, laptops].forEach(val => {
        if (val < 0) throw new Error("Quantities must be non-negative.");
    });
    const total = (watches * 50) + (phones * 100) + (laptops * 500);
    return `Total Budget: ₦${total.toLocaleString()}`;
};

export const solveHotelCost = (inputs: { [key: string]: string }): string => {
    const days = parseInteger(inputs.days, 'Days');
    if (days <= 0) throw new Error("Number of days must be positive.");
    let totalCost = 0;
    if (days <= 10) totalCost = days * 500;
    else if (days <= 20) totalCost = (10 * 500) + ((days - 10) * 400);
    else totalCost = (10 * 500) + (10 * 400) + ((days - 20) * 300);
    return `Total cost for ${days} days: ₦${totalCost.toLocaleString()}`;
};

const factorial = (num: number): number => {
    if (num < 0) throw new Error("Factorial is not defined for negative numbers.");
    if (num > 20) throw new Error("Number is too large for standard factorial calculation.");
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

export const solveFactorial = (inputs: { [key: string]: string }): string => {
    const num = parseInteger(inputs.num, 'Number');
    const result = factorial(num);
    return `Factorial of ${num} is ${result.toLocaleString()}.`;
};

export const solveSquare = (inputs: { [key: string]: string }): string => {
    const num = parseNumber(inputs.num, 'Number');
    return `Square of ${num} is ${num * num}.`;
};

export const solveCube = (inputs: { [key: string]: string }): string => {
    const num = parseNumber(inputs.num, 'Number');
    return `Cube of ${num} is ${num * num * num}.`;
};

export const solveAbsolute = (inputs: { [key: string]: string }): string => {
    const num = parseNumber(inputs.num, 'Number');
    return `Absolute value of ${num} is ${Math.abs(num)}.`;
};

export const solveCircleArea = (inputs: { [key: string]: string }): string => {
    const radius = parseNumber(inputs.radius, 'Radius');
    if (radius < 0) throw new Error("Radius must be non-negative.");
    return `Area: ${(Math.PI * radius * radius).toFixed(2)}`;
};

export const solveRectanglePerimeter = (inputs: { [key: string]: string }): string => {
    const length = parseNumber(inputs.length, 'Length');
    const width = parseNumber(inputs.width, 'Width');
    if (length < 0 || width < 0) throw new Error("Dimensions must be non-negative.");
    return `Perimeter: ${2 * (length + width)}`;
};

export const solveRectangleArea = (inputs: { [key: string]: string }): string => {
    const length = parseNumber(inputs.length, 'Length');
    const width = parseNumber(inputs.width, 'Width');
    if (length < 0 || width < 0) throw new Error("Dimensions must be non-negative.");
    return `Area: ${length * width}`;
};

export const solveSimpleInterest = (inputs: { [key: string]: string }): string => {
    const p = parseNumber(inputs.principal, 'Principal');
    const r = parseNumber(inputs.rate, 'Rate');
    const t = parseNumber(inputs.time, 'Time');
    if (p < 0 || r < 0 || t < 0) throw new Error("Inputs must be non-negative.");
    return `Simple Interest: ${((p * r * t) / 100).toFixed(2)}`;
};

export const solveCompoundInterest = (inputs: { [key: string]: string }): string => {
    const p = parseNumber(inputs.principal, 'Principal');
    const r = parseNumber(inputs.rate, 'Rate');
    const t = parseNumber(inputs.time, 'Time');
    if (p < 0 || r < 0 || t < 0) throw new Error("Inputs must be non-negative.");
    const amount = p * Math.pow(1 + r / 100, t);
    return `Amount after ${t} years: ${(amount).toFixed(2)}`;
};

export const solveBMICalculator = (inputs: { [key: string]: string }): string => {
    const weight = parseNumber(inputs.weight, 'Weight');
    const height = parseNumber(inputs.height, 'Height');
    if (weight <= 0 || height <= 0) throw new Error("Weight and height must be positive.");
    const bmi = weight / (height * height);
    return `BMI: ${bmi.toFixed(2)}`;
};

export const solveArrayAverage = (inputs: { [key: string]: string }): string => {
    const arr = parseNumberArray(inputs.array);
    if (arr.length === 0) return 'Average: N/A (empty array)';
    const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
    return `Average: ${avg.toFixed(2)}`;
};

export const solveTriangleArea = (inputs: { [key: string]: string }): string => {
    const b = parseNumber(inputs.base, 'Base');
    const h = parseNumber(inputs.height, 'Height');
    if (b < 0 || h < 0) throw new Error("Base and height must be non-negative.");
    return `Area: ${(b * h / 2).toFixed(2)}`;
};

const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
export const solveGCD = (inputs: { [key: string]: string }): string => {
    const a = parseInteger(inputs.num1, 'Number 1');
    const b = parseInteger(inputs.num2, 'Number 2');
    return `GCD is ${gcd(a, b)}.`;
};

const lcm = (a: number, b: number): number => (a*b) / gcd(a,b);
export const solveLCM = (inputs: { [key: string]: string }): string => {
    const a = parseInteger(inputs.num1, 'Number 1');
    const b = parseInteger(inputs.num2, 'Number 2');
    return `LCM is ${lcm(a,b)}.`;
};

export const solvePower = (inputs: { [key: string]: string }): string => {
    const b = parseNumber(inputs.base, 'Base');
    const e = parseNumber(inputs.exponent, 'Exponent');
    return `Result: ${Math.pow(b, e)}`;
};

export const solveSquareRoot = (inputs: { [key: string]: string }): string => {
    const num = parseNumber(inputs.num, 'Number');
    if (num < 0) throw new Error("Cannot calculate square root of a negative number.");
    return `Square root: ${Math.sqrt(num).toFixed(4)}`;
};

export const solveSphereVolume = (inputs: { [key: string]: string }): string => {
    const r = parseNumber(inputs.radius, 'Radius');
    if (r < 0) throw new Error("Radius must be non-negative.");
    return `Volume: ${(4/3 * Math.PI * Math.pow(r, 3)).toFixed(2)}`;
};

export const solveSimpleCalculator = (inputs: { [key: string]: string }): string => {
    const num1 = parseNumber(inputs.num1, 'Number 1');
    const num2 = parseNumber(inputs.num2, 'Number 2');
    const op = inputs.op;
    switch(op) {
        case '+': return `Result: ${num1 + num2}`;
        case '-': return `Result: ${num1 - num2}`;
        case '*': return `Result: ${num1 * num2}`;
        case '/': 
            if (num2 === 0) throw new Error("Cannot divide by zero.");
            return `Result: ${num1 / num2}`;
        default: throw new Error("Invalid operator. Use +, -, *, /");
    }
};