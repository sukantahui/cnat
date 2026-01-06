import{r as n,j as e,i as r,g as l}from"./index-imi4Qhij.js";import{J as a}from"./JavaCodeBlock-g8e1H4zE.js";import{m as i}from"./mermaid.core-BAp_FsX7.js";import{T as o}from"./triangle-alert-DbZcV0NT.js";import"./prism-d5FCEQg6.js";import"./prism-java-CQA27I6F.js";const d=`
@keyframes fadeSlideUp {
  0%{opacity:0; transform:translateY(18px);}
  100%{opacity:1; transform:translateY(0);}
}
`;class j extends n.Component{constructor(s){super(s),this.state={mounted:!1}}componentDidMount(){this.setState({mounted:!0}),i.initialize({startOnLoad:!1,securityLevel:"loose",theme:"default"}),setTimeout(()=>{i.run({nodes:document.querySelectorAll(".mermaid")})},0)}render(){const s=this.state.mounted?"motion-safe:animate-[fadeSlideUp_0.6s_ease-out_forwards]":"opacity-0",t="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/80 dark:bg-slate-900/80 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300";return e.jsxs("section",{className:"max-w-6xl mx-auto px-6 py-12 leading-relaxed text-slate-700 dark:text-slate-300",children:[e.jsx("style",{children:d}),e.jsx("h1",{className:`text-3xl font-semibold text-slate-900 dark:text-white mb-6 ${s}`,children:"Java Control Flow – Nested if Statement"}),e.jsx("div",{className:`${t} mb-8 ${s} animation-delay-[120ms]`,children:e.jsx("p",{children:"Nested if means an if condition inside another if. The inner condition is evaluated only when the outer condition is true."})}),e.jsx("div",{className:`${t} mb-10 ${s} animation-delay-[240ms]`,children:e.jsx("div",{className:"mermaid",children:`
flowchart TD
  A["Is Student Present?"] -->|Yes| B["Attendance >= 75?"]
  A -->|No| D["Reject : Absent"]
  B -->|Yes| C["Allow Exam"]
  B -->|No| E["Reject : Low Attendance"]
            `})}),e.jsx("div",{className:`${t} mb-6 ${s} animation-delay-[360ms]`,children:e.jsx(a,{code:`boolean present=true; int attendance=78;
if(present){
  if(attendance>=75){
    System.out.println("Allow Exam");
  }
}`})}),e.jsx("div",{className:`${t} mb-6 ${s} animation-delay-[480ms]`,children:e.jsx(a,{code:`boolean cardInserted=true; int balance=3000;
if(cardInserted){
  if(balance>=2000){
    System.out.println("Withdraw Cash");
  }
}`})}),e.jsx("div",{className:`${t} mb-10 ${s} animation-delay-[600ms]`,children:e.jsx(a,{code:`boolean registered=true; boolean fineClear=false;
if(registered){
  if(fineClear){
    System.out.println("Library Access Granted");
  }
}`})}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[720ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(r,{size:18})," Hint"]}),e.jsx("p",{children:"Try writing else blocks for both outer and inner if."})]}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[840ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(o,{size:18})," Common Pitfalls"]}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"Deep nesting"}),e.jsx("li",{children:"Unreadable indentation"})]})]}),e.jsxs("div",{className:`${t} border-l-4 border-sky-400 ${s} animation-delay-[960ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(l,{size:18})," Mini Checklist"]}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"Outer condition first"}),e.jsx("li",{children:"Inner condition meaningful"})]})]})]})}}export{j as default};
