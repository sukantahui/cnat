import{r as l,j as e,B as n,b as o,h as r}from"./index-Di8hoHjl.js";import{J as i}from"./JavaCodeBlock-7tq1suHX.js";import{m as a}from"./mermaid.core-D7Gm51z7.js";import{T as d}from"./triangle-alert-3lhOHNzo.js";import"./prism-sjXmQqqR.js";import"./browser-GmOkCCxf.js";import"./prism-java-CQA27I6F.js";const m=`
@keyframes fadeSlideUp {
  0%{opacity:0; transform:translateY(16px);}
  100%{opacity:1; transform:translateY(0);}
}
`;class y extends l.Component{constructor(s){super(s),this.state={mounted:!1}}componentDidMount(){this.setState({mounted:!0}),a.initialize({startOnLoad:!1,securityLevel:"loose",theme:"default"}),setTimeout(()=>{a.run({nodes:document.querySelectorAll(".mermaid")})},0)}render(){const s=this.state.mounted?"motion-safe:animate-[fadeSlideUp_0.6s_ease-out_forwards]":"opacity-0",t="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/80 dark:bg-slate-900/80 hover:shadow-lg transition-all duration-300";return e.jsxs("section",{className:"max-w-6xl mx-auto px-6 py-12 leading-relaxed text-slate-700 dark:text-slate-300",children:[e.jsx("style",{children:m}),e.jsx("h1",{className:`text-3xl font-semibold text-slate-900 dark:text-white mb-6 ${s}`,children:"Iterative Constructs – do-while Loop"}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[120ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2 mb-2 text-slate-900 dark:text-white",children:[e.jsx(n,{size:18})," What is a do-while loop?"]}),e.jsxs("p",{children:["A ",e.jsx("strong",{children:"do-while loop"})," is similar to the while loop, but the condition is checked ",e.jsx("em",{children:"after"})," the loop body executes. Therefore, the loop body is guaranteed to run at least once."]}),e.jsx("p",{className:"mt-2",children:"Example: Abhronila at Ichapur always shows the menu at least once, even if the user immediately chooses to exit."})]}),e.jsx("div",{className:`${t} mb-10 ${s} animation-delay-[240ms]`,children:e.jsx("div",{className:"mermaid",children:`
flowchart TD
  A["Start"] --> B["Execute Statements"]
  B --> C["Check Condition"]
  C -->|True| B
  C -->|False| D["Exit Loop"]
`})}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[360ms]`,children:[e.jsx("p",{className:"font-medium text-slate-900 dark:text-white",children:"Prototype / Signature:"}),e.jsx("code",{className:"block mt-1",children:"do { statements; } while(condition);"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," none"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," execute at least once"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When to use:"})," menu-driven programs"]})]})]}),e.jsxs("div",{className:`${t} mb-6 ${s} animation-delay-[480ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"Example 1 – Print numbers 1 to 5"}),e.jsx(i,{code:`int i = 1;
do{
  System.out.print(i + " ");
  i++;
}while(i <= 5);`})]}),e.jsxs("div",{className:`${t} mb-6 ${s} animation-delay-[600ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"Example 2 – Menu shown at least once"}),e.jsx(i,{code:`int choice;
do{
  System.out.println("1. Add");
  System.out.println("2. Exit");
  choice = 2;
}while(choice != 2);`})]}),e.jsxs("div",{className:`${t} mb-10 ${s} animation-delay-[720ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"Example 3 – Reverse digits using do-while"}),e.jsx(i,{code:`int n = 120, rev = 0;
do{
  rev = rev * 10 + (n % 10);
  n = n / 10;
}while(n > 0);`})]}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[840ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(o,{size:18})," Hint"]}),e.jsx("p",{children:"Observe carefully how do-while behaves when the condition is false initially."})]}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[960ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(d,{size:18})," Common Pitfalls"]}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"Missing semicolon after while(condition)"}),e.jsx("li",{children:"Assuming it behaves like while loop"}),e.jsx("li",{children:"Forgetting update statement"})]})]}),e.jsxs("div",{className:`${t} border-l-4 border-sky-400 ${s} animation-delay-[1080ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(r,{size:18})," Mini Checklist"]}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"Body executes at least once"}),e.jsx("li",{children:"Condition placed at bottom"}),e.jsx("li",{children:"Update present"})]})]})]})}}export{y as default};
