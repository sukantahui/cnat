import{j as e}from"./index-meFSU1Lv.js";import{c as a}from"./clsx-B-dksMZM.js";import{E as i}from"./EditableCCodeBlock-C1aLYO6_.js";const n=`// repeated_code_bad.c – copy‑pasted validation logic (before refactoring)\r
#include <stdio.h>\r
\r
int main() {\r
    int age1, age2, age3;\r
\r
    // First person\r
    printf("Enter age of Swadeep: ");\r
    scanf("%d", &age1);\r
    // Validation block 1\r
    if (age1 >= 18 && age1 <= 60) {\r
        printf("Swadeep is eligible.\\n");\r
    } else {\r
        printf("Swadeep is NOT eligible.\\n");\r
    }\r
\r
    // Second person\r
    printf("Enter age of Tuhina: ");\r
    scanf("%d", &age2);\r
    // Validation block 2 (identical)\r
    if (age2 >= 18 && age2 <= 60) {\r
        printf("Tuhina is eligible.\\n");\r
    } else {\r
        printf("Tuhina is NOT eligible.\\n");\r
    }\r
\r
    // Third person\r
    printf("Enter age of Abhronila: ");\r
    scanf("%d", &age3);\r
    // Validation block 3 (identical again)\r
    if (age3 >= 18 && age3 <= 60) {\r
        printf("Abhronila is eligible.\\n");\r
    } else {\r
        printf("Abhronila is NOT eligible.\\n");\r
    }\r
\r
    return 0;\r
}`,d=`// refactored_code_good.c – DRY: validation logic in a function\r
#include <stdio.h>\r
#include <stdbool.h>\r
\r
// Function to check if age is valid (18-60)\r
bool isValidAge(int age) {\r
    return (age >= 18 && age <= 60);\r
}\r
\r
// Function to process one person\r
void processPerson(const char* name) {\r
    int age;\r
    printf("Enter age of %s: ", name);\r
    scanf("%d", &age);\r
    if (isValidAge(age)) {\r
        printf("%s is eligible.\\n", name);\r
    } else {\r
        printf("%s is NOT eligible.\\n", name);\r
    }\r
}\r
\r
int main() {\r
    processPerson("Swadeep");\r
    processPerson("Tuhina");\r
    processPerson("Abhronila");\r
    return 0;\r
}`,h=()=>{const s=new Date().getFullYear()-1998;return e.jsxs("div",{className:"min-h-screen bg-white p-6 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200",children:[e.jsxs("header",{className:"mb-8 text-center",children:[e.jsx("h1",{className:"mb-2 text-4xl font-extrabold tracking-tight",children:e.jsx("span",{className:"bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400",children:"Refactoring Repeated Code into Functions"})}),e.jsx("p",{className:"mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400",children:"Don't Repeat Yourself (DRY) — identify duplication and encapsulate it into reusable, maintainable functions."})]}),e.jsxs("section",{className:a("mb-12 rounded-xl bg-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"Why Refactor Repeated Code?"}),e.jsxs("p",{className:"leading-relaxed",children:["Imagine Ritaja is writing a program for Barrackpore CNAT that needs to calculate the area of a circle in three different places. She copies the formula ",e.jsx("code",{children:"3.14159 * r * r"})," each time. Later, she realises she needs more precision — now she has to hunt down every copy and fix it. Refactoring means taking that repeated logic, wrapping it in a function (like ",e.jsx("code",{children:"circleArea()"}),"), and calling it everywhere. One change, and it's fixed everywhere."]})]}),e.jsx("div",{className:"mb-12 grid gap-6 md:grid-cols-1 lg:grid-cols-3",children:[{title:"Easier Maintenance",desc:"Fix a bug or update logic in one place, not a dozen.",icon:"🔧"},{title:"Less Code",desc:"Shorter, cleaner files — easier to read and navigate.",icon:"✂️"},{title:"Fewer Errors",desc:"Copy‑paste errors disappear. Consistency across your program.",icon:"🐛"},{title:"Better Abstraction",desc:"Hide details behind meaningful names, making the code self‑documenting.",icon:"📚"},{title:"Reusability",desc:"Once in a function, you can use it in other projects too.",icon:"♻️"},{title:"Testability",desc:"Isolated logic is easy to test with different inputs.",icon:"🧪"}].map((t,r)=>e.jsxs("div",{className:a("group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-600","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",`motion-safe:animation-delay-${(r+1)*100}ms`),style:{animationDelay:`${(r+1)*100}ms`},children:[e.jsx("div",{className:"mb-3 text-4xl",children:t.icon}),e.jsx("h3",{className:"mb-2 text-xl font-semibold",children:t.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:t.desc})]},r))}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"mb-6 text-2xl font-semibold",children:"Before and After Refactoring"}),e.jsxs("div",{className:"grid gap-8 lg:grid-cols-1",children:[e.jsxs("div",{className:a("rounded-xl border border-red-200 bg-red-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-red-900 dark:bg-red-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-red-700 dark:text-red-400",children:[e.jsx("span",{className:"mr-2",children:"❌"})," Repeated Code (Before)"]}),e.jsx(i,{title:"repeated_code_bad.c – copy‑paste disaster",initialCode:n}),e.jsx("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:"Swadeep copied the same validation logic three times. Changing the valid age range means editing all three places."})]}),e.jsxs("div",{className:a("rounded-xl border border-green-200 bg-green-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-green-900 dark:bg-green-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-green-700 dark:text-green-400",children:[e.jsx("span",{className:"mr-2",children:"✅"})," Refactored Code (After)"]}),e.jsx(i,{title:"refactored_code_good.c – DRY and clean",initialCode:d}),e.jsxs("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:["Tuhina moved the validation into ",e.jsx("code",{children:"isValidAge()"}),". Now the logic is centralised and easy to update."]})]})]})]}),e.jsxs("section",{className:a("mb-12 rounded-xl bg-yellow-50/70 p-6 dark:bg-yellow-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-yellow-800 dark:text-yellow-300",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Over‑refactoring:"})," Creating a function for code that's only used once and very short can reduce readability."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Changing behaviour accidentally:"})," When extracting code, you might introduce subtle bugs. Test after refactoring."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Poor function names:"})," If the new function has a vague name, it doesn't help. Name it by what it does."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to remove all copies:"})," Leaving one instance of duplicated code defeats the purpose."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Refactoring without version control:"})," Always commit before refactoring so you can revert if something breaks."]})]})]}),e.jsxs("section",{className:"mb-12 grid gap-6 md:grid-cols-1",children:[e.jsxs("div",{className:a("rounded-xl bg-blue-50/50 p-5 dark:bg-blue-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-blue-700 dark:text-blue-300",children:"📋 Do's"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Identify duplication (exact or similar logic)."}),e.jsx("li",{children:"Extract into a well‑named function with clear parameters."}),e.jsx("li",{children:"Replace each duplicate with a function call."}),e.jsx("li",{children:"Test that behaviour remains identical."}),e.jsx("li",{children:"Consider making the function reusable for future needs."})]})]}),e.jsxs("div",{className:a("rounded-xl bg-purple-50/50 p-5 dark:bg-purple-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-purple-700 dark:text-purple-300",children:"🚫 Don'ts"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Leave identical code blocks scattered around."}),e.jsx("li",{children:"Create functions with side effects that aren't obvious."}),e.jsx("li",{children:"Refactor without testing."}),e.jsx("li",{children:"Use cryptic names for extracted functions."}),e.jsx("li",{children:"Overlook similar code that isn't exactly the same but could be generalised."})]})]})]}),e.jsxs("section",{className:a("mb-12 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/30 p-6 dark:border-indigo-700 dark:bg-indigo-900/10","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-indigo-800 dark:text-indigo-300",children:"💡 Hint – Think Like a Pro"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"})," In the bad example, each validation block uses the same condition but is written out each time. In the good example, that condition lives in one function. ",e.jsx("br",{}),e.jsxs("span",{className:"mt-2 block",children:[e.jsx("strong",{children:"Try changing this:"})," If the valid age range changes from 18‑60 to 21‑65, how many lines do you need to edit in each version? The refactored version needs just one change."]})]})]}),e.jsxs("section",{className:a("mb-12 rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-emerald-800 dark:text-emerald-300",children:"🧠 Tips & Tricks (Professional Edge)"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-1",children:[e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🔎 Use “Rule of Three”"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"If you write the same code three times, refactor it. The first time is fine, second time you might copy, third time it's time to extract."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🧪 Test After Refactoring"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Run your program with the same inputs before and after to ensure the behaviour hasn't changed."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"📖 Name the Function What It Does"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"If you struggle to name the extracted function, maybe the code does too many things – split further."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🏫 Classroom Shortcut"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"At Naihati CNAT, we practice by taking a long function and extracting meaningful chunks. Students learn to see duplication as a code smell."})]})]})]}),e.jsxs("section",{className:a("mb-12 rounded-xl border-l-4 border-purple-500 bg-purple-50/80 p-6 dark:bg-purple-900/30","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","transition-all duration-300 hover:border-l-8 hover:shadow-lg"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-purple-800 dark:text-purple-300",children:"👨‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-wrap items-start gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2 text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: sukantahui@codernaccotax.co.in , mobile: 7003756860) has been teaching programming since 1998 – that's ",e.jsxs("strong",{children:[s," years"]})," of experience in C, RDBMS, OS, and web development."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:`"I've seen students spend hours fixing the same bug in multiple places because they copied code instead of creating a function. Refactoring is not just about reducing lines – it's about reducing the mental load. When you see duplication, treat it as a warning sign. Your future self will thank you."`})]}),e.jsx("div",{className:"rounded-full bg-purple-200 p-3 dark:bg-purple-800",children:e.jsx("svg",{className:"h-12 w-12 text-purple-700 dark:text-purple-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})]})]}),e.jsxs("section",{className:"rounded-xl bg-gray-100 p-6 dark:bg-gray-800",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"✅ Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-1",children:["Have I identified all repeated code blocks?","Does the new function have a clear, descriptive name?","Are the parameters chosen so the function is flexible?","Did I replace every duplicate with a call?","Did I test that behaviour hasn't changed?","Could this function be useful in other parts of the program?","Did I remove any commented‑out copies?"].map((t,r)=>e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:t})]},r))})]}),e.jsx("style",{children:`
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
