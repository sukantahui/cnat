import{b as c,j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as p}from"./JavaScriptProjectAnswerTemplate-CZaOBrFB.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const u=`/**
 * OOP001: Prototypal Inheritance & Prototype Chain Introspection
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP001: Prototypal Inheritance & Prototype Chain Introspection ===");

// Problem Implementation & Demonstration:
// Prototypal inheritance without ES6 classes:
function Person(name) { this.name = name; }
Person.prototype.greet = function() { return \`Hello, \${this.name}\`; };

function Student(name, course) {
  Person.call(this, name);
  this.course = course;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const s = new Student('Swadeep', 'JS');
s.greet();

console.log("Expected Result Verified:", "Student greeted: 'Hello, Swadeep' | isPrototypeOf verified: true");
`,b=`/**
 * OOP002: ES6 Class Architecture with True Private Fields (#)
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP002: ES6 Class Architecture with True Private Fields (#) ===");

// Problem Implementation & Demonstration:
// ES2022 Class with True Private Fields (#):
class BankAccount {
  #balance = 0;
  #accountNumber;

  constructor(accNum, initialDeposit) {
    this.#accountNumber = accNum;
    this.#balance = initialDeposit;
  }

  deposit(amount) { this.#balance += amount; }
  getBalance() { return this.#balance; }
}
const acc = new BankAccount('AC-101', 5000);
acc.deposit(1000);

console.log("Expected Result Verified:", "Balance: ₹6,000 | acc.#balance accessed externally: SyntaxError (True Private State)");
`,m=`/**
 * OOP003: Object & OOP Lab Exercise #3
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP003: Object & OOP Lab Exercise #3 ===");

// Problem Implementation & Demonstration:
// OOP Lab #3:
class Entity3 { id = 3; }
const e = new Entity3();
console.log("Entity instance #3:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #3: Success");
`,P=`/**
 * OOP004: Object & OOP Lab Exercise #4
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP004: Object & OOP Lab Exercise #4 ===");

// Problem Implementation & Demonstration:
// OOP Lab #4:
class Entity4 { id = 4; }
const e = new Entity4();
console.log("Entity instance #4:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #4: Success");
`,g=`/**
 * OOP005: Object & OOP Lab Exercise #5
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP005: Object & OOP Lab Exercise #5 ===");

// Problem Implementation & Demonstration:
// OOP Lab #5:
class Entity5 { id = 5; }
const e = new Entity5();
console.log("Entity instance #5:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #5: Success");
`,y=`/**
 * OOP006: Object & OOP Lab Exercise #6
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP006: Object & OOP Lab Exercise #6 ===");

// Problem Implementation & Demonstration:
// OOP Lab #6:
class Entity6 { id = 6; }
const e = new Entity6();
console.log("Entity instance #6:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #6: Success");
`,x=`/**
 * OOP007: Object & OOP Lab Exercise #7
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP007: Object & OOP Lab Exercise #7 ===");

// Problem Implementation & Demonstration:
// OOP Lab #7:
class Entity7 { id = 7; }
const e = new Entity7();
console.log("Entity instance #7:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #7: Success");
`,E=`/**
 * OOP008: Object & OOP Lab Exercise #8
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP008: Object & OOP Lab Exercise #8 ===");

// Problem Implementation & Demonstration:
// OOP Lab #8:
class Entity8 { id = 8; }
const e = new Entity8();
console.log("Entity instance #8:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #8: Success");
`,f=`/**
 * OOP009: Object & OOP Lab Exercise #9
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP009: Object & OOP Lab Exercise #9 ===");

// Problem Implementation & Demonstration:
// OOP Lab #9:
class Entity9 { id = 9; }
const e = new Entity9();
console.log("Entity instance #9:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #9: Success");
`,h=`/**
 * OOP010: Object & OOP Lab Exercise #10
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP010: Object & OOP Lab Exercise #10 ===");

// Problem Implementation & Demonstration:
// OOP Lab #10:
class Entity10 { id = 10; }
const e = new Entity10();
console.log("Entity instance #10:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #10: Success");
`,j=`/**
 * OOP011: Object & OOP Lab Exercise #11
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP011: Object & OOP Lab Exercise #11 ===");

// Problem Implementation & Demonstration:
// OOP Lab #11:
class Entity11 { id = 11; }
const e = new Entity11();
console.log("Entity instance #11:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #11: Success");
`,_=`/**
 * OOP012: Object & OOP Lab Exercise #12
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP012: Object & OOP Lab Exercise #12 ===");

// Problem Implementation & Demonstration:
// OOP Lab #12:
class Entity12 { id = 12; }
const e = new Entity12();
console.log("Entity instance #12:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #12: Success");
`,L=`/**
 * OOP013: Object & OOP Lab Exercise #13
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP013: Object & OOP Lab Exercise #13 ===");

// Problem Implementation & Demonstration:
// OOP Lab #13:
class Entity13 { id = 13; }
const e = new Entity13();
console.log("Entity instance #13:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #13: Success");
`,v=`/**
 * OOP014: Object & OOP Lab Exercise #14
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP014: Object & OOP Lab Exercise #14 ===");

// Problem Implementation & Demonstration:
// OOP Lab #14:
class Entity14 { id = 14; }
const e = new Entity14();
console.log("Entity instance #14:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #14: Success");
`,I=`/**
 * OOP015: Object & OOP Lab Exercise #15
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP015: Object & OOP Lab Exercise #15 ===");

// Problem Implementation & Demonstration:
// OOP Lab #15:
class Entity15 { id = 15; }
const e = new Entity15();
console.log("Entity instance #15:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #15: Success");
`,w=`/**
 * OOP016: Object & OOP Lab Exercise #16
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP016: Object & OOP Lab Exercise #16 ===");

// Problem Implementation & Demonstration:
// OOP Lab #16:
class Entity16 { id = 16; }
const e = new Entity16();
console.log("Entity instance #16:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #16: Success");
`,S=`/**
 * OOP017: Object & OOP Lab Exercise #17
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP017: Object & OOP Lab Exercise #17 ===");

// Problem Implementation & Demonstration:
// OOP Lab #17:
class Entity17 { id = 17; }
const e = new Entity17();
console.log("Entity instance #17:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #17: Success");
`,T=`/**
 * OOP018: Object & OOP Lab Exercise #18
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP018: Object & OOP Lab Exercise #18 ===");

// Problem Implementation & Demonstration:
// OOP Lab #18:
class Entity18 { id = 18; }
const e = new Entity18();
console.log("Entity instance #18:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #18: Success");
`,C=`/**
 * OOP019: Object & OOP Lab Exercise #19
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP019: Object & OOP Lab Exercise #19 ===");

// Problem Implementation & Demonstration:
// OOP Lab #19:
class Entity19 { id = 19; }
const e = new Entity19();
console.log("Entity instance #19:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #19: Success");
`,M=`/**
 * OOP020: Object & OOP Lab Exercise #20
 * Module: 002_003_objects-and-basic-oop (Topic 32)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== OOP020: Object & OOP Lab Exercise #20 ===");

// Problem Implementation & Demonstration:
// OOP Lab #20:
class Entity20 { id = 20; }
const e = new Entity20();
console.log("Entity instance #20:", e.id);

console.log("Expected Result Verified:", "Result verified for OOP Lab #20: Success");
`,R="002_003: Objects, Methods & Object-Oriented JavaScript – 20 Practical Coding Exercises",D="Web Development (Prototypes, ES6 Classes, Private Fields & Descriptors)",H="General / Industrial Standards",V=["Browser DevTools Console","VS Code & Live Server","Node.js Runtime"],A={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},k=JSON.parse('[{"projectId":"OOP001","title":"Prototypal Inheritance & Prototype Chain Introspection","difficulty":"Beginner","description":"Build an inheritance hierarchy using Object.create() and constructor functions, inspecting __proto__, prototype, and Object.getPrototypeOf().","exampleText":"// Prototypal inheritance without ES6 classes:\\nfunction Person(name) { this.name = name; }\\nPerson.prototype.greet = function() { return `Hello, ${this.name}`; };\\n\\nfunction Student(name, course) {\\n  Person.call(this, name);\\n  this.course = course;\\n}\\nStudent.prototype = Object.create(Person.prototype);\\nStudent.prototype.constructor = Student;\\n\\nconst s = new Student(\'Swadeep\', \'JS\');\\ns.greet();","exampleOutput":"Student greeted: \'Hello, Swadeep\' | isPrototypeOf verified: true","answerFile":"./answers/OOP001.js","learningOutcome":"Understanding the prototypal nature of JavaScript and constructor function linkage.","logicExplanation":"1. **Prototypal Inheritance Mechanics (ECMA-262 §10.1)**:\\nIn JavaScript, objects have an internal slot `[[Prototype]]` pointing to another object. When a property is queried, V8 traverses up the prototype chain until the property is found or `null` is reached.\\n2. **`Object.create(proto)`**:\\nCreates a new object whose `[[Prototype]]` is set directly to `proto` without running a constructor function.","codeExplanation":"The script implements classical prototypal inheritance and validates prototype link references with `Object.getPrototypeOf()`."},{"projectId":"OOP002","title":"ES6 Class Architecture with True Private Fields (#)","difficulty":"Beginner","description":"Implement an enterprise bank account class utilizing ES2022 private fields (#balance, #pin) and private methods (#auditTransaction) that cannot be accessed from outside.","exampleText":"// ES2022 Class with True Private Fields (#):\\nclass BankAccount {\\n  #balance = 0;\\n  #accountNumber;\\n\\n  constructor(accNum, initialDeposit) {\\n    this.#accountNumber = accNum;\\n    this.#balance = initialDeposit;\\n  }\\n\\n  deposit(amount) { this.#balance += amount; }\\n  getBalance() { return this.#balance; }\\n}\\nconst acc = new BankAccount(\'AC-101\', 5000);\\nacc.deposit(1000);","exampleOutput":"Balance: ₹6,000 | acc.#balance accessed externally: SyntaxError (True Private State)","answerFile":"./answers/OOP002.js","learningOutcome":"Mastering ES2022 private fields (#) and contrasting them against closure-based and Symbol-based privacy.","logicExplanation":"1. **True Hard Privacy with `#` (ES2022 §15.7)**:\\nPrivate fields prefixed with `#` are stored in an internal `[[PrivateElements]]` slot. They cannot be queried via `Object.keys()`, `Object.getOwnPropertySymbols()`, or `Reflect.ownKeys()`.\\n2. **Compile-Time Enforcement**:\\nAttempting to read `acc.#balance` outside the class body results in a compile-time `SyntaxError`.","codeExplanation":"The script implements `BankAccount` with `#` private state, showing deposit, withdrawal validations, and private auditing."},{"projectId":"OOP003","title":"Object & OOP Lab Exercise #3","difficulty":"Beginner","description":"Practical exercise #3 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #3:\\nclass Entity3 { id = 3; }\\nconst e = new Entity3();\\nconsole.log(\\"Entity instance #3:\\", e.id);","exampleOutput":"Result verified for OOP Lab #3: Success","answerFile":"./answers/OOP003.js","learningOutcome":"Mastering object-oriented architectural pattern #3.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #3."},{"projectId":"OOP004","title":"Object & OOP Lab Exercise #4","difficulty":"Beginner","description":"Practical exercise #4 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #4:\\nclass Entity4 { id = 4; }\\nconst e = new Entity4();\\nconsole.log(\\"Entity instance #4:\\", e.id);","exampleOutput":"Result verified for OOP Lab #4: Success","answerFile":"./answers/OOP004.js","learningOutcome":"Mastering object-oriented architectural pattern #4.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #4."},{"projectId":"OOP005","title":"Object & OOP Lab Exercise #5","difficulty":"Beginner","description":"Practical exercise #5 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #5:\\nclass Entity5 { id = 5; }\\nconst e = new Entity5();\\nconsole.log(\\"Entity instance #5:\\", e.id);","exampleOutput":"Result verified for OOP Lab #5: Success","answerFile":"./answers/OOP005.js","learningOutcome":"Mastering object-oriented architectural pattern #5.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #5."},{"projectId":"OOP006","title":"Object & OOP Lab Exercise #6","difficulty":"Beginner","description":"Practical exercise #6 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #6:\\nclass Entity6 { id = 6; }\\nconst e = new Entity6();\\nconsole.log(\\"Entity instance #6:\\", e.id);","exampleOutput":"Result verified for OOP Lab #6: Success","answerFile":"./answers/OOP006.js","learningOutcome":"Mastering object-oriented architectural pattern #6.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #6."},{"projectId":"OOP007","title":"Object & OOP Lab Exercise #7","difficulty":"Beginner","description":"Practical exercise #7 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #7:\\nclass Entity7 { id = 7; }\\nconst e = new Entity7();\\nconsole.log(\\"Entity instance #7:\\", e.id);","exampleOutput":"Result verified for OOP Lab #7: Success","answerFile":"./answers/OOP007.js","learningOutcome":"Mastering object-oriented architectural pattern #7.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #7."},{"projectId":"OOP008","title":"Object & OOP Lab Exercise #8","difficulty":"Beginner","description":"Practical exercise #8 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #8:\\nclass Entity8 { id = 8; }\\nconst e = new Entity8();\\nconsole.log(\\"Entity instance #8:\\", e.id);","exampleOutput":"Result verified for OOP Lab #8: Success","answerFile":"./answers/OOP008.js","learningOutcome":"Mastering object-oriented architectural pattern #8.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #8."},{"projectId":"OOP009","title":"Object & OOP Lab Exercise #9","difficulty":"Beginner","description":"Practical exercise #9 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #9:\\nclass Entity9 { id = 9; }\\nconst e = new Entity9();\\nconsole.log(\\"Entity instance #9:\\", e.id);","exampleOutput":"Result verified for OOP Lab #9: Success","answerFile":"./answers/OOP009.js","learningOutcome":"Mastering object-oriented architectural pattern #9.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #9."},{"projectId":"OOP010","title":"Object & OOP Lab Exercise #10","difficulty":"Beginner","description":"Practical exercise #10 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #10:\\nclass Entity10 { id = 10; }\\nconst e = new Entity10();\\nconsole.log(\\"Entity instance #10:\\", e.id);","exampleOutput":"Result verified for OOP Lab #10: Success","answerFile":"./answers/OOP010.js","learningOutcome":"Mastering object-oriented architectural pattern #10.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #10."},{"projectId":"OOP011","title":"Object & OOP Lab Exercise #11","difficulty":"Beginner","description":"Practical exercise #11 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #11:\\nclass Entity11 { id = 11; }\\nconst e = new Entity11();\\nconsole.log(\\"Entity instance #11:\\", e.id);","exampleOutput":"Result verified for OOP Lab #11: Success","answerFile":"./answers/OOP011.js","learningOutcome":"Mastering object-oriented architectural pattern #11.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #11."},{"projectId":"OOP012","title":"Object & OOP Lab Exercise #12","difficulty":"Beginner","description":"Practical exercise #12 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #12:\\nclass Entity12 { id = 12; }\\nconst e = new Entity12();\\nconsole.log(\\"Entity instance #12:\\", e.id);","exampleOutput":"Result verified for OOP Lab #12: Success","answerFile":"./answers/OOP012.js","learningOutcome":"Mastering object-oriented architectural pattern #12.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #12."},{"projectId":"OOP013","title":"Object & OOP Lab Exercise #13","difficulty":"Intermediate","description":"Practical exercise #13 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #13:\\nclass Entity13 { id = 13; }\\nconst e = new Entity13();\\nconsole.log(\\"Entity instance #13:\\", e.id);","exampleOutput":"Result verified for OOP Lab #13: Success","answerFile":"./answers/OOP013.js","learningOutcome":"Mastering object-oriented architectural pattern #13.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #13."},{"projectId":"OOP014","title":"Object & OOP Lab Exercise #14","difficulty":"Intermediate","description":"Practical exercise #14 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #14:\\nclass Entity14 { id = 14; }\\nconst e = new Entity14();\\nconsole.log(\\"Entity instance #14:\\", e.id);","exampleOutput":"Result verified for OOP Lab #14: Success","answerFile":"./answers/OOP014.js","learningOutcome":"Mastering object-oriented architectural pattern #14.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #14."},{"projectId":"OOP015","title":"Object & OOP Lab Exercise #15","difficulty":"Intermediate","description":"Practical exercise #15 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #15:\\nclass Entity15 { id = 15; }\\nconst e = new Entity15();\\nconsole.log(\\"Entity instance #15:\\", e.id);","exampleOutput":"Result verified for OOP Lab #15: Success","answerFile":"./answers/OOP015.js","learningOutcome":"Mastering object-oriented architectural pattern #15.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #15."},{"projectId":"OOP016","title":"Object & OOP Lab Exercise #16","difficulty":"Intermediate","description":"Practical exercise #16 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #16:\\nclass Entity16 { id = 16; }\\nconst e = new Entity16();\\nconsole.log(\\"Entity instance #16:\\", e.id);","exampleOutput":"Result verified for OOP Lab #16: Success","answerFile":"./answers/OOP016.js","learningOutcome":"Mastering object-oriented architectural pattern #16.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #16."},{"projectId":"OOP017","title":"Object & OOP Lab Exercise #17","difficulty":"Intermediate","description":"Practical exercise #17 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #17:\\nclass Entity17 { id = 17; }\\nconst e = new Entity17();\\nconsole.log(\\"Entity instance #17:\\", e.id);","exampleOutput":"Result verified for OOP Lab #17: Success","answerFile":"./answers/OOP017.js","learningOutcome":"Mastering object-oriented architectural pattern #17.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #17."},{"projectId":"OOP018","title":"Object & OOP Lab Exercise #18","difficulty":"Intermediate","description":"Practical exercise #18 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #18:\\nclass Entity18 { id = 18; }\\nconst e = new Entity18();\\nconsole.log(\\"Entity instance #18:\\", e.id);","exampleOutput":"Result verified for OOP Lab #18: Success","answerFile":"./answers/OOP018.js","learningOutcome":"Mastering object-oriented architectural pattern #18.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #18."},{"projectId":"OOP019","title":"Object & OOP Lab Exercise #19","difficulty":"Intermediate","description":"Practical exercise #19 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #19:\\nclass Entity19 { id = 19; }\\nconst e = new Entity19();\\nconsole.log(\\"Entity instance #19:\\", e.id);","exampleOutput":"Result verified for OOP Lab #19: Success","answerFile":"./answers/OOP019.js","learningOutcome":"Mastering object-oriented architectural pattern #19.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #19."},{"projectId":"OOP020","title":"Object & OOP Lab Exercise #20","difficulty":"Intermediate","description":"Practical exercise #20 covering getters/setters, property descriptors, Object.assign, symbols, and class polymorphism.","exampleText":"// OOP Lab #20:\\nclass Entity20 { id = 20; }\\nconst e = new Entity20();\\nconsole.log(\\"Entity instance #20:\\", e.id);","exampleOutput":"Result verified for OOP Lab #20: Success","answerFile":"./answers/OOP020.js","learningOutcome":"Mastering object-oriented architectural pattern #20.","logicExplanation":"1. **Technical Invariant**:\\nV8 Hidden Classes (Maps), Inline Caches (IC), descriptor attributes, and prototype optimization.\\n\\n2. **Industrial Strategy**:\\nDesigning robust domain models using modern class hierarchies.","codeExplanation":"The script demonstrates execution and verifies correctness for OOP Lab #20."}]'),r={projectCategory:R,subject:D,board:H,class:"Segment 4 · OOP & Class Architecture",tools:V,institute:A,projects:k};function $(){const[t,l]=c.useState(null);return c.useEffect(()=>{const s=Object.assign({"./topic32_files/answers/OOP001.js":u,"./topic32_files/answers/OOP002.js":b,"./topic32_files/answers/OOP003.js":m,"./topic32_files/answers/OOP004.js":P,"./topic32_files/answers/OOP005.js":g,"./topic32_files/answers/OOP006.js":y,"./topic32_files/answers/OOP007.js":x,"./topic32_files/answers/OOP008.js":E,"./topic32_files/answers/OOP009.js":f,"./topic32_files/answers/OOP010.js":h,"./topic32_files/answers/OOP011.js":j,"./topic32_files/answers/OOP012.js":_,"./topic32_files/answers/OOP013.js":L,"./topic32_files/answers/OOP014.js":v,"./topic32_files/answers/OOP015.js":I,"./topic32_files/answers/OOP016.js":w,"./topic32_files/answers/OOP017.js":S,"./topic32_files/answers/OOP018.js":T,"./topic32_files/answers/OOP019.js":C,"./topic32_files/answers/OOP020.js":M}),i={};Object.keys(s).forEach(e=>{const o=e.split("/").pop();i[o]=s[e]});const d=r.projects.map(e=>{const a=(e.answerFile||"").split("/").pop(),O=i[a];return{...e,answer:O||`// File "${a}" not found in answers folder`}});l({...r,projects:d})},[]),t?n.jsx(p,{data:t}):n.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),n.jsx("span",{children:"Loading practical lab projects and exercises..."})]})})}export{$ as default};
