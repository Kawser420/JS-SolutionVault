import { Problem, Category, InputType } from "../../../types";
import {
  solveLongestName,
  solveStringReversal,
  solveVowelCounter,
  solveStringLength,
  solveWordCount,
  solveCharCount,
  solveCapitalizeWords,
  solveStringReplace,
  solveStringTrim,
  solveStartsWith,
  solveEndsWith,
  solveStringRepeat,
  solveVowelRemover,
  solveCaseSwap,
  solveStringCompress,
} from "./solvers";

export const STRING_PROBLEMS: Problem[] = [
  {
    title: "Longest Name Finder",
    category: Category.String,
    solverName: "solveLongestName",
    inputs: [
      {
        id: "names",
        label: "Enter names (comma-separated):",
        type: InputType.Text,
        placeholder: "John, Jane, Alexander",
      },
    ],
    buttonText: "Find Longest Name",
    solver: solveLongestName,
  },
  {
    title: "String Reversal",
    category: Category.String,
    solverName: "solveStringReversal",
    inputs: [
      {
        id: "str",
        label: "Enter a string:",
        type: InputType.Text,
        placeholder: "hello world",
      },
    ],
    buttonText: "Reverse String",
    solver: solveStringReversal,
  },
  {
    title: "Vowel Counter",
    category: Category.String,
    solverName: "solveVowelCounter",
    inputs: [
      {
        id: "str",
        label: "Enter a string:",
        type: InputType.Text,
        placeholder: "programming",
      },
    ],
    buttonText: "Count Vowels",
    solver: solveVowelCounter,
  },
  {
    title: "String Length Counter",
    category: Category.String,
    solverName: "solveStringLength",
    inputs: [
      {
        id: "str",
        label: "Enter a string:",
        type: InputType.Text,
        placeholder: "e.g., JavaScript",
      },
    ],
    buttonText: "Count Length",
    solver: solveStringLength,
  },
  {
    title: "Word Counter",
    category: Category.String,
    solverName: "solveWordCount",
    inputs: [
      {
        id: "sentence",
        label: "Enter a sentence:",
        type: InputType.Text,
        placeholder: "This is a sample sentence.",
      },
    ],
    buttonText: "Count Words",
    solver: solveWordCount,
  },
  {
    title: "Character Counter",
    category: Category.String,
    solverName: "solveCharCount",
    inputs: [
      {
        id: "str",
        label: "Enter a string:",
        type: InputType.Text,
        placeholder: "Hello",
      },
    ],
    buttonText: "Count Characters",
    solver: solveCharCount,
  },
  {
    title: "Capitalize Words",
    category: Category.String,
    solverName: "solveCapitalizeWords",
    inputs: [
      {
        id: "sentence",
        label: "Enter a sentence:",
        type: InputType.Text,
        placeholder: "the quick brown fox",
      },
    ],
    buttonText: "Capitalize",
    solver: solveCapitalizeWords,
  },
  {
    title: "String Replace",
    category: Category.String,
    solverName: "solveStringReplace",
    inputs: [
      {
        id: "str",
        label: "Enter original string:",
        type: InputType.Text,
        placeholder: "Hello world",
      },
      {
        id: "search",
        label: "Word to replace:",
        type: InputType.Text,
        placeholder: "world",
      },
      {
        id: "replace",
        label: "Replacement word:",
        type: InputType.Text,
        placeholder: "JavaScript",
      },
    ],
    buttonText: "Replace",
    solver: solveStringReplace,
  },
  {
    title: "String Trim",
    category: Category.String,
    solverName: "solveStringTrim",
    inputs: [
      {
        id: "str",
        label: "Enter a string with spaces:",
        type: InputType.Text,
        placeholder: "   Hello World   ",
      },
    ],
    buttonText: "Trim String",
    solver: solveStringTrim,
  },
  {
    title: "String Starts With",
    category: Category.String,
    solverName: "solveStartsWith",
    inputs: [
      {
        id: "str",
        label: "Enter a string:",
        type: InputType.Text,
        placeholder: "JavaScript",
      },
      {
        id: "prefix",
        label: "Enter prefix to check:",
        type: InputType.Text,
        placeholder: "Java",
      },
    ],
    buttonText: "Check Starts With",
    solver: solveStartsWith,
  },
  {
    title: "String Ends With",
    category: Category.String,
    solverName: "solveEndsWith",
    inputs: [
      {
        id: "str",
        label: "Enter a string:",
        type: InputType.Text,
        placeholder: "JavaScript",
      },
      {
        id: "suffix",
        label: "Enter suffix to check:",
        type: InputType.Text,
        placeholder: "Script",
      },
    ],
    buttonText: "Check Ends With",
    solver: solveEndsWith,
  },
  {
    title: "String Repeat",
    category: Category.String,
    solverName: "solveStringRepeat",
    inputs: [
      {
        id: "str",
        label: "Enter a string:",
        type: InputType.Text,
        placeholder: "Ha",
      },
      {
        id: "count",
        label: "Enter repeat count:",
        type: InputType.Number,
        placeholder: "3",
        min: 0,
      },
    ],
    buttonText: "Repeat String",
    solver: solveStringRepeat,
  },
  {
    title: "String Vowel Remover",
    category: Category.String,
    solverName: "solveVowelRemover",
    inputs: [
      {
        id: "str",
        label: "Enter a string:",
        type: InputType.Text,
        placeholder: "Hello World",
      },
    ],
    buttonText: "Remove Vowels",
    solver: solveVowelRemover,
  },
  {
    title: "String Case Swap",
    category: Category.String,
    solverName: "solveCaseSwap",
    inputs: [
      {
        id: "str",
        label: "Enter a string:",
        type: InputType.Text,
        placeholder: "hELLo wORLd",
      },
    ],
    buttonText: "Swap Case",
    solver: solveCaseSwap,
  },
  {
    title: "String Compression",
    category: Category.String,
    solverName: "solveStringCompress",
    inputs: [
      {
        id: "str",
        label: "Enter a string:",
        type: InputType.Text,
        placeholder: "aaabbcccc",
      },
    ],
    buttonText: "Compress",
    solver: solveStringCompress,
  },
];
