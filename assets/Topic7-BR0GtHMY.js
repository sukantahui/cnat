import{b as a,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import{F as l}from"./FAQTemplate-BHhlgA96.js";import{P as c}from"./PlainTextPrint-C08xhKA4.js";import{J as d}from"./JavaScriptEditableCodeBlock-bI1LXt9p.js";import"./vendor-icons-DEsnU7fn.js";import"./vendor-monaco-Bv7hoEkV.js";const m=[{question:"What is Automatic Semicolon Insertion (ASI) in JavaScript?",shortAnswer:"A grammar parser feature where the engine automatically inserts semicolons at certain line breaks if omitted.",explanation:"ASI allows developers to omit semicolons in most statements. However, strict rules dictate where semicolons are inserted and where omitting them causes syntax bugs.",hint:"Parser automatically inserts virtual semicolons at statement boundaries.",level:"basic",codeExample:`let a = 10
let b = 20
// ASI inserts ';' at end of each line`},{question:"Why does placing an object literal on a new line after 'return' return undefined?",shortAnswer:"'return' is a restricted production; ASI immediately inserts a semicolon after 'return', returning undefined.",explanation:`The engine interprets 'return
{ a: 1 }' as 'return; { a: 1 };', exiting the function before evaluating the object literal.`,hint:"Newline after return triggers automatic semicolon insertion.",level:"intermediate",codeExample:`function test() {
  return // ASI inserts ';' here!
  { name: 'Swadeep' };
}
console.log(test()); // undefined`},{question:"What are Restricted Productions in the ECMAScript specification?",shortAnswer:"Grammar rules where no LineTerminator (newline) is permitted between the keyword and its following expression.",explanation:"Includes return, throw, break, continue, yield, and postfix ++/-- operators. If a newline appears, ASI inserts a semicolon immediately.",hint:"return, throw, break, continue, yield, postfix ++/--.",level:"advanced",codeExample:`// 'throw
 new Error()' → SyntaxError because ASI inserts ';' after throw`},{question:"What happens when a statement starting with '(' or '[' follows a line without a semicolon?",shortAnswer:"ASI does NOT insert a semicolon; the engine treats it as a function call or array index on the previous value.",explanation:`Writing 'const x = 5
(function() {})()' evaluates to '5(...)', throwing 'TypeError: 5 is not a function'.`,hint:"Leading '(' or '[' attaches to the previous line as a function call or bracket access.",level:"intermediate",codeExample:`const a = 42;
// Without semicolon: 42(function(){}) throws TypeError`},{question:"What is the defensive semicolon pattern in JavaScript?",shortAnswer:"Prefixing an IIFE or array literal with a semicolon (e.g. ;(function() {})()) to prevent concatenation collisions.",explanation:"Defensive semicolons protect standalone modules from attaching to un-semicoloned preceding lines when files are concatenated.",hint:"Leading ';' before IIFE: ;(function() { ... })();",level:"intermediate",codeExample:`;(function() {
  console.log('Safe from preceding script collisions');
})();`},{question:"What are the rules for valid JavaScript identifier names?",shortAnswer:"Must start with a Unicode letter, $, or _; subsequent characters can include letters, digits, $, and _.",explanation:"Identifiers cannot start with numbers and cannot match reserved keywords like 'class', 'function', 'return', or 'const'.",hint:"Starts with letter, $, or _; followed by letters, digits, $, _.",level:"basic",codeExample:`const $price = 100;
const _privateKey = 'xyz';
const student1 = 'Tuhina';`},{question:"What is JSDoc and how does it enhance JavaScript development?",shortAnswer:"A standardized markup comment format (/** ... */) providing TypeScript-like type checking and IDE IntelliSense.",explanation:"JSDoc annotations (@param, @returns, @type, @typedef) allow editors like VS Code to show autocompletion and catch type errors in plain JS files.",hint:"/** @param {string} name */ comments providing IDE type safety.",level:"basic",codeExample:`/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) { return a + b; }`},{question:"What are Numeric Separators (ES2021) in JavaScript numbers?",shortAnswer:"Using underscores (_) inside numeric literals to improve visual readability without changing their numeric value.",explanation:"1_000_000 is identical to 1000000. It can be used in decimal, binary (0b1010_0001), hex (0xFF_00_AA), and BigInt (1_000_000n).",hint:"Underscores in numbers: 1_000_000.",level:"basic",codeExample:"const budget = 5_00_000; // 5 Lakhs INR"},{question:"How does JavaScript treat single-line and multi-line comments?",shortAnswer:"// for single-line comments; /* ... */ for multi-line comments; both are stripped by the engine during tokenization.",explanation:"Comments have zero runtime cost in memory or execution speed, as the tokenizer discards them before bytecode compilation.",hint:"// and /* ... */ are discarded during lexical scanning.",level:"basic",codeExample:`// Single line
/* Multi-line comment */`},{question:"Can multi-line comments (/* ... */) be nested inside each other in JavaScript?",shortAnswer:"No, nesting multi-line comments throws a SyntaxError because the first */ closes the entire comment block.",explanation:"/* outer /* inner */ outer */ will fail because the first */ terminates the comment, leaving the trailing 'outer */' as invalid syntax.",hint:"Nested /* ... */ comments are illegal in JavaScript syntax.",level:"intermediate",codeExample:"/* Outer comment /* Inner comment */ Still comment? NO → SyntaxError */"},{question:"What are Contextual Keywords in JavaScript?",shortAnswer:"Words like 'async', 'await', 'get', 'set', and 'of' that act as keywords only in specific syntactic contexts.",explanation:"Outside an async function, 'await' can be used as a variable name in sloppy mode, but inside an async function or module it is a reserved keyword.",hint:"Keywords only in specific syntax contexts (e.g. async/await, get/set).",level:"advanced",codeExample:"const get = 'Allowed as variable name in non-accessor context';"},{question:"How does JavaScript handle whitespace and line breaks in expressions?",shortAnswer:"Whitespace, tabs, and newlines are generally ignored between tokens, allowing flexible multi-line formatting.",explanation:"Except in strings and Restricted Productions, developers can split binary operators, array elements, and chained methods across lines.",hint:"Whitespace is ignored between tokens except around ASI restricted keywords.",level:"basic",codeExample:`const total = 10 +
  20 +
  30; // 60 (Valid multi-line expression)`},{question:"What is the difference between Semicolon (Semicolon-Required) and Semicolon-Less styles?",shortAnswer:"Semicolon style uses explicit semicolons everywhere; Semicolon-less relies on ASI and uses defensive semicolons for leading '(' or '['.",explanation:"StandardJS advocates for semicolon-less, while Prettier defaults to explicit semicolons to eliminate all ASI edge-case ambiguities.",hint:"Prettier default uses semicolons; StandardJS omits semicolons with defensive rules.",level:"intermediate",codeExample:"// Prettier default: const a = 1; (Explicit semicolon)"},{question:"How does postfix ++ interact with ASI on a new line?",shortAnswer:`Writing 'x
++' parses as 'x;' followed by '++' (SyntaxError) because postfix ++ forbids a preceding newline.`,explanation:"The postfix ++ operator cannot have a LineTerminator between the identifier and ++. Prefix ++ on next line (++x) is valid.",hint:"Postfix ++ cannot be separated from variable by a newline.",level:"expert",codeExample:`// x
// ++ → ASI inserts ';' making it: x; ++ (SyntaxError)`},{question:"What are Shebang / Hashbang (#!) comments in JavaScript (ES2023)?",shortAnswer:"A leading '#!/usr/bin/env node' comment on line 1 directing Unix operating systems to execute the script with Node.js.",explanation:"Standardized in ECMAScript 2023, JS engines now officially ignore hashbang lines at the very beginning of files as valid comments.",hint:"#!/usr/bin/env node on line 1 for CLI executables.",level:"intermediate",codeExample:`#!/usr/bin/env node
console.log('CLI Executable');`},{question:"What is the tokenization phase in the JavaScript compilation pipeline?",shortAnswer:"The first phase where the Lexer scans raw source characters and breaks them into discrete syntactic tokens.",explanation:"Tokens (Identifiers, Keywords, Numbers, Strings, Punctuators) are then passed to the Parser to construct the Abstract Syntax Tree (AST).",hint:"Source Code → Lexer (Tokens) → Parser (AST) → Bytecode.",level:"advanced",codeExample:"// 'let x = 10' → [KEYWORD: let, IDENTIFIER: x, PUNCTUATOR: =, NUMBER: 10]"},{question:"What is an Abstract Syntax Tree (AST)?",shortAnswer:"A tree representation of the syntactic structure of source code used by compilers, Babel, and ESLint.",explanation:"AST nodes represent variable declarations, expressions, loops, and function definitions, allowing linters and transpilers to analyze and transform code.",hint:"Tree data structure representing code syntax hierarchy.",level:"advanced",codeExample:"// ESLint and Babel traverse AST nodes to detect errors and transpile JSX"},{question:"Can variable names in JavaScript include emojis?",shortAnswer:"No, emojis are not classified as valid Unicode ID_Start or ID_Continue characters in ECMAScript grammar.",explanation:"While non-Latin Unicode characters (e.g. Bengali, Greek, Chinese) are valid, emojis belong to symbols and cause SyntaxError as identifiers.",hint:"Emojis are symbols, not valid identifier characters.",level:"intermediate",codeExample:"// const 🚀 = 'rocket'; // SyntaxError: Invalid or unexpected token"},{question:"What is the difference between single quotes, double quotes, and template literals for strings?",shortAnswer:"Single and double quotes create standard strings; template literals (`...`) allow multi-line strings and interpolation (${...}).",explanation:`Template literals evaluate embedded expressions at runtime and preserve physical newlines without needing 
 escape sequences.`,hint:"Template literals (`...`) support ${} interpolation and multi-line formatting.",level:"basic",codeExample:"const name = 'Swadeep';\nconsole.log(`Hello ${name}!`);"},{question:"What happens if a regex literal follows a division operator on adjacent lines without semicolons?",shortAnswer:"The engine may parse the regex slash as another division operator, causing a syntax or runtime calculation error.",explanation:"Because '/' is overloaded for both division and regular expressions, explicit semicolons prevent ambiguous token parsing.",hint:"Semicolons disambiguate division from regular expression literals.",level:"expert",codeExample:`const x = 10 / 2;
const reg = /test/g;`},{question:"What is the JSDoc @param and @returns tag format?",shortAnswer:"@param {Type} name - description, and @returns {Type} description.",explanation:"Standard tags used to document function inputs and output contracts, enabling type validation in IDEs without compilation.",hint:"@param {Type} and @returns {Type}.",level:"basic",codeExample:"/** @param {string} id @returns {boolean} */"},{question:"What is JSDoc @deprecated tag used for?",shortAnswer:"Marks a function or property as obsolete, causing IDEs to display strikethrough warnings on its usages.",explanation:"Alerts team members that a method will be removed in future releases and points them to modern alternative APIs.",hint:"@deprecated tag renders strikethrough in VS Code.",level:"basic",codeExample:`/** @deprecated Use fetchStudentV2() instead */
function fetchStudentOld() {}`},{question:"What are Zero-Width Spaces and why can they cause invisible JavaScript syntax errors?",shortAnswer:"Invisible Unicode characters (e.g. ​) copied from web pages that cause mysterious SyntaxErrors in JavaScript code.",explanation:"Because they look identical to regular empty space in editors, they trigger 'Unexpected token' errors until stripped by a linter or hex viewer.",hint:"Invisible Unicode space characters copied from websites causing parse errors.",level:"expert",codeExample:"// VS Code highlights invisible non-breaking characters with red boxes"},{question:"What is the recommended Prettier / ESLint rule for semicolons in enterprise teams?",shortAnswer:"Configure 'semi: true' in Prettier to enforce explicit semicolons and eliminate all ASI ambiguity.",explanation:"Explicit semicolons ensure deterministic code execution regardless of code formatting changes or build tool bundler concatenations.",hint:"Configure Prettier 'semi: true' for safe deterministic builds.",level:"basic",codeExample:'{\\n  \\"semi\\": true,\\n  \\"singleQuote\\": true\\n}'},{question:"What is the core takeaway regarding JavaScript Lexical Grammar for professional engineers?",shortAnswer:"Understanding how the lexer tokenizes code and how ASI functions prevents subtle runtime bugs and ensures clean, readable architectures.",explanation:"Knowing restricted productions and using automated formatters (Prettier) allows developers to write robust, maintainable code effortlessly.",hint:"Master ASI rules, write explicit semicolons, and leverage JSDoc for bulletproof code.",level:"basic",codeExample:"// Writing clean, unambiguous code is the hallmark of a Senior Engineer"}],x=`================================================================================\r
CODER & ACCOTAX - JAVASCRIPT COMPLETE ROADMAP\r
MODULE [001_001_getting-started-with-javascript]: Getting Started with JavaScript\r
TOPIC [7]: JavaScript Lexical Grammar, Comments, Whitespace & ASI\r
Educator: Sukanta Hui | Barrackpore, West Bengal, India\r
================================================================================\r
\r
1. TOPIC OVERVIEW & DETAILED CONCEPT DISCUSSION\r
--------------------------------------------------------------------------------\r
- What is Lexical Grammar?\r
  Lexical grammar defines the basic set of rules that the JavaScript engine's Lexer / Scanner \r
  uses to transform raw source characters into meaningful tokens (Identifiers, Keywords, \r
  Literals, Punctuators, and Comments).\r
- Key Lexical Elements:\r
  1. Identifiers: Must start with a Unicode letter, '$', or '_', followed by letters, digits, \r
     '$', or '_'. Cannot be reserved keywords (e.g. class, return, const).\r
  2. Whitespace: Spaces, tabs, and newlines separate tokens and are mostly ignored by the parser \r
     (except where Automatic Semicolon Insertion applies).\r
  3. Comments: Single-line (//) and Multi-line (/* ... */) comments ignored at runtime.\r
  4. JSDoc: Standardized block comments (/** ... */) providing TypeScript-like type checking \r
     and rich editor IntelliSense.\r
\r
2. IN-DEPTH TECHNICAL KNOW-HOW & ENGINE RUNTIME MECHANICS\r
--------------------------------------------------------------------------------\r
- Automatic Semicolon Insertion (ASI) Rules:\r
  JavaScript automatically inserts semicolons at specific line endings during parsing when:\r
  1. The next token is an unexpected token or closing brace (}).\r
  2. The parser encounters a Restricted Production where a newline is forbidden:\r
     - return [no LineTerminator] Expression;\r
     - throw [no LineTerminator] Expression;\r
     - break [no LineTerminator] Label;\r
     - continue [no LineTerminator] Label;\r
     - yield [no LineTerminator] Expression;\r
     - Postfix ++ and -- operators.\r
- When ASI FAILS (The Leading Token Trap):\r
  If a line begins with (, [, +, -, /, or template literals, the engine does NOT insert a semicolon \r
  before it. It assumes the previous line was a function call or property lookup!\r
\r
3. EXCEPTIONS, CORNER CASES, COERCIONS & QUIRKS\r
--------------------------------------------------------------------------------\r
[!] The Return Object Trap:\r
    return\r
    { id: 101 };\r
    → Parsed as 'return;' followed by an isolated block. Returns undefined!\r
    Fix: Place opening brace on same line: return { id: 101 };\r
[!] Leading Parenthesis TypeError:\r
    const a = 1\r
    (function() {})()\r
    → Parsed as: const a = 1(function() {})(); → Throws TypeError: 1 is not a function!\r
[!] Regex Division Ambiguity: A slash '/' can represent division or a RegExp literal. \r
    Whitespace and semicolons resolve ambiguity.\r
\r
4. 💎 SPECIAL LANGUAGE FEATURES & SENIOR PRO SECRETS\r
--------------------------------------------------------------------------------\r
- Leading Semicolon Defensive Pattern: When authoring standalone IIFEs in un-semicoloned \r
  codebases, prefix with a defensive semicolon: ;(function() { ... })(); to prevent collisions.\r
- JSDoc @typedef and @type Annotations: Gain complete TypeScript type-checking, code completions, \r
  and parameter safety in pure vanilla .js files without needing a TypeScript compiler build step!\r
- Numeric Separators (ES2021): Use underscores in numbers for readability: const fee = 1_000_000;.\r
\r
5. PRACTICAL ENTERPRISE USE-CASES & CODE EXAMPLES\r
--------------------------------------------------------------------------------\r
Example 1: Safe Object Return Syntax\r
// ✓ ALWAYS keep opening brace on the same line as return\r
function createStudent(name, roll) {\r
  return {\r
    name,\r
    roll,\r
    verified: true\r
  };\r
}\r
\r
Example 2: Defensive Semicolon with IIFE\r
// Leading semicolon prevents collision with previous statement\r
;(function() {\r
  const localAppSecret = "Barrackpore_Key";\r
  console.log("Safe IIFE executed");\r
})();\r
\r
Example 3: Rich JSDoc Type Annotations\r
/**\r
 * @typedef {Object} CourseConfig\r
 * @property {string} title\r
 * @property {number} price\r
 */\r
\r
/** @type {CourseConfig} */\r
const jsCourse = {\r
  title: "JavaScript Professional Masterclass",\r
  price: 4999\r
};\r
\r
Example 4: Unicode Identifiers in Modern JS\r
const ₹_price = 1500;\r
const π = Math.PI;\r
\r
Example 5: Numeric Separator Readability\r
const ONE_LAKH_RUPEES = 1_00_000;\r
const MAX_BUFFER_SIZE = 16_777_216; // 16 MB\r
\r
6. COMPARATIVE SPECIFICATION CHEAT-SHEET\r
--------------------------------------------------------------------------------\r
+----------------------+--------------------+---------------------+--------------------+\r
| Statement Structure  | Newline Following  | ASI Applied?        | Resulting Output   |\r
+----------------------+--------------------+---------------------+--------------------+\r
| return               | { object: true }   | YES (after return)  | returns undefined! |\r
| return { obj: true } | (same line)        | NO                  | returns object     |\r
| const x = 5          | (function() {})()  | NO (Treated as 5()) | TypeError: 5 is not|\r
| break                | myLabel            | YES (after break)   | breaks loop only   |\r
| throw                | new Error()        | YES (after throw)   | SyntaxError        |\r
+----------------------+--------------------+---------------------+--------------------+\r
\r
7. INTERVIEW & VIVA QUICK-FIRE KNOWLEDGE POINTS\r
--------------------------------------------------------------------------------\r
Q1: What is Automatic Semicolon Insertion (ASI)?\r
A1: ASI is a parser mechanism in JavaScript that automatically inserts virtual semicolons \r
    at certain line boundaries when omitting them would cause syntax errors.\r
\r
Q2: Why does placing a newline after 'return' return undefined?\r
A2: 'return' is a Restricted Production in ECMAScript. The parser forbids a newline after it \r
    and automatically inserts a semicolon, making it 'return;' which yields undefined.\r
\r
Q3: When does omitting semicolons cause runtime errors in JavaScript?\r
A3: When a subsequent line starts with '(', '[', '+', '-', or '/', causing the parser to treat \r
    it as a function call, array index, or operator continuing the previous line.\r
\r
Q4: What is JSDoc and why is it valuable in JavaScript development?\r
A4: JSDoc provides structured documentation comments that enable IDE IntelliSense, parameter hints, \r
    and type checking in vanilla JavaScript without TypeScript transpilation.\r
================================================================================\r
`,p=`/**\r
 * Topic 7 Demo: JavaScript Lexical Grammar, Comments, Whitespace & ASI\r
 * Module: 001_001_getting-started-with-javascript\r
 * Educator: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
console.log("==================================================");\r
console.log("TOPIC 7: LEXICAL GRAMMAR, COMMENTS & ASI");\r
console.log("==================================================");\r
\r
// ─── 1. AUTOMATIC SEMICOLON INSERTION (ASI) RETURN TRAP ──────────\r
console.log("");\r
console.log("1. The Classic ASI 'return' Statement Hazard:");\r
\r
// Broken Function: Newline immediately following 'return'\r
function calculateTuitionBroken(baseFee) {\r
  return\r
  // Unreachable code due to ASI inserting semicolon after 'return'\r
  ("Unreachable payload: " + baseFee);\r
}\r
\r
// Correct Function: Opening brace on same physical line\r
function calculateTuitionCorrect(baseFee) {\r
  return {\r
    course: "JS-PRO-101",\r
    total: baseFee * 1.18\r
  };\r
}\r
\r
console.log("Broken Return Result (ASI inserted ';' after return):", calculateTuitionBroken(5000));\r
console.log("Correct Return Result:", calculateTuitionCorrect(5000));\r
\r
// ─── 2. IIFE & ARRAY ACCESS ASI COLLISION TRAP ───────────────────\r
console.log("");\r
console.log("2. Leading Parenthesis / Bracket Collision with ASI:");\r
\r
// When a line begins with '(' or '[', ASI does NOT insert a semicolon on preceding line!\r
// It treats it as a function invocation: previousLine(arg)\r
const sampleValue = 42;\r
// In un-semicoloned code:\r
// const a = 42\r
// (function() { ... })() → Evaluates as: 42(function() { ... }) → Throws TypeError: 42 is not a function!\r
\r
function simulateParenthesisCollision() {\r
  try {\r
    const fn = 100;\r
    // Simulating: 100()\r
    return eval("const x = 50; const y = x; (function() { return 'Safe'; })();");\r
  } catch (err) {\r
    return \`Collision Caught: \${err.message}\`;\r
  }\r
}\r
\r
console.log("Parenthesis / Bracket Guard Status:", simulateParenthesisCollision());\r
\r
// ─── 3. UNICODE IDENTIFIERS & VARIABLE NAMING RULES ──────────────\r
console.log("");\r
console.log("3. Lexical Identifiers & Unicode Property Support:");\r
\r
// JavaScript permits Unicode identifiers, $ (dollar), and _ (underscore)\r
const π = Math.PI;\r
const $studentCount = 45;\r
const _labLocation = "Barrackpore Lab";\r
const বাংলা_কোর্স = "JavaScript Complete Masterclass";\r
\r
console.table([\r
  { identifier: "π", value: π, valid: "✓ Valid ECMAScript Identifier" },\r
  { identifier: "$studentCount", value: $studentCount, valid: "✓ Valid ($ allowed)" },\r
  { identifier: "_labLocation", value: _labLocation, valid: "✓ Valid (_ allowed)" },\r
  { identifier: "বাংলা_কোর্স", value: বাংলা_কোর্স, valid: "✓ Valid Unicode Identifier" }\r
]);\r
\r
// ─── 4. JSDOC DOCUMENTATION COMMENT SPECIFICATION ────────────────\r
console.log("");\r
console.log("4. Professional JSDoc Documentation Annotations:");\r
\r
/**\r
 * Calculates final student grade and lab verification certificate.\r
 * @param {string} studentName - The full name of the student.\r
 * @param {number} rawScore - Marks scored between 0 and 100.\r
 * @param {string} labCenter - The training center location.\r
 * @returns {object} Verification payload with grade and honors status.\r
 */\r
function evaluateStudentCertification(studentName, rawScore, labCenter) {\r
  const isHonors = rawScore >= 90;\r
  return {\r
    candidate: studentName,\r
    center: labCenter,\r
    score: rawScore,\r
    grade: rawScore >= 80 ? "A+" : "A",\r
    honors: isHonors ? "🌟 DISTINCTION HONORS" : "STANDARD PASS",\r
    issuedBy: "Coder & AccoTax (Sukanta Hui)"\r
  };\r
}\r
\r
const report = evaluateStudentCertification("Swadeep", 96, "Barrackpore Lab");\r
console.log("Generated Certified Report:");\r
console.table([report]);\r
\r
// ─── 5. GRAMMAR TOKENIZER & RESERVED KEYWORDS MATRIX ──────────────\r
console.log("");\r
console.log("5. ECMAScript Reserved Keyword Classification Matrix:");\r
\r
const keywordRegistry = [\r
  { keyword: "let, const, var", category: "Variable Declarations", contextAllowed: "Strict & Sloppy" },\r
  { keyword: "await, yield", category: "Async / Generator Flow", contextAllowed: "Contextual Keywords" },\r
  { keyword: "implements, interface, package", category: "Strict Mode Future Reserved", contextAllowed: "Disallowed in Strict Mode" },\r
  { keyword: "class, extends, super", category: "Object-Oriented Syntax", contextAllowed: "Strict & Sloppy" }\r
];\r
\r
console.table(keywordRegistry);\r
\r
console.log("");\r
console.log("✓ All 5 Topic 7 practical examples executed successfully.");\r
`;function v(){const s=a.useRef([]);a.useEffect(()=>{const n=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&i.target.classList.add("is-visible")})},{threshold:.08});return s.current.forEach(r=>{r&&n.observe(r)}),()=>n.disconnect()},[]);const t=n=>{n&&!s.current.includes(n)&&s.current.push(n)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          opacity: 0.99;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[e.jsxs("header",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-700/60 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"Module 001_001_getting-started-with-javascript · Topic 7"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-sky-300 tracking-tight leading-tight",children:"JavaScript Lexical Grammar, Comments, Whitespace & ASI (Automatic Semicolon Insertion)"}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:"Deconstruct JavaScript tokenization mechanics, Automatic Semicolon Insertion (ASI) restricted productions, professional JSDoc type annotations, and numeric separator literals."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400",children:"Course Code: JS-PRO-101"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:border-slate-700 transition-all",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Detailed Discussion & Lexical Rules"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["Before JavaScript can execute, its engine scans raw source text during ",e.jsx("strong",{className:"text-amber-300",children:"Lexical Analysis (Tokenization)"}),", decomposing characters into tokens: keywords, identifiers, numbers, string literals, and punctuators."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["One of the most critical aspects of JavaScript grammar is ",e.jsx("strong",{className:"text-sky-300",children:"Automatic Semicolon Insertion (ASI)"}),". While ASI permits omitting semicolons in many scenarios, ECMAScript defines strict ",e.jsx("em",{children:'"Restricted Productions"'})," (around keywords like ",e.jsx("code",{children:"return"}),", ",e.jsx("code",{children:"throw"}),", ",e.jsx("code",{children:"break"}),", and ",e.jsx("code",{children:"continue"}),") where newlines trigger automatic semicolon injection, frequently leading to confusing bugs like functions returning ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/90 border border-amber-900/40 text-sm text-slate-300 leading-relaxed space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold",children:[e.jsx("span",{children:"🏫"}),e.jsx("span",{children:"Classroom Scenario (Ichapur Lab):"})]}),e.jsxs("p",{children:["Student ",e.jsx("strong",{children:"Abhronila"})," wrote a helper function with ",e.jsx("code",{children:"return"})," on line 1 and an object literal ",e.jsx("code",{children:"{ user: 'Abhronila' }"})," starting on line 2. The function returned ",e.jsx("code",{children:"undefined"})," instead of the object! Mentor ",e.jsx("strong",{children:"Sukanta Hui"})," explained how ASI inserted an invisible semicolon after ",e.jsx("code",{children:"return;"}),", treating the next lines as an unreachable code block. Moving the opening brace ",e.jsx("code",{children:"{"})," to the same line as ",e.jsx("code",{children:"return"})," solved the issue instantly."]})]})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Automatic Semicolon Insertion (ASI) Token Hazard"]}),e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 850 260",className:"w-full h-auto",role:"img","aria-label":"Automatic Semicolon Insertion Mechanics",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"asiGrad1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#047857",stopOpacity:"0.2"})]}),e.jsxs("linearGradient",{id:"asiGrad2",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f43f5e",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#881337",stopOpacity:"0.2"})]})]}),e.jsx("rect",{width:"850",height:"260",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("text",{x:"425",y:"30",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",textAnchor:"middle",children:"ASI Parser Behavior: Broken Multiline Return vs Correct Inline Syntax"}),e.jsxs("g",{transform:"translate(30, 55)",children:[e.jsx("rect",{width:"370",height:"180",rx:"12",fill:"#1e293b",stroke:"#f43f5e",strokeWidth:"1.5"}),e.jsx("text",{x:"185",y:"24",fill:"#fb7185",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"❌ Hazard: Newline after return (Restricted Production)"}),e.jsx("rect",{x:"20",y:"40",width:"330",height:"38",rx:"6",fill:"#0f172a",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"58",fill:"#fca5a5",fontSize:"11",children:"return // [ASI inserts ';' automatically!]"}),e.jsx("text",{x:"30",y:"72",fill:"#f43f5e",fontSize:"9",children:"Parsed as: return;"}),e.jsx("rect",{x:"20",y:"88",width:"330",height:"75",rx:"6",fill:"#0f172a",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"108",fill:"#fca5a5",fontSize:"11",children:'{ name: "Abhronila" };'}),e.jsx("text",{x:"30",y:"128",fill:"#f43f5e",fontSize:"10",fontWeight:"bold",children:"Result: Returns undefined!"}),e.jsx("text",{x:"30",y:"146",fill:"#94a3b8",fontSize:"9",children:"Object block becomes dead unreachable code"})]}),e.jsxs("g",{transform:"translate(450, 55)",children:[e.jsx("rect",{width:"370",height:"180",rx:"12",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"185",y:"24",fill:"#34d399",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"✓ Safe: Opening Brace on Same Line"}),e.jsx("rect",{x:"20",y:"40",width:"330",height:"38",rx:"6",fill:"#0f172a",stroke:"#059669"}),e.jsx("text",{x:"30",y:"58",fill:"#6ee7b7",fontSize:"11",children:"return { // Brace stops ASI insertion"}),e.jsx("text",{x:"30",y:"72",fill:"#34d399",fontSize:"9",children:"Parser recognizes object literal start"}),e.jsx("rect",{x:"20",y:"88",width:"330",height:"75",rx:"6",fill:"url(#asiGrad1)",stroke:"#047857"}),e.jsx("text",{x:"30",y:"108",fill:"#ecfdf5",fontSize:"11",children:'  name: "Abhronila" };'}),e.jsx("text",{x:"30",y:"128",fill:"#ecfdf5",fontSize:"10",fontWeight:"bold",children:'Result: Returns { name: "Abhronila" }'}),e.jsx("text",{x:"30",y:"146",fill:"#d1fae5",fontSize:"9",children:"100% Deterministic execution across all engines"})]})]})}),e.jsx("p",{className:"text-xs text-slate-400 mt-3 text-center",children:"Figure 1.8: Automatic Semicolon Insertion (ASI) parser resolution in restricted productions."})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," ECMAScript Lexical Grammar & Identifier Rules"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed mb-6",children:"The ECMAScript lexical grammar governs token definitions, restricted productions, and valid character sets."}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse border border-slate-800",children:[e.jsx("thead",{className:"bg-slate-900/90 text-amber-300 uppercase text-xs",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border border-slate-800",children:"Grammar Category"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Specification Rule"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Valid Example"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Invalid Example"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 font-mono text-xs",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-amber-400 font-bold",children:"Identifiers"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Unicode letter, $, or _ followed by digits/letters"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"$student, _count, বাংলা"}),e.jsx("td",{className:"p-3 text-rose-400",children:"1stStudent, let, #id"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400 font-bold",children:"Numeric Separators"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Underscore between digits for readability"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"1_000_000, 0xFF_00"}),e.jsx("td",{className:"p-3 text-rose-400",children:"100_, _100, 10__00"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-purple-400 font-bold",children:"Restricted ASI"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"No newline permitted after return, throw, break"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"return { id: 1 };"}),e.jsx("td",{className:"p-3 text-rose-400",children:"return { id: 1 };"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"JSDoc Types"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Block annotations for IDE type checking"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"/** @type {string} */"}),e.jsx("td",{className:"p-3 text-slate-400",children:"// type string"})]})]})]})}),e.jsxs("div",{className:"mt-6 p-5 rounded-xl bg-slate-900/80 border border-rose-900/40 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Lexical Grammar Pitfalls"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-slate-300 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-rose-300",children:"Leading Bracket / Parenthesis Collision:"})," If a line starts with ",e.jsx("code",{children:"("})," or ",e.jsx("code",{children:"["})," and the previous line has no semicolon, JavaScript treats it as a function invocation on the previous line."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-amber-300",children:"Zero-Width Invisible Characters:"})," Copying code from websites can copy invisible zero-width Unicode characters (",e.jsx("code",{children:"​"}),"), causing mysterious ",e.jsx("code",{children:"SyntaxError"})," crashes."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-sky-300",children:"Nested Multi-line Comments:"})," Placing ",e.jsx("code",{children:"/* ... /* nested */ ... */"})," is illegal because the first ",e.jsx("code",{children:"*/"})," terminates the entire comment block."]})]})]})]})}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Interactive Monaco Playground: 5+ Practical Working Examples"]}),e.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded bg-amber-950/60 border border-amber-800 text-amber-300",children:"Live In-Browser Execution"})]}),e.jsx("div",{className:"rounded-2xl border border-slate-800 overflow-hidden shadow-2xl bg-slate-900",children:e.jsx(d,{initialCode:p,title:"JavascriptLexicalGrammarCommentsWhitespaceAsiAutomaticSemicolonInsertionDemo.js"})})]}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚖️"})," Common Pitfalls vs Senior Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold",children:[e.jsx("span",{children:"❌"}),e.jsx("span",{children:"Anti-Pattern: Unsemicoloned IIFE Concatenation"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Omitting semicolons before an IIFE causes the engine to invoke the preceding statement as a function."}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/50 text-xs font-mono text-rose-300 overflow-x-auto",children:`// ❌ AVOID: Crashes with TypeError: 42 is not a function
const x = 42
(function() { /* ... */ })()`})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold",children:[e.jsx("span",{children:"✓"}),e.jsx("span",{children:"Senior Pro: Defensive Semicolon & Prettier"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Use explicit semicolons or prepend a defensive ",e.jsx("code",{children:";"})," before standalone IIFEs and array expressions."]}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-emerald-900/50 text-xs font-mono text-emerald-300 overflow-x-auto",children:`// ✓ RECOMMENDED: Defensive semicolon prevents collisions
const x = 42;
;(function() { /* ... */ })();`})]})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-950/30 via-slate-900 to-purple-950/20 border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xl shadow-md",children:"💎"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs uppercase font-mono tracking-wider text-amber-400 font-bold block",children:"JavaScript Hidden Gem & Senior Pro Secret"}),e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"JSDoc @typedef for TypeScript-Grade Safety in Vanilla JS"})]})]}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed mb-6",children:["You can get 100% of TypeScript's auto-completion, parameter hints, and compile-time type safety in pure vanilla JavaScript files using JSDoc ",e.jsx("code",{children:"@typedef"})," without configuring TypeScript or a build step!"]}),e.jsx("div",{className:"rounded-xl border border-amber-900/50 bg-slate-950 p-4 font-mono text-xs text-amber-200 overflow-x-auto",children:e.jsx("pre",{children:`// 💎 SENIOR PRO SECRET: Type contracts in Vanilla JS via JSDoc
/**
 * @typedef {Object} StudentRecord
 * @property {string} name - Candidate full name
 * @property {number} roll - Numeric roll identifier
 * @property {boolean} isEnrolled - Active enrollment status
 */

/** @type {StudentRecord} */
const record = { name: "Swadeep", roll: 101, isEnrolled: true };`})})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-indigo-950/20 border border-indigo-800/40 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-indigo-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Architectural Mental Challenge: Think About This..."]}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed mb-4",children:["Why does JavaScript forbid placing a newline between the postfix increment operator ",e.jsx("code",{children:"++"})," and its target identifier (e.g. ",e.jsx("code",{children:"x ++"}),"), while allowing a newline before prefix ",e.jsx("code",{children:"++ x"}),"?"]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-indigo-900/50 text-xs sm:text-sm text-indigo-300 font-mono",children:["💡 Hint: Postfix ",e.jsx("code",{children:"++"})," is an ECMAScript Restricted Production. A newline forces ASI to insert a semicolon after ",e.jsx("code",{children:"x;"}),", leaving orphaned ",e.jsx("code",{children:"++"})," as an illegal syntax error!"]})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(l,{title:"Frequently Asked Questions · Lexical Grammar, Comments, Whitespace & ASI",subtitle:"Explore 25+ comprehensive questions on ASI, tokenization, JSDoc annotations, and numeric separators",questions:m})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(c,{content:x,title:"JavaScript Master Note · Lexical Grammar, Comments, Whitespace & ASI",downloadFileName:"001_001_getting-started-with-javascript-topic7-note.txt"})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(o,{note:"In my 27+ years of mentoring engineers at Coder & AccoTax in Barrackpore, I have seen countess bugs caused by ASI assumptions. Write unambiguous code, use Prettier with semicolons enabled, and document your interfaces with JSDoc. Clean code is professional code."})})]})]})}export{v as default};
