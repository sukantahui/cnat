import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-DjboCeUK.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";import"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-monaco-Bv7hoEkV.js";const r=`/**
 * ============================================================================
 * Program: TypeModifiersStdintDemo.c
 * Module: 001_002 - C Tokens, Data Types & Operator Mechanics
 * Topic 2: Type Modifiers (short, long, signed, unsigned) & <stdint.h>
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)
 * Standard: ANSI C / C99 (<stdint.h>, <inttypes.h>)
 * ============================================================================
 */

#include <stdio.h>
#include <stdint.h>
#include <inttypes.h>

int main(void) {
    /* 1. Classic Type Modifiers */
    signed int signedTemp = -15;
    unsigned int unsignedPacketCount = 65000U;
    short int smallSensorId = 3200;
    unsigned short int unsignedPort = 8080U;
    long int highTimestamp = 1715000000L;
    unsigned long long int memoryBytes = 18446744073709551615ULL; /* ULLONG_MAX */

    /* 2. Modern Exact-Width Integer Types from <stdint.h> */
    int8_t   statusByte   = -120;
    uint8_t  hardwareFlag = 0xFE;           /* 254 in decimal */
    int16_t  dacOutput    = -32000;
    uint16_t ethernetPort = 443;
    int32_t  transactionId = -2100000000;
    uint32_t ipv4Address  = 3232235521U;    /* 192.168.0.1 */
    int64_t  bigCounter   = -9000000000000000000LL;
    uint64_t globalUuid   = 18000000000000000000ULL;

    /* 3. Unsigned Wrap-around Demonstration */
    uint8_t wrapCounter = 255;
    printf("===================================================================\\n");
    printf("     TYPE MODIFIERS & <stdint.h> - CODER & ACCOTAX\\n");
    printf("     Educator: Sukanta Hui | Barrackpore Systems Lab\\n");
    printf("===================================================================\\n\\n");

    printf("--- [1] Classic C Type Modifiers ---\\n");
    printf("Signed Temperature     (%%d)   : %d °C\\n", signedTemp);
    printf("Unsigned Packet Count  (%%u)   : %u\\n", unsignedPacketCount);
    printf("Signed Short Sensor    (%%hd)  : %hd\\n", smallSensorId);
    printf("Unsigned Short Port    (%%hu)  : %hu\\n", unsignedPort);
    printf("Signed Long Timestamp  (%%ld)  : %ld\\n", highTimestamp);
    printf("Unsigned Long Long Max (%%llu) : %llu\\n", memoryBytes);

    printf("\\n--- [2] Modern <stdint.h> Exact-Width Types & <inttypes.h> ---\\n");
    printf("int8_t   statusByte    (PRId8)  : %" PRId8 "\\n", statusByte);
    printf("uint8_t  hardwareFlag  (PRIu8)  : %" PRIu8 " (Hex: 0x%" PRIX8 ")\\n", hardwareFlag, hardwareFlag);
    printf("int16_t  dacOutput     (PRId16) : %" PRId16 "\\n", dacOutput);
    printf("uint16_t ethernetPort  (PRIu16) : %" PRIu16 "\\n", ethernetPort);
    printf("int32_t  transactionId (PRId32) : %" PRId32 "\\n", transactionId);
    printf("uint32_t ipv4Address   (PRIu32) : %" PRIu32 "\\n", ipv4Address);
    printf("int64_t  bigCounter    (PRId64) : %" PRId64 "\\n", bigCounter);
    printf("uint64_t globalUuid    (PRIu64) : %" PRIu64 "\\n", globalUuid);

    printf("\\n--- [3] Unsigned Integer Wrap-Around Mechanics ---\\n");
    printf("Initial uint8_t value : %u\\n", wrapCounter);
    wrapCounter++;
    printf("After wrapCounter++   : %u (Modular 256 Wrap)\\n", wrapCounter);
    wrapCounter--;
    printf("After wrapCounter--   : %u (Wrap back to Max)\\n", wrapCounter);
    printf("===================================================================\\n");

    return 0;
}
`,a=[{question:"What are type modifiers in C?",shortAnswer:"Keywords prefixed to basic data types to modify their storage size or signedness range.",explanation:"C provides four primary modifiers: signed, unsigned, short, and long (plus long long in C99). They adapt standard types like int, char, and double to specific hardware requirements.",hint:"signed, unsigned, short, long.",level:"basic",codeExample:`unsigned int counter = 100;
short int smallVal = 5;`},{question:"What is the difference between signed and unsigned integer types?",shortAnswer:"Signed integers can represent positive, zero, and negative values; unsigned integers represent only non-negative values with double the positive range.",explanation:"In signed 16-bit short (-32768 to +32767), the MSB is the sign bit. In unsigned 16-bit short (0 to 65535), all 16 bits represent positive numerical magnitude.",hint:"Signed has negative values; unsigned has double positive range.",level:"basic"},{question:"How does two's complement represent negative numbers in signed types?",shortAnswer:"A negative number is represented by inverting all bits of its positive counterpart and adding 1.",explanation:"For example, in 8-bit signed char, +5 is 00000101. Inverting yields 11111010, and adding 1 yields 11111011 (-5). This allows CPU hardware to perform subtraction using standard addition circuitry.",hint:"Two's complement = Invert bits (one's complement) + 1.",level:"intermediate"},{question:"Why were exact-width integer types introduced in <stdint.h> in C99?",shortAnswer:"To provide platform-independent integer types with guaranteed bit widths across all hardware architectures.",explanation:"Because the size of `int` and `long` varies between 16-bit, 32-bit, and 64-bit platforms, <stdint.h> defines explicit types like int8_t, int16_t, int32_t, int64_t, uint8_t, uint16_t, uint32_t, and uint64_t.",hint:"Predictable, portable bit sizes across compilers.",level:"intermediate",codeExample:`#include <stdint.h>
uint32_t ip = 0xC0A80001; // Exactly 32 bits on all platforms`},{question:"What happens when an unsigned integer overflows or underflows?",shortAnswer:"It performs defined modular arithmetic (modulo 2^N) and wraps around safely without undefined behavior.",explanation:"If a uint8_t holds 255 and is incremented by 1, it becomes 0. If a uint8_t holds 0 and is decremented by 1, it wraps to 255. This is well-defined by the C standard.",hint:"Modular wrap-around behavior.",level:"basic",codeExample:`uint8_t x = 255;
x++; // x is now 0`},{question:"Why is signed integer overflow considered dangerous in C?",shortAnswer:"Signed integer overflow is Undefined Behavior (UB) according to the ISO C standard.",explanation:"Because signed overflow is UB, the compiler is allowed to assume it never happens and may optimize away security boundary checks or cause unpredictable runtime crashes.",hint:"Never rely on signed integer overflow wrapping.",level:"advanced"},{question:"What is the purpose of the <inttypes.h> header in C99?",shortAnswer:"It provides standardized printf/scanf format macros (like PRId32, PRIu64) for <stdint.h> types.",explanation:"Because the underlying typedef for int32_t might be `int` or `long` depending on the platform, <inttypes.h> macros expand to the correct format string specifier.",hint:"Platform-safe printf format specifiers for stdint types.",level:"intermediate",codeExample:`#include <inttypes.h>
int64_t val = 5000000000LL;
printf("Value: %" PRId64 "\\n", val);`},{question:"What is size_t and what header defines it?",shortAnswer:"An unsigned integer type capable of representing the size of any object in memory, defined in <stddef.h>, <stdio.h>, and <stdlib.h>.",explanation:"size_t is 32 bits on 32-bit systems and 64 bits on 64-bit systems. It is the return type of sizeof and the type for array indices/memory buffer lengths.",hint:"Unsigned memory size type; printed using %zu.",level:"basic"},{question:"What is ptrdiff_t and uintptr_t in C?",shortAnswer:"ptrdiff_t is a signed integer resulting from pointer subtraction; uintptr_t is an unsigned integer large enough to store a pointer address.",explanation:"uintptr_t (from <stdint.h>) allows safe casting of pointer addresses into integers for bitwise masking without losing high-order address bits.",hint:"Pointer arithmetic and memory address containers.",level:"advanced",codeExample:`#include <stdint.h>
int num = 10;
uintptr_t addr = (uintptr_t)&num;`},{question:"Can type modifiers be applied to floating-point types (float and double)?",shortAnswer:"Only 'long' can be applied to 'double' (creating 'long double'); 'signed', 'unsigned', and 'short' cannot be applied to float or double.",explanation:"The C grammar does not permit signed float or unsigned double because IEEE-754 floating-point format inherently includes a sign bit.",hint:"Only 'long double' is valid for floats.",level:"intermediate"},{question:"What is the short form of 'unsigned int' and 'short int' in C declarations?",shortAnswer:"'unsigned' implies 'unsigned int'; 'short' implies 'short int'; 'long' implies 'long int'.",explanation:"In C, omitting the word 'int' when using a type modifier is completely valid shorthand syntax.",hint:"unsigned x; is identical to unsigned int x;",level:"basic",codeExample:`unsigned u = 50;  // equivalent to unsigned int u = 50;
short s = 10;     // equivalent to short int s = 10;`},{question:"What is the format specifier for printing short integers in printf?",shortAnswer:"%hd for signed short int, and %hu for unsigned short int.",explanation:"The 'h' modifier flag tells printf to interpret the passed integer argument as a 16-bit half-word.",hint:"%hd for signed short, %hu for unsigned short.",level:"basic"},{question:"What is the format specifier for printing long integers in printf?",shortAnswer:"%ld for signed long int, and %lu for unsigned long int.",explanation:"The 'l' modifier informs printf that the argument is a long integer (32 or 64 bits depending on OS).",hint:"%ld for signed long, %lu for unsigned long.",level:"basic"},{question:"What are int_fastN_t and int_leastN_t types in <stdint.h>?",shortAnswer:"int_fastN_t is the fastest integer type of at least N bits; int_leastN_t is the smallest integer type of at least N bits.",explanation:"For example, on a 64-bit CPU, int_fast8_t might be mapped to a 64-bit register for maximum ALU speed, while int_least8_t is mapped to an 8-bit byte to save RAM.",hint:"Speed optimization vs memory compactness.",level:"advanced"},{question:"What is the format specifier for printing uint8_t with printf?",shortAnswer:"Cast to unsigned int with %u, or use PRIu8 macro from <inttypes.h>.",explanation:"Because uint8_t is promoted to int when passed to variadic functions like printf, %u or %d works cleanly with a cast.",hint:"Use %u with (unsigned int) cast or PRIu8.",level:"intermediate",codeExample:`uint8_t byte = 200;
printf("Byte: %u\\n", (unsigned int)byte);`},{question:"What is the range of uint16_t and where is it commonly used?",shortAnswer:"0 to 65,535; commonly used for networking port numbers (e.g. HTTP 80, HTTPS 443), image dimensions, and audio samples.",explanation:"Since TCP/UDP ports are 16-bit integers, uint16_t is the standard data type used in socket programming across all operating systems.",hint:"16-bit unsigned integer (2^16 = 65,536 values).",level:"basic"},{question:"What is the range of int8_t?",shortAnswer:"-128 to +127.",explanation:"int8_t uses exactly 8 bits in two's complement format: 1 sign bit and 7 magnitude bits.",hint:"-2^7 to (2^7 - 1).",level:"basic"},{question:"What is the range of uint32_t and where is it used?",shortAnswer:"0 to 4,294,967,295; widely used for IPv4 addresses, Unix epoch timestamps, and file offsets under 4 GB.",explanation:"An IPv4 address like 192.168.1.1 is represented in memory as a single 32-bit unsigned integer.",hint:"32-bit network and memory address fields.",level:"basic"},{question:"What is the range of uint64_t and where is it used?",shortAnswer:"0 to 18,446,744,073,709,551,615; used for large file sizes (>4 GB), database primary keys, and cryptography hashes.",explanation:"uint64_t provides 64 bits of storage (18.4 quintillion values), making it suitable for modern large-scale system timestamps in nanoseconds.",hint:"64-bit massive numeric range.",level:"basic"},{question:"What happens when you mix signed and unsigned integers in an arithmetic comparison?",shortAnswer:"The signed integer is implicitly converted to an unsigned integer, which can cause unexpected comparison bugs.",explanation:"In `int a = -1; unsigned int b = 1; if (a < b)`, -1 converts to 4,294,967,295U, making the condition evaluate to FALSE!",hint:"Signed values convert to large unsigned numbers during mixed comparisons.",level:"advanced",codeExample:`int a = -1;
unsigned int b = 1;
if (a < b) { /* NOT REACHED: -1 becomes 4294967295U */ }`},{question:"What is the difference between uint_least32_t and uint32_t?",shortAnswer:"uint32_t must be exactly 32 bits (and is omitted if the architecture lacks native 32-bit support); uint_least32_t is guaranteed to exist with at least 32 bits.",explanation:"On rare DSP chips with only 48-bit words, uint32_t is not available, but uint_least32_t will map to the 48-bit word.",hint:"Exact-width vs minimum guaranteed width.",level:"advanced"},{question:"What is the macro INT32_C and UINT64_C in <stdint.h>?",shortAnswer:"Literal constant constructor macros that append the correct compiler suffix to integer constants.",explanation:"Writing `INT32_C(100)` or `UINT64_C(5000000000)` ensures literal constants have the exact type required by the architecture.",hint:"Portable literal creation macros.",level:"advanced"},{question:"Why should loop counters with descending conditions avoid unsigned types?",shortAnswer:"An unsigned integer never becomes negative, so `for (unsigned int i = 5; i >= 0; i--)` results in an infinite loop.",explanation:"When i reaches 0, `i--` wraps around to UINT_MAX (4,294,967,295), which is still >= 0, causing the loop to never terminate.",hint:"Unsigned integers can never be < 0.",level:"intermediate",codeExample:`// BUG:
// for (unsigned int i = 5; i >= 0; i--) { ... }
// FIX:
for (int i = 5; i >= 0; i--) { ... }`},{question:"What is the maximum value macro for size_t?",shortAnswer:"SIZE_MAX, defined in <stdint.h>.",explanation:"SIZE_MAX represents the maximum addressable memory allocation size in bytes on the current platform.",hint:"Upper bound for malloc allocations.",level:"intermediate"},{question:"How do type modifiers impact structure alignment and memory padding in C?",shortAnswer:"Fields with larger type modifiers (like uint64_t) require wider memory alignment boundaries, causing the compiler to insert padding bytes.",explanation:"Placing a uint8_t followed by a uint64_t in a struct introduces 7 bytes of padding on a 64-bit CPU to align the uint64_t to an 8-byte boundary.",hint:"Padding bytes ensure natural alignment.",level:"advanced"}],o=`================================================================================
CODER & ACCOTAX - C LANGUAGE STUDY NOTE
Module 001_002: C Tokens, Data Types & Operator Mechanics
Topic 2: Type Modifiers (short, long, signed, unsigned) & <stdint.h>
Educator: Sukanta Hui | Location: Barrackpore, West Bengal
================================================================================

