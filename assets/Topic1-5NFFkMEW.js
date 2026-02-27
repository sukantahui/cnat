import{r as s,j as l}from"./index-meFSU1Lv.js";import{C as u}from"./CProjectAnswerTemplate-DvJ3iG35.js";import"./CodeBlock-CjWqBd4d.js";import"./prism-sFrOkMqg.js";import"./prism-json-D0UlpdKh.js";import"./graduation-cap-SXc48Otp.js";import"./code-OS9Fi-JJ.js";const f=`#include <stdio.h>\r
\r
int main() {\r
    // This is a single-line comment\r
    /* This is a\r
       multi-line comment */\r
    printf("Hello, World!\\n");\r
    return 0; // Indicates successful execution\r
}\r
`,m=`#include <stdio.h>\r
\r
int main() {\r
    int i = 10;\r
    float f = 3.14f;\r
    double d = 2.71828;\r
    char c = 'A';\r
\r
    printf("Integer: %d\\n", i);\r
    printf("Float: %f\\n", f);\r
    printf("Double: %lf\\n", d);\r
    printf("Character: %c\\n", c);\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
#define PI_DEFINE 3.14159\r
\r
int main() {\r
    const double PI_CONST = 3.14159;\r
    double radius, area_const, circ_const, area_define, circ_define;\r
\r
    printf("Enter radius: ");\r
    scanf("%lf", &radius);\r
\r
    area_const = PI_CONST * radius * radius;\r
    circ_const = 2 * PI_CONST * radius;\r
\r
    area_define = PI_DEFINE * radius * radius;\r
    circ_define = 2 * PI_DEFINE * radius;\r
\r
    printf("Area (using const): %f\\n", area_const);\r
    printf("Circumference (using const): %f\\n", circ_const);\r
    printf("Area (using #define): %f\\n", area_define);\r
    printf("Circumference (using #define): %f\\n", circ_define);\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
\r
int main() {\r
    int a, b;\r
    printf("Enter two integers: ");\r
    scanf("%d %d", &a, &b);\r
    printf("%d + %d = %d\\n", a, b, a + b);\r
    printf("%d - %d = %d\\n", a, b, a - b);\r
    printf("%d * %d = %d\\n", a, b, a * b);\r
    if (b != 0) {\r
        printf("%d / %d = %d\\n", a, b, a / b);\r
        printf("%d %% %d = %d\\n", a, b, a % b);\r
    } else {\r
        printf("Division and modulus by zero are not allowed.\\n");\r
    }\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
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
`,w=`#include <stdio.h>\r
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
`,_=`#include <stdio.h>\r
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
`,h=`#include <stdio.h>\r
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
`,P=`#include <stdio.h>\r
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
`,E=`#include <stdio.h>\r
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
`,v=`#include <stdio.h>\r
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
`,y=`#include <stdio.h>\r
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
`,I=`#include <stdio.h>\r
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
`,O=`#include <stdio.h>\r
\r
int main() {\r
    int n, i = 1, fact = 1;\r
    printf("Enter a non-negative integer: ");\r
    scanf("%d", &n);\r
    if (n < 0) {\r
        printf("Factorial not defined for negative numbers.\\n");\r
        return 1;\r
    }\r
    while (i <= n) {\r
        fact *= i;\r
        i++;\r
    }\r
    printf("Factorial = %d\\n", fact);\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
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
`,F=`#include <stdio.h>\r
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
`,j=`#include <stdio.h>\r
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
`,N=`#include <stdio.h>\r
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
`,T=`#include <stdio.h>\r
\r
int main() {\r
    int n, i, fact = 1;\r
    printf("Enter a non-negative integer: ");\r
    scanf("%d", &n);\r
    if (n < 0) {\r
        printf("Factorial not defined for negative numbers.\\n");\r
        return 1;\r
    }\r
    for (i = 1; i <= n; i++) {\r
        fact *= i;\r
    }\r
    printf("Factorial = %d\\n", fact);\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
int main() {\r
    int n, i, a = 0, b = 1, next;\r
    printf("Enter number of terms: ");\r
    scanf("%d", &n);\r
    if (n <= 0) {\r
        printf("Please enter a positive integer.\\n");\r
        return 1;\r
    }\r
    printf("Fibonacci series: ");\r
    for (i = 1; i <= n; i++) {\r
        printf("%d ", a);\r
        next = a + b;\r
        a = b;\r
        b = next;\r
    }\r
    printf("\\n");\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
\r
int main() {\r
    int start, end, i, found = 0;\r
    printf("Enter start and end: ");\r
    scanf("%d %d", &start, &end);\r
    for (i = start; i <= end; i++) {\r
        if (i % 5 == 0 && i % 7 == 0) {\r
            printf("First number divisible by 5 and 7 is %d\\n", i);\r
            found = 1;\r
            break;\r
        }\r
    }\r
    if (!found)\r
        printf("No such number in range.\\n");\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
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
`,A=`#include <stdio.h>\r
#include <math.h>\r
\r
int isPrime(int n) {\r
    if (n <= 1) return 0;\r
    for (int i = 2; i <= sqrt(n); i++) {\r
        if (n % i == 0) return 0;\r
    }\r
    return 1;\r
}\r
\r
int main() {\r
    int n;\r
    printf("Enter a number: ");\r
    scanf("%d", &n);\r
    if (isPrime(n))\r
        printf("%d is a prime number.\\n", n);\r
    else\r
        printf("%d is not a prime number.\\n", n);\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
#include <math.h>\r
\r
int isPrime(int n) {\r
    if (n <= 1) return 0;\r
    for (int i = 2; i <= sqrt(n); i++) {\r
        if (n % i == 0) return 0;\r
    }\r
    return 1;\r
}\r
\r
int main() {\r
    int low, high, i;\r
    printf("Enter lower and upper limits: ");\r
    scanf("%d %d", &low, &high);\r
    printf("Prime numbers between %d and %d: ", low, high);\r
    for (i = low; i <= high; i++) {\r
        if (isPrime(i))\r
            printf("%d ", i);\r
    }\r
    printf("\\n");\r
    return 0;\r
}\r
`,L=`#include <stdio.h>\r
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
`,B=`#include <stdio.h>\r
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
    return (a / gcd(a, b)) * b; // divide first to avoid overflow\r
}\r
\r
int main() {\r
    int a, b;\r
    printf("Enter two numbers: ");\r
    scanf("%d %d", &a, &b);\r
    printf("LCM = %d\\n", lcm(a, b));\r
    return 0;\r
}\r
`,U=`#include <stdio.h>\r
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
`,G=`#include <stdio.h>\r
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
`,M=`#include <stdio.h>\r
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
`,q=`#include <stdio.h>\r
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
`,W=`#include <stdio.h>\r
\r
int isPerfect(int n) {\r
    if (n <= 1) return 0;\r
    int sum = 0;\r
    for (int i = 1; i <= n/2; i++) {\r
        if (n % i == 0) sum += i;\r
    }\r
    return sum == n;\r
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
`,z=`#include <stdio.h>\r
\r
int countDigits(int n) {\r
    if (n == 0) return 1;\r
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
`,H=`#include <stdio.h>\r
\r
int powerIter(int base, int exp) {\r
    int result = 1;\r
    for (int i = 0; i < exp; i++) {\r
        result *= base;\r
    }\r
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
`,X=`#include <stdio.h>\r
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
`,Y=`#include <stdio.h>\r
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
`,V=`#include <stdio.h>\r
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
`,$=`#include <stdio.h>\r
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
`,J=`#include <stdio.h>\r
\r
int main() {\r
    int rows, i, j;\r
    printf("Enter number of rows: ");\r
    scanf("%d", &rows);\r
    for (i = rows; i >= 1; i--) {\r
        for (j = 1; j <= i; j++) {\r
            printf("*");\r
        }\r
        printf("\\n");\r
    }\r
    return 0;\r
}\r
`,K=`#include <stdio.h>\r
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
`,Q=`#include <stdio.h>\r
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
`,Z=`#include <stdio.h>\r
\r
int main() {\r
    int rows, i, j;\r
    printf("Enter number of rows: ");\r
    scanf("%d", &rows);\r
    for (i = 1; i <= rows; i++) {\r
        for (j = 1; j <= i; j++) {\r
            printf("%d", j);\r
        }\r
        printf("\\n");\r
    }\r
    return 0;\r
}\r
`,nn=`#include <stdio.h>\r
\r
int main() {\r
    int rows, i, j, num = 1;\r
    printf("Enter number of rows: ");\r
    scanf("%d", &rows);\r
    for (i = 1; i <= rows; i++) {\r
        for (j = 1; j <= i; j++) {\r
            printf("%d ", num++);\r
        }\r
        printf("\\n");\r
    }\r
    return 0;\r
}\r
`,en=`#include <stdio.h>\r
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
`,rn=`#include <stdio.h>\r
\r
int main() {\r
    /* Infinite loop (commented to avoid hanging)\r
    int i = 1;\r
    while (i <= 5) {\r
        printf("%d ", i);\r
        // forgot to increment i\r
    }\r
    */\r
\r
    // Corrected version\r
    int i = 1;\r
    printf("Corrected loop: ");\r
    while (i <= 5) {\r
        printf("%d ", i);\r
        i++;\r
    }\r
    printf("\\n");\r
    return 0;\r
}\r
`,tn=`#include <stdio.h>\r
\r
int main() {\r
    int i;\r
    printf("Incorrect (prints 1 to 4): ");\r
    for (i = 1; i < 5; i++) {  // < instead of <=\r
        printf("%d ", i);\r
    }\r
    printf("\\nCorrect (prints 1 to 5): ");\r
    for (i = 1; i <= 5; i++) {\r
        printf("%d ", i);\r
    }\r
    printf("\\n");\r
    return 0;\r
}\r
`,on=`#include <stdio.h>\r
#define MAX 10\r
\r
int main() {\r
    int i;\r
    printf("Numbers 1 to %d: ", MAX);\r
    for (i = 1; i <= MAX; i++) {\r
        printf("%d ", i);\r
    }\r
    printf("\\n");\r
    return 0;\r
}\r
`,an=`#include <stdio.h>\r
\r
int main() {\r
    int n, i, sum = 0;\r
    printf("Enter N: ");\r
    scanf("%d", &n);\r
    for (i = 1; i <= n; i++) {\r
        if (i % 2 == 0)\r
            sum += i;\r
    }\r
    printf("Sum of even numbers = %d\\n", sum);\r
    return 0;\r
}\r
`,sn=`#include <stdio.h>\r
\r
int main() {\r
    int n, i, sum = 0;\r
    printf("Enter N: ");\r
    scanf("%d", &n);\r
    for (i = 1; i <= n; i++) {\r
        if (i % 2 != 0)\r
            sum += i;\r
    }\r
    printf("Sum of odd numbers = %d\\n", sum);\r
    return 0;\r
}\r
`,ln=`#include <stdio.h>\r
\r
int main() {\r
    int n;\r
    printf("Enter a number: ");\r
    scanf("%d", &n);\r
    printf("%d is %s.\\n", n, (n % 2 == 0) ? "even" : "odd");\r
    return 0;\r
}\r
`,cn=`#include <stdio.h>\r
\r
int main() {\r
    float p, r, t, si;\r
    printf("Enter principal, rate, time: ");\r
    scanf("%f %f %f", &p, &r, &t);\r
    si = (p * r * t) / 100;\r
    printf("Simple Interest = %.2f\\n", si);\r
    return 0;\r
}\r
`,pn="C Programming – 50 Projects Covering Fundamentals",dn="Computer Science (C Programming)",un="WBCHSE / CBSE / ISC",fn=["GCC","Clang","VS Code","Code::Blocks"],mn={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},gn=JSON.parse(`[{"projectId":"P001","title":"Hello, World! with Comments","difficulty":"Beginner","description":"Write a basic C program that prints 'Hello, World!' and includes single-line and multi-line comments explaining each part.","exampleText":"","exampleOutput":"Hello, World!","answerFile":"./answers/P001.c","learningOutcome":"Understanding basic program structure, headers, main function, return value, and comments.","logicExplanation":"A basic program to print a message, demonstrating the structure of a C program.","codeExplanation":"Includes stdio.h, defines main(), uses printf to output text, and returns 0."},{"projectId":"P002","title":"Variables and Format Specifiers","difficulty":"Beginner","description":"Declare variables of types int, float, double, and char. Assign values and print them using appropriate format specifiers.","exampleText":"","exampleOutput":"Integer: 10\\nFloat: 3.140000\\nDouble: 2.718282\\nCharacter: A","answerFile":"./answers/P002.c","learningOutcome":"Variable declaration, initialization, and using printf format specifiers (%d, %f, %lf, %c).","logicExplanation":"Declare variables of different types and print them using appropriate format specifiers.","codeExplanation":"int, float, double, char are declared, assigned values, and printed with %d, %f, %lf, %c."},{"projectId":"P003","title":"Constants with const and #define","difficulty":"Beginner","description":"Define PI as a constant using both const keyword and #define preprocessor. Compute the area and circumference of a circle for a given radius.","exampleText":"Enter radius: 5","exampleOutput":"Area (using const): 78.539816\\nCircumference (using const): 31.415926\\nArea (using #define): 78.539816\\nCircumference (using #define): 31.415926","answerFile":"./answers/P003.c","learningOutcome":"Using const and #define to create constants, basic arithmetic.","logicExplanation":"Use both \`const\` and \`#define\` to define PI and compute area/circumference of a circle.","codeExplanation":"PI defined as const double and via #define. Program reads radius, calculates area and circumference, prints results."},{"projectId":"P004","title":"Arithmetic Operators Demonstration","difficulty":"Beginner","description":"Read two integers and perform all arithmetic operations: addition, subtraction, multiplication, division (integer), and modulus. Print the results.","exampleText":"Enter two integers: 15 4","exampleOutput":"15 + 4 = 19\\n15 - 4 = 11\\n15 * 4 = 60\\n15 / 4 = 3\\n15 %% 4 = 1","answerFile":"./answers/P004.c","learningOutcome":"Using +, -, *, /, % operators.","logicExplanation":"Perform all basic arithmetic operations (+, -, *, /, %) on two integers.","codeExplanation":"Read two ints, compute and print sum, difference, product, quotient, remainder."},{"projectId":"P005","title":"Relational Operators – Compare Two Numbers","difficulty":"Beginner","description":"Read two integers and compare them using all relational operators (>, <, >=, <=, ==, !=). Print 1 if true, 0 if false.","exampleText":"Enter two numbers: 10 20","exampleOutput":"10 > 20 : 0\\n10 < 20 : 1\\n10 >= 20 : 0\\n10 <= 20 : 1\\n10 == 20 : 0\\n10 != 20 : 1","answerFile":"./answers/P005.c","learningOutcome":"Understanding relational operators and their integer results.","logicExplanation":"Compare two numbers using all relational operators and print the results (1 for true, 0 for false).","codeExplanation":"Read two ints, print outcomes of >, <, >=, <=, ==, !=."},{"projectId":"P006","title":"Logical Operators – Leap Year Check","difficulty":"Beginner","description":"Check if a given year is a leap year using logical operators (&&, ||). A year is a leap year if divisible by 400 or (divisible by 4 and not by 100).","exampleText":"Enter year: 2024","exampleOutput":"2024 is a leap year.","answerFile":"./answers/P006.c","learningOutcome":"Combining conditions with logical AND and OR.","logicExplanation":"Check leap year using logical && and ||: (year%400==0) or (year%4==0 and year%100!=0).","codeExplanation":"Function isLeap() implements condition; main reads year and prints result."},{"projectId":"P007","title":"Assignment and Compound Assignment Operators","difficulty":"Beginner","description":"Demonstrate simple assignment and compound operators +=, -=, *=, /=, %=. Start with an initial value, apply each operator with a user-provided number, and print results.","exampleText":"Initial value: 10\\nEnter a number: 3","exampleOutput":"After += 3: 13\\nAfter -= 3: 10\\nAfter *= 3: 30\\nAfter /= 3: 10\\nAfter %= 3: 1","answerFile":"./answers/P007.c","learningOutcome":"Understanding compound assignment operators.","logicExplanation":"Standard algorithm for Assignment and Compound Assignment Operators.","codeExplanation":"The C code implements Assignment and Compound Assignment Operators as described."},{"projectId":"P008","title":"Increment and Decrement Operators (Prefix vs Postfix)","difficulty":"Beginner","description":"Show the difference between prefix (++i) and postfix (i++) increment/decrement operators.","exampleText":"Enter a number: 5","exampleOutput":"Initial: x = 5\\na = ++x: a = 6, x = 6\\nb = x++: b = 6, x = 7\\nc = --x: c = 6, x = 6\\nd = x--: d = 6, x = 5","answerFile":"./answers/P008.c","learningOutcome":"Prefix and postfix operators and their side effects.","logicExplanation":"Show difference between prefix (++i) and postfix (i++) increment/decrement.","codeExplanation":"Declare a variable, use it in expressions with prefix/postfix, print values to illustrate order."},{"projectId":"P009","title":"Type Conversion – Implicit and Explicit","difficulty":"Beginner","description":"Demonstrate implicit conversion (e.g., int to float in division) and explicit casting (e.g., (float)int).","exampleText":"Enter an integer: 7\\nEnter a float: 3.14","exampleOutput":"Implicit: int / int stored in float: 7/2 = 3.000000\\nExplicit cast: (float)7/2 = 3.500000\\nCasting float to int: (int)3.14 = 3","answerFile":"./answers/P009.c","learningOutcome":"Implicit type conversion, explicit casting, type promotion.","logicExplanation":"Demonstrate implicit conversion (int to float) and explicit casting.","codeExplanation":"Show integer division stored in float vs. explicit cast; also cast float to int (truncation)."},{"projectId":"P010","title":"Operator Precedence – Evaluate Complex Expression","difficulty":"Beginner","description":"Evaluate an expression involving multiple operators (+, -, *, /) to understand precedence and associativity.","exampleText":"Enter a, b, c, d, e: 2 3 4 5 6","exampleOutput":"Expression: a + b * c - d / e = 2 + 3*4 - 5/6 = 2 + 12 - 0 = 14","answerFile":"./answers/P010.c","learningOutcome":"Operator precedence and associativity.","logicExplanation":"Evaluate a complex expression with multiple operators to understand precedence and associativity.","codeExplanation":"Compute an expression like a + b * c - d / e and show step-by-step evaluation."},{"projectId":"P011","title":"Formatted Input with scanf – Read Multiple Types","difficulty":"Beginner","description":"Use scanf to read an integer, a float, and a character, then print them back using printf with appropriate format specifiers.","exampleText":"Enter an integer: 10\\nEnter a float: 3.14\\nEnter a character: A","exampleOutput":"You entered: integer = 10, float = 3.140000, character = A","answerFile":"./answers/P011.c","learningOutcome":"Using format specifiers with scanf for different data types.","logicExplanation":"Use scanf to read different data types (int, float, char) with proper format specifiers.","codeExplanation":"Read an integer, a float, and a character; print them back using printf."},{"projectId":"P012","title":"While Loop – Print Numbers 1 to N","difficulty":"Beginner","description":"Print numbers from 1 to N using a while loop.","exampleText":"Enter N: 5","exampleOutput":"1 2 3 4 5","answerFile":"./answers/P012.c","learningOutcome":"Basic while loop syntax.","logicExplanation":"Use a while loop to print numbers from 1 to N.","codeExplanation":"Initialize counter, loop while <= N, print and increment."},{"projectId":"P013","title":"While Loop – Sum of First N Natural Numbers","difficulty":"Beginner","description":"Compute the sum of first N natural numbers using a while loop.","exampleText":"Enter N: 5","exampleOutput":"Sum = 15","answerFile":"./answers/P013.c","learningOutcome":"Accumulating sum in a loop.","logicExplanation":"Standard algorithm for While Loop – Sum of First N Natural Numbers.","codeExplanation":"The C code implements While Loop – Sum of First N Natural Numbers as described."},{"projectId":"P014","title":"While Loop – Product (Factorial) of N","difficulty":"Beginner","description":"Compute the factorial of a non-negative integer using a while loop.","exampleText":"Enter N: 5","exampleOutput":"Factorial = 120","answerFile":"./answers/P014.c","learningOutcome":"Using while loop for multiplication.","logicExplanation":"Compute factorial of N using a while loop (iterative).","codeExplanation":"Initialize product=1, multiply by i from 1 to N."},{"projectId":"P015","title":"Do-While Loop – Menu-Driven Calculator","difficulty":"Intermediate","description":"Create a menu-driven calculator that repeats until user chooses exit, using a do-while loop.","exampleText":"1. Add\\n2. Subtract\\n3. Multiply\\n4. Divide\\n5. Exit\\nEnter choice: 1\\nEnter two numbers: 10 5\\nResult = 15","exampleOutput":"Result printed and menu repeats.","answerFile":"./answers/P015.c","learningOutcome":"Do-while loop for menus, switch statement.","logicExplanation":"Present a menu of operations and repeat until user chooses exit using do-while.","codeExplanation":"Display menu, read choice, perform operation with switch, loop while choice != exit."},{"projectId":"P016","title":"Do-While Loop – Guess the Number Game","difficulty":"Intermediate","description":"Generate a random number between 1 and 100, and let the user guess it with hints, using do-while.","exampleText":"Guess the number (1-100): 50\\nToo low!\\nGuess again: 75\\nToo high!\\n...","exampleOutput":"Congratulations! You guessed it in X tries.","answerFile":"./answers/P016.c","learningOutcome":"Random numbers, do-while for at least one iteration.","logicExplanation":"Generate random number, let user guess with hints, repeat until correct using do-while.","codeExplanation":"Use rand() and srand(), do-while to keep asking, give feedback."},{"projectId":"P017","title":"For Loop – Multiplication Table","difficulty":"Beginner","description":"Print the multiplication table of a given number using a for loop.","exampleText":"Enter a number: 7","exampleOutput":"7 x 1 = 7\\n7 x 2 = 14\\n...\\n7 x 10 = 70","answerFile":"./answers/P017.c","learningOutcome":"For loop syntax, formatting output.","logicExplanation":"Print multiplication table of a number using for loop.","codeExplanation":"Loop from 1 to 10, print number * i."},{"projectId":"P018","title":"For Loop – Sum of Squares","difficulty":"Beginner","description":"Compute the sum of squares: 1² + 2² + ... + n² using a for loop.","exampleText":"Enter n: 3","exampleOutput":"Sum of squares = 14","answerFile":"./answers/P018.c","learningOutcome":"Accumulating sum with exponentiation.","logicExplanation":"Compute sum of squares 1² + 2² + ... + n² using for loop.","codeExplanation":"Accumulate i*i in loop."},{"projectId":"P019","title":"For Loop – Factorial (Iterative)","difficulty":"Beginner","description":"Compute factorial of a number using a for loop.","exampleText":"Enter a number: 5","exampleOutput":"Factorial = 120","answerFile":"./answers/P019.c","learningOutcome":"Iterative factorial with for loop.","logicExplanation":"Compute factorial using for loop.","codeExplanation":"Initialize fact=1, for i=1 to n, fact *= i."},{"projectId":"P020","title":"For Loop – Fibonacci Series","difficulty":"Intermediate","description":"Generate the Fibonacci series up to N terms using a for loop.","exampleText":"Enter number of terms: 7","exampleOutput":"0 1 1 2 3 5 8","answerFile":"./answers/P020.c","learningOutcome":"Generating Fibonacci sequence iteratively.","logicExplanation":"Generate Fibonacci series up to N terms using for loop.","codeExplanation":"Initialize a=0, b=1; for loop to print and update."},{"projectId":"P021","title":"Break in Loop – Find First Number Divisible by 5 and 7","difficulty":"Intermediate","description":"Find the first number in a given range that is divisible by both 5 and 7 using break.","exampleText":"Enter start and end: 1 100","exampleOutput":"First number divisible by 5 and 7 is 35","answerFile":"./answers/P021.c","learningOutcome":"Using break to exit loop early.","logicExplanation":"Find first number divisible by both 5 and 7 in a range using break.","codeExplanation":"Loop from start to end, if condition true, print and break."},{"projectId":"P022","title":"Continue in Loop – Skip Multiples of 3","difficulty":"Intermediate","description":"Print numbers from 1 to 20, skipping multiples of 3 using continue.","exampleText":"","exampleOutput":"1 2 4 5 7 8 10 11 13 14 16 17 19 20","answerFile":"./answers/P022.c","learningOutcome":"Using continue to skip iterations.","logicExplanation":"Print numbers 1-20 skipping multiples of 3 using continue.","codeExplanation":"Loop 1 to 20, if i%3==0 continue, else print."},{"projectId":"P023","title":"Prime Number Check","difficulty":"Intermediate","description":"Check whether a given number is prime using a loop up to sqrt(n).","exampleText":"Enter a number: 17","exampleOutput":"17 is a prime number.","answerFile":"./answers/P023.c","learningOutcome":"Prime checking algorithm, sqrt optimization.","logicExplanation":"Check if a number is prime using loop up to sqrt(n).","codeExplanation":"Handle <2, loop from 2 to sqrt(n), if divisible return 0; else 1."},{"projectId":"P024","title":"Prime Numbers in a Given Range","difficulty":"Intermediate","description":"Print all prime numbers between two given integers using a function to check primality.","exampleText":"Enter lower and upper limits: 10 30","exampleOutput":"Prime numbers between 10 and 30: 11 13 17 19 23 29","answerFile":"./answers/P024.c","learningOutcome":"Combining loops and prime checking.","logicExplanation":"Standard algorithm for Prime Numbers in a Given Range.","codeExplanation":"The C code implements Prime Numbers in a Given Range as described."},{"projectId":"P025","title":"GCD (Euclidean Algorithm)","difficulty":"Intermediate","description":"Compute the greatest common divisor of two integers using the Euclidean algorithm (loop version).","exampleText":"Enter two numbers: 48 18","exampleOutput":"GCD = 6","answerFile":"./answers/P025.c","learningOutcome":"Euclidean algorithm for GCD.","logicExplanation":"Compute GCD using Euclidean algorithm (loop).","codeExplanation":"While b != 0, set temp=b, b=a%b, a=temp; return a."},{"projectId":"P026","title":"LCM Using GCD","difficulty":"Intermediate","description":"Compute the least common multiple of two integers using the formula LCM = a * b / GCD(a,b).","exampleText":"Enter two numbers: 12 18","exampleOutput":"LCM = 36","answerFile":"./answers/P026.c","learningOutcome":"Relationship between LCM and GCD.","logicExplanation":"Compute GCD using Euclidean algorithm (loop).","codeExplanation":"While b != 0, set temp=b, b=a%b, a=temp; return a."},{"projectId":"P027","title":"Reverse a Number","difficulty":"Beginner","description":"Reverse the digits of a given integer using a loop.","exampleText":"Enter a number: 1234","exampleOutput":"Reversed number = 4321","answerFile":"./answers/P027.c","learningOutcome":"Digit extraction and building reversed number.","logicExplanation":"Reverse the digits of an integer using loop.","codeExplanation":"While n!=0, rev = rev*10 + n%10, n/=10."},{"projectId":"P028","title":"Palindrome Number","difficulty":"Beginner","description":"Check if a number is a palindrome (reads the same forwards and backwards).","exampleText":"Enter a number: 1221","exampleOutput":"Palindrome","answerFile":"./answers/P028.c","learningOutcome":"Reversing and comparing.","logicExplanation":"Check if a number is palindrome by comparing with its reverse.","codeExplanation":"Call reverseNumber() and compare with original."},{"projectId":"P029","title":"Sum of Digits","difficulty":"Beginner","description":"Compute the sum of digits of a positive integer.","exampleText":"Enter a number: 1234","exampleOutput":"Sum of digits = 10","answerFile":"./answers/P029.c","learningOutcome":"Digit extraction.","logicExplanation":"Sum digits of a number using loop.","codeExplanation":"While n!=0, sum += n%10, n/=10."},{"projectId":"P030","title":"Armstrong Number","difficulty":"Intermediate","description":"Check if a number is an Armstrong number (sum of its digits raised to the power of number of digits equals the number).","exampleText":"Enter a number: 153","exampleOutput":"Armstrong","answerFile":"./answers/P030.c","learningOutcome":"Digit extraction, power calculation.","logicExplanation":"Check if number equals sum of its digits raised to power of number of digits.","codeExplanation":"Count digits, compute sum of pow(d, digits), compare."},{"projectId":"P031","title":"Perfect Number","difficulty":"Intermediate","description":"Check if a number is perfect (equal to sum of its proper divisors).","exampleText":"Enter a number: 28","exampleOutput":"Perfect","answerFile":"./answers/P031.c","learningOutcome":"Divisor sum.","logicExplanation":"Check if number equals sum of its proper divisors.","codeExplanation":"Loop from 1 to n/2, sum divisors, compare."},{"projectId":"P032","title":"Count Digits in a Number","difficulty":"Beginner","description":"Count the number of digits in a positive integer.","exampleText":"Enter a number: 98765","exampleOutput":"Number of digits = 5","answerFile":"./answers/P032.c","learningOutcome":"Loop to count digits.","logicExplanation":"Count number of digits in an integer using loop.","codeExplanation":"Handle 0 case, while n!=0, count++, n/=10."},{"projectId":"P033","title":"Power of a Number (Iterative)","difficulty":"Beginner","description":"Compute base raised to exponent (non-negative) using iterative multiplication.","exampleText":"Enter base and exponent: 2 5","exampleOutput":"2^5 = 32","answerFile":"./answers/P033.c","learningOutcome":"Loop for exponentiation.","logicExplanation":"Standard algorithm for Power of a Number (Iterative).","codeExplanation":"The C code implements Power of a Number (Iterative) as described."},{"projectId":"P034","title":"Power of a Number (Recursive)","difficulty":"Intermediate","description":"Compute base raised to exponent using recursion.","exampleText":"Enter base and exponent: 2 5","exampleOutput":"2^5 = 32","answerFile":"./answers/P034.c","learningOutcome":"Recursion for exponentiation.","logicExplanation":"Standard algorithm for Power of a Number (Recursive).","codeExplanation":"The C code implements Power of a Number (Recursive) as described."},{"projectId":"P035","title":"Fibonacci Number (Recursive)","difficulty":"Intermediate","description":"Compute the nth Fibonacci number using recursion.","exampleText":"Enter n: 6","exampleOutput":"Fibonacci(6) = 8","answerFile":"./answers/P035.c","learningOutcome":"Recursive Fibonacci.","logicExplanation":"Standard algorithm for Fibonacci Number (Recursive).","codeExplanation":"The C code implements Fibonacci Number (Recursive) as described."},{"projectId":"P036","title":"Factorial (Recursive)","difficulty":"Intermediate","description":"Compute factorial of a number using recursion.","exampleText":"Enter a number: 5","exampleOutput":"Factorial = 120","answerFile":"./answers/P036.c","learningOutcome":"Recursive factorial.","logicExplanation":"Compute factorial recursively.","codeExplanation":"Base case n<=1 return 1; else return n * factorialRec(n-1)."},{"projectId":"P037","title":"Nested Loops – Right-Angled Triangle Pattern","difficulty":"Intermediate","description":"Print a right-angled triangle of stars using nested loops.","exampleText":"Enter number of rows: 5","exampleOutput":"*\\n**\\n***\\n****\\n*****","answerFile":"./answers/P037.c","learningOutcome":"Nested loops for pattern printing.","logicExplanation":"Print right-angled triangle of stars using nested loops.","codeExplanation":"Outer loop rows, inner loop prints stars equal to row number."},{"projectId":"P038","title":"Nested Loops – Inverted Right-Angled Triangle","difficulty":"Intermediate","description":"Print an inverted right-angled triangle of stars.","exampleText":"Enter number of rows: 5","exampleOutput":"*****\\n****\\n***\\n**\\n*","answerFile":"./answers/P038.c","learningOutcome":"Nested loops decreasing.","logicExplanation":"Print right-angled triangle of stars using nested loops.","codeExplanation":"Outer loop rows, inner loop prints stars equal to row number."},{"projectId":"P039","title":"Nested Loops – Pyramid Pattern","difficulty":"Intermediate","description":"Print a centered pyramid of stars.","exampleText":"Enter number of rows: 5","exampleOutput":"    *\\n   ***\\n  *****\\n *******\\n*********","answerFile":"./answers/P039.c","learningOutcome":"Nested loops with spaces and stars.","logicExplanation":"Print centered pyramid of stars.","codeExplanation":"Outer loop rows, inner loops for spaces and stars."},{"projectId":"P040","title":"Nested Loops – Diamond Pattern","difficulty":"Intermediate","description":"Print a diamond pattern of stars.","exampleText":"Enter number of rows (half): 4","exampleOutput":"   *\\n  ***\\n *****\\n*******\\n *****\\n  ***\\n   *","answerFile":"./answers/P040.c","learningOutcome":"Combining two pyramids.","logicExplanation":"Print diamond pattern using nested loops.","codeExplanation":"Upper half pyramid, lower half inverted pyramid."},{"projectId":"P041","title":"Nested Loops – Number Pattern (1, 12, 123...)","difficulty":"Intermediate","description":"Print a pattern where each row contains numbers from 1 to row number.","exampleText":"Enter number of rows: 5","exampleOutput":"1\\n12\\n123\\n1234\\n12345","answerFile":"./answers/P041.c","learningOutcome":"Nested loops with numbers.","logicExplanation":"Print pattern: 1, 12, 123, ... using nested loops.","codeExplanation":"Outer loop rows, inner loop prints numbers from 1 to row."},{"projectId":"P042","title":"Nested Loops – Floyd's Triangle","difficulty":"Intermediate","description":"Print Floyd's triangle: consecutive numbers arranged in rows.","exampleText":"Enter number of rows: 4","exampleOutput":"1\\n2 3\\n4 5 6\\n7 8 9 10","answerFile":"./answers/P042.c","learningOutcome":"Using a counter in nested loops.","logicExplanation":"Print Floyd's triangle (consecutive numbers).","codeExplanation":"Use counter, nested loops to print numbers in triangular form."},{"projectId":"P043","title":"Nested Loops – Multiplication Table Grid","difficulty":"Intermediate","description":"Print a 10x10 multiplication table grid using nested loops.","exampleText":"","exampleOutput":"    1   2   3   4   5   6   7   8   9  10\\n    2   4   6   8  10  12  14  16  18  20\\n...","answerFile":"./answers/P043.c","learningOutcome":"Formatted output with nested loops.","logicExplanation":"Print 10x10 multiplication table grid using nested loops.","codeExplanation":"Outer loop 1-10, inner loop 1-10, print product formatted."},{"projectId":"P044","title":"Debugging Loops – Infinite Loop Example","difficulty":"Intermediate","description":"Demonstrate an infinite loop (commented out) and show how to fix it.","exampleText":"","exampleOutput":"Loop corrected: prints 1 to 5","answerFile":"./answers/P044.c","learningOutcome":"Identifying and fixing infinite loops.","logicExplanation":"Demonstrate an infinite loop (commented out) and show how to fix.","codeExplanation":"Show loop with condition always true, then corrected version."},{"projectId":"P045","title":"Loop Boundary Errors – Off-by-One Demonstration","difficulty":"Intermediate","description":"Illustrate off-by-one errors in loops and show corrected versions.","exampleText":"","exampleOutput":"Incorrect (prints 1 to 4): 1 2 3 4\\nCorrect (prints 1 to 5): 1 2 3 4 5","answerFile":"./answers/P045.c","learningOutcome":"Understanding loop boundaries.","logicExplanation":"Illustrate off-by-one errors in loops and correct them.","codeExplanation":"Show loops that miss first/last element and corrected versions."},{"projectId":"P046","title":"Using Constants for Loop Limits","difficulty":"Beginner","description":"Use #define to define a constant for the loop limit and print numbers 1 to that constant.","exampleText":"","exampleOutput":"Numbers 1 to 10: 1 2 3 4 5 6 7 8 9 10","answerFile":"./answers/P046.c","learningOutcome":"Using #define for readability and maintainability.","logicExplanation":"Use #defined constants for loop limits to improve readability.","codeExplanation":"Define MAX=10, loop from 1 to MAX, print values."},{"projectId":"P047","title":"Sum of Even Numbers from 1 to N","difficulty":"Beginner","description":"Compute the sum of all even numbers between 1 and N using a loop.","exampleText":"Enter N: 10","exampleOutput":"Sum of even numbers = 30","answerFile":"./answers/P047.c","learningOutcome":"Conditional inside loop.","logicExplanation":"Compute sum of even numbers from 1 to N using loop.","codeExplanation":"Loop 1 to N, if i%2==0 add to sum."},{"projectId":"P048","title":"Sum of Odd Numbers from 1 to N","difficulty":"Beginner","description":"Compute the sum of all odd numbers between 1 and N.","exampleText":"Enter N: 10","exampleOutput":"Sum of odd numbers = 25","answerFile":"./answers/P048.c","learningOutcome":"Conditional inside loop.","logicExplanation":"Compute sum of odd numbers from 1 to N using loop.","codeExplanation":"Loop 1 to N, if i%2!=0 add to sum."},{"projectId":"P049","title":"Even or Odd Using Conditional Operator","difficulty":"Beginner","description":"Check if a number is even or odd using the conditional (ternary) operator.","exampleText":"Enter a number: 7","exampleOutput":"7 is odd.","answerFile":"./answers/P049.c","learningOutcome":"Ternary operator usage.","logicExplanation":"Check if a number is even or odd using conditional operator.","codeExplanation":"Read number, use (n%2==0) ? 'Even' : 'Odd' and print."},{"projectId":"P050","title":"Simple Interest Calculation","difficulty":"Beginner","description":"Calculate simple interest given principal, rate, and time using formula SI = (P * R * T) / 100.","exampleText":"Enter principal, rate, time: 1000 5 2","exampleOutput":"Simple Interest = 100.00","answerFile":"./answers/P050.c","learningOutcome":"Arithmetic expressions and input.","logicExplanation":"Calculate simple interest: SI = (P * R * T) / 100.","codeExplanation":"Read principal, rate, time; compute and print interest."}]`),c={projectCategory:pn,subject:dn,board:un,class:"XI - XII",tools:fn,institute:mn,projects:gn};function vn(){const[r,p]=s.useState(null);return s.useEffect(()=>{const i=Object.assign({"./topic1_files/answers/P001.c":f,"./topic1_files/answers/P002.c":m,"./topic1_files/answers/P003.c":g,"./topic1_files/answers/P004.c":b,"./topic1_files/answers/P005.c":x,"./topic1_files/answers/P006.c":w,"./topic1_files/answers/P007.c":_,"./topic1_files/answers/P008.c":h,"./topic1_files/answers/P009.c":P,"./topic1_files/answers/P010.c":E,"./topic1_files/answers/P011.c":v,"./topic1_files/answers/P012.c":y,"./topic1_files/answers/P013.c":I,"./topic1_files/answers/P014.c":O,"./topic1_files/answers/P015.c":C,"./topic1_files/answers/P016.c":F,"./topic1_files/answers/P017.c":j,"./topic1_files/answers/P018.c":N,"./topic1_files/answers/P019.c":T,"./topic1_files/answers/P020.c":k,"./topic1_files/answers/P021.c":D,"./topic1_files/answers/P022.c":R,"./topic1_files/answers/P023.c":A,"./topic1_files/answers/P024.c":S,"./topic1_files/answers/P025.c":L,"./topic1_files/answers/P026.c":B,"./topic1_files/answers/P027.c":U,"./topic1_files/answers/P028.c":G,"./topic1_files/answers/P029.c":M,"./topic1_files/answers/P030.c":q,"./topic1_files/answers/P031.c":W,"./topic1_files/answers/P032.c":z,"./topic1_files/answers/P033.c":H,"./topic1_files/answers/P034.c":X,"./topic1_files/answers/P035.c":Y,"./topic1_files/answers/P036.c":V,"./topic1_files/answers/P037.c":$,"./topic1_files/answers/P038.c":J,"./topic1_files/answers/P039.c":K,"./topic1_files/answers/P040.c":Q,"./topic1_files/answers/P041.c":Z,"./topic1_files/answers/P042.c":nn,"./topic1_files/answers/P043.c":en,"./topic1_files/answers/P044.c":rn,"./topic1_files/answers/P045.c":tn,"./topic1_files/answers/P046.c":on,"./topic1_files/answers/P047.c":an,"./topic1_files/answers/P048.c":sn,"./topic1_files/answers/P049.c":ln,"./topic1_files/answers/P050.c":cn}),t={};Object.keys(i).forEach(n=>{const o=n.split("/").pop();t[o]=i[n]});const d=c.projects.map(n=>{const e=(n.answerFile||"").split("/").pop(),a=t[e];return a||console.warn(`⚠ Missing code file: ${e}`),{...n,answer:a||`// File "${e}" not found in answers folder`}});p({...c,projects:d})},[]),r?l.jsx(u,{data:r}):l.jsx("div",{className:"p-6 text-slate-400",children:"Loading projects..."})}export{vn as default};
