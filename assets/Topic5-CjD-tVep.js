import{r as s,j as e}from"./index-DdrZIREY.js";class t extends s.Component{render(){return e.jsxs("div",{className:"space-y-6 text-slate-200",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Copying Formulas Using Fill Handle"}),e.jsx("p",{children:"Fill handle is the small square in the bottom-right corner of a selected cell."}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl text-sm text-sky-300",children:`
=A1 + B1

↓ Drag down

=A2 + B2
=A3 + B3
=A4 + B4
`}),e.jsx("h2",{className:"text-xl text-emerald-300 font-semibold",children:"Reference Changes"}),e.jsxs("p",{children:["Relative references change; absolute references ",e.jsx("strong",{children:"do not"}),"."]}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl text-sm text-sky-300",children:`
=A$1 + B1   → Row fixed
=$A1 + B1   → Column fixed
`}),e.jsxs("div",{className:"bg-slate-800 p-4 border border-emerald-600 rounded-xl",children:[e.jsx("strong",{children:"Teacher’s Tip:"}),"Press ",e.jsx("strong",{children:"Ctrl + D"})," to fill down."]})]})}}export{t as default};
