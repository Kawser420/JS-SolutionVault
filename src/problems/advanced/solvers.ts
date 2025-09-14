import { parseInteger, parseNumber, parseJSON } from "../utils";

export const solveFibonacci = (inputs: { [key: string]: string }): string => {
  const n = parseInteger(inputs.terms, "Terms");
  if (n <= 0) throw new Error("Number of terms must be positive.");
  if (n > 50)
    throw new Error("Generating more than 50 terms is not recommended.");
  if (n === 1) return `Sequence: [0]`;
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return `Sequence: [${seq.join(", ")}]`;
};

const factorial = (num: number): number => {
  if (num < 0)
    throw new Error("Factorial is not defined for negative numbers.");
  if (num > 20)
    throw new Error("Number is too large for standard factorial calculation.");
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

export const solveMemoizeFactorial = (inputs: {
  [key: string]: string;
}): string => {
  const num = parseInteger(inputs.num, "Number");
  return `Factorial of ${num} is ${factorial(
    num
  )}. (Memoization is conceptual here).`;
};

export const solveDeepClone = (inputs: { [key: string]: string }): string => {
  const obj = parseJSON(inputs.obj, "Object");
  const cloned = JSON.parse(JSON.stringify(obj));
  return `Cloned: ${JSON.stringify(cloned, null, 2)}`;
};

export const solvePromiseAll = (inputs: { [key: string]: string }): string => {
  return `Simulating Promise.all with delays: [${inputs.delays}]. The UI would handle the async operation.`;
};

export const solveCurryAddition = (inputs: {
  [key: string]: string;
}): string => {
  const n1 = parseNumber(inputs.num1, "Number 1");
  const n2 = parseNumber(inputs.num2, "Number 2");
  const n3 = parseNumber(inputs.num3, "Number 3");
  return `Curried sum: ${n1 + n2 + n3}`;
};

export const solveEventEmitter = (inputs: { [key: string]: string }): string =>
  `Emitting event: "${inputs.event}". The UI would show the result from the listener.`;
export const solveLRUCache = (inputs: { [key: string]: string }): string =>
  `Simulating LRU Cache. UI would manage the state.`;
export const solveRateLimiter = (inputs: { [key: string]: string }): string =>
  `Simulating Rate Limiter. UI would manage the state.`;

export const solveDeepEqual = (inputs: { [key: string]: string }): string => {
  const obj1 = parseJSON(inputs.obj1, "Object 1");
  const obj2 = parseJSON(inputs.obj2, "Object 2");
  const deepEqual = (a: any, b: any): boolean => {
    if (a === b) return true;
    if (
      typeof a !== "object" ||
      typeof b !== "object" ||
      a === null ||
      b === null
    )
      return false;
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (const key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
  };
  return `Objects are deep equal: ${deepEqual(obj1, obj2)}`;
};

export const solveArrayPermutations = (inputs: {
  [key: string]: string;
}): string =>
  "Permutations can be large and are best handled conceptually in this UI.";
export const solveStringPermutations = (inputs: {
  [key: string]: string;
}): string =>
  "String permutations can be numerous and are best handled conceptually here.";
export const solveArrayCombinations = (inputs: {
  [key: string]: string;
}): string =>
  "Combinations can be numerous and are best handled conceptually here.";

export const solveCustomMap = (inputs: { [key: string]: string }): string =>
  `(Doubled) Mapped: [${inputs.array
    .split(",")
    .map((n) => parseFloat(n.trim()) * 2)
    .join(", ")}]`;
export const solveCustomFilter = (inputs: { [key: string]: string }): string =>
  `(Positive) Filtered: [${inputs.array
    .split(",")
    .map((n) => parseFloat(n.trim()))
    .filter((n) => n > 0)
    .join(", ")}]`;
export const solveCustomReduce = (inputs: { [key: string]: string }): string =>
  `(Sum) Reduced: ${inputs.array
    .split(",")
    .map((n) => parseFloat(n.trim()))
    .reduce((a, b) => a + b, 0)}`;

export const solveJSONValidator = (inputs: {
  [key: string]: string;
}): string => {
  try {
    JSON.parse(inputs.json);
    return "JSON is valid.";
  } catch {
    return "JSON is invalid.";
  }
};

export const solveCaesarCipher = (inputs: {
  [key: string]: string;
}): string => {
  const text = inputs.text;
  const shift = parseInteger(inputs.shift, "Shift");
  if (!text) throw new Error("Text to encrypt cannot be empty.");

  const encrypted = text
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const base = code >= 97 ? 97 : 65; // 'a' or 'A'
        return String.fromCharCode(
          ((code - base + (shift % 26) + 26) % 26) + base
        ); // handles negative shifts
      }
      return char;
    })
    .join("");
  return `Encrypted text: "${encrypted}"`;
};
