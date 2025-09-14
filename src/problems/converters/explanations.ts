export const CONVERTER_EXPLANATIONS: Record<string, string> = {
  solveKilometerToMeter: `This function converts a distance from kilometers (km) to meters (m).

1.  **The Formula**: The conversion is based on the fundamental relationship: **1 kilometer = 1000 meters**.
2.  **Parsing**: The function first parses the input to ensure it's a valid number.
3.  **Validation**: It checks if the input number is non-negative, as distance cannot be negative.
4.  **Calculation**: It performs a simple multiplication: \`kilometers * 1000\`.
5.  **Formatting**: The result is formatted with commas using \`toLocaleString()\` for better readability with large numbers.`,

  solveCelsiusToFahrenheit: `This function converts a temperature from Celsius (°C) to Fahrenheit (°F) using the standard conversion formula: **F = (C * 9/5) + 32**.

1.  **Parsing**: The input Celsius value is parsed into a number.
2.  **Calculation**: The function follows the order of operations:
    *   First, it multiplies the Celsius value by 9/5 (or 1.8).
    *   Then, it adds 32 to the result.
3.  **Formatting**: The final Fahrenheit temperature is formatted to two decimal places using \`.toFixed(2)\` for precision.`,

  solveToUppercase: `This function converts an entire string to its uppercase equivalent using the built-in **String.prototype.toUpperCase()** method.

1.  **How it Works**: The \`toUpperCase()\` method is called on a string and it returns a new string where all alphabetic characters have been converted to uppercase.
2.  **Non-Alphabetic Characters**: Characters that do not have an uppercase equivalent (like numbers, symbols, and spaces) are left unchanged.
3.  **Example**: \`"hello world"\` becomes \`"HELLO WORLD"\`.`,

  solveToLowercase: `This function converts an entire string to its lowercase equivalent using the built-in **String.prototype.toLowerCase()** method.

1.  **How it Works**: The \`toLowerCase()\` method returns a new string in which all alphabetic characters are converted to lowercase.
2.  **Non-Alphabetic Characters**: Any characters without a lowercase version (numbers, symbols, spaces) are not affected.
3.  **Example**: \`"HELLO WORLD"\` becomes \`"hello world"\`.`,

  solveBinaryToDecimal: `This function converts a binary (base-2) number string into its decimal (base-10) equivalent.

1.  **The \`parseInt()\` Function**: JavaScript's built-in \`parseInt(string, radix)\` function is perfect for this.
2.  **Radix Parameter**: The second argument, **radix**, specifies the base of the number in the input string. For binary, the radix is **2**.
3.  **Validation**: The solver first validates that the input string contains only '0's and '1's using a regular expression.
4.  **Conversion**: \`parseInt("1011", 2)\` correctly interprets "1011" as a base-2 number and converts it to the decimal number 11.`,

  solveDecimalToBinary: `This function converts a decimal (base-10) number into its binary (base-2) string equivalent.

1.  **The \`.toString()\` Method**: The \`Number.prototype.toString(radix)\` method can be used to convert a number to a string representation in a specified base.
2.  **Radix Parameter**: The **radix** argument specifies the base to use for the string representation. For binary, the radix is **2**.
3.  **Conversion**: For a number variable \`num\`, calling \`num.toString(2)\` will return its binary string. For example, \`(11).toString(2)\` returns the string \`"1011"\`.`,

  solveFahrenheitToCelsius: `This function converts a temperature from Fahrenheit (°F) to Celsius (°C) using the standard formula: **C = (F - 32) * 5/9**.

1.  **Parsing**: The input Fahrenheit value is parsed into a number.
2.  **Calculation**: The function follows the order of operations:
    *   First, it subtracts 32 from the Fahrenheit value.
    *   Then, it multiplies the result by 5/9.
3.  **Formatting**: The final Celsius temperature is formatted to two decimal places using \`.toFixed(2)\`.`,

  solveBaseConverter: `This function converts a number from any base (radix) between 2 and 36 to any other base in the same range. It combines the logic of the binary/decimal converters.

1.  **Step 1: Convert to Decimal**: It first uses \`parseInt(number, fromBase)\` to convert the input string from its original base into a standard decimal (base-10) number.
2.  **Step 2: Convert from Decimal**: It then uses \`.toString(toBase)\` on the resulting decimal number to convert it to a string representation in the desired target base.
3.  **Example**: To convert "FF" (base-16) to base-2:
    *   \`parseInt("FF", 16)\` results in the decimal number \`255\`.
    *   \`(255).toString(2)\` results in the binary string \`"11111111"\`.`,

  solveStringToAscii: `This function converts a string into a sequence of **ASCII (American Standard Code for Information Interchange)** values. ASCII is a character encoding standard where each character is represented by a number.

1.  **The \`.charCodeAt()\` Method**: The \`String.prototype.charCodeAt(index)\` method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index. For standard characters, this corresponds to the ASCII value.
2.  **Logic**:
    *   The function splits the string into an array of characters.
    *   It then uses \`map()\` to iterate over each character.
    *   For each character \`c\`, it calls \`c.charCodeAt(0)\` to get its numeric code.
    *   The final result is an array of these codes.`,

  solveAsciiToString: `This function converts a sequence of ASCII codes back into a readable string.

1.  **The \`String.fromCharCode()\` Method**: This static method returns a string created from the specified sequence of UTF-16 code units (which includes ASCII codes).
2.  **Logic**:
    *   The function first parses the comma-separated input string into an array of numbers.
    *   It then uses the **spread syntax (...)** to pass all the numbers in the array as individual arguments to \`String.fromCharCode()\`.
    *   For example, \`String.fromCharCode(72, 101, 108, 108, 111)\` returns the string \`"Hello"\`.`,

  solveKelvinToCelsius: `This function converts a temperature from Kelvin (K) to Celsius (°C). The Kelvin scale is an absolute thermodynamic temperature scale, meaning 0 K is absolute zero.

1.  **The Formula**: The conversion is a simple subtraction: **°C = K - 273.15**.
2.  **Parsing**: The input Kelvin value is parsed into a number.
3.  **Calculation**: The function subtracts 273.15 from the Kelvin value.
4.  **Formatting**: The result is formatted to two decimal places for standard temperature representation.`,

  solveHexToDecimal: `This function converts a hexadecimal (base-16) number string into its decimal (base-10) equivalent.

1.  **The \`parseInt()\` Function**: Similar to binary conversion, this uses the built-in \`parseInt(string, radix)\` function.
2.  **Radix Parameter**: For hexadecimal, the radix (base) is **16**.
3.  **Validation**: The solver validates that the input string contains only valid hex characters (0-9, A-F, case-insensitive).
4.  **Conversion**: \`parseInt("1A", 16)\` correctly interprets "1A" as a base-16 number and converts it to the decimal number 26.`,

  solveDecimalToHex: `This function converts a decimal (base-10) number into its hexadecimal (base-16) string equivalent.

1.  **The \`.toString()\` Method**: The \`Number.prototype.toString(radix)\` method is used for the conversion.
2.  **Radix Parameter**: The radix argument is set to **16** to specify a hexadecimal conversion.
3.  **Conversion**: For example, \`(26).toString(16)\` returns the string \`"1a"\`. The function then converts this to uppercase for standard hex representation.`,

  solveIntToRoman: `This function converts a positive integer into its Roman numeral representation. It uses a greedy algorithm.

1.  **Lookup Tables**: Two arrays are created. One holds the decimal values in descending order (\`1000, 900, 500, ...\`), and the other holds the corresponding Roman numeral symbols (\`"M", "CM", "D", ...\`). It's crucial that subtractive forms like 900 ("CM") and 4 ("IV") are included.
2.  **Greedy Approach**: The function iterates through the values. For each value, it repeatedly subtracts it from the input number and appends the corresponding Roman numeral to the result string, until the number is smaller than the current value.
3.  **Example**: To convert 1994:
    *   Subtract 1000, result is "M", num is 994.
    *   Subtract 900, result is "MCM", num is 94.
    *   Subtract 90, result is "MCMXC", num is 4.
    *   Subtract 4, result is "MCMXCIV", num is 0. Loop ends.`,

  solveRomanToNum: `This function converts a Roman numeral string into an integer.

1.  **The Logic**: Roman numerals are read from left to right. If a symbol of smaller value comes before a symbol of larger value, it is subtracted (e.g., 'IV' is 4, 'CM' is 900). Otherwise, it is added.
2.  **Implementation**:
    *   A map is used to store the integer value of each Roman numeral symbol.
    *   The function iterates through the Roman numeral string.
    *   In each iteration, it looks at the current symbol and the **next** symbol.
    *   If the next symbol has a greater value, it subtracts the current value from the next, adds the result to the total, and skips the next symbol.
    *   Otherwise, it just adds the current symbol's value to the total.`
};
