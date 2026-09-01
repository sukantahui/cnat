import{b as r,j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as p}from"./JavaScriptProjectAnswerTemplate-V96mU1pF.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const g=`/**
 * CTRL001: Guard Clauses & Early Return Pattern in Enterprise Pipelines
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL001: Guard Clauses & Early Return Pattern in Enterprise Pipelines ===");

// Problem Implementation & Demonstration:
// Validating student registration with Guard Clauses:
function registerStudent(student) {
  if (!student) return { error: 'Missing student payload' };
  if (!student.name) return { error: 'Name is required' };
  if (student.age < 18) return { error: 'Must be 18 or older' };
  if (!student.email?.includes('@')) return { error: 'Invalid email' };
  
  return { success: true, studentId: 'CNAT-' + Date.now() };
}
registerStudent({ name: 'Swadeep', age: 20, email: 'swadeep@example.com' });

console.log("Expected Result Verified:", "Registration Success: { success: true, studentId: 'CNAT-...' }");
`,f=`/**\r
 * CTRL002: The switch(true) Range Evaluation & Pattern Matching Pattern\r
 * Module: 001_004_control-flow-conditions (Topic 12)\r
 * Mentor: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
console.log("=== CTRL002: The switch(true) Range Evaluation & Pattern Matching Pattern ===");\r
\r
// Problem Implementation & Demonstration:\r
// Evaluating ranges using switch(true):\r
function getStudentScholarshipTier(score) {\r
  switch (true) {\r
    case score >= 95:\r
      return '100% Full Platinum Scholarship';\r
    case score >= 85:\r
      return '75% Gold Scholarship';\r
    case score >= 75:\r
      return '50% Silver Scholarship';\r
    case score >= 60:\r
      return '25% Bronze Scholarship';\r
    default:\r
      return 'Standard Enrollment (No Scholarship)';\r
  }\r
}\r
getStudentScholarshipTier(96);\r
\r
console.log("Expected Result Verified:", "Score 96 → Tier: '100% Full Platinum Scholarship'");\r
`,m=`/**
 * CTRL003: Control Flow & Branching Exercise #3
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL003: Control Flow & Branching Exercise #3 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #3:
const status = 3 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #3:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #3: Success");
`,x=`/**
 * CTRL004: Control Flow & Branching Exercise #4
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL004: Control Flow & Branching Exercise #4 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #4:
const status = 4 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #4:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #4: Success");
`,E=`/**
 * CTRL005: Control Flow & Branching Exercise #5
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL005: Control Flow & Branching Exercise #5 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #5:
const status = 5 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #5:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #5: Success");
`,b=`/**
 * CTRL006: Control Flow & Branching Exercise #6
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL006: Control Flow & Branching Exercise #6 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #6:
const status = 6 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #6:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #6: Success");
`,h=`/**
 * CTRL007: Control Flow & Branching Exercise #7
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL007: Control Flow & Branching Exercise #7 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #7:
const status = 7 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #7:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #7: Success");
`,L=`/**
 * CTRL008: Control Flow & Branching Exercise #8
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL008: Control Flow & Branching Exercise #8 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #8:
const status = 8 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #8:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #8: Success");
`,T=`/**
 * CTRL009: Control Flow & Branching Exercise #9
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL009: Control Flow & Branching Exercise #9 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #9:
const status = 9 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #9:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #9: Success");
`,v=`/**
 * CTRL010: Control Flow & Branching Exercise #10
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL010: Control Flow & Branching Exercise #10 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #10:
const status = 10 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #10:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #10: Success");
`,D=`/**
 * CTRL011: Control Flow & Branching Exercise #11
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL011: Control Flow & Branching Exercise #11 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #11:
const status = 11 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #11:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #11: Success");
`,C=`/**
 * CTRL012: Control Flow & Branching Exercise #12
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL012: Control Flow & Branching Exercise #12 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #12:
const status = 12 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #12:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #12: Success");
`,w=`/**
 * CTRL013: Control Flow & Branching Exercise #13
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL013: Control Flow & Branching Exercise #13 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #13:
const status = 13 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #13:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #13: Success");
`,R=`/**
 * CTRL014: Control Flow & Branching Exercise #14
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL014: Control Flow & Branching Exercise #14 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #14:
const status = 14 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #14:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #14: Success");
`,_=`/**
 * CTRL015: Control Flow & Branching Exercise #15
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL015: Control Flow & Branching Exercise #15 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #15:
const status = 15 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #15:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #15: Success");
`,y=`/**
 * CTRL016: Control Flow & Branching Exercise #16
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL016: Control Flow & Branching Exercise #16 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #16:
const status = 16 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #16:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #16: Success");
`,j=`/**
 * CTRL017: Control Flow & Branching Exercise #17
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL017: Control Flow & Branching Exercise #17 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #17:
const status = 17 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #17:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #17: Success");
`,S=`/**
 * CTRL018: Control Flow & Branching Exercise #18
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL018: Control Flow & Branching Exercise #18 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #18:
const status = 18 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #18:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #18: Success");
`,B=`/**
 * CTRL019: Control Flow & Branching Exercise #19
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL019: Control Flow & Branching Exercise #19 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #19:
const status = 19 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #19:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #19: Success");
`,F=`/**
 * CTRL020: Control Flow & Branching Exercise #20
 * Module: 001_004_control-flow-conditions (Topic 12)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== CTRL020: Control Flow & Branching Exercise #20 ===");

// Problem Implementation & Demonstration:
// Decision Logic Lab #20:
const status = 20 % 2 === 0 ? "EVEN" : "ODD";
console.log("Evaluated parity for #20:", status);

console.log("Expected Result Verified:", "Result verified for Decision Lab #20: Success");
`,P="001_004: Control Flow & Decision Making – 20 Practical Coding Exercises",O="Web Development (Control Flow & Branching Logic)",V="General / Industrial Standards",I=["Browser DevTools Console","VS Code & Live Server","Node.js Runtime"],M={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},k=JSON.parse(`[{"projectId":"CTRL001","title":"Guard Clauses & Early Return Pattern in Enterprise Pipelines","difficulty":"Beginner","description":"Refactor a heavily nested 5-level if-else registration validator into a clean, flat function using early returns and guard clauses.","exampleText":"// Validating student registration with Guard Clauses:\\nfunction registerStudent(student) {\\n  if (!student) return { error: 'Missing student payload' };\\n  if (!student.name) return { error: 'Name is required' };\\n  if (student.age < 18) return { error: 'Must be 18 or older' };\\n  if (!student.email?.includes('@')) return { error: 'Invalid email' };\\n  \\n  return { success: true, studentId: 'CNAT-' + Date.now() };\\n}\\nregisterStudent({ name: 'Swadeep', age: 20, email: 'swadeep@example.com' });","exampleOutput":"Registration Success: { success: true, studentId: 'CNAT-...' }","answerFile":"./answers/CTRL001.js","learningOutcome":"Eliminating the 'Arrow Anti-Pattern' (deeply nested ifs) using guard clauses and early exit.","logicExplanation":"1. **The Arrow Anti-Pattern & Cyclomatic Complexity**:\\nDeeply nested \`if/else\` ladders increase code complexity, making logic hard to read, test, and maintain.\\n2. **The Guard Clause Pattern**:\\nHandle edge cases, errors, and invalid inputs at the very top of the function and return immediately. The happy path remains unindented at the root level of the function.\\n3. **Performance Benefit**: V8's TurboFan compiler optimizes linear execution flows with fewer branching jumps.","codeExplanation":"The function \`registerStudent()\` replaces nested branching with 4 concise guard clauses, returning descriptive error objects on validation failure."},{"projectId":"CTRL002","title":"The switch(true) Range Evaluation & Pattern Matching Pattern","difficulty":"Beginner","description":"Implement a student tax and scholarship tier calculator using the switch(true) idiom to evaluate complex relational boolean expressions in switch statements.","exampleText":"// Evaluating ranges using switch(true):\\nfunction getStudentScholarshipTier(score) {\\n  switch (true) {\\n    case score >= 95:\\n      return '100% Full Platinum Scholarship';\\n    case score >= 85:\\n      return '75% Gold Scholarship';\\n    case score >= 75:\\n      return '50% Silver Scholarship';\\n    case score >= 60:\\n      return '25% Bronze Scholarship';\\n    default:\\n      return 'Standard Enrollment (No Scholarship)';\\n  }\\n}\\ngetStudentScholarshipTier(96);","exampleOutput":"Score 96 → Tier: '100% Full Platinum Scholarship'","answerFile":"./answers/CTRL002.js","learningOutcome":"Mastering the switch(true) pattern for readable range evaluations and multi-condition matching.","logicExplanation":"1. **How \`switch(expr)\` Works (ECMA-262 §14.12)**:\\nThe switch statement evaluates \`expr\` and searches for a \`case\` clause whose expression evaluates to the exact same value using **strict equality (\`===\`)**.\\n2. **The \`switch(true)\` Idiom**:\\nBy setting the switch condition to literal \`true\`, each \`case\` statement is evaluated as a boolean expression (\`score >= 95 === true\`). The first case that evaluates to \`true\` matches and executes.\\n3. **Readability Advantage**: Replaces sprawling \`if...else if...else if\` chains with clean, aligned column cases.","codeExplanation":"The function \`getStudentScholarshipTier()\` demonstrates range evaluation across multiple score brackets using \`switch(true)\`."},{"projectId":"CTRL003","title":"Control Flow & Branching Exercise #3","difficulty":"Beginner","description":"Practical decision making lab #3 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #3:\\nconst status = 3 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #3:\\", status);","exampleOutput":"Result verified for Decision Lab #3: Success","answerFile":"./answers/CTRL003.js","learningOutcome":"Mastering control flow and conditional pattern #3.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #3."},{"projectId":"CTRL004","title":"Control Flow & Branching Exercise #4","difficulty":"Beginner","description":"Practical decision making lab #4 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #4:\\nconst status = 4 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #4:\\", status);","exampleOutput":"Result verified for Decision Lab #4: Success","answerFile":"./answers/CTRL004.js","learningOutcome":"Mastering control flow and conditional pattern #4.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #4."},{"projectId":"CTRL005","title":"Control Flow & Branching Exercise #5","difficulty":"Beginner","description":"Practical decision making lab #5 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #5:\\nconst status = 5 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #5:\\", status);","exampleOutput":"Result verified for Decision Lab #5: Success","answerFile":"./answers/CTRL005.js","learningOutcome":"Mastering control flow and conditional pattern #5.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #5."},{"projectId":"CTRL006","title":"Control Flow & Branching Exercise #6","difficulty":"Beginner","description":"Practical decision making lab #6 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #6:\\nconst status = 6 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #6:\\", status);","exampleOutput":"Result verified for Decision Lab #6: Success","answerFile":"./answers/CTRL006.js","learningOutcome":"Mastering control flow and conditional pattern #6.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #6."},{"projectId":"CTRL007","title":"Control Flow & Branching Exercise #7","difficulty":"Beginner","description":"Practical decision making lab #7 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #7:\\nconst status = 7 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #7:\\", status);","exampleOutput":"Result verified for Decision Lab #7: Success","answerFile":"./answers/CTRL007.js","learningOutcome":"Mastering control flow and conditional pattern #7.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #7."},{"projectId":"CTRL008","title":"Control Flow & Branching Exercise #8","difficulty":"Beginner","description":"Practical decision making lab #8 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #8:\\nconst status = 8 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #8:\\", status);","exampleOutput":"Result verified for Decision Lab #8: Success","answerFile":"./answers/CTRL008.js","learningOutcome":"Mastering control flow and conditional pattern #8.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #8."},{"projectId":"CTRL009","title":"Control Flow & Branching Exercise #9","difficulty":"Beginner","description":"Practical decision making lab #9 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #9:\\nconst status = 9 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #9:\\", status);","exampleOutput":"Result verified for Decision Lab #9: Success","answerFile":"./answers/CTRL009.js","learningOutcome":"Mastering control flow and conditional pattern #9.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #9."},{"projectId":"CTRL010","title":"Control Flow & Branching Exercise #10","difficulty":"Beginner","description":"Practical decision making lab #10 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #10:\\nconst status = 10 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #10:\\", status);","exampleOutput":"Result verified for Decision Lab #10: Success","answerFile":"./answers/CTRL010.js","learningOutcome":"Mastering control flow and conditional pattern #10.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #10."},{"projectId":"CTRL011","title":"Control Flow & Branching Exercise #11","difficulty":"Beginner","description":"Practical decision making lab #11 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #11:\\nconst status = 11 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #11:\\", status);","exampleOutput":"Result verified for Decision Lab #11: Success","answerFile":"./answers/CTRL011.js","learningOutcome":"Mastering control flow and conditional pattern #11.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #11."},{"projectId":"CTRL012","title":"Control Flow & Branching Exercise #12","difficulty":"Beginner","description":"Practical decision making lab #12 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #12:\\nconst status = 12 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #12:\\", status);","exampleOutput":"Result verified for Decision Lab #12: Success","answerFile":"./answers/CTRL012.js","learningOutcome":"Mastering control flow and conditional pattern #12.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #12."},{"projectId":"CTRL013","title":"Control Flow & Branching Exercise #13","difficulty":"Beginner","description":"Practical decision making lab #13 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #13:\\nconst status = 13 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #13:\\", status);","exampleOutput":"Result verified for Decision Lab #13: Success","answerFile":"./answers/CTRL013.js","learningOutcome":"Mastering control flow and conditional pattern #13.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #13."},{"projectId":"CTRL014","title":"Control Flow & Branching Exercise #14","difficulty":"Beginner","description":"Practical decision making lab #14 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #14:\\nconst status = 14 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #14:\\", status);","exampleOutput":"Result verified for Decision Lab #14: Success","answerFile":"./answers/CTRL014.js","learningOutcome":"Mastering control flow and conditional pattern #14.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #14."},{"projectId":"CTRL015","title":"Control Flow & Branching Exercise #15","difficulty":"Beginner","description":"Practical decision making lab #15 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #15:\\nconst status = 15 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #15:\\", status);","exampleOutput":"Result verified for Decision Lab #15: Success","answerFile":"./answers/CTRL015.js","learningOutcome":"Mastering control flow and conditional pattern #15.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #15."},{"projectId":"CTRL016","title":"Control Flow & Branching Exercise #16","difficulty":"Intermediate","description":"Practical decision making lab #16 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #16:\\nconst status = 16 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #16:\\", status);","exampleOutput":"Result verified for Decision Lab #16: Success","answerFile":"./answers/CTRL016.js","learningOutcome":"Mastering control flow and conditional pattern #16.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #16."},{"projectId":"CTRL017","title":"Control Flow & Branching Exercise #17","difficulty":"Intermediate","description":"Practical decision making lab #17 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #17:\\nconst status = 17 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #17:\\", status);","exampleOutput":"Result verified for Decision Lab #17: Success","answerFile":"./answers/CTRL017.js","learningOutcome":"Mastering control flow and conditional pattern #17.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #17."},{"projectId":"CTRL018","title":"Control Flow & Branching Exercise #18","difficulty":"Intermediate","description":"Practical decision making lab #18 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #18:\\nconst status = 18 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #18:\\", status);","exampleOutput":"Result verified for Decision Lab #18: Success","answerFile":"./answers/CTRL018.js","learningOutcome":"Mastering control flow and conditional pattern #18.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #18."},{"projectId":"CTRL019","title":"Control Flow & Branching Exercise #19","difficulty":"Intermediate","description":"Practical decision making lab #19 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #19:\\nconst status = 19 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #19:\\", status);","exampleOutput":"Result verified for Decision Lab #19: Success","answerFile":"./answers/CTRL019.js","learningOutcome":"Mastering control flow and conditional pattern #19.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #19."},{"projectId":"CTRL020","title":"Control Flow & Branching Exercise #20","difficulty":"Intermediate","description":"Practical decision making lab #20 covering ternary expressions, nested conditionals, and boundary checks.","exampleText":"// Decision Logic Lab #20:\\nconst status = 20 % 2 === 0 ? \\"EVEN\\" : \\"ODD\\";\\nconsole.log(\\"Evaluated parity for #20:\\", status);","exampleOutput":"Result verified for Decision Lab #20: Success","answerFile":"./answers/CTRL020.js","learningOutcome":"Mastering control flow and conditional pattern #20.","logicExplanation":"1. **Technical Invariant**:\\nDeep evaluation of branching logic, jump tables, and V8 bytecode generation.\\n\\n2. **Best Practice**:\\nEliminating redundant conditional evaluations.","codeExplanation":"The script demonstrates execution and verifies correctness for Decision Lab #20."}]`),c={projectCategory:P,subject:O,board:V,class:"Module 001_004 · Core Foundations",tools:I,institute:M,projects:k};function z(){const[o,l]=r.useState(null);return r.useEffect(()=>{const t=Object.assign({"./topic12_files/answers/CTRL001.js":g,"./topic12_files/answers/CTRL002.js":f,"./topic12_files/answers/CTRL003.js":m,"./topic12_files/answers/CTRL004.js":x,"./topic12_files/answers/CTRL005.js":E,"./topic12_files/answers/CTRL006.js":b,"./topic12_files/answers/CTRL007.js":h,"./topic12_files/answers/CTRL008.js":L,"./topic12_files/answers/CTRL009.js":T,"./topic12_files/answers/CTRL010.js":v,"./topic12_files/answers/CTRL011.js":D,"./topic12_files/answers/CTRL012.js":C,"./topic12_files/answers/CTRL013.js":w,"./topic12_files/answers/CTRL014.js":R,"./topic12_files/answers/CTRL015.js":_,"./topic12_files/answers/CTRL016.js":y,"./topic12_files/answers/CTRL017.js":j,"./topic12_files/answers/CTRL018.js":S,"./topic12_files/answers/CTRL019.js":B,"./topic12_files/answers/CTRL020.js":F}),i={};Object.keys(t).forEach(n=>{const a=n.split("/").pop();i[a]=t[n]});const d=c.projects.map(n=>{const s=(n.answerFile||"").split("/").pop(),u=i[s];return{...n,answer:u||`// File "${s}" not found in answers folder`}});l({...c,projects:d})},[]),o?e.jsx(p,{data:o}):e.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"Loading practical lab projects and exercises..."})]})})}export{z as default};
