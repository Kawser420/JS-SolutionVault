import { Problem, Category, InputType } from '../../types';
import {
  solveKilometerToMeter,
  solveCelsiusToFahrenheit,
  solveToUppercase,
  solveToLowercase,
  solveBinaryToDecimal,
  solveDecimalToBinary,
  solveFahrenheitToCelsius,
  solveBaseConverter,
  solveStringToAscii,
  solveAsciiToString,
  solveKelvinToCelsius,
  solveHexToDecimal,
  solveDecimalToHex,
  solveIntToRoman,
  solveRomanToNum
} from './solvers';

export const CONVERTER_PROBLEMS: Problem[] = [
  {
    title: 'Kilometer to Meter Converter',
    category: Category.Converter,
    solverName: 'solveKilometerToMeter',
    inputs: [
      { id: 'km', label: 'Enter Kilometers:', type: InputType.Number, placeholder: 'e.g., 5', min: 0, step: 0.01 },
    ],
    buttonText: 'Convert to Meters',
    solver: solveKilometerToMeter,
  },
  {
    title: 'Celsius to Fahrenheit Converter',
    category: Category.Converter,
    solverName: 'solveCelsiusToFahrenheit',
    inputs: [
      { id: 'celsius', label: 'Enter Celsius:', type: InputType.Number, placeholder: 'e.g., 25', step: 0.01 },
    ],
    buttonText: 'Convert to Fahrenheit',
    solver: solveCelsiusToFahrenheit,
  },
  {
    title: 'Uppercase Converter',
    category: Category.Converter,
    solverName: 'solveToUppercase',
    inputs: [
        { id: 'str', label: 'Enter a string:', type: InputType.Text, placeholder: 'hello world' }
    ],
    buttonText: 'To Uppercase',
    solver: solveToUppercase
  },
  {
    title: 'Lowercase Converter',
    category: Category.Converter,
    solverName: 'solveToLowercase',
    inputs: [
        { id: 'str', label: 'Enter a string:', type: InputType.Text, placeholder: 'HELLO WORLD' }
    ],
    buttonText: 'To Lowercase',
    solver: solveToLowercase
  },
  {
    title: 'Binary to Decimal Converter',
    category: Category.Converter,
    solverName: 'solveBinaryToDecimal',
    inputs: [
        { id: 'binary', label: 'Enter binary number:', type: InputType.Text, placeholder: '1011' }
    ],
    buttonText: 'To Decimal',
    solver: solveBinaryToDecimal
  },
  {
    title: 'Decimal to Binary Converter',
    category: Category.Converter,
    solverName: 'solveDecimalToBinary',
    inputs: [
        { id: 'decimal', label: 'Enter decimal number:', type: InputType.Number, placeholder: '11', min: 0 }
    ],
    buttonText: 'To Binary',
    solver: solveDecimalToBinary
  },
  {
    title: 'Fahrenheit to Celsius Converter',
    category: Category.Converter,
    solverName: 'solveFahrenheitToCelsius',
    inputs: [
        { id: 'fahrenheit', label: 'Enter Fahrenheit:', type: InputType.Number, placeholder: '77' }
    ],
    buttonText: 'To Celsius',
    solver: solveFahrenheitToCelsius
  },
  {
    title: 'Number Base Converter',
    category: Category.Converter,
    solverName: 'solveBaseConverter',
    inputs: [
        { id: 'num', label: 'Enter number:', type: InputType.Text, placeholder: 'FF' },
        { id: 'fromBase', label: 'From base:', type: InputType.Number, placeholder: '16', min: 2, max: 36 },
        { id: 'toBase', label: 'To base:', type: InputType.Number, placeholder: '10', min: 2, max: 36 }
    ],
    buttonText: 'Convert Base',
    solver: solveBaseConverter
  },
  {
    title: 'String to ASCII Converter',
    category: Category.Converter,
    solverName: 'solveStringToAscii',
    inputs: [
        { id: 'str', label: 'Enter a string:', type: InputType.Text, placeholder: 'Hello' }
    ],
    buttonText: 'To ASCII',
    solver: solveStringToAscii
  },
  {
    title: 'ASCII to String Converter',
    category: Category.Converter,
    solverName: 'solveAsciiToString',
    inputs: [
        { id: 'ascii', label: 'Enter ASCII codes (comma-separated):', type: InputType.Text, placeholder: '72, 101, 108, 108, 111' }
    ],
    buttonText: 'To String',
    solver: solveAsciiToString
  },
  {
    title: 'Kelvin to Celsius Converter',
    category: Category.Converter,
    solverName: 'solveKelvinToCelsius',
    inputs: [
        { id: 'kelvin', label: 'Enter Kelvin:', type: InputType.Number, placeholder: '300' }
    ],
    buttonText: 'To Celsius',
    solver: solveKelvinToCelsius
  },
  {
    title: 'Hexadecimal to Decimal Converter',
    category: Category.Converter,
    solverName: 'solveHexToDecimal',
    inputs: [
        { id: 'hex', label: 'Enter hexadecimal:', type: InputType.Text, placeholder: '1A' }
    ],
    buttonText: 'To Decimal',
    solver: solveHexToDecimal
  },
  {
    title: 'Decimal to Hexadecimal Converter',
    category: Category.Converter,
    solverName: 'solveDecimalToHex',
    inputs: [
        { id: 'dec', label: 'Enter decimal:', type: InputType.Number, placeholder: '26', min: 0 }
    ],
    buttonText: 'To Hexadecimal',
    solver: solveDecimalToHex
  },
  {
    title: 'Number to Roman Numeral Converter',
    category: Category.Converter,
    solverName: 'solveIntToRoman',
    inputs: [
        { id: 'num', label: 'Enter number:', type: InputType.Number, placeholder: '1994', min: 1, max: 3999 }
    ],
    buttonText: 'Convert to Roman',
    solver: solveIntToRoman
  },
  {
    title: 'Roman Numeral to Number Converter',
    category: Category.Converter,
    solverName: 'solveRomanToNum',
    inputs: [
        { id: 'roman', label: 'Enter Roman numeral:', type: InputType.Text, placeholder: 'MCMXCIV' }
    ],
    buttonText: 'Convert to Number',
    solver: solveRomanToNum
  }
];
