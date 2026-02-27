import{j as e}from"./index-meFSU1Lv.js";import{c as n}from"./clsx-B-dksMZM.js";import{E as a}from"./EditableCCodeBlock-C1aLYO6_.js";const i=`// monolithic_student.c – All‑in‑one student record system (hard to maintain)\r
#include <stdio.h>\r
#include <string.h>\r
\r
#define MAX_STUDENTS 100\r
#define NAME_LEN 50\r
\r
typedef struct {\r
    int id;\r
    char name[NAME_LEN];\r
    int age;\r
    float marks;\r
} Student;\r
\r
Student students[MAX_STUDENTS];\r
int studentCount = 0;\r
\r
void addStudent() {\r
    if (studentCount >= MAX_STUDENTS) {\r
        printf("Database full!\\n");\r
        return;\r
    }\r
    Student s;\r
    printf("Enter ID: ");\r
    scanf("%d", &s.id);\r
    printf("Enter name: ");\r
    scanf("%s", s.name);\r
    printf("Enter age: ");\r
    scanf("%d", &s.age);\r
    printf("Enter marks: ");\r
    scanf("%f", &s.marks);\r
    students[studentCount++] = s;\r
    printf("Student added.\\n");\r
}\r
\r
void displayAll() {\r
    printf("\\n--- Student Records ---\\n");\r
    for (int i = 0; i < studentCount; i++) {\r
        printf("ID: %d, Name: %s, Age: %d, Marks: %.2f\\n",\r
               students[i].id, students[i].name, students[i].age, students[i].marks);\r
    }\r
}\r
\r
float calculateAverage() {\r
    if (studentCount == 0) return 0;\r
    float sum = 0;\r
    for (int i = 0; i < studentCount; i++) {\r
        sum += students[i].marks;\r
    }\r
    return sum / studentCount;\r
}\r
\r
void searchById() {\r
    int id;\r
    printf("Enter ID to search: ");\r
    scanf("%d", &id);\r
    for (int i = 0; i < studentCount; i++) {\r
        if (students[i].id == id) {\r
            printf("Found: %s, Age: %d, Marks: %.2f\\n",\r
                   students[i].name, students[i].age, students[i].marks);\r
            return;\r
        }\r
    }\r
    printf("Student not found.\\n");\r
}\r
\r
void saveToFile() {\r
    FILE *fp = fopen("students.txt", "w");\r
    if (!fp) {\r
        printf("Error opening file!\\n");\r
        return;\r
    }\r
    for (int i = 0; i < studentCount; i++) {\r
        fprintf(fp, "%d %s %d %.2f\\n",\r
                students[i].id, students[i].name, students[i].age, students[i].marks);\r
    }\r
    fclose(fp);\r
    printf("Data saved.\\n");\r
}\r
\r
void loadFromFile() {\r
    FILE *fp = fopen("students.txt", "r");\r
    if (!fp) return;\r
    studentCount = 0;\r
    while (fscanf(fp, "%d %s %d %f",\r
                  &students[studentCount].id,\r
                  students[studentCount].name,\r
                  &students[studentCount].age,\r
                  &students[studentCount].marks) == 4) {\r
        studentCount++;\r
    }\r
    fclose(fp);\r
    printf("Data loaded.\\n");\r
}\r
\r
int main() {\r
    int choice;\r
    loadFromFile();\r
    do {\r
        printf("\\n1. Add Student\\n2. Display All\\n3. Average Marks\\n4. Search by ID\\n5. Save\\n6. Exit\\nChoice: ");\r
        scanf("%d", &choice);\r
        switch (choice) {\r
            case 1: addStudent(); break;\r
            case 2: displayAll(); break;\r
            case 3: printf("Average: %.2f\\n", calculateAverage()); break;\r
            case 4: searchById(); break;\r
            case 5: saveToFile(); break;\r
        }\r
    } while (choice != 6);\r
    return 0;\r
}`,d=`// modular_student.h – Header file (declarations only)\r
#ifndef STUDENT_MODULE_H\r
#define STUDENT_MODULE_H\r
\r
#define MAX_STUDENTS 100\r
#define NAME_LEN 50\r
\r
typedef struct {\r
    int id;\r
    char name[NAME_LEN];\r
    int age;\r
    float marks;\r
} Student;\r
\r
// Core functions\r
void addStudent();\r
void displayAll();\r
float calculateAverage();\r
void searchById();\r
\r
// File I/O\r
void saveToFile();\r
void loadFromFile();\r
\r
#endif`,l=`// modular_student_main.c – Main program using the student module\r
#include <stdio.h>\r
#include "modular_student.h"\r
\r
int main() {\r
    int choice;\r
    loadFromFile();\r
    do {\r
        printf("\\n1. Add Student\\n2. Display All\\n3. Average Marks\\n4. Search by ID\\n5. Save\\n6. Exit\\nChoice: ");\r
        scanf("%d", &choice);\r
        switch (choice) {\r
            case 1: addStudent(); break;\r
            case 2: displayAll(); break;\r
            case 3: printf("Average: %.2f\\n", calculateAverage()); break;\r
            case 4: searchById(); break;\r
            case 5: saveToFile(); break;\r
        }\r
    } while (choice != 6);\r
    return 0;\r
}`,o=`// modular_student_impl.c – Implementation of student module\r
#include <stdio.h>\r
#include <string.h>\r
#include "modular_student.h"  // Note: in real code this would be "modular_student.h"\r
\r
static Student students[MAX_STUDENTS];\r
static int studentCount = 0;\r
\r
void addStudent() {\r
    if (studentCount >= MAX_STUDENTS) {\r
        printf("Database full!\\n");\r
        return;\r
    }\r
    Student s;\r
    printf("Enter ID: ");\r
    scanf("%d", &s.id);\r
    printf("Enter name: ");\r
    scanf("%s", s.name);\r
    printf("Enter age: ");\r
    scanf("%d", &s.age);\r
    printf("Enter marks: ");\r
    scanf("%f", &s.marks);\r
    students[studentCount++] = s;\r
    printf("Student added.\\n");\r
}\r
\r
void displayAll() {\r
    printf("\\n--- Student Records ---\\n");\r
    for (int i = 0; i < studentCount; i++) {\r
        printf("ID: %d, Name: %s, Age: %d, Marks: %.2f\\n",\r
               students[i].id, students[i].name, students[i].age, students[i].marks);\r
    }\r
}\r
\r
float calculateAverage() {\r
    if (studentCount == 0) return 0;\r
    float sum = 0;\r
    for (int i = 0; i < studentCount; i++) {\r
        sum += students[i].marks;\r
    }\r
    return sum / studentCount;\r
}\r
\r
void searchById() {\r
    int id;\r
    printf("Enter ID to search: ");\r
    scanf("%d", &id);\r
    for (int i = 0; i < studentCount; i++) {\r
        if (students[i].id == id) {\r
            printf("Found: %s, Age: %d, Marks: %.2f\\n",\r
                   students[i].name, students[i].age, students[i].marks);\r
            return;\r
        }\r
    }\r
    printf("Student not found.\\n");\r
}\r
\r
void saveToFile() {\r
    FILE *fp = fopen("students.txt", "w");\r
    if (!fp) {\r
        printf("Error opening file!\\n");\r
        return;\r
    }\r
    for (int i = 0; i < studentCount; i++) {\r
        fprintf(fp, "%d %s %d %.2f\\n",\r
                students[i].id, students[i].name, students[i].age, students[i].marks);\r
    }\r
    fclose(fp);\r
    printf("Data saved.\\n");\r
}\r
\r
void loadFromFile() {\r
    FILE *fp = fopen("students.txt", "r");\r
    if (!fp) return;\r
    studentCount = 0;\r
    while (fscanf(fp, "%d %s %d %f",\r
                  &students[studentCount].id,\r
                  students[studentCount].name,\r
                  &students[studentCount].age,\r
                  &students[studentCount].marks) == 4) {\r
        studentCount++;\r
    }\r
    fclose(fp);\r
    printf("Data loaded.\\n");\r
}`,f=()=>{const s=new Date().getFullYear()-1998;return e.jsxs("div",{className:"min-h-screen bg-white p-6 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200",children:[e.jsxs("header",{className:"mb-8 text-center",children:[e.jsx("h1",{className:"mb-2 text-4xl font-extrabold tracking-tight",children:e.jsx("span",{className:"bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent dark:from-amber-400 dark:to-orange-400",children:"Real‑World Use Cases of Modular Programming"})}),e.jsx("p",{className:"mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400",children:"From student record systems to operating systems – modularity is how the pros build software that scales, is maintainable, and can be developed by teams."})]}),e.jsxs("section",{className:n("mb-12 rounded-xl bg-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"Why Modular Programming in the Real World?"}),e.jsx("p",{className:"leading-relaxed",children:"At Barrackpore CNAT, Debangshu is building a student management system for the admin office. If he writes everything in one giant file, finding and fixing bugs becomes a nightmare. In the real world, software is split into modules – separate files or libraries – each responsible for a specific feature. This is how operating systems, banking software, and even the code that runs NASA's rovers are built."})]}),e.jsx("div",{className:"mb-12 grid gap-6 md:grid-cols-1 lg:grid-cols-3",children:[{title:"Student Record Systems",desc:"Modules for student data, course enrollment, fee calculation, and report generation can be developed independently.",icon:"🎓"},{title:"E‑Commerce Platforms",desc:"Separate modules handle user accounts, product catalog, shopping cart, payment, and order fulfillment.",icon:"🛒"},{title:"Operating Systems",desc:"Kernel, file system, device drivers, and system calls are all separate modules that communicate via well‑defined interfaces.",icon:"💻"},{title:"Embedded Systems",desc:"In a car's ECU, modules manage engine control, braking, infotainment – each can be updated independently.",icon:"🚗"},{title:"Game Development",desc:"Physics engine, rendering, AI, and audio are separate modules, often developed by different teams.",icon:"🎮"},{title:"Scientific Simulations",desc:"Modular code allows swapping different numerical methods or data inputs without rewriting everything.",icon:"🔬"}].map((t,r)=>e.jsxs("div",{className:n("group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-amber-600","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]",`motion-safe:animation-delay-${(r+1)*100}ms`),style:{animationDelay:`${(r+1)*100}ms`},children:[e.jsx("div",{className:"mb-3 text-4xl",children:t.icon}),e.jsx("h3",{className:"mb-2 text-xl font-semibold",children:t.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:t.desc})]},r))}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"mb-6 text-2xl font-semibold",children:"Student Record System – Monolithic vs Modular"}),e.jsxs("div",{className:"grid gap-8 lg:grid-cols-1",children:[e.jsxs("div",{className:n("rounded-xl border border-red-200 bg-red-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-red-900 dark:bg-red-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-red-700 dark:text-red-400",children:[e.jsx("span",{className:"mr-2",children:"❌"})," Monolithic (All in One File)"]}),e.jsx(a,{title:"monolithic_student.c – 200+ lines, hard to maintain",initialCode:i}),e.jsx("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:"Swadeep wrote everything in one file. Adding a new feature means understanding the whole file and risking breaking unrelated parts."})]}),e.jsxs("div",{className:n("rounded-xl border border-green-200 bg-green-50/50 p-5 transition-all duration-300 hover:shadow-md dark:border-green-900 dark:bg-green-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsxs("h3",{className:"mb-3 flex items-center text-xl font-semibold text-green-700 dark:text-green-400",children:[e.jsx("span",{className:"mr-2",children:"✅"})," Modular (Separate Files)"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{title:"modular_student.h – Header with declarations",initialCode:d}),e.jsx(a,{title:"modular_student_impl.c – Function implementations",initialCode:o}),e.jsx(a,{title:"modular_student_main.c – Main program",initialCode:l})]}),e.jsx("p",{className:"mt-3 text-gray-600 dark:text-gray-400",children:"Tuhina split the system into modules. Now the team can work in parallel: Ritaja works on file I/O, Abhronila on reports, and Debangshu on the user interface – all without stepping on each other's toes."})]})]})]}),e.jsxs("section",{className:n("mb-12 rounded-xl bg-yellow-50/70 p-6 dark:bg-yellow-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-yellow-800 dark:text-yellow-300",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Too many tiny modules:"})," Over‑modularisation can make the project hard to navigate."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tight coupling:"})," Modules that depend too much on each other's internal details defeat the purpose."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Missing headers or wrong declarations:"})," Compiler errors that are hard to trace."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Circular dependencies:"})," Module A includes B, and B includes A – leads to linker errors."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not using include guards:"})," Causes multiple definition errors."]})]})]}),e.jsxs("section",{className:"mb-12 grid gap-6 md:grid-cols-1",children:[e.jsxs("div",{className:n("rounded-xl bg-blue-50/50 p-5 dark:bg-blue-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-blue-700 dark:text-blue-300",children:"📋 Do's"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Design modules around features, not technical layers."}),e.jsx("li",{children:"Keep interfaces minimal and well‑documented."}),e.jsx("li",{children:"Use header files to declare public functions and data."}),e.jsx("li",{children:"Hide implementation details using static functions."}),e.jsx("li",{children:"Compile each module separately and link them."})]})]}),e.jsxs("div",{className:n("rounded-xl bg-purple-50/50 p-5 dark:bg-purple-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","motion-safe:animation-delay-200ms"),style:{animationDelay:"200ms"},children:[e.jsx("h3",{className:"mb-3 text-xl font-semibold text-purple-700 dark:text-purple-300",children:"🚫 Don'ts"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Let modules access each other's global variables directly."}),e.jsx("li",{children:"Put everything in a single header."}),e.jsx("li",{children:"Forget to add include guards."}),e.jsx("li",{children:"Create modules that are impossible to test independently."}),e.jsx("li",{children:"Write modules that are too large (thousands of lines)."})]})]})]}),e.jsxs("section",{className:n("mb-12 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/30 p-6 dark:border-indigo-700 dark:bg-indigo-900/10","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-indigo-800 dark:text-indigo-300",children:"💡 Hint – Think Like a Pro"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"})," In the modular version, the main program only includes the header and calls functions without knowing how they're implemented. If we change the sorting algorithm inside the implementation, the main program doesn't even need to be recompiled – just relinked. ",e.jsx("br",{}),e.jsxs("span",{className:"mt-2 block",children:[e.jsx("strong",{children:"Try changing this:"}),' Add a new feature, like "calculate average marks", to both versions. In the monolithic version you have to insert code carefully; in the modular version you can add a new function in a separate file without touching existing code.']})]})]}),e.jsxs("section",{className:n("mb-12 rounded-xl bg-emerald-50/50 p-6 dark:bg-emerald-900/20","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]"),children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold text-emerald-800 dark:text-emerald-300",children:"🧠 Tips & Tricks (Professional Edge)"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-1",children:[e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"📦 Use a Makefile"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Automate compilation of multiple files. Only recompile changed modules – huge time saver in large projects."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🔒 Hide Internals with static"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Declare functions and variables that are only used inside a module as static to avoid name clashes."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"📋 Document Interfaces"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"In the header, comment what each function does, its parameters, and return value. This is the contract for other modules."})]}),e.jsxs("div",{className:"rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800",children:[e.jsx("p",{className:"font-medium text-emerald-700 dark:text-emerald-400",children:"🏫 Classroom Shortcut"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"At Naihati CNAT, we practice by taking a big program and splitting it into modules. Students learn to see the boundaries between different responsibilities."})]})]})]}),e.jsxs("section",{className:n("mb-12 rounded-xl border-l-4 border-amber-500 bg-amber-50/80 p-6 dark:bg-amber-900/30","motion-safe:animate-[fadeSlideUp_0.6s_ease-out]","transition-all duration-300 hover:border-l-8 hover:shadow-lg"),children:[e.jsx("h2",{className:"mb-3 text-2xl font-semibold text-amber-800 dark:text-amber-300",children:"👨‍🏫 Teacher's Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-wrap items-start gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2 text-gray-700 dark:text-gray-300",children:[e.jsx("strong",{children:"Sukanta Hui"})," (email: sukantahui@codernaccotax.co.in , mobile: 7003756860) has been teaching programming since 1998 – that's ",e.jsxs("strong",{children:[s," years"]})," of experience in C, RDBMS, OS, and web development."]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:`"In my 27+ years, I've seen projects fail because they weren't modular. At Barrackpore CNAT, we always start with a modular design – even for small assignments. It trains the mind to think in terms of interfaces and separation of concerns. Remember: in the industry, you'll never work on a single‑file codebase. Embrace modules now."`})]}),e.jsx("div",{className:"rounded-full bg-amber-200 p-3 dark:bg-amber-800",children:e.jsx("svg",{className:"h-12 w-12 text-amber-700 dark:text-amber-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})]})]}),e.jsxs("section",{className:"rounded-xl bg-gray-100 p-6 dark:bg-gray-800",children:[e.jsx("h2",{className:"mb-4 text-2xl font-semibold",children:"✅ Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-1",children:["Have I identified the main features to modularise?","Does each module have a clear, single responsibility?","Are the interfaces (headers) minimal and well‑commented?","Did I use include guards in every header?","Can I compile each module separately?","Are internal functions marked static?","Is the main program free of implementation details?"].map((t,r)=>e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"✓"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:t})]},r))})]}),e.jsx("style",{children:`
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
      `})]})};export{f as default};
