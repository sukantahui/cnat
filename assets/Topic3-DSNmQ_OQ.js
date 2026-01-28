import{r as n,j as e,B as r,b as l,h as o}from"./index-CSMDpDNy.js";import{J as i}from"./JavaCodeBlock-D5iXidwb.js";import{m as a}from"./mermaid.core-DJa_DV5v.js";import{T as d}from"./triangle-alert-sTk-AaYD.js";import"./prism-DjCjleyc.js";import"./browser-Brb69gm7.js";import"./prism-java-CQA27I6F.js";const m=`
@keyframes fadeSlideUp {
  0%{opacity:0; transform:translateY(16px);}
  100%{opacity:1; transform:translateY(0);}
}
`;class k extends n.Component{constructor(s){super(s),this.state={mounted:!1}}componentDidMount(){this.setState({mounted:!0}),a.initialize({startOnLoad:!1,securityLevel:"loose",theme:"default"}),setTimeout(()=>{a.run({nodes:document.querySelectorAll(".mermaid")})},0)}render(){const s=this.state.mounted?"motion-safe:animate-[fadeSlideUp_0.6s_ease-out_forwards]":"opacity-0",t="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/80 dark:bg-slate-900/80 hover:shadow-lg transition-all duration-300";return e.jsxs("section",{className:"max-w-6xl mx-auto px-6 py-12 leading-relaxed text-slate-700 dark:text-slate-300",children:[e.jsx("style",{children:m}),e.jsx("h1",{className:`text-3xl font-semibold text-slate-900 dark:text-white mb-6 ${s}`,children:"Jump Statements – break and continue"}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[120ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2 mb-2 text-slate-900 dark:text-white",children:[e.jsx(r,{size:18})," What are Jump Statements?"]}),e.jsxs("p",{children:["Jump statements allow you to ",e.jsx("strong",{children:"change the normal flow"}),"of a loop. The most commonly used jump statements are",e.jsx("strong",{children:" break"})," and ",e.jsx("strong",{children:"continue"}),"."]}),e.jsxs("p",{className:"mt-2",children:["Example: At Naihati centre, Swadeep stops checking answer sheets as soon as he finds a wrong format – that is like ",e.jsx("strong",{children:"break"}),". But Abhronila skips absent students and continues attendance – that is like ",e.jsx("strong",{children:"continue"}),"."]})]}),e.jsx("div",{className:`${t} mb-10 ${s} animation-delay-[240ms]`,children:e.jsx("div",{className:"mermaid",children:`
flowchart TD
  A["Loop Start"] --> B["Check Condition"]
  B -->|True| C["Execute Body"]
  C --> D{"break ?"}
  D -->|Yes| E["Exit Loop"]
  D -->|No| F{"continue ?"}
  F -->|Yes| B
  F -->|No| G["Next Statement"]
  G --> B
  B -->|False| E
`})}),e.jsxs("div",{className:`${t} mb-6 ${s} animation-delay-[360ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"break Statement"}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Prototype / Signature:"})," ",e.jsx("code",{children:"break;"}),e.jsx("br",{}),e.jsx("strong",{children:"Purpose:"})," Immediately terminate the loop."]}),e.jsx(i,{code:`for(int i=1;i<=10;i++){
  if(i==5)
    break;
  System.out.print(i + " ");
}`})]}),e.jsxs("div",{className:`${t} mb-6 ${s} animation-delay-[480ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"continue Statement"}),e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Prototype / Signature:"})," ",e.jsx("code",{children:"continue;"}),e.jsx("br",{}),e.jsx("strong",{children:"Purpose:"})," Skip current iteration and move to next."]}),e.jsx(i,{code:`for(int i=1;i<=5;i++){
  if(i==3)
    continue;
  System.out.print(i + " ");
}`})]}),e.jsxs("div",{className:`${t} mb-10 ${s} animation-delay-[600ms]`,children:[e.jsx("h3",{className:"font-medium text-slate-900 dark:text-white mb-2",children:"Real-World Example"}),e.jsx(i,{code:`for(int roll=1; roll<=10; roll++){
  if(roll==6)  // student absent
    continue;
  if(roll==9)  // fire drill!
    break;
  System.out.println("Checked roll " + roll);
}`})]}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[720ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(l,{size:18})," Hint"]}),e.jsx("p",{children:"Try placing break and continue inside different conditions."})]}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[840ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(d,{size:18})," Common Pitfalls"]}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"Using break when continue is needed"}),e.jsx("li",{children:"Placing break outside loop → compiler error"}),e.jsx("li",{children:"Forgetting that continue skips remaining statements"})]})]}),e.jsxs("div",{className:`${t} border-l-4 border-sky-400 ${s} animation-delay-[960ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(o,{size:18})," Mini Checklist"]}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"break exits loop completely"}),e.jsx("li",{children:"continue skips only current iteration"}),e.jsx("li",{children:"Use carefully to avoid logic errors"})]})]})]})}}export{k as default};
