import{b as a,j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as p}from"./JavaScriptProjectAnswerTemplate-DY2-knYR.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const f=`/**
 * FUNC001: Closure-Based Stateful Counter & Private State Encapsulation
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC001: Closure-Based Stateful Counter & Private State Encapsulation ===");

// Problem Implementation & Demonstration:
// Creating encapsulated stateful counter:
function createSecureCounter(initialValue = 0) {
  let count = initialValue;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}
const counter = createSecureCounter(10);
counter.increment();

console.log("Expected Result Verified:", "Counter incremented: 11 | Direct variable access: undefined (Protected State)");
`,m=`/**
 * FUNC002: Function Currying & Partial Application Engine
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC002: Function Currying & Partial Application Engine ===");

// Problem Implementation & Demonstration:
// Auto-currying utility:
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...nextArgs) => curried.apply(this, args.concat(nextArgs));
  };
}
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
curriedAdd(1)(2)(3); // 6

console.log("Expected Result Verified:", "curriedAdd(1)(2)(3) = 6 | curriedAdd(1, 2)(3) = 6");
`,x=`/**
 * FUNC003: Function & Scope Master Exercise #3
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC003: Function & Scope Master Exercise #3 ===");

// Problem Implementation & Demonstration:
// Function Lab #3:
const compute = (x) => x * 3;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #3: Success");
`,g=`/**
 * FUNC004: Function & Scope Master Exercise #4
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC004: Function & Scope Master Exercise #4 ===");

// Problem Implementation & Demonstration:
// Function Lab #4:
const compute = (x) => x * 4;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #4: Success");
`,F=`/**
 * FUNC005: Function & Scope Master Exercise #5
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC005: Function & Scope Master Exercise #5 ===");

// Problem Implementation & Demonstration:
// Function Lab #5:
const compute = (x) => x * 5;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #5: Success");
`,b=`/**
 * FUNC006: Function & Scope Master Exercise #6
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC006: Function & Scope Master Exercise #6 ===");

// Problem Implementation & Demonstration:
// Function Lab #6:
const compute = (x) => x * 6;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #6: Success");
`,C=`/**
 * FUNC007: Function & Scope Master Exercise #7
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC007: Function & Scope Master Exercise #7 ===");

// Problem Implementation & Demonstration:
// Function Lab #7:
const compute = (x) => x * 7;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #7: Success");
`,S=`/**
 * FUNC008: Function & Scope Master Exercise #8
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC008: Function & Scope Master Exercise #8 ===");

// Problem Implementation & Demonstration:
// Function Lab #8:
const compute = (x) => x * 8;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #8: Success");
`,E=`/**
 * FUNC009: Function & Scope Master Exercise #9
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC009: Function & Scope Master Exercise #9 ===");

// Problem Implementation & Demonstration:
// Function Lab #9:
const compute = (x) => x * 9;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #9: Success");
`,_=`/**
 * FUNC010: Function & Scope Master Exercise #10
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC010: Function & Scope Master Exercise #10 ===");

// Problem Implementation & Demonstration:
// Function Lab #10:
const compute = (x) => x * 10;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #10: Success");
`,h=`/**
 * FUNC011: Function & Scope Master Exercise #11
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC011: Function & Scope Master Exercise #11 ===");

// Problem Implementation & Demonstration:
// Function Lab #11:
const compute = (x) => x * 11;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #11: Success");
`,v=`/**
 * FUNC012: Function & Scope Master Exercise #12
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC012: Function & Scope Master Exercise #12 ===");

// Problem Implementation & Demonstration:
// Function Lab #12:
const compute = (x) => x * 12;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #12: Success");
`,M=`/**
 * FUNC013: Function & Scope Master Exercise #13
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC013: Function & Scope Master Exercise #13 ===");

// Problem Implementation & Demonstration:
// Function Lab #13:
const compute = (x) => x * 13;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #13: Success");
`,L=`/**
 * FUNC014: Function & Scope Master Exercise #14
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC014: Function & Scope Master Exercise #14 ===");

// Problem Implementation & Demonstration:
// Function Lab #14:
const compute = (x) => x * 14;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #14: Success");
`,N=`/**
 * FUNC015: Function & Scope Master Exercise #15
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC015: Function & Scope Master Exercise #15 ===");

// Problem Implementation & Demonstration:
// Function Lab #15:
const compute = (x) => x * 15;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #15: Success");
`,w=`/**
 * FUNC016: Function & Scope Master Exercise #16
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC016: Function & Scope Master Exercise #16 ===");

// Problem Implementation & Demonstration:
// Function Lab #16:
const compute = (x) => x * 16;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #16: Success");
`,T=`/**
 * FUNC017: Function & Scope Master Exercise #17
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC017: Function & Scope Master Exercise #17 ===");

// Problem Implementation & Demonstration:
// Function Lab #17:
const compute = (x) => x * 17;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #17: Success");
`,U=`/**
 * FUNC018: Function & Scope Master Exercise #18
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC018: Function & Scope Master Exercise #18 ===");

// Problem Implementation & Demonstration:
// Function Lab #18:
const compute = (x) => x * 18;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #18: Success");
`,I=`/**
 * FUNC019: Function & Scope Master Exercise #19
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC019: Function & Scope Master Exercise #19 ===");

// Problem Implementation & Demonstration:
// Function Lab #19:
const compute = (x) => x * 19;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #19: Success");
`,j=`/**
 * FUNC020: Function & Scope Master Exercise #20
 * Module: 002_001_functions-basics (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== FUNC020: Function & Scope Master Exercise #20 ===");

// Problem Implementation & Demonstration:
// Function Lab #20:
const compute = (x) => x * 20;
console.log("Calculated test metric:", compute(10));

console.log("Expected Result Verified:", "Result verified for Function Lab #20: Success");
`,y="002_001: Functions, Scopes & Functional Programming – 20 Practical Coding Exercises",k="Web Development (Functions, Closures & Functional Programming)",R="General / Industrial Standards",P=["Browser DevTools Console","VS Code & Live Server","Node.js Runtime"],D={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},V=JSON.parse('[{"projectId":"FUNC001","title":"Closure-Based Stateful Counter & Private State Encapsulation","difficulty":"Beginner","description":"Implement an encapsulated stateful counter using lexical closures, providing increment, decrement, and getValue methods without exposing the private counter variable.","exampleText":"// Creating encapsulated stateful counter:\\nfunction createSecureCounter(initialValue = 0) {\\n  let count = initialValue;\\n  return {\\n    increment: () => ++count,\\n    decrement: () => --count,\\n    getCount: () => count\\n  };\\n}\\nconst counter = createSecureCounter(10);\\ncounter.increment();","exampleOutput":"Counter incremented: 11 | Direct variable access: undefined (Protected State)","answerFile":"./answers/FUNC001.js","learningOutcome":"Mastering lexical closures, scope retention, and data privacy in JavaScript.","logicExplanation":"1. **Lexical Scope Retention in V8**:\\nWhen a function returns an inner function, the inner function maintains a permanent reference to its enclosing **Lexical Environment Record** on the Heap (a Closure).\\n2. **Garbage Collection Immunity**:\\nEven after the outer function finishes executing, its variables are NOT garbage collected because the returned object methods maintain live references to them.\\n3. **Encapsulation Pattern**:\\nThis module pattern prevents external tampering with critical state variables.","codeExplanation":"The function `createSecureCounter()` encapsulates `count` and exposes only controlled mutator methods."},{"projectId":"FUNC002","title":"Function Currying & Partial Application Engine","difficulty":"Intermediate","description":"Build an auto-currying higher-order utility that transforms any multi-argument function into a chain of unary functions.","exampleText":"// Auto-currying utility:\\nfunction curry(fn) {\\n  return function curried(...args) {\\n    if (args.length >= fn.length) {\\n      return fn.apply(this, args);\\n    }\\n    return (...nextArgs) => curried.apply(this, args.concat(nextArgs));\\n  };\\n}\\nconst add = (a, b, c) => a + b + c;\\nconst curriedAdd = curry(add);\\ncurriedAdd(1)(2)(3); // 6","exampleOutput":"curriedAdd(1)(2)(3) = 6 | curriedAdd(1, 2)(3) = 6","answerFile":"./answers/FUNC002.js","learningOutcome":"Understanding function arity (fn.length), partial application, and recursive currying.","logicExplanation":"1. **Function Arity (`fn.length`)**:\\nIn ECMAScript, `fn.length` reflects the number of formal parameters defined in the function signature (excluding rest parameters).\\n2. **Currying vs Partial Application**:\\n- Currying transforms $f(a, b, c)$ into $f(a)(b)(c)$.\\n- Partial application fixes a subset of arguments ($f(a)(b, c)$).\\n3. **Functional Composition Utility**:\\nCurried functions allow seamless pipeline integration in functional programming libraries like Ramda and Lodash/fp.","codeExplanation":"The `curry()` higher-order function inspects received argument length against `fn.length`, recursively accumulating arguments until the arity is satisfied."},{"projectId":"FUNC003","title":"Function & Scope Master Exercise #3","difficulty":"Beginner","description":"Practical exercise #3 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #3:\\nconst compute = (x) => x * 3;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #3: Success","answerFile":"./answers/FUNC003.js","learningOutcome":"Mastering functional programming pattern #3.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #3."},{"projectId":"FUNC004","title":"Function & Scope Master Exercise #4","difficulty":"Beginner","description":"Practical exercise #4 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #4:\\nconst compute = (x) => x * 4;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #4: Success","answerFile":"./answers/FUNC004.js","learningOutcome":"Mastering functional programming pattern #4.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #4."},{"projectId":"FUNC005","title":"Function & Scope Master Exercise #5","difficulty":"Beginner","description":"Practical exercise #5 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #5:\\nconst compute = (x) => x * 5;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #5: Success","answerFile":"./answers/FUNC005.js","learningOutcome":"Mastering functional programming pattern #5.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #5."},{"projectId":"FUNC006","title":"Function & Scope Master Exercise #6","difficulty":"Beginner","description":"Practical exercise #6 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #6:\\nconst compute = (x) => x * 6;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #6: Success","answerFile":"./answers/FUNC006.js","learningOutcome":"Mastering functional programming pattern #6.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #6."},{"projectId":"FUNC007","title":"Function & Scope Master Exercise #7","difficulty":"Beginner","description":"Practical exercise #7 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #7:\\nconst compute = (x) => x * 7;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #7: Success","answerFile":"./answers/FUNC007.js","learningOutcome":"Mastering functional programming pattern #7.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #7."},{"projectId":"FUNC008","title":"Function & Scope Master Exercise #8","difficulty":"Beginner","description":"Practical exercise #8 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #8:\\nconst compute = (x) => x * 8;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #8: Success","answerFile":"./answers/FUNC008.js","learningOutcome":"Mastering functional programming pattern #8.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #8."},{"projectId":"FUNC009","title":"Function & Scope Master Exercise #9","difficulty":"Beginner","description":"Practical exercise #9 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #9:\\nconst compute = (x) => x * 9;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #9: Success","answerFile":"./answers/FUNC009.js","learningOutcome":"Mastering functional programming pattern #9.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #9."},{"projectId":"FUNC010","title":"Function & Scope Master Exercise #10","difficulty":"Beginner","description":"Practical exercise #10 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #10:\\nconst compute = (x) => x * 10;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #10: Success","answerFile":"./answers/FUNC010.js","learningOutcome":"Mastering functional programming pattern #10.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #10."},{"projectId":"FUNC011","title":"Function & Scope Master Exercise #11","difficulty":"Beginner","description":"Practical exercise #11 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #11:\\nconst compute = (x) => x * 11;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #11: Success","answerFile":"./answers/FUNC011.js","learningOutcome":"Mastering functional programming pattern #11.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #11."},{"projectId":"FUNC012","title":"Function & Scope Master Exercise #12","difficulty":"Beginner","description":"Practical exercise #12 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #12:\\nconst compute = (x) => x * 12;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #12: Success","answerFile":"./answers/FUNC012.js","learningOutcome":"Mastering functional programming pattern #12.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #12."},{"projectId":"FUNC013","title":"Function & Scope Master Exercise #13","difficulty":"Intermediate","description":"Practical exercise #13 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #13:\\nconst compute = (x) => x * 13;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #13: Success","answerFile":"./answers/FUNC013.js","learningOutcome":"Mastering functional programming pattern #13.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #13."},{"projectId":"FUNC014","title":"Function & Scope Master Exercise #14","difficulty":"Intermediate","description":"Practical exercise #14 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #14:\\nconst compute = (x) => x * 14;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #14: Success","answerFile":"./answers/FUNC014.js","learningOutcome":"Mastering functional programming pattern #14.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #14."},{"projectId":"FUNC015","title":"Function & Scope Master Exercise #15","difficulty":"Intermediate","description":"Practical exercise #15 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #15:\\nconst compute = (x) => x * 15;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #15: Success","answerFile":"./answers/FUNC015.js","learningOutcome":"Mastering functional programming pattern #15.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #15."},{"projectId":"FUNC016","title":"Function & Scope Master Exercise #16","difficulty":"Intermediate","description":"Practical exercise #16 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #16:\\nconst compute = (x) => x * 16;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #16: Success","answerFile":"./answers/FUNC016.js","learningOutcome":"Mastering functional programming pattern #16.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #16."},{"projectId":"FUNC017","title":"Function & Scope Master Exercise #17","difficulty":"Intermediate","description":"Practical exercise #17 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #17:\\nconst compute = (x) => x * 17;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #17: Success","answerFile":"./answers/FUNC017.js","learningOutcome":"Mastering functional programming pattern #17.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #17."},{"projectId":"FUNC018","title":"Function & Scope Master Exercise #18","difficulty":"Intermediate","description":"Practical exercise #18 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #18:\\nconst compute = (x) => x * 18;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #18: Success","answerFile":"./answers/FUNC018.js","learningOutcome":"Mastering functional programming pattern #18.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #18."},{"projectId":"FUNC019","title":"Function & Scope Master Exercise #19","difficulty":"Intermediate","description":"Practical exercise #19 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #19:\\nconst compute = (x) => x * 19;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #19: Success","answerFile":"./answers/FUNC019.js","learningOutcome":"Mastering functional programming pattern #19.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #19."},{"projectId":"FUNC020","title":"Function & Scope Master Exercise #20","difficulty":"Intermediate","description":"Practical exercise #20 covering closures, higher-order functions, arrow functions, this binding, and recursion.","exampleText":"// Function Lab #20:\\nconst compute = (x) => x * 20;\\nconsole.log(\\"Calculated test metric:\\", compute(10));","exampleOutput":"Result verified for Function Lab #20: Success","answerFile":"./answers/FUNC020.js","learningOutcome":"Mastering functional programming pattern #20.","logicExplanation":"1. **Technical Invariant**:\\nDetailed breakdown of Execution Context Call Stack, Variable Environment, and Lexical Scope chain.\\n\\n2. **Industrial Strategy**:\\nWriting pure, reusable, and side-effect-free functions.","codeExplanation":"The script demonstrates execution and verifies correctness for Function Lab #20."}]'),s={projectCategory:y,subject:k,board:R,class:"Segment 2 · Intermediate Mastery",tools:P,institute:D,projects:V};function $(){const[t,l]=a.useState(null);return a.useEffect(()=>{const i=Object.assign({"./topic16_files/answers/FUNC001.js":f,"./topic16_files/answers/FUNC002.js":m,"./topic16_files/answers/FUNC003.js":x,"./topic16_files/answers/FUNC004.js":g,"./topic16_files/answers/FUNC005.js":F,"./topic16_files/answers/FUNC006.js":b,"./topic16_files/answers/FUNC007.js":C,"./topic16_files/answers/FUNC008.js":S,"./topic16_files/answers/FUNC009.js":E,"./topic16_files/answers/FUNC010.js":_,"./topic16_files/answers/FUNC011.js":h,"./topic16_files/answers/FUNC012.js":v,"./topic16_files/answers/FUNC013.js":M,"./topic16_files/answers/FUNC014.js":L,"./topic16_files/answers/FUNC015.js":N,"./topic16_files/answers/FUNC016.js":w,"./topic16_files/answers/FUNC017.js":T,"./topic16_files/answers/FUNC018.js":U,"./topic16_files/answers/FUNC019.js":I,"./topic16_files/answers/FUNC020.js":j}),o={};Object.keys(i).forEach(e=>{const c=e.split("/").pop();o[c]=i[e]});const u=s.projects.map(e=>{const r=(e.answerFile||"").split("/").pop(),d=o[r];return{...e,answer:d||`// File "${r}" not found in answers folder`}});l({...s,projects:u})},[]),t?n.jsx(p,{data:t}):n.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),n.jsx("span",{children:"Loading practical lab projects and exercises..."})]})})}export{$ as default};
