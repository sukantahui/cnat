import{r as i,j as e,E as t}from"./index-CwtuFwkW.js";import{C as s}from"./CodePenPlayground-CwrjULen.js";import"./rotate-ccw-oyqqrrFO.js";class a extends i.Component{render(){return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed",children:[e.jsxs("header",{className:"space-y-3",children:[e.jsxs("h1",{className:"text-2xl md:text-3xl font-bold text-sky-300 flex items-center gap-3",children:[e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 48 48",fill:"none",children:[e.jsx("rect",{x:"4",y:"4",width:"40",height:"40",rx:"10",fill:"#020617",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("rect",{x:"14",y:"14",width:"20",height:"14",rx:"3",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("rect",{x:"20",y:"30",width:"10",height:"4",rx:"2",fill:"#38bdf8"})]}),"Bounding & Positioning –"," ",e.jsx("span",{className:"text-emerald-300",children:"getBoundingClientRect() & Layout Measurement"})]}),e.jsxs("p",{className:"text-slate-400 text-sm md:text-base max-w-3xl",children:["In this ultra–expert topic, you’ll learn how to ",e.jsx("b",{children:"measure elements"})," ","on the page using ",e.jsx("code",{children:"getBoundingClientRect()"}),", understand"," ",e.jsx("b",{children:"viewport coordinates"}),", and build reusable utilities to place tooltips, dropdowns, modals, and floating elements ",e.jsx("b",{children:"pixel-perfect"}),". This is the foundation of engines like Popper.js, Material UI overlays, and advanced tutorial / onboarding systems."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-semibold text-sky-300",children:"1. Visual Model – Where is My Element on the Screen?"}),e.jsxs("p",{className:"text-slate-400 max-w-3xl text-sm md:text-base",children:["The browser draws your page inside a ",e.jsx("b",{children:"viewport"}),". Each element has:"]}),e.jsxs("ul",{className:"list-disc pl-6 text-sm text-slate-300 space-y-1",children:[e.jsxs("li",{children:["A ",e.jsx("b",{children:"position"})," (top, left) relative to the viewport."]}),e.jsxs("li",{children:["A ",e.jsx("b",{children:"size"})," (width, height)."]}),e.jsxs("li",{children:["A ",e.jsx("b",{children:"bounding box"})," (rectangle) used for hit-testing & layout."]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"360",height:"210",viewBox:"0 0 360 210",children:[e.jsx("rect",{x:"20",y:"20",width:"320",height:"170",rx:"12",fill:"#020617",stroke:"#1f2937"}),e.jsx("text",{x:"30",y:"38",fill:"#64748b",fontSize:"11",children:"viewport (browser visible area)"}),e.jsx("rect",{x:"110",y:"80",width:"130",height:"70",rx:"8",fill:"#0f172a",stroke:"#38bdf8"}),e.jsx("text",{x:"130",y:"105",fill:"#e5e7eb",fontSize:"12",children:".card"}),e.jsx("text",{x:"130",y:"122",fill:"#22c55e",fontSize:"10",children:"width, height"}),e.jsx("line",{x1:"110",y1:"80",x2:"110",y2:"50",stroke:"#38bdf8",strokeWidth:"1.5",markerEnd:"url(#arrowHead15)"}),e.jsx("text",{x:"82",y:"60",fill:"#38bdf8",fontSize:"10",children:"top"}),e.jsx("line",{x1:"110",y1:"80",x2:"70",y2:"80",stroke:"#38bdf8",strokeWidth:"1.5",markerEnd:"url(#arrowHead15)"}),e.jsx("text",{x:"60",y:"92",fill:"#38bdf8",fontSize:"10",children:"left"}),e.jsx("circle",{cx:"175",cy:"115",r:"4",fill:"#f97316"}),e.jsx("text",{x:"185",y:"118",fill:"#f97316",fontSize:"10",children:"center"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowHead15",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0 0 L6 3 L0 6 Z",fill:"#38bdf8"})})})]})}),e.jsxs("p",{className:"text-slate-400 text-xs md:text-sm max-w-2xl",children:["To access this rectangle in JavaScript, you use"," ",e.jsx("code",{children:"element.getBoundingClientRect()"}),"."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-semibold text-emerald-300",children:"2. getBoundingClientRect() — Syntax, Return Object & Properties"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base max-w-3xl",children:[e.jsx("code",{children:"getBoundingClientRect()"})," returns a ",e.jsx("b",{children:"DOMRect"})," object describing the element's size and position relative to the"," ",e.jsx("b",{children:"viewport"})," (not the whole document)."]}),e.jsx(t,{language:"javascript",initialCode:`// Syntax:
const rect = element.getBoundingClientRect();

// Return Type:
  // DOMRect object with the following useful properties:
  // rect.top      → distance from viewport's top (px)
  // rect.left     → distance from viewport's left (px)
  // rect.right    → distance from viewport's left + width (px)
  // rect.bottom   → distance from viewport's top + height (px)
  // rect.width    → element's CSS pixel width
  // rect.height   → element's CSS pixel height
  // rect.x, rect.y → aliases for left and top in modern browsers`}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-900/70 border border-slate-700 rounded-xl p-4",children:[e.jsx("h3",{className:"font-semibold text-sky-300 mb-2",children:"✅ What the values mean"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-slate-300",children:[e.jsxs("li",{children:[e.jsx("code",{children:"top"})," / ",e.jsx("code",{children:"left"})," – position in the current scroll viewport."]}),e.jsxs("li",{children:[e.jsx("code",{children:"bottom"})," / ",e.jsx("code",{children:"right"})," – useful for placing elements ",e.jsx("b",{children:"below"})," or ",e.jsx("b",{children:"beside"})," another element."]}),e.jsxs("li",{children:[e.jsx("code",{children:"width"})," / ",e.jsx("code",{children:"height"})," – layout dimensions in CSS pixels."]})]})]}),e.jsxs("div",{className:"bg-slate-900/70 border border-slate-700 rounded-xl p-4",children:[e.jsx("h3",{className:"font-semibold text-rose-300 mb-2",children:"⚠️ Common confusion"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-slate-300",children:[e.jsxs("li",{children:["Values are ",e.jsx("b",{children:"relative to viewport"}),", not to the entire document."]}),e.jsxs("li",{children:["If you scroll, ",e.jsx("code",{children:"top"}),' changes even if the element is visually "in the same place".']}),e.jsxs("li",{children:["For absolute coordinates in the document, you must combine"," ",e.jsx("code",{children:"rect"})," with ",e.jsx("code",{children:"window.scrollX"})," /",e.jsx("code",{children:"scrollY"}),"."]})]})]})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-semibold text-sky-300",children:"3. Example – Inspecting a Card's Bounding Box"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base",children:"First, let's just log the bounding box properties of a simple card and highlight it visually."}),e.jsx(s,{initialHTML:`<div class="card" id="myCard">
  <h3>Coder &amp; AccoTax</h3>
  <p>DOM Measurement Demo (getBoundingClientRect)</p>
  <button id="measureBtn">Measure Card</button>
</div>

<pre id="output"></pre>`,initialCSS:`body {
  font-family: system-ui, sans-serif;
  background: #020617;
  color: #e5e7eb;
  padding: 20px;
}

.card {
  width: 260px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #38bdf8;
  background: radial-gradient(circle at top, #0f172a, #020617);
  box-shadow: 0 10px 25px rgba(15,23,42,0.8);
  margin-bottom: 16px;
}

.card.highlight {
  outline: 2px dashed #fbbf24;
  outline-offset: 4px;
}

#measureBtn {
  margin-top: 8px;
  padding: 6px 10px;
  border-radius: 6px;
  border: none;
  background: #38bdf8;
  color: #020617;
  font-weight: 600;
  cursor: pointer;
}

#measureBtn:hover {
  background: #22c55e;
}

#output {
  background: #020617;
  border-radius: 8px;
  border: 1px solid #1f2937;
  padding: 10px;
  font-size: 12px;
  white-space: pre-wrap;
}`,initialJS:`const card = document.getElementById("myCard");
const btn = document.getElementById("measureBtn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  const rect = card.getBoundingClientRect();

  card.classList.add("highlight");
  setTimeout(() => card.classList.remove("highlight"), 800);

  output.textContent = [
    "top:    " + rect.top.toFixed(1),
    "left:   " + rect.left.toFixed(1),
    "width:  " + rect.width.toFixed(1),
    "height: " + rect.height.toFixed(1),
    "bottom: " + rect.bottom.toFixed(1),
    "right:  " + rect.right.toFixed(1)
  ].join("\\n");
});`}),e.jsxs("p",{className:"text-xs text-slate-400 max-w-2xl",children:["Try resizing the browser or scrolling (if there is scroll). You will see how the values shift, especially ",e.jsx("code",{children:"top"})," and"," ",e.jsx("code",{children:"left"}),"."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-semibold text-emerald-300",children:"4. Real Use Case – Position a Tooltip Under a Button"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base max-w-3xl",children:["A classic use case: show a tooltip or dropdown ",e.jsx("b",{children:"exactly below"})," a button, aligned by ",e.jsx("code",{children:"left"})," or ",e.jsx("code",{children:"center"}),"."]}),e.jsx(s,{initialHTML:`<button id="infoBtn" class="btn">
  ℹ️ Hover me
</button>

<div id="tooltip" class="tooltip" hidden>
  Hello Baba! I'm a smart tooltip.
</div>`,initialCSS:`body {
  font-family: system-ui, sans-serif;
  background: #020617;
  color: #e5e7eb;
  padding: 40px;
}

.btn {
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid #38bdf8;
  background: #0f172a;
  color: #e5e7eb;
  cursor: pointer;
}

.tooltip {
  position: fixed;
  padding: 8px 12px;
  background: #020617;
  border-radius: 8px;
  border: 1px solid #38bdf8;
  box-shadow: 0 10px 30px rgba(15,23,42,0.8);
  font-size: 13px;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.15s ease, transform 0.15s ease;
  pointer-events: none;
}

.tooltip--visible {
  opacity: 1;
  transform: translateY(0);
}`,initialJS:`const btn = document.getElementById("infoBtn");
const tooltip = document.getElementById("tooltip");

btn.addEventListener("mouseenter", () => {
  const rect = btn.getBoundingClientRect();

  // Place tooltip below the button, aligned center
  const tooltipWidth = 200; // assume ~200px, or measure if needed
  const centerX = rect.left + rect.width / 2;

  tooltip.style.top = rect.bottom + 8 + "px";
  tooltip.style.left = centerX - tooltipWidth / 2 + "px";
  tooltip.style.width = tooltipWidth + "px";
  tooltip.hidden = false;

  requestAnimationFrame(() => {
    tooltip.classList.add("tooltip--visible");
  });
});

btn.addEventListener("mouseleave", () => {
  tooltip.classList.remove("tooltip--visible");
  setTimeout(() => (tooltip.hidden = true), 160);
});`}),e.jsxs("p",{className:"text-xs text-slate-400 max-w-2xl",children:["We used ",e.jsx("code",{children:"rect.bottom"})," to place the tooltip just below the button and ",e.jsx("code",{children:"rect.left + rect.width / 2"})," to align it with the center. This pattern is used in dropdown menus, popovers, and teaching overlays."]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-semibold text-sky-300",children:"5. Viewport vs Document — Combining with scrollX / scrollY"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base max-w-3xl",children:["Sometimes you need coordinates relative to the ",e.jsx("b",{children:"whole page"})," ","(document), not the visible viewport. In that case:"]}),e.jsx(t,{language:"javascript",initialCode:`const rect = element.getBoundingClientRect();

// viewport-relative
const viewportTop = rect.top;
const viewportLeft = rect.left;

// document-relative (absolute)
const absoluteTop = rect.top + window.scrollY;
const absoluteLeft = rect.left + window.scrollX;

console.log({ viewportTop, viewportLeft, absoluteTop, absoluteLeft });`}),e.jsxs("div",{className:"bg-slate-900/70 border border-slate-700 rounded-xl p-4 text-sm space-y-2",children:[e.jsx("h3",{className:"font-semibold text-amber-300",children:"When do we need document-relative coordinates?"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-slate-300",children:[e.jsx("li",{children:"Saving the position in a database for later restore."}),e.jsx("li",{children:"Drawing an overlay on a canvas positioned over the document."}),e.jsxs("li",{children:["Syncing with other systems that use ",e.jsx("b",{children:"scroll-independent"})," ","coordinates."]})]})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-semibold text-emerald-300",children:"6. Building a Reusable measureElement() Utility"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base max-w-3xl",children:["Let's wrap ",e.jsx("code",{children:"getBoundingClientRect()"})," into a small"," ",e.jsx("b",{children:"helper function"})," that returns friendly values including"," ",e.jsx("code",{children:"centerX"})," and ",e.jsx("code",{children:"centerY"}),"."]}),e.jsx(t,{language:"javascript",initialCode:`/**
 * Measure an element's box in viewport and document coordinates.
 * @param {Element} el - DOM element to measure
 * @returns {{
 *   top: number, left: number, right: number, bottom: number,
 *   width: number, height: number,
 *   centerX: number, centerY: number,
 *   absTop: number, absLeft: number
 * }}
 */
function measureElement(el) {
  const rect = el.getBoundingClientRect();

  const top = rect.top;
  const left = rect.left;
  const width = rect.width;
  const height = rect.height;

  const centerX = left + width / 2;
  const centerY = top + height / 2;

  const absTop = top + window.scrollY;
  const absLeft = left + window.scrollX;

  return {
    top,
    left,
    right: rect.right,
    bottom: rect.bottom,
    width,
    height,
    centerX,
    centerY,
    absTop,
    absLeft,
  };
}

// Usage:
const box = document.querySelector(".box");
const info = measureElement(box);
console.log(info.centerX, info.centerY);`}),e.jsx("p",{className:"text-xs text-slate-400 max-w-2xl",children:"This kind of utility is reused everywhere: tooltips, context menus, drag-and-drop indicators, custom cursor effects, and more."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-semibold text-sky-300",children:"7. Example – Smooth Scroll to Center an Element on Screen"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base max-w-3xl",children:"Many tutorials and dashboards scroll to bring a particular card or error field into the center of the screen. Let's build that with our measurement helper."}),e.jsx(t,{language:"javascript",initialCode:`function scrollElementToCenter(el) {
  const rect = el.getBoundingClientRect();
  const elementCenter = rect.top + rect.height / 2;
  const viewportCenter = window.innerHeight / 2;

  const scrollOffset = elementCenter - viewportCenter;

  window.scrollBy({
    top: scrollOffset,
    left: 0,
    behavior: "smooth",
  });
}

// Usage:
const target = document.querySelector("#highlightMe");
scrollElementToCenter(target);`}),e.jsx("p",{className:"text-xs text-slate-400 max-w-2xl",children:"This UX pattern is used in form validation (scrolling to the first error field) and guided walkthroughs."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-semibold text-emerald-300",children:"8. Avoiding Screen Overflow – Basic Collision Handling"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base max-w-3xl",children:["What if the tooltip goes outside the screen? We can clamp the"," ",e.jsx("code",{children:"left"})," position so it always stays inside the viewport."]}),e.jsx(t,{language:"javascript",initialCode:`function positionTooltipBelow(target, tooltip, padding = 8) {
  const rect = target.getBoundingClientRect();
  const viewportWidth = window.innerWidth;

  const tooltipWidth = tooltip.offsetWidth || 220;
  let left = rect.left + rect.width / 2 - tooltipWidth / 2;

  // Clamp within viewport
  const minLeft = padding;
  const maxLeft = viewportWidth - tooltipWidth - padding;

  left = Math.max(minLeft, Math.min(left, maxLeft));

  tooltip.style.position = "fixed";
  tooltip.style.top = rect.bottom + padding + "px";
  tooltip.style.left = left + "px";
}

// Usage:
// positionTooltipBelow(button, tooltipElement);`}),e.jsx("p",{className:"text-xs text-slate-400 max-w-2xl",children:'In professional UI libraries, this logic becomes a full "popper engine", with many strategies: top, bottom, left, right, flip, etc. Here you see the basic building block.'})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-semibold text-pink-300",children:"9. Mini Project – Guided Highlight Overlay (Tutorial Step)"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base max-w-3xl",children:["Let's create a ",e.jsx("b",{children:"floating rectangle"})," that highlights any element we choose – like the first step of a product tour."]}),e.jsx(s,{initialHTML:`<div class="toolbar">
  <button class="tool" data-target="#box1">Highlight Box 1</button>
  <button class="tool" data-target="#box2">Highlight Box 2</button>
  <button class="tool" data-target="#box3">Highlight Box 3</button>
</div>

<div class="grid">
  <div class="box" id="box1">Box 1</div>
  <div class="box" id="box2">Box 2</div>
  <div class="box" id="box3">Box 3</div>
</div>

<div id="overlay" class="overlay"></div>`,initialCSS:`body {
  font-family: system-ui, sans-serif;
  background: #020617;
  color: #e5e7eb;
  padding: 24px;
}

.toolbar {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.tool {
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid #38bdf8;
  background: #0f172a;
  color: #e5e7eb;
  cursor: pointer;
  font-size: 12px;
}

.grid {
  display: flex;
  gap: 16px;
}

.box {
  flex: 1;
  height: 80px;
  border-radius: 12px;
  border: 1px solid #1f2937;
  background: radial-gradient(circle at top, #0f172a, #020617);
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: fixed;
  border-radius: 12px;
  border: 2px solid #fbbf24;
  box-shadow: 0 0 0 9999px rgba(0,0,0,0.6);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform: scale(0.98);
}

.overlay--visible {
  opacity: 1;
  transform: scale(1);
}`,initialJS:`const overlay = document.getElementById("overlay");
const tools = document.querySelectorAll(".tool");

function highlight(selector) {
  const target = document.querySelector(selector);
  if (!target) return;

  const rect = target.getBoundingClientRect();

  overlay.style.top = rect.top + "px";
  overlay.style.left = rect.left + "px";
  overlay.style.width = rect.width + "px";
  overlay.style.height = rect.height + "px";

  overlay.classList.add("overlay--visible");
}

tools.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetSelector = btn.dataset.target;
    highlight(targetSelector);
  });
});

// Hide highlight on ESC key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.classList.remove("overlay--visible");
  }
});`}),e.jsx("p",{className:"text-xs text-slate-400 max-w-2xl",children:'You just built a basic "focus ring" overlay. Product tours, spotlight effects, and training overlays are combinations of this technique plus step-by-step messaging.'})]}),e.jsxs("footer",{className:"pt-6 border-t border-slate-800 text-slate-400 text-xs md:text-sm",children:[e.jsxs("p",{className:"mb-2",children:["In ",e.jsx("b",{children:"Topic15"}),", you mastered ",e.jsx("code",{children:"getBoundingClientRect()"}),", viewport vs document coordinates, utility-based measurement, tooltip positioning, collision avoidance, smooth centering, and highlight overlays."]}),e.jsxs("p",{children:['These skills are exactly what advanced frontend libraries use under the hood. With this, your students move from "beginner JS" to'," ",e.jsx("b",{children:"DOM engineer"})," level."]})]})]})}}export{a as default};
