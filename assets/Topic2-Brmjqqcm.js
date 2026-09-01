import{b as i,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import{F as l}from"./FAQTemplate-BHhlgA96.js";import{P as d}from"./PlainTextPrint-C08xhKA4.js";import{J as c}from"./JavaScriptEditableCodeBlock-CsgUqchn.js";import"./vendor-icons-DGCamHnX.js";import"./vendor-monaco-Bv7hoEkV.js";const h=[{question:"What are the roles of HTML, CSS, and JavaScript in web applications?",shortAnswer:"HTML provides structure, CSS handles styling and layout, and JavaScript provides dynamic behavior and logic.",explanation:"HTML builds the semantic document tree (DOM), CSS dictates presentation and responsiveness, and JavaScript manages state, user events, and asynchronous data updates.",hint:"Structure (HTML) + Style (CSS) + Behavior (JavaScript).",level:"basic",codeExample:`// HTML: <h1 id='title'>Hello</h1>
// CSS: #title { color: #f59e0b; }
// JS: document.getElementById('title').textContent = 'Welcome';`},{question:"What is the Critical Rendering Path (CRP)?",shortAnswer:"The sequence of steps the browser takes to parse HTML/CSS and paint pixels on screen.",explanation:"CRP consists of DOM construction → CSSOM construction → Render Tree creation → Layout calculation → Paint → GPU Composite.",hint:"DOM + CSSOM → Render Tree → Layout → Paint.",level:"intermediate",codeExample:"// Optimizing the CRP ensures First Contentful Paint (FCP) occurs under 1 second"},{question:"What is the difference between <script>, <script defer>, and <script async>?",shortAnswer:"Normal scripts block HTML parsing; defer executes after parsing in order; async executes the moment downloaded without order.",explanation:"Default scripts block parsing immediately. Defer downloads in parallel and executes after DOM parsing completes. Async downloads in parallel and executes immediately upon download.",hint:"Defer = in-order after DOM parse; Async = instant execution without order.",level:"intermediate",codeExample:`<!-- Preferred modern script tag -->
<script src='app.js' defer><\/script>`},{question:"Why does placing scripts at the bottom of <body> or using 'defer' prevent errors?",shortAnswer:"It ensures the DOM elements already exist before the JavaScript code tries to access them.",explanation:"If a script runs in <head> without defer, document.getElementById() returns null, causing TypeError when attaching event listeners.",hint:"DOM elements must exist before JS querySelectors find them.",level:"basic",codeExample:`// Head without defer:
document.getElementById('btn').onclick = ...; // TypeError: null has no properties`},{question:"What is Layout Thrashing (Forced Synchronous Layout)?",shortAnswer:"When JavaScript alternates reading and writing layout properties, forcing continuous costly browser reflows.",explanation:"Reading element.offsetHeight right after setting element.style.width forces the browser to synchronously recalculate layout on the spot, causing UI stutter.",hint:"Alternating DOM reads and DOM writes in a tight loop.",level:"advanced",codeExample:"// Bad: for (let el of items) { el.style.width = el.offsetWidth + 10 + 'px'; }"},{question:"How does DocumentFragment optimize DOM insertion performance?",shortAnswer:"It allows batching multiple DOM nodes off-screen and appending them in a single reflow operation.",explanation:"Appending 100 elements directly to the document triggers up to 100 reflows. Appending them to a DocumentFragment and inserting the fragment triggers only 1 reflow.",hint:"Off-screen DOM container that evaporates upon insertion.",level:"intermediate",codeExample:`const frag = document.createDocumentFragment();
frag.appendChild(el1);
frag.appendChild(el2);
parent.appendChild(frag);`},{question:"What is the Render Tree in browser engine architecture?",shortAnswer:"The combination of DOM and CSSOM containing only visible elements that require layout and paint.",explanation:"Elements with display: none and <head> tags are excluded from the Render Tree because they do not occupy visual space or pixels.",hint:"Visible DOM nodes + matching CSSOM style rules.",level:"advanced",codeExample:"// display: none removes nodes from the Render Tree; visibility: hidden remains in Render Tree"},{question:"What is the difference between Reflow and Repaint?",shortAnswer:"Reflow recalculates geometry/layout; Repaint redraws colors/pixels without changing element dimensions.",explanation:"Changing width, margin, or font-size triggers Reflow + Repaint. Changing background-color or color triggers only Repaint (which is significantly cheaper).",hint:"Reflow = geometry change; Repaint = visual color/border change.",level:"intermediate",codeExample:`el.style.color = 'blue'; // Repaint only
el.style.width = '200px'; // Reflow + Repaint`},{question:"How do CSS Custom Properties (Variables) interact with JavaScript?",shortAnswer:"JS can dynamically read and mutate CSS variables at runtime using getPropertyValue and setProperty.",explanation:"Mutating root CSS variables allows instantaneous, zero-reflow theme switching across entire web applications with pure CSS cascade reactivity.",hint:"document.documentElement.style.setProperty('--color', val).",level:"intermediate",codeExample:"document.documentElement.style.setProperty('--primary', '#38bdf8');"},{question:"What is the DOMContentLoaded event versus the window.onload event?",shortAnswer:"DOMContentLoaded fires when HTML/DOM is parsed; load fires after all images, styles, and subresources finish loading.",explanation:"DOMContentLoaded is ideal for initializing UI scripts quickly. Window load waits for all heavy external assets (images, stylesheets, iframes) to complete.",hint:"DOMContentLoaded = DOM ready; load = All images & assets ready.",level:"basic",codeExample:"document.addEventListener('DOMContentLoaded', () => console.log('DOM is ready!'));"},{question:"What is CSS Specificity and how does element.style override stylesheet rules?",shortAnswer:"Inline styles set by JS have a specificity score of (1,0,0,0), overriding IDs, classes, and tag selectors.",explanation:"To override an inline style from external CSS, the !important directive is required. Best practice is to toggle CSS class names rather than setting inline styles.",hint:"Inline JS style > ID selector > Class selector > Tag selector.",level:"intermediate",codeExample:"el.classList.add('active'); // Better than el.style.color = 'red'"},{question:"How do modern UI libraries (React/Vue) prevent manual DOM manipulation?",shortAnswer:"By maintaining state-driven declarative component trees that automatically reconcile and patch the DOM.",explanation:"Instead of manually writing getElementById and appendChild, developers update component state, and the framework updates the corresponding DOM nodes automatically.",hint:"UI = f(State). Frameworks handle DOM reconciliation.",level:"basic",codeExample:`const [count, setCount] = useState(0);
// React reconciles DOM when count changes`},{question:"What is the transform and opacity CSS optimization for 60fps animations?",shortAnswer:"They trigger neither Reflow nor Repaint; the browser composites them directly on the GPU.",explanation:"Animating top/left triggers expensive Reflow on CPU main thread. Animating transform: translate() runs on GPU compositor thread, guaranteeing 60fps.",hint:"Animate transform and opacity for GPU hardware acceleration.",level:"advanced",codeExample:`/* 60fps hardware accelerated */
.card { transform: translateY(-10px); transition: transform 0.3s; }`},{question:"What is the CSSOM (CSS Object Model)?",shortAnswer:"The browser's internal tree representation of CSS rules and computed selector styles.",explanation:"Like the DOM for HTML, the CSSOM maps all stylesheets, media queries, and rules to calculate the exact computed style for each element.",hint:"The tree structure of CSS rules used to style DOM elements.",level:"advanced",codeExample:`const computed = window.getComputedStyle(element);
console.log(computed.backgroundColor);`},{question:"What is Event-Driven Architecture in the browser?",shortAnswer:"JavaScript registers listeners that react to user inputs, timers, or network responses asynchronously.",explanation:"The browser waits idle until an event (click, keydown, scroll, fetch response) is pushed to the event loop, triggering registered callback functions.",hint:"Publish/Subscribe event model between user and DOM.",level:"basic",codeExample:"window.addEventListener('resize', () => console.log('Viewport resized'));"},{question:"What is the difference between element.innerHTML and element.textContent?",shortAnswer:"innerHTML parses strings as HTML tags (security risk); textContent sets raw text safely without HTML parsing.",explanation:"textContent is faster, causes no HTML tokenization, and is immune to Cross-Site Scripting (XSS) attacks.",hint:"textContent = safe raw text; innerHTML = parsed HTML markup.",level:"basic",codeExample:"el.textContent = '<b>Not Bold</b>'; // Displays raw tag text safely"},{question:"What is the difference between visibility: hidden and display: none?",shortAnswer:"visibility: hidden retains physical layout space; display: none removes the element from the Render Tree completely.",explanation:"display: none triggers a reflow and paint when toggled. visibility: hidden triggers only a repaint because layout geometry remains identical.",hint:"display: none = no layout space; visibility: hidden = invisible but keeps space.",level:"basic",codeExample:"// display: none removes from Render Tree; visibility: hidden preserves box dimensions"},{question:"What are CSS Houdini Paint Worklets?",shortAnswer:"JavaScript code that hooks directly into the browser's native rendering engine to draw custom CSS backgrounds.",explanation:"Houdini APIs allow developers to extend CSS with custom procedural graphics and layouts executed directly on the render pipeline.",hint:"Custom procedural graphics running in the browser paint pipeline.",level:"expert",codeExample:"CSS.paintWorklet.addModule('my-paint-worklet.js');"},{question:"What is requestAnimationFrame and why is it preferred over setInterval for animations?",shortAnswer:"It synchronizes animation callbacks with the browser's native display refresh rate (typically 60Hz/120Hz).",explanation:"requestAnimationFrame automatically pauses when browser tabs are inactive, eliminating CPU waste and screen tearing associated with setInterval.",hint:"Synchronized with monitor V-Sync and display refresh cycle.",level:"advanced",codeExample:`function animate() {
  updatePosition();
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);`},{question:"How does the 'async' attribute handle script dependency order?",shortAnswer:"It does not guarantee order; whichever script finishes downloading first executes first.",explanation:"If scriptB.js depends on scriptA.js and both are loaded with async, scriptB may execute before scriptA if it finishes downloading earlier, causing reference errors.",hint:"Async scripts execute out of order based on network download speed.",level:"intermediate",codeExample:"<!-- If script2 depends on script1, DO NOT use async! Use defer instead. -->"},{question:"What is the BEM (Block Element Modifier) CSS naming methodology in JS components?",shortAnswer:"A structured naming convention that creates modular, collision-free CSS class names (e.g. .card__title--active).",explanation:"BEM clarifies component relationships and prevents specificity wars when toggling modifier classes with JavaScript.",hint:"Block__Element--Modifier naming pattern.",level:"basic",codeExample:"card.classList.toggle('card__header--highlighted');"},{question:"What is CSS Modules / Scoped CSS in modern build tools?",shortAnswer:"Build-time tooling that generates unique hashed class names to guarantee zero CSS style leakage across components.",explanation:"Instead of global class names, Vite/Webpack hash classes (e.g. .title_a8f3b), allowing components to use simple class names without collisions.",hint:"Scoped component styles with build-time class name hashing.",level:"intermediate",codeExample:`import styles from './Card.module.css';
card.className = styles.header;`},{question:"What is a 'Pure CSS' vs 'JS-Driven' Animation tradeoff?",shortAnswer:"CSS animations are declarative and GPU-optimized; JS animations allow dynamic physics, spring math, and runtime interaction.",explanation:"Simple transitions should be handled by CSS for maximum frame rate; complex gesture-driven drag or canvas physics require JavaScript.",hint:"CSS = declarative GPU transitions; JS = complex stateful physics animations.",level:"intermediate",codeExample:"/* CSS handles simple hover transitions effortlessly */"},{question:"What is progressive enhancement versus graceful degradation?",shortAnswer:"Progressive enhancement starts with basic HTML/CSS and adds JS features; graceful degradation builds for modern JS with fallbacks.",explanation:"Progressive enhancement ensures all users have access to core content even if JavaScript fails or is disabled in the browser.",hint:"Build solid HTML/CSS base → Enhance with JS superpowers.",level:"basic",codeExample:"// Functional HTML form works without JS; enhanced with AJAX when JS is active"},{question:"What is the Role of Accessibility (A11y) when JavaScript modifies the DOM?",shortAnswer:"JS must manage focus, keyboard navigation, and ARIA live regions so screen readers recognize dynamic updates.",explanation:"When injecting dynamic modals or error toasts, JavaScript must set aria-live, manage tabindex, and trap keyboard focus for assistive technologies.",hint:"Dynamic DOM updates must update ARIA attributes and focus state.",level:"advanced",codeExample:`el.setAttribute('aria-expanded', 'true');
el.focus();`}],m=`================================================================================\r
CODER & ACCOTAX - JAVASCRIPT COMPLETE ROADMAP\r
MODULE [001_001_getting-started-with-javascript]: Getting Started with JavaScript\r
TOPIC [2]: How HTML, CSS, and JavaScript Work Together\r
Educator: Sukanta Hui | Barrackpore, West Bengal, India\r
================================================================================\r
\r
1. TOPIC OVERVIEW & DETAILED CONCEPT DISCUSSION\r
--------------------------------------------------------------------------------\r
- The Web Platform Triad:\r
  1. HTML (HyperText Markup Language): The structural skeleton defining elements, \r
     semantics, forms, tables, and document hierarchies.\r
  2. CSS (Cascading Style Sheets): The presentation layer defining colors, typography, \r
     flexbox/grid layouts, responsive breakpoints, and animations.\r
  3. JavaScript: The dynamic behavioral engine intercepting user interactions, mutating \r
     the DOM/CSSOM trees, handling business logic, and fetching data over network streams.\r
- The Critical Rendering Path (CRP):\r
  * Step 1: HTML bytes → Tokens → Nodes → DOM (Document Object Model) Tree.\r
  * Step 2: CSS bytes → Tokens → Nodes → CSSOM (CSS Object Model) Tree.\r
  * Step 3: DOM + CSSOM are combined into the Render Tree (visible elements only).\r
  * Step 4: Layout (Reflow) calculates precise geometry (x, y, width, height) of each box.\r
  * Step 5: Paint (Rasterization) fills pixels with colors, borders, images, and text.\r
  * Step 6: Composite merges distinct GPU layers onto the physical display.\r
\r
2. IN-DEPTH TECHNICAL KNOW-HOW & ENGINE RUNTIME MECHANICS\r
--------------------------------------------------------------------------------\r
- Script Loading Mechanics:\r
  * Default (<script src="app.js">): HTML parser pauses immediately, downloads the script, \r
    compiles and executes it, and only then resumes HTML parsing.\r
  * Defer (<script src="app.js" defer>): Downloads in parallel with HTML parsing. \r
    Executes in guaranteed document order immediately after HTML parsing completes \r
    (before DOMContentLoaded).\r
  * Async (<script src="app.js" async>): Downloads in parallel with HTML parsing. \r
    Executes the exact moment download completes (can execute out of order).\r
- Layout Thrashing (Forced Synchronous Layout):\r
  Occurs when JS queries layout geometry (e.g. offsetHeight, getBoundingClientRect) \r
  immediately after modifying DOM styles, forcing the browser to compute Layout on the fly.\r
\r
3. EXCEPTIONS, CORNER CASES, COERCIONS & QUIRKS\r
--------------------------------------------------------------------------------\r
[!] TypeError: Cannot read properties of null (reading 'addEventListener'): \r
    Thrown when a script placed in the HTML <head> attempts to access DOM elements \r
    before the parser has constructed them. Fix with 'defer' or 'DOMContentLoaded'.\r
[!] Flash of Unstyled Content (FOUC): Caused by executing DOM/CSS mutations after the \r
    initial paint.\r
[!] CSS Specificity Collisions: JS inline styles (element.style.color = "red") possess \r
    higher specificity than external CSS classes, making them difficult to override.\r
\r
4. 💎 SPECIAL LANGUAGE FEATURES & SENIOR PRO SECRETS\r
--------------------------------------------------------------------------------\r
- CSS Houdini Typed OM: Bypasses string-based style manipulation using CSSUnitValue \r
  (e.g., el.attributeStyleMap.set('opacity', CSS.number(0.5))), boosting animation performance.\r
- CSS Custom Property Reactivity: Mutate CSS variables directly in JS via \r
  document.documentElement.style.setProperty('--primary-color', '#f59e0b') for zero-reflow theming.\r
- DocumentFragment Batching: Assemble multiple DOM elements in an off-screen fragment \r
  before appending to the live document, reducing reflows to exactly 1.\r
\r
5. PRACTICAL ENTERPRISE USE-CASES & CODE EXAMPLES\r
--------------------------------------------------------------------------------\r
Example 1: Safe DOM Access with DOMContentLoaded\r
document.addEventListener("DOMContentLoaded", () => {\r
  const btn = document.getElementById("submit-btn");\r
  btn.addEventListener("click", () => console.log("Submitted"));\r
});\r
\r
Example 2: Batch DOM Injection via DocumentFragment\r
const fragment = document.createDocumentFragment();\r
["Swadeep", "Tuhina", "Abhronila"].forEach(name => {\r
  const li = document.createElement("li");\r
  li.textContent = name;\r
  fragment.appendChild(li);\r
});\r
document.getElementById("student-list").appendChild(fragment);\r
\r
Example 3: CSS Variable Dynamic Theming\r
function setAccentTheme(hexColor) {\r
  document.documentElement.style.setProperty("--accent-theme", hexColor);\r
}\r
\r
Example 4: Preventing Layout Thrashing\r
// Batch all reads first\r
const heights = cards.map(c => c.offsetHeight);\r
// Batch all writes\r
cards.forEach((c, i) => c.style.height = \`\${heights[i] + 10}px\`);\r
\r
Example 5: ClassList Toggle for State-Driven CSS\r
function toggleModal(isOpen) {\r
  const modal = document.getElementById("auth-modal");\r
  modal.classList.toggle("opacity-100", isOpen);\r
  modal.classList.toggle("pointer-events-none", !isOpen);\r
}\r
\r
6. COMPARATIVE SPECIFICATION CHEAT-SHEET\r
--------------------------------------------------------------------------------\r
+--------------------+---------------------+--------------------+--------------------+\r
| Script Attribute   | Download Timeline   | Execution Timing   | Blocks HTML Parser?|\r
+--------------------+---------------------+--------------------+--------------------+\r
| Default <script>   | Blocks Parsing      | Immediately        | YES (Full Pause)   |\r
| <script defer>     | Parallel (Async)    | After DOM Parsed   | NO                 |\r
| <script async>     | Parallel (Async)    | Instant on Load    | Only During Exec   |\r
| <script type=module| Parallel (Async)    | Deferred by default| NO                 |\r
+--------------------+---------------------+--------------------+--------------------+\r
\r
7. INTERVIEW & VIVA QUICK-FIRE KNOWLEDGE POINTS\r
--------------------------------------------------------------------------------\r
Q1: What is the difference between Reflow (Layout) and Repaint?\r
A1: Reflow recalculates the geometric dimensions and positions of elements on the page; \r
    Repaint redraws pixels (colors, visibility, backgrounds) without altering geometry.\r
\r
Q2: Why should scripts generally use the 'defer' attribute?\r
A2: 'defer' allows HTML parsing to complete without blocking, executes scripts in guaranteed \r
    order, and ensures the DOM is fully constructed before script evaluation.\r
\r
Q3: What causes 'Layout Thrashing' and how do you fix it?\r
A3: Alternating between reading layout properties (offsetWidth) and writing styles (style.width) \r
    in a loop; fix by batching all reads first, then batching all writes.\r
\r
Q4: What is the DOM and CSSOM?\r
A4: DOM (Document Object Model) is the tree representation of HTML elements; CSSOM is the tree \r
    representation of CSS rules and computed cascade styles.\r
================================================================================\r
`,p=`/**\r
 * Topic 2 Demo: How HTML, CSS, and JavaScript Work Together\r
 * Module: 001_001_getting-started-with-javascript\r
 * Educator: Sukanta Hui | Coder & AccoTax\r
 */\r
\r
console.log("==================================================");\r
console.log("TOPIC 2: HTML, CSS & JS TRIAD & RENDER ENGINE");\r
console.log("==================================================");\r
\r
// ─── 1. VIRTUAL DOM TREE CONSTRUCTION & STYLING ENGINE ───────────\r
console.log("");\r
console.log("1. Virtual DOM Tree Node Construction & CSS Mapping:");\r
\r
function createVirtualElement(tag, attributes = {}, styles = {}, children = []) {\r
  return {\r
    tag,\r
    attributes,\r
    styles,\r
    children,\r
    renderToString() {\r
      const styleAttr = Object.entries(this.styles)\r
        .map(([k, v]) => \`\${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}: \${v}\`)\r
        .join("; ");\r
      \r
      const attrStr = Object.entries(this.attributes)\r
        .map(([k, v]) => \`\${k}="\${v}"\`)\r
        .join(" ");\r
\r
      const renderedChildren = this.children\r
        .map(c => typeof c === "string" ? c : c.renderToString())\r
        .join("");\r
\r
      return \`<\${this.tag} \${attrStr} style="\${styleAttr}">\${renderedChildren}</\${this.tag}>\`;\r
    }\r
  };\r
}\r
\r
const uiCard = createVirtualElement(\r
  "div",\r
  { id: "student-card-1", class: "lab-card" },\r
  { backgroundColor: "#0f172a", color: "#f59e0b", padding: "16px", borderRadius: "12px" },\r
  [\r
    createVirtualElement("h2", {}, { fontSize: "20px", margin: "0" }, ["Student: Swadeep"]),\r
    createVirtualElement("p", {}, { color: "#94a3b8" }, ["Center: Barrackpore Lab · Status: Active"])\r
  ]\r
);\r
\r
console.log("Constructed Virtual DOM Markup:");\r
console.log(uiCard.renderToString());\r
\r
// ─── 2. SCRIPT EXECUTION TIMELINE: NORMAL VS ASYNC VS DEFER ──────\r
console.log("");\r
console.log("2. Script Loading & Execution Timeline Simulator:");\r
\r
function simulateScriptLoadingStrategies() {\r
  const timeline = [\r
    {\r
      mode: "Classic <script>",\r
      htmlParsing: "Paused immediately while script downloads & executes",\r
      domReadyEffect: "Blocks DOM parsing (Render Blocking)",\r
      executionOrder: "Strict sequential document order",\r
      bestUse: "Legacy inline dependencies"\r
    },\r
    {\r
      mode: "<script defer>",\r
      htmlParsing: "Continues in parallel without interruption",\r
      domReadyEffect: "Executes right before DOMContentLoaded event",\r
      executionOrder: "Guaranteed document order across all deferred scripts",\r
      bestUse: "Standard production scripts that need full DOM access"\r
    },\r
    {\r
      mode: "<script async>",\r
      htmlParsing: "Continues in parallel during download, pauses briefly to execute",\r
      domReadyEffect: "Executes the instant downloaded (non-deterministic timing)",\r
      executionOrder: "First-come-first-served (no guaranteed order)",\r
      bestUse: "Independent analytics / tracking scripts (Google Analytics)"\r
    }\r
  ];\r
\r
  console.table(timeline);\r
}\r
\r
simulateScriptLoadingStrategies();\r
\r
// ─── 3. DYNAMIC CLASSLIST & THEME TOGGLE ENGINE ──────────────────\r
console.log("");\r
console.log("3. Dynamic ClassList & Theme Mutation Controller:");\r
\r
class ThemeController {\r
  constructor(initialTheme = "dark") {\r
    this.currentTheme = initialTheme;\r
    this.classes = new Set(["font-sans", "selection:bg-amber-500/30"]);\r
    this.applyTheme(initialTheme);\r
  }\r
\r
  applyTheme(theme) {\r
    this.currentTheme = theme;\r
    if (theme === "dark") {\r
      this.classes.delete("bg-white");\r
      this.classes.delete("text-slate-900");\r
      this.classes.add("bg-slate-950");\r
      this.classes.add("text-slate-100");\r
    } else {\r
      this.classes.delete("bg-slate-950");\r
      this.classes.delete("text-slate-100");\r
      this.classes.add("bg-white");\r
      this.classes.add("text-slate-900");\r
    }\r
    console.log(\`Theme switched to '\${theme}'. Active Root Classes:\`, Array.from(this.classes).join(" "));\r
  }\r
\r
  toggle() {\r
    this.applyTheme(this.currentTheme === "dark" ? "light" : "dark");\r
  }\r
}\r
\r
const themeEngine = new ThemeController("dark");\r
themeEngine.toggle();\r
themeEngine.toggle();\r
\r
// ─── 4. REFLOW & REPAINT BATCHER (AVOIDING LAYOUT THRASHING) ─────\r
console.log("");\r
console.log("4. Layout Thrashing Elimination (Batching DOM Reads/Writes):");\r
\r
// Bad Pattern: Alternating read and write triggers multiple synchronous reflows\r
function simulateLayoutThrashing(elementCount) {\r
  let simulatedReflowCount = 0;\r
  for (let i = 0; i < elementCount; i++) {\r
    // Read (querying geometry)\r
    const read = i * 10;\r
    // Write (mutating style immediately)\r
    simulatedReflowCount++; // Browser forced to recalculate layout\r
  }\r
  return simulatedReflowCount;\r
}\r
\r
// Good Pattern: Read all metrics first, then batch all DOM writes together\r
function simulateBatchedOperations(elementCount) {\r
  const reads = [];\r
  // Phase 1: Batch Reads\r
  for (let i = 0; i < elementCount; i++) {\r
    reads.push(i * 10);\r
  }\r
  // Phase 2: Batch Writes (Single reflow trigger)\r
  const singleReflowCount = 1;\r
  return { readsCompleted: reads.length, reflowsTriggered: singleReflowCount };\r
}\r
\r
console.log("Layout Thrashing Reflows (5 iterations):", simulateLayoutThrashing(5));\r
console.log("Optimized Batched Result:", simulateBatchedOperations(5));\r
\r
// ─── 5. DATA-DRIVEN COMPONENT RENDERER ───────────────────────────\r
console.log("");\r
console.log("5. Data-Driven Dynamic Student Grid Renderer:");\r
\r
const studentDataset = [\r
  { id: 101, name: "Swadeep", city: "Barrackpore", grade: "A+" },\r
  { id: 102, name: "Tuhina", city: "Naihati", grade: "A+" },\r
  { id: 103, name: "Abhronila", city: "Ichapur", grade: "A" }\r
];\r
\r
function renderStudentTable(students) {\r
  return students.map(s => {\r
    return {\r
      "Roll ID": s.id,\r
      "Candidate Name": s.name,\r
      "Training Center": s.city + " Lab",\r
      "Assessment Grade": s.grade,\r
      "Verification Status": "Certified (Coder & AccoTax)"\r
    };\r
  });\r
}\r
\r
console.log("Rendered Component Table:");\r
console.table(renderStudentTable(studentDataset));\r
\r
console.log("");\r
console.log("✓ All 5 Topic 2 practical examples executed successfully.");\r
`;function w(){const s=i.useRef([]);i.useEffect(()=>{const n=new IntersectionObserver(r=>{r.forEach(a=>{a.isIntersecting&&a.target.classList.add("is-visible")})},{threshold:.08});return s.current.forEach(r=>{r&&n.observe(r)}),()=>n.disconnect()},[]);const t=n=>{n&&!s.current.includes(n)&&s.current.push(n)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .reveal-section {
          opacity: 0.99;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        .reveal-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}),e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[e.jsxs("header",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-700/60 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-lg",children:[e.jsx("span",{children:"⚡"}),e.jsx("span",{children:"Module 001_001_getting-started-with-javascript · Topic 2"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-sky-300 tracking-tight leading-tight",children:"How HTML, CSS, and JavaScript Work Together"}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed",children:"Master the Critical Rendering Path (CRP). Discover how the browser engine parses HTML into the DOM, CSS into the CSSOM, builds the Render Tree, computes Layout (Reflow), and coordinates with JavaScript for silky smooth 60fps execution."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2",children:[e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-400",children:"Course Code: JS-PRO-101"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-400",children:"Center: Coder & AccoTax (Barrackpore Lab)"}),e.jsx("span",{className:"px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400",children:"Mentor: Sukanta Hui"})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:border-slate-700 transition-all",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Detailed Discussion & The Rendering Pipeline"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["A web application is a harmonious collaboration between three foundational pillars: ",e.jsx("strong",{className:"text-amber-300",children:"HTML (Semantic Structure)"}),", ",e.jsx("strong",{className:"text-sky-300",children:"CSS (Visual Presentation)"}),", and ",e.jsx("strong",{className:"text-emerald-300",children:"JavaScript (Dynamic Behavior)"}),". When a browser receives network bytes, it transforms raw text into structured object models: the DOM (Document Object Model) and the CSSOM (CSS Object Model)."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-4",children:["JavaScript acts as the controller of these trees. It queries DOM nodes, reads computed geometry from the CSSOM, listens to user events, and applies targeted mutations. Understanding how script execution influences the ",e.jsx("strong",{className:"text-amber-300",children:"Critical Rendering Path"})," (and how loading attributes like ",e.jsx("code",{children:"defer"})," and ",e.jsx("code",{children:"async"})," operate) prevents common pitfalls like layout thrashing and render blocking."]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/90 border border-amber-900/40 text-sm text-slate-300 leading-relaxed space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-bold",children:[e.jsx("span",{children:"🏫"}),e.jsx("span",{children:"Classroom Scenario (Ichapur Lab):"})]}),e.jsxs("p",{children:["Student ",e.jsx("strong",{children:"Abhronila"})," created an interactive button in the ",e.jsx("code",{children:"<head>"})," of an HTML document and received a confusing error: ",e.jsx("code",{children:"TypeError: Cannot read properties of null (reading 'addEventListener')"}),". Mentor ",e.jsx("strong",{children:"Sukanta Hui"})," stepped through the browser parsing order to show that because the HTML parser had not yet encountered the ",e.jsx("code",{children:"<body>"}),", the button node did not exist in the DOM tree when the script ran. Adding the ",e.jsx("code",{children:"defer"})," attribute immediately solved the problem by delaying execution until DOM parsing completed."]})]})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," The Critical Rendering Path (CRP) Architecture"]}),e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 850 260",className:"w-full h-auto",role:"img","aria-label":"Critical Rendering Path Pipeline",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"crpGrad1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f59e0b",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#b45309",stopOpacity:"0.2"})]}),e.jsxs("linearGradient",{id:"crpGrad2",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#38bdf8",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#0284c7",stopOpacity:"0.2"})]}),e.jsxs("linearGradient",{id:"crpGrad3",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#047857",stopOpacity:"0.2"})]})]}),e.jsx("rect",{width:"850",height:"260",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("text",{x:"425",y:"30",fill:"#f8fafc",fontSize:"15",fontWeight:"bold",textAnchor:"middle",children:"Browser Critical Rendering Path (CRP) & JavaScript Interaction"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{width:"130",height:"60",rx:"8",fill:"url(#crpGrad1)",stroke:"#f59e0b"}),e.jsx("text",{x:"65",y:"26",fill:"#fef3c7",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"HTML Bytes"}),e.jsx("text",{x:"65",y:"44",fill:"#fef3c7",fontSize:"10",textAnchor:"middle",children:"→ DOM Tree"})]}),e.jsxs("g",{transform:"translate(30, 130)",children:[e.jsx("rect",{width:"130",height:"60",rx:"8",fill:"url(#crpGrad2)",stroke:"#38bdf8"}),e.jsx("text",{x:"65",y:"26",fill:"#e0f2fe",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"CSS Bytes"}),e.jsx("text",{x:"65",y:"44",fill:"#e0f2fe",fontSize:"10",textAnchor:"middle",children:"→ CSSOM Tree"})]}),e.jsxs("g",{transform:"translate(200, 90)",children:[e.jsx("rect",{width:"150",height:"60",rx:"8",fill:"#1e293b",stroke:"#fbbf24",strokeWidth:"1.5"}),e.jsx("text",{x:"75",y:"24",fill:"#fbbf24",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"JavaScript Engine"}),e.jsx("text",{x:"75",y:"42",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Mutates DOM & CSSOM"})]}),e.jsxs("g",{transform:"translate(390, 90)",children:[e.jsx("rect",{width:"130",height:"60",rx:"8",fill:"#1e293b",stroke:"#a855f7"}),e.jsx("text",{x:"65",y:"26",fill:"#d8b4fe",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"Render Tree"}),e.jsx("text",{x:"65",y:"44",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"Visible Nodes Only"})]}),e.jsxs("g",{transform:"translate(560, 90)",children:[e.jsx("rect",{width:"110",height:"60",rx:"8",fill:"#1e293b",stroke:"#ec4899"}),e.jsx("text",{x:"55",y:"26",fill:"#f472b6",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"Layout (Reflow)"}),e.jsx("text",{x:"55",y:"44",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"x, y, w, h boxes"})]}),e.jsxs("g",{transform:"translate(710, 90)",children:[e.jsx("rect",{width:"110",height:"60",rx:"8",fill:"url(#crpGrad3)",stroke:"#10b981"}),e.jsx("text",{x:"55",y:"26",fill:"#ecfdf5",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"Paint & Raster"}),e.jsx("text",{x:"55",y:"44",fill:"#d1fae5",fontSize:"9",textAnchor:"middle",children:"GPU Screen Pixels"})]}),e.jsx("path",{d:"M 160 80 L 200 110",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("path",{d:"M 160 160 L 200 130",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("path",{d:"M 350 120 L 390 120",stroke:"#fbbf24",strokeWidth:"2"}),e.jsx("path",{d:"M 520 120 L 560 120",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("path",{d:"M 670 120 L 710 120",stroke:"#ec4899",strokeWidth:"2"})]})}),e.jsx("p",{className:"text-xs text-slate-400 mt-3 text-center",children:"Figure 1.3: The Critical Rendering Path showing how JavaScript interlocks with HTML and CSS compilation."})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Technical Specifications & Script Loading Rules"]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed mb-6",children:["When the browser encounters a ",e.jsx("code",{children:"<script>"})," tag, its execution behavior depends critically on whether ",e.jsx("code",{children:"defer"}),", ",e.jsx("code",{children:"async"}),", or module semantics are specified."]}),e.jsx("div",{className:"overflow-x-auto mb-6",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse border border-slate-800",children:[e.jsx("thead",{className:"bg-slate-900/90 text-amber-300 uppercase text-xs",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border border-slate-800",children:"Script Strategy"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Download Behavior"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Execution Phase"}),e.jsx("th",{className:"p-3 border border-slate-800",children:"Recommended Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 font-mono text-xs",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-rose-400 font-bold",children:"Classic <script>"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Blocks HTML Parser completely during network download"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"Executes immediately on spot"}),e.jsx("td",{className:"p-3 text-slate-400 font-sans",children:"Legacy scripts or scripts at end of <body>"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"<script defer>"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Downloads in parallel in background without blocking"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"Executes in strict document order after DOM parsing"}),e.jsx("td",{className:"p-3 text-emerald-400 font-sans",children:"Gold standard for all application bundle scripts"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-sky-400 font-bold",children:"<script async>"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Downloads in parallel in background without blocking"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"Executes immediately the moment downloaded (out of order)"}),e.jsx("td",{className:"p-3 text-sky-400 font-sans",children:"Independent analytics & tracking widgets"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 text-purple-400 font-bold",children:'<script type="module">'}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Downloads in parallel; deferred by default"}),e.jsx("td",{className:"p-3 text-amber-300 font-sans",children:"Strict mode scoped; executes after DOMContentLoaded"}),e.jsx("td",{className:"p-3 text-purple-400 font-sans",children:"Modern ES Module architectures with import/export"})]})]})]})}),e.jsxs("div",{className:"mt-6 p-5 rounded-xl bg-slate-900/80 border border-rose-900/40 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls in DOM / CSS Interaction"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm text-slate-300 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-rose-300",children:"Layout Thrashing:"})," Querying geometry (",e.jsx("code",{children:"offsetWidth"}),") right after changing styles in a loop forces the engine into repeated synchronous reflows."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-amber-300",children:"Flash of Unstyled Content (FOUC):"})," Injecting critical layout CSS via asynchronous JS causes a visible layout jump during page load."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-sky-300",children:"Inline Style Specificity Wars:"})," Setting styles directly via ",e.jsx("code",{children:"el.style.color"})," overrides stylesheet rules, making dark mode transitions difficult."]})]})]})]})}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Interactive Monaco Playground: 5+ Practical Working Examples"]}),e.jsx("span",{className:"text-xs font-mono px-3 py-1 rounded bg-amber-950/60 border border-amber-800 text-amber-300",children:"Live In-Browser Execution"})]}),e.jsx("div",{className:"rounded-2xl border border-slate-800 overflow-hidden shadow-2xl bg-slate-900",children:e.jsx(c,{initialCode:p,title:"HowHtmlCssAndJavascriptWorkTogetherDemo.js"})})]}),e.jsxs("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12 space-y-6",children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚖️"})," Common Pitfalls vs Senior Best Practices"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold",children:[e.jsx("span",{children:"❌"}),e.jsx("span",{children:"Anti-Pattern: Multiple Reflow Injections"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Appending elements one-by-one inside a loop forces the browser to recalculate layout on every iteration."}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/50 text-xs font-mono text-rose-300 overflow-x-auto",children:`// ❌ AVOID: 100 separate DOM reflows!
for (let i = 0; i < 100; i++) {
  const item = document.createElement("li");
  item.textContent = "Student " + i;
  list.appendChild(item); // Costly reflow!
}`})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-6 shadow-lg space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-bold",children:[e.jsx("span",{children:"✓"}),e.jsx("span",{children:"Senior Pro: DocumentFragment Batching"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Assemble items off-screen inside a ",e.jsx("code",{children:"DocumentFragment"})," and perform a single atomic DOM insertion."]}),e.jsx("pre",{className:"p-4 rounded-xl bg-slate-950 border border-emerald-900/50 text-xs font-mono text-emerald-300 overflow-x-auto",children:`// ✓ RECOMMENDED: Exactly 1 atomic DOM reflow
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const item = document.createElement("li");
  item.textContent = "Student " + i;
  fragment.appendChild(item);
}
list.appendChild(fragment); // Single reflow!`})]})]})]}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-950/30 via-slate-900 to-purple-950/20 border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xl shadow-md",children:"💎"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs uppercase font-mono tracking-wider text-amber-400 font-bold block",children:"JavaScript Hidden Gem & Senior Pro Secret"}),e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"CSS Variable Reactivity via documentElement.style.setProperty"})]})]}),e.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed mb-6",children:"Instead of manually updating hundreds of DOM element inline styles, senior frontend engineers update root CSS custom properties. The browser recalculates styles across the entire tree efficiently with zero layout thrashing."}),e.jsx("div",{className:"rounded-xl border border-amber-900/50 bg-slate-950 p-4 font-mono text-xs text-amber-200 overflow-x-auto",children:e.jsx("pre",{children:`// 💎 SENIOR PRO SECRET: Instant Dynamic Theming across the whole app
function applyUserBrandTheme(primaryHex, accentHex) {
  const root = document.documentElement;
  root.style.setProperty("--brand-primary", primaryHex);
  root.style.setProperty("--brand-accent", accentHex);
}`})})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsxs("div",{className:"bg-indigo-950/20 border border-indigo-800/40 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-indigo-300 mb-3 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Architectural Mental Challenge: Think About This..."]}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed mb-4",children:["Why do CSS animations on ",e.jsx("code",{children:"transform"})," and ",e.jsx("code",{children:"opacity"})," run smoothly at 60fps even when heavy JavaScript code is busy calculating on the main CPU thread?"]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-indigo-900/50 text-xs sm:text-sm text-indigo-300 font-mono",children:["💡 Hint: ",e.jsx("code",{children:"transform"})," and ",e.jsx("code",{children:"opacity"})," bypass both the Layout and Paint phases, running directly on the GPU Compositor thread!"]})]})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(l,{title:"Frequently Asked Questions · How HTML, CSS, and JavaScript Work Together",subtitle:"Explore 25+ comprehensive questions on CRP, Reflow, Repaint, and script loading",questions:h})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(d,{content:m,title:"JavaScript Master Note · How HTML, CSS, and JavaScript Work Together",downloadFileName:"001_001_getting-started-with-javascript-topic2-note.txt"})}),e.jsx("section",{ref:t,className:"reveal-section max-w-5xl mx-auto mb-12",children:e.jsx(o,{note:"In my 27+ years of mentoring engineers at Coder & AccoTax in Barrackpore, I always teach students that writing high-performance JavaScript requires understanding the browser engine. Learn how the Critical Rendering Path works, and you will never write code that causes layout thrashing or stuttering animations."})})]})]})}export{w as default};
