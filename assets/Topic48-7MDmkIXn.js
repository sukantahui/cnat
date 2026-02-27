import{j as e}from"./index-meFSU1Lv.js";import{c as t}from"./clsx-B-dksMZM.js";import{E as r}from"./EditableCCodeBlock-C1aLYO6_.js";const i=`// too_many_tasks_bad.c – One function does everything\r
#include <stdio.h>\r
\r
void manageEmployee() {\r
    int id;\r
    float hoursWorked, hourlyRate;\r
    \r
    // Input\r
    printf("Enter employee ID: ");\r
    scanf("%d", &id);\r
    printf("Enter hours worked: ");\r
    scanf("%f", &hoursWorked);\r
    printf("Enter hourly rate: ");\r
    scanf("%f", &hourlyRate);\r
    \r
    // Validation\r
    if (hoursWorked < 0 || hoursWorked > 168) {\r
        printf("Invalid hours!\\n");\r
        return;\r
    }\r
    if (hourlyRate < 0) {\r
        printf("Invalid rate!\\n");\r
        return;\r
    }\r
    \r
    // Calculation\r
    float salary = hoursWorked * hourlyRate;\r
    float tax = salary * 0.2;\r
    float net = salary - tax;\r
    \r
    // Output\r
    printf("Employee ID: %d\\n", id);\r
    printf("Gross Salary: %.2f\\n", salary);\r
    printf("Tax (20%%): %.2f\\n", tax);\r
    printf("Net Salary: %.2f\\n", net);\r
}\r
\r
int main() {\r
    manageEmployee();\r
    return 0;\r
}`,o=`// single_responsibility_good.c – Each function has one job\r
#include <stdio.h>\r
#include <stdbool.h>\r
\r
// Input functions\r
int getEmployeeId() {\r
    int id;\r
    printf("Enter employee ID: ");\r
    scanf("%d", &id);\r
    return id;\r
}\r
\r
float getHoursWorked() {\r
    float hours;\r
    printf("Enter hours worked: ");\r
    scanf("%f", &hours);\r
    return hours;\r
}\r
\r
float getHourlyRate() {\r
    float rate;\r
    printf("Enter hourly rate: ");\r
    scanf("%f", &rate);\r
    return rate;\r
}\r
\r
// Validation functions\r
bool isValidHours(float hours) {\r
    return (hours >= 0 && hours <= 168);\r
}\r
\r
bool isValidRate(float rate) {\r
    return (rate >= 0);\r
}\r
\r
// Calculation functions\r
float calculateGross(float hours, float rate) {\r
    return hours * rate;\r
}\r
\r
float calculateTax(float gross) {\r
    return gross * 0.2;  // 20% tax\r
}\r
\r
// Output function\r
void printPaySlip(int id, float gross, float tax, float net) {\r
    printf("\\n--- Pay Slip ---\\n");\r
    printf("Employee ID: %d\\n", id);\r
    printf("Gross Salary: %.2f\\n", gross);\r
    printf("Tax (20%%): %.2f\\n", tax);\r
    printf("Net Salary: %.2f\\n", net);\r
}\r
\r
int main() {\r
    int id = getEmployeeId();\r
    float hours = getHoursWorked();\r
    float rate = getHourlyRate();\r
    \r
    if (!isValidHours(hours)) {\r
        printf("Invalid hours!\\n");\r
        return 1;\r
    }\r
    if (!isValidRate(rate)) {\r
        printf("Invalid rate!\\n");\r
        return 1;\r
    }\r
    \r
    float gross = calculateGross(hours, rate);\r
    float tax = calculateTax(gross);\r
    float net = gross - tax;\r
    \r
    printPaySlip(id, gross, tax, net);\r
    return 0;\r
}`,u=()=>{const s=new Date().getFullYear()-1998;return e.jsxs("div",{className:"min-h-screen bg-white p-6 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200",children:[e.jsxs("header",{className:"mb-8 text-center",children:[e.jsx("h1",{className:"mb-2 text-4xl font-extrabold tracking-tight",children:e.jsx("span",{className:"bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent dark:from-red-400 dark:to-pink-400",children:"Avoiding Functions That Do Too Many Tasks"})}),e.jsx("p",{className:"mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400",children:"When a function tries to be a superhero, it becomes a maintenance nightmare. Learn to spot overloaded functions and split them into focused, manageable pieces."})]}),e.jsxs("section",{className:t("mb-12 rounded-xl bg-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"The Superfunction Trap"}),e.jsxs("p",{className:"leading-relaxed",children:["At Barrackpore CNAT, Debangshu wrote a function called"," ",e.jsx("code",{children:"processEmployeeData()"}),". It reads input, validates, calculates salary, updates a database, and generates a PDF report – all in 300 lines. When Tuhina needed to change the tax calculation, she spent hours understanding the entire beast and accidentally broke the PDF generation. Functions that do too many tasks are hard to read, test, debug, and reuse. The solution: split them into smaller, single‑purpose functions that each do one thing well."]})]}),e.jsx("div",{className:"mb-12 grid gap-6 md:grid-cols-1 lg:grid-cols-2",children:[{title:"Single Responsibility",desc:"A function should have one clear purpose. If you can't describe it in one sentence, it's doing too much.",icon:"🎯"},{title:"Readability",desc:"Small functions are easier to read and understand. You don't need to keep many details in your head.",icon:"📖"},{title:"Testability",desc:"Testing a function that does ten things requires ten times the test cases. Split them for focused tests.",icon:"🧪"},{title:"Reusability",desc:"A tiny validation function can be reused everywhere; a giant superfunction cannot.",icon:"♻️"},{title:"Parallel Development",desc:"When functions are small, multiple team members can work on different parts without conflicts.",icon:"👥"},{title:"Debugging",desc:"When a bug appears, you know exactly which small function to check, not a 500‑line monster.",icon:"🐛"}].map((a,n)=>e.jsxs("div",{className:t("group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-red-600","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",`motion-safe:animation-delay-${(n+1)*100}ms`),style:{animationDelay:`${(n+1)*100}ms`},children:[e.jsx("div",{className:"mb-3 text-4xl",children:a.icon}),e.jsx("h3",{className:"mb-2 text-xl font-semibold",children:a.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:a.desc})]},n))}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"mb-6 text-2xl font-semibold",children:"Overloaded vs Focused Functions"}),e.jsxs("div",{className:"grid gap-8 lg:grid-cols-1",children:[e.jsxs("div",{className:t("rounded-xl border border-red-200 bg-red-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-red-900 dark:bg-red-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-red-700 dark:text-red-400",children:[e.jsx("span",{className:"mr-2",children:"❌"})," Too Many Tasks"]}),e.jsx(r,{title:"too_many_tasks_bad.c – One function does everything",initialCode:i}),e.jsxs("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:["Swadeep's ",e.jsx("code",{children:"manageEmployee()"})," handles input, validation, calculation, and output. Any change risks breaking unrelated parts."]})]}),e.jsxs("div",{className:t("rounded-xl border border-green-200 bg-green-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-green-900 dark:bg-green-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-green-700 dark:text-green-400",children:[e.jsx("span",{className:"mr-2",children:"✅"})," Focused Functions"]}),e.jsx(r,{title:"single_responsibility_good.c – Each has one job",initialCode:o}),e.jsx("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:"Abhronila split the logic into small, single‑purpose functions. Each can be tested and modified independently."})]})]})]}),e.jsxs("section",{className:t("mb-12 rounded-xl bg-yellow-50/70 p-6 dark:bg-yellow-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-yellow-800 dark:text-yellow-300",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"The kitchen sink function:"})," One function that handles user input, validation, business logic, and persistence."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Copy‑paste twins:"})," When similar logic appears in multiple places, it's a sign that you haven't extracted a shared function."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Long parameter lists:"})," More than 4 parameters often mean the function is doing too much or should use a struct."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Flag parameters:"})," A boolean flag that changes behaviour usually indicates the function does two different things."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Comments explaining complex sections:"})," If you need to comment a block to explain what it does, extract it into a named function."]})]})]}),e.jsxs("section",{className:"mb-12 grid gap-6 md:grid-cols-1",children:[e.jsxs("div",{className:t("rounded-xl bg-blue-50/50 p-5 dark:bg-blue-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-blue-700 dark:text-blue-300",children:"📋 Do's"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Keep functions small – aim for 5–15 lines."}),e.jsx("li",{children:"Extract distinct logic into helper functions."}),e.jsx("li",{children:"Name functions after the single task they perform."}),e.jsx("li",{children:"Write unit tests for each small function."}),e.jsx("li",{children:'Use the "one level of abstraction" rule: a function should either do high‑level orchestration or low‑level details, not both.'})]})]}),e.jsxs("div",{className:t("rounded-xl bg-purple-50/50 p-5 dark:bg-purple-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-purple-700 dark:text-purple-300",children:"🚫 Don'ts"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Write functions longer than 30 lines without good reason."}),e.jsx("li",{children:"Mix I/O, calculation, and validation in the same function."}),e.jsx("li",{children:"Use flags to switch behaviour – create separate functions instead."}),e.jsx("li",{children:"Ignore code duplication – it's a cry for extraction."})]})]})]}),e.jsxs("section",{className:t("mb-12 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/30 p-6 dark:border-indigo-700 dark:bg-indigo-900/10","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-indigo-800 dark:text-indigo-300",children:"💡 Hint – Think Like a Pro"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"})," In the bad example, ",e.jsx("code",{children:"manageEmployee()"})," does four distinct things. If you need to change the tax rate, you must read through input and output code. In the good example, you only look at ",e.jsx("code",{children:"calculateSalary()"}),".",e.jsx("br",{}),e.jsxs("span",{className:"mt-2 block",children:[e.jsx("strong",{children:"Try changing this:"})," Add a new rule: give a bonus to employees with >5 years experience. In the bad version, you'd have to modify the giant function. In the good version, you'd create a new small function ",e.jsx("code",{children:"calculateBonus()"})," and call it from"," ",e.jsx("code",{children:"calculateSalary()"}),". Much safer."]})]})]}),e.jsxs("section",{className:t("mb-12 rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-emerald-800 dark:text-emerald-300",children:"🧠 Tips & Tricks (Professional Edge)"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-1",children:[e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:'🔍 The "And" Test'}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:`Describe the function: "It reads input and validates and calculates and prints." If you use "and", it's doing too much.`})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"📏 Cyclomatic complexity"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Measure complexity with tools. High complexity often correlates with too many tasks."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🧪 Test‑Driven Development"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Writing tests first forces you to design small, testable functions. You'll naturally avoid big functions."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🏫 Classroom Shortcut"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:'At Naihati CNAT, we use the "recipe" analogy: a recipe step should be one action. "Bake the cake" is fine; "mix flour, sugar, eggs, and then bake, then cool, then frost" is four steps.'})]})]})]}),e.jsxs("section",{className:t("mb-12 rounded-xl border-l-4 border-red-500 bg-red-50/80 p-6 dark:bg-red-900/30","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","transition-all duration-300 hover:border-l-8 hover:shadow-lg"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-red-800 dark:text-red-300",children:"👨‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-wrap items-start gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2 text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: sukantahui@codernaccotax.co.in , mobile: 7003756860) has been teaching programming since 1998 – that's ",e.jsxs("strong",{children:[s," years"]})," of experience in C, RDBMS, OS, and web development."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:`"I've seen students create functions of 500+ lines and then wonder why debugging takes days. A function should be like a well‑organized toolbox: each tool does one job. When you open the toolbox, you know exactly which tool to pick. Train yourself to spot functions that are doing too much – your future self will thank you."`})]}),e.jsx("div",{className:"rounded-full bg-red-200 p-3 dark:bg-red-800",children:e.jsx("svg",{className:"h-12 w-12 text-red-700 dark:text-red-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})]})]}),e.jsxs("section",{className:"rounded-xl bg-gray-100 p-6 dark:bg-gray-800",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"✅ Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-1",children:["Can I describe the function's purpose in one sentence without 'and'?","Is the function small enough to fit on one screen?","Does it mix input, processing, and output?","Are there flags that change its behaviour?","Could I reuse part of it without copying code?","Would a new team member understand it quickly?"].map((a,n)=>e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:a})]},n))})]}),e.jsx("style",{children:`
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
      `})]})};export{u as default};
