import{b as l,j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as m}from"./CProjectAnswerTemplateEnhanced-Cl148W-n.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const p=`/**
 * ============================================================================
 * Project 1: Interactive ATM Banking PIN Verification & Multi-Transaction Ledger
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

int main(void) {
    int correctPin = 2024;
    int enteredPin, attempts = 0;
    double balance = 50000.00;
    bool authenticated = false;

    printf("===================================================================\\n");
    printf("     BARRACKPORE SECURE ATM BANKING TERMINAL - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    /* Step 1: PIN Authentication with Max 3 Attempts */
    do {
        printf("Please enter your 4-digit security PIN (Attempt %d/3): ", attempts + 1);
        /* In test environments, simulate user input if non-interactive */
        enteredPin = 2024; 
        printf("%d\\n", enteredPin);
        attempts++;

        if (enteredPin == correctPin) {
            authenticated = true;
            printf(">> Authentication Successful! Welcome to your account.\\n");
            break;
        } else {
            printf(">> Access Denied: Incorrect PIN!\\n");
        }
    } while (attempts < 3);

    if (!authenticated) {
        printf(">> SECURITY ALERT: 3 failed attempts! Card locked.\\n");
        return 0;
    }

    /* Step 2: Interactive Transaction Operations */
    int transactions[] = {1, 2, 3, 4}; /* Menu options: Balance, Deposit, Withdraw, Exit */
    int currentOp = 0;

    printf("\\n--- Executing Automated Session Transactions ---\\n");

    /* Transaction 1: Balance Check */
    printf("\\n[Transaction 1: Inquire Balance]\\n");
    printf("Current Ledger Balance: INR %.2f\\n", balance);

    /* Transaction 2: Deposit Cash */
    double depositAmount = 15000.00;
    printf("\\n[Transaction 2: Deposit Cash]\\n");
    printf("Depositing INR %.2f...\\n", depositAmount);
    if (depositAmount > 0.0) {
        balance += depositAmount;
        printf(">> Deposit Confirmed. New Balance: INR %.2f\\n", balance);
    }

    /* Transaction 3: Withdraw Cash with Multiples of 100 Validation */
    double withdrawAmount = 12500.00;
    printf("\\n[Transaction 3: Withdraw Cash]\\n");
    printf("Requesting withdrawal of INR %.2f...\\n", withdrawAmount);
    if (withdrawAmount <= 0.0) {
        printf(">> Error: Withdrawal amount must be strictly positive!\\n");
    } else if ((long long)withdrawAmount % 100 != 0) {
        printf(">> Error: ATM only dispenses 100, 200, and 500 currency notes!\\n");
    } else if (withdrawAmount > balance) {
        printf(">> Error: Insufficient funds! Current: INR %.2f\\n", balance);
    } else {
        balance -= withdrawAmount;
        printf(">> Cash Dispensed! Remaining Balance: INR %.2f\\n", balance);
    }

    /* Transaction 4: Exit */
    printf("\\n[Transaction 4: Terminate Session]\\n");
    printf(">> Session closed cleanly. Thank you for banking with Coder & AccoTax!\\n");
    printf("===================================================================\\n");
    return 0;
}
`,g=`/**
 * ============================================================================
 * Project 10: Optimized O(sqrt(N)) Prime Range Generator & Prime Factorization
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

/* Fast Prime Checker: O(sqrt(N)) time complexity */
bool isPrime(int n) {
    if (n < 2) return false;
    if (n == 2 || n == 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;

    for (int d = 5; d * d <= n; d += 6) {
        if (n % d == 0 || n % (d + 2) == 0) {
            return false;
        }
    }
    return true;
}

/* Print Prime Factorization of an Integer */
void printPrimeFactorization(int n) {
    printf("Prime Factorization of %d: ", n);
    if (n <= 1) {
        printf("None (N <= 1)\\n");
        return;
    }

    int temp = n;
    while (temp % 2 == 0) {
        printf("2 ");
        temp /= 2;
    }

    for (int d = 3; d * d <= temp; d += 2) {
        while (temp % d == 0) {
            printf("%d ", d);
            temp /= d;
        }
    }

    if (temp > 2) {
        printf("%d", temp);
    }
    printf("\\n");
}

int main(void) {
    printf("===================================================================\\n");
    printf("     PRIME GENERATOR & FACTORIZATION ENGINE - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    /* 1. Generate All Primes in Range [1, 50] */
    printf("--- [1] Prime Numbers between 1 and 50 ---\\n");
    int primeCount = 0;
    for (int num = 1; num <= 50; num++) {
        if (isPrime(num)) {
            printf("%3d ", num);
            primeCount++;
            if (primeCount % 10 == 0) printf("\\n");
        }
    }
    printf("\\nTotal Primes Found: %d\\n\\n", primeCount);

    /* 2. Prime Factorization Demonstrations */
    printf("--- [2] Prime Factorization Suite ---\\n");
    printPrimeFactorization(360);  /* 2 2 2 3 3 5 */
    printPrimeFactorization(1024); /* 2^10 */
    printPrimeFactorization(9973); /* Prime */

    printf("===================================================================\\n");
    return 0;
}
`,f=`/**
 * ============================================================================
 * Project 11: Symmetrical Diamond & Hollow Diamond Pattern Rendering Engine
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

void renderSolidDiamond(int n) {
    printf("--- Centered Solid Diamond (N = %d) ---\\n", n);
    /* Upper Pyramid */
    for (int i = 1; i <= n; i++) {
        for (int s = 1; s <= n - i; s++) printf(" ");
        for (int k = 1; k <= 2 * i - 1; k++) printf("*");
        printf("\\n");
    }
    /* Lower Inverted Pyramid */
    for (int i = n - 1; i >= 1; i--) {
        for (int s = 1; s <= n - i; s++) printf(" ");
        for (int k = 1; k <= 2 * i - 1; k++) printf("*");
        printf("\\n");
    }
    printf("\\n");
}

void renderHollowDiamond(int n) {
    printf("--- Centered Hollow Diamond (N = %d) ---\\n", n);
    /* Upper Hollow */
    for (int i = 1; i <= n; i++) {
        for (int s = 1; s <= n - i; s++) printf(" ");
        for (int k = 1; k <= 2 * i - 1; k++) {
            if (k == 1 || k == 2 * i - 1) printf("*");
            else printf(" ");
        }
        printf("\\n");
    }
    /* Lower Hollow */
    for (int i = n - 1; i >= 1; i--) {
        for (int s = 1; s <= n - i; s++) printf(" ");
        for (int k = 1; k <= 2 * i - 1; k++) {
            if (k == 1 || k == 2 * i - 1) printf("*");
            else printf(" ");
        }
        printf("\\n");
    }
    printf("\\n");
}

int main(void) {
    printf("===================================================================\\n");
    printf("     GEOMETRIC DIAMOND PATTERN ENGINE - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    renderSolidDiamond(4);
    renderHollowDiamond(4);

    printf("===================================================================\\n");
    return 0;
}
`,h=`/**
 * ============================================================================
 * Project 12: Floyd's Triangle & Pascal's Binomial Coefficient Pattern Generator
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

void printFloydsTriangle(int rows) {
    printf("--- Floyd's Natural Number Triangle (%d Rows) ---\\n", rows);
    int count = 1;
    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%3d ", count++);
        }
        printf("\\n");
    }
    printf("\\n");
}

void printPascalsTriangle(int rows) {
    printf("--- Pascal's Binomial Coefficient Triangle (%d Rows) ---\\n", rows);
    for (int i = 0; i < rows; i++) {
        /* Leading spaces for centered pyramid */
        for (int s = 0; s < rows - i - 1; s++) {
            printf("  ");
        }
        int val = 1;
        for (int j = 0; j <= i; j++) {
            printf("%4d", val);
            /* Compute next binomial coefficient iteratively */
            val = val * (i - j) / (j + 1);
        }
        printf("\\n");
    }
    printf("\\n");
}

int main(void) {
    printf("===================================================================\\n");
    printf("     FLOYD'S & PASCAL'S PATTERN ENGINE - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    printFloydsTriangle(5);
    printPascalsTriangle(5);

    printf("===================================================================\\n");
    return 0;
}
`,C=`/**
 * ============================================================================
 * Project 13: 2D Matrix Multiplication & Transposition with Cache Locality
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

#define N 3

void printMatrix(const char* name, int mat[N][N]) {
    printf("Matrix %s (%dx%d):\\n", name, N, N);
    for (int r = 0; r < N; r++) {
        for (int c = 0; c < N; c++) {
            printf("%5d", mat[r][c]);
        }
        printf("\\n");
    }
    printf("\\n");
}

int main(void) {
    printf("===================================================================\\n");
    printf("     2D MATRIX MULTIPLICATION & TRANSPOSE - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    int A[N][N] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    int B[N][N] = {
        {9, 8, 7},
        {6, 5, 4},
        {3, 2, 1}
    };

    int C[N][N] = {0};
    int T[N][N] = {0};

    /* 1. Matrix Multiplication: O(N^3) standard algorithm */
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            for (int k = 0; k < N; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    /* 2. Matrix Transposition: O(N^2) coordinate swap */
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            T[j][i] = A[i][j];
        }
    }

    printMatrix("A", A);
    printMatrix("B", B);
    printMatrix("C = (A * B)", C);
    printMatrix("A^T (Transpose of A)", T);

    printf("===================================================================\\n");
    return 0;
}
`,S=`/**
 * ============================================================================
 * Project 14: Spiral Number Matrix (NxN) Clockwise Inward Boundary Shrinking
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

#define SIZE 4

int main(void) {
    printf("===================================================================\\n");
    printf("     NxN SPIRAL NUMBER MATRIX ENGINE - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    int matrix[SIZE][SIZE];
    int val = 1;
    int top = 0, bottom = SIZE - 1;
    int left = 0, right = SIZE - 1;

    /* 4-Phase Boundary Shrinking Loop */
    while (top <= bottom && left <= right) {
        /* Phase 1: Traverse Left to Right along Top Boundary */
        for (int col = left; col <= right; col++) {
            matrix[top][col] = val++;
        }
        top++;

        /* Phase 2: Traverse Top to Bottom along Right Boundary */
        for (int row = top; row <= bottom; row++) {
            matrix[row][right] = val++;
        }
        right--;

        /* Phase 3: Traverse Right to Left along Bottom Boundary */
        if (top <= bottom) {
            for (int col = right; col >= left; col--) {
                matrix[bottom][col] = val++;
            }
            bottom--;
        }

        /* Phase 4: Traverse Bottom to Top along Left Boundary */
        if (left <= right) {
            for (int row = bottom; row >= top; row--) {
                matrix[row][left] = val++;
            }
            left++;
        }
    }

    /* Print Resulting Spiral Grid */
    printf("Generated %dx%d Clockwise Spiral Grid:\\n\\n", SIZE, SIZE);
    for (int r = 0; r < SIZE; r++) {
        for (int c = 0; c < SIZE; c++) {
            printf("%4d", matrix[r][c]);
        }
        printf("\\n");
    }

    printf("\\n===================================================================\\n");
    return 0;
}
`,w=`/**
 * ============================================================================
 * Project 15: Euclidean Algorithm Greatest Common Divisor & Least Common Multiple
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

/* Fast Euclidean GCD Algorithm using modulo while loop */
long long calculateGCD(long long a, long long b) {
    while (b != 0) {
        long long rem = a % b;
        a = b;
        b = rem;
    }
    return a;
}

