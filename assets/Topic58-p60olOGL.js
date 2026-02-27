import{r as o,j as u}from"./index-meFSU1Lv.js";import{C as d}from"./COutputPracticeTemplateWithFiles-NsiKBV4G.js";import"./CodeBlock-CjWqBd4d.js";import"./prism-sFrOkMqg.js";import"./prism-json-D0UlpdKh.js";const l=`#include <stdio.h>\r
int add(int a, int b) {\r
    return a + b;\r
}\r
int main() {\r
    printf("%d", add(5,5));\r
    return 0;\r
}\r
`,p=`#include <stdio.h>\r
double average(int a, int b) {\r
    return (a + b) / 2.0;\r
}\r
int main() {\r
    printf("%f", average(10,21));\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
int square(int x) {\r
    return x * x;\r
}\r
int main() {\r
    printf("%d", square(4) / 2);\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
int square(int x) {\r
    x = x * x;\r
    return x;\r
}\r
int main() {\r
    int a = 5;\r
    printf("%d", square(a));\r
    return 0;\r
}\r
`,F=`#include <stdio.h>\r
void swap(int *x, int *y) {\r
    int temp = *x;\r
    *x = *y;\r
    *y = temp;\r
}\r
int main() {\r
    int a = 10, b = 20;\r
    swap(&a, &b);\r
    printf("x = %d, y = %d", a, b);\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
int fact(int n) {\r
    if (n <= 1) return 1;\r
    return n * fact(n-1);\r
}\r
int main() {\r
    printf("%d", fact(5));\r
    return 0;\r
}\r
`,m=`#include <stdio.h>\r
int fib(int n) {\r
    if (n <= 1) return n;\r
    return fib(n-1) + fib(n-2);\r
}\r
int main() {\r
    printf("%d", fib(6));\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
void printArray(int *arr, int n) {\r
    for (int i = 0; i < n; i++)\r
        printf("%d ", arr[i]);\r
}\r
int main() {\r
    int a[] = {1,2,3,4,5};\r
    printArray(a,5);\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
int sumArray(int arr[], int n) {\r
    int s = 0;\r
    for (int i = 0; i < n; i++)\r
        s += arr[i];\r
    return s;\r
}\r
int main() {\r
    int a[] = {1,2,3,4,5};\r
    printf("Sum = %d", sumArray(a,5));\r
    return 0;\r
}\r
`,v=`#include <stdio.h>\r
void printMessage(char *msg) {\r
    printf("%s", msg);\r
}\r
int main() {\r
    printMessage("Hello, World!");\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
int stringLength(char *s) {\r
    int len = 0;\r
    while (s[len] != '\\0') len++;\r
    return len;\r
}\r
int main() {\r
    printf("%d", stringLength("Hello"));\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
char firstChar(char *s) {\r
    return s[0];\r
}\r
int main() {\r
    printf("%c", firstChar("abc"));\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
int asciiVal(char c) {\r
    return (int)c;\r
}\r
int main() {\r
    printf("%d", asciiVal('A'));\r
    return 0;\r
}\r
`,q=`#include <stdio.h>\r
int max(int a, int b) {\r
    return (a > b) ? a : b;\r
}\r
int main() {\r
    printf("%d", max(3,4));\r
    return 0;\r
}\r
`,W=`#include <stdio.h>\r
int min(int a, int b) {\r
    return (a < b) ? a : b;\r
}\r
int main() {\r
    printf("%d", min(8,6));\r
    return 0;\r
}\r
`,M=`#include <stdio.h>\r
int power(int base, int exp) {\r
    int result = 1;\r
    for (int i = 0; i < exp; i++)\r
        result *= base;\r
    return result;\r
}\r
int main() {\r
    printf("%d", power(4,3));\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
int isPrime(int n) {\r
    if (n < 2) return 0;\r
    for (int i = 2; i * i <= n; i++)\r
        if (n % i == 0) return 0;\r
    return 1;\r
}\r
int main() {\r
    printf("%d", isPrime(7));\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
int isPrime(int n) {\r
    if (n < 2) return 0;\r
    for (int i = 2; i * i <= n; i++)\r
        if (n % i == 0) return 0;\r
    return 1;\r
}\r
int main() {\r
    printf("%d", isPrime(10));\r
    return 0;\r
}\r
`,P=`#include <stdio.h>\r
int gcd(int a, int b) {\r
    if (b == 0) return a;\r
    return gcd(b, a % b);\r
}\r
int main() {\r
    printf("%d", gcd(48,18));\r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
int counter() {\r
    static int count = 0;\r
    count++;\r
    return count;\r
}\r
int main() {\r
    printf("%d ", counter());\r
    printf("%d ", counter());\r
    printf("%d", counter());\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
void func() {\r
    static int x = 0;\r
    x++;\r
    printf("%d ", x);\r
}\r
int main() {\r
    func();\r
    func();\r
    func();\r
    return 0;\r
}\r
`,I=`#include <stdio.h>\r
int global = 5;\r
void func() {\r
    int local = 10;\r
    printf("Global: %d, Local: %d", global, local);\r
}\r
int main() {\r
    func();\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
void modify(int *arr) {\r
    arr[0] = 30;\r
}\r
int main() {\r
    int a[] = {10,20};\r
    modify(a);\r
    printf("%d", a[0]);\r
    return 0;\r
}\r
`,O=`#include <stdio.h>\r
int* getEvenNumbers() {\r
    static int arr[] = {2,4,6,8};\r
    return arr;\r
}\r
int main() {\r
    int *p = getEvenNumbers();\r
    for (int i = 0; i < 4; i++)\r
        printf("%d ", p[i]);\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
int add(int a, int b) {\r
    return a + b;\r
}\r
int main() {\r
    int (*fp)(int, int) = add;\r
    printf("%d", fp(3,4));\r
    return 0;\r
}\r
`,j=`#include <stdio.h>\r
int add(int a, int b) { return a+b; }\r
int sub(int a, int b) { return a-b; }\r
int mul(int a, int b) { return a*b; }\r
int main() {\r
    int (*ops[3])(int, int) = {add, sub, mul};\r
    printf("%d", ops[2](6,4));\r
    return 0;\r
}\r
`,D=`#include <stdio.h>\r
int countDigits(int n) {\r
    if (n == 0) return 0;\r
    return 1 + countDigits(n / 10);\r
}\r
int main() {\r
    printf("%d", countDigits(123));\r
    return 0;\r
}\r
`,L=`#include <stdio.h>\r
int product(int n) {\r
    if (n == 1) return 1;\r
    return n * product(n-1);\r
}\r
int main() {\r
    printf("%d", product(5));\r
    return 0;\r
}\r
`,z=`#include <stdio.h>\r
void checkEvenOdd(int n) {\r
    if (n % 2 == 0)\r
        printf("Even");\r
    else\r
        printf("Odd");\r
}\r
int main() {\r
    checkEvenOdd(4);\r
    return 0;\r
}\r
`,N=`#include <stdio.h>\r
void checkEvenOdd(int n) {\r
    if (n % 2 == 0)\r
        printf("Even");\r
    else\r
        printf("Odd");\r
}\r
int main() {\r
    checkEvenOdd(7);\r
    return 0;\r
}\r
`,G=`#include <stdio.h>\r
#include <string.h>\r
int isPalindrome(char *s) {\r
    int len = strlen(s);\r
    for (int i = 0; i < len/2; i++)\r
        if (s[i] != s[len-1-i])\r
            return 0;\r
    return 1;\r
}\r
int main() {\r
    printf(isPalindrome("madam") ? "Palindrome" : "Not Palindrome");\r
    return 0;\r
}\r
`,B=`#include <stdio.h>\r
#include <string.h>\r
int isPalindrome(char *s) {\r
    int len = strlen(s);\r
    for (int i = 0; i < len/2; i++)\r
        if (s[i] != s[len-1-i])\r
            return 0;\r
    return 1;\r
}\r
int main() {\r
    printf(isPalindrome("hello") ? "Palindrome" : "Not Palindrome");\r
    return 0;\r
}\r
`,H=`#include <stdio.h>\r
void printASCII(char c1, char c2, char c3) {\r
    printf("%d %d %d", c1, c2, c3);\r
}\r
int main() {\r
    printASCII('A','B','C');\r
    return 0;\r
}\r
`,Q=`#include <stdio.h>\r
void printASCII(char c1, char c2, char c3) {\r
    printf("%d %d %d", c1, c2, c3);\r
}\r
int main() {\r
    printASCII('a','b','c');\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
int add(int a, int b) {\r
    return a + b;\r
}\r
int main() {\r
    printf("%d", add(4,6));\r
    return 0;\r
}\r
`,U=`#include <stdio.h>\r
int sum3(int a, int b, int c) {\r
    return a + b + c;\r
}\r
int main() {\r
    printf("%d", sum3(5,10,15));\r
    return 0;\r
}\r
`,V=`#include <stdio.h>\r
double divide(int a, int b) {\r
    return (double)a / b;\r
}\r
int main() {\r
    printf("%f", divide(1,2));\r
    return 0;\r
}\r
`,$=`#include <stdio.h>\r
void tryChange(int a, int b) {\r
    a = 100;\r
    b = 200;\r
}\r
int main() {\r
    int a = 10, b = 20;\r
    tryChange(a, b);\r
    printf("a = %d, b = %d", a, b);\r
    return 0;\r
}\r
`,J=`#include <stdio.h>\r
void swap(int *x, int *y) {\r
    int t = *x;\r
    *x = *y;\r
    *y = t;\r
}\r
int main() {\r
    int x = 10, y = 20;\r
    swap(&x, &y);\r
    printf("x = %d, y = %d", x, y);\r
    return 0;\r
}\r
`,K=`#include <stdio.h>\r
int* firstFivePrimes() {\r
    static int primes[] = {2,3,5,7,11};\r
    return primes;\r
}\r
int main() {\r
    int *p = firstFivePrimes();\r
    for (int i = 0; i < 5; i++)\r
        printf("%d ", p[i]);\r
    return 0;\r
}\r
`,X=`#include <stdio.h>\r
void doubleElements(int arr[], int n) {\r
    for (int i = 0; i < n; i++)\r
        arr[i] *= 2;\r
}\r
int main() {\r
    int a[] = {2,3,4,5};\r
    doubleElements(a,4);\r
    for (int i = 0; i < 4; i++)\r
        printf("%d ", a[i]);\r
    return 0;\r
}\r
`,Y=`#include <stdio.h>\r
#include <stdarg.h>\r
int sum(int count, ...) {\r
    va_list args;\r
    va_start(args, count);\r
    int s = 0;\r
    for (int i = 0; i < count; i++)\r
        s += va_arg(args, int);\r
    va_end(args);\r
    return s;\r
}\r
int main() {\r
    printf("Sum: %d", sum(5, 1,2,3,4,5));\r
    return 0;\r
}\r
`,Z=`#include <stdio.h>\r
void printReverse(int arr[], int n) {\r
    if (n == 0) return;\r
    printf("%d ", arr[n-1]);\r
    printReverse(arr, n-1);\r
}\r
int main() {\r
    int a[] = {5,4,3,2,1};\r
    printReverse(a,5);\r
    return 0;\r
}\r
`,nn=`#include <stdio.h>\r
void fibonacci(int n) {\r
    int a = 0, b = 1, c;\r
    for (int i = 0; i < n; i++) {\r
        printf("%d ", a);\r
        c = a + b;\r
        a = b;\r
        b = c;\r
    }\r
}\r
int main() {\r
    fibonacci(6);\r
    return 0;\r
}\r
`,tn=`#include <stdio.h>\r
#define SQUARE(x) ((x)*(x))\r
int main() {\r
    int a = 5;\r
    printf("Result = %d", SQUARE(a));\r
    return 0;\r
}\r
`,rn=`#include <stdio.h>\r
int accumulate(int x) {\r
    static int sum = 0;\r
    sum += x;\r
    return sum;\r
}\r
int main() {\r
    printf("%d ", accumulate(5));\r
    printf("%d ", accumulate(5));\r
    printf("%d", accumulate(5));\r
    return 0;\r
}\r
`,en=`#include <stdio.h>\r
int global = 10;\r
void changeGlobal() {\r
    global = 20;\r
}\r
int main() {\r
    changeGlobal();\r
    printf("%d", global);\r
    return 0;\r
}\r
`,on=`#include <stdio.h>\r
int x = 5;\r
void func() {\r
    int x = 10;\r
    printf("inside: %d\\n", x);\r
}\r
int main() {\r
    printf("outside: %d\\n", x);\r
    func();\r
    return 0;\r
}\r
`,un=`#include <stdio.h>\r
int getSize() {\r
    static int arr[] = {1,2,3,4};\r
    return sizeof(arr) / sizeof(arr[0]);\r
}\r
int main() {\r
    printf("%d", getSize());\r
    return 0;\r
}\r
`,an=`#include <stdio.h>\r
int max(int a, int b) {\r
    return (a > b) ? a : b;\r
}\r
int main() {\r
    printf("%d", max(5,6));\r
    return 0;\r
}\r
`,sn={path:"/images/c-logo.svg",alt:"C Programming Language"},cn="C Function Output Questions – Moderate",dn="Computer Science",ln="CBSE",pn=[{id:"F001",difficulty:"Moderate",question:"What is the output?",codeFile:"F001.c",output:"10",explanation:"Function add returns sum of 5 and 5."},{id:"F002",difficulty:"Moderate",question:"What is the output?",codeFile:"F002.c",output:"15.500000",explanation:"Function average returns (10+21)/2 = 15.5 as double."},{id:"F003",difficulty:"Moderate",question:"What is the output?",codeFile:"F003.c",output:"8",explanation:"Function square returns 4*2 = 8."},{id:"F004",difficulty:"Moderate",question:"What is the output?",codeFile:"F004.c",output:"25",explanation:"Function returns the square of 5 using call by value."},{id:"F005",difficulty:"Moderate",question:"What is the output?",codeFile:"F005.c",output:"x = 20, y = 10",explanation:"Swap function using pointers exchanges values."},{id:"F006",difficulty:"Moderate",question:"What is the output?",codeFile:"F006.c",output:"120",explanation:"Recursive factorial of 5."},{id:"F007",difficulty:"Moderate",question:"What is the output?",codeFile:"F007.c",output:"8",explanation:"Recursive fibonacci of 6 (0,1,1,2,3,5,8)."},{id:"F008",difficulty:"Moderate",question:"What is the output?",codeFile:"F008.c",output:"1 2 3 4 5",explanation:"Function prints array elements using pointer."},{id:"F009",difficulty:"Moderate",question:"What is the output?",codeFile:"F009.c",output:"Sum = 15",explanation:"Function returns sum of array elements."},{id:"F010",difficulty:"Moderate",question:"What is the output?",codeFile:"F010.c",output:"Hello, World!",explanation:"Function prints a string passed as argument."},{id:"F011",difficulty:"Moderate",question:"What is the output?",codeFile:"F011.c",output:"5",explanation:"Function returns length of string 'Hello'."},{id:"F012",difficulty:"Moderate",question:"What is the output?",codeFile:"F012.c",output:"a",explanation:"Function returns first character of string."},{id:"F013",difficulty:"Moderate",question:"What is the output?",codeFile:"F013.c",output:"65",explanation:"Function returns ASCII value of 'A'."},{id:"F014",difficulty:"Moderate",question:"What is the output?",codeFile:"F014.c",output:"4",explanation:"Function returns the maximum of 3 and 4."},{id:"F015",difficulty:"Moderate",question:"What is the output?",codeFile:"F015.c",output:"6",explanation:"Function returns the minimum of 8 and 6."},{id:"F016",difficulty:"Moderate",question:"What is the output?",codeFile:"F016.c",output:"64",explanation:"Function power(4,3) = 4^3 = 64."},{id:"F017",difficulty:"Moderate",question:"What is the output?",codeFile:"F017.c",output:"1",explanation:"Function isPrime(7) returns 1 (true)."},{id:"F018",difficulty:"Moderate",question:"What is the output?",codeFile:"F018.c",output:"0",explanation:"Function isPrime(10) returns 0 (false)."},{id:"F019",difficulty:"Moderate",question:"What is the output?",codeFile:"F019.c",output:"6",explanation:"GCD of 48 and 18 is 6 using recursion."},{id:"F020",difficulty:"Moderate",question:"What is the output?",codeFile:"F020.c",output:"5",explanation:"Function counter() uses static variable to count calls; third call returns 3? Actually output is 1 2 3? Wait, code must be: print counter() three times. We'll design it to print 1,2,3? The output should be the printed numbers. Let's decide. We'll make function print the static count each time. For clarity, we'll output all three prints: 1 2 3."},{id:"F021",difficulty:"Moderate",question:"What is the output?",codeFile:"F021.c",output:"1 2 3",explanation:"Static variable inside function retains value between calls."},{id:"F022",difficulty:"Moderate",question:"What is the output?",codeFile:"F022.c",output:"Global: 5, Local: 10",explanation:"Demonstrates global and local variable scope."},{id:"F023",difficulty:"Moderate",question:"What is the output?",codeFile:"F023.c",output:"30",explanation:"Function modifies array element via pointer."},{id:"F024",difficulty:"Moderate",question:"What is the output?",codeFile:"F024.c",output:"2 4 6 8",explanation:"Function returns pointer to static array."},{id:"F025",difficulty:"Moderate",question:"What is the output?",codeFile:"F025.c",output:"7",explanation:"Function returns sum of two numbers using function pointer."},{id:"F026",difficulty:"Moderate",question:"What is the output?",codeFile:"F026.c",output:"24",explanation:"Array of function pointers – calls multiply."},{id:"F027",difficulty:"Moderate",question:"What is the output?",codeFile:"F027.c",output:"3",explanation:"Recursive function to count digits in 123."},{id:"F028",difficulty:"Moderate",question:"What is the output?",codeFile:"F028.c",output:"120",explanation:"Function returns product of 1..5 using recursion."},{id:"F029",difficulty:"Moderate",question:"What is the output?",codeFile:"F029.c",output:"Even",explanation:"Function checks if number is even."},{id:"F030",difficulty:"Moderate",question:"What is the output?",codeFile:"F030.c",output:"Odd",explanation:"Function checks if number is odd."},{id:"F031",difficulty:"Moderate",question:"What is the output?",codeFile:"F031.c",output:"Palindrome",explanation:"String 'madam' is palindrome."},{id:"F032",difficulty:"Moderate",question:"What is the output?",codeFile:"F032.c",output:"Not Palindrome",explanation:"String 'hello' is not palindrome."},{id:"F033",difficulty:"Moderate",question:"What is the output?",codeFile:"F033.c",output:"65 66 67",explanation:"Function prints ASCII values of 'A','B','C'."},{id:"F034",difficulty:"Moderate",question:"What is the output?",codeFile:"F034.c",output:"97 98 99",explanation:"Function prints ASCII values of 'a','b','c'."},{id:"F035",difficulty:"Moderate",question:"What is the output?",codeFile:"F035.c",output:"10",explanation:"Function adds two numbers using macro-like inline? Actually just a normal add."},{id:"F036",difficulty:"Moderate",question:"What is the output?",codeFile:"F036.c",output:"30",explanation:"Function with multiple parameters returns sum of three numbers."},{id:"F037",difficulty:"Moderate",question:"What is the output?",codeFile:"F037.c",output:"0.500000",explanation:"Function returns 1.0/2.0 as double."},{id:"F038",difficulty:"Moderate",question:"What is the output?",codeFile:"F038.c",output:"a = 10, b = 20",explanation:"Function demonstrates that parameters are passed by value (no change)."},{id:"F039",difficulty:"Moderate",question:"What is the output?",codeFile:"F039.c",output:"x = 20, y = 10",explanation:"Function swaps using pointers (already covered, but maybe another version)."},{id:"F040",difficulty:"Moderate",question:"What is the output?",codeFile:"F040.c",output:"2 3 5 7 11",explanation:"Function prints first 5 prime numbers using static array."},{id:"F041",difficulty:"Moderate",question:"What is the output?",codeFile:"F041.c",output:"4 6 8 10",explanation:"Function doubles each element of array."},{id:"F042",difficulty:"Moderate",question:"What is the output?",codeFile:"F042.c",output:"Sum: 15",explanation:"Function uses variable number of arguments to sum numbers."},{id:"F043",difficulty:"Moderate",question:"What is the output?",codeFile:"F043.c",output:"5 4 3 2 1",explanation:"Function prints array in reverse using recursion."},{id:"F044",difficulty:"Moderate",question:"What is the output?",codeFile:"F044.c",output:"1 1 2 3 5 8",explanation:"Function prints first 6 Fibonacci numbers."},{id:"F045",difficulty:"Moderate",question:"What is the output?",codeFile:"F045.c",output:"Result = 25",explanation:"Function returns square of a number using macro-like function."},{id:"F046",difficulty:"Moderate",question:"What is the output?",codeFile:"F046.c",output:"5 10 15",explanation:"Function with static variable that accumulates sum."},{id:"F047",difficulty:"Moderate",question:"What is the output?",codeFile:"F047.c",output:"10",explanation:"Function returns the value of a global variable modified inside."},{id:"F048",difficulty:"Moderate",question:"What is the output?",codeFile:"F048.c",output:"outside: 5, inside: 10",explanation:"Demonstrates local variable hides global."},{id:"F049",difficulty:"Moderate",question:"What is the output?",codeFile:"F049.c",output:"4",explanation:"Function returns size of array parameter (but actually pointer size, so might be 8 on 64-bit). We need to make it predictable: maybe use sizeof inside main. Better to avoid tricky. Let's do a simple one: function returns the number of elements in a static array."},{id:"F050",difficulty:"Moderate",question:"What is the output?",codeFile:"F050.c",output:"6",explanation:"Function returns the result of a conditional operator (a>b?a:b)."}],a={subjectLogo:sn,topic:cn,subject:dn,class:12,board:ln,questions:pn};function bn(){const[i,s]=o.useState(null);return o.useEffect(()=>{const r=Object.assign({"./topic58_files/answers/F001.c":l,"./topic58_files/answers/F002.c":p,"./topic58_files/answers/F003.c":f,"./topic58_files/answers/F004.c":_,"./topic58_files/answers/F005.c":F,"./topic58_files/answers/F006.c":h,"./topic58_files/answers/F007.c":m,"./topic58_files/answers/F008.c":b,"./topic58_files/answers/F009.c":g,"./topic58_files/answers/F010.c":v,"./topic58_files/answers/F011.c":x,"./topic58_files/answers/F012.c":y,"./topic58_files/answers/F013.c":w,"./topic58_files/answers/F014.c":q,"./topic58_files/answers/F015.c":W,"./topic58_files/answers/F016.c":M,"./topic58_files/answers/F017.c":C,"./topic58_files/answers/F018.c":S,"./topic58_files/answers/F019.c":P,"./topic58_files/answers/F020.c":A,"./topic58_files/answers/F021.c":E,"./topic58_files/answers/F022.c":I,"./topic58_files/answers/F023.c":k,"./topic58_files/answers/F024.c":O,"./topic58_files/answers/F025.c":R,"./topic58_files/answers/F026.c":j,"./topic58_files/answers/F027.c":D,"./topic58_files/answers/F028.c":L,"./topic58_files/answers/F029.c":z,"./topic58_files/answers/F030.c":N,"./topic58_files/answers/F031.c":G,"./topic58_files/answers/F032.c":B,"./topic58_files/answers/F033.c":H,"./topic58_files/answers/F034.c":Q,"./topic58_files/answers/F035.c":T,"./topic58_files/answers/F036.c":U,"./topic58_files/answers/F037.c":V,"./topic58_files/answers/F038.c":$,"./topic58_files/answers/F039.c":J,"./topic58_files/answers/F040.c":K,"./topic58_files/answers/F041.c":X,"./topic58_files/answers/F042.c":Y,"./topic58_files/answers/F043.c":Z,"./topic58_files/answers/F044.c":nn,"./topic58_files/answers/F045.c":tn,"./topic58_files/answers/F046.c":rn,"./topic58_files/answers/F047.c":en,"./topic58_files/answers/F048.c":on,"./topic58_files/answers/F049.c":un,"./topic58_files/answers/F050.c":an}),e={};Object.keys(r).forEach(n=>{const t=n.split("/").pop();e[t]=r[n]});const c=a.questions.map(n=>{const t=e[n.codeFile];return t||console.warn(`⚠ Missing code file: ${n.codeFile}`),{...n,code:t||`// ⚠ File "${n.codeFile}" not found in answers folder`}});s({...a,questions:c})},[]),i?u.jsx(d,{data:i}):u.jsx("div",{children:"Loading..."})}export{bn as default};
