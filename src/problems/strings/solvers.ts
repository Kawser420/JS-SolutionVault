import { parseStringArray } from "../utils";

export const solveLongestName = (inputs: { [key: string]: string }): string => {
  const names = parseStringArray(inputs.names);
  if (names.length === 0) throw new Error("Please provide at least one name.");
  const longestName = names.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
  return `Longest name is: "${longestName}"`;
};

export const solveStringReversal = (inputs: {
  [key: string]: string;
}): string => {
  const str = inputs.str;
  if (!str) throw new Error("String cannot be empty.");
  return `Reversed: "${str.split("").reverse().join("")}"`;
};

export const solveVowelCounter = (inputs: {
  [key: string]: string;
}): string => {
  const str = inputs.str;
  if (!str) throw new Error("String cannot be empty.");
  const count = (str.match(/[aeiou]/gi) || []).length;
  return `There are ${count} vowels in "${str}".`;
};

export const solveStringLength = (inputs: {
  [key: string]: string;
}): string => {
  return `Length: ${inputs.str.length}`;
};

export const solveWordCount = (inputs: { [key: string]: string }): string => {
  const words = inputs.sentence.trim().split(/\s+/).filter(Boolean);
  return `Word count: ${words.length}`;
};

export const solveCharCount = (inputs: { [key: string]: string }): string =>
  `Character count: ${inputs.str.length}`;

export const solveCapitalizeWords = (inputs: {
  [key: string]: string;
}): string => {
  const capitalized = inputs.sentence
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
  return `Capitalized: ${capitalized}`;
};

export const solveStringReplace = (inputs: {
  [key: string]: string;
}): string => {
  const replaced = inputs.str.split(inputs.search).join(inputs.replace);
  return `Replaced: ${replaced}`;
};

export const solveStringTrim = (inputs: { [key: string]: string }): string =>
  `Trimmed: "${inputs.str.trim()}"`;

export const solveStartsWith = (inputs: { [key: string]: string }): string =>
  `Starts with "${inputs.prefix}": ${inputs.str.startsWith(inputs.prefix)}`;

export const solveEndsWith = (inputs: { [key: string]: string }): string =>
  `Ends with "${inputs.suffix}": ${inputs.str.endsWith(inputs.suffix)}`;

export const solveStringRepeat = (inputs: {
  [key: string]: string;
}): string => {
  const count = parseInt(inputs.count);
  if (isNaN(count) || count < 0)
    throw new Error("Count must be a non-negative number.");
  return `Repeated: ${inputs.str.repeat(count)}`;
};

export const solveVowelRemover = (inputs: { [key: string]: string }): string =>
  `Result: ${inputs.str.replace(/[aeiou]/gi, "")}`;

export const solveCaseSwap = (inputs: { [key: string]: string }): string => {
  const swapped = inputs.str
    .split("")
    .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
    .join("");
  return `Swapped: ${swapped}`;
};

export const solveStringCompress = (inputs: {
  [key: string]: string;
}): string => {
  const str = inputs.str;
  if (str.length === 0) return 'Compressed: ""';
  let compressed = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + (count > 1 ? count : "");
      count = 1;
    }
  }
  return `Compressed: ${compressed.length < str.length ? compressed : str}`;
};