/* Calculate LCM using mathematical duality: LCM = (a * b) / GCD(a, b) */
long long calculateLCM(long long a, long long b) {
    if (a == 0 || b == 0) return 0;
    long long gcd = calculateGCD(a, b);
    return (a / gcd) * b; // Divide first to prevent integer overflow
}

int main(void) {
    printf("===================================================================\\n");
    printf("     EUCLIDEAN GCD & LCM ACCELERATOR - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    long long testPairs[][2] = {
        {48, 18},
        {105, 35},
        {270, 192},
        {1000000LL, 250000LL},
        {17, 19} // Coprime
    };

    int count = sizeof(testPairs) / sizeof(testPairs[0]);

    for (int i = 0; i < count; i++) {
        long long a = testPairs[i][0];
        long long b = testPairs[i][1];
        long long gcd = calculateGCD(a, b);
        long long lcm = calculateLCM(a, b);

        printf("Pair (%lld, %lld):\\n", a, b);
        printf("  • Greatest Common Divisor (GCD) : %lld\\n", gcd);
        printf("  • Least Common Multiple   (LCM) : %lld\\n\\n", lcm);
    }

    printf("===================================================================\\n");
    return 0;
}
`,T=`/**
 * ============================================================================
 * Project 16: Collatz Conjecture (3N + 1 Hailstone Sequence) Step Analyzer
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

void analyzeCollatzSequence(long long startNum) {
    printf("--- Collatz Sequence Analysis for N = %lld ---\\n", startNum);
    long long current = startNum;
    long long stepCount = 0;
    long long peakValue = startNum;

    printf("Sequence: %lld", current);

    while (current != 1) {
        if (current % 2 == 0) {
            current = current / 2;
        } else {
            current = 3 * current + 1;
        }

        if (current > peakValue) {
            peakValue = current;
        }

        stepCount++;
        printf(" -> %lld", current);
        if (stepCount % 10 == 0) printf("\\n         ");
    }

    printf("\\n\\n>> Summary Report:\\n");
    printf("  • Total Steps to Reach 1 : %lld\\n", stepCount);
    printf("  • Maximum Peak Value Hit : %lld\\n\\n", peakValue);
}

int main(void) {
    printf("===================================================================\\n");
    printf("     COLLATZ CONJECTURE (3N + 1) ANALYZER - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    analyzeCollatzSequence(6);
    analyzeCollatzSequence(27); // Famous for taking 111 steps and peaking at 9232!

    printf("===================================================================\\n");
    return 0;
}
`,E=`/**
 * ============================================================================
 * Project 17: Digital Cash Register & Optimal Currency Denomination Breakdown
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

void calculateDenominations(int amount) {
    printf("--- Currency Breakdown for INR %d ---\\n", amount);
    if (amount <= 0) {
        printf(">> Invalid currency amount!\\n\\n");
        return;
    }

    /* Standard Indian Rupee Denominations */
    int notes[] = {500, 200, 100, 50, 20, 10, 5, 2, 1};
    int noteCount = sizeof(notes) / sizeof(notes[0]);

    int remaining = amount;
    int totalNotes = 0;

    printf("Denomination Breakdown (Greedy Allocation):\\n");
    for (int i = 0; i < noteCount; i++) {
        int noteVal = notes[i];
        if (remaining >= noteVal) {
            int count = remaining / noteVal;
            remaining %= noteVal;
            totalNotes += count;
            printf("  • INR %3d Notes : %4d  (Total = INR %d)\\n", noteVal, count, count * noteVal);
        }
    }
    printf(">> Minimum Total Notes/Coins Required: %d\\n\\n", totalNotes);
}

int main(void) {
    printf("===================================================================\\n");
    printf("     DIGITAL CASH REGISTER & CURRENCY BREAKDOWN - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    calculateDenominations(3888);
    calculateDenominations(1475);
    calculateDenominations(92);

    printf("===================================================================\\n");
    return 0;
}
`,y=`/**
 * ============================================================================
 * Project 18: Roman Numeral to Decimal & Decimal to Roman Bidirectional Converter
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

/* Convert Decimal Integer to Roman Numeral String */
void decimalToRoman(int num) {
    printf("Decimal %4d -> Roman: ", num);
    if (num <= 0 || num > 3999) {
        printf("Out of standard range (1 - 3999)\\n");
        return;
    }

    int values[] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    const char* symbols[] = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
    int count = sizeof(values) / sizeof(values[0]);

    for (int i = 0; i < count; i++) {
        while (num >= values[i]) {
            printf("%s", symbols[i]);
            num -= values[i];
        }
    }
    printf("\\n");
}

/* Helper to map single Roman character to integer */
int romanCharValue(char ch) {
    switch (ch) {
        case 'I': case 'i': return 1;
        case 'V': case 'v': return 5;
        case 'X': case 'x': return 10;
        case 'L': case 'l': return 50;
        case 'C': case 'c': return 100;
        case 'D': case 'd': return 500;
        case 'M': case 'm': return 1000;
        default: return 0;
    }
}

/* Convert Roman Numeral String to Decimal Integer */
int romanToDecimal(const char* roman) {
    int total = 0;
    int i = 0;

    while (roman[i] != '\\0') {
        int s1 = romanCharValue(roman[i]);
        if (roman[i + 1] != '\\0') {
            int s2 = romanCharValue(roman[i + 1]);
            if (s1 >= s2) {
                total += s1;
                i++;
            } else {
                total += (s2 - s1);
                i += 2;
            }
        } else {
            total += s1;
            i++;
        }
    }
    return total;
}

int main(void) {
    printf("===================================================================\\n");
    printf("     BIDIRECTIONAL ROMAN NUMERAL CONVERTER - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    /* 1. Decimal to Roman */
    printf("--- [1] Decimal to Roman Conversions ---\\n");
    decimalToRoman(1947);
    decimalToRoman(2024);
    decimalToRoman(399);
    decimalToRoman(48);

    /* 2. Roman to Decimal */
    printf("\\n--- [2] Roman to Decimal Conversions ---\\n");
    const char* testRomans[] = {"MCMXLVII", "MMXXIV", "CCCXCIX", "XLVIII"};
    for (int i = 0; i < 4; i++) {
        printf("Roman %-10s -> Decimal: %d\\n", testRomans[i], romanToDecimal(testRomans[i]));
    }

    printf("===================================================================\\n");
    return 0;
}
`,N=`/**
 * ============================================================================
 * Project 19: Telemetry Data Stream Filter with Sentinel Termination & Early Jumps
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

#define SENTINEL_TERMINATOR -9999

int main(void) {
    printf("===================================================================\\n");
    printf("     TELEMETRY SENSOR STREAM PROCESSOR - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    /* Simulated Sensor Telemetry Packet Stream */
    int sensorDataStream[] = {
        24, 28, -5, 32, -99, 29, 31, 35, -500, 27, SENTINEL_TERMINATOR, 40, 50
    };
    int streamSize = sizeof(sensorDataStream) / sizeof(sensorDataStream[0]);

    int validPackets = 0;
    int corruptedPackets = 0;
    long long temperatureSum = 0;

    printf("Processing Telemetry Stream (Sentinel = %d)...\\n\\n", SENTINEL_TERMINATOR);

    for (int i = 0; i < streamSize; i++) {
        int packet = sensorDataStream[i];

        /* Guard 1: End of Stream Sentinel Check (break) */
        if (packet == SENTINEL_TERMINATOR) {
            printf(">> Packet %02d: [SENTINEL DETECTED] End of telemetry stream. Halting parser.\\n", i);
            break; // Terminate reading
        }

        /* Guard 2: Sensor Calibration Anomaly Noise (continue) */
        if (packet < 0) {
            printf(">> Packet %02d: [CORRUPTED NOISE] Negative reading (%d C). Skipping packet.\\n", i, packet);
            corruptedPackets++;
            continue; // Skip noise
        }

        /* Valid Data Processing */
        validPackets++;
        temperatureSum += packet;
        printf(">> Packet %02d: [VALID DATA] Recorded Temp: %d C | Running Sum: %lld\\n", i, packet, temperatureSum);
    }

    printf("\\n--- Telemetry Processing Summary ---\\n");
    printf("  • Total Valid Packets     : %d\\n", validPackets);
    printf("  • Total Corrupted Packets : %d\\n", corruptedPackets);
    if (validPackets > 0) {
        printf("  • Average Temperature     : %.2f C\\n", (double)temperatureSum / validPackets);
    }

    printf("===================================================================\\n");
    return 0;
}
`,R=`/**
 * ============================================================================
 * Project 2: Multi-Criterion Grade & Honors Classifier with Yoda Equality Protection
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

void classifyStudent(const char* name, double score, double attendancePercent, bool disciplinaryClearance) {
    printf("Student: %-12s | Score: %5.1f%% | Attendance: %5.1f%% | Record: %s\\n",
           name, score, attendancePercent, disciplinaryClearance ? "CLEAN" : "FLAGGED");

    /* Defensive Guard Clause: Boundary Validation */
    if (score < 0.0 || score > 100.0 || attendancePercent < 0.0 || attendancePercent > 100.0) {
        printf(">> Status: INVALID DATA (Marks or Attendance outside 0-100%% range)\\n\\n");
        return;
    }

    /* Attendance Policy Check */
    if (attendancePercent < 75.0) {
        printf(">> Status: DEBARRED FROM FINAL EXAM (Attendance < 75.0%% cutoff)\\n\\n");
        return;
    }

    /* Academic Grade Classification using else-if ladder with Yoda Style */
    char grade;
    const char* awardHonor;

    if (score >= 90.0) {
        grade = 'O'; /* Outstanding */
        awardHonor = "President's Gold Medalist";
    } else if (score >= 80.0) {
        grade = 'E'; /* Excellent */
        awardHonor = "Dean's High Honors List";
    } else if (score >= 70.0) {
        grade = 'A'; /* Very Good */
        awardHonor = "First Class Division";
    } else if (score >= 60.0) {
        grade = 'B'; /* Good */
        awardHonor = "Second Class Division";
    } else if (score >= 50.0) {
        grade = 'C'; /* Fair */
        awardHonor = "Pass Division";
    } else if (score >= 40.0) {
        grade = 'D'; /* Marginal Pass */
        awardHonor = "Remedial Coaching Recommended";
    } else {
        grade = 'F'; /* Fail */
        awardHonor = "Academic Probation / Retake Required";
    }

    /* Yoda Condition Check for Disciplinary Invariant */
    if (true == disciplinaryClearance) {
        printf(">> Grade Awarded: '%c' | Classification: %s\\n\\n", grade, awardHonor);
    } else {
        printf(">> Grade Awarded: '%c' | WITHHELD (Pending Disciplinary Review)\\n\\n", grade);
    }
}

