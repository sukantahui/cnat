import{b,j as e}from"./vendor-react-core-C47mfheO.js";import{C as A}from"./CFileLoader-BZuhm7jn.js";import{P as R}from"./PlainTextPrint-COK-Ppq5.js";import{T as E}from"./TeacherSukantaHui-3YGS5w6g.js";import{C as T}from"./CodeBlock-Cj4eeQCj.js";import{a9 as S,aY as r,k as h,l as N,p as _,_ as l,v as C}from"./vendor-icons-C5r6Bfkl.js";import"./EditableCCodeBlock-DPqylqAZ.js";import"./vendor-monaco-Bq9GhMe9.js";import"./vendor-prism-BKuZ5wk-.js";const o=(n="")=>n.split(`
`).length>1||n.includes("#include")||n.includes("int main")||n.includes("printf(")||n.includes("scanf(")||n.includes("for(")||n.includes("while(")||n.includes("if(")||n.includes("int ")||n.includes("char ")||n.includes("float ");function y({data:n}){const[i,d]=b.useState({});if(!n||!n.projects)return null;const{projectCategory:c,subject:u,board:m,class:p,tools:x,institute:a,projects:g}=n,f=t=>{d(s=>({...s,[t]:!s[t]}))};return e.jsxs("div",{className:"space-y-12",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsxs("h2",{className:"flex items-center gap-2 text-2xl font-semibold text-indigo-300",children:[e.jsx(S,{size:22}),c]}),e.jsxs("p",{className:"text-slate-400 text-sm max-w-5xl",children:[e.jsx("b",{children:"Subject:"})," ",u,"  | ",e.jsx("b",{children:"Board:"})," ",m,"  | ",e.jsx("b",{children:"Class:"})," ",p,"  | ",e.jsx("b",{children:"Tools:"})," ",x.join(", ")]}),e.jsxs("p",{className:"text-slate-500 text-xs",children:["Prepared by ",e.jsx("b",{children:a.author}),", ",a.name," (",a.location,")"]})]}),e.jsx("div",{className:"space-y-6",children:g.map(t=>{const s=i[t.projectId];return e.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/60 p-6 shadow-lg",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-300 font-semibold text-sm border border-indigo-500/30",children:t.projectId}),e.jsxs("h3",{className:"text-lg font-semibold text-sky-300 flex items-center gap-2",children:[e.jsx(r,{size:18}),t.title]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:`rounded-full px-3 py-1 text-xs font-medium
                      ${t.difficulty==="Beginner"?"bg-emerald-900/40 text-emerald-300":t.difficulty==="Intermediate"?"bg-amber-900/40 text-amber-300":"bg-rose-900/40 text-rose-300"}
                    `,children:t.difficulty}),e.jsx("button",{onClick:()=>f(t.projectId),className:"flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors",children:s?e.jsxs(e.Fragment,{children:[e.jsx(h,{size:14})," Hide Answer"]}):e.jsxs(e.Fragment,{children:[e.jsx(N,{size:14})," Show Answer"]})})]})]}),e.jsx("p",{className:"mt-3 text-slate-300 text-sm leading-relaxed max-w-5xl",children:t.description}),t.exampleText&&e.jsxs("div",{className:"mt-4 flex items-center gap-2 text-sm text-slate-300",children:[e.jsx(_,{size:16,className:"text-indigo-300"}),e.jsxs("span",{children:[e.jsx("b",{children:"Example:"})," ",t.exampleText]})]}),t.exampleOutput&&e.jsxs("div",{className:"mt-3 rounded-xl border border-slate-700 bg-slate-800/40 p-4",children:[e.jsx("div",{className:"text-xs text-slate-400 mb-2",children:"Example Output"}),e.jsx("pre",{className:"text-slate-200 text-sm font-mono leading-snug whitespace-pre",children:t.exampleOutput})]}),t.logicExplanation&&e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-300 mb-1",children:[e.jsx(l,{size:16,className:"text-yellow-300"}),e.jsx("span",{className:"font-semibold",children:"Logic Explanation"})]}),e.jsx("p",{className:"text-slate-400 text-sm leading-relaxed whitespace-pre-wrap bg-slate-800/40 p-3 rounded border border-slate-700",children:t.logicExplanation})]}),s&&e.jsxs("div",{className:"mt-5 border border-slate-700 rounded-xl bg-[#0f172a] overflow-hidden",children:[e.jsx("div",{className:"flex items-center gap-2 px-4 py-2 border-b border-slate-700 text-slate-300 text-sm",children:o(t.answer)?e.jsxs(e.Fragment,{children:[e.jsx(C,{size:16,className:"text-indigo-300"}),"Coder & AccoTax"]}):e.jsxs(e.Fragment,{children:[e.jsx(l,{size:16,className:"text-yellow-300"}),"Explanation / Logic"]})}),e.jsx("div",{className:"p-4",children:o(t.answer)?e.jsx(T,{initialCode:t.answer,language:"C Language",fileName:t.projectId+".c"}):e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed whitespace-pre-wrap",children:t.answer})}),t.codeExplanation&&e.jsxs("div",{className:"px-4 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-300 mb-1",children:[e.jsx(r,{size:16,className:"text-indigo-300"}),e.jsx("span",{className:"font-semibold",children:"Code Explanation"})]}),e.jsx("p",{className:"text-slate-400 text-sm leading-relaxed whitespace-pre-wrap bg-slate-800/40 p-3 rounded border border-slate-700",children:t.codeExplanation})]})]})]},t.projectId)})}),e.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm text-emerald-300",children:["👩‍🏫 ",e.jsx("b",{children:"Teacher Note:"}),e.jsx("br",{}),"Students should convert logic answers into complete C programs by adding necessary ",e.jsx("code",{children:"#include"})," directives, a ",e.jsx("code",{children:"main()"})," function, and appropriate input/output statements (e.g., ",e.jsx("code",{children:"printf"}),", ",e.jsx("code",{children:"scanf"}),"). The editable editor above allows experimentation."]})]})}const F=`/**
 * ============================================================================
 * Program: Module2ProjectsDemo.c
 * Module: 001_002 - C Tokens, Data Types & Operator Mechanics
 * Topic 6: Hands-on Projects & Lab Solutions
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)
 * Standard: ANSI C / C99
 * ============================================================================
 */

