import{r as a,j as e}from"./index-meFSU1Lv.js";import{E as i}from"./EditableCCodeBlock-C1aLYO6_.js";class o extends a.Component{constructor(s){super(s),this.state={visible:!1}}componentDidMount(){this.setState({visible:!0})}render(){const s="opacity-0 translate-y-6 motion-safe:animate-[fadeUp_0.9s_ease-out_forwards]",t="rounded-xl border p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:ring-1";return e.jsxs("div",{className:"space-y-20 px-4 md:px-6 py-10 text-slate-800 dark:text-slate-200 leading-relaxed",children:[e.jsxs("header",{className:`${s} animation-delay-[0ms] max-w-4xl mx-auto`,children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-semibold tracking-wide text-indigo-600 dark:text-indigo-400",children:"Functions with No Arguments and No Return Value"}),e.jsxs("p",{className:"mt-3 text-slate-600 dark:text-slate-400",children:["This topic explains ",e.jsx("strong",{children:"command-style functions"})," — functions that exist purely to ",e.jsx("em",{children:"perform an action"}),". They do not accept input and do not return output."]})]}),e.jsx("section",{className:`${s} animation-delay-[120ms] max-w-5xl mx-auto`,children:e.jsxs("div",{className:`${t} bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:ring-emerald-400/40`,children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4",children:"Conceptual Meaning (Very Important)"}),e.jsxs("p",{className:"mb-3",children:["A function with ",e.jsx("strong",{children:"no arguments"})," and",e.jsx("strong",{children:" no return value"}),":"]}),e.jsxs("ul",{className:"list-disc ml-6 space-y-3",children:[e.jsx("li",{children:"Does not depend on external input"}),e.jsx("li",{children:"Does not produce a value for further computation"}),e.jsxs("li",{children:["Exists to ",e.jsx("strong",{children:"trigger behavior"})]})]}),e.jsxs("p",{className:"mt-4 text-sm text-slate-600 dark:text-slate-400",children:["Such functions are always declared using the ",e.jsx("code",{children:"void"})," return type."]})]})}),e.jsx("section",{className:`${s} animation-delay-[240ms] max-w-5xl mx-auto`,children:e.jsxs("div",{className:`${t} bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:ring-indigo-400/40`,children:[e.jsx("h2",{className:"text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4",children:"One-Way Execution Model"}),e.jsxs("svg",{viewBox:"0 0 1000 300",className:"w-full h-auto",preserveAspectRatio:"xMidYMid meet","aria-label":"One way execution for void functions",children:[e.jsx("rect",{x:"80",y:"90",width:"280",height:"120",rx:"16",className:"fill-sky-100 dark:fill-sky-900 stroke-sky-400 dark:stroke-sky-600"}),e.jsx("text",{x:"220",y:"130",textAnchor:"middle",className:"fill-sky-700 dark:fill-sky-300 font-semibold",children:"Caller (main)"}),e.jsx("line",{x1:"360",y1:"150",x2:"520",y2:"150",strokeWidth:"2",className:"stroke-slate-500 dark:stroke-slate-400"}),e.jsx("polygon",{points:"520,150 504,142 504,158",className:"fill-slate-500 dark:fill-slate-400",children:e.jsx("animate",{attributeName:"opacity",from:"0.4",to:"1",dur:"1.2s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"520",y:"90",width:"320",height:"120",rx:"16",className:"fill-emerald-100 dark:fill-emerald-900 stroke-emerald-400 dark:stroke-emerald-600"}),e.jsx("text",{x:"680",y:"125",textAnchor:"middle",className:"fill-emerald-700 dark:fill-emerald-300 font-semibold",children:"void function()"}),e.jsx("text",{x:"680",y:"160",textAnchor:"middle",className:"fill-slate-600 dark:fill-slate-400 text-sm",children:"action happens here"})]}),e.jsx("p",{className:"mt-4 text-sm text-slate-600 dark:text-slate-400",children:"✔ Control goes in ✔ Task executes ✔ Control returns silently"})]})}),e.jsx("section",{className:`${s} animation-delay-[360ms] max-w-5xl mx-auto`,children:e.jsxs("div",{className:`${t} bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800 hover:ring-indigo-400/40`,children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-4",children:"Technical Rules (C Language)"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-3",children:[e.jsxs("li",{children:["Return type must be ",e.jsx("code",{children:"void"})]}),e.jsx("li",{children:"No parameters are listed in the prototype"}),e.jsx("li",{children:"Execution relies on side effects"}),e.jsxs("li",{children:[e.jsx("code",{children:"return;"})," is optional"]})]})]})}),e.jsx("section",{className:`${s} animation-delay-[480ms] max-w-5xl mx-auto`,children:e.jsx(i,{title:"Example 1: Presentation / UI Responsibility",code:`#include <stdio.h>

void showHeader() {
    printf("==============================\\n");
    printf("   Student Management System  \\n");
    printf("==============================\\n");
}

int main() {
    showHeader();
    return 0;
}`})}),e.jsx("section",{className:`${s} animation-delay-[520ms] max-w-5xl mx-auto`,children:e.jsx(i,{title:"Example 2: Changing Program State (Global Side Effect)",code:`#include <stdio.h>

int systemReady = 0;

void initializeSystem() {
    systemReady = 1;
}

int main() {
    initializeSystem();
    if(systemReady)
        printf("System is ready.\\n");
    return 0;
}`})}),e.jsx("section",{className:`${s} animation-delay-[560ms] max-w-5xl mx-auto`,children:e.jsx(i,{title:"Example 3: Control-Oriented Function",code:`#include <stdio.h>
#include <stdlib.h>

void terminateProgram() {
    printf("Exiting program...\\n");
    exit(0);
}

int main() {
    terminateProgram();
    printf("This line never executes.\\n");
    return 0;
}`})}),e.jsx("section",{className:`${s} animation-delay-[600ms] max-w-5xl mx-auto`,children:e.jsx(i,{title:"Example 4: Encapsulating Reusable Behavior",code:`#include <stdio.h>

void drawLine() {
    for(int i = 0; i < 40; i++)
        printf("-");
    printf("\\n");
}

int main() {
    drawLine();
    printf("Report Content\\n");
    drawLine();
    return 0;
}`})}),e.jsx("section",{className:`${s} animation-delay-[640ms] max-w-5xl mx-auto`,children:e.jsxs("div",{className:`${t} bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 hover:ring-emerald-400/40`,children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-3",children:"When to Use (and When NOT to Use)"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-2",children:[e.jsx("li",{children:"Use for actions, setup, UI, logging, control"}),e.jsx("li",{children:"Avoid when computation or decision is required"}),e.jsx("li",{children:"Avoid hiding important data changes"})]})]})}),e.jsx("section",{className:`${s} animation-delay-[720ms] max-w-5xl mx-auto`,children:e.jsxs("div",{className:`${t} bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800 hover:ring-rose-400/40`,children:[e.jsx("h3",{className:"text-lg font-semibold text-rose-700 dark:text-rose-300 mb-4",children:"Common Beginner Mistakes"}),e.jsxs("ul",{className:"list-disc ml-6 space-y-3",children:[e.jsx("li",{children:"Expecting return values"}),e.jsx("li",{children:"Overusing global variables"}),e.jsx("li",{children:"Putting calculations inside void functions"}),e.jsx("li",{children:"Hiding logic that should be explicit"})]})]})}),e.jsx("section",{className:`${s} animation-delay-[840ms] max-w-5xl mx-auto`,children:e.jsxs("div",{className:`${t} bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800`,children:[e.jsx("h3",{className:"font-semibold text-sky-700 dark:text-sky-300 mb-2",children:"💡 Hint"}),e.jsx("p",{children:"Ask yourself: “Is this function computing a value, or commanding behavior?”"})]})}),e.jsx("section",{className:`${s} animation-delay-[960ms] max-w-5xl mx-auto`,children:e.jsxs("div",{className:`${t} bg-yellow-50 dark:bg-yellow-950/30 border-yellow-300 dark:border-yellow-700 hover:ring-yellow-400/60`,children:[e.jsx("h3",{className:"font-semibold text-yellow-700 dark:text-yellow-300 mb-3",children:"🧑‍🏫 Teacher’s Note"}),e.jsxs("p",{className:"text-sm mb-2",children:["Students often underestimate these functions because they “don’t return anything”. In reality, they teach ",e.jsx("strong",{children:"design discipline"}),"."]}),e.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:"Mastering this distinction makes later topics like callbacks and event handlers easier."})]})}),e.jsx("style",{children:`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(28px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `})]})}}export{o as default};