int main(void) {
    printf("===================================================================\\n");
    printf("     ACADEMIC PERFORMANCE & HONORS CLASSIFIER - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    classifyStudent("Swadeep", 94.5, 92.0, true);
    classifyStudent("Tuhina", 82.0, 88.5, true);
    classifyStudent("Abhronila", 73.0, 68.0, true);  /* Debarred */
    classifyStudent("Debangshu", 91.0, 85.0, false); /* Disciplinary hold */

    printf("===================================================================\\n");
    return 0;
}
`,A=`/**
 * ============================================================================
 * Project 20: Linux Kernel Style Multi-Stage Resource Allocator & Error Unwinding
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

/* Simulated Kernel Subsystem Allocation Routines */
bool allocNetworkSocket(void)  { printf("  [1/4] Allocating Network Socket... SUCCESS\\n"); return true; }
bool allocDatabaseHandle(void) { printf("  [2/4] Connecting to Database... SUCCESS\\n"); return true; }
bool allocSecureCryptoKey(bool forceFail) { 
    if (forceFail) {
        printf("  [3/4] Generating TLS Crypto Key... FAILED (Entropy Pool Depleted)\\n");
        return false;
    }
    printf("  [3/4] Generating TLS Crypto Key... SUCCESS\\n");
    return true;
}
bool allocWorkerThread(void)   { printf("  [4/4] Spawning Worker Thread... SUCCESS\\n"); return true; }

/* Cleanup Routines */
void freeWorkerThread(void)   { printf("  [CLEANUP] Terminating Worker Thread.\\n"); }
void freeSecureCryptoKey(void){ printf("  [CLEANUP] Wiping TLS Crypto Key from RAM.\\n"); }
void freeDatabaseHandle(void) { printf("  [CLEANUP] Closing Database Connection.\\n"); }
void freeNetworkSocket(void)  { printf("  [CLEANUP] Releasing Network Socket.\\n"); }

/* Multi-Stage Allocator with Unified goto Error Handler */
int initializeKernelService(bool simulateError) {
    printf("\\nInitializing Multi-Tier Kernel Service (Simulate Error = %s):\\n", simulateError ? "TRUE" : "FALSE");

    if (!allocNetworkSocket()) {
        goto err_net;
    }

    if (!allocDatabaseHandle()) {
        goto err_db;
    }

    if (!allocSecureCryptoKey(simulateError)) {
        goto err_crypto;
    }

    if (!allocWorkerThread()) {
        goto err_thread;
    }

    printf(">> SUCCESS: Kernel Service running in optimal state!\\n\\n");
    
    /* Clean operational shutdown */
    freeWorkerThread();
    freeSecureCryptoKey();
    freeDatabaseHandle();
    freeNetworkSocket();
    return 0;

/* --- UNIFIED REVERSE-ORDER ERROR CLEANUP LABELS --- */
err_thread:
    freeSecureCryptoKey();
err_crypto:
    freeDatabaseHandle();
err_db:
    freeNetworkSocket();
err_net:
    printf(">> ERROR: Subsystem startup failed! All acquired resources safely deallocated.\\n\\n");
    return -1;
}

int main(void) {
    printf("===================================================================\\n");
    printf("     LINUX KERNEL ERROR UNWINDING PATTERN - CODER & ACCOTAX\\n");
    printf("===================================================================\\n");

    /* Run 1: Failure during stage 3 (Crypto Key) */
    initializeKernelService(true);

    /* Run 2: Complete flawless startup and teardown */
    initializeKernelService(false);

    printf("===================================================================\\n");
    return 0;
}
`,b=`/**
 * ============================================================================
 * Project 3: Gregorian Calendar Leap Year & Day-of-Week Zeller's Congruence
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

/* Check Leap Year */
bool isLeapYear(int year) {
    return ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));
}

/* Zeller's Congruence Algorithm for Day of the Week */
const char* calculateDayOfWeek(int day, int month, int year) {
    if (month < 3) {
        month += 12;
        year -= 1;
    }
    int K = year % 100;
    int J = year / 100;

    int h = (day + (13 * (month + 1)) / 5 + K + (K / 4) + (J / 4) + (5 * J)) % 7;

    switch (h) {
        case 0: return "Saturday";
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        default: return "Unknown";
    }
}

int main(void) {
    printf("===================================================================\\n");
    printf("     CALENDAR ENGINE & ZELLER'S CONGRUENCE - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    int testDates[][3] = {
        {15, 8, 1947},  /* India Independence Day */
        {26, 1, 1950},  /* Republic Day */
        {29, 2, 2024},  /* Leap Day */
        {1, 1, 2000}    /* Century Leap Year */
    };

    int totalDates = sizeof(testDates) / sizeof(testDates[0]);

    for (int i = 0; i < totalDates; i++) {
        int d = testDates[i][0];
        int m = testDates[i][1];
        int y = testDates[i][2];

        bool leap = isLeapYear(y);
        const char* dayName = calculateDayOfWeek(d, m, y);

        printf("Date: %02d/%02d/%04d -> %s | Year Type: %s\\n",
               d, m, y, dayName, leap ? "LEAP YEAR (366 Days)" : "NORMAL YEAR (365 Days)");
    }

    printf("===================================================================\\n");
    return 0;
}
`,v=`/**
 * ============================================================================
 * Project 4: High-Speed Four-Function Arithmetic & Bitwise Logic Unit (ALU)
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

int main(void) {
    printf("===================================================================\\n");
    printf("     VIRTUAL ARITHMETIC & LOGIC UNIT (ALU) - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    char testOps[] = {'+', '-', '*', '/', '%', '&', '|', '^'};
    int a = 24, b = 6;
    int opCount = sizeof(testOps) / sizeof(testOps[0]);

    printf("Executing Operations with Operands: A = %d, B = %d\\n\\n", a, b);

    for (int i = 0; i < opCount; i++) {
        char op = testOps[i];
        int result = 0;

        switch (op) {
            case '+':
                result = a + b;
                printf("[ADD] %d + %d = %d\\n", a, b, result);
                break;
            case '-':
                result = a - b;
                printf("[SUB] %d - %d = %d\\n", a, b, result);
                break;
            case '*':
                result = a * b;
                printf("[MUL] %d * %d = %d\\n", a, b, result);
                break;
            case '/':
                if (b != 0) {
                    result = a / b;
                    printf("[DIV] %d / %d = %d\\n", a, b, result);
                } else {
                    printf("[DIV] Error: Zero Divisor!\\n");
                }
                break;
            case '%':
                if (b != 0) {
                    result = a % b;
                    printf("[MOD] %d %% %d = %d\\n", a, b, result);
                }
                break;
            case '&':
                result = a & b;
                printf("[AND] %d & %d = %d (0x%02X)\\n", a, b, result, result);
                break;
            case '|':
                result = a | b;
                printf("[ OR] %d | %d = %d (0x%02X)\\n", a, b, result, result);
                break;
            case '^':
                result = a ^ b;
                printf("[XOR] %d ^ %d = %d (0x%02X)\\n", a, b, result, result);
                break;
            default:
                printf("[ALU] Error: Opcode '%c' not recognized!\\n", op);
                break;
        }
    }

    printf("===================================================================\\n");
    return 0;
}
`,D=`/**
 * ============================================================================
 * Project 5: Finite State Machine (FSM) Traffic Light Controller
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

typedef enum {
    STATE_RED,
    STATE_RED_YELLOW,
    STATE_GREEN,
    STATE_YELLOW
} TrafficState;

const char* getStateName(TrafficState s) {
    switch(s) {
        case STATE_RED: return "RED (Halt All Traffic)";
        case STATE_RED_YELLOW: return "RED+YELLOW (Prepare Engines)";
        case STATE_GREEN: return "GREEN (Clear to Move)";
        case STATE_YELLOW: return "YELLOW (Caution: Clear Intersection)";
        default: return "UNKNOWN";
    }
}

int main(void) {
    printf("===================================================================\\n");
    printf("     TRAFFIC INTERSECTION FSM CONTROLLER - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    TrafficState currentState = STATE_RED;
    int simulationCycles = 6;

    for (int step = 1; step <= simulationCycles; step++) {
        printf("Time Step %d: Signal is %s\\n", step, getStateName(currentState));

        /* State Transition Logic using switch */
        switch (currentState) {
            case STATE_RED:
                currentState = STATE_RED_YELLOW;
                break;
            case STATE_RED_YELLOW:
                currentState = STATE_GREEN;
                break;
            case STATE_GREEN:
                currentState = STATE_YELLOW;
                break;
            case STATE_YELLOW:
                currentState = STATE_RED;
                break;
        }
    }

    printf("\\n>> FSM Cycle Simulation completed successfully.\\n");
    printf("===================================================================\\n");
    return 0;
}
`,P=`/**
 * ============================================================================
 * Project 6: Number Properties Multi-Inspector (Prime, Armstrong, Perfect, Strong)
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

/* Compute Factorial of a Digit */
int factorialDigit(int d) {
    int f = 1;
    for (int i = 1; i <= d; i++) f *= i;
    return f;
}