#include <stdio.h>
#include <stdint.h>
#include <stdbool.h>

/* ============================================================================
 * PROJECT 1: Bitwise Hardware Status Register & Flags Inspector
 * Demonstrates bitwise masks, shifts, bit setting, clearing, and testing
 * ============================================================================ */
#define FLAG_POWER_ON     (1 << 0)  /* Bit 0: 0000 0001 */
#define FLAG_SENSOR_READY (1 << 1)  /* Bit 1: 0000 0010 */
#define FLAG_TX_ACTIVE    (1 << 2)  /* Bit 2: 0000 0100 */
#define FLAG_RX_BUFFER    (1 << 3)  /* Bit 3: 0000 1000 */
#define FLAG_ERROR_ALERT  (1 << 4)  /* Bit 4: 0001 0000 */

void runProject1_BitwiseRegister(void) {
    uint8_t statusRegister = 0x00;

    printf("\\n=== PROJECT 1: BITWISE STATUS REGISTER & FLAGS INSPECTOR ===\\n");
    printf("Initial Register State: 0x%02X\\n", statusRegister);

    /* 1. Turn ON Power and Sensor Ready */
    statusRegister |= (FLAG_POWER_ON | FLAG_SENSOR_READY);
    printf("After Power & Sensor Init : 0x%02X\\n", statusRegister);

    /* 2. Turn ON Transmit Active */
    statusRegister |= FLAG_TX_ACTIVE;
    printf("After Transmit Activated  : 0x%02X\\n", statusRegister);

    /* 3. Check individual flag status */
    printf("Is Sensor Ready?          : %s\\n", (statusRegister & FLAG_SENSOR_READY) ? "YES" : "NO");
    printf("Is Error Alert Active?    : %s\\n", (statusRegister & FLAG_ERROR_ALERT) ? "YES" : "NO");

    /* 4. Simulate Error Alert and Clear Transmit */
    statusRegister |= FLAG_ERROR_ALERT;
    statusRegister &= ~FLAG_TX_ACTIVE;
    printf("After Error Triggered     : 0x%02X (TX Cleared, Error Set)\\n", statusRegister);

    /* 5. Toggle RX Buffer status */
    statusRegister ^= FLAG_RX_BUFFER;
    printf("After Toggling RX Buffer  : 0x%02X\\n", statusRegister);
}

/* ============================================================================
 * PROJECT 2: Payroll Tax, Allowance & Net Salary Calculator
 * Demonstrates exact arithmetic conversions, precision limits & formatting
 * ============================================================================ */
