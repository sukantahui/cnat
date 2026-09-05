import{b as o,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import{F as l}from"./FAQTemplate-BHhlgA96.js";import{P as c}from"./PlainTextPrint-C08xhKA4.js";import{J as d}from"./JavaScriptEditableCodeBlock-0Pr6j_Lc.js";import"./vendor-icons-CH1iX9C8.js";import"./vendor-monaco-Bv7hoEkV.js";const p=[{question:"What is JavaScript Strict Mode and how is it invoked?",shortAnswer:"A restricted variant of JavaScript enabled by placing 'use strict'; at the top of a script or function.",explanation:"Introduced in ES5, strict mode eliminates bad language quirks, turns silent errors into exceptions, secures 'this', and boosts engine performance.",hint:"Place 'use strict'; at the start of a file or function.",level:"basic",codeExample:`'use strict';
// Entire script executes in strict mode`},{question:"What happens when assigning to an undeclared variable in strict mode?",shortAnswer:"It throws a ReferenceError instead of creating an accidental global variable on window.",explanation:"In sloppy mode, typing foo = 10 attaches foo to window. In strict mode, the engine throws ReferenceError: foo is not defined.",hint:"Throws ReferenceError to prevent accidental global variables.",level:"basic",codeExample:`'use strict';
try {
  x = 100; // ReferenceError
} catch (e) {
  console.log(e.name);
}`},{question:"What is the value of 'this' in a plain standalone function call in strict mode?",shortAnswer:"'this' is undefined (in sloppy mode, it defaults to the global window object).",explanation:"Securing 'this' to undefined prevents functions from accidentally modifying global window properties when called without a context.",hint:"In strict mode, standalone function this is undefined.",level:"intermediate",codeExample:`'use strict';
function test() { return this; }
console.log(test()); // undefined`},{question:"Are ES6 Modules and Classes strict by default?",shortAnswer:"Yes, all ES6 Modules (import/export) and Class bodies execute in strict mode automatically.",explanation:"The ECMAScript specification mandates that all module code and class definitions are strict without needing an explicit 'use strict' directive.",hint:"ES6 Modules and Classes are strict by default.",level:"basic",codeExample:`class Student {
  // Automatically strict mode!
}`},{question:"What happens when mutating a non-writable or frozen property in strict mode?",shortAnswer:"A TypeError is thrown immediately (in sloppy mode, it fails silently).",explanation:"In sloppy mode, attempting to modify an Object.freeze() object fails without error. In strict mode, it throws TypeError.",hint:"Throws TypeError on non-writable property mutation.",level:"intermediate",codeExample:`'use strict';
const obj = Object.freeze({ a: 1 });
try { obj.a = 2; } catch(e) { console.log(e.name); } // TypeError`},{question:"Why does strict mode disallow duplicate parameter names in functions?",shortAnswer:"Duplicate parameter names create ambiguity and potential bugs; strict mode throws a SyntaxError.",explanation:"In sloppy mode, function add(a, a, b) { return a; } is allowed (second a overwrites first). Strict mode forbids this grammar.",hint:"Throws SyntaxError on duplicate parameters.",level:"intermediate",codeExample:"// 'use strict'; function add(a, a) {} // SyntaxError: Duplicate parameter name"},{question:"What happens to the 'with' statement in strict mode?",shortAnswer:"The 'with' statement is completely forbidden and throws a compile-time SyntaxError.",explanation:"'with' modifies the scope chain dynamically, confusing both developers and JIT compilers and crippling runtime optimization.",hint:"'with' statement is banned in strict mode.",level:"intermediate",codeExample:"// 'use strict'; with (obj) {} // SyntaxError: Strict mode code may not include a with statement"},{question:"How does strict mode handle variable declarations inside eval()?",shortAnswer:"Variables declared inside strict eval() do not leak into the enclosing scope.",explanation:"In sloppy mode, eval('var x = 10') creates x in the outer function. In strict mode, eval has its own isolated lexical scope.",hint:"Strict eval does not leak variables to outer scope.",level:"advanced",codeExample:`'use strict';
eval('var secret = 42;');
console.log(typeof secret); // 'undefined' (Isolated!)`},{question:"Why are legacy octal numeric literals (e.g. 010) forbidden in strict mode?",shortAnswer:"Leading zero octals caused confusion with decimals; ES6 introduced the explicit 0o prefix instead.",explanation:"In sloppy mode, 010 evaluates to 8 (octal). Strict mode bans leading zeros to avoid bugs and requires 0o10.",hint:"Bans 010; requires modern ES6 0o10 format.",level:"basic",codeExample:"const num = 0o10; // Modern Octal (8)"},{question:"What happens when you try to delete an undeletable property in strict mode?",shortAnswer:"It throws a TypeError (in sloppy mode, it returns false silently).",explanation:"Attempting to run delete Object.prototype or delete Math.PI in strict mode throws a TypeError.",hint:"delete nonConfigurableProperty throws TypeError.",level:"intermediate",codeExample:`'use strict';
try { delete Object.prototype; } catch(e) { console.log(e.name); } // TypeError`},{question:"Why are 'eval' and 'arguments' forbidden as variable names in strict mode?",shortAnswer:"To prevent developers from shadowing or reassigning core language keywords.",explanation:"In strict mode, var eval = 10 or function(arguments) {} throws SyntaxError.",hint:"Cannot bind or assign to 'eval' or 'arguments'.",level:"intermediate",codeExample:"// 'use strict'; var eval = 10; // SyntaxError: Unexpected eval or arguments in strict mode"},{question:"How does strict mode improve V8 TurboFan JIT compiler optimization?",shortAnswer:"By eliminating dynamic scope changes (with, eval) and ensuring predictable lexical variable resolution.",explanation:"When the engine knows scopes cannot be modified dynamically, it can inline variable lookups and compile functions into faster machine code.",hint:"Predictable lexical scope enables faster JIT machine code.",level:"advanced",codeExample:"// Static scope resolution allows TurboFan to bypass runtime scope lookups"},{question:"What is the script concatenation hazard with 'use strict'?",shortAnswer:"Bundling a strict script at the top of non-strict legacy files makes the entire bundle strict, potentially breaking legacy code.",explanation:"If a top-level 'use strict' is placed at the top of a merged bundle, legacy scripts expecting sloppy mode will crash.",hint:"Wrap scripts in IIFEs before concatenating: (function() { 'use strict'; ... })();",level:"advanced",codeExample:`(function() {
  'use strict';
  // Safe scoped strict mode in bundle
})();`},{question:"How do you detect whether strict mode is currently active in your JavaScript runtime?",shortAnswer:"Evaluate a non-arrow function call: (function() { return !this; })().",explanation:"If strict mode is active, this is undefined (!this is true). If sloppy mode is active, this is window (!window is false).",hint:"!this inside a regular function returns true in strict mode.",level:"advanced",codeExample:`const isStrict = (function() { return !this; })();
console.log('Strict Active:', isStrict);`},{question:"What is the difference between function-level strict mode and file-level strict mode?",shortAnswer:"File-level applies to the entire file; function-level applies only inside that specific function body.",explanation:"Function-level strict mode allows developers to opt individual functions into strict mode without affecting legacy code in the rest of the file.",hint:"'use strict' inside function body scopes strictness to that function.",level:"basic",codeExample:`function strictRoutine() {
  'use strict';
  // Only this function is strict
}`},{question:"What happens if 'use strict'; is not the first statement in a script or function?",shortAnswer:"It is treated as a plain harmless string literal and strict mode will NOT be activated.",explanation:"ECMAScript specification requires the directive prologue to be at the very top. Any code or semicolon preceding it disables strict activation.",hint:"Must be the very first statement (comments allowed before it).",level:"intermediate",codeExample:`const a = 1;
'use strict'; // INEFFECTIVE! Strict mode is NOT active here`},{question:"What happens when you assign a primitive to a property in strict mode?",shortAnswer:"Throws TypeError (e.g. (14).s = 'test' throws TypeError in strict mode).",explanation:"In sloppy mode, boxing creates a temporary wrapper object and discards the property silently. In strict mode, it throws TypeError.",hint:"Throws TypeError when setting properties on primitive values.",level:"advanced",codeExample:`'use strict';
try { 'abc'.custom = 1; } catch(e) { console.log(e.name); } // TypeError`},{question:"What happens to arguments.callee in strict mode?",shortAnswer:"Accessing arguments.callee or arguments.caller throws a TypeError.",explanation:"arguments.callee prevents engine optimizations and inlining. Strict mode removes it completely.",hint:"arguments.callee is deprecated and throws TypeError in strict mode.",level:"intermediate",codeExample:`'use strict';
function test() {
  try { console.log(arguments.callee); } catch(e) { console.log(e.name); }
}
test(); // TypeError`},{question:"How does strict mode handle the arguments object reflecting parameter changes?",shortAnswer:"In strict mode, the arguments object does NOT alias parameter variables (they remain decoupled).",explanation:"In sloppy mode, changing parameter 'a' mutates arguments[0]. In strict mode, arguments stores the initial values passed without aliasing.",hint:"Strict mode decouples parameters from arguments array indices.",level:"expert",codeExample:`'use strict';
function check(a) {
  a = 42;
  console.log(arguments[0]); // 10 (Decoupled!)
}
check(10);`},{question:"Why does modern frontend development rarely require manual 'use strict' declarations?",shortAnswer:"Because modern bundlers and frameworks use ES Modules, which are strictly strict by specification.",explanation:"Vite, Next.js, and TypeScript automatically compile all code into ES Modules, rendering manual 'use strict' statements redundant.",hint:"ES Modules (import/export) are automatically strict mode.",level:"basic",codeExample:"// In Vite/React apps, all files are ES modules and already strict by default"},{question:"What is the difference between SyntaxError, ReferenceError, and TypeError in strict mode?",shortAnswer:"SyntaxError: Grammar violation at parse time; ReferenceError: Invalid variable reference; TypeError: Operation on incompatible type/object.",explanation:"Duplicate parameters cause SyntaxError at parse time. Undeclared variables cause ReferenceError. Mutating frozen objects causes TypeError.",hint:"SyntaxError (parsing) vs ReferenceError (variables) vs TypeError (property mutation).",level:"intermediate",codeExample:`// ReferenceError: x = 1
// TypeError: frozenObj.prop = 1
// SyntaxError: function(a, a) {}`},{question:"Can you turn OFF strict mode inside a nested function if the outer scope is strict?",shortAnswer:"No, strict mode cannot be cancelled or disabled once activated in an enclosing scope.",explanation:"Strict mode is strictly infectious downwards. A child function nested inside a strict file/function is always strict.",hint:"Strict mode cannot be deactivated in child scopes.",level:"intermediate",codeExample:`'use strict';
function outer() {
  function inner() {
    // Always strict! Cannot turn off.
  }
}`},{question:"What happens when using delete on a plain variable in strict mode?",shortAnswer:"Throws a SyntaxError (e.g. delete x throws SyntaxError).",explanation:"delete is intended only for object properties. Attempting to delete direct variable identifiers is illegal in strict mode.",hint:"delete identifier throws SyntaxError.",level:"basic",codeExample:`'use strict';
let x = 10;
// delete x; // SyntaxError: Delete of an unqualified identifier in strict mode`},{question:"What is the impact of strict mode on constructor functions invoked without 'new'?",shortAnswer:"In strict mode, this is undefined, causing immediate TypeError instead of polluting window with properties.",explanation:"In sloppy mode, Person('Swadeep') attaches name to window.name. In strict mode, this.name throws TypeError: Cannot set property on undefined.",hint:"Prevents constructor without 'new' from polluting window.",level:"intermediate",codeExample:`'use strict';
function Person(name) {
  this.name = name; // Throws TypeError if called without 'new'
}`},{question:"What is the key takeaway about strict mode for professional engineers?",shortAnswer:"Strict mode enforces defensive coding invariants, prevents silent failures, and ensures forward compatibility with future ECMAScript standards.",explanation:"Writing strict code eliminates legacy JavaScript footguns and aligns with modern enterprise engineering standards.",hint:"Transforms silent bugs into actionable exceptions and prepares code for modern ESNext.",level:"basic",codeExample:"// Always develop in strict mode or ES Modules for production reliability"}],m=`================================================================================\r
CODER & ACCOTAX - JAVASCRIPT COMPLETE ROADMAP\r
MODULE [001_001_getting-started-with-javascript]: Getting Started with JavaScript\r
TOPIC [6]: Strict Mode ('use strict') Mechanics & Global Scope Leak Prevention\r
Educator: Sukanta Hui | Barrackpore, West Bengal, India\r
================================================================================\r
\r
1. TOPIC OVERVIEW & DETAILED CONCEPT DISCUSSION\r
--------------------------------------------------------------------------------\r
- Purpose: Introduced in ECMAScript 5 (ES5), Strict Mode ('use strict') opts into a \r
  restricted, safer variant of JavaScript that converts silent bugs into explicit exceptions, \r
  prevents accidental global variable leaks, secures 'this' binding, and allows JavaScript \r
  engines to perform aggressive TurboFan JIT compiler optimizations.\r
- Activation Scopes:\r
  1. Entire Script Level: Placing "use strict"; at the very top of a classic script.\r
  2. Function Level: Placing "use strict"; inside a specific function body.\r
  3. Automatic Strict Mode: ES6 Modules (<script type="module">) and ES6 Classes (class {}) \r
     execute in Strict Mode by default automatically.\r
\r
2. IN-DEPTH TECHNICAL KNOW-HOW & ENGINE RUNTIME MECHANICS\r
--------------------------------------------------------------------------------\r
- What Strict Mode Enforces at Engine Level:\r
  1. Eliminates Accidental Global Leaks: Assigning to an undeclared identifier throws \r
     ReferenceError instead of creating a window property.\r
  2. Eliminates Silent Assignment Failures: Mutating read-only properties, non-writable \r
     descriptors, or Object.freeze() objects throws TypeError.\r
  3. Disallows Deleting Undeletable Properties: delete Object.prototype throws TypeError.\r
  4. Forbids Duplicate Parameter Names: function add(a, a, b) throws SyntaxError.\r
  5. Forbids Legacy Octal Literals: 010 is illegal (must use modern ES6 0o10).\r
  6. Disallows the 'with' Statement: with(obj) {} throws SyntaxError.\r
  7. Secures 'this' Context: In plain function calls, this is 'undefined' instead of \r
     coercing to the global window object.\r
  8. Encapsulates eval(): Variables declared inside eval() do not leak into the calling scope.\r
  9. Restricts 'eval' and 'arguments' Identifiers: Cannot be used as variable or parameter names.\r
\r
3. EXCEPTIONS, CORNER CASES, COERCIONS & QUIRKS\r
--------------------------------------------------------------------------------\r
[!] Script Concatenation Hazard: If a build tool concatenates a strict-mode file before \r
    a legacy non-strict file, the entire bundle becomes strict, potentially crashing legacy code.\r
[!] 'this' is undefined in Event Callbacks if Bound Carelessly: In strict mode, unbound \r
    standalone callbacks have this === undefined instead of window.\r
[!] eval() Lexical Scope: While strict eval doesn't leak variables outward, it CAN read \r
    outer variables in its enclosing lexical scope.\r
\r
4. 💎 SPECIAL LANGUAGE FEATURES & SENIOR PRO SECRETS\r
--------------------------------------------------------------------------------\r
- Automatic Strict Mode in ES6: You do not need to write "use strict"; in React, Next.js, \r
  or Vite projects because all ES Modules (import/export) and Classes are strict by specification.\r
- TurboFan Optimization Boost: Strict mode guarantees no dynamic scope pollution via with/eval, \r
  allowing V8 TurboFan to inline variable lookups with zero runtime overhead.\r
- Safe Global Object Extraction: (function() { "use strict"; return this; })() reliably \r
  detects if strict mode is currently active.\r
\r
5. PRACTICAL ENTERPRISE USE-CASES & CODE EXAMPLES\r
--------------------------------------------------------------------------------\r
Example 1: Accidental Global Leak Prevention\r
"use strict";\r
function saveScore(score) {\r
  // studentScore = score; // ReferenceError: studentScore is not defined!\r
  const studentScore = score; // Clean & Safe\r
}\r
\r
Example 2: Object.freeze Mutation Exception\r
"use strict";\r
const appConfig = Object.freeze({ lab: "Barrackpore", maxCapacity: 50 });\r
// appConfig.maxCapacity = 60; // Throws TypeError!\r
\r
Example 3: Securing Function this Context\r
"use strict";\r
function checkContext() {\r
  console.log(this); // undefined\r
}\r
checkContext();\r
\r
Example 4: Preventing Parameter Collisions\r
// function calculate(val, val) {} // Throws SyntaxError in strict mode!\r
function calculate(val1, val2) {\r
  return val1 + val2;\r
}\r
\r
Example 5: Safe Strict Mode Verification Utility\r
const isStrictModeActive = (function() {\r
  "use strict";\r
  return this === undefined;\r
})();\r
console.log("Is Strict Mode Active?:", isStrictModeActive);\r
\r
6. COMPARATIVE SPECIFICATION CHEAT-SHEET\r
--------------------------------------------------------------------------------\r
+----------------------+--------------------+--------------------+--------------------+\r
| Behavior / Scenario  | Sloppy Mode (ES3)  | Strict Mode (ES5+) | ES6 Modules/Classes|\r
+----------------------+--------------------+--------------------+--------------------+\r
| Undeclared var: x=10 | Creates global var | Throws ReferenceErr| Throws ReferenceErr|\r
| Mutate Frozen Object | Silent Failure     | Throws TypeError   | Throws TypeError   |\r
| Plain function this  | window / global    | undefined          | undefined          |\r
| Duplicate params     | Silent overwrite   | Throws SyntaxError | Throws SyntaxError |\r
| Legacy Octal: 010    | Valid (8)          | Throws SyntaxError | Throws SyntaxError |\r
| 'with' statement     | Allowed            | Throws SyntaxError | Throws SyntaxError |\r
+----------------------+--------------------+---------------------+--------------------+\r
\r
7. INTERVIEW & VIVA QUICK-FIRE KNOWLEDGE POINTS\r
--------------------------------------------------------------------------------\r
Q1: What is 'use strict' in JavaScript and why is it used?\r
A1: 'use strict' enables strict mode, converting silent errors into throwing exceptions, \r
    preventing global scope pollution, securing 'this', and optimizing runtime compilation.\r
\r
Q2: What happens when assigning to an undeclared variable in strict mode?\r
A2: A ReferenceError is thrown immediately, preventing accidental leaks into the global window.\r
\r
Q3: What is the value of 'this' in a standalone function in strict mode?\r
A3: 'this' is 'undefined' in strict mode, whereas in sloppy mode it coercively binds to window.\r
\r
Q4: Do ES6 Classes and ES Modules require the 'use strict' directive?\r
A4: No. ES6 Modules (<script type="module">) and ES6 Class bodies are automatically in strict \r
    mode by ECMAScript specification.\r
================================================================================\r
`,h=`/**\r
 * Topic 6 Demo: Strict Mode ('use strict') Mechanics & Global Scope Leak Prevention\r
 * Module: 001_001_getting-started-with-javascript\r
 * Educator: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
console.log("==================================================");\r
console.log("TOPIC 6: STRICT MODE & SCOPE LEAK GUARDS");\r
console.log("==================================================");\r
\r
// ─── 1. ACCIDENTAL GLOBAL LEAK PREVENTION ────────────────────────\r
console.log("");\r
console.log("1. Accidental Global Variable Leak Guard:");\r
\r
function testAccidentalGlobalLeak() {\r
  "use strict";\r
  try {\r
    // In sloppy mode, assigning to undeclared identifier creates a global variable!\r
    // In strict mode, it throws ReferenceError.\r
    // Simulating: undeclaredVar = 42;\r
    eval("undeclaredStudent = 'Swadeep';");\r
    return "Leak created successfully (Sloppy Mode)";\r
  } catch (err) {\r
    return \`Strict Mode Protected: \${err.name} - \${err.message}\`;\r
  }\r
}\r
\r
console.log("Outcome:", testAccidentalGlobalLeak());\r
\r
// ─── 2. SILENT MUTATION FAILURES TURNED INTO TYPEERROR ───────────\r
console.log("");\r
console.log("2. Read-Only / Non-Writable Property Mutation Protection:");\r
\r
const frozenConfig = Object.freeze({\r
  center: "Barrackpore Lab",\r
  courseCode: "JS-PRO-101"\r
});\r
\r
function attemptFrozenMutation() {\r
  "use strict";\r
  try {\r
    frozenConfig.center = "Naihati Lab"; // Throws TypeError in strict mode!\r
    return "Mutation Succeeded (Sloppy Mode Silent Failure)";\r
  } catch (err) {\r
    return \`Strict Mode Protected: \${err.name} - \${err.message}\`;\r
  }\r
}\r
\r
console.log("Outcome:", attemptFrozenMutation());\r
\r
// ─── 3. FUNCTION THIS CONTEXT BEHAVIOR (WINDOW VS UNDEFINED) ─────\r
console.log("");\r
console.log("3. Function this Binding: Sloppy Mode (Window) vs Strict Mode (undefined):");\r
\r
function sloppyFunctionThis() {\r
  return this; // In sloppy mode, returns window/global\r
}\r
\r
function strictFunctionThis() {\r
  "use strict";\r
  return this; // In strict mode, remains undefined!\r
}\r
\r
console.log("Sloppy Mode 'this':", typeof sloppyFunctionThis() !== "undefined" ? "Global Object (Window/Global)" : "undefined");\r
console.log("Strict Mode 'this':", strictFunctionThis() === undefined ? "✓ undefined (Secured)" : "Global");\r
\r
// ─── 4. DUPLICATE PARAMETER & OCTAL LITERAL SYNTAX GUARDS ────────\r
console.log("");\r
console.log("4. Syntax Invariant Verification (Duplicate Params & Octals):");\r
\r
function testDuplicateParameters() {\r
  try {\r
    // In sloppy mode: function foo(a, a, b) {} is allowed\r
    // In strict mode: SyntaxError: Duplicate parameter name not allowed\r
    new Function("'use strict'; function test(a, a) { return a; }");\r
    return "Allowed";\r
  } catch (err) {\r
    return \`Strict Mode SyntaxError: \${err.message}\`;\r
  }\r
}\r
\r
function testOctalLiterals() {\r
  try {\r
    // In strict mode: legacy octals like 010 are forbidden (use 0o10 instead)\r
    new Function("'use strict'; var oct = 010;");\r
    return "Allowed";\r
  } catch (err) {\r
    return \`Strict Mode Octal SyntaxError: \${err.message}\`;\r
  }\r
}\r
\r
console.log("Duplicate Params Check:", testDuplicateParameters());\r
console.log("Legacy Octal Check:", testOctalLiterals());\r
\r
// ─── 5. EVAL SCOPE ISOLATION TEST ────────────────────────────────\r
console.log("");\r
console.log("5. Eval Scope Isolation in Strict Mode:");\r
\r
function testEvalScopeIsolation() {\r
  "use strict";\r
  eval("var privateEvalVariable = 'Encapsulated Inside Eval';");\r
  \r
  const isLeaked = typeof privateEvalVariable !== "undefined";\r
  return {\r
    evalCodeExecuted: true,\r
    isVariableLeakedToOuterScope: isLeaked,\r
    securityStatus: !isLeaked ? "✓ Isolated (Strict Mode Sandbox)" : "❌ Leaked to Outer Scope"\r
  };\r
}\r
\r
console.log("Eval Sandbox Result:", testEvalScopeIsolation());\r
\r
console.log("");\r
console.log("✓ All 5 Topic 6 practical examples executed successfully.");\r
`;function v(){const s=o.useRef([]);o.useEffect(()=>{const r=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&i.target.classList.add("is-visible")})},{threshold:.08});return s.current.forEach(n=>{n&&r.observe(n)}),()=>r.disconnect()},[]);const t=r=>{r&&!s.current.includes(r)&&s.current.push(r)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          opacity: 0.99;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[e.jsxs("header",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-700/60 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"Module 001_001_getting-started-with-javascript · Topic 6"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-sky-300 tracking-tight leading-tight",children:"Strict Mode ('use strict') Mechanics & Global Scope Leak Prevention"}),e.jsxs("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:["Eliminate JavaScript silent bugs. Master how Strict Mode prevents accidental global leaks, secures ",e.jsx("code",{children:"this"})," binding, enforces property immutability, and accelerates V8 TurboFan compilation."]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400",children:"Course Code: JS-PRO-101"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:border-slate-700 transition-all",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Detailed Discussion & Strict Mode Evolution"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["Introduced in ECMAScript 5 (ES5), ",e.jsxs("strong",{className:"text-amber-300",children:["Strict Mode (",e.jsx("code",{children:"'use strict'"}),")"]}),' was created to address historical language design flaws and prevent silent, hard-to-trace bugs. In legacy "sloppy mode", JavaScript failed silently on numerous dangerous operations: assigning to undeclared variables created global properties on ',e.jsx("code",{children:"window"}),", modifying read-only objects did nothing, and plain function calls coerced ",e.jsx("code",{children:"this"})," to the global object."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["Strict Mode converts these silent failures into immediate, actionable exceptions (",e.jsx("code",{children:"ReferenceError"}),", ",e.jsx("code",{children:"TypeError"}),", ",e.jsx("code",{children:"SyntaxError"}),"). Furthermore, by disallowing dynamic scope mutations (such as ",e.jsx("code",{children:"with"})," statements and scope-leaking ",e.jsx("code",{children:"eval()"}),"), Strict Mode allows the V8 TurboFan compiler to generate faster, highly optimized machine code."]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/90 border border-amber-900/40 text-sm text-slate-300 leading-relaxed space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold",children:[e.jsx("span",{children:"🏫"}),e.jsx("span",{children:"Classroom Scenario (Naihati Lab):"})]}),e.jsxs("p",{children:["Student ",e.jsx("strong",{children:"Debangshu"})," typed ",e.jsx("code",{children:"studentMarks = 95"})," inside a function without a ",e.jsx("code",{children:"let"})," or ",e.jsx("code",{children:"const"})," declaration. In sloppy mode, this created a hidden global variable on ",e.jsx("code",{children:"window.studentMarks"})," that silently corrupted calculations in other modules. Mentor ",e.jsx("strong",{children:"Sukanta Hui"})," demonstrated how adding ",e.jsx("code",{children:"'use strict'"})," instantly threw a ",e.jsx("code",{children:"ReferenceError: studentMarks is not defined"}),", catching the typo during testing rather than in production."]})]})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Sloppy Mode Global Leak vs Strict Mode Guard Architecture"]}),e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 850 260",className:"w-full h-auto",role:"img","aria-label":"Strict Mode Scope Guard",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"smGrad1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#047857",stopOpacity:"0.2"})]}),e.jsxs("linearGradient",{id:"smGrad2",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f43f5e",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#881337",stopOpacity:"0.2"})]})]}),e.jsx("rect",{width:"850",height:"260",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("text",{x:"425",y:"30",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",textAnchor:"middle",children:"Scope Architecture: Sloppy Mode Variable Leak vs Strict Mode Guard"}),e.jsxs("g",{transform:"translate(30, 55)",children:[e.jsx("rect",{width:"370",height:"180",rx:"12",fill:"#1e293b",stroke:"#f43f5e",strokeWidth:"1.5"}),e.jsx("text",{x:"185",y:"24",fill:"#fb7185",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"❌ Sloppy Mode (Legacy JavaScript)"}),e.jsx("rect",{x:"20",y:"40",width:"330",height:"38",rx:"6",fill:"#0f172a",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"58",fill:"#fca5a5",fontSize:"11",children:"score = 98; // Missing let/const"}),e.jsx("text",{x:"30",y:"72",fill:"#94a3b8",fontSize:"9",children:"Engine silently creates window.score = 98"}),e.jsx("rect",{x:"20",y:"88",width:"330",height:"75",rx:"6",fill:"#0f172a",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"110",fill:"#f43f5e",fontSize:"10",fontWeight:"bold",children:"Hazardous Silent Failures:"}),e.jsx("text",{x:"30",y:"128",fill:"#94a3b8",fontSize:"9",children:"Pollutes global window scope across all files"}),e.jsx("text",{x:"30",y:"146",fill:"#94a3b8",fontSize:"9",children:"this in plain function defaults to window (Security risk)"})]}),e.jsxs("g",{transform:"translate(450, 55)",children:[e.jsx("rect",{width:"370",height:"180",rx:"12",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"185",y:"24",fill:"#34d399",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"✓ Strict Mode ('use strict' / ES Modules)"}),e.jsx("rect",{x:"20",y:"40",width:"330",height:"38",rx:"6",fill:"#0f172a",stroke:"#059669"}),e.jsx("text",{x:"30",y:"58",fill:"#6ee7b7",fontSize:"11",children:"'use strict'; score = 98;"}),e.jsx("text",{x:"30",y:"72",fill:"#34d399",fontSize:"9",children:"⚡ Throws: ReferenceError: score is not defined"}),e.jsx("rect",{x:"20",y:"88",width:"330",height:"75",rx:"6",fill:"url(#smGrad1)",stroke:"#047857"}),e.jsx("text",{x:"30",y:"110",fill:"#ecfdf5",fontSize:"10",fontWeight:"bold",children:"✓ Explicit Invariant Protection:"}),e.jsx("text",{x:"30",y:"128",fill:"#d1fae5",fontSize:"9",children:"Forces explicit let/const declarations"}),e.jsx("text",{x:"30",y:"146",fill:"#d1fae5",fontSize:"9",children:"this in plain function is undefined; TurboFan optimizes"})]})]})}),e.jsx("p",{className:"text-xs text-slate-400 mt-3 text-center",children:"Figure 1.7: Architectural contrast showing how Strict Mode halts silent leaks and enforces explicit bindings."})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Strict Mode Invariants & ECMAScript Specifications"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed mb-6",children:"The ECMAScript specification defines formal execution invariants that are actively enforced when Strict Mode is enabled."}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse border border-slate-800",children:[e.jsx("thead",{className:"bg-slate-900/90 text-amber-300 uppercase text-xs",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border border-slate-800",children:"Syntax / Operation"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Sloppy Mode Behavior"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Strict Mode Behavior"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Thrown Error Type"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 font-mono text-xs",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-amber-400 font-bold",children:"Undeclared Var: x = 10"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Creates window.x property silently"}),e.jsx("td",{className:"p-3 text-rose-400 font-sans",children:"Throws immediately"}),e.jsx("td",{className:"p-3 text-rose-400",children:"ReferenceError"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400 font-bold",children:"Mutate Object.freeze()"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Silent failure (property unchanged)"}),e.jsx("td",{className:"p-3 text-rose-400 font-sans",children:"Throws immediately"}),e.jsx("td",{className:"p-3 text-rose-400",children:"TypeError"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-purple-400 font-bold",children:"Duplicate params: f(a, a)"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Allowed (second overwrites first)"}),e.jsx("td",{className:"p-3 text-rose-400 font-sans",children:"Throws at parse time"}),e.jsx("td",{className:"p-3 text-rose-400",children:"SyntaxError"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"Plain function this"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Coerces to window / global"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Remains undefined"}),e.jsx("td",{className:"p-3 text-slate-400",children:"None (Safe Binding)"})]})]})]})}),e.jsxs("div",{className:"mt-6 p-5 rounded-xl bg-slate-900/80 border border-rose-900/40 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Crucial Strict Mode Edge Cases"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-slate-300 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-rose-300",children:"Script Concatenation Trap:"})," Placing ",e.jsx("code",{children:'"use strict";'})," at the top of a file that gets concatenated with non-strict legacy files forces the entire bundle into strict mode, potentially breaking third-party scripts."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-amber-300",children:"Strict Mode in ES6:"})," All ES6 Modules (",e.jsx("code",{children:"import/export"}),") and ES6 Classes are automatically strict. Manually adding ",e.jsx("code",{children:'"use strict"'})," in React/Vite components is redundant."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-sky-300",children:"Directive Placement:"})," ",e.jsx("code",{children:'"use strict"'})," must be the absolute first statement in a file or function; placing it after any variable declaration renders it ineffective."]})]})]})]})}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Interactive Monaco Playground: 5+ Practical Working Examples"]}),e.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded bg-amber-950/60 border border-amber-800 text-amber-300",children:"Live In-Browser Execution"})]}),e.jsx("div",{className:"rounded-2xl border border-slate-800 overflow-hidden shadow-2xl bg-slate-900",children:e.jsx(d,{initialCode:h,title:"StrictModeUseStrictMechanicsGlobalScopeLeakPreventionDemo.js"})})]}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚖️"})," Common Pitfalls vs Senior Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold",children:[e.jsx("span",{children:"❌"}),e.jsx("span",{children:"Anti-Pattern: Global Unscoped Directive in Legacy Code"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Adding ",e.jsx("code",{children:'"use strict";'})," globally to an unbundled multi-script legacy project can cause unhandled exceptions in older plugins."]}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/50 text-xs font-mono text-rose-300 overflow-x-auto",children:`// ❌ AVOID: Top of monolithic legacy bundle
"use strict";
// Legacy plugins relying on sloppy 'this' will throw TypeError!`})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold",children:[e.jsx("span",{children:"✓"}),e.jsx("span",{children:"Senior Pro: IIFE or Native ES Module Scoping"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Encapsulate strict mode within modern ES Modules or self-contained IIFEs to protect surrounding scripts."}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-emerald-900/50 text-xs font-mono text-emerald-300 overflow-x-auto",children:`// ✓ RECOMMENDED: Scoped and safe
(function() {
  "use strict";
  // Safe strict execution isolated from other scripts
})();`})]})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-950/30 via-slate-900 to-purple-950/20 border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xl shadow-md",children:"💎"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs uppercase font-mono tracking-wider text-amber-400 font-bold block",children:"JavaScript Hidden Gem & Senior Pro Secret"}),e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Runtime Strict Mode Detector Pattern"})]})]}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed mb-6",children:["You can programmatically verify whether your current execution context is in Strict Mode by checking whether ",e.jsx("code",{children:"this"})," evaluates to ",e.jsx("code",{children:"undefined"})," inside an immediately invoked function expression."]}),e.jsx("div",{className:"rounded-xl border border-amber-900/50 bg-slate-950 p-4 font-mono text-xs text-amber-200 overflow-x-auto",children:e.jsx("pre",{children:`// 💎 SENIOR PRO SECRET: Universal Strict Mode Detection Utility
const isStrictActive = (function() {
  return this === undefined;
})();
console.log("Is Current Context Strict?:", isStrictActive);`})})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-indigo-950/20 border border-indigo-800/40 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-indigo-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Architectural Mental Challenge: Think About This..."]}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed mb-4",children:["If an object is frozen with ",e.jsx("code",{children:"Object.freeze()"}),", why does mutating a property fail silently in sloppy mode, but throw a ",e.jsx("code",{children:"TypeError"})," in strict mode?"]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-indigo-900/50 text-xs sm:text-sm text-indigo-300 font-mono",children:["💡 Hint: ECMAScript specification dictates that in non-strict mode, failing property assignments return ",e.jsx("code",{children:"false"})," silently; in strict mode, failing the ",e.jsx("code",{children:"[[Set]]"})," internal method throws an explicit ",e.jsx("code",{children:"TypeError"}),"!"]})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(l,{title:"Frequently Asked Questions · Strict Mode ('use strict') Mechanics",subtitle:"Explore 25+ comprehensive questions on scoping, TypeError exceptions, and ES6 module defaults",questions:p})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(c,{content:m,title:"JavaScript Master Note · Strict Mode ('use strict') Mechanics",downloadFileName:"001_001_getting-started-with-javascript-topic6-note.txt"})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(a,{note:"In my 27+ years of mentoring engineers at Coder & AccoTax in Barrackpore, I teach that Strict Mode is the first line of defense against sloppy code. Always declare your variables explicitly with let and const, and let the engine protect you from global leaks."})})]})]})}export{v as default};
