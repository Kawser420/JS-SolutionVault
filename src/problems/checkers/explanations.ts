export const CHECKER_EXPLANATIONS: Record<string, string> = {
  solveEvenOrOdd: `This function determines if a given integer is even or odd using the **modulo operator (%)**.

1.  **Modulo Operator**: The expression \`num % 2\` calculates the remainder when \`num\` is divided by 2.
2.  **Logic**:
    *   If a number is perfectly divisible by 2, the remainder is \`0\`, and the number is **even**.
    *   If there is a remainder (\`1\` for positive integers), the number is **odd**.
3.  **Ternary Operator**: The code uses a concise ternary operator (\`condition ? value_if_true : value_if_false\`) to return the result.`,

  solvePalindrome: `A **palindrome** is a word, phrase, number, or other sequence of characters that reads the same backward as forward. This function checks if a given string is a palindrome.

1.  **Normalization**: To ensure a fair comparison, the string is first normalized.
    *   \`.toLowerCase()\`: Converts the entire string to lowercase.
    *   \`.replace(/[^a-z0-9]/g, '')\`: A regular expression removes all non-alphanumeric characters (like spaces, punctuation, etc.).
2.  **Reversal**: The normalized string is then reversed. This is done by splitting it into an array of characters (\`.split('')\`), reversing the array (\`.reverse()\`), and joining it back into a string (\`.join('')\`).
3.  **Comparison**: Finally, the normalized string is compared to its reversed version. If they are identical, the original string is a palindrome.`,

  solvePrimeNumber: `A **prime number** is a natural number greater than 1 that has no positive divisors other than 1 and itself. This function checks if a number is prime.

1.  **Base Case**: The function first checks if the number is less than or equal to 1. By definition, these numbers are not prime.
2.  **Optimization**: The \`for\` loop only needs to check for divisors up to the **square root** of the number (\`i * i <= num\`). If a number \`n\` has a divisor larger than its square root, it must also have a divisor smaller than it.
3.  **Iteration**: The loop iterates from 2 up to the square root of the number.
4.  **Divisibility Check**: In each iteration, it uses the modulo operator (\`%\`) to check if \`num\` is perfectly divisible by the current iterator \`i\`. If it is, the number is not prime, and the function returns \`false\`.
5.  **Result**: If the loop completes without finding any divisors, the number is prime.`,

  solveLeapYear: `A **leap year** is a year that contains an extra day, February 29th, to keep the calendar year synchronized with the astronomical year. The rules are:

1.  A year must be evenly divisible by 4.
2.  **However**, if the year can be evenly divided by 100, it is NOT a leap year, **unless...**
3.  The year is also evenly divisible by 400. Then it IS a leap year.

This logic is implemented concisely using logical operators: \`(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)\`.`,

  solveAnagram: `An **anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

1.  **Normalization**: The core idea is that if two strings are anagrams, they must be identical when their characters are sorted alphabetically.
2.  **Implementation**:
    *   Both strings are converted to lowercase and all non-alphanumeric characters are removed.
    *   They are split into arrays of characters (\`.split('')\`).
    *   The arrays are sorted alphabetically (\`.sort()\`).
    *   They are joined back into strings (\`.join('')\`).
3.  **Comparison**: If the two resulting normalized, sorted strings are equal, the original strings are anagrams.`,

  solveNumberSign: `This function checks whether a given number is positive, negative, or zero.

1.  **Conditional Checks**: It uses a simple \`if-else if-else\` structure (or a ternary operator as shown here) to perform the checks.
2.  **Logic**:
    *   It first checks if the number is greater than 0 (\`num > 0\`).
    *   If not, it checks if the number is less than 0 (\`num < 0\`).
    *   If neither of the above is true, the number must be exactly 0.`,

  solveValidParentheses: `This classic problem checks if a string of parentheses, brackets, and braces is "valid". A string is valid if:
1.  Open brackets are closed by the same type of brackets.
2.  Open brackets are closed in the correct order.

This is solved using a **Stack** data structure.
1.  **Map**: A map stores the corresponding closing bracket for each opening bracket.
2.  **Iteration**: The function iterates through the string.
3.  **Logic**:
    *   If it finds an **opening** bracket ('(', '[', '{'), it pushes its corresponding **closing** bracket onto the stack.
    *   If it finds a **closing** bracket, it checks if the stack is empty or if the bracket does not match the top of the stack. If either is true, the string is invalid. If it does match, it pops from the stack.
4.  **Final Check**: After the loop, if the stack is empty, it means every opening bracket was correctly matched and closed. Otherwise, it's invalid.`,

  solveArmstrongNumber: `An **Armstrong number** (or narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

1.  **Example**: 153 is an Armstrong number because it has 3 digits, and 1³ + 5³ + 3³ = 1 + 125 + 27 = 153.
2.  **Logic**:
    *   The number of digits is found by converting the number to a string and getting its length.
    *   The function iterates through each digit of the number.
    *   For each digit, it raises it to the power of the total number of digits.
    *   It sums up these results and compares the final sum to the original number.`,

  solvePerfectNumber: `A **perfect number** is a positive integer that is equal to the sum of its proper positive divisors (the sum of its positive divisors, excluding the number itself).

1.  **Example**: 6 is a perfect number because its proper divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
2.  **Logic**:
    *   The function iterates from 1 up to the number (but not including it).
    *   It uses the modulo operator (\`%\`) to check if the current iterator is a divisor.
    *   If it is, the divisor is added to a running total.
    *   Finally, the sum is compared to the original number.`,

  solveStrongNumber: `A **Strong number** is a number in which the sum of the factorials of its digits is equal to the number itself.

1.  **Example**: 145 is a Strong number because 1! + 4! + 5! = 1 + 24 + 120 = 145.
2.  **Logic**:
    *   The function needs a helper to calculate factorials.
    *   It iterates through each digit of the input number.
    *   For each digit, it calculates its factorial.
    *   It sums up these factorials and compares the total to the original number.`,

  solveHarshadNumber: `A **Harshad number** (or Niven number) is an integer that is divisible by the sum of its digits.

1.  **Example**: 18 is a Harshad number because the sum of its digits is 1 + 8 = 9, and 18 is divisible by 9.
2.  **Logic**:
    *   First, the function calculates the sum of the digits of the number.
    *   Then, it uses the modulo operator (\`%\`) to check if the original number is perfectly divisible by this sum.`,

  solveHappyNumber: `A **happy number** is a number which eventually reaches 1 when replaced by the sum of the square of each digit. If the process results in an endless cycle of numbers that does not include 1, the number is not happy.

1.  **Example**: 19 is a happy number.
    *   1² + 9² = 1 + 81 = 82
    *   8² + 2² = 64 + 4 = 68
    *   6² + 8² = 36 + 64 = 100
    *   1² + 0² + 0² = 1.
2.  **Logic**:
    *   The process is repeated until the number becomes 1.
    *   To detect an endless cycle, a \`Set\` is used to keep track of the numbers already seen. If a number is encountered a second time, it means we are in a loop, and the number is not happy.`,

  solveDisariumNumber: `A **Disarium number** is a number in which the sum of its digits powered with their respective positions is equal to the number itself.

1.  **Example**: 89 is a Disarium number because 8¹ + 9² = 8 + 81 = 89.
2.  **Logic**:
    *   The function iterates through the digits of the number, keeping track of their position (1-indexed).
    *   For each digit, it calculates \`digit ^ position\`.
    *   It sums these results and compares the total to the original number.`,

  solveNeonNumber: `A **Neon number** is a number where the sum of digits of its square is equal to the number itself.

1.  **Example**: 9 is a Neon number because 9² = 81, and the sum of the digits of 81 is 8 + 1 = 9.
2.  **Logic**:
    *   First, the function calculates the square of the input number.
    *   Then, it calculates the sum of the digits of this square.
    *   Finally, it compares this sum to the original number.`,

  solveSpyNumber: `A **Spy number** is a number where the sum of its digits is equal to the product of its digits.

1.  **Example**: 1124 is a Spy number because the sum of its digits is 1 + 1 + 2 + 4 = 8, and the product of its digits is 1 * 1 * 2 * 4 = 8.
2.  **Logic**:
    *   The function iterates through the digits of the number.
    *   It maintains two variables: one for the running sum and one for the running product.
    *   After processing all digits, it compares the final sum and product.`,

  solvePronicNumber: `A **Pronic number** (or oblong number) is a number that is the product of two consecutive integers, i.e., a number of the form n(n+1).

1.  **Example**: 12 is a Pronic number because it is the product of 3 and 4 (3 * 4 = 12).
2.  **Logic**:
    *   The function can iterate from 1 up to the square root of the input number.
    *   In each iteration, it checks if \`i * (i + 1)\` equals the input number. If a match is found, it's a Pronic number.`,

  solveKaprekarNumber: `A **Kaprekar number** is a non-negative integer, the representation of whose square in some base can be split into two parts that add up to the original number.

1.  **Example**: 45 is a Kaprekar number because 45² = 2025, and 20 + 25 = 45.
2.  **Logic**:
    *   The function squares the input number and converts the square to a string.
    *   It then iterates through all possible split points of the string.
    *   For each split, it converts the left and right parts back to numbers and checks if their sum equals the original number.`,

  solveDuckNumber: `A **Duck number** is a positive number which has zeros present in it. For example, 3210 is a Duck number. Note: A number with leading zeros is not a Duck number.

1.  **Logic**: This is a simple string-based check.
    *   The number is converted to a string.
    *   The function checks if the string \`includes('0')\`.
    *   It also checks that the string does not start with '0', unless the number itself is 0. The solver handles positive integers, so it just needs to check that the first character isn't '0'.`,

  solveEvilNumber: `An **Evil number** is a non-negative integer that has an even number of 1s in its binary representation.

1.  **Example**: 3 is an Evil number. Its binary representation is "11", which has two 1s (an even number).
2.  **Logic**:
    *   The number is first converted to its binary string representation using \`num.toString(2)\`.
    *   The function then counts the number of '1's in this binary string.
    *   Finally, it checks if this count is even using the modulo operator (\`count % 2 === 0\`).`,

  solveKeithNumber: `A **Keith number** is a number \`n\` with \`k\` digits, such that if a Fibonacci-like sequence is created starting with the \`k\` digits of \`n\`, \`n\` itself appears in the sequence.

1.  **Example**: 197 is a Keith number. The sequence starts with 1, 9, 7.
    *   1 + 9 + 7 = 17
    *   9 + 7 + 17 = 33
    *   7 + 17 + 33 = 57
    *   17 + 33 + 57 = 107
    *   33 + 57 + 107 = 197. The number appears in the sequence.
2.  **Logic**:
    *   The function extracts the digits of the number to form the initial sequence.
    *   It then generates new terms by summing the last \`k\` terms.
    *   It continues until the generated term is equal to or greater than the original number.`,

  solveSmithNumber: `A **Smith number** is a composite number for which the sum of its digits is equal to the sum of the digits in its prime factorization.

1.  **Example**: 4 is a Smith number. The sum of its digits is 4. Its prime factorization is 2 * 2. The sum of the digits of its prime factors is 2 + 2 = 4.
2.  **Logic**:
    *   The function first finds the sum of the digits of the original number.
    *   Then, it finds the prime factorization of the number.
    *   For each prime factor, it sums its digits.
    *   It sums the results from the previous step and compares it to the original sum of digits.`,

  solveUglyNumber: `An **Ugly number** is a positive number whose prime factors only include 2, 3, and/or 5. The sequence starts with 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, ...

1.  **Logic**: The function can check this by repeatedly dividing the number by 2, 3, and 5 until it can't be divided any further.
2.  **Implementation**:
    *   It first handles the base case that the number must be positive.
    *   It has separate loops to divide out all factors of 2, then all factors of 3, then all factors of 5.
    *   If the number that remains after all these divisions is \`1\`, then the original number's only prime factors were 2, 3, or 5.`,

  solveAbundantNumber: `An **Abundant number** is a number for which the sum of its proper divisors is greater than the number itself.

1.  **Example**: 12 is an abundant number. Its proper divisors are 1, 2, 3, 4, and 6. The sum is 1+2+3+4+6 = 16, which is greater than 12.
2.  **Logic**: This uses the same helper function as the Perfect Number checker, which finds the sum of proper divisors.
3.  **Comparison**: It then compares this sum to the original number. If \`sum > num\`, the number is abundant.`,

  solveDeficientNumber: `A **Deficient number** is a number for which the sum of its proper divisors is less than the number itself.

1.  **Example**: 8 is a deficient number. Its proper divisors are 1, 2, and 4. The sum is 1+2+4 = 7, which is less than 8.
2.  **Logic**: This also uses the helper function to find the sum of proper divisors.
3.  **Comparison**: It then compares this sum to the original number. If \`sum < num\`, the number is deficient.`,

  solveAmicableNumbers: `**Amicable numbers** are two different numbers so related that the sum of the proper divisors of each is equal to the other number.

1.  **Example**: 220 and 284 are amicable numbers.
    *   The proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110, whose sum is 284.
    *   The proper divisors of 284 are 1, 2, 4, 71, 142, whose sum is 220.
2.  **Logic**:
    *   The function calculates the sum of the proper divisors for the first number, let's call it \`sum1\`.
    *   It calculates the sum of the proper divisors for the second number, \`sum2\`.
    *   It then checks if \`sum1\` equals the second number AND \`sum2\` equals the first number. It also must ensure the two numbers are not the same.`,

  solveTriangularNumber: `A **Triangular number** counts objects arranged in an equilateral triangle. It is the sum of the \`n\` natural numbers from 1 to \`n\`.

1.  **Example**: 15 is a triangular number because 1 + 2 + 3 + 4 + 5 = 15.
2.  **Efficient Logic**: Instead of summing, we can use a mathematical formula. A number \`x\` is triangular if and only if \`8x + 1\` is a perfect square. The solver uses a variation of this: it checks if \`(Math.sqrt(8 * num + 1) - 1) / 2\` is an integer.`,

  solveEmirpNumber: `An **Emirp number** (prime spelled backwards) is a prime number that results in a different prime number when its decimal digits are reversed.

1.  **Example**: 13 is an Emirp number. 13 is prime, and its reversal, 31, is also a different prime number.
2.  **Logic**: The function performs three checks:
    *   Is the original number prime?
    *   Is the reversed number prime?
    *   Is the original number not equal to its reversal (to exclude palindromic primes like 11)?`,

  solveValidateEmail: `This function validates if a string is a correctly formatted email address using a **Regular Expression (RegEx)**.

1.  **The RegEx**: \`/^[^\s@]+@[^\s@]+\.[^\s@]+$/\`.
    *   \`^\`: Asserts position at the start of the string.
    *   \`[^\s@]+\`: Matches one or more characters that are NOT whitespace (\`\\s\`) or an \`@\` symbol. This is for the username part.
    *   \`@\`: Matches the literal \`@\` symbol.
    *   \`[^\s@]+\`: Matches the domain name.
    *   \`\\.\`: Matches the literal \`.\` separating the domain and top-level domain.
    *   \`[^\s@]+\`: Matches the top-level domain (like .com, .org).
    *   \`$\`: Asserts position at the end of the string.
2.  **\`.test()\` Method**: The \`RegExp.prototype.test()\` method executes a search for a match between a regular expression and a specified string. It returns \`true\` or \`false\`.`,

  solveValidateURL: `This function validates if a string is a valid URL by attempting to construct a **URL object**.

1.  **The \`URL\` Constructor**: Modern JavaScript has a built-in \`URL\` constructor (\`new URL(urlString)\`).
2.  **How it Works**: This constructor is very strict. It will parse the given string according to the URL specification. If the string is a valid, well-formed URL, it will create a URL object.
3.  **Error Handling**: If the string is **not** a valid URL, the constructor will throw a \`TypeError\`.
4.  **Implementation**: The solver wraps the \`new URL(url)\` call in a \`try...catch\` block. If the code in the \`try\` block executes without error, the URL is valid. If it throws an error and goes to the \`catch\` block, the URL is invalid.`,

  solveIsWeekend: `This function determines if a given date falls on a weekend (Saturday or Sunday).

1.  **Date Object**: It first creates a JavaScript \`Date\` object from the input string.
2.  **\`.getUTCDay()\` Method**: The \`getUTCDay()\` method is used to get the day of the week. It returns an integer where **0 represents Sunday** and **6 represents Saturday**.
3.  **Logic**: The function checks if the returned day number is either \`0\` or \`6\`.`,

  solveCheckISBN: `An **ISBN (International Standard Book Number)** is a numeric commercial book identifier. This function validates both ISBN-10 and ISBN-13 formats.

1.  **ISBN-10 Logic**:
    *   It has 10 digits. The last digit is a "check digit".
    *   Multiply each of the first 9 digits by their position (1 through 9). Sum these results. The last digit (which can be 'X' for 10) is multiplied by 10 and added to the sum.
    *   The total sum must be divisible by 11.
2.  **ISBN-13 Logic**:
    *   It has 13 digits.
    *   Multiply each of the first 12 digits by either 1 or 3, alternating. Sum these results.
    *   Take the sum modulo 10. Subtract this from 10. The result must match the 13th digit (the check digit).`,

  solvePalindromicNumber: `A **palindromic number** is a number that remains the same when its digits are reversed. This is the numeric version of a string palindrome.

1.  **Example**: 121 is a palindromic number. 123 is not.
2.  **Logic**: The easiest way to check this is to convert the number to a string.
3.  **Implementation**:
    *   Convert the number to a string using \`String(num)\`.
    *   Apply the same logic as the string palindrome checker: \`split('')\`, \`reverse()\`, \`join('')\`.
    *   Compare the original number string with the reversed string.`,

  solvePerfectSquare: `A **perfect square** is an integer that is the square of an integer. In other words, its square root is an integer.

1.  **Example**: 25 is a perfect square because its square root is 5. 26 is not.
2.  **Logic**:
    *   First, calculate the square root of the number using \`Math.sqrt()\`.
    *   Then, check if this result is a whole number. The **\`Number.isInteger()\`** method is a reliable way to do this.
    *   If the square root is an integer, the original number is a perfect square.`,

  solveFibonacciChecker: `This function checks if a given number belongs to the Fibonacci sequence. It uses a mathematical property known as **Gessel's test**.

1.  **The Property**: A number \`n\` is a Fibonacci number if and only if either \`(5 * n² + 4)\` or \`(5 * n² - 4)\` is a perfect square.
2.  **Implementation**:
    *   The function calculates both \`5 * n² + 4\` and \`5 * n² - 4\`.
    *   It then uses a helper function (the same logic as the Perfect Square Checker) to check if either of these two results is a perfect square.
    *   If at least one of them is, the original number is a Fibonacci number. This is much more efficient than generating the Fibonacci sequence until you pass the number.`,
};
