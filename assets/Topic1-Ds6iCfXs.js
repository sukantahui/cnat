import{r as s,j as e}from"./index-Do7ncMju.js";class r extends s.Component{render(){return e.jsxs("div",{className:"space-y-8 text-slate-200",children:[e.jsx("h1",{className:"text-3xl font-bold text-sky-300",children:"Relative, Absolute & Mixed Cell References in Excel"}),e.jsx("p",{className:"text-slate-300",children:"Cell references decide how Excel formulas behave when you copy them. Mastering this topic removes 80% of formula errors."}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-300",children:"1️⃣ Relative Reference — A1 (Default)"}),e.jsx("p",{children:"Relative references change automatically based on position when copied."}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sm text-sky-300",children:`
Original Formula in C1:
=A1 + B1

Copy Down:
C2 → =A2 + B2
C3 → =A3 + B3
`}),e.jsx("p",{className:"text-slate-400",children:"📌 Used when each row has its own data like marks, sales or expenses."})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-300",children:"2️⃣ Absolute Reference — $A$1"}),e.jsx("p",{children:"Absolute references never change when copied."}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sm text-sky-300",children:`
Tax Rate stored in D1 = 18%

Formula:
=B2 * $D$1

Copied down:
=B3 * $D$1
=B4 * $D$1
`}),e.jsx("p",{className:"text-slate-400",children:"📌 Best for fixed values like tax rate, GST %, interest rate."})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-300",children:"3️⃣ Mixed References — $A1 or A$1"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sm text-sky-300",children:`
=A$1  → Row fixed
=$A1  → Column fixed
`}),e.jsx("p",{className:"text-slate-400",children:"📌 Used in multiplication tables, mark distribution grids etc."})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Real Life Example – Tuition Fee Sheet"}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl text-sm text-sky-300",children:`
Monthly Fee in B1 = 1200
Students in column A

Total Fee Formula:
=B$1 * A2
`})]}),e.jsxs("section",{className:"bg-red-950 p-4 rounded-xl border border-red-600",children:[e.jsx("h3",{className:"text-red-300 font-bold",children:"⚠ Common Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-red-200",children:[e.jsx("li",{children:"Forgetting $ while copying tax formulas"}),e.jsx("li",{children:"Using relative instead of absolute for constants"}),e.jsx("li",{children:"Not checking formula before drag-fill"})]})]}),e.jsxs("section",{className:"bg-emerald-950 p-4 rounded-xl border border-emerald-600",children:[e.jsx("h3",{className:"text-emerald-300 font-bold",children:"📝 Practice Task"}),e.jsx("p",{children:"Create a marks sheet with:"}),e.jsxs("ul",{className:"list-disc list-inside",children:[e.jsx("li",{children:"Each subject mark in columns"}),e.jsx("li",{children:"Total using relative reference"}),e.jsx("li",{children:"Grade slab using absolute reference"})]})]}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl border border-sky-600",children:[e.jsx("strong",{children:"Teacher’s Tip:"})," Press ",e.jsx("strong",{children:"F4"})," repeatedly to toggle reference types instantly."]})]})}}export{r as default};
