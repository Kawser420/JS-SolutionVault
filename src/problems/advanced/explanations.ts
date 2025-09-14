export const ADVANCED_EXPLANATIONS: Record<string, string> = {
  solveFibonacci: `The **Fibonacci sequence** is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The function generates this sequence up to a specified number of terms.

1.  **Initialization**: It starts with a base array \`seq = [0, 1]\`. This seeds the sequence.
2.  **Iteration**: A \`for\` loop runs from \`i = 2\` up to the desired number of terms, \`n\`.
3.  **Calculation**: Inside the loop, the next Fibonacci number is calculated by adding the previous two numbers (\`seq[i - 1] + seq[i - 2]\`) and pushing it to the \`seq\` array.
4.  **Result**: The final array containing the generated sequence is returned as a formatted string.`,

  solveMemoizeFactorial: `**Memoization** is an optimization technique used to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

1.  **Concept**: When calculating a factorial, like \`5!\`, you compute \`4!\`, \`3!\`, etc. Memoization would store the result of \`4!\` after the first time it's calculated. If you later need to calculate \`4!\` again, the stored result is instantly returned instead of re-computing it.
2.  **Implementation**: A typical implementation involves a **cache** (like an object or a Map). Before computing, the function checks if the result for the given input is already in the cache.
3.  **If Cached**: It returns the cached value.
4.  **If Not Cached**: It computes the result, stores it in the cache, and then returns it.
This problem demonstrates the concept, although the UI solver performs a direct calculation for simplicity.`,

  solveDeepClone: `A **deep clone** or **deep copy** creates a new object or array that is a completely independent copy of the original, including all nested objects and arrays. This is different from a shallow copy, which only copies top-level properties and shares nested structures.

1.  **The Challenge**: Simply using the spread syntax (\`{...obj}\`) or \`Object.assign\` creates a shallow copy. If a property of the original object is another object, the copy will point to the **same** nested object in memory.
2.  **JSON Method**: A common and simple way to achieve a deep clone for data that is JSON-safe (contains no functions, \`undefined\`, Symbols, etc.) is to use \`JSON.stringify()\` followed by \`JSON.parse()\`.
3.  **How it Works**: \`JSON.stringify(obj)\` converts the entire object, including nested structures, into a JSON string. \`JSON.parse()\` then parses this string to create a brand new object with no references to the original. This solver uses this effective technique.`,

  solvePromiseAll: `\`Promise.all\` is a crucial method for handling multiple asynchronous operations concurrently. It takes an array of Promises as input and returns a single Promise.

1.  **Concurrency**: It allows you to fire off multiple requests (e.g., to different APIs) at the same time, rather than waiting for each one to finish before starting the next.
2.  **Resolution**: The Promise returned by \`Promise.all\` resolves only when **all** of the input Promises have resolved. The resolved value is an array containing the resolved values of the input Promises, in the same order.
3.  **Rejection**: If **any** of the input Promises reject, the \`Promise.all\` Promise immediately rejects with the reason of the first Promise that rejected. It's an "all or nothing" approach.
This simulation demonstrates the concept by waiting for multiple timeouts to complete.`,

  solveCurryAddition: `**Currying** is a functional programming technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

1.  **Transformation**: A function like \`add(a, b, c)\` is transformed into \`add(a)(b)(c)\`.
2.  **Partial Application**: The power of currying is that it allows for **partial application**. You can call the first function with an argument, and it returns a new function that "remembers" that first argument. For example, \`const add5 = add(5);\`. Now \`add5\` is a function that takes two arguments (\`b\` and \`c\`) and adds 5 to their sum.
3.  **How it Works**: The solver simulates this by taking three numbers and adding them together, demonstrating the final result of a curried function call like \`curryAdd(num1)(num2)(num3)\`.`,

  solveEventEmitter: `An **Event Emitter** is a design pattern that implements the publish/subscribe model. It allows objects to "listen" for specific events and be notified when those events "emit" or "fire".

1.  **Core Components**:
    *   \`on(eventName, listener)\`: Subscribes a listener function to a specific event.
    *   \`emit(eventName, data)\`: Emits an event, calling all listener functions subscribed to it, optionally passing data to them.
2.  **Decoupling**: This pattern is powerful because it decouples the code that produces an event (the publisher) from the code that responds to it (the subscriber). They don't need to know about each other, only about the event name.
3.  **Use Cases**: It's fundamental to Node.js and is widely used in front-end frameworks for component communication and managing application state. This simulation shows the concept of emitting a named event.`,

  solveLRUCache: `A **Least Recently Used (LRU) Cache** is a type of cache that has a limited size. When the cache is full and a new item needs to be added, it discards the item that has been accessed the "least recently".

1.  **How it Works**: An LRU cache tracks the order in which items are accessed. It can be implemented using a combination of a **Map** for O(1) key lookups and a **Doubly Linked List** to maintain the usage order.
2.  **Operations**:
    *   \`get(key)\`: When an item is accessed, it's moved to the "front" of the usage list (most recently used).
    *   \`put(key, value)\`: When a new item is added, it's placed at the front. If the cache is full, the item at the "end" of the list (least recently used) is removed to make space.
This is a very common interview problem and is used in databases, browsers, and operating systems.`,

  solveRateLimiter: `A **Rate Limiter** is a mechanism used to control the amount of incoming traffic to a service or API. It prevents users from making too many requests in a given period, protecting the service from being overwhelmed and ensuring fair usage.

1.  **Common Algorithms**:
    *   **Token Bucket**: A bucket is filled with tokens at a fixed rate. Each request consumes a token. If the bucket is empty, the request is denied.
    *   **Fixed Window Counter**: A counter tracks requests within a fixed time window (e.g., a minute). If the count exceeds a threshold, requests are denied until the window resets.
2.  **Why it's Important**: Rate limiting is crucial for API stability, security (preventing DDoS attacks), and managing operational costs. This problem simulates the concept of limiting actions within a time frame.`,

  solveDeepEqual: `A **deep equality** check determines if two objects or arrays are structurally and value-wise identical. It recursively compares all nested properties, unlike a shallow equality check (\`===\`) which only checks if they are the same object in memory.

1.  **Base Cases**: The recursion starts with base cases. If the two values are strictly equal (\`a === b\`), they are equal. If they are not objects or are null, they are not equal.
2.  **Recursive Step**: The function then checks if the objects have the same number of keys. It iterates through the keys of one object.
3.  **Comparison**: For each key, it checks if the other object also has that key and then calls itself recursively (\`deepEqual(a[key], b[key])\`) to compare the values of those properties. If any comparison fails, the function returns \`false\`.
4.  **Result**: If the loop completes without returning \`false\`, the objects are considered deep equal.`,

  solveArrayPermutations: `A **permutation** of an array is a re-arrangement of its elements. For an array of size \`n\`, there are \`n!\` (n factorial) possible permutations.

1.  **Concept**: The goal is to generate all possible orderings of the elements. For \`[1, 2, 3]\`, the permutations are \`[1, 2, 3]\`, \`[1, 3, 2]\`, \`[2, 1, 3]\`, \`[2, 3, 1]\`, \`[3, 1, 2]\`, and \`[3, 2, 1]\`.
2.  **Recursive Approach**: A common way to solve this is with recursion.
    *   **Base Case**: If the array is empty or has one element, there is only one permutation (the array itself).
    *   **Recursive Step**: For each element in the array, fix it as the first element. Then, generate all permutations of the *remaining* elements. Combine the fixed element with each of these sub-permutations.
Due to the potentially huge number of results, this UI demonstrates the concept rather than generating the full list.`,

  solveStringPermutations: `Generating all **permutations of a string** is conceptually identical to generating permutations of an array of its characters. The goal is to find every possible way the characters can be re-arranged.

1.  **Method**: The problem is typically solved by treating the string as an array of characters and applying a permutation algorithm, often a recursive one.
2.  **Algorithm**: A common backtracking algorithm involves swapping characters at different positions. You iterate through the string, swapping the character at the current position with every subsequent character, and then making a recursive call for the rest of the string.
3.  **Result**: After each recursive path completes, you "backtrack" by swapping the characters back to their original positions to explore the next path. The permutations are collected when the recursion reaches the end of the string.`,

  solveArrayCombinations: `A **combination** is a selection of items from a collection, such that the order of selection does not matter. Given an array and a size \`k\`, the goal is to find all unique subsets of size \`k\`.

1.  **Permutation vs. Combination**: For \`[1, 2, 3]\` with size 2, the only combinations are \`[1, 2]\`, \`[1, 3]\`, and \`[2, 3]\`. The order doesn't matter, so \`[2, 1]\` is the same combination as \`[1, 2]\`.
2.  **Recursive (Backtracking) Approach**: A typical solution uses a backtracking algorithm.
    *   A helper function is created, taking a starting index and the current combination being built.
    *   **Base Case**: If the current combination's length equals the desired size, it's a valid combination, so add it to the results.
    *   **Recursive Step**: Iterate from the starting index to the end of the input array. For each element, add it to the current combination and make a recursive call with the *next* index to find the rest of the combination. Then, "backtrack" by removing the element to explore other possibilities.`,

  solveCustomMap: `This problem demonstrates how to implement your own version of the native \`Array.prototype.map\` function. The \`map\` method creates a **new array** populated with the results of calling a provided function on every element in the calling array.

1.  **Core Logic**: The function iterates through each element of an input array.
2.  **Transformation**: For each element, it calls a "callback" function, passing the element to it.
3.  **New Array**: It takes the return value from the callback function and pushes it into a new array.
4.  **Result**: After iterating through all elements, it returns the new array. It **does not** modify the original array. In this example, the callback function is one that doubles the number.`,

  solveCustomFilter: `This problem shows how to build your own version of the native \`Array.prototype.filter\` function. The \`filter\` method creates a **new array** with all elements that pass the test implemented by the provided function.

1.  **Core Logic**: The function iterates through each element of an input array.
2.  **The Test**: For each element, it calls a "predicate" callback function. This function returns a boolean value (\`true\` or \`false\`).
3.  **New Array**: If the predicate function returns \`true\`, the original element is pushed into a new array. If it returns \`false\`, the element is skipped.
4.  **Result**: After the loop, the new array containing only the elements that passed the test is returned.`,

  solveCustomReduce: `This problem implements the logic of the powerful \`Array.prototype.reduce\` method. The \`reduce\` method executes a "reducer" function on each element of the array, resulting in a single output value.

1.  **Core Components**:
    *   **Accumulator**: A value that accumulates the result. It's the value returned from the last invocation of the callback.
    *   **Current Value**: The current element being processed in the array.
    *   **Initial Value (Optional)**: A value to use as the first argument to the first call of the callback. If not supplied, the first element of the array is used.
2.  **How it Works**: The function iterates through the array. In each iteration, it calls the reducer function with the current accumulator and the current element, and the return value becomes the new accumulator for the next iteration. The final accumulator value is returned.`,

  solveJSONValidator: `**JSON (JavaScript Object Notation)** is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. A JSON validator checks if a given string adheres to the strict syntax rules of JSON.

1.  **The Easiest Way**: JavaScript provides a built-in global \`JSON\` object with a \`parse()\` method. The \`JSON.parse(text)\` method parses a JSON string, constructing the JavaScript value or object described by the string.
2.  **Error Handling**: If the string is **not** valid JSON, \`JSON.parse()\` will throw a \`SyntaxError\` exception.
3.  **Implementation**: This solver uses a \`try...catch\` block. It attempts to parse the input string. If it succeeds, the JSON is valid. If it fails and enters the \`catch\` block, the JSON is invalid.`,

  solveCaesarCipher: `The **Caesar cipher** is one of the simplest and most widely known encryption techniques. It's a type of substitution cipher where each letter in the plaintext is "shifted" a certain number of places down or up the alphabet.

1.  **The 'Shift'**: The key to the cipher is the shift value. A shift of 3 would mean 'A' becomes 'D', 'B' becomes 'E', and so on.
2.  **Implementation**:
    *   The function iterates through each character of the input text.
    *   It checks if the character is a letter. If not, it's left unchanged (e.g., spaces, punctuation).
    *   If it is a letter, it gets the character's ASCII code. It determines the base code (either 'a' for lowercase or 'A' for uppercase).
    *   The core logic is \`(code - base + shift) % 26\`. This formula finds the new position in the alphabet, wrapping around from 'Z' back to 'A' if necessary.
    *   The new character code is converted back to a character and appended to the result.`,
};
