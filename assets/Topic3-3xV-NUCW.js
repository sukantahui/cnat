import{r as s,j as e}from"./index-CYFMPjoD.js";class x extends s.Component{render(){return e.jsxs("div",{className:"space-y-8 text-slate-200",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Basic Excel Functions"}),e.jsx("h2",{className:"text-xl font-semibold text-emerald-300",children:"1. SUM"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sky-300 text-sm",children:"=SUM(A1:A10)"}),e.jsx("h2",{className:"text-xl font-semibold text-emerald-300",children:"2. AVERAGE"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sky-300 text-sm",children:"=AVERAGE(B1:B5)"}),e.jsx("h2",{className:"text-xl font-semibold text-emerald-300",children:"3. MIN & MAX"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sky-300 text-sm",children:`
=MIN(C1:C10)
=MAX(C1:C10)
`}),e.jsx("h2",{className:"text-xl font-semibold text-emerald-300",children:"4. COUNT & COUNTA"}),e.jsx("pre",{className:"bg-slate-900 p-4 rounded-xl text-sky-300 text-sm",children:`
COUNT  → Numbers only
COUNTA → Anything (text + numbers)
`}),e.jsx("h3",{className:"text-xl text-sky-300 font-semibold",children:"Example Table"}),e.jsx("pre",{className:"bg-slate-800 p-4 rounded-xl text-sm text-sky-400",children:`
     A
1   10
2   20
3   30
4   Good
5   50
`}),e.jsxs("p",{children:[e.jsx("strong",{children:"=COUNT(A1:A5)"})," → 4",e.jsx("strong",{children:"=COUNTA(A1:A5)"})," → 5"]})]})}}export{x as default};
