import { Problem } from '../types';
import { ARRAY_PROBLEMS } from './arrays/problems';
import { CALCULATOR_PROBLEMS } from './calculators/problems';
import { CHECKER_PROBLEMS } from './checkers/problems';
import { CONVERTER_PROBLEMS } from './converters/problems';
import { STRING_PROBLEMS } from './strings/problems';
import { ADVANCED_PROBLEMS } from './advanced/problems';

// Combine all problems from all categories into a single master array.
export const PROBLEMS: Problem[] = [
  ...ARRAY_PROBLEMS,
  ...CALCULATOR_PROBLEMS,
  ...CHECKER_PROBLEMS,
  ...CONVERTER_PROBLEMS,
  ...STRING_PROBLEMS,
  ...ADVANCED_PROBLEMS,
];
