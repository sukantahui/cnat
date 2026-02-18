import{r as s,j as l}from"./index-BFnLuail.js";import{C as d}from"./CProjectAnswerTemplate-CbNrJMld.js";import"./CodeBlock-DH3KhbMR.js";import"./prism-DTsTe1iV.js";import"./prism-json-D0UlpdKh.js";import"./graduation-cap-Dw6O7JgF.js";import"./code-Cpqbp-3A.js";const f=`#include <stdio.h>\r
\r
int add(int a, int b) {\r
    return a + b;\r
}\r
\r
int main() {\r
    int x, y;\r
    printf("Enter a numbers: ");\r
    scanf("%d", &x);\r
    printf("Enter another numbers: ");\r
    scanf("%d",&y);\r
    printf("Sum = %d\\n", add(x, y));\r
    return 0;\r
}\r
`,m=`#include <stdio.h>\r
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
`,g=`#include <stdio.h>\r
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
`,b=`#include <stdio.h>\r
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
`,x=`#include <stdio.h>\r
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
`,h=`#include <stdio.h>\r
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
    if (n <= 1) \r
        return 0;\r
    for (int i = 2; i <= sqrt(n); i++)\r
        if (n % i == 0) \r
            return 0;\r
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
`,E=`#include <stdio.h>\r
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
`,v=`#include <stdio.h>\r
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
`,P=`#include <stdio.h>\r
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
`,F=`#include <stdio.h>\r
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
`,C=`#include <stdio.h>\r
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
`,j=`#include <stdio.h>\r
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
`,k=`#include <stdio.h>\r
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
`,A=`#include <stdio.h>\r
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
`,N=`#include <stdio.h>\r
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
`,B=`#include <stdio.h>\r
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
`,S=`#include <stdio.h>\r
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
`,R=`#include <stdio.h>\r
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
`,L=`#include <stdio.h>\r
#define PI_DEFINE 3.14159\r
\r
int main() {\r
    const double PI_CONST = 3.14159;\r
    double radius, area_const, area_define;\r
    printf("Enter radius: ");\r
    scanf("%lf", &radius);\r
    area_const = PI_CONST * radius * radius;\r
    area_define = PI_DEFINE * radius * radius;\r
    printf("Area (using const) = %f\\n", area_const);\r
    printf("Area (using #define) = %f\\n", area_define);\r
    return 0;\r
}\r
`,W=`#include <stdio.h>\r
\r
int main() {\r
    int a, b = 2;\r
    float f;\r
    printf("Enter an integer: ");\r
    scanf("%d", &a);\r
    printf("Enter a float: ");\r
    scanf("%f", &f);\r
    // Implicit conversion: result of int division stored in float\r
    float implicit = a / b;  // integer division first, then converted to float\r
    printf("Implicit: int / int stored in float: %d/%d = %f\\n", a, b, implicit);\r
    // Explicit cast: force float division\r
    float explicitCast = (float)a / b;\r
    printf("Explicit cast: (float)%d/%d = %f\\n", a, b, explicitCast);\r
    // Cast float to int (truncation)\r
    int casted = (int)f;\r
    printf("Casting float to int: (int)%f = %d\\n", f, casted);\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
\r
int main() {\r
    int a, b;\r
    printf("Enter two numbers: ");\r
    scanf("%d %d", &a, &b);\r
    printf("%d > %d : %d\\n", a, b, a > b);\r
    printf("%d < %d : %d\\n", a, b, a < b);\r
    printf("%d >= %d : %d\\n", a, b, a >= b);\r
    printf("%d <= %d : %d\\n", a, b, a <= b);\r
    printf("%d == %d : %d\\n", a, b, a == b);\r
    printf("%d != %d : %d\\n", a, b, a != b);\r
    return 0;\r
}\r
`,q=`#include <stdio.h>\r
\r
int isLeap(int year) {\r
    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);\r
}\r
\r
int main() {\r
    int year;\r
    printf("Enter year: ");\r
    scanf("%d", &year);\r
    if (isLeap(year))\r
        printf("%d is a leap year.\\n", year);\r
    else\r
        printf("%d is not a leap year.\\n", year);\r
    return 0;\r
}\r
`,z=`#include <stdio.h>\r
\r
int main() {\r
    int x, y;\r
    printf("Initial value: 10\\n");\r
    x = 10;\r
    printf("Enter a number: ");\r
    scanf("%d", &y);\r
    x += y; printf("After += %d: %d\\n", y, x);\r
    x -= y; printf("After -= %d: %d\\n", y, x);\r
    x *= y; printf("After *= %d: %d\\n", y, x);\r
    x /= y; printf("After /= %d: %d\\n", y, x);\r
    x %= y; printf("After %%= %d: %d\\n", y, x);\r
    return 0;\r
}\r
`,G=`#include <stdio.h>\r
\r
int main() {\r
    int x, a, b, c, d;\r
    printf("Enter a number: ");\r
    scanf("%d", &x);\r
    printf("Initial: x = %d\\n", x);\r
    a = ++x;\r
    printf("a = ++x: a = %d, x = %d\\n", a, x);\r
    b = x++;\r
    printf("b = x++: b = %d, x = %d\\n", b, x);\r
    c = --x;\r
    printf("c = --x: c = %d, x = %d\\n", c, x);\r
    d = x--;\r
    printf("d = x--: d = %d, x = %d\\n", d, x);\r
    return 0;\r
}\r
`,U=`#include <stdio.h>\r
\r
int main() {\r
    int i;\r
    float f;\r
    char c;\r
    printf("Enter an integer: ");\r
    scanf("%d", &i);\r
    printf("Enter a float: ");\r
    scanf("%f", &f);\r
    printf("Enter a character: ");\r
    scanf(" %c", &c);  // space before %c to consume newline\r
    printf("You entered: integer = %d, float = %f, character = %c\\n", i, f, c);\r
    return 0;\r
}\r
`,Y=`#include <stdio.h>\r
\r
int main() {\r
    int a, b, c, d, e, result;\r
    printf("Enter a, b, c, d, e: ");\r
    scanf("%d %d %d %d %d", &a, &b, &c, &d, &e);\r
    result = a + b * c - d / e;\r
    printf("Expression: a + b * c - d / e = %d + %d*%d - %d/%d = %d + %d - %d = %d\\n",\r
           a, b, c, d, e, a, b*c, d/e, result);\r
    return 0;\r
}\r
`,Z=`#include <stdio.h>\r
\r
int main() {\r
    int n, i = 1;\r
    printf("Enter N: ");\r
    scanf("%d", &n);\r
    while (i <= n) {\r
        printf("%d ", i);\r
        i++;\r
    }\r
    printf("\\n");\r
    return 0;\r
}\r
`,K=`#include <stdio.h>\r
\r
int main() {\r
    int n, i = 1, sum = 0;\r
    printf("Enter N: ");\r
    scanf("%d", &n);\r
    while (i <= n) {\r
        sum += i;\r
        i++;\r
    }\r
    printf("Sum = %d\\n", sum);\r
    return 0;\r
}\r
`,X=`#include <stdio.h>\r
\r
int main() {\r
    int choice, a, b;\r
    do {\r
        printf("\\n1. Add\\n2. Subtract\\n3. Multiply\\n4. Divide\\n5. Exit\\n");\r
        printf("Enter choice: ");\r
        scanf("%d", &choice);\r
        if (choice >= 1 && choice <= 4) {\r
            printf("Enter two numbers: ");\r
            scanf("%d %d", &a, &b);\r
        }\r
        switch (choice) {\r
            case 1: printf("Result = %d\\n", a + b); break;\r
            case 2: printf("Result = %d\\n", a - b); break;\r
            case 3: printf("Result = %d\\n", a * b); break;\r
            case 4: if (b != 0) printf("Result = %d\\n", a / b);\r
                    else printf("Division by zero!\\n"); break;\r
            case 5: printf("Exiting...\\n"); break;\r
            default: printf("Invalid choice!\\n");\r
        }\r
    } while (choice != 5);\r
    return 0;\r
}\r
`,H=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <time.h>\r
\r
int main() {\r
    int number, guess, attempts = 0;\r
    srand(time(0));\r
    number = rand() % 100 + 1;  // 1 to 100\r
    printf("I have chosen a number between 1 and 100.\\n");\r
    do {\r
        printf("Enter your guess: ");\r
        scanf("%d", &guess);\r
        attempts++;\r
        if (guess < number)\r
            printf("Too low!\\n");\r
        else if (guess > number)\r
            printf("Too high!\\n");\r
        else\r
            printf("Congratulations! You guessed it in %d tries.\\n", attempts);\r
    } while (guess != number);\r
    return 0;\r
}\r
`,Q=`#include <stdio.h>\r
\r
int main() {\r
    int n, i;\r
    printf("Enter a number: ");\r
    scanf("%d", &n);\r
    for (i = 1; i <= 10; i++) {\r
        printf("%d x %d = %d\\n", n, i, n * i);\r
    }\r
    return 0;\r
}\r
`,V=`#include <stdio.h>\r
\r
int main() {\r
    int n, i, sum = 0;\r
    printf("Enter n: ");\r
    scanf("%d", &n);\r
    for (i = 1; i <= n; i++) {\r
        sum += i * i;\r
    }\r
    printf("Sum of squares = %d\\n", sum);\r
    return 0;\r
}\r
`,$=`#include <stdio.h>\r
\r
int main() {\r
    int start, end, i, found = 0;\r
    printf("Enter start and end: ");\r
    scanf("%d %d", &start, &end);\r
    for (i = start; i <= end; i++) {\r
        if (i % 7 == 0 && i % 5 == 0) {\r
            printf("First number divisible by 7 and 5 is %d\\n", i);\r
            found = 1;\r
            break;\r
        }\r
    }\r
    if (!found)\r
        printf("No such number in range.\\n");\r
    return 0;\r
}\r
`,J=`#include <stdio.h>\r
\r
int main() {\r
    int i;\r
    printf("Numbers from 1 to 20 skipping multiples of 3:\\n");\r
    for (i = 1; i <= 20; i++) {\r
        if (i % 3 == 0)\r
            continue;\r
        printf("%d ", i);\r
    }\r
    printf("\\n");\r
    return 0;\r
}\r
`,nn=`#include <stdio.h>\r
\r
int main() {\r
    int rows, i, j;\r
    printf("Enter number of rows: ");\r
    scanf("%d", &rows);\r
    for (i = 1; i <= rows; i++) {\r
        for (j = 1; j <= i; j++) {\r
            printf("*");\r
        }\r
        printf("\\n");\r
    }\r
    return 0;\r
}\r
`,en=`#include <stdio.h>\r
\r
int main() {\r
    int rows, i, j, k;\r
    printf("Enter number of rows: ");\r
    scanf("%d", &rows);\r
    for (i = 1; i <= rows; i++) {\r
        // print spaces\r
        for (j = 1; j <= rows - i; j++)\r
            printf(" ");\r
        // print stars\r
        for (k = 1; k <= 2*i - 1; k++)\r
            printf("*");\r
        printf("\\n");\r
    }\r
    return 0;\r
}\r
`,rn=`#include <stdio.h>\r
\r
int main() {\r
    int n, i, j, k;\r
    printf("Enter number of rows (half): ");\r
    scanf("%d", &n);\r
    // Upper half\r
    for (i = 1; i <= n; i++) {\r
        for (j = 1; j <= n - i; j++) printf(" ");\r
        for (k = 1; k <= 2*i - 1; k++) printf("*");\r
        printf("\\n");\r
    }\r
    // Lower half\r
    for (i = n-1; i >= 1; i--) {\r
        for (j = 1; j <= n - i; j++) printf(" ");\r
        for (k = 1; k <= 2*i - 1; k++) printf("*");\r
        printf("\\n");\r
    }\r
    return 0;\r
}\r
`,tn=`#include <stdio.h>\r
\r
int main() {\r
    int i, j;\r
    printf("Multiplication Table (1-10)\\n");\r
    for (i = 1; i <= 10; i++) {\r
        for (j = 1; j <= 10; j++) {\r
            printf("%4d", i * j);\r
        }\r
        printf("\\n");\r
    }\r
    return 0;\r
}\r
`,an=`#include <stdio.h>\r
\r
int main() {\r
    int x = 10;\r
    printf("While loop with condition false:\\n");\r
    while (x < 10) {\r
        printf("This won't print.\\n");\r
    }\r
    printf("Do-while with same condition:\\n");\r
    do {\r
        printf("This executes once!\\n");\r
    } while (x < 10);\r
    return 0;\r
}\r
`,on=`#include <stdio.h>\r
\r
int main() {\r
    int i, j;\r
    for (i = 1; i <= 3; i++) {\r
        for (j = 1; j <= 3; j++) {\r
            printf("(%d,%d) ", i, j);\r
        }\r
        printf("\\n");\r
    }\r
    return 0;\r
}\r
`,sn=`#include <stdio.h>\r
\r
int main() {\r
    float p, r, t, si;\r
    printf("Enter principal, rate, time: ");\r
    scanf("%f %f %f", &p, &r, &t);\r
    si = (p * r * t) / 100;\r
    printf("Simple Interest = %.2f\\n", si);\r
    return 0;\r
}\r
`,ln=`#include <stdio.h>\r
\r
int main() {\r
    int choice;\r
    float temp, converted;\r
    printf("1. Celsius to Fahrenheit\\n2. Fahrenheit to Celsius\\n");\r
    printf("Enter choice: ");\r
    scanf("%d", &choice);\r
    if (choice == 1) {\r
        printf("Enter temperature in Celsius: ");\r
        scanf("%f", &temp);\r
        converted = (temp * 9/5) + 32;\r
        printf("%.2f C = %.2f F\\n", temp, converted);\r
    } else if (choice == 2) {\r
        printf("Enter temperature in Fahrenheit: ");\r
        scanf("%f", &temp);\r
        converted = (temp - 32) * 5/9;\r
        printf("%.2f F = %.2f C\\n", temp, converted);\r
    } else {\r
        printf("Invalid choice.\\n");\r
    }\r
    return 0;\r
}\r
`,cn=`#include <stdio.h>\r
\r
int main() {\r
    char ch;\r
    for (ch = 'A'; ch <= 'Z'; ch++) {\r
        printf("%c = %d\\n", ch, ch);\r
    }\r
    return 0;\r
}\r
`,pn="C Programming – 50 Projects Covering Fundamentals",un="Computer Science (C Programming)",dn="WBCHSE / CBSE / ISC",fn=["GCC","Clang","VS Code","Code::Blocks"],mn={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},gn=JSON.parse('[{"projectId":"P001","title":"Add Two Numbers","difficulty":"Beginner","description":"Write a function that takes two integers and returns their sum.","exampleText":"Enter two numbers: 5 7","exampleOutput":"Sum = 12","answerFile":"./answers/P001.c","learningOutcome":"Basic function definition, return value.","logicExplanation":"Simple addition: return the sum of two integers.","codeExplanation":"The function `add()` takes two int parameters and returns their sum. In `main()`, the user inputs two numbers, calls the function, and prints the result."},{"projectId":"P002","title":"Subtract Two Numbers","difficulty":"Beginner","description":"Write a function that subtracts the second integer from the first and returns the result.","exampleText":"Enter two numbers: 10 3","exampleOutput":"Difference = 7","answerFile":"./answers/P002.c","learningOutcome":"Function with subtraction.","logicExplanation":"Subtraction: return the difference of two integers.","codeExplanation":"The function `subtract()` takes two ints and returns the result of `a - b`. `main()` handles I/O."},{"projectId":"P003","title":"Multiply Two Numbers","difficulty":"Beginner","description":"Write a function that multiplies two integers and returns the product.","exampleText":"Enter two numbers: 4 6","exampleOutput":"Product = 24","answerFile":"./answers/P003.c","learningOutcome":"Multiplication in function.","logicExplanation":"Multiplication: return the product of two integers.","codeExplanation":"`multiply()` returns `a * b`. `main()` reads two numbers and prints the product."},{"projectId":"P004","title":"Divide Two Numbers (Integer Division)","difficulty":"Beginner","description":"Write a function that divides the first integer by the second (non‑zero) and returns the integer quotient.","exampleText":"Enter two numbers: 15 4","exampleOutput":"Quotient = 3","answerFile":"./answers/P004.c","learningOutcome":"Integer division, handling zero (optional).","logicExplanation":"Integer division: return the quotient of two integers (assuming divisor non‑zero).","codeExplanation":"`divide()` returns `a / b`. `main()` checks for division by zero (optional) and prints the quotient."},{"projectId":"P005","title":"Factorial (Iterative)","difficulty":"Beginner","description":"Write a function to compute the factorial of a non‑negative integer using iteration.","exampleText":"Enter a number: 5","exampleOutput":"Factorial = 120","answerFile":"./answers/P005.c","learningOutcome":"Iterative loops, factorial concept.","logicExplanation":"Factorial of n computed iteratively by multiplying from 1 to n.","codeExplanation":"`factorialIter()` uses a loop to accumulate product. `main()` reads n and prints result."},{"projectId":"P006","title":"Factorial (Recursive)","difficulty":"Beginner","description":"Write a recursive function to compute the factorial of a non‑negative integer.","exampleText":"Enter a number: 5","exampleOutput":"Factorial = 120","answerFile":"./answers/P006.c","learningOutcome":"Recursion, base case.","logicExplanation":"Factorial of n (n!) defined recursively: n! = n * (n-1)! with 0! = 1.","codeExplanation":"`factorialRec()` calls itself with n-1 until base case. `main()` reads n and prints result."},{"projectId":"P007","title":"Check Prime Number","difficulty":"Beginner","description":"Write a function that returns 1 if a number is prime, 0 otherwise.","exampleText":"Enter a number: 17","exampleOutput":"Prime","answerFile":"./answers/P007.c","learningOutcome":"Prime checking, loops, sqrt optimization.","logicExplanation":"A prime number is greater than 1 and divisible only by 1 and itself. Check divisibility up to sqrt(n).","codeExplanation":"`isPrime()` handles numbers <2, then loops from 2 to sqrt(n). Returns 1 if prime, 0 otherwise. `main()` reads a number and prints the result."},{"projectId":"P008","title":"Check Even or Odd","difficulty":"Beginner","description":"Write a function that returns 1 if a number is even, 0 if odd.","exampleText":"Enter a number: 8","exampleOutput":"Even","answerFile":"./answers/P008.c","learningOutcome":"Modulo operator, conditional.","logicExplanation":"An even number is divisible by 2; an odd number is not.","codeExplanation":"`isEven()` returns 1 if number % 2 == 0 else 0. `main()` reads a number and prints \'Even\' or \'Odd\'."},{"projectId":"P009","title":"Maximum of Two Numbers","difficulty":"Beginner","description":"Write a function that returns the larger of two integers.","exampleText":"Enter two numbers: 12 9","exampleOutput":"Maximum = 12","answerFile":"./answers/P009.c","learningOutcome":"Comparison and conditional.","logicExplanation":"Compare two numbers and return the larger one.","codeExplanation":"`max()` returns a if a > b else b. `main()` reads two numbers and prints the maximum."},{"projectId":"P010","title":"Minimum of Two Numbers","difficulty":"Beginner","description":"Write a function that returns the smaller of two integers.","exampleText":"Enter two numbers: 12 9","exampleOutput":"Minimum = 9","answerFile":"./answers/P010.c","learningOutcome":"Comparison and conditional.","logicExplanation":"Compare two numbers and return the smaller one.","codeExplanation":"`min()` returns a if a < b else b. `main()` reads two numbers and prints the minimum."},{"projectId":"P011","title":"Power (Iterative)","difficulty":"Beginner","description":"Write a function to compute base raised to exponent (non‑negative) using iteration.","exampleText":"Enter base and exponent: 2 5","exampleOutput":"2^5 = 32","answerFile":"./answers/P011.c","learningOutcome":"Loop for exponentiation.","logicExplanation":"Compute base raised to exponent by repeated multiplication.","codeExplanation":"`powerIter()` uses a loop to multiply base exponent times. `main()` reads base and exponent and prints result."},{"projectId":"P012","title":"Power (Recursive)","difficulty":"Beginner","description":"Write a recursive function to compute base raised to exponent (non‑negative).","exampleText":"Enter base and exponent: 2 5","exampleOutput":"2^5 = 32","answerFile":"./answers/P012.c","learningOutcome":"Recursion for exponentiation.","logicExplanation":"Recursive power: base^exp = base * base^(exp-1) with base^0 = 1.","codeExplanation":"`powerRec()` calls itself with decreasing exponent. `main()` reads base and exponent and prints result."},{"projectId":"P013","title":"Sum of Digits","difficulty":"Beginner","description":"Write a function that returns the sum of the digits of a positive integer.","exampleText":"Enter a number: 1234","exampleOutput":"Sum of digits = 10","answerFile":"./answers/P013.c","learningOutcome":"Digit extraction using modulo and division.","logicExplanation":"Extract digits by repeatedly taking modulo 10 and dividing by 10, accumulating the sum.","codeExplanation":"`sumOfDigits()` uses a while loop to add last digit and remove it. `main()` reads a number and prints the sum."},{"projectId":"P014","title":"Reverse a Number","difficulty":"Beginner","description":"Write a function that returns the reverse of a given integer.","exampleText":"Enter a number: 1234","exampleOutput":"Reversed number = 4321","answerFile":"./answers/P014.c","learningOutcome":"Building reversed number.","logicExplanation":"Build the reversed number by repeatedly taking the last digit and appending it.","codeExplanation":"`reverseNumber()` uses a loop: rev = rev*10 + digit. `main()` reads a number and prints the reversed number."},{"projectId":"P015","title":"Palindrome Number","difficulty":"Beginner","description":"Write a function that checks if a number is a palindrome (reads the same forwards and backwards).","exampleText":"Enter a number: 1221","exampleOutput":"Palindrome","answerFile":"./answers/P015.c","learningOutcome":"Reversing and comparing.","logicExplanation":"A palindrome reads the same forwards and backwards. Compare the number with its reverse.","codeExplanation":"`isPalindrome()` reverses the number and compares with original. `main()` reads a number and prints whether it\'s a palindrome."},{"projectId":"P016","title":"Fibonacci (Iterative)","difficulty":"Beginner","description":"Write a function to return the nth Fibonacci number using iteration.","exampleText":"Enter n: 6","exampleOutput":"Fibonacci(6) = 8","answerFile":"./answers/P016.c","learningOutcome":"Iterative Fibonacci.","logicExplanation":"Fibonacci computed iteratively using a loop and two variables.","codeExplanation":"`fibIter()` uses a for loop to build the sequence up to n. `main()` reads n and prints the nth Fibonacci number."},{"projectId":"P017","title":"Fibonacci (Recursive)","difficulty":"Beginner","description":"Write a recursive function to return the nth Fibonacci number.","exampleText":"Enter n: 6","exampleOutput":"Fibonacci(6) = 8","answerFile":"./answers/P017.c","learningOutcome":"Recursive Fibonacci.","logicExplanation":"Fibonacci: F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2).","codeExplanation":"`fibRec()` calls itself recursively. `main()` reads n and prints the nth Fibonacci number."},{"projectId":"P018","title":"GCD (Euclidean Algorithm)","difficulty":"Beginner","description":"Write a function to compute the greatest common divisor of two integers using the Euclidean algorithm.","exampleText":"Enter two numbers: 48 18","exampleOutput":"GCD = 6","answerFile":"./answers/P018.c","learningOutcome":"Euclidean algorithm, recursion or loop.","logicExplanation":"Greatest Common Divisor using Euclidean algorithm: GCD(a,b) = GCD(b, a%b).","codeExplanation":"`gcd()` uses recursion or loop to apply the Euclidean algorithm. `main()` reads two numbers and prints their GCD."},{"projectId":"P019","title":"LCM","difficulty":"Beginner","description":"Write a function to compute the least common multiple of two integers.","exampleText":"Enter two numbers: 12 18","exampleOutput":"LCM = 36","answerFile":"./answers/P019.c","learningOutcome":"Relation LCM = a*b / GCD.","logicExplanation":"Least Common Multiple: LCM(a,b) = (a*b) / GCD(a,b).","codeExplanation":"`lcm()` first computes GCD using a helper function, then applies the formula. `main()` reads two numbers and prints LCM."},{"projectId":"P020","title":"Count Digits","difficulty":"Beginner","description":"Write a function that returns the number of digits in a positive integer.","exampleText":"Enter a number: 98765","exampleOutput":"Number of digits = 5","answerFile":"./answers/P020.c","learningOutcome":"Loop to count digits.","logicExplanation":"Count the number of digits in a positive integer by repeatedly dividing by 10.","codeExplanation":"`countDigits()` uses a while loop to divide until zero, counting steps. `main()` reads a number and prints the digit count."},{"projectId":"P021","title":"Armstrong Number","difficulty":"Beginner","description":"Write a function to check if a number is an Armstrong number (sum of its digits each raised to the power of number of digits equals the number).","exampleText":"Enter a number: 153","exampleOutput":"Armstrong","answerFile":"./answers/P021.c","learningOutcome":"Digit extraction, power calculation.","logicExplanation":"An Armstrong number (narcissistic) equals the sum of its digits each raised to the power of the number of digits.","codeExplanation":"`isArmstrong()` counts digits, then computes sum of each digit raised to that power, and compares with original. `main()` reads a number and prints result."},{"projectId":"P022","title":"Perfect Number","difficulty":"Beginner","description":"Write a function to check if a number is perfect (equal to sum of its proper divisors).","exampleText":"Enter a number: 28","exampleOutput":"Perfect","answerFile":"./answers/P022.c","learningOutcome":"Divisor sum.","logicExplanation":"A perfect number equals the sum of its proper divisors (excluding itself).","codeExplanation":"`isPerfect()` loops from 1 to n/2, sums divisors, and checks if sum equals n. `main()` reads a number and prints result."},{"projectId":"P023","title":"Sum of Array Elements","difficulty":"Beginner","description":"Write a function that takes an integer array and its size, and returns the sum of all elements.","exampleText":"Enter size: 5\\nEnter elements: 1 2 3 4 5","exampleOutput":"Sum = 15","answerFile":"./answers/P023.c","learningOutcome":"Array traversal, function with array parameter.","logicExplanation":"Iterate through the array and accumulate the total.","codeExplanation":"`sumArray()` takes an array and its size, uses a for loop to add each element, and returns the sum. `main()` reads array and prints sum."},{"projectId":"P024","title":"Average of Array Elements","difficulty":"Beginner","description":"Write a function that takes an integer array and its size, and returns the average as a float.","exampleText":"Enter size: 5\\nEnter elements: 1 2 3 4 5","exampleOutput":"Average = 3.000000","answerFile":"./answers/P024.c","learningOutcome":"Floating point division, array sum.","logicExplanation":"Compute the average as sum of elements divided by number of elements.","codeExplanation":"`averageArray()` calls sumArray() (or computes sum directly) and divides by n (using float division). `main()` reads array and prints average."},{"projectId":"P025","title":"Linear Search","difficulty":"Beginner","description":"Write a function that searches for a key in an array. Return the index if found, otherwise -1.","exampleText":"Enter size: 6\\nEnter elements: 2 4 6 8 10 12\\nEnter key: 8","exampleOutput":"Key found at index 3","answerFile":"./answers/P025.c","learningOutcome":"Array search, loop, conditional.","logicExplanation":"Search for a key in an array by checking each element sequentially. Return index if found, else -1.","codeExplanation":"`linearSearch()` loops through array, compares each element with key, returns index if found. `main()` reads array and key, prints result."},{"projectId":"P026","title":"Demonstrate Constants (const and #define)","difficulty":"Beginner","description":"Write a program to calculate the area of a circle using PI defined as a constant via const and #define. Show both methods.","exampleText":"Enter radius: 5","exampleOutput":"Area (using const) = 78.539816\\nArea (using #define) = 78.539816","answerFile":"./answers/P026.c","learningOutcome":"Understanding constants in C, const keyword, preprocessor #define.","logicExplanation":"Use both `const` and `#define` to define the constant PI, then compute area of a circle.","codeExplanation":"Two methods: `const double PI = 3.14159;` and `#define PI 3.14159`. The program reads radius, calculates area using both, and prints results."},{"projectId":"P027","title":"Type Conversion (Implicit and Explicit)","difficulty":"Beginner","description":"Demonstrate implicit conversion and explicit casting in C.","exampleText":"Enter an integer: 7\\nEnter a float: 3.14","exampleOutput":"Implicit: int / int stored in float: 7/2 = 3.000000\\nExplicit cast: (float)7/2 = 3.500000\\nCasting float to int: (int)3.14 = 3","answerFile":"./answers/P027.c","learningOutcome":"Implicit type conversion, explicit casting, type promotion.","logicExplanation":"Demonstrate implicit conversion (e.g., int to float in division) and explicit casting (e.g., (float)int).","codeExplanation":"Program shows: implicit conversion when dividing int by int stored in float, and explicit cast to get float division. Also shows truncation when casting float to int."},{"projectId":"P028","title":"Relational Operators – Compare Two Numbers","difficulty":"Beginner","description":"Use all relational operators to compare two integers and print the results (1 for true, 0 for false).","exampleText":"Enter two numbers: 10 20","exampleOutput":"10 > 20 : 0\\n10 < 20 : 1\\n10 >= 20 : 0\\n10 <= 20 : 1\\n10 == 20 : 0\\n10 != 20 : 1","answerFile":"./answers/P028.c","learningOutcome":"Understanding relational operators and their output.","logicExplanation":"Use all relational operators (>, <, >=, <=, ==, !=) to compare two integers and print the results.","codeExplanation":"Read two numbers, then print the result of each relational operation (1 for true, 0 for false)."},{"projectId":"P029","title":"Logical Operators – Leap Year Check","difficulty":"Beginner","description":"Check if a given year is a leap year using logical operators (&&, ||).","exampleText":"Enter year: 2024","exampleOutput":"2024 is a leap year.","answerFile":"./answers/P029.c","learningOutcome":"Combining conditions with logical AND and OR.","logicExplanation":"A year is a leap year if divisible by 400 or (divisible by 4 and not by 100). Use logical && and ||.","codeExplanation":"`isLeap()` returns 1 if year satisfies leap condition. In main, read year and print result."},{"projectId":"P030","title":"Compound Assignment Operators","difficulty":"Beginner","description":"Demonstrate the use of +=, -=, *=, /=, %= on a variable.","exampleText":"Initial value: 10\\nEnter a number: 3","exampleOutput":"After += 3: 13\\nAfter -= 3: 10\\nAfter *= 3: 30\\nAfter /= 3: 10\\nAfter %= 3: 1","answerFile":"./answers/P030.c","learningOutcome":"Understanding compound assignment operators.","logicExplanation":"Demonstrate +=, -=, *=, /=, %= on a variable.","codeExplanation":"Start with a variable, apply each compound operator with a value, and print the result after each step."},{"projectId":"P031","title":"Increment and Decrement Operators (Prefix vs Postfix)","difficulty":"Beginner","description":"Show the difference between prefix and postfix increment/decrement.","exampleText":"Enter a number: 5","exampleOutput":"Initial: x = 5\\na = ++x: a = 6, x = 6\\nb = x++: b = 6, x = 7\\nc = --x: c = 6, x = 6\\nd = x--: d = 6, x = 5","answerFile":"./answers/P031.c","learningOutcome":"Prefix and postfix operators and their side effects.","logicExplanation":"Show difference between prefix (++i) and postfix (i++) increment/decrement.","codeExplanation":"Declare a variable, print its value using prefix and postfix in expressions, and explain the output."},{"projectId":"P032","title":"Formatted Input with scanf – Read Multiple Types","difficulty":"Beginner","description":"Use scanf to read an integer, a float, and a character, then print them back.","exampleText":"Enter an integer: 10\\nEnter a float: 3.14\\nEnter a character: A","exampleOutput":"You entered: integer = 10, float = 3.140000, character = A","answerFile":"./answers/P032.c","learningOutcome":"Using format specifiers with scanf for different data types.","logicExplanation":"Use scanf to read different data types (int, float, char) with appropriate format specifiers.","codeExplanation":"Read an integer, a float, and a character, then print them back using printf with proper format."},{"projectId":"P033","title":"Expression Precedence – Evaluate Complex Expression","difficulty":"Beginner","description":"Evaluate an expression involving multiple operators to understand precedence and associativity.","exampleText":"Enter a, b, c, d, e: 2 3 4 5 6","exampleOutput":"Expression: a + b * c - d / e = 2 + 3*4 - 5/6 = 2 + 12 - 0 = 14","answerFile":"./answers/P033.c","learningOutcome":"Operator precedence and associativity.","logicExplanation":"Evaluate a complex expression involving multiple operators to understand precedence and associativity.","codeExplanation":"Compute an expression like a + b * c - d / e and print the result, explaining the order."},{"projectId":"P034","title":"While Loop – Print Numbers 1 to N","difficulty":"Beginner","description":"Print numbers from 1 to N using a while loop.","exampleText":"Enter N: 5","exampleOutput":"1 2 3 4 5","answerFile":"./answers/P034.c","learningOutcome":"Basic while loop syntax.","logicExplanation":"Use a while loop to print numbers from 1 to N.","codeExplanation":"Initialize counter, while condition, print and increment inside loop."},{"projectId":"P035","title":"While Loop – Sum of First N Natural Numbers","difficulty":"Beginner","description":"Compute the sum of first N natural numbers using a while loop.","exampleText":"Enter N: 5","exampleOutput":"Sum = 15","answerFile":"./answers/P035.c","learningOutcome":"Accumulating sum in a loop.","logicExplanation":"Compute sum of first N natural numbers using a while loop.","codeExplanation":"Accumulate sum in a variable while iterating from 1 to N."},{"projectId":"P036","title":"Do-While Loop – Menu-Driven Calculator","difficulty":"Intermediate","description":"Create a menu-driven calculator that repeats until user chooses exit, using a do-while loop.","exampleText":"1. Add\\n2. Subtract\\n3. Multiply\\n4. Divide\\n5. Exit\\nEnter choice: 1\\nEnter two numbers: 10 5\\nResult = 15","exampleOutput":"Result printed and menu repeats.","answerFile":"./answers/P036.c","learningOutcome":"Do-while loop for menus, switch statement.","logicExplanation":"Present a menu of operations (add, subtract, etc.) and repeat until user chooses exit, using do-while.","codeExplanation":"Display menu, read choice, perform operation using switch, loop while choice != exit."},{"projectId":"P037","title":"Do-While Loop – Guess the Number Game","difficulty":"Intermediate","description":"Generate a random number between 1 and 100, and let the user guess it with hints, using do-while.","exampleText":"Guess the number (1-100): 50\\nToo low!\\nGuess again: 75\\nToo high!\\n...","exampleOutput":"Congratulations! You guessed it in X tries.","answerFile":"./answers/P037.c","learningOutcome":"Random numbers, do-while for at least one iteration.","logicExplanation":"Generate a random number, let user guess, give hints, repeat until correct using do-while.","codeExplanation":"Use rand() to generate number, do-while loop to keep asking, compare guess and give feedback."},{"projectId":"P038","title":"For Loop – Multiplication Table","difficulty":"Beginner","description":"Print the multiplication table of a given number using a for loop.","exampleText":"Enter a number: 7","exampleOutput":"7 x 1 = 7\\n7 x 2 = 14\\n...\\n7 x 10 = 70","answerFile":"./answers/P038.c","learningOutcome":"For loop syntax, formatting output.","logicExplanation":"Print multiplication table of a given number using for loop.","codeExplanation":"Loop from 1 to 10, print number * i."},{"projectId":"P039","title":"For Loop – Sum of Squares Series","difficulty":"Beginner","description":"Compute the sum of squares: 1^2 + 2^2 + ... + n^2 using a for loop.","exampleText":"Enter n: 3","exampleOutput":"Sum of squares = 14","answerFile":"./answers/P039.c","learningOutcome":"Accumulating sum with exponentiation.","logicExplanation":"Compute sum of squares 1^2 + 2^2 + ... + n^2 using for loop.","codeExplanation":"Accumulate i*i in a loop."},{"projectId":"P040","title":"Break in Loop – Find First Number Divisible by 7 and 5","difficulty":"Intermediate","description":"Find the first number in a given range that is divisible by both 7 and 5 using break.","exampleText":"Enter start and end: 1 100","exampleOutput":"First number divisible by 7 and 5 is 35","answerFile":"./answers/P040.c","learningOutcome":"Using break to exit loop early.","logicExplanation":"Find the first number in a range that is divisible by both 7 and 5 using break.","codeExplanation":"Loop from a start to end, check condition, if found print and break."},{"projectId":"P041","title":"Continue in Loop – Skip Multiples of 3","difficulty":"Intermediate","description":"Print numbers from 1 to 20, skipping multiples of 3 using continue.","exampleText":"Numbers from 1 to 20 skipping multiples of 3:","exampleOutput":"1 2 4 5 7 8 10 11 13 14 16 17 19 20","answerFile":"./answers/P041.c","learningOutcome":"Using continue to skip iterations.","logicExplanation":"Print numbers from 1 to 20 skipping multiples of 3 using continue.","codeExplanation":"Loop 1 to 20, if i%3==0 continue, else print."},{"projectId":"P042","title":"Nested Loops – Right-Angled Triangle Pattern","difficulty":"Intermediate","description":"Print a right-angled triangle of stars using nested loops.","exampleText":"Enter number of rows: 5","exampleOutput":"*\\n**\\n***\\n****\\n*****","answerFile":"./answers/P042.c","learningOutcome":"Nested loops for pattern printing.","logicExplanation":"Print a right-angled triangle of stars with nested loops.","codeExplanation":"Outer loop for rows, inner loop for columns, print stars accordingly."},{"projectId":"P043","title":"Nested Loops – Pyramid Pattern","difficulty":"Intermediate","description":"Print a centered pyramid of stars using nested loops.","exampleText":"Enter number of rows: 5","exampleOutput":"    *\\n   ***\\n  *****\\n *******\\n*********","answerFile":"./answers/P043.c","learningOutcome":"Nested loops with spaces and stars.","logicExplanation":"Print a centered pyramid pattern using nested loops.","codeExplanation":"Outer loop for rows, inner loops for spaces and stars."},{"projectId":"P044","title":"Nested Loops – Diamond Pattern","difficulty":"Intermediate","description":"Print a diamond pattern of stars using nested loops.","exampleText":"Enter number of rows (half): 4","exampleOutput":"   *\\n  ***\\n *****\\n*******\\n *****\\n  ***\\n   *","answerFile":"./answers/P044.c","learningOutcome":"Combining two pyramids.","logicExplanation":"Print a diamond pattern using nested loops.","codeExplanation":"Two parts: upper pyramid and lower inverted pyramid."},{"projectId":"P045","title":"Nested Loops – Multiplication Table Grid","difficulty":"Intermediate","description":"Print a 10x10 multiplication table grid using nested loops.","exampleText":"","exampleOutput":"    1   2   3   4   5   6   7   8   9  10\\n    2   4   6   8  10  12  14  16  18  20\\n...","answerFile":"./answers/P045.c","learningOutcome":"Formatted output with nested loops.","logicExplanation":"Print a 10x10 multiplication table grid using nested loops.","codeExplanation":"Outer loop for rows 1-10, inner for columns 1-10, print product formatted."},{"projectId":"P046","title":"While vs Do-While – Demonstrate Difference","difficulty":"Beginner","description":"Show that a do-while loop executes at least once even if the condition is false initially, while a while loop may not execute.","exampleText":"","exampleOutput":"While loop with condition false: (no output)\\nDo-while with same condition: This executes once!","answerFile":"./answers/P046.c","learningOutcome":"Difference between while and do-while.","logicExplanation":"Demonstrate that do-while executes at least once even if condition is false initially.","codeExplanation":"Two loops: while with false condition (no output) and do-while with same condition (executes once)."},{"projectId":"P047","title":"For Loop with Multiple Counters – Nested Pairs","difficulty":"Intermediate","description":"Use nested for loops to print pairs (i, j) for i = 1..3 and j = 1..3.","exampleText":"","exampleOutput":"(1,1) (1,2) (1,3)\\n(2,1) (2,2) (2,3)\\n(3,1) (3,2) (3,3)","answerFile":"./answers/P047.c","learningOutcome":"Nested loops with multiple counters.","logicExplanation":"Use for loop with multiple counters to print pairs (i,j) for i=1..3, j=1..3.","codeExplanation":"Nested for loops, print i and j."},{"projectId":"P048","title":"Simple Interest Calculation","difficulty":"Beginner","description":"Calculate simple interest given principal, rate, and time.","exampleText":"Enter principal, rate, time: 1000 5 2","exampleOutput":"Simple Interest = 100.00","answerFile":"./answers/P048.c","learningOutcome":"Arithmetic expressions and input.","logicExplanation":"Calculate simple interest: SI = (P * R * T) / 100.","codeExplanation":"Read principal, rate, time; compute and print interest."},{"projectId":"P049","title":"Temperature Conversion (C to F and F to C)","difficulty":"Beginner","description":"Convert Celsius to Fahrenheit and Fahrenheit to Celsius using a menu.","exampleText":"1. C to F\\n2. F to C\\nEnter choice: 1\\nEnter temperature in C: 100","exampleOutput":"100.00 C = 212.00 F","answerFile":"./answers/P049.c","learningOutcome":"Menu, arithmetic, and format specifiers.","logicExplanation":"Convert Celsius to Fahrenheit and vice versa using formulas.","codeExplanation":"Menu-driven: choose conversion, read temperature, apply formula, print result."},{"projectId":"P050","title":"Print ASCII Values of Uppercase Letters","difficulty":"Beginner","description":"Print the ASCII values of uppercase letters A to Z using a loop.","exampleText":"","exampleOutput":"A = 65\\nB = 66\\n...\\nZ = 90","answerFile":"./answers/P050.c","learningOutcome":"Characters as integers, for loop.","logicExplanation":"Print ASCII values of uppercase letters A to Z.","codeExplanation":"Loop from \'A\' to \'Z\', print character and its integer value."}]'),c={projectCategory:pn,subject:un,board:dn,class:"XI - XII",tools:fn,institute:mn,projects:gn};function Pn(){const[r,p]=s.useState(null);return s.useEffect(()=>{const t=Object.assign({"./topic0_files/answers/P001.c":f,"./topic0_files/answers/P002.c":m,"./topic0_files/answers/P003.c":g,"./topic0_files/answers/P004.c":b,"./topic0_files/answers/P005.c":x,"./topic0_files/answers/P006.c":h,"./topic0_files/answers/P007.c":w,"./topic0_files/answers/P008.c":_,"./topic0_files/answers/P009.c":E,"./topic0_files/answers/P010.c":v,"./topic0_files/answers/P011.c":P,"./topic0_files/answers/P012.c":y,"./topic0_files/answers/P013.c":O,"./topic0_files/answers/P014.c":I,"./topic0_files/answers/P015.c":F,"./topic0_files/answers/P016.c":C,"./topic0_files/answers/P017.c":j,"./topic0_files/answers/P018.c":T,"./topic0_files/answers/P019.c":k,"./topic0_files/answers/P020.c":A,"./topic0_files/answers/P021.c":N,"./topic0_files/answers/P022.c":D,"./topic0_files/answers/P023.c":B,"./topic0_files/answers/P024.c":S,"./topic0_files/answers/P025.c":R,"./topic0_files/answers/P026.c":L,"./topic0_files/answers/P027.c":W,"./topic0_files/answers/P028.c":M,"./topic0_files/answers/P029.c":q,"./topic0_files/answers/P030.c":z,"./topic0_files/answers/P031.c":G,"./topic0_files/answers/P032.c":U,"./topic0_files/answers/P033.c":Y,"./topic0_files/answers/P034.c":Z,"./topic0_files/answers/P035.c":K,"./topic0_files/answers/P036.c":X,"./topic0_files/answers/P037.c":H,"./topic0_files/answers/P038.c":Q,"./topic0_files/answers/P039.c":V,"./topic0_files/answers/P040.c":$,"./topic0_files/answers/P041.c":J,"./topic0_files/answers/P042.c":nn,"./topic0_files/answers/P043.c":en,"./topic0_files/answers/P044.c":rn,"./topic0_files/answers/P045.c":tn,"./topic0_files/answers/P046.c":an,"./topic0_files/answers/P047.c":on,"./topic0_files/answers/P048.c":sn,"./topic0_files/answers/P049.c":ln,"./topic0_files/answers/P050.c":cn}),i={};Object.keys(t).forEach(n=>{const a=n.split("/").pop();i[a]=t[n]});const u=c.projects.map(n=>{const e=(n.answerFile||"").split("/").pop(),o=i[e];return o||console.warn(`⚠ Missing code file: ${e}`),{...n,answer:o||`// File "${e}" not found in answers folder`}});p({...c,projects:u})},[]),r?l.jsx(d,{data:r}):l.jsx("div",{className:"p-6 text-slate-400",children:"Loading projects..."})}export{Pn as default};
