import{b as c,j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as p}from"./JavaScriptProjectAnswerTemplate-V96mU1pF.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const g=`/**
 * JS001: Runtime Environment & Host Detection
 * Module: 001_001_getting-started-with-javascript (Topic 0)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

function detectJavaScriptRuntime() {
  const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
  const isNode = typeof process !== "undefined" && process.versions && process.versions.node;
  const isDeno = typeof Deno !== "undefined";
  const isBun = typeof Bun !== "undefined";
  const isWebWorker = typeof importScripts === "function" && typeof WorkerGlobalScope !== "undefined";

  let environment = "Unknown Runtime";
  let engine = "Unknown Engine";
  let globalObjectName = "globalThis";

  if (isBun) {
    environment = "Bun Runtime";
    engine = "JavaScriptCore";
    globalObjectName = "globalThis / Bun";
  } else if (isDeno) {
    environment = "Deno Secure Runtime";
    engine = "V8";
    globalObjectName = "globalThis / Deno";
  } else if (isNode) {
    environment = \`Node.js (v\${process.versions.node})\`;
    engine = "V8 (Google)";
    globalObjectName = "global / globalThis";
  } else if (isBrowser) {
    environment = "Web Browser Window Context";
    engine = navigator.userAgent.includes("Chrome") ? "V8 (Blink)" : 
             navigator.userAgent.includes("Firefox") ? "SpiderMonkey (Gecko)" : 
             navigator.userAgent.includes("Safari") ? "JavaScriptCore (WebKit)" : "Browser Engine";
    globalObjectName = "window / globalThis";
  } else if (isWebWorker) {
    environment = "Dedicated Web Worker Thread";
    globalObjectName = "self / globalThis";
  }

  return {
    environment,
    engine,
    globalObjectName,
    hasDOM: typeof document !== "undefined",
    hasFileSystem: isNode || isDeno || isBun
  };
}

const runtimeInfo = detectJavaScriptRuntime();
console.log("🚀 Host Runtime Analysis:");
console.table([runtimeInfo]);
`,m=`/**
 * JS002: Universal Global Context with globalThis (ES2020)
 * Module: 001_001_getting-started-with-javascript (Topic 0)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

// Universal Global Config Registry
const UniversalConfigStore = {
  set(key, value) {
    // globalThis is universally supported in modern browsers, Node.js, Deno, Bun
    if (!globalThis.__APP_STORE__) {
      globalThis.__APP_STORE__ = {};
    }
    globalThis.__APP_STORE__[key] = value;
  },

  get(key) {
    return globalThis.__APP_STORE__ ? globalThis.__APP_STORE__[key] : undefined;
  },

  listAll() {
    return globalThis.__APP_STORE__ || {};
  }
};

// Test cross-platform global registration
UniversalConfigStore.set("institute", "Coder & AccoTax");
UniversalConfigStore.set("center", "Barrackpore Lab");
UniversalConfigStore.set("course", "JS-PRO-101: Modern JavaScript Mastery");
UniversalConfigStore.set("version", "2026.1.0");

console.log("Retrieved Config Key 'institute':", UniversalConfigStore.get("institute"));
console.log("Retrieved Config Key 'center':", UniversalConfigStore.get("center"));
console.log("Full Global Store on globalThis:", UniversalConfigStore.listAll());
`,h=`/**
 * JS003: V8 Memory Layout: Call Stack vs Heap References
 * Module: 001_001_getting-started-with-javascript (Topic 0)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

// 1. Primitive stored on Call Stack by VALUE
let originalScore = 95;
let copiedScore = originalScore;
copiedScore = 100; // Modifying copy leaves original intact

console.log("=== 1. Primitive Call Stack Value Copying ===");
console.log("originalScore (unchanged):", originalScore); // 95
console.log("copiedScore (updated):", copiedScore);       // 100

// 2. Object stored in Memory Heap by REFERENCE (Pointer Address)
const originalStudent = {
  id: 101,
  name: "Swadeep",
  skills: ["HTML5", "CSS3"]
};

const studentReference = originalStudent; // Copies pointer address, NOT object data

// Mutating via reference alias
studentReference.skills.push("JavaScript ES2026");
studentReference.name = "Swadeep Mukherjee";

console.log("\\n=== 2. Memory Heap Object Reference Mutation ===");
console.log("originalStudent.name:", originalStudent.name);     // 'Swadeep Mukherjee'
console.log("originalStudent.skills:", originalStudent.skills); // ['HTML5', 'CSS3', 'JavaScript ES2026']
console.log("Pointers point to exact same memory cell:", originalStudent === studentReference); // true
`,f=`/**
 * JS004: Role of JavaScript: Dynamic DOM Content Generation
 * Module: 001_001_getting-started-with-javascript (Topic 1)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

function createStudentBadge(student) {
  const timestamp = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  const badgeHTML = \`
    <div class="student-card" data-student-id="\${student.id}">
      <span class="status-indicator active">● Enrolled</span>
      <h3 class="student-name">\${student.name}</h3>
      <p class="course-badge">\${student.course}</p>
      <span class="enrollment-date">Joined: \${timestamp}</span>
    </div>
  \`.trim();

  // If running in browser DOM
  if (typeof document !== "undefined" && document.body) {
    const container = document.createElement("div");
    container.innerHTML = badgeHTML;
    document.body.appendChild(container.firstElementChild);
    console.log(\`Mounted DOM badge for student: \${student.name}\`);
  }

  return badgeHTML;
}

const swadeepBadge = createStudentBadge({
  id: 101,
  name: "Swadeep",
  course: "JS Foundations & Syntax Mastery"
});

console.log("Generated Dynamic HTML Markup:");
console.log(swadeepBadge);
`,S=`/**
 * JS005: Three Web Pillars: Coordinating Structure, Style & Behavior
 * Module: 001_001_getting-started-with-javascript (Topic 2)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

// Theme Controller demonstrating Separation of Concerns:
// HTML holds the DOM structure
// CSS classes define styles (.theme-dark, .theme-light)
// JavaScript manages state transitions & class toggling
const ThemeController = {
  currentTheme: "light",

  themes: {
    light: { background: "#ffffff", color: "#0f172a", className: "theme-light" },
    dark: { background: "#0f172a", color: "#f8fafc", className: "theme-dark" }
  },

  toggle() {
    this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
    const activeConfig = this.themes[this.currentTheme];

    // In a browser runtime, toggle classes on documentElement
    if (typeof document !== "undefined" && document.documentElement) {
      document.documentElement.classList.remove("theme-light", "theme-dark");
      document.documentElement.classList.add(activeConfig.className);
    }

    return {
      activeTheme: this.currentTheme,
      appliedClass: activeConfig.className,
      computedStyles: {
        backgroundColor: activeConfig.background,
        textColor: activeConfig.color
      }
    };
  }
};

console.log("Initial State:", ThemeController.currentTheme);
console.log("Toggle 1:", ThemeController.toggle());
console.log("Toggle 2:", ThemeController.toggle());
`,b=`/**
 * JS006: Local Server vs File Protocol (http:// vs file://) Verifier
 * Module: 001_001_getting-started-with-javascript (Topic 3)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

function verifyDevelopmentServer() {
  const isBrowser = typeof window !== "undefined" && typeof window.location !== "undefined";

  if (!isBrowser) {
    return {
      status: "NODE_CLI",
      protocol: "N/A",
      message: "Running in non-browser Node.js runtime. HTTP server check not applicable."
    };
  }

  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = window.location.port;

  const isLocalServer = protocol.startsWith("http") && (hostname === "localhost" || hostname === "127.0.0.1" || hostname.startsWith("192.168."));
  const isFileProtocol = protocol === "file:";

  return {
    protocol,
    hostname,
    port: port || "Default (80/443)",
    isLiveServer: isLocalServer,
    corsAndModulesSupported: !isFileProtocol,
    recommendation: isFileProtocol 
      ? "⚠️ WARNING: You opened this file directly via file://. ES Modules, Web Workers, and Fetch API will be blocked by browser CORS policy. Please use VS Code Live Server (http://127.0.0.1:5500)."
      : "✅ SUCCESS: Running through HTTP development server. Full ES2026 modules and APIs enabled."
  };
}

console.log("Development Environment Check:");
console.table([verifyDevelopmentServer()]);
`,y=`/**\r
 * JS007: Script Placement: Synchronous Parser Blocking vs Bottom Placement\r
 * Module: 001_001_getting-started-with-javascript (Topic 4)\r
 * Mentor: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
// Simulated DOM tree representation\r
const mockDOM = {\r
  elements: {},\r
  register(tag, id, content) {\r
    this.elements[id] = { tag, id, content };\r
  },\r
  getElementById(id) {\r
    return this.elements[id] || null;\r
  }\r
};\r
\r
console.log("=== Scenario 1: Inline Synchronous Script in <head> ===");\r
// HTML parser is at line 4 (<head>); #app element at line 25 has NOT been parsed yet\r
let targetElementHead = mockDOM.getElementById("app");\r
console.log("Querying document.getElementById('app') in <head>:", targetElementHead); // null\r
console.log("Attempting targetElementHead.textContent = 'Welcome' → Throws: TypeError: Cannot set properties of null!\\n");\r
\r
console.log("=== Scenario 2: Script Placed Before </body> Tag ===");\r
// HTML parser parses <div id="app">...</div> before encountering <script> at bottom of <body>\r
mockDOM.register("div", "app", "Welcome to Coder & AccoTax");\r
let targetElementBottom = mockDOM.getElementById("app");\r
console.log("Querying document.getElementById('app') before </body>:", targetElementBottom);\r
console.log("Successfully updated DOM content to:", targetElementBottom.content);\r
`,v=`/**\r
 * JS008: Modern Script Loading: Defer vs Async Attribute Lifecycle\r
 * Module: 001_001_getting-started-with-javascript (Topic 4)\r
 * Mentor: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
const timeline = [];\r
\r
function recordTimelineEvent(phase, description) {\r
  timeline.push({\r
    order: timeline.length + 1,\r
    phase,\r
    description\r
  });\r
}\r
\r
// Model the browser parsing and execution pipeline\r
recordTimelineEvent("HTML Parsing", "Browser HTML Tokenizer begins parsing document from top to bottom.");\r
recordTimelineEvent("Async Download", "<script async src='analytics.js'> encountered → Downloads in parallel in background.");\r
recordTimelineEvent("Defer Download", "<script defer src='app.js'> encountered → Downloads in parallel in background.");\r
recordTimelineEvent("Async Execution", "analytics.js finishes downloading → Parser pauses, analytics.js executes immediately!");\r
recordTimelineEvent("HTML Complete", "HTML Tokenizer reaches </html> → DOM Tree construction finished.");\r
recordTimelineEvent("Defer Execution", "app.js executes with guaranteed access to the fully constructed DOM Tree in FIFO order.");\r
recordTimelineEvent("DOMContentLoaded", "Browser fires 'DOMContentLoaded' event → UI is interactive.");\r
\r
console.log("🌐 Browser Script Execution Lifecycle:");\r
console.table(timeline);\r
`,w=`/**
 * JS009: Formatted Console Logging with Format Specifiers (%s, %d, %o)
 * Module: 001_001_getting-started-with-javascript (Topic 5)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

function generateStudentDiagnostic(studentName, rollNumber, marksObtained, metadata) {
  // %s = String substitution
  // %d / %i = Integer substitution
  // %f = Floating-point number substitution
  // %o = JavaScript Object tree inspection
  console.log(
    "Student [%s] | Roll: %d | Score: %f/100 | Metadata: %o",
    studentName,
    rollNumber,
    marksObtained,
    metadata
  );
}

console.log("=== Formatted Console Diagnostics with Specifiers ===");

generateStudentDiagnostic("Swadeep Mukherjee", 101, 98.75, {
  batch: "Weekend Pro",
  center: "Barrackpore",
  mentor: "Sukanta Hui"
});

generateStudentDiagnostic("Tuhina Paul", 102, 94.20, {
  batch: "Weekend Pro",
  center: "Naihati",
  mentor: "Sukanta Hui"
});
`,T=`/**
 * JS010: Tabular Visualization with console.table() & Column Filtering
 * Module: 001_001_getting-started-with-javascript (Topic 5)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

const courseEnrollments = [
  { studentId: 101, name: "Swadeep", course: "JS Foundations", feePaid: 5000, score: 98, status: "Active" },
  { studentId: 102, name: "Tuhina", course: "JS Foundations", feePaid: 5000, score: 95, status: "Active" },
  { studentId: 103, name: "Debangshu", course: "JS Foundations", feePaid: 4500, score: 88, status: "Active" },
  { studentId: 104, name: "Abhronila", course: "JS Foundations", feePaid: 5000, score: 99, status: "Active" }
];

console.log("=== 1. Full Dataset Tabular Output ===");
console.table(courseEnrollments);

console.log("\\n=== 2. Column-Filtered Tabular Output (name, score, status) ===");
console.table(courseEnrollments, ["name", "score", "status"]);
`,x=`/**
 * JS011: Hierarchical Diagnostic Logging with console.group()
 * Module: 001_001_getting-started-with-javascript (Topic 5)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

function simulateUserAuthentication(username) {
  console.group(\`🔐 Authentication Pipeline: [\${username}]\`);

  console.group("Step 1: Credential Verification");
  console.info("Checking user record in local auth cache...");
  console.log("Credentials match stored bcrypt hash.");
  console.groupEnd();

  console.group("Step 2: Session & Permissions Initialization");
  console.log("Granting Role: 'STUDENT_LEVEL_1'");
  console.log("Assigned Workspaces: ['001_001_getting-started', '001_002_syntax']");
  console.groupEnd();

  console.groupCollapsed("Step 3: Background Telemetry (Expandable)");
  console.log("User-Agent logged.");
  console.log("Session token signed: eyJhbGciOiJIUzI1NiJ9...");
  console.groupEnd();

  console.log("✅ User successfully logged in. Workspaces ready!");
  console.groupEnd(); // Closes main authentication group
}

simulateUserAuthentication("swadeep_coder");
`,k=`/**
 * JS012: Micro-Benchmarking with console.time() and console.timeEnd()
 * Module: 001_001_getting-started-with-javascript (Topic 5)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

const ITERATIONS = 100_000;

console.log(\`⏱️ Benchmarking \${ITERATIONS.toLocaleString()} String Operations:\`);

// Method 1: String Concatenation (+)
console.time("string-concatenation-plus");
let strConcat = "";
for (let i = 0; i < ITERATIONS; i++) {
  strConcat += "a";
}
console.timeEnd("string-concatenation-plus");

// Method 2: Array Push & Join
console.time("array-push-and-join");
const strArray = [];
for (let i = 0; i < ITERATIONS; i++) {
  strArray.push("a");
}
const strResult = strArray.join("");
console.timeEnd("array-push-and-join");

console.log(\`Verified output lengths: \${strConcat.length} === \${strResult.length}\`);
`,C=`/**
 * JS013: Function Invocation Tracking with console.count()
 * Module: 001_001_getting-started-with-javascript (Topic 5)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

function handleUserAction(actionType) {
  // Automatically increments and logs an internal counter per label
  console.count(\`Action: \${actionType}\`);
}

console.log("=== Tracking User Event Invocations ===");
handleUserAction("login_click");
handleUserAction("login_click");
handleUserAction("view_lesson_topic");
handleUserAction("login_click");
handleUserAction("view_lesson_topic");

console.log("\\n=== Resetting login_click counter ===");
console.countReset("Action: login_click");
handleUserAction("login_click");
`,M=`/**
 * JS014: Execution Stack Trace Inspection with console.trace()
 * Module: 001_001_getting-started-with-javascript (Topic 5)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

function sanitizeDiscount(rate) {
  if (rate > 0.5) {
    console.warn("⚠️ High discount detected (> 50%). Tracing call stack origin:");
    console.trace("HighDiscountInvestigation");
  }
  return Math.min(rate, 0.5);
}

function calculateItemPrice(item) {
  const finalDiscount = sanitizeDiscount(item.discount);
  return item.price * (1 - finalDiscount);
}

function processCheckoutCart(cart) {
  return cart.map(item => ({
    name: item.name,
    total: calculateItemPrice(item)
  }));
}

const sampleCart = [
  { name: "JavaScript Master Handbook", price: 1000, discount: 0.1 },
  { name: "VIP Mentorship Pass", price: 5000, discount: 0.75 } // Triggers trace
];

console.log("Cart Processed:", processCheckoutCart(sampleCart));
`,E=`/**\r
 * JS015: Strict Mode: Accidental Global Variable Leak Prevention\r
 * Module: 001_001_getting-started-with-javascript (Topic 6)\r
 * Mentor: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
function runSafeModule() {\r
  "use strict"; // Prevents silent bugs and global variable pollution\r
\r
  console.log("🔒 Enforcing 'use strict' inside function scope...");\r
\r
  try {\r
    // Attempt to assign to undeclared identifier without let/const/var:\r
    unintentionalGlobal = "This will fail immediately in strict mode!";\r
  } catch (err) {\r
    console.log(\`🛡️ Caught Expected Error: [\${err.name}] → \${err.message}\`);\r
    console.log("✅ Verified: Global scope remained completely clean and unpolluted.");\r
  }\r
}\r
\r
runSafeModule();\r
`,_=`/**
 * JS016: Strict Mode: 'this' Keyword Coercion Defense
 * Module: 001_001_getting-started-with-javascript (Topic 6)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

// Function 1: Non-strict mode (sloppy mode)
function getSloppyThis() {
  return this; // Coerced to global window (in browser) or global (in Node)
}

// Function 2: Strict mode
function getStrictThis() {
  "use strict";
  return this; // Preserved as undefined when invoked without an explicit receiver
}

console.log("=== 'this' Keyword Binding Comparison ===");

const sloppyResult = getSloppyThis();
const isSloppyGlobal = typeof window !== "undefined" ? sloppyResult === window : typeof global !== "undefined" && sloppyResult === global;
console.log("Sloppy Mode 'this' bound to global:", isSloppyGlobal); // true

const strictResult = getStrictThis();
console.log("Strict Mode 'this' value:", strictResult);             // undefined
console.log("Strict Mode protects against accidental global mutation:", strictResult === undefined); // true
`,j=`/**\r
 * JS017: Strict Mode: Read-Only Property Mutation Defense\r
 * Module: 001_001_getting-started-with-javascript (Topic 6)\r
 * Mentor: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
function enforceImmutableConfig() {\r
  "use strict";\r
\r
  // Enterprise immutable settings object\r
  const systemConfig = Object.freeze({\r
    appName: "CoderAccoTaxLMS",\r
    taxRate: 0.18,\r
    maxLoginAttempts: 5\r
  });\r
\r
  console.log("Original Frozen Config:", systemConfig);\r
\r
  try {\r
    // In non-strict mode, this silent write fails with NO error.\r
    // In strict mode, the V8 engine immediately raises a TypeError!\r
    systemConfig.taxRate = 0.25;\r
  } catch (err) {\r
    console.log(\`🛡️ Caught Expected Error: [\${err.name}] → \${err.message}\`);\r
    console.log("✅ Verified: Frozen property remained strictly 0.18:", systemConfig.taxRate);\r
  }\r
}\r
\r
enforceImmutableConfig();\r
`,A=`/**
 * JS018: Lexical Grammar: Comment Taxonomy & JSDoc Standards
 * Module: 001_001_getting-started-with-javascript (Topic 7)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

// 1. Single-line comment: Minimum passing score constant
const MIN_PASSING_PERCENTAGE = 40.0;

/*
 * 2. Multi-line comment block:
 * This calculation engine grades student exam submissions
 * and computes honors eligibility according to institute standards.
 */

/**
 * 3. JSDoc Standard Specification:
 * Evaluates student percentage and assigns letter grade.
 * 
 * @param {string} studentName - Full name of the candidate.
 * @param {number} marksObtained - Total marks scored (0 <= marks <= totalMarks).
 * @param {number} totalMarks - Maximum possible examination marks.
 * @returns {object} Detailed assessment result report.
 * @throws {RangeError} Throws if marksObtained exceeds totalMarks.
 * 
 * @author Sukanta Hui <mentor@coderaccotax.com>
 * @example
 * const report = evaluateStudentGrade("Swadeep", 95, 100);
 */
function evaluateStudentGrade(studentName, marksObtained, totalMarks = 100) {
  if (marksObtained < 0 || marksObtained > totalMarks) {
    throw new RangeError(\`Marks obtained (\${marksObtained}) exceeds max marks (\${totalMarks}).\`);
  }

  const percentage = (marksObtained / totalMarks) * 100;
  const grade = percentage >= 90 ? "A+" :
                percentage >= 80 ? "A"  :
                percentage >= 70 ? "B"  :
                percentage >= 60 ? "C"  :
                percentage >= 40 ? "D"  : "F (Needs Revision)";

  return {
    student: studentName,
    percentage: \`\${percentage.toFixed(1)}%\`,
    grade,
    isPassed: percentage >= MIN_PASSING_PERCENTAGE
  };
}

console.log("Evaluation Result 1:", evaluateStudentGrade("Swadeep", 95, 100));
console.log("Evaluation Result 2:", evaluateStudentGrade("Debangshu", 82, 100));
`,I=`/**
 * JS019: Automatic Semicolon Insertion (ASI): The Restricted return Trap
 * Module: 001_001_getting-started-with-javascript (Topic 7)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

// Function 1: Buggy return due to ASI newline insertion rule
function getStudentScoreBroken() {
  return // <-- ASI automatically inserts a semicolon here: 'return;'
  {
    student: "Swadeep",
    score: 98,
    status: "Passed"
  };
}

// Function 2: Correct formatting with opening brace on same line
function getStudentScoreCorrect() {
  return {
    student: "Swadeep",
    score: 98,
    status: "Passed"
  };
}

// Function 3: Defensive parenthesized multiline return (Common in React JSX)
function getStudentScoreParenthesized() {
  return (
    {
      student: "Swadeep",
      score: 98,
      status: "Passed"
    }
  );
}

console.log("=== Automatic Semicolon Insertion (ASI) Return Comparison ===");
console.log("Broken Return Result (ASI returned undefined):", getStudentScoreBroken());           // undefined
console.log("Correct Same-Line Return Result:", getStudentScoreCorrect());                       // Object { student: 'Swadeep', ... }
console.log("Parenthesized Multiline Return Result:", getStudentScoreParenthesized());           // Object { student: 'Swadeep', ... }
`,J=`/**
 * JS020: Automatic Semicolon Insertion (ASI): Leading Parenthesis & Bracket Pitfalls
 * Module: 001_001_getting-started-with-javascript (Topic 7)
 * Mentor: Sukanta Hui | Coder & AccoTax
 */

console.log("=== Leading Parenthesis Pitfall in Semicolon-Free Code ===");

// 1. Buggy Scenario: Missing semicolon before IIFE
// Without semicolon, JS sees: \`const user = "Swadeep"(function() { ... })()\`
try {
  const user = "Swadeep"
  ;(function() {
    console.log("✅ Defensive leading semicolon prevented: 'TypeError: 'Swadeep' is not a function'");
  })()
} catch (err) {
  console.error("Error occurred:", err.message);
}

// 2. Defensive Semicolon Standard before Array Destructuring / Access
const a = 1;
const b = 2;

// Defensive leading semicolon ensures parser does not evaluate \`b[1, 2]\`
;[a, b].forEach(val => console.log("Array value:", val));

console.log("✓ All 20 Module 001_001 exercises executed and verified successfully.");
`,O="001_001: Getting Started with JavaScript – 20 Practical Coding Exercises",D="Web Development (JavaScript Foundations)",P="General / Industrial Standards",R=["Browser DevTools Console","VS Code & Live Server","Node.js Runtime","Modern Web Browsers (Chrome, Firefox, Safari)"],B={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},L=JSON.parse('[{"projectId":"JS001","title":"Runtime Environment & Host Detection","difficulty":"Beginner","description":"Write a robust environment detector that identifies whether JavaScript is executing inside a Web Browser window, Node.js server runtime, Deno, Bun, or a dedicated Web Worker thread by inspecting runtime-specific global objects without throwing ReferenceErrors.","exampleText":"// Inspecting host runtime environment across platforms:\\ndetectJavaScriptRuntime();","exampleOutput":"Environment: Web Browser Window Context | Engine: V8 / Blink | Global Object: window","answerFile":"./answers/JS001.js","learningOutcome":"Mastering JavaScript execution hosts, engine architectures (V8, JavaScriptCore, SpiderMonkey), and safe global object inspection.","logicExplanation":"1. **ECMAScript Host Environment Architecture (ECMA-262 §8.1 Realms)**:\\nJavaScript is an embedded scripting language that requires a host environment to execute. The ECMAScript standard defines the core language syntax and standard library (Object, Array, Promise), while the host environment injects platform-specific Web APIs or Node APIs into the global realm.\\n\\n2. **Engine Divergence**:\\n- **Chrome, Edge, Brave, Node.js, Deno**: Powered by Google\'s V8 engine (Blink rendering engine).\\n- **Safari, iOS WebViews, Bun**: Powered by Apple\'s JavaScriptCore (WebKit).\\n- **Firefox**: Powered by Mozilla\'s SpiderMonkey (Gecko engine).\\n\\n3. **Safe Global Inspection via `typeof`**:\\nIn JavaScript, evaluating an undeclared identifier directly (e.g. `if (window)`) throws a fatal `ReferenceError`. However, the `typeof` operator has a special exemption in the ECMAScript specification: `typeof undeclaredVar` safely returns the string `\'undefined\'` without throwing an exception. By checking `typeof window !== \'undefined\'`, we can safely probe for host capabilities across any runtime.","codeExplanation":"The function `detectJavaScriptRuntime()` systematically checks for the existence of `Bun`, `Deno`, `process.versions.node`, `window.document`, and `importScripts` in priority order. It returns a comprehensive diagnostics object containing the host name, underlying JS engine, and active DOM capabilities."},{"projectId":"JS002","title":"Universal Global Context with globalThis (ES2020)","difficulty":"Beginner","description":"Create an isomorphic configuration registry that attaches shared application settings to globalThis, demonstrating how modern JavaScript provides a unified global object across both client-side and server-side runtimes.","exampleText":"// Registering cross-platform configuration on globalThis:\\nUniversalConfigStore.set(\'institute\', \'Coder & AccoTax\');\\nUniversalConfigStore.set(\'center\', \'Barrackpore Lab\');\\nUniversalConfigStore.set(\'course\', \'JS-PRO-101\');\\n\\n// Querying global settings:\\nUniversalConfigStore.get(\'institute\');","exampleOutput":"Retrieved Config from globalThis: { institute: \'Coder & AccoTax\', center: \'Barrackpore\' }","answerFile":"./answers/JS002.js","learningOutcome":"Using globalThis to write universal, isomorphic JavaScript code that runs seamlessly on both client and server.","logicExplanation":"1. **The Historical Global Object Fragmentation**:\\nPrior to ECMAScript 2020 (ES11), accessing the global object required different syntax depending on the host:\\n- Web Browsers: `window`, `self`, `frames`\\n- Web Workers: `self`\\n- Node.js: `global`\\n- Standalone JS shells: `this` at top-level\\nWriting universal libraries (such as Redux, Axios, or Lodash) required complex multi-fallback wrapper functions to locate the active global scope.\\n\\n2. **ECMAScript 2020 `globalThis` Standardization (§19.1.1)**:\\nTC39 standardized `globalThis` as a universal reference that always resolves to the global environment record across all execution contexts (browser tabs, workers, Node, Deno, Bun, and serverless edge functions).\\n\\n3. **Architectural Role in Isomorphic Apps**:\\nIn full-stack architectures (like Next.js, Remix, or Nuxt), code runs on the Node server during SSR (Server-Side Rendering) and then re-executes in the client browser during hydration. Using `globalThis` ensures configuration singletons and polyfills bind correctly in both phases without branching logic.","codeExplanation":"The `UniversalConfigStore` object binds a private namespace `__APP_STORE__` directly onto `globalThis`. It provides `.set()`, `.get()`, and `.listAll()` methods to safely register and query runtime configuration flags across environments."},{"projectId":"JS003","title":"V8 Memory Layout: Call Stack (Primitives) vs Heap (References)","difficulty":"Beginner","description":"Demonstrate the fundamental difference between primitive values stored by value on the Call Stack and objects stored by reference in the Memory Heap using student record mutation examples.","exampleText":"// 1. Primitive value copying (Call Stack):\\nlet originalScore = 95;\\nlet copiedScore = originalScore;\\ncopiedScore = 100;\\n\\n// 2. Reference pointer copying (Memory Heap):\\nconst originalStudent = { name: \'Swadeep\', skills: [\'HTML\'] };\\nconst studentReference = originalStudent;\\nstudentReference.name = \'Swadeep Mukherjee\';","exampleOutput":"Primitive originalScore: 95 | Object originalStudent.name: \'Swadeep Mukherjee\' (Mutated via alias)","answerFile":"./answers/JS003.js","learningOutcome":"Understanding the physical memory model of V8: Stack value allocation vs Heap reference pointers.","logicExplanation":"1. **V8 Memory Segmentation Architecture**:\\n- **Execution Call Stack**: Fast, contiguous memory allocated for execution context frames. It stores primitive values (Number, String, Boolean, null, undefined, Symbol, BigInt) directly in stack slots (often as 31-bit Small Integers / SMI or IEEE 754 64-bit floats).\\n- **Memory Heap**: Large, dynamic, unorganized memory pool used for complex data structures (Objects, Arrays, Functions, Closures, DOM nodes). Allocations here are managed by V8\'s Garbage Collector.\\n\\n2. **Value Copying vs Reference Pointer Copying**:\\n- When assigning a primitive (`let y = x`), the engine copies the literal bit representation. Changes to `y` have zero effect on `x`.\\n- When assigning an object (`let b = a`), the engine copies the **64-bit memory address pointer**, NOT the underlying object data. Both `a` and `b` point to the exact same heap memory address (`0x8849F`).\\n\\n3. **Mutation Hazards in Modern Frameworks (React / Vue)**:\\nMutating object properties directly via reference aliases breaks change detection in React and Redux because the memory address pointer does not change (`prevProps.user === nextProps.user` evaluates to `true`). Senior developers always create shallow clones (`{ ...obj }`) or deep copies to enforce immutability.","codeExplanation":"The script contrasts primitive variable reassignments against object mutations. It proves that modifying `studentReference.skills.push()` alters `originalStudent.skills`, and confirms pointer equality with `originalStudent === studentReference` (evaluating to true)."},{"projectId":"JS004","title":"Role of JavaScript: Dynamic DOM Content Generation","difficulty":"Beginner","description":"Write a script that creates a dynamic welcome banner in the DOM or logs formatted HTML component markup when running in non-browser environments.","exampleText":"// Generating dynamic student status card component:\\ncreateStudentBadge({\\n  id: 101,\\n  name: \'Swadeep Mukherjee\',\\n  course: \'JS Foundations & Syntax Mastery\'\\n});","exampleOutput":"<div class=\'student-card\' data-student-id=\'101\'>...<h3 class=\'student-name\'>Swadeep Mukherjee</h3>...</div>","answerFile":"./answers/JS004.js","learningOutcome":"Understanding JavaScript\'s role as the dynamic behavior and rendering layer of the web.","logicExplanation":"1. **Static HTML vs Dynamic DOM Binding**:\\nHTML provides a declarative, static blueprint of a document. When a browser loads HTML, the C++ Blink layout engine parses tokens into a live in-memory tree of C++ nodes called the **Document Object Model (DOM)**.\\n\\n2. **JavaScript as the Runtime Controller**:\\nJavaScript interacts with the DOM via browser Web APIs (`document.createElement`, `innerHTML`, `appendChild`). Through these bindings, JavaScript can dynamically construct UI components, update text contents, bind user interaction events, and fetch live data from backend servers without requiring full page reloads.\\n\\n3. **Render Tree & Reflow Costs**:\\nWhen JavaScript inserts or modifies DOM elements, the browser must recalculate element dimensions and positions (**Layout / Reflow**) and paint pixels to the screen (**Paint & Composite**). Constructing markup strings off-screen or batching DOM insertions prevents unnecessary layout thrashing.","codeExplanation":"The function `createStudentBadge()` uses modern ES6 template literal interpolation to construct a formatted HTML component with dynamic timestamps and student data. It checks for the existence of `document.body` and conditionally mounts the element to the live DOM."},{"projectId":"JS005","title":"Three Web Pillars: Coordinating Structure, Style & Behavior","difficulty":"Beginner","description":"Simulate the interaction between HTML (Structure), CSS (Style), and JavaScript (Behavior) by building a stateful Dark/Light theme toggler logic function.","exampleText":"// Toggling UI presentation state via JavaScript class management:\\nThemeController.toggle(); // Flips to \'dark\' mode\\nThemeController.toggle(); // Flips back to \'light\' mode","exampleOutput":"Toggle 1: { activeTheme: \'dark\', appliedClass: \'theme-dark\', computedStyles: { ... } }","answerFile":"./answers/JS005.js","learningOutcome":"Mastering the separation of concerns between HTML markup, CSS styling rules, and JS control logic.","logicExplanation":"1. **The Three Web Pillars Architecture**:\\n- **HTML (Structure)**: Defines document semantic hierarchy (`<h1>`, `<article>`, `<button>`).\\n- **CSS (Presentation)**: Defines visual styling rules, responsive layouts, colors, and transitions (`.theme-dark { background: #0f172a; }`).\\n- **JavaScript (Behavior & State)**: Manages application state, event handling, logic, and coordinates class toggling on the DOM.\\n\\n2. **Best Practice: Class Toggling vs Inline Styles**:\\nDirectly injecting styles via `element.style.backgroundColor = \'#000\'` is an anti-pattern: it bypasses CSS specificity, clutters the HTML DOM, and prevents CSS media queries or transitions from working cleanly. The senior engineering approach is to use JavaScript to toggle semantic CSS classes (`classList.add(\'theme-dark\')`), allowing CSS to manage visual rendering.\\n\\n3. **CSSOM & Render Tree Composition**:\\nWhen a class is added to `document.documentElement`, the browser updates the **CSS Object Model (CSSOM)** and recalculates styles across the Render Tree in a single hardware-accelerated pass.","codeExplanation":"The `ThemeController` singleton encapsulates theme state (`\'light\'` vs `\'dark\'`), maps each theme to its corresponding CSS class, toggles the class list on `document.documentElement`, and returns the active style configuration."},{"projectId":"JS006","title":"Local Server vs File Protocol (http:// vs file://) Verifier","difficulty":"Beginner","description":"Write a diagnostic script that inspects window.location to determine if a web application is running through a web server (e.g. VS Code Live Server) or opened via the local file:// protocol.","exampleText":"// Inspecting browser location security context:\\nverifyDevelopmentServer();","exampleOutput":"Protocol: http: | Host: 127.0.0.1:5500 | Server Verified: YES (CORS & ES Modules Enabled)","answerFile":"./answers/JS006.js","learningOutcome":"Understanding why modern web development requires a local HTTP development server (Live Server) for ES modules and fetch requests.","logicExplanation":"1. **The Browser Same-Origin Policy (SOP) & Security Model**:\\nBrowsers enforce strict security boundaries to prevent malicious local scripts from reading files on the user\'s hard drive. When an HTML file is opened directly from disk by double-clicking, the URL scheme is `file:///C:/...`.\\n\\n2. **Why `file://` Breaks Modern JavaScript**:\\n- **ES6 Modules (`import / export`)**: Blocked by CORS because browsers treat `file://` origins as `null` or unique, preventing cross-file script imports.\\n- **Fetch API & XMLHttpRequest**: Blocked by browser security when requesting local JSON data or API endpoints.\\n- **Web Workers & Service Workers**: Completely unsupported under `file://`.\\n\\n3. **The Role of VS Code Live Server (`http://127.0.0.1:5500`)**:\\nLive Server spins up a lightweight Node-based HTTP server. Scripts are served over `http://localhost`, satisfying browser Same-Origin checks and enabling hot-reloading on file save.","codeExplanation":"The diagnostic helper `verifyDevelopmentServer()` inspects `window.location.protocol` and `hostname`. It alerts developers if they are running under `file:` and provides actionable recommendations to launch VS Code Live Server."},{"projectId":"JS007","title":"Script Placement: Synchronous Parser Blocking vs Bottom Placement","difficulty":"Beginner","description":"Simulate the browser HTML parser encountering an inline synchronous script in the <head> before DOM elements exist, showing why getElementById returns null without proper placement.","exampleText":"// 1. Executing query inside <head> before body exists:\\nconst earlyElement = document.getElementById(\'app\'); // null!\\n\\n// 2. Executing query right before </body> tag:\\nconst readyElement = document.getElementById(\'app\'); // <div id=\'app\'>","exampleOutput":"Head Script: document.getElementById(\'app\') === null | Bottom Script: Found <div id=\'app\'>","answerFile":"./answers/JS007.js","learningOutcome":"Understanding HTML parsing sequence, DOM readiness, and script placement at the bottom of the body tag.","logicExplanation":"1. **Synchronous HTML Tokenizer Pipeline**:\\nThe browser parses HTML documents linearly from top to bottom, character by character. When the tokenizer encounters a `<script>` tag without `defer` or `async`:\\n- The HTML tokenizer **pauses immediately**.\\n- The browser executes the JavaScript code synchronously on the main thread.\\n- Only after the script finishes executing does the tokenizer resume parsing subsequent HTML lines.\\n\\n2. **The Dreaded `null` Element Trap**:\\nIf a script in the `<head>` executes `document.getElementById(\'main-title\')`, the parser has not yet reached the `<body>` where `<h1 id=\'main-title\'>` is defined. The DOM node does not exist in memory, causing the lookup to return `null`. Attempting to access `.textContent` or `.addEventListener` throws an unhandled `TypeError: Cannot set properties of null`.\\n\\n3. **The Solution: Placement Before `</body>`**:\\nPlacing scripts right before the closing `</body>` tag ensures that 100% of the HTML structure has been converted into DOM nodes before script execution begins.","codeExplanation":"The program constructs a mock DOM parser that simulates encountering a script in `<head>` versus at the bottom of `<body>`. It demonstrates the exact `null` reference failure and shows the safe bottom-placement pattern."},{"projectId":"JS008","title":"Modern Script Loading: Defer vs Async Attribute Lifecycle","difficulty":"Beginner","description":"Model and log the exact execution timeline and event ordering of scripts loaded with standard synchronous, defer, and async attributes relative to DOMContentLoaded.","exampleText":"<!-- Comparing script loading strategies in HTML header: -->\\n<script async src=\'analytics.js\'><\/script>\\n<script defer src=\'vendor.js\'><\/script>\\n<script defer src=\'app.js\'><\/script>","exampleOutput":"1. Async downloaded → Executes immediately | 2. HTML Parse finishes | 3. Defer scripts execute in FIFO order | 4. DOMContentLoaded fires","answerFile":"./answers/JS008.js","learningOutcome":"Mastering non-blocking script loading strategies with defer and async attributes.","logicExplanation":"1. **HTML5 Script Loading Specifications (§4.12.1)**:\\nModern web applications use script tag attributes to optimize the **Critical Rendering Path (CRP)** and prevent render-blocking JavaScript.\\n\\n2. **Attribute Comparison Matrix**:\\n- **Standard (`<script src=\'...\'>`)**: Pauses HTML parser, downloads synchronously, executes immediately, resumes parser. **Blocks page rendering!**\\n- **`async` (`<script async src=\'...\'>`)**: Downloads in the background without blocking the parser. The exact instant download finishes, the parser is interrupted and the script executes immediately. **Execution order is NOT guaranteed!** (Ideal for independent tracking scripts like Google Analytics).\\n- **`defer` (`<script defer src=\'...\'>`)**: Downloads in the background in parallel with HTML parsing. Execution is deferred until HTML parsing completes 100%. Scripts execute in **strict document order (FIFO)** right before the `DOMContentLoaded` event fires. (Ideal for application code and libraries).\\n\\n3. **Senior Architecture Rule**:\\nAlways use `<script defer>` in modern multi-file projects to guarantee that dependencies (e.g. `vendor.js`) execute before dependent application code (`app.js`).","codeExplanation":"The script models the browser lifecycle phases in an event timeline table, logging the exact sequence of HTML tokenization, parallel background downloads, `defer` FIFO execution order, and `DOMContentLoaded` firing."},{"projectId":"JS009","title":"Formatted Console Logging with Format Specifiers (%s, %d, %o)","difficulty":"Beginner","description":"Utilize C-style format specifiers (%s for strings, %d / %i for integers, %f for floats, %o for expandable objects) in console.log() to produce structured log messages.","exampleText":"// Parameterized console diagnostic logging:\\ngenerateStudentDiagnostic(\\n  \'Swadeep Mukherjee\',\\n  101,\\n  98.75,\\n  { batch: \'Weekend Pro\', center: \'Barrackpore\' }\\n);","exampleOutput":"Student [Swadeep Mukherjee] | Roll: 101 | Score: 98.750000 | Metadata: { batch: \'Weekend Pro\', ... }","answerFile":"./answers/JS009.js","learningOutcome":"Mastering string formatting and parameter interpolation in the console logging API.","logicExplanation":"1. **WHATWG Console Living Standard**:\\nThe browser console API implements printf-style format specifiers that allow runtime parameter substitution without manual string concatenation.\\n\\n2. **Supported Format Specifiers**:\\n- `%s`: Converts the corresponding argument to a String (`ToString` abstract operation).\\n- `%d` / `%i`: Converts the argument to an integer (`ToNumber` truncated to 32-bit int).\\n- `%f`: Converts the argument to a floating-point number.\\n- `%o` / `%O`: Outputs an interactive, expandable JavaScript Object tree with clickable property inspection.\\n- `%c`: Applies CSS styling to the logged text in browser DevTools.\\n\\n3. **Performance & Memory Benefits**:\\nUsing format specifiers avoids eager string template evaluation when logs are filtered out or processed by remote logging forwarders (like Datadog or Sentry).","codeExplanation":"The `generateStudentDiagnostic()` utility takes student metrics and formats them cleanly using `%s`, `%d`, `%f`, and `%o` format specifiers, outputting a structured diagnostic line with live object inspection."},{"projectId":"JS010","title":"Tabular Visualization with console.table() & Column Filtering","difficulty":"Beginner","description":"Create an array of complex student course enrollment objects and render them as a structured visual table filtered to show only specific properties (name, course, score).","exampleText":"// Formatted dataset with column whitelisting:\\nconst enrollments = [\\n  { studentId: 101, name: \'Swadeep\', score: 98, status: \'Active\' },\\n  { studentId: 102, name: \'Tuhina\', score: 95, status: \'Active\' }\\n];\\n\\nconsole.table(enrollments, [\'name\', \'score\', \'status\']);","exampleOutput":"┌─────────┬───────────┬───────┬──────────┐\\n│ (index) │   name    │ score │  status  │\\n├─────────┼───────────┼───────┼──────────┤\\n│    0    │ \'Swadeep\' │  98   │ \'Active\' │\\n└─────────┴───────────┴───────┴──────────┘","answerFile":"./answers/JS010.js","learningOutcome":"Using console.table() to inspect tabular datasets and filter columns during development.","logicExplanation":"1. **Chrome DevTools Protocol (CDP) Table Rendering**:\\n`console.table()` inspects iterable data structures (arrays of objects, 2D arrays, Maps) and constructs an interactive 2D grid in the DevTools console UI.\\n\\n2. **Column Whitelisting Mechanism**:\\nBy default, `console.table(data)` creates a column for every enumerable property across all objects in the array. For objects with 20+ properties, this creates visual clutter. Passing an optional array of property names as the second argument (`console.table(data, [\'name\', \'score\'])`) filters the table view to only show specified columns.\\n\\n3. **Development Productivity**:\\nUsing `console.table()` allows instant visualization of REST API payloads, SQL query results, and state arrays without writing manual display loops.","codeExplanation":"The solution defines a list of student enrollment records. It logs the full table dataset first, followed by a refined 3-column table filtered specifically for `[\'name\', \'score\', \'status\']`."},{"projectId":"JS011","title":"Hierarchical Diagnostic Logging with console.group() & groupCollapsed()","difficulty":"Beginner","description":"Organize a multi-step user login and lab session initialization workflow into collapsible, nested console groups.","exampleText":"// Simulating structured authentication session logging:\\nsimulateUserAuthentication(\'swadeep_coder\');","exampleOutput":"▼ 🔐 Authentication Pipeline: [swadeep_coder]\\n  ► Step 1: Credential Verification\\n  ► Step 2: Session Initialization\\n  ► Step 3: Background Telemetry (Collapsed)","answerFile":"./answers/JS011.js","learningOutcome":"Structuring complex application diagnostic logs using hierarchical and collapsible console groups.","logicExplanation":"1. **Console Group Indentation Stack**:\\nThe browser console maintains an internal stack of visual indentation levels. Calling `console.group(label)` pushes a new group frame onto the stack, indenting all subsequent log statements until a matching `console.groupEnd()` is called.\\n\\n2. **`console.group()` vs `console.groupCollapsed()`**:\\n- `console.group()`: Renders the group expanded by default (ideal for high-priority operational steps).\\n- `console.groupCollapsed()`: Renders the group closed by default (ideal for verbose telemetry, raw network payloads, or performance metrics that should not clutter the screen).\\n\\n3. **Critical Rule: Always Pair with `console.groupEnd()`**:\\nEvery `console.group()` call MUST have a corresponding `console.groupEnd()` call. Omitting `groupEnd()` will cause the rest of your application\'s logs to remain permanently indented inside the unclosed group.","codeExplanation":"The `simulateUserAuthentication()` function sets up a multi-tier logging structure. It demonstrates both expanded groups for critical authentication steps and collapsed groups for background telemetry, closing each tier cleanly."},{"projectId":"JS012","title":"Micro-Benchmarking with console.time() and console.timeEnd()","difficulty":"Beginner","description":"Compare the performance of string concatenation (+) vs Array.join() across 100,000 iterations using console.time() and console.timeEnd() timers.","exampleText":"// Running performance micro-benchmarks:\\nconsole.time(\'string-concat-timer\');\\n// ... execute 100,000 string concatenations\\nconsole.timeEnd(\'string-concat-timer\');","exampleOutput":"string-concatenation-plus: 12.45ms | array-push-and-join: 4.12ms | Verified output lengths match","answerFile":"./answers/JS012.js","learningOutcome":"Accurately measuring execution time and benchmarking algorithms in the JavaScript engine.","logicExplanation":"1. **High-Resolution Performance Timing**:\\n`console.time(label)` and `console.timeEnd(label)` interact with the engine\'s high-resolution monotonic timer (accurate to fractions of a millisecond). When `timeEnd(label)` is called with a matching label, the elapsed time is formatted and logged.\\n\\n2. **Underlying Memory Dynamics: Strings vs Arrays**:\\n- **String Concatenation (`str += \'a\'`)**: Strings in JavaScript are immutable primitive values. In each loop iteration, the engine must allocate a new string in memory and copy characters from the old string, resulting in $O(N^2)$ memory copying overhead for large loops.\\n- **Array Join (`arr.push(\'a\'); arr.join(\'\')`)**: The engine allocates a contiguous buffer array in the heap and performs a single optimized native C++ join operation at the end ($O(N)$).\\n\\n3. **Benchmarking Precautions**:\\nAlways ensure loop iterations are sufficiently large (e.g. 100,000+) to overcome JIT compiler warm-up latency and prevent TurboFan from optimizing away dead code.","codeExplanation":"The script runs 100,000 iterations comparing repeated `+` string concatenation against array push followed by `.join(\'\')`. It measures both operations with `console.time()` and verifies output integrity."},{"projectId":"JS013","title":"Function Invocation Tracking with console.count() and countReset()","difficulty":"Beginner","description":"Build an event listener simulation that tracks button clicks and API retry attempts using labeled console.count() and console.countReset() counters.","exampleText":"// Tracking function execution count per label:\\nhandleUserAction(\'login_click\');\\nhandleUserAction(\'login_click\');\\n\\n// Resetting specific counter:\\nconsole.countReset(\'Action: login_click\');\\nhandleUserAction(\'login_click\');","exampleOutput":"Action: login_click: 1 | Action: login_click: 2 | Action: login_click: 3 | Resetting → Action: login_click: 1","answerFile":"./answers/JS013.js","learningOutcome":"Tracking execution frequency and event counts without maintaining manual state variables.","logicExplanation":"1. **Internal Counter Map in the Console Realm**:\\nThe JavaScript runtime maintains an internal dictionary mapping string labels to 32-bit unsigned integers. Every invocation of `console.count(label)` increments that specific label\'s counter and logs the current count.\\n\\n2. **`console.countReset(label)`**:\\nResets the counter for the given label back to zero. This is invaluable when testing component re-renders in React (e.g. counting how many times a component renders during a state update cycle) or tracking retry attempts in network request handlers.\\n\\n3. **Default Label Trap**:\\nIf no label argument is passed (`console.count()`), the counter defaults to the string `\'default\'`, which risks colliding with other unlabelled count calls across your codebase.","codeExplanation":"The script simulates a user interaction tracker. It fires multiple simulated click events, increments the count automatically, resets the counter, and verifies that the count starts back from 1."},{"projectId":"JS014","title":"Execution Stack Trace Inspection with console.trace()","difficulty":"Beginner","description":"Write a nested utility pipeline where a deeply nested data validator calls console.trace() to inspect the full Call Stack and origin of the caller.","exampleText":"// Triggering deep execution stack trace from nested calculation:\\nconst cart = [\\n  { name: \'JS Handbook\', price: 1000, discount: 0.1 },\\n  { name: \'VIP Pass\', price: 5000, discount: 0.75 } // Triggers trace!\\n];\\n\\nprocessCheckoutCart(cart);","exampleOutput":"console.trace: HighDiscountInvestigation\\n  sanitizeDiscount @ JS014.js:9\\n  calculateItemPrice @ JS014.js:15\\n  processCheckoutCart @ JS014.js:20","answerFile":"./answers/JS014.js","learningOutcome":"Using call stack tracing to debug deeply nested function invocations and trace execution flow.","logicExplanation":"1. **V8 Execution Call Stack Frame Capture**:\\nWhen `console.trace(label)` is called, the V8 engine pauses and inspects the active **Call Stack Pointer**. It serializes the chain of execution context frames, capturing:\\n- The active function name\\n- The caller function name\\n- The source file URL and line/column numbers\\n\\n2. **Debugging Deeply Nested Callback Pipelines**:\\nIn complex modular applications (e.g. Redux middleware, Express request pipelines, or payment calculators), a utility function may be invoked from 20 different places. `console.trace()` allows you to instantly identify which controller or user action triggered that utility without stopping execution with a breakpoint.\\n\\n3. **Trace vs Throwing Errors**:\\nThrowing an `Error` halts script execution, whereas `console.trace()` logs the full stack trace while allowing the function to complete normally.","codeExplanation":"The program constructs a 3-tier e-commerce checkout calculation pipeline (`processCheckoutCart` → `calculateItemPrice` → `sanitizeDiscount`). When a discount anomaly is detected, `console.trace()` logs the complete call stack path."},{"projectId":"JS015","title":"Strict Mode: Accidental Global Variable Leak Prevention","difficulty":"Beginner","description":"Demonstrate how \'use strict\' eliminates silent global scope leaks by writing a function that attempts to assign to an undeclared identifier and catching the ReferenceError.","exampleText":"// Enforcing strict mode inside function scope:\\nfunction runSafeModule() {\\n  \'use strict\';\\n  \\n  // Attempting undeclared assignment:\\n  unintentionalGlobal = \'This will throw ReferenceError!\';\\n}\\n\\nrunSafeModule();","exampleOutput":"Strict Mode Active: Caught [ReferenceError] → unintentionalGlobal is not defined","answerFile":"./answers/JS015.js","learningOutcome":"Understanding the security and scope safety advantages of strict mode in modern JavaScript.","logicExplanation":"1. **Sloppy Mode Scope Leaks (ECMAScript `PutValue`)**:\\nIn non-strict (sloppy) mode, when the engine encounters an assignment to an undeclared identifier (`x = 100`), it searches the Scope Chain. If `x` is not found anywhere up to the global scope, the engine automatically creates a new property `window.x = 100` on the global object. This is known as an **Accidental Global Variable Leak**.\\n\\n2. **Why Global Leaks are Dangerous**:\\n- **Memory Leaks**: Global variables are never garbage-collected by V8 as long as the page is open.\\n- **Name Collisions**: Other scripts or third-party libraries might overwrite `window.x`.\\n- **Security Vulnerabilities**: Sensitive tokens or student records leaked to `window` are exposed to XSS attacks.\\n\\n3. **Strict Mode Invariant (§10.2.1)**:\\nAdding `\'use strict\';` transforms this silent failure into a compile/runtime `ReferenceError: x is not defined`, forcing developers to explicitly declare all variables with `const`, `let`, or `var`.","codeExplanation":"The function `runSafeModule()` enforces `\'use strict\'`, wraps an undeclared variable assignment in a `try...catch` block, catches the `ReferenceError`, and verifies that the global scope remains completely clean."},{"projectId":"JS016","title":"Strict Mode: \'this\' Keyword Coercion Defense","difficulty":"Beginner","description":"Prove that in \'use strict\', invoking a standalone function sets this to undefined rather than coercing it to the global window / global object.","exampleText":"// Comparing \'this\' binding in sloppy vs strict mode:\\nfunction getSloppyThis() { return this; }\\nfunction getStrictThis() { \'use strict\'; return this; }\\n\\ngetSloppyThis(); // Returns window / global\\ngetStrictThis(); // Returns undefined","exampleOutput":"Sloppy Mode this === window: true | Strict Mode this === undefined: true","answerFile":"./answers/JS016.js","learningOutcome":"Understanding how strict mode fixes the historical security flaw of accidental global \'this\' binding.","logicExplanation":"1. **ECMAScript Specification OrdinaryCallBindThis (§9.2.1.2)**:\\nWhen a standard function is invoked without a receiver object (e.g. `foo()` instead of `obj.foo()`):\\n- **In Sloppy Mode**: If the `this` argument is `undefined` or `null`, the engine automatically coerces `this` to the Global Object (`window` in browsers, `global` in Node).\\n- **In Strict Mode**: The coercion step is skipped. `this` remains strictly `undefined`.\\n\\n2. **The Accidental Constructor Invocation Hazard**:\\nIn older JavaScript, if a developer wrote `Student(\'Swadeep\')` instead of `new Student(\'Swadeep\')`, `this.name = \'Swadeep\'` would silently overwrite `window.name`! In strict mode, `this` is `undefined`, causing `this.name` to throw `TypeError: Cannot set properties of undefined`, instantly alerting the developer to the missing `new` keyword.\\n\\n3. **ES Modules & Classes**:\\nAll ES6 Modules (`import/export`) and ES6 Classes are executed in Strict Mode automatically by specification.","codeExplanation":"The script defines two functions (`getSloppyThis` and `getStrictThis`). It compares their return values, proving that strict mode keeps `this` as `undefined` when called without an explicit receiver."},{"projectId":"JS017","title":"Strict Mode: Read-Only Property Mutation Defense","difficulty":"Beginner","description":"Demonstrate how strict mode prevents duplicate parameter names in function signatures and throws a TypeError when attempting to mutate frozen or read-only object properties.","exampleText":"// Enforcing object immutability under strict mode:\\n\'use strict\';\\n\\nconst config = Object.freeze({\\n  appName: \'CoderAccoTaxLMS\',\\n  taxRate: 0.18\\n});\\n\\n// Attempting property mutation:\\nconfig.taxRate = 0.25;","exampleOutput":"Caught [TypeError] → Cannot assign to read only property \'taxRate\' of object","answerFile":"./answers/JS017.js","learningOutcome":"Protecting immutable objects and preventing silent write failures in strict mode.","logicExplanation":"1. **Property Descriptor Attributes in V8**:\\nEvery JavaScript object property has internal descriptor flags:\\n- `[[Value]]`: The actual stored data\\n- `[[Writable]]`: Boolean determining if the value can be changed\\n- `[[Enumerable]]`: Boolean determining if it appears in `for...in` and `Object.keys()`\\n- `[[Configurable]]`: Boolean determining if the property can be deleted or its descriptor altered\\n\\n2. **`Object.freeze()` Behavior**:\\n`Object.freeze(obj)` sets `[[Writable]]: false` and `[[Configurable]]: false` on all own properties.\\n\\n3. **Sloppy Mode vs Strict Mode Failure Modes**:\\n- In sloppy mode, attempting to write `obj.frozenProp = 100` **fails silently** — the value does not change, but no error is thrown, leading to silent calculation bugs!\\n- In strict mode, the engine throws an immediate `TypeError: Cannot assign to read only property`, guaranteeing that data corruption is caught instantly.","codeExplanation":"The function `enforceImmutableConfig()` freezes a system settings object, executes an assignment under strict mode, catches the resulting `TypeError`, and verifies that the frozen property value remained strictly unmodified."},{"projectId":"JS018","title":"Lexical Grammar: Comment Taxonomy & JSDoc Standards","difficulty":"Beginner","description":"Write an enterprise utility module featuring single-line comments (//), multi-line comments (/* */), and comprehensive JSDoc (@param, @returns, @author, @example) annotations.","exampleText":"// Calculating student grade with JSDoc typing contract:\\nevaluateStudentGrade(\'Swadeep Mukherjee\', 95, 100);\\nevaluateStudentGrade(\'Debangshu\', 82, 100);","exampleOutput":"Evaluation Result: { student: \'Swadeep\', percentage: \'95.0%\', grade: \'A+\', isPassed: true }","answerFile":"./answers/JS018.js","learningOutcome":"Writing professional, self-documenting code with JSDoc annotations for IDE autocompletion.","logicExplanation":"1. **V8 Scanner & Lexer Tokenization Phase**:\\nBefore JavaScript code is compiled into bytecode by Ignition, the V8 Scanner strips all comments and whitespace, classifying them as **Trivia Tokens**. Comments have zero runtime memory overhead and zero execution cost.\\n\\n2. **Comment Taxonomy**:\\n- `// Single-line comment`: Used for inline explanations and quick notes.\\n- `/* Multi-line block */`: Used for architectural summaries and temporarily disabling code.\\n- `/** JSDoc block */`: Structured metadata standard parsed by IDEs (VS Code) and TypeScript compiler to provide static type analysis and rich hover tooltips without requiring TypeScript compilation.\\n\\n3. **Core JSDoc Tags for Senior Developers**:\\n- `@param {type} name - description`: Documents input parameters and types.\\n- `@returns {type}`: Documents the return type.\\n- `@throws {ErrorType}`: Documents runtime exceptions.\\n- `@example`: Provides runnable copy-paste usage examples.","codeExplanation":"The script implements `evaluateStudentGrade()` with full JSDoc typing specifications. It documents parameter boundaries, return shapes, exception cases, and author metadata."},{"projectId":"JS019","title":"Automatic Semicolon Insertion (ASI): The Restricted return Trap","difficulty":"Beginner","description":"Analyze JavaScript\'s Automatic Semicolon Insertion (ASI) parser rules when a newline occurs directly after a return statement, comparing broken vs correct object return patterns.","exampleText":"// Comparing ASI Line-Break Return vs Same-Line Return:\\n// Function 1: Broken return (ASI inserts semicolon after return keyword)\\nfunction getBroken() {\\n  return\\n  { student: \'Swadeep\', score: 98 };\\n}\\n\\n// Function 2: Correct same-line return\\nfunction getCorrect() {\\n  return { student: \'Swadeep\', score: 98 };\\n}","exampleOutput":"Broken Return Result (ASI returned undefined): undefined | Correct Return: { student: \'Swadeep\', ... }","answerFile":"./answers/JS019.js","learningOutcome":"Avoiding subtle undefined return bugs caused by ECMAScript Automatic Semicolon Insertion restricted productions.","logicExplanation":"1. **ECMAScript Specification §11.9.1 Rules of ASI**:\\nJavaScript allows developers to omit semicolons because the lexer automatically inserts them during parsing according to three strict rules.\\n\\n2. **The Restricted Productions Rule**:\\nECMAScript specifies that no **LineTerminator** is permitted between specific keywords and their following expressions. These restricted keywords are:\\n- `return`\\n- `throw`\\n- `break`\\n- `continue`\\n- `yield`\\n\\n3. **The Silent `undefined` Return Trap**:\\nIf you write:\\n```js\\nreturn\\n{\\n  status: \'OK\'\\n};\\n```\\nThe parser encounters `return` followed by a newline. Under the restricted production rule, it **automatically inserts a semicolon**: `return;`. The function exits immediately with `undefined`, and the block `{ status: \'OK\' }` is treated as dead code!\\n\\n4. **Defensive Patterns**:\\nAlways place the opening bracket on the same line (`return {`), or wrap multiline returns in parentheses (`return (...)`), which is the universal standard in React JSX.","codeExplanation":"The script demonstrates three functions: `getStudentScoreBroken()` (which returns `undefined` due to ASI), `getStudentScoreCorrect()`, and `getStudentScoreParenthesized()` (the standard React JSX pattern)."},{"projectId":"JS020","title":"Automatic Semicolon Insertion (ASI): Leading Parenthesis & Bracket Pitfalls","difficulty":"Beginner","description":"Illustrate how omitting semicolons before lines starting with ( or [ causes the JavaScript engine to interpret the previous line as a function call or array index lookup.","exampleText":"// Demonstrating defensive semicolons in semicolon-free code:\\nconst user = \'Swadeep\'\\n;(function() {\\n  console.log(\'Defensive semicolon protects IIFE!\');\\n})()\\n\\nconst a = 1, b = 2\\n;[a, b].forEach(val => console.log(val))","exampleOutput":"Defensive leading semicolon prevented: TypeError: \'Swadeep\' is not a function","answerFile":"./answers/JS020.js","learningOutcome":"Understanding leading parenthesis hazards in semicolon-free code and adopting defensive semicolon patterns.","logicExplanation":"1. **When ASI Does NOT Insert Semicolons**:\\nASI will **never** insert a semicolon if the next token can be parsed as a legal continuation of the current statement. Characters like `(`, `[`, `/`, `+`, and `-` are valid statement continuations!\\n\\n2. **The Leading Parenthesis `(` Trap**:\\n```js\\nconst user = \'Swadeep\'\\n(function() { ... })()\\n```\\nBecause `(` can represent a function call, the parser reads this as: `const user = \'Swadeep\'(function() { ... })()`. It attempts to invoke the string `\'Swadeep\'` as a function, throwing `TypeError: \'Swadeep\' is not a function`.\\n\\n3. **The Leading Bracket `[` Trap**:\\n```js\\nconst a = 1\\n[1, 2, 3].forEach(...)\\n```\\nThe parser reads this as property indexing: `1[1, 2, 3]`, causing runtime exceptions.\\n\\n4. **The Defensive Semicolon Standard**:\\nDevelopers using standard semicolon-free style (like StandardJS) prepend a defensive semicolon before any line starting with `(` or `[`:\\n```js\\n;(function() { ... })()\\n;[a, b].forEach(...)\\n```","codeExplanation":"The script illustrates both the leading parenthesis IIFE hazard and the leading bracket array access hazard. It demonstrates how defensive leading semicolons (`;(...)` and `;[...]`) protect code execution."}]'),l={projectCategory:O,subject:D,board:P,class:"Module 001_001 · Core Foundations",tools:R,institute:B,projects:L};function z(){const[o,d]=c.useState(null);return c.useEffect(()=>{const i=Object.assign({"./topic8_files/answers/JS001.js":g,"./topic8_files/answers/JS002.js":m,"./topic8_files/answers/JS003.js":h,"./topic8_files/answers/JS004.js":f,"./topic8_files/answers/JS005.js":S,"./topic8_files/answers/JS006.js":b,"./topic8_files/answers/JS007.js":y,"./topic8_files/answers/JS008.js":v,"./topic8_files/answers/JS009.js":w,"./topic8_files/answers/JS010.js":T,"./topic8_files/answers/JS011.js":x,"./topic8_files/answers/JS012.js":k,"./topic8_files/answers/JS013.js":C,"./topic8_files/answers/JS014.js":M,"./topic8_files/answers/JS015.js":E,"./topic8_files/answers/JS016.js":_,"./topic8_files/answers/JS017.js":j,"./topic8_files/answers/JS018.js":A,"./topic8_files/answers/JS019.js":I,"./topic8_files/answers/JS020.js":J}),r={};Object.keys(i).forEach(e=>{const a=e.split("/").pop();r[a]=i[e]});const u=l.projects.map(e=>{const t=(e.answerFile||"").split("/").pop(),s=r[t];return s||console.warn(`⚠ Missing code file: ${t}`),{...e,answer:s||`// File "${t}" not found in answers folder`}});d({...l,projects:u})},[]),o?n.jsx(p,{data:o}):n.jsx("div",{className:"p-6 text-slate-400 flex items-center justify-center min-h-[300px]",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),n.jsx("span",{children:"Loading Getting Started projects and exercises..."})]})})}export{z as default};
