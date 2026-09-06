import{b as l,j as r}from"./vendor-react-core-Doz9nIC6.js";import{C as p}from"./CProjectAnswerTemplateEnhanced-C_P01eJh.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const m=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
#define MAX_PIN_ATTEMPTS 3\r
#define DEFAULT_PIN 1234\r
\r
static double accountBalance = 5000.00;\r
static int failedAttempts = 0;\r
static bool isAccountLocked = false;\r
\r
bool verifyPin(int enteredPin) {\r
    if (isAccountLocked) {\r
        printf("\\n[ERROR] Account is LOCKED due to security violations!\\n");\r
        return false;\r
    }\r
    if (enteredPin == DEFAULT_PIN) {\r
        failedAttempts = 0;\r
        return true;\r
    } else {\r
        failedAttempts++;\r
        printf("\\n[ALERT] Incorrect PIN! Attempt %d of %d.\\n", failedAttempts, MAX_PIN_ATTEMPTS);\r
        if (failedAttempts >= MAX_PIN_ATTEMPTS) {\r
            isAccountLocked = true;\r
            printf("[SECURITY ALERT] Maximum invalid PIN attempts exceeded! Account is now LOCKED.\\n");\r
        }\r
        return false;\r
    }\r
}\r
\r
void checkBalance(void) {\r
    printf("\\n>>> CURRENT ACCOUNT BALANCE: INR %.2f\\n", accountBalance);\r
}\r
\r
void depositMoney(double amount) {\r
    if (amount <= 0) {\r
        printf("\\n[ERROR] Invalid deposit amount!\\n");\r
        return;\r
    }\r
    accountBalance += amount;\r
    printf("\\n[SUCCESS] Deposited INR %.2f. New Balance: INR %.2f\\n", amount, accountBalance);\r
}\r
\r
void withdrawMoney(double amount) {\r
    if (amount <= 0) {\r
        printf("\\n[ERROR] Invalid withdrawal amount!\\n");\r
        return;\r
    }\r
    if (amount > accountBalance) {\r
        printf("\\n[ERROR] Insufficient funds! Available: INR %.2f\\n", accountBalance);\r
        return;\r
    }\r
    accountBalance -= amount;\r
    printf("\\n[SUCCESS] Withdrew INR %.2f. Remaining Balance: INR %.2f\\n", amount, accountBalance);\r
}\r
\r
int main(void) {\r
    int pin, choice;\r
    double amount;\r
\r
    printf("=====================================================\\n");\r
    printf("   CODER & ACCOTAX ATM BANKING SYSTEM - BARRACKPORE   \\n");\r
    printf("=====================================================\\n");\r
\r
    printf("Enter 4-Digit Security PIN: ");\r
    if (scanf("%d", &pin) != 1 || !verifyPin(pin)) {\r
        return 1;\r
    }\r
\r
    do {\r
        printf("\\n--- ATM MAIN MENU ---\\n");\r
        printf("1. Check Account Balance\\n");\r
        printf("2. Deposit Funds\\n");\r
        printf("3. Withdraw Funds\\n");\r
        printf("4. Exit ATM Terminal\\n");\r
        printf("Enter Selection (1-4): ");\r
        scanf("%d", &choice);\r
\r
        switch (choice) {\r
            case 1:\r
                checkBalance();\r
                break;\r
            case 2:\r
                printf("Enter Deposit Amount (INR): ");\r
                scanf("%lf", &amount);\r
                depositMoney(amount);\r
                break;\r
            case 3:\r
                printf("Enter Withdrawal Amount (INR): ");\r
                scanf("%lf", &amount);\r
                withdrawMoney(amount);\r
                break;\r
            case 4:\r
                printf("\\nThank you for using Coder & AccoTax ATM. Have a great day!\\n");\r
                break;\r
            default:\r
                printf("\\n[ERROR] Invalid selection! Choose between 1 and 4.\\n");\r
        }\r
    } while (choice != 4);\r
\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
#include <stdbool.h>\r
\r
#define TARIFF_SLAB1_RATE 4.50\r
#define TARIFF_SLAB2_RATE 6.00\r
#define TARIFF_SLAB3_RATE 7.50\r
#define TARIFF_SLAB4_RATE 9.00\r
\r
#define FIXED_CHARGE 150.00\r
#define GST_RATE 0.18\r
\r
typedef struct {\r
    int consumerNumber;\r
    char name[50];\r
    double previousReading;\r
    double currentReading;\r
    double unitsConsumed;\r
    double energyCharge;\r
    double fixedCharge;\r
    double subtotal;\r
    double gstAmount;\r
    double totalBillAmount;\r
} ElectricityBill;\r
\r
double calculateEnergyCharges(double units) {\r
    double charges = 0.0;\r
    if (units <= 100) {\r
        charges = units * TARIFF_SLAB1_RATE;\r
    } else if (units <= 200) {\r
        charges = (100 * TARIFF_SLAB1_RATE) + ((units - 100) * TARIFF_SLAB2_RATE);\r
    } else if (units <= 400) {\r
        charges = (100 * TARIFF_SLAB1_RATE) + (100 * TARIFF_SLAB2_RATE) + ((units - 200) * TARIFF_SLAB3_RATE);\r
    } else {\r
        charges = (100 * TARIFF_SLAB1_RATE) + (100 * TARIFF_SLAB2_RATE) + (200 * TARIFF_SLAB3_RATE) + ((units - 400) * TARIFF_SLAB4_RATE);\r
    }\r
    return charges;\r
}\r
\r
void generateBill(ElectricityBill *bill) {\r
    static int invoiceCounter = 5001;\r
    \r
    bill->unitsConsumed = bill->currentReading - bill->previousReading;\r
    bill->energyCharge = calculateEnergyCharges(bill->unitsConsumed);\r
    bill->fixedCharge = FIXED_CHARGE;\r
    bill->subtotal = bill->energyCharge + bill->fixedCharge;\r
    bill->gstAmount = bill->subtotal * GST_RATE;\r
    bill->totalBillAmount = bill->subtotal + bill->gstAmount;\r
\r
    printf("=============================================================\\n");\r
    printf("   WEST BENGAL STATE ELECTRICITY UTILITY - BILL RECEIPT      \\n");\r
    printf("   INVOICE REF NO: WBSEDCL/%d/2026                           \\n", invoiceCounter++);\r
    printf("=============================================================\\n");\r
    printf("Consumer No      : %d\\n", bill->consumerNumber);\r
    printf("Consumer Name    : %s\\n", bill->name);\r
    printf("Previous Reading : %10.2f kWh\\n", bill->previousReading);\r
    printf("Current Reading  : %10.2f kWh\\n", bill->currentReading);\r
    printf("Units Consumed   : %10.2f kWh\\n", bill->unitsConsumed);\r
    printf("-------------------------------------------------------------\\n");\r
    printf("TARIFF BREAKDOWN:                          AMOUNT (INR)\\n");\r
    printf("  • Energy Slab Charges                    : %12.2f\\n", bill->energyCharge);\r
    printf("  • Monthly Fixed Meter Charge             : %12.2f\\n", bill->fixedCharge);\r
    printf("  SUBTOTAL (Taxable Amount)                : %12.2f\\n", bill->subtotal);\r
    printf("  • GST @ 18.00%%                           : %12.2f\\n", bill->gstAmount);\r
    printf("=============================================================\\n");\r
    printf("TOTAL AMOUNT PAYABLE (INR)                 : %12.2f\\n", bill->totalBillAmount);\r
    printf("=============================================================\\n");\r
}\r
\r
int main(void) {\r
    ElectricityBill bill1 = {884102, "Sukanta Hui", 1450.0, 1835.0};\r
    generateBill(&bill1);\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
#include <stdint.h>\r
#include <stdbool.h>\r
\r
#define FLAG_POWER_ON     (1 << 0)\r
#define FLAG_SENSOR_READY (1 << 1)\r
#define FLAG_TX_ACTIVE    (1 << 2)\r
#define FLAG_RX_BUFFER    (1 << 3)\r
#define FLAG_ERROR_ALERT  (1 << 4)\r
#define FLAG_OVERHEAT     (1 << 5)\r
\r
void printBinary8(uint8_t val) {\r
    printf("0b");\r
    for (int i = 7; i >= 0; i--) {\r
        printf("%d", (val >> i) & 1);\r
    }\r
}\r
\r
void printRegisterStatus(uint8_t reg) {\r
    printf("Register Value: 0x%02X (", reg);\r
    printBinary8(reg);\r
    printf(")\\n");\r
    printf("  • Power ON     : %s\\n", (reg & FLAG_POWER_ON) ? "YES" : "NO");\r
    printf("  • Sensor Ready : %s\\n", (reg & FLAG_SENSOR_READY) ? "YES" : "NO");\r
    printf("  • TX Active    : %s\\n", (reg & FLAG_TX_ACTIVE) ? "YES" : "NO");\r
    printf("  • RX Buffer    : %s\\n", (reg & FLAG_RX_BUFFER) ? "YES" : "NO");\r
    printf("  • Error Alert  : %s\\n", (reg & FLAG_ERROR_ALERT) ? "YES" : "NO");\r
    printf("  • Overheat     : %s\\n", (reg & FLAG_OVERHEAT) ? "YES" : "NO");\r
}\r
\r
void setFlag(uint8_t *reg, uint8_t mask) {\r
    *reg |= mask;\r
}\r
\r
void clearFlag(uint8_t *reg, uint8_t mask) {\r
    *reg &= ~mask;\r
}\r
\r
void toggleFlag(uint8_t *reg, uint8_t mask) {\r
    *reg ^= mask;\r
}\r
\r
int main(void) {\r
    uint8_t statusRegister = 0x00;\r
\r
    printf("=========================================================\\n");\r
    printf("  EMBEDDED HARDWARE STATUS REGISTER & FLAGS INSPECTOR    \\n");\r
    printf("=========================================================\\n\\n");\r
\r
    printf("1. INITIAL REGISTER STATE:\\n");\r
    printRegisterStatus(statusRegister);\r
\r
    printf("\\n2. SETTING POWER_ON AND SENSOR_READY FLAGS:\\n");\r
    setFlag(&statusRegister, FLAG_POWER_ON | FLAG_SENSOR_READY);\r
    printRegisterStatus(statusRegister);\r
\r
    printf("\\n3. ACTIVATING TRANSMITTER (TX_ACTIVE):\\n");\r
    setFlag(&statusRegister, FLAG_TX_ACTIVE);\r
    printRegisterStatus(statusRegister);\r
\r
    printf("\\n4. TRIGGERING ERROR ALERT & CLEARING TX:\\n");\r
    setFlag(&statusRegister, FLAG_ERROR_ALERT);\r
    clearFlag(&statusRegister, FLAG_TX_ACTIVE);\r
    printRegisterStatus(statusRegister);\r
\r
    printf("\\n5. TOGGLING RX_BUFFER AND OVERHEAT FLAGS:\\n");\r
    toggleFlag(&statusRegister, FLAG_RX_BUFFER | FLAG_OVERHEAT);\r
    printRegisterStatus(statusRegister);\r
\r
    return 0;\r
}\r
`,R=`#include <stdio.h>\r
\r
#define HRA_RATE 0.20\r
#define DA_RATE  0.10\r
#define PF_RATE  0.12\r
#define CGST_RATE 0.09\r
#define SGST_RATE 0.09\r
\r
typedef struct {\r
    int empId;\r
    char name[50];\r
    double basicSalary;\r
    double hra;\r
    double da;\r
    double grossSalary;\r
    double pf;\r
    double taxableIncome;\r
    double incomeTax;\r
    double netSalary;\r
} Employee;\r
\r
double calculateIncomeTax(double taxableIncome) {\r
    double tax = 0.0;\r
    if (taxableIncome <= 250000.0) {\r
        tax = 0.0;\r
    } else if (taxableIncome <= 500000.0) {\r
        tax = (taxableIncome - 250000.0) * 0.05;\r
    } else if (taxableIncome <= 1000000.0) {\r
        tax = 12500.0 + (taxableIncome - 500000.0) * 0.20;\r
    } else {\r
        tax = 112500.0 + (taxableIncome - 1000000.0) * 0.30;\r
    }\r
    return tax;\r
}\r
\r
void processPayroll(Employee *emp) {\r
    emp->hra = emp->basicSalary * HRA_RATE;\r
    emp->da = emp->basicSalary * DA_RATE;\r
    emp->grossSalary = emp->basicSalary + emp->hra + emp->da;\r
    emp->pf = emp->basicSalary * PF_RATE;\r
    \r
    double annualGross = emp->grossSalary * 12.0;\r
    double annualPf = emp->pf * 12.0;\r
    double standardDeduction = 50000.0;\r
    \r
    double annualTaxable = annualGross - annualPf - standardDeduction;\r
    if (annualTaxable < 0) annualTaxable = 0;\r
    \r
    emp->taxableIncome = annualTaxable;\r
    double annualTax = calculateIncomeTax(annualTaxable);\r
    emp->incomeTax = annualTax / 12.0;\r
    \r
    emp->netSalary = emp->grossSalary - emp->pf - emp->incomeTax;\r
}\r
\r
int main(void) {\r
    Employee emp1 = {101, "Subhashis Roy", 45000.0};\r
    \r
    processPayroll(&emp1);\r
    \r
    printf("=============================================================\\n");\r
    printf("     CODER & ACCOTAX PAYROLL & TAX CALCULATOR ENGINE         \\n");\r
    printf("=============================================================\\n");\r
    printf("Employee ID      : %d\\n", emp1.empId);\r
    printf("Employee Name    : %s\\n", emp1.name);\r
    printf("-------------------------------------------------------------\\n");\r
    printf("EARNINGS (MONTHLY):                        AMOUNT (INR)\\n");\r
    printf("  • Basic Pay                              : %12.2f\\n", emp1.basicSalary);\r
    printf("  • House Rent Allowance (HRA @ 20%%)       : %12.2f\\n", emp1.hra);\r
    printf("  • Dearness Allowance (DA @ 10%%)          : %12.2f\\n", emp1.da);\r
    printf("  GROSS MONTHLY SALARY                     : %12.2f\\n", emp1.grossSalary);\r
    printf("-------------------------------------------------------------\\n");\r
    printf("DEDUCTIONS (MONTHLY):\\n");\r
    printf("  • Provident Fund (PF @ 12%%)              : %12.2f\\n", emp1.pf);\r
    printf("  • Estimated Monthly Income Tax           : %12.2f\\n", emp1.incomeTax);\r
    printf("-------------------------------------------------------------\\n");\r
    printf("NET MONTHLY TAKE-HOME SALARY               : %12.2f\\n", emp1.netSalary);\r
    printf("=============================================================\\n");\r
    \r
    return 0;\r
}\r
`,A=`#include <stdio.h>\r
\r
long long factorialRecursive(int n) {\r
    if (n <= 1) return 1;\r
    return (long long)n * factorialRecursive(n - 1);\r
}\r
\r
long long factorialTailRecursive(int n, long long accumulator) {\r
    if (n <= 1) return accumulator;\r
    return factorialTailRecursive(n - 1, (long long)n * accumulator);\r
}\r
\r
int fibonacci(int n) {\r
    if (n <= 0) return 0;\r
    if (n == 1) return 1;\r
    return fibonacci(n - 1) + fibonacci(n - 2);\r
}\r
\r
int gcdRecursive(int a, int b) {\r
    if (b == 0) return a;\r
    return gcdRecursive(b, a % b);\r
}\r
\r
long long powerRecursive(int base, int exp) {\r
    if (exp == 0) return 1;\r
    return (long long)base * powerRecursive(base, exp - 1);\r
}\r
\r
void towerOfHanoi(int n, char source, char auxiliary, char destination) {\r
    if (n == 1) {\r
        printf("  Move Disk 1 from Rod %c -> Rod %c\\n", source, destination);\r
        return;\r
    }\r
    towerOfHanoi(n - 1, source, destination, auxiliary);\r
    printf("  Move Disk %d from Rod %c -> Rod %c\\n", n, source, destination);\r
    towerOfHanoi(n - 1, auxiliary, source, destination);\r
}\r
\r
int main(void) {\r
    printf("=========================================================\\n");\r
    printf("   SCIENTIFIC RECURSION & NUMBER THEORY EXPLORER LAB     \\n");\r
    printf("=========================================================\\n\\n");\r
\r
    int num = 6;\r
    printf("[1] FACTORIAL COMPUTATION (n = %d):\\n", num);\r
    printf("  • Non-Tail Recursive Result : %lld\\n", factorialRecursive(num));\r
    printf("  • Tail Recursive Result     : %lld\\n", factorialTailRecursive(num, 1));\r
\r
    int fibTerm = 7;\r
    printf("\\n[2] FIBONACCI SEQUENCE (Term %d):\\n", fibTerm);\r
    printf("  • 7th Fibonacci Term       : %d\\n", fibonacci(fibTerm));\r
\r
    int x = 48, y = 18;\r
    printf("\\n[3] EUCLIDEAN GCD (a = %d, b = %d):\\n", x, y);\r
    printf("  • GCD                       : %d\\n", gcdRecursive(x, y));\r
\r
    int base = 2, exp = 10;\r
    printf("\\n[4] POWER FUNCTION (%d^%d):\\n", base, exp);\r
    printf("  • Power Result              : %lld\\n", powerRecursive(base, exp));\r
\r
    int disks = 3;\r
    printf("\\n[5] TOWER OF HANOI PUZZLE (%d Disks):\\n", disks);\r
    towerOfHanoi(disks, 'A', 'B', 'C');\r
\r
    return 0;\r
}\r
`,b=`#include <stdio.h>\r
#include <stdbool.h>\r
#include <math.h>\r
\r
bool isPrime(int n) {\r
    if (n <= 1) return false;\r
    for (int i = 2; i * i <= n; i++) {\r
        if (n % i == 0) return false;\r
    }\r
    return true;\r
}\r
\r
bool isArmstrong(int n) {\r
    int temp = n, sum = 0, digits = 0;\r
    while (temp > 0) {\r
        digits++;\r
        temp /= 10;\r
    }\r
    temp = n;\r
    while (temp > 0) {\r
        int d = temp % 10;\r
        int p = 1;\r
        for (int i = 0; i < digits; i++) p *= d;\r
        sum += p;\r
        temp /= 10;\r
    }\r
    return sum == n;\r
}\r
\r
bool isPalindrome(int n) {\r
    int temp = n, rev = 0;\r
    while (temp > 0) {\r
        rev = rev * 10 + (temp % 10);\r
        temp /= 10;\r
    }\r
    return rev == n;\r
}\r
\r
bool isPerfect(int n) {\r
    if (n <= 1) return false;\r
    int sum = 1;\r
    for (int i = 2; i * i <= n; i++) {\r
        if (n % i == 0) {\r
            sum += i;\r
            if (i * i != n) sum += n / i;\r
        }\r
    }\r
    return sum == n;\r
}\r
\r
long long fact(int d) {\r
    long long f = 1;\r
    for (int i = 1; i <= d; i++) f *= i;\r
    return f;\r
}\r
\r
bool isStrong(int n) {\r
    int temp = n;\r
    long long sum = 0;\r
    while (temp > 0) {\r
        sum += fact(temp % 10);\r
        temp /= 10;\r
    }\r
    return sum == n;\r
}\r
\r
bool isHarshad(int n) {\r
    if (n <= 0) return false;\r
    int temp = n, sum = 0;\r
    while (temp > 0) {\r
        sum += temp % 10;\r
        temp /= 10;\r
    }\r
    return (n % sum == 0);\r
}\r
\r
void analyzeNumber(int num) {\r
    printf("---------------------------------------------------------\\n");\r
    printf("NUMERIC CHARACTERISTICS FOR: %d\\n", num);\r
    printf("---------------------------------------------------------\\n");\r
    printf("  • Prime Number     : %s\\n", isPrime(num) ? "YES" : "NO");\r
    printf("  • Armstrong Number : %s\\n", isArmstrong(num) ? "YES" : "NO");\r
    printf("  • Palindrome Number: %s\\n", isPalindrome(num) ? "YES" : "NO");\r
    printf("  • Perfect Number   : %s\\n", isPerfect(num) ? "YES" : "NO");\r
    printf("  • Strong Number    : %s\\n", isStrong(num) ? "YES" : "NO");\r
    printf("  • Harshad Number   : %s\\n", isHarshad(num) ? "YES" : "NO");\r
}\r
\r
int main(void) {\r
    printf("=========================================================\\n");\r
    printf("    COMPREHENSIVE ALGORITHMIC NUMBER ANALYZER LAB        \\n");\r
    printf("=========================================================\\n");\r
\r
    analyzeNumber(153);\r
    analyzeNumber(28);\r
    analyzeNumber(145);\r
    analyzeNumber(121);\r
\r
    return 0;\r
}\r
`,T=`#include <stdio.h>\r
\r
void printPyramid(int rows) {\r
    printf("--- [1] CENTERED ISOSCELES STAR PYRAMID (%d Rows) ---\\n", rows);\r
    for (int r = 1; r <= rows; r++) {\r
        for (int s = 1; s <= rows - r; s++) printf(" ");\r
        for (int k = 1; k <= 2 * r - 1; k++) printf("*");\r
        printf("\\n");\r
    }\r
}\r
\r
void printDiamond(int n) {\r
    printf("\\n--- [2] SYMMETRICAL DIAMOND PATTERN (Radius %d) ---\\n", n);\r
    for (int r = 1; r <= n; r++) {\r
        for (int s = 1; s <= n - r; s++) printf(" ");\r
        for (int k = 1; k <= 2 * r - 1; k++) printf("*");\r
        printf("\\n");\r
    }\r
    for (int r = n - 1; r >= 1; r--) {\r
        for (int s = 1; s <= n - r; s++) printf(" ");\r
        for (int k = 1; k <= 2 * r - 1; k++) printf("*");\r
        printf("\\n");\r
    }\r
}\r
\r
void printFloydsTriangle(int rows) {\r
    printf("\\n--- [3] FLOYD'S TRIANGLE (%d Rows) ---\\n", rows);\r
    int num = 1;\r
    for (int r = 1; r <= rows; r++) {\r
        for (int c = 1; c <= r; c++) {\r
            printf("%-3d ", num++);\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
void printPascalsTriangle(int rows) {\r
    printf("\\n--- [4] PASCAL'S TRIANGLE (%d Rows) ---\\n", rows);\r
    for (int n = 0; n < rows; n++) {\r
        for (int s = 0; s < rows - n - 1; s++) printf("  ");\r
        int val = 1;\r
        for (int k = 0; k <= n; k++) {\r
            printf("%4d", val);\r
            val = val * (n - k) / (k + 1);\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
int main(void) {\r
    printf("=========================================================\\n");\r
    printf("  INTERACTIVE ASCII SPATIAL PATTERN & GEOMETRY GENERATOR  \\n");\r
    printf("=========================================================\\n\\n");\r
\r
    printPyramid(5);\r
    printDiamond(4);\r
    printFloydsTriangle(5);\r
    printPascalsTriangle(6);\r
\r
    return 0;\r
}\r
`,E=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
double add(double a, double b) { return a + b; }\r
double subtract(double a, double b) { return a - b; }\r
double multiply(double a, double b) { return a * b; }\r
double divide(double a, double b) {\r
    if (b == 0.0) {\r
        printf("\\n[ERROR] Division by zero!\\n");\r
        return 0.0;\r
    }\r
    return a / b;\r
}\r
\r
typedef double (*MathFunc)(double, double);\r
\r
int main(void) {\r
    MathFunc dispatchTable[] = { add, subtract, multiply, divide };\r
    const char *opNames[] = { "Addition (+)", "Subtraction (-)", "Multiplication (*)", "Division (/)" };\r
    \r
    double num1 = 45.5, num2 = 12.2;\r
    int choice;\r
\r
    printf("=========================================================\\n");\r
    printf("  DYNAMIC FUNCTION POINTER CALCULATOR & DISPATCH TABLE   \\n");\r
    printf("=========================================================\\n");\r
    printf("Operands: A = %.2f, B = %.2f\\n\\n", num1, num2);\r
\r
    for (int i = 0; i < 4; i++) {\r
        double result = dispatchTable[i](num1, num2);\r
        printf("  Operation %d: %-20s -> Result: %10.2f\\n", i + 1, opNames[i], result);\r
    }\r
\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
#include <stdint.h>\r
\r
#define ONE_KB 1024ULL\r
#define ONE_MB (1024ULL * ONE_KB)\r
#define ONE_GB (1024ULL * ONE_MB)\r
#define ONE_TB (1024ULL * ONE_GB)\r
\r
void formatByteSize(uint64_t bytes) {\r
    printf("Raw Bytes: %llu Bytes\\n", (unsigned long long)bytes);\r
    printf("  • Kilobytes (KB) : %12.4f KB\\n", (double)bytes / ONE_KB);\r
    printf("  • Megabytes (MB) : %12.4f MB\\n", (double)bytes / ONE_MB);\r
    printf("  • Gigabytes (GB) : %12.4f GB\\n", (double)bytes / ONE_GB);\r
    printf("  • Terabytes (TB) : %12.6f TB\\n", (double)bytes / ONE_TB);\r
}\r
\r
int main(void) {\r
    printf("=========================================================\\n");\r
    printf("    SYSTEM UNIT CONVERTER & STORAGE BYTE CALCULATOR      \\n");\r
    printf("=========================================================\\n\\n");\r
\r
    uint64_t ramSize = 16ULL * ONE_GB;\r
    printf("--- [1] 16 GB SYSTEM RAM CAPACITY ---\\n");\r
    formatByteSize(ramSize);\r
\r
    uint64_t ssdSize = 512ULL * ONE_GB;\r
    printf("\\n--- [2] 512 GB NVMe SSD DISK CAPACITY ---\\n");\r
    formatByteSize(ssdSize);\r
\r
    return 0;\r
}\r
`,C=`#include <stdio.h>\r
\r
int globalCounter = 100;\r
static int fileStaticCounter = 500;\r
\r
void testStorageClasses(void) {\r
    auto int localAuto = 10;\r
    static int localStatic = 1;\r
    register int regCounter = 1000;\r
\r
    localAuto++;\r
    localStatic++;\r
    regCounter++;\r
    globalCounter++;\r
    fileStaticCounter++;\r
\r
    printf("  Inside testStorageClasses() Call:\\n");\r
    printf("    • localAuto   (Stack) : %d\\n", localAuto);\r
    printf("    • localStatic (Static): %d\\n", localStatic);\r
    printf("    • regCounter  (Reg)   : %d\\n", regCounter);\r
    printf("    • globalCount (Global): %d\\n", globalCounter);\r
    printf("    • fileStatic  (File)  : %d\\n", fileStaticCounter);\r
}\r
\r
int main(void) {\r
    printf("=========================================================\\n");\r
    printf("  MODULAR STORAGE CLASS & STATE COUNTER SIMULATOR        \\n");\r
    printf("=========================================================\\n\\n");\r
\r
    printf("FIRST FUNCTION INVOCATION:\\n");\r
    testStorageClasses();\r
\r
    printf("\\nSECOND FUNCTION INVOCATION:\\n");\r
    testStorageClasses();\r
\r
    printf("\\nTHIRD FUNCTION INVOCATION:\\n");\r
    testStorageClasses();\r
\r
    return 0;\r
}\r
`,N="Segment 1 Capstone Projects: C Language Foundations & Systems Architecture",y="C Programming Language (ANSI C / C99 / C11)",I="University & Industrial Systems Engineering Standards",O=["GCC Compiler","GDB Debugger","VS Code","Valgrind"],h={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Shyamnagar"},_=JSON.parse('[{"projectId":"SEG1_PRJ01","title":"Interactive ATM Banking & PIN Verification State Machine System","difficulty":"Intermediate","description":"Design an interactive CLI ATM Banking system incorporating state tracking, security limits, menu selection, and transaction balance processing. The application maintains static account balance and security attempt counters. It restricts user PIN entry to 3 failed attempts, after which the account is locked. The menu permits checking balance, depositing funds, and withdrawing funds with overdraft protection.","learningOutcome":"State Machine Architecture, Modular Functions, Loop Control, Static Security Attempt Counters & Input Validation","exampleText":"Default PIN: 1234 | Deposit: 1500.00 | Withdraw: 2000.00","exampleOutput":"=====================================================\\n   CODER & ACCOTAX ATM BANKING SYSTEM - BARRACKPORE   \\n=====================================================\\nEnter 4-Digit Security PIN: 1234\\n\\n--- ATM MAIN MENU ---\\n1. Check Account Balance\\n2. Deposit Funds\\n3. Withdraw Funds\\n4. Exit ATM Terminal\\nEnter Selection (1-4): 1\\n\\n>>> CURRENT ACCOUNT BALANCE: INR 5000.00","logicExplanation":"1. **PIN Security**: `verifyPin()` tracks `failedAttempts` using `static` variables; locks account if `failedAttempts >= 3`.\\n2. **Transactions**: `depositMoney()` and `withdrawMoney()` perform input validation and balance checks.\\n3. **Loop Menu**: `do-while` loop keeps menu running until option 4 is selected.","answerFile":"./answers/answer1.c","codeExplanation":"1. `static double accountBalance`: Persists balance state across menu operations.\\n2. `scanf` status checks prevent infinite loops on non-integer inputs."},{"projectId":"SEG1_PRJ02","title":"Bitwise Hardware Register & System Telemetry Flag Inspector","difficulty":"Intermediate","description":"Embedded microcontrollers use single-byte status registers to track peripheral hardware states. In this project, you will build a Bitwise Hardware Status Register & Flags Inspector in C. Using an 8-bit unsigned integer (`uint8_t`), you will define bitmask constants for POWER_ON (bit 0), SENSOR_READY (bit 1), TX_ACTIVE (bit 2), RX_BUFFER (bit 3), ERROR_ALERT (bit 4), and OVERHEAT (bit 5). You will write functions to set, clear, test, and toggle flags, and format binary bit output.","learningOutcome":"Low-level Bitwise Manipulation (&, |, ^, ~), Bit Shift Masking, Exact-Width Types (<stdint.h>) & Binary Printing","exampleText":"Initial Register: 0x00 -> Power & Sensor ON -> TX Active -> Error Triggered -> RX Toggle","exampleOutput":"Register Value: 0x03 (0b00000011)\\n  • Power ON     : YES\\n  • Sensor Ready : YES\\n  • TX Active    : NO\\n  • RX Buffer    : NO\\n  • Error Alert  : NO\\n  • Overheat     : NO","logicExplanation":"1. **Bitmasks**: `#define FLAG_POWER_ON (1 << 0)`, `#define FLAG_SENSOR_READY (1 << 1)`, etc.\\n2. **Set**: `*reg |= mask`.\\n3. **Clear**: `*reg &= ~mask`.\\n4. **Toggle**: `*reg ^= mask`.\\n5. **Check**: `(*reg & mask) != 0`.","answerFile":"./answers/answer2.c","codeExplanation":"1. `printBinary8()`: Iterates from bit 7 down to 0, using `(val >> i) & 1` to output binary strings.\\n2. Pass-by-reference pointers (`uint8_t *reg`) mutate caller register memory directly."},{"projectId":"SEG1_PRJ03","title":"Employee Payroll, Tax Slab & Allowance Calculation Engine","difficulty":"Intermediate","description":"Enterprise HR applications process employee compensation, statutory deductions, and progressive income tax slab calculations. In this project, you will construct a Commercial Payroll & Tax Calculation Engine in C. Given basic monthly salary, the program computes House Rent Allowance (HRA @ 20%), Dearness Allowance (DA @ 10%), Gross Monthly Salary, Provident Fund (PF @ 12%), annual taxable income after standard deduction (INR 50,000), monthly income tax based on progressive tax slabs, and net monthly take-home salary.","learningOutcome":"Financial Floating-Point Math, Progressive Tax Slabs (if-else-if), Struct Encapsulation & Column Formatted Output","exampleText":"Employee: Subhashis Roy | Basic Pay: INR 45,000.00 / month","exampleOutput":"=============================================================\\n     CODER & ACCOTAX PAYROLL & TAX CALCULATOR ENGINE         \\n=============================================================\\nEmployee ID      : 101\\nEmployee Name    : Subhashis Roy\\n-------------------------------------------------------------\\nEARNINGS (MONTHLY):                        AMOUNT (INR)\\n  • Basic Pay                              :     45000.00\\n  • House Rent Allowance (HRA @ 20%)       :      9000.00\\n  • Dearness Allowance (DA @ 10%)          :      4500.00\\n  GROSS MONTHLY SALARY                     :     58500.00\\n-------------------------------------------------------------\\nNET MONTHLY TAKE-HOME SALARY               :     48850.00\\n=============================================================","logicExplanation":"1. **Gross Salary**: `Basic + HRA (20%) + DA (10%)`.\\n2. **Taxable Income**: `(Gross * 12) - (PF * 12) - StandardDeduction (50000)`.\\n3. **Tax Slabs**: 0% up to 2.5L; 5% from 2.5L-5L; 20% from 5L-10L; 30% above 10L.","answerFile":"./answers/answer3.c","codeExplanation":"1. `Employee` struct encapsulates all monthly/annual compensation metrics.\\n2. `%12.2f` format specifiers align financial figures cleanly."},{"projectId":"SEG1_PRJ04","title":"Scientific Recursion & Number Theory Explorer (Fibonacci, GCD, Power, Tower of Hanoi)","difficulty":"Advanced","description":"Algorithmic math toolkits utilize mathematical recursion to solve complex divide-and-conquer problems. In this project, you will build a Scientific Recursion Explorer in C. The suite includes: 1. Factorial (both non-tail and tail-recursive with accumulator), 2. Fibonacci term calculator, 3. Euclidean GCD calculator, 4. Exponential power function (`base^exp`), and 5. Tower of Hanoi step-by-step puzzle solver.","learningOutcome":"Recursion Mechanics, Base Conditions, Call Stack Unwinding, Tail Call Optimization & Divide-and-Conquer","exampleText":"Factorial: 6 | Fibonacci: 7th | GCD: 48 & 18 | Hanoi: 3 Disks","exampleOutput":"[1] FACTORIAL COMPUTATION (n = 6):\\n  • Non-Tail Recursive Result : 720\\n  • Tail Recursive Result     : 720\\n\\n[5] TOWER OF HANOI PUZZLE (3 Disks):\\n  Move Disk 1 from Rod A -> Rod C\\n  Move Disk 2 from Rod A -> Rod B\\n  Move Disk 1 from Rod C -> Rod B","logicExplanation":"1. **Factorial Tail**: `factorialTail(n-1, n * acc)`.\\n2. **Euclidean GCD**: `gcd(b, a % b)` until `b == 0`.\\n3. **Tower of Hanoi**: Move n-1 disks to aux, move disk n to dest, move n-1 disks from aux to dest.","answerFile":"./answers/answer4.c","codeExplanation":"1. Tail-recursive functions pass accumulators to enable Tail Call Optimization (TCO).\\n2. Base cases (`n <= 1`, `exp == 0`, `b == 0`) guarantee recursion termination."},{"projectId":"SEG1_PRJ05","title":"Algorithmic Number Analyzer (Prime, Armstrong, Palindrome, Perfect, Strong, Harshad)","difficulty":"Intermediate","description":"Number theory engines perform multi-faceted property checks on integers. In this project, you will develop a Comprehensive Algorithmic Number Analyzer in C. Given an input integer, the analyzer tests whether the number is: 1. Prime, 2. Armstrong (narcissistic), 3. Palindrome (reads same backwards), 4. Perfect (sum of proper divisors equals number), 5. Strong (sum of factorials of digits equals number), and 6. Harshad (divisible by sum of digits).","learningOutcome":"Digit Extraction (% 10, / 10), Modular Functions, Prime Trial Division (sqrt N) & Number Theory Algorithms","exampleText":"Test Integers: 153, 28, 145, 121","exampleOutput":"NUMERIC CHARACTERISTICS FOR: 153\\n  • Prime Number     : NO\\n  • Armstrong Number : YES\\n  • Palindrome Number: NO\\n  • Perfect Number   : NO\\n  • Strong Number    : NO\\n  • Harshad Number   : YES","logicExplanation":"1. **Prime**: Loop `i=2` to `i*i <= n` testing `n % i == 0`.\\n2. **Armstrong**: Extract digits, compute sum of `digit^num_digits`.\\n3. **Palindrome**: Build `rev = rev * 10 + (n % 10)`.\\n4. **Strong**: Compute sum of `fact(digit)`.","answerFile":"./answers/answer5.c","codeExplanation":"1. Modular functions (`isPrime`, `isArmstrong`, etc.) return boolean status (`stdbool.h`).\\n2. Optimizing prime testing up to `i*i <= n` runs in `O(sqrt N)` time."},{"projectId":"SEG1_PRJ06","title":"Interactive ASCII Spatial Coordinate Pattern & Diamond Generator","difficulty":"Intermediate","description":"Computer graphics engines map 2D spatial coordinates to render procedural shapes. In this project, you will build an Interactive ASCII Pattern Generator in C. The application produces 4 procedural patterns: 1. Centered Isosceles Star Pyramid, 2. Symmetrical Diamond Pattern, 3. Floyd\'s Triangle of consecutive natural numbers, and 4. Pascal\'s Triangle of binomial coefficients.","learningOutcome":"Nested Loops, 2D Coordinate Geometry Mapping, Leading Space Algorithms & Binomial Coefficients","exampleText":"Pyramid: 5 Rows | Diamond: Radius 4 | Floyd: 5 Rows | Pascal: 6 Rows","exampleOutput":"--- [1] CENTERED ISOSCELES STAR PYRAMID (5 Rows) ---\\n    *\\n   ***\\n  *****\\n *******\\n*********\\n\\n--- [3] FLOYD\'S TRIANGLE (5 Rows) ---\\n1   \\n2   3   \\n4   5   6   \\n7   8   9   10  \\n11  12  13  14  15","logicExplanation":"1. **Pyramid**: Row r has `N - r` leading spaces and `2 * r - 1` stars.\\n2. **Diamond**: Combines upper pyramid with lower inverted pyramid.\\n3. **Pascal**: Uses combination formula `val = val * (n - k) / (k + 1)`.","answerFile":"./answers/answer6.c","codeExplanation":"1. Nested outer row (r) and inner column (c) loops control 2D spatial coordinate printing.\\n2. `printf(\\"\\\\n\\")` advances output line at outer loop completion."},{"projectId":"SEG1_PRJ07","title":"Dynamic Function Pointer Command-Line Calculator & Math Dispatcher","difficulty":"Advanced","description":"Extensible C frameworks use function pointers to implement dynamic event callbacks and dispatch tables. In this project, you will construct a Dynamic Function Pointer Calculator & Math Dispatcher in C. You will implement standard math operations (add, subtract, multiply, divide with zero-check), declare a function pointer typedef (`typedef double (*MathFunc)(double, double)`), and build a Dispatch Table array of function pointers to execute mathematical operations dynamically via index.","learningOutcome":"Function Pointer Declaration, Typedef Aliases, Function Dispatch Tables & Dynamic Callback Invocation","exampleText":"Operands: A = 45.50, B = 12.20","exampleOutput":"=========================================================\\n  DYNAMIC FUNCTION POINTER CALCULATOR & DISPATCH TABLE   \\n=========================================================\\nOperands: A = 45.50, B = 12.20\\n\\n  Operation 1: Addition (+)         -> Result:      57.70\\n  Operation 2: Subtraction (-)      -> Result:      33.30\\n  Operation 3: Multiplication (*)   -> Result:     555.10\\n  Operation 4: Division (/)         -> Result:       3.73","logicExplanation":"1. **Typedef**: `typedef double (*MathFunc)(double, double)`.\\n2. **Dispatch Table**: `MathFunc dispatchTable[] = { add, subtract, multiply, divide }`.\\n3. **Invocation**: `dispatchTable[i](a, b)` executes target function dynamically.","answerFile":"./answers/answer7.c","codeExplanation":"1. Eliminates large switch-case blocks by utilizing O(1) array index dispatch.\\n2. `divide()` performs input validation before dividing to prevent division-by-zero errors."},{"projectId":"SEG1_PRJ08","title":"System Unit Converter & Storage Byte Calculator (Bytes, KB, MB, GB, TB)","difficulty":"Intermediate","description":"Operating system file managers process storage capacity conversions across binary byte prefixes (1024-based). In this project, you will build a System Unit Converter & Storage Byte Calculator in C. Given an input byte count using 64-bit unsigned integers (`uint64_t`), the program calculates and displays equivalent capacities in Bytes, Kilobytes (KB), Megabytes (MB), Gigabytes (GB), and Terabytes (TB) with high floating-point precision.","learningOutcome":"64-bit Integer Modifiers (`uint64_t`), Binary Shift Constants (1ULL << 30), High-Precision Floating-Point Conversions & Column Alignment","exampleText":"Inputs: 16 GB System RAM (17,179,869,184 Bytes), 512 GB SSD (549,755,813,888 Bytes)","exampleOutput":"--- [1] 16 GB SYSTEM RAM CAPACITY ---\\nRaw Bytes: 17179869184 Bytes\\n  • Kilobytes (KB) : 16777216.0000 KB\\n  • Megabytes (MB) :    16384.0000 MB\\n  • Gigabytes (GB) :       16.0000 GB\\n  • Terabytes (TB) :        0.015625 TB","logicExplanation":"1. **Binary Constants**: `#define ONE_KB 1024ULL`, `#define ONE_MB (1024ULL * ONE_KB)`, etc.\\n2. **Conversion**: `(double)bytes / ONE_GB`.\\n3. **Format**: `%llu` for 64-bit integer printing, `%12.4f` for float alignments.","answerFile":"./answers/answer8.c","codeExplanation":"1. Using `1024ULL` constants prevents integer overflow during multiplication.\\n2. `uint64_t` ensures compatibility with modern multi-terabyte storage volumes."},{"projectId":"SEG1_PRJ09","title":"Modular Storage Class & State Counter Simulator (auto, static, register, extern)","difficulty":"Intermediate","description":"Understanding variable scope, lifetime, and linkage is vital for C systems programming. In this project, you will construct a Modular Storage Class & State Counter Simulator in C. The application declares variables across all 4 primary storage classes: `auto` (stack allocation), `static` (persistent state across function calls), `register` (CPU register hint), and `extern` / file-scope globals. You will execute multiple sequential function calls to demonstrate state persistence vs local automatic destruction.","learningOutcome":"Storage Class Specifiers (auto, register, static, extern), Scope & Lifetime Analysis, Stack vs Static Segment Allocation","exampleText":"Sequential Invocations: Call 1, Call 2, Call 3","exampleOutput":"FIRST FUNCTION INVOCATION:\\n  Inside testStorageClasses() Call:\\n    • localAuto   (Stack) : 11\\n    • localStatic (Static): 2\\n    • regCounter  (Reg)   : 1001\\n    • globalCount (Global): 101\\n\\nSECOND FUNCTION INVOCATION:\\n  Inside testStorageClasses() Call:\\n    • localAuto   (Stack) : 11  [Re-initialized]\\n    • localStatic (Static): 3  [Persisted!]\\n    • regCounter  (Reg)   : 1001\\n    • globalCount (Global): 102","logicExplanation":"1. **auto**: Re-allocated and re-initialized on every function call.\\n2. **static**: Initialized once at program startup; retains value across calls.\\n3. **global**: Visible across functions; persists for program duration.","answerFile":"./answers/answer9.c","codeExplanation":"1. Visually demonstrates the contrast between stack auto variables and static segment variables.\\n2. Highlights state preservation without polluting global namespace."},{"projectId":"SEG1_PRJ10","title":"Segment 1 Systems Capstone: Comprehensive Smart Utility Billing & Energy Tariff Engine","difficulty":"Advanced","description":"As the final Capstone Project for Segment 1, you will construct a production-grade Smart Utility Billing & Energy Tariff Engine in C. The system processes consumer electricity consumption, computes tiered energy slab charges (Slab 1: 0-100 units @ Rs 4.50; Slab 2: 101-200 units @ Rs 6.00; Slab 3: 201-400 units @ Rs 7.50; Slab 4: >400 units @ Rs 9.00), applies fixed meter charges (Rs 150.00), adds 18% GST, auto-generates sequential invoice reference numbers using static counters, and outputs a formatted commercial invoice receipt.","learningOutcome":"Complete Segment 1 Synthesis: Modular Functions, Struct Modeling, Progressive Slabs, Constants, Tax Math, Static Invoice Counters & Commercial Column Formatting","exampleText":"Consumer: Sukanta Hui | Previous Reading: 1450.0 kWh | Current Reading: 1835.0 kWh (385 units)","exampleOutput":"=============================================================\\n   WEST BENGAL STATE ELECTRICITY UTILITY - BILL RECEIPT      \\n   INVOICE REF NO: WBSEDCL/5001/2026                         \\n=============================================================\\nConsumer No      : 884102\\nConsumer Name    : Sukanta Hui\\nUnits Consumed   :     385.00 kWh\\n-------------------------------------------------------------\\nTARIFF BREAKDOWN:                          AMOUNT (INR)\\n  • Energy Slab Charges                    :      2437.50\\n  • Monthly Fixed Meter Charge             :       150.00\\n  SUBTOTAL (Taxable Amount)                :      2587.50\\n  • GST @ 18.00%                           :       465.75\\n=============================================================\\nTOTAL AMOUNT PAYABLE (INR)                 :      3053.25\\n=============================================================","logicExplanation":"1. **Units Consumed**: `currentReading - previousReading`.\\n2. **Tiered Tariff**: `calculateEnergyCharges(units)` computes cumulative slab costs.\\n3. **Tax & Total**: `subtotal = energy + fixed`, `gst = subtotal * 0.18`, `total = subtotal + gst`.\\n4. **Static Counter**: `invoiceCounter++` increments invoice ref number.","answerFile":"./answers/answer10.c","codeExplanation":"1. `ElectricityBill` struct stores all consumer readings, sub-costs, and final totals.\\n2. `generateBill()` handles bill calculation, static invoice incrementing, and column formatting."}]'),c={projectCategory:N,subject:y,board:I,class:"Computer Science Core / BCA / B.Tech / ICSE / Systems Programming",tools:O,institute:h,projects:_};function F(){const[t,u]=l.useState(null);return l.useEffect(()=>{const i=Object.assign({"./topic3_files/answers/answer1.c":m,"./topic3_files/answers/answer10.c":f,"./topic3_files/answers/answer2.c":g,"./topic3_files/answers/answer3.c":R,"./topic3_files/answers/answer4.c":A,"./topic3_files/answers/answer5.c":b,"./topic3_files/answers/answer6.c":T,"./topic3_files/answers/answer7.c":E,"./topic3_files/answers/answer8.c":S,"./topic3_files/answers/answer9.c":C}),a={};Object.keys(i).forEach(n=>{const o=n.split("/").pop();a[o]=i[n]});const d=c.projects.map(n=>{const e=(n.answerFile||"").split("/").pop(),s=a[e];return s||console.warn(`⚠ Missing C answer file: ${e}`),{...n,answer:s||`// Source file "${e}" not found in answers folder`}});u({...c,projects:d})},[]),t?r.jsx(p,{data:t}):r.jsx("div",{className:"p-8 text-slate-400 flex items-center justify-center min-h-[350px]",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-6 h-6 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),r.jsx("span",{className:"text-sm font-semibold",children:"Loading 10 Segment 1 Capstone Projects..."})]})})}export{F as default};
