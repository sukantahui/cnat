import{b as a,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import{F as l}from"./FAQTemplate-BHhlgA96.js";import{P as c}from"./PlainTextPrint-C08xhKA4.js";import{J as d}from"./JavaScriptEditableCodeBlock-bI1LXt9p.js";import"./vendor-icons-DEsnU7fn.js";import"./vendor-monaco-Bv7hoEkV.js";const m=[{question:"What is the primary purpose of console.log() in JavaScript?",shortAnswer:"To output variables, objects, and diagnostic messages to the host environment console for debugging.",explanation:"console.log prints evaluated expressions to browser DevTools or Node.js terminal, allowing developers to inspect runtime state and trace code execution.",hint:"Standard output function for diagnostic logging.",level:"basic",codeExample:`const student = 'Swadeep';
console.log('Enrolled student:', student);`},{question:"How does console.table() improve structured data inspection?",shortAnswer:"It renders arrays of objects or 2D arrays as clean, sortable tabular grids in DevTools.",explanation:"Instead of clicking nested object trees, console.table formats data with row indices and column headers, making complex collections instant to read.",hint:"Tabular grid formatting for arrays and objects.",level:"basic",codeExample:"console.table([{ name: 'Swadeep', roll: 101 }, { name: 'Tuhina', roll: 102 }]);"},{question:"What is the 'Live Object Mutation Trap' in browser DevTools logging?",shortAnswer:"Logging an object outputs a reference pointer; expanding it later shows mutated values rather than values at log time.",explanation:"Because console.log does not create an immutable snapshot, expanding the logged object in DevTools reads live memory. Fix: console.log(JSON.parse(JSON.stringify(obj))).",hint:"Objects are logged by reference, showing future mutations when expanded.",level:"intermediate",codeExample:`const user = { name: 'Swadeep' };
console.log('Snapshot:', JSON.parse(JSON.stringify(user)));
user.name = 'Tuhina';`},{question:"How do console.time() and console.timeEnd() benchmark execution duration?",shortAnswer:"They calculate and log the exact elapsed time in milliseconds between matching label calls.",explanation:"console.time('label') starts a high-precision timer; console.timeEnd('label') stops the timer and prints the elapsed milliseconds.",hint:"Precision performance benchmarking with matching label strings.",level:"intermediate",codeExample:`console.time('Loop');
for(let i=0; i<1e6; i++) {}
console.timeEnd('Loop'); // Loop: 1.8ms`},{question:"What is the purpose of the 'debugger' statement in JavaScript?",shortAnswer:"A programmatic breakpoint that pauses execution and opens the Sources tab if DevTools is active.",explanation:"When the JavaScript engine hits 'debugger' with DevTools open, execution halts immediately, allowing line-by-line stepping and scope variable inspection.",hint:"Programmatic breakpoint in code.",level:"basic",codeExample:`function calculate(val) {
  // debugger; // Execution pauses here
  return val * 10;
}`},{question:"How does console.assert() work and when does it log?",shortAnswer:"It writes an error message to the console ONLY if the first argument evaluates to false.",explanation:"If the assertion condition is true, nothing happens. If false, an error message is printed with a stack trace, without halting execution.",hint:"Logs an error only when the condition is false.",level:"intermediate",codeExample:`const age = 12;
console.assert(age >= 18, 'User must be an adult!'); // Logs error`},{question:"What is console.trace() used for?",shortAnswer:"It prints an interactive stack trace showing the exact function call hierarchy leading to that point.",explanation:"Essential for debugging deep nested functions or finding where an unexpected function call originated in large codebases.",hint:"Outputs the complete Call Stack trace.",level:"intermediate",codeExample:`function a() { b(); }
function b() { console.trace('Where was I called?'); }
a();`},{question:"How do console.group() and console.groupEnd() organize console outputs?",shortAnswer:"They group related log statements inside collapsible, indented hierarchy blocks in DevTools.",explanation:"Using console.group('Title') and console.groupEnd() keeps complex multi-step routines cleanly organized and readable in the console.",hint:"Collapsible indented log groups.",level:"basic",codeExample:`console.group('Auth Flow');
console.log('Validating user');
console.log('Generating token');
console.groupEnd();`},{question:"How does the %c format specifier style console messages?",shortAnswer:"It applies CSS rules passed in subsequent arguments to format text color, background, and fonts.",explanation:"Developers use %c to print branded badges, distinct warnings, and colorful developer logs in DevTools.",hint:"%c applies CSS styling strings to console output.",level:"intermediate",codeExample:"console.log('%c SUCCESS ', 'background: #10b981; color: white; font-weight: bold;');"},{question:"What is console.count() and console.countReset()?",shortAnswer:"Maintains an automatic counter tracking how many times it was called with a specific label.",explanation:"Useful for tracking component re-renders, loop iterations, or event listener firing counts without declaring manual counter variables.",hint:"Automatic call counter for a given label.",level:"basic",codeExample:`console.count('Render'); // Render: 1
console.count('Render'); // Render: 2
console.countReset('Render');`},{question:"What is the difference between console.dir() and console.log() on DOM elements?",shortAnswer:"console.log prints the HTML DOM tree representation; console.dir prints an interactive JSON-like property list.",explanation:"console.dir(element) allows inspecting all JavaScript object properties, methods, dataset attributes, and prototype links of a DOM node.",hint:"console.log = HTML markup; console.dir = JavaScript object properties.",level:"intermediate",codeExample:`const btn = document.createElement('button');
console.dir(btn); // Shows all JS properties`},{question:"Why should excessive console.log calls be stripped from production bundles?",shortAnswer:"They degrade runtime performance and can cause memory leaks by retaining object references.",explanation:"Logging objects in hot loops creates garbage collection pressure. Build tools like Vite use plugins or terser (drop_console: true) to strip them.",hint:"Prevents memory leaks and optimizes production runtime performance.",level:"advanced",codeExample:"// Vite build config: esbuild: { drop: ['console', 'debugger'] }"},{question:"What are Conditional Breakpoints in Chrome DevTools?",shortAnswer:"Breakpoints that only pause execution when a specified JavaScript boolean expression evaluates to true.",explanation:"Right-clicking a line in Sources tab and adding a condition (e.g. user.id === 42) avoids manually stepping through thousands of loop iterations.",hint:"Pauses execution only when condition === true.",level:"advanced",codeExample:"// Condition: item.price > 1000"},{question:"What is a DOM Mutation Breakpoint in DevTools?",shortAnswer:"A breakpoint that pauses JavaScript execution the moment a DOM element is modified, removed, or has its attributes changed.",explanation:"Right-click any DOM node in Elements tab → 'Break on' → Subtree modifications, Attribute modifications, or Node removal.",hint:"Pauses JS when a specific DOM node is mutated.",level:"advanced",codeExample:"// Pauses execution exactly on the line of JS modifying the element"},{question:"What is an XHR / Fetch Breakpoint in DevTools?",shortAnswer:"A breakpoint that pauses execution whenever a network request matching a specific URL pattern is sent.",explanation:"Configured in Sources tab under 'XHR/fetch Breakpoints', it lets developers inspect code right before an API request leaves the browser.",hint:"Pauses execution right before a matching fetch() URL is dispatched.",level:"advanced",codeExample:"// Add URL filter: '/api/v1/auth'"},{question:"What is the Call Stack panel in DevTools debugger?",shortAnswer:"A pane listing all active execution frames in LIFO order showing how the engine reached the current breakpoint.",explanation:"Clicking any frame in the Call Stack pane navigates back in time, letting you inspect local scope variables at that exact parent call site.",hint:"LIFO list of active function execution frames.",level:"intermediate",codeExample:"// Frame 1: handleClick → Frame 2: processForm → Frame 3: validate"},{question:"What is the Scope pane in DevTools debugger?",shortAnswer:"A panel displaying all variables accessible in the current Local, Closure, Script, and Global scopes.",explanation:"While paused at a breakpoint, the Scope pane displays live values of all variables in scope, allowing on-the-fly value modifications.",hint:"Inspects Local, Closure, Script, and Global variables.",level:"intermediate",codeExample:"// Inspects variables trapped in closures and local stack frames"},{question:"What is the Watch pane in DevTools debugger?",shortAnswer:"A panel where developers add custom JavaScript expressions to evaluate automatically at every breakpoint step.",explanation:"Adding expressions like state.user.name or items.length continuously evaluates their values as you step through code execution.",hint:"Continuously evaluates custom expressions during debugging.",level:"basic",codeExample:"// Watch: user !== null"},{question:"What is the difference between 'Step Over' (F10) and 'Step Into' (F11) in DevTools?",shortAnswer:"Step Over executes the current line without entering function calls; Step Into steps inside the called function body.",explanation:"Use Step Over (F10) for lines with external libraries; use Step Into (F11) when you need to inspect the inner logic of your custom function.",hint:"F10 = Skip entering function; F11 = Enter inside function.",level:"basic",codeExample:"// F10 moves to next line; F11 dives into the function"},{question:"What is 'Step Out' (Shift + F11) in DevTools debugger?",shortAnswer:"Executes the remainder of the current function and pauses immediately in the parent calling frame.",explanation:"Useful when you have stepped into a large utility function and want to return back to your main routine immediately.",hint:"Shift + F11 exits the current function back to caller.",level:"basic",codeExample:"// Finishes current function and returns to parent caller"},{question:"What is the Memory tab in DevTools used for?",shortAnswer:"Taking Heap Snapshots and recording allocation timelines to diagnose and fix memory leaks.",explanation:"Developers compare two heap snapshots before and after an action to identify retained objects (detached DOM nodes, uncleared closures) that cause memory growth.",hint:"Heap snapshots and memory leak profiling.",level:"expert",codeExample:"// Compare Snapshot 1 vs Snapshot 2 to find leaked objects"},{question:"What is the Performance tab in DevTools used for?",shortAnswer:"Recording CPU activity, frame rates (FPS), layout calculations, and JavaScript execution bottlenecks.",explanation:"Identifies long tasks (tasks taking > 50ms that block the main thread), layout thrashing, and slow rendering functions.",hint:"Profiles CPU flame charts, frame drops, and Long Tasks.",level:"expert",codeExample:"// Highlights Long Tasks (red flag on flame chart)"},{question:"What is console.clear() and what keyboard shortcut triggers it?",shortAnswer:"Clears all console messages; shortcut is Ctrl + L on Windows or Cmd + K on macOS.",explanation:"Clearing the console removes accumulated clutter and logs an empty slate message: 'Console was cleared'.",hint:"Ctrl + L or Cmd + K clears the console.",level:"basic",codeExample:"console.clear();"},{question:"What is console.info() vs console.debug()?",shortAnswer:"console.info prints informational messages; console.debug prints verbose logs visible only when 'Verbose' filter is enabled.",explanation:"By default, browsers hide console.debug() messages unless the user changes the DevTools log level dropdown from 'Info' to 'Verbose'.",hint:"console.debug requires 'Verbose' filter in DevTools log levels.",level:"intermediate",codeExample:"console.debug('Low-level V8 bytecode trace');"},{question:"How do you log multi-argument expressions with console.log()?",shortAnswer:"Pass multiple arguments separated by commas; the console joins them with spaces automatically.",explanation:"Passing multiple arguments avoids string concatenation bugs and allows objects to remain interactive references in DevTools.",hint:"console.log('User:', user, 'Status:', status);",level:"basic",codeExample:"console.log('Student:', 'Swadeep', 'Roll:', 101, { active: true });"}],g=`================================================================================\r
CODER & ACCOTAX - JAVASCRIPT COMPLETE ROADMAP\r
MODULE [001_001_getting-started-with-javascript]: Getting Started with JavaScript\r
TOPIC [5]: Using console.log & Basic Debugging\r
Educator: Sukanta Hui | Barrackpore, West Bengal, India\r
================================================================================\r
\r
1. TOPIC OVERVIEW & DETAILED CONCEPT DISCUSSION\r
--------------------------------------------------------------------------------\r
- Beyond Simple Logging: The Console API is a comprehensive diagnostic interface \r
  provided by the host environment (Browser / Node.js) for runtime inspection, \r
  tabular data formatting, execution timers, and call stack tracing.\r
- Core Console Methods:\r
  1. Standard Output: console.log(), console.info(), console.warn(), console.error()\r
  2. Data Structures: console.table() (tabular array/object rendering), console.dir()\r
  3. Hierarchy & Organization: console.group(), console.groupCollapsed(), console.groupEnd()\r
  4. Diagnostics & Metrics: console.time(), console.timeEnd(), console.timeLog(), \r
     console.count(), console.countReset(), console.assert(), console.trace(), console.clear()\r
- DevTools Interactive Debugging:\r
  * Breakpoints: Pause code execution at specific line numbers to inspect lexical scope variables.\r
  * Conditional Breakpoints: Pause only when a specific expression evaluates to true (e.g. i === 50).\r
  * 'debugger' Statement: Programmatic breakpoint that halts execution when DevTools is open.\r
\r
2. IN-DEPTH TECHNICAL KNOW-HOW & ENGINE RUNTIME MECHANICS\r
--------------------------------------------------------------------------------\r
- The Live Object Mutation Trap:\r
  * In browser DevTools, when you log an object (console.log(obj)), the console displays \r
    a reference pointer. If the object properties mutate later in the script, expanding \r
    the object triangle in DevTools shows the *mutated* state, not the state at the moment \r
    of logging!\r
  * Solution: Snapshot the object at log time using:\r
    console.log(JSON.parse(JSON.stringify(obj))) or console.log(structuredClone(obj)).\r
- Format Specifiers in Console:\r
  * %s : String replacement\r
  * %d or %i : Integer formatting\r
  * %f : Floating-point number formatting\r
  * %o or %O : DOM element or JavaScript object inspection\r
  * %c : Custom CSS styling applied to console message\r
\r
3. EXCEPTIONS, CORNER CASES, COERCIONS & QUIRKS\r
--------------------------------------------------------------------------------\r
[!] Production Console Leaks: Leaving thousands of console.log statements in production \r
    retains references to objects in memory, preventing Garbage Collection and leaking RAM.\r
[!] console.assert() Quirk: console.assert(condition, msg) logs ONLY if the condition is FALSE. \r
    It does not throw an exception or halt execution.\r
[!] Asynchronous Console Evaluation: Different browsers handle console buffer flushing with \r
    varying asynchronous timings. Never rely on console.log for precision timing; use console.time().\r
\r
4. 💎 SPECIAL LANGUAGE FEATURES & SENIOR PRO SECRETS\r
--------------------------------------------------------------------------------\r
- Custom %c CSS Styling: Style console messages with gradient badges and colored warnings:\r
  console.log('%c Sukanta Hui JS Master %c READY ', 'background:#f59e0b;color:#000;font-weight:bold;', 'background:#0f172a;color:#38bdf8;');\r
- console.table Column Filtering: Pass a second argument array of column keys to filter \r
  wide datasets into crisp, readable tables: console.table(users, ['id', 'name', 'role']).\r
- Conditional Breakpoints: Right-click line number in DevTools Sources → Add Conditional Breakpoint.\r
\r
5. PRACTICAL ENTERPRISE USE-CASES & CODE EXAMPLES\r
--------------------------------------------------------------------------------\r
Example 1: Measuring Execution Time of an Algorithm\r
console.time("SortBenchmark");\r
const sorted = hugeArray.sort((a, b) => a - b);\r
console.timeEnd("SortBenchmark"); // Outputs: SortBenchmark: 12.4ms\r
\r
Example 2: Tabular Logging of Filtered Columns\r
const team = [\r
  { id: 1, name: "Swadeep", role: "Frontend", active: true },\r
  { id: 2, name: "Tuhina", role: "Backend", active: true }\r
];\r
console.table(team, ["id", "name", "role"]);\r
\r
Example 3: Safe Immutable Object Logging\r
function logSnapshot(label, data) {\r
  console.log(label, JSON.parse(JSON.stringify(data)));\r
}\r
\r
Example 4: Programmatic Breakpoint in Conditional Flow\r
function processPayment(amount) {\r
  if (amount <= 0 || isNaN(amount)) {\r
    // debugger; // Automatically pauses DevTools on invalid payment inputs!\r
    console.error("Invalid amount detected:", amount);\r
  }\r
}\r
\r
Example 5: Call Stack Error Diagnostics\r
function validateUserSession(user) {\r
  if (!user || !user.token) {\r
    console.trace("Missing user session token!");\r
  }\r
}\r
\r
6. COMPARATIVE SPECIFICATION CHEAT-SHEET\r
--------------------------------------------------------------------------------\r
+----------------------+--------------------+---------------------+--------------------+\r
| Console Method       | Output Visual Type | Primary Purpose     | Throws Exception?  |\r
+----------------------+--------------------+---------------------+--------------------+\r
| console.log()        | Standard Text      | General debugging   | NO                 |\r
| console.warn()       | Yellow Warning Box | Non-fatal alerts    | NO                 |\r
| console.error()      | Red Error Box      | Runtime failures    | NO                 |\r
| console.table()      | Grid Matrix Table  | Structured arrays   | NO                 |\r
| console.assert()     | Red Error if False | Assertion checks    | NO                 |\r
| console.time/End()   | Millisecond Timing | Performance profile | NO                 |\r
+----------------------+--------------------+---------------------+--------------------+\r
\r
7. INTERVIEW & VIVA QUICK-FIRE KNOWLEDGE POINTS\r
--------------------------------------------------------------------------------\r
Q1: What is the difference between console.log(), console.warn(), and console.error()?\r
A1: console.log outputs standard text; console.warn prints a yellow warning box with stack trace; \r
    console.error prints a prominent red error box with full stack trace.\r
\r
Q2: What is the 'Live Object Mutation Trap' in browser DevTools?\r
A2: Logging an object outputs a memory reference; expanding the object later displays its \r
    mutated state at expansion time, not its original state at logging time.\r
\r
Q3: How does the 'debugger' statement work in JavaScript?\r
A3: If DevTools is open, the 'debugger' keyword pauses execution like a breakpoint, allowing \r
    step-by-step variable inspection; if DevTools is closed, it is ignored without effect.\r
\r
Q4: How do you measure code execution speed using the Console API?\r
A4: Call console.time("label") before the code and console.timeEnd("label") after; the browser \r
    calculates and logs the elapsed time in milliseconds.\r
================================================================================\r
`,u=`/**\r
 * Topic 5 Demo: Using console.log & Basic Debugging\r
 * Module: 001_001_getting-started-with-javascript\r
 * Educator: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
console.log("==================================================");\r
console.log("TOPIC 5: CONSOLE API & ADVANCED DEBUGGING");\r
console.log("==================================================");\r
\r
// ─── 1. COMPLETE CONSOLE API METHODS SHOWCASE ────────────────────\r
console.log("");\r
console.log("1. Full Console API Method Suite:");\r
\r
console.log("Standard output: Student Swadeep enrolled in JS-PRO-101");\r
console.info("Informational message: V8 Ignition interpreter initialized");\r
console.warn("Warning alert: Local storage quota nearing 80% threshold");\r
console.error("Error notification: Simulated network timeout (Code 504)");\r
\r
// ─── 2. TABULAR PROFILING WITH CONSOLE.TABLE ─────────────────────\r
console.log("");\r
console.log("2. Tabular Data Visualization (console.table):");\r
\r
const labStudents = [\r
  { roll: 101, name: "Swadeep", center: "Barrackpore", grade: "A+", points: 980 },\r
  { roll: 102, name: "Tuhina", center: "Naihati", grade: "A+", points: 995 },\r
  { roll: 103, name: "Abhronila", center: "Ichapur", grade: "A", points: 940 },\r
  { roll: 104, name: "Debangshu", center: "Shyamnagar", grade: "A+", points: 990 }\r
];\r
\r
console.table(labStudents, ["roll", "name", "center", "grade"]);\r
\r
// ─── 3. LOGGING ACCURACY: LIVE REFERENCE VS SERIALIZED SNAPSHOT ──\r
console.log("");\r
console.log("3. The Live Object Mutation Trap vs Serialized Snapshot:");\r
\r
const stateRecord = { user: "Tuhina", status: "PENDING", tasksCompleted: 0 };\r
\r
// In browser DevTools, logging live object may show mutated state when expanded!\r
console.log("Direct Live Object Reference:", stateRecord);\r
\r
// Senior Pattern: Clone or serialize to freeze exact snapshot at log time\r
console.log("Frozen Snapshot at Log Time:", JSON.parse(JSON.stringify(stateRecord)));\r
\r
// Mutate object afterwards\r
stateRecord.status = "VERIFIED_COMPLETED";\r
stateRecord.tasksCompleted = 5;\r
\r
console.log("State after subsequent mutation:", stateRecord);\r
\r
// ─── 4. PERFORMANCE BENCHMARKING (CONSOLE.TIME / TIMEEND) ────────\r
console.log("");\r
console.log("4. Algorithmic Execution Benchmarking (console.time):");\r
\r
function benchmarkArrayOperations(count) {\r
  console.time("Array Creation & Map Benchmark");\r
  \r
  const arr = new Array(count);\r
  for (let i = 0; i < count; i++) {\r
    arr[i] = i * 2;\r
  }\r
  const filtered = arr.filter(x => x % 4 === 0);\r
  \r
  console.timeEnd("Array Creation & Map Benchmark");\r
  return filtered.length;\r
}\r
\r
const matchingCount = benchmarkArrayOperations(100000);\r
console.log("Matching items count:", matchingCount);\r
\r
// ─── 5. STRUCTURED LOG GROUPING & CALL STACK TRACING ─────────────\r
console.log("");\r
console.log("5. Hierarchical Log Groups & Call Stack Tracing:");\r
\r
function executeNestedRoutineA() {\r
  executeNestedRoutineB();\r
}\r
\r
function executeNestedRoutineB() {\r
  executeNestedRoutineC();\r
}\r
\r
function executeNestedRoutineC() {\r
  console.log("Inspecting Call Stack via console.trace():");\r
  console.trace("Execution Trace from executeNestedRoutineC");\r
}\r
\r
console.group("🚀 Outer Initialization Group");\r
console.log("Step 1: Parsing configurations");\r
console.group("🔧 Sub-routine: Database Bridge");\r
console.log("Step 1.1: Establishing socket");\r
console.log("Step 1.2: Socket verified");\r
console.groupEnd();\r
console.log("Step 2: Startup complete");\r
console.groupEnd();\r
\r
executeNestedRoutineA();\r
\r
console.log("");\r
console.log("✓ All 5 Topic 5 practical examples executed successfully.");\r
`;function w(){const s=a.useRef([]);a.useEffect(()=>{const n=new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting&&r.target.classList.add("is-visible")})},{threshold:.08});return s.current.forEach(o=>{o&&n.observe(o)}),()=>n.disconnect()},[]);const t=n=>{n&&!s.current.includes(n)&&s.current.push(n)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          opacity: 0.99;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[e.jsxs("header",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-700/60 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"Module 001_001_getting-started-with-javascript · Topic 5"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-sky-300 tracking-tight leading-tight",children:"Using console.log & Basic Debugging"}),e.jsxs("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:["Master professional diagnostic logging and DevTools debugging. Explore tabular profiling with ",e.jsx("code",{children:"console.table()"}),", execution timers with ",e.jsx("code",{children:"console.time()"}),", call stack tracing, and conditional breakpoints."]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400",children:"Course Code: JS-PRO-101"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:border-slate-700 transition-all",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Detailed Discussion & Diagnostic Foundations"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["Debugging is the art of methodically isolating, reproducing, and resolving unexpected runtime behaviors. While beginners often rely solely on basic ",e.jsx("code",{children:"console.log()"})," statements, the modern Console API offers specialized diagnostic tools: ",e.jsx("strong",{className:"text-amber-300",children:e.jsx("code",{children:"console.table()"})})," for tabular array visualization, ",e.jsx("strong",{className:"text-sky-300",children:e.jsx("code",{children:"console.time()"})})," for microsecond benchmarking, and ",e.jsx("strong",{className:"text-emerald-300",children:e.jsx("code",{children:"console.trace()"})})," for call stack inspection."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["Furthermore, stepping beyond console output into interactive browser DevTools debugging (using breakpoints, conditional breakpoints, and the programmatic ",e.jsx("code",{children:"debugger"})," statement) allows engineers to inspect the exact execution frame, memory heap, and closure scope variables in real time."]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/90 border border-amber-900/40 text-sm text-slate-300 leading-relaxed space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold",children:[e.jsx("span",{children:"🏫"}),e.jsx("span",{children:"Classroom Scenario (Barrackpore Lab):"})]}),e.jsxs("p",{children:["Student ",e.jsx("strong",{children:"Tuhina"})," logged an object in a loop, modified its properties afterwards, and was surprised to see the modified values when expanding the logged object in Chrome DevTools. Mentor ",e.jsx("strong",{children:"Sukanta Hui"})," explained the ",e.jsx("em",{children:'"Live Object Mutation Trap"'}),": the console logs a reference pointer, not an immutable snapshot. Logging with ",e.jsx("code",{children:"JSON.parse(JSON.stringify(obj))"})," or ",e.jsx("code",{children:"structuredClone()"})," instantly captures the true state at the exact moment of execution."]})]})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," DevTools Debugger: Breakpoint Execution & Scope Hierarchy"]}),e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 850 260",className:"w-full h-auto",role:"img","aria-label":"DevTools Debugging Lifecycle",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"dbgGrad1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f59e0b",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#b45309",stopOpacity:"0.2"})]}),e.jsxs("linearGradient",{id:"dbgGrad2",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#38bdf8",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#0284c7",stopOpacity:"0.2"})]})]}),e.jsx("rect",{width:"850",height:"260",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("text",{x:"425",y:"30",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",textAnchor:"middle",children:"DevTools Debugger Execution Pause & Scope Inspection Lifecycle"}),e.jsxs("g",{transform:"translate(30, 55)",children:[e.jsx("rect",{width:"370",height:"180",rx:"12",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"185",y:"24",fill:"#fbbf24",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"Sources Panel · Code Execution Frame"}),e.jsx("rect",{x:"20",y:"40",width:"330",height:"30",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"30",y:"60",fill:"#94a3b8",fontSize:"11",children:"Line 12: function processStudent(data) {"}),e.jsx("rect",{x:"20",y:"75",width:"330",height:"35",rx:"6",fill:"url(#dbgGrad1)",stroke:"#f59e0b"}),e.jsx("text",{x:"30",y:"97",fill:"#fff",fontSize:"11",fontWeight:"bold",children:"🔴 Line 13: debugger; // PAUSED AT BREAKPOINT"}),e.jsx("rect",{x:"20",y:"115",width:"330",height:"30",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"30",y:"135",fill:"#94a3b8",fontSize:"11",children:"Line 14: return data.score * 1.1;"}),e.jsx("text",{x:"30",y:"170",fill:"#fbbf24",fontSize:"10",children:"Controls: F10 (Step Over) · F11 (Step Into) · F8 (Resume)"})]}),e.jsxs("g",{transform:"translate(450, 55)",children:[e.jsx("rect",{width:"370",height:"180",rx:"12",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"185",y:"24",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"Scope & Call Stack Inspection Pane"}),e.jsx("rect",{x:"20",y:"40",width:"330",height:"38",rx:"6",fill:"#0f172a",stroke:"#0284c7"}),e.jsx("text",{x:"30",y:"56",fill:"#38bdf8",fontSize:"10",fontWeight:"bold",children:"Local Scope:"}),e.jsx("text",{x:"30",y:"70",fill:"#e2e8f0",fontSize:"10",children:'data: { name: "Tuhina", score: 95 }'}),e.jsx("rect",{x:"20",y:"85",width:"330",height:"38",rx:"6",fill:"#0f172a",stroke:"#0284c7"}),e.jsx("text",{x:"30",y:"101",fill:"#38bdf8",fontSize:"10",fontWeight:"bold",children:"Closure (LabModule):"}),e.jsx("text",{x:"30",y:"115",fill:"#e2e8f0",fontSize:"10",children:'center: "Barrackpore Lab" · mentor: "Sukanta Hui"'}),e.jsx("rect",{x:"20",y:"130",width:"330",height:"38",rx:"6",fill:"#0f172a",stroke:"#0284c7"}),e.jsx("text",{x:"30",y:"146",fill:"#38bdf8",fontSize:"10",fontWeight:"bold",children:"Global Scope (window):"}),e.jsx("text",{x:"30",y:"160",fill:"#94a3b8",fontSize:"9",children:"document, localStorage, fetch..."})]})]})}),e.jsx("p",{className:"text-xs text-slate-400 mt-3 text-center",children:"Figure 1.6: DevTools debugger execution suspension and hierarchical scope resolution."})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Complete Diagnostic Console API Specification"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed mb-6",children:"The Console API specification defines formal logging channels with distinct priority levels and visual indicators."}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse border border-slate-800",children:[e.jsx("thead",{className:"bg-slate-900/90 text-amber-300 uppercase text-xs",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border border-slate-800",children:"Method Signature"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Log Level"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Visual Indicator"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Primary Enterprise Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 font-mono text-xs",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-amber-400 font-bold",children:"console.log(data...)"}),e.jsx("td",{className:"p-3 text-slate-400 font-sans",children:"Info"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Standard text output"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"General application flow tracing"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400 font-bold",children:"console.table(tabularData, [cols])"}),e.jsx("td",{className:"p-3 text-slate-400 font-sans",children:"Info"}),e.jsx("td",{className:"p-3 text-sky-300 font-sans",children:"Interactive 2D Grid Table"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Inspecting arrays of objects & API response lists"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-rose-400 font-bold",children:"console.error(errorObj...)"}),e.jsx("td",{className:"p-3 text-rose-400 font-sans",children:"Error"}),e.jsx("td",{className:"p-3 text-rose-300 font-sans",children:"Red box + stack trace"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Unhandled catch blocks & network failures"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"console.time(label) / timeEnd(label)"}),e.jsx("td",{className:"p-3 text-slate-400 font-sans",children:"Timing"}),e.jsx("td",{className:"p-3 text-emerald-300 font-sans",children:"High-precision milliseconds"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Micro-benchmarking function execution speed"})]})]})]})}),e.jsxs("div",{className:"mt-6 p-5 rounded-xl bg-slate-900/80 border border-rose-900/40 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Debugging Quirks to Remember"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-slate-300 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-rose-300",children:"Live Object Mutation:"})," Expanding logged objects shows their current memory state, not the state at log time. Always snapshot objects before logging."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-amber-300",children:"console.assert() Does Not Throw:"})," An assertion failure logs a red message but does NOT halt execution. Use explicit ",e.jsx("code",{children:"throw new Error()"})," if halting is required."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-sky-300",children:"Memory Leak in Production:"})," Leaving heavy object logs in production prevents Garbage Collection. Strip console logs during production bundling."]})]})]})]})}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Interactive Monaco Playground: 5+ Practical Working Examples"]}),e.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded bg-amber-950/60 border border-amber-800 text-amber-300",children:"Live In-Browser Execution"})]}),e.jsx("div",{className:"rounded-2xl border border-slate-800 overflow-hidden shadow-2xl bg-slate-900",children:e.jsx(d,{initialCode:u,title:"UsingConsolelogBasicDebuggingDemo.js"})})]}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚖️"})," Common Pitfalls vs Senior Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold",children:[e.jsx("span",{children:"❌"}),e.jsx("span",{children:"Anti-Pattern: String Concatenation Object Logging"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Concatenating objects with strings converts them to unreadable ",e.jsx("code",{children:'"[object Object]"'})," in the console."]}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/50 text-xs font-mono text-rose-300 overflow-x-auto",children:`// ❌ AVOID: Logs 'User: [object Object]'
console.log("User: " + userObj); // Obscures all object fields!`})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold",children:[e.jsx("span",{children:"✓"}),e.jsx("span",{children:"Senior Pro: Multi-Argument Interactive Logging"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Pass objects as separate arguments to preserve interactive inspection and tabular formatting."}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-emerald-900/50 text-xs font-mono text-emerald-300 overflow-x-auto",children:`// ✓ RECOMMENDED: Interactive expandable object in DevTools
console.log("User Data:", userObj);
console.table([userObj]);`})]})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-950/30 via-slate-900 to-purple-950/20 border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xl shadow-md",children:"💎"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs uppercase font-mono tracking-wider text-amber-400 font-bold block",children:"JavaScript Hidden Gem & Senior Pro Secret"}),e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Custom CSS %c Styling & console.table Column Filtering"})]})]}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed mb-6",children:["You can style console output with custom gradients, badges, and font weights using ",e.jsx("code",{children:"%c"}),". Additionally, ",e.jsx("code",{children:"console.table(data, ['col1', 'col2'])"})," filters wide datasets to spotlight only key fields."]}),e.jsx("div",{className:"rounded-xl border border-amber-900/50 bg-slate-950 p-4 font-mono text-xs text-amber-200 overflow-x-auto",children:e.jsx("pre",{children:`// 💎 SENIOR PRO SECRET: Branded Console Banner & Tabular Inspection
console.log(
  "%c Coder & AccoTax %c JS Masterclass Ready ",
  "background: #f59e0b; color: #000; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;",
  "background: #0f172a; color: #38bdf8; padding: 4px 8px; border-radius: 0 4px 4px 0;"
);
console.table(studentList, ["name", "center", "score"]);`})})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-indigo-950/20 border border-indigo-800/40 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-indigo-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Architectural Mental Challenge: Think About This..."]}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed mb-4",children:["If an enterprise frontend app logs thousands of user analytics events using ",e.jsx("code",{children:"console.log()"}),", why can this trigger significant memory leaks and performance degradation even on modern high-end devices?"]}),e.jsx("div",{className:"p-4 rounded-xl bg-slate-900 border border-indigo-900/50 text-xs sm:text-sm text-indigo-300 font-mono",children:"💡 Hint: The browser DevTools console maintains internal root references to every logged object for inspection, preventing the Garbage Collector from freeing their memory!"})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(l,{title:"Frequently Asked Questions · Using console.log & Basic Debugging",subtitle:"Explore 25+ comprehensive questions on Console APIs, breakpoints, and memory profiling",questions:m})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(c,{content:g,title:"JavaScript Master Note · Using console.log & Basic Debugging",downloadFileName:"001_001_getting-started-with-javascript-topic5-note.txt"})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(i,{note:"In my 27+ years of mentoring engineers at Coder & AccoTax in Barrackpore, I emphasize that mastering the debugger is what transforms an amateur into a professional software engineer. Don't guess what your code is doing — set a breakpoint, step through the Call Stack, and verify the state."})})]})]})}export{w as default};
