import{b as i,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import{F as l}from"./FAQTemplate-BHhlgA96.js";import{P as c}from"./PlainTextPrint-C08xhKA4.js";import{J as d}from"./JavaScriptEditableCodeBlock-CE9UdfAI.js";import"./vendor-icons-wprqVFW_.js";import"./vendor-monaco-Bv7hoEkV.js";const h=[{question:"Why should developers use a local HTTP server like Live Server instead of opening files directly via file:/// protocol?",shortAnswer:"Live Server provides a valid HTTP origin required for Fetch API, ES Modules, Service Workers, and WebSocket live reload.",explanation:"Opening files via file:/// assigns a null origin, triggering browser CORS security blocks whenever scripts attempt to fetch data or import ES modules.",hint:"file:// blocks CORS and ES module imports; http:// allows full Web API access.",level:"basic",codeExample:`// file:///path/index.html → Fetch fails with CORS error
// http://127.0.0.1:5500/index.html → Fetch succeeds!`},{question:"What is Visual Studio Code (VS Code) and why is it preferred for JavaScript development?",shortAnswer:"VS Code is a lightweight, extensible open-source editor with native JavaScript/TypeScript IntelliSense and debugging.",explanation:"Created by Microsoft, VS Code integrates an interactive terminal, Git version control, rich extensions (ESLint, Prettier, Live Server), and V8 debugging.",hint:"Microsoft open-source IDE with built-in JS IntelliSense and extension ecosystem.",level:"basic",codeExample:"// VS Code features automatic parameter hints and code completions"},{question:"How does the Live Server extension work under the hood?",shortAnswer:"It starts a local Node.js HTTP server and injects a WebSocket script into served HTML for automatic page reloads.",explanation:"When you save a file in VS Code, Live Server detects the change on disk and broadcasts a reload signal over the WebSocket connection to the browser.",hint:"Local HTTP server + WebSocket reload signal on file save.",level:"intermediate",codeExample:"<!-- Live Server injects this WebSocket reload snippet automatically -->"},{question:"What is the difference between Prettier and ESLint?",shortAnswer:"Prettier handles code formatting (style, indentation); ESLint analyzes code quality and catches bugs/anti-patterns.",explanation:"Prettier reformats code on save (semicolons, single vs double quotes). ESLint enforces syntax rules (no unused variables, no-var, strict equality).",hint:"Prettier = formatting aesthetics; ESLint = code correctness & bug prevention.",level:"basic",codeExample:"// ESLint warning: 'let x = 10' (never reassigned, use const instead)"},{question:"How do you open DevTools in modern web browsers?",shortAnswer:"Press F12, or press Ctrl + Shift + I (Windows/Linux) or Cmd + Option + I (macOS).",explanation:"Right-clicking anywhere on a webpage and selecting 'Inspect' also opens DevTools directly focused on that specific DOM element.",hint:"F12 or Ctrl + Shift + I.",level:"basic",codeExample:"// Opens Elements, Console, Sources, Network, and Memory tabs"},{question:"What is the function of the DevTools Console tab?",shortAnswer:"It serves as an interactive REPL to evaluate JavaScript expressions and view console output and runtime errors.",explanation:"Developers use the Console tab to execute ad-hoc code, inspect live object memory references, test functions, and diagnose script exceptions.",hint:"Read-Eval-Print-Loop (REPL) sandbox inside the browser.",level:"basic",codeExample:"console.log('Testing from DevTools Console');"},{question:"What is the function of the DevTools Network tab?",shortAnswer:"It monitors all incoming and outgoing network requests (HTML, CSS, JS, images, API calls) and their latency.",explanation:"The Network tab displays HTTP status codes (200, 404, 500), payload headers, response bodies, file sizes, and waterfall load timings.",hint:"Inspects HTTP requests, response headers, status codes, and latency waterfalls.",level:"intermediate",codeExample:"// Inspect fetch('/api/users') status code and JSON payload"},{question:"What is the function of the DevTools Sources tab?",shortAnswer:"It allows developers to view source files, set breakpoints, step through execution, and inspect scope variables.",explanation:"In the Sources tab, you can click on line numbers to pause execution at breakpoints, inspect Call Stack frames, and watch variable values change live.",hint:"Source code viewer, breakpoint manager, and step-through debugger.",level:"intermediate",codeExample:"// Setting a breakpoint pauses execution before the line runs"},{question:"What is a Hard Refresh (Ctrl + Shift + R) and why is it useful?",shortAnswer:"It forces the browser to bypass its local cache and re-download fresh HTML, CSS, and JS files from the server.",explanation:"During development, browsers often cache old script files. A hard refresh guarantees you are executing the exact latest code saved on disk.",hint:"Bypasses browser cache to fetch fresh script files.",level:"basic",codeExample:"// Shortcut: Ctrl + Shift + R (Windows) or Cmd + Shift + R (Mac)"},{question:"What are DevTools Local Overrides?",shortAnswer:"A feature allowing developers to edit JS/CSS files inside DevTools and persist the changes across page refreshes.",explanation:"DevTools saves your modified files into a selected local folder on your hard drive, allowing live debugging and prototyping without switching back to VS Code.",hint:"Persists browser DevTools edits to a local disk folder.",level:"advanced",codeExample:"// Sources tab → Overrides → Select folder for local persistence"},{question:"What is the purpose of the .vscode/settings.json file in a team repository?",shortAnswer:"It enforces identical editor configurations (tab spacing, format on save, linters) for all developers on the project.",explanation:"Committing workspace settings prevents git diff noise caused by different team members using conflicting tab sizes or formatting rules.",hint:"Repository-level VS Code editor configuration.",level:"intermediate",codeExample:'{\\n  \\"editor.tabSize\\": 2,\\n  \\"editor.formatOnSave\\": true\\n}'},{question:"What is Node.js and why is it needed in a frontend developer environment?",shortAnswer:"Node.js runs modern development toolchains: package managers (npm/pnpm), bundlers (Vite), and linters (ESLint).",explanation:"Even for purely client-side web development, Node.js powers development servers, transpilers (Babel/SWC), CSS preprocessors (Tailwind), and build pipelines.",hint:"Runtime engine powering npm, Vite, bundlers, and dev servers.",level:"intermediate",codeExample:"// $ npm install -D vite tailwindcss eslint"},{question:"What is npm (Node Package Manager)?",shortAnswer:"The default package manager and online registry for sharing and installing reusable JavaScript libraries.",explanation:"npm manages dependencies specified in package.json, allowing developers to install libraries (React, Lodash, Tailwind) with a single CLI command.",hint:"Dependency manager and package ecosystem for JavaScript.",level:"basic",codeExample:"// $ npm install lodash-es"},{question:"What is Emmet in VS Code?",shortAnswer:"A built-in productivity tool that expands shorthand CSS-like abbreviations into full HTML/CSS structures.",explanation:"Typing '!' and pressing Tab creates an HTML5 document skeleton. Typing 'ul>li*3' generates an unordered list with three list items instantly.",hint:"Shorthand syntax expansion for rapid HTML and CSS authoring.",level:"basic",codeExample:"// 'ul>li.item*3' expands to <ul> with 3 <li class='item'> tags"},{question:"What is the integrated terminal in VS Code?",shortAnswer:"A built-in command-line interface inside the editor running PowerShell, Bash, or Zsh.",explanation:"Opened via Ctrl + ~ (backtick), it lets developers run Git commands, npm scripts, and dev servers without switching between windows.",hint:"Ctrl + tilde (backtick) opens the terminal directly inside VS Code.",level:"basic",codeExample:"// Shortcut: Ctrl + tilde (backtick)"},{question:"How do you inspect mobile responsive layouts using Chrome DevTools?",shortAnswer:"Click the 'Toggle Device Toolbar' icon (Ctrl + Shift + M) to simulate mobile viewports and touch gestures.",explanation:"Device Mode allows testing viewport dimensions (iPhone, iPad, Pixel), throttling network speeds (3G/4G), and simulating CPU throttling.",hint:"Ctrl + Shift + M activates mobile device emulation.",level:"basic",codeExample:"// Simulates mobile screens, touch events, and slow 3G cellular networks"},{question:"What is the difference between 127.0.0.1 and localhost?",shortAnswer:"127.0.0.1 is the IPv4 loopback IP address; localhost is the domain name mapped to that loopback IP.",explanation:"Both point to your local machine, but localhost requires a DNS hosts file lookup, whereas 127.0.0.1 connects directly via IP.",hint:"127.0.0.1 = direct loopback IP; localhost = hostname alias.",level:"intermediate",codeExample:"// http://localhost:5500 and http://127.0.0.1:5500 connect to same local server"},{question:"What is the DevTools Lighthouse tab used for?",shortAnswer:"An automated audit tool that benchmarks Performance, Accessibility (A11y), Best Practices, and SEO.",explanation:"Lighthouse generates detailed scores (0-100) and actionable recommendations to optimize Core Web Vitals, page speed, and semantic markup.",hint:"Automated audit tool for Performance, SEO, and Accessibility.",level:"intermediate",codeExample:"// Generates a performance report card with Core Web Vitals metrics"},{question:"How does the 'Disable Cache' checkbox in the DevTools Network tab help during development?",shortAnswer:"It prevents the browser from loading cached assets as long as DevTools remains open.",explanation:"Checking this box guarantees every script and stylesheet is fetched fresh from the server on every reload while debugging.",hint:"Forces fresh asset downloads while DevTools is open.",level:"basic",codeExample:"// Network tab → Check 'Disable Cache'"},{question:"What is Git integration in VS Code?",shortAnswer:"Built-in visual Source Control interface for staging, committing, branching, and pushing code to GitHub.",explanation:"VS Code highlights added, modified, and deleted lines in the gutter and provides side-by-side diff views for resolving merge conflicts.",hint:"Source Control panel on the left sidebar.",level:"basic",codeExample:"// Visual Git commit, branch, and diff viewer"},{question:"What is an .editorconfig file?",shortAnswer:"A cross-IDE configuration file defining coding styles (indent size, charset, end-of-line) across different text editors.",explanation:"Helps maintain consistent styling between developers using VS Code, Sublime Text, WebStorm, or Vim on the same project.",hint:"Cross-editor standard configuration file.",level:"intermediate",codeExample:`[*]
indent_style = space
indent_size = 2
end_of_line = lf`},{question:"What is the DevTools Application / Storage tab used for?",shortAnswer:"Inspecting and modifying client-side storage: LocalStorage, SessionStorage, IndexedDB, Cookies, and Cache Storage.",explanation:"Developers can view stored JSON keys, clear cookies, test storage quotas, and inspect Service Worker registration statuses.",hint:"Manages LocalStorage, Cookies, IndexedDB, and Service Workers.",level:"intermediate",codeExample:"// Clear site data or inspect active JWT tokens in LocalStorage"},{question:"What is the purpose of JavaScript Source Maps (.map files)?",shortAnswer:"Maps minified/transpiled production code back to original human-readable source files for debugging in DevTools.",explanation:"When code is bundled with Vite or Babel, Source Maps allow DevTools to show exact line numbers and variables in your original TypeScript/ES6 files.",hint:"Translates minified bundle lines back to original source code in DevTools.",level:"advanced",codeExample:"//# sourceMappingURL=bundle.js.map"},{question:"How do you debug asynchronous code with async/await in VS Code debugger?",shortAnswer:"Set a breakpoint inside the async function and use 'Step Over' (F10) to trace promise resolution linearly.",explanation:"The VS Code debugger pauses before the await expression and resumes at the next line once the promise fulfills, making async debugging intuitive.",hint:"Set breakpoint → F10 Step Over through await expressions.",level:"advanced",codeExample:`async function load() {
  const res = await fetch(url); // Breakpoint pauses here
  const data = await res.json();
}`},{question:"What are Keyboard Shortcuts in VS Code that 10x developer productivity?",shortAnswer:"Ctrl+P (Quick Open file), Ctrl+Shift+F (Global Search), Alt+Up/Down (Move line), Ctrl+D (Multi-select word).",explanation:"Mastering editor navigation shortcuts eliminates repetitive mouse movements and accelerates code editing and refactoring.",hint:"Ctrl+P (open file), Ctrl+D (multi-cursor), Alt+Arrows (move line).",level:"basic",codeExample:"// Multi-cursor editing with Ctrl+D saves hours of refactoring time"}],p=`================================================================================\r
CODER & ACCOTAX - JAVASCRIPT COMPLETE ROADMAP\r
MODULE [001_001_getting-started-with-javascript]: Getting Started with JavaScript\r
TOPIC [3]: Setting Up Environment: Browser, VS Code & Live Server\r
Educator: Sukanta Hui | Barrackpore, West Bengal, India\r
================================================================================\r
\r
1. TOPIC OVERVIEW & DETAILED CONCEPT DISCUSSION\r
--------------------------------------------------------------------------------\r
- Purpose: Modern software engineering requires a standardized, deterministic, and \r
  efficient development setup.\r
- Core Developer Tooling Components:\r
  1. Visual Studio Code (VS Code): Industry-standard code editor with powerful IntelliSense, \r
     integrated terminal, debugging engine, and extensions ecosystem.\r
  2. Web Browsers & DevTools: Google Chrome / Microsoft Edge for running code, testing \r
     Console output, inspecting the DOM tree, and profiling network performance.\r
  3. Live Server Extension (Ritwick Dey): Local HTTP development server providing \r
     instant automatic reload over WebSocket connections upon file saves.\r
  4. Code Quality Tooling: Prettier (code formatter) and ESLint (static analysis linter).\r
\r
2. IN-DEPTH TECHNICAL KNOW-HOW & ENGINE RUNTIME MECHANICS\r
--------------------------------------------------------------------------------\r
- Why file:// Protocol Fails Modern Web Development:\r
  * Security Origin (Origin: null): Browsers isolate local files opened via file:/// \r
    with a null origin, blocking cross-origin AJAX/Fetch requests.\r
  * ES Modules Blocked: <script type="module"> fails under file:// due to strict CORS rules.\r
  * Web Workers & Service Workers: Require a valid HTTP/HTTPS origin (e.g. http://127.0.0.1:5500).\r
- How Live Server Operates Internally:\r
  * Spawns a local Node.js HTTP server listening on port 5500.\r
  * Injects a lightweight client-side WebSocket script tag into every served HTML document.\r
  * Watches local disk files for changes via file system change watchers (fs.watch).\r
  * Upon file save, sends a reload message over the WebSocket, instructing the browser \r
    to reload the page without manual F5 refreshes.\r
\r
3. EXCEPTIONS, CORNER CASES, COERCIONS & QUIRKS\r
--------------------------------------------------------------------------------\r
[!] CORS policy: Cross origin requests are only supported for protocol schemes: http, data, https.\r
    Occurs when attempting to fetch local JSON files from a file:/// URL. Fix: Use Live Server.\r
[!] Browser Cache Stale Script Trap: Browsers may serve cached versions of .js files. \r
    Use Hard Reload (Ctrl + Shift + R / Cmd + Shift + R) or Disable Cache in DevTools Network tab.\r
[!] Port Conflict: If port 5500 is occupied, Live Server automatically binds to 5501 or 5502.\r
\r
4. 💎 SPECIAL LANGUAGE FEATURES & SENIOR PRO SECRETS\r
--------------------------------------------------------------------------------\r
- VS Code Workspace Settings (.vscode/settings.json): Commit project-specific editor \r
  settings (tabSize: 2, formatOnSave: true) to ensure consistent code styles across all team members.\r
- DevTools Local Overrides: Edit and persist JavaScript and CSS changes directly inside \r
  Chrome DevTools without switching back to your editor.\r
- Emmet Abbreviations: Type '!' in an empty HTML file in VS Code to generate an instant, \r
  accessible HTML5 boilerplate.\r
\r
5. PRACTICAL ENTERPRISE USE-CASES & CODE EXAMPLES\r
--------------------------------------------------------------------------------\r
Example 1: Recommended VS Code settings.json\r
{\r
  "editor.tabSize": 2,\r
  "editor.formatOnSave": true,\r
  "editor.defaultFormatter": "esbenp.prettier-vscode",\r
  "files.autoSave": "afterDelay"\r
}\r
\r
Example 2: Recommended VS Code extensions.json\r
{\r
  "recommendations": [\r
    "ritwickdey.liveserver",\r
    "dbaeumer.vscode-eslint",\r
    "esbenp.prettier-vscode",\r
    "xabikos.javascriptsnippets"\r
  ]\r
}\r
\r
Example 3: Verifying HTTP Origin in JS\r
if (window.location.protocol === "file:") {\r
  console.warn("⚠️ Warning: Running via file://. Please launch via Live Server!");\r
}\r
\r
Example 4: Environment Variable Ingestion Simulation\r
const API_BASE = window.location.hostname === "localhost" \r
  ? "http://localhost:5000/api" \r
  : "https://api.codernaccotax.co.in/api";\r
\r
Example 5: DevTools Console Shortcut Checks\r
// In Chrome DevTools:\r
// $0 → returns currently selected DOM element\r
// $_ → returns result of last evaluated expression\r
// console.clear() → clears all console logs\r
\r
6. COMPARATIVE SPECIFICATION CHEAT-SHEET\r
--------------------------------------------------------------------------------\r
+----------------------+--------------------+---------------------+--------------------+\r
| Environment Mode     | Protocol           | CORS & Fetch Support| Live Reload Support|\r
+----------------------+--------------------+---------------------+--------------------+\r
| Local File Explorer  | file:///           | ❌ BLOCKED (null)   | ❌ Manual F5 only  |\r
| VS Code Live Server  | http://127.0.0.1   | ✓ Full Support      | ✓ WebSocket Auto   |\r
| Node.js CLI          | node app.js        | N/A (Direct OS IO)  | ✓ --watch mode     |\r
| Production Server    | https://...        | ✓ Secure Strict CORS| N/A (CDN / Cache)  |\r
+----------------------+--------------------+---------------------+--------------------+\r
\r
7. INTERVIEW & VIVA QUICK-FIRE KNOWLEDGE POINTS\r
--------------------------------------------------------------------------------\r
Q1: Why is Live Server necessary instead of double-clicking an HTML file?\r
A1: Live Server runs a local HTTP web server, allowing ES Modules, Fetch API, and CORS \r
    requests to function properly without browser security blocks.\r
\r
Q2: What is the purpose of Prettier and ESLint in a JavaScript project?\r
A2: Prettier enforces consistent code formatting (spacing, quotes, indentation); ESLint catches \r
    syntax errors, undeclared variables, and anti-patterns.\r
\r
Q3: What causes a CORS error when loading local files?\r
A3: The browser treats file:/// URLs as having an opaque 'null' origin, which violates the \r
    Same-Origin Policy for XMLHttpRequests and Fetch calls.\r
\r
Q4: What is DevTools and how do you open it?\r
A4: DevTools is the built-in browser developer suite for debugging; opened via F12, \r
    Ctrl + Shift + I (Windows), or Cmd + Option + I (Mac).\r
================================================================================\r
`,m=`/**\r
 * Topic 3 Demo: Setting Up Environment: Browser, VS Code & Live Server\r
 * Module: 001_001_getting-started-with-javascript\r
 * Educator: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
console.log("==================================================");\r
console.log("TOPIC 3: ENVIRONMENT SETUP & DEV WORKFLOW");\r
console.log("==================================================");\r
\r
// ─── 1. ENVIRONMENT CAPABILITY & RUNTIME CONFIG INSPECTOR ────────\r
console.log("");\r
console.log("1. Developer Environment Inspection:");\r
\r
function inspectDevelopmentEnvironment() {\r
  const isBrowser = typeof window !== "undefined";\r
  const userAgent = isBrowser ? navigator.userAgent : "Node.js Environment";\r
  const protocol = isBrowser && window.location ? window.location.protocol : "CLI";\r
  \r
  return {\r
    executionHost: isBrowser ? "Client Browser" : "Headless / Server Runtime",\r
    protocolType: protocol,\r
    isLocalServer: protocol.startsWith("http"),\r
    isDangerousFileProtocol: protocol === "file:",\r
    languageVersion: "ECMAScript 2024 / ESNext Supported",\r
    userAgentSnippet: userAgent.slice(0, 45) + "..."\r
  };\r
}\r
\r
console.log("Dev Environment Configuration Matrix:");\r
console.table([inspectDevelopmentEnvironment()]);\r
\r
// ─── 2. PROTOCOL SECURITY & CORS RESTRICTIONS (file:// vs http://) ──\r
console.log("");\r
console.log("2. Protocol Limitations Analysis (file:// vs http://localhost):");\r
\r
function analyzeProtocolSecurity(protocol) {\r
  const features = [\r
    { feature: "CORS Fetch Requests", fileProtocol: "❌ BLOCKED (CORS Error)", httpLocalServer: "✓ ALLOWED" },\r
    { feature: "ES Module (import/export)", fileProtocol: "❌ BLOCKED (Origin null)", httpLocalServer: "✓ ALLOWED" },\r
    { feature: "Service Workers / PWAs", fileProtocol: "❌ BLOCKED (Secure context required)", httpLocalServer: "✓ ALLOWED (localhost exception)" },\r
    { feature: "LocalStorage Persistence", fileProtocol: "⚠️ Unstable origin mapping", httpLocalServer: "✓ ISOLATED PER PORT" },\r
    { feature: "Live Reload (WebSockets)", fileProtocol: "❌ NOT SUPPORTED", httpLocalServer: "✓ SUPPORTED (Live Server)" }\r
  ];\r
\r
  console.table(features);\r
}\r
\r
analyzeProtocolSecurity();\r
\r
// ─── 3. LIVE SERVER WEBSOCKET HOT RELOAD SIMULATION ─────────────\r
console.log("");\r
console.log("3. VS Code Live Server WebSocket Sync Simulation:");\r
\r
class LiveServerSimulator {\r
  constructor(port = 5500) {\r
    this.port = port;\r
    this.clients = [];\r
    this.active = true;\r
    console.log(\`[Live Server] Serving at http://127.0.0.1:\${port}/\`);\r
  }\r
\r
  connectClient(clientName) {\r
    this.clients.push(clientName);\r
    console.log(\`[Live Server] Client '\${clientName}' connected via WebSocket\`);\r
  }\r
\r
  triggerFileChange(fileName) {\r
    console.log(\`[Live Server] File mutation detected on '\${fileName}'. Broadcasting reload signal...\`);\r
    this.clients.forEach(client => {\r
      console.log(\` → Hot Reload dispatched to browser client: \${client}\`);\r
    });\r
  }\r
}\r
\r
const devServer = new LiveServerSimulator(5500);\r
devServer.connectClient("Chrome DevTools (Swadeep)");\r
devServer.connectClient("Edge Browser (Tuhina)");\r
devServer.triggerFileChange("index.html");\r
\r
// ─── 4. CODE QUALITY & FORMATTING LINTER RULE VALIDATOR ──────────\r
console.log("");\r
console.log("4. VS Code ESLint & Prettier Code Rule Validator:");\r
\r
function validateCodeFormatting(codeSnippet) {\r
  const issues = [];\r
  \r
  if (codeSnippet.includes("var ")) {\r
    issues.push("ESLint rule: 'no-var' violated. Use 'let' or 'const' instead.");\r
  }\r
  if (!codeSnippet.endsWith(";")) {\r
    issues.push("Prettier rule: Missing terminating semicolon.");\r
  }\r
  if (codeSnippet.includes("==") && !codeSnippet.includes("===")) {\r
    issues.push("ESLint rule: 'eqeqeq' violated. Use strict equality '==='.");\r
  }\r
\r
  return {\r
    code: codeSnippet,\r
    status: issues.length === 0 ? "PASSED (Clean Production Quality)" : "FAILED (Linter Warnings)",\r
    warnings: issues\r
  };\r
}\r
\r
console.log("Testing Code Snippet 1:", validateCodeFormatting("var x = 10 == 10"));\r
console.log("Testing Code Snippet 2:", validateCodeFormatting("const student = 'Abhronila';"));\r
\r
// ─── 5. MULTI-ENVIRONMENT CONFIGURATION LOADER ───────────────────\r
console.log("");\r
console.log("5. Enterprise Multi-Environment Config Dispatcher:");\r
\r
function loadEnvironmentConfig(envName) {\r
  const configs = {\r
    development: {\r
      apiUrl: "http://localhost:5000/api",\r
      enableDebugLogs: true,\r
      center: "Barrackpore Lab (Dev Sandbox)"\r
    },\r
    staging: {\r
      apiUrl: "https://staging.codernaccotax.co.in/api",\r
      enableDebugLogs: true,\r
      center: "Naihati QA Testbed"\r
    },\r
    production: {\r
      apiUrl: "https://api.codernaccotax.co.in/api",\r
      enableDebugLogs: false,\r
      center: "Production High-Availability Cluster"\r
    }\r
  };\r
\r
  const selected = configs[envName] || configs.development;\r
  console.log(\`Loaded Environment Profile: [\${envName.toUpperCase()}]\`);\r
  console.table([selected]);\r
  return selected;\r
}\r
\r
loadEnvironmentConfig("development");\r
\r
console.log("");\r
console.log("✓ All 5 Topic 3 practical examples executed successfully.");\r
`;function w(){const s=i.useRef([]);i.useEffect(()=>{const r=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&o.target.classList.add("is-visible")})},{threshold:.08});return s.current.forEach(n=>{n&&r.observe(n)}),()=>r.disconnect()},[]);const t=r=>{r&&!s.current.includes(r)&&s.current.push(r)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          opacity: 0.99;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[e.jsxs("header",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-700/60 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"Module 001_001_getting-started-with-javascript · Topic 3"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-sky-300 tracking-tight leading-tight",children:"Setting Up Environment: Browser, VS Code & Live Server"}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:"Construct a world-class professional development workspace. Configure Visual Studio Code, Prettier, ESLint, Chrome DevTools, and master why local HTTP servers are strictly required over direct file opening."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400",children:"Course Code: JS-PRO-101"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:border-slate-700 transition-all",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Detailed Discussion & Developer Environment"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["A high-productivity engineering workflow rests on three interconnected tools: an intelligent code editor (",e.jsx("strong",{className:"text-amber-300",children:"VS Code"}),"), a modern browser with an advanced debugging engine (",e.jsx("strong",{className:"text-sky-300",children:"Chrome/Edge DevTools"}),"), and a local HTTP development server (",e.jsx("strong",{className:"text-emerald-300",children:"Live Server"}),")."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["Many beginners make the mistake of double-clicking an HTML file, launching it with the ",e.jsx("code",{children:"file:///"})," protocol. This causes browsers to assign an opaque ",e.jsx("code",{children:"null"})," origin, which immediately blocks ES Module ",e.jsx("code",{children:"import/export"})," statements, Fetch API calls, and Web Workers due to Cross-Origin Resource Sharing (CORS) security rules. Live Server resolves this by spawning an internal HTTP server at ",e.jsx("code",{children:"http://127.0.0.1:5500"})," and injecting a WebSocket live reload listener."]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/90 border border-amber-900/40 text-sm text-slate-300 leading-relaxed space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold",children:[e.jsx("span",{children:"🏫"}),e.jsx("span",{children:"Classroom Scenario (Shyamnagar Lab):"})]}),e.jsxs("p",{children:["Student ",e.jsx("strong",{children:"Debangshu"})," was building an ES module with ",e.jsx("code",{children:"import { utils } from './utils.js'"})," and got a red console error: ",e.jsx("em",{children:`"Access to script at 'file:///...' from origin 'null' has been blocked by CORS policy"`}),". Mentor ",e.jsx("strong",{children:"Sukanta Hui"})," demonstrated right-clicking the HTML file in VS Code and selecting ",e.jsx("strong",{children:'"Open with Live Server"'}),", instantly giving the project a proper HTTP origin and enabling hot-reloading on every file save."]})]})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Live Server WebSocket Hot-Reload & Origin Architecture"]}),e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 850 260",className:"w-full h-auto",role:"img","aria-label":"Live Server vs File Protocol Architecture",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"lsGrad1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#047857",stopOpacity:"0.2"})]}),e.jsxs("linearGradient",{id:"lsGrad2",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f43f5e",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#881337",stopOpacity:"0.2"})]})]}),e.jsx("rect",{width:"850",height:"260",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("text",{x:"425",y:"30",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",textAnchor:"middle",children:"Development Protocol Comparison: file:/// vs Live Server (http://127.0.0.1:5500)"}),e.jsxs("g",{transform:"translate(30, 55)",children:[e.jsx("rect",{width:"370",height:"180",rx:"12",fill:"#1e293b",stroke:"#f43f5e",strokeWidth:"1.5"}),e.jsx("text",{x:"185",y:"24",fill:"#fb7185",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"❌ Direct File Protocol (file:///)"}),e.jsx("rect",{x:"20",y:"40",width:"330",height:"35",rx:"6",fill:"#0f172a",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"62",fill:"#fca5a5",fontSize:"11",children:"Origin: null (CORS Security Violation)"}),e.jsx("rect",{x:"20",y:"85",width:"330",height:"35",rx:"6",fill:"#0f172a",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"107",fill:"#fca5a5",fontSize:"11",children:"ES Module imports & Fetch API: BLOCKED"}),e.jsx("rect",{x:"20",y:"130",width:"330",height:"35",rx:"6",fill:"#0f172a",stroke:"#e11d48"}),e.jsx("text",{x:"30",y:"152",fill:"#fca5a5",fontSize:"11",children:"Live Reload: ❌ Manual F5 required on every edit"})]}),e.jsxs("g",{transform:"translate(450, 55)",children:[e.jsx("rect",{width:"370",height:"180",rx:"12",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"185",y:"24",fill:"#34d399",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"✓ VS Code Live Server (http://127.0.0.1:5500)"}),e.jsx("rect",{x:"20",y:"40",width:"330",height:"35",rx:"6",fill:"#0f172a",stroke:"#059669"}),e.jsx("text",{x:"30",y:"62",fill:"#6ee7b7",fontSize:"11",children:"Origin: http://127.0.0.1:5500 (Valid HTTP Origin)"}),e.jsx("rect",{x:"20",y:"85",width:"330",height:"35",rx:"6",fill:"#0f172a",stroke:"#059669"}),e.jsx("text",{x:"30",y:"107",fill:"#6ee7b7",fontSize:"11",children:"ES Modules, Fetch, LocalStorage: ✓ 100% Working"}),e.jsx("rect",{x:"20",y:"130",width:"330",height:"35",rx:"6",fill:"url(#lsGrad1)",stroke:"#047857"}),e.jsx("text",{x:"30",y:"152",fill:"#ecfdf5",fontSize:"11",fontWeight:"bold",children:"Live Reload: ✓ Instant reload over WebSocket on save"})]})]})}),e.jsx("p",{className:"text-xs text-slate-400 mt-3 text-center",children:"Figure 1.4: Protocol security architecture explaining why local HTTP servers are mandatory for JavaScript engineering."})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Essential VS Code Configuration & Extension Stack"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed mb-6",children:"Setting up standard workspace configurations eliminates code formatting conflicts across development teams."}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse border border-slate-800",children:[e.jsx("thead",{className:"bg-slate-900/90 text-amber-300 uppercase text-xs",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border border-slate-800",children:"Tool / Extension"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Identifier"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Core Responsibility"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Recommended Setting"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 font-mono text-xs",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-amber-400 font-bold",children:"Live Server"}),e.jsx("td",{className:"p-3 text-slate-400",children:"ritwickdey.LiveServer"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Local HTTP server with WebSocket hot-reloading"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Port: 5500, Custom Browser: Chrome"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400 font-bold",children:"Prettier Formatter"}),e.jsx("td",{className:"p-3 text-slate-400",children:"esbenp.prettier-vscode"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Enforces deterministic indentation, quotes, and commas"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:'"editor.formatOnSave": true'})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-purple-400 font-bold",children:"ESLint Linter"}),e.jsx("td",{className:"p-3 text-slate-400",children:"dbaeumer.vscode-eslint"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Catches syntax bugs, undeclared variables, and code smells"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:'"eslint.validate": ["javascript"]'})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"JavaScript Snippets"}),e.jsx("td",{className:"p-3 text-slate-400",children:"xabikos.JavaScriptSnippets"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Accelerates authoring of ES6+ syntax patterns"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"clg → console.log(), nfn → Named function"})]})]})]})}),e.jsxs("div",{className:"mt-6 p-5 rounded-xl bg-slate-900/80 border border-rose-900/40 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Environment Gotchas & Fixes"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-slate-300 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-rose-300",children:"Stale Browser Cache:"})," Browsers often serve cached JavaScript files. Always check ",e.jsx("strong",{children:'"Disable Cache"'})," in the DevTools Network tab while developing."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-amber-300",children:"Live Server Port Collisions:"})," If port 5500 is occupied, Live Server silently shifts to 5501 or 5502. Ensure your API CORS whitelist accounts for dynamic ports."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-sky-300",children:"Windows Line Endings (CRLF vs LF):"})," Configure Git and VS Code to use standard ",e.jsx("code",{children:"LF"})," line endings to avoid unexpected git diff churn."]})]})]})]})}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Interactive Monaco Playground: 5+ Practical Working Examples"]}),e.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded bg-amber-950/60 border border-amber-800 text-amber-300",children:"Live In-Browser Execution"})]}),e.jsx("div",{className:"rounded-2xl border border-slate-800 overflow-hidden shadow-2xl bg-slate-900",children:e.jsx(d,{initialCode:m,title:"SettingUpEnvironmentBrowserVsCodeLiveServerDemo.js"})})]}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚖️"})," Common Pitfalls vs Senior Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold",children:[e.jsx("span",{children:"❌"}),e.jsx("span",{children:"Anti-Pattern: Opening via file:/// Explorer"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Double-clicking files opens them with ",e.jsx("code",{children:"file:///"}),", which breaks ES Modules and Fetch calls due to null origin security blocks."]}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/50 text-xs font-mono text-rose-300 overflow-x-auto",children:`// ❌ AVOID: file:///C:/Users/app/index.html
// Throws: CORS policy: Cross origin requests are only supported for http, https...`})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold",children:[e.jsx("span",{children:"✓"}),e.jsx("span",{children:"Senior Pro: Serving via Local HTTP Loopback"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Always launch through Live Server or a local HTTP development server for complete Web API compliance and live reloading."}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-emerald-900/50 text-xs font-mono text-emerald-300 overflow-x-auto",children:`// ✓ RECOMMENDED: http://127.0.0.1:5500/index.html
// Full Fetch, ES Module import/export, and LocalStorage capabilities enabled!`})]})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-950/30 via-slate-900 to-purple-950/20 border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xl shadow-md",children:"💎"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs uppercase font-mono tracking-wider text-amber-400 font-bold block",children:"JavaScript Hidden Gem & Senior Pro Secret"}),e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"VS Code Multi-Cursor Mastery & Emmet HTML Generation"})]})]}),e.jsxs("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed mb-6",children:["In VS Code, pressing ",e.jsx("code",{children:"Ctrl + D"})," (or ",e.jsx("code",{children:"Cmd + D"}),") selects the next occurrence of the current word for simultaneous multi-line editing. In HTML files, typing ",e.jsx("code",{children:"!"})," and pressing ",e.jsx("code",{children:"Tab"})," generates a complete accessible HTML5 boilerplate in a fraction of a second."]}),e.jsx("div",{className:"rounded-xl border border-amber-900/50 bg-slate-950 p-4 font-mono text-xs text-amber-200 overflow-x-auto",children:e.jsx("pre",{children:`// 💎 SENIOR PRO SECRET: Emmet HTML Expansion Shorthand
// Type: 'ul.student-list>li.student-item*3{Student $}' + Tab
// Generates:
// <ul class="student-list">
//   <li class="student-item">Student 1</li>
//   <li class="student-item">Student 2</li>
//   <li class="student-item">Student 3</li>
// </ul>`})})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-indigo-950/20 border border-indigo-800/40 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-indigo-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Architectural Mental Challenge: Think About This..."]}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed mb-4",children:"Why do modern web build tools (like Vite) use native ES Modules in development to provide sub-10ms hot-reloads, while traditional tools like Webpack had to rebuild massive bundled files on every save?"}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-indigo-900/50 text-xs sm:text-sm text-indigo-300 font-mono",children:["💡 Hint: Vite serves source code over native browser ES Module imports (",e.jsx("code",{children:'type="module"'}),"), letting the browser handle dependency graphs on demand without bundling!"]})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(l,{title:"Frequently Asked Questions · Setting Up Environment: Browser, VS Code & Live Server",subtitle:"Explore 25+ comprehensive questions on IDE setups, DevTools shortcuts, and local HTTP servers",questions:h})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(c,{content:p,title:"JavaScript Master Note · Setting Up Environment: Browser, VS Code & Live Server",downloadFileName:"001_001_getting-started-with-javascript-topic3-note.txt"})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(a,{note:"In my 27+ years of mentoring engineers at Coder & AccoTax in Barrackpore, I have found that engineers who master their development environment code twice as fast with half the bugs. Configure your VS Code with formatOnSave and always launch your projects through Live Server."})})]})]})}export{w as default};