void runProject2_PayrollCalculator(void) {
    const float HRA_PERCENT = 20.0f;
    const float DA_PERCENT = 15.0f;
    const float PF_DEDUCTION_PERCENT = 12.0f;
    const float PROFESSIONAL_TAX = 200.0f;

    double basicSalary = 45000.0;
    
    double hraAmount = (basicSalary * HRA_PERCENT) / 100.0;
    double daAmount = (basicSalary * DA_PERCENT) / 100.0;
    double grossSalary = basicSalary + hraAmount + daAmount;
    
    double pfAmount = (basicSalary * PF_DEDUCTION_PERCENT) / 100.0;
    double totalDeductions = pfAmount + PROFESSIONAL_TAX;
    double netSalary = grossSalary - totalDeductions;

    printf("\\n=== PROJECT 2: PAYROLL TAX & ALLOWANCE CALCULATOR ===\\n");
    printf("----------------------------------------------------\\n");
    printf("Basic Salary         : INR %.2f\\n", basicSalary);
    printf("HRA (%.0f%%)          : INR %.2f\\n", HRA_PERCENT, hraAmount);
    printf("DA  (%.0f%%)          : INR %.2f\\n", DA_PERCENT, daAmount);
    printf("----------------------------------------------------\\n");
    printf("Gross Salary         : INR %.2f\\n", grossSalary);
    printf("----------------------------------------------------\\n");
    printf("PF Deduction (%.0f%%) : INR %.2f\\n", PF_DEDUCTION_PERCENT, pfAmount);
    printf("Professional Tax     : INR %.2f\\n", PROFESSIONAL_TAX);
    printf("Total Deductions     : INR %.2f\\n", totalDeductions);
    printf("====================================================\\n");
    printf("NET TAKE-HOME SALARY : INR %.2f\\n", netSalary);
    printf("====================================================\\n");
}

int main(void) {
    printf("===================================================================\\n");
    printf("     MODULE 001_002 CAPSTONE PROJECTS - CODER & ACCOTAX\\n");
    printf("     Educator: Sukanta Hui | Barrackpore Systems Engineering Lab\\n");
    printf("===================================================================\\n");

    runProject1_BitwiseRegister();
    runProject2_PayrollCalculator();

    return 0;
}
`,P=`================================================================================
CODER & ACCOTAX - C LANGUAGE STUDY NOTE
Module 001_002: C Tokens, Data Types & Operator Mechanics
Topic 6: Hands-on Projects & Lab Solutions
Educator: Sukanta Hui | Location: Barrackpore, West Bengal
================================================================================

1. SUMMARY OF MODULE 001_002 PROJECTS:
--------------------------------------------------------------------------------
PROJECT 1: Bitwise Hardware Status Register & Flags Inspector
- Domain: Embedded Systems / IoT Sensor Device Drivers
- Core Tools: uint8_t, bitwise masks (1 << n), & (check), | (set), ~ (clear), ^ (toggle).
- Key Insight: Up to 8 discrete boolean sensor flags packed into a single 1-byte register.

PROJECT 2: Payroll Tax, Allowance & Net Salary Calculator
- Domain: Enterprise Financial / Accounting Engines
- Core Tools: double precision types, percentage formulas, format specifiers (%10.2f).
- Key Insight: Eliminates integer division truncation through explicit floating literals.

PROJECT 3: Exact-Width Sensor Telemetry Packer & Unpacker
- Domain: Network Protocol Packet Serialization
- Core Tools: <stdint.h>, bit shifts (<< 16, >> 16), 0xFFFF masking.

2. BITWISE MANIPULATION CHEAT SHEET:
--------------------------------------------------------------------------------
- Set Flag       : status |= FLAG_MASK;
- Clear Flag     : status &= ~FLAG_MASK;
- Toggle Flag    : status ^= FLAG_MASK;
- Check Flag     : if ((status & FLAG_MASK) != 0) { /* Active */ }
- Multi-Flag Set : status |= (FLAG_A | FLAG_B);
- Multi-Flag Clr : status &= ~(FLAG_A | FLAG_B);

3. FINANCIAL ACCURACY RULES:
--------------------------------------------------------------------------------
- Always write percentage divisors as 100.0 or 100.0f.
- Use 'double' for intermediate accumulation to prevent rounding drift.
- Format console tables using width and precision: %-20s %12.2f

