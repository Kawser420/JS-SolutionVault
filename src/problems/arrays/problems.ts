import { Problem, Category, InputType } from "../../../types";
import * as Solvers from "./solvers";

export const ARRAY_PROBLEMS: Problem[] = [
  {
    title: "Array Sum Calculator",
    category: Category.Array,
    solverName: "solveArraySum",
    inputs: [
      {
        id: "numbers",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4",
      },
    ],
    buttonText: "Calculate Sum",
    solver: Solvers.solveArraySum,
  },
  {
    title: "Maximum Number Finder",
    category: Category.Array,
    solverName: "solveMaxNumber",
    inputs: [
      {
        id: "numbers",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "10, 5, 25, 8",
      },
    ],
    buttonText: "Find Maximum",
    solver: Solvers.solveMaxNumber,
  },
  {
    title: "Minimum Number Finder",
    category: Category.Array,
    solverName: "solveMinNumber",
    inputs: [
      {
        id: "numbers",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "10, 5, 25, 8",
      },
    ],
    buttonText: "Find Minimum",
    solver: Solvers.solveMinNumber,
  },
  {
    title: "Array Reverse",
    category: Category.Array,
    solverName: "solveArrayReverse",
    inputs: [
      {
        id: "array",
        label: "Enter elements (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4",
      },
    ],
    buttonText: "Reverse Array",
    solver: Solvers.solveArrayReverse,
  },
  {
    title: "Array Sort",
    category: Category.Array,
    solverName: "solveArraySort",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "5, 2, 8, 1",
      },
    ],
    buttonText: "Sort Array",
    solver: Solvers.solveArraySort,
  },
  {
    title: "Remove Duplicates from Array",
    category: Category.Array,
    solverName: "solveRemoveDuplicates",
    inputs: [
      {
        id: "array",
        label: "Enter elements (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 2, 3, 4, 4",
      },
    ],
    buttonText: "Remove Duplicates",
    solver: Solvers.solveRemoveDuplicates,
  },
  {
    title: "Array Intersection",
    category: Category.Array,
    solverName: "solveArrayIntersection",
    inputs: [
      {
        id: "array1",
        label: "Enter first array:",
        type: InputType.Text,
        placeholder: "1, 2, 3",
      },
      {
        id: "array2",
        label: "Enter second array:",
        type: InputType.Text,
        placeholder: "2, 3, 4",
      },
    ],
    buttonText: "Find Intersection",
    solver: Solvers.solveArrayIntersection,
  },
  {
    title: "Array Union",
    category: Category.Array,
    solverName: "solveArrayUnion",
    inputs: [
      {
        id: "array1",
        label: "Enter first array:",
        type: InputType.Text,
        placeholder: "1, 2, 3",
      },
      {
        id: "array2",
        label: "Enter second array:",
        type: InputType.Text,
        placeholder: "3, 4, 5",
      },
    ],
    buttonText: "Find Union",
    solver: Solvers.solveArrayUnion,
  },
  {
    title: "Filter Even Numbers",
    category: Category.Array,
    solverName: "solveFilterEven",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4, 5, 6",
      },
    ],
    buttonText: "Filter Even",
    solver: Solvers.solveFilterEven,
  },
  {
    title: "Filter Odd Numbers",
    category: Category.Array,
    solverName: "solveFilterOdd",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4, 5, 6",
      },
    ],
    buttonText: "Filter Odd",
    solver: Solvers.solveFilterOdd,
  },
  {
    title: "Square Array Elements",
    category: Category.Array,
    solverName: "solveMapSquare",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4",
      },
    ],
    buttonText: "Square Elements",
    solver: Solvers.solveMapSquare,
  },
  {
    title: "Sum of Even Numbers",
    category: Category.Array,
    solverName: "solveSumEven",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4, 5, 6",
      },
    ],
    buttonText: "Calculate Sum",
    solver: Solvers.solveSumEven,
  },
  {
    title: "Sum of Odd Numbers",
    category: Category.Array,
    solverName: "solveSumOdd",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4, 5, 6",
      },
    ],
    buttonText: "Calculate Sum",
    solver: Solvers.solveSumOdd,
  },
  {
    title: "Array Contains Number",
    category: Category.Array,
    solverName: "solveArrayContains",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4, 5",
      },
      {
        id: "value",
        label: "Enter number to find:",
        type: InputType.Number,
        placeholder: "3",
      },
    ],
    buttonText: "Check Contains",
    solver: Solvers.solveArrayContains,
  },
  {
    title: "Array Join",
    category: Category.Array,
    solverName: "solveArrayJoin",
    inputs: [
      {
        id: "array",
        label: "Enter elements (comma-separated):",
        type: InputType.Text,
        placeholder: "apple, banana, orange",
      },
      {
        id: "separator",
        label: "Enter separator:",
        type: InputType.Text,
        placeholder: " - ",
      },
    ],
    buttonText: "Join Array",
    solver: Solvers.solveArrayJoin,
  },
  {
    title: "Array Slice",
    category: Category.Array,
    solverName: "solveArraySlice",
    inputs: [
      {
        id: "array",
        label: "Enter elements (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4, 5",
      },
      {
        id: "start",
        label: "Start index:",
        type: InputType.Number,
        placeholder: "1",
      },
      {
        id: "end",
        label: "End index (optional):",
        type: InputType.Number,
        placeholder: "4",
      },
    ],
    buttonText: "Slice Array",
    solver: Solvers.solveArraySlice,
  },
  {
    title: "Array Splice",
    category: Category.Array,
    solverName: "solveArraySplice",
    inputs: [
      {
        id: "array",
        label: "Enter elements (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4, 5",
      },
      {
        id: "start",
        label: "Start index:",
        type: InputType.Number,
        placeholder: "1",
      },
      {
        id: "deleteCount",
        label: "Delete count:",
        type: InputType.Number,
        placeholder: "2",
      },
    ],
    buttonText: "Splice Array",
    solver: Solvers.solveArraySplice,
  },
  {
    title: "Array Concatenation",
    category: Category.Array,
    solverName: "solveArrayConcat",
    inputs: [
      {
        id: "array1",
        label: "Enter first array:",
        type: InputType.Text,
        placeholder: "1, 2",
      },
      {
        id: "array2",
        label: "Enter second array:",
        type: InputType.Text,
        placeholder: "3, 4",
      },
    ],
    buttonText: "Concatenate",
    solver: Solvers.solveArrayConcat,
  },
  {
    title: "Check All Positive",
    category: Category.Array,
    solverName: "solveCheckAllPositive",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 5, 9",
      },
    ],
    buttonText: "Check All Positive",
    solver: Solvers.solveCheckAllPositive,
  },
  {
    title: "Deep Array Flatten",
    category: Category.Array,
    solverName: "solveDeepFlatten",
    inputs: [
      {
        id: "array",
        label: "Enter nested array (JSON format):",
        type: InputType.Text,
        placeholder: "[1, [2, [3, 4], 5]]",
      },
    ],
    buttonText: "Flatten Array",
    solver: Solvers.solveDeepFlatten,
  },
  {
    title: "Array Chunk",
    category: Category.Array,
    solverName: "solveArrayChunk",
    inputs: [
      {
        id: "array",
        label: "Enter elements (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4, 5, 6, 7",
      },
      {
        id: "size",
        label: "Chunk size:",
        type: InputType.Number,
        placeholder: "3",
        min: 1,
      },
    ],
    buttonText: "Chunk Array",
    solver: Solvers.solveArrayChunk,
  },
  {
    title: "Array Rotate",
    category: Category.Array,
    solverName: "solveArrayRotate",
    inputs: [
      {
        id: "array",
        label: "Enter elements (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4, 5",
      },
      {
        id: "steps",
        label: "Rotation steps (positive for right, negative for left):",
        type: InputType.Number,
        placeholder: "2",
      },
    ],
    buttonText: "Rotate Array",
    solver: Solvers.solveArrayRotate,
  },
  {
    title: "Array Shuffle",
    category: Category.Array,
    solverName: "solveArrayShuffle",
    inputs: [
      {
        id: "array",
        label: "Enter elements (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4, 5",
      },
    ],
    buttonText: "Shuffle Array",
    solver: Solvers.solveArrayShuffle,
  },
  {
    title: "Binary Search",
    category: Category.Array,
    solverName: "solveBinarySearch",
    inputs: [
      {
        id: "array",
        label: "Enter sorted array (comma-separated):",
        type: InputType.Text,
        placeholder: "2, 5, 8, 12, 16, 23, 38",
      },
      {
        id: "target",
        label: "Enter value to find:",
        type: InputType.Number,
        placeholder: "16",
      },
    ],
    buttonText: "Search",
    solver: Solvers.solveBinarySearch,
  },
  {
    title: "Linear Search",
    category: Category.Array,
    solverName: "solveLinearSearch",
    inputs: [
      {
        id: "array",
        label: "Enter array (comma-separated):",
        type: InputType.Text,
        placeholder: "10, 20, 80, 30, 60",
      },
      {
        id: "target",
        label: "Enter value to find:",
        type: InputType.Number,
        placeholder: "80",
      },
    ],
    buttonText: "Search",
    solver: Solvers.solveLinearSearch,
  },
  {
    title: "Two Sum",
    category: Category.Array,
    solverName: "solveTwoSum",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "2, 7, 11, 15",
      },
      {
        id: "target",
        label: "Enter target sum:",
        type: InputType.Number,
        placeholder: "9",
      },
    ],
    buttonText: "Find Indices",
    solver: Solvers.solveTwoSum,
  },
  {
    title: "Maximum Subarray Sum",
    category: Category.Array,
    solverName: "solveMaxSubarraySum",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma-separated):",
        type: InputType.Text,
        placeholder: "-2, 1, -3, 4, -1, 2, 1, -5, 4",
      },
    ],
    buttonText: "Find Max Sum",
    solver: Solvers.solveMaxSubarraySum,
  },
  {
    title: "Reverse Linked List (Array Simulation)",
    category: Category.Array,
    solverName: "solveReverseLinkedList",
    inputs: [
      {
        id: "array",
        label: "Enter list elements (comma-separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4, 5",
      },
    ],
    buttonText: "Reverse List",
    solver: Solvers.solveReverseLinkedList,
  },
  {
    title: "Merge Two Sorted Lists (Array Simulation)",
    category: Category.Array,
    solverName: "solveMergeTwoSortedLists",
    inputs: [
      {
        id: "list1",
        label: "Enter first sorted list:",
        type: InputType.Text,
        placeholder: "1, 3, 5",
      },
      {
        id: "list2",
        label: "Enter second sorted list:",
        type: InputType.Text,
        placeholder: "2, 4, 6",
      },
    ],
    buttonText: "Merge Lists",
    solver: Solvers.solveMergeTwoSortedLists,
  },
  {
    title: "Array Max Index Finder",
    category: Category.Array,
    solverName: "solveArrayMaxIndex",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma separated):",
        type: InputType.Text,
        placeholder: "1, 5, 2",
      },
    ],
    buttonText: "Find Max Index",
    solver: Solvers.solveArrayMaxIndex,
  },
  {
    title: "Array Min Index Finder",
    category: Category.Array,
    solverName: "solveArrayMinIndex",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma separated):",
        type: InputType.Text,
        placeholder: "5, 1, 2",
      },
    ],
    buttonText: "Find Min Index",
    solver: Solvers.solveArrayMinIndex,
  },
  {
    title: "Array Sum of Squares",
    category: Category.Array,
    solverName: "solveSumOfSquares",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3",
      },
    ],
    buttonText: "Calculate Sum of Squares",
    solver: Solvers.solveSumOfSquares,
  },
  {
    title: "Array Mean Deviation",
    category: Category.Array,
    solverName: "solveMeanDeviation",
    inputs: [
      {
        id: "array",
        label: "Enter numbers (comma separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4, 5",
      },
    ],
    buttonText: "Calculate Mean Deviation",
    solver: Solvers.solveMeanDeviation,
  },
  {
    title: "Array Rotation Left",
    category: Category.Array,
    solverName: "solveArrayRotateLeft",
    inputs: [
      {
        id: "array",
        label: "Enter array (comma separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4, 5",
      },
      {
        id: "steps",
        label: "Enter steps:",
        type: InputType.Number,
        placeholder: "2",
        min: 0,
      },
    ],
    buttonText: "Rotate Left",
    solver: Solvers.solveArrayRotateLeft,
  },
  {
    title: "Array Rotation Right",
    category: Category.Array,
    solverName: "solveArrayRotateRight",
    inputs: [
      {
        id: "array",
        label: "Enter array (comma separated):",
        type: InputType.Text,
        placeholder: "1, 2, 3, 4, 5",
      },
      {
        id: "steps",
        label: "Enter steps:",
        type: InputType.Number,
        placeholder: "2",
        min: 0,
      },
    ],
    buttonText: "Rotate Right",
    solver: Solvers.solveArrayRotateRight,
  },
  {
    title: "Array Unique Elements Counter",
    category: Category.Array,
    solverName: "solveUniqueCount",
    inputs: [
      {
        id: "array",
        label: "Enter elements (comma separated):",
        type: InputType.Text,
        placeholder: "apple, banana, apple, orange",
      },
    ],
    buttonText: "Count Unique",
    solver: Solvers.solveUniqueCount,
  },
];
