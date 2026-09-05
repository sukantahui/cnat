import{b as a,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import{F as l}from"./FAQTemplate-BHhlgA96.js";import{P as c}from"./PlainTextPrint-C08xhKA4.js";import{J as d}from"./JavaScriptEditableCodeBlock-0Pr6j_Lc.js";import"./vendor-icons-CH1iX9C8.js";import"./vendor-monaco-Bv7hoEkV.js";const p=[{question:"What are the four primary ways to execute JavaScript?",shortAnswer:"1. DevTools Console, 2. Inline <script>, 3. External .js file, 4. ES Modules (<script type='module'>).",explanation:"DevTools is used for testing; inline scripts embed code in HTML; external scripts provide caching and maintainability; ES Modules offer scoped imports/exports.",hint:"Console, inline tags, external files, and ES module scripts.",level:"basic",codeExample:`<script src='app.js'><\/script>
<script type='module' src='main.js'><\/script>`},{question:"Why are external JavaScript files preferred over inline scripts?",shortAnswer:"They allow browser caching, clean separation of concerns, and reuse across multiple pages.",explanation:"External scripts can be minified, bundled, and cached by browsers and CDNs, reducing bandwidth and boosting page load speeds across multiple page visits.",hint:"Browser caching, cleaner HTML, and cross-page reusability.",level:"basic",codeExample:"<script src='bundle.js' defer><\/script>"},{question:"How does <script type='module'> differ from a standard <script> tag?",shortAnswer:"Modules have their own lexical scope, use strict mode by default, support import/export, and defer automatically.",explanation:"Unlike classic scripts that leak variables to window, top-level variables in an ES module are private to that module. They are also deferred by default.",hint:"Scoped variables, strict mode by default, and automatic defer.",level:"intermediate",codeExample:`<script type='module'>
  import { init } from './app.js';
  init();
<\/script>`},{question:"What does the browser DevTools Console REPL stand for?",shortAnswer:"Read-Eval-Print-Loop: Reads input, evaluates code, prints output, loops for next command.",explanation:"The Console REPL executes single or multi-line JavaScript statements within the active page's execution context, allowing instant testing.",hint:"Read → Eval → Print → Loop.",level:"basic",codeExample:"// Type in DevTools console: 10 + 20 → Outputs 30"},{question:"What is the 'nomodule' attribute used for on script tags?",shortAnswer:"It serves as a fallback script for legacy browsers that do not support modern ES modules.",explanation:"Modern browsers ignore scripts with nomodule and execute type='module'. Older browsers ignore type='module' and execute the nomodule fallback.",hint:"Fallback mechanism for legacy browsers without ES module support.",level:"intermediate",codeExample:`<script type='module' src='modern.js'><\/script>
<script nomodule src='legacy-fallback.js'><\/script>`},{question:"What is dynamic import() and when should you use it?",shortAnswer:"An asynchronous function that loads JavaScript modules on demand at runtime returning a Promise.",explanation:"Dynamic imports allow code-splitting, lazy-loading heavy components or charts only when a user clicks a button or navigates to a specific route.",hint:"Lazy-loading modules at runtime via Promise-based import().",level:"advanced",codeExample:`const module = await import('./heavyChart.js');
module.renderChart();`},{question:"What is the global scope pollution problem with classic scripts?",shortAnswer:"Variables declared with 'var' or function declarations attach directly to window, causing naming collisions.",explanation:"If two independent third-party scripts declare var config = {}, the second script overwrites the first. ES Modules and closures solve this problem.",hint:"Global window property collisions caused by var and top-level functions.",level:"intermediate",codeExample:`// Classic script:
var username = 'Swadeep';
console.log(window.username); // 'Swadeep' (Pollutes global window!)`},{question:"What is the purpose of the 'crossorigin' attribute on script tags?",shortAnswer:"Configures CORS credentials when loading external scripts from third-party CDNs.",explanation:"Adding crossorigin='anonymous' allows error logging in window.onerror with complete stack traces instead of generic 'Script error'.",hint:"Enables detailed error traces for third-party CDN scripts.",level:"advanced",codeExample:"<script src='https://cdn.example.com/lib.js' crossorigin='anonymous'><\/script>"},{question:"What is Subresource Integrity (SRI) in script tags?",shortAnswer:"A security feature that verifies the cryptographic hash of a CDN script before executing it.",explanation:"SRI uses the integrity attribute (e.g. integrity='sha384-...') to ensure that if a CDN is compromised, modified malicious code is blocked from running.",hint:"Cryptographic hash verification for external CDN scripts.",level:"advanced",codeExample:"<script src='lib.js' integrity='sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' crossorigin='anonymous'><\/script>"},{question:"How does the browser evaluate multi-line code in DevTools Console?",shortAnswer:"Press Shift + Enter to create a new line without executing; press Enter on the final line to execute.",explanation:"Shift + Enter inserts a physical newline character, allowing developers to write complete multi-line functions, loops, and object literals.",hint:"Shift + Enter for newlines; Enter to execute.",level:"basic",codeExample:"// Shift + Enter creates clean multi-line code blocks in DevTools Console"},{question:"What is the difference between synchronous script execution and asynchronous script execution?",shortAnswer:"Synchronous halts HTML parsing until script completes; asynchronous downloads in background without pausing parsing.",explanation:"Synchronous scripts block the UI thread during download and execution. Asynchronous scripts (defer/async) permit continuous rendering.",hint:"Sync blocks HTML parser; async downloads in parallel.",level:"basic",codeExample:`<script src='app.js'><\/script> <!-- Sync -->
<script src='app.js' defer><\/script> <!-- Async download -->`},{question:"How can JavaScript inject another script dynamically at runtime?",shortAnswer:"By creating a <script> DOM element, setting its src, and appending it to document.head.",explanation:"Dynamic script injection is used by analytics tools, ad networks, and polyfills to load resources conditionally on the fly.",hint:"document.createElement('script') → appendChild(head).",level:"intermediate",codeExample:`const s = document.createElement('script');
s.src = 'widget.js';
document.head.appendChild(s);`},{question:"What is the $_ variable in Chrome DevTools Console?",shortAnswer:"A magic variable that returns the evaluated result of the previous console expression.",explanation:"If you run 25 * 4 (output 100), running $_ + 50 in the next console line yields 150 without re-typing.",hint:"$_ evaluates to the last returned console result.",level:"intermediate",codeExample:`> 25 * 4
< 100
> $_ + 50
< 150`},{question:"What is the $0 variable in Chrome DevTools Console?",shortAnswer:"A magic variable referencing the currently selected DOM node in the Elements panel.",explanation:"Clicking an element in the Elements tab and typing $0.style.color = 'red' in the Console mutates that specific element immediately.",hint:"$0 points to the currently inspected DOM element.",level:"basic",codeExample:"> $0.textContent = 'Updated via $0';"},{question:"What is the 'clear()' command in DevTools Console?",shortAnswer:"A utility function that clears all accumulated logs and outputs from the console panel.",explanation:"Typing clear() or pressing Ctrl + L (Windows) / Cmd + K (Mac) clears the console screen.",hint:"clear() or Ctrl + L clears the console.",level:"basic",codeExample:"> clear(); // Clears all console messages"},{question:"What happens if an external script tag has a syntax error?",shortAnswer:"The engine fails to compile that specific script, throws a SyntaxError, and continues parsing the rest of HTML.",explanation:"Syntax errors prevent that single script file from executing. Other independent scripts loaded separately will still attempt execution.",hint:"Compilation fails for that file; SyntaxError is logged.",level:"intermediate",codeExample:"// SyntaxError in file1.js does not prevent file2.js from executing"},{question:"How do you detect if a script is running inside a Web Worker or main thread?",shortAnswer:"Check if typeof window === 'undefined' and typeof importScripts === 'function'.",explanation:"Web Workers do not have access to the window object or DOM, but they do have self and WorkerGlobalScope.",hint:"Web Workers lack window and document objects.",level:"advanced",codeExample:"const isWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;"},{question:"What is the purpose of document.currentScript?",shortAnswer:"Returns the <script> element whose script is currently being processed by the browser.",explanation:"Useful for scripts that need to inspect their own data attributes (e.g. data-api-key) or identify their host CDN URL dynamically.",hint:"References the currently executing <script> tag.",level:"advanced",codeExample:"const apiKey = document.currentScript.getAttribute('data-api-key');"},{question:"What is the difference between IIFE and ES Modules for code privacy?",shortAnswer:"IIFE uses function closures to hide variables; ES Modules have native file-level lexical scope isolation.",explanation:"Before ES6, IIFE was the only way to avoid global scope pollution. ES Modules provide cleaner, standardized file-level encapsulation natively.",hint:"IIFE = function closure scope; ES Module = native file scope.",level:"intermediate",codeExample:`(function() { var secret = 1; })(); // IIFE
// vs ES Module: const secret = 1; (Private to file)`},{question:"What is Content Security Policy (CSP) and how does it restrict script execution?",shortAnswer:"An HTTP header that restricts which script sources, CDNs, and inline scripts are permitted to run in the browser.",explanation:"CSP mitigates XSS by blocking unauthorized inline <script> tags and disallowing eval() unless explicit nonces or hashes are provided.",hint:"HTTP header defining whitelisted script execution domains.",level:"expert",codeExample:"// Header: Content-Security-Policy: script-src 'self' https://trusted-cdn.com"},{question:"What is code minification and how does it impact script loading performance?",shortAnswer:"Removing whitespace, comments, and shortening variable names to reduce file download size over the network.",explanation:"Minified files (e.g. app.min.js) are up to 70% smaller, resulting in faster download times and reduced mobile cellular data consumption.",hint:"Shrinks file size by stripping whitespace and mangling identifiers.",level:"basic",codeExample:"// function add(a,b){return a+b} (Minified)"},{question:"What is Gzip / Brotli compression for JavaScript assets?",shortAnswer:"HTTP server-level byte compression algorithms that shrink script transfers by up to 80%.",explanation:"The web server compresses .js files into Brotli (.br) or Gzip (.gz), and the browser decompresses them automatically upon receipt.",hint:"Server-to-client HTTP byte compression.",level:"intermediate",codeExample:"// Content-Encoding: br (Brotli compression)"},{question:"How do modern build tools like Vite bundle JavaScript scripts for production?",shortAnswer:"They tree-shake unused code, transpile modern syntax, bundle modules, and inject content-hashed filenames.",explanation:"Vite outputs production assets with content hashes (e.g. app-8f3a1.js) to enable immutable long-term browser cache headers.",hint:"Tree-shaking + bundling + content-hashed cache busting.",level:"advanced",codeExample:"<!-- Built asset: <script src='/assets/app-9a7b2.js'><\/script> -->"},{question:"What happens when you pass a function to window.onerror?",shortAnswer:"It registers a global exception handler that catches uncaught runtime errors across the entire webpage.",explanation:"window.onerror receives the error message, source URL, line number, column number, and error object, allowing automated error tracking.",hint:"Global error logging hook in browser.",level:"advanced",codeExample:"window.onerror = (msg, url, line) => console.log('Global Error:', msg, line);"},{question:"What is the unhandledrejection event in browser JavaScript?",shortAnswer:"An event fired when a JavaScript Promise is rejected without an attached .catch() handler.",explanation:"Listening for unhandledrejection prevents silent async failures and allows developers to log unhandled Promise errors to monitoring servers.",hint:"Catches unhandled Promise rejections globally.",level:"advanced",codeExample:"window.addEventListener('unhandledrejection', (e) => console.error('Unhandled Promise:', e.reason));"}],h=`================================================================================\r
CODER & ACCOTAX - JAVASCRIPT COMPLETE ROADMAP\r
MODULE [001_001_getting-started-with-javascript]: Getting Started with JavaScript\r
TOPIC [4]: Running JavaScript in Browser Console & Script Files\r
Educator: Sukanta Hui | Barrackpore, West Bengal, India\r
================================================================================\r
\r
1. TOPIC OVERVIEW & DETAILED CONCEPT DISCUSSION\r
--------------------------------------------------------------------------------\r
- Execution Pathways for JavaScript:\r
  1. Browser DevTools Console: A live REPL (Read-Eval-Print-Loop) for testing statements, \r
     inspecting DOM elements, and debugging runtime states instantly.\r
  2. Inline Scripts (<script> ... <\/script>): Embedding executable JS code directly inside \r
     the HTML document body or head.\r
  3. External Scripts (<script src="app.js"><\/script>): Referencing separate .js source \r
     files stored on disk or CDNs, allowing browser caching and clean separation of concerns.\r
  4. ES Modules (<script type="module" src="main.js">): Modern JavaScript module systems \r
     supporting native 'import' and 'export' syntax with strict mode enabled by default.\r
\r
2. IN-DEPTH TECHNICAL KNOW-HOW & ENGINE RUNTIME MECHANICS\r
--------------------------------------------------------------------------------\r
- Script Parsing & Execution Lifecycle:\r
  * Document Parsing Interruption: In classic <script>, the HTML parser halts completely \r
    while the browser fetches and executes the script.\r
  * Scope Isolation:\r
    - Classic scripts pollute the global 'window' namespace with var declarations and \r
      top-level function names.\r
    - ES Modules (type="module") possess their own file-level lexical scope; variables \r
      never leak into the global window object.\r
  * Execution Context Stack: Top-level scripts create the Global Execution Context (GEC), \r
    allocating global lexical environments and binding variables.\r
\r
3. EXCEPTIONS, CORNER CASES, COERCIONS & QUIRKS\r
--------------------------------------------------------------------------------\r
[!] TypeError: Cannot read properties of null: Occurs when a script in <head> queries \r
    DOM elements before the HTML parser has built the <body>. Fix: Use 'defer'.\r
[!] CORS block on file:// with ES Modules: <script type="module"> cannot load local files \r
    when opened directly from file explorer. Fix: Launch with Live Server (HTTP).\r
[!] Console Persistence: Code run in the DevTools Console is temporary and vanishes \r
    upon page reload unless preserved via DevTools Local Overrides.\r
\r
4. 💎 SPECIAL LANGUAGE FEATURES & SENIOR PRO SECRETS\r
--------------------------------------------------------------------------------\r
- Dynamic import() Function: Dynamically load JavaScript modules on demand at runtime \r
  (e.g., const { chart } = await import('./chart.js')) for massive bundle size reductions.\r
- DevTools $_ and $0 Magic: In the Console tab, $_ returns the value of the last evaluated \r
  expression, and $0 references the currently inspected DOM node.\r
- Script nomodule Fallback: Provide modern bundles to modern browsers (<script type="module">) \r
  and legacy bundles (<script nomodule>) to older browsers seamlessly.\r
\r
5. PRACTICAL ENTERPRISE USE-CASES & CODE EXAMPLES\r
--------------------------------------------------------------------------------\r
Example 1: Dynamic Script Injection\r
function injectScript(url) {\r
  return new Promise((resolve, reject) => {\r
    const script = document.createElement("script");\r
    script.src = url;\r
    script.onload = () => resolve(\`Loaded \${url}\`);\r
    script.onerror = () => reject(new Error(\`Failed to load \${url}\`));\r
    document.head.appendChild(script);\r
  });\r
}\r
\r
Example 2: ES Module Import / Export\r
// mathUtils.js:\r
export const add = (a, b) => a + b;\r
// app.js:\r
import { add } from "./mathUtils.js";\r
console.log("Sum:", add(10, 20));\r
\r
Example 3: Safe DOM Ready Listener\r
if (document.readyState === "loading") {\r
  document.addEventListener("DOMContentLoaded", initApp);\r
} else {\r
  initApp();\r
}\r
\r
Example 4: DevTools Console Tabular Profiling\r
const students = [\r
  { name: "Swadeep", lab: "Barrackpore", grade: "A+" },\r
  { name: "Tuhina", lab: "Naihati", grade: "A+" }\r
];\r
console.table(students, ["name", "grade"]);\r
\r
Example 5: Modern Dynamic Import with Async/Await\r
async function loadAnalytics() {\r
  const module = await import("./analytics.js");\r
  module.trackPageView("/home");\r
}\r
\r
6. COMPARATIVE SPECIFICATION CHEAT-SHEET\r
--------------------------------------------------------------------------------\r
+----------------------+--------------------+---------------------+--------------------+\r
| Execution Method     | Scope Encapsulation| Browser Caching     | Default Strict Mode|\r
+----------------------+--------------------+---------------------+--------------------+\r
| DevTools Console     | Global (window)    | ❌ None             | ❌ Sloppy by default|\r
| Inline <script>      | Global (window)    | ❌ Inlined in HTML  | ❌ Needs 'use strict|\r
| External .js file    | Global (window)    | ✓ Full HTTP Caching | ❌ Needs 'use strict|\r
| <script type=module> | ✓ Module Scoped    | ✓ Full HTTP Caching | ✓ STRICT BY DEFAULT|\r
+----------------------+--------------------+---------------------+--------------------+\r
\r
7. INTERVIEW & VIVA QUICK-FIRE KNOWLEDGE POINTS\r
--------------------------------------------------------------------------------\r
Q1: What are the advantages of external script files over inline scripts?\r
A1: External files enable browser HTTP caching, clean separation of concerns, easier \r
    code maintenance, and reuse across multiple HTML pages.\r
\r
Q2: How do ES Modules (<script type="module">) differ from classic scripts?\r
A2: ES Modules are scoped to the file (no global pollution), execute in strict mode by default, \r
    support import/export, and are deferred automatically without blocking HTML parsing.\r
\r
Q3: What is the DevTools Console REPL?\r
A3: Read-Eval-Print-Loop: It reads the user's input expression, evaluates it via the V8 engine, \r
    prints the result to the console, and loops waiting for the next input.\r
\r
Q4: What happens if an external script fails to load (404 error)?\r
A4: The browser fires an 'error' event on the script tag, logs a 404 network error in the Console, \r
    and halts execution of that script without crashing other independent scripts.\r
================================================================================\r
`,m=`/**\r
 * Topic 4 Demo: Running JavaScript in Browser Console & Script Files\r
 * Module: 001_001_getting-started-with-javascript\r
 * Educator: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
console.log("==================================================");\r
console.log("TOPIC 4: RUNNING JS IN CONSOLE & SCRIPT FILES");\r
console.log("==================================================");\r
\r
// ─── 1. SCRIPT EXECUTION CONTEXT LIFECYCLE TRACKER ───────────────\r
console.log("");\r
console.log("1. Script Lifecycle & Execution Order Tracker:");\r
\r
const executionLog = [];\r
\r
function recordExecutionPhase(phaseName, description) {\r
  const entry = {\r
    timestamp: new Date().toISOString().split("T")[1].replace("Z", ""),\r
    phase: phaseName,\r
    detail: description,\r
    context: typeof window !== "undefined" ? "Browser Window" : "Node.js Environment"\r
  };\r
  executionLog.push(entry);\r
  console.log(\`[\${entry.timestamp}] \${phaseName}: \${description}\`);\r
}\r
\r
recordExecutionPhase("PARSING", "Initial HTML parser encounters <script> tag");\r
recordExecutionPhase("COMPILING", "V8 engine tokenizes and compiles script to bytecode");\r
recordExecutionPhase("EXECUTING", "Top-level synchronous JavaScript statements execute");\r
\r
// ─── 2. ES MODULE SCOPE VS GLOBAL SCOPE ENCAPSULATION ────────────\r
console.log("");\r
console.log("2. Scope Encapsulation: Classic Script vs ES Module:");\r
\r
// Classic script attaches to global window (Global Pollution)\r
// In ES Module (type="module"), top-level variables remain module-scoped!\r
const ModuleScopeSimulator = (function() {\r
  const privateModuleSecret = "BarrackporeLab_Encrypted_Key_2026";\r
  const publicApi = {\r
    courseName: "JS-PRO-101",\r
    getPublicGreeting: (name) => \`Welcome \${name} to Module Scope Sandbox!\`\r
  };\r
\r
  return {\r
    publicApi,\r
    isPrivateAccessible: typeof privateModuleSecret !== "undefined"\r
  };\r
})();\r
\r
console.log("Exported Public API:", ModuleScopeSimulator.publicApi);\r
console.log("Can outer scope access privateModuleSecret directly?:", typeof privateModuleSecret === "undefined" ? "NO (Protected by Lexical Closure)" : "YES");\r
\r
// ─── 3. PROMISE-BASED DYNAMIC SCRIPT INJECTION LOADER ────────────\r
console.log("");\r
console.log("3. Dynamic Script Injection Pipeline Simulation:");\r
\r
function simulateDynamicScriptLoader(scriptUrl, timeoutMs = 1000) {\r
  console.log(\`Requesting dynamic script injection for: '\${scriptUrl}'\`);\r
  \r
  return new Promise((resolve, reject) => {\r
    const isMockSuccess = !scriptUrl.includes("broken-cdn");\r
    setTimeout(() => {\r
      if (isMockSuccess) {\r
        resolve({\r
          url: scriptUrl,\r
          status: "LOADED_AND_EVALUATED",\r
          executionDurationMs: 42,\r
          exports: { plugin: "ChartJS_Mock", version: "4.4.0" }\r
        });\r
      } else {\r
        reject(new Error(\`Network error 404 loading script: \${scriptUrl}\`));\r
      }\r
    }, 60);\r
  });\r
}\r
\r
simulateDynamicScriptLoader("https://cdn.coder.com/libs/chart.js")\r
  .then(res => {\r
    console.log("Dynamic Script Load Success:");\r
    console.table([res]);\r
  })\r
  .catch(err => console.error("Script Load Failed:", err.message));\r
\r
// ─── 4. DEVTOOLS CONSOLE REPL EXPRESSION EVALUATOR ───────────────\r
console.log("");\r
console.log("4. Console REPL Expression Evaluator Simulation:");\r
\r
function evaluateConsoleExpression(exprString) {\r
  console.log(\`Evaluating in Console REPL: > \${exprString}\`);\r
  try {\r
    // Simulating safe evaluation of pure expressions\r
    const result = new Function(\`return (\${exprString});\`)();\r
    return { expression: exprString, output: result, type: typeof result };\r
  } catch (err) {\r
    return { expression: exprString, error: err.message, status: "Evaluation Error" };\r
  }\r
}\r
\r
const repl1 = evaluateConsoleExpression("2 + 2 * 10");\r
const repl2 = evaluateConsoleExpression("[1, 2, 3].map(x => x ** 2)");\r
const repl3 = evaluateConsoleExpression("({ student: 'Swadeep', roll: 101 })");\r
\r
console.table([repl1, repl2, repl3]);\r
\r
// ─── 5. SCRIPT STRATEGY BENCHMARK & COMPARISON ───────────────────\r
console.log("");\r
console.log("5. Script Loading Strategy Feature Matrix:");\r
\r
const strategyMatrix = [\r
  { method: "DevTools Console", idealFor: "Ad-hoc debugging & quick testing", persistence: "Temporary (Lost on reload)" },\r
  { method: "Inline <script>", idealFor: "Critical bootstrapping scripts", persistence: "Embedded in HTML" },\r
  { method: "External .js file", idealFor: "Clean separation & browser caching", persistence: "Cached HTTP resource" },\r
  { method: "Module <script type=module>", idealFor: "Modern modular architecture (ESM)", persistence: "Scoped & Deferred by default" }\r
];\r
\r
console.table(strategyMatrix);\r
\r
console.log("");\r
console.log("✓ All 5 Topic 4 practical examples executed successfully.");\r
`;function w(){const s=a.useRef([]);a.useEffect(()=>{const r=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&o.target.classList.add("is-visible")})},{threshold:.08});return s.current.forEach(n=>{n&&r.observe(n)}),()=>r.disconnect()},[]);const t=r=>{r&&!s.current.includes(r)&&s.current.push(r)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          opacity: 0.99;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[e.jsxs("header",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-700/60 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"Module 001_001_getting-started-with-javascript · Topic 4"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-sky-300 tracking-tight leading-tight",children:"Running JavaScript in Browser Console & Script Files"}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:"Deconstruct the four execution environments of modern JavaScript. Explore the DevTools REPL, inline scripts, external script files, and modular ES6 architectures with file-level lexical scope isolation."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400",children:"Course Code: JS-PRO-101"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:border-slate-700 transition-all",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Detailed Discussion & Execution Paradigms"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["JavaScript can be invoked through multiple execution pathways: the interactive ",e.jsx("strong",{className:"text-amber-300",children:"DevTools Console (REPL)"}),", inline ",e.jsx("code",{children:"<script>"})," elements, external cached ",e.jsx("code",{children:".js"})," files, and modern ",e.jsxs("strong",{className:"text-sky-300",children:["ES Modules (",e.jsx("code",{children:'type="module"'}),")"]}),"."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["In classic scripts, variables declared with ",e.jsx("code",{children:"var"})," and top-level function declarations pollute the global ",e.jsx("code",{children:"window"})," object, creating risky namespace collisions in large multi-library applications. ES Modules eliminate this vulnerability by enforcing a private, file-level lexical environment, strict mode by default, and asynchronous parallel loading."]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/90 border border-amber-900/40 text-sm text-slate-300 leading-relaxed space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold",children:[e.jsx("span",{children:"🏫"}),e.jsx("span",{children:"Classroom Scenario (Barrackpore Lab):"})]}),e.jsxs("p",{children:["Student ",e.jsx("strong",{children:"Swadeep"})," imported two third-party scripts in a classic HTML file and noticed that both scripts declared a global variable called ",e.jsx("code",{children:"config"}),", overwriting each other and crashing the app. Mentor ",e.jsx("strong",{children:"Sukanta Hui"})," showed how refactoring to modern ES modules (",e.jsx("code",{children:'<script type="module">'}),") completely encapsulates file-level variables, preventing global namespace contamination."]})]})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Global Window Pollution vs ES Module Scope Isolation"]}),e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 850 260",className:"w-full h-auto",role:"img","aria-label":"Scope Isolation in Script Execution",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"modGrad1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#047857",stopOpacity:"0.2"})]}),e.jsxs("linearGradient",{id:"modGrad2",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f43f5e",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#881337",stopOpacity:"0.2"})]})]}),e.jsx("rect",{width:"850",height:"260",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("text",{x:"425",y:"30",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",textAnchor:"middle",children:"Script Execution Context: Classic Script vs Modern ES Module"}),e.jsxs("g",{transform:"translate(30, 55)",children:[e.jsx("rect",{width:"370",height:"180",rx:"12",fill:"#1e293b",stroke:"#f43f5e",strokeWidth:"1.5"}),e.jsx("text",{x:"185",y:"24",fill:"#fb7185",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:'❌ Classic Script: <script src="app.js">'}),e.jsx("rect",{x:"20",y:"40",width:"330",height:"40",rx:"6",fill:"#0f172a",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"58",fill:"#fca5a5",fontSize:"11",children:'var user = "Swadeep";'}),e.jsx("text",{x:"30",y:"72",fill:"#94a3b8",fontSize:"9",children:"Attaches directly to global window.user"}),e.jsx("rect",{x:"20",y:"90",width:"330",height:"75",rx:"6",fill:"#0f172a",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"112",fill:"#f43f5e",fontSize:"10",fontWeight:"bold",children:"Global Pollution & Collision Risk:"}),e.jsx("text",{x:"30",y:"130",fill:"#94a3b8",fontSize:"9",children:"Script 2 can accidentally overwrite window.user"}),e.jsx("text",{x:"30",y:"148",fill:"#94a3b8",fontSize:"9",children:"Sloppy mode by default; blocks HTML parser"})]}),e.jsxs("g",{transform:"translate(450, 55)",children:[e.jsx("rect",{width:"370",height:"180",rx:"12",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"185",y:"24",fill:"#34d399",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:'✓ ES Module: <script type="module">'}),e.jsx("rect",{x:"20",y:"40",width:"330",height:"40",rx:"6",fill:"#0f172a",stroke:"#059669"}),e.jsx("text",{x:"30",y:"58",fill:"#6ee7b7",fontSize:"11",children:'const user = "Swadeep"; export { user };'}),e.jsx("text",{x:"30",y:"72",fill:"#94a3b8",fontSize:"9",children:"Encapsulated in private module scope"}),e.jsx("rect",{x:"20",y:"90",width:"330",height:"75",rx:"6",fill:"url(#modGrad1)",stroke:"#047857"}),e.jsx("text",{x:"30",y:"112",fill:"#ecfdf5",fontSize:"10",fontWeight:"bold",children:"✓ True Lexical Encapsulation & Safety:"}),e.jsx("text",{x:"30",y:"130",fill:"#d1fae5",fontSize:"9",children:"Zero window pollution; strict mode by default"}),e.jsx("text",{x:"30",y:"148",fill:"#d1fae5",fontSize:"9",children:"Deferred automatically; explicit import/export contracts"})]})]})}),e.jsx("p",{className:"text-xs text-slate-400 mt-3 text-center",children:"Figure 1.5: Lexical scope isolation comparison between classic scripts and modern ES Modules."})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Technical Comparison of Execution Methods"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed mb-6",children:"Choosing the right execution vehicle determines application security, caching strategy, and modularity."}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse border border-slate-800",children:[e.jsx("thead",{className:"bg-slate-900/90 text-amber-300 uppercase text-xs",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border border-slate-800",children:"Execution Method"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Scope Lifetime"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Browser Caching"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Production Fitness"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 font-mono text-xs",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-amber-400 font-bold",children:"DevTools Console"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Transient (lost on tab refresh)"}),e.jsx("td",{className:"p-3 text-rose-400 font-sans",children:"None"}),e.jsx("td",{className:"p-3 text-slate-400 font-sans",children:"Debugging & testing only"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-rose-400 font-bold",children:"Inline <script>"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Global window scope pollution"}),e.jsx("td",{className:"p-3 text-rose-400 font-sans",children:"Re-downloaded on every page load"}),e.jsx("td",{className:"p-3 text-slate-400 font-sans",children:"Avoid (except critical config boots)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400 font-bold",children:"External .js File"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Global window scope unless wrapped"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Full HTTP CDN Caching"}),e.jsx("td",{className:"p-3 text-sky-400 font-sans",children:"Good for standard bundled scripts"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:'<script type="module">'}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Strict Module Lexical Scope"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Full HTTP CDN Caching"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Industry Gold Standard (Vite / ESM)"})]})]})]})}),e.jsxs("div",{className:"mt-6 p-5 rounded-xl bg-slate-900/80 border border-rose-900/40 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Execution Traps"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-slate-300 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-rose-300",children:"CORS Failure on Local Modules:"})," Loading ",e.jsx("code",{children:'<script type="module">'})," over ",e.jsx("code",{children:"file:///"})," triggers a CORS security rejection. Always serve via Live Server."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-amber-300",children:"Third-Party Variable Collisions:"})," Legacy scripts using ",e.jsx("code",{children:"var"})," at top-level overwrite window properties silently without throwing errors in non-strict mode."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-sky-300",children:"Order-of-Execution Race Conditions:"})," Using ",e.jsx("code",{children:"async"})," on interdependent scripts can cause reference errors if a child script loads before its parent."]})]})]})]})}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Interactive Monaco Playground: 5+ Practical Working Examples"]}),e.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded bg-amber-950/60 border border-amber-800 text-amber-300",children:"Live In-Browser Execution"})]}),e.jsx("div",{className:"rounded-2xl border border-slate-800 overflow-hidden shadow-2xl bg-slate-900",children:e.jsx(d,{initialCode:m,title:"RunningJavascriptInBrowserConsoleScriptFilesDemo.js"})})]}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚖️"})," Common Pitfalls vs Senior Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold",children:[e.jsx("span",{children:"❌"}),e.jsx("span",{children:"Anti-Pattern: Global Namespace Pollution"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Declaring variables globally in classic scripts creates naming collisions and untraceable state mutations across modules."}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/50 text-xs font-mono text-rose-300 overflow-x-auto",children:`// ❌ AVOID: Pollutes window.currentUser
var currentUser = { name: "Swadeep" };
function login() { /* ... */ }`})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold",children:[e.jsx("span",{children:"✓"}),e.jsx("span",{children:"Senior Pro: ES Module Explicit Exports"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Keep state local to the module and explicitly export only the minimal required public API contract."}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-emerald-900/50 text-xs font-mono text-emerald-300 overflow-x-auto",children:`// ✓ RECOMMENDED: Scoped and clean
const currentUser = { name: "Swadeep" };
export function getCurrentUser() {
  return { ...currentUser };
}`})]})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-950/30 via-slate-900 to-purple-950/20 border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xl shadow-md",children:"💎"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs uppercase font-mono tracking-wider text-amber-400 font-bold block",children:"JavaScript Hidden Gem & Senior Pro Secret"}),e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Dynamic import() for On-Demand Lazy Loading"})]})]}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed mb-6",children:["Instead of loading heavy analytics or visualization libraries on page load, use the native ",e.jsx("code",{children:"import()"})," statement to fetch and evaluate modules on the fly when the user requests them."]}),e.jsx("div",{className:"rounded-xl border border-amber-900/50 bg-slate-950 p-4 font-mono text-xs text-amber-200 overflow-x-auto",children:e.jsx("pre",{children:`// 💎 SENIOR PRO SECRET: Lazy Loading Module on Button Click
async function renderAnalyticsDashboard() {
  const { ChartEngine } = await import("./heavyChartModule.js");
  const chart = new ChartEngine("#dashboard-canvas");
  chart.render();
}`})})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-indigo-950/20 border border-indigo-800/40 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-indigo-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Architectural Mental Challenge: Think About This..."]}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed mb-4",children:"If an external CDN script is hijacked by an attacker, how can a website use Subresource Integrity (SRI) to guarantee that the browser will automatically refuse to execute the compromised code?"}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-indigo-900/50 text-xs sm:text-sm text-indigo-300 font-mono",children:["💡 Hint: The browser compares the cryptographic SHA-384 hash of the downloaded bytes against the ",e.jsx("code",{children:"integrity"})," attribute hash in the HTML ",e.jsx("code",{children:"<script>"})," tag!"]})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(l,{title:"Frequently Asked Questions · Running JavaScript in Browser Console & Script Files",subtitle:"Explore 25+ comprehensive questions on scripts, ES Modules, dynamic imports, and SRI security",questions:p})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(c,{content:h,title:"JavaScript Master Note · Running JavaScript in Browser Console & Script Files",downloadFileName:"001_001_getting-started-with-javascript-topic4-note.txt"})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(i,{note:"In my 27+ years of mentoring engineers at Coder & AccoTax in Barrackpore, I always advise moving away from monolithic global scripts. Learn to architect your applications using ES Modules with explicit import/export contracts for clean, maintainable, and bug-free codebases."})})]})]})}export{w as default};
