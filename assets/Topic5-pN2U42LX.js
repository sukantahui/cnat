import{b as c,j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as m}from"./CProjectAnswerTemplateEnhanced-Wqumu2-a.js";import"./CodeBlock-BGRh7DVf.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const p=`/**
 * ============================================================================
 * Project 1: Modular Scientific Geometry & Engineering Mensuration Suite
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

#define PI 3.141592653589793

/* Prototypes */
double circleArea(double radius);
double circleCircumference(double radius);
double cylinderVolume(double radius, double height);
double sphereVolume(double radius);

int main(void) {
    double r = 5.0, h = 12.0;

    printf("===================================================================\\n");
    printf("     MODULAR GEOMETRY ENGINEERING SUITE - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    printf("Dimensions: Radius = %.2f units, Height = %.2f units\\n\\n", r, h);
    printf("1. Circle Area          : %10.4f sq units\\n", circleArea(r));
    printf("2. Circle Circumference : %10.4f units\\n", circleCircumference(r));
    printf("3. Cylinder Volume      : %10.4f cubic units\\n", cylinderVolume(r, h));
    printf("4. Sphere Volume        : %10.4f cubic units\\n", sphereVolume(r));

    printf("===================================================================\\n");
    return 0;
}

double circleArea(double radius) {
    return PI * radius * radius;
}

double circleCircumference(double radius) {
    return 2.0 * PI * radius;
}

double cylinderVolume(double radius, double height) {
    return circleArea(radius) * height; // Modular function reuse!
}

double sphereVolume(double radius) {
    return (4.0 / 3.0) * PI * radius * radius * radius;
}
`,g=`/**
 * ============================================================================
 * Project 10: Recursive Fibonacci Memoization Cache with Static Lookup Array
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

#define MAX_CACHE 90

/* Recursive Fibonacci with Static Memoization Cache: Reduces O(2^N) to O(N)! */
unsigned long long fibonacciMemoized(int n) {
    static unsigned long long memo[MAX_CACHE] = {0};
    static int initialized = 0;

    if (!initialized) {
        memo[0] = 0;
        memo[1] = 1;
        initialized = 1;
    }

    if (n <= 0) return 0;
    if (n == 1) return 1;

    /* If already cached, return immediately! */
    if (memo[n] != 0) {
        return memo[n];
    }

    /* Compute and store in static cache */
    memo[n] = fibonacciMemoized(n - 1) + fibonacciMemoized(n - 2);
    return memo[n];
}

int main(void) {
    printf("===================================================================\\n");
    printf("     MEMOIZED RECURSIVE FIBONACCI ACCELERATOR - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    printf("Computing Fibonacci terms with O(N) Memoization Cache:\\n\\n");
    for (int i = 0; i <= 20; i += 2) {
        printf("  • Fibonacci(%2d) = %llu\\n", i, fibonacciMemoized(i));
    }

    printf("  • Fibonacci(50) = %llu (Instantaneous via static cache!)\\n", fibonacciMemoized(50));

    printf("\\n===================================================================\\n");
    return 0;
}
`,f=`/**
 * ============================================================================
 * Project 11: Pass-by-Const-Pointer High-Performance Student Record Manager
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

typedef struct {
    int rollNumber;
    char name[64];
    float marks[3]; // Physics, Chemistry, Math
    double gpa;
} StudentRecord;

/* Pass-by-const-pointer: avoids copying large struct memory while preventing mutation */
void printStudentTranscript(const StudentRecord *student) {
    if (student == NULL) return;

    printf("TRANSCRIPT: Roll #%d | Name: %s\\n", student->rollNumber, student->name);
    printf("  Scores: Physics = %.1f, Chemistry = %.1f, Math = %.1f\\n",
           student->marks[0], student->marks[1], student->marks[2]);
    printf("  Overall Calculated GPA: %.2f / 4.00 | Status: %s\\n\\n",
           student->gpa, (student->gpa >= 2.0) ? "IN GOOD STANDING" : "PROBATION");
}

int main(void) {
    printf("===================================================================\\n");
    printf("     PASS-BY-CONST-POINTER STRUCT MANAGER - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    StudentRecord s1 = {101, "Swadeep Sharma", {88.0f, 92.5f, 95.0f}, 3.85};
    StudentRecord s2 = {102, "Tuhina Mukherjee", {94.0f, 89.0f, 96.5f}, 3.92};

    printStudentTranscript(&s1);
    printStudentTranscript(&s2);

    printf("===================================================================\\n");
    return 0;
}
`,v=`/**
 * ============================================================================
 * Project 12: Recursive Sum of Digits & Digital Root Reducer
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

/* 1. Recursive Sum of Digits */
int sumOfDigitsRecursive(long long n) {
    if (n < 0) n = -n;
    if (n == 0) return 0;
    return (n % 10) + sumOfDigitsRecursive(n / 10);
}

/* 2. Recursive Digital Root (Repeated digit sum until 1 single digit remains) */
int digitalRootRecursive(long long n) {
    if (n < 10) return (int)n;
    return digitalRootRecursive(sumOfDigitsRecursive(n));
}

int main(void) {
    printf("===================================================================\\n");
    printf("     RECURSIVE DIGITAL ROOT REDUCER - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    long long testNumbers[] = {12345, 98765, 493193, 2026};
    int count = sizeof(testNumbers) / sizeof(testNumbers[0]);

    for (int i = 0; i < count; i++) {
        long long num = testNumbers[i];
        int digitSum = sumOfDigitsRecursive(num);
        int dRoot = digitalRootRecursive(num);
        printf("Number: %-10lld -> Sum of Digits = %2d -> Digital Root = %d\\n", num, digitSum, dRoot);
    }

    printf("\\n===================================================================\\n");
    return 0;
}
`,h=`/**
 * ============================================================================
 * Project 13: Register Storage Class Micro-Benchmark for Iteration Loops
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

void performRegisterLoopCalculation(int iterations) {
    register int counter;
    register long long accumulator = 0;

    printf("Executing calculation loop for %d iterations using CPU register variables...\\n", iterations);

    for (counter = 1; counter <= iterations; counter++) {
        accumulator += (counter * 3) - 1;
    }

    printf(">> Result calculated in registers: %lld\\n", accumulator);
}

int main(void) {
    printf("===================================================================\\n");
    printf("     REGISTER STORAGE CLASS BENCHMARK - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    performRegisterLoopCalculation(10000);
    performRegisterLoopCalculation(50000);

    printf("\\n===================================================================\\n");
    return 0;
}
`,R=`/**
 * ============================================================================
 * Project 14: Mutual Indirect Recursion Parser
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

/* Forward Declarations for Mutual Recursion */
bool isEvenMutual(int n);
bool isOddMutual(int n);

bool isEvenMutual(int n) {
    if (n == 0) return true;
    if (n < 0) return isEvenMutual(-n);
    return isOddMutual(n - 1); // Calls isOddMutual!
}

bool isOddMutual(int n) {
    if (n == 0) return false;
    if (n < 0) return isOddMutual(-n);
    return isEvenMutual(n - 1); // Calls isEvenMutual!
}

int main(void) {
    printf("===================================================================\\n");
    printf("     MUTUAL INDIRECT RECURSION PARSER - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    int testValues[] = {0, 1, 4, 7, 12, 19, 42};
    int count = sizeof(testValues) / sizeof(testValues[0]);

    for (int i = 0; i < count; i++) {
        int v = testValues[i];
        printf("Number: %2d -> isEven = %-5s | isOdd = %-5s\\n",
               v, isEvenMutual(v) ? "TRUE" : "FALSE", isOddMutual(v) ? "TRUE" : "FALSE");
    }

    printf("\\n===================================================================\\n");
    return 0;
}
`,C=`/**
 * ============================================================================
 * Project 15: Recursive Decimal to Binary / Hexadecimal Base Converter
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

/* Recursive Binary Printer: prints on stack unwinding! */
void printBinaryRecursive(unsigned int n) {
    if (n > 1) {
        printBinaryRecursive(n / 2);
    }
    printf("%d", n % 2);
}

/* Recursive Hexadecimal Printer: prints on stack unwinding! */
void printHexRecursive(unsigned int n) {
    const char hexDigits[] = "0123456789ABCDEF";
    if (n >= 16) {
        printHexRecursive(n / 16);
    }
    printf("%c", hexDigits[n % 16]);
}

int main(void) {
    printf("===================================================================\\n");
    printf("     RECURSIVE NUMBER BASE CONVERTER - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    unsigned int testNumbers[] = {5, 29, 255, 1024, 65535};
    int count = sizeof(testNumbers) / sizeof(testNumbers[0]);

    for (int i = 0; i < count; i++) {
        unsigned int val = testNumbers[i];
        printf("Decimal: %-5u | Binary: ", val);
        printBinaryRecursive(val);
        printf(" | Hexadecimal: 0x");
        printHexRecursive(val);
        printf("\\n");
    }

    printf("\\n===================================================================\\n");
    return 0;
}
`,S=`/**
 * ============================================================================
 * Project 2: High-Speed Integer Arithmetic & Stats Out-Parameter Package
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

void calculateArrayStatistics(const int *arr, int size, int *minOut, int *maxOut, long long *sumOut, double *avgOut) {
    if (arr == NULL || size <= 0 || minOut == NULL || maxOut == NULL || sumOut == NULL || avgOut == NULL) {
        return;
    }

    *minOut = arr[0];
    *maxOut = arr[0];
    *sumOut = 0;

    for (int i = 0; i < size; i++) {
        if (arr[i] < *minOut) *minOut = arr[i];
        if (arr[i] > *maxOut) *maxOut = arr[i];
        *sumOut += arr[i];
    }
    *avgOut = (double)(*sumOut) / size;
}

int main(void) {
    int data[] = {45, 88, 12, 95, 67, 34, 102, 78};
    int n = sizeof(data) / sizeof(data[0]);

    int minVal, maxVal;
    long long totalSum;
    double avgVal;

    printf("===================================================================\\n");
    printf("     MULTIPLE OUT-PARAMETERS STATS ENGINE - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    calculateArrayStatistics(data, n, &minVal, &maxVal, &totalSum, &avgVal);

    printf("Dataset: [ 45, 88, 12, 95, 67, 34, 102, 78 ] (N = %d)\\n\\n", n);
    printf("Calculated Statistics via Pointer Out-Parameters:\\n");
    printf("  • Minimum Value   : %d\\n", minVal);
    printf("  • Maximum Value   : %d\\n", maxVal);
    printf("  • Total Sum       : %lld\\n", totalSum);
    printf("  • Average (Mean)  : %.2f\\n", avgVal);

    printf("===================================================================\\n");
    return 0;
}
`,E=`/**
 * ============================================================================
 * Project 3: Banking Account State Machine with Persistent Static Transaction Ledger
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

void executeBankTransaction(const char *clientName, char actionType, double amount) {
    /* Persistent State across calls */
    static int transactionSequence = 1000;
    static double runningVaultBalance = 100000.00; // Initial 1 Lakh

    transactionSequence++;

    printf("[TXN-%04d] Client: %-12s | Action: %c | Amount: INR %8.2f\\n",
           transactionSequence, clientName, actionType, amount);

    if (actionType == 'D' || actionType == 'd') {
        runningVaultBalance += amount;
        printf("   >> Deposit Processed. Updated Vault Balance: INR %.2f\\n\\n", runningVaultBalance);
    } else if (actionType == 'W' || actionType == 'w') {
        if (amount <= runningVaultBalance) {
            runningVaultBalance -= amount;
            printf("   >> Withdrawal Dispensed. Remaining Vault Balance: INR %.2f\\n\\n", runningVaultBalance);
        } else {
            printf("   >> REJECTED: Insufficient Vault Funds! Balance: INR %.2f\\n\\n", runningVaultBalance);
        }
    }
}

int main(void) {
    printf("===================================================================\\n");
    printf("     PERSISTENT STATIC BANKING STATE MACHINE - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    executeBankTransaction("Swadeep", 'D', 25000.00);
    executeBankTransaction("Tuhina", 'W', 15000.00);
    executeBankTransaction("Abhronila", 'W', 80000.00);
    executeBankTransaction("Debangshu", 'W', 50000.00); // Trigger rejection check

    printf("===================================================================\\n");
    return 0;
}
`,b=`/**
 * ============================================================================
 * Project 4: In-Place Array Reversal & Two-Pointer Element Transformation
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

void printArray(const char *label, const int *arr, int size) {
    printf("%-20s: [ ", label);
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("]\\n");
}

void reverseArrayInPlace(int *arr, int size) {
    if (arr == NULL || size <= 1) return;
    int left = 0, right = size - 1;

    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

int main(void) {
    int dataset[] = {10, 20, 30, 40, 50, 60, 70};
    int len = sizeof(dataset) / sizeof(dataset[0]);

    printf("===================================================================\\n");
    printf("     IN-PLACE TWO-POINTER ARRAY REVERSAL - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    printArray("Original Array", dataset, len);
    reverseArrayInPlace(dataset, len);
    printArray("In-Place Reversed", dataset, len);

    printf("\\n===================================================================\\n");
    return 0;
}
`,y=`/**
 * ============================================================================
 * Project 5: Mathematical Recursion Suite: Factorial, GCD, and Binary Exponentiation
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

/* 1. Recursive Factorial */
unsigned long long recFactorial(int n) {
    if (n <= 1) return 1;
    return n * recFactorial(n - 1);
}

/* 2. Recursive Euclidean GCD */
long long recGCD(long long a, long long b) {
    if (b == 0) return a;
    return recGCD(b, a % b);
}

/* 3. Recursive Fast Power: X^N in O(log N) */
double recFastPower(double base, int exp) {
    if (exp == 0) return 1.0;
    if (exp < 0) return 1.0 / recFastPower(base, -exp);

    double half = recFastPower(base, exp / 2);
    if (exp % 2 == 0) return half * half;
    return base * half * half;
}

int main(void) {
    printf("===================================================================\\n");
    printf("     MATHEMATICAL RECURSION SUITE - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    printf("1. Recursive Factorial (6!)   : %llu\\n", recFactorial(6));
    printf("2. Recursive GCD (252, 105)   : %lld\\n", recGCD(252, 105));
    printf("3. Recursive Fast Power (2^10): %.2f\\n", recFastPower(2.0, 10));
    printf("4. Recursive Fast Power (3^5) : %.2f\\n", recFastPower(3.0, 5));

    printf("===================================================================\\n");
    return 0;
}
`,T=`/**
 * ============================================================================
 * Project 6: Tower of Hanoi 3-Peg Solver with Step Counting & State Ledger
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

void solveHanoi(int disks, char source, char destination, char auxiliary, int *moveCounter) {
    if (disks == 1) {
        (*moveCounter)++;
        printf("  Step %02d: Move disk 1 from Peg [%c] -> Peg [%c]\\n", *moveCounter, source, destination);
        return;
    }

    /* Move n-1 disks from source to auxiliary using destination */
    solveHanoi(disks - 1, source, auxiliary, destination, moveCounter);

    /* Move nth largest disk from source to destination */
    (*moveCounter)++;
    printf("  Step %02d: Move disk %d from Peg [%c] -> Peg [%c]\\n", *moveCounter, disks, source, destination);

    /* Move n-1 disks from auxiliary to destination using source */
    solveHanoi(disks - 1, auxiliary, destination, source, moveCounter);
}

int main(void) {
    printf("===================================================================\\n");
    printf("     TOWER OF HANOI RECURSIVE SOLVER - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    int disks = 3;
    int moves = 0;

    printf("Solving Tower of Hanoi for N = %d disks (Expected moves = 2^%d - 1 = %d):\\n\\n",
           disks, disks, (1 << disks) - 1);

    solveHanoi(disks, 'A', 'C', 'B', &moves);

    printf("\\n>> Total Disks Moved: %d | Total Sequential Moves: %d\\n", disks, moves);
    printf("===================================================================\\n");
    return 0;
}
`,A=`/**
 * ============================================================================
 * Project 7: Recursive Palindrome & String Symmetry Verifier
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

bool isPalindromeRecursive(const char *str, int left, int right) {
    /* Base Case: pointers meet or cross */
    if (left >= right) return true;

    /* If boundary characters don't match, not a palindrome */
    if (str[left] != str[right]) return false;

    /* Recursive Step on inner substring */
    return isPalindromeRecursive(str, left + 1, right - 1);
}

bool checkStringPalindrome(const char *str) {
    if (str == NULL) return false;
    int len = 0;
    while (str[len] != '\\0') len++;
    return isPalindromeRecursive(str, 0, len - 1);
}

int main(void) {
    printf("===================================================================\\n");
    printf("     RECURSIVE STRING PALINDROME VERIFIER - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    const char *words[] = {"radar", "level", "barrackpore", "rotator", "computer", "madam"};
    int count = sizeof(words) / sizeof(words[0]);

    for (int i = 0; i < count; i++) {
        const char *w = words[i];
        bool isPal = checkStringPalindrome(w);
        printf("Word: %-15s -> %s\\n", w, isPal ? "[PALINDROME]" : "[NOT PALINDROME]");
    }

    printf("\\n===================================================================\\n");
    return 0;
}
`,O=`/**
 * ============================================================================
 * Project 8: Tail-Recursive Accumulator Engine vs Non-Tail Execution
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

/* 1. Non-Tail Recursive Sum: Pending addition on stack unwinding */
long long sumNonTail(int n) {
    if (n <= 1) return n;
    return n + sumNonTail(n - 1); // Non-tail: addition happens AFTER return!
}

/* 2. Tail Recursive Sum: Accumulator passes intermediate result forward */
long long sumTail(int n, long long accumulator) {
    if (n <= 0) return accumulator;
    return sumTail(n - 1, accumulator + n); // Pure tail call: eligible for TCO!
}

int main(void) {
    printf("===================================================================\\n");
    printf("     TAIL RECURSION ACCUMULATOR LAB - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    int testN = 100;

    printf("Sum from 1 to %d:\\n", testN);
    printf("  • Non-Tail Recursive Result : %lld (O(N) Stack Frames)\\n", sumNonTail(testN));
    printf("  • Tail-Recursive Result     : %lld (O(1) Stack Frames under TCO)\\n", sumTail(testN, 0));

    printf("\\n>> Summary: Tail calls pass running totals in the accumulator argument,\\n");
    printf("   allowing compilers to reuse stack frames and prevent stack overflows!\\n");
    printf("===================================================================\\n");
    return 0;
}
`,x=`/**
 * ============================================================================
 * Project 9: Multi-Module Variable Linkage & Extern Configuration Router
 * Module: 001_004 - Functions & Modular Programming
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

/* Global configuration with external linkage */
int g_securityLevel = 3;
bool g_systemOnline = true;

/* Static private helper with internal linkage */
static void logInternalSecurityCheck(int level) {
    printf("   [Security Daemon] Internal Auth Check Passed for Level %d\\n", level);
}

/* Public interface function */
void dispatchSystemCommand(const char *command) {
    if (!g_systemOnline) {
        printf(">> System is OFFLINE. Cannot execute '%s'\\n", command);
        return;
    }

    logInternalSecurityCheck(g_securityLevel);
    printf(">> Executing Command '%s' under Security Profile %d\\n\\n", command, g_securityLevel);
}

int main(void) {
    printf("===================================================================\\n");
    printf("     EXTERN & STATIC LINKAGE ROUTER - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    dispatchSystemCommand("INITIALIZE_NETWORK_BUFFER");
    dispatchSystemCommand("CALIBRATE_TELEMETRY_SENSORS");

    g_securityLevel = 5; // Elevated permissions
    dispatchSystemCommand("FLUSH_STORAGE_JOURNAL");

    printf("===================================================================\\n");
    return 0;
}
`,w="C Module 1.4: Functions, Scope, Storage Classes & Recursion",P="C Programming Language (ANSI C / C99)",N="University & Industrial Standards",I=["GCC Compiler","VS Code","GDB Debugger","Clang-Tidy"],M={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Shyamnagar"},k=JSON.parse('[{"projectId":"FUNC_001","title":"Modular Scientific Geometry & Engineering Mensuration Suite","difficulty":"Beginner","description":"Industrial CAD software breaks geometric mathematics into modular, reusable function subroutines. In this project, you will construct a Modular Geometry Engineering Suite in C. The program declares function prototypes for 2D circles, 3D cylinders, and 3D spheres above main(). The cylinder volume function demonstrates modular reuse by invoking the circleArea() function directly within its calculation body.","learningOutcome":"Function Prototypes, Subroutine Decomposition & Modular Function Reusability","exampleText":"Radius = 5.0, Height = 12.0","exampleOutput":"Dimensions: Radius = 5.00 units, Height = 12.00 units\\n\\n1. Circle Area          :    78.5398 sq units\\n2. Circle Circumference :    31.4159 units\\n3. Cylinder Volume      :   942.4778 cubic units\\n4. Sphere Volume        :   523.5988 cubic units","logicExplanation":"1. **Prototypes**: Declared above main to inform compiler of signatures.\\n2. **Modular Reuse**: `cylinderVolume` calls `circleArea(r) * h`.\\n3. **Precision**: Uses standard double-precision floating-point arithmetic.","answerFile":"./answers/answer1.c","codeExplanation":"1. Prototypes establish API interfaces.\\n2. Definitions implement domain logic cleanly."},{"projectId":"FUNC_002","title":"High-Speed Integer Arithmetic & Stats Out-Parameter Package","difficulty":"Intermediate","description":"C functions cannot return multiple values directly via return statements. To overcome this limitation, systems software passes memory addresses as pointer out-parameters. In this project, you will build an Array Statistics Engine in C that computes the minimum value, maximum value, total sum, and arithmetic mean of an array, writing all 4 computed outputs back into the caller\'s stack frame variables via pointer out-parameters.","learningOutcome":"Pointer Out-Parameters, Passing Memory Addresses (&), Call Stack Modification & Defensive Null Validation","exampleText":"Dataset: [45, 88, 12, 95, 67, 34, 102, 78]","exampleOutput":"Dataset: [ 45, 88, 12, 95, 67, 34, 102, 78 ] (N = 8)\\n\\nCalculated Statistics via Pointer Out-Parameters:\\n  • Minimum Value   : 12\\n  • Maximum Value   : 102\\n  • Total Sum       : 521\\n  • Average (Mean)  : 65.12","logicExplanation":"1. **Out-Parameters**: `int *minOut`, `int *maxOut`, `long long *sumOut`, `double *avgOut`.\\n2. **Dereferencing**: `*minOut = val` directly updates the caller\'s memory.\\n3. **Defensive Guard**: Returns early if any pointer argument is `NULL`.","answerFile":"./answers/answer2.c","codeExplanation":"1. `calculateArrayStatistics()`: Mutates 4 caller variables via pointer dereferencing.\\n2. Caller passes `&minVal`, `&maxVal`, etc."},{"projectId":"FUNC_003","title":"Banking Account State Machine with Persistent Static Transaction Ledger","difficulty":"Intermediate","description":"Global variables expose financial state to unintended mutations across an entire codebase. In this project, you will construct a Secure Banking Transaction Engine in C using static local variables. The transaction processor maintains an internal running vault balance and sequential transaction counter that persist across multiple invocations without exposing any mutable state to the global scope.","learningOutcome":"Static Local Variables, Data Encapsulation, State Persistence & Financial Ledger Invariants","exampleText":"Deposits and withdrawals across Swadeep, Tuhina, Abhronila, Debangshu","exampleOutput":"[TXN-1001] Client: Swadeep      | Action: D | Amount: INR 25000.00\\n   >> Deposit Processed. Updated Vault Balance: INR 125000.00\\n\\n[TXN-1002] Client: Tuhina       | Action: W | Amount: INR 15000.00\\n   >> Withdrawal Dispensed. Remaining Vault Balance: INR 110000.00\\n\\n[TXN-1003] Client: Abhronila    | Action: W | Amount: INR 80000.00\\n   >> Withdrawal Dispensed. Remaining Vault Balance: INR 30000.00\\n\\n[TXN-1004] Client: Debangshu    | Action: W | Amount: INR 50000.00\\n   >> REJECTED: Insufficient Vault Funds! Balance: INR 30000.00","logicExplanation":"1. **static int sequence**: Increments on every invocation.\\n2. **static double vault**: Preserves current ledger balance.\\n3. **Encapsulation**: State is inaccessible outside `executeBankTransaction()`.","answerFile":"./answers/answer3.c","codeExplanation":"1. Static variables allocated in the data segment.\\n2. Initialized once at startup."},{"projectId":"FUNC_004","title":"In-Place Array Reversal & Two-Pointer Element Transformation","difficulty":"Beginner","description":"Manipulating buffers in-place without creating secondary heap allocations is essential for high-performance memory management. In this project, you will build an In-Place Array Reversal routine in C. The function accepts a pointer to an integer array and its length, swapping elements from the outside inward using two moving index pointers until they meet in the middle.","learningOutcome":"Array Pointer Passing, In-Place Memory Mutation, Two-Pointer Algorithm & const Array Read Safety","exampleText":"Original: [ 10, 20, 30, 40, 50, 60, 70 ]","exampleOutput":"Original Array      : [ 10 20 30 40 50 60 70 ]\\nIn-Place Reversed   : [ 70 60 50 40 30 20 10 ]","logicExplanation":"1. **Two Pointers**: `left = 0`, `right = size - 1`.\\n2. **Swap In-Place**: Swap `arr[left]` and `arr[right]` using temporary integer.\\n3. **Step**: `left++`, `right--` while `left < right`.","answerFile":"./answers/answer4.c","codeExplanation":"1. `reverseArrayInPlace()`: Directly mutates array memory without temporary array allocation.\\n2. `printArray()`: Qualified with `const int *arr` for read-only safety."},{"projectId":"FUNC_005","title":"Mathematical Recursion Suite: Factorial, GCD, and Binary Exponentiation","difficulty":"Beginner","description":"Recursive decomposition allows complex mathematical series to be expressed with elegant, minimal code. In this project, you will build a Mathematical Recursion Toolkit in C. The suite includes: 1. Factorial computation (N!); 2. Euclidean Greatest Common Divisor (GCD); 3. Fast Binary Exponentiation (X^N in O(log N) time by halving exponents on even steps).","learningOutcome":"Base Cases, Recursive Step Invariants, Logarithmic Fast Power & Call Stack Expansion","exampleText":"6!, GCD(252, 105), 2^10, 3^5","exampleOutput":"1. Recursive Factorial (6!)   : 720\\n2. Recursive GCD (252, 105)   : 21\\n3. Recursive Fast Power (2^10): 1024.00\\n4. Recursive Fast Power (3^5) : 243.00","logicExplanation":"1. **Factorial Base**: `if (n <= 1) return 1`.\\n2. **GCD Base**: `if (b == 0) return a; return recGCD(b, a % b)`.\\n3. **Fast Power**: `half = recFastPower(x, n/2); if (n%2==0) return half*half; else return x*half*half`.","answerFile":"./answers/answer5.c","codeExplanation":"1. Encapsulates 3 classical recursive mathematical algorithms.\\n2. Demonstrates divide-and-conquer exponentiation."},{"projectId":"FUNC_006","title":"Tower of Hanoi 3-Peg Solver with Step Counting & State Ledger","difficulty":"Intermediate","description":"The Tower of Hanoi is the quintessential divide-and-conquer recursive puzzle. In this project, you will implement a 3-Peg Tower of Hanoi Solver in C. The recursive algorithm moves N-1 disks from Source to Auxiliary, moves the largest disk from Source to Destination, and moves the N-1 disks from Auxiliary to Destination. The program tracks the exact step sequence and updates a cumulative move counter via a pointer parameter.","learningOutcome":"Multi-Branch Divide-and-Conquer Recursion, State Ledger Tracking & 2^N - 1 Algorithmic Proof","exampleText":"N = 3 Disks (Pegs A, B, C)","exampleOutput":"Solving Tower of Hanoi for N = 3 disks (Expected moves = 2^3 - 1 = 7):\\n\\n  Step 01: Move disk 1 from Peg [A] -> Peg [C]\\n  Step 02: Move disk 2 from Peg [A] -> Peg [B]\\n  Step 03: Move disk 1 from Peg [C] -> Peg [B]\\n  Step 04: Move disk 3 from Peg [A] -> Peg [C]\\n  Step 05: Move disk 1 from Peg [B] -> Peg [A]\\n  Step 06: Move disk 2 from Peg [B] -> Peg [C]\\n  Step 07: Move disk 1 from Peg [A] -> Peg [C]\\n\\n>> Total Disks Moved: 3 | Total Sequential Moves: 7","logicExplanation":"1. **Base Case**: If `disks == 1`, move disk 1 directly from `source` to `destination`.\\n2. **Step 1**: `solveHanoi(n-1, source, aux, dest)`.\\n3. **Step 2**: Move disk `n`.\\n4. **Step 3**: `solveHanoi(n-1, aux, dest, source)`.","answerFile":"./answers/answer6.c","codeExplanation":"1. `solveHanoi()`: Implements 3-peg recursive transfer.\\n2. `*moveCounter`: Tracks total executed moves."},{"projectId":"FUNC_007","title":"Recursive Palindrome & String Symmetry Verifier","difficulty":"Beginner","description":"String symmetry verification can be solved recursively by comparing boundary characters and delegating the remaining inner substring to a smaller recursive call. In this project, you will build a Recursive String Palindrome Verifier in C. The function compares str[left] and str[right]; if they match, it recurses on (left + 1, right - 1) until the pointer indices meet or cross.","learningOutcome":"Recursive String Parsing, Boundary Pointer Comparison & Halting Invariants","exampleText":"Strings: \'radar\', \'level\', \'barrackpore\', \'rotator\', \'computer\', \'madam\'","exampleOutput":"Word: radar           -> [PALINDROME]\\nWord: level           -> [PALINDROME]\\nWord: barrackpore     -> [NOT PALINDROME]\\nWord: rotator         -> [PALINDROME]\\nWord: computer        -> [NOT PALINDROME]\\nWord: madam           -> [PALINDROME]","logicExplanation":"1. **Base Case**: `if (left >= right) return true`.\\n2. **Mismatch**: `if (str[left] != str[right]) return false`.\\n3. **Recursive Step**: `return isPalindromeRecursive(str, left + 1, right - 1)`.","answerFile":"./answers/answer7.c","codeExplanation":"1. `checkStringPalindrome()`: Wrapper that computes length and invokes recursive helper.\\n2. `isPalindromeRecursive()`: Performs recursive boundary checks."},{"projectId":"FUNC_008","title":"Tail-Recursive Accumulator Engine vs Non-Tail Execution","difficulty":"Intermediate","description":"Non-tail recursive functions leave pending mathematical operations waiting on the stack, consuming O(N) stack memory. Tail-recursive functions pass the intermediate result forward in an accumulator parameter, enabling compilers with Tail Call Optimization (TCO) to reuse the current stack frame. In this project, you will implement and compare both non-tail and tail-recursive summation engines in C.","learningOutcome":"Tail Call Optimization (TCO), Accumulator Design Pattern & Stack Frame Reuse","exampleText":"N = 100","exampleOutput":"Sum from 1 to 100:\\n  • Non-Tail Recursive Result : 5050 (O(N) Stack Frames)\\n  • Tail-Recursive Result     : 5050 (O(1) Stack Frames under TCO)\\n\\n>> Summary: Tail calls pass running totals in the accumulator argument,\\n   allowing compilers to reuse stack frames and prevent stack overflows!","logicExplanation":"1. **Non-Tail**: `return n + sumNonTail(n - 1)` (addition pending after return).\\n2. **Tail**: `return sumTail(n - 1, accumulator + n)` (recursive call is absolute last operation).\\n3. **Stack**: Tail calls convert to iterative jumps in optimized assembly.","answerFile":"./answers/answer8.c","codeExplanation":"1. `sumNonTail()`: Demonstrates standard recursive unwinding.\\n2. `sumTail()`: Uses accumulator for O(1) stack space optimization."},{"projectId":"FUNC_009","title":"Multi-Module Variable Linkage & Extern Configuration Router","difficulty":"Intermediate","description":"Professional C applications structure their architecture across multiple source files using internal and external linkage. In this project, you will build a System Configuration Router in C that models multi-file linkage. Global system state variables are declared with external linkage (extern), while private security daemon helpers are encapsulated using static internal linkage to prevent unauthorized global access.","learningOutcome":"External Linkage (extern), Internal Linkage (static functions), Information Hiding & Multi-File Architecture","exampleText":"Commands: \'INITIALIZE_NETWORK_BUFFER\', \'CALIBRATE_TELEMETRY_SENSORS\', \'FLUSH_STORAGE_JOURNAL\'","exampleOutput":">> Executing Command \'INITIALIZE_NETWORK_BUFFER\' under Security Profile 3\\n\\n>> Executing Command \'CALIBRATE_TELEMETRY_SENSORS\' under Security Profile 3\\n\\n>> Executing Command \'FLUSH_STORAGE_JOURNAL\' under Security Profile 5","logicExplanation":"1. **extern variables**: Visible to all compilation units linked in the final executable.\\n2. **static functions**: Hidden from the linker; callable only within the local file.\\n3. **Encapsulation**: Prevents symbol name collisions across large libraries.","answerFile":"./answers/answer9.c","codeExplanation":"1. `g_securityLevel`: Global variable with external linkage.\\n2. `logInternalSecurityCheck()`: File-private static helper function."},{"projectId":"FUNC_010","title":"Recursive Fibonacci Memoization Cache with Static Lookup Array","difficulty":"Intermediate","description":"Naive recursive Fibonacci runs in exponential O(2^N) time due to massive overlapping subproblem re-evaluations. In this project, you will construct a Memoized Recursive Fibonacci Accelerator in C. Using a static cache array inside the recursive function, computed terms are saved upon first calculation. Subsequent calls return cached results in instantaneous O(1) time, reducing total time complexity from O(2^N) to O(N).","learningOutcome":"Memoization Caching, Dynamic Programming Intuition & Static Persistent Lookup Arrays","exampleText":"Fibonacci terms: 0 to 20, and Fibonacci(50)","exampleOutput":"Computing Fibonacci terms with O(N) Memoization Cache:\\n\\n  • Fibonacci( 0) = 0\\n  • Fibonacci( 2) = 1\\n  • Fibonacci( 4) = 3\\n  • Fibonacci( 6) = 8\\n  • Fibonacci( 8) = 21\\n  • Fibonacci(10) = 55\\n  • Fibonacci(20) = 6765\\n  • Fibonacci(50) = 12586269025 (Instantaneous via static cache!)","logicExplanation":"1. **Static Cache**: `static unsigned long long memo[90]` persists across calls.\\n2. **Cache Check**: `if (memo[n] != 0) return memo[n]`.\\n3. **Store & Return**: `memo[n] = fib(n-1) + fib(n-2); return memo[n]`.","answerFile":"./answers/answer10.c","codeExplanation":"1. `fibonacciMemoized()`: Implements top-down dynamic memoization.\\n2. Computes 50th Fibonacci term instantaneously without recursion timeouts."},{"projectId":"FUNC_011","title":"Pass-by-Const-Pointer High-Performance Student Record Manager","difficulty":"Beginner","description":"Passing large structure objects by value copies entire memory blocks onto the call stack, wasting CPU cycles. Passing structures via const pointers passes only an 8-byte RAM address while guaranteeing that the function cannot accidentally modify caller data. In this project, you will build a Student Academic Record Manager in C that inspects transcript records using const struct pointers and arrow operators (->).","learningOutcome":"Const Struct Pointers (const Struct*), Arrow Operator (->), Read-Only Invariants & Memory Performance","exampleText":"Student 1: Swadeep Sharma (GPA 3.85) | Student 2: Tuhina Mukherjee (GPA 3.92)","exampleOutput":"TRANSCRIPT: Roll #101 | Name: Swadeep Sharma\\n  Scores: Physics = 88.0, Chemistry = 92.5, Math = 95.0\\n  Overall Calculated GPA: 3.85 / 4.00 | Status: IN GOOD STANDING\\n\\nTRANSCRIPT: Roll #102 | Name: Tuhina Mukherjee\\n  Scores: Physics = 94.0, Chemistry = 89.0, Math = 96.5\\n  Overall Calculated GPA: 3.92 / 4.00 | Status: IN GOOD STANDING","logicExplanation":"1. **Pass by Pointer**: `const StudentRecord *student` passes an 8-byte address.\\n2. **Read-Only Safety**: `const` qualifier prevents any modifications to fields.\\n3. **Arrow Operator**: `student->gpa` dereferences and accesses struct members.","answerFile":"./answers/answer11.c","codeExplanation":"1. `printStudentTranscript()`: High-speed read-only struct printer.\\n2. Eliminates struct memory duplication on the call stack."},{"projectId":"FUNC_012","title":"Recursive Sum of Digits & Digital Root Reducer","difficulty":"Beginner","description":"The Digital Root of a number is the single digit obtained by repeatedly summing its digits until a single-digit integer remains. In this project, you will construct a Recursive Digital Root Reducer in C. First, a recursive function computes the sum of digits by peeling (n % 10) and recursing on (n / 10). Second, a digital root function repeatedly delegates to the digit sum routine until the value is less than 10.","learningOutcome":"Digit Peeling Recursion, Nested Function Delegation & Mathematical Base Cases","exampleText":"Numbers: 12345, 98765, 493193, 2026","exampleOutput":"Number: 12345      -> Sum of Digits = 15 -> Digital Root = 6\\nNumber: 98765      -> Sum of Digits = 35 -> Digital Root = 8\\nNumber: 493193     -> Sum of Digits = 29 -> Digital Root = 2\\nNumber: 2026       -> Sum of Digits = 10 -> Digital Root = 1","logicExplanation":"1. **Digit Sum**: `if (n == 0) return 0; return (n % 10) + sumOfDigits(n / 10)`.\\n2. **Digital Root**: `if (n < 10) return n; return digitalRoot(sumOfDigits(n))`.\\n3. **Halting Invariant**: Digit sum strictly reduces positive integers.","answerFile":"./answers/answer12.c","codeExplanation":"1. `sumOfDigitsRecursive()`: Extracts digits via modulo and integer division.\\n2. `digitalRootRecursive()`: Reduces multi-digit sums to a single digit."},{"projectId":"FUNC_013","title":"Register Storage Class Micro-Benchmark for Iteration Loops","difficulty":"Beginner","description":"The register storage class requests that the compiler store frequently accessed local variables inside high-speed CPU registers rather than system RAM. In this project, you will build a Register Calculation Micro-Benchmark in C. The program executes iterative accumulation loops using register variables and explores the architectural restriction prohibiting the use of address-of operators (&) on register variables.","learningOutcome":"Register Storage Class (register), CPU Register Hardware vs RAM & Silicon Level Optimization","exampleText":"Iterations: 10,000 and 50,000","exampleOutput":"Executing calculation loop for 10000 iterations using CPU register variables...\\n>> Result calculated in registers: 149995000\\n\\nExecuting calculation loop for 50000 iterations using CPU register variables...\\n>> Result calculated in registers: 3749975000","logicExplanation":"1. **register specifier**: Requests CPU register storage (e.g. EAX, EBX, R8).\\n2. **Speed**: Eliminates memory load/store bus cycles for fast loop counters.\\n3. **Address Restriction**: `&regVar` is illegal because registers have no memory addresses.","answerFile":"./answers/answer13.c","codeExplanation":"1. `performRegisterLoopCalculation()`: Executes accumulator loop using register variables."},{"projectId":"FUNC_014","title":"Mutual Indirect Recursion Parser","difficulty":"Intermediate","description":"Mutual (Indirect) Recursion occurs when function A calls function B, and function B in turn calls function A. In this project, you will implement a Mutual Recursion Even/Odd Number Classifier in C. The function isEven(n) checks if n == 0 (true) or delegates to isOdd(n - 1); similarly, isOdd(n) checks if n == 0 (false) or delegates to isEven(n - 1). You will use forward function declarations (prototypes) to resolve mutual compiler dependencies.","learningOutcome":"Mutual Indirect Recursion, Forward Function Prototypes & Cyclic Call Stack Traversal","exampleText":"Numbers: 0, 1, 4, 7, 12, 19, 42","exampleOutput":"Number:  0 -> isEven = TRUE  | isOdd = FALSE\\nNumber:  1 -> isEven = FALSE | isOdd = TRUE \\nNumber:  4 -> isEven = TRUE  | isOdd = FALSE\\nNumber:  7 -> isEven = FALSE | isOdd = TRUE \\nNumber: 12 -> isEven = TRUE  | isOdd = FALSE\\nNumber: 19 -> isEven = FALSE | isOdd = TRUE \\nNumber: 42 -> isEven = TRUE  | isOdd = FALSE","logicExplanation":"1. **Forward Declaration**: `bool isOddMutual(int n);` declared before `isEvenMutual()`.\\n2. **isEven(n)**: `if (n == 0) return true; return isOdd(n - 1)`.\\n3. **isOdd(n)**: `if (n == 0) return false; return isEven(n - 1)`.","answerFile":"./answers/answer14.c","codeExplanation":"1. Forward prototypes enable mutual compilation.\\n2. Demonstrates indirect cyclic recursion."},{"projectId":"FUNC_015","title":"Recursive Decimal to Binary / Hexadecimal Base Converter","difficulty":"Beginner","description":"Converting numbers from decimal to binary or hexadecimal generates digits in reverse order (least significant digit first). By using recursion and printing the modulo remainder during the unwinding phase (after the recursive call returns), the digits naturally print in correct left-to-right positional order without needing extra string reversal buffers. In this project, you will construct a Recursive Number Base Converter in C.","learningOutcome":"Stack Unwinding Execution Order, Base Conversion (Binary / Hex) & Bufferless Number Printing","exampleText":"Decimal Numbers: 5, 29, 255, 1024, 65535","exampleOutput":"Decimal: 5     | Binary: 101 | Hexadecimal: 0x5\\nDecimal: 29    | Binary: 11101 | Hexadecimal: 0x1D\\nDecimal: 255   | Binary: 11111111 | Hexadecimal: 0xFF\\nDecimal: 1024  | Binary: 10000000000 | Hexadecimal: 0x400\\nDecimal: 65535 | Binary: 1111111111111111 | Hexadecimal: 0xFFFF","logicExplanation":"1. **Recurse First**: `if (n > 1) printBinaryRecursive(n / 2)`.\\n2. **Print on Unwind**: `printf(\\"%d\\", n % 2)`.\\n3. **Natural Reversal**: Deepest calls return first, printing the most significant digit first!","answerFile":"./answers/answer15.c","codeExplanation":"1. `printBinaryRecursive()`: Recursively extracts binary bits.\\n2. `printHexRecursive()`: Recursively formats hexadecimal digits."}]'),l={projectCategory:w,subject:P,board:N,class:"Computer Science Core / BCA / B.Tech / ICSE / Diploma",tools:I,institute:M,projects:k};function U(){const[t,u]=c.useState(null);return c.useEffect(()=>{const r=Object.assign({"./topic5_files/answers/answer1.c":p,"./topic5_files/answers/answer10.c":g,"./topic5_files/answers/answer11.c":f,"./topic5_files/answers/answer12.c":v,"./topic5_files/answers/answer13.c":h,"./topic5_files/answers/answer14.c":R,"./topic5_files/answers/answer15.c":C,"./topic5_files/answers/answer2.c":S,"./topic5_files/answers/answer3.c":E,"./topic5_files/answers/answer4.c":b,"./topic5_files/answers/answer5.c":y,"./topic5_files/answers/answer6.c":T,"./topic5_files/answers/answer7.c":A,"./topic5_files/answers/answer8.c":O,"./topic5_files/answers/answer9.c":x}),a={};Object.keys(r).forEach(n=>{const o=n.split("/").pop();a[o]=r[n]});const d=l.projects.map(n=>{const i=(n.answerFile||"").split("/").pop(),s=a[i];return s||console.warn(`⚠ Missing C answer file: ${i}`),{...n,answer:s||`// Source file "${i}" not found in answers folder`}});u({...l,projects:d})},[]),t?e.jsx(m,{data:t}):e.jsx("div",{className:"p-8 text-slate-400 flex items-center justify-center min-h-[350px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{className:"text-sm font-semibold",children:"Loading 15 Functions, Scope & Recursion Capstone Projects..."})]})})}export{U as default};