1. TYPE MODIFIERS OVERVIEW:
--------------------------------------------------------------------------------
Modifiers alter the bit width or the sign interpretation of integer types:
- signed   : Supports negative, zero, and positive values (MSB = sign bit).
- unsigned : Supports only non-negative values [0 to 2^N - 1].
- short    : Decreases bit width to at least 16 bits (2 bytes).
- long     : Increases bit width to at least 32 bits (4B) or 64 bits (8B).
- long long: Guaranteed at least 64 bits (8 bytes) introduced in C99.

2. TWO'S COMPLEMENT SIGNED REPRESENTATION (8-BIT EXAMPLE):
--------------------------------------------------------------------------------
Value +5 : 00000101 (Binary)
Invert   : 11111010 (One's Complement)
Add 1    : 11111011 (-5 in Two's Complement)

3. EXACT-WIDTH INTEGER TYPES (<stdint.h>):
--------------------------------------------------------------------------------
+-----------+------------+-----------------------+-----------------------------+
| Type      | Byte Size  | Signedness            | Range Limits                |
+-----------+------------+-----------------------+-----------------------------+
| int8_t    | 1 Byte     | Signed (-128..127)    | INT8_MIN to INT8_MAX        |
| uint8_t   | 1 Byte     | Unsigned (0..255)     | 0 to UINT8_MAX              |
| int16_t   | 2 Bytes    | Signed (-32K..+32K)   | INT16_MIN to INT16_MAX      |
| uint16_t  | 2 Bytes    | Unsigned (0..65535)   | 0 to UINT16_MAX             |
| int32_t   | 4 Bytes    | Signed (-2.14B..2.14B)| INT32_MIN to INT32_MAX      |
| uint32_t  | 4 Bytes    | Unsigned (0..4.29B)   | 0 to UINT32_MAX             |
| int64_t   | 8 Bytes    | Signed (-9.22E18...)  | INT64_MIN to INT64_MAX      |
| uint64_t  | 8 Bytes    | Unsigned (0..18.4E18) | 0 to UINT64_MAX             |
+-----------+------------+-----------------------+-----------------------------+

4. FORMATTING MACROS (<inttypes.h>):
--------------------------------------------------------------------------------
- PRId8, PRId16, PRId32, PRId64 (Signed decimal output)
- PRIu8, PRIu16, PRIu32, PRIu64 (Unsigned decimal output)
- PRIX8, PRIX16, PRIX32, PRIX64 (Hexadecimal uppercase output)
Example: printf("ID: %" PRId32 "\\n", myId);

5. CRITICAL TRAPS & SUKANTA HUI'S LAB RULES:
--------------------------------------------------------------------------------
1. Unsigned Loop Counter Bug:
   \`for (unsigned int i = 5; i >= 0; i--)\` loops infinitely because unsigned
   integers can NEVER be negative!
2. Unsigned Wrap-Around:
   \`uint8_t x = 255; x++;\` wraps cleanly to 0 (well-defined modulo 256).
   Signed overflow is Undefined Behavior!
================================================================================
`;function b(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_002 · Topic 2"}),e.jsx("span",{className:"bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Type Modifiers & stdint.h"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Type Modifiers (short, long, signed, unsigned) & Exact-Width Integers"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Deep-dive into signed vs unsigned bitwise representations, two's complement arithmetic, modular wrap-around behavior, and cross-platform exact-width types via ",e.jsx("code",{children:"<stdint.h>"})," and ",e.jsx("code",{children:"<inttypes.h>"}),"."]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Signedness, Bit Modifiers & Deterministic Types"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["In systems programming, controlling the exact range and signedness of numeric data is critical. Standard types like ",e.jsx("code",{children:"int"})," or ",e.jsx("code",{children:"long"})," lack deterministic bit widths across platforms."]}),e.jsx("p",{children:"C solves this using two mechanisms:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-sm text-slate-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Type Modifiers:"})," Keywords (",e.jsx("code",{children:"signed"}),", ",e.jsx("code",{children:"unsigned"}),", ",e.jsx("code",{children:"short"}),", ",e.jsx("code",{children:"long"}),", ",e.jsx("code",{children:"long long"}),") applied to base types to shift their numeric range or adjust byte sizes."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Exact-Width Integers (",e.jsx("code",{children:"<stdint.h>"}),"):"]})," Standardized in C99 to provide unambiguous bit widths (",e.jsx("code",{children:"int8_t"}),", ",e.jsx("code",{children:"uint8_t"}),", ",e.jsx("code",{children:"int16_t"}),", ",e.jsx("code",{children:"uint16_t"}),", ",e.jsx("code",{children:"int32_t"}),", ",e.jsx("code",{children:"uint32_t"}),", ",e.jsx("code",{children:"int64_t"}),", ",e.jsx("code",{children:"uint64_t"}),")."]})]}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-300 space-y-2 mt-4",children:[e.jsx("p",{className:"font-semibold text-amber-300",children:"🏫 Classroom Story at Coder & AccoTax (Naihati & Barrackpore Labs):"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Debangshu"})," wrote a countdown loop: ",e.jsx("code",{children:"for (unsigned int i = 5; i >= 0; i--)"})," and the program printed numbers infinitely until the terminal froze. ",e.jsx("strong",{children:"Sukanta Hui"})," demonstrated that because ",e.jsx("code",{children:"unsigned int"})," cannot represent negative values, when ",e.jsx("code",{children:"i"})," decrements from 0, it wraps around to ",e.jsx("code",{children:"4,294,967,295"})," (which is still ",e.jsx("code",{children:">= 0"}),"). ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Abhronila"})," learned firsthand why signedness matters for loop bounds!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: Signed vs Unsigned 8-Bit Layout & Wrap Wheel"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 920 280",className:"w-full min-w-[760px] font-sans",children:[e.jsx("rect",{x:"10",y:"10",width:"900",height:"260",rx:"16",fill:"#0f172a",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"38",textAnchor:"middle",fill:"#94a3b8",className:"text-xs uppercase tracking-wider font-semibold",children:"8-Bit Byte: Signed Two's Complement (int8_t) vs Unsigned (uint8_t)"}),e.jsxs("g",{className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"50",y:"60",width:"380",height:"130",rx:"12",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"240",y:"90",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-sm",children:"signed char / int8_t (-128 to +127)"}),e.jsxs("g",{transform:"translate(70, 110)",children:[e.jsx("rect",{x:"0",y:"0",width:"40",height:"35",fill:"#e11d48",rx:"4"}),e.jsx("text",{x:"20",y:"22",textAnchor:"middle",fill:"#ffffff",className:"font-mono text-xs font-bold",children:"MSB"}),e.jsx("text",{x:"20",y:"50",textAnchor:"middle",fill:"#fda4af",className:"text-[10px]",children:"Sign Bit"}),e.jsx("rect",{x:"45",y:"0",width:"290",height:"35",fill:"#0284c7",rx:"4"}),e.jsx("text",{x:"190",y:"22",textAnchor:"middle",fill:"#ffffff",className:"font-mono text-xs font-bold",children:"7 Magnitude Bits (Two's Complement)"})]})]}),e.jsxs("g",{className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"490",y:"60",width:"380",height:"130",rx:"12",fill:"#1e293b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"680",y:"90",textAnchor:"middle",fill:"#34d399",className:"font-bold text-sm",children:"unsigned char / uint8_t (0 to 255)"}),e.jsxs("g",{transform:"translate(510, 110)",children:[e.jsx("rect",{x:"0",y:"0",width:"340",height:"35",fill:"#059669",rx:"4"}),e.jsx("text",{x:"170",y:"22",textAnchor:"middle",fill:"#ffffff",className:"font-mono text-xs font-bold",children:"All 8 Bits Represent Positive Magnitude"}),e.jsx("text",{x:"170",y:"50",textAnchor:"middle",fill:"#6ee7b7",className:"text-[10px]",children:"No sign bit · Pure binary weight (1, 2, 4, 8, 16, 32, 64, 128)"})]})]}),e.jsx("rect",{x:"50",y:"205",width:"820",height:"45",rx:"8",fill:"#111827",stroke:"#334155",strokeWidth:"1"}),e.jsx("text",{x:"460",y:"233",textAnchor:"middle",fill:"#facc15",className:"text-xs font-mono",children:"Unsigned Wrap: 255 + 1 = 0 (Defined Modulo 256) | Signed Overflow: 127 + 1 = Undefined Behavior!"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Deep Technical Breakdown: Exact-Width Types (",e.jsx("code",{className:"text-amber-300",children:"<stdint.h>"}),") Matrix"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left border border-slate-800 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-800 text-sky-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Exact Type"}),e.jsx("th",{className:"p-3",children:"Bits / Bytes"}),e.jsx("th",{className:"p-3",children:"Range Limits"}),e.jsxs("th",{className:"p-3",children:["Format Macro (",e.jsx("code",{className:"text-amber-300",children:"<inttypes.h>"}),")"]}),e.jsx("th",{className:"p-3",children:"Typical Industrial Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 bg-slate-900/40 text-slate-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"int8_t / uint8_t"}),e.jsx("td",{className:"p-3",children:"8 bits (1B)"}),e.jsx("td",{className:"p-3 font-mono",children:"-128..127 / 0..255"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"PRId8 / PRIu8"}),e.jsx("td",{className:"p-3",children:"Hardware registers, byte stream buffers, ASCII characters"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"int16_t / uint16_t"}),e.jsx("td",{className:"p-3",children:"16 bits (2B)"}),e.jsx("td",{className:"p-3 font-mono",children:"-32768..32767 / 0..65535"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"PRId16 / PRIu16"}),e.jsx("td",{className:"p-3",children:"Network port numbers (HTTP 80, SSH 22), audio PCM samples"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"int32_t / uint32_t"}),e.jsx("td",{className:"p-3",children:"32 bits (4B)"}),e.jsx("td",{className:"p-3 font-mono",children:"-2.14B..+2.14B / 0..4.29B"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"PRId32 / PRIu32"}),e.jsx("td",{className:"p-3",children:"IPv4 addresses, Unix 32-bit timestamps, game score state"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"int64_t / uint64_t"}),e.jsx("td",{className:"p-3",children:"64 bits (8B)"}),e.jsx("td",{className:"p-3 font-mono",children:"-9.22E18..+9.22E18 / 0..18.4E18"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"PRId64 / PRIu64"}),e.jsx("td",{className:"p-3",children:"High-precision nanosecond clocks, large disk file offsets, UUIDs"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-emerald-300",children:"uintptr_t"}),e.jsx("td",{className:"p-3",children:"Platform ptr size"}),e.jsx("td",{className:"p-3 font-mono",children:"0 to UINTPTR_MAX"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"PRIuPTR / PRIxPTR"}),e.jsx("td",{className:"p-3",children:"Pointer-to-integer conversions, memory alignment masks"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Type Modifiers & <stdint.h> Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"TypeModifiersStdintDemo.c"}),") demonstrates signed vs unsigned modifiers, exact-width types with ",e.jsx("code",{children:"<inttypes.h>"})," format macros, and unsigned modular wrap-around in real memory."]}),e.jsx(t,{fileModule:r,title:"TypeModifiersStdintDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`===================================================================
     TYPE MODIFIERS & <stdint.h> - CODER & ACCOTAX
     Educator: Sukanta Hui | Barrackpore Systems Lab
===================================================================

--- [1] Classic C Type Modifiers ---
Signed Temperature     (%d)   : -15 °C
Unsigned Packet Count  (%u)   : 65000
Signed Short Sensor    (%hd)  : 3200
Unsigned Short Port    (%hu)  : 8080
Signed Long Timestamp  (%ld)  : 1715000000
Unsigned Long Long Max (%llu) : 18446744073709551615

--- [2] Modern <stdint.h> Exact-Width Types & <inttypes.h> ---
int8_t   statusByte    (PRId8)  : -120
uint8_t  hardwareFlag  (PRIu8)  : 254 (Hex: 0xFE)
int16_t  dacOutput     (PRId16) : -32000
uint16_t ethernetPort  (PRIu16) : 443
int32_t  transactionId (PRId32) : -2100000000
uint32_t ipv4Address   (PRIu32) : 3232235521
int64_t  bigCounter    (PRId64) : -9000000000000000000
uint64_t globalUuid    (PRIu64) : 18000000000000000000

--- [3] Unsigned Integer Wrap-Around Mechanics ---
Initial uint8_t value : 255
After wrapCounter++   : 0 (Modular 256 Wrap)
After wrapCounter--   : 255 (Wrap back to Max)
===================================================================`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Unsigned Loop Terminations:"})," Writing ",e.jsx("code",{children:"for (unsigned int i = n; i >= 0; i--)"})," results in an infinite loop because unsigned variables can never be negative. Use signed ",e.jsx("code",{children:"int"})," for decrementing loops."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Format Specifier Mismatches:"})," Printing a ",e.jsx("code",{children:"uint64_t"})," using ",e.jsx("code",{children:"%u"})," or ",e.jsx("code",{children:"%d"})," truncates 32 bits of information. Always use ",e.jsx("code",{children:"%llu"})," or ",e.jsx("code",{children:"PRIu64"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming long is always 64-bit:"})," Remember that on 64-bit Windows, ",e.jsx("code",{children:"long"})," is only 32 bits! Always use ",e.jsx("code",{children:"int64_t"})," or ",e.jsx("code",{children:"long long"})," when 64 bits are required."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Why did the Year 2038 Problem (Y2K38) arise in legacy C systems? (Hint: 32-bit signed ",e.jsx("code",{children:"time_t"})," counts seconds since Jan 1, 1970 and will overflow at 2,147,483,647 seconds on January 19, 2038, wrapping into year 1901!). How does migrating to ",e.jsx("code",{children:"int64_t time_t"})," solve the problem for the next 292 billion years?"]})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 001_002 Topic 2 FAQs: Type Modifiers & stdint.h",questions:a})}),e.jsx("section",{children:e.jsx(i,{content:o,title:"Module 001_002 Topic 2 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_002_topic2_note.txt"})}),e.jsx("section",{children:e.jsx(s,{note:"Always include <stdint.h> in your projects. Writing uint8_t, int32_t, and uint64_t instantly elevates your C code to professional, platform-resilient industry engineering standards! — Sukanta Hui"})})]})}export{b as default};
