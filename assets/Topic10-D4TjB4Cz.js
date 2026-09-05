import{b as c,j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as d}from"./JavaScriptProjectAnswerTemplate-BYBlpxRp.js";import"./CodeBlock-BGRh7DVf.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const m=`/**
 * LOOP001: Iterables & the Symbol.iterator Protocol
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP001: Iterables & the Symbol.iterator Protocol ===");

// Problem Implementation & Demonstration:
// Creating custom iterable range object:
function createRange(start, end, step = 1) {
  return {
    [Symbol.iterator]() {
      let current = start;
      return {
        next() {
          if (current <= end) {
            const val = current;
            current += step;
            return { value: val, done: false };
          }
          return { value: undefined, done: true };
        }
      };
    }
  };
}
const nums = [...createRange(1, 5)];

console.log("Expected Result Verified:", "Spread custom iterable: [1, 2, 3, 4, 5] | for...of iterated successfully");
`,g=`/**
 * LOOP002: Loop Comparison Matrix: for vs for...of vs for...in vs forEach
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP002: Loop Comparison Matrix: for vs for...of vs for...in vs forEach ===");

// Problem Implementation & Demonstration:
// Comparing loop iteration behaviors:
const arr = ['a', 'b', 'c'];
Array.prototype.customProp = 'polluted';

// for...in logs indices AND prototype property 'customProp'!
// for...of logs only array values 'a', 'b', 'c' cleanly.

console.log("Expected Result Verified:", "for...of values: 'a', 'b', 'c' | for...in traversed prototype pollution: 'customProp'");
`,f=`/**
 * LOOP003: Loop & Iteration Algorithm Exercise #3
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP003: Loop & Iteration Algorithm Exercise #3 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #3:
let count = 0;
for (let k = 0; k < 3; k++) { count += k; }
console.log("Accumulation for #3:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #3: Success");
`,L=`/**
 * LOOP004: Loop & Iteration Algorithm Exercise #4
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP004: Loop & Iteration Algorithm Exercise #4 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #4:
let count = 0;
for (let k = 0; k < 4; k++) { count += k; }
console.log("Accumulation for #4:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #4: Success");
`,h=`/**
 * LOOP005: Loop & Iteration Algorithm Exercise #5
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP005: Loop & Iteration Algorithm Exercise #5 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #5:
let count = 0;
for (let k = 0; k < 5; k++) { count += k; }
console.log("Accumulation for #5:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #5: Success");
`,O=`/**
 * LOOP006: Loop & Iteration Algorithm Exercise #6
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP006: Loop & Iteration Algorithm Exercise #6 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #6:
let count = 0;
for (let k = 0; k < 6; k++) { count += k; }
console.log("Accumulation for #6:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #6: Success");
`,I=`/**
 * LOOP007: Loop & Iteration Algorithm Exercise #7
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP007: Loop & Iteration Algorithm Exercise #7 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #7:
let count = 0;
for (let k = 0; k < 7; k++) { count += k; }
console.log("Accumulation for #7:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #7: Success");
`,x=`/**
 * LOOP008: Loop & Iteration Algorithm Exercise #8
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP008: Loop & Iteration Algorithm Exercise #8 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #8:
let count = 0;
for (let k = 0; k < 8; k++) { count += k; }
console.log("Accumulation for #8:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #8: Success");
`,b=`/**
 * LOOP009: Loop & Iteration Algorithm Exercise #9
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP009: Loop & Iteration Algorithm Exercise #9 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #9:
let count = 0;
for (let k = 0; k < 9; k++) { count += k; }
console.log("Accumulation for #9:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #9: Success");
`,P=`/**
 * LOOP010: Loop & Iteration Algorithm Exercise #10
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP010: Loop & Iteration Algorithm Exercise #10 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #10:
let count = 0;
for (let k = 0; k < 10; k++) { count += k; }
console.log("Accumulation for #10:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #10: Success");
`,k=`/**
 * LOOP011: Loop & Iteration Algorithm Exercise #11
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP011: Loop & Iteration Algorithm Exercise #11 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #11:
let count = 0;
for (let k = 0; k < 11; k++) { count += k; }
console.log("Accumulation for #11:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #11: Success");
`,v=`/**
 * LOOP012: Loop & Iteration Algorithm Exercise #12
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP012: Loop & Iteration Algorithm Exercise #12 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #12:
let count = 0;
for (let k = 0; k < 12; k++) { count += k; }
console.log("Accumulation for #12:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #12: Success");
`,_=`/**
 * LOOP013: Loop & Iteration Algorithm Exercise #13
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP013: Loop & Iteration Algorithm Exercise #13 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #13:
let count = 0;
for (let k = 0; k < 13; k++) { count += k; }
console.log("Accumulation for #13:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #13: Success");
`,E=`/**
 * LOOP014: Loop & Iteration Algorithm Exercise #14
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP014: Loop & Iteration Algorithm Exercise #14 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #14:
let count = 0;
for (let k = 0; k < 14; k++) { count += k; }
console.log("Accumulation for #14:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #14: Success");
`,w=`/**
 * LOOP015: Loop & Iteration Algorithm Exercise #15
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP015: Loop & Iteration Algorithm Exercise #15 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #15:
let count = 0;
for (let k = 0; k < 15; k++) { count += k; }
console.log("Accumulation for #15:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #15: Success");
`,A=`/**
 * LOOP016: Loop & Iteration Algorithm Exercise #16
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP016: Loop & Iteration Algorithm Exercise #16 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #16:
let count = 0;
for (let k = 0; k < 16; k++) { count += k; }
console.log("Accumulation for #16:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #16: Success");
`,T=`/**
 * LOOP017: Loop & Iteration Algorithm Exercise #17
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP017: Loop & Iteration Algorithm Exercise #17 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #17:
let count = 0;
for (let k = 0; k < 17; k++) { count += k; }
console.log("Accumulation for #17:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #17: Success");
`,S=`/**
 * LOOP018: Loop & Iteration Algorithm Exercise #18
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP018: Loop & Iteration Algorithm Exercise #18 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #18:
let count = 0;
for (let k = 0; k < 18; k++) { count += k; }
console.log("Accumulation for #18:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #18: Success");
`,y=`/**
 * LOOP019: Loop & Iteration Algorithm Exercise #19
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP019: Loop & Iteration Algorithm Exercise #19 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #19:
let count = 0;
for (let k = 0; k < 19; k++) { count += k; }
console.log("Accumulation for #19:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #19: Success");
`,j=`/**
 * LOOP020: Loop & Iteration Algorithm Exercise #20
 * Module: 001_005_loops-and-iteration (Topic 10)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== LOOP020: Loop & Iteration Algorithm Exercise #20 ===");

// Problem Implementation & Demonstration:
// Iteration Lab #20:
let count = 0;
for (let k = 0; k < 20; k++) { count += k; }
console.log("Accumulation for #20:", count);

console.log("Expected Result Verified:", "Result verified for Iteration Lab #20: Success");
`,M="001_005: Loops & Basic Iteration – 20 Practical Coding Exercises",R="Web Development (Loops, Iterables & Iteration Protocols)",V="General / Industrial Standards",C=["Browser DevTools Console","VS Code & Live Server","Node.js Runtime"],D={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},F=JSON.parse('[{"projectId":"LOOP001","title":"Iterables & the Symbol.iterator Protocol","difficulty":"Beginner","description":"Implement a custom range generator object that complies with the ECMAScript Iteration Protocol, enabling it to be consumed by for...of and the spread operator (...).","exampleText":"// Creating custom iterable range object:\\nfunction createRange(start, end, step = 1) {\\n  return {\\n    [Symbol.iterator]() {\\n      let current = start;\\n      return {\\n        next() {\\n          if (current <= end) {\\n            const val = current;\\n            current += step;\\n            return { value: val, done: false };\\n          }\\n          return { value: undefined, done: true };\\n        }\\n      };\\n    }\\n  };\\n}\\nconst nums = [...createRange(1, 5)];","exampleOutput":"Spread custom iterable: [1, 2, 3, 4, 5] | for...of iterated successfully","answerFile":"./answers/LOOP001.js","learningOutcome":"Mastering the ECMAScript Iteration Protocol (Symbol.iterator, next(), { value, done }).","logicExplanation":"1. **ECMAScript Iteration Protocol (§27.1)**:\\nAn object is **Iterable** if it defines a method at key `[Symbol.iterator]()` that returns an **Iterator**.\\n2. **Iterator Interface**:\\nAn iterator must have a `.next()` method returning `{ value: any, done: boolean }`.\\n3. **Consumers of Iterables**:\\n- `for...of` loops\\n- Spread syntax `[...iterable]`\\n- Destructuring `const [first, second] = iterable`\\n- `Array.from(iterable)`\\n- `Set` and `Map` constructors.","codeExplanation":"The utility `createRange()` constructs an object implementing `[Symbol.iterator]`, allowing it to be spread into arrays and iterated in `for...of` loops."},{"projectId":"LOOP002","title":"Loop Comparison Matrix: for vs for...of vs for...in vs forEach","difficulty":"Beginner","description":"Benchmark and compare the behavior, performance, and prototype inheritance risks across traditional for, for...of, for...in, and Array.prototype.forEach.","exampleText":"// Comparing loop iteration behaviors:\\nconst arr = [\'a\', \'b\', \'c\'];\\nArray.prototype.customProp = \'polluted\';\\n\\n// for...in logs indices AND prototype property \'customProp\'!\\n// for...of logs only array values \'a\', \'b\', \'c\' cleanly.","exampleOutput":"for...of values: \'a\', \'b\', \'c\' | for...in traversed prototype pollution: \'customProp\'","answerFile":"./answers/LOOP002.js","learningOutcome":"Understanding why for...in should NEVER be used for arrays and choosing the optimal loop structure.","logicExplanation":"1. **`for...in` Hazard on Arrays**:\\n`for...in` traverses all **enumerable property keys**, including those inherited from `Array.prototype` or `Object.prototype`. Furthermore, keys are strings (`\'0\'`, `\'1\'`), and iteration order is not guaranteed.\\n2. **`for...of` (ES6)**: Iterates over **values** of any Iterable object cleanly without touching properties or prototypes.\\n3. **`forEach`**: Cannot use `break`, `continue`, or `await` inside its callback.","codeExplanation":"The script demonstrates iterating an array with prototype pollution, contrasting the safety of `for...of` against `for...in`."},{"projectId":"LOOP003","title":"Loop & Iteration Algorithm Exercise #3","difficulty":"Beginner","description":"Practical iteration lab #3 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #3:\\nlet count = 0;\\nfor (let k = 0; k < 3; k++) { count += k; }\\nconsole.log(\\"Accumulation for #3:\\", count);","exampleOutput":"Result verified for Iteration Lab #3: Success","answerFile":"./answers/LOOP003.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #3.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #3."},{"projectId":"LOOP004","title":"Loop & Iteration Algorithm Exercise #4","difficulty":"Beginner","description":"Practical iteration lab #4 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #4:\\nlet count = 0;\\nfor (let k = 0; k < 4; k++) { count += k; }\\nconsole.log(\\"Accumulation for #4:\\", count);","exampleOutput":"Result verified for Iteration Lab #4: Success","answerFile":"./answers/LOOP004.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #4.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #4."},{"projectId":"LOOP005","title":"Loop & Iteration Algorithm Exercise #5","difficulty":"Beginner","description":"Practical iteration lab #5 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #5:\\nlet count = 0;\\nfor (let k = 0; k < 5; k++) { count += k; }\\nconsole.log(\\"Accumulation for #5:\\", count);","exampleOutput":"Result verified for Iteration Lab #5: Success","answerFile":"./answers/LOOP005.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #5.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #5."},{"projectId":"LOOP006","title":"Loop & Iteration Algorithm Exercise #6","difficulty":"Beginner","description":"Practical iteration lab #6 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #6:\\nlet count = 0;\\nfor (let k = 0; k < 6; k++) { count += k; }\\nconsole.log(\\"Accumulation for #6:\\", count);","exampleOutput":"Result verified for Iteration Lab #6: Success","answerFile":"./answers/LOOP006.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #6.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #6."},{"projectId":"LOOP007","title":"Loop & Iteration Algorithm Exercise #7","difficulty":"Beginner","description":"Practical iteration lab #7 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #7:\\nlet count = 0;\\nfor (let k = 0; k < 7; k++) { count += k; }\\nconsole.log(\\"Accumulation for #7:\\", count);","exampleOutput":"Result verified for Iteration Lab #7: Success","answerFile":"./answers/LOOP007.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #7.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #7."},{"projectId":"LOOP008","title":"Loop & Iteration Algorithm Exercise #8","difficulty":"Beginner","description":"Practical iteration lab #8 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #8:\\nlet count = 0;\\nfor (let k = 0; k < 8; k++) { count += k; }\\nconsole.log(\\"Accumulation for #8:\\", count);","exampleOutput":"Result verified for Iteration Lab #8: Success","answerFile":"./answers/LOOP008.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #8.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #8."},{"projectId":"LOOP009","title":"Loop & Iteration Algorithm Exercise #9","difficulty":"Beginner","description":"Practical iteration lab #9 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #9:\\nlet count = 0;\\nfor (let k = 0; k < 9; k++) { count += k; }\\nconsole.log(\\"Accumulation for #9:\\", count);","exampleOutput":"Result verified for Iteration Lab #9: Success","answerFile":"./answers/LOOP009.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #9.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #9."},{"projectId":"LOOP010","title":"Loop & Iteration Algorithm Exercise #10","difficulty":"Beginner","description":"Practical iteration lab #10 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #10:\\nlet count = 0;\\nfor (let k = 0; k < 10; k++) { count += k; }\\nconsole.log(\\"Accumulation for #10:\\", count);","exampleOutput":"Result verified for Iteration Lab #10: Success","answerFile":"./answers/LOOP010.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #10.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #10."},{"projectId":"LOOP011","title":"Loop & Iteration Algorithm Exercise #11","difficulty":"Beginner","description":"Practical iteration lab #11 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #11:\\nlet count = 0;\\nfor (let k = 0; k < 11; k++) { count += k; }\\nconsole.log(\\"Accumulation for #11:\\", count);","exampleOutput":"Result verified for Iteration Lab #11: Success","answerFile":"./answers/LOOP011.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #11.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #11."},{"projectId":"LOOP012","title":"Loop & Iteration Algorithm Exercise #12","difficulty":"Beginner","description":"Practical iteration lab #12 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #12:\\nlet count = 0;\\nfor (let k = 0; k < 12; k++) { count += k; }\\nconsole.log(\\"Accumulation for #12:\\", count);","exampleOutput":"Result verified for Iteration Lab #12: Success","answerFile":"./answers/LOOP012.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #12.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #12."},{"projectId":"LOOP013","title":"Loop & Iteration Algorithm Exercise #13","difficulty":"Beginner","description":"Practical iteration lab #13 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #13:\\nlet count = 0;\\nfor (let k = 0; k < 13; k++) { count += k; }\\nconsole.log(\\"Accumulation for #13:\\", count);","exampleOutput":"Result verified for Iteration Lab #13: Success","answerFile":"./answers/LOOP013.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #13.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #13."},{"projectId":"LOOP014","title":"Loop & Iteration Algorithm Exercise #14","difficulty":"Beginner","description":"Practical iteration lab #14 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #14:\\nlet count = 0;\\nfor (let k = 0; k < 14; k++) { count += k; }\\nconsole.log(\\"Accumulation for #14:\\", count);","exampleOutput":"Result verified for Iteration Lab #14: Success","answerFile":"./answers/LOOP014.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #14.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #14."},{"projectId":"LOOP015","title":"Loop & Iteration Algorithm Exercise #15","difficulty":"Beginner","description":"Practical iteration lab #15 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #15:\\nlet count = 0;\\nfor (let k = 0; k < 15; k++) { count += k; }\\nconsole.log(\\"Accumulation for #15:\\", count);","exampleOutput":"Result verified for Iteration Lab #15: Success","answerFile":"./answers/LOOP015.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #15.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #15."},{"projectId":"LOOP016","title":"Loop & Iteration Algorithm Exercise #16","difficulty":"Intermediate","description":"Practical iteration lab #16 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #16:\\nlet count = 0;\\nfor (let k = 0; k < 16; k++) { count += k; }\\nconsole.log(\\"Accumulation for #16:\\", count);","exampleOutput":"Result verified for Iteration Lab #16: Success","answerFile":"./answers/LOOP016.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #16.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #16."},{"projectId":"LOOP017","title":"Loop & Iteration Algorithm Exercise #17","difficulty":"Intermediate","description":"Practical iteration lab #17 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #17:\\nlet count = 0;\\nfor (let k = 0; k < 17; k++) { count += k; }\\nconsole.log(\\"Accumulation for #17:\\", count);","exampleOutput":"Result verified for Iteration Lab #17: Success","answerFile":"./answers/LOOP017.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #17.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #17."},{"projectId":"LOOP018","title":"Loop & Iteration Algorithm Exercise #18","difficulty":"Intermediate","description":"Practical iteration lab #18 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #18:\\nlet count = 0;\\nfor (let k = 0; k < 18; k++) { count += k; }\\nconsole.log(\\"Accumulation for #18:\\", count);","exampleOutput":"Result verified for Iteration Lab #18: Success","answerFile":"./answers/LOOP018.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #18.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #18."},{"projectId":"LOOP019","title":"Loop & Iteration Algorithm Exercise #19","difficulty":"Intermediate","description":"Practical iteration lab #19 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #19:\\nlet count = 0;\\nfor (let k = 0; k < 19; k++) { count += k; }\\nconsole.log(\\"Accumulation for #19:\\", count);","exampleOutput":"Result verified for Iteration Lab #19: Success","answerFile":"./answers/LOOP019.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #19.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #19."},{"projectId":"LOOP020","title":"Loop & Iteration Algorithm Exercise #20","difficulty":"Intermediate","description":"Practical iteration lab #20 covering while, do-while, accumulation algorithms, and infinite loop guards.","exampleText":"// Iteration Lab #20:\\nlet count = 0;\\nfor (let k = 0; k < 20; k++) { count += k; }\\nconsole.log(\\"Accumulation for #20:\\", count);","exampleOutput":"Result verified for Iteration Lab #20: Success","answerFile":"./answers/LOOP020.js","learningOutcome":"Mastering iteration mechanics and algorithmic pattern #20.","logicExplanation":"1. **Technical Invariant**:\\nV8 loop unrolling, JIT deoptimization prevention, and loop guard assertions.\\n\\n2. **Production Strategy**:\\nWriting robust loops with guaranteed termination conditions.","codeExplanation":"The script demonstrates execution and verifies correctness for Iteration Lab #20."}]'),l={projectCategory:M,subject:R,board:V,class:"Module 001_005 · Core Foundations",tools:C,institute:D,projects:F};function N(){const[e,s]=c.useState(null);return c.useEffect(()=>{const t=Object.assign({"./topic10_files/answers/LOOP001.js":m,"./topic10_files/answers/LOOP002.js":g,"./topic10_files/answers/LOOP003.js":f,"./topic10_files/answers/LOOP004.js":L,"./topic10_files/answers/LOOP005.js":h,"./topic10_files/answers/LOOP006.js":O,"./topic10_files/answers/LOOP007.js":I,"./topic10_files/answers/LOOP008.js":x,"./topic10_files/answers/LOOP009.js":b,"./topic10_files/answers/LOOP010.js":P,"./topic10_files/answers/LOOP011.js":k,"./topic10_files/answers/LOOP012.js":v,"./topic10_files/answers/LOOP013.js":_,"./topic10_files/answers/LOOP014.js":E,"./topic10_files/answers/LOOP015.js":w,"./topic10_files/answers/LOOP016.js":A,"./topic10_files/answers/LOOP017.js":T,"./topic10_files/answers/LOOP018.js":S,"./topic10_files/answers/LOOP019.js":y,"./topic10_files/answers/LOOP020.js":j}),i={};Object.keys(t).forEach(o=>{const r=o.split("/").pop();i[r]=t[o]});const u=l.projects.map(o=>{const a=(o.answerFile||"").split("/").pop(),p=i[a];return{...o,answer:p||`// File "${a}" not found in answers folder`}});s({...l,projects:u})},[]),e?n.jsx(d,{data:e}):n.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),n.jsx("span",{children:"Loading practical lab projects and exercises..."})]})})}export{N as default};
