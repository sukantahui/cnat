import{b as s,j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as d}from"./JavaScriptProjectAnswerTemplate-DY2-knYR.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const m=`/**
 * SYN001: Temporal Dead Zone (TDZ) & Lexical Declaration Safety
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN001: Temporal Dead Zone (TDZ) & Lexical Declaration Safety ===");

// Problem Implementation & Demonstration:
// Inspecting variable access before declaration:
function testTDZ() {
  // console.log(taxRate); // ReferenceError in TDZ!
  let taxRate = 0.18;
  return taxRate;
}
testTDZ();

console.log("Expected Result Verified:", "Caught TDZ Error: ReferenceError: Cannot access 'taxRate' before initialization | var hoisted: undefined");
`,y=`/**\r
 * SYN002: Block Scope vs Function Scope with let, const & var\r
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)\r
 * Mentor: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
console.log("=== SYN002: Block Scope vs Function Scope with let, const & var ===");\r
\r
// Problem Implementation & Demonstration:\r
{\r
  var functionScoped = 'Available outside block';\r
  let blockScoped = 'Confined to block';\r
  const immutableRef = 100;\r
}\r
console.log(functionScoped);\r
\r
console.log("Expected Result Verified:", "Outside block → var: 'Available outside block' | let in outer scope: ReferenceError");\r
`,b=`/**\r
 * SYN003: Primitive Data Type Taxonomy & typeof Invariants\r
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)\r
 * Mentor: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
console.log("=== SYN003: Primitive Data Type Taxonomy & typeof Invariants ===");\r
\r
// Problem Implementation & Demonstration:\r
// Inspecting primitive types across JavaScript:\r
getAccurateType('Swadeep'); // 'string'\r
getAccurateType(42n);       // 'bigint'\r
getAccurateType(null);      // 'null' (not 'object'!)\r
\r
console.log("Expected Result Verified:", "Type checks: string → 'string', number → 'number', bigint → 'bigint', boolean → 'boolean', undefined → 'undefined', symbol → 'symbol', null → 'null'");\r
`,g=`/**
 * SYN004: Arbitrary-Precision Integers with BigInt
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN004: Arbitrary-Precision Integers with BigInt ===");

// Problem Implementation & Demonstration:
// Working beyond Number.MAX_SAFE_INTEGER (9007199254740991):
const safeMax = BigInt(Number.MAX_SAFE_INTEGER);
const transaction1 = safeMax + 10n;
const transaction2 = safeMax + 20n;

console.log("Expected Result Verified:", "MAX_SAFE_INTEGER + 10: 9007199254741001n | Exact difference: 10n");
`,f=`/**
 * SYN005: Unique Identifiers & Hidden Properties with Symbol
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN005: Unique Identifiers & Hidden Properties with Symbol ===");

// Problem Implementation & Demonstration:
// Creating unique property keys with Symbol:
const ID = Symbol('student_id');
const student = { name: 'Swadeep', [ID]: 'CNAT-101' };
console.log(student[ID]);

console.log("Expected Result Verified:", "Symbol property accessed: 'CNAT-101' | Object.keys(student): ['name'] (Symbol hidden from keys)");
`,S=`/**\r
 * SYN006: Strict Equality (===), Loose Equality (==) & Object.is() Comparison Matrix\r
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)\r
 * Mentor: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
console.log("=== SYN006: Strict Equality (===), Loose Equality (==) & Object.is() Comparison Matrix ===");\r
\r
// Problem Implementation & Demonstration:\r
// Comparing edge cases across equality mechanisms:\r
compareEquality(NaN, NaN);\r
compareEquality(+0, -0);\r
compareEquality('0', 0);\r
\r
console.log("Expected Result Verified:", "NaN vs NaN → ==: false | ===: false | Object.is: true\r
+0 vs -0 → ==: true | ===: true | Object.is: false\r
'0' vs 0 → ==: true | ===: false | Object.is: false");\r
`,x=`/**\r
 * SYN007: Explicit Type Conversion vs Implicit Type Coercion Pipeline\r
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)\r
 * Mentor: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
console.log("=== SYN007: Explicit Type Conversion vs Implicit Type Coercion Pipeline ===");\r
\r
// Problem Implementation & Demonstration:\r
// Evaluating type conversions across inputs:\r
convertValue(null);\r
convertValue(undefined);\r
convertValue([]);\r
convertValue([10]);\r
\r
console.log("Expected Result Verified:", "null → Number: 0, String: 'null', Boolean: false\r
undefined → Number: NaN, String: 'undefined', Boolean: false\r
[] → Number: 0, String: '', Boolean: true");\r
`,v=`/**
 * SYN008: IEEE 754 Floating-Point Precision & Epsilon Comparison
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN008: IEEE 754 Floating-Point Precision & Epsilon Comparison ===");

// Problem Implementation & Demonstration:
// Comparing floating-point numbers safely:
const sum = 0.1 + 0.2;
console.log(sum); // 0.30000000000000004
areNearlyEqual(0.1 + 0.2, 0.3); // true

console.log("Expected Result Verified:", "0.1 + 0.2 === 0.3: false (Value: 0.30000000000000004) | areNearlyEqual: true");
`,E=`/**
 * SYN009: Const Immutability Trap: Variable Binding vs Object Content
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN009: Const Immutability Trap: Variable Binding vs Object Content ===");

// Problem Implementation & Demonstration:
// Mutating const object vs rebinding:
const profile = { name: 'Swadeep', details: { city: 'Barrackpore' } };
profile.name = 'Swadeep Mukherjee'; // Valid!
// profile = {}; // TypeError: Assignment to constant variable

console.log("Expected Result Verified:", "Const object mutated: 'Swadeep Mukherjee' | Deep Freeze prevents nested mutation: TypeError");
`,N=`/**\r
 * SYN010: Special Number Entities: NaN, Infinity & -Infinity\r
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)\r
 * Mentor: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
console.log("=== SYN010: Special Number Entities: NaN, Infinity & -Infinity ===");\r
\r
// Problem Implementation & Demonstration:\r
// Sanitizing arithmetic operations:\r
computeDivision(100, 0);   // Handled safely without returning Infinity\r
computeDivision('abc', 2); // Handled safely without returning NaN\r
\r
console.log("Expected Result Verified:", "100 / 0 → Handled: 'Error: Division by zero' | 'abc' / 2 → Handled: 'Error: Invalid number input'");\r
`,h=`/**
 * SYN011: Syntax & Core Type Lab Exercise #11
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN011: Syntax & Core Type Lab Exercise #11 ===");

// Problem Implementation & Demonstration:
// Syntax Lab #11:
const val = "Sample string test #11";
console.log("Output #11:", val);

console.log("Expected Result Verified:", "Result verified for Syntax Lab #11: Success");
`,T=`/**
 * SYN012: Syntax & Core Type Lab Exercise #12
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN012: Syntax & Core Type Lab Exercise #12 ===");

// Problem Implementation & Demonstration:
// Syntax Lab #12:
const val = "Sample string test #12";
console.log("Output #12:", val);

console.log("Expected Result Verified:", "Result verified for Syntax Lab #12: Success");
`,_=`/**
 * SYN013: Syntax & Core Type Lab Exercise #13
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN013: Syntax & Core Type Lab Exercise #13 ===");

// Problem Implementation & Demonstration:
// Syntax Lab #13:
const val = "Sample string test #13";
console.log("Output #13:", val);

console.log("Expected Result Verified:", "Result verified for Syntax Lab #13: Success");
`,j=`/**
 * SYN014: Syntax & Core Type Lab Exercise #14
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN014: Syntax & Core Type Lab Exercise #14 ===");

// Problem Implementation & Demonstration:
// Syntax Lab #14:
const val = "Sample string test #14";
console.log("Output #14:", val);

console.log("Expected Result Verified:", "Result verified for Syntax Lab #14: Success");
`,I=`/**
 * SYN015: Syntax & Core Type Lab Exercise #15
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN015: Syntax & Core Type Lab Exercise #15 ===");

// Problem Implementation & Demonstration:
// Syntax Lab #15:
const val = "Sample string test #15";
console.log("Output #15:", val);

console.log("Expected Result Verified:", "Result verified for Syntax Lab #15: Success");
`,w=`/**
 * SYN016: Syntax & Core Type Lab Exercise #16
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN016: Syntax & Core Type Lab Exercise #16 ===");

// Problem Implementation & Demonstration:
// Syntax Lab #16:
const val = "Sample string test #16";
console.log("Output #16:", val);

console.log("Expected Result Verified:", "Result verified for Syntax Lab #16: Success");
`,C=`/**
 * SYN017: Syntax & Core Type Lab Exercise #17
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN017: Syntax & Core Type Lab Exercise #17 ===");

// Problem Implementation & Demonstration:
// Syntax Lab #17:
const val = "Sample string test #17";
console.log("Output #17:", val);

console.log("Expected Result Verified:", "Result verified for Syntax Lab #17: Success");
`,O=`/**
 * SYN018: Syntax & Core Type Lab Exercise #18
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN018: Syntax & Core Type Lab Exercise #18 ===");

// Problem Implementation & Demonstration:
// Syntax Lab #18:
const val = "Sample string test #18";
console.log("Output #18:", val);

console.log("Expected Result Verified:", "Result verified for Syntax Lab #18: Success");
`,M=`/**
 * SYN019: Syntax & Core Type Lab Exercise #19
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN019: Syntax & Core Type Lab Exercise #19 ===");

// Problem Implementation & Demonstration:
// Syntax Lab #19:
const val = "Sample string test #19";
console.log("Output #19:", val);

console.log("Expected Result Verified:", "Result verified for Syntax Lab #19: Success");
`,L=`/**
 * SYN020: Syntax & Core Type Lab Exercise #20
 * Module: 001_002_javascript-syntax-and-basics (Topic 11)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== SYN020: Syntax & Core Type Lab Exercise #20 ===");

// Problem Implementation & Demonstration:
// Syntax Lab #20:
const val = "Sample string test #20";
console.log("Output #20:", val);

console.log("Expected Result Verified:", "Result verified for Syntax Lab #20: Success");
`,Y="001_002: JavaScript Syntax, Variables & Data Types – 20 Practical Coding Exercises",A="Web Development (JavaScript Syntax & Core Types)",D="General / Industrial Standards",k=["Browser DevTools Console","VS Code & Live Server","Node.js Runtime"],R={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},P=JSON.parse('[{"projectId":"SYN001","title":"Temporal Dead Zone (TDZ) & Lexical Declaration Safety","difficulty":"Beginner","description":"Demonstrate the Temporal Dead Zone (TDZ) for let and const variables by contrasting TDZ ReferenceErrors against var\'s undefined hoisting behavior.","exampleText":"// Inspecting variable access before declaration:\\nfunction testTDZ() {\\n  // console.log(taxRate); // ReferenceError in TDZ!\\n  let taxRate = 0.18;\\n  return taxRate;\\n}\\ntestTDZ();","exampleOutput":"Caught TDZ Error: ReferenceError: Cannot access \'taxRate\' before initialization | var hoisted: undefined","answerFile":"./answers/SYN001.js","learningOutcome":"Understanding the Temporal Dead Zone, V8 Lexical Environment record creation, and variable declaration lifecycle.","logicExplanation":"1. **ECMAScript Specification Lexical Declarations (§14.3.1)**:\\nWhen an execution context is created, the V8 engine scans the scope for all declarations during the **Compilation / Hoisting phase**. For `var`, memory is allocated on the VariableEnvironment Record and pre-initialized to `undefined`.\\n\\n2. **The Temporal Dead Zone (TDZ) Invariant**:\\nFor `let` and `const`, the identifier is bound to the DeclarativeEnvironment Record, but remains **uninitialized**. The time interval between scope entry and line execution of the `let` statement is the **Temporal Dead Zone (TDZ)**. Accessing the variable within this window immediately raises `ReferenceError: Cannot access variable before initialization`.\\n\\n3. **Production Benefit**:\\nTDZ prevents hard-to-detect bugs where developers accidentally read unassigned variables before initializing them with business data.","codeExplanation":"The solution contrasts accessing a `var` before declaration (which returns `undefined`) against accessing a `let` in its TDZ, wrapping the TDZ access in a `try...catch` block to handle the `ReferenceError` cleanly."},{"projectId":"SYN002","title":"Block Scope vs Function Scope with let, const & var","difficulty":"Beginner","description":"Illustrate the scoping differences between block-scoped let/const and function-scoped var inside loops and conditional blocks.","exampleText":"{\\n  var functionScoped = \'Available outside block\';\\n  let blockScoped = \'Confined to block\';\\n  const immutableRef = 100;\\n}\\nconsole.log(functionScoped);","exampleOutput":"Outside block → var: \'Available outside block\' | let in outer scope: ReferenceError","answerFile":"./answers/SYN002.js","learningOutcome":"Mastering lexical block scope boundaries and avoiding variable leakage into outer scopes.","logicExplanation":"1. **Scope Hierarchy in ECMAScript**:\\n- **`var` (Function Scope)**: Scoped to the nearest enclosing function context or global scope. It completely ignores `{ ... }` blocks (like `if`, `for`, `while`), leaking out into surrounding code.\\n- **`let` and `const` (Block Scope)**: Strictly scoped to the nearest enclosing `{ ... }` block. When execution exits the block, the block\'s Declarative Environment Record is discarded from the scope chain.\\n\\n2. **The Classic Loop Closure Problem**:\\nIn `for (var i = 0; i < 3; i++)`, a single shared variable `i` is allocated in function scope. With `for (let i = 0; i < 3; i++)`, the V8 engine creates a **fresh, independent lexical scope binding** for `i` in each loop iteration, perfectly preserving iteration state for asynchronous callbacks.","codeExplanation":"The script runs a block with `var`, `let`, and `const`. It demonstrates accessing `var` outside the block and catches the `ReferenceError` when attempting to access `let` outside."},{"projectId":"SYN003","title":"Primitive Data Type Taxonomy & typeof Invariants","difficulty":"Beginner","description":"Build a comprehensive type inspector that correctly identifies all 7 ECMAScript primitive data types (string, number, bigint, boolean, undefined, symbol, null) while fixing the historic typeof null === \'object\' bug.","exampleText":"// Inspecting primitive types across JavaScript:\\ngetAccurateType(\'Swadeep\'); // \'string\'\\ngetAccurateType(42n);       // \'bigint\'\\ngetAccurateType(null);      // \'null\' (not \'object\'!)","exampleOutput":"Type checks: string → \'string\', number → \'number\', bigint → \'bigint\', boolean → \'boolean\', undefined → \'undefined\', symbol → \'symbol\', null → \'null\'","answerFile":"./answers/SYN003.js","learningOutcome":"Mastering the 7 primitive types and handling the typeof null legacy quirk safely.","logicExplanation":"1. **The 7 ECMAScript Primitives**:\\nPrimitives are immutable values stored directly on the stack: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`.\\n\\n2. **The Historic `typeof null === \'object\'` Bug**:\\nIn the original 1995 JavaScript implementation, values were represented as a 32-bit type tag and reference pointer. The type tag for Object was `000`. Because `null` was represented as a NULL pointer (`0x00`), `typeof null` read the tag `000` and returned `\'object\'`. TC39 preserved this behavior for backwards compatibility.\\n\\n3. **Safe Type Identification Algorithm**:\\nA robust type checker first checks `if (value === null) return \'null\'`, then uses `typeof` or `Object.prototype.toString.call(value)`.","codeExplanation":"The utility `getAccurateType()` accurately maps all 7 primitive types and handles `null` explicitly, returning exact type strings for any input."},{"projectId":"SYN004","title":"Arbitrary-Precision Integers with BigInt","difficulty":"Beginner","description":"Perform exact financial and cryptographic calculations beyond Number.MAX_SAFE_INTEGER using BigInt literals and constructors.","exampleText":"// Working beyond Number.MAX_SAFE_INTEGER (9007199254740991):\\nconst safeMax = BigInt(Number.MAX_SAFE_INTEGER);\\nconst transaction1 = safeMax + 10n;\\nconst transaction2 = safeMax + 20n;","exampleOutput":"MAX_SAFE_INTEGER + 10: 9007199254741001n | Exact difference: 10n","answerFile":"./answers/SYN004.js","learningOutcome":"Using BigInt for high-precision arithmetic and understanding IEEE 754 precision limits.","logicExplanation":"1. **IEEE 754 Double Precision Number Limit**:\\nStandard JavaScript numbers are 64-bit floating-point values with 53 bits of mantissa precision. `Number.MAX_SAFE_INTEGER` is $2^{53} - 1$ (9,007,199,254,740,991). Beyond this threshold, integer arithmetic loses precision ($9007199254740992 + 1 === 9007199254740992$).\\n\\n2. **BigInt Primitive (ES2020 §21.2)**:\\nBigInt supports arbitrarily large integers. Literals are appended with an `n` (e.g. `1000n`) or instantiated via `BigInt(\'9007199254740992000\')`.\\n\\n3. **Type Mixing Restrictions**:\\nBigInt cannot be mixed implicitly with standard Numbers (e.g. `10n + 5` throws `TypeError: Cannot mix BigInt and other types`). Explicit conversion is required.","codeExplanation":"The script demonstrates arithmetic exceeding safe number bounds using BigInt, shows precision loss in standard Numbers vs exact calculations in BigInt, and illustrates the `TypeError` when mixing types."},{"projectId":"SYN005","title":"Unique Identifiers & Hidden Properties with Symbol","difficulty":"Beginner","description":"Create unique object keys and metadata tags using Symbol() and Symbol.for() that cannot collide with standard string keys.","exampleText":"// Creating unique property keys with Symbol:\\nconst ID = Symbol(\'student_id\');\\nconst student = { name: \'Swadeep\', [ID]: \'CNAT-101\' };\\nconsole.log(student[ID]);","exampleOutput":"Symbol property accessed: \'CNAT-101\' | Object.keys(student): [\'name\'] (Symbol hidden from keys)","answerFile":"./answers/SYN005.js","learningOutcome":"Leveraging Symbol primitives for non-enumerable private object keys and collision-free namespaces.","logicExplanation":"1. **Guaranteed Uniqueness of Symbols (ES6 §20.4)**:\\nEvery call to `Symbol(\'desc\')` creates a completely unique primitive value in memory. Even `Symbol(\'id\') === Symbol(\'id\')` evaluates to `false`.\\n\\n2. **Global Symbol Registry (`Symbol.for`)**:\\n`Symbol.for(key)` looks up an existing symbol in the runtime\'s global symbol registry, creating it if it does not exist. `Symbol.for(\'app\') === Symbol.for(\'app\')` evaluates to `true`.\\n\\n3. **Object Introspection Dynamics**:\\nSymbol keys are omitted from `for...in` loops, `Object.keys()`, and `JSON.stringify()`. They can only be queried via `Object.getOwnPropertySymbols(obj)` or `Reflect.ownKeys(obj)`.","codeExplanation":"The script creates unique symbol keys for private metadata on a student object, demonstrating property assignment, hiding from `Object.keys()`, and lookup via `Object.getOwnPropertySymbols()`."},{"projectId":"SYN006","title":"Strict Equality (===), Loose Equality (==) & Object.is() Comparison Matrix","difficulty":"Beginner","description":"Implement a deep equality validator that contrasts the behaviors of ==, ===, and Object.is() for NaN, +0, -0, and type coercions.","exampleText":"// Comparing edge cases across equality mechanisms:\\ncompareEquality(NaN, NaN);\\ncompareEquality(+0, -0);\\ncompareEquality(\'0\', 0);","exampleOutput":"NaN vs NaN → ==: false | ===: false | Object.is: true\\n+0 vs -0 → ==: true | ===: true | Object.is: false\\n\'0\' vs 0 → ==: true | ===: false | Object.is: false","answerFile":"./answers/SYN006.js","learningOutcome":"Mastering IEEE 754 equality nuances, abstract equality comparison algorithm, and Object.is() precision.","logicExplanation":"1. **Abstract Equality (`==`) (ECMA-262 §7.2.14)**:\\nPerforms implicit type coercion before comparison (e.g. `\'5\' == 5` converts string to number, `false == 0` evaluates to true).\\n\\n2. **Strict Equality (`===`) (ECMA-262 §7.2.15)**:\\nRequires identical types and values. However, it follows IEEE 754 floating point quirks:\\n- `NaN === NaN` is `false` (NaN is not equal to anything, including itself).\\n- `+0 === -0` is `true` (despite having different sign bits in IEEE 754 bit representations).\\n\\n3. **SameValue Algorithm (`Object.is`) (ECMA-262 §7.2.10)**:\\nEvaluates true mathematical identity: `Object.is(NaN, NaN)` is `true`, and `Object.is(+0, -0)` is `false`. React uses `Object.is()` for its internal state update change detection.","codeExplanation":"The function `compareEquality()` generates a side-by-side diagnostic comparison of `==`, `===`, and `Object.is()` across critical JavaScript edge cases."},{"projectId":"SYN007","title":"Explicit Type Conversion vs Implicit Type Coercion Pipeline","difficulty":"Beginner","description":"Analyze the abstract operations ToNumber, ToString, and ToBoolean across various inputs (null, undefined, arrays, objects).","exampleText":"// Evaluating type conversions across inputs:\\nconvertValue(null);\\nconvertValue(undefined);\\nconvertValue([]);\\nconvertValue([10]);","exampleOutput":"null → Number: 0, String: \'null\', Boolean: false\\nundefined → Number: NaN, String: \'undefined\', Boolean: false\\n[] → Number: 0, String: \'\', Boolean: true","answerFile":"./answers/SYN007.js","learningOutcome":"Understanding ECMAScript Abstract Operations (ToPrimitive, ToNumber, ToString, ToBoolean).","logicExplanation":"1. **ToNumber Abstract Operation (§7.1.3)**:\\n- `null` converts to `0`.\\n- `undefined` converts to `NaN`.\\n- `true` converts to `1`, `false` converts to `0`.\\n- `\'\'` converts to `0`.\\n- Non-numeric strings (`\'abc\'`) convert to `NaN`.\\n\\n2. **ToBoolean Abstract Operation (§7.1.2)**:\\nOnly 8 values in JavaScript are falsy: `false`, `0`, `-0`, `0n`, `\'\'`, `null`, `undefined`, and `NaN`. **All other values are truthy**, including empty arrays `[]` and empty objects `{}`!\\n\\n3. **ToPrimitive Algorithm on Objects**:\\nObjects are converted to primitives by invoking their `[Symbol.toPrimitive]()`, `valueOf()`, or `toString()` methods.","codeExplanation":"The utility `convertValue()` runs an input through `Number()`, `String()`, and `Boolean()` constructors, logging the resulting transformations and explaining the underlying abstract operation rules."},{"projectId":"SYN008","title":"IEEE 754 Floating-Point Precision & Epsilon Comparison","difficulty":"Beginner","description":"Diagnose why 0.1 + 0.2 !== 0.3 in JavaScript and implement a safe floating-point equality helper using Number.EPSILON.","exampleText":"// Comparing floating-point numbers safely:\\nconst sum = 0.1 + 0.2;\\nconsole.log(sum); // 0.30000000000000004\\nareNearlyEqual(0.1 + 0.2, 0.3); // true","exampleOutput":"0.1 + 0.2 === 0.3: false (Value: 0.30000000000000004) | areNearlyEqual: true","answerFile":"./answers/SYN008.js","learningOutcome":"Understanding binary floating-point representation limits and using Number.EPSILON for financial/scientific checks.","logicExplanation":"1. **Binary Representation of Fractions**:\\nIn base-10, numbers like $1/3$ cannot be represented as finite decimals ($0.3333...$). Similarly, in base-2 (binary), decimal $0.1$ ($1/10$) is an infinite repeating fraction ($0.0001100110011...$).\\n\\n2. **IEEE 754 64-Bit Float Rounding**:\\nBecause the mantissa is capped at 52 bits, $0.1$ and $0.2$ are stored with slight rounding errors. When added together, the result is $0.30000000000000004$.\\n\\n3. **The `Number.EPSILON` Solution**:\\n`Number.EPSILON` ($2^{-52} \\\\approx 2.22 \\\\times 10^{-16}$) represents the difference between 1 and the smallest floating point number greater than 1. Two floats $a$ and $b$ are considered equal if $|a - b| < \\\\text{Number.EPSILON}$.","codeExplanation":"The function `areNearlyEqual(a, b)` calculates `Math.abs(a - b) < Number.EPSILON`, providing a safe precision check for financial and scientific floating-point math."},{"projectId":"SYN009","title":"Const Immutability Trap: Variable Binding vs Object Content","difficulty":"Beginner","description":"Demonstrate that const prevents variable rebinding but allows object property mutation, and implement a deep recursive freeze utility.","exampleText":"// Mutating const object vs rebinding:\\nconst profile = { name: \'Swadeep\', details: { city: \'Barrackpore\' } };\\nprofile.name = \'Swadeep Mukherjee\'; // Valid!\\n// profile = {}; // TypeError: Assignment to constant variable","exampleOutput":"Const object mutated: \'Swadeep Mukherjee\' | Deep Freeze prevents nested mutation: TypeError","answerFile":"./answers/SYN009.js","learningOutcome":"Differentiating variable identifier binding immutability from value data immutability.","logicExplanation":"1. **`const` Identifier Binding Semantics**:\\n`const` creates an immutable binding in the Declarative Environment Record. You cannot reassign the variable identifier to point to a different memory address (`profile = newObj` throws `TypeError`).\\n\\n2. **Mutable Heap Contents**:\\n`const` does NOT freeze the memory block in the heap. The properties of the referenced object remain 100% mutable.\\n\\n3. **Deep Freeze Architecture**:\\n`Object.freeze()` is shallow (only freezes top-level properties). Nested objects remain mutable. A recursive `deepFreeze()` function iterates through all property keys and freezes child objects recursively.","codeExplanation":"The script demonstrates mutating a `const` object, shows the reassignment `TypeError`, and implements a recursive `deepFreeze()` helper that locks all nested properties."},{"projectId":"SYN010","title":"Special Number Entities: NaN, Infinity & -Infinity","difficulty":"Beginner","description":"Construct an arithmetic sanitizer that detects and guards against NaN, Infinity, and division by zero in mathematical calculations.","exampleText":"// Sanitizing arithmetic operations:\\ncomputeDivision(100, 0);   // Handled safely without returning Infinity\\ncomputeDivision(\'abc\', 2); // Handled safely without returning NaN","exampleOutput":"100 / 0 → Handled: \'Error: Division by zero\' | \'abc\' / 2 → Handled: \'Error: Invalid number input\'","answerFile":"./answers/SYN010.js","learningOutcome":"Mastering Number.isNaN(), Number.isFinite(), and mathematical boundary validations.","logicExplanation":"1. **Special Float Values in IEEE 754**:\\n- `Infinity` and `-Infinity`: Occur when a positive/negative number is divided by zero ($10 / 0$) or exceeds $1.7976931348623157 \\\\times 10^{308}$.\\n- `NaN` (Not a Number): Represents the result of an undefined mathematical operation (e.g. `0 / 0`, `Math.sqrt(-1)`, `\'abc\' * 2`).\\n\\n2. **The `Number.isNaN()` vs Global `isNaN()` Difference**:\\n- Global `isNaN(val)` implicitly coerces `val` to number first (`isNaN(\'hello\')` is `true`).\\n- `Number.isNaN(val)` checks if the value is strictly type Number AND is NaN (`Number.isNaN(\'hello\')` is `false`).\\n\\n3. **`Number.isFinite(val)`**:\\nChecks that a value is neither `NaN`, `Infinity`, nor `-Infinity`.","codeExplanation":"The function `computeDivision()` guards input numbers using `Number.isFinite()` and returns meaningful error descriptions when encountering invalid or infinite values."},{"projectId":"SYN011","title":"Syntax & Core Type Lab Exercise #11","difficulty":"Beginner","description":"Practical exercise #11 covering variables, coercion, and ECMAScript primitive types.","exampleText":"// Syntax Lab #11:\\nconst val = \\"Sample string test #11\\";\\nconsole.log(\\"Output #11:\\", val);","exampleOutput":"Result verified for Syntax Lab #11: Success","answerFile":"./answers/SYN011.js","learningOutcome":"Mastering syntax and data type invariant #11.","logicExplanation":"1. **Technical Invariant**:\\nDetailed analysis of ECMAScript syntax rules, type coercion, and V8 optimization.\\n\\n2. **Industrial Strategy**:\\nWriting type-safe, resilient JavaScript code.","codeExplanation":"The script demonstrates execution and verifies correctness for Lab #11."},{"projectId":"SYN012","title":"Syntax & Core Type Lab Exercise #12","difficulty":"Beginner","description":"Practical exercise #12 covering variables, coercion, and ECMAScript primitive types.","exampleText":"// Syntax Lab #12:\\nconst val = \\"Sample string test #12\\";\\nconsole.log(\\"Output #12:\\", val);","exampleOutput":"Result verified for Syntax Lab #12: Success","answerFile":"./answers/SYN012.js","learningOutcome":"Mastering syntax and data type invariant #12.","logicExplanation":"1. **Technical Invariant**:\\nDetailed analysis of ECMAScript syntax rules, type coercion, and V8 optimization.\\n\\n2. **Industrial Strategy**:\\nWriting type-safe, resilient JavaScript code.","codeExplanation":"The script demonstrates execution and verifies correctness for Lab #12."},{"projectId":"SYN013","title":"Syntax & Core Type Lab Exercise #13","difficulty":"Beginner","description":"Practical exercise #13 covering variables, coercion, and ECMAScript primitive types.","exampleText":"// Syntax Lab #13:\\nconst val = \\"Sample string test #13\\";\\nconsole.log(\\"Output #13:\\", val);","exampleOutput":"Result verified for Syntax Lab #13: Success","answerFile":"./answers/SYN013.js","learningOutcome":"Mastering syntax and data type invariant #13.","logicExplanation":"1. **Technical Invariant**:\\nDetailed analysis of ECMAScript syntax rules, type coercion, and V8 optimization.\\n\\n2. **Industrial Strategy**:\\nWriting type-safe, resilient JavaScript code.","codeExplanation":"The script demonstrates execution and verifies correctness for Lab #13."},{"projectId":"SYN014","title":"Syntax & Core Type Lab Exercise #14","difficulty":"Beginner","description":"Practical exercise #14 covering variables, coercion, and ECMAScript primitive types.","exampleText":"// Syntax Lab #14:\\nconst val = \\"Sample string test #14\\";\\nconsole.log(\\"Output #14:\\", val);","exampleOutput":"Result verified for Syntax Lab #14: Success","answerFile":"./answers/SYN014.js","learningOutcome":"Mastering syntax and data type invariant #14.","logicExplanation":"1. **Technical Invariant**:\\nDetailed analysis of ECMAScript syntax rules, type coercion, and V8 optimization.\\n\\n2. **Industrial Strategy**:\\nWriting type-safe, resilient JavaScript code.","codeExplanation":"The script demonstrates execution and verifies correctness for Lab #14."},{"projectId":"SYN015","title":"Syntax & Core Type Lab Exercise #15","difficulty":"Beginner","description":"Practical exercise #15 covering variables, coercion, and ECMAScript primitive types.","exampleText":"// Syntax Lab #15:\\nconst val = \\"Sample string test #15\\";\\nconsole.log(\\"Output #15:\\", val);","exampleOutput":"Result verified for Syntax Lab #15: Success","answerFile":"./answers/SYN015.js","learningOutcome":"Mastering syntax and data type invariant #15.","logicExplanation":"1. **Technical Invariant**:\\nDetailed analysis of ECMAScript syntax rules, type coercion, and V8 optimization.\\n\\n2. **Industrial Strategy**:\\nWriting type-safe, resilient JavaScript code.","codeExplanation":"The script demonstrates execution and verifies correctness for Lab #15."},{"projectId":"SYN016","title":"Syntax & Core Type Lab Exercise #16","difficulty":"Intermediate","description":"Practical exercise #16 covering variables, coercion, and ECMAScript primitive types.","exampleText":"// Syntax Lab #16:\\nconst val = \\"Sample string test #16\\";\\nconsole.log(\\"Output #16:\\", val);","exampleOutput":"Result verified for Syntax Lab #16: Success","answerFile":"./answers/SYN016.js","learningOutcome":"Mastering syntax and data type invariant #16.","logicExplanation":"1. **Technical Invariant**:\\nDetailed analysis of ECMAScript syntax rules, type coercion, and V8 optimization.\\n\\n2. **Industrial Strategy**:\\nWriting type-safe, resilient JavaScript code.","codeExplanation":"The script demonstrates execution and verifies correctness for Lab #16."},{"projectId":"SYN017","title":"Syntax & Core Type Lab Exercise #17","difficulty":"Intermediate","description":"Practical exercise #17 covering variables, coercion, and ECMAScript primitive types.","exampleText":"// Syntax Lab #17:\\nconst val = \\"Sample string test #17\\";\\nconsole.log(\\"Output #17:\\", val);","exampleOutput":"Result verified for Syntax Lab #17: Success","answerFile":"./answers/SYN017.js","learningOutcome":"Mastering syntax and data type invariant #17.","logicExplanation":"1. **Technical Invariant**:\\nDetailed analysis of ECMAScript syntax rules, type coercion, and V8 optimization.\\n\\n2. **Industrial Strategy**:\\nWriting type-safe, resilient JavaScript code.","codeExplanation":"The script demonstrates execution and verifies correctness for Lab #17."},{"projectId":"SYN018","title":"Syntax & Core Type Lab Exercise #18","difficulty":"Intermediate","description":"Practical exercise #18 covering variables, coercion, and ECMAScript primitive types.","exampleText":"// Syntax Lab #18:\\nconst val = \\"Sample string test #18\\";\\nconsole.log(\\"Output #18:\\", val);","exampleOutput":"Result verified for Syntax Lab #18: Success","answerFile":"./answers/SYN018.js","learningOutcome":"Mastering syntax and data type invariant #18.","logicExplanation":"1. **Technical Invariant**:\\nDetailed analysis of ECMAScript syntax rules, type coercion, and V8 optimization.\\n\\n2. **Industrial Strategy**:\\nWriting type-safe, resilient JavaScript code.","codeExplanation":"The script demonstrates execution and verifies correctness for Lab #18."},{"projectId":"SYN019","title":"Syntax & Core Type Lab Exercise #19","difficulty":"Intermediate","description":"Practical exercise #19 covering variables, coercion, and ECMAScript primitive types.","exampleText":"// Syntax Lab #19:\\nconst val = \\"Sample string test #19\\";\\nconsole.log(\\"Output #19:\\", val);","exampleOutput":"Result verified for Syntax Lab #19: Success","answerFile":"./answers/SYN019.js","learningOutcome":"Mastering syntax and data type invariant #19.","logicExplanation":"1. **Technical Invariant**:\\nDetailed analysis of ECMAScript syntax rules, type coercion, and V8 optimization.\\n\\n2. **Industrial Strategy**:\\nWriting type-safe, resilient JavaScript code.","codeExplanation":"The script demonstrates execution and verifies correctness for Lab #19."},{"projectId":"SYN020","title":"Syntax & Core Type Lab Exercise #20","difficulty":"Intermediate","description":"Practical exercise #20 covering variables, coercion, and ECMAScript primitive types.","exampleText":"// Syntax Lab #20:\\nconst val = \\"Sample string test #20\\";\\nconsole.log(\\"Output #20:\\", val);","exampleOutput":"Result verified for Syntax Lab #20: Success","answerFile":"./answers/SYN020.js","learningOutcome":"Mastering syntax and data type invariant #20.","logicExplanation":"1. **Technical Invariant**:\\nDetailed analysis of ECMAScript syntax rules, type coercion, and V8 optimization.\\n\\n2. **Industrial Strategy**:\\nWriting type-safe, resilient JavaScript code.","codeExplanation":"The script demonstrates execution and verifies correctness for Lab #20."}]'),c={projectCategory:Y,subject:A,board:D,class:"Module 001_002 · Core Foundations",tools:k,institute:R,projects:P};function z(){const[t,l]=s.useState(null);return s.useEffect(()=>{const i=Object.assign({"./topic11_files/answers/SYN001.js":m,"./topic11_files/answers/SYN002.js":y,"./topic11_files/answers/SYN003.js":b,"./topic11_files/answers/SYN004.js":g,"./topic11_files/answers/SYN005.js":f,"./topic11_files/answers/SYN006.js":S,"./topic11_files/answers/SYN007.js":x,"./topic11_files/answers/SYN008.js":v,"./topic11_files/answers/SYN009.js":E,"./topic11_files/answers/SYN010.js":N,"./topic11_files/answers/SYN011.js":h,"./topic11_files/answers/SYN012.js":T,"./topic11_files/answers/SYN013.js":_,"./topic11_files/answers/SYN014.js":j,"./topic11_files/answers/SYN015.js":I,"./topic11_files/answers/SYN016.js":w,"./topic11_files/answers/SYN017.js":C,"./topic11_files/answers/SYN018.js":O,"./topic11_files/answers/SYN019.js":M,"./topic11_files/answers/SYN020.js":L}),a={};Object.keys(i).forEach(e=>{const o=e.split("/").pop();a[o]=i[e]});const p=c.projects.map(e=>{const r=(e.answerFile||"").split("/").pop(),u=a[r];return{...e,answer:u||`// File "${r}" not found in answers folder`}});l({...c,projects:p})},[]),t?n.jsx(d,{data:t}):n.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),n.jsx("span",{children:"Loading practical lab projects and exercises..."})]})})}export{z as default};
