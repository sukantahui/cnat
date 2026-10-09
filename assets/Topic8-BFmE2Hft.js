import{j as e,b as i}from"./vendor-react-core-B-R9HE-Z.js";import{T as l}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as c}from"./FAQTemplate-16IfroqC.js";import{P as d}from"./PlainTextPrint-C6NaUtnE.js";import{c as x,bn as m}from"./vendor-icons-C1Dcofhq.js";const h=[{question:"Given `String str = \"Information Technology\";`, write the exact Java statements to perform the following 4 operations:\n(i) Find the position of 's' in `str`\n(ii) Find the length of `str`\n(iii) Replace 'Technology' with 'Science' in `str`\n(iv) Concatenate ' for me' at the end of `str`",answer:'(i) `str.indexOf(\'s\');`\n(ii) `str.length();`\n(iii) `str = str.replace("Technology", "Science");`\n(iv) `str = str.concat(" for me");`',marks:4,hint:"indexOf, length(), replace, and concat."},{question:"In the 4-part question above, what is the output of `str.indexOf('s')` on \"Information Technology\"?",options:["-1","0","11","22"],correctAnswer:0,explanation:"Character 's' does not exist anywhere in \"Information Technology\". Therefore, `indexOf('s')` returns -1.",marks:1}],p=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 004_003: STRING CLASS METHODS & TEXT MANIPULATION\r
TOPIC 8: SOLVING THE CLASSIC 4-PART BOARD EXAM STRING QUESTION\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. THE STANDARD 4-MARK SECTION B QUESTION\r
--------------------------------------------------------------------------------\r
Question Prompt:\r
Given the string: \`String str = "Information Technology";\`\r
Write individual Java statements to do the following:\r
(i)   Find the position of character 's' in \`str\`\r
(ii)  Find the length of \`str\`\r
(iii) Replace the word "Technology" with "Science" in \`str\`\r
(iv)  Concatenate " for me" at the end of \`str\`\r
\r
2. MASTER SOLUTIONS & TRACES\r
--------------------------------------------------------------------------------\r
Part (i): Position of 's'\r
Statement: \`int pos = str.indexOf('s');\`\r
Explanation: Searches for 's'. Since 's' is not present in "Information Technology", \r
it returns \`-1\`.\r
\r
Part (ii): Length of \`str\`\r
Statement: \`int len = str.length();\`\r
Explanation: Returns total characters (11 + 1 + 10 = \`22\`).\r
\r
Part (iii): Replace word\r
Statement: \`String res = str.replace("Technology", "Science");\`\r
// or \`str = str.replace("Technology", "Science");\`\r
Explanation: Returns \`"Information Science"\`.\r
\r
Part (iv): Concatenate text\r
Statement: \`String res = str.concat(" for me");\`\r
// or \`str = str.concat(" for me");\`\r
Explanation: Returns \`"Information Technology for me"\`.\r
================================================================================\r
`,f=()=>{const[s,a]=i.useState(0),o=[{id:0,task:"(i) Find the position of 's' in `str`",stmt:"int pos = str.indexOf('s');",output:"-1 (Character 's' does not exist in 'Information Technology')",badge:"Method: indexOf()"},{id:1,task:"(ii) Find the length of `str`",stmt:"int len = str.length();",output:"22 (11 chars + 1 space + 10 chars)",badge:"Method: length()"},{id:2,task:"(iii) Replace 'Technology' with 'Science' in `str`",stmt:'str = str.replace("Technology", "Science");',output:'"Information Science"',badge:"Method: replace()"},{id:3,task:"(iv) Concatenate ' for me' at the end of `str`",stmt:'str = str.concat(" for me");',output:'"Information Technology for me"',badge:"Method: concat()"}],t=o[s];return e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl mb-12 space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2",children:[e.jsx(m,{className:"w-3.5 h-3.5"})," CBSE Board Standard 4-Mark Problem"]}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"Solving the 4-Part String Operation Problem with Precision"})]}),e.jsx("div",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800",children:'`str = "Information Technology"`'})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:o.map((n,r)=>e.jsxs("button",{onClick:()=>a(r),className:`p-3 rounded-xl border text-xs font-bold transition cursor-pointer text-left ${s===r?"bg-emerald-500/10 border-emerald-500/40 text-emerald-300 shadow-md shadow-emerald-950/30":"bg-slate-950/70 border-slate-800 text-slate-400 hover:bg-slate-900"}`,children:[e.jsxs("div",{className:"text-[10px] text-slate-500 mb-0.5",children:["Part ",r+1]}),e.jsxs("div",{className:"truncate",children:[n.task.split(" ")[1]," ",n.task.split(" ")[2]]})]},n.id))}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-base font-bold text-white",children:t.task}),e.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20",children:t.badge})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider block",children:"Exact Required Java Statement:"}),e.jsx("pre",{className:"text-sm font-mono text-emerald-400 bg-slate-900 p-4 rounded-xl border border-slate-800 overflow-x-auto font-bold",children:t.stmt})]}),e.jsxs("div",{className:"p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1 text-xs",children:[e.jsx("span",{className:"text-slate-400 font-bold block",children:"Evaluation Output & Explanation:"}),e.jsx("div",{className:"text-sky-300 font-mono text-sm",children:t.output})]})]})]})},N=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:[e.jsx(x,{className:"w-3.5 h-3.5"})," Module 004_003 • Topic 8"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Solving Board Exam String Operation Questions with Precision"}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:'Master the classic 4-part Section B board question covering indexOf(), length(), replace(), and concat() on the string "Information Technology".'})]}),e.jsx(f,{}),e.jsx(c,{title:"Frequently Asked Questions • 4-Part String Questions",questions:h}),e.jsx(d,{content:p,title:"CBSE Class XII IT 802 – 4-Part String Solutions Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 8 Note (.txt)",downloadFileName:"004_003_topic8_note.txt"}),e.jsx(l,{note:"This 4-part question (position of 's', length, replace, concat) appeared in Army Public School Barrackpore and CBSE sample papers. Writing `str.indexOf('s')`, `str.length()`, `str.replace(...)`, and `str.concat(...)` guarantees an easy 4/4 marks! — Sukanta Hui"})]})});export{N as default};
