import{j as e}from"./index-BRkQtvvo.js";import{c as i}from"./clsx-B-dksMZM.js";import{T as l}from"./TeacherSukantaHui-B1SgCAnr.js";import{E as a}from"./EditableCCodeBlock-CO4KhzZe.js";import"./git-branch-C248mFH1.js";import"./index-CBE1MaW4.js";import"./file-code-I44cNVwq.js";import"./type-DUSqinmE.js";import"./refresh-cw-BY2gUPY9.js";import"./copy-CuK_a22S.js";import"./download-CAEyvDBJ.js";const c=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
typedef struct {\r
    char *data;\r
    int length;\r
    int capacity;\r
} DynamicString;\r
\r
DynamicString* str_create() {\r
    DynamicString *s = malloc(sizeof(DynamicString));\r
    if (!s) return NULL;\r
    s->capacity = 8;\r
    s->data = malloc(s->capacity);\r
    if (!s->data) { free(s); return NULL; }\r
    s->data[0] = '\\0';\r
    s->length = 0;\r
    return s;\r
}\r
\r
void str_append_char(DynamicString *s, char ch) {\r
    if (s->length + 2 > s->capacity) {\r
        s->capacity *= 2;\r
        char *new_data = realloc(s->data, s->capacity);\r
        if (!new_data) return;\r
        s->data = new_data;\r
    }\r
    s->data[s->length] = ch;\r
    s->length++;\r
    s->data[s->length] = '\\0';\r
}\r
\r
void str_append_cstr(DynamicString *s, const char *cstr) {\r
    int len = strlen(cstr);\r
    if (s->length + len + 1 > s->capacity) {\r
        while (s->length + len + 1 > s->capacity)\r
            s->capacity *= 2;\r
        char *new_data = realloc(s->data, s->capacity);\r
        if (!new_data) return;\r
        s->data = new_data;\r
    }\r
    strcpy(s->data + s->length, cstr);\r
    s->length += len;\r
}\r
\r
void str_free(DynamicString *s) {\r
    if (s) {\r
        free(s->data);\r
        free(s);\r
    }\r
}\r
\r
int main() {\r
    DynamicString *s = str_create();\r
    str_append_char(s, 'H');\r
    str_append_char(s, 'e');\r
    str_append_char(s, 'l');\r
    str_append_char(s, 'l');\r
    str_append_char(s, 'o');\r
    str_append_cstr(s, " world!");\r
    printf("%s\\n", s->data);\r
    str_free(s);\r
    return 0;\r
}`,d=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
typedef struct {\r
    char *data;\r
    int length;\r
    int capacity;\r
} String;\r
\r
String* str_new() {\r
    String *s = malloc(sizeof(String));\r
    if (!s) return NULL;\r
    s->capacity = 16;\r
    s->data = malloc(s->capacity);\r
    if (!s->data) { free(s); return NULL; }\r
    s->data[0] = '\\0';\r
    s->length = 0;\r
    return s;\r
}\r
\r
void str_append(String *s, const char *text) {\r
    int add_len = strlen(text);\r
    if (s->length + add_len + 1 > s->capacity) {\r
        while (s->length + add_len + 1 > s->capacity)\r
            s->capacity *= 2;\r
        char *tmp = realloc(s->data, s->capacity);\r
        if (!tmp) return;\r
        s->data = tmp;\r
    }\r
    strcpy(s->data + s->length, text);\r
    s->length += add_len;\r
}\r
\r
String* str_concat(const String *a, const String *b) {\r
    String *res = str_new();\r
    if (!res) return NULL;\r
    str_append(res, a->data);\r
    str_append(res, b->data);\r
    return res;\r
}\r
\r
void str_free(String *s) {\r
    if (s) { free(s->data); free(s); }\r
}\r
\r
int main() {\r
    String *s1 = str_new();\r
    String *s2 = str_new();\r
    str_append(s1, "Hello, ");\r
    str_append(s2, "world!");\r
    String *s3 = str_concat(s1, s2);\r
    printf("%s\\n", s3->data);\r
    str_free(s1);\r
    str_free(s2);\r
    str_free(s3);\r
    return 0;\r
}`,o=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <ctype.h>\r
\r
typedef struct {\r
    char *data;\r
    int length;\r
    int capacity;\r
} DynStr;\r
\r
DynStr* ds_create() {\r
    DynStr *ds = malloc(sizeof(DynStr));\r
    if (!ds) return NULL;\r
    ds->capacity = 16;\r
    ds->data = malloc(ds->capacity);\r
    if (!ds->data) { free(ds); return NULL; }\r
    ds->data[0] = '\\0';\r
    ds->length = 0;\r
    return ds;\r
}\r
\r
void ds_append_char(DynStr *ds, char ch) {\r
    if (ds->length + 2 > ds->capacity) {\r
        ds->capacity *= 2;\r
        char *tmp = realloc(ds->data, ds->capacity);\r
        if (!tmp) return;\r
        ds->data = tmp;\r
    }\r
    ds->data[ds->length] = ch;\r
    ds->length++;\r
    ds->data[ds->length] = '\\0';\r
}\r
\r
void ds_free(DynStr *ds) {\r
    if (ds) { free(ds->data); free(ds); }\r
}\r
\r
// Read a line from stdin (including spaces) until newline\r
DynStr* read_line() {\r
    DynStr *line = ds_create();\r
    if (!line) return NULL;\r
    int ch;\r
    while ((ch = getchar()) != EOF && ch != '\\n') {\r
        ds_append_char(line, (char)ch);\r
    }\r
    return line;\r
}\r
\r
int main() {\r
    printf("Enter a line: ");\r
    DynStr *input = read_line();\r
    if (input) {\r
        printf("You entered: %s\\n", input->data);\r
        ds_free(input);\r
    }\r
    return 0;\r
}`,h=`
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

  @media (prefers-reduced-motion: no-preference) {
    .animate-fade-slide-up {
      animation: fadeSlideUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-fade-slide-up {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,_=()=>{const r=["0ms","100ms","200ms","300ms","400ms","500ms","600ms","700ms","800ms","900ms","1000ms"],n=()=>i("animate-fade-slide-up","opacity-0");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:h}),e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("div",{className:n(),style:{animationDelay:r[0]},children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",children:"Building Dynamic Strings (Using Heap Memory)"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed",children:"Flexible, resizable strings that grow to fit any content — the foundation of robust text handling."})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[1]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"Why Fixed-Size Strings Are Dangerous"}),e.jsxs("p",{className:"leading-relaxed mb-3",children:["C strings are simple arrays of characters terminated by ",e.jsx("code",{children:"'\\0'"}),". When you declare",e.jsx("code",{children:"char buffer[100];"}),", you assume the input will never exceed 99 characters. In practice, this leads to buffer overflows — a major security vulnerability."]}),e.jsx("p",{className:"leading-relaxed",children:"Dynamic strings allocate memory on the heap and grow automatically, making them safe and flexible. They are essential for user input, reading files, building messages, and many other tasks."})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[2]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"📦 Anatomy of a Dynamic String"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("p",{className:"leading-relaxed mb-3",children:"A dynamic string is similar to a dynamic array, but specialized for character data. The structure typically contains:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mb-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"data"})," – pointer to the heap‑allocated character array (always null‑terminated)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"length"})," – number of characters excluding the null terminator."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"capacity"})," – total allocated size (including space for the null terminator)."]})]}),e.jsxs("p",{children:["When you need to append characters, you check if ",e.jsx("code",{children:"length + 2 > capacity"})," (for the new character + null) and grow accordingly."]}),e.jsx("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"💡 Key insight:"})," Always keep one extra byte for the null terminator."]})})]})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[3]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Core Operations"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-medium mb-2",children:"Initialization"}),e.jsx("p",{className:"font-mono text-sm mb-3",children:"create empty string: allocate small initial capacity (e.g., 8), set data[0]='\\0', length=0, capacity=8."}),e.jsx("h3",{className:"text-xl font-medium mb-2 mt-4",children:"Append character/string"}),e.jsx("p",{className:"font-mono text-sm mb-3",children:"if length + strlen(to_append) + 1 &gt capacity → grow (double), then copy new data, update length."}),e.jsx("h3",{className:"text-xl font-medium mb-2 mt-4",children:"Concatenation"}),e.jsx("p",{className:"font-mono text-sm mb-3",children:"create new string from two strings; or append one to another."}),e.jsx("h3",{className:"text-xl font-medium mb-2 mt-4",children:"Destruction"}),e.jsx("p",{className:"font-mono text-sm",children:"free(data)."})]})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[4]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"🖼️ Dynamic String in Action"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{viewBox:"0 0 800 240",className:"w-full h-auto","aria-label":"Dynamic string illustration",children:[e.jsx("rect",{width:"800",height:"240",fill:"transparent"}),e.jsx("text",{x:"50",y:"30",fill:"currentColor",className:"text-sm",children:"DynamicString:"}),e.jsx("rect",{x:"50",y:"40",width:"200",height:"80",fill:"rgba(59,130,246,0.1)",stroke:"#3b82f6",strokeWidth:"2",rx:"4"}),e.jsx("text",{x:"60",y:"65",fill:"currentColor",className:"text-xs",children:"data → (heap)"}),e.jsx("text",{x:"60",y:"85",fill:"currentColor",className:"text-xs",children:"length = 5"}),e.jsx("text",{x:"60",y:"105",fill:"currentColor",className:"text-xs",children:"capacity = 8"}),e.jsx("rect",{x:"300",y:"40",width:"400",height:"50",fill:"none",stroke:"#22c55e",strokeWidth:"2",rx:"4"}),[310,360,410,460,510,560,610,660].map((s,t)=>e.jsx("rect",{x:s,y:"50",width:"40",height:"30",fill:t<5?"rgba(34,197,94,0.2)":"rgba(156,163,175,0.2)",stroke:t<5?"#22c55e":"#9ca3af",strokeWidth:"1"},t)),e.jsx("text",{x:"325",y:"70",fill:"currentColor",children:"H"}),e.jsx("text",{x:"375",y:"70",fill:"currentColor",children:"e"}),e.jsx("text",{x:"425",y:"70",fill:"currentColor",children:"l"}),e.jsx("text",{x:"475",y:"70",fill:"currentColor",children:"l"}),e.jsx("text",{x:"525",y:"70",fill:"currentColor",children:"o"}),e.jsx("text",{x:"625",y:"70",fill:"gray",children:"\\0"}),e.jsx("text",{x:"575",y:"85",fill:"gray",children:"unused"}),e.jsx("line",{x1:"250",y1:"80",x2:"300",y2:"80",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow10)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow10",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#3b82f6"})})}),e.jsx("text",{x:"50",y:"170",fill:"currentColor",className:"text-sm",children:"Appending '!' → capacity doubled if needed"}),e.jsx("rect",{x:"300",y:"180",width:"400",height:"50",fill:"none",stroke:"#a855f7",strokeWidth:"2",rx:"4"}),e.jsx("rect",{x:"310",y:"190",width:"40",height:"30",fill:"rgba(168,85,247,0.2)",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"325",y:"210",fill:"currentColor",children:"!"})]})})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[5]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(a,{title:"Example 1: Basic dynamic string with append",initialCode:c}),e.jsx(a,{title:"Example 2: String concatenation",initialCode:d}),e.jsx(a,{title:"Example 3: Safe input reading",initialCode:o})]})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[6]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-4 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to allocate space for null terminator:"})," Leads to buffer overflow and corrupted strings."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not updating length after modifications:"})," Causes length and actual content to diverge."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"strlen"})," on an uninitialized string:"]})," May read past allocated memory."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Not checking ",e.jsx("code",{children:"realloc"})," failure:"]})," Can lose the original data."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Memory leaks:"})," Forgetting to ",e.jsx("code",{children:"free"})," the string's data."]})]})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[7]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ Always initialize strings with a small capacity to avoid frequent reallocations for tiny strings."}),e.jsx("li",{children:"✔️ Use a growth factor (e.g., 2) to achieve amortized O(1) append."}),e.jsx("li",{children:"✔️ After every modification, ensure the string is null‑terminated."}),e.jsxs("li",{children:["✔️ Provide helper functions: ",e.jsx("code",{children:"str_append_char"}),", ",e.jsx("code",{children:"str_append_cstr"}),", ",e.jsx("code",{children:"str_clear"}),", ",e.jsx("code",{children:"str_free"}),"."]}),e.jsxs("li",{children:["✔️ For performance‑critical code, consider using a ",e.jsx("code",{children:"str_reserve"})," function to pre‑allocate capacity."]})]})})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[8]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"☐ I can explain the need for dynamic strings vs fixed buffers."}),e.jsx("li",{children:"☐ I understand the structure: data, length, capacity."}),e.jsx("li",{children:"☐ I can implement a function to append a character to a dynamic string."}),e.jsx("li",{children:"☐ I can implement safe input reading using a dynamic string."}),e.jsx("li",{children:"☐ I always free dynamic strings when done."})]})})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[9]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"💡 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl",children:[e.jsx("p",{className:"italic",children:"Observe carefully..."}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsxs("li",{children:["What happens if you forget to keep the null terminator when growing? How would that affect ",e.jsx("code",{children:"strlen"}),"?"]}),e.jsx("li",{children:"Try to implement a function that appends a C string to your dynamic string. What checks are needed?"}),e.jsx("li",{children:"How would you implement a function to remove the last character (pop)?"})]})]})]}),e.jsxs("section",{className:n(),style:{animationDelay:r[10]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Professional Tips & Tricks"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🎯 Debugging mindset:"})," Print the string's length and capacity after operations to verify correctness."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📦 Performance:"})," For building large strings, pre‑allocate capacity based on expected total size to avoid many reallocations."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🧹 Reusability:"})," Implement your dynamic string in a separate module with a clean API, like ",e.jsx("code",{children:"string.h"})," but safer."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📏 Memory safety:"})," In C, use ",e.jsx("code",{children:"strlcpy"})," or ",e.jsx("code",{children:"strlcat"})," if available; for dynamic strings, always copy with bounds checking."]})]})]}),e.jsx(l,{note:"Dynamic strings are your best friend when handling user input. They eliminate buffer overflow vulnerabilities and make your code robust. The classic mistake is to forget the null terminator — always keep one extra byte. In exams, expect to implement a dynamic string and explain why it's safer than fixed arrays."})]})]})};export{_ as default};
