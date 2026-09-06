import{b as c,j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as d}from"./CProjectAnswerTemplateEnhanced-C_P01eJh.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const m=`/**
 * ============================================================================
 * Project 1: Interactive CLI Student Academic Report Card & Merit Analyzer
 * Module: 001_001 - Getting Started with C & Compiler Architecture
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

int main(void) {
    int rollNumber = 1042;
    char studentName[] = "Swadeep Sharma";
    float physics = 88.5f, chemistry = 92.0f, mathematics = 95.5f, computerScience = 98.0f;
    float totalMarks, percentage;

    printf("===================================================================\\n");
    printf("     BARRACKPORE ACADEMIC PERFORMANCE PORTAL - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    totalMarks = physics + chemistry + mathematics + computerScience;
    percentage = (totalMarks / 400.0f) * 100.0f;

    printf("STUDENT PROFILE:\\n");
    printf("  • Student Name   : %s\\n", studentName);
    printf("  • Roll Number    : %d\\n", rollNumber);
    printf("-------------------------------------------------------------------\\n");
    printf("SUBJECT SCORE SHEET:\\n");
    printf("  %-20s : %6.2f / 100.00\\n", "Physics", physics);
    printf("  %-20s : %6.2f / 100.00\\n", "Chemistry", chemistry);
    printf("  %-20s : %6.2f / 100.00\\n", "Mathematics", mathematics);
    printf("  %-20s : %6.2f / 100.00\\n", "Computer Science", computerScience);
    printf("-------------------------------------------------------------------\\n");
    printf("FINAL EVALUATION:\\n");
    printf("  • Aggregate Score: %6.2f / 400.00\\n", totalMarks);
    printf("  • Percentage     : %6.2f %%\\n", percentage);
    printf("  • Result Status  : %s\\n", (percentage >= 40.0f) ? "PASSED (PROMOTED)" : "NEEDS IMPROVEMENT");
    printf("  • Honors Standing: %s\\n", (percentage >= 90.0f) ? "FIRST CLASS WITH DISTINCTION (HONORS)" : "STANDARD MERIT");

    printf("===================================================================\\n");
    return 0;
}
`,f=`/**
 * ============================================================================
 * Project 10: Multi-Stage Compilation Simulation & Build Metadata Inspector
 * Module: 001_001 - Getting Started with C & Compiler Architecture
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

#define LAB_VERSION "2.4.0-PROD"
#define COMPILER_PIPELINE "Preprocessing -> Compilation -> Assembly -> Linking"

int main(void) {
    printf("===================================================================\\n");
    printf("     C COMPILER PIPELINE & BUILD METADATA INSPECTOR\\n");
    printf("     Coder & AccoTax Systems Laboratory | Barrackpore\\n");
    printf("===================================================================\\n\\n");

    printf("--- [1] Predefined Preprocessor Macros ---\\n");
    printf("  • Source File Name (__FILE__)    : %s\\n", __FILE__);
    printf("  • Compilation Date (__DATE__)    : %s\\n", __DATE__);
    printf("  • Compilation Time (__TIME__)    : %s\\n", __TIME__);
    printf("  • Active Code Line (__LINE__)    : %d\\n", __LINE__);

    #ifdef __STDC__
    printf("  • ANSI C Conformance (__STDC__)  : YES (Standard Conforming C)\\n");
    #endif

    #ifdef __STDC_VERSION__
    printf("  • C Standard Version             : %ldL (e.g. 199901L = C99, 201112L = C11)\\n", __STDC_VERSION__);
    #endif

    printf("\\n--- [2] Build Environment Config ---\\n");
    printf("  • Lab Software Release Version   : %s\\n", LAB_VERSION);
    printf("  • GCC Toolchain Pipeline Stages  : %s\\n", COMPILER_PIPELINE);

    printf("\\n--- [3] Hardware Data Model Word Size ---\\n");
    printf("  • Size of char                   : %zu Byte(s)\\n", sizeof(char));
    printf("  • Size of short int              : %zu Byte(s)\\n", sizeof(short));
    printf("  • Size of standard int           : %zu Byte(s)\\n", sizeof(int));
    printf("  • Size of long long int          : %zu Byte(s)\\n", sizeof(long long));
    printf("  • Size of pointer address (void*): %zu Byte(s) (%zu-bit Architecture)\\n",
           sizeof(void*), sizeof(void*) * 8);

    printf("\\n===================================================================\\n");
    return 0;
}
`,C=`/**
 * ============================================================================
 * Project 2: Multi-Unit Temperature Converter (Celsius, Fahrenheit, Kelvin, Rankine)
 * Module: 001_001 - Getting Started with C & Compiler Architecture
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

void convertTemperature(float celsius) {
    float fahrenheit = (celsius * 9.0f / 5.0f) + 32.0f;
    float kelvin = celsius + 273.15f;
    float rankine = (celsius + 273.15f) * 9.0f / 5.0f;

    printf("Input Base: %6.2f °C\\n", celsius);
    printf("  • Fahrenheit : %8.2f °F  [Formula: (C * 9/5) + 32]\\n", fahrenheit);
    printf("  • Kelvin     : %8.2f K   [Formula: C + 273.15]\\n", kelvin);
    printf("  • Rankine    : %8.2f °R  [Formula: (C + 273.15) * 9/5]\\n\\n", rankine);
}

int main(void) {
    printf("===================================================================\\n");
    printf("     SCIENTIFIC TEMPERATURE CONVERTER - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    printf("--- [Sample Case 1: Freezing Point of Water] ---\\n");
    convertTemperature(0.0f);

    printf("--- [Sample Case 2: Human Body Temperature] ---\\n");
    convertTemperature(37.0f);

    printf("--- [Sample Case 3: Boiling Point of Water] ---\\n");
    convertTemperature(100.0f);

    printf("===================================================================\\n");
    return 0;
}
`,h=`/**
 * ============================================================================
 * Project 3: Commercial Grocery Invoice & GST Billing Engine
 * Module: 001_001 - Getting Started with C & Compiler Architecture
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

int main(void) {
    printf("=======================================================================\\n");
    printf("     CODER & ACCOTAX SUPERMART - BARRACKPORE INVOICE\\n");
    printf("     GSTIN: 19ABCDE1234F1Z5 | Date: 02/09/2026\\n");
    printf("=======================================================================\\n");

    /* Item Details */
    const char *items[] = {"Basmati Rice (5kg)", "Refined Oil (1L)", "Dairy Milk (500ml)", "Whole Wheat Flour", "Almonds (250g)"};
    int quantities[] = {2, 3, 4, 1, 2};
    double unitPrices[] = {450.00, 165.50, 32.00, 380.00, 240.00};
    int itemCount = sizeof(quantities) / sizeof(quantities[0]);

    printf("%-4s %-25s %5s %12s %12s\\n", "SL", "ITEM DESCRIPTION", "QTY", "RATE (INR)", "AMOUNT (INR)");
    printf("-----------------------------------------------------------------------\\n");

    double subtotal = 0.0;
    for (int i = 0; i < itemCount; i++) {
        double lineTotal = quantities[i] * unitPrices[i];
        subtotal += lineTotal;
        printf("%-4d %-25s %5d %12.2f %12.2f\\n", i + 1, items[i], quantities[i], unitPrices[i], lineTotal);
    }

    /* Tax Calculations */
    double cgst = subtotal * 0.09; // 9% Central GST
    double sgst = subtotal * 0.09; // 9% State GST
    double grandTotal = subtotal + cgst + sgst;

    printf("-----------------------------------------------------------------------\\n");
    printf("%-48s %12.2f\\n", "SUBTOTAL (Taxable Amount):", subtotal);
    printf("%-48s %12.2f\\n", "CGST @ 9.00%:", cgst);
    printf("%-48s %12.2f\\n", "SGST @ 9.00%:", sgst);
    printf("=======================================================================\\n");
    printf("%-48s %12.2f\\n", "FINAL INVOICE GRAND TOTAL (INR):", grandTotal);
    printf("=======================================================================\\n");
    printf("             Thank you for shopping at Coder & AccoTax!\\n");

    return 0;
}
`,S=`/**
 * ============================================================================
 * Project 4: Circle, Cylinder & Sphere Geometric Measurements Calculator
 * Module: 001_001 - Getting Started with C & Compiler Architecture
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

#define PI 3.14159265358979323846

int main(void) {
    printf("===================================================================\\n");
    printf("     GEOMETRIC MENSURATION CALCULATOR - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    double radius = 7.0;
    double height = 15.0;

    /* 1. 2D Circle Calculations */
    double circleCircumference = 2.0 * PI * radius;
    double circleArea = PI * radius * radius;

    /* 2. 3D Cylinder Calculations */
    double cylinderSurfaceArea = 2.0 * PI * radius * (radius + height);
    double cylinderVolume = PI * radius * radius * height;

    /* 3. 3D Sphere Calculations */
    double sphereSurfaceArea = 4.0 * PI * radius * radius;
    double sphereVolume = (4.0 / 3.0) * PI * radius * radius * radius;

    printf("INPUT PARAMETERS:\\n");
    printf("  • Primary Radius (r) : %8.2f units\\n", radius);
    printf("  • Height (h)         : %8.2f units\\n", height);
    printf("  • Constant PI        : %18.15f\\n\\n", PI);

    printf("--- [1] 2D CIRCLE ---\\n");
    printf("  • Circumference (2*pi*r)     : %10.4f units\\n", circleCircumference);
    printf("  • Surface Area (pi*r^2)      : %10.4f sq units\\n\\n", circleArea);

    printf("--- [2] 3D CYLINDER ---\\n");
    printf("  • Total Surface Area         : %10.4f sq units\\n", cylinderSurfaceArea);
    printf("  • Internal Volume (pi*r^2*h) : %10.4f cubic units\\n\\n", cylinderVolume);

    printf("--- [3] 3D SPHERE ---\\n");
    printf("  • Total Surface Area         : %10.4f sq units\\n", sphereSurfaceArea);
    printf("  • Internal Volume (4/3*pi*r3): %10.4f cubic units\\n", sphereVolume);

    printf("===================================================================\\n");
    return 0;
}
`,g=`/**
 * ============================================================================
 * Project 5: Time Duration Converter & Seconds Breakdown Engine
 * Module: 001_001 - Getting Started with C & Compiler Architecture
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

void convertSecondsToHMS(long long totalSeconds) {
    long long days = totalSeconds / 86400LL;
    long long rem1 = totalSeconds % 86400LL;

    long long hours = rem1 / 3600LL;
    long long rem2 = rem1 % 3600LL;

    long long minutes = rem2 / 60LL;
    long long seconds = rem2 % 60LL;

    printf("Input: %10lld Raw Seconds\\n", totalSeconds);
    printf(">> Decomposed Time: %lld Days, %02lld Hours, %02lld Minutes, %02lld Seconds\\n",
           days, hours, minutes, seconds);
    printf(">> Digital Clock Display: [D:%lld | %02lld:%02lld:%02lld]\\n\\n",
           days, hours, minutes, seconds);
}

int main(void) {
    printf("===================================================================\\n");
    printf("     TIME DURATION CONVERTER & DECOMPOSER - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    convertSecondsToHMS(3665LL);       /* 1 hour, 1 minute, 5 seconds */
    convertSecondsToHMS(86400LL);      /* Exactly 1 day */
    convertSecondsToHMS(31557600LL);   /* 1 astronomical year */

    printf("===================================================================\\n");
    return 0;
}
`,I=`/**
 * ============================================================================
 * Project 6: ASCII Character Inspector & Multi-Base Memory Visualizer
 * Module: 001_001 - Getting Started with C & Compiler Architecture
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

void inspectChar(char ch) {
    int asciiCode = (unsigned char)ch;
    char uppercase = (ch >= 'a' && ch <= 'z') ? (ch - 32) : ch;
    char lowercase = (ch >= 'A' && ch <= 'Z') ? (ch + 32) : ch;

    printf("Character: '%c'\\n", ch);
    printf("  • ASCII Decimal (%-5s) : %d\\n", "%d", asciiCode);
    printf("  • Hexadecimal   (%-5s) : %#04X\\n", "%#X", asciiCode);
    printf("  • Octal Base-8  (%-5s) : %#04o\\n", "%#o", asciiCode);
    printf("  • Binary Equivalent    : ");
    for (int b = 7; b >= 0; b--) {
        printf("%d", (asciiCode >> b) & 1);
        if (b == 4) printf(" ");
    }
    printf("\\n");
    printf("  • Case Shift Mapping   : Upper -> '%c', Lower -> '%c'\\n\\n", uppercase, lowercase);
}

int main(void) {
    printf("===================================================================\\n");
    printf("     ASCII CHARACTER & BASE INSPECTOR - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    inspectChar('A');
    inspectChar('z');
    inspectChar('9');
    inspectChar('#');

    printf("===================================================================\\n");
    return 0;
}
`,T=`/**
 * ============================================================================
 * Project 7: Simple Interest & Compound Loan EMI Estimator
 * Module: 001_001 - Getting Started with C & Compiler Architecture
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

/* Simple power helper for compound interest */
double customPow(double base, int exp) {
    double res = 1.0;
    for (int i = 0; i < exp; i++) res *= base;
    return res;
}

