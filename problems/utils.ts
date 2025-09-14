import { ProblemInput } from "../types";

// General purpose error for parsing failures
class ParsingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ParsingError';
  }
}

/**
 * Parses a string input into a number, throwing a clear error if it's not a valid number.
 * @param value The string value from the input field.
 * @param fieldName The user-facing name of the field for clear error messages.
 * @returns The parsed number.
 */
export const parseNumber = (value: string, fieldName: string): number => {
    if (value === null || value.trim() === '') {
        throw new ParsingError(`${fieldName} cannot be empty.`);
    }
    const num = parseFloat(value);
    if (isNaN(num)) {
        throw new ParsingError(`${fieldName} must be a valid number. Received: "${value}"`);
    }
    return num;
};

/**
 * Parses a string input into an integer, throwing a clear error if it's not a valid integer.
 * @param value The string value from the input field.
 * @param fieldName The user-facing name of the field for clear error messages.
 * @returns The parsed integer.
 */
export const parseInteger = (value: string, fieldName: string): number => {
    const num = parseNumber(value, fieldName);
    if (!Number.isInteger(num)) {
        throw new ParsingError(`${fieldName} must be a whole number (integer).`);
    }
    return num;
};

/**
 * Parses a comma-separated string of numbers into an array of numbers.
 * Handles extra spaces and filters out empty entries.
 * @param value The comma-separated string.
 * @returns An array of numbers.
 */
export const parseNumberArray = (value: string): number[] => {
    if (value === null || value.trim() === '') {
        return [];
    }
    const stringArray = value.split(',').map(s => s.trim()).filter(Boolean);
    const numArray = stringArray.map(s => {
        const num = parseFloat(s);
        if (isNaN(num)) {
            throw new ParsingError(`Invalid number found in array: "${s}"`);
        }
        return num;
    });
    return numArray;
};


/**
 * Parses a comma-separated string into an array of strings.
 * Handles extra spaces and filters out empty entries.
 * @param value The comma-separated string.
 * @returns An array of strings.
 */
export const parseStringArray = (value: string): string[] => {
    if (value === null || value.trim() === '') {
        return [];
    }
    return value.split(',').map(s => s.trim()).filter(Boolean);
};


/**
 * Parses a string into a JSON object, with clear error handling.
 * @param value The JSON string.
 * @param fieldName The user-facing name for error messages.
 * @returns The parsed object or array.
 */
export const parseJSON = (value: string, fieldName: string): any => {
    if (value === null || value.trim() === '') {
        throw new ParsingError(`${fieldName} cannot be empty.`);
    }
    try {
        return JSON.parse(value);
    } catch (error) {
        throw new ParsingError(`Invalid JSON format in ${fieldName}.`);
    }
};
