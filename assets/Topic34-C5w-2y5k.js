import{j as e}from"./index-BFnLuail.js";import{c as a}from"./clsx-B-dksMZM.js";import{E as r}from"./EditableCCodeBlock-BIH-nUZ3.js";const i=`// good_naming.c – clear, intention‑revealing names\r
#include <stdio.h>\r
\r
// Function to calculate average of an array\r
double calculateAverage(int arr[], int size) {\r
    int sum = 0;\r
    for (int i = 0; i < size; i++) {\r
        sum += arr[i];\r
    }\r
    return (double)sum / size;\r
}\r
\r
// Function to check if a student passed (score >= 40)\r
int isPassing(int score) {\r
    return score >= 40;\r
}\r
\r
// Function to print student result\r
void printStudentResult(const char* name, int score) {\r
    printf("%s: %d - %s\\n", name, score, isPassing(score) ? "PASS" : "FAIL");\r
}\r
\r
int main() {\r
    int marks[] = {45, 38, 72, 61};\r
    char* names[] = {"Swadeep", "Tuhina", "Abhronila", "Debangshu"};\r
    int size = sizeof(marks) / sizeof(marks[0]);\r
\r
    double avg = calculateAverage(marks, size);\r
    printf("Class average: %.2f\\n", avg);\r
\r
    for (int i = 0; i < size; i++) {\r
        printStudentResult(names[i], marks[i]);\r
    }\r
    return 0;\r
}`,o=`// bad_naming.c – cryptic names that hide meaning\r
#include <stdio.h>\r
\r
// What does this do? Vague name.\r
double calc(int a[], int s) {\r
    int t = 0;\r
    for (int i = 0; i < s; i++) {\r
        t += a[i];\r
    }\r
    return (double)t / s;\r
}\r
\r
// Another vague name.\r
int chk(int x) {\r
    return x >= 40;\r
}\r
\r
// Unclear: what is being printed?\r
void p(const char* n, int m) {\r
    printf("%s: %d - %s\\n", n, m, chk(m) ? "PASS" : "FAIL");\r
}\r
\r
int main() {\r
    int m[] = {45, 38, 72, 61};\r
    char* n[] = {"Ritaja", "Swadeep", "Tuhina", "Abhronila"};\r
    int sz = sizeof(m) / sizeof(m[0]);\r
\r
    double a = calc(m, sz);\r
    printf("Average: %.2f\\n", a);\r
\r
    for (int i = 0; i < sz; i++) {\r
        p(n[i], m[i]);\r
    }\r
    return 0;\r
}`,h=()=>{const t=new Date().getFullYear()-1998;return e.jsxs("div",{className:"min-h-screen bg-white p-6 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200",children:[e.jsxs("header",{className:"mb-8 text-center",children:[e.jsx("h1",{className:"mb-2 text-4xl font-extrabold tracking-tight",children:e.jsx("span",{className:"bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent dark:from-green-400 dark:to-teal-400",children:"Designing Function Names for Readability"})}),e.jsx("p",{className:"mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400",children:"A well‑chosen name is the best documentation — it tells you what the function does without reading a single comment."})]}),e.jsxs("section",{className:a("mb-12 rounded-xl bg-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"Why Names Matter"}),e.jsxs("p",{className:"leading-relaxed",children:["Imagine Tuhina opens a file and sees a function called"," ",e.jsx("code",{children:"process()"}),". What does it process? How? Why? She has to read the entire body to guess. Now imagine she sees"," ",e.jsx("code",{children:"calculateFinalGrade()"})," — instantly, she knows. At Barrackpore CNAT, we teach that naming is the first step to self‑documenting code. A good name acts like a clear label on a drawer: you know exactly what’s inside."]})]}),e.jsx("div",{className:"mb-12 grid gap-6 md:grid-cols-1 lg:grid-cols-3",children:[{title:"Use Verbs for Actions",desc:"Functions that do something should start with a verb: `printReport()`, `validateEmail()`, `saveToFile()`.",icon:"🔨"},{title:"Nouns for Return Values",desc:"If the function returns a value, name it after what it returns: `getAge()`, `isValid()`, `totalPrice()`.",icon:"📦"},{title:"Be Specific, Not Vague",desc:"`calculate()` is vague; `calculateMonthlyTax()` tells you exactly what and when.",icon:"🎯"},{title:"Consistent Conventions",desc:"Stick to one style – camelCase (`calculateSum`) or snake_case (`calculate_sum`) – across your whole project.",icon:"📐"},{title:"Avoid Cryptic Abbreviations",desc:"`calcAvg()` is okay; `cA()` is not. Use standard abbreviations only (`max`, `min`, `len`).",icon:"🔤"},{title:"Pronounceable Names",desc:"If you can't say it in a conversation, it's a bad name. `genrdrpt` → `generateReport()`.",icon:"🗣️"}].map((s,n)=>e.jsxs("div",{className:a("group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-600","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",`motion-safe:animation-delay-${(n+1)*100}ms`),style:{animationDelay:`${(n+1)*100}ms`},children:[e.jsx("div",{className:"mb-3 text-4xl",children:s.icon}),e.jsx("h3",{className:"mb-2 text-xl font-semibold",children:s.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:s.desc})]},n))}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"mb-6 text-2xl font-semibold",children:"Good Names vs. Bad Names"}),e.jsxs("div",{className:"grid gap-8 lg:grid-cols-1",children:[e.jsxs("div",{className:a("rounded-xl border border-green-200 bg-green-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-green-900 dark:bg-green-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-green-700 dark:text-green-400",children:[e.jsx("span",{className:"mr-2",children:"✅"})," Good Naming"]}),e.jsx(r,{title:"good_naming.c – self‑documenting",initialCode:i}),e.jsxs("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:["Abhronila can understand what ",e.jsx("code",{children:"calculateAverage()"})," and"," ",e.jsx("code",{children:"isPassing()"})," do without looking inside. The names tell the story."]})]}),e.jsxs("div",{className:a("rounded-xl border border-red-200 bg-red-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-red-900 dark:bg-red-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-red-700 dark:text-red-400",children:[e.jsx("span",{className:"mr-2",children:"❌"})," Bad Naming"]}),e.jsx(r,{title:"bad_naming.c – cryptic and confusing",initialCode:o}),e.jsxs("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:["Debangshu has to read every line to guess what"," ",e.jsx("code",{children:"calc()"}),", ",e.jsx("code",{children:"chk()"}),", and ",e.jsx("code",{children:"p()"})," do. Maintenance becomes a puzzle."]})]})]})]}),e.jsxs("section",{className:a("mb-12 rounded-xl bg-yellow-50/70 p-6 dark:bg-yellow-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-yellow-800 dark:text-yellow-300",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Single‑letter names"})," (except loop counters i, j).",e.jsx("code",{children:"int x;"})," tells you nothing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Misleading names"})," – a function named"," ",e.jsx("code",{children:"saveData()"})," that also deletes files."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Inconsistent casing"}),": mixing"," ",e.jsx("code",{children:"calculateTotal"})," and ",e.jsx("code",{children:"print_report"})," in the same project."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Naming by implementation"})," – ",e.jsx("code",{children:"useArrayLoop()"})," ","instead of ",e.jsx("code",{children:"calculateSum()"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Abbreviations that only you understand"})," –"," ",e.jsx("code",{children:"getUsrInf()"})," → ",e.jsx("code",{children:"getUserInfo()"}),"."]})]})]}),e.jsxs("section",{className:"mb-12 grid gap-6 md:grid-cols-1",children:[e.jsxs("div",{className:a("rounded-xl bg-blue-50/50 p-5 dark:bg-blue-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-blue-700 dark:text-blue-300",children:"📋 Do's"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Use descriptive, intention‑revealing names."}),e.jsx("li",{children:"Follow a consistent naming convention (camelCase for functions)."}),e.jsx("li",{children:"Use domain terms your team knows."}),e.jsx("li",{children:"Keep names short but meaningful – `getUser` not `fetchUserRecordFromDatabase`."}),e.jsx("li",{children:"Refactor names when the function’s purpose evolves."})]})]}),e.jsxs("div",{className:a("rounded-xl bg-purple-50/50 p-5 dark:bg-purple-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-purple-700 dark:text-purple-300",children:"🚫 Don'ts"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Use vague names like `doStuff`, `process`, `handle`."}),e.jsx("li",{children:"Rely on comments to explain what a name should say."}),e.jsx("li",{children:"Use Hungarian notation (int iCount) – types are checked by compiler."}),e.jsx("li",{children:"Name after side effects – `printAndReturn()` if it only returns."}),e.jsx("li",{children:"Be afraid to rename if the current name is unclear."})]})]})]}),e.jsxs("section",{className:a("mb-12 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/30 p-6 dark:border-indigo-700 dark:bg-indigo-900/10","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-indigo-800 dark:text-indigo-300",children:"💡 Hint – Think Like a Pro"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"})," In the good example, the function names read like a high‑level description of the program. You could almost explain the logic to a non‑programmer using just the names. ",e.jsx("br",{}),e.jsxs("span",{className:"mt-2 block",children:[e.jsx("strong",{children:"Try changing this:"})," Rename ",e.jsx("code",{children:"isPassing()"})," ","to ",e.jsx("code",{children:"check()"}),". Does the code still tell you what it does? Good naming removes the need for extra comments."]})]})]}),e.jsxs("section",{className:a("mb-12 rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-emerald-800 dark:text-emerald-300",children:"🧠 Tips & Tricks (Professional Edge)"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-1",children:[e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"📖 Use Domain Language"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:["In a banking app, use ",e.jsx("code",{children:"calculateInterest()"})," not"," ",e.jsx("code",{children:"computeSomething()"}),". Speak the user’s language."]})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🔄 Refactor Names Continuously"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"When you understand the code better, rename functions. Modern IDEs make it safe and fast."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"📏 Length Reflects Scope"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400",children:["Short names (like ",e.jsx("code",{children:"swap()"}),") are fine for widely used operations; longer names are better for rare or complex ones."]})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🧪 Classroom Shortcut"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"At Naihati CNAT, we practice by giving each other’s code a “name review” – if you can’t guess what a function does in 5 seconds, rename it."})]})]})]}),e.jsxs("section",{className:a("mb-12 rounded-xl border-l-4 border-green-500 bg-green-50/80 p-6 dark:bg-green-900/30","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","transition-all duration-300 hover:border-l-8 hover:shadow-lg"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-green-800 dark:text-green-300",children:"👨‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-wrap items-start gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2 text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: sukantahui@codernaccotax.co.in , mobile: 7003756860) has been teaching programming since 1998 – that's ",e.jsxs("strong",{children:[t," years"]})," of experience in C, RDBMS, OS, and web development."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:`"I always tell my students at Barrackpore CNAT: 'Code is read far more often than it is written.' Spending an extra minute to name a function well will save hours of confusion later. Good naming is a sign of respect for your future self and your teammates."`})]}),e.jsx("div",{className:"rounded-full bg-green-200 p-3 dark:bg-green-800",children:e.jsx("svg",{className:"h-12 w-12 text-green-700 dark:text-green-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})]})]}),e.jsxs("section",{className:"rounded-xl bg-gray-100 p-6 dark:bg-gray-800",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"✅ Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-1",children:["Does the function name clearly describe its purpose?","Is it a verb for actions, a noun for return values?","Would someone unfamiliar with the code understand it?","Is the name consistent with other functions in the project?","Are abbreviations standard and obvious?","Can you pronounce the name in a conversation?","Does the name avoid implementation details?"].map((s,n)=>e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:s})]},n))})]}),e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]})};export{h as default};
