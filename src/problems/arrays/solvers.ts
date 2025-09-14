
import { parseNumber, parseInteger, parseNumberArray, parseStringArray, parseJSON } from '../utils';

export const solveArraySum = (inputs: { [key: string]: string }): string => {
    const numbers = parseNumberArray(inputs.numbers);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return `The sum is: ${sum}`;
};

export const solveMaxNumber = (inputs: { [key:string]: string}): string => {
    const numbers = parseNumberArray(inputs.numbers);
    if(numbers.length === 0) throw new Error('Array cannot be empty.');
    return `Maximum number is: ${Math.max(...numbers)}`;
};

export const solveMinNumber = (inputs: { [key:string]: string}): string => {
    const numbers = parseNumberArray(inputs.numbers);
    if(numbers.length === 0) throw new Error('Array cannot be empty.');
    return `Minimum number is: ${Math.min(...numbers)}`;
};

// Fix: Use parseStringArray to allow reversing arrays of any string elements, not just numbers.
export const solveArrayReverse = (inputs: { [key: string]: string }): string => `Reversed: [${parseStringArray(inputs.array).reverse().join(', ')}]`;

export const solveArraySort = (inputs: { [key: string]: string }): string => `Sorted: [${parseNumberArray(inputs.array).sort((a,b)=>a-b).join(', ')}]`;

export const solveRemoveDuplicates = (inputs: { [key: string]: string }): string => {
    const unique = [...new Set(parseStringArray(inputs.array))];
    return `Unique: [${unique.join(', ')}]`;
};

export const solveArrayIntersection = (inputs: { [key: string]: string }): string => {
    const arr1 = new Set(parseStringArray(inputs.array1));
    const arr2 = parseStringArray(inputs.array2);
    const intersection = arr2.filter(item => arr1.has(item));
    return `Intersection: [${[...new Set(intersection)].join(', ')}]`;
};

export const solveArrayUnion = (inputs: { [key: string]: string }): string => {
    const arr1 = parseStringArray(inputs.array1);
    const arr2 = parseStringArray(inputs.array2);
    const union = [...new Set([...arr1, ...arr2])];
    return `Union: [${union.join(', ')}]`;
};

export const solveFilterEven = (inputs: { [key: string]: string }): string => `Even: [${parseNumberArray(inputs.array).filter(n => n % 2 === 0).join(', ')}]`;

export const solveFilterOdd = (inputs: { [key: string]: string }): string => `Odd: [${parseNumberArray(inputs.array).filter(n => n % 2 !== 0).join(', ')}]`;

export const solveMapSquare = (inputs: { [key: string]: string }): string => `Squared: [${parseNumberArray(inputs.array).map(n => n*n).join(', ')}]`;

export const solveSumEven = (inputs: { [key: string]: string }): string => {
    const sum = parseNumberArray(inputs.array).filter(n => n % 2 === 0).reduce((a,b)=>a+b, 0);
    return `Sum of evens: ${sum}`;
};

export const solveSumOdd = (inputs: { [key: string]: string }): string => {
    const sum = parseNumberArray(inputs.array).filter(n => n % 2 !== 0).reduce((a,b)=>a+b, 0);
    return `Sum of odds: ${sum}`;
};

export const solveArrayContains = (inputs: { [key: string]: string }): string => {
    const arr = parseNumberArray(inputs.array);
    const value = parseNumber(inputs.value, 'Value');
    return `Array contains ${value}: ${arr.includes(value)}`;
};

export const solveArrayJoin = (inputs: { [key: string]: string }): string => {
    const arr = parseStringArray(inputs.array);
    return `Joined: ${arr.join(inputs.separator)}`;
};

export const solveArraySlice = (inputs: { [key: string]: string }): string => {
    const arr = parseStringArray(inputs.array);
    const start = parseInteger(inputs.start, 'Start Index');
    const end = inputs.end ? parseInteger(inputs.end, 'End Index') : undefined;
    return `Sliced: [${arr.slice(start, end).join(', ')}]`;
};

export const solveArraySplice = (inputs: { [key: string]: string }): string => {
    const arr = parseStringArray(inputs.array);
    const start = parseInteger(inputs.start, 'Start Index');
    const deleteCount = parseInteger(inputs.deleteCount, 'Delete Count');
    arr.splice(start, deleteCount);
    return `Spliced: [${arr.join(', ')}]`;
};

export const solveArrayConcat = (inputs: { [key: string]: string }): string => `Concatenated: [${[...parseStringArray(inputs.array1), ...parseStringArray(inputs.array2)].join(', ')}]`;

export const solveCheckAllPositive = (inputs: { [key: string]: string }): string => {
    const allPositive = parseNumberArray(inputs.array).every(n => n > 0);
    return `All numbers positive: ${allPositive}`;
};

export const solveDeepFlatten = (inputs: { [key: string]: string }): string => {
    const arr = parseJSON(inputs.array, 'Array');
    if (!Array.isArray(arr)) throw new Error("Input must be an array.");
    const flatten = (a: any[]): any[] => a.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
    const flattened = flatten(arr);
    return `Flattened array: [${flattened.join(', ')}]`;
};