void inspectNumber(int num) {
    printf("--- Analyzing Integer: %d ---\\n", num);

    /* 1. Prime Check (Optimized up to sqrt(N)) */
    bool isPrime = (num >= 2);
    for (int d = 2; d * d <= num; d++) {
        if (num % d == 0) { isPrime = false; break; }
    }

    /* 2. Armstrong (Narcissistic) Check for Any Digit Length */
    int temp = num, digitCount = 0;
    while (temp > 0) { digitCount++; temp /= 10; }

    temp = num;
    int armstrongSum = 0;
    while (temp > 0) {
        int rem = temp % 10;
        int p = 1;
        for (int i = 0; i < digitCount; i++) p *= rem;
        armstrongSum += p;
        temp /= 10;
    }
    bool isArmstrong = (armstrongSum == num);

    /* 3. Perfect Number Check */
    int properDivisorSum = 0;
    for (int i = 1; i <= num / 2; i++) {
        if (num % i == 0) properDivisorSum += i;
    }
    bool isPerfect = (properDivisorSum == num && num > 0);

    /* 4. Strong (Krishnamurthy) Number Check */
    temp = num;
    int strongSum = 0;
    while (temp > 0) {
        strongSum += factorialDigit(temp % 10);
        temp /= 10;
    }
    bool isStrong = (strongSum == num && num > 0);

    /* Print Summary Report */
    printf("  • Prime Status       : %s\\n", isPrime ? "PRIME" : "NOT PRIME");
    printf("  • Armstrong Status   : %s (Digit power sum: %d)\\n", isArmstrong ? "ARMSTRONG" : "NOT ARMSTRONG", armstrongSum);
    printf("  • Perfect Number     : %s (Divisor sum: %d)\\n", isPerfect ? "PERFECT" : "NOT PERFECT", properDivisorSum);
    printf("  • Strong Number      : %s (Factorial sum: %d)\\n\\n", isStrong ? "STRONG / KRISHNAMURTHY" : "NOT STRONG", strongSum);
}

