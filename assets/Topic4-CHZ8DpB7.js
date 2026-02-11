import{r as l,j as e,B as r,b as n,h as d}from"./index-D1bhWpF_.js";import{J as t}from"./JavaCodeBlock-BW6WojPN.js";import{m as i}from"./mermaid.core-DeYS-fPe.js";import{T as c}from"./triangle-alert-BcnL4By2.js";import"./prism-B_z3Scul.js";import"./browser-ChFpI3yy.js";import"./prism-java-CQA27I6F.js";const o=`
@keyframes fadeSlideUp {
  0%{opacity:0; transform:translateY(18px);}
  100%{opacity:1; transform:translateY(0);}
}
`;class f extends l.Component{constructor(s){super(s),this.state={mounted:!1}}componentDidMount(){this.setState({mounted:!0}),i.initialize({startOnLoad:!1,securityLevel:"loose",theme:"default"}),setTimeout(()=>{i.run({nodes:document.querySelectorAll(".mermaid")})},0)}render(){const s=this.state.mounted?"motion-safe:animate-[fadeSlideUp_0.6s_ease-out_forwards]":"opacity-0",a="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/80 dark:bg-slate-900/80 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300";return e.jsxs("section",{className:"max-w-6xl mx-auto px-6 py-12 leading-relaxed text-slate-700 dark:text-slate-300",children:[e.jsx("style",{children:o}),e.jsx("h1",{className:`text-3xl font-semibold text-slate-900 dark:text-white mb-6 ${s}`,children:"Java Control Flow – switch-case Statement"}),e.jsxs("div",{className:`${a} mb-8 ${s} animation-delay-[120ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2 text-slate-900 dark:text-white mb-2",children:[e.jsx(r,{size:18})," Concept Explanation"]}),e.jsxs("p",{children:["The ",e.jsx("strong",{children:"switch-case"})," statement is used when a variable must be compared against multiple fixed values. It is cleaner and faster than writing many ",e.jsx("code",{children:"else-if"})," conditions."]}),e.jsx("p",{className:"mt-2",children:"Example: In Barrackpore school, student grade is decided based on grade code — A, B, C, D — this fits perfectly with switch-case."})]}),e.jsx("div",{className:`${a} mb-10 ${s} animation-delay-[240ms]`,children:e.jsx("div",{className:"mermaid",children:`
flowchart TD
  A["Read gradeCode"] --> B{"gradeCode"}
  B -->|A| C["Excellent"]
  B -->|B| D["Very Good"]
  B -->|C| E["Good"]
  B -->|D| F["Needs Improvement"]
  B -->|default| G["Invalid Grade"]
`})}),e.jsxs("div",{className:`${a} mb-10 ${s} animation-delay-[360ms]`,children:[e.jsx("p",{children:e.jsx("strong",{children:"Prototype / Signature:"})}),e.jsx("p",{className:"mb-2",children:e.jsx("code",{children:"switch(expression) { case value: ... break; default: ... }"})}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Return type:"})," None"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Multi-way selection"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Used when:"})," One variable compared with many values"]})]})]}),e.jsxs("div",{className:`${a} mb-6 ${s} animation-delay-[480ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"Example 1 – Grade Display"}),e.jsx(t,{code:`char grade='B';

switch(grade){
  case 'A': System.out.println("Excellent"); break;
  case 'B': System.out.println("Very Good"); break;
  case 'C': System.out.println("Good"); break;
  default: System.out.println("Invalid Grade");
}`})]}),e.jsxs("div",{className:`${a} mb-6 ${s} animation-delay-[600ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"Example 2 – Day Message in Naihati"}),e.jsx(t,{code:`int day=2;

switch(day){
  case 1: System.out.println("Monday"); break;
  case 2: System.out.println("Tuesday"); break;
  case 3: System.out.println("Wednesday"); break;
  default: System.out.println("Invalid Day");
}`})]}),e.jsxs("div",{className:`${a} mb-10 ${s} animation-delay-[720ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"Example 3 – Menu Choice"}),e.jsx(t,{code:`int choice=3;

switch(choice){
  case 1: System.out.println("Tea"); break;
  case 2: System.out.println("Coffee"); break;
  case 3: System.out.println("Juice"); break;
  default: System.out.println("No Item");
}`})]}),e.jsxs("div",{className:`${a} mb-8 ${s} animation-delay-[840ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(n,{size:18})," Hint"]}),e.jsxs("p",{children:["Think about what happens if you remove ",e.jsx("code",{children:"break"})," from a case."]})]}),e.jsxs("div",{className:`${a} mb-8 ${s} animation-delay-[960ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(c,{size:18})," Common Pitfalls"]}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"Missing break causing fall-through"}),e.jsx("li",{children:"Forgetting default case"}),e.jsx("li",{children:"Using wrong data type"})]})]}),e.jsxs("div",{className:`${a} border-l-4 border-sky-400 ${s} animation-delay-[1080ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(d,{size:18})," Mini Checklist"]}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"All cases have break"}),e.jsx("li",{children:"Default case added"}),e.jsx("li",{children:"Expression type supported"})]})]})]})}}export{f as default};
