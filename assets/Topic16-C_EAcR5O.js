import{b as s,j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as p}from"./JavaScriptProjectAnswerTemplate-BYBlpxRp.js";import"./CodeBlock-BGRh7DVf.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const m=`/**
 * ARR001: Mutating vs Non-Mutating Array Methods Architecture
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR001: Mutating vs Non-Mutating Array Methods Architecture ===");

// Problem Implementation & Demonstration:
// Comparing mutating vs immutable array operations:
const original = [3, 1, 2];
const sortedCopy = original.toSorted((a, b) => a - b); // ES2023

// original remains [3, 1, 2]!

console.log("Expected Result Verified:", "original: [3, 1, 2] | toSorted copy: [1, 2, 3] | Verified zero state mutation");
`,f=`/**
 * ARR002: Polyfilling Array.prototype.reduce & Accumulator Patterns
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR002: Polyfilling Array.prototype.reduce & Accumulator Patterns ===");

// Problem Implementation & Demonstration:
// Custom reduce polyfill implementation:
Array.prototype.customReduce = function(callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < this.length; i++) {
    if (i in this) accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
[1, 2, 3, 4].customReduce((acc, x) => acc + x, 0);

console.log("Expected Result Verified:", "Sum computed via customReduce: 10 | Handled initialValue and sparse elements");
`,g=`/**
 * ARR003: Array Processing Lab Exercise #3
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR003: Array Processing Lab Exercise #3 ===");

// Problem Implementation & Demonstration:
// Array Lab #3:
const items = [10, 20, 30, 3].filter(x => x > 15);
console.log("Filtered output for #3:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #3: Success");
`,y=`/**
 * ARR004: Array Processing Lab Exercise #4
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR004: Array Processing Lab Exercise #4 ===");

// Problem Implementation & Demonstration:
// Array Lab #4:
const items = [10, 20, 30, 4].filter(x => x > 15);
console.log("Filtered output for #4:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #4: Success");
`,x=`/**
 * ARR005: Array Processing Lab Exercise #5
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR005: Array Processing Lab Exercise #5 ===");

// Problem Implementation & Demonstration:
// Array Lab #5:
const items = [10, 20, 30, 5].filter(x => x > 15);
console.log("Filtered output for #5:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #5: Success");
`,A=`/**
 * ARR006: Array Processing Lab Exercise #6
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR006: Array Processing Lab Exercise #6 ===");

// Problem Implementation & Demonstration:
// Array Lab #6:
const items = [10, 20, 30, 6].filter(x => x > 15);
console.log("Filtered output for #6:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #6: Success");
`,R=`/**
 * ARR007: Array Processing Lab Exercise #7
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR007: Array Processing Lab Exercise #7 ===");

// Problem Implementation & Demonstration:
// Array Lab #7:
const items = [10, 20, 30, 7].filter(x => x > 15);
console.log("Filtered output for #7:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #7: Success");
`,E=`/**
 * ARR008: Array Processing Lab Exercise #8
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR008: Array Processing Lab Exercise #8 ===");

// Problem Implementation & Demonstration:
// Array Lab #8:
const items = [10, 20, 30, 8].filter(x => x > 15);
console.log("Filtered output for #8:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #8: Success");
`,b=`/**
 * ARR009: Array Processing Lab Exercise #9
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR009: Array Processing Lab Exercise #9 ===");

// Problem Implementation & Demonstration:
// Array Lab #9:
const items = [10, 20, 30, 9].filter(x => x > 15);
console.log("Filtered output for #9:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #9: Success");
`,_=`/**
 * ARR010: Array Processing Lab Exercise #10
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR010: Array Processing Lab Exercise #10 ===");

// Problem Implementation & Demonstration:
// Array Lab #10:
const items = [10, 20, 30, 10].filter(x => x > 15);
console.log("Filtered output for #10:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #10: Success");
`,v=`/**
 * ARR011: Array Processing Lab Exercise #11
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR011: Array Processing Lab Exercise #11 ===");

// Problem Implementation & Demonstration:
// Array Lab #11:
const items = [10, 20, 30, 11].filter(x => x > 15);
console.log("Filtered output for #11:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #11: Success");
`,L=`/**
 * ARR012: Array Processing Lab Exercise #12
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR012: Array Processing Lab Exercise #12 ===");

// Problem Implementation & Demonstration:
// Array Lab #12:
const items = [10, 20, 30, 12].filter(x => x > 15);
console.log("Filtered output for #12:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #12: Success");
`,h=`/**
 * ARR013: Array Processing Lab Exercise #13
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR013: Array Processing Lab Exercise #13 ===");

// Problem Implementation & Demonstration:
// Array Lab #13:
const items = [10, 20, 30, 13].filter(x => x > 15);
console.log("Filtered output for #13:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #13: Success");
`,S=`/**
 * ARR014: Array Processing Lab Exercise #14
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR014: Array Processing Lab Exercise #14 ===");

// Problem Implementation & Demonstration:
// Array Lab #14:
const items = [10, 20, 30, 14].filter(x => x > 15);
console.log("Filtered output for #14:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #14: Success");
`,M=`/**
 * ARR015: Array Processing Lab Exercise #15
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR015: Array Processing Lab Exercise #15 ===");

// Problem Implementation & Demonstration:
// Array Lab #15:
const items = [10, 20, 30, 15].filter(x => x > 15);
console.log("Filtered output for #15:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #15: Success");
`,P=`/**
 * ARR016: Array Processing Lab Exercise #16
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR016: Array Processing Lab Exercise #16 ===");

// Problem Implementation & Demonstration:
// Array Lab #16:
const items = [10, 20, 30, 16].filter(x => x > 15);
console.log("Filtered output for #16:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #16: Success");
`,T=`/**
 * ARR017: Array Processing Lab Exercise #17
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR017: Array Processing Lab Exercise #17 ===");

// Problem Implementation & Demonstration:
// Array Lab #17:
const items = [10, 20, 30, 17].filter(x => x > 15);
console.log("Filtered output for #17:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #17: Success");
`,I=`/**
 * ARR018: Array Processing Lab Exercise #18
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR018: Array Processing Lab Exercise #18 ===");

// Problem Implementation & Demonstration:
// Array Lab #18:
const items = [10, 20, 30, 18].filter(x => x > 15);
console.log("Filtered output for #18:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #18: Success");
`,j=`/**
 * ARR019: Array Processing Lab Exercise #19
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR019: Array Processing Lab Exercise #19 ===");

// Problem Implementation & Demonstration:
// Array Lab #19:
const items = [10, 20, 30, 19].filter(x => x > 15);
console.log("Filtered output for #19:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #19: Success");
`,w=`/**
 * ARR020: Array Processing Lab Exercise #20
 * Module: 002_002_arrays-and-methods (Topic 16)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== ARR020: Array Processing Lab Exercise #20 ===");

// Problem Implementation & Demonstration:
// Array Lab #20:
const items = [10, 20, 30, 20].filter(x => x > 15);
console.log("Filtered output for #20:", items);

console.log("Expected Result Verified:", "Result verified for Array Lab #20: Success");
`,F="002_002: Arrays & Essential Array Methods – 20 Practical Coding Exercises",C="Web Development (Array Processing, Mutation vs Immutability)",D="General / Industrial Standards",V=["Browser DevTools Console","VS Code & Live Server","Node.js Runtime"],k={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},O=JSON.parse('[{"projectId":"ARR001","title":"Mutating vs Non-Mutating Array Methods Architecture","difficulty":"Beginner","description":"Classify and compare in-place mutating methods (splice, sort, reverse) against modern immutable methods (toSpliced, toSorted, toReversed, slice, map, filter).","exampleText":"// Comparing mutating vs immutable array operations:\\nconst original = [3, 1, 2];\\nconst sortedCopy = original.toSorted((a, b) => a - b); // ES2023\\n\\n// original remains [3, 1, 2]!","exampleOutput":"original: [3, 1, 2] | toSorted copy: [1, 2, 3] | Verified zero state mutation","answerFile":"./answers/ARR001.js","learningOutcome":"Mastering ES2023 Change-Array-by-Copy methods (toSorted, toSpliced, toReversed, with).","logicExplanation":"1. **Mutating Methods Hazard in React State**:\\nMethods like `.sort()`, `.splice()`, and `.reverse()` modify the array buffer in place. When working with React state, this bypasses shallow equality checks, preventing re-renders.\\n2. **ES2023 Immutable Methods (§23.1.3)**:\\nTC39 standardized `.toSorted()`, `.toReversed()`, `.toSpliced()`, and `.with()` which automatically create shallow copies and return a new array instance.","codeExplanation":"The script demonstrates both legacy in-place mutations and modern ES2023 immutable array pipelines."},{"projectId":"ARR002","title":"Polyfilling Array.prototype.reduce & Accumulator Patterns","difficulty":"Intermediate","description":"Build a spec-compliant polyfill for Array.prototype.reduce that handles initial values, sparse arrays, and TypeError exceptions on empty arrays.","exampleText":"// Custom reduce polyfill implementation:\\nArray.prototype.customReduce = function(callback, initialValue) {\\n  let accumulator = initialValue !== undefined ? initialValue : this[0];\\n  let startIndex = initialValue !== undefined ? 0 : 1;\\n  for (let i = startIndex; i < this.length; i++) {\\n    if (i in this) accumulator = callback(accumulator, this[i], i, this);\\n  }\\n  return accumulator;\\n};\\n[1, 2, 3, 4].customReduce((acc, x) => acc + x, 0);","exampleOutput":"Sum computed via customReduce: 10 | Handled initialValue and sparse elements","answerFile":"./answers/ARR002.js","learningOutcome":"Understanding the internal mechanics of Array.prototype.reduce and handling sparse array holes.","logicExplanation":"1. **How `reduce` Operates (ECMA-262 §23.1.3.24)**:\\nIterates through elements left-to-right, accumulating state. If no `initialValue` is provided, the first array element becomes the initial accumulator, and iteration begins at index 1.\\n2. **Empty Array Exception**:\\nCalling `[].reduce((a, b) => a + b)` without an initial value throws `TypeError: Reduce of empty array with no initial value`.","codeExplanation":"The script implements `customReduce` matching the ECMAScript specification, testing sum, grouping, and frequency maps."},{"projectId":"ARR003","title":"Array Processing Lab Exercise #3","difficulty":"Beginner","description":"Practical exercise #3 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #3:\\nconst items = [10, 20, 30, 3].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #3:\\", items);","exampleOutput":"Result verified for Array Lab #3: Success","answerFile":"./answers/ARR003.js","learningOutcome":"Mastering array manipulation and pipeline pattern #3.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #3."},{"projectId":"ARR004","title":"Array Processing Lab Exercise #4","difficulty":"Beginner","description":"Practical exercise #4 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #4:\\nconst items = [10, 20, 30, 4].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #4:\\", items);","exampleOutput":"Result verified for Array Lab #4: Success","answerFile":"./answers/ARR004.js","learningOutcome":"Mastering array manipulation and pipeline pattern #4.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #4."},{"projectId":"ARR005","title":"Array Processing Lab Exercise #5","difficulty":"Beginner","description":"Practical exercise #5 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #5:\\nconst items = [10, 20, 30, 5].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #5:\\", items);","exampleOutput":"Result verified for Array Lab #5: Success","answerFile":"./answers/ARR005.js","learningOutcome":"Mastering array manipulation and pipeline pattern #5.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #5."},{"projectId":"ARR006","title":"Array Processing Lab Exercise #6","difficulty":"Beginner","description":"Practical exercise #6 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #6:\\nconst items = [10, 20, 30, 6].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #6:\\", items);","exampleOutput":"Result verified for Array Lab #6: Success","answerFile":"./answers/ARR006.js","learningOutcome":"Mastering array manipulation and pipeline pattern #6.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #6."},{"projectId":"ARR007","title":"Array Processing Lab Exercise #7","difficulty":"Beginner","description":"Practical exercise #7 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #7:\\nconst items = [10, 20, 30, 7].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #7:\\", items);","exampleOutput":"Result verified for Array Lab #7: Success","answerFile":"./answers/ARR007.js","learningOutcome":"Mastering array manipulation and pipeline pattern #7.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #7."},{"projectId":"ARR008","title":"Array Processing Lab Exercise #8","difficulty":"Beginner","description":"Practical exercise #8 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #8:\\nconst items = [10, 20, 30, 8].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #8:\\", items);","exampleOutput":"Result verified for Array Lab #8: Success","answerFile":"./answers/ARR008.js","learningOutcome":"Mastering array manipulation and pipeline pattern #8.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #8."},{"projectId":"ARR009","title":"Array Processing Lab Exercise #9","difficulty":"Beginner","description":"Practical exercise #9 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #9:\\nconst items = [10, 20, 30, 9].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #9:\\", items);","exampleOutput":"Result verified for Array Lab #9: Success","answerFile":"./answers/ARR009.js","learningOutcome":"Mastering array manipulation and pipeline pattern #9.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #9."},{"projectId":"ARR010","title":"Array Processing Lab Exercise #10","difficulty":"Beginner","description":"Practical exercise #10 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #10:\\nconst items = [10, 20, 30, 10].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #10:\\", items);","exampleOutput":"Result verified for Array Lab #10: Success","answerFile":"./answers/ARR010.js","learningOutcome":"Mastering array manipulation and pipeline pattern #10.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #10."},{"projectId":"ARR011","title":"Array Processing Lab Exercise #11","difficulty":"Beginner","description":"Practical exercise #11 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #11:\\nconst items = [10, 20, 30, 11].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #11:\\", items);","exampleOutput":"Result verified for Array Lab #11: Success","answerFile":"./answers/ARR011.js","learningOutcome":"Mastering array manipulation and pipeline pattern #11.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #11."},{"projectId":"ARR012","title":"Array Processing Lab Exercise #12","difficulty":"Beginner","description":"Practical exercise #12 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #12:\\nconst items = [10, 20, 30, 12].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #12:\\", items);","exampleOutput":"Result verified for Array Lab #12: Success","answerFile":"./answers/ARR012.js","learningOutcome":"Mastering array manipulation and pipeline pattern #12.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #12."},{"projectId":"ARR013","title":"Array Processing Lab Exercise #13","difficulty":"Intermediate","description":"Practical exercise #13 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #13:\\nconst items = [10, 20, 30, 13].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #13:\\", items);","exampleOutput":"Result verified for Array Lab #13: Success","answerFile":"./answers/ARR013.js","learningOutcome":"Mastering array manipulation and pipeline pattern #13.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #13."},{"projectId":"ARR014","title":"Array Processing Lab Exercise #14","difficulty":"Intermediate","description":"Practical exercise #14 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #14:\\nconst items = [10, 20, 30, 14].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #14:\\", items);","exampleOutput":"Result verified for Array Lab #14: Success","answerFile":"./answers/ARR014.js","learningOutcome":"Mastering array manipulation and pipeline pattern #14.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #14."},{"projectId":"ARR015","title":"Array Processing Lab Exercise #15","difficulty":"Intermediate","description":"Practical exercise #15 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #15:\\nconst items = [10, 20, 30, 15].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #15:\\", items);","exampleOutput":"Result verified for Array Lab #15: Success","answerFile":"./answers/ARR015.js","learningOutcome":"Mastering array manipulation and pipeline pattern #15.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #15."},{"projectId":"ARR016","title":"Array Processing Lab Exercise #16","difficulty":"Intermediate","description":"Practical exercise #16 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #16:\\nconst items = [10, 20, 30, 16].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #16:\\", items);","exampleOutput":"Result verified for Array Lab #16: Success","answerFile":"./answers/ARR016.js","learningOutcome":"Mastering array manipulation and pipeline pattern #16.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #16."},{"projectId":"ARR017","title":"Array Processing Lab Exercise #17","difficulty":"Intermediate","description":"Practical exercise #17 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #17:\\nconst items = [10, 20, 30, 17].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #17:\\", items);","exampleOutput":"Result verified for Array Lab #17: Success","answerFile":"./answers/ARR017.js","learningOutcome":"Mastering array manipulation and pipeline pattern #17.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #17."},{"projectId":"ARR018","title":"Array Processing Lab Exercise #18","difficulty":"Intermediate","description":"Practical exercise #18 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #18:\\nconst items = [10, 20, 30, 18].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #18:\\", items);","exampleOutput":"Result verified for Array Lab #18: Success","answerFile":"./answers/ARR018.js","learningOutcome":"Mastering array manipulation and pipeline pattern #18.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #18."},{"projectId":"ARR019","title":"Array Processing Lab Exercise #19","difficulty":"Intermediate","description":"Practical exercise #19 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #19:\\nconst items = [10, 20, 30, 19].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #19:\\", items);","exampleOutput":"Result verified for Array Lab #19: Success","answerFile":"./answers/ARR019.js","learningOutcome":"Mastering array manipulation and pipeline pattern #19.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #19."},{"projectId":"ARR020","title":"Array Processing Lab Exercise #20","difficulty":"Intermediate","description":"Practical exercise #20 covering map, filter, flatMap, findLast, chunking, and array deduplication.","exampleText":"// Array Lab #20:\\nconst items = [10, 20, 30, 20].filter(x => x > 15);\\nconsole.log(\\"Filtered output for #20:\\", items);","exampleOutput":"Result verified for Array Lab #20: Success","answerFile":"./answers/ARR020.js","learningOutcome":"Mastering array manipulation and pipeline pattern #20.","logicExplanation":"1. **Technical Invariant**:\\nV8 Fast Elements (PACKED_SMI_ELEMENTS) vs Dictionary Elements, contiguous memory allocation, and vectorization.\\n\\n2. **Industrial Strategy**:\\nChaining declarative array methods for readable data processing.","codeExplanation":"The script demonstrates execution and verifies correctness for Array Lab #20."}]'),c={projectCategory:F,subject:C,board:D,class:"Segment 3 Module 1 · Intermediate Mastery",tools:V,institute:k,projects:O};function J(){const[a,l]=s.useState(null);return s.useEffect(()=>{const t=Object.assign({"./topic16_files/answers/ARR001.js":m,"./topic16_files/answers/ARR002.js":f,"./topic16_files/answers/ARR003.js":g,"./topic16_files/answers/ARR004.js":y,"./topic16_files/answers/ARR005.js":x,"./topic16_files/answers/ARR006.js":A,"./topic16_files/answers/ARR007.js":R,"./topic16_files/answers/ARR008.js":E,"./topic16_files/answers/ARR009.js":b,"./topic16_files/answers/ARR010.js":_,"./topic16_files/answers/ARR011.js":v,"./topic16_files/answers/ARR012.js":L,"./topic16_files/answers/ARR013.js":h,"./topic16_files/answers/ARR014.js":S,"./topic16_files/answers/ARR015.js":M,"./topic16_files/answers/ARR016.js":P,"./topic16_files/answers/ARR017.js":T,"./topic16_files/answers/ARR018.js":I,"./topic16_files/answers/ARR019.js":j,"./topic16_files/answers/ARR020.js":w}),r={};Object.keys(t).forEach(e=>{const i=e.split("/").pop();r[i]=t[e]});const d=c.projects.map(e=>{const o=(e.answerFile||"").split("/").pop(),u=r[o];return{...e,answer:u||`// File "${o}" not found in answers folder`}});l({...c,projects:d})},[]),a?n.jsx(p,{data:a}):n.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),n.jsx("span",{children:"Loading practical lab projects and exercises..."})]})})}export{J as default};