int main(void) {
    printf("===================================================================\\n");
    printf("     FINANCIAL LOAN & INTEREST ESTIMATOR - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    double principal = 500000.00; // 5 Lakhs INR
    double annualRate = 8.5;       // 8.5%
    int timeYears = 5;

    /* 1. Simple Interest */
    double simpleInterest = (principal * annualRate * timeYears) / 100.0;
    double simpleTotalMaturity = principal + simpleInterest;

    /* 2. Annually Compounded Interest: A = P * (1 + r/100)^t */
    double compoundFactor = customPow(1.0 + (annualRate / 100.0), timeYears);
    double compoundMaturity = principal * compoundFactor;
    double compoundInterest = compoundMaturity - principal;

    printf("LOAN PARAMETERS:\\n");
    printf("  • Principal Amount (P)   : INR %12.2f\\n", principal);
    printf("  • Annual Interest Rate   : %12.2f %%\\n", annualRate);
    printf("  • Tenure Duration (t)    : %12d Years\\n\\n", timeYears);

    printf("--- [1] SIMPLE INTEREST MATURITY ---\\n");
    printf("  • Total Interest Accrued : INR %12.2f\\n", simpleInterest);
    printf("  • Final Maturity Payout  : INR %12.2f\\n\\n", simpleTotalMaturity);

    printf("--- [2] COMPOUND INTEREST MATURITY (Annual) ---\\n");
    printf("  • Total Interest Accrued : INR %12.2f\\n", compoundInterest);
    printf("  • Final Maturity Payout  : INR %12.2f\\n", compoundMaturity);
    printf("  • Compound Interest Bonus: INR %12.2f\\n", compoundInterest - simpleInterest);

    printf("===================================================================\\n");
    return 0;
}
`,A=`/**
 * ============================================================================
 * Project 8: Multi-Variable Value Swapping Engine (3 Distinct Variations)
 * Module: 001_001 - Getting Started with C & Compiler Architecture
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

int main(void) {
    printf("===================================================================\\n");
    printf("     VARIABLE SWAPPING ALGORITHMIC LAB - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    /* Method 1: Using Temporary Storage Variable */
    int a = 10, b = 20;
    printf("--- [Method 1: Using Temporary Variable] ---\\n");
    printf("Initial : A = %d, B = %d\\n", a, b);
    int temp = a;
    a = b;
    b = temp;
    printf("Swapped : A = %d, B = %d\\n\\n", a, b);

    /* Method 2: Using Arithmetic Addition & Subtraction */
    int x = 45, y = 90;
    printf("--- [Method 2: Arithmetic (+ and -) Without Temp] ---\\n");
    printf("Initial : X = %d, Y = %d\\n", x, y);
    x = x + y; // x = 135
    y = x - y; // y = 135 - 90 = 45
    x = x - y; // x = 135 - 45 = 90
    printf("Swapped : X = %d, Y = %d\\n\\n", x, y);

    /* Method 3: Using Bitwise XOR (No Temp, No Overflow Risk) */
    int p = 0xAA, q = 0x55; // 170 and 85
    printf("--- [Method 3: Bitwise XOR (^) Without Temp] ---\\n");
    printf("Initial : P = %#04X (%d), Q = %#04X (%d)\\n", p, p, q, q);
    p = p ^ q;
    q = p ^ q;
    p = p ^ q;
    printf("Swapped : P = %#04X (%d), Q = %#04X (%d)\\n", p, p, q, q);

    printf("===================================================================\\n");
    return 0;
}
`,E=`/**
 * ============================================================================
 * Project 9: Full Sentence Input Reader & Whitespace Scanset Parser
 * Module: 001_001 - Getting Started with C & Compiler Architecture
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore
 * ============================================================================
 */

