import{r as l,j as e,b as i,h as r}from"./index-lKIIHiz2.js";import{J as a}from"./JavaCodeBlock-2qTOLj8n.js";import{T as n}from"./triangle-alert-CtXqV3UH.js";import"./prism-kSm8Ix4h.js";import"./browser-lT1m_1ZU.js";import"./prism-java-CQA27I6F.js";const d=`
@keyframes fadeSlideUp {
  0%{opacity:0; transform:translateY(20px);}
  100%{opacity:1; transform:translateY(0);}
}
`;class j extends l.Component{constructor(s){super(s),this.state={mounted:!1}}componentDidMount(){this.setState({mounted:!0})}render(){const s=this.state.mounted?"motion-safe:animate-[fadeSlideUp_0.7s_ease-out_forwards]":"opacity-0",t="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-white/80 dark:bg-slate-900/80 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300";return e.jsxs("section",{className:"max-w-6xl mx-auto px-6 py-12 leading-relaxed text-slate-700 dark:text-slate-300",children:[e.jsx("style",{children:d}),e.jsx("h1",{className:`text-3xl font-semibold text-slate-900 dark:text-white mb-6 ${s}`,children:"Java Control Flow – else-if Ladder"}),e.jsxs("div",{className:`${t} mb-10 ${s} animation-delay-[120ms]`,children:[e.jsxs("p",{children:["The ",e.jsx("strong",{children:"else-if ladder"})," is used when more than two decisions are required. The program evaluates conditions from top to bottom and executes the ",e.jsx("strong",{children:"first true block"})," only."]}),e.jsx("p",{className:"mt-2",children:"Example: Grading system in Barrackpore school — Distinction, First, Second, Fail — all based on ranges of marks."})]}),e.jsx("div",{className:`${t} mb-10 flex justify-center ${s} animation-delay-[240ms]`,children:e.jsxs("svg",{viewBox:"0 0 560 380",className:"w-full max-w-xl group",children:[e.jsx("rect",{x:"230",y:"10",width:"100",height:"36",rx:"6",className:"fill-sky-200 dark:fill-sky-900"}),e.jsx("text",{x:"280",y:"33",textAnchor:"middle",children:"Start"}),e.jsx("polygon",{points:"280,60 340,100 280,140 220,100",className:"fill-amber-200 dark:fill-amber-900"}),e.jsx("text",{x:"280",y:"105",textAnchor:"middle",className:"text-xs",children:"marks ≥ 75?"}),e.jsx("polygon",{points:"280,150 340,190 280,230 220,190",className:"fill-amber-200 dark:fill-amber-900"}),e.jsx("text",{x:"280",y:"195",textAnchor:"middle",className:"text-xs",children:"marks ≥ 60?"}),e.jsx("polygon",{points:"280,240 340,280 280,320 220,280",className:"fill-amber-200 dark:fill-amber-900"}),e.jsx("text",{x:"280",y:"285",textAnchor:"middle",className:"text-xs",children:"marks ≥ 40?"}),e.jsx("rect",{x:"40",y:"95",width:"130",height:"30",rx:"6",className:"fill-emerald-200 dark:fill-emerald-900"}),e.jsx("text",{x:"105",y:"115",textAnchor:"middle",children:"Distinction"}),e.jsx("rect",{x:"40",y:"185",width:"130",height:"30",rx:"6",className:"fill-sky-200 dark:fill-sky-900"}),e.jsx("text",{x:"105",y:"205",textAnchor:"middle",children:"First Class"}),e.jsx("rect",{x:"40",y:"275",width:"130",height:"30",rx:"6",className:"fill-teal-200 dark:fill-teal-900"}),e.jsx("text",{x:"105",y:"295",textAnchor:"middle",children:"Pass"}),e.jsx("rect",{x:"390",y:"275",width:"130",height:"30",rx:"6",className:"fill-rose-200 dark:fill-rose-900"}),e.jsx("text",{x:"455",y:"295",textAnchor:"middle",children:"Fail"}),e.jsx("line",{x1:"280",y1:"46",x2:"280",y2:"60",stroke:"black"}),e.jsx("line",{x1:"220",y1:"100",x2:"170",y2:"110",stroke:"black"}),e.jsx("line",{x1:"220",y1:"190",x2:"170",y2:"200",stroke:"black"}),e.jsx("line",{x1:"220",y1:"280",x2:"170",y2:"290",stroke:"black"}),e.jsx("line",{x1:"340",y1:"280",x2:"390",y2:"290",stroke:"black"})]})}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[360ms]`,children:[e.jsx("h3",{className:"font-medium mb-2",children:"Example 1 – Grading System"}),e.jsx(a,{code:`int marks = 68;

if(marks >= 75){
  System.out.println("Distinction");
}
else if(marks >= 60){
  System.out.println("First Class");
}
else if(marks >= 40){
  System.out.println("Pass");
}
else{
  System.out.println("Fail");
}`})]}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[480ms]`,children:[e.jsx("h3",{className:"font-medium mb-2",children:"Example 2 – Temperature Alert at Shyamnagar"}),e.jsx(a,{code:`int temp = 42;

if(temp > 40){
  System.out.println("Heat Alert");
}
else if(temp > 30){
  System.out.println("Warm Day");
}
else if(temp > 20){
  System.out.println("Pleasant Weather");
}
else{
  System.out.println("Cold Day");
}`})]}),e.jsxs("div",{className:`${t} mb-10 ${s} animation-delay-[600ms]`,children:[e.jsx("h3",{className:"font-medium mb-2",children:"Example 3 – Attendance Category"}),e.jsx(a,{code:`int attendance = 82;

if(attendance >= 90){
  System.out.println("Excellent");
}
else if(attendance >= 75){
  System.out.println("Good");
}
else if(attendance >= 60){
  System.out.println("Average");
}
else{
  System.out.println("Poor");
}`})]}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[720ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(i,{size:18})," Hint"]}),e.jsx("p",{children:"Observe carefully how conditions must be written in descending order. Try changing the order and see the wrong result."})]}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[840ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(n,{size:18})," Common Pitfalls"]}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"Placing smaller conditions before larger ones."}),e.jsx("li",{children:"Forgetting final else block."}),e.jsx("li",{children:"Overlapping ranges."})]})]}),e.jsxs("div",{className:`${t} mb-8 ${s} animation-delay-[960ms]`,children:[e.jsxs("h2",{className:"flex items-center gap-2",children:[e.jsx(r,{size:18})," Mini Checklist"]}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:"Conditions ordered properly"}),e.jsx("li",{children:"No overlapping ranges"}),e.jsx("li",{children:"Default else present"})]})]}),e.jsxs("div",{className:`${t} border-l-4 border-sky-400 ${s} animation-delay-[1080ms]`,children:[e.jsx("h2",{className:"font-medium mb-1",children:"Teacher’s Note"}),e.jsx("p",{children:"else-if ladder must be practiced using grading, temperature, attendance — not just numbers — that is how logic matures."})]})]})}}export{j as default};
