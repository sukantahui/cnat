import{j as e}from"./index-BFnLuail.js";import{c as t}from"./clsx-B-dksMZM.js";import{E as s}from"./EditableCCodeBlock-BIH-nUZ3.js";const r=`// srp_bad.c – Violation: one function does everything\r
#include <stdio.h>\r
#include <stdbool.h>\r
\r
// This function handles input, validation, calculation, and output – too many responsibilities\r
void processStudent() {\r
    int age;\r
    bool isStudent;\r
    \r
    printf("Enter age: ");\r
    scanf("%d", &age);\r
    printf("Is student? (1 for yes, 0 for no): ");\r
    scanf("%d", (int*)&isStudent);\r
    \r
    // Validation\r
    if (age < 0 || age > 120) {\r
        printf("Invalid age!\\n");\r
        return;\r
    }\r
    \r
    // Calculation\r
    double price = 100.0;\r
    if (isStudent) {\r
        price *= 0.8; // 20% discount\r
    }\r
    if (age >= 60) {\r
        price *= 0.7; // 30% senior discount\r
    }\r
    \r
    // Output\r
    printf("Final ticket price: ₹%.2f\\n", price);\r
}\r
\r
int main() {\r
    processStudent();\r
    return 0;\r
}`,l=`// srp_good.c – Each function has a single responsibility\r
#include <stdio.h>\r
#include <stdbool.h>\r
\r
// 1. Input responsibility\r
int getAge() {\r
    int age;\r
    printf("Enter age: ");\r
    scanf("%d", &age);\r
    return age;\r
}\r
\r
bool getStudentStatus() {\r
    int status;\r
    printf("Is student? (1 for yes, 0 for no): ");\r
    scanf("%d", &status);\r
    return (status == 1);\r
}\r
\r
// 2. Validation responsibility\r
bool isValidAge(int age) {\r
    return (age >= 0 && age <= 120);\r
}\r
\r
// 3. Calculation responsibility\r
double calculateTicketPrice(int age, bool isStudent) {\r
    double price = 100.0;\r
    if (isStudent) {\r
        price *= 0.8; // 20% student discount\r
    }\r
    if (age >= 60) {\r
        price *= 0.7; // 30% senior discount\r
    }\r
    return price;\r
}\r
\r
// 4. Output responsibility\r
void printPrice(double price) {\r
    printf("Final ticket price: ₹%.2f\\n", price);\r
}\r
\r
int main() {\r
    int age = getAge();\r
    if (!isValidAge(age)) {\r
        printf("Invalid age!\\n");\r
        return 1;\r
    }\r
    \r
    bool isStudent = getStudentStatus();\r
    double price = calculateTicketPrice(age, isStudent);\r
    printPrice(price);\r
    \r
    return 0;\r
}`,m=()=>{const i=new Date().getFullYear()-1998;return e.jsxs("div",{className:"min-h-screen bg-white p-6 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200",children:[e.jsxs("header",{className:"mb-8 text-center",children:[e.jsx("h1",{className:"mb-2 text-4xl font-extrabold tracking-tight",children:e.jsx("span",{className:"bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-emerald-400",children:"Single Responsibility Principle for Functions"})}),e.jsx("p",{className:"mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400",children:"A function should do one thing, and do it well. Learn why this is the cornerstone of clean, maintainable code."})]}),e.jsxs("section",{className:t("mb-12 rounded-xl bg-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"What Is the Single Responsibility Principle?"}),e.jsxs("p",{className:"leading-relaxed",children:["At Barrackpore CNAT, Ritaja wrote a function that reads student data, calculates grades, and prints a report – all in one 200‑line monster. When Abhronila needed to change the grading scale, she had to understand the entire function, and accidentally broke the report formatting. The ",e.jsx("strong",{children:"Single Responsibility Principle (SRP)"})," ","states that every function should have exactly one reason to change. In other words, it should do one thing and one thing only. This makes code easier to understand, test, and modify."]})]}),e.jsx("div",{className:"mb-12 grid gap-6 md:grid-cols-1 lg:grid-cols-2",children:[{title:"One Reason to Change",desc:"If a function handles both validation and output, changing output format also risks breaking validation.",icon:"🎯"},{title:"Testability",desc:"Small, single‑purpose functions are easy to test in isolation.",icon:"🧪"},{title:"Reusability",desc:"A function that does one thing can be reused in many contexts.",icon:"♻️"},{title:"Readability",desc:"Well‑named single‑responsibility functions read like a story.",icon:"📖"},{title:"Maintainability",desc:"Changes are isolated – you modify only the relevant function.",icon:"🔧"},{title:"Parallel Development",desc:"Team members can work on different responsibilities without conflicts.",icon:"👥"}].map((n,a)=>e.jsxs("div",{className:t("group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-teal-600","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",`motion-safe:animation-delay-${(a+1)*100}ms`),style:{animationDelay:`${(a+1)*100}ms`},children:[e.jsx("div",{className:"mb-3 text-4xl",children:n.icon}),e.jsx("h3",{className:"mb-2 text-xl font-semibold",children:n.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:n.desc})]},a))}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"mb-6 text-2xl font-semibold",children:"SRP Violation vs Adherence"}),e.jsxs("div",{className:"grid gap-8 lg:grid-cols-1",children:[e.jsxs("div",{className:t("rounded-xl border border-red-200 bg-red-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-red-900 dark:bg-red-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-red-700 dark:text-red-400",children:[e.jsx("span",{className:"mr-2",children:"❌"})," Violation: One Function Does Everything"]}),e.jsx(s,{title:"srp_bad.c – Validation, calculation, and I/O mixed",initialCode:r}),e.jsx("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:"Swadeep's function reads data, validates, calculates, and prints. Changing the validation rule means touching code that also handles output – risky and hard to test."})]}),e.jsxs("div",{className:t("rounded-xl border border-green-200 bg-green-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-green-900 dark:bg-green-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-green-700 dark:text-green-400",children:[e.jsx("span",{className:"mr-2",children:"✅"})," Adherence: Separate Responsibilities"]}),e.jsx(s,{title:"srp_good.c – Each function has one job",initialCode:l}),e.jsxs("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:["Tuhina split the code into ",e.jsx("code",{children:"getInput()"}),","," ",e.jsx("code",{children:"isValidAge()"}),", ",e.jsx("code",{children:"calculateTicketPrice()"}),", and",e.jsx("code",{children:"printResult()"}),". Each can be tested and changed independently."]})]})]})]}),e.jsxs("section",{className:t("mb-12 rounded-xl bg-yellow-50/70 p-6 dark:bg-yellow-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-yellow-800 dark:text-yellow-300",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Too many tiny functions:"})," Breaking code into too many functions can harm readability. Aim for a balance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Side effects:"}),' A function that "does one thing" but also modifies a global variable actually has two responsibilities.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Vague function names:"})," If you can't name a function because it does too much, that's a smell."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring cohesion:"})," Functions that operate on unrelated data may still violate SRP even if they have one line."]})]})]}),e.jsxs("section",{className:"mb-12 grid gap-6 md:grid-cols-1",children:[e.jsxs("div",{className:t("rounded-xl bg-blue-50/50 p-5 dark:bg-blue-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-blue-700 dark:text-blue-300",children:"📋 Do's"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Write functions that do one logical task."}),e.jsx("li",{children:"Name functions after that single task (verb)."}),e.jsx("li",{children:'Extract helper functions when you see "paragraphs" of code.'}),e.jsx("li",{children:"Test each function independently."})]})]}),e.jsxs("div",{className:t("rounded-xl bg-purple-50/50 p-5 dark:bg-purple-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-purple-700 dark:text-purple-300",children:"🚫 Don'ts"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Write long functions that mix I/O, logic, and validation."}),e.jsx("li",{children:"Let functions have side effects that aren't obvious."}),e.jsx("li",{children:"Use the same function to handle multiple unrelated tasks."})]})]})]}),e.jsxs("section",{className:t("mb-12 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/30 p-6 dark:border-indigo-700 dark:bg-indigo-900/10","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-indigo-800 dark:text-indigo-300",children:"💡 Hint – Think Like a Pro"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"})," In the bad example, the function ",e.jsx("code",{children:"processStudent()"})," handles input, validation, calculation, and output. If you need to change the validation rule, you must also understand the output logic. In the good example, each function has a clear, testable purpose. ",e.jsx("br",{}),e.jsxs("span",{className:"mt-2 block",children:[e.jsx("strong",{children:"Try changing this:"})," Modify the good example to add a discount for seniors. You'll only change the calculation function, without touching input or output."]})]})]}),e.jsxs("section",{className:t("mb-12 rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-emerald-800 dark:text-emerald-300",children:"🧠 Tips & Tricks (Professional Edge)"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-1",children:[e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:'🔍 The "And" Test'}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:'If you can describe a function using "and" (e.g., "it validates and prints"), it probably violates SRP.'})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"📏 Keep functions small"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"A good rule of thumb: a function should fit on a screen (20–30 lines). If it's longer, consider splitting."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🧪 Test in isolation"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Write unit tests for each small function. If a test is hard to write, the function probably has too many responsibilities."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🏫 Classroom Shortcut"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:'At Naihati CNAT, we use the "job interview" test: if you were hiring a function, would you hire one person to do all these tasks? Probably not.'})]})]})]}),e.jsxs("section",{className:t("mb-12 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-6 dark:bg-teal-900/30","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","transition-all duration-300 hover:border-l-8 hover:shadow-lg"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-teal-800 dark:text-teal-300",children:"👨‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-wrap items-start gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2 text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: sukantahui@codernaccotax.co.in , mobile: 7003756860) has been teaching programming since 1998 – that's ",e.jsxs("strong",{children:[i," years"]})," of experience in C, RDBMS, OS, and web development."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:`"The single responsibility principle is the foundation of clean code. I've seen students write 500‑line functions and then struggle to debug them. Teaching them to split code into focused functions transforms their approach. Remember: a function that does one thing is a joy to use; a function that does many things is a liability."`})]}),e.jsx("div",{className:"rounded-full bg-teal-200 p-3 dark:bg-teal-800",children:e.jsx("svg",{className:"h-12 w-12 text-teal-700 dark:text-teal-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})]})]}),e.jsxs("section",{className:"rounded-xl bg-gray-100 p-6 dark:bg-gray-800",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"✅ Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-1",children:["Does my function have only one reason to change?","Can I describe what it does without using 'and'?","Is it small enough to read in one screen?","Can I write a simple unit test for it?","Does its name clearly indicate its single responsibility?"].map((n,a)=>e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:n})]},a))})]}),e.jsx("style",{children:`
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
      `})]})};export{m as default};
