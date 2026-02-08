import{r as s,j as e}from"./index-lKIIHiz2.js";const r=`
@keyframes fadeSlideUp {
  0% { opacity:0; transform: translateY(16px); }
  100% { opacity:1; transform: translateY(0); }
}
`;class l extends s.Component{render(){return e.jsxs("div",{className:"space-y-10 leading-relaxed text-slate-800 dark:text-slate-200",children:[e.jsx("style",{children:r}),e.jsxs("section",{className:`\r
          bg-white dark:bg-slate-900\r
          border border-sky-400/30 rounded-3xl p-6 shadow-xl\r
          motion-safe:animate-[fadeSlideUp_0.8s_ease-out_forwards]\r
        `,children:[e.jsxs("h1",{className:"text-2xl font-bold text-sky-500 mb-3",children:["Environment Variables – ",e.jsx("span",{className:"text-emerald-400",children:"PATH"})," Explained"]}),e.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-300",children:["When Linux finds a command, it doesn’t search everywhere. It follows a secret roadmap called ",e.jsx("b",{children:"PATH"}),"."]})]}),e.jsxs("section",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:`\r
            p-5 rounded-2xl border border-slate-300 dark:border-slate-700\r
            bg-slate-50 dark:bg-slate-800\r
            transition-all duration-300 hover:shadow-lg\r
            motion-safe:animate-[fadeSlideUp_1s_ease-out_forwards]\r
          `,children:[e.jsx("h2",{className:"text-lg font-semibold text-emerald-400 mb-2",children:"What is PATH?"}),e.jsxs("p",{className:"text-sm",children:[e.jsx("b",{children:"PATH"})," is an environment variable that stores a list of directories. Linux searches these folders in order to find commands."]}),e.jsx("pre",{className:"mt-3 bg-black text-emerald-400 p-3 rounded-lg text-sm",children:"echo $PATH"})]}),e.jsxs("div",{className:`\r
            p-5 rounded-2xl border border-slate-300 dark:border-slate-700\r
            bg-slate-50 dark:bg-slate-800\r
            transition-all duration-300 hover:shadow-lg\r
            motion-safe:animate-[fadeSlideUp_1.2s_ease-out_forwards]\r
          `,children:[e.jsx("h2",{className:"text-lg font-semibold text-sky-400 mb-2",children:"How PATH Works"}),e.jsxs("p",{className:"text-sm",children:["When Tuhina types ",e.jsx("code",{children:"ls"}),", Linux checks folders in PATH one by one until it finds the program file."]}),e.jsx("pre",{className:"mt-3 bg-black text-sky-300 p-3 rounded-lg text-sm",children:"/usr/bin:/bin:/usr/local/bin"})]})]}),e.jsxs("section",{className:`\r
          p-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-white\r
          dark:from-slate-800 dark:to-slate-900\r
          border border-emerald-400/30\r
          transition-all duration-300 hover:shadow-xl\r
          motion-safe:animate-[fadeSlideUp_1.4s_ease-out_forwards]\r
        `,children:[e.jsx("h2",{className:"text-lg font-semibold text-emerald-400 mb-3",children:"Think Like a Professional"}),e.jsxs("p",{className:"text-sm",children:["Abhronila installed a new tool in Barrackpore, but Linux said:",e.jsx("i",{children:"“command not found”"}),". The tool was there — but PATH didn’t know its address."]})]}),e.jsxs("section",{className:`\r
  p-6 rounded-3xl\r
  bg-gradient-to-br from-yellow-50 to-white\r
  dark:from-slate-800 dark:to-slate-900\r
  border border-yellow-400/30\r
  transition-all duration-300 hover:shadow-xl\r
  motion-safe:animate-[fadeSlideUp_1.6s_ease-out_forwards]\r
`,children:[e.jsx("h2",{className:"text-lg font-semibold text-yellow-400 mb-3",children:"Editing & Managing PATH – Professional Workflow"}),e.jsxs("p",{className:"text-sm mb-3",children:["PATH is not magic. It is simply a list of folders separated by colon (",e.jsx("b",{children:":"}),"). Linux searches them from left to right — like reading a book."]}),e.jsx("pre",{className:"bg-black text-yellow-300 p-3 rounded-lg text-sm mb-3",children:"/usr/local/bin:/usr/bin:/bin"}),e.jsxs("p",{className:"text-sm mb-3",children:["When Debangshu installs Python in Shyamnagar and types ",e.jsx("code",{children:"python"}),", Linux checks:"]}),e.jsxs("ol",{className:"list-decimal list-inside text-sm space-y-1 mb-3",children:[e.jsx("li",{children:"/usr/local/bin"}),e.jsx("li",{children:"/usr/bin"}),e.jsx("li",{children:"/bin"})]}),e.jsxs("p",{className:"text-sm mb-3",children:["The first folder containing ",e.jsx("code",{children:"python"})," wins. That is why order in PATH is more important than people realize."]}),e.jsx("h3",{className:"text-md font-semibold text-sky-400 mt-4 mb-2",children:"Temporarily Add a Folder to PATH"}),e.jsx("pre",{className:"bg-black text-sky-300 p-3 rounded-lg text-sm",children:"export PATH=$PATH:/home/swadeep/mytools"}),e.jsx("p",{className:"text-sm mt-2",children:"This change works only until the terminal is closed."}),e.jsx("h3",{className:"text-md font-semibold text-emerald-400 mt-4 mb-2",children:"Permanent PATH Setup (Professional Method)"}),e.jsx("pre",{className:"bg-black text-emerald-300 p-3 rounded-lg text-sm",children:"nano ~/.bashrc"}),e.jsx("p",{className:"text-sm mt-2",children:"Then add at the bottom:"}),e.jsx("pre",{className:"bg-black text-emerald-300 p-3 rounded-lg text-sm",children:"export PATH=$PATH:/home/swadeep/mytools"}),e.jsx("p",{className:"text-sm mt-2",children:"Restart terminal — now Linux remembers forever."})]}),e.jsxs("section",{className:`\r
          p-6 rounded-3xl border border-rose-400/40\r
          bg-rose-50 dark:bg-rose-900/20\r
          transition-all duration-300 hover:shadow-xl\r
        `,children:[e.jsx("h2",{className:"text-lg font-semibold text-rose-400 mb-2",children:"Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-1",children:[e.jsx("li",{children:"Installing tools but forgetting to add them to PATH"}),e.jsx("li",{children:"Overwriting PATH accidentally"}),e.jsx("li",{children:"Editing PATH without backup"})]})]}),e.jsxs("section",{className:`\r
          p-6 rounded-3xl bg-gradient-to-br from-sky-50 to-white\r
          dark:from-slate-800 dark:to-slate-900\r
          border border-sky-400/30\r
          transition-all duration-300 hover:shadow-xl\r
        `,children:[e.jsx("h2",{className:"text-lg font-semibold text-sky-400 mb-2",children:"Teacher’s Note"}),e.jsx("p",{className:"text-sm",children:"PATH is Linux’s Google map. If the address is wrong, even the best program stays invisible."})]}),e.jsxs("section",{className:`\r
          p-5 rounded-2xl border border-slate-300 dark:border-slate-700\r
          bg-slate-50 dark:bg-slate-800\r
        `,children:[e.jsx("h2",{className:"text-lg font-semibold text-emerald-400 mb-2",children:"Mini Checklist"}),e.jsxs("ul",{className:"list-disc list-inside text-sm",children:[e.jsx("li",{children:"I know what PATH stores"}),e.jsxs("li",{children:["I can display PATH using ",e.jsx("code",{children:"echo $PATH"})]}),e.jsx("li",{children:"I understand why “command not found” happens"})]})]})]})}}export{l as default};
