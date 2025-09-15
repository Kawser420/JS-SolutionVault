export const ARRAY_EXPLANATIONS: Record<string, string> = {
  solveArraySum: `This function calculates the sum of a list of numbers using the **Array.prototype.reduce()** method.

1.  **Parsing**: The input string is first parsed into an array of numbers.
2.  **Reducer Function**: The \`reduce\` method iterates over each number in the array. It uses a callback function that takes an \`accumulator\` (the total sum so far) and the \`current number\`.
3.  **Accumulation**: In each step, it adds the \`current number\` to the \`accumulator\`.
4.  **Initial Value**: The \`reduce\` method is initialized with a starting \`accumulator\` value of \`0\`. This ensures it works correctly even for an array with a single number.
5.  **Final Result**: After iterating through all numbers, \`reduce\` returns the final accumulated sum.`,

  solveMaxNumber: `This function finds the largest number in an array using the **Math.max()** method combined with the **spread syntax (...)**.

1.  **Parsing**: The input string is converted into an array of numbers.
2.  **Spread Syntax**: The spread syntax \`...numbers\` expands the array elements into individual arguments.
3.  **Math.max()**: The \`Math.max()\` function takes any number of arguments and returns the largest one. For example, \`Math.max(10, 5, 25)\` returns \`25\`.
4.  **Combination**: By spreading the array into \`Math.max()\`, we efficiently find the maximum value without needing to write a manual loop.`,

  solveMinNumber: `This function finds the smallest number in an array using the **Math.min()** method combined with the **spread syntax (...)**.

1.  **Parsing**: The input string is converted into an array of numbers.
2.  **Spread Syntax**: The spread syntax \`...numbers\` expands the array elements into individual arguments.
3.  **Math.min()**: The \`Math.min()\` function takes any number of arguments and returns the smallest one. For example, \`Math.min(10, 5, 25)\` returns \`5\`.
4.  **Combination**: This is the most concise way to find the minimum value in a numeric array in JavaScript.`,

  solveArrayReverse: `This function reverses the order of elements in an array using the built-in **Array.prototype.reverse()** method.

1.  **Parsing**: The input string is parsed into an array of strings.
2.  **In-Place Reverse**: The \`reverse()\` method reverses the array **in-place**, meaning it modifies the original array directly.
3.  **Return Value**: It also returns a reference to the reversed array, which is then joined back into a string for display.`,

  solveArraySort: `This function sorts an array of numbers in ascending order using the **Array.prototype.sort()** method with a custom compare function.

1.  **Parsing**: The input string is parsed into an array of numbers.
2.  **Default Sort**: By default, \`sort()\` sorts elements as strings. For example, \`[1, 10, 2]\` would be sorted as \`[1, 10, 2]\`. This is incorrect for numbers.
3.  **Compare Function**: To sort numbers correctly, you must provide a compare function. The function \`(a, b) => a - b\` tells the sort method to arrange numbers in ascending order.
    *   If \`a - b\` is negative, \`a\` comes before \`b\`.
    *   If \`a - b\` is positive, \`b\` comes before \`a\`.
    *   If \`a - b\` is zero, the order is unchanged.`,

  solveRemoveDuplicates: `This function removes duplicate values from an array by leveraging the **Set** object.

1.  **Parsing**: The input string is parsed into an array of strings.
2.  **Set Object**: A \`Set\` is a collection of unique values. When an array is used to create a new \`Set\`, all duplicate elements are automatically discarded.
3.  **Conversion Back to Array**: The spread syntax \`[...new Set(array)]\` is used to convert the \`Set\` object back into an array, which now contains only the unique elements.`,

  solveArrayIntersection: `An **intersection** of two arrays contains only the elements that are present in **both** arrays. This function efficiently finds the intersection using a **Set**.

1.  **Create a Set**: The first array is converted into a \`Set\` for very fast lookups. Checking if an element exists in a Set (\`set.has(item)\`) is much faster than checking in an array (\`array.includes(item)\`).
2.  **Filter the Second Array**: The function then uses \`Array.prototype.filter()\` on the second array.
3.  **Check for Existence**: For each element in the second array, it checks if that element exists in the \`Set\` created from the first array. If it does, the element is kept.
4.  **Result**: The result is a new array containing only the common elements.`,

  solveArrayUnion: `A **union** of two arrays contains all unique elements from **both** arrays. This function finds the union using the spread syntax and a **Set**.

1.  **Combine Arrays**: The spread syntax is used to create a single, combined array: \`[...arr1, ...arr2]\`.
2.  **Remove Duplicates**: This combined array is then used to create a new \`Set\`. The \`Set\` automatically handles the removal of all duplicate values from the combined list.
3.  **Convert to Array**: Finally, the spread syntax is used again to convert the \`Set\` of unique elements back into an array for the final result.`,

  solveFilterEven: `This function filters an array to keep only the even numbers, using the **Array.prototype.filter()** method.

1.  **Parsing**: The input is converted to an array of numbers.
2.  **Filter Logic**: The \`filter\` method iterates through each number. It uses a callback function that returns \`true\` or \`false\`.
3.  **The Modulo Operator**: The condition \`n % 2 === 0\` uses the modulo operator (\`%\`) to check for a remainder. If a number divided by 2 has a remainder of 0, it is an even number, and the callback returns \`true\`, keeping the element in the new array.`,

  solveFilterOdd: `This function filters an array to keep only the odd numbers, using the **Array.prototype.filter()** method.

1.  **Parsing**: The input is converted to an array of numbers.
2.  **Filter Logic**: The \`filter\` method creates a new array with all elements that pass a test.
3.  **The Modulo Operator**: The condition \`n % 2 !== 0\` checks if a number divided by 2 has a non-zero remainder. If it does, the number is odd, and the callback returns \`true\`, so the element is included in the final result.`,

  solveMapSquare: `This function transforms each element in an array by squaring it, using the **Array.prototype.map()** method.

1.  **Parsing**: The input is converted to an array of numbers.
2.  **Transformation**: The \`map\` method creates a **new array** by calling a function on every element of the original array.
3.  **Callback Function**: The provided callback, \`n => n * n\`, takes each number \`n\` and returns its square. This returned value is placed in the new array at the same position.
4.  **Result**: The final result is a new array where every number has been squared. The original array is not changed.`,

  solveSumEven: `This function calculates the sum of only the even numbers in an array by chaining the **filter()** and **reduce()** methods.

1.  **Filter First**: First, \`Array.prototype.filter()\` is called with the condition \`n % 2 === 0\`. This creates a new, temporary array containing only the even numbers.
2.  **Then Reduce**: Next, \`Array.prototype.reduce()\` is called on this new array of even numbers.
3.  **Summation**: The \`reduce\` method sums up the elements of the filtered array, starting with an initial value of \`0\`. This chaining of methods is a powerful and readable pattern in functional programming.`,

  solveSumOdd: `This function calculates the sum of only the odd numbers in an array by chaining the **filter()** and **reduce()** methods.

1.  **Filter First**: \`Array.prototype.filter()\` is used with the condition \`n % 2 !== 0\` to create a new array containing only the odd numbers.
2.  **Then Reduce**: The \`Array.prototype.reduce()\` method is then called on the array of odd numbers to sum them up, starting from an initial value of \`0\`.
3.  **Method Chaining**: This approach is efficient and declarative, clearly stating the intent: first filter the odd numbers, then sum the result.`,

  solveArrayContains: `This function checks if a specific value exists within an array using the modern and highly readable **Array.prototype.includes()** method.

1.  **Parsing**: The inputs are parsed into an array and a target number.
2.  **The \`.includes()\` Method**: This method iterates through the array and returns \`true\` if the \`value\` is found, and \`false\` otherwise. It is the preferred modern approach for checking for the existence of an element.`,

  solveArrayJoin: `This function combines all elements of an array into a single string using the **Array.prototype.join()** method.

1.  **Parsing**: The input string is parsed into an array of strings.
2.  **The \`.join()\` Method**: This method concatenates all of the elements in an array, separated by a specified separator string.
3.  **Separator**: If no separator is provided, the elements are separated with a comma (\`,\`). Here, the user can provide a custom separator to be used between each element.`,

  solveArraySlice: `This function extracts a portion of an array into a new array using the **Array.prototype.slice()** method.

1.  **How it Works**: \`slice(start, end)\` returns a **new array** containing elements from the \`start\` index up to (but not including) the \`end\` index.
2.  **Non-Mutating**: Importantly, \`slice()\` **does not** modify the original array. It creates a shallow copy of the selected elements.
3.  **Optional End**: If the \`end\` index is omitted, \`slice()\` extracts all elements from the \`start\` index to the end of the array.`,

  solveArraySplice: `This function changes the contents of an array by removing or replacing existing elements using the **Array.prototype.splice()** method.

1.  **How it Works**: \`splice(start, deleteCount)\` modifies an array in-place. It starts at the \`start\` index and removes \`deleteCount\` number of elements.
2.  **Mutating Method**: Unlike \`slice()\`, **splice() modifies the original array**.
3.  **Return Value**: The \`splice()\` method returns an array containing the elements that were deleted. This solver shows the state of the original array *after* the splice operation.`,

  solveArrayConcat: `This function merges two or more arrays into a single new array using the **Array.prototype.concat()** method or the more modern **spread syntax (...)**.

1.  **How it Works**: The spread syntax \`[...array1, ...array2]\` is used here. It creates a new array and expands the elements of \`array1\` and \`array2\` inside it.
2.  **Non-Mutating**: This method **does not** change the existing arrays but instead returns a new array. It is the preferred modern way to concatenate arrays.`,

  solveCheckAllPositive: `This function checks if every element in an array meets a specific condition using the **Array.prototype.every()** method.

1.  **The \`.every()\` Method**: This method tests whether all elements in the array pass the test implemented by the provided callback function. It returns a boolean value.
2.  **Callback**: The callback function \`n => n > 0\` is executed for each element.
3.  **Short-Circuiting**: \`every()\` stops executing and returns \`false\` as soon as it finds an element for which the callback returns \`false\`. If it reaches the end of the array, it returns \`true\`.`,

  solveDeepFlatten: `This function converts a nested array (an array containing other arrays) into a single, one-dimensional array.

1.  **The Challenge**: A simple loop won't work for arrays with multiple levels of nesting, like \`[1, [2, [3]]]\`.
2.  **Recursive Approach**: The solver uses a recursive function.
    *   **Base Case**: If an element is not an array, it's added to the result.
    *   **Recursive Step**: If an element *is* an array, the flatten function calls itself with that element as the new input, continuing until all nested arrays are processed.
3.  **Modern Alternative**: For modern browsers, \`array.flat(Infinity)\` achieves the same result concisely.`,

  solveArrayChunk: `This function divides an array into smaller arrays of a specified size. This is a common utility function not native to JavaScript arrays.

1.  **Logic**: The function iterates through the input array, but instead of incrementing by one, it increments by the desired \`chunk size\`.
2.  **Slicing**: In each iteration, it uses \`Array.prototype.slice()\` to grab a "chunk" of the array, from the current index \`i\` to \`i + size\`.
3.  **Result**: Each chunk is pushed into a new array, which is the final result.`,

  solveArrayRotate: `This function rotates the elements of an array to the right or left by a specified number of steps.

1.  **The Modulo Operator**: The number of steps is taken modulo the array's length (\`steps % arr.length\`). This handles cases where the steps are greater than the array length, preventing unnecessary rotations.
2.  **Slicing and Concatenating**: A right rotation by \`k\` steps can be achieved by taking the last \`k\` elements and placing them at the beginning. The code does this by slicing the two parts of the array (\`arr.slice(arr.length - k)\` and \`arr.slice(0, arr.length - k)\`) and concatenating them in the new order.
3.  **Negative Steps**: The logic also handles negative steps for left rotation.`,

  solveArrayShuffle: `This function randomly reorders the elements of an array using the **Fisher-Yates (or Knuth) shuffle algorithm**.

1.  **The Algorithm**: This is the standard, unbiased way to shuffle an array. It iterates backward from the last element.
2.  **Swapping**: In each iteration, it picks a random element from the unshuffled part of the array (from the beginning up to the current index). It then swaps this random element with the element at the current index.
3.  **Result**: This process ensures that every permutation of the array is equally likely.`,

  solveBinarySearch: `**Binary search** is a highly efficient algorithm for finding an item from a **sorted** array. It works by repeatedly dividing the search interval in half.

1.  **Precondition**: The array **must be sorted** first.
2.  **How it Works**:
    *   It compares the target value to the middle element of the array.
    *   If they are not equal, the half in which the target cannot lie is eliminated, and the search continues on the remaining half.
    *   This is repeated until the value is found or the interval is empty.
3.  **Time Complexity**: Binary search has a time complexity of **O(log n)**, making it vastly faster than linear search for large arrays.`,

  solveLinearSearch: `**Linear search** is a straightforward method for finding a target value within an array.

1.  **How it Works**: It sequentially checks each element of the array for the target value until a match is found or until all the elements have been searched.
2.  **JavaScript Method**: The native **Array.prototype.indexOf()** method performs a linear search. It returns the first index at which a given element can be found in the array, or \`-1\` if it is not present.
3.  **Time Complexity**: Linear search has a time complexity of **O(n)**, meaning the time it takes grows linearly with the size of the array.`,

  solveTwoSum: `The **Two Sum** problem is a classic coding interview question. Given an array of numbers and a target sum, the task is to find two numbers in the array that add up to the target.

1.  **Efficient Approach**: The optimal solution uses a **Map** (or a hash table) to achieve a single-pass solution.
2.  **How it Works**:
    *   The function iterates through the array once.
    *   For each number \`num\`, it calculates the required \`complement\` (\`target - num\`).
    *   It checks if the \`complement\` already exists as a key in the Map. If it does, a solution has been found.
    *   If not, it adds the current number and its index to the Map: \`map.set(num, i)\`.
3.  **Time Complexity**: This approach has a time complexity of **O(n)** because it only requires one pass through the array.`,

  solveMaxSubarraySum: `This problem, finding the contiguous subarray with the largest sum, is a classic dynamic programming problem solved efficiently by **Kadane's Algorithm**.

1.  **The Algorithm**: It iterates through the array while keeping track of two variables:
    *   \`maxCurrent\`: The maximum sum of a subarray ending at the current position.
    *   \`maxGlobal\`: The overall maximum sum found so far.
2.  **Logic**: For each element, the algorithm decides whether to extend the current subarray (by adding the element to \`maxCurrent\`) or to start a new subarray (by setting \`maxCurrent\` to the element's value). It does this with \`maxCurrent = Math.max(arr[i], maxCurrent + arr[i])\`.
3.  **Updating Global Max**: After updating \`maxCurrent\`, it compares it with \`maxGlobal\` and updates \`maxGlobal\` if \`maxCurrent\` is larger.
4.  **Time Complexity**: This is a very efficient single-pass algorithm with a time complexity of **O(n)**.`,

  solveReverseLinkedList: `This problem simulates reversing a **Linked List** using an array. A linked list is a data structure where elements are linked using pointers.

1.  **Array Simulation**: In this context, an array is used to represent the list's data.
2.  **The \`.reverse()\` Method**: The simplest way to reverse the order of elements in an array is to use the built-in \`Array.prototype.reverse()\` method.
3.  **In-Place Operation**: This method reverses the array **in-place**, meaning the original array is modified directly. The solver creates a copy before reversing to avoid side effects.`,

  solveMergeTwoSortedLists: `This problem simulates merging two **sorted** linked lists into a single sorted list, using arrays for representation.

1.  **The Goal**: Given two sorted arrays, create a new array that contains all elements from both original arrays, also in sorted order.
2.  **Simple Approach**:
    *   First, concatenate the two arrays into one large array using the spread syntax (\`[...list1, ...list2]\`).
    *   Then, use the \`Array.prototype.sort()\` method with a numeric compare function (\`(a, b) => a - b\`) to sort the merged array correctly.
3.  **Efficiency**: While this approach is simple and readable, a more optimal "merge" algorithm would iterate through both lists simultaneously and build the new list, which has a time complexity of O(n + m).`,

  solveArrayMaxIndex: `This function finds the **index** of the largest value in an array.

1.  **Find the Max Value**: First, it uses \`Math.max(...arr)\` to find the maximum number in the array.
2.  **Find the Index**: Then, it uses the **Array.prototype.indexOf()** method. \`indexOf()\` searches the array for the specified value (\`the maximum value\`) and returns the index of its **first occurrence**.`,

  solveArrayMinIndex: `This function finds the **index** of the smallest value in an array.

1.  **Find the Min Value**: First, it uses \`Math.min(...arr)\` to find the minimum number in the array.
2.  **Find the Index**: Then, it passes this minimum value to the **Array.prototype.indexOf()** method, which searches the array and returns the index of the first time that value is found.`,

  solveSumOfSquares: `This function calculates the sum of the squares of all numbers in an array. It's a great example of using the **Array.prototype.reduce()** method for accumulation.

1.  **The Reducer**: The \`reduce\` method iterates through the array.
2.  **Callback Logic**: The callback function \`(sum, num) => sum + num * num\` is executed for each number.
    *   \`num * num\` calculates the square of the current number.
    *   This square is then added to the accumulator, \`sum\`.
3.  **Initial Value**: The reducer is given an initial value of \`0\`. This is the starting value for the \`sum\`.`,

  solveMeanDeviation: `The **Mean Absolute Deviation (MAD)** of a data set is the average distance between each data point and the mean. It's a measure of variability.

1.  **Calculate the Mean**: First, the function calculates the average (mean) of all numbers in the array.
2.  **Calculate Deviations**: Next, it uses \`reduce\` again to iterate through the array. For each number, it calculates the **absolute difference** between the number and the mean using \`Math.abs(num - mean)\`. It sums up all these absolute differences.
3.  **Final Average**: Finally, it divides the sum of the absolute differences by the total number of elements to get the mean absolute deviation.`,

  solveArrayRotateLeft: `This function rotates the elements of an array to the **left** by a specified number of steps.

1.  **The Logic**: A left rotation by \`k\` steps means the first \`k\` elements move to the end of the array.
2.  **Implementation with \`.slice()\`**: The function uses \`Array.prototype.slice()\` to split the array into two parts:
    *   \`arr.slice(k)\`: The part of the array that will move to the front.
    *   \`arr.slice(0, k)\`: The part of the array (the first \`k\` elements) that will move to the back.
3.  **Concatenation**: The spread syntax \`[...]\` is then used to concatenate these two parts in the new, rotated order.`,

  solveArrayRotateRight: `This function rotates the elements of an array to the **right** by a specified number of steps.

1.  **The Logic**: A right rotation by \`k\` steps means the last \`k\` elements move to the beginning of the array.
2.  **Implementation with \`.slice()\`**: This is the inverse of a left rotation. The function uses \`Array.prototype.slice()\` to split the array:
    *   \`arr.slice(arr.length - k)\`: The last \`k\` elements.
    *   \`arr.slice(0, arr.length - k)\`: The first elements up to the rotation point.
3.  **Concatenation**: The spread syntax \`[...]\` is used to combine these two slices, with the last part coming first, to form the new rotated array.`,

  solveUniqueCount: `This function counts the number of unique elements in an array. It leverages the **Set** object for an elegant and efficient solution.

1.  **Create a Set**: The input array is used to create a new \`Set\`. A \`Set\` is a collection that only stores unique values, so all duplicates from the array are automatically discarded during its creation.
2.  **Get the Size**: The \`Set\` object has a \`.size\` property that returns the number of unique elements it contains. This provides the count directly without needing any manual iteration or counting logic.`,
};
