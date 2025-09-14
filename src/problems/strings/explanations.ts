export const STRING_EXPLANATIONS: Record<string, string> = {
  solveLongestName: `This function finds the longest string in an array of strings. It uses the **Array.prototype.reduce()** method for a concise and elegant solution.

1.  **Parsing**: The comma-separated input is parsed into an array of names.
2.  **Reducer Logic**: The \`reduce\` method iterates through the array, keeping track of an \`accumulator\` (named \`longest\` here), which holds the longest string found *so far*.
3.  **Comparison**: In each iteration, it compares the \`length\` of the \`current\` name with the \`length\` of the \`longest\` name found so far.
4.  **Update Accumulator**: If the \`current\` name is longer, it becomes the new \`longest\`. Otherwise, \`longest\` remains unchanged.
5.  **Initial Value**: The reducer is initialized with an empty string \`""\`.`,

  solveStringReversal: `This function reverses a string by chaining together three fundamental JavaScript methods.

1.  **\`.split('')\`**: The \`split('')\` method, with an empty string as a separator, splits the string into an array of its individual characters. For example, \`"hello"\` becomes \`['h', 'e', 'l', 'l', 'o']\`.
2.  **\`.reverse()\`**: This array method reverses the order of the elements in the array in-place. The array becomes \`['o', 'l', 'l', 'e', 'h']\`.
3.  **\`.join('')\`**: The \`join('')\` method, again with an empty string separator, joins the elements of the array back into a single string, resulting in \`"olleh"\`.`,

  solveVowelCounter: `This function counts the number of vowels (a, e, i, o, u) in a string, regardless of case. It uses a **Regular Expression (RegEx)** for an efficient solution.

1.  **The RegEx**: The pattern is \`/[aeiou]/gi\`.
    *   \`[aeiou]\`: This is a character set that matches any one of the characters inside the brackets.
    *   \`g\`: This is the "global" flag, which ensures the search looks for all matches in the string, not just the first one.
    *   \`i\`: This is the "case-insensitive" flag, which allows the pattern to match both lowercase ('a') and uppercase ('A') vowels.
2.  **\`.match()\`**: The \`String.prototype.match()\` method retrieves the result of matching a string against a regular expression. It returns an array of all matches, or \`null\` if no matches are found.
3.  **Counting**: The code \`(str.match(...) || [])\` handles the case where no vowels are found (preventing an error on \`.length\`). The \`.length\` of the resulting array gives the total count of vowels.`,

  solveStringLength: `This function gets the number of characters in a string using the built-in **\`.length\`** property.

1.  **How it Works**: The \`length\` property of a string returns the number of UTF-16 code units in the string. For common characters, this is a direct count of the characters.
2.  **Example**: The string \`"JavaScript"\` has a length of 10.
3.  **Note**: This is a property, not a method, so you access it without parentheses: \`myString.length\`.`,

  solveWordCount: `This function counts the number of words in a sentence.

1.  **\`.trim()\`**: First, \`.trim()\` is used to remove any leading or trailing whitespace that could result in empty strings in the array.
2.  **\`.split(/\\s+/)\`**: The string is split into an array of words. The regular expression \`/\\s+/\` is used as the separator. This is more robust than splitting by a simple space (\`' '\`) because it handles multiple spaces between words, as well as tabs and newlines.
3.  **\`.filter(Boolean)\`**: This is a concise way to remove any empty strings from the array that might result from the split.
4.  **\`.length\`**: Finally, the \`.length\` of the resulting array gives the total number of words.`,

  solveCharCount: `This function is identical to the String Length Counter. It uses the string's built-in **\`.length\`** property to get the total number of characters.

1.  **Direct Property Access**: The \`.length\` property provides the most direct and efficient way to count characters in a string.
2.  **Usage**: It's a fundamental property used for everything from validating input length to iterating through a string's characters.`,

  solveCapitalizeWords: `This function capitalizes the first letter of each word in a sentence, a common formatting task known as "title case" or "proper case".

1.  **Split**: The sentence is first split into an array of words using \`.split(' ')\`.
2.  **Map and Transform**: The \`map()\` method is used to iterate over each word and transform it.
    *   \`w.charAt(0).toUpperCase()\`: This gets the character at index 0 (the first letter) and converts it to uppercase.
    *   \`w.slice(1).toLowerCase()\`: This gets the rest of the word from the second character onwards (\`slice(1)\`) and converts it to lowercase. This ensures words like "jAVAsCRIPT" become "Javascript".
3.  **Join**: Finally, \`.join(' ')\` merges the transformed words back into a single sentence with spaces in between.`,

  solveStringReplace: `This function replaces all occurrences of a search string with a replacement string. The solver uses a combination of \`.split()\` and \`.join()\` to achieve a global replacement.

1.  **The \`.replace()\` Limitation**: By default, \`String.prototype.replace('search', 'replace')\` only replaces the **first** occurrence. To replace all, you would need to use a regular expression with the global flag.
2.  **The Split-Join Method**:
    *   \`str.split(inputs.search)\`: This splits the string into an array, using the search term as the delimiter. For example, \`"a-b-c".split('-')\` becomes \`['a', 'b', 'c']\`.
    *   \`.join(inputs.replace)\`: This joins the array back into a string, but this time using the replacement word as the "glue". This effectively replaces all instances of the original delimiter.`,

  solveStringTrim: `This function removes whitespace from both the beginning and the end of a string, using the built-in **String.prototype.trim()** method.

1.  **How it Works**: \`.trim()\` returns a new string with leading and trailing whitespace removed. Whitespace in this context includes spaces, tabs, no-break spaces, etc.
2.  **Use Case**: It is essential for cleaning up user input before validation or processing, ensuring that accidental spaces don't cause errors.
3.  **Note**: Whitespace in the middle of the string is not affected.`,

  solveStartsWith: `This function checks if a string begins with the characters of a specified string, using the built-in **String.prototype.startsWith()** method.

1.  **How it Works**: \`myString.startsWith(prefix)\` returns \`true\` if the string starts with the given prefix, and \`false\` otherwise.
2.  **Case-Sensitive**: The check is case-sensitive. For example, \`"JavaScript".startsWith("java")\` would return \`false\`.
3.  **Optional Position**: The method can take an optional second argument to specify the position at which to begin searching.`,

  solveEndsWith: `This function checks if a string ends with the characters of a specified string, using the built-in **String.prototype.endsWith()** method.

1.  **How it Works**: \`myString.endsWith(suffix)\` returns \`true\` if the string ends with the given suffix, and \`false\` otherwise.
2.  **Case-Sensitive**: Like \`startsWith\`, this method is case-sensitive.
3.  **Optional Position**: It can also take an optional second argument to specify the length of the string to consider for the search.`,

  solveStringRepeat: `This function creates a new string by concatenating a string with itself a specified number of times, using the **String.prototype.repeat()** method.

1.  **How it Works**: \`myString.repeat(count)\` returns a new string containing the specified number of copies of the original string.
2.  **Input**: The count must be a non-negative integer. If the count is 0, an empty string is returned.
3.  **Example**: \`'Ha'.repeat(3)\` returns the string \`"HaHaHa"\`.`,

  solveVowelRemover: `This function removes all vowels from a string, regardless of case, using the **String.prototype.replace()** method with a regular expression.

1.  **The RegEx**: The pattern is \`/[aeiou]/gi\`. This is the same pattern as the Vowel Counter. It matches all vowels, globally (\`g\`) and case-insensitively (\`i\`).
2.  **Replacement**: The \`replace()\` method is called with this pattern and an empty string \`''\` as the second argument. This means every part of the string that matches the pattern (i.e., every vowel) is replaced with nothing, effectively deleting it.`,

  solveCaseSwap: `This function swaps the case of each alphabetic character in a string. Uppercase letters become lowercase, and lowercase letters become uppercase.

1.  **Iteration**: The function first splits the string into an array of characters to iterate over each one.
2.  **\`.map()\` and Conditional Logic**: It uses \`map()\` to create a new array of transformed characters. For each character \`c\`:
    *   It checks if the character is already uppercase (\`c === c.toUpperCase()\`).
    *   If it is, it's converted to lowercase (\`c.toLowerCase()\`).
    *   If it's not (meaning it's lowercase), it's converted to uppercase (\`c.toUpperCase()\`).
3.  **Join**: The array of case-swapped characters is then joined back into a single string.`,
  
  solveStringCompress: `This function performs a basic form of run-length encoding. It compresses a string by replacing consecutive runs of the same character with the character followed by the count.

1.  **Example**: \`"aaabbcccc"\` becomes \`"a3b2c4"\`.
2.  **Logic**:
    *   The function iterates through the string, keeping track of the current character and a \`count\`.
    *   It looks ahead to the next character (\`str[i+1]\`). If the next character is the same, it increments the count.
    *   If the next character is different (or it's the end of the string), it appends the current character and its count (if the count is greater than 1) to the compressed result string. It then resets the count to 1.
3.  **Final Check**: A common convention is to only return the compressed string if it's actually shorter than the original. This solver implements that final check.`
};
