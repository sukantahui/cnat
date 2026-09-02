import{b as r,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import{F as c}from"./FAQTemplate-BHhlgA96.js";import{P as l}from"./PlainTextPrint-C08xhKA4.js";import{J as d}from"./JavaScriptEditableCodeBlock-CE9UdfAI.js";import"./vendor-icons-wprqVFW_.js";import"./vendor-monaco-Bv7hoEkV.js";const u=[{question:"What is the primary role of Logical Operators (&&, ||, !) in modern JavaScript development?",shortAnswer:"Logical Operators (&&, ||, !) provides the essential runtime rules and architectural patterns required to build predictable, performant, and maintainable JavaScript applications.",explanation:"In modern ECMAScript standards (ES6+), mastering Logical Operators (&&, ||, !) allows engineers to avoid runtime pitfalls, leverage engine optimizations in V8, and ensure full cross-browser compatibility.",hint:"Focus on how Logical Operators (&&, ||, !) operates during compilation and runtime execution.",level:"basic",codeExample:`console.log("Core principle of Logical Operators (&&, ||, !)");
const isVerified = true;
console.log({ isVerified });`},{question:"How does the JavaScript engine interpret and execute Logical Operators (&&, ||, !)?",shortAnswer:"The V8 engine parses code into an Abstract Syntax Tree (AST), generates bytecode via Ignition, and uses TurboFan for JIT optimization during execution.",explanation:"Understanding this lifecycle ensures that variables, function scopes, and memory allocations are handled cleanly without triggering de-optimizations.",hint:"Think: Parser → Ignition Bytecode → Feedback Vector → TurboFan Machine Code.",level:"intermediate",codeExample:`function traceExecution() {
  console.log("Tracing execution pipeline for Logical Operators (&&, ||, !)");
}
traceExecution();`},{question:"What is the most common beginner mistake when dealing with Logical Operators (&&, ||, !)?",shortAnswer:"Failing to account for implicit type coercion, variable hoisting scopes (temporal dead zone), or unhandled edge cases in asynchronous execution.",explanation:"Beginners often assume immediate synchronous execution or overlook strict equality checks, leading to subtle logic bugs.",hint:"Always use strict equality (===) and declare variables with const/let.",level:"advanced",codeExample:`// Avoid implicit coercion:
const val = "42";
console.log(Number(val) === 42); // true (explicit and safe)`},{question:"How do senior developers optimize memory and CPU cycles when applying Logical Operators (&&, ||, !)?",shortAnswer:"By avoiding accidental global closures, reusing object shapes for inline caching (IC), and keeping functional pipelines immutable without unnecessary allocations.",explanation:"V8 optimizes functions when object property shapes stay monomorphic. Creating dynamic, changing shapes triggers megamorphic de-optimizations.",hint:"Keep object properties initialized in the exact same order in constructors.",level:"expert",codeExample:`class OptimizedItem {
  constructor(id, label) {
    this.id = id;
    this.label = label;
  }
}`},{question:"What is the difference between synchronous and asynchronous behavior in the context of Logical Operators (&&, ||, !)?",shortAnswer:"Synchronous code blocks the single-threaded Call Stack, while asynchronous operations delegate tasks to Web APIs / libuv and resolve via the Microtask/Macrotask queues.",explanation:"Promises and queueMicrotask() execute immediately after current synchronous execution completes, before timers or UI rendering.",hint:"Microtasks (Promises) always take precedence over Macrotasks (setTimeout).",level:"basic",codeExample:`console.log("1. Sync");
Promise.resolve().then(() => console.log("2. Microtask"));
setTimeout(() => console.log("3. Macrotask"), 0);`},{question:"Question 6: How does Logical Operators (&&, ||, !) handle edge case scenario #6?",shortAnswer:"Under scenario #6, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #6 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"intermediate",codeExample:`// Test case for Question 6
function testCase6(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 6:", sanitized);
  return sanitized;
}
testCase6();`},{question:"Question 7: How does Logical Operators (&&, ||, !) handle edge case scenario #7?",shortAnswer:"Under scenario #7, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #7 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"advanced",codeExample:`// Test case for Question 7
function testCase7(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 7:", sanitized);
  return sanitized;
}
testCase7();`},{question:"Question 8: How does Logical Operators (&&, ||, !) handle edge case scenario #8?",shortAnswer:"Under scenario #8, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #8 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"expert",codeExample:`// Test case for Question 8
function testCase8(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 8:", sanitized);
  return sanitized;
}
testCase8();`},{question:"Question 9: How does Logical Operators (&&, ||, !) handle edge case scenario #9?",shortAnswer:"Under scenario #9, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #9 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"basic",codeExample:`// Test case for Question 9
function testCase9(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 9:", sanitized);
  return sanitized;
}
testCase9();`},{question:"Question 10: How does Logical Operators (&&, ||, !) handle edge case scenario #10?",shortAnswer:"Under scenario #10, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #10 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"intermediate",codeExample:`// Test case for Question 10
function testCase10(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 10:", sanitized);
  return sanitized;
}
testCase10();`},{question:"Question 11: How does Logical Operators (&&, ||, !) handle edge case scenario #11?",shortAnswer:"Under scenario #11, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #11 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"advanced",codeExample:`// Test case for Question 11
function testCase11(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 11:", sanitized);
  return sanitized;
}
testCase11();`},{question:"Question 12: How does Logical Operators (&&, ||, !) handle edge case scenario #12?",shortAnswer:"Under scenario #12, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #12 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"expert",codeExample:`// Test case for Question 12
function testCase12(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 12:", sanitized);
  return sanitized;
}
testCase12();`},{question:"Question 13: How does Logical Operators (&&, ||, !) handle edge case scenario #13?",shortAnswer:"Under scenario #13, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #13 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"basic",codeExample:`// Test case for Question 13
function testCase13(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 13:", sanitized);
  return sanitized;
}
testCase13();`},{question:"Question 14: How does Logical Operators (&&, ||, !) handle edge case scenario #14?",shortAnswer:"Under scenario #14, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #14 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"intermediate",codeExample:`// Test case for Question 14
function testCase14(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 14:", sanitized);
  return sanitized;
}
testCase14();`},{question:"Question 15: How does Logical Operators (&&, ||, !) handle edge case scenario #15?",shortAnswer:"Under scenario #15, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #15 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"advanced",codeExample:`// Test case for Question 15
function testCase15(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 15:", sanitized);
  return sanitized;
}
testCase15();`},{question:"Question 16: How does Logical Operators (&&, ||, !) handle edge case scenario #16?",shortAnswer:"Under scenario #16, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #16 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"expert",codeExample:`// Test case for Question 16
function testCase16(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 16:", sanitized);
  return sanitized;
}
testCase16();`},{question:"Question 17: How does Logical Operators (&&, ||, !) handle edge case scenario #17?",shortAnswer:"Under scenario #17, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #17 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"basic",codeExample:`// Test case for Question 17
function testCase17(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 17:", sanitized);
  return sanitized;
}
testCase17();`},{question:"Question 18: How does Logical Operators (&&, ||, !) handle edge case scenario #18?",shortAnswer:"Under scenario #18, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #18 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"intermediate",codeExample:`// Test case for Question 18
function testCase18(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 18:", sanitized);
  return sanitized;
}
testCase18();`},{question:"Question 19: How does Logical Operators (&&, ||, !) handle edge case scenario #19?",shortAnswer:"Under scenario #19, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #19 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"advanced",codeExample:`// Test case for Question 19
function testCase19(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 19:", sanitized);
  return sanitized;
}
testCase19();`},{question:"Question 20: How does Logical Operators (&&, ||, !) handle edge case scenario #20?",shortAnswer:"Under scenario #20, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #20 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"expert",codeExample:`// Test case for Question 20
function testCase20(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 20:", sanitized);
  return sanitized;
}
testCase20();`},{question:"Question 21: How does Logical Operators (&&, ||, !) handle edge case scenario #21?",shortAnswer:"Under scenario #21, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #21 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"basic",codeExample:`// Test case for Question 21
function testCase21(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 21:", sanitized);
  return sanitized;
}
testCase21();`},{question:"Question 22: How does Logical Operators (&&, ||, !) handle edge case scenario #22?",shortAnswer:"Under scenario #22, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #22 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"intermediate",codeExample:`// Test case for Question 22
function testCase22(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 22:", sanitized);
  return sanitized;
}
testCase22();`},{question:"Question 23: How does Logical Operators (&&, ||, !) handle edge case scenario #23?",shortAnswer:"Under scenario #23, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #23 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"advanced",codeExample:`// Test case for Question 23
function testCase23(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 23:", sanitized);
  return sanitized;
}
testCase23();`},{question:"Question 24: How does Logical Operators (&&, ||, !) handle edge case scenario #24?",shortAnswer:"Under scenario #24, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #24 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"expert",codeExample:`// Test case for Question 24
function testCase24(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 24:", sanitized);
  return sanitized;
}
testCase24();`},{question:"Question 25: How does Logical Operators (&&, ||, !) handle edge case scenario #25?",shortAnswer:"Under scenario #25, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #25 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"basic",codeExample:`// Test case for Question 25
function testCase25(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 25:", sanitized);
  return sanitized;
}
testCase25();`},{question:"Question 26: How does Logical Operators (&&, ||, !) handle edge case scenario #26?",shortAnswer:"Under scenario #26, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #26 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"intermediate",codeExample:`// Test case for Question 26
function testCase26(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 26:", sanitized);
  return sanitized;
}
testCase26();`},{question:"Question 27: How does Logical Operators (&&, ||, !) handle edge case scenario #27?",shortAnswer:"Under scenario #27, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #27 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"advanced",codeExample:`// Test case for Question 27
function testCase27(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 27:", sanitized);
  return sanitized;
}
testCase27();`},{question:"Question 28: How does Logical Operators (&&, ||, !) handle edge case scenario #28?",shortAnswer:"Under scenario #28, JavaScript strictly validates operands according to the ECMAScript standard specification, falling back to predictable defaults.",explanation:"In standard ECMAScript execution, evaluating Logical Operators (&&, ||, !) in edge condition #28 guarantees reference safety and deterministic behavior across V8, SpiderMonkey, and JavaScriptCore engines.",hint:"Think about boundary values, empty collections, null/undefined inputs, and async rejection handlers.",level:"expert",codeExample:`// Test case for Question 28
function testCase28(input = null) {
  const sanitized = input ?? "DEFAULT_SAFE_VALUE";
  console.log("Handled scenario 28:", sanitized);
  return sanitized;
}
testCase28();`}],p=`================================================================================\r
CODER & ACCOTAX - JAVASCRIPT COMPLETE ROADMAP\r
MODULE [001_003_operators-and-expressions]: Operators, Expressions & Basic Logic\r
TOPIC [3]: Logical Operators (&&, ||, !)\r
Educator: Sukanta Hui | Barrackpore, West Bengal, India\r
================================================================================\r
\r
1. CORE CONCEPTS & RULES\r
--------------------------------------------------------------------------------\r
- Logical Operators (&&, ||, !) is a foundational pillar of modern JavaScript application architecture.\r
- Execution is governed by ECMAScript specification rules and V8 engine JIT compilation.\r
- Follows the single-threaded event loop concurrency model with microtask priority.\r
- Adheres to lexical scoping, strict mode ('use strict') standards, and defensive coding.\r
\r
2. SYNTAX & JAVASCRIPT CODE SNIPPETS\r
--------------------------------------------------------------------------------\r
// Standard ES6+ JavaScript implementation\r
const executeTopicRoutine = (payload = {}) => {\r
  const timestamp = new Date().toISOString();\r
  console.log("[JS-PRO-101] Executing topic: Logical Operators (&&, ||, !)");\r
  return {\r
    success: true,\r
    topic: "Logical Operators (&&, ||, !)",\r
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
`,g=`// ============================================================================\r
// CODER & ACCOTAX - JAVASCRIPT MASTERCLASS\r
// Module: 001_003_operators-and-expressions\r
// Topic: Logical Operators (&&, ||, !)\r
// Classroom Lab: Ichapur Training Room\r
// Mentors: Sukanta Hui | Students: Debangshu, Swadeep\r
// ============================================================================\r
\r
console.log("=== [1] FUNDAMENTAL CONCEPT & INITIALIZATION ===");\r
console.log("Demonstrating foundational mechanics for: Logical Operators (&&, ||, !)");\r
console.log("");\r
\r
// Example 1: Basic declaration and setup\r
const courseConfig = {\r
  subject: "JavaScript Master Pro",\r
  module: "Operators, Expressions & Basic Logic",\r
  center: "Ichapur Training Room",\r
  student: "Debangshu",\r
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
      verifiedBy: "Swadeep"\r
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
  topic: "Logical Operators (&&, ||, !)",\r
  student: "Debangshu",\r
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
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[e.jsxs("header",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-700/60 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"Module 001_003_operators-and-expressions · Topic 3"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-sky-300 tracking-tight leading-tight",children:"Logical Operators in JavaScript (&&, ||, !)"}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:"Master short-circuit evaluation, default fallbacks, and boolean inversion mechanics in modern JavaScript."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400",children:"Course Code: JS-PRO-101"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:border-slate-700 transition-all",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Detailed Conceptual Foundation & Mechanics"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["Mastering ",e.jsx("strong",{className:"text-amber-300",children:"Logical Operators"})," is fundamental for writing concise, reliable, and mathematically accurate JavaScript algorithms. In high-performance web applications, operator evaluations dictate CPU register utilization, expression precedence trees, and memory mutation patterns."]}),e.jsx("p",{className:"text-slate-300 leading-relaxed mb-4",children:"By understanding how the ECMAScript runtime executes operator operands, engineers avoid unexpected side-effects, prevent precedence traps, and write self-documenting code."}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/90 border border-amber-900/40 text-sm text-slate-300 leading-relaxed space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold",children:[e.jsx("span",{children:"🏫"}),e.jsx("span",{children:"Classroom Scenario (Barrackpore Lab):"})]}),e.jsxs("p",{children:["During a lab session, student ",e.jsx("strong",{children:"Debangshu"})," encountered a subtle logical glitch. Debangshu used const count = userCount || 10 for a cart item counter. When the user legitimately selected 0 items, count reset to 10 because 0 is falsy! Sukanta Hui explained why logical nullish coalescing (??) or explicit validation must be used for 0 and ''."]}),e.jsxs("p",{children:["Mentor ",e.jsx("strong",{children:"Sukanta Hui"})," demonstrated the exact step-by-step operand evaluation on the whiteboard, explaining why mastering ",e.jsx("em",{children:"Logical Operators"})," eliminates ambiguity and prevents production regressions."]})]})]})}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Short-Circuit Logical Evaluation Pipeline"]}),e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 840 280",className:"w-full h-auto",role:"img","aria-label":"Logical Operators in JavaScript (&&, ||, !) Architecture",children:[e.jsx("rect",{width:"840",height:"280",rx:"16",fill:"#0b1120",stroke:"#1e293b",strokeWidth:"1.5"}),e.jsx("text",{x:"420",y:"28",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",textAnchor:"middle",children:"Short-Circuit Logical Evaluation Pipeline"}),e.jsxs("g",{transform:"translate(60, 50)",children:[e.jsx("rect",{width:"330",height:"180",rx:"10",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"165",y:"26",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"Logical AND (&&): First Falsy or Last Truthy"}),e.jsx("rect",{x:"15",y:"42",width:"300",height:"120",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"25",y:"65",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:'"apple" && "banana" === "banana"'}),e.jsx("text",{x:"25",y:"85",fill:"#f87171",fontSize:"10",fontFamily:"monospace",children:'null && "banana" === null (Stops early!)'}),e.jsx("text",{x:"25",y:"105",fill:"#e2e8f0",fontSize:"10",children:"Short-circuit: Bypasses right side if left is falsy"}),e.jsx("text",{x:"25",y:"125",fill:"#7dd3fc",fontSize:"9",children:"Used for conditional execution: isAuth && renderUI()"})]}),e.jsxs("g",{transform:"translate(440, 50)",children:[e.jsx("rect",{width:"340",height:"180",rx:"10",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"170",y:"26",fill:"#fbbf24",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"Logical OR (||): First Truthy or Last Falsy"}),e.jsx("rect",{x:"15",y:"42",width:"310",height:"120",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"25",y:"65",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:'"apple" || "banana" === "apple" (Stops early!)'}),e.jsx("text",{x:"25",y:"85",fill:"#fde68a",fontSize:"10",fontFamily:"monospace",children:'"" || "default" === "default"'}),e.jsx("text",{x:"25",y:"105",fill:"#f87171",fontSize:"10",children:"⚠️ Trap: 0 and false trigger fallback!"}),e.jsx("text",{x:"25",y:"125",fill:"#34d399",fontSize:"9",fontWeight:"bold",children:"Use ?? (Nullish Coalescing) when 0 is valid"})]})]})}),e.jsx("p",{className:"text-xs text-slate-400 mt-3 text-center",children:"Figure 3.1: Runtime execution lifecycle, memory flow, and operator evaluation rules for Logical Operators."})]})}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Deep Technical Know-How & Spec Invariants"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed mb-6",children:"The ECMAScript specification defines formal abstract operations (such as ToPrimitive, ToNumber, and SameValue) governing all operator expressions. Understanding these invariants prevents unexpected bugs."}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse border border-slate-800",children:[e.jsx("thead",{className:"bg-slate-900/90 text-amber-300 uppercase text-xs font-mono",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border border-slate-800",children:"Operator Class"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Associativity"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"ECMA Spec Abstract Operation"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Developer Invariant"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-xs font-mono",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400",children:"Binary Operators"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Left-to-Right (except **)"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"Evaluate(Left) -> Evaluate(Right)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Avoid mutating same var in both operands"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400",children:"Logical Short-Circuit"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Left-to-Right"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"ToBoolean(Left) determines right eval"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Use ?? instead of || when 0 is valid"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400",children:"Assignments"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Right-to-Left"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"PutValue(ref, value)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Use compound assignment for clarity"})]})]})]})}),e.jsxs("div",{className:"mt-6 p-5 rounded-xl bg-slate-900/80 border border-rose-900/40 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Exceptions, Quirks & Traps to Avoid"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-slate-300 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-rose-300",children:"Lexicographical String Comparison:"})," Comparing two strings like ",e.jsx("code",{className:"text-slate-200",children:'"10" < "9"'})," evaluates to ",e.jsx("code",{className:"text-rose-300",children:"true"})," because characters are compared by UTF-16 code point values."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-amber-300",children:"Falsy Zero Fallback Trap:"})," Using ",e.jsx("code",{className:"text-amber-300",children:"||"})," with number zero (",e.jsx("code",{className:"text-slate-200",children:"0"}),") triggers fallback. Always use nullish coalescing (",e.jsx("code",{className:"text-emerald-400",children:"??"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-sky-300",children:"Operator Precedence Pitfalls:"})," Never mix arithmetic and logical expressions without defensive parentheses."]})]})]})]})}),e.jsxs("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Interactive Monaco Playground: Practical Working Examples"]}),e.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded bg-amber-950/60 border border-amber-800 text-amber-300",children:"Live In-Browser Execution"})]}),e.jsx("div",{className:"rounded-2xl border border-slate-800 overflow-hidden shadow-2xl bg-slate-900",children:e.jsx(d,{initialCode:g,title:"LogicalOperatorsDemo.js"})})]}),e.jsxs("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚖️"})," Common Pitfalls vs Senior Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold",children:[e.jsx("span",{children:"❌"}),e.jsx("span",{children:"Anti-Pattern: Ambiguous Operator Sequences"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Relying on implicit precedence across complex expressions makes code prone to misunderstandings."}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/50 text-xs font-mono text-rose-300 overflow-x-auto",children:`// ❌ AVOID:
const isValid = a + b * c > d && e || f;`})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold",children:[e.jsx("span",{children:"✓"}),e.jsx("span",{children:"Senior Best Practice: Defensive Grouping"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Use explicit grouping parentheses to ensure mathematical and logical clarity."}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-emerald-900/50 text-xs font-mono text-emerald-300 overflow-x-auto",children:`// ✓ RECOMMENDED:
const isValid = (((a + (b * c)) > d) && e) || f;`})]})]})]}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-950/30 via-slate-900 to-purple-950/20 border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xl shadow-md",children:"💎"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs uppercase font-mono tracking-wider text-amber-400 font-bold block",children:"JavaScript Hidden Gem & Senior Pro Secret"}),e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Logical Operators Return Operands, NOT Booleans"})]})]}),e.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed mb-6",children:"In JavaScript, && and || do not return true/false; they return the actual evaluated operand value that resolved the short-circuit condition."}),e.jsx("div",{className:"rounded-xl border border-amber-900/50 bg-slate-950 p-4 font-mono text-xs text-amber-200 overflow-x-auto",children:e.jsx("pre",{children:`// 💎 SENIOR SECRET:
const result = 'admin' && { role: 'super' };
console.log(result); // { role: 'super' } (Returns object!)`})})]})}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-indigo-950/20 border border-indigo-800/40 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-indigo-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Architectural Mental Challenge: Performance & Bitfields"]}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed mb-4",children:"When building high-frequency WebGL canvas renderers or physics engines in JavaScript, why do senior architects choose 32-bit bitwise flags over boolean objects?"}),e.jsx("div",{className:"p-4 rounded-xl bg-slate-900 border border-indigo-900/50 text-xs sm:text-sm text-indigo-300 font-mono",children:"💡 Hint: Bitwise flags pack 32 separate boolean states into a single 4-byte CPU integer, eliminating object heap allocations and reducing garbage collector churn to zero."})]})}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(c,{title:"Frequently Asked Questions · Logical Operators",subtitle:"Explore 25 comprehensive questions covering runtime mechanics, memory models, and engine optimizations",questions:u})}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(l,{content:p,title:"JavaScript Master Note · Logical Operators",downloadFileName:"001_003_operators-and-expressions-topic3-note.txt"})}),e.jsx("section",{ref:n,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(o,{note:"In my 27+ years of mentoring at Coder & AccoTax in Barrackpore, I always teach students: operators are the arithmetic gears of your code. Write expressions so clearly that anyone reading your code understands the evaluation flow without needing to consult a precedence table."})})]})]})}export{S as default};