4. TEACHER'S LAB SIGN-OFF FROM SUKANTA HUI:
--------------------------------------------------------------------------------
"Congratulations on mastering C Tokens, Data Types, and Operators!
You are now fully equipped with hardware-level bit manipulation skills and precision
data modeling required for advanced control flow and systems engineering."
================================================================================
`,j={projectCategory:"Module 001_002 · Hands-on C Projects & Lab Solutions",subject:"C Programming",board:"WBCHSE / ICSE / BCA / B.Tech Systems Lab",class:"Undergraduate / Systems Programming",tools:["GCC Compiler","GDB","VS Code"],institute:{name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},projects:[{projectId:"P2.1",title:"Bitwise Hardware Status Register & Flags Inspector",difficulty:"Intermediate",description:"Design an embedded firmware status register module using an 8-bit unsigned integer (`uint8_t`). Implement bitmask constants for POWER_ON (bit 0), SENSOR_READY (bit 1), TX_ACTIVE (bit 2), RX_BUFFER (bit 3), and ERROR_ALERT (bit 4). Provide routines to set, clear, test, and toggle individual flags without altering adjacent bits.",exampleText:"Initial State: 0x00 -> Turn ON Power & Sensor -> Activate TX -> Trigger Error & Clear TX",exampleOutput:`=== PROJECT 1: BITWISE STATUS REGISTER & FLAGS INSPECTOR ===
Initial Register State: 0x00
After Power & Sensor Init : 0x03
After Transmit Activated  : 0x07
Is Sensor Ready?          : YES
Is Error Alert Active?    : NO
After Error Triggered     : 0x13 (TX Cleared, Error Set)
After Toggling RX Buffer  : 0x1B`,logicExplanation:`1. Define flag bitmasks using bit shifts: (1 << 0), (1 << 1), etc.
2. Set flags using bitwise OR: status |= (FLAG_POWER | FLAG_SENSOR);
3. Test flags using bitwise AND: if (status & FLAG_SENSOR) ...
4. Clear flags using bitwise AND with inverted mask: status &= ~FLAG_TX;
5. Toggle flags using bitwise XOR: status ^= FLAG_RX;`,answer:`#include <stdio.h>
#include <stdint.h>

#define FLAG_POWER_ON     (1 << 0)
#define FLAG_SENSOR_READY (1 << 1)
#define FLAG_TX_ACTIVE    (1 << 2)
#define FLAG_RX_BUFFER    (1 << 3)
#define FLAG_ERROR_ALERT  (1 << 4)

int main(void) {
    uint8_t statusRegister = 0x00;

    /* Set Power and Sensor */
    statusRegister |= (FLAG_POWER_ON | FLAG_SENSOR_READY);

    /* Set TX Active */
    statusRegister |= FLAG_TX_ACTIVE;

    /* Check Sensor */
    if (statusRegister & FLAG_SENSOR_READY) {
        printf("Sensor is online.\\n");
    }

    /* Error occurred: Clear TX and Set Error */
    statusRegister &= ~FLAG_TX_ACTIVE;
    statusRegister |= FLAG_ERROR_ALERT;

    /* Toggle RX buffer */
    statusRegister ^= FLAG_RX_BUFFER;

    printf("Final Status Register: 0x%02X\\n", statusRegister);
    return 0;
}`,codeExplanation:"Demonstrates silicon-efficient hardware register manipulation using bitwise masks and bit shifts without consuming multi-byte boolean variables."},{projectId:"P2.2",title:"Payroll Tax, Allowance & Net Take-Home Calculator",difficulty:"Beginner",description:"Create an enterprise financial payroll calculator in C that accepts employee basic salary, computes House Rent Allowance (HRA 20%), Dearness Allowance (DA 15%), Provident Fund (PF 12%), and Professional Tax (INR 200). Ensure double precision floating arithmetic to avoid decimal truncation errors.",exampleText:"Basic Salary: INR 45,000.00",exampleOutput:`=== PROJECT 2: PAYROLL TAX & ALLOWANCE CALCULATOR ===
----------------------------------------------------
Basic Salary         : INR 45000.00
HRA (20%)            : INR 9000.00
DA  (15%)            : INR 6750.00
----------------------------------------------------
Gross Salary         : INR 60750.00
----------------------------------------------------
PF Deduction (12%)   : INR 5400.00
Professional Tax     : INR 200.00
Total Deductions     : INR 5600.00
====================================================
NET TAKE-HOME SALARY : INR 55150.00
====================================================`,logicExplanation:`1. Declare constants: HRA_PERCENT = 20.0, DA_PERCENT = 15.0, PF_PERCENT = 12.0, PTAX = 200.0.
2. Prompt user for double basicSalary.
3. Compute hra = (basicSalary * HRA_PERCENT) / 100.0 and da = (basicSalary * DA_PERCENT) / 100.0.
4. Compute grossSalary = basicSalary + hra + da.
5. Compute pf = (basicSalary * PF_PERCENT) / 100.0 and totalDeductions = pf + PTAX.
6. Compute netSalary = grossSalary - totalDeductions.
7. Format tabular output using %-20s and %10.2f.`,answer:`#include <stdio.h>

