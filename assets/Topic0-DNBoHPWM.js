import{b as s,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import{F as l}from"./FAQTemplate-BHhlgA96.js";import{P as c}from"./PlainTextPrint-C08xhKA4.js";import{J as d}from"./JavaScriptEditableCodeBlock-0Pr6j_Lc.js";import"./vendor-icons-CH1iX9C8.js";import"./vendor-monaco-Bv7hoEkV.js";const h=[{question:"What defines an entry-controlled loop in JavaScript and why is while an example of one?",shortAnswer:"An entry-controlled loop evaluates its condition before executing any code in its body; if the condition evaluates to false at the start, the loop body executes 0 times.",explanation:"Unlike do...while loops which execute at least once, the while loop tests the condition expression upfront during the evaluation phase of the loop header. If the condition produces a falsy value immediately, the loop statement finishes instantly.",hint:"Think: check before entry.",level:"basic",codeExample:`let x = 10;
while (x < 5) {
  console.log('Never runs');
}`},{question:"What is the primary cause of an accidental infinite loop in a while statement?",shortAnswer:"Failing to mutate the variables participating in the condition expression inside the loop body, or establishing a condition that can never evaluate to false.",explanation:"Because while loops do not have a built-in increment step in their syntax header, the developer is responsible for updating the control variable inside the loop block. Omitting this statement leaves the condition perpetually truthy, locking the main UI thread.",hint:"Always ensure state changes toward the termination boundary.",level:"basic",codeExample:`// ❌ Infinite loop:
let i = 0;
while (i < 5) {
  console.log(i);
  // Missing i++ !
}`},{question:"When should an engineer prefer a while loop over a traditional for loop?",shortAnswer:"When the exact number of iterations is indeterminate upfront and depends on dynamic runtime conditions (e.g. queue draining, linked list traversal, network polling).",explanation:"Traditional `for` loops are ideal for fixed ranges or array index counting. `while` loops are cleaner when evaluating external flags, reading data until an EOF / null marker, or processing items until a buffer is empty.",hint:"Use while when you don't know the count in advance.",level:"intermediate",codeExample:`while (queue.length > 0) {
  processItem(queue.shift());
}`},{question:"How does JavaScript evaluate truthy and falsy expressions in a while condition?",shortAnswer:"The engine invokes the internal ToBoolean abstract operation on the condition expression before every iteration.",explanation:'Values like `0`, `""`, `null`, `undefined`, `NaN`, and `false` coerce to `false` and immediately terminate the loop. All other objects, non-zero numbers, and non-empty strings coerce to `true`.',hint:"Remember standard ECMAScript falsy values: 0, '', null, undefined, NaN, false.",level:"basic",codeExample:`let count = 3;
while (count) {
  console.log(count);
  count--; // Stops when count reaches 0 (falsy!)
}`},{question:"What is the idiom while (node = node.next) and how does it traverse linked objects in JavaScript?",shortAnswer:"It assigns the next node reference to the variable and simultaneously tests if the resulting object is non-null.",explanation:"Assignment expressions in JavaScript return the assigned value. When `node.next` is an object, the assignment returns that object (truthy), continuing the loop. When `node.next` is `null`, the expression evaluates to `null` (falsy), cleanly halting traversal.",hint:"Assignment returns the assigned value.",level:"intermediate",codeExample:`let node = rootNode;
while (node) {
  console.log(node.value);
  node = node.next;
}`},{question:"How do break and continue statements behave inside a while loop?",shortAnswer:"break immediately terminates the while loop and transfers control outside; continue skips the remainder of the current body and immediately re-evaluates the loop condition.",explanation:"When `continue` is invoked in a while loop, execution jumps straight back to the `while (condition)` check. Take care that the variable increment occurs before the `continue` statement to prevent an infinite loop.",hint:"Be cautious: skipping the increment before `continue` causes infinite loops.",level:"intermediate",codeExample:`let n = 0;
while (n < 5) {
  n++; // Increment before continue!
  if (n === 3) continue;
  console.log(n); // 1, 2, 4, 5
}`},{question:"How does V8 optimize hot while loops during long-running execution?",shortAnswer:"V8 uses On-Stack Replacement (OSR) to compile the running while loop into TurboFan-optimized machine code mid-execution without waiting for the enclosing function to return.",explanation:"When Ignition counts a high execution threshold on a while loop's back-edge bytecode, it triggers an OSR interrupt. TurboFan compiles the loop and swaps the execution frame directly on the Call Stack.",hint:"OSR compiles hot loops on-the-fly.",level:"advanced",codeExample:`// Hot while loop triggering V8 JIT OSR tier-up
let i = 0;
while (i < 1_000_000) {
  i++;
}`},{question:"How can you implement a timeout guard to prevent while loops from locking the browser thread during complex computations?",shortAnswer:"Check performance.now() or Date.now() on each iteration against a maximum allowable threshold.",explanation:"Because JavaScript is single-threaded, a while loop that takes too long blocks the Event Loop, freezing DOM updates and user clicks. Setting a deadline timestamp ensures the loop aborts or yields control gracefully.",hint:"Compare elapsed time with a maximum millisecond allowance.",level:"advanced",codeExample:`const deadline = performance.now() + 50; // 50ms budget
while (hasMoreWork()) {
  if (performance.now() > deadline) {
    console.warn('Yielding to event loop');
    break;
  }
  doWorkChunk();
}`},{question:"What is the difference between while (true) with an internal break versus a condition-based while loop?",shortAnswer:"while (true) relies on internal conditional break statements, often used when the termination check is complex or occurs in the middle of the loop body.",explanation:"This is known as a loop-and-a-half pattern. It avoids duplicating setup code before and inside the loop when the exit condition depends on calculations performed during the loop body.",hint:"Useful for read-eval-print loops and complex state parsing.",level:"intermediate",codeExample:`while (true) {
  const token = scanner.nextToken();
  if (token.type === 'EOF') break;
  process(token);
}`},{question:"How does variable scoping work with let vs var inside and outside a while loop block?",shortAnswer:"Variables declared with let/const inside the while block are block-scoped to that body; variables declared with var are hoisted to the enclosing function or global scope.",explanation:"Every iteration of a while loop enters a new block scope for statements inside `{ ... }`. Using `let` inside the loop body allocates a fresh variable binding per cycle.",hint:"Block scoping protects inner loop variables from leaking into parent scopes.",level:"basic",codeExample:`let i = 0;
while (i < 1) {
  let secret = 42; // Block scoped
  i++;
}
// console.log(secret); → ReferenceError`},{question:"How can you safely process an array backwards using a while loop?",shortAnswer:"Initialize an index at array.length - 1 and decrement with while (index >= 0) or while (len--).",explanation:"The post-decrement pattern `while (len--)` cleanly stops when `len` decrements to 0 because 0 evaluates to falsy, and within the body `len` matches the valid zero-based index.",hint:"The `while (len--)` pattern is an ultra-concise reverse traversal idiom.",level:"intermediate",codeExample:`const items = ['a', 'b', 'c'];
let len = items.length;
while (len--) {
  console.log(items[len]); // 'c', 'b', 'a'
}`},{question:"How does while handle asynchronous tasks with async/await?",shortAnswer:"Inside an async function, while (condition) cleanly awaits each Promise sequentially before advancing to the next cycle.",explanation:"Unlike array iteration methods like `forEach`, a `while` loop pauses at `await` expressions, preserving sequential control flow and backpressure.",hint:"Awaiting in a while loop allows true sequential polling.",level:"intermediate",codeExample:`async function pollServer() {
  let ready = false;
  while (!ready) {
    ready = await checkStatus();
    if (!ready) await sleep(1000);
  }
}`},{question:"What is the difference between a while loop and recursion for iterative algorithms?",shortAnswer:"A while loop reuses a single stack frame with O(1) memory, whereas recursion pushes a new stack frame per call, risking a RangeError (Maximum call stack size exceeded).",explanation:"Unless proper Tail Call Optimization (TCO) is guaranteed, deep recursion consumes Call Stack memory. Refactoring recursive trees or traversals to an iterative while loop with an explicit array stack prevents stack overflow.",hint:"While loops prevent stack overflow crashes.",level:"advanced",codeExample:`// Stack-based tree traversal with while loop (no recursion limit):
const stack = [root];
while (stack.length > 0) {
  const curr = stack.pop();
  if (curr.left) stack.push(curr.left);
  if (curr.right) stack.push(curr.right);
}`},{question:"How can you use a while loop to reverse digits of an integer arithmetically without strings?",shortAnswer:"Extract the last digit using modulo 10 (num % 10), add to accumulated sum (sum * 10 + digit), and truncate with Math.floor(num / 10).",explanation:"This classic algorithmic math problem runs in O(log10 N) iterations using a simple `while (num > 0)` loop without allocating temporary string buffers.",hint:"Use % 10 to extract digits and / 10 to truncate.",level:"intermediate",codeExample:`let num = 1234, rev = 0;
while (num > 0) {
  rev = (rev * 10) + (num % 10);
  num = Math.floor(num / 10);
}
console.log(rev); // 4321`},{question:"What is the consequence of modifying DOM elements inside a tight synchronous while loop?",shortAnswer:"The browser will not visually render intermediate changes until the entire while loop finishes because the rendering engine is blocked.",explanation:"The browser's UI repaint phase runs between event loop turns. A synchronous while loop keeps the main thread continuously busy, preventing style recalculation, layout, and compositing until the script terminates.",hint:"Use requestAnimationFrame or setTimeout to yield control between visual DOM updates.",level:"advanced",codeExample:`// DOM updates will only show final state after loop ends:
let i = 0;
while (i < 1000) {
  el.textContent = i; // User only sees 999 at the end!
  i++;
}`},{question:"How does the comma operator work inside a while condition expression?",shortAnswer:"The comma operator evaluates each expression from left to right and returns the value of the last operand to determine loop continuation.",explanation:"In `while (step1(), step2(), condition)`, `step1` and `step2` run as side-effects, and the boolean result of `condition` dictates whether the loop body runs.",hint:"Comma operator returns the rightmost value.",level:"advanced",codeExample:`let x = 0, y = 10;
while (x++, y > 8) {
  console.log(x, y);
  y--;
}`},{question:"How does a while loop behave when the condition variable is mutated inside a nested closure?",shortAnswer:"The loop observes the mutated variable as long as the closure shares the same lexical variable binding in memory.",explanation:"JavaScript variables declared with `let` or `var` in parent scope are passed by reference to inner closures. Modifying the variable inside an invoked function immediately updates the while loop's condition.",hint:"Closures share mutable bindings with their parent scope.",level:"intermediate",codeExample:`let active = true;
const stop = () => { active = false; };
let ticks = 0;
while (active) {
  ticks++;
  if (ticks >= 3) stop();
}`},{question:"Why does floating-point rounding error create subtle infinite while loop bugs in decimal step counters?",shortAnswer:"Due to IEEE 754 floating-point binary representation, repeated decimal additions (e.g. 0.1 + 0.2) accumulate precision drift that may never match an exact === boundary.",explanation:"If you write `while (x !== 1.0) { x += 0.1; }`, `x` will jump from `0.9999999999999999` to `1.0999999999999999`, missing `1.0` entirely and looping forever.",hint:"Never use strict equality (!== or ===) on floating-point counters in while conditions; use inequalities (<, >).",level:"advanced",codeExample:`// ❌ Dangerous:
// let x = 0; while (x !== 1.0) x += 0.1; // Infinite loop!
// ✓ Safe:
let x = 0; while (x < 1.0 - 1e-9) x += 0.1;`},{question:"What is a labeled while loop and how is it used with nested loops?",shortAnswer:"A label identifier prefixing a while loop allows inner break or continue statements to target that specific outer loop.",explanation:"In nested while structures, writing `break outerLoop;` immediately aborts the outer while loop rather than merely exiting the inner loop.",hint:"Use `labelName: while (...)` to control outer loop jumps.",level:"intermediate",codeExample:`outerLoop: while (condition1) {
  while (condition2) {
    if (found) break outerLoop;
  }
}`},{question:"How can you drain an event listener buffer or array using while (arr.length)?",shortAnswer:"By calling arr.shift() or arr.pop() on each tick until length reaches 0.",explanation:"Because `arr.length` returns 0 when empty (coerces to `false`), `while (arr.length)` automatically terminates when all queued callbacks have executed.",hint:"arr.length is truthy when non-empty, and 0 (falsy) when empty.",level:"basic",codeExample:`const listeners = [fn1, fn2, fn3];
while (listeners.length) {
  const handler = listeners.shift();
  handler(eventData);
}`},{question:"What happens if a return statement is placed inside a while loop within a function?",shortAnswer:"The function immediately returns the specified value, aborting the while loop and all remaining iterations.",explanation:"A `return` statement has higher scope priority than loop iteration. It tears down the local Execution Context and returns control to the calling function.",hint:"Return exits the entire function, terminating the while loop immediately.",level:"basic",codeExample:`function findFirstMatch(arr, target) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === target) return i; // Exits loop and function!
    i++;
  }
  return -1;
}`},{question:"How do you implement binary search using a while loop in JavaScript?",shortAnswer:"Maintain low and high pointers, calculate mid = Math.floor((low + high) / 2) in while (low <= high), and adjust pointers based on comparison.",explanation:"Binary search runs in O(log N) steps. The while loop condition `low <= high` ensures all candidate search intervals are examined until the target is found or search space is exhausted.",hint:"Halves search interval each cycle while low <= high.",level:"advanced",codeExample:`function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}`},{question:"What is the performance difference between while (i--) and while (--i)?",shortAnswer:"while (i--) evaluates the value of i before decrementing (including index 0); while (--i) decrements first and evaluates the new value (stopping before index 0).",explanation:"In `while (i--)`, when `i` is 1, the condition receives 1 (truthy), `i` becomes 0, and the body runs with `i = 0`. In `while (--i)`, when `i` is 1, `i` becomes 0, condition receives 0 (falsy), and loop terminates immediately.",hint:"Post-decrement tests then decrements; pre-decrement decrements then tests.",level:"advanced",codeExample:`let a = 2;
while (a--) console.log('a:', a); // a: 1, a: 0
let b = 2;
while (--b) console.log('b:', b); // b: 1`},{question:"How does garbage collection manage objects created and discarded inside a while loop?",shortAnswer:"Objects allocated inside the while block become unreachable at the end of each iteration and are collected during the next V8 Young Generation (Scavenge) GC cycle.",explanation:"Block-scoped variables lose references when the iteration block closes. Unless retained by external closures or global references, V8's nursery heap cleans them up quickly.",hint:"Short-lived loop allocations are quickly reclaimed by V8 Scavenger GC.",level:"expert",codeExample:`let i = 0;
while (i < 1000) {
  const temp = { id: i, data: new Array(100) }; // Reclaimed quickly
  i++;
}`},{question:"When should a senior architect enforce replacing a while loop with a declarative method like reduce or filter?",shortAnswer:"When working on immutable data transformations in UI frameworks (like React) where declarative state pipelines prevent side-effects and improve code maintainability.",explanation:"In application business logic and Redux reducers, declarative methods like `map` and `filter` express intent cleanly. `while` loops should be reserved for low-level algorithms, custom parsers, data streams, and hardware/performance bottlenecks.",hint:"Declarative for UI state; imperative while for algorithmic performance & stream pipelines.",level:"expert",codeExample:`// In UI state → declarative:
const activeUsers = users.filter(u => u.isActive);
// In low-level tokenizer → while:
while (pos < length && isWhitespace(source[pos])) pos++;`}],m=`================================================================================
CODER & ACCOTAX - JAVASCRIPT MASTERCLASS STUDY NOTE
MODULE: 001_005_loops-and-iteration
TOPIC 0: while Loop
Educator: Sukanta Hui | Barrackpore, West Bengal, India
================================================================================

1. TOPIC OVERVIEW & DETAILED CONCEPT DISCUSSION
--------------------------------------------------------------------------------
The \`while\` loop is JavaScript's fundamental entry-controlled loop construct.
- Syntax: \`while (condition) { statement; }\`
- Core Invariant: Evaluates \`ToBoolean(condition)\` BEFORE entering the loop body.
- Execution Count: Runs between 0 and N times. If the condition is false initially,
  the body is never executed.
- Use Case: Indeterminate repetition where termination depends on dynamic state,
  polling results, queue length, linked-node pointers, or algorithmic convergence.

2. IN-DEPTH TECHNICAL KNOW-HOW & ENGINE RUNTIME MECHANICS
--------------------------------------------------------------------------------
- Bytecode Generation in V8 Ignition:
  1. Jump to loop header test condition.
  2. \`JumpIfFalse\` opcode branches directly to exit address.
  3. Execute body statements.
  4. \`JumpLoop\` opcode branches back to condition evaluation (Back-Edge).
- On-Stack Replacement (OSR):
  When V8 observes high loop iteration count (hot loop), TurboFan JIT-compiles
  the while loop and swaps the execution frame on the Call Stack mid-flight.
- Memory Stack vs Heap:
  \`let\` declared inside the while body creates a distinct Lexical Environment
  record per tick, preventing variable leakage.

3. EXCEPTIONS, CORNER CASES, COERCIONS & QUIRKS
--------------------------------------------------------------------------------
[!] Infinite Loop Traps:
    - Forgetting to mutate counter/state inside the body.
    - Using strict equality \`!==\` on floating-point increments (0.1 + 0.2 drift).
[!] Truthy/Falsy Coercion Traps:
    - \`while (count)\` terminates automatically when count reaches 0, NaN, or "".
    - Objects \`{}\` and non-empty strings are always truthy, even if empty arrays \`[]\`.
[!] Premature Continue Trap:
    - If \`continue\` is invoked before the variable increment step, the loop
      skips the update and locks into an infinite loop!

4. 💎 SPECIAL LANGUAGE FEATURES & SENIOR PRO SECRETS
--------------------------------------------------------------------------------
- Secret 1: Pointer Traversal Idiom: \`while (node = node.next)\`
  Combines assignment and nullish truthiness check in a single concise header.
- Secret 2: Reverse Array Traversal Idiom: \`while (len--) { arr[len]; }\`
  Zero-allocation, ultra-fast backwards loop terminating cleanly at index 0.
- Secret 3: Time-Budgeted Cooperative Multitasking:
  Prevent Event Loop blocking by breaking with \`if (performance.now() > deadline)\`.

5. PRACTICAL ENTERPRISE USE-CASES
--------------------------------------------------------------------------------
- Queue Processing: Consuming asynchronous worker task queues (\`while (queue.length)\`).
- Exponential Backoff Polling: Retrying failed network requests until connected.
- Binary Search: O(log N) sorted data searching (\`while (low <= high)\`).
- Mathematical Digit Reversal: Reversing numbers arithmetically with \`% 10\` and \`/ 10\`.

6. COMPARATIVE CHEAT-SHEET
--------------------------------------------------------------------------------
+-------------------+--------------------+---------------------+--------------------+
| Loop Construct    | Condition Check    | Min Executions      | Best For           |
+-------------------+--------------------+---------------------+--------------------+
| while             | Pre-check (Entry)  | 0                   | Indeterminate tasks|
| do...while        | Post-check (Exit)  | 1                   | Mandatory 1st run  |
| for               | Pre-check (Header) | 0                   | Fixed count ranges |
| for...of          | Iterator Protocol  | 0                   | Collections / async|
+-------------------+--------------------+---------------------+--------------------+

================================================================================
`,p=`/**\r
 * Topic 0 Demo: while Loop\r
 * Module: 001_005_loops-and-iteration\r
 * Educator: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
console.log("==================================================");\r
console.log("TOPIC 0: THE while LOOP IN JAVASCRIPT - DEMO");\r
console.log("==================================================");\r
\r
// ─── 1. CORE MECHANICS & ENTRY-CONTROLLED EVALUATION ──────────────\r
console.log("");\r
console.log("1. Entry-Controlled Loop Evaluation (0 vs N executions):");\r
\r
let counter = 0;\r
while (counter < 3) {\r
  console.log(\`Counter value: \${counter} → Condition (\${counter} < 3) is TRUE\`);\r
  counter++;\r
}\r
console.log(\`Loop finished with counter = \${counter}\`);\r
\r
let neverExecutes = 10;\r
while (neverExecutes < 5) {\r
  console.log("This will NEVER print because 10 < 5 is FALSE initially.");\r
}\r
console.log("Verified zero-execution behavior when condition is false initially.");\r
\r
// ─── 2. DRAIN QUEUE PATTERN (DYNAMIC DATA STRUCTURE) ───────────────\r
console.log("");\r
console.log("2. Draining a Dynamic Task Queue with while:");\r
\r
const taskQueue = [\r
  { id: "TASK-01", name: "Validate User Input", priority: "High" },\r
  { id: "TASK-02", name: "Encrypt Password", priority: "Critical" },\r
  { id: "TASK-03", name: "Send Confirmation Email", priority: "Normal" }\r
];\r
\r
console.log(\`Starting queue with \${taskQueue.length} pending items.\`);\r
while (taskQueue.length > 0) {\r
  const currentTask = taskQueue.shift(); // Remove from front\r
  console.log(\`[Processing] \${currentTask.id} (\${currentTask.name}) → Remaining in queue: \${taskQueue.length}\`);\r
}\r
console.log("✓ Task queue completely drained.");\r
\r
// ─── 3. TRAVERSING A LINKED DATA STRUCTURE ────────────────────────\r
console.log("");\r
console.log("3. Linked Node Traversal with while (node = node.next):");\r
\r
const linkedChain = {\r
  value: "Header Element",\r
  next: {\r
    value: "Authentication Middleware",\r
    next: {\r
      value: "Database Query Handler",\r
      next: {\r
        value: "JSON Response Formatter",\r
        next: null\r
      }\r
    }\r
  }\r
};\r
\r
let currentNode = linkedChain;\r
let step = 1;\r
while (currentNode !== null) {\r
  console.log(\`Node \${step}: \${currentNode.value}\`);\r
  currentNode = currentNode.next;\r
  step++;\r
}\r
\r
// ─── 4. REAL-WORLD RETRY WITH EXPONENTIAL BACKOFF ──────────────────\r
console.log("");\r
console.log("4. Simulated Network Retry Loop with Exponential Backoff:");\r
\r
let attempts = 0;\r
const maxRetries = 4;\r
let isConnected = false;\r
\r
while (!isConnected && attempts < maxRetries) {\r
  attempts++;\r
  console.log(\`Attempt #\${attempts} connecting to payment gateway...\`);\r
  // Simulate success on 3rd attempt\r
  if (attempts === 3) {\r
    isConnected = true;\r
    console.log("✓ Connection established successfully!");\r
  } else {\r
    const delay = Math.pow(2, attempts) * 10;\r
    console.log(\`⚠️ Connection failed. Waiting \${delay}ms backoff before retry.\`);\r
  }\r
}\r
\r
// ─── 5. ADVANCED: NUMBER DIGIT REVERSAL WITHOUT STRINGS ────────────\r
console.log("");\r
console.log("5. Advanced Mathematical Digit Reversal via Pure Arithmetic while Loop:");\r
\r
function reverseInteger(n) {\r
  let num = n;\r
  let reversed = 0;\r
  while (num > 0) {\r
    const lastDigit = num % 10;\r
    reversed = (reversed * 10) + lastDigit;\r
    num = Math.floor(num / 10);\r
  }\r
  return reversed;\r
}\r
\r
const originalNumber = 987654;\r
const resultReversed = reverseInteger(originalNumber);\r
console.log(\`Original: \${originalNumber} → Reversed: \${resultReversed}\`);\r
\r
console.log("");\r
console.log("✓ All 5 while loop practical demonstrations completed.");\r
`;function y(){const i=s.useRef([]);s.useEffect(()=>{const n=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&a.target.classList.add("is-visible")})},{threshold:.08});return i.current.forEach(o=>{o&&n.observe(o)}),()=>n.disconnect()},[]);const t=n=>{n&&!i.current.includes(n)&&i.current.push(n)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          opacity: 0.99;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[e.jsxs("header",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-700/60 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"Module 001_005_loops-and-iteration · Topic 0"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-sky-300 tracking-tight leading-tight",children:"The while Loop in JavaScript"}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:"Master the core mechanics, V8 bytecode branching, truthy/falsy condition evaluation, and indeterminate execution flow of JavaScript's foundational entry-controlled loop."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400",children:"Course Code: JS-PRO-101"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:border-slate-700 transition-all",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Conceptual Overview & Entry-Control Mechanics"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["The ",e.jsx("code",{className:"text-amber-300 font-mono",children:"while"})," statement creates a loop that executes as long as a specified test condition evaluates to a truthy value. Crucially, the condition is evaluated ",e.jsx("em",{children:"prior to each execution of the loop body"}),". If the condition is false upon initial evaluation, the loop body is bypassed entirely (executing exactly 0 times)."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["Unlike a fixed-count ",e.jsx("code",{className:"text-sky-300 font-mono",children:"for"})," loop, the ",e.jsx("code",{className:"text-amber-300 font-mono",children:"while"})," loop is engineered for ",e.jsx("strong",{children:"indeterminate iteration"}),": scenarios where the exact count of cycles cannot be known upfront, such as draining dynamic asynchronous task queues, reading linked data nodes until a null pointer, retrying network connections with backoff, or parsing tokens until an End-Of-File (EOF) marker."]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/90 border border-amber-900/40 text-sm text-slate-300 leading-relaxed space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold",children:[e.jsx("span",{children:"🏫"}),e.jsx("span",{children:"Classroom Scenario (Barrackpore Lab):"})]}),e.jsxs("p",{children:["During an asynchronous lab test, student ",e.jsx("strong",{children:"Swadeep"})," attempted to process an incoming job queue using a traditional ",e.jsx("code",{className:"text-rose-400",children:"for"})," loop with a cached ",e.jsx("code",{className:"text-slate-200",children:"queue.length"}),". Because worker jobs were dynamically pushed into the queue during execution, the loop missed half the jobs!"]}),e.jsxs("p",{children:["Mentor ",e.jsx("strong",{children:"Sukanta Hui"})," demonstrated that ",e.jsx("code",{className:"text-emerald-400",children:"while (queue.length > 0) { const job = queue.shift(); process(job); }"})," continuously re-evaluates the live buffer length on every iteration, providing resilient queue consumption without index drift."]})]})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," while Loop · Runtime Execution & Control Flow Diagram"]}),e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 840 280",className:"w-full h-auto",role:"img","aria-label":"while Loop Control Flow and Bytecode Pipeline",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"whileGrad1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f59e0b",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#b45309",stopOpacity:"0.2"})]}),e.jsxs("linearGradient",{id:"whileGrad2",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#047857",stopOpacity:"0.2"})]}),e.jsxs("linearGradient",{id:"whileGrad3",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#38bdf8",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#0369a1",stopOpacity:"0.2"})]})]}),e.jsx("rect",{width:"840",height:"280",rx:"16",fill:"#0b1120",stroke:"#1e293b",strokeWidth:"1.5"}),e.jsx("text",{x:"420",y:"28",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",textAnchor:"middle",children:"while (condition) · Entry Condition & JumpLoop Lifecycle"}),e.jsxs("g",{transform:"translate(40, 60)",children:[e.jsx("rect",{width:"180",height:"90",rx:"10",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"90",y:"26",fill:"#fbbf24",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"1. Evaluate Condition"}),e.jsx("rect",{x:"15",y:"38",width:"150",height:"38",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"90",y:"56",fill:"#f8fafc",fontSize:"11",textAnchor:"middle",children:"ToBoolean(condition)"}),e.jsx("text",{x:"90",y:"70",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"JumpIfFalse opcode"})]}),e.jsx("path",{d:"M 220 105 L 290 105",fill:"none",stroke:"#10b981",strokeWidth:"2.5",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"255",y:"96",fill:"#34d399",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"TRUE"}),e.jsxs("g",{transform:"translate(295, 60)",children:[e.jsx("rect",{width:"210",height:"90",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"105",y:"26",fill:"#34d399",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"2. Execute Loop Body"}),e.jsx("rect",{x:"15",y:"38",width:"180",height:"38",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"105",y:"56",fill:"#e2e8f0",fontSize:"10",textAnchor:"middle",children:"Process Statements"}),e.jsx("text",{x:"105",y:"70",fill:"#a7f3d0",fontSize:"9",textAnchor:"middle",children:"Block Scope Environment"})]}),e.jsx("path",{d:"M 505 105 L 565 105",fill:"none",stroke:"#38bdf8",strokeWidth:"2.5"}),e.jsxs("g",{transform:"translate(570, 60)",children:[e.jsx("rect",{width:"210",height:"90",rx:"10",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"105",y:"26",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"3. State Mutation"}),e.jsx("rect",{x:"15",y:"38",width:"180",height:"38",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"105",y:"56",fill:"#e2e8f0",fontSize:"10",textAnchor:"middle",children:"counter++ / queue.shift()"}),e.jsx("text",{x:"105",y:"70",fill:"#7dd3fc",fontSize:"9",textAnchor:"middle",children:"Progresses toward boundary"})]}),e.jsx("path",{d:"M 675 150 L 675 220 L 130 220 L 130 150",fill:"none",stroke:"#f59e0b",strokeWidth:"2",strokeDasharray:"6 3"}),e.jsx("text",{x:"400",y:"212",fill:"#fbbf24",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"V8 JumpLoop Opcode (Back-Edge Re-evaluates Condition)"}),e.jsx("path",{d:"M 130 60 L 130 40 L 40 L 40 L 40 240 L 170 240",fill:"none",stroke:"#f43f5e",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(175, 220)",children:[e.jsx("rect",{width:"180",height:"40",rx:"8",fill:"#881337",fillOpacity:"0.5",stroke:"#f43f5e",strokeWidth:"1.5"}),e.jsx("text",{x:"90",y:"24",fill:"#fecdd3",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"FALSE → Exit Loop (0 runs)"})]})]})}),e.jsx("p",{className:"text-xs text-slate-400 mt-3 text-center",children:"Figure 0.1: Step-by-step entry-evaluation, body execution, state mutation, and V8 JumpLoop bytecode cycle."})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Deep Technical Know-How, Spec Invariants & Mechanics"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-6",children:["In the ECMAScript formal specification, the ",e.jsx("code",{className:"text-amber-300",children:"while"})," statement evaluates the expression ",e.jsx("code",{className:"text-slate-200",children:"expr"}),", applies ",e.jsx("code",{className:"text-sky-300",children:"ToBoolean(GetValue(expr))"}),", and if ",e.jsx("code",{className:"text-emerald-400",children:"true"}),", enters an iteration context. Understanding how V8 compiles while loops avoids CPU thread-locking and memory leaks."]}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse border border-slate-800",children:[e.jsx("thead",{className:"bg-slate-900/90 text-amber-300 uppercase text-xs font-mono",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border border-slate-800",children:"Evaluation Phase"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"ECMAScript Spec Rule"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"V8 Runtime Engine Behavior"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Developer Best Practice"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-xs",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400 font-mono",children:"1. Entry Condition"}),e.jsx("td",{className:"p-3 font-mono",children:"ToBoolean(expr)"}),e.jsxs("td",{className:"p-3",children:["Ignition runs ",e.jsx("code",{className:"text-amber-300",children:"JumpIfFalse"})," to exit address"]}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Verify initial state isn't accidentally falsy"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-emerald-400 font-mono",children:"2. Body Execution"}),e.jsx("td",{className:"p-3 font-mono",children:"Evaluate(Statement)"}),e.jsxs("td",{className:"p-3",children:["Allocates fresh block-scoped Lexical Record for ",e.jsx("code",{className:"text-sky-300",children:"let"})]}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Never declare heavy objects inside loop body"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-amber-400 font-mono",children:"3. Back-Edge Step"}),e.jsx("td",{className:"p-3 font-mono",children:"Repeat Loop Header"}),e.jsx("td",{className:"p-3",children:"Hot loops trigger On-Stack Replacement (OSR)"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Ensure counter increment precedes any continue"})]})]})]})}),e.jsxs("div",{className:"mt-6 p-5 rounded-xl bg-slate-900/80 border border-rose-900/40 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Exceptions, Quirks & Corner Cases to Know"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-slate-300 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-rose-300",children:"Infinite Loop Freeze:"}),` If the condition variable is not mutated inside the body, the loop runs forever, pegging the CPU at 100% and triggering Chrome's "Page Unresponsive" dialog.`]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-amber-300",children:"Floating-Point Strict Equality Trap:"})," ",e.jsx("code",{className:"text-rose-300",children:"while (x !== 1.0) { x += 0.1; }"})," misses 1.0 due to IEEE 754 precision drift (",e.jsx("code",{className:"text-slate-300",children:"0.9999999999999999 -> 1.0999999999999999"}),"). Always use inequalities (",e.jsx("code",{className:"text-emerald-300",children:"<"})," or ",e.jsx("code",{className:"text-emerald-300",children:">"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-sky-300",children:"Continue Skipping Mutation:"})," If ",e.jsx("code",{className:"text-amber-300",children:"continue"})," is invoked before incrementing the counter variable, the loop immediately jumps back to the test with the same value, locking into an infinite cycle."]})]})]})]})}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Interactive Monaco Playground: 5+ Practical Working Examples"]}),e.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded bg-amber-950/60 border border-amber-800 text-amber-300",children:"Live In-Browser Execution"})]}),e.jsx("div",{className:"rounded-2xl border border-slate-800 overflow-hidden shadow-2xl bg-slate-900",children:e.jsx(d,{initialCode:p,title:"WhileLoopDemo.js"})})]}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚖️"})," Common Pitfalls vs Senior Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold",children:[e.jsx("span",{children:"❌"}),e.jsx("span",{children:"Anti-Pattern: Skipping Increment before Continue"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-300",children:"continue"})," before incrementing the index variable creates an instant infinite loop."]}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/50 text-xs font-mono text-rose-300 overflow-x-auto",children:`// ❌ AVOID:
let i = 0;
while (i &lt; 5) {
  if (i === 2) continue; // i stays 2 forever!
  i++;
}`})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold",children:[e.jsx("span",{children:"✓"}),e.jsx("span",{children:"Senior Best Practice: Upfront State Advancement"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Advance the counter immediately before branching, or structure loop conditions cleanly with sentinel objects."}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-emerald-900/50 text-xs font-mono text-emerald-300 overflow-x-auto",children:`// ✓ RECOMMENDED:
let i = 0;
while (i &lt; 5) {
  const current = i++;
  if (current === 2) continue;
  console.log(current);
}`})]})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-950/30 via-slate-900 to-purple-950/20 border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xl shadow-md",children:"💎"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs uppercase font-mono tracking-wider text-amber-400 font-bold block",children:"JavaScript Hidden Gem & Senior Pro Secret"}),e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"The Linked Pointer Traversal Idiom: while (node = node.next)"})]})]}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed mb-6",children:["In JavaScript, assignment expressions return the assigned value. By combining assignment and truthiness testing in a single ",e.jsx("code",{className:"text-amber-300",children:"while"})," header, senior engineers traverse singly-linked lists, DOM parent chains (",e.jsx("code",{className:"text-slate-200",children:"while (el = el.parentElement)"}),"), and middleware execution pipelines cleanly with zero boilerplate."]}),e.jsx("div",{className:"rounded-xl border border-amber-900/50 bg-slate-950 p-4 font-mono text-xs text-amber-200 overflow-x-auto",children:e.jsx("pre",{children:`// 💎 SENIOR SECRET: Traversing DOM hierarchy up to body tag
function findClosestWithAttribute(element, attr) {
  let curr = element;
  while (curr = curr.parentElement) {
    if (curr.hasAttribute(attr)) return curr;
  }
  return null;
}`})})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-indigo-950/20 border border-indigo-800/40 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-indigo-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Architectural Mental Challenge: Preventing UI Freezes"]}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed mb-4",children:"If an algorithm requires calculating prime numbers using a while loop over millions of iterations, how can you prevent the while loop from blocking user clicks and browser animations on the main thread?"}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-indigo-900/50 text-xs sm:text-sm text-indigo-300 font-mono",children:["💡 Hint: Time-slicing using ",e.jsx("code",{className:"text-amber-300",children:"performance.now()"})," and yielding execution back to the Event Loop with ",e.jsx("code",{className:"text-emerald-400",children:"await new Promise(requestAnimationFrame)"}),", or offloading the while loop entirely to a ",e.jsx("code",{className:"text-sky-300",children:"Web Worker"})," thread."]})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(l,{title:"Frequently Asked Questions · while Loop",subtitle:"Explore 25 comprehensive questions covering entry-controlled mechanics, memory, and engine optimizations",questions:h})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(c,{content:m,title:"JavaScript Master Note · while Loop",downloadFileName:"001_005_loops-and-iteration-topic0-note.txt"})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(r,{note:"In my 27+ years of mentoring at Coder & AccoTax in Barrackpore, I always advise students: use 'for' when the boundary is static and known, but choose 'while' when the boundary dynamically changes during computation. Always trace your exit condition on paper before running a while loop to ensure guaranteed termination."})})]})]})}export{y as default};