int main(void) {
    printf("===================================================================\\n");
    printf("     NUMBER PROPERTIES MULTI-INSPECTOR - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    inspectNumber(153);  /* Armstrong: 1^3 + 5^3 + 3^3 */
    inspectNumber(28);   /* Perfect: 1 + 2 + 4 + 7 + 14 */
    inspectNumber(145);  /* Strong: 1! + 4! + 5! = 145 */
    inspectNumber(29);   /* Prime */

    printf("===================================================================\\n");
    return 0;
}
`,I=`/**
 * ============================================================================
 * Project 7: High-Precision Factorial & Combinatorics Permutations Engine
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

/* Compute Factorial using 64-bit unsigned integer */
unsigned long long calculateFactorial(int n) {
    if (n < 0 || n > 20) return 0; // Prevent 64-bit integer overflow
    unsigned long long fact = 1;
    for (int i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

/* Compute Combinations nCr iteratively without large factorial overflow */
unsigned long long calculateNCR(int n, int r) {
    if (r < 0 || r > n) return 0;
    if (r == 0 || r == n) return 1;
    if (r > n / 2) r = n - r; // Symmetry property: nCr = nC(n-r)

    unsigned long long res = 1;
    for (int i = 1; i <= r; i++) {
        res = res * (n - i + 1) / i;
    }
    return res;
}

/* Compute Permutations nPr */
unsigned long long calculateNPR(int n, int r) {
    if (r < 0 || r > n) return 0;
    unsigned long long res = 1;
    for (int i = 0; i < r; i++) {
        res *= (n - i);
    }
    return res;
}

int main(void) {
    printf("===================================================================\\n");
    printf("     COMBINATORICS & FACTORIAL ENGINE - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    int testPairs[][2] = {
        {5, 2},
        {10, 3},
        {15, 4},
        {20, 5}
    };

    int total = sizeof(testPairs) / sizeof(testPairs[0]);

    for (int i = 0; i < total; i++) {
        int n = testPairs[i][0];
        int r = testPairs[i][1];

        unsigned long long factN = calculateFactorial(n);
        unsigned long long nCr = calculateNCR(n, r);
        unsigned long long nPr = calculateNPR(n, r);

        printf("Parameters: N = %2d, R = %2d\\n", n, r);
        printf("  • Factorial (%d!)       : %llu\\n", n, factN);
        printf("  • Permutations P(%d,%d)  : %llu\\n", n, r, nPr);
        printf("  • Combinations C(%d,%d)  : %llu\\n\\n", n, r, nCr);
    }

    printf("===================================================================\\n");
    return 0;
}
`,L=`/**
 * ============================================================================
 * Project 8: Palindrome Number & String Character Reversal with Digit Peeling
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

/* Number Palindrome Check using Digit Extraction */
bool isNumberPalindrome(long long num) {
    if (num < 0) return false; // Negative numbers are not palindromic (e.g. -121 != 121-)
    long long original = num;
    long long reversed = 0;

    while (num > 0) {
        int rem = num % 10;
        reversed = (reversed * 10) + rem;
        num /= 10;
    }
    return (original == reversed);
}

/* String Palindrome Check using Two-Pointer Loop */
bool isStringPalindrome(const char* str) {
    int len = 0;
    while (str[len] != '\\0') len++;

    int left = 0, right = len - 1;
    while (left < right) {
        if (str[left] != str[right]) return false;
        left++;
        right--;
    }
    return true;
}

int main(void) {
    printf("===================================================================\\n");
    printf("     PALINDROME VERIFICATION ENGINE - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    long long testNumbers[] = {12321, 123456, 1000000001LL, 999999, 454};
    int totalNums = sizeof(testNumbers) / sizeof(testNumbers[0]);

    printf("--- [1] Numeric Palindrome Tests ---\\n");
    for (int i = 0; i < totalNums; i++) {
        long long val = testNumbers[i];
        printf("Number: %-12lld -> %s\\n", val, isNumberPalindrome(val) ? "PALINDROME" : "NOT A PALINDROME");
    }

    const char* testWords[] = {"radar", "level", "barrackpore", "rotator", "computer"};
    int totalWords = sizeof(testWords) / sizeof(testWords[0]);

    printf("\\n--- [2] String Palindrome Tests ---\\n");
    for (int i = 0; i < totalWords; i++) {
        const char* word = testWords[i];
        printf("Word: %-14s -> %s\\n", word, isStringPalindrome(word) ? "PALINDROME" : "NOT A PALINDROME");
    }

    printf("===================================================================\\n");
    return 0;
}
`,k=`/**
 * ============================================================================
 * Project 9: High-Low Binary Guessing Game with Scoring & Dynamic Narrowing
 * Module: 001_003 - Control Flow, Branching & Loops
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

void simulateGameSession(int target, int simulatedGuesses[], int guessCount) {
    printf("--- Simulating Guessing Game (Hidden Target = %d) ---\\n", target);
    int lowBound = 1, highBound = 100;
    int score = 100;
    bool found = false;

    for (int attempt = 1; attempt <= guessCount; attempt++) {
        int guess = simulatedGuesses[attempt - 1];
        printf("Attempt %d/7 [Current Search Range: %d to %d]: User guessed %d\\n",
               attempt, lowBound, highBound, guess);

        if (guess == target) {
            printf(">> BULLSEYE! Correct number %d found in %d attempts!\\n", target, attempt);
            printf(">> Final Achieved Score: %d / 100 Points!\\n\\n", score);
            found = true;
            break;
        } else if (guess < target) {
            printf("   Feedback: TOO LOW! The target is higher.\\n");
            if (guess >= lowBound) lowBound = guess + 1;
            score -= 15;
        } else {
            printf("   Feedback: TOO HIGH! The target is lower.\\n");
            if (guess <= highBound) highBound = guess - 1;
            score -= 15;
        }
    }

    if (!found) {
        printf(">> Game Over! Failed to locate target within 7 attempts.\\n\\n");
    }
}

int main(void) {
    printf("===================================================================\\n");
    printf("     HIGH-LOW BINARY NUMBER GUESSING ENGINE - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    /* Simulated Optimal Binary Search Guesses for target 73 */
    int guesses1[] = {50, 75, 62, 68, 71, 73};
    simulateGameSession(73, guesses1, 6);

    /* Simulated Guesses for target 25 */
    int guesses2[] = {50, 25};
    simulateGameSession(25, guesses2, 2);

    printf("===================================================================\\n");
    return 0;
}
`,O="C Module 1.3: Control Flow, Decision Making & Loops",x="C Programming Language (ANSI C / C99)",M="University & Industrial Standards",_=["GCC Compiler","VS Code","GDB Debugger","Clang-Tidy"],F={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Shyamnagar"},B=JSON.parse('[{"projectId":"CTRL_001","title":"Interactive ATM Banking PIN Verification & Multi-Transaction Ledger","difficulty":"Intermediate","description":"In commercial embedded banking software, ATM terminals must guarantee security and strict transaction validity. In this project, you will build an interactive ATM banking portal using a do-while PIN authentication loop that limits users to at most 3 attempts. Upon successful authentication, a switch-case state machine presents a continuous menu for checking balance, depositing cash, and withdrawing currency. The withdrawal routine validates multiple boundaries: checking if the amount is positive, verifying if the amount is an exact multiple of INR 100/200/500 currency denominations, and ensuring sufficient account balance before debiting.","learningOutcome":"State Machine Design, Authentication Loops, Currency Denomination Guards & Defensive Banking Invariants","exampleText":"Initial Balance: INR 50,000.00\\nDeposit: INR 15,000.00\\nWithdrawal: INR 12,500.00 (Valid multiple of 100)","exampleOutput":"--- BARRACKPORE SECURE ATM BANKING TERMINAL ---\\n>> Authentication Successful! Welcome to your account.\\n\\n[Transaction 1: Inquire Balance]\\nCurrent Ledger Balance: INR 50000.00\\n\\n[Transaction 2: Deposit Cash]\\n>> Deposit Confirmed. New Balance: INR 65000.00\\n\\n[Transaction 3: Withdraw Cash]\\n>> Cash Dispensed! Remaining Balance: INR 52500.00\\n\\n>> Session closed cleanly. Thank you for banking with Coder & AccoTax!","logicExplanation":"1. **do-while Security Loop**: Prompts for PIN and tracks attempts up to 3.\\n2. **switch-case Router**: Dispatches actions to Balance, Deposit, and Withdraw cases.\\n3. **Denomination Guard**: `(long long)amount % 100 == 0` verifies ATM currency constraints.\\n4. **Overdraft Prevention**: Ensures `withdrawAmount <= balance` before debiting.","answerFile":"./answers/answer1.c","codeExplanation":"1. `authenticated flag`: Controls entry to the operations menu.\\n2. `switch(choice)`: Dispatches menu actions in constant time.\\n3. `break`: Prevents menu fall-through and terminates the active session on choice 4."},{"projectId":"CTRL_002","title":"Multi-Criterion Academic Grade & Honors Classifier with Yoda Equality Protection","difficulty":"Beginner","description":"Educational institutions enforce strict multi-tier grading criteria that evaluate examination scores, attendance minimum thresholds, and disciplinary standing. In this project, you will implement an academic honors evaluation engine in C. Your program uses defensive guard clauses to validate that marks and attendance percentages reside strictly within 0-100%. An else-if ladder assigns letter grades (\'O\', \'E\', \'A\', \'B\', \'C\', \'D\', \'F\') with corresponding honors titles. You will apply Yoda conditions (e.g., if (true == disciplinaryClearance)) to guarantee that accidental single equals assignment bugs are caught by the compiler.","learningOutcome":"else-if Priority Ladders, Yoda Comparison Invariants & Defensive Guard Clauses","exampleText":"Student: Swadeep | Score: 94.5% | Attendance: 92.0% | Record: Clean\\nStudent: Abhronila | Score: 73.0% | Attendance: 68.0% | Record: Clean","exampleOutput":"Student: Swadeep      | Score:  94.5% | Attendance:  92.0% | Record: CLEAN\\n>> Grade Awarded: \'O\' | Classification: President\'s Gold Medalist\\n\\nStudent: Abhronila    | Score:  73.0% | Attendance:  68.0% | Record: CLEAN\\n>> Status: DEBARRED FROM FINAL EXAM (Attendance < 75.0% cutoff)","logicExplanation":"1. **Guard Clauses**: Returns early if attendance is below 75.0% or scores are invalid.\\n2. **Top-to-Bottom Evaluation**: Priority evaluation guarantees top honors awarded to matching grades.\\n3. **Yoda Protection**: Writing `true == flag` eliminates assignment bugs.","answerFile":"./answers/answer2.c","codeExplanation":"1. `classifyStudent()`: Evaluates multi-tier student parameters.\\n2. `else if ladder`: Awards grade letters sequentially from highest to lowest.\\n3. `Yoda condition`: Checks disciplinary standing safely."},{"projectId":"CTRL_003","title":"Gregorian Calendar Leap Year & Day-of-Week Zeller\'s Congruence Engine","difficulty":"Intermediate","description":"Date arithmetic forms the backbone of operating system clocks, database engines, and scheduling software. In this project, you will construct a Gregorian calendar engine. First, you will implement the standard astronomical leap year formula ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) to classify normal years (365 days) vs leap years (366 days). Second, you will implement Zeller\'s Congruence algorithm in C, using modulo arithmetic and a switch-case statement to determine the exact day of the week (Sunday through Saturday) for any date in history.","learningOutcome":"Complex Compound Boolean Expressions, Astronomical Modulo Arithmetic & Zeller\'s Algorithm","exampleText":"Date: 15/08/1947 (India Independence Day)\\nDate: 29/02/2024 (Leap Day)","exampleOutput":"Date: 15/08/1947 -> Friday    | Year Type: NORMAL YEAR (365 Days)\\nDate: 26/01/1950 -> Thursday  | Year Type: NORMAL YEAR (365 Days)\\nDate: 29/02/2024 -> Thursday  | Year Type: LEAP YEAR (366 Days)\\nDate: 01/01/2000 -> Saturday  | Year Type: LEAP YEAR (366 Days)","logicExplanation":"1. **Leap Year Logic**: Century years must be divisible by 400 (e.g. 2000 was leap, 1900 was not).\\n2. **Month Adjustment**: In Zeller\'s formula, January and February are treated as months 13 and 14 of previous year.\\n3. **Switch Mapping**: Integer result (0-6) maps directly to day names.","answerFile":"./answers/answer3.c","codeExplanation":"1. `isLeapYear()`: Returns boolean status based on Gregorian leap rules.\\n2. `calculateDayOfWeek()`: Computes Zeller\'s polynomial and dispatches day strings via switch."},{"projectId":"CTRL_004","title":"High-Speed Four-Function Arithmetic & Bitwise Logic Unit (ALU) Dispatcher","difficulty":"Beginner","description":"Central Processing Units (CPUs) contain an Arithmetic & Logic Unit (ALU) that executes mathematical and bitwise opcodes. In this project, you will simulate an ALU dispatcher in C. The engine takes an opcode character (\'+\', \'-\', \'*\', \'/\', \'%\', \'&\', \'|\', \'^\') and two integer operands, executing the calculation via a jump-table switch-case statement. Your implementation includes zero-divisor protection in division and modulus operations, and outputs bitwise results in both decimal and hexadecimal representations.","learningOutcome":"Jump Table Optimization, CPU ALU Opcode Dispatch & Bitwise Operators","exampleText":"Operands: A = 24, B = 6\\nOpcodes: \'+\', \'-\', \'*\', \'/\', \'%\', \'&\', \'|\', \'^\'","exampleOutput":"Executing Operations with Operands: A = 24, B = 6\\n\\n[ADD] 24 + 6 = 30\\n[SUB] 24 - 6 = 18\\n[MUL] 24 * 6 = 144\\n[DIV] 24 / 6 = 4\\n[MOD] 24 % 6 = 0\\n[AND] 24 & 6 = 0 (0x00)\\n[ OR] 24 | 6 = 30 (0x1E)\\n[XOR] 24 ^ 6 = 30 (0x1E)","logicExplanation":"1. **Jump Table**: The compiler maps discrete char opcodes to direct address jumps.\\n2. **Defensive Divisor Checks**: `if (b != 0)` prevents hardware divide-by-zero exceptions (`SIGFPE`).\\n3. **Bitwise Inspection**: `%02X` prints clean hexadecimal byte masks.","answerFile":"./answers/answer4.c","codeExplanation":"1. `switch(op)`: Executes the matching mathematical or bitwise instruction in O(1) time.\\n2. `break`: Exits the ALU dispatch pipeline cleanly after computation."},{"projectId":"CTRL_005","title":"Finite State Machine (FSM) Traffic Light Controller with State Transitions","difficulty":"Intermediate","description":"Embedded microcontrollers controlling traffic intersections, elevators, and vending machines operate as Finite State Machines (FSM). In this project, you will build a traffic signal state machine in C. Using an enumeration type (TrafficState { STATE_RED, STATE_RED_YELLOW, STATE_GREEN, STATE_YELLOW }), your program models state transitions inside an iteration loop. A switch-case construct evaluates the active state and smoothly transitions to the subsequent operational state, simulating standard intersection traffic cycles.","learningOutcome":"Finite State Machine (FSM) Architecture, Enum Integration with Switch & State Transition Networks","exampleText":"States: RED → RED+YELLOW → GREEN → YELLOW → RED","exampleOutput":"Time Step 1: Signal is RED (Halt All Traffic)\\nTime Step 2: Signal is RED+YELLOW (Prepare Engines)\\nTime Step 3: Signal is GREEN (Clear to Move)\\nTime Step 4: Signal is YELLOW (Caution: Clear Intersection)\\nTime Step 5: Signal is RED (Halt All Traffic)\\nTime Step 6: Signal is RED+YELLOW (Prepare Engines)","logicExplanation":"1. **Enum Modeling**: Names discrete state indices clearly.\\n2. **State Transition**: Each case updates `currentState` to the designated successor state.\\n3. **Loop Simulation**: Iterates through simulated clock cycles.","answerFile":"./answers/answer5.c","codeExplanation":"1. `TrafficState enum`: Defines the 4 valid traffic signal phases.\\n2. `switch(currentState)`: Routes each state to its next lifecycle target.\\n3. `getStateName()`: Maps enum identifiers to human-readable strings."},{"projectId":"CTRL_006","title":"Number Properties Multi-Inspector (Prime, Armstrong, Perfect, Strong)","difficulty":"Intermediate","description":"Mathematical number theory forms the basis of cryptography, hash functions, and algorithmic puzzles. In this project, you will build a comprehensive Number Properties Multi-Inspector in C. Given any positive integer, the engine tests 4 distinct properties: 1. Prime Number (using optimized trial division up to sqrt(N)); 2. Armstrong / Narcissistic Number (dynamically counting digits and calculating sum of powers); 3. Perfect Number (summing aliquot proper divisors up to N/2); 4. Strong / Krishnamurthy Number (summing the factorials of each digit).","learningOutcome":"Digit Extraction (% 10, / 10), Math Number Theory & Multi-Property Analysis Engines","exampleText":"Numbers: 153 (Armstrong), 28 (Perfect), 145 (Strong), 29 (Prime)","exampleOutput":"--- Analyzing Integer: 153 ---\\n  • Prime Status       : NOT PRIME\\n  • Armstrong Status   : ARMSTRONG (Digit power sum: 153)\\n  • Perfect Number     : NOT PERFECT (Divisor sum: 1)\\n  • Strong Number      : NOT STRONG (Factorial sum: 145)\\n\\n--- Analyzing Integer: 28 ---\\n  • Prime Status       : NOT PRIME\\n  • Armstrong Status   : NOT ARMSTRONG (Digit power sum: 72)\\n  • Perfect Number     : PERFECT (Divisor sum: 28)\\n  • Strong Number      : NOT STRONG (Factorial sum: 40322)","logicExplanation":"1. **Prime**: Tests divisors up to `d * d <= n`.\\n2. **Armstrong**: `sum += pow(digit, digitCount)`.\\n3. **Perfect**: `sum of proper divisors == n`.\\n4. **Strong**: `sum of digit factorials == n`.","answerFile":"./answers/answer6.c","codeExplanation":"1. `inspectNumber()`: Executes all 4 mathematical tests on input integer.\\n2. `factorialDigit()`: Computes digit factorials for Strong number verification."},{"projectId":"CTRL_007","title":"High-Precision Factorial & Combinatorics Permutations Engine (nPr, nCr)","difficulty":"Intermediate","description":"Permutations and Combinations are essential tools in probability theory, statistics, and game theory. Calculating factorials for numbers above 12 quickly overflows 32-bit integers, while computing nCr via raw factorials n!/(r!(n-r)!) causes premature overflow even when the final answer fits in memory! In this project, you will construct a 64-bit Combinatorics Engine in C. Your program uses unsigned long long to compute factorials up to 20!, and implements an optimized iterative multiplicative algorithm for nCr that avoids calculating large factorials directly.","learningOutcome":"64-Bit Integer Arithmetic, Overflow Prevention & Multiplicative Combinatorics Loops","exampleText":"N = 10, R = 3 | Factorial: 10!, Permutations P(10,3), Combinations C(10,3)","exampleOutput":"Parameters: N = 10, R =  3\\n  • Factorial (10!)       : 3628800\\n  • Permutations P(10,3)  : 720\\n  • Combinations C(10,3)  : 120\\n\\nParameters: N = 20, R =  5\\n  • Factorial (20!)       : 2432902008176640000\\n  • Permutations P(20,5)  : 1860480\\n  • Combinations C(20,5)  : 15504","logicExplanation":"1. **64-bit fact**: `unsigned long long` supports up to 20! (2.43 * 10^18).\\n2. **Symmetry Optimization**: `nCr = nC(n-r)` halves iteration work when `r > n/2`.\\n3. **Iterative nCr**: Multiplies and divides on each step: `res = res * (n - i + 1) / i`.","answerFile":"./answers/answer7.c","codeExplanation":"1. `calculateFactorial()`: Accumulates products with 64-bit precision.\\n2. `calculateNCR()`: Computes combinations without intermediate factorial overflows."},{"projectId":"CTRL_008","title":"Palindrome Number & String Character Reversal with Digit Peeling","difficulty":"Beginner","description":"A palindrome is a sequence that reads identically forward and backward (e.g. 12321 or \'radar\'). In this project, you will build a dual Palindrome Verification Engine in C. First, you will implement an integer palindrome checker that reverses number digits using a while loop with modulo 10 extraction and base-10 accumulation. Second, you will implement a string palindrome checker using the Two-Pointer technique, comparing characters moving from both ends towards the center.","learningOutcome":"Digit Inversion Loops, Two-Pointer String Traversal & Invariant Symmetry Testing","exampleText":"Numbers: 12321 (Palindrome), 123456 (Not Palindrome)\\nStrings: \'radar\' (Palindrome), \'computer\' (Not Palindrome)","exampleOutput":"--- [1] Numeric Palindrome Tests ---\\nNumber: 12321        -> PALINDROME\\nNumber: 123456       -> NOT A PALINDROME\\nNumber: 1000000001   -> PALINDROME\\n\\n--- [2] String Palindrome Tests ---\\nWord: radar          -> PALINDROME\\nWord: level          -> PALINDROME\\nWord: barrackpore    -> NOT A PALINDROME","logicExplanation":"1. **Numeric Reversal**: `reversed = (reversed * 10) + (num % 10); num /= 10;`.\\n2. **Two-Pointer String**: Compares `str[left] == str[right]` while `left < right`.\\n3. **Negative Invariant**: Negative numbers are not palindromes due to leading \'-\' sign.","answerFile":"./answers/answer8.c","codeExplanation":"1. `isNumberPalindrome()`: Reverses long long integer and tests equality.\\n2. `isStringPalindrome()`: Validates character symmetry using two index pointers."},{"projectId":"CTRL_009","title":"High-Low Binary Guessing Game with Scoring & Dynamic Range Narrowing","difficulty":"Beginner","description":"Interactive games require maintaining running state across iterative loops while providing real-time feedback. In this project, you will construct a High-Low Number Guessing Game in C. The program selects a target number (1-100), limits the player to 7 attempts, and dynamically tracks the narrowing search interval [lowBound, highBound]. After each guess, the game applies conditional branching to report whether the guess is \'TOO HIGH\' or \'TOO LOW\', deducting score points on each miss and celebrating with a victory screen on hit.","learningOutcome":"Binary Search Intuition, Interactive Game Loops & Dynamic Range Boundary Tracking","exampleText":"Target: 73 | Guesses: 50 (Too Low), 75 (Too High), 62 (Too Low), 68 (Too Low), 71 (Too Low), 73 (Hit!)","exampleOutput":"--- Simulating Guessing Game (Hidden Target = 73) ---\\nAttempt 1/7 [Current Search Range: 1 to 100]: User guessed 50\\n   Feedback: TOO LOW! The target is higher.\\nAttempt 2/7 [Current Search Range: 51 to 100]: User guessed 75\\n   Feedback: TOO HIGH! The target is lower.\\nAttempt 3/7 [Current Search Range: 51 to 74]: User guessed 62\\n   Feedback: TOO LOW! The target is higher.\\nAttempt 6/7 [Current Search Range: 72 to 74]: User guessed 73\\n>> BULLSEYE! Correct number 73 found in 6 attempts!\\n>> Final Achieved Score: 25 / 100 Points!","logicExplanation":"1. **Binary Search Principle**: 7 guesses suffice to search 100 items (2^7 = 128 > 100).\\n2. **Boundary Adjustment**: Narrow `lowBound` on low guesses and `highBound` on high guesses.\\n3. **Score Ledger**: Deducts points on misses, rewarding early discovery.","answerFile":"./answers/answer9.c","codeExplanation":"1. `simulateGameSession()`: Runs the 7-attempt guessing loop.\\n2. `if-else ladder`: Updates bounds, deducts score, and flags success on match."},{"projectId":"CTRL_010","title":"Optimized O(sqrt(N)) Prime Range Generator & Prime Factorization Engine","difficulty":"Intermediate","description":"Generating prime numbers and finding prime factors are foundational operations in RSA cryptography and computer algebra systems. In this project, you will build an optimized Prime Generator & Factorization Suite in C. Your prime tester uses 6k +/- 1 step optimization up to sqrt(N) to achieve fast O(sqrt(N)) time complexity. The generator prints all primes in any given interval [1, N], and the factorization engine decomposes composite numbers into their fundamental prime base factors.","learningOutcome":"Optimized Trial Division, 6k +/- 1 Step Traversal & Fundamental Theorem of Arithmetic","exampleText":"Range [1, 50] | Factorization: 360 = 2 * 2 * 2 * 3 * 3 * 5","exampleOutput":"--- [1] Prime Numbers between 1 and 50 ---\\n  2   3   5   7  11  13  17  19  23  29 \\n 31  37  41  43  47 \\nTotal Primes Found: 15\\n\\n--- [2] Prime Factorization Suite ---\\nPrime Factorization of 360: 2 2 2 3 3 5\\nPrime Factorization of 1024: 2 2 2 2 2 2 2 2 2 2\\nPrime Factorization of 9973: 9973","logicExplanation":"1. **6k +/- 1 Step**: All primes > 3 are of the form 6k +/- 1.\\n2. **Sqrt Boundary**: `d * d <= n` avoids calculating floating-point `sqrt()`.\\n3. **Factor Stripping**: While `temp % d == 0`, print `d` and divide `temp /= d`.","answerFile":"./answers/answer10.c","codeExplanation":"1. `isPrime()`: Tests divisibility up to sqrt(N) in O(sqrt(N)) time.\\n2. `printPrimeFactorization()`: Decomposes integer into prime factors."},{"projectId":"CTRL_011","title":"Symmetrical Diamond & Hollow Diamond Pattern Rendering Engine","difficulty":"Intermediate","description":"Geometric pattern rendering exercises master nested coordinate iteration spaces and conditional character filtering. In this project, you will construct a dynamic Star Diamond Pattern Generator in C. The program renders both Centered Solid Diamonds and Hollow Perimeter Diamonds for any user-supplied radius N. You will combine upper equilateral pyramid loops with lower inverted pyramid loops, calculating leading space alignment (N - i) and odd star sequences (2*i - 1), with hollow boundary conditions (k == 1 || k == 2*i - 1).","learningOutcome":"Nested Loop Coordinate Spaces, Leading Space Alignment & Hollow Geometric Filtering","exampleText":"Radius N = 4","exampleOutput":"--- Centered Solid Diamond (N = 4) ---\\n   *\\n  ***\\n *****\\n*******\\n *****\\n  ***\\n   *\\n\\n--- Centered Hollow Diamond (N = 4) ---\\n   *\\n  * *\\n *   *\\n*     *\\n *   *\\n  * *\\n   *","logicExplanation":"1. **Upper Half**: Rows 1 to N; leading spaces `(N - i)`; stars `(2*i - 1)`.\\n2. **Lower Half**: Rows N-1 down to 1; inverted row counts.\\n3. **Hollow Condition**: Print `*` only if `k == 1 || k == 2*i - 1`, else print space.","answerFile":"./answers/answer11.c","codeExplanation":"1. `renderSolidDiamond()`: Generates solid star diamond.\\n2. `renderHollowDiamond()`: Generates perimeter outline diamond."},{"projectId":"CTRL_012","title":"Floyd\'s Triangle & Pascal\'s Binomial Coefficient Pattern Generator","difficulty":"Intermediate","description":"Numeric pattern generation demonstrates how mathematical series can be mapped onto 2D triangular display matrices. In this project, you will implement two classic mathematical triangles in C: 1. Floyd\'s Triangle (a right-angled triangle filled with continuous incrementing integers); 2. Pascal\'s Triangle (a centered binomial coefficient array where each entry equals C(i, j)). Your Pascal\'s triangle generator computes each coefficient iteratively using multiplicative recurrence val = val * (i - j) / (j + 1) to avoid large factorial overflows.","learningOutcome":"Running Counter Accumulation, Multiplicative Binomial Recurrence & Centered Number Alignment","exampleText":"Rows: 5","exampleOutput":"--- Floyd\'s Natural Number Triangle (5 Rows) ---\\n  1 \\n  2   3 \\n  4   5   6 \\n  7   8   9  10 \\n 11  12  13  14  15 \\n\\n--- Pascal\'s Binomial Coefficient Triangle (5 Rows) ---\\n            1\\n          1   1\\n        1   2   1\\n      1   3   3   1\\n    1   4   6   4   1","logicExplanation":"1. **Floyd\'s Triangle**: Uses running counter `count++` across inner loop `j <= i`.\\n2. **Pascal\'s Triangle**: Centered spacing `(rows - i - 1)`; computes `C(i, j)` on the fly.\\n3. **Iterative Binomial**: Avoids factorials by updating `val` multiplicatively.","answerFile":"./answers/answer12.c","codeExplanation":"1. `printFloydsTriangle()`: Prints incrementing integers in right-angled layout.\\n2. `printPascalsTriangle()`: Formats centered binomial coefficients."},{"projectId":"CTRL_013","title":"2D Matrix Multiplication & Transposition with Cache Locality","difficulty":"Intermediate","description":"Matrix operations are the cornerstone of 3D computer graphics, physics engines, and machine learning models. In this project, you will build a 2D Matrix Mathematics Engine in C. Your program implements matrix multiplication of two 3x3 matrices using the standard 3-nested loop algorithm (O(N^3)) and computes the matrix transpose (A^T) by swapping row and column indices. You will analyze how C\'s Row-Major memory layout ensures high-speed CPU cache line hits during row iterations.","learningOutcome":"2D Array Traversal, Matrix Dot Product Algorithms (O(N^3)) & Row-Major Cache Locality","exampleText":"Matrix A (3x3), Matrix B (3x3)","exampleOutput":"Matrix A (3x3):\\n    1    2    3\\n    4    5    6\\n    7    8    9\\n\\nMatrix B (3x3):\\n    9    8    7\\n    6    5    4\\n    3    2    1\\n\\nMatrix C = (A * B):\\n   30   24   18\\n   84   69   54\\n  138  114   90\\n\\nMatrix A^T (Transpose of A):\\n    1    4    7\\n    2    5    8\\n    3    6    9","logicExplanation":"1. **Matrix Multiplication**: 3 loops: `row i`, `col j`, dot product `k`: `C[i][j] += A[i][k] * B[k][j]`.\\n2. **Matrix Transpose**: Swaps indices: `T[j][i] = A[i][j]`.\\n3. **Cache Efficiency**: Row-major sequential indexing maximizes memory bandwidth.","answerFile":"./answers/answer13.c","codeExplanation":"1. `printMatrix()`: Formats 2D array output neatly in tabular columns.\\n2. `main()`: Executes 3-nested loop multiplication and 2-nested loop transposition."},{"projectId":"CTRL_014","title":"Spiral Number Matrix (NxN) Clockwise Inward Boundary Shrinking Engine","difficulty":"Advanced","description":"Spiral matrix filling is a renowned algorithmic problem in systems software, image processing, and technical interviews. In this project, you will build an NxN Spiral Number Matrix Engine in C. The algorithm initializes an NxN matrix and maintains four moving boundary pointers (top, bottom, left, right). A while loop executes a 4-phase clockwise traversal (Left-to-Right, Top-to-Bottom, Right-to-Left, Bottom-to-Top), incrementing a counter and contracting boundaries inward until the entire grid is populated.","learningOutcome":"Multi-Boundary Contraction Algorithms, 2D Grid Geometry & Algorithmic State Control","exampleText":"Matrix Size = 4x4","exampleOutput":"Generated 4x4 Clockwise Spiral Grid:\\n\\n   1   2   3   4\\n  12  13  14   5\\n  11  16  15   6\\n  10   9   8   7","logicExplanation":"1. **4 Boundaries**: `top = 0`, `bottom = N-1`, `left = 0`, `right = N-1`.\\n2. **4 Phases**: Fill top row (`top++`), fill right col (`right--`), fill bottom row (`bottom--`), fill left col (`left++`).\\n3. **Loop Condition**: Continues while `top <= bottom && left <= right`.","answerFile":"./answers/answer14.c","codeExplanation":"1. `matrix[SIZE][SIZE]`: Allocates static 2D grid.\\n2. `while (top <= bottom && left <= right)`: Contracts boundaries systematically."},{"projectId":"CTRL_015","title":"Euclidean Algorithm Greatest Common Divisor (GCD) & Least Common Multiple (LCM)","difficulty":"Beginner","description":"The Euclidean algorithm, conceived over 2,300 years ago by Greek mathematician Euclid, remains one of the most efficient algorithms in computer science. In this project, you will build an accelerated GCD & LCM Engine in C. Your GCD function uses a while loop with modulo reductions (a % b) to calculate the greatest common divisor in O(log(min(a, b))) time. Using mathematical duality, your LCM function computes (a / GCD(a, b)) * b, dividing first to prevent integer overflow.","learningOutcome":"Euclidean Modulo Reduction, Logarithmic Time Complexity O(log N) & Arithmetic Overflow Prevention","exampleText":"Pairs: (48, 18), (105, 35), (270, 192), (1000000, 250000)","exampleOutput":"Pair (48, 18):\\n  • Greatest Common Divisor (GCD) : 6\\n  • Least Common Multiple   (LCM) : 144\\n\\nPair (270, 192):\\n  • Greatest Common Divisor (GCD) : 6\\n  • Least Common Multiple   (LCM) : 8640\\n\\nPair (1000000, 250000):\\n  • Greatest Common Divisor (GCD) : 250000\\n  • Least Common Multiple   (LCM) : 1000000","logicExplanation":"1. **Euclidean Step**: `rem = a % b; a = b; b = rem;` until `b == 0`.\\n2. **Logarithmic Steps**: Divisor roughly halves each step (Fibonacci worst case).\\n3. **Safe LCM**: `(a / gcd) * b` eliminates premature product overflow.","answerFile":"./answers/answer15.c","codeExplanation":"1. `calculateGCD()`: Modulo reduction loop.\\n2. `calculateLCM()`: Computes LCM safely via GCD duality."},{"projectId":"CTRL_016","title":"Collatz Conjecture (3N + 1 Hailstone Sequence) Step Analyzer & Max Peak Tracker","difficulty":"Beginner","description":"The Collatz Conjecture (the \'3N + 1 problem\') is one of the most famous unsolved problems in mathematics. The rule states: start with any positive integer N; if N is even, divide by 2 (N/2); if N is odd, multiply by 3 and add 1 (3N + 1). In this project, you will construct a Collatz Sequence Analyzer in C. Your program iterates until N reaches 1, printing the hailstone sequence, counting total stopping time steps, and tracking the maximum intermediate peak value reached in 64-bit integer space.","learningOutcome":"Hailstone Sequence Mechanics, Dynamic Peak Tracking & 64-Bit Integer Handling","exampleText":"N = 6 (Steps = 8, Peak = 16) | N = 27 (Steps = 111, Peak = 9232)","exampleOutput":"--- Collatz Sequence Analysis for N = 6 ---\\nSequence: 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1\\n\\n>> Summary Report:\\n  • Total Steps to Reach 1 : 8\\n  • Maximum Peak Value Hit : 16\\n\\n--- Collatz Sequence Analysis for N = 27 ---\\n>> Summary Report:\\n  • Total Steps to Reach 1 : 111\\n  • Maximum Peak Value Hit : 9232","logicExplanation":"1. **Even Rule**: `current = current / 2`.\\n2. **Odd Rule**: `current = 3 * current + 1`.\\n3. **Peak Tracker**: `if (current > peak) peak = current`.","answerFile":"./answers/answer16.c","codeExplanation":"1. `analyzeCollatzSequence()`: Iterates hailstone path and tracks stats."},{"projectId":"CTRL_017","title":"Digital Cash Register & Optimal Currency Denomination Breakdown","difficulty":"Beginner","description":"Automated Point-of-Sale (POS) systems and digital cash registers must compute the exact minimum number of currency notes and coins to dispense for any transaction change. In this project, you will build a Cash Register Denomination Engine in C. Given an amount in Indian Rupees (INR), the program uses a greedy loop over an array of standard currency values (500, 200, 100, 50, 20, 10, 5, 2, 1), calculating the count of each note using integer division and updating the remainder with modulo arithmetic.","learningOutcome":"Greedy Denomination Allocation, Modulo/Division Pairings & Financial Cashier Logic","exampleText":"Amounts: INR 3888, INR 1475, INR 92","exampleOutput":"--- Currency Breakdown for INR 3888 ---\\nDenomination Breakdown (Greedy Allocation):\\n  • INR 500 Notes :    7  (Total = INR 3500)\\n  • INR 200 Notes :    1  (Total = INR 200)\\n  • INR 100 Notes :    1  (Total = INR 100)\\n  • INR  50 Notes :    1  (Total = INR 50)\\n  • INR  20 Notes :    1  (Total = INR 20)\\n  • INR  10 Notes :    1  (Total = INR 10)\\n  • INR   5 Notes :    1  (Total = INR 5)\\n  • INR   2 Notes :    1  (Total = INR 2)\\n  • INR   1 Notes :    1  (Total = INR 1)\\n>> Minimum Total Notes/Coins Required: 15","logicExplanation":"1. **Greedy Strategy**: Allocate largest note values first.\\n2. **Count**: `count = remaining / noteVal`.\\n3. **Remainder**: `remaining %= noteVal`.","answerFile":"./answers/answer17.c","codeExplanation":"1. `calculateDenominations()`: Loops through standard note denominations array."},{"projectId":"CTRL_018","title":"Roman Numeral to Decimal & Decimal to Roman Bidirectional Converter","difficulty":"Intermediate","description":"Historical numeral systems like Roman Numerals require specialized conversion logic due to their subtractive notation rules (e.g., IV = 4, IX = 9, XL = 40, CM = 900). In this project, you will implement a Bidirectional Roman Numeral Converter in C. The Decimal-to-Roman engine applies a greedy loop over parallel value and symbol arrays. The Roman-to-Decimal engine traverses the numeral string with a lookahead condition: if a smaller Roman digit precedes a larger digit (e.g. \'I\' before \'V\'), it subtracts the value; otherwise, it adds it.","learningOutcome":"Lookahead String Parsing, Greedy Array Reductions & Subtractive Numeral Grammar","exampleText":"Decimal: 1947 → \'MCMXLVII\' | Roman: \'MMXXIV\' → 2024","exampleOutput":"--- [1] Decimal to Roman Conversions ---\\nDecimal 1947 -> Roman: MCMXLVII\\nDecimal 2024 -> Roman: MMXXIV\\nDecimal  399 -> Roman: CCCXCIX\\n\\n--- [2] Roman to Decimal Conversions ---\\nRoman MCMXLVII   -> Decimal: 1947\\nRoman MMXXIV     -> Decimal: 2024\\nRoman CCCXCIX    -> Decimal: 399","logicExplanation":"1. **Decimal to Roman**: Subtracts values from largest to smallest.\\n2. **Roman to Decimal**: Lookahead: if `val[i] < val[i+1]`, add `(val[i+1] - val[i])` and advance 2 steps.\\n3. **Switch Mapping**: Converts \'I\', \'V\', \'X\', \'L\', \'C\', \'D\', \'M\' to numeric values.","answerFile":"./answers/answer18.c","codeExplanation":"1. `decimalToRoman()`: Greedy subtraction loop.\\n2. `romanToDecimal()`: Lookahead string parser."},{"projectId":"CTRL_019","title":"Telemetry Data Stream Filter with Sentinel Termination & Early Jumps","difficulty":"Beginner","description":"IoT sensor microcontrollers and telemetry parsers process live data streams containing noise anomalies, out-of-range corruptions, and stream termination sentinels. In this project, you will build a Telemetry Stream Filter in C. Your parser processes an incoming packet array in a loop, applying break to immediately halt parsing when encountering a sentinel terminator (-9999), and applying continue to skip corrupted negative readings without interrupting stream parsing.","learningOutcome":"Sentinel Stream Processing, Early Jump Mechanics (break / continue) & Real-Time Sensor Telemetry","exampleText":"Stream: [24, 28, -5, 32, -99, 29, 31, 35, -500, 27, -9999, 40, 50]","exampleOutput":"Processing Telemetry Stream (Sentinel = -9999)...\\n\\n>> Packet 00: [VALID DATA] Recorded Temp: 24 C | Running Sum: 24\\n>> Packet 02: [CORRUPTED NOISE] Negative reading (-5 C). Skipping packet.\\n>> Packet 03: [VALID DATA] Recorded Temp: 32 C | Running Sum: 84\\n>> Packet 10: [SENTINEL DETECTED] End of telemetry stream. Halting parser.\\n\\n--- Telemetry Processing Summary ---\\n  • Total Valid Packets     : 7\\n  • Total Corrupted Packets : 3\\n  • Average Temperature     : 29.29 C","logicExplanation":"1. **Sentinel Guard**: `if (packet == -9999) break;` halts processing.\\n2. **Noise Guard**: `if (packet < 0) continue;` skips invalid packet.\\n3. **Average Calculation**: Sums valid packets and computes average.","answerFile":"./answers/answer19.c","codeExplanation":"1. `break`: Halts stream upon reading sentinel.\\n2. `continue`: Skips negative sensor noise."},{"projectId":"CTRL_020","title":"Linux Kernel Style Multi-Stage Resource Allocator & Unified Error Unwinding Engine","difficulty":"Advanced","description":"In operating system kernels (such as the Linux Kernel) and embedded device drivers, functions frequently acquire multiple physical hardware resources (sockets, mutexes, memory buffers, interrupt lines). If allocation fails at stage 3, the driver must cleanly deallocate resources 1 and 2 in reverse order to avoid memory leaks. In this project, you will implement a multi-stage resource allocator in C using the standard Linux Kernel goto error unwinding pattern (goto err_labels). You will prove that forward goto error jumps eliminate duplicated code and guarantee leak-free cleanups under failure conditions.","learningOutcome":"Linux Kernel Error Unwinding, Reverse-Order Resource Deallocation & Leak-Free Architecture","exampleText":"Stages: Network Socket → Database Handle → TLS Crypto Key → Worker Thread","exampleOutput":"===================================================================\\n     LINUX KERNEL ERROR UNWINDING PATTERN - CODER & ACCOTAX\\n===================================================================\\n\\nInitializing Multi-Tier Kernel Service (Simulate Error = TRUE):\\n  [1/4] Allocating Network Socket... SUCCESS\\n  [2/4] Connecting to Database... SUCCESS\\n  [3/4] Generating TLS Crypto Key... FAILED (Entropy Pool Depleted)\\n  [CLEANUP] Closing Database Connection.\\n  [CLEANUP] Releasing Network Socket.\\n>> ERROR: Subsystem startup failed! All acquired resources safely deallocated.\\n\\nInitializing Multi-Tier Kernel Service (Simulate Error = FALSE):\\n  [1/4] Allocating Network Socket... SUCCESS\\n  [2/4] Connecting to Database... SUCCESS\\n  [3/4] Generating TLS Crypto Key... SUCCESS\\n  [4/4] Spawning Worker Thread... SUCCESS\\n>> SUCCESS: Kernel Service running in optimal state!","logicExplanation":"1. **Sequential Acquisition**: Allocates resources 1, 2, 3, 4 step-by-step.\\n2. **Failure Jump**: If stage 3 fails, `goto err_crypto`.\\n3. **Cascading Cleanup**: Error labels fall through in reverse order (`err_thread` → `err_crypto` → `err_db` → `err_net`) to free only what was acquired.","answerFile":"./answers/answer20.c","codeExplanation":"1. `initializeKernelService()`: Demonstrates kernel-grade multi-stage resource allocation and cleanup.\\n2. `goto err_*`: Cleanly unwinds acquired resources in reverse order without duplicate code."}]'),c={projectCategory:O,subject:x,board:M,class:"Computer Science Core / BCA / B.Tech / ICSE / Diploma",tools:_,institute:F,projects:B};function Y(){const[i,u]=l.useState(null);return l.useEffect(()=>{const r=Object.assign({"./topic5_files/answers/answer1.c":p,"./topic5_files/answers/answer10.c":g,"./topic5_files/answers/answer11.c":f,"./topic5_files/answers/answer12.c":h,"./topic5_files/answers/answer13.c":C,"./topic5_files/answers/answer14.c":S,"./topic5_files/answers/answer15.c":w,"./topic5_files/answers/answer16.c":T,"./topic5_files/answers/answer17.c":E,"./topic5_files/answers/answer18.c":y,"./topic5_files/answers/answer19.c":N,"./topic5_files/answers/answer2.c":R,"./topic5_files/answers/answer20.c":A,"./topic5_files/answers/answer3.c":b,"./topic5_files/answers/answer4.c":v,"./topic5_files/answers/answer5.c":D,"./topic5_files/answers/answer6.c":P,"./topic5_files/answers/answer7.c":I,"./topic5_files/answers/answer8.c":L,"./topic5_files/answers/answer9.c":k}),a={};Object.keys(r).forEach(n=>{const o=n.split("/").pop();a[o]=r[n]});const d=c.projects.map(n=>{const t=(n.answerFile||"").split("/").pop(),s=a[t];return s||console.warn(`⚠ Missing C answer file: ${t}`),{...n,answer:s||`// Source file "${t}" not found in answers folder`}});u({...c,projects:d})},[]),i?e.jsx(m,{data:i}):e.jsx("div",{className:"p-8 text-slate-400 flex items-center justify-center min-h-[350px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{className:"text-sm font-semibold",children:"Loading 20 Control Flow, Branching & Loops Capstone Projects..."})]})})}export{Y as default};
