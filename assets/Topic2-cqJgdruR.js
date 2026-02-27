import{r as l,j as e,f as n,h as r,p as o}from"./index-meFSU1Lv.js";import{J as t}from"./JavaCodeBlock-B-851DKW.js";import{m as a}from"./mermaid.core-C_SZmP-n.js";import{T as d}from"./triangle-alert-YazSyTjm.js";import"./prism-sFrOkMqg.js";import"./browser-vNTorZ_f.js";import"./prism-java-BwO6k4I_.js";const c=`
@keyframes fadeSlideUp {
  0%{opacity:0; transform:translateY(16px);}
  100%{opacity:1; transform:translateY(0);}
}
`;class w extends l.Component{constructor(s){super(s),this.state={mounted:!1}}componentDidMount(){this.setState({mounted:!0}),a.initialize({startOnLoad:!1,securityLevel:"loose",theme:"default"}),setTimeout(()=>{a.run({nodes:document.querySelectorAll(".mermaid")})},0)}render(){const s=this.state.mounted?"motion-safe:animate-[fadeSlideUp_0.6s_ease-out_forwards]":"opacity-0",i="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/80 dark:bg-slate-900/80 hover:shadow-lg transition-all duration-300";return e.jsxs("section",{className:"max-w-6xl mx-auto px-6 py-12 leading-relaxed text-slate-700 dark:text-slate-300",children:[e.jsx("style",{children:c}),e.jsx("h1",{className:`text-3xl font-semibold text-slate-900 dark:text-white mb-6 ${s}`,children:"Difference between while and do-while Loop"}),e.jsxs("div",{className:`${i} mb-8 ${s} animation-delay-[120ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2 mb-2 text-slate-900 dark:text-white",children:[e.jsx(n,{size:18})," Core Concept"]}),e.jsxs("p",{children:["The main difference between ",e.jsx("strong",{children:"while"})," and ",e.jsx("strong",{children:"do-while"}),"loops lies in ",e.jsx("em",{children:"when the condition is checked"}),"."]}),e.jsxs("p",{className:"mt-2",children:["In Shyamnagar centre, Swadeep checks the attendance sheet first before allowing students inside – that is like a ",e.jsx("strong",{children:"while loop"}),". But in Barrackpore lab, Devangshu always displays the menu at least once – that is like a ",e.jsx("strong",{children:"do-while loop"}),"."]})]}),e.jsx("div",{className:`${i} mb-10 ${s} animation-delay-[240ms]`,children:e.jsx("div",{className:"mermaid",children:`
flowchart LR
  A["while Loop"] --> B["Check Condition"]
  B -->|True| C["Execute Body"]
  C --> B
  B -->|False| D["Exit"]

  E["do-while Loop"] --> F["Execute Body"]
  F --> G["Check Condition"]
  G -->|True| F
  G -->|False| H["Exit"]
`})}),e.jsx("div",{className:`${i} mb-8 ${s} animation-delay-[360ms]`,children:e.jsxs("table",{className:"w-full text-sm border border-slate-700",children:[e.jsx("thead",{className:"bg-slate-800 text-slate-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 border",children:"while Loop"}),e.jsx("th",{className:"p-2 border",children:"do-while Loop"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border",children:"Condition checked first"}),e.jsx("td",{className:"p-2 border",children:"Condition checked later"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border",children:"May execute zero times"}),e.jsx("td",{className:"p-2 border",children:"Executes at least once"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border",children:"No semicolon after block"}),e.jsx("td",{className:"p-2 border",children:"Semicolon required"})]})]})]})}),e.jsxs("div",{className:`${i} mb-6 ${s} animation-delay-[480ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"Example 1 – while loop with false condition"}),e.jsx(t,{code:`int i = 10;
while(i < 5){
  System.out.print(i);
}`})]}),e.jsxs("div",{className:`${i} mb-6 ${s} animation-delay-[600ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"Example 2 – do-while with false condition"}),e.jsx(t,{code:`int i = 10;
do{
  System.out.print(i);
}while(i < 5);`})]}),e.jsxs("div",{className:`${i} mb-10 ${s} animation-delay-[720ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"Example 3 – Menu system"}),e.jsx(t,{code:`int choice;
do{
  System.out.println("1. Continue");
  System.out.println("2. Exit");
  choice = 2;
}while(choice != 2);`})]}),e.jsxs("div",{className:`${i} mb-8 ${s} animation-delay-[840ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(r,{size:18})," Hint"]}),e.jsx("p",{children:"Try changing the condition so that it becomes false from the beginning."})]}),e.jsxs("div",{className:`${i} mb-8 ${s} animation-delay-[960ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(d,{size:18})," Common Pitfalls"]}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"Forgetting semicolon in do-while"}),e.jsx("li",{children:"Assuming both behave same"}),e.jsx("li",{children:"Wrong loop choice for menu programs"})]})]}),e.jsxs("div",{className:`${i} border-l-4 border-sky-400 ${s} animation-delay-[1080ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(o,{size:18})," Mini Checklist"]}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"Use while when execution may be zero times"}),e.jsx("li",{children:"Use do-while for menu-driven programs"}),e.jsx("li",{children:"Remember semicolon in do-while"})]})]})]})}}export{w as default};
