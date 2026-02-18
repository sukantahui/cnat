import{r as s,j as c}from"./index-BFnLuail.js";import{C as p}from"./CProjectAnswerTemplate-CbNrJMld.js";import"./CodeBlock-DH3KhbMR.js";import"./prism-DTsTe1iV.js";import"./prism-json-D0UlpdKh.js";import"./graduation-cap-Dw6O7JgF.js";import"./code-Cpqbp-3A.js";const m=`#include <stdio.h>\r
\r
int add(int a, int b) {\r
    return a + b;\r
}\r
\r
int main() {\r
    int x, y;\r
    printf("Enter two numbers: ");\r
    scanf("%d %d", &x, &y);\r
    printf("Sum = %d\\n", add(x, y));\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
\r
int subtract(int a, int b) {\r
    return a - b;\r
}\r
\r
int main() {\r
    int x, y;\r
    printf("Enter two numbers: ");\r
    scanf("%d %d", &x, &y);\r
    printf("Difference = %d\\n", subtract(x, y));\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
int multiply(int a, int b) {\r
    return a * b;\r
}\r
\r
int main() {\r
    int x, y;\r
    printf("Enter two numbers: ");\r
    scanf("%d %d", &x, &y);\r
    printf("Product = %d\\n", multiply(x, y));\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
\r
int divide(int a, int b) {\r
    if (b == 0) {\r
        printf("Error: Division by zero\\n");\r
        return 0;\r
    }\r
    return a / b;\r
}\r
\r
int main() {\r
    int x, y;\r
    printf("Enter two numbers: ");\r
    scanf("%d %d", &x, &y);\r
    printf("Quotient = %d\\n", divide(x, y));\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
\r
int factorialIter(int n) {\r
    int fact = 1;\r
    for (int i = 1; i <= n; i++)\r
        fact *= i;\r
    return fact;\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter a number: ");\r
    scanf("%d", &n);\r
    if (n < 0)\r
        printf("Factorial not defined for negative numbers.\\n");\r
    else\r
        printf("Factorial = %d\\n", factorialIter(n));\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
int factorialRec(int n) {\r
    if (n <= 1) return 1;\r
    return n * factorialRec(n - 1);\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter a number: ");\r
    scanf("%d", &n);\r
    if (n < 0)\r
        printf("Factorial not defined for negative numbers.\\n");\r
    else\r
        printf("Factorial = %d\\n", factorialRec(n));\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
#include <math.h>\r
\r
int isPrime(int n) {\r
    if (n <= 1) return 0;\r
    for (int i = 2; i <= sqrt(n); i++)\r
        if (n % i == 0) return 0;\r
    return 1;\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter a number: ");\r
    scanf("%d", &n);\r
    if (isPrime(n))\r
        printf("Prime\\n");\r
    else\r
        printf("Not Prime\\n");\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
int isEven(int n) {\r
    return n % 2 == 0;\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter a number: ");\r
    scanf("%d", &n);\r
    if (isEven(n))\r
        printf("Even\\n");\r
    else\r
        printf("Odd\\n");\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
\r
int max(int a, int b) {\r
    return (a > b) ? a : b;\r
}\r
\r
int main() {\r
    int x, y;\r
    printf("Enter two numbers: ");\r
    scanf("%d %d", &x, &y);\r
    printf("Maximum = %d\\n", max(x, y));\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
\r
int min(int a, int b) {\r
    return (a < b) ? a : b;\r
}\r
\r
int main() {\r
    int x, y;\r
    printf("Enter two numbers: ");\r
    scanf("%d %d", &x, &y);\r
    printf("Minimum = %d\\n", min(x, y));\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
\r
int powerIter(int base, int exp) {\r
    int result = 1;\r
    for (int i = 0; i < exp; i++)\r
        result *= base;\r
    return result;\r
}\r
\r
int main() {\r
    int b, e;\r
    printf("Enter base and exponent: ");\r
    scanf("%d %d", &b, &e);\r
    printf("%d^%d = %d\\n", b, e, powerIter(b, e));\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
int powerRec(int base, int exp) {\r
    if (exp == 0) return 1;\r
    return base * powerRec(base, exp - 1);\r
}\r
\r
int main() {\r
    int b, e;\r
    printf("Enter base and exponent: ");\r
    scanf("%d %d", &b, &e);\r
    printf("%d^%d = %d\\n", b, e, powerRec(b, e));\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
\r
int sumOfDigits(int n) {\r
    int sum = 0;\r
    while (n != 0) {\r
        sum += n % 10;\r
        n /= 10;\r
    }\r
    return sum;\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter a number: ");\r
    scanf("%d", &n);\r
    printf("Sum of digits = %d\\n", sumOfDigits(n));\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
\r
int reverseNumber(int n) {\r
    int rev = 0;\r
    while (n != 0) {\r
        rev = rev * 10 + n % 10;\r
        n /= 10;\r
    }\r
    return rev;\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter a number: ");\r
    scanf("%d", &n);\r
    printf("Reversed number = %d\\n", reverseNumber(n));\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
int reverseNumber(int n) {\r
    int rev = 0;\r
    while (n != 0) {\r
        rev = rev * 10 + n % 10;\r
        n /= 10;\r
    }\r
    return rev;\r
}\r
\r
int isPalindrome(int n) {\r
    return n == reverseNumber(n);\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter a number: ");\r
    scanf("%d", &n);\r
    if (isPalindrome(n))\r
        printf("Palindrome\\n");\r
    else\r
        printf("Not Palindrome\\n");\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
\r
int fibIter(int n) {\r
    if (n <= 1) return n;\r
    int a = 0, b = 1, c;\r
    for (int i = 2; i <= n; i++) {\r
        c = a + b;\r
        a = b;\r
        b = c;\r
    }\r
    return b;\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter n: ");\r
    scanf("%d", &n);\r
    printf("Fibonacci(%d) = %d\\n", n, fibIter(n));\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
int fibRec(int n) {\r
    if (n <= 1) return n;\r
    return fibRec(n-1) + fibRec(n-2);\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter n: ");\r
    scanf("%d", &n);\r
    printf("Fibonacci(%d) = %d\\n", n, fibRec(n));\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
int gcd(int a, int b) {\r
    while (b != 0) {\r
        int temp = b;\r
        b = a % b;\r
        a = temp;\r
    }\r
    return a;\r
}\r
\r
int main() {\r
    int a, b;\r
    printf("Enter two numbers: ");\r
    scanf("%d %d", &a, &b);\r
    printf("GCD = %d\\n", gcd(a, b));\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
\r
int gcd(int a, int b) {\r
    while (b != 0) {\r
        int temp = b;\r
        b = a % b;\r
        a = temp;\r
    }\r
    return a;\r
}\r
\r
int lcm(int a, int b) {\r
    return (a / gcd(a, b)) * b;  // to avoid overflow, divide first\r
}\r
\r
int main() {\r
    int a, b;\r
    printf("Enter two numbers: ");\r
    scanf("%d %d", &a, &b);\r
    printf("LCM = %d\\n", lcm(a, b));\r
    return 0;\r
}\r
`,B=`#include <stdio.h>\r
\r
int countDigits(int n) {\r
    if (n == 0) return 1;  // special case: 0 has 1 digit\r
    int count = 0;\r
    while (n != 0) {\r
        count++;\r
        n /= 10;\r
    }\r
    return count;\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter a number: ");\r
    scanf("%d", &n);\r
    printf("Number of digits = %d\\n", countDigits(n));\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
#include <math.h>\r
\r
int countDigits(int n) {\r
    int count = 0;\r
    while (n != 0) {\r
        count++;\r
        n /= 10;\r
    }\r
    return count;\r
}\r
\r
int isArmstrong(int n) {\r
    int original = n, sum = 0, digits = countDigits(n);\r
    while (n != 0) {\r
        int d = n % 10;\r
        sum += pow(d, digits);\r
        n /= 10;\r
    }\r
    return sum == original;\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter a number: ");\r
    scanf("%d", &n);\r
    if (isArmstrong(n))\r
        printf("Armstrong\\n");\r
    else\r
        printf("Not Armstrong\\n");\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
\r
int isPerfect(int n) {\r
    int sum = 0;\r
    for (int i = 1; i <= n/2; i++)\r
        if (n % i == 0) sum += i;\r
    return sum == n && n != 0;\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter a number: ");\r
    scanf("%d", &n);\r
    if (isPerfect(n))\r
        printf("Perfect\\n");\r
    else\r
        printf("Not Perfect\\n");\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
\r
int sumArray(int arr[], int n) {\r
    int sum = 0;\r
    for (int i = 0; i < n; i++)\r
        sum += arr[i];\r
    return sum;\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter size: ");\r
    scanf("%d", &n);\r
    int arr[n];\r
    printf("Enter elements: ");\r
    for (int i = 0; i < n; i++)\r
        scanf("%d", &arr[i]);\r
    printf("Sum = %d\\n", sumArray(arr, n));\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
\r
float averageArray(int arr[], int n) {\r
    int sum = 0;\r
    for (int i = 0; i < n; i++)\r
        sum += arr[i];\r
    return (float)sum / n;\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter size: ");\r
    scanf("%d", &n);\r
    int arr[n];\r
    printf("Enter elements: ");\r
    for (int i = 0; i < n; i++)\r
        scanf("%d", &arr[i]);\r
    printf("Average = %f\\n", averageArray(arr, n));\r
    return 0;\r
}\r
`,W=`#include <stdio.h>\r
\r
int linearSearch(int arr[], int n, int key) {\r
    for (int i = 0; i < n; i++)\r
        if (arr[i] == key) return i;\r
    return -1;\r
}\r
\r
int main() {\r
    int n, key;\r
    printf("Enter size: ");\r
    scanf("%d", &n);\r
    int arr[n];\r
    printf("Enter elements: ");\r
    for (int i = 0; i < n; i++)\r
        scanf("%d", &arr[i]);\r
    printf("Enter key: ");\r
    scanf("%d", &key);\r
    int index = linearSearch(arr, n, key);\r
    if (index != -1)\r
        printf("Key found at index %d\\n", index);\r
    else\r
        printf("Key not found\\n");\r
    return 0;\r
}\r
`,S="C Programming – 25 Basic Function Projects",M="Computer Science (C Programming)",z="WBCHSE / CBSE / ISC",q=["GCC","Turbo C","VS Code","Code::Blocks"],G={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},L=JSON.parse('[{"projectId":"F001","title":"Add Two Numbers","difficulty":"Beginner","description":"Write a function that takes two integers and returns their sum.","exampleText":"Enter two numbers: 5 7","exampleOutput":"Sum = 12","answerFile":"./answers/F001.c","learningOutcome":"Basic function definition, return value.","logicExplanation":"Simple addition: return the sum of two integers.","codeExplanation":"The function `add()` takes two int parameters and returns their sum. In `main()`, the user inputs two numbers, calls the function, and prints the result."},{"projectId":"F002","title":"Subtract Two Numbers","difficulty":"Beginner","description":"Write a function that subtracts the second integer from the first and returns the result.","exampleText":"Enter two numbers: 10 3","exampleOutput":"Difference = 7","answerFile":"./answers/F002.c","learningOutcome":"Function with subtraction.","logicExplanation":"Subtraction: return the difference of two integers.","codeExplanation":"The function `subtract()` takes two ints and returns the result of `a - b`. `main()` handles I/O."},{"projectId":"F003","title":"Multiply Two Numbers","difficulty":"Beginner","description":"Write a function that multiplies two integers and returns the product.","exampleText":"Enter two numbers: 4 6","exampleOutput":"Product = 24","answerFile":"./answers/F003.c","learningOutcome":"Multiplication in function.","logicExplanation":"Multiplication: return the product of two integers.","codeExplanation":"`multiply()` returns `a * b`. `main()` reads two numbers and prints the product."},{"projectId":"F004","title":"Divide Two Numbers (Integer Division)","difficulty":"Beginner","description":"Write a function that divides the first integer by the second (non‑zero) and returns the integer quotient.","exampleText":"Enter two numbers: 15 4","exampleOutput":"Quotient = 3","answerFile":"./answers/F004.c","learningOutcome":"Integer division, handling zero (optional).","logicExplanation":"Integer division: return the quotient of two integers (assuming divisor non‑zero).","codeExplanation":"`divide()` returns `a / b`. `main()` checks for division by zero (optional) and prints the quotient."},{"projectId":"F005","title":"Factorial (Iterative)","difficulty":"Beginner","description":"Write a function to compute the factorial of a non‑negative integer using iteration.","exampleText":"Enter a number: 5","exampleOutput":"Factorial = 120","answerFile":"./answers/F005.c","learningOutcome":"Iterative loops, factorial concept.","logicExplanation":"Factorial of n computed iteratively by multiplying from 1 to n.","codeExplanation":"`factorialIter()` uses a loop to accumulate product. `main()` reads n and prints result."},{"projectId":"F006","title":"Factorial (Recursive)","difficulty":"Beginner","description":"Write a recursive function to compute the factorial of a non‑negative integer.","exampleText":"Enter a number: 5","exampleOutput":"Factorial = 120","answerFile":"./answers/F006.c","learningOutcome":"Recursion, base case.","logicExplanation":"Factorial of n (n!) defined recursively: n! = n * (n-1)! with 0! = 1.","codeExplanation":"`factorialRec()` calls itself with n-1 until base case. `main()` reads n and prints result."},{"projectId":"F007","title":"Check Prime Number","difficulty":"Beginner","description":"Write a function that returns 1 if a number is prime, 0 otherwise.","exampleText":"Enter a number: 17","exampleOutput":"Prime","answerFile":"./answers/F007.c","learningOutcome":"Prime checking, loops, sqrt optimization.","logicExplanation":"A prime number is greater than 1 and divisible only by 1 and itself. Check divisibility up to sqrt(n).","codeExplanation":"`isPrime()` handles numbers <2, then loops from 2 to sqrt(n). Returns 1 if prime, 0 otherwise. `main()` reads a number and prints the result."},{"projectId":"F008","title":"Check Even or Odd","difficulty":"Beginner","description":"Write a function that returns 1 if a number is even, 0 if odd.","exampleText":"Enter a number: 8","exampleOutput":"Even","answerFile":"./answers/F008.c","learningOutcome":"Modulo operator, conditional.","logicExplanation":"Standard algorithm for Check Even or Odd.","codeExplanation":"The C code implements Check Even or Odd as described in the example."},{"projectId":"F009","title":"Maximum of Two Numbers","difficulty":"Beginner","description":"Write a function that returns the larger of two integers.","exampleText":"Enter two numbers: 12 9","exampleOutput":"Maximum = 12","answerFile":"./answers/F009.c","learningOutcome":"Comparison and conditional.","logicExplanation":"Compare two numbers and return the larger one.","codeExplanation":"`max()` returns a if a > b else b. `main()` reads two numbers and prints the maximum."},{"projectId":"F010","title":"Minimum of Two Numbers","difficulty":"Beginner","description":"Write a function that returns the smaller of two integers.","exampleText":"Enter two numbers: 12 9","exampleOutput":"Minimum = 9","answerFile":"./answers/F010.c","learningOutcome":"Comparison and conditional.","logicExplanation":"Compare two numbers and return the smaller one.","codeExplanation":"`min()` returns a if a < b else b. `main()` reads two numbers and prints the minimum."},{"projectId":"F011","title":"Power (Iterative)","difficulty":"Beginner","description":"Write a function to compute base raised to exponent (non‑negative) using iteration.","exampleText":"Enter base and exponent: 2 5","exampleOutput":"2^5 = 32","answerFile":"./answers/F011.c","learningOutcome":"Loop for exponentiation.","logicExplanation":"Compute base raised to exponent by repeated multiplication.","codeExplanation":"`powerIter()` uses a loop to multiply base exponent times. `main()` reads base and exponent and prints result."},{"projectId":"F012","title":"Power (Recursive)","difficulty":"Beginner","description":"Write a recursive function to compute base raised to exponent (non‑negative).","exampleText":"Enter base and exponent: 2 5","exampleOutput":"2^5 = 32","answerFile":"./answers/F012.c","learningOutcome":"Recursion for exponentiation.","logicExplanation":"Recursive power: base^exp = base * base^(exp-1) with base^0 = 1.","codeExplanation":"`powerRec()` calls itself with decreasing exponent. `main()` reads base and exponent and prints result."},{"projectId":"F013","title":"Sum of Digits","difficulty":"Beginner","description":"Write a function that returns the sum of the digits of a positive integer.","exampleText":"Enter a number: 1234","exampleOutput":"Sum of digits = 10","answerFile":"./answers/F013.c","learningOutcome":"Digit extraction using modulo and division.","logicExplanation":"Extract digits by repeatedly taking modulo 10 and dividing by 10, accumulating the sum.","codeExplanation":"`sumOfDigits()` uses a while loop to add last digit and remove it. `main()` reads a number and prints the sum."},{"projectId":"F014","title":"Reverse a Number","difficulty":"Beginner","description":"Write a function that returns the reverse of a given integer.","exampleText":"Enter a number: 1234","exampleOutput":"Reversed number = 4321","answerFile":"./answers/F014.c","learningOutcome":"Building reversed number.","logicExplanation":"Build the reversed number by repeatedly taking the last digit and appending it.","codeExplanation":"`reverseNumber()` uses a loop: rev = rev*10 + digit. `main()` reads a number and prints the reversed number."},{"projectId":"F015","title":"Palindrome Number","difficulty":"Beginner","description":"Write a function that checks if a number is a palindrome (reads the same forwards and backwards).","exampleText":"Enter a number: 1221","exampleOutput":"Palindrome","answerFile":"./answers/F015.c","learningOutcome":"Reversing and comparing.","logicExplanation":"A palindrome reads the same forwards and backwards. Compare the number with its reverse.","codeExplanation":"`isPalindrome()` reverses the number and compares with original. `main()` reads a number and prints whether it\'s a palindrome."},{"projectId":"F016","title":"Fibonacci (Iterative)","difficulty":"Beginner","description":"Write a function to return the nth Fibonacci number using iteration.","exampleText":"Enter n: 6","exampleOutput":"Fibonacci(6) = 8","answerFile":"./answers/F016.c","learningOutcome":"Iterative Fibonacci.","logicExplanation":"Fibonacci computed iteratively using a loop and two variables.","codeExplanation":"`fibIter()` uses a for loop to build the sequence up to n. `main()` reads n and prints the nth Fibonacci number."},{"projectId":"F017","title":"Fibonacci (Recursive)","difficulty":"Beginner","description":"Write a recursive function to return the nth Fibonacci number.","exampleText":"Enter n: 6","exampleOutput":"Fibonacci(6) = 8","answerFile":"./answers/F017.c","learningOutcome":"Recursive Fibonacci.","logicExplanation":"Fibonacci: F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2).","codeExplanation":"`fibRec()` calls itself recursively. `main()` reads n and prints the nth Fibonacci number."},{"projectId":"F018","title":"GCD (Euclidean Algorithm)","difficulty":"Beginner","description":"Write a function to compute the greatest common divisor of two integers using the Euclidean algorithm.","exampleText":"Enter two numbers: 48 18","exampleOutput":"GCD = 6","answerFile":"./answers/F018.c","learningOutcome":"Euclidean algorithm, recursion or loop.","logicExplanation":"Greatest Common Divisor using Euclidean algorithm: GCD(a,b) = GCD(b, a%b).","codeExplanation":"`gcd()` uses recursion or loop to apply the Euclidean algorithm. `main()` reads two numbers and prints their GCD."},{"projectId":"F019","title":"LCM","difficulty":"Beginner","description":"Write a function to compute the least common multiple of two integers.","exampleText":"Enter two numbers: 12 18","exampleOutput":"LCM = 36","answerFile":"./answers/F019.c","learningOutcome":"Relation LCM = a*b / GCD.","logicExplanation":"Least Common Multiple: LCM(a,b) = (a*b) / GCD(a,b).","codeExplanation":"`lcm()` first computes GCD using a helper function, then applies the formula. `main()` reads two numbers and prints LCM."},{"projectId":"F020","title":"Count Digits","difficulty":"Beginner","description":"Write a function that returns the number of digits in a positive integer.","exampleText":"Enter a number: 98765","exampleOutput":"Number of digits = 5","answerFile":"./answers/F020.c","learningOutcome":"Loop to count digits.","logicExplanation":"Count the number of digits in a positive integer by repeatedly dividing by 10.","codeExplanation":"`countDigits()` uses a while loop to divide until zero, counting steps. `main()` reads a number and prints the digit count."},{"projectId":"F021","title":"Armstrong Number","difficulty":"Beginner","description":"Write a function to check if a number is an Armstrong number (sum of its digits each raised to the power of number of digits equals the number).","exampleText":"Enter a number: 153","exampleOutput":"Armstrong","answerFile":"./answers/F021.c","learningOutcome":"Digit extraction, power calculation.","logicExplanation":"An Armstrong number (narcissistic) equals the sum of its digits each raised to the power of the number of digits.","codeExplanation":"`isArmstrong()` counts digits, then computes sum of each digit raised to that power, and compares with original. `main()` reads a number and prints result."},{"projectId":"F022","title":"Perfect Number","difficulty":"Beginner","description":"Write a function to check if a number is perfect (equal to sum of its proper divisors).","exampleText":"Enter a number: 28","exampleOutput":"Perfect","answerFile":"./answers/F022.c","learningOutcome":"Divisor sum.","logicExplanation":"A perfect number equals the sum of its proper divisors (excluding itself).","codeExplanation":"`isPerfect()` loops from 1 to n/2, sums divisors, and checks if sum equals n. `main()` reads a number and prints result."},{"projectId":"F023","title":"Sum of Array Elements","difficulty":"Beginner","description":"Write a function that takes an integer array and its size, and returns the sum of all elements.","exampleText":"Enter size: 5\\nEnter elements: 1 2 3 4 5","exampleOutput":"Sum = 15","answerFile":"./answers/F023.c","learningOutcome":"Array traversal, function with array parameter.","logicExplanation":"Iterate through the array and accumulate the total.","codeExplanation":"`sumArray()` takes an array and its size, uses a for loop to add each element, and returns the sum. `main()` reads array and prints sum."},{"projectId":"F024","title":"Average of Array Elements","difficulty":"Beginner","description":"Write a function that takes an integer array and its size, and returns the average as a float.","exampleText":"Enter size: 5\\nEnter elements: 1 2 3 4 5","exampleOutput":"Average = 3.000000","answerFile":"./answers/F024.c","learningOutcome":"Floating point division, array sum.","logicExplanation":"Compute the average as sum of elements divided by number of elements.","codeExplanation":"`averageArray()` calls sumArray() (or computes sum directly) and divides by n (using float division). `main()` reads array and prints average."},{"projectId":"F025","title":"Linear Search","difficulty":"Beginner","description":"Write a function that searches for a key in an array. Return the index if found, otherwise -1.","exampleText":"Enter size: 6\\nEnter elements: 2 4 6 8 10 12\\nEnter key: 8","exampleOutput":"Key found at index 3","answerFile":"./answers/F025.c","learningOutcome":"Array search, loop, conditional.","logicExplanation":"Search for a key in an array by checking each element sequentially. Return index if found, else -1.","codeExplanation":"`linearSearch()` loops through array, compares each element with key, returns index if found. `main()` reads array and key, prints result."}]'),u={projectCategory:S,subject:M,board:z,class:"XI - XII",tools:q,institute:G,projects:L};function U(){const[e,l]=s.useState(null);return s.useEffect(()=>{const t=Object.assign({"./topic59_files/answers/F001.c":m,"./topic59_files/answers/F002.c":f,"./topic59_files/answers/F003.c":b,"./topic59_files/answers/F004.c":g,"./topic59_files/answers/F005.c":h,"./topic59_files/answers/F006.c":x,"./topic59_files/answers/F007.c":w,"./topic59_files/answers/F008.c":_,"./topic59_files/answers/F009.c":F,"./topic59_files/answers/F010.c":E,"./topic59_files/answers/F011.c":v,"./topic59_files/answers/F012.c":y,"./topic59_files/answers/F013.c":O,"./topic59_files/answers/F014.c":I,"./topic59_files/answers/F015.c":C,"./topic59_files/answers/F016.c":j,"./topic59_files/answers/F017.c":k,"./topic59_files/answers/F018.c":T,"./topic59_files/answers/F019.c":P,"./topic59_files/answers/F020.c":B,"./topic59_files/answers/F021.c":A,"./topic59_files/answers/F022.c":D,"./topic59_files/answers/F023.c":R,"./topic59_files/answers/F024.c":N,"./topic59_files/answers/F025.c":W}),i={};Object.keys(t).forEach(n=>{const a=n.split("/").pop();i[a]=t[n]});const d=u.projects.map(n=>{const r=(n.answerFile||"").split("/").pop(),o=i[r];return o||console.warn(`⚠ Missing code file: ${r}`),{...n,answer:o||`// File "${r}" not found in answers folder`}});l({...u,projects:d})},[]),e?c.jsx(p,{data:e}):c.jsx("div",{className:"p-6 text-slate-400",children:"Loading projects..."})}export{U as default};