export const solveArrayChunk = (inputs: { [key: string]: string }): string => {
    const arr = parseStringArray(inputs.array);
    const size = parseInteger(inputs.size, 'Chunk Size');
    if (size <= 0) throw new Error("Chunk size must be positive.");
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return `Chunks: ${JSON.stringify(chunks)}`;
};

export const solveArrayRotate = (inputs: { [key: string]: string }): string => {
    const arr = parseStringArray(inputs.array);
    if(arr.length === 0) return 'Rotated Array: []';
    const steps = parseInteger(inputs.steps, 'Steps');
    const k = steps % arr.length;
    const effK = k < 0 ? k + arr.length : k;
    const rotated = [...arr.slice(arr.length - effK), ...arr.slice(0, arr.length - effK)];
    return `Rotated: [${rotated.join(', ')}]`;
};

export const solveArrayShuffle = (inputs: { [key: string]: string }): string => {
    const arr = parseStringArray(inputs.array);
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return `Shuffled: [${arr.join(', ')}]`;
};

export const solveBinarySearch = (inputs: { [key: string]: string }): string => {
    const arr = parseNumberArray(inputs.array).sort((a,b)=>a-b);
    const target = parseNumber(inputs.target, 'Target value');
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return `Value ${target} found at index ${mid}.`;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return `Value ${target} not found in the array.`;
};

export const solveLinearSearch = (inputs: { [key: string]: string }): string => {
    const arr = parseNumberArray(inputs.array);
    const target = parseNumber(inputs.target, 'Target value');
    const index = arr.indexOf(target);
    return index !== -1 ? `Value ${target} found at index ${index}.` : `Value ${target} not found.`;
};

export const solveTwoSum = (inputs: { [key: string]: string }): string => {
    const arr = parseNumberArray(inputs.array);
    const target = parseNumber(inputs.target, 'Target');
    const map = new Map();
    for(let i=0; i<arr.length; i++) {
        const complement = target - arr[i];
        if (map.has(complement)) {
            return `Indices: [${map.get(complement)}, ${i}]`;
        }
        map.set(arr[i], i);
    }
    return 'No two sum solution found.';
};

export const solveMaxSubarraySum = (inputs: { [key: string]: string }): string => {
    const arr = parseNumberArray(inputs.array);
    if (arr.length === 0) return 'Max subarray sum: N/A';
    let maxCurrent = arr[0], maxGlobal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
        if (maxCurrent > maxGlobal) maxGlobal = maxCurrent;
    }
    return `Maximum subarray sum: ${maxGlobal}`;
};

export const solveReverseLinkedList = (inputs: { [key: string]: string }): string => `Reversed: [${parseStringArray(inputs.array).reverse().join(', ')}]`;

export const solveMergeTwoSortedLists = (inputs: { [key: string]: string }): string => `Merged & Sorted: [${[...parseNumberArray(inputs.list1), ...parseNumberArray(inputs.list2)].sort((a,b)=>a-b).join(', ')}]`;

export const solveArrayMaxIndex = (inputs: { [key: string]: string }): string => {
    const arr = parseNumberArray(inputs.array);
    if(arr.length === 0) return 'Max index: N/A';
    return `Max index: ${arr.indexOf(Math.max(...arr))}`;
};
export const solveArrayMinIndex = (inputs: { [key: string]: string }): string => {
    const arr = parseNumberArray(inputs.array);
    if(arr.length === 0) return 'Min index: N/A';
    return `Min index: ${arr.indexOf(Math.min(...arr))}`;
};

export const solveSumOfSquares = (inputs: { [key: string]: string }): string => `Sum of squares: ${parseNumberArray(inputs.array).reduce((sum, n) => sum + n*n, 0)}`;

export const solveMeanDeviation = (inputs: { [key: string]: string }): string => {
    const arr = parseNumberArray(inputs.array);
    if(arr.length === 0) return 'Mean Deviation: N/A';
    const mean = arr.reduce((a,b)=>a+b,0) / arr.length;
    const deviation = arr.reduce((a,b)=>a + Math.abs(b-mean), 0) / arr.length;
    return `Mean Deviation: ${deviation.toFixed(2)}`;
};

export const solveArrayRotateLeft = (inputs: { [key: string]: string }): string => {
    const arr = parseStringArray(inputs.array);
    if(arr.length === 0) return 'Rotated Array: []';
    const steps = parseInteger(inputs.steps, 'Steps');
    const k = steps % arr.length;
    const rotated = [...arr.slice(k), ...arr.slice(0, k)];
    return `Rotated Left: [${rotated.join(', ')}]`;
};

export const solveArrayRotateRight = (inputs: { [key:string]: string}): string => {
    const arr = parseStringArray(inputs.array);
    if(arr.length === 0) return 'Rotated array: []';
    const steps = parseInteger(inputs.steps, 'Steps');
    const k = steps % arr.length;
    const rotated = [...arr.slice(arr.length - k), ...arr.slice(0, arr.length - k)];
    return `Rotated Right: [${rotated.join(', ')}]`;
}

export const solveUniqueCount = (inputs: { [key: string]: string }): string => `Unique count: ${new Set(parseStringArray(inputs.array)).size}`;
