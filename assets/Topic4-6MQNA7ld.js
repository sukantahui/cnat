import{b as r,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import{F as c}from"./FAQTemplate-BHhlgA96.js";import{P as l}from"./PlainTextPrint-C08xhKA4.js";import{J as d}from"./JavaScriptEditableCodeBlock-CsgUqchn.js";import"./vendor-icons-DGCamHnX.js";import"./vendor-monaco-Bv7hoEkV.js";const p=[{question:"What is the primary role of Literals & Data Types in JavaScript in modern JavaScript development?",shortAnswer:"Literals & Data Types in JavaScript provides the essential runtime rules and architectural patterns required to build predictable, performant, and maintainable JavaScript applications.",explanation:"In modern ECMAScript standards (ES6+), mastering Literals & Data Types in JavaScript allows engineers to avoid runtime pitfalls, leverage engine optimizations in V8, and ensure full cross-browser compatibility.",hint:"Focus on how Literals & Data Types in JavaScript operates during compilation and runtime execution.",level:"basic",codeExample:`console.log("Core principle of Literals & Data Types in JavaScript");
const isVerified = true;
console.log({ isVerified });`},{question:"How does the JavaScript engine interpret and execute Literals & Data Types in JavaScript?",shortAnswer:"The V8 engine parses code into an Abstract Syntax Tree (AST), generates bytecode via Ignition, and uses TurboFan for JIT optimization during execution.",explanation:"Understanding this lifecycle ensures that variables, function scopes, and memory allocations are handled cleanly without triggering de-optimizations.",hint:"Think: Parser → Ignition Bytecode → Feedback Vector → TurboFan Machine Code.",level:"intermediate",codeExample:`function traceExecution() {
  console.log("Tracing execution pipeline for Literals & Data Types in JavaScript");
}
traceExecution();`},{question:"What is the most common beginner mistake when dealing with Literals & Data Types in JavaScript?",shortAnswer:"Failing to account for implicit type coercion, variable hoisting scopes (temporal dead zone), or unhandled edge cases in asynchronous execution.",explanation:"Beginners often assume immediate synchronous execution or overlook strict equality checks, leading to subtle logic bugs.",hint:"Always use strict equality (===) and declare variables with const/let.",level:"advanced",codeExample:`// Avoid implicit coercion:
const val = "42";
console.log(Number(val) === 42); // true (explicit and safe)`},{question:"How do senior developers optimize memory and CPU cycles when applying Literals & Data Types in JavaScript?",shortAnswer:"By avoiding accidental global closures, reusing object shapes for inline caching (IC), and keeping functional pipelines immutable without unnecessary allocations.",explanation:"V8 optimizes functions when object property shapes stay monomorphic. Creating dynamic, changing shapes triggers megamorphic de-optimizations.",hint:"Keep object properties initialized in the exact same order in constructors.",level:"expert",codeExample:`class OptimizedItem {
  constructor(id, label) {
    this.id = id;
    this.label = label;
  }
}`},{question:"What is the difference between synchronous and asynchronous behavior in the context of Literals & Data Types in JavaScript?",shortAnswer:"Synchronous code blocks the single-threaded Call Stack, while asynchronous operations delegate tasks to Web APIs / libuv and resolve via the Microtask/Macrotask queues.",explanation:"Promises and queueMicrotask() execute immediately after current synchronous execution completes, before timers or UI rendering.",hint:"Microtasks (Promises) always take precedence over Macrotasks (setTimeout).",level:"basic",codeExample:`console.log("1. Sync");
Promise.resolve().then(() => console.log("2. Microtask"));
setTimeout(() => console.log("3. Macrotask"), 0);`},{question:"Question 6: How does Literals & Data Types in JavaScript handle edge case scenario #6?",shortAnswer:"Under scenario #6, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #6 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"intermediate",codeExample:`// Test case for Question 6
function testCase6(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 6:", sanitized);
  return sanitized;
}
testCase6();`},{question:"Question 7: How does Literals & Data Types in JavaScript handle edge case scenario #7?",shortAnswer:"Under scenario #7, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #7 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"advanced",codeExample:`// Test case for Question 7
function testCase7(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 7:", sanitized);
  return sanitized;
}
testCase7();`},{question:"Question 8: How does Literals & Data Types in JavaScript handle edge case scenario #8?",shortAnswer:"Under scenario #8, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #8 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"expert",codeExample:`// Test case for Question 8
function testCase8(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 8:", sanitized);
  return sanitized;
}
testCase8();`},{question:"Question 9: How does Literals & Data Types in JavaScript handle edge case scenario #9?",shortAnswer:"Under scenario #9, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #9 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"basic",codeExample:`// Test case for Question 9
function testCase9(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 9:", sanitized);
  return sanitized;
}
testCase9();`},{question:"Question 10: How does Literals & Data Types in JavaScript handle edge case scenario #10?",shortAnswer:"Under scenario #10, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #10 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"intermediate",codeExample:`// Test case for Question 10
function testCase10(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 10:", sanitized);
  return sanitized;
}
testCase10();`},{question:"Question 11: How does Literals & Data Types in JavaScript handle edge case scenario #11?",shortAnswer:"Under scenario #11, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #11 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"advanced",codeExample:`// Test case for Question 11
function testCase11(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 11:", sanitized);
  return sanitized;
}
testCase11();`},{question:"Question 12: How does Literals & Data Types in JavaScript handle edge case scenario #12?",shortAnswer:"Under scenario #12, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #12 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"expert",codeExample:`// Test case for Question 12
function testCase12(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 12:", sanitized);
  return sanitized;
}
testCase12();`},{question:"Question 13: How does Literals & Data Types in JavaScript handle edge case scenario #13?",shortAnswer:"Under scenario #13, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #13 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"basic",codeExample:`// Test case for Question 13
function testCase13(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 13:", sanitized);
  return sanitized;
}
testCase13();`},{question:"Question 14: How does Literals & Data Types in JavaScript handle edge case scenario #14?",shortAnswer:"Under scenario #14, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #14 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"intermediate",codeExample:`// Test case for Question 14
function testCase14(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 14:", sanitized);
  return sanitized;
}
testCase14();`},{question:"Question 15: How does Literals & Data Types in JavaScript handle edge case scenario #15?",shortAnswer:"Under scenario #15, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #15 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"advanced",codeExample:`// Test case for Question 15
function testCase15(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 15:", sanitized);
  return sanitized;
}
testCase15();`},{question:"Question 16: How does Literals & Data Types in JavaScript handle edge case scenario #16?",shortAnswer:"Under scenario #16, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #16 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"expert",codeExample:`// Test case for Question 16
function testCase16(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 16:", sanitized);
  return sanitized;
}
testCase16();`},{question:"Question 17: How does Literals & Data Types in JavaScript handle edge case scenario #17?",shortAnswer:"Under scenario #17, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #17 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"basic",codeExample:`// Test case for Question 17
function testCase17(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 17:", sanitized);
  return sanitized;
}
testCase17();`},{question:"Question 18: How does Literals & Data Types in JavaScript handle edge case scenario #18?",shortAnswer:"Under scenario #18, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #18 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"intermediate",codeExample:`// Test case for Question 18
function testCase18(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 18:", sanitized);
  return sanitized;
}
testCase18();`},{question:"Question 19: How does Literals & Data Types in JavaScript handle edge case scenario #19?",shortAnswer:"Under scenario #19, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #19 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"advanced",codeExample:`// Test case for Question 19
function testCase19(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 19:", sanitized);
  return sanitized;
}
testCase19();`},{question:"Question 20: How does Literals & Data Types in JavaScript handle edge case scenario #20?",shortAnswer:"Under scenario #20, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #20 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"expert",codeExample:`// Test case for Question 20
function testCase20(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 20:", sanitized);
  return sanitized;
}
testCase20();`},{question:"Question 21: How does Literals & Data Types in JavaScript handle edge case scenario #21?",shortAnswer:"Under scenario #21, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #21 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"basic",codeExample:`// Test case for Question 21
function testCase21(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 21:", sanitized);
  return sanitized;
}
testCase21();`},{question:"Question 22: How does Literals & Data Types in JavaScript handle edge case scenario #22?",shortAnswer:"Under scenario #22, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #22 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"intermediate",codeExample:`// Test case for Question 22
function testCase22(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 22:", sanitized);
  return sanitized;
}
testCase22();`},{question:"Question 23: How does Literals & Data Types in JavaScript handle edge case scenario #23?",shortAnswer:"Under scenario #23, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #23 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"advanced",codeExample:`// Test case for Question 23
function testCase23(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 23:", sanitized);
  return sanitized;
}
testCase23();`},{question:"Question 24: How does Literals & Data Types in JavaScript handle edge case scenario #24?",shortAnswer:"Under scenario #24, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #24 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"expert",codeExample:`// Test case for Question 24
function testCase24(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 24:", sanitized);
  return sanitized;
}
testCase24();`},{question:"Question 25: How does Literals & Data Types in JavaScript handle edge case scenario #25?",shortAnswer:"Under scenario #25, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #25 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"basic",codeExample:`// Test case for Question 25
function testCase25(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 25:", sanitized);
  return sanitized;
}
testCase25();`},{question:"Question 26: How does Literals & Data Types in JavaScript handle edge case scenario #26?",shortAnswer:"Under scenario #26, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #26 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"intermediate",codeExample:`// Test case for Question 26
function testCase26(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 26:", sanitized);
  return sanitized;
}
testCase26();`},{question:"Question 27: How does Literals & Data Types in JavaScript handle edge case scenario #27?",shortAnswer:"Under scenario #27, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #27 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"advanced",codeExample:`// Test case for Question 27
function testCase27(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 27:", sanitized);
  return sanitized;
}
testCase27();`},{question:"Question 28: How does Literals & Data Types in JavaScript handle edge case scenario #28?",shortAnswer:"Under scenario #28, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Literals & Data Types in JavaScript in edge condition #28 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"expert",codeExample:`// Test case for Question 28
function testCase28(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 28:", sanitized);
  return sanitized;
}
testCase28();`}],u=`================================================================================\r
CODER & ACCOTAX - JAVASCRIPT COMPLETE ROADMAP\r
MODULE [001_002_javascript-syntax-and-basics]: JavaScript Syntax, Variables & Data Types\r
TOPIC [4]: Literals & Data Types in JavaScript\r
Educator: Sukanta Hui | Barrackpore, West Bengal, India\r
================================================================================\r
\r
1. CORE CONCEPTS & RULES\r
--------------------------------------------------------------------------------\r
- Literals & Data Types in JavaScript is a foundational pillar of modern JavaScript application architecture.\r
- Execution is governed by ECMAScript specification rules and V8 engine JIT compilation.\r
- Follows the single-threaded event loop concurrency model with microtask priority.\r
- Adheres to lexical scoping, strict mode ('use strict') standards, and defensive coding.\r
\r
2. SYNTAX & JAVASCRIPT CODE SNIPPETS\r
--------------------------------------------------------------------------------\r
// Standard ES6+ JavaScript implementation\r
const executeTopicRoutine = (payload = {}) => {\r
  const timestamp = new Date().toISOString();\r
  console.log("[JS-PRO-101] Executing topic: Literals & Data Types in JavaScript");\r
  return {\r
    success: true,\r
    topic: "Literals & Data Types in JavaScript",\r
    timestamp,\r
    ...payload\r
  };\r
};\r
\r
const result = executeTopicRoutine({ student: "Swadeep", center: "Barrackpore" });\r
console.log("Routine Result:", result);\r
\r
3. 💎 HIDDEN GEMS & PRO SECRETS\r
--------------------------------------------------------------------------------\r
- V8 Hidden Classes & Inline Caching: Always instantiate object fields in consistent order.\r
- Microtask queue prioritization: queueMicrotask() executes before next rendering frame.\r
- Strict Equality vs Object.is(): Object.is(NaN, NaN) is true, and Object.is(+0, -0) is false.\r
- Structured Clone: native window.structuredClone() handles circular object graphs safely.\r
\r
4. CRITICAL PITFALLS TO AVOID\r
--------------------------------------------------------------------------------\r
[!] Watch out for Temporal Dead Zone (TDZ) when referencing let/const before declaration.\r
[!] Never rely on loose equality (==) which triggers complex implicit type coercion rules.\r
[!] Beware of unhandled Promise rejections and uncleaned event listeners causing memory leaks.\r
[!] Do not mutate array parameters directly in functions; use immutable utilities.\r
\r
5. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Core concept and syntax patterns thoroughly mastered.\r
[✓] Interactive Monaco playground code executed with zero runtime exceptions.\r
[✓] Understood memory stack vs heap allocation behavior.\r
[✓] Completed all 25+ comprehensive domain FAQ questions.\r
[✓] Ready for senior software engineer technical interview assessments.\r
================================================================================\r
`,x=`// ============================================================================\r
// CODER & ACCOTAX - JAVASCRIPT MASTERCLASS\r
// Module: 001_002_javascript-syntax-and-basics\r
// Topic: Literals & Data Types in JavaScript\r
// Classroom Lab: Barrackpore Lab\r
// Mentors: Sukanta Hui | Students: Swadeep, Tuhina\r
// ============================================================================\r
\r
console.log("=== [1] FUNDAMENTAL CONCEPT & INITIALIZATION ===");\r
console.log("Demonstrating foundational mechanics for: Literals & Data Types in JavaScript");\r
console.log("");\r
\r
// Example 1: Basic declaration and setup\r
const courseConfig = {\r
  subject: "JavaScript Master Pro",\r
  module: "JavaScript Syntax, Variables & Data Types",\r
  center: "Barrackpore Lab",\r
  student: "Swadeep",\r
  score: 95.5,\r
  isActive: true\r
};\r
\r
console.log("Configured student profile:");\r
console.log(courseConfig);\r
console.log("Student Name:", courseConfig.student);\r
console.log("Status Active:", courseConfig.isActive);\r
console.log("");\r
\r
console.log("=== [2] CORE DATA PROCESSING & FUNCTION PIPELINE ===");\r
// Example 2: Practical data manipulation\r
function processTopicData(items) {\r
  return items.map((item, index) => {\r
    return {\r
      index: index + 1,\r
      name: item,\r
      processedAt: new Date().toISOString(),\r
      verifiedBy: "Tuhina"\r
    };\r
  });\r
}\r
\r
const sampleList = ["Foundational Syntax", "Execution Mechanics", "Optimization Rules"];\r
const processedResults = processTopicData(sampleList);\r
console.log("Processed pipeline data:");\r
console.table(processedResults);\r
console.log("");\r
\r
console.log("=== [3] ALGORITHMIC LOGIC & CONTROL FLOW ===");\r
// Example 3: Branching and transformation logic\r
function evaluateProficiency(score) {\r
  if (score >= 90) return { grade: "Distinction", level: "Ultra Expert" };\r
  if (score >= 75) return { grade: "First Class", level: "Advanced" };\r
  if (score >= 50) return { grade: "Pass", level: "Intermediate" };\r
  return { grade: "Needs Review", level: "Beginner" };\r
}\r
\r
const evaluation = evaluateProficiency(courseConfig.score);\r
console.log("Evaluation Result for " + courseConfig.student + ":", evaluation);\r
console.log("");\r
\r
console.log("=== [4] ERROR RESILIENCE & SAFE GUARDS ===");\r
// Example 4: Defensive programming and validation\r
function safeRunner(action, fallbackValue) {\r
  try {\r
    return action();\r
  } catch (err) {\r
    console.warn("Recovered from operational failure:", err.message);\r
    return fallbackValue;\r
  }\r
}\r
\r
const safeOutcome = safeRunner(() => {\r
  const data = JSON.parse('{"status": "success", "metric": 99.9}');\r
  return data.status + " → Metric: " + data.metric;\r
}, "default_fallback");\r
\r
console.log("Safe Execution Output:", safeOutcome);\r
console.log("");\r
\r
console.log("=== [5] SENIOR ARCHITECTURE PATTERN & BEST PRACTICE ===");\r
// Example 5: Modular encapsulation & clean API design\r
const LabController = (function() {\r
  const registry = new Map();\r
  \r
  return {\r
    register(id, handler) {\r
      registry.set(id, handler);\r
      console.log("Registered handler for key: [" + id + "]");\r
    },\r
    dispatch(id, payload) {\r
      if (!registry.has(id)) {\r
        console.error("No handler registered for: " + id);\r
        return null;\r
      }\r
      return registry.get(id)(payload);\r
    },\r
    getRegistrySize() {\r
      return registry.size;\r
    }\r
  };\r
})();\r
\r
LabController.register("INIT_TOPIC", (payload) => {\r
  return "Lab initialized with payload: " + JSON.stringify(payload);\r
});\r
\r
const dispatchResult = LabController.dispatch("INIT_TOPIC", {\r
  topic: "Literals & Data Types in JavaScript",\r
  student: "Swadeep",\r
  mentor: "Sukanta Hui"\r
});\r
\r
console.log("Dispatch Output:", dispatchResult);\r
console.log("Total Registered Handlers:", LabController.getRegistrySize());\r
console.log("");\r
console.log("=== JavaScript Lab Execution Completed Successfully ===");\r
`;function S(){const s=r.useRef([]);r.useEffect(()=>{const t=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&i.target.classList.add("is-visible")})},{threshold:.08});return s.current.forEach(a=>{a&&t.observe(a)}),()=>t.disconnect()},[]);const n=t=>{t&&!s.current.includes(t)&&s.current.push(t)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          opacity: 0.99;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[e.jsxs("header",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-700/60 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"Module 001_002_javascript-syntax-and-basics · Topic 4"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-sky-300 tracking-tight leading-tight",children:"Literals & Data Types in JavaScript"}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:"Understand the 7 primitive data types, composite object types, and literal declaration syntaxes in modern ECMAScript."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400",children:"Course Code: JS-PRO-101"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:border-slate-700 transition-all",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Detailed Conceptual Foundation & Mechanics"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["Mastering ",e.jsx("strong",{className:"text-amber-300",children:"Literals & Types"})," provides the rock-solid foundation necessary for advanced JavaScript and TypeScript development. In high-scale web applications, subtle syntax nuances, type coercions, and lexical scoping rules dictate how the V8 engine allocates memory and compiles bytecode."]}),e.jsx("p",{className:"text-slate-300 leading-relaxed mb-4",children:"By understanding the underlying ECMAScript formal specifications, engineers avoid silent runtime bugs, write clean idiomatic code, and pass rigorous technical architecture interviews."}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/90 border border-amber-900/40 text-sm text-slate-300 leading-relaxed space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold",children:[e.jsx("span",{children:"🏫"}),e.jsx("span",{children:"Classroom Scenario (Barrackpore Lab):"})]}),e.jsxs("p",{children:["During an interactive lab session, student ",e.jsx("strong",{children:"Debangshu"})," encountered unexpected runtime behavior. Debangshu confused primitive value copy with object reference copying, assuming obj2 = obj1 cloned the object. Sukanta Hui traced memory addresses on the board showing Call Stack value copies vs Heap pointer references."]}),e.jsxs("p",{children:["Mentor ",e.jsx("strong",{children:"Sukanta Hui"})," demonstrated the step-by-step memory allocation on the whiteboard, showing how mastering ",e.jsx("em",{children:"Literals & Types"})," guarantees deterministic code execution."]})]})]})}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," 7 Primitives (Call Stack) vs Object Structures (Memory Heap)"]}),e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 840 280",className:"w-full h-auto",role:"img","aria-label":"Literals & Data Types in JavaScript Architecture",children:[e.jsx("rect",{width:"840",height:"280",rx:"16",fill:"#0b1120",stroke:"#1e293b",strokeWidth:"1.5"}),e.jsx("text",{x:"420",y:"28",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",textAnchor:"middle",children:"7 Primitives (Call Stack) vs Object Structures (Memory Heap)"}),e.jsxs("g",{transform:"translate(40, 50)",children:[e.jsx("rect",{width:"360",height:"190",rx:"10",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"180",y:"26",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"7 Primitive Types (Stack Memory / Value Copy)"}),e.jsx("rect",{x:"20",y:"45",width:"320",height:"120",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsxs("text",{x:"35",y:"68",fill:"#e2e8f0",fontSize:"10",children:["• ",e.jsx("strong",{class:"text-sky-300",children:"number"}),": 42, 3.14159, NaN, Infinity"]}),e.jsxs("text",{x:"35",y:"86",fill:"#e2e8f0",fontSize:"10",children:["• ",e.jsx("strong",{class:"text-sky-300",children:"string"}),": 'hello', \"world\", `template`"]}),e.jsxs("text",{x:"35",y:"104",fill:"#e2e8f0",fontSize:"10",children:["• ",e.jsx("strong",{class:"text-sky-300",children:"boolean"}),": true, false | ",e.jsx("strong",{class:"text-sky-300",children:"undefined"})," | ",e.jsx("strong",{class:"text-sky-300",children:"null"})]}),e.jsxs("text",{x:"35",y:"122",fill:"#e2e8f0",fontSize:"10",children:["• ",e.jsx("strong",{class:"text-sky-300",children:"symbol"}),": Symbol('id') (Unique)"]}),e.jsxs("text",{x:"35",y:"140",fill:"#e2e8f0",fontSize:"10",children:["• ",e.jsx("strong",{class:"text-sky-300",children:"bigint"}),": 9007199254740991n (Arbitrary)"]})]}),e.jsxs("g",{transform:"translate(440, 50)",children:[e.jsx("rect",{width:"360",height:"190",rx:"10",fill:"#1e293b",stroke:"#a855f7",strokeWidth:"1.5"}),e.jsx("text",{x:"180",y:"26",fill:"#c084fc",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"Composite Object Types (Heap Memory / Pointer Reference)"}),e.jsx("rect",{x:"20",y:"45",width:"320",height:"120",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsxs("text",{x:"35",y:"68",fill:"#e2e8f0",fontSize:"10",children:["• ",e.jsx("strong",{class:"text-purple-300",children:"Object"}),': { name: "Swadeep", score: 98 }']}),e.jsxs("text",{x:"35",y:"90",fill:"#e2e8f0",fontSize:"10",children:["• ",e.jsx("strong",{class:"text-purple-300",children:"Array"}),": [10, 20, 30] (Specialized Object)"]}),e.jsxs("text",{x:"35",y:"112",fill:"#e2e8f0",fontSize:"10",children:["• ",e.jsx("strong",{class:"text-purple-300",children:"Function"}),": First-Class Callable Object"]}),e.jsxs("text",{x:"35",y:"134",fill:"#e2e8f0",fontSize:"10",children:["• ",e.jsx("strong",{class:"text-purple-300",children:"Map / Set / Date / RegExp / Error"})]})]})]})}),e.jsx("p",{className:"text-xs text-slate-400 mt-3 text-center",children:"Figure 4.1: Runtime execution pipeline, memory layout, and engine rules for Literals & Types."})]})}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Deep Technical Know-How & Spec Invariants"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed mb-6",children:"The ECMAScript specification governs strict lexical grammar and runtime type transitions. Understanding these low-level invariants ensures complete cross-engine compatibility across V8, SpiderMonkey, and JavaScriptCore."}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse border border-slate-800",children:[e.jsx("thead",{className:"bg-slate-900/90 text-amber-300 uppercase text-xs font-mono",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border border-slate-800",children:"Core Rule / Feature"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"ECMAScript Spec Clause"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Engine Implementation"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Best Practice Standard"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-xs font-mono",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400",children:"Lexical Evaluation"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"ECMA-262 Grammatical Grammar"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"Ignition Scanner Tokenizer"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Use strict mode ('use strict')"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400",children:"Memory Allocation"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"ExecutionContext Environment Records"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"Call Stack Frame vs Heap Handle"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Prefer const > let > avoid var"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400",children:"Optimization Tier"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Type Invariants & Feedback Vectors"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"TurboFan Inline Caches (IC)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Keep data shapes monomorphic"})]})]})]})}),e.jsxs("div",{className:"mt-6 p-5 rounded-xl bg-slate-900/80 border border-rose-900/40 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Exceptions, Quirks & Traps to Avoid"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-slate-300 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-rose-300",children:"Coercion Drift:"})," Using loose equality (",e.jsx("code",{className:"text-amber-300",children:"=="}),") triggers complex 12-step type conversion rules. Always use strict equality (",e.jsx("code",{className:"text-emerald-400",children:"==="}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-amber-300",children:"Unintended Globals:"})," In non-strict mode, assigning to an undeclared variable attaches it to the global ",e.jsx("code",{className:"text-slate-200",children:"window"})," object."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-sky-300",children:"Precision Traps:"})," Financial numbers must never be summed directly as IEEE 754 floats. Use cents/integers or a BigInt/Decimal library."]})]})]})]})}),e.jsxs("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Interactive Monaco Playground: Practical Working Examples"]}),e.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded bg-amber-950/60 border border-amber-800 text-amber-300",children:"Live In-Browser Execution"})]}),e.jsx("div",{className:"rounded-2xl border border-slate-800 overflow-hidden shadow-2xl bg-slate-900",children:e.jsx(d,{initialCode:x,title:"LiteralsAndDataTypesDemo.js"})})]}),e.jsxs("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚖️"})," Common Pitfalls vs Senior Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold",children:[e.jsx("span",{children:"❌"}),e.jsx("span",{children:"Anti-Pattern: Implicit Coercion Assumptions"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Relying on implicit coercion in comparisons causes severe logic bugs across truthy/falsy edges."}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/50 text-xs font-mono text-rose-300 overflow-x-auto",children:`// ❌ AVOID:
if (val == false) {
  // Matches 0, "", [], and false!
}`})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold",children:[e.jsx("span",{children:"✓"}),e.jsx("span",{children:"Senior Best Practice: Strict Type Boundaries"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Always use strict equality and explicit type conversion guards."}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-emerald-900/50 text-xs font-mono text-emerald-300 overflow-x-auto",children:`// ✓ RECOMMENDED:
if (val === false) {
  // Strictly matches boolean false
}`})]})]})]}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-950/30 via-slate-900 to-purple-950/20 border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xl shadow-md",children:"💎"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs uppercase font-mono tracking-wider text-amber-400 font-bold block",children:"JavaScript Hidden Gem & Senior Pro Secret"}),e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Numeric Separator Literal (1_000_000)"})]})]}),e.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed mb-6",children:"Modern JavaScript (ES2021) supports numeric separators (_) in number literals to improve readability without affecting numerical value."}),e.jsx("div",{className:"rounded-xl border border-amber-900/50 bg-slate-950 p-4 font-mono text-xs text-amber-200 overflow-x-auto",children:e.jsx("pre",{children:`// 💎 SENIOR SECRET:
const salary = 1_500_000;
const byteMask = 0b1111_0000;
console.log(salary === 1500000); // true`})})]})}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-indigo-950/20 border border-indigo-800/40 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-indigo-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Architectural Mental Challenge: Type Safety in Dynamic JavaScript"]}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed mb-4",children:"In a large distributed frontend team without a full TypeScript build pipeline, what architectural patterns guarantee runtime type safety across critical API gateways?"}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-indigo-900/50 text-xs sm:text-sm text-indigo-300 font-mono",children:["💡 Hint: Implement schema validation layers (such as ",e.jsx("code",{className:"text-amber-300",children:"Zod"})," or lightweight runtime assertion contracts) at the network boundary to validate incoming JSON before it enters application state."]})]})}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(c,{title:"Frequently Asked Questions · Literals & Types",subtitle:"Explore 25 comprehensive questions covering runtime mechanics, memory models, and engine optimizations",questions:p})}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(l,{content:u,title:"JavaScript Master Note · Literals & Types",downloadFileName:"001_002_javascript-syntax-and-basics-topic4-note.txt"})}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(o,{note:"In my 27+ years of training software engineers at Coder & AccoTax in Barrackpore, I always emphasize that JavaScript's dynamic flexibility is its greatest power and its greatest trap. Understand type coercion, scoping, and value representation deeply, and you will write unbreakable code."})})]})]})}export{S as default};
