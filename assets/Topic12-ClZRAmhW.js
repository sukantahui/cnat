import{r as s,j as e}from"./index-Do7ncMju.js";const r=`
@keyframes fadeSlideUp {
  0% { opacity:0; transform: translateY(14px); }
  100% { opacity:1; transform: translateY(0); }
}
`;class t extends s.Component{render(){return e.jsxs("div",{className:"space-y-10 leading-relaxed text-slate-800 dark:text-slate-200",children:[e.jsx("style",{children:r}),e.jsxs("section",{className:`\r
            bg-white dark:bg-slate-900\r
            border border-sky-400/30 rounded-3xl p-6 shadow-xl\r
            motion-safe:animate-[fadeSlideUp_0.8s_ease-out_forwards]\r
          `,children:[e.jsxs("h1",{className:"text-2xl font-bold text-sky-500 mb-3",children:["Using Manual Pages – ",e.jsx("span",{className:"text-emerald-400",children:"man"})," & ",e.jsx("span",{className:"text-amber-400",children:"--help"})]}),e.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-300",children:["Linux does not expect you to memorize commands. It expects you to ",e.jsx("b",{children:"ask the system itself"}),"."]})]}),e.jsxs("section",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:`\r
            p-5 rounded-2xl border border-slate-300 dark:border-slate-700\r
            bg-slate-50 dark:bg-slate-800\r
            transition-all duration-300 hover:shadow-lg\r
            motion-safe:animate-[fadeSlideUp_1s_ease-out_forwards]\r
          `,children:[e.jsxs("h2",{className:"text-lg font-semibold text-sky-400 mb-2",children:["What is ",e.jsx("code",{children:"man"}),"?"]}),e.jsxs("p",{className:"text-sm",children:[e.jsx("b",{children:"man"})," = ",e.jsx("b",{children:"Manual Pages"}),"  It opens the official documentation of any Linux command directly inside the terminal."]}),e.jsx("pre",{className:"mt-3 bg-black text-emerald-400 p-3 rounded-lg text-sm",children:"man ls"})]}),e.jsxs("div",{className:`\r
            p-5 rounded-2xl border border-slate-300 dark:border-slate-700\r
            bg-slate-50 dark:bg-slate-800\r
            transition-all duration-300 hover:shadow-lg\r
            motion-safe:animate-[fadeSlideUp_1.2s_ease-out_forwards]\r
          `,children:[e.jsxs("h2",{className:"text-lg font-semibold text-amber-400 mb-2",children:["What is ",e.jsx("code",{children:"--help"}),"?"]}),e.jsxs("p",{className:"text-sm",children:["The ",e.jsx("b",{children:"--help"})," flag gives you a quick usage summary without opening long pages."]}),e.jsx("pre",{className:"mt-3 bg-black text-amber-300 p-3 rounded-lg text-sm",children:"ls --help"})]})]}),e.jsxs("section",{className:`\r
          p-6 rounded-3xl bg-gradient-to-br from-sky-50 to-white\r
          dark:from-slate-800 dark:to-slate-900\r
          border border-sky-400/30\r
          transition-all duration-300 hover:shadow-xl\r
          motion-safe:animate-[fadeSlideUp_1.4s_ease-out_forwards]\r
        `,children:[e.jsx("h2",{className:"text-lg font-semibold text-sky-500 mb-3",children:"Why This Matters"}),e.jsxs("p",{className:"text-sm",children:["When Swadeep in Barrackpore forgets how ",e.jsx("code",{children:"grep"})," works, he does not panic — he simply types:"]}),e.jsx("pre",{className:"mt-3 bg-black text-sky-300 p-3 rounded-lg text-sm",children:"man grep"})]}),e.jsxs("section",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:`\r
            p-5 rounded-2xl border border-slate-300 dark:border-slate-700\r
            bg-slate-100 dark:bg-slate-800\r
            transition-all duration-300 hover:shadow-lg\r
          `,children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-400 mb-2",children:"man Command"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-1",children:[e.jsx("li",{children:"Full documentation"}),e.jsx("li",{children:"Scrollable with arrow keys"}),e.jsxs("li",{children:["Search using ",e.jsx("code",{children:"/keyword"})]}),e.jsxs("li",{children:["Quit with ",e.jsx("code",{children:"q"})]})]})]}),e.jsxs("div",{className:`\r
            p-5 rounded-2xl border border-slate-300 dark:border-slate-700\r
            bg-slate-100 dark:bg-slate-800\r
            transition-all duration-300 hover:shadow-lg\r
          `,children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-400 mb-2",children:"--help Flag"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-1",children:[e.jsx("li",{children:"Short and fast"}),e.jsx("li",{children:"One-screen reference"}),e.jsx("li",{children:"Great during exams & live servers"})]})]})]}),e.jsxs("section",{className:`\r
          p-6 rounded-3xl border border-rose-400/40\r
          bg-rose-50 dark:bg-rose-900/20\r
          transition-all duration-300 hover:shadow-xl\r
        `,children:[e.jsx("h2",{className:"text-lg font-semibold text-rose-400 mb-2",children:"Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-1",children:[e.jsxs("li",{children:["Students forget to press ",e.jsx("code",{children:"q"})," to exit man pages"]}),e.jsx("li",{children:"They scroll with mouse instead of keyboard"}),e.jsxs("li",{children:["They don’t search inside man pages using ",e.jsx("code",{children:"/option"})]})]})]}),e.jsxs("section",{className:`\r
          p-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-white\r
          dark:from-slate-800 dark:to-slate-900\r
          border border-emerald-400/30\r
          transition-all duration-300 hover:shadow-xl\r
        `,children:[e.jsx("h2",{className:"text-lg font-semibold text-emerald-400 mb-2",children:"Teacher’s Note"}),e.jsxs("p",{className:"text-sm",children:["Real professionals don’t memorize commands — they know how to ",e.jsx("b",{children:"talk to the system"}),".",e.jsx("code",{children:"man"})," is your conversation with Linux."]})]}),e.jsxs("section",{className:`\r
          p-5 rounded-2xl border border-slate-300 dark:border-slate-700\r
          bg-slate-50 dark:bg-slate-800\r
        `,children:[e.jsx("h2",{className:"text-lg font-semibold text-sky-400 mb-2",children:"Mini Checklist"}),e.jsxs("ul",{className:"list-disc list-inside text-sm",children:[e.jsxs("li",{children:["I know what ",e.jsx("code",{children:"man"})," stands for"]}),e.jsx("li",{children:"I can search inside man pages"}),e.jsxs("li",{children:["I use ",e.jsx("code",{children:"--help"})," for quick guidance"]}),e.jsx("li",{children:"I never fear unknown commands"})]})]})]})}}export{t as default};
