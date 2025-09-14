export const CALCULATOR_EXPLANATIONS: Record<string, string> = {
  solveBudget: `This function calculates the total cost based on the quantity of three different items, each with a fixed price.

1.  **Parsing Inputs**: It safely parses the quantity for \`watches\`, \`phones\`, and \`laptops\` as integers. If an input is empty, it defaults to \`0\`.
2.  **Validation**: It checks to ensure that all quantities are non-negative numbers.
3.  **Calculation**: The total cost is computed by multiplying the quantity of each item by its respective price (\`50\`, \`100\`, \`500\`) and summing the results.
4.  **Formatting**: The final result is presented in a formatted string with the currency symbol and commas for readability using \`toLocaleString()\`.`,

  solveHotelCost: `This function calculates the total cost of a hotel stay based on a tiered pricing structure. The daily rate decreases as the duration of the stay increases.

1.  **Tiered Logic**: The function uses an \`if-else if-else\` structure to apply the correct rates.
    *   **First 10 days**: The rate is a flat \`500\` per day.
    *   **Next 10 days (11-20)**: The rate for these days drops to \`400\` per day.
    *   **After 20 days**: The rate for any additional days is \`300\` per day.
2.  **Calculation**: It calculates the cost for each tier and adds them together to get the final price. For example, a 15-day stay costs \`(10 * 500) + (5 * 400)\`.`,

  solveFactorial: `The **factorial** of a non-negative integer \`n\`, denoted by \`n!\`, is the product of all positive integers less than or equal to \`n\`. For example, \`5! = 5 * 4 * 3 * 2 * 1 = 120\`.

1.  **Base Cases**: The function first handles the base cases. The factorial of \`0\` is defined as \`1\`, and the factorial of \`1\` is \`1\`.
2.  **Iterative Approach**: It uses a \`for\` loop that starts from \`2\` and goes up to the given number \`n\`.
3.  **Multiplication**: Inside the loop, it multiplies the current result by the loop counter \`i\`.
4.  **Result**: After the loop completes, the final accumulated product is the factorial of the number.`,

  solveSquare: `This function calculates the **square** of a number, which is the number multiplied by itself.

1.  **Parsing**: It parses the input string to ensure it's a valid number.
2.  **Calculation**: The core logic is a simple multiplication: \`num * num\`.
3.  **Alternative**: This could also be calculated using \`Math.pow(num, 2)\`, but direct multiplication is often more performant for squaring.`,

  solveCube: `This function calculates the **cube** of a number, which is the number multiplied by itself twice.

1.  **Parsing**: It parses the input string to ensure it's a valid number.
2.  **Calculation**: The result is calculated through the multiplication \`num * num * num\`.
3.  **Alternative**: The \`Math.pow(num, 3)\` function achieves the same result and can be more readable for higher powers.`,

  solveAbsolute: `This function calculates the **absolute value** of a number. The absolute value of a number is its distance from zero on the number line, without considering its sign.

1.  **The \`Math.abs()\` Method**: The function uses the built-in JavaScript method \`Math.abs()\`.
2.  **How it Works**:
    *   If the input number is positive or zero, it returns the number itself.
    *   If the input number is negative, it returns the number without the negative sign. For example, \`Math.abs(-10)\` returns \`10\`.`,

  solveCircleArea: `This function calculates the area of a circle based on its radius using the mathematical formula **Area = πr²**.

1.  **Inputs**: It takes the \`radius\` (r) of the circle as input.
2.  **The Constant \`π\`**: It uses the built-in JavaScript constant \`Math.PI\` for an accurate value of Pi.
3.  **Calculation**: The area is calculated by multiplying \`Math.PI\` by the square of the radius (\`radius * radius\`).
4.  **Formatting**: The final result is formatted to two decimal places using \`toFixed(2)\` for a clean presentation.`,

  solveRectanglePerimeter: `This function calculates the perimeter of a rectangle using the formula **Perimeter = 2 * (length + width)**.

1.  **Inputs**: It takes the \`length\` and \`width\` of the rectangle.
2.  **Formula**: The sum of the length and width is calculated first, and then the result is multiplied by 2.
3.  **Validation**: The function includes a check to ensure both length and width are non-negative, as negative dimensions are not possible.`,

  solveRectangleArea: `This function calculates the area of a rectangle using the formula **Area = length * width**.

1.  **Inputs**: It requires the \`length\` and \`width\` of the rectangle.
2.  **Formula**: The core logic is a straightforward multiplication of the two dimensions.
3.  **Validation**: It ensures that the provided dimensions are not negative numbers, which is a crucial validation step for geometric calculations.`,

  solveSimpleInterest: `**Simple interest** is a quick method of calculating the interest charge on a loan or principal. It is determined by multiplying the daily interest rate by the principal by the number of days that elapse between payments. The formula is **I = Prt**.

1.  **Inputs**: The function takes the \`Principal\` (P), annual \`rate\` (r), and \`time\` in years (t).
2.  **Rate Conversion**: The annual rate is typically given as a percentage, so it must be divided by 100 in the formula.
3.  **Calculation**: The function directly implements the formula \`(P * r * t) / 100\` and formats the result to two decimal places.`,

  solveCompoundInterest: `**Compound interest** is the interest calculated on the initial principal, which also includes all of the accumulated interest from previous periods. The formula is **A = P(1 + r/n)^(nt)**. For simplicity with annual compounding (n=1), the formula is **A = P(1 + r)^t**.

1.  **Inputs**: The function takes the \`Principal\` (P), annual \`rate\` (r), and \`time\` in years (t).
2.  **Formula**: It uses \`Math.pow()\` to handle the exponentiation. The core calculation is \`P * Math.pow(1 + r/100, t)\`.
3.  **Result**: The function returns the total **Amount** (A), which is the principal plus the accrued interest, formatted to two decimal places.`,

  solveBMICalculator: `The **Body Mass Index (BMI)** is a value derived from the mass (weight) and height of a person. The formula is **BMI = weight / height²**.

1.  **Units**: The standard formula requires weight in **kilograms (kg)** and height in **meters (m)**.
2.  **Inputs**: The function takes the user's weight and height.
3.  **Calculation**: It calculates the square of the height (\`height * height\`) and then divides the weight by this value.
4.  **Formatting**: The resulting BMI value is typically shown to two decimal places for standard interpretation.`,

  solveArrayAverage: `This function calculates the **average** (or mean) of a set of numbers in an array. The average is the sum of all numbers divided by the count of the numbers.

1.  **Summation**: It uses the \`Array.prototype.reduce()\` method to efficiently calculate the sum of all numbers in the array.
2.  **Division**: The total sum is then divided by the number of elements in the array, which is found using \`arr.length\`.
3.  **Edge Case**: The function handles the case of an empty array to avoid division by zero.`,

  solveTriangleArea: `This function calculates the area of a triangle using the standard formula **Area = (base * height) / 2**.

1.  **Inputs**: It requires the \`base\` and perpendicular \`height\` of the triangle.
2.  **Formula**: The core logic multiplies the base and height together and then divides the result by 2.
3.  **Validation**: It includes a check to ensure that the base and height are non-negative values.`,

  solveGCD: `The **Greatest Common Divisor (GCD)** of two integers is the largest positive integer that divides both numbers without leaving a remainder. This function uses the efficient **Euclidean algorithm**.

1.  **The Euclidean Algorithm**: This is a recursive algorithm. The GCD of two numbers \`a\` and \`b\` is the same as the GCD of \`b\` and the remainder of \`a\` divided by \`b\` (\`a % b\`).
2.  **Base Case**: The recursion stops when \`b\` becomes \`0\`. At this point, the GCD is the remaining value of \`a\`.
3.  **Example**: To find GCD(48, 18):
    *   gcd(48, 18) -> gcd(18, 12)
    *   gcd(18, 12) -> gcd(12, 6)
    *   gcd(12, 6) -> gcd(6, 0) -> **Result is 6**`,

  solveLCM: `The **Least Common Multiple (LCM)** of two integers is the smallest positive integer that is divisible by both numbers. The LCM can be calculated efficiently using the GCD with the formula: **LCM(a, b) = (a * b) / GCD(a, b)**.

1.  **GCD First**: The function first needs to calculate the Greatest Common Divisor (GCD) of the two numbers. It uses the same Euclidean algorithm as the GCD solver.
2.  **Formula Application**: Once the GCD is found, it applies the formula by multiplying \`a\` and \`b\` and then dividing the product by their GCD.
3.  **Efficiency**: This method is much more efficient than iterating through multiples of the numbers until a common one is found.`,

  solvePower: `This function calculates the result of a number raised to a certain power (the exponent) using the built-in **Math.pow()** method.

1.  **Inputs**: It takes a \`base\` and an \`exponent\`.
2.  **The \`Math.pow()\` Method**: \`Math.pow(base, exponent)\` computes \`base\` to the power of \`exponent\`.
3.  **Examples**:
    *   \`Math.pow(2, 10)\` calculates 2¹⁰, which is 1024.
    *   \`Math.pow(3, 3)\` calculates 3³, which is 27.`,

  solveSquareRoot: `This function calculates the **square root** of a number using the built-in **Math.sqrt()** method. The square root of a number is a value that, when multiplied by itself, gives the original number.

1.  **Validation**: The function first checks that the input number is non-negative, as the square root of a negative number is not a real number.
2.  **The \`Math.sqrt()\` Method**: This method takes a number and returns its square root.
3.  **Example**: \`Math.sqrt(144)\` returns \`12\`, because 12 * 12 = 144.`,

  solveSphereVolume: `This function calculates the volume of a sphere using its radius. The mathematical formula is **Volume = (4/3) * π * r³**.

1.  **Inputs**: It requires the \`radius\` (r) of the sphere.
2.  **Constants**: It uses the built-in JavaScript constant \`Math.PI\` for Pi.
3.  **Calculation**: It implements the formula by calculating the cube of the radius (\`Math.pow(r, 3)\`) and then multiplying by (4/3) and Pi.
4.  **Formatting**: The result is formatted to two decimal places for readability.`,

  solveSimpleCalculator: `This function acts as a basic calculator that can perform addition, subtraction, multiplication, and division.

1.  **Inputs**: It takes two numbers and an operator (\`+\`, \`-\`, \`*\`, \`/\`) as strings.
2.  **Control Flow**: A \`switch\` statement is used to control which operation to perform based on the operator input.
3.  **Operations**: Each \`case\` in the switch corresponds to an operator and returns the result of the respective mathematical operation.
4.  **Error Handling**: It includes a crucial check for division by zero and a \`default\` case to handle invalid operators.`,
};
