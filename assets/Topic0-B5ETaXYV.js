import{b as a,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as i}from"./TeacherSukantaHui-CEPuAfsb.js";import{F as l}from"./FAQTemplate-BHhlgA96.js";import{P as c}from"./PlainTextPrint-C08xhKA4.js";import{J as d}from"./JavaScriptEditableCodeBlock-CsgUqchn.js";import"./vendor-icons-DGCamHnX.js";import"./vendor-monaco-Bv7hoEkV.js";const p=[{question:"What is JavaScript and who invented it?",shortAnswer:"JavaScript is a high-level, single-threaded, multi-paradigm programming language created by Brendan Eich in 1995.",explanation:"Brendan Eich developed JavaScript in May 1995 at Netscape. It was standardized as ECMAScript (ECMA-262) in 1997 and has evolved into the universal programming language for the web, servers, and cross-platform desktop/mobile applications.",hint:"Think: 1995 Netscape, Mocha → LiveScript → JavaScript.",level:"basic",codeExample:"console.log('JavaScript Engine:', typeof globalThis !== 'undefined');"},{question:"Where can JavaScript execute today?",shortAnswer:"In web browsers (Chrome, Safari, Firefox), server runtimes (Node.js, Deno, Bun), and mobile/desktop frameworks (React Native, Electron).",explanation:"JavaScript runtimes exist across all major platforms. In browsers, engines like V8 and SpiderMonkey execute scripts. On servers and CLI tools, Node.js, Deno, and Bun provide OS and file system access.",hint:"Browser engines, server runtimes, desktop/mobile frameworks.",level:"basic",codeExample:`const isBrowser = typeof window !== 'undefined';
console.log(isBrowser ? 'Running in Browser' : 'Running on Server');`},{question:"What is the relationship between JavaScript and ECMAScript?",shortAnswer:"ECMAScript is the official specification; JavaScript is the most popular dialect and implementation of that standard.",explanation:"ECMAScript (ECMA-262 standard maintained by the TC39 committee) defines the language syntax, semantics, and built-in objects. JavaScript, ActionScript, and JScript are implementations of ECMAScript.",hint:"ECMAScript = the rulebook specification; JavaScript = the actual running engine implementation.",level:"basic",codeExample:"// ES6+ syntax compliant with ECMA-262\nconst greet = (name = 'Swadeep') => `Hello, ${name}!`;"},{question:"What is the V8 engine and how does its JIT pipeline work?",shortAnswer:"V8 is Google's open-source C++ JavaScript engine combining the Ignition bytecode interpreter and TurboFan optimizing JIT compiler.",explanation:"V8 parses JS code into an AST, interprets it into Ignition bytecode for fast startup, collects runtime type feedback via Inline Caches, and optimizes hot functions into machine code with TurboFan.",hint:"V8 = Parser → Ignition Interpreter → TurboFan JIT Optimizer.",level:"intermediate",codeExample:`function add(a, b) { return a + b; }
// TurboFan optimizes this monomorphic call site
add(10, 20);`},{question:"How does the Call Stack differ from the Memory Heap in JavaScript?",shortAnswer:"The Call Stack handles execution context frames and primitive values (LIFO); the Memory Heap dynamically allocates objects and closures.",explanation:"Primitive data types (number, string, boolean, etc.) are stored directly in stack frames. Reference types (objects, arrays, functions) are stored in the heap, and the stack stores pointer addresses referencing the heap.",hint:"Stack = fast, linear execution frames; Heap = dynamic, garbage-collected object store.",level:"intermediate",codeExample:`let num = 42; // Stack
const user = { name: 'Tuhina' }; // Heap object, stack holds memory address pointer`},{question:"Why is JavaScript single-threaded, and how does it prevent UI freezing?",shortAnswer:"JS has one call stack, but handles asynchronous non-blocking I/O using the browser/Node event loop and worker threads.",explanation:"JavaScript executes one statement at a time on its main thread. Asynchronous tasks (timers, fetch requests, UI events) are delegated to browser Web APIs or Libuv thread pools, returning callbacks to the event loop task queues.",hint:"Single call stack + Event loop delegation to background worker threads.",level:"intermediate",codeExample:`console.log('Start');
setTimeout(() => console.log('Async Callback'), 100);
console.log('End');`},{question:"What is 'globalThis' and why was it introduced in ES2020?",shortAnswer:"'globalThis' provides a unified, cross-platform reference to the global object across all JavaScript runtimes.",explanation:"Prior to ES2020, developers had to check 'window' for browsers, 'self' for Web Workers, and 'global' for Node.js. 'globalThis' standardizes global context access in any environment.",hint:"Universal global variable name standard in ES2020.",level:"intermediate",codeExample:`globalThis.__APP_VERSION__ = '2.5.0';
console.log(globalThis.__APP_VERSION__);`},{question:"What happens when you access 'window' inside a Node.js script?",shortAnswer:"A ReferenceError: window is not defined exception is thrown.",explanation:"Node.js does not have a browser window or DOM tree. Its top-level global object is 'global'. Attempting to reference 'window' without declaration throws an uncaught ReferenceError.",hint:"Node has 'global', not 'window'.",level:"intermediate",codeExample:`try {
  console.log(window);
} catch (err) {
  console.log('Caught expected error:', err.name); // ReferenceError
}`},{question:"What is the difference between a Microtask and a Macrotask in the Event Loop?",shortAnswer:"Microtasks (Promises, queueMicrotask) execute immediately after the current script and before the next Macrotask (setTimeout).",explanation:"At the end of each task execution, the JavaScript engine drains the entire Microtask Queue before yielding to rendering or picking the next task from the Macrotask (Task) Queue.",hint:"Microtasks (Promises) always run BEFORE Macrotasks (Timers).",level:"advanced",codeExample:`setTimeout(() => console.log('Macrotask'), 0);
Promise.resolve().then(() => console.log('Microtask'));
// Logs 'Microtask' first, then 'Macrotask'`},{question:"How does V8's Inline Caching (IC) optimize property lookups?",shortAnswer:"IC caches the memory offset of object properties based on their hidden classes (Shapes/Maps).",explanation:"When an object property is repeatedly accessed at the same call site with the same shape, V8 caches the memory offset in machine code, bypassing dictionary lookups for near-instant C++ speed.",hint:"Monomorphic shapes allow direct memory offset reads.",level:"advanced",codeExample:`function getAge(user) { return user.age; }
// Monomorphic: same shape { age, name }
getAge({ age: 21, name: 'Abhronila' });`},{question:"What is JIT Deoptimization (Deopt) in V8 TurboFan?",shortAnswer:"When runtime types violate TurboFan's optimized assumptions, V8 bails out and falls back to Ignition bytecode.",explanation:"If TurboFan compiled a function assuming arguments are always 31-bit small integers (SMI), passing a floating point or string forces V8 to deoptimize and re-evaluate via Ignition.",hint:"Polymorphism or type shape switching causes deoptimization.",level:"advanced",codeExample:`function compute(x) { return x * 2; }
compute(10); // TurboFan optimizes for Integer
compute('text'); // Forces Deoptimization bailout!`},{question:"What is the difference between Node.js, Deno, and Bun?",shortAnswer:"Node is the classic V8/Libuv runtime; Deno is secure-by-default with native TS; Bun is built in Zig on JavaScriptCore for ultra-fast startup.",explanation:"Node.js (created 2009 by Ryan Dahl) uses CommonJS/ESM and V8. Deno (2018 by Ryan Dahl) uses Rust/Tokio and V8 with strict permissions. Bun (2022 by Jarred Sumner) uses WebKit's JavaScriptCore for blazing performance.",hint:"Node (V8+C++), Deno (V8+Rust), Bun (JSC+Zig).",level:"advanced",codeExample:"console.log(typeof Bun !== 'undefined' ? 'Bun' : typeof Deno !== 'undefined' ? 'Deno' : 'Node/Browser');"},{question:"What is Garbage Collection in JavaScript and how does Mark-and-Sweep work?",shortAnswer:"The engine automatically frees memory by marking reachable root objects and sweeping away unreachable objects.",explanation:"The V8 Garbage Collector starts from roots (global window, current stack frames) and traverses all references. Objects not reachable from any root are swept and reclaimed into free memory lists.",hint:"Roots → Reachable Graph → Mark & Sweep unreachable memory.",level:"advanced",codeExample:`let obj = { data: 'temp' };
obj = null; // Original heap object is now unreachable and eligible for GC`},{question:"How do primitive values behave regarding mutability in JavaScript?",shortAnswer:"All primitive values in JavaScript are immutable; variables holding primitives are reassigned, not mutated in-place.",explanation:"Strings, numbers, booleans, symbols, and bigints cannot have their underlying bytes mutated in place. Methods like str.toUpperCase() return a new string rather than changing the original.",hint:"Primitives cannot be mutated; only re-assigned.",level:"basic",codeExample:`let str = 'hello';
str.toUpperCase();
console.log(str); // Still 'hello'`},{question:"What are the 8 fundamental data types in modern JavaScript (ES2024)?",shortAnswer:"7 primitives (Undefined, Null, Boolean, Number, BigInt, String, Symbol) and 1 reference type (Object).",explanation:"ECMAScript formal specification defines 7 primitive types and Object (which includes Arrays, Functions, Dates, RegExps, Maps, Sets, and custom class instances).",hint:"7 primitives + 1 reference type (Object).",level:"basic",codeExample:`const types = [undefined, null, true, 42, 100n, 'text', Symbol('id'), {}];
console.log(types.map(v => typeof v));`},{question:"What is the difference between dynamic typing and static typing?",shortAnswer:"JavaScript is dynamically typed; variable types are checked at runtime and can hold any value over time.",explanation:"In statically typed languages (TypeScript, Java, Rust), variable types are enforced during compilation. In JavaScript, variables hold untyped references to typed runtime values.",hint:"Dynamic = runtime type binding; Static = compile-time type verification.",level:"basic",codeExample:`let val = 10; // Number
val = 'Barrackpore'; // Valid in dynamically typed JS`},{question:"How does JavaScript handle concurrency without multi-threading on the main stack?",shortAnswer:"Through the Event Loop, asynchronous callback queues, and Web Worker threads for CPU-heavy tasks.",explanation:"The main thread executes the Call Stack and delegates async events (DOM, Timers, Network) to the browser/host. For true multi-core parallel computation, Web Workers or Node Worker Threads are spawned.",hint:"Event Loop for async I/O; Web Workers for true background multi-threading.",level:"expert",codeExample:`// Spawning a background thread
// const worker = new Worker('worker.js');`},{question:"What is the ECMAScript TC39 committee and its 5-stage proposal process?",shortAnswer:"TC39 governs JS evolution through Stage 0 (Strawperson) to Stage 4 (Finished Standard).",explanation:"TC39 consists of academics, browser vendors, and tech leaders. Proposals progress through Stage 0 (Idea), Stage 1 (Proposal), Stage 2 (Draft), Stage 3 (Candidate), and Stage 4 (Approved for yearly ECMAScript release).",hint:"TC39 Stages: 0 (Idea) → 1 → 2 → 3 (Candidate) → 4 (Finished Standard).",level:"expert",codeExample:"// Stage 4 features land in standard yearly releases like ES2024 / ES2025"},{question:"What is a Memory Leak in JavaScript and how can it occur if GC is automatic?",shortAnswer:"Memory is leaked when unneeded objects remain referenced by active roots (e.g. forgotten event listeners or global closures).",explanation:"The Garbage Collector cannot free memory that is still referenced by roots. Common causes include unremoved DOM event listeners, uncleared setInterval timers, and detached DOM nodes stored in global variables.",hint:"Active root references prevent Garbage Collection.",level:"expert",codeExample:`const leakedArray = [];
setInterval(() => leakedArray.push(new Array(1000).fill('*')), 50);`},{question:"What is QuickJS and where is it used compared to V8?",shortAnswer:"QuickJS is a lightweight, small-footprint C-based JavaScript engine designed for embedded systems and WASM sandboxes.",explanation:"While V8 is optimized for high-performance JIT execution with high memory overhead, Fabrice Bellard's QuickJS is complete ES2023 compliant with an ultra-small binary size (<1MB) suitable for IoT microcontrollers and secure sandboxes.",hint:"QuickJS = ultra-lightweight embedded C engine; V8 = heavy enterprise JIT compiler.",level:"expert",codeExample:"// QuickJS runs complete ES2023 in microcontrollers with mere kilobytes of RAM"},{question:"How does 'typeof null' return 'object' and why hasn't it been fixed?",shortAnswer:"It is an infamous historical bug from JS 1.0; fixing it would break backward compatibility across millions of legacy websites.",explanation:"In JavaScript 1.0, values were represented with a type tag in memory. The type tag for objects was 000, and null was represented as a NULL pointer (0x00), triggering the object type branch. TC39 rejected proposals to fix it to preserve the web.",hint:"Historical type tag bug preserved for backward compatibility.",level:"intermediate",codeExample:`console.log(typeof null); // 'object'
console.log(null === null); // true`},{question:"How does the 'debugger' statement work in JavaScript?",shortAnswer:"The 'debugger' keyword invokes any available debugging functionality, pausing execution if DevTools is open.",explanation:"When DevTools is open, encountering 'debugger' pauses JS execution right at that line, opening the Sources tab and allowing developers to inspect variable scope and step through frames.",hint:"Programmatic breakpoint in source code.",level:"basic",codeExample:`function testDebug(val) {
  // debugger; // Pauses execution when DevTools is active
  return val * 2;
}`},{question:"What is Hermes and why does React Native use it over V8 or JSC?",shortAnswer:"Hermes is an open-source JS engine optimized by Meta for fast mobile startup, Bytecode pre-compilation (AOT), and low memory footprint.",explanation:"Unlike browser engines that parse source at runtime, Hermes pre-compiles JavaScript into optimized Bytecode ahead of time (AOT) during app building, slashing Time-To-Interactive (TTI) on mobile devices.",hint:"Hermes = Bytecode AOT compilation for mobile React Native apps.",level:"expert",codeExample:"// Hermes compiles React Native bundles to binary bytecode ahead of time"},{question:"What is the difference between client-side JavaScript and server-side JavaScript?",shortAnswer:"Client-side JS runs in user browsers with DOM/Web APIs; server-side JS runs on servers with OS, database, and filesystem access.",explanation:"Client-side JS focuses on UI rendering, event listeners, and client state. Server-side JS (Node.js, Deno, Bun) handles HTTP web servers, database connections, background worker queues, and filesystem I/O.",hint:"Client = DOM & Web APIs; Server = OS, Filesystem & Network Sockets.",level:"basic",codeExample:`// Client: document.title = 'Hello';
// Server: fs.writeFileSync('log.txt', 'Hello');`},{question:"What is the role of the Libuv library in Node.js?",shortAnswer:"Libuv is a multi-platform C library that powers Node.js's non-blocking asynchronous I/O and Event Loop.",explanation:"While V8 executes JavaScript code and memory management, Libuv provides the cross-platform Event Loop, Thread Pool (for filesystem and DNS lookups), child processes, and asynchronous network sockets.",hint:"V8 = JS Engine; Libuv = Asynchronous I/O and Event Loop engine.",level:"expert",codeExample:"// Libuv handles fs.readFile and network sockets asynchronously in Node.js"}],m=`================================================================================\r
CODER & ACCOTAX - JAVASCRIPT COMPLETE ROADMAP\r
MODULE [001_001_getting-started-with-javascript]: Getting Started with JavaScript\r
TOPIC [0]: What is JavaScript and Where It Runs?\r
Educator: Sukanta Hui | Barrackpore, West Bengal, India\r
================================================================================\r
\r
1. TOPIC OVERVIEW & DETAILED CONCEPT DISCUSSION\r
--------------------------------------------------------------------------------\r
- Definition: JavaScript is a high-level, dynamically typed, multi-paradigm, \r
  single-threaded, prototype-based programming language with first-class functions \r
  and a non-blocking asynchronous event loop concurrency model.\r
- History & Origin: Created in May 1995 by Brendan Eich at Netscape Communications \r
  under the initial code name "Mocha", subsequently named "LiveScript", and finally \r
  renamed to "JavaScript". Standardized by Ecma International under the formal \r
  ECMAScript (ECMA-262) technical specification.\r
- Where It Runs (Execution Hosts):\r
  1. Client-Side Web Browsers: Google Chrome, Microsoft Edge, Mozilla Firefox, \r
     Apple Safari, Opera, Brave.\r
  2. Server-Side & Headless Runtimes: Node.js (V8 + Libuv), Deno (V8 + Tokio), \r
     Bun (JavaScriptCore + Zig).\r
  3. Mobile & Desktop Cross-Platform Engines: React Native (Hermes), Electron \r
     (V8/Chromium), Tauri (Webview2 / WebKit).\r
  4. Embedded & IoT Microcontrollers: QuickJS, Duktape, Espruino.\r
\r
2. IN-DEPTH TECHNICAL KNOW-HOW & ENGINE RUNTIME MECHANICS\r
--------------------------------------------------------------------------------\r
- Modern JIT (Just-In-Time) Compiler Pipeline (e.g. Google V8):\r
  1. Lexical Analysis & Tokenizer: Source code is scanned into stream of syntactic tokens.\r
  2. Parser: Tokens are validated into an AST (Abstract Syntax Tree).\r
  3. Ignition Interpreter: AST is compiled into concise, register-based Ignition Bytecode.\r
  4. Type Profiling & Inline Caching (IC): Gathers runtime type feedback at call sites.\r
  5. TurboFan JIT Optimizer: Frequently executed "hot code" bytecodes are compiled into \r
     highly optimized native machine code.\r
  6. Deoptimization: If speculative type assumptions fail (e.g., number passes string), \r
     TurboFan bails out back to Ignition bytecode.\r
- Execution Context Memory Model:\r
  * Call Stack: Stores execution context frames, primitive values (numbers, booleans, \r
    small strings, null, undefined, symbols, bigints), and reference pointers.\r
  * Memory Heap: Large unstructured memory region where objects, arrays, functions, \r
    closures, and DOM nodes are allocated dynamically.\r
- Global Scope Standardization:\r
  * ES2020 introduced 'globalThis', unifying 'window' (Browser), 'self' (Web Worker), \r
    and 'global' (Node.js).\r
\r
3. EXCEPTIONS, CORNER CASES, COERCIONS & QUIRKS\r
--------------------------------------------------------------------------------\r
[!] ReferenceError: window is not defined: Thrown when executing browser-specific \r
    APIs in server-side Node.js / Bun runtimes.\r
[!] ReferenceError: process is not defined: Thrown when executing Node-specific \r
    APIs directly inside standard browser window threads.\r
[!] Call Stack Freezing: Because JS is single-threaded, running long synchronous \r
    CPU loops (e.g., while(true) {}) completely starves the event loop, freezing UI rendering.\r
[!] Primitive Value Immutability: Primitives cannot hold custom attached properties. \r
    (e.g., let n = 10; n.flag = true; console.log(n.flag) → undefined).\r
\r
4. 💎 SPECIAL LANGUAGE FEATURES & SENIOR PRO SECRETS\r
--------------------------------------------------------------------------------\r
- globalThis Universal Standard (ES2020): Access the global execution environment \r
  consistently across Node.js, Deno, Bun, Browser tabs, and Web Workers.\r
- V8 DevTools Console Magic: In Chrome DevTools, $0 refers to currently inspected DOM element, \r
  $_ evaluates to the last evaluated expression, and console.table() outputs tabular data.\r
- Engine Monomorphism Secret: TurboFan optimizes function calls up to 100x faster if \r
  passed object arguments maintain identical hidden class property shapes and order.\r
\r
5. PRACTICAL ENTERPRISE USE-CASES & CODE EXAMPLES\r
--------------------------------------------------------------------------------\r
Example 1: Universal Host Environment Detector\r
const isServer = typeof window === "undefined";\r
const isBrowser = !isServer;\r
console.log("Environment:", isServer ? "Server/Node" : "Client/Browser");\r
\r
Example 2: Safe Cross-Runtime Global Object Access\r
const globalRoot = typeof globalThis !== "undefined" ? globalThis : \r
                   typeof window !== "undefined" ? window : global;\r
\r
Example 3: Event Loop Microtask vs Macrotask Order\r
console.log("1. Sync Callstack");\r
setTimeout(() => console.log("3. Macrotask Timer"), 0);\r
Promise.resolve().then(() => console.log("2. Microtask Promise"));\r
\r
Example 4: Memory Reference Mutation Trap\r
const original = { student: "Swadeep", center: "Barrackpore" };\r
const clone = Object.assign({}, original); // Shallow clone avoids mutation\r
clone.student = "Tuhina";\r
console.log(original.student); // "Swadeep" preserved\r
\r
Example 5: Non-Blocking Chunked Processing\r
function processLargeDataAsync(data, callback) {\r
  setTimeout(() => {\r
    const processed = data.map(x => x * 2);\r
    callback(processed);\r
  }, 0);\r
}\r
\r
6. COMPARATIVE SPECIFICATION CHEAT-SHEET\r
--------------------------------------------------------------------------------\r
+-------------------+----------------------+--------------------+--------------------+\r
| Runtime / Engine  | Host Platform        | Global Object      | Core I/O Model     |\r
+-------------------+----------------------+--------------------+--------------------+\r
| Google V8         | Chrome, Edge, Node   | window / global    | Event Loop / Libuv |\r
| SpiderMonkey      | Mozilla Firefox      | window             | Gecko Event Loop   |\r
| JavaScriptCore    | Apple Safari, Bun    | window / globalThis| WebKit RunLoop/Zig |\r
| Node.js           | Backend Server / OS  | global / globalThis| Libuv ThreadPool   |\r
| Deno / Bun        | Modern Cloud / Edge  | globalThis         | Tokio / Zig async  |\r
+-------------------+----------------------+--------------------+--------------------+\r
\r
7. INTERVIEW & VIVA QUICK-FIRE KNOWLEDGE POINTS\r
--------------------------------------------------------------------------------\r
Q1: Is JavaScript an interpreted or compiled language?\r
A1: JavaScript uses Just-In-Time (JIT) compilation. The engine parses source to AST, \r
    generates bytecode via an interpreter (Ignition), and optimizes hot code to machine \r
    instructions (TurboFan).\r
\r
Q2: Why is JavaScript single-threaded, and how does it handle concurrency?\r
A2: JavaScript has a single Call Stack and executes one instruction at a time. It achieves \r
    concurrency through an asynchronous Event Loop with Web APIs/Libuv offloading tasks.\r
\r
Q3: What is the difference between Call Stack and Memory Heap?\r
A3: Call Stack stores execution contexts and primitive values in LIFO order; Memory Heap \r
    allocates dynamic objects, arrays, and closures with garbage collection.\r
\r
Q4: What is 'globalThis' and why was it introduced in ES2020?\r
A4: 'globalThis' provides a universal standard to reference the global scope regardless of \r
    whether code is running in a browser, Node.js, or Web Worker.\r
================================================================================\r
`,h=`/**\r
 * Topic 0 Demo: What is JavaScript and Where It Runs?\r
 * Module: 001_001_getting-started-with-javascript\r
 * Educator: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
console.log("==================================================");\r
console.log("TOPIC 0: WHAT IS JAVASCRIPT & WHERE IT RUNS");\r
console.log("==================================================");\r
\r
// ─── 1. RUNTIME ENVIRONMENT DETECTION ────────────────────────────\r
console.log("");\r
console.log("1. Runtime Environment Detection:");\r
\r
function detectJavaScriptRuntime() {\r
  const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";\r
  const isNode = typeof process !== "undefined" && process.versions && process.versions.node;\r
  const isDeno = typeof Deno !== "undefined";\r
  const isBun = typeof Bun !== "undefined";\r
  const isWebWorker = typeof importScripts === "function" && typeof WorkerGlobalScope !== "undefined";\r
\r
  let runtime = "Unknown Runtime";\r
  let engine = "Unknown Engine";\r
  let globalObjName = "globalThis";\r
\r
  if (isBun) {\r
    runtime = "Bun (JavaScriptCore based high-performance runtime)";\r
    engine = "JavaScriptCore (WebKit)";\r
  } else if (isDeno) {\r
    runtime = "Deno (Secure V8 runtime with native TS)";\r
    engine = "V8 (Google)";\r
  } else if (isNode) {\r
    runtime = "Node.js (Server-side V8 runtime)";\r
    engine = "V8 (Google)";\r
  } else if (isBrowser) {\r
    runtime = "Web Browser Window Context";\r
    engine = navigator.userAgent.includes("Chrome") ? "V8 (Blink)" : \r
             navigator.userAgent.includes("Firefox") ? "SpiderMonkey (Gecko)" : \r
             navigator.userAgent.includes("Safari") ? "JavaScriptCore (Nitro)" : "Browser Engine";\r
  } else if (isWebWorker) {\r
    runtime = "Dedicated Web Worker Thread";\r
  }\r
\r
  return {\r
    environment: runtime,\r
    underlyingEngine: engine,\r
    hasWindow: typeof window !== "undefined",\r
    hasProcess: typeof process !== "undefined",\r
    globalUnifiedObject: typeof globalThis !== "undefined" ? "globalThis supported (ES2020)" : "Legacy Global"\r
  };\r
}\r
\r
const runtimeInfo = detectJavaScriptRuntime();\r
console.log("Current Execution Host:");\r
console.table([runtimeInfo]);\r
\r
// ─── 2. V8 MEMORY LAYOUT: CALL STACK (PRIMITIVES) VS HEAP (OBJECTS) ─\r
console.log("");\r
console.log("2. V8 Memory Layout: Primitives vs Reference Allocation:");\r
\r
// Primitive stored directly on the execution Call Stack (immutable value)\r
let studentRoll = 101;\r
let copyRoll = studentRoll;\r
copyRoll = 102; // Modifying copy does NOT affect original\r
\r
// Reference type allocated in the Memory Heap (stack holds pointer address)\r
const studentProfile = {\r
  name: "Swadeep",\r
  center: "Barrackpore Lab",\r
  course: "JS-PRO-101",\r
  skills: ["HTML5", "CSS3"]\r
};\r
\r
// Copying reference pointer (points to the SAME heap address)\r
const profileAlias = studentProfile;\r
profileAlias.skills.push("JavaScript ES2024");\r
\r
console.log("Stack Primitive Comparison → studentRoll:", studentRoll, "| copyRoll:", copyRoll);\r
console.log("Heap Object Mutation Effect → Original studentProfile.skills:", studentProfile.skills);\r
console.log("Are pointers pointing to identical memory address?:", studentProfile === profileAlias);\r
\r
// ─── 3. SINGLE-THREADED CONCURRENCY & THE EVENT LOOP ─────────────\r
console.log("");\r
console.log("3. Single-Threaded Concurrency (Event Loop Tick):");\r
\r
console.log("[Tick 1] Synchronous script execution starts on Call Stack");\r
\r
// Asynchronous Macrotask scheduled to Web APIs / Libuv timer thread\r
setTimeout(() => {\r
  console.log("[Tick 4] Macrotask Timer callback executed after call stack cleared");\r
}, 0);\r
\r
// Asynchronous Microtask scheduled to Microtask Queue (higher priority than timers)\r
Promise.resolve().then(() => {\r
  console.log("[Tick 3] Microtask Promise resolved (runs BEFORE Macrotask)");\r
});\r
\r
console.log("[Tick 2] Synchronous script execution finishes on Call Stack");\r
\r
// ─── 4. PLATFORM API DIVERGENCE (BROWSER VS NODE APIS) ────────────\r
console.log("");\r
console.log("4. Platform Host API Simulation & Feature Detection:");\r
\r
function verifyPlatformCapabilities() {\r
  const capabilities = [\r
    { capability: "DOM Access (document.getElementById)", supported: typeof document !== "undefined" },\r
    { capability: "Local Storage (window.localStorage)", supported: typeof localStorage !== "undefined" },\r
    { capability: "File System I/O (fs.readFile)", supported: typeof process !== "undefined" && typeof require !== "undefined" },\r
    { capability: "Fetch Web API (fetch)", supported: typeof fetch === "function" },\r
    { capability: "Crypto Subtle API (crypto.subtle)", supported: typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined" },\r
    { capability: "Timer Functions (setTimeout/setInterval)", supported: typeof setTimeout === "function" }\r
  ];\r
\r
  console.table(capabilities);\r
}\r
\r
verifyPlatformCapabilities();\r
\r
// ─── 5. UNIVERSAL JAVASCRIPT & globalThis CROSS-RUNTIME PATTERN ───\r
console.log("");\r
console.log("5. Senior Cross-Runtime Universal Context Accessor:");\r
\r
const UniversalContext = (function() {\r
  // ES2020 globalThis standardization resolves window / self / global differences\r
  const root = (function() {\r
    if (typeof globalThis !== "undefined") return globalThis;\r
    if (typeof self !== "undefined") return self;\r
    if (typeof window !== "undefined") return window;\r
    if (typeof global !== "undefined") return global;\r
    throw new Error("Unable to locate global execution context");\r
  })();\r
\r
  return {\r
    setGlobal(key, val) {\r
      root[key] = val;\r
    },\r
    getGlobal(key) {\r
      return root[key];\r
    }\r
  };\r
})();\r
\r
UniversalContext.setGlobal("__STUDENT_LAB_SESSION__", {\r
  student: "Swadeep",\r
  center: "Barrackpore Lab",\r
  status: "Active"\r
});\r
\r
console.log("Retrieved from Universal Context:", UniversalContext.getGlobal("__STUDENT_LAB_SESSION__"));\r
console.log("");\r
console.log("✓ All 5 Topic 0 practical examples executed successfully.");\r
`;function S(){const o=a.useRef([]);a.useEffect(()=>{const n=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&s.target.classList.add("is-visible")})},{threshold:.08});return o.current.forEach(r=>{r&&n.observe(r)}),()=>n.disconnect()},[]);const t=n=>{n&&!o.current.includes(n)&&o.current.push(n)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          opacity: 0.99;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[e.jsxs("header",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-700/60 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"Module 001_001_getting-started-with-javascript · Topic 0"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-sky-300 tracking-tight leading-tight",children:"What is JavaScript and Where It Runs?"}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:"Deconstruct the fundamental architecture of the world's most widely deployed language. Explore the V8 engine compilation pipeline, memory allocation models, and host execution environments from web browsers to cloud runtimes."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400",children:"Course Code: JS-PRO-101"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:border-slate-700 transition-all",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Detailed Discussion & Conceptual Foundation"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["JavaScript is a high-level, dynamically typed, multi-paradigm, prototype-based language designed with first-class functions and single-threaded asynchronous non-blocking event loop concurrency. Created in May 1995 by Brendan Eich at Netscape in just 10 days, it was formally standardized under the ",e.jsx("strong",{className:"text-amber-300",children:"ECMAScript (ECMA-262)"})," specification and has evolved from a simple client-side browser script into the universal foundation of modern software engineering."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["Unlike purely interpreted languages, modern JavaScript executes via ",e.jsx("strong",{className:"text-sky-300",children:"Just-In-Time (JIT) compilation"})," engines (such as Google V8, Apple JavaScriptCore, and Mozilla SpiderMonkey). Code is parsed into an Abstract Syntax Tree (AST), translated into bytecode by an interpreter (e.g. V8 Ignition), profiled with runtime type feedback, and compiled into native C++-speed machine instructions by optimizing compilers (e.g. V8 TurboFan)."]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/90 border border-amber-900/40 text-sm text-slate-300 leading-relaxed space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold",children:[e.jsx("span",{children:"🏫"}),e.jsx("span",{children:"Classroom Scenario (Barrackpore Lab):"})]}),e.jsxs("p",{children:["During a lab session at our Barrackpore center, student ",e.jsx("strong",{children:"Swadeep"})," copied code meant for Node.js into a browser script and wondered why ",e.jsx("code",{children:"process.env"})," threw a ",e.jsx("code",{children:"ReferenceError"}),". Mentor ",e.jsx("strong",{children:"Sukanta Hui"})," demonstrated on the whiteboard that while the JavaScript core syntax is identical, the host environment supplies different APIs: browsers provide ",e.jsx("code",{children:"window"}),", ",e.jsx("code",{children:"document"}),", and Web APIs, whereas server runtimes like Node.js and Bun supply ",e.jsx("code",{children:"process"}),", ",e.jsx("code",{children:"fs"}),", and operating system sockets."]})]})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," JavaScript V8 Engine & Host Runtime Architecture"]}),e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 850 280",className:"w-full h-auto",role:"img","aria-label":"JavaScript Engine JIT & Memory Architecture",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"v8Grad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f59e0b",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#b45309",stopOpacity:"0.2"})]}),e.jsxs("linearGradient",{id:"optGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#047857",stopOpacity:"0.2"})]}),e.jsxs("linearGradient",{id:"heapGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#8b5cf6",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#5b21b6",stopOpacity:"0.2"})]})]}),e.jsx("rect",{width:"850",height:"280",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("text",{x:"425",y:"30",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",textAnchor:"middle",children:"V8 Engine Execution Pipeline & Host Environment Interop"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{width:"460",height:"210",rx:"12",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"230",y:"24",fill:"#fbbf24",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"Google V8 Engine (ECMA-262 Core)"}),e.jsx("rect",{x:"20",y:"40",width:"120",height:"50",rx:"8",fill:"#0f172a",stroke:"#38bdf8"}),e.jsx("text",{x:"80",y:"60",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"1. Lexer & Parser"}),e.jsx("text",{x:"80",y:"78",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Source → AST Tree"}),e.jsx("path",{d:"M 140 65 L 165 65",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"170",y:"40",width:"120",height:"50",rx:"8",fill:"#0f172a",stroke:"#f59e0b"}),e.jsx("text",{x:"230",y:"60",fill:"#fbbf24",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"2. Ignition"}),e.jsx("text",{x:"230",y:"78",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Fast Bytecode Stream"}),e.jsx("path",{d:"M 290 65 L 315 65",stroke:"#10b981",strokeWidth:"2"}),e.jsx("rect",{x:"320",y:"40",width:"120",height:"50",rx:"8",fill:"url(#optGrad)",stroke:"#10b981"}),e.jsx("text",{x:"380",y:"60",fill:"#ecfdf5",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"3. TurboFan JIT"}),e.jsx("text",{x:"380",y:"78",fill:"#d1fae5",fontSize:"9",textAnchor:"middle",children:"Optimized Machine Code"}),e.jsx("rect",{x:"20",y:"105",width:"200",height:"85",rx:"8",fill:"#0f172a",stroke:"#64748b"}),e.jsx("text",{x:"120",y:"125",fill:"#38bdf8",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"Call Stack (Primitives & Frames)"}),e.jsx("text",{x:"120",y:"145",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:'let student = "Swadeep"'}),e.jsx("text",{x:"120",y:"165",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"let roll = 101 (LIFO Stack)"}),e.jsx("rect",{x:"240",y:"105",width:"200",height:"85",rx:"8",fill:"url(#heapGrad)",stroke:"#a855f7"}),e.jsx("text",{x:"340",y:"125",fill:"#f3e8ff",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"Memory Heap (Objects / GC)"}),e.jsx("text",{x:"340",y:"145",fill:"#e9d5ff",fontSize:"9",textAnchor:"middle",children:'{ course: "JS-PRO-101" }'}),e.jsx("text",{x:"340",y:"165",fill:"#c084fc",fontSize:"9",textAnchor:"middle",children:"Garbage Collector (Mark & Sweep)"})]}),e.jsxs("g",{transform:"translate(520, 50)",children:[e.jsx("rect",{width:"300",height:"210",rx:"12",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"150",y:"24",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"Host Execution Environments"}),e.jsx("rect",{x:"15",y:"40",width:"270",height:"68",rx:"8",fill:"#0f172a",stroke:"#0ea5e9"}),e.jsx("text",{x:"25",y:"58",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",children:"🌐 Web Browser (Client Host)"}),e.jsx("text",{x:"25",y:"75",fill:"#94a3b8",fontSize:"9",children:"Global: window · document · DOM Tree"}),e.jsx("text",{x:"25",y:"90",fill:"#64748b",fontSize:"9",children:"Web APIs: fetch(), localStorage, WebSockets"}),e.jsx("rect",{x:"15",y:"120",width:"270",height:"70",rx:"8",fill:"#0f172a",stroke:"#10b981"}),e.jsx("text",{x:"25",y:"138",fill:"#34d399",fontSize:"11",fontWeight:"bold",children:"🟢 Node.js / Deno / Bun (Server Host)"}),e.jsx("text",{x:"25",y:"155",fill:"#94a3b8",fontSize:"9",children:"Global: global / globalThis · process"}),e.jsx("text",{x:"25",y:"170",fill:"#64748b",fontSize:"9",children:"OS APIs: fs (Filesystem), net, crypto, streams"})]})]})}),e.jsx("p",{className:"text-xs text-slate-400 mt-3 text-center",children:"Figure 1.1: Complete architectural relationship between ECMAScript core V8 compilation and Host Platform APIs."})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Deep Technical Know-How, Spec Invariants & Mechanics"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-6",children:["Under the ECMAScript 2024 (ECMA-262) specification, JavaScript execution is governed by discrete ",e.jsx("strong",{className:"text-amber-300",children:"Execution Contexts"}),", containing an ",e.jsx("em",{children:"Environment Record"}),", a ",e.jsx("em",{children:"Lexical Environment"}),", and dynamic memory bindings. When executing, the engine distinguishes fundamentally between primitive stack values and reference heap structures."]}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse border border-slate-800",children:[e.jsx("thead",{className:"bg-slate-900/90 text-amber-300 uppercase text-xs",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border border-slate-800",children:"Execution Phase / Layer"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"ECMAScript Spec Rule"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Runtime / V8 Engine Behavior"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Developer Best Practice"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 font-mono text-xs",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400 font-bold",children:"1. Parsing & AST Generation"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Source text converted to tokens and verified against formal grammar"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"Eager parsing for top-level code; lazy parsing for nested function bodies"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Avoid massive monolithic files; leverage modular tree-shakable ES modules"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400 font-bold",children:"2. Ignition Bytecode Execution"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Evaluates opcodes and mutates Lexical Environments in execution frame"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"Populates Inline Caches (ICs) with property shape feedback"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Initialize object fields in consistent order to preserve monomorphic shapes"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400 font-bold",children:"3. TurboFan JIT Optimization"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Inlines function call sites and eliminates redundant type assertions"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"Compiles hot loops into direct x86/ARM64 assembly instructions"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Keep functions small, pure, and avoid passing mixed primitive types"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400 font-bold",children:"4. Garbage Collection (GC)"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Reclaims memory unreachable from root execution objects"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"Scavenger algorithm for Young Generation; Mark-Sweep-Compact for Old Gen"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Clean up timers, DOM event listeners, and avoid global variable leaks"})]})]})]})}),e.jsxs("div",{className:"mt-6 p-5 rounded-xl bg-slate-900/80 border border-rose-900/40 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Exceptions, Quirks & Runtime Pitfalls to Know"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-slate-300 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-rose-300",children:"ReferenceError on Host APIs:"})," Attempting to access ",e.jsx("code",{children:"window"})," in Node.js or ",e.jsx("code",{children:"process"})," in browser scripts throws an unrecoverable ",e.jsx("code",{children:"ReferenceError"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-amber-300",children:"Single-Threaded CPU Starvation:"})," Running heavy synchronous loops blocks the Call Stack, preventing browser paint cycles and freezing the user interface."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-sky-300",children:'typeof null === "object":'})," An infamous legacy bug from JavaScript 1.0 that persists to preserve web backward compatibility."]})]})]})]})}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Interactive Monaco Playground: 5+ Practical Working Examples"]}),e.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded bg-amber-950/60 border border-amber-800 text-amber-300",children:"Live In-Browser Execution"})]}),e.jsx("div",{className:"rounded-2xl border border-slate-800 overflow-hidden shadow-2xl bg-slate-900",children:e.jsx(d,{initialCode:h,title:"WhatIsJavascriptAndWhereItRunsDemo.js"})})]}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚖️"})," Common Pitfalls vs Senior Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold",children:[e.jsx("span",{children:"❌"}),e.jsx("span",{children:"Anti-Pattern: Hardcoding Host Global Objects"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Directly accessing ",e.jsx("code",{children:"window"})," or ",e.jsx("code",{children:"global"})," makes libraries and utility modules non-portable across Next.js SSR, Web Workers, or Node.js services."]}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/50 text-xs font-mono text-rose-300 overflow-x-auto",children:`// ❌ AVOID: Crashes in Node.js / SSR
function getSessionToken() {
  return window.localStorage.getItem("token"); // ReferenceError in SSR!
}`})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold",children:[e.jsx("span",{children:"✓"}),e.jsx("span",{children:"Senior Pro: Universal Environment Guard"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Use ",e.jsx("code",{children:"globalThis"})," or defensive type guards to inspect available runtime host capabilities before execution."]}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-emerald-900/50 text-xs font-mono text-emerald-300 overflow-x-auto",children:`// ✓ RECOMMENDED: Safe Universal Guard
function getSessionToken() {
  if (typeof globalThis.localStorage !== "undefined") {
    return globalThis.localStorage.getItem("token");
  }
  return null; // Safe fallback for server-side
}`})]})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-950/30 via-slate-900 to-purple-950/20 border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xl shadow-md",children:"💎"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs uppercase font-mono tracking-wider text-amber-400 font-bold block",children:"JavaScript Hidden Gem & Senior Pro Secret"}),e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Universal globalThis & DevTools Memory Profiling"})]})]}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed mb-6",children:["Standardized in ES2020, ",e.jsx("code",{children:"globalThis"})," guarantees access to the root context across browsers, Node.js, Deno, Bun, and Web Workers. Additionally, in Chrome DevTools, you can inspect hidden V8 properties using ",e.jsx("code",{children:"console.table()"})," and examine live object references with precision."]}),e.jsx("div",{className:"rounded-xl border border-amber-900/50 bg-slate-950 p-4 font-mono text-xs text-amber-200 overflow-x-auto",children:e.jsx("pre",{children:`// 💎 SENIOR PRO SECRET: Universal Environment Feature Map
const runtimeCapabilities = {
  isBrowser: typeof window !== "undefined",
  isNode: typeof process !== "undefined" && !!process.versions?.node,
  hasCrypto: typeof globalThis.crypto?.subtle !== "undefined",
  engine: navigator?.userAgent?.includes("Chrome") ? "V8" : "Other"
};
console.table(runtimeCapabilities);`})})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-indigo-950/20 border border-indigo-800/40 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-indigo-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Architectural Mental Challenge: Think About This..."]}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed mb-4",children:"If JavaScript is strictly single-threaded, how can a high-traffic Node.js server handle 50,000 concurrent HTTP requests without getting blocked by the first slow database query?"}),e.jsx("div",{className:"p-4 rounded-xl bg-slate-900 border border-indigo-900/50 text-xs sm:text-sm text-indigo-300 font-mono",children:"💡 Hint: Think about the separation between V8 JavaScript execution and the Libuv C++ asynchronous threadpool that manages kernel epoll/kqueue network events!"})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(l,{title:"Frequently Asked Questions · What is JavaScript and Where It Runs?",subtitle:"Explore 25+ comprehensive questions from basic engine concepts to enterprise architecture",questions:p})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(c,{content:m,title:"JavaScript Master Note · What is JavaScript and Where It Runs?",downloadFileName:"001_001_getting-started-with-javascript-topic0-note.txt"})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(i,{note:"In my 27+ years of mentoring engineers at Coder & AccoTax in Barrackpore, I have seen that understanding where JavaScript executes and how V8 manages memory transforms students from syntax coders into genuine system architects. Master the difference between the Call Stack and Memory Heap before writing complex state logic."})})]})]})}export{S as default};
