import{r as n,j as e,B as l,b as r,h as o}from"./index-BnX9VYl0.js";import{J as i}from"./JavaCodeBlock-CbdYvnqq.js";import{m as a}from"./mermaid.core-Clh1eDQY.js";import{T as d}from"./triangle-alert-ouPRcSFF.js";import"./prism-D5YLb824.js";import"./browser-BtDEQ5Uv.js";import"./prism-java-CQA27I6F.js";const m=`
@keyframes fadeSlideUp {
  0%{opacity:0; transform:translateY(16px);}
  100%{opacity:1; transform:translateY(0);}
}
`;class g extends n.Component{constructor(s){super(s),this.state={mounted:!1}}componentDidMount(){this.setState({mounted:!0}),a.initialize({startOnLoad:!1,securityLevel:"loose",theme:"default"}),setTimeout(()=>{a.run({nodes:document.querySelectorAll(".mermaid")})},0)}render(){const s=this.state.mounted?"motion-safe:animate-[fadeSlideUp_0.6s_ease-out_forwards]":"opacity-0",t="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/80 dark:bg-slate-900/80 hover:shadow-lg transition-all duration-300";return e.jsxs("section",{className:"max-w-6xl mx-auto px-6 py-12 leading-relaxed text-slate-700 dark:text-slate-300",children:[e.jsx("style",{children:m}),e.jsx("h1",{className:`text-3xl font-semibold text-slate-900 dark:text-white mb-6 ${s}`,children:"Iterative Constructs – while Loop"}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[120ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2 mb-2 text-slate-900 dark:text-white",children:[e.jsx(l,{size:18})," What is a while loop?"]}),e.jsxs("p",{children:["A ",e.jsx("strong",{children:"while loop"})," executes a block of code repeatedly as long as the given condition remains ",e.jsx("strong",{children:"true"}),". The condition is checked ",e.jsx("em",{children:"before"})," the loop body runs."]}),e.jsxs("p",{className:"mt-2",children:["Example: In Barrackpore coaching centre, Ritaja keeps checking the attendance list ",e.jsx("em",{children:"while"})," students are still entering the room."]})]}),e.jsx("div",{className:`${t} mb-10 ${s} animation-delay-[240ms]`,children:e.jsx("div",{className:"mermaid",children:`
flowchart TD
  A["Start"] --> B["Check Condition"]
  B -->|True| C["Execute Statements"]
  C --> D["Update Variable"]
  D --> B
  B -->|False| E["Exit Loop"]
`})}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[360ms]`,children:[e.jsx("p",{className:"font-medium text-slate-900 dark:text-white",children:"Prototype / Signature:"}),e.jsx("code",{className:"block mt-1",children:"while(condition) { statements; }"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," none"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," repeat unknown number of times"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When to use:"})," when iteration count is not fixed"]})]})]}),e.jsxs("div",{className:`${t} mb-6 ${s} animation-delay-[480ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"Example 1 – Print numbers from 1 to 5"}),e.jsx(i,{code:`int i = 1;
while(i <= 5){
  System.out.print(i + " ");
  i++;
}`})]}),e.jsxs("div",{className:`${t} mb-6 ${s} animation-delay-[600ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"Example 2 – Sum of digits"}),e.jsx(i,{code:`int n = 248, sum = 0;
while(n > 0){
  sum += n % 10;
  n = n / 10;
}`})]}),e.jsxs("div",{className:`${t} mb-10 ${s} animation-delay-[720ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"Example 3 – Reverse a number"}),e.jsx(i,{code:`int n = 1234, rev = 0;
while(n > 0){
  rev = rev * 10 + (n % 10);
  n = n / 10;
}`})]}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[840ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(r,{size:18})," Hint"]}),e.jsx("p",{children:"Think about what will happen if the update statement is removed."})]}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[960ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(d,{size:18})," Common Pitfalls"]}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"Forgetting to update loop variable → infinite loop"}),e.jsx("li",{children:"Wrong condition causing zero execution"}),e.jsx("li",{children:"Not initializing variables"})]})]}),e.jsxs("div",{className:`${t} border-l-4 border-sky-400 ${s} animation-delay-[1080ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(o,{size:18})," Mini Checklist"]}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"Initialization done"}),e.jsx("li",{children:"Condition meaningful"}),e.jsx("li",{children:"Update included"})]})]})]})}}export{g as default};
