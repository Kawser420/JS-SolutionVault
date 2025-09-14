import { Problem, Category, InputType } from '../../types';
import * as Solvers from './solvers';

export const CALCULATOR_PROBLEMS: Problem[] = [
  {
    title: 'Budget Calculator',
    category: Category.Calculator,
    solverName: 'solveBudget',
    inputs: [
      { id: 'watches', label: 'Watches (₦50 each):', type: InputType.Number, placeholder: 'Quantity', min: 0, defaultValue: 0 },
      { id: 'phones', label: 'Phones (₦100 each):', type: InputType.Number, placeholder: 'Quantity', min: 0, defaultValue: 0 },
      { id: 'laptops', label: 'Laptops (₦500 each):', type: InputType.Number, placeholder: 'Quantity', min: 0, defaultValue: 0 },
    ],
    buttonText: 'Calculate Total',
    solver: Solvers.solveBudget,
  },
  {
    title: 'Hotel Cost Calculator',
    category: Category.Calculator,
    solverName: 'solveHotelCost',
    inputs: [
      { id: 'days', label: 'Number of Days:', type: InputType.Number, placeholder: 'e.g., 15', min: 1 },
    ],
    buttonText: 'Calculate Cost',
    solver: Solvers.solveHotelCost,
  },
  {
    title: 'Factorial Calculator',
    category: Category.Calculator,
    solverName: 'solveFactorial',
    inputs: [
      { id: 'num', label: 'Enter a number:', type: InputType.Number, placeholder: 'e.g., 5', min: 0 },
    ],
    buttonText: 'Calculate Factorial',
    solver: Solvers.solveFactorial,
  },
  {
    title: 'Square Calculator',
    category: Category.Calculator,
    solverName: 'solveSquare',
    inputs: [
        { id: 'num', label: 'Enter a number:', type: InputType.Number, placeholder: 'e.g., 8' }
    ],
    buttonText: 'Calculate Square',
    solver: Solvers.solveSquare
  },
  {
    title: 'Cube Calculator',
    category: Category.Calculator,
    solverName: 'solveCube',
    inputs: [
        { id: 'num', label: 'Enter a number:', type: InputType.Number, placeholder: 'e.g., 3' }
    ],
    buttonText: 'Calculate Cube',
    solver: Solvers.solveCube
  },
  {
    title: 'Absolute Value Calculator',
    category: Category.Calculator,
    solverName: 'solveAbsolute',
    inputs: [
        { id: 'num', label: 'Enter a number:', type: InputType.Number, placeholder: 'e.g., -10' }
    ],
    buttonText: 'Get Absolute Value',
    solver: Solvers.solveAbsolute
  },
  {
    title: 'Area of Circle Calculator',
    category: Category.Calculator,
    solverName: 'solveCircleArea',
    inputs: [
        { id: 'radius', label: 'Enter radius:', type: InputType.Number, placeholder: 'e.g., 5', min: 0 }
    ],
    buttonText: 'Calculate Area',
    solver: Solvers.solveCircleArea
  },
  {
    title: 'Rectangle Perimeter Calculator',
    category: Category.Calculator,
    solverName: 'solveRectanglePerimeter',
    inputs: [
        { id: 'length', label: 'Enter length:', type: InputType.Number, placeholder: 'e.g., 10', min: 0 },
        { id: 'width', label: 'Enter width:', type: InputType.Number, placeholder: 'e.g., 5', min: 0 }
    ],
    buttonText: 'Calculate Perimeter',
    solver: Solvers.solveRectanglePerimeter
  },
  {
    title: 'Rectangle Area Calculator',
    category: Category.Calculator,
    solverName: 'solveRectangleArea',
    inputs: [
        { id: 'length', label: 'Enter length:', type: InputType.Number, placeholder: 'e.g., 10', min: 0 },
        { id: 'width', label: 'Enter width:', type: InputType.Number, placeholder: 'e.g., 5', min: 0 }
    ],
    buttonText: 'Calculate Area',
    solver: Solvers.solveRectangleArea
  },
  {
    title: 'Simple Interest Calculator',
    category: Category.Calculator,
    solverName: 'solveSimpleInterest',
    inputs: [
        { id: 'principal', label: 'Principal amount:', type: InputType.Number, placeholder: '1000', min: 0 },
        { id: 'rate', label: 'Annual rate (%):', type: InputType.Number, placeholder: '5', min: 0 },
        { id: 'time', label: 'Time (years):', type: InputType.Number, placeholder: '2', min: 0 }
    ],
    buttonText: 'Calculate Interest',
    solver: Solvers.solveSimpleInterest
  },
  {
    title: 'Compound Interest Calculator',
    category: Category.Calculator,
    solverName: 'solveCompoundInterest',
    inputs: [
        { id: 'principal', label: 'Principal amount:', type: InputType.Number, placeholder: '1000', min: 0 },
        { id: 'rate', label: 'Annual rate (%):', type: InputType.Number, placeholder: '5', min: 0 },
        { id: 'time', label: 'Time (years):', type: InputType.Number, placeholder: '2', min: 0 }
    ],
    buttonText: 'Calculate Amount',
    solver: Solvers.solveCompoundInterest
  },
  {
    title: 'BMI Calculator',
    category: Category.Calculator,
    solverName: 'solveBMICalculator',
    inputs: [
        { id: 'weight', label: 'Weight (kg):', type: InputType.Number, placeholder: 'e.g., 70', min: 0 },
        { id: 'height', label: 'Height (m):', type: InputType.Number, placeholder: 'e.g., 1.75', min: 0 }
    ],
    buttonText: 'Calculate BMI',
    solver: Solvers.solveBMICalculator
  },
  {
    title: 'Array Average Calculator',
    category: Category.Calculator,
    solverName: 'solveArrayAverage',
    inputs: [
        { id: 'array', label: 'Enter numbers (comma-separated):', type: InputType.Text, placeholder: '10, 20, 30, 40' }
    ],
    buttonText: 'Calculate Average',
    solver: Solvers.solveArrayAverage
  },
  {
    title: 'Area of Triangle Calculator',
    category: Category.Calculator,
    solverName: 'solveTriangleArea',
    inputs: [
        { id: 'base', label: 'Enter base:', type: InputType.Number, placeholder: '10', min: 0 },
        { id: 'height', label: 'Enter height:', type: InputType.Number, placeholder: '5', min: 0 }
    ],
    buttonText: 'Calculate Area',
    solver: Solvers.solveTriangleArea
  },
  {
    title: 'GCD Calculator',
    category: Category.Calculator,
    solverName: 'solveGCD',
    inputs: [
        { id: 'num1', label: 'Enter first number:', type: InputType.Number, placeholder: '48' },
        { id: 'num2', label: 'Enter second number:', type: InputType.Number, placeholder: '18' }
    ],
    buttonText: 'Calculate GCD',
    solver: Solvers.solveGCD
  },
  {
    title: 'LCM Calculator',
    category: Category.Calculator,
    solverName: 'solveLCM',
    inputs: [
        { id: 'num1', label: 'Enter first number:', type: InputType.Number, placeholder: '15' },
        { id: 'num2', label: 'Enter second number:', type: InputType.Number, placeholder: '20' }
    ],
    buttonText: 'Calculate LCM',
    solver: Solvers.solveLCM
  },
  {
    title: 'Power Calculator',
    category: Category.Calculator,
    solverName: 'solvePower',
    inputs: [
        { id: 'base', label: 'Enter base:', type: InputType.Number, placeholder: '2' },
        { id: 'exponent', label: 'Enter exponent:', type: InputType.Number, placeholder: '10' }
    ],
    buttonText: 'Calculate Power',
    solver: Solvers.solvePower
  },
  {
    title: 'Square Root Calculator',
    category: Category.Calculator,
    solverName: 'solveSquareRoot',
    inputs: [
        { id: 'num', label: 'Enter number:', type: InputType.Number, placeholder: '144', min: 0 }
    ],
    buttonText: 'Calculate Square Root',
    solver: Solvers.solveSquareRoot
  },
  {
    title: 'Volume of Sphere Calculator',
    category: Category.Calculator,
    solverName: 'solveSphereVolume',
    inputs: [
        { id: 'radius', label: 'Enter radius:', type: InputType.Number, placeholder: '5', min: 0 }
    ],
    buttonText: 'Calculate Volume',
    solver: Solvers.solveSphereVolume
  },
  {
    title: 'Simple Calculator',
    category: Category.Calculator,
    solverName: 'solveSimpleCalculator',
    inputs: [
        { id: 'num1', label: 'Enter first number:', type: InputType.Number, placeholder: '10' },
        { id: 'op', label: 'Enter operator (+, -, *, /):', type: InputType.Text, placeholder: '+' },
        { id: 'num2', label: 'Enter second number:', type: InputType.Number, placeholder: '5' }
    ],
    buttonText: 'Calculate',
    solver: Solvers.solveSimpleCalculator
  }
];