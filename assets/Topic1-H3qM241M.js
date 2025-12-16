import{r as s,j as e}from"./index-BMdPLlUD.js";class r extends s.Component{render(){return e.jsxs("div",{className:"space-y-6 text-slate-200",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Relative, Absolute & Mixed Cell References"}),e.jsx("h2",{className:"text-xl font-semibold text-emerald-300",children:"1. Relative Reference (default)"}),e.jsxs("p",{children:["Changes automatically when copied. Example: ",e.jsx("strong",{children:"=A1 + B1"})]}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sm text-sky-300",children:`
Copy down:
Row 1 → =A1 + B1
Row 2 → =A2 + B2
Row 3 → =A3 + B3
`}),e.jsx("h2",{className:"text-xl font-semibold text-emerald-300",children:"2. Absolute Reference — $A$1"}),e.jsx("p",{children:"Does NOT change when copied."}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sm text-sky-300",children:`
=$A$1 + B1
`}),e.jsxs("p",{children:[e.jsx("strong",{children:"$"})," freezes row, column, or both."]}),e.jsx("h2",{className:"text-xl font-semibold text-emerald-300",children:"3. Mixed References"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sm text-sky-300",children:`
=A$1   → Row fixed
=$A1   → Column fixed
`}),e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Real Example"}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl text-sm text-sky-300",children:`
Price in A1 = 50
Quantity in B1 = 10
Total = A1 * B1

Copying total down needs:
= A$1 * B1   (Price fixed)
`}),e.jsxs("div",{className:"bg-slate-800 p-4 rounded-xl border border-emerald-600",children:[e.jsx("strong",{children:"Teacher’s Tip:"})," Press ",e.jsx("strong",{children:"F4"})," to toggle reference types quickly."]})]})}}export{r as default};