int main(void) {
    const double HRA_RATE = 20.0;
    const double DA_RATE = 15.0;
    const double PF_RATE = 12.0;
    const double PTAX = 200.0;

    double basicSalary;
    printf("Enter Employee Basic Salary (INR): ");
    if (scanf("%lf", &basicSalary) != 1 || basicSalary <= 0.0) {
        printf("Invalid salary input.\\n");
        return 1;
    }

    double hra = (basicSalary * HRA_RATE) / 100.0;
    double da = (basicSalary * DA_RATE) / 100.0;
    double gross = basicSalary + hra + da;

    double pf = (basicSalary * PF_RATE) / 100.0;
    double deductions = pf + PTAX;
    double net = gross - deductions;

    printf("\\n--- Payroll Summary ---\\n");
    printf("Gross Salary : INR %.2f\\n", gross);
    printf("Deductions   : INR %.2f\\n", deductions);
    printf("Net Salary   : INR %.2f\\n", net);

    return 0;
}`,codeExplanation:"Demonstrates high-precision monetary calculations using double types, floating point literals, scanf validation, and format specifiers."},{projectId:"P2.3",title:"Exact-Width Sensor Telemetry Packet Serializer",difficulty:"Intermediate",description:"Build a low-level IoT telemetry packet serializer that packs an 8-bit sensor ID (uint8_t), an 8-bit battery level (uint8_t), and a 16-bit temperature reading in centi-degrees (int16_t) into a single 32-bit unsigned integer (`uint32_t`). Provide an unpacker routine to reconstruct the original telemetry values.",exampleText:"Sensor ID: 42, Battery: 95%, Temp: 2850 (28.50 °C)",exampleOutput:`Packed 32-bit Telemetry Word: 0x2A5F0B22
Unpacked Sensor ID: 42
Unpacked Battery  : 95%
Unpacked Temp     : 28.50 °C`,logicExplanation:`1. Pack: ((uint32_t)sensorId << 24) | ((uint32_t)battery << 16) | ((uint16_t)temp & 0xFFFF)
2. Unpack sensorId: (packed >> 24) & 0xFF
3. Unpack battery: (packed >> 16) & 0xFF
4. Unpack temp: (int16_t)(packed & 0xFFFF)`,answer:`#include <stdio.h>
#include <stdint.h>

int main(void) {
    uint8_t sensorId = 42;
    uint8_t battery = 95;
    int16_t tempCentiDeg = 2850; /* 28.50 °C */

    /* Pack into 32-bit unsigned int */
    uint32_t packet = ((uint32_t)sensorId << 24) |
                      ((uint32_t)battery << 16)  |
                      ((uint32_t)(uint16_t)tempCentiDeg & 0xFFFF);

    printf("Packed Packet: 0x%08X\\n", packet);

    /* Unpack */
    uint8_t outId = (packet >> 24) & 0xFF;
    uint8_t outBatt = (packet >> 16) & 0xFF;
    int16_t outTemp = (int16_t)(packet & 0xFFFF);

    printf("Unpacked ID   : %u\\n", outId);
    printf("Unpacked Batt : %u%%\\n", outBatt);
    printf("Unpacked Temp : %.2f °C\\n", outTemp / 100.0);

    return 0;
}`,codeExplanation:"Demonstrates bitwise serialization, exact-width stdint data types, bit masking, and integer division formatting."}]};function X(){return e.jsxs("div",{className:"mt-4 pt-2 md:pt-4 space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_002 · Topic 6"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Hands-on Projects & Lab Solutions"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Module 001_002 Practical Capstone Projects & Lab Solutions"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Apply C tokens, primitive memory sizing, exact-width integer types (",e.jsx("code",{children:"<stdint.h>"}),"), bitwise manipulation masks, and arithmetic precision in real-world systems engineering projects."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Reference C Implementation: Module2ProjectsDemo.c"]}),e.jsx(A,{fileModule:F,title:"Module2ProjectsDemo.c",editable:!1})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-300 border-b border-slate-800 pb-3 flex items-center gap-2",children:[e.jsx("span",{children:"🚀"})," Module 001_002 Capstone Project Solutions"]}),e.jsx(y,{data:j})]}),e.jsx("section",{children:e.jsx(R,{content:P,title:"Module 001_002 Topic 6 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_002_topic6_note.txt"})}),e.jsx("section",{children:e.jsx(E,{note:"Always test edge cases: try negative numbers in salary inputs and observe bitmask boundaries. Building robust systems begins with mastering data types and bit-level mechanics! — Sukanta Hui"})})]})}export{X as default};
