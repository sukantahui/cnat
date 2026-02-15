import{j as e}from"./index-CG3iA-Ea.js";import{J as s}from"./JavaScriptEditableCodeBlock-BxB64Nzx.js";const i=`// Example 1: Totals – sum, average, product\r
\r
const students = [\r
  { name: "Swadeep", marks: 85, city: "Barrackpore CNAT" },\r
  { name: "Tuhina", marks: 92, city: "Naihati CNAT" },\r
  { name: "Abhronila", marks: 78, city: "Barrackpore CNAT" },\r
  { name: "Debangshu", marks: 88, city: "Naihati CNAT" },\r
  { name: "Ritaja", marks: 95, city: "Barrackpore CNAT" },\r
];\r
\r
// 1. Sum of marks\r
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);\r
console.log("Total marks:", totalMarks);\r
\r
// 2. Average marks\r
const avgMarks = students.reduce((sum, s) => sum + s.marks, 0) / students.length;\r
console.log("Average marks:", avgMarks.toFixed(2));\r
\r
// 3. Product of all marks (just for fun)\r
const productMarks = students.reduce((prod, s) => prod * s.marks, 1);\r
console.log("Product of marks:", productMarks);\r
\r
// 4. Total price of products (another dataset)\r
const products = [\r
  { name: "Laptop", price: 55000 },\r
  { name: "Mouse", price: 600 },\r
  { name: "Keyboard", price: 1200 },\r
];\r
const totalPrice = products.reduce((total, p) => total + p.price, 0);\r
console.log("Total price: ₹", totalPrice);`,c=`// Example 2: Grouping – by city, by category\r
\r
const students = [\r
  { name: "Swadeep", marks: 85, city: "Barrackpore CNAT" },\r
  { name: "Tuhina", marks: 92, city: "Naihati CNAT" },\r
  { name: "Abhronila", marks: 78, city: "Barrackpore CNAT" },\r
  { name: "Debangshu", marks: 88, city: "Naihati CNAT" },\r
  { name: "Ritaja", marks: 95, city: "Barrackpore CNAT" },\r
];\r
\r
// 1. Group students by city\r
const groupedByCity = students.reduce((acc, student) => {\r
  const city = student.city;\r
  if (!acc[city]) {\r
    acc[city] = [];\r
  }\r
  acc[city].push(student.name);\r
  return acc;\r
}, {});\r
\r
console.log("Students by city:", groupedByCity);\r
\r
// 2. Group products by category (example dataset)\r
const products = [\r
  { name: "Laptop", category: "Electronics", price: 55000 },\r
  { name: "Shirt", category: "Clothing", price: 1200 },\r
  { name: "Mouse", category: "Electronics", price: 600 },\r
  { name: "Jeans", category: "Clothing", price: 2500 },\r
];\r
\r
const groupedByCategory = products.reduce((acc, product) => {\r
  const cat = product.category;\r
  if (!acc[cat]) {\r
    acc[cat] = [];\r
  }\r
  acc[cat].push({ name: product.name, price: product.price });\r
  return acc;\r
}, {});\r
\r
console.log("Products by category:", groupedByCategory);`,o=`// Example 3: Analytics – count, min, max, frequency\r
\r
const students = [\r
  { name: "Swadeep", marks: 85, city: "Barrackpore CNAT" },\r
  { name: "Tuhina", marks: 92, city: "Naihati CNAT" },\r
  { name: "Abhronila", marks: 78, city: "Barrackpore CNAT" },\r
  { name: "Debangshu", marks: 88, city: "Naihati CNAT" },\r
  { name: "Ritaja", marks: 95, city: "Barrackpore CNAT" },\r
];\r
\r
// 1. Count students per city\r
const cityCount = students.reduce((acc, s) => {\r
  acc[s.city] = (acc[s.city] || 0) + 1;\r
  return acc;\r
}, {});\r
console.log("City counts:", cityCount);\r
\r
// 2. Find minimum marks\r
const minMarks = students.reduce(\r
  (min, s) => (s.marks < min ? s.marks : min),\r
  students[0].marks\r
);\r
console.log("Minimum marks:", minMarks);\r
\r
// 3. Find maximum marks\r
const maxMarks = students.reduce(\r
  (max, s) => (s.marks > max ? s.marks : max),\r
  students[0].marks\r
);\r
console.log("Maximum marks:", maxMarks);\r
\r
// 4. Frequency of marks (how many students got each mark)\r
const marksFrequency = students.reduce((acc, s) => {\r
  acc[s.marks] = (acc[s.marks] || 0) + 1;\r
  return acc;\r
}, {});\r
console.log("Marks frequency:", marksFrequency);`,l=new Date().getFullYear(),d=l-1998,x=()=>{const a=[{name:"Swadeep",marks:85,city:"Barrackpore CNAT"},{name:"Tuhina",marks:92,city:"Naihati CNAT"},{name:"Abhronila",marks:78,city:"Barrackpore CNAT"},{name:"Debangshu",marks:88,city:"Naihati CNAT"},{name:"Ritaja",marks:95,city:"Barrackpore CNAT"}],t=a.reduce((r,n)=>r+n.marks,0);return e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 md:p-8 leading-relaxed",children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-slide-up {
          animation: fadeSlideUp 0.6s ease-out forwards;
        }
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-8",children:[e.jsxs("section",{className:"fade-slide-up",style:{animationDelay:"0.1s"},children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"📊 Topic 11: Reduce Examples"}),e.jsxs("p",{className:"text-lg",children:["The ",e.jsx("code",{children:".reduce()"})," method is the Swiss Army knife of array transformations. It lets you boil down an array to a single value — a number, an object, another array, or anything you need."]})]}),e.jsxs("section",{className:"fade-slide-up bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md",style:{animationDelay:"0.2s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:"📐"}),"Signature & Purpose"]}),e.jsx("pre",{className:"bg-white dark:bg-gray-950 p-3 rounded-md overflow-x-auto text-sm",children:`array.reduce((accumulator, currentValue, index, array) => {
  // return new accumulator
}, initialValue);`}),e.jsxs("p",{className:"mt-3",children:[e.jsx("strong",{children:"Return type:"})," Whatever you return from the reducer (number, string, object, array).",e.jsx("br",{}),e.jsx("strong",{children:"Purpose:"})," Transform an array into any single aggregated result — sum, average, grouped object, flattened array, etc.",e.jsx("br",{}),e.jsx("strong",{children:"When to use:"})," Whenever you need to derive a single value from many items."]})]}),e.jsxs("section",{className:"fade-slide-up bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm",style:{animationDelay:"0.3s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:"🧮"}),"Quick Example: Total Marks"]}),e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-4 rounded-lg",children:[e.jsx("p",{className:"font-medium",children:"Students:"}),e.jsx("ul",{className:"text-sm list-disc list-inside",children:a.map(r=>e.jsxs("li",{children:[r.name," – ",r.marks]},r.name))})]}),e.jsx("div",{className:"text-2xl font-bold text-indigo-600 dark:text-indigo-400",children:"➡️"}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 p-4 rounded-lg",children:[e.jsx("p",{className:"font-medium",children:"Total Marks:"}),e.jsx("p",{className:"text-3xl font-bold text-green-600 dark:text-green-400",children:t}),e.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["(using ",e.jsx("code",{children:".reduce()"}),")"]})]})]})]}),e.jsxs("section",{className:"fade-slide-up space-y-6",style:{animationDelay:"0.4s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:"📝"}),"Deep Dive with Editable Examples"]}),e.jsx(s,{title:"Example 1: Totals – sum, average, product",initialCode:i}),e.jsx(s,{title:"Example 2: Grouping – by city, by category",initialCode:c}),e.jsx(s,{title:"Example 3: Analytics – count, min, max, frequency",initialCode:o})]}),e.jsxs("section",{className:"fade-slide-up bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-400",style:{animationDelay:"0.5s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-red-600 dark:text-red-400",children:"⚠️"}),"Common Pitfalls"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the initial value:"})," If you omit it, reduce uses the first element as accumulator and starts from the second. This can cause errors (e.g., when summing objects)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mutating the accumulator accidentally:"})," Always return a new accumulator or copy if you need immutability."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not returning anything:"})," The reducer must return the updated accumulator; otherwise you get ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using reduce when simpler methods exist:"})," For simple sums, ",e.jsx("code",{children:"forEach"})," or ",e.jsx("code",{children:"for...of"})," might be more readable."]})]})]}),e.jsxs("section",{className:"fade-slide-up bg-green-50 dark:bg-green-900/20 p-6 rounded-xl",style:{animationDelay:"0.6s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-green-600 dark:text-green-400",children:"💡"}),"Best Practices & Tips"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always provide an initial value"})," – it makes the code predictable and handles empty arrays gracefully."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use descriptive accumulator names"})," like"," ",e.jsx("code",{children:"total"}),", ",e.jsx("code",{children:"grouped"}),", ",e.jsx("code",{children:"stats"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For complex accumulators (objects/arrays),"})," return a new copy to avoid side effects (e.g.,"," ",e.jsx("code",{children:"{...acc, [key]: value}"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Combine with other methods:"})," Often you filter or map before reducing for cleaner logic."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"reduceRight"})]})," when you need to process from right to left (e.g., nested structure evaluation)."]})]})]}),e.jsxs("section",{className:"fade-slide-up bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl",style:{animationDelay:"0.7s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-blue-600 dark:text-blue-400",children:"✅"}),"Mini Checklist"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"I can calculate a sum, average, or product using reduce."}),e.jsx("li",{children:"I can group objects by a property into an object."}),e.jsx("li",{children:"I can count occurrences of values."}),e.jsx("li",{children:"I can find min/max using reduce."}),e.jsx("li",{children:"I understand the role of the initial value."})]})]}),e.jsxs("section",{className:"fade-slide-up bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800 transition-all duration-300 hover:shadow-lg",style:{animationDelay:"0.8s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-600 dark:text-amber-400",children:"🧑‍🏫"}),"Teacher's Note — Sukanta Hui"]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sukanta Hui"})," — Programming Language, RDBMs, Operating System, Web Development"]}),e.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{children:["⏳ Teaching since 1998 — ",e.jsxs("strong",{children:[d," years"]})," of experience."]}),e.jsxs("p",{className:"mt-3 italic",children:['"Reduce is the most powerful array method, but also the most intimidating. Start with simple sums, then move to grouping. I tell my students: ',e.jsx("strong",{children:"think of reduce as a conveyor belt"})," ","where each item adds something to a growing package. Use",e.jsx("code",{children:"console.log(acc)"}),` inside the reducer to see the progress — it's the best way to debug."`]})]})]}),e.jsxs("section",{className:"fade-slide-up bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl",style:{animationDelay:"0.9s"},children:[e.jsxs("h2",{className:"text-xl font-semibold mb-2 flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:"💭"}),"Hint — Think about…"]}),e.jsx("p",{children:"How would you use reduce to transform an array of students into an object where keys are cities and values are arrays of student names? Try to sketch the reducer function before looking at Example 2."})]}),e.jsx("section",{className:"fade-slide-up flex justify-center py-4",style:{animationDelay:"1.0s"},children:e.jsxs("svg",{width:"400",height:"160",viewBox:"0 0 400 160",className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("line",{x1:"20",y1:"100",x2:"380",y2:"100",stroke:"currentColor",strokeWidth:"4",strokeDasharray:"6 6"}),e.jsx("circle",{cx:"60",cy:"80",r:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("animate",{attributeName:"r",values:"12;15;12",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"55",y:"85",fontSize:"10",fill:"currentColor",children:"S"}),e.jsx("circle",{cx:"120",cy:"80",r:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("animate",{attributeName:"r",values:"12;15;12",dur:"2s",begin:"0.3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"115",y:"85",fontSize:"10",fill:"currentColor",children:"T"}),e.jsx("circle",{cx:"180",cy:"80",r:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("animate",{attributeName:"r",values:"12;15;12",dur:"2s",begin:"0.6s",repeatCount:"indefinite"})}),e.jsx("text",{x:"175",y:"85",fontSize:"10",fill:"currentColor",children:"A"}),e.jsx("rect",{x:"280",y:"40",width:"100",height:"60",rx:"8",fill:"none",stroke:"#3b82f6",strokeWidth:"3"}),e.jsx("text",{x:"300",y:"70",fontSize:"12",fill:"#3b82f6",fontWeight:"bold",children:"accumulator"}),e.jsx("text",{x:"310",y:"90",fontSize:"10",fill:"currentColor",children:"(growing)"}),e.jsx("line",{x1:"200",y1:"80",x2:"270",y2:"70",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#3b82f6"})})}),e.jsx("text",{x:"20",y:"140",fontSize:"12",fill:"currentColor",children:"reduce( (acc, item) => newAcc, initial )"})]})})]})]})};export{x as default};