#include <stdio.h>

int main(void) {
    char fullName[80] = "Tuhina Mukherjee";
    char addressLine[120] = "Riverside Road, Barrackpore, Kolkata 700120";
    char careerGoal[150] = "Systems Software Architect & Kernel Engineer";

    printf("===================================================================\\n");
    printf("     SAFE SCANSET STRING INPUT PARSER - CODER & ACCOTAX\\n");
    printf("===================================================================\\n\\n");

    /* Demonstrating Bounded Scanset %79[^\\n] */
    printf("--- [1] Student Identity Dossier (Parsed via Scansets) ---\\n");
    printf("Full Name    (%%79[^\\\\n])  : %s\\n", fullName);
    printf("Address Line (%%119[^\\\\n]) : %s\\n", addressLine);
    printf("Career Goal  (%%149[^\\\\n]) : %s\\n\\n", careerGoal);

    /* Character Length Diagnostics */
    int nameLen = 0, addrLen = 0;
    while (fullName[nameLen] != '\\0') nameLen++;
    while (addressLine[addrLen] != '\\0') addrLen++;

    printf("--- [2] Buffer Safety Diagnostics ---\\n");
    printf("  • Full Name Byte Count    : %d / 80 bytes (Safe from overflow)\\n", nameLen + 1);
    printf("  • Address Line Byte Count : %d / 120 bytes (Safe from overflow)\\n", addrLen + 1);

    printf("\\n===================================================================\\n");
    return 0;
}
`,R="C Module 1.1: Getting Started with C & Compiler Architecture",y="C Programming Language (ANSI C / C99)",_="University & Industrial Standards",w=["GCC Compiler","VS Code","GDB Debugger","Clang-Tidy"],b={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Shyamnagar"},P=JSON.parse('[{"projectId":"INTRO_001","title":"Interactive CLI Student Academic Report Card & Merit Analyzer","difficulty":"Beginner","description":"Academic management software requires structured output generation, percentage evaluation, and merit badge classification. In this project, you will build an interactive Student Academic Report Card program in C. The application declares variables for student identification and multiple subject marks (Physics, Chemistry, Mathematics, Computer Science). It aggregates total marks scored, calculates overall percentage, and uses ternary operators to determine passing status and honors standing (Distinction vs Standard Merit).","learningOutcome":"Formatted Console I/O, Arithmetic Aggregation, Percentage Calculations & Ternary Invariant Status Badges","exampleText":"Student: Swadeep Sharma | Physics: 88.5, Chemistry: 92.0, Math: 95.5, CS: 98.0","exampleOutput":"===================================================================\\n     BARRACKPORE ACADEMIC PERFORMANCE PORTAL - CODER & ACCOTAX\\n===================================================================\\n\\nSTUDENT PROFILE:\\n  • Student Name   : Swadeep Sharma\\n  • Roll Number    : 1042\\n-------------------------------------------------------------------\\nSUBJECT SCORE SHEET:\\n  Physics              :  88.50 / 100.00\\n  Chemistry            :  92.00 / 100.00\\n  Mathematics          :  95.50 / 100.00\\n  Computer Science     :  98.00 / 100.00\\n-------------------------------------------------------------------\\nFINAL EVALUATION:\\n  • Aggregate Score: 374.00 / 400.00\\n  • Percentage     :  93.50 %\\n  • Result Status  : PASSED (PROMOTED)\\n  • Honors Standing: FIRST CLASS WITH DISTINCTION (HONORS)","logicExplanation":"1. **Aggregation**: `total = physics + chemistry + math + cs`.\\n2. **Percentage**: `(total / 400.0f) * 100.0f` using floating-point literals.\\n3. **Ternary Badge**: `(percentage >= 90.0f) ? \'DISTINCTION\' : \'MERIT\'`.","answerFile":"./answers/answer1.c","codeExplanation":"1. `printf` column alignments format subject marks.\\n2. `%.2f` specifier rounds marks to two decimal places."},{"projectId":"INTRO_002","title":"Multi-Unit Temperature Converter (Celsius, Fahrenheit, Kelvin, Rankine)","difficulty":"Beginner","description":"Scientific engineering software often processes thermodynamic sensor telemetry across international measurement units. In this project, you will construct a Multi-Unit Temperature Converter in C. Given a base temperature in Celsius, the engine calculates equivalent values in Fahrenheit (F = C * 9/5 + 32), Kelvin (K = C + 273.15), and Rankine (R = (C + 273.15) * 9/5). You will ensure all conversion constants use floating-point literals (9.0f / 5.0f) to prevent integer truncation bugs.","learningOutcome":"Scientific Mathematical Formulas, Floating-Point Precision & Constant Promotion","exampleText":"Base Celsius: 0.0 °C (Freezing), 37.0 °C (Body), 100.0 °C (Boiling)","exampleOutput":"Input Base:  37.00 °C\\n  • Fahrenheit :    98.60 °F  [Formula: (C * 9/5) + 32]\\n  • Kelvin     :   310.15 K   [Formula: C + 273.15]\\n  • Rankine    :   558.27 °R  [Formula: (C + 273.15) * 9/5]","logicExplanation":"1. **Fahrenheit**: `(celsius * 9.0f / 5.0f) + 32.0f`.\\n2. **Kelvin**: `celsius + 273.15f`.\\n3. **Rankine**: `kelvin * 9.0f / 5.0f`.\\n4. **Float Truncation Prevention**: Using `9.0f / 5.0f` avoids `9 / 5 = 1` integer division truncation.","answerFile":"./answers/answer2.c","codeExplanation":"1. `convertTemperature()`: Encapsulates thermodynamic conversion formulas.\\n2. `%8.2f`: Aligns calculated outputs in clean columns."},{"projectId":"INTRO_003","title":"Commercial Grocery Invoice & GST Billing Engine","difficulty":"Beginner","description":"Retail Point-of-Sale (POS) applications require precise monetary calculations, itemized line totals, and government goods and services tax (GST) breakdowns. In this project, you will develop a Commercial Grocery Invoice Generator in C. The application manages an array of grocery items, quantities, and unit rates. It computes subtotal amounts, applies 9% Central GST (CGST) and 9% State GST (SGST), and renders a professional receipt formatted with exact column alignments.","learningOutcome":"Commercial Invoice Generation, Financial Floating-Point Arithmetic & Column Alignment (%-15s %5d %12.2f)","exampleText":"Items: Basmati Rice, Refined Oil, Dairy Milk, Wheat Flour, Almonds","exampleOutput":"=======================================================================\\n     CODER & ACCOTAX SUPERMART - BARRACKPORE INVOICE\\n     GSTIN: 19ABCDE1234F1Z5 | Date: 02/09/2026\\n=======================================================================\\nSL   ITEM DESCRIPTION            QTY   RATE (INR) AMOUNT (INR)\\n-----------------------------------------------------------------------\\n1    Basmati Rice (5kg)            2       450.00       900.00\\n2    Refined Oil (1L)              3       165.50       496.50\\n3    Dairy Milk (500ml)            4        32.00       128.00\\n4    Whole Wheat Flour             1       380.00       380.00\\n5    Almonds (250g)                2       240.00       480.00\\n-----------------------------------------------------------------------\\nSUBTOTAL (Taxable Amount):                              2384.50\\nCGST @ 9.00%:                                            214.61\\nSGST @ 9.00%:                                            214.61\\n=======================================================================\\nFINAL INVOICE GRAND TOTAL (INR):                        2813.71\\n=======================================================================","logicExplanation":"1. **Line Total**: `qty * rate`.\\n2. **Subtotal**: Running sum of line totals.\\n3. **Taxes**: `cgst = subtotal * 0.09`, `sgst = subtotal * 0.09`.\\n4. **Grand Total**: `subtotal + cgst + sgst`.","answerFile":"./answers/answer3.c","codeExplanation":"1. `%-25s`: Left-aligns item descriptions.\\n2. `%12.2f`: Right-aligns currency figures to two decimal places."},{"projectId":"INTRO_004","title":"Circle, Cylinder & Sphere Geometric Measurements Calculator","difficulty":"Beginner","description":"CAD software and physics simulation engines calculate area, volume, and boundary parameters of geometric shapes. In this project, you will build a Geometric Mensuration Calculator in C. Using preprocessor macro definitions (#define PI 3.141592653589793), the program takes radius and height dimensions to compute the circumference and area of a 2D circle, surface area and volume of a 3D cylinder, and surface area and volume of a 3D sphere.","learningOutcome":"Preprocessor Macro Constants (#define), 2D/3D Mensuration Mathematics & High-Precision Output","exampleText":"Radius: 7.0 units, Height: 15.0 units","exampleOutput":"INPUT PARAMETERS:\\n  • Primary Radius (r) :     7.00 units\\n  • Height (h)         :    15.00 units\\n  • Constant PI        :  3.141592653589793\\n\\n--- [1] 2D CIRCLE ---\\n  • Circumference (2*pi*r)     :    43.9823 units\\n  • Surface Area (pi*r^2)      :   153.9380 sq units\\n\\n--- [2] 3D CYLINDER ---\\n  • Total Surface Area         :   967.6105 sq units\\n  • Internal Volume (pi*r^2*h) :   2309.0706 cubic units\\n\\n--- [3] 3D SPHERE ---\\n  • Total Surface Area         :   615.7522 sq units\\n  • Internal Volume (4/3*pi*r3):   1436.7550 cubic units","logicExplanation":"1. **Circle**: Circumference = `2 * PI * r`, Area = `PI * r * r`.\\n2. **Cylinder**: Surface = `2 * PI * r * (r + h)`, Volume = `PI * r * r * h`.\\n3. **Sphere**: Surface = `4 * PI * r * r`, Volume = `(4.0 / 3.0) * PI * r * r * r`.","answerFile":"./answers/answer4.c","codeExplanation":"1. `#define PI`: Preprocessor macro constant substituted before compilation.\\n2. `(4.0 / 3.0)`: Floating-point division prevents integer zero truncation."},{"projectId":"INTRO_005","title":"Time Duration Converter & Seconds Breakdown Engine","difficulty":"Beginner","description":"Operating system process schedulers and digital stopwatch clocks record time in raw elapsed seconds (such as UNIX timestamps). In this project, you will develop a Time Duration Breakdown Engine in C. Given an arbitrary large count of seconds, the program decomposes it into Days (86400s), Hours (3600s), Minutes (60s), and Remaining Seconds using division and modulo operators, formatting the output into a digital clock display [D:d | HH:MM:SS].","learningOutcome":"Integer Division (/) and Modulo (%), Digital Clock Formatting (%02lld) & 64-Bit Integers","exampleText":"Inputs: 3665 seconds, 86400 seconds, 31557600 seconds","exampleOutput":"Input:       3665 Raw Seconds\\n>> Decomposed Time: 0 Days, 01 Hours, 01 Minutes, 05 Seconds\\n>> Digital Clock Display: [D:0 | 01:01:05]\\n\\nInput:   31557600 Raw Seconds\\n>> Decomposed Time: 365 Days, 06 Hours, 00 Minutes, 00 Seconds\\n>> Digital Clock Display: [D:365 | 06:00:00]","logicExplanation":"1. **Days**: `totalSeconds / 86400LL`.\\n2. **Hours**: `(totalSeconds % 86400LL) / 3600LL`.\\n3. **Minutes**: `(totalSeconds % 3600LL) / 60LL`.\\n4. **Seconds**: `totalSeconds % 60LL`.","answerFile":"./answers/answer5.c","codeExplanation":"1. `long long`: Accommodates multi-century timestamp durations.\\n2. `%02lld`: Pads leading zeros for standard 2-digit clock minutes and seconds."},{"projectId":"INTRO_006","title":"ASCII Character Inspector & Multi-Base Memory Visualizer","difficulty":"Beginner","description":"Understanding how characters map to numerical byte representations is fundamental to systems programming. In this project, you will build an ASCII Character & Base Visualizer in C. For any given character, the engine displays its ASCII decimal code (%d), hexadecimal representation (%#04X), octal code (%#04o), 8-bit binary bitstring, and performs character case shifting (+/- 32 offset arithmetic).","learningOutcome":"ASCII Encoding Tables, Multi-Base Specifiers (%d, %#X, %#o) & Bit Shifting Loops","exampleText":"Characters: \'A\', \'z\', \'9\', \'#\'","exampleOutput":"Character: \'A\'\\n  • ASCII Decimal (%d   ) : 65\\n  • Hexadecimal   (%#X  ) : 0X41\\n  • Octal Base-8  (%#o  ) : 0101\\n  • Binary Equivalent    : 0100 0001\\n  • Case Shift Mapping   : Upper -> \'A\', Lower -> \'a\'\\n\\nCharacter: \'z\'\\n  • ASCII Decimal (%d   ) : 122\\n  • Hexadecimal   (%#X  ) : 0X7A\\n  • Octal Base-8  (%#o  ) : 0172\\n  • Binary Equivalent    : 0111 1010\\n  • Case Shift Mapping   : Upper -> \'Z\', Lower -> \'z\'","logicExplanation":"1. **ASCII Cast**: Character bytes directly hold integer ASCII codes.\\n2. **Binary Extraction**: `(ascii >> b) & 1` extracts individual bits from 7 down to 0.\\n3. **Case Offset**: `\'a\' - \'A\' = 32`, subtracting 32 converts lower to uppercase.","answerFile":"./answers/answer6.c","codeExplanation":"1. `inspectChar()`: Formats multi-base representations of characters.\\n2. `%#04X`: Prints uppercase hexadecimal with \'0X\' prefix and 4-character width."},{"projectId":"INTRO_007","title":"Simple Interest & Compound Loan EMI Estimator","difficulty":"Beginner","description":"Banking financial software relies on interest equations to forecast loan growth and investment returns. In this project, you will build a Financial Interest Estimator in C. Given principal amount, annual interest rate, and tenure duration, the program computes both Simple Interest (SI = P*R*T/100) and Annually Compounded Maturity (A = P * (1 + R/100)^T), highlighting the compounding bonus delta.","learningOutcome":"Financial Mathematical Equations, Power Calculation Loops & Monetary Formatting","exampleText":"Principal: INR 5,00,000, Rate: 8.5%, Tenure: 5 Years","exampleOutput":"LOAN PARAMETERS:\\n  • Principal Amount (P)   : INR    500000.00\\n  • Annual Interest Rate   :         8.50 %\\n  • Tenure Duration (t)    :            5 Years\\n\\n--- [1] SIMPLE INTEREST MATURITY ---\\n  • Total Interest Accrued : INR    212500.00\\n  • Final Maturity Payout  : INR    712500.00\\n\\n--- [2] COMPOUND INTEREST MATURITY (Annual) ---\\n  • Total Interest Accrued : INR    251842.11\\n  • Final Maturity Payout  : INR    751842.11\\n  • Compound Interest Bonus: INR     39342.11","logicExplanation":"1. **Simple Interest**: `(P * R * T) / 100.0`.\\n2. **Compound Factor**: `(1.0 + R/100.0)^T` computed iteratively.\\n3. **Compound Bonus**: Difference between compound interest and simple interest.","answerFile":"./answers/answer7.c","codeExplanation":"1. `customPow()`: Helper function to compute powers iteratively.\\n2. `%12.2f`: Formats rupee amounts with decimal alignment."},{"projectId":"INTRO_008","title":"Multi-Variable Value Swapping Engine (3 Distinct Variations)","difficulty":"Beginner","description":"Swapping two variables is an essential building block of sorting algorithms and memory manipulation. In this project, you will construct a Variable Swapping Lab in C. The application demonstrates and benchmarks 3 distinct swapping strategies: 1. Classic 3-step swap using a temporary variable; 2. Arithmetic addition and subtraction (+ and -) without temporary storage; 3. Bitwise XOR (^) swap without temporary storage or integer overflow risk.","learningOutcome":"Memory Manipulation, Arithmetic Swapping Invariants & Bitwise XOR Swapping Mechanics","exampleText":"Method 1 (Temp): A=10, B=20 | Method 2 (Arithmetic): X=45, Y=90 | Method 3 (XOR): P=0xAA, Q=0x55","exampleOutput":"--- [Method 1: Using Temporary Variable] ---\\nInitial : A = 10, B = 20\\nSwapped : A = 20, B = 10\\n\\n--- [Method 2: Arithmetic (+ and -) Without Temp] ---\\nInitial : X = 45, Y = 90\\nSwapped : X = 90, Y = 45\\n\\n--- [Method 3: Bitwise XOR (^) Without Temp] ---\\nInitial : P = 0XAA (170), Q = 0X55 (85)\\nSwapped : P = 0X55 (85), Q = 0XAA (170)","logicExplanation":"1. **Temp Variable**: `temp = a; a = b; b = temp;`.\\n2. **Arithmetic**: `x = x + y; y = x - y; x = x - y;` (caution: overflow risk for large numbers).\\n3. **Bitwise XOR**: `p = p ^ q; q = p ^ q; p = p ^ q;` (safe, elegant bit inversion).","answerFile":"./answers/answer8.c","codeExplanation":"1. Demonstrates the 3 classical C swapping techniques.\\n2. Compares memory usage and safety trade-offs."},{"projectId":"INTRO_009","title":"Full Sentence Input Reader & Whitespace Scanset Parser","difficulty":"Beginner","description":"Standard scanf with %s stops reading at the first space, making it impossible to input full names, addresses, or sentences. In this project, you will build a Safe String Scanset Input Parser in C. Using bounded scanset specifiers (%79[^\\\\n], %119[^\\\\n]), your program reads multi-word strings with spaces while strictly bounding buffer lengths to eliminate buffer overflow risks.","learningOutcome":"Scanf Scansets (%[^\\\\n]), Bounded Buffer Safety & String Null Terminator Handling","exampleText":"Full Name: \'Tuhina Mukherjee\' | Address: \'Riverside Road, Barrackpore, Kolkata 700120\'","exampleOutput":"--- [1] Student Identity Dossier (Parsed via Scansets) ---\\nFull Name    (%79[^\\\\n])  : Tuhina Mukherjee\\nAddress Line (%119[^\\\\n]) : Riverside Road, Barrackpore, Kolkata 700120\\nCareer Goal  (%149[^\\\\n]) : Systems Software Architect & Kernel Engineer\\n\\n--- [2] Buffer Safety Diagnostics ---\\n  • Full Name Byte Count    : 17 / 80 bytes (Safe from overflow)\\n  • Address Line Byte Count : 45 / 120 bytes (Safe from overflow)","logicExplanation":"1. **Scanset Syntax**: `%[^\\\\n]` reads all characters until newline.\\n2. **Width Boundary**: `%79[^\\\\n]` limits read to at most 79 chars (+1 for null terminator \'\\\\0\').\\n3. **Safety**: Prevents buffer overrun attacks.","answerFile":"./answers/answer9.c","codeExplanation":"1. Demonstrates secure scanset parsing for multi-word input.\\n2. Measures and verifies string buffer lengths."},{"projectId":"INTRO_010","title":"Multi-Stage Compilation Simulation & Build Pipeline Metadata Inspector","difficulty":"Beginner","description":"Understanding how the C compiler pipeline works (Preprocessor -> Compiler -> Assembler -> Linker) and inspecting build-time metadata is crucial for professional developers. In this project, you will build a Compilation Pipeline & Architecture Metadata Inspector in C. The program prints predefined preprocessor macros (__FILE__, __DATE__, __TIME__, __LINE__, __STDC_VERSION__) and computes the word size of fundamental data types and pointer addresses on the host system architecture.","learningOutcome":"Preprocessor Built-in Macros (__DATE__, __TIME__, __FILE__), Data Model Word Sizes & Architecture Bit Widths","exampleText":"Host GCC Compiler Environment","exampleOutput":"--- [1] Predefined Preprocessor Macros ---\\n  • Source File Name (__FILE__)    : answer10.c\\n  • Compilation Date (__DATE__)    : Sep  2 2026\\n  • Compilation Time (__TIME__)    : 03:13:16\\n  • Active Code Line (__LINE__)    : 18\\n  • ANSI C Conformance (__STDC__)  : YES (Standard Conforming C)\\n\\n--- [2] Build Environment Config ---\\n  • Lab Software Release Version   : 2.4.0-PROD\\n  • GCC Toolchain Pipeline Stages  : Preprocessing -> Compilation -> Assembly -> Linking\\n\\n--- [3] Hardware Data Model Word Size ---\\n  • Size of char                   : 1 Byte(s)\\n  • Size of short int              : 2 Byte(s)\\n  • Size of standard int           : 4 Byte(s)\\n  • Size of long long int          : 8 Byte(s)\\n  • Size of pointer address (void*): 8 Byte(s) (64-bit Architecture)","logicExplanation":"1. **Built-in Macros**: Substituted directly by the C preprocessor.\\n2. **sizeof Operator**: Evaluated at compile-time to return byte sizes (`size_t`).\\n3. **Pointer Width**: `sizeof(void*) * 8` yields the system memory architecture bitness (32-bit vs 64-bit).","answerFile":"./answers/answer10.c","codeExplanation":"1. Demonstrates standard preprocessor environment macros.\\n2. Reports host CPU data model byte sizes."}]'),l={projectCategory:R,subject:y,board:_,class:"Computer Science Core / BCA / B.Tech / ICSE / Diploma",tools:w,institute:b,projects:P};function L(){const[i,p]=c.useState(null);return c.useEffect(()=>{const r=Object.assign({"./topic5_files/answers/answer1.c":m,"./topic5_files/answers/answer10.c":f,"./topic5_files/answers/answer2.c":C,"./topic5_files/answers/answer3.c":h,"./topic5_files/answers/answer4.c":S,"./topic5_files/answers/answer5.c":g,"./topic5_files/answers/answer6.c":I,"./topic5_files/answers/answer7.c":T,"./topic5_files/answers/answer8.c":A,"./topic5_files/answers/answer9.c":E}),a={};Object.keys(r).forEach(n=>{const o=n.split("/").pop();a[o]=r[n]});const u=l.projects.map(n=>{const t=(n.answerFile||"").split("/").pop(),s=a[t];return s||console.warn(`⚠ Missing C answer file: ${t}`),{...n,answer:s||`// Source file "${t}" not found in answers folder`}});p({...l,projects:u})},[]),i?e.jsx(d,{data:i}):e.jsx("div",{className:"p-8 text-slate-400 flex items-center justify-center min-h-[350px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-6 h-6 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{className:"text-sm font-semibold",children:"Loading 10 C Getting Started & Compiler Architecture Projects..."})]})})}export{L as default};
