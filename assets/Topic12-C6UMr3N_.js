import{j as r}from"./index-BFnLuail.js";import{J as e}from"./JavaScriptEditableCodeBlock-DzEp1DBR.js";const i=`// ===============================================\r
// Examples 1–5: Basic reduce operations\r
// ===============================================\r
\r
const numbers = [10, 20, 30, 40, 50];\r
\r
const students = [\r
  { name: "Swadeep", marks: 85 },\r
  { name: "Tuhina", marks: 92 },\r
  { name: "Abhronila", marks: 78 },\r
];\r
\r
\r
// ======================================================\r
// 1. Sum of numbers\r
// ======================================================\r
\r
// Goal: Add all numbers together\r
\r
const sum = numbers.reduce(\r
  (acc, n) => {\r
    // acc = accumulator (running total)\r
    // n = current number\r
\r
    // Add current number to accumulator\r
    return acc + n;\r
  },\r
  0 // Initial value → start from 0\r
);\r
\r
console.log("1. Sum:", sum);\r
// Final result: 150\r
\r
\r
\r
// ======================================================\r
// 2. Average\r
// ======================================================\r
\r
// Goal: Calculate average using reduce\r
// Formula: total / length\r
\r
const avg = numbers.reduce(\r
  (acc, n, index, arr) => {\r
    // acc = running result\r
    // n = current number\r
    // arr = original array\r
\r
    // Divide each number by total length\r
    // Then keep adding\r
    return acc + n / arr.length;\r
  },\r
  0 // Start from 0\r
);\r
\r
console.log("2. Average:", avg);\r
// Final result: 30\r
\r
// NOTE:\r
// Another common method:\r
// const avg = numbers.reduce((a, n) => a + n, 0) / numbers.length;\r
\r
\r
\r
// ======================================================\r
// 3. Product\r
// ======================================================\r
\r
// Goal: Multiply all numbers together\r
\r
const product = numbers.reduce(\r
  (acc, n) => {\r
    // Multiply accumulator with current number\r
    return acc * n;\r
  },\r
  1 // IMPORTANT: Start from 1 (not 0!)\r
);\r
\r
console.log("3. Product:", product);\r
// Final result: 12000000\r
\r
\r
\r
// ======================================================\r
// 4. Concatenate strings\r
// ======================================================\r
\r
// Goal: Join words into a sentence\r
\r
const words = ["Hello", " ", "World", "!"];\r
\r
const sentence = words.reduce(\r
  (acc, w) => {\r
    // acc = accumulated string\r
    // w = current word\r
\r
    return acc + w;\r
  },\r
  "" // Start with empty string\r
);\r
\r
console.log("4. Concatenated:", sentence);\r
// Output: "Hello World!"\r
\r
\r
\r
// ======================================================\r
// 5. Find maximum\r
// ======================================================\r
\r
// Goal: Find largest number\r
\r
const max = numbers.reduce(\r
  (acc, n) => {\r
    // Compare current number with accumulator\r
    return n > acc ? n : acc;\r
  },\r
  -Infinity // Start with smallest possible number\r
);\r
\r
console.log("5. Maximum:", max);\r
// Output: 50\r
\r
// Why -Infinity?\r
// So first comparison always replaces it.\r
`,c=`// ===============================================\r
// Examples 6–10: Statistical and grouping operations\r
// ===============================================\r
\r
const numbers = [15, 22, 15, 30, 22, 45, 30, 30];\r
\r
const students = [\r
  { name: "Swadeep", marks: 85, city: "Barrackpore CNAT" },\r
  { name: "Tuhina", marks: 92, city: "Naihati CNAT" },\r
  { name: "Abhronila", marks: 78, city: "Barrackpore CNAT" },\r
  { name: "Debangshu", marks: 88, city: "Naihati CNAT" },\r
];\r
\r
\r
// ======================================================\r
// 6. Find minimum\r
// ======================================================\r
\r
// Goal: Find smallest number in array\r
\r
const min = numbers.reduce(\r
  (acc, n) => {\r
    // acc = current minimum\r
    // n = current number\r
\r
    return n < acc ? n : acc;\r
  },\r
  Infinity // Start with largest possible number\r
);\r
\r
console.log("6. Minimum:", min);\r
// Output: 15\r
\r
// Why Infinity?\r
// So first number will always replace it.\r
\r
\r
\r
// ======================================================\r
// 7. Count occurrences of each number (Frequency Map)\r
// ======================================================\r
\r
// Goal: Count how many times each number appears\r
\r
const occurrences = numbers.reduce((acc, n) => {\r
  // If acc[n] exists, increment it\r
  // Otherwise initialize with 0 and then add 1\r
  acc[n] = (acc[n] || 0) + 1;\r
\r
  return acc;\r
}, {}); // Start with empty object\r
\r
console.log("7. Occurrences:", occurrences);\r
// Example Output:\r
// { 15: 2, 22: 2, 30: 3, 45: 1 }\r
\r
\r
\r
// ======================================================\r
// 8. Group students by city\r
// ======================================================\r
\r
// Goal: Create object where keys = city\r
// and values = array of student names\r
\r
const groupedByCity = students.reduce((acc, s) => {\r
  const city = s.city;\r
\r
  // If city does not exist in accumulator,\r
  // create an empty array first\r
  if (!acc[city]) {\r
    acc[city] = [];\r
  }\r
\r
  // Push student name into correct city group\r
  acc[city].push(s.name);\r
\r
  return acc;\r
}, {}); // Start with empty object\r
\r
console.log("8. Grouped by city:", groupedByCity);\r
\r
// Example Output:\r
// {\r
//   "Barrackpore CNAT": ["Swadeep", "Abhronila"],\r
//   "Naihati CNAT": ["Tuhina", "Debangshu"]\r
// }\r
\r
\r
\r
// ======================================================\r
// 9. Flatten array of arrays\r
// ======================================================\r
\r
// Goal: Convert [[1,2],[3,4],[5]]\r
// into [1,2,3,4,5]\r
\r
const arrays = [[1, 2], [3, 4], [5]];\r
\r
const flattened = arrays.reduce((acc, arr) => {\r
  // concat merges arrays\r
  return acc.concat(arr);\r
}, []); // Start with empty array\r
\r
console.log("9. Flattened:", flattened);\r
// Output: [1, 2, 3, 4, 5]\r
\r
// Modern shortcut:\r
// const flattened = arrays.flat();\r
\r
\r
\r
// ======================================================\r
// 10. Convert array to object (key-value pairs)\r
// ======================================================\r
\r
// Goal: Convert:\r
// [["name","Ritaja"],["city","Barrackpore"],["marks",95]]\r
// into:\r
// { name:"Ritaja", city:"Barrackpore", marks:95 }\r
\r
const pairs = [\r
  ["name", "Ritaja"],\r
  ["city", "Barrackpore CNAT"],\r
  ["marks", 95],\r
];\r
\r
const obj = pairs.reduce((acc, [key, value]) => {\r
  // Destructuring: [key, value]\r
  // Assign property to object\r
  acc[key] = value;\r
\r
  return acc;\r
}, {}); // Start with empty object\r
\r
console.log("10. Object from pairs:", obj);\r
\r
// Output:\r
// { name: "Ritaja", city: "Barrackpore CNAT", marks: 95 }\r
`,o=`// ===============================================\r
// Examples 11–15: Building and transforming structures\r
// ===============================================\r
\r
const numbers = [1, 2, 2, 3, 4, 4, 5];\r
\r
const students = [\r
  { name: "Swadeep", marks: 85 },\r
  { name: "Tuhina", marks: 92 },\r
  { name: "Abhronila", marks: 78 },\r
  { name: "Debangshu", marks: 88 },\r
];\r
\r
\r
// ======================================================\r
// 11. Remove duplicates (Dedupe)\r
// ======================================================\r
\r
// Goal: Keep only unique numbers\r
\r
const unique = numbers.reduce((acc, n) => {\r
  // If number is not already in accumulator\r
  if (!acc.includes(n)) {\r
    acc.push(n); // Add it\r
  }\r
\r
  return acc;\r
}, []); // Start with empty array\r
\r
console.log("11. Unique numbers:", unique);\r
// Output: [1, 2, 3, 4, 5]\r
\r
// NOTE:\r
// This works, but Set is more efficient:\r
// [...new Set(numbers)]\r
\r
\r
\r
// ======================================================\r
// 12. Partition into two arrays (even / odd)\r
// ======================================================\r
\r
// Goal:\r
// {\r
//   even: [...],\r
//   odd: [...]\r
// }\r
\r
const partitioned = numbers.reduce(\r
  (acc, n) => {\r
    // If even → push into acc.even\r
    // If odd → push into acc.odd\r
    acc[n % 2 === 0 ? "even" : "odd"].push(n);\r
\r
    return acc;\r
  },\r
  { even: [], odd: [] } // Initial object structure\r
);\r
\r
console.log("12. Partitioned:", partitioned);\r
// Example Output:\r
// { even: [2,2,4,4], odd: [1,3,5] }\r
\r
\r
\r
// ======================================================\r
// 13. Running total (Cumulative Sum)\r
// ======================================================\r
\r
// Goal:\r
// [1,2,2,3,4,4,5]\r
// → [1,3,5,8,12,16,21]\r
\r
const runningTotal = numbers.reduce((acc, n, i) => {\r
  // Previous total = last element in accumulator\r
  const previousTotal = acc[i - 1] || 0;\r
\r
  // Push new cumulative value\r
  acc.push(previousTotal + n);\r
\r
  return acc;\r
}, []);\r
\r
console.log("13. Running total:", runningTotal);\r
\r
\r
\r
// ======================================================\r
// 14. Frequency map of marks\r
// ======================================================\r
\r
// Goal:\r
// Count how many times each mark appears\r
\r
const marksFrequency = students.reduce((acc, s) => {\r
  // s.marks is key\r
  acc[s.marks] = (acc[s.marks] || 0) + 1;\r
\r
  return acc;\r
}, {}); // Start with empty object\r
\r
console.log("14. Marks frequency:", marksFrequency);\r
\r
// Example Output:\r
// { 85:1, 92:1, 78:1, 88:1 }\r
\r
\r
\r
// ======================================================\r
// 15. Statistics (Mean, Median, Mode)\r
// ======================================================\r
\r
// Step 1: Sort numbers for median\r
const sorted = [...numbers].sort((a, b) => a - b);\r
\r
// ----------------------------------\r
// Mean (Average)\r
// ----------------------------------\r
const mean =\r
  numbers.reduce((acc, n) => acc + n, 0) / numbers.length;\r
\r
// ----------------------------------\r
// Median\r
// ----------------------------------\r
const median =\r
  sorted.length % 2 === 0\r
    ? (sorted[sorted.length / 2 - 1] +\r
        sorted[sorted.length / 2]) /\r
      2\r
    : sorted[Math.floor(sorted.length / 2)];\r
\r
// ----------------------------------\r
// Mode (Most frequent number)\r
// ----------------------------------\r
\r
// First build frequency object\r
const frequency = numbers.reduce((acc, n) => {\r
  acc[n] = (acc[n] || 0) + 1;\r
  return acc;\r
}, {});\r
\r
// Then find highest frequency\r
const mode = Object.entries(frequency)\r
  .reduce((a, b) => (a[1] > b[1] ? a : b))[0];\r
\r
console.log("15. Mean:", mean);\r
console.log("    Median:", median);\r
console.log("    Mode:", mode);\r
`,l=`// ===============================================\r
// Examples 16–20: Advanced reduce patterns\r
// ===============================================\r
\r
// Sample dataset\r
const students = [\r
  { name: "Swadeep", marks: 85, city: "Barrackpore CNAT" },\r
  { name: "Tuhina", marks: 92, city: "Naihati CNAT" },\r
  { name: "Abhronila", marks: 78, city: "Barrackpore CNAT" },\r
  { name: "Ritaja", marks: 95, city: "Barrackpore CNAT" },\r
];\r
\r
\r
// ======================================================\r
// 16. Merge objects (combine multiple objects into one)\r
// ======================================================\r
\r
// Step 1: Define multiple separate objects\r
const obj1 = { a: 1, b: 2 };\r
const obj2 = { b: 3, c: 4 };\r
const obj3 = { d: 5 };\r
\r
// Step 2: Put them inside an array\r
// We want to combine all objects into one single object\r
const merged = [obj1, obj2, obj3].reduce(\r
  (acc, obj) => {\r
    // acc = accumulator (starts as {})\r
    // obj = current object from the array\r
\r
    // Spread operator merges properties\r
    // If keys overlap (like 'b'), later values override earlier ones\r
    return { ...acc, ...obj };\r
  },\r
  {} // Step 3: Initial value → empty object\r
);\r
\r
console.log("16. Merged objects:", merged);\r
// Output: { a:1, b:3, c:4, d:5 }\r
// Note: b becomes 3 because obj2 overwrites obj1\r
\r
\r
\r
// ======================================================\r
// 17. Build a lookup table (object keyed by name)\r
// ======================================================\r
\r
// Goal: Convert array of students into an object like:\r
// {\r
//   Swadeep: { ... },\r
//   Tuhina: { ... },\r
//   ...\r
// }\r
\r
const lookup = students.reduce((acc, s) => {\r
  // acc starts as {}\r
  // s = current student object\r
\r
  // Use student's name as key\r
  acc[s.name] = s;\r
\r
  // Always return accumulator\r
  return acc;\r
}, {});\r
\r
console.log("17. Lookup by name:", lookup);\r
\r
// Access becomes very fast:\r
console.log("   Ritaja's marks:", lookup["Ritaja"]?.marks);\r
// Instead of searching the whole array,\r
// we directly access by key (O(1) lookup)\r
\r
\r
\r
// ======================================================\r
// 18. Validate all items (like every)\r
// Check if ALL students have marks > 80\r
// ======================================================\r
\r
const allAbove80 = students.reduce(\r
  (acc, s) => {\r
    // acc starts as true\r
    // For every student:\r
    // If any mark <= 80, result becomes false\r
    return acc && s.marks > 80;\r
  },\r
  true // Initial assumption: all are above 80\r
);\r
\r
console.log("18. All marks > 80?", allAbove80);\r
// Stops logically when one condition fails\r
\r
\r
\r
// ======================================================\r
// 19. Check any item (like some)\r
// Check if ANY student is from Naihati CNAT\r
// ======================================================\r
\r
const anyFromNaihati = students.reduce(\r
  (acc, s) => {\r
    // acc starts as false\r
    // If any student matches condition,\r
    // result becomes true\r
    return acc || s.city === "Naihati CNAT";\r
  },\r
  false // Initial assumption: none found\r
);\r
\r
console.log("19. Any from Naihati CNAT?", anyFromNaihati);\r
\r
\r
\r
// ======================================================\r
// 20. Chaining inside reduce (filter + map in one pass)\r
// Get names of students with marks > 80\r
// ======================================================\r
\r
const topStudents = students.reduce((acc, s) => {\r
  // acc starts as empty array []\r
\r
  // Step 1: Filter condition\r
  if (s.marks > 80) {\r
    // Step 2: Push only the name (mapping part)\r
    acc.push(s.name);\r
  }\r
\r
  // Step 3: Return accumulator\r
  return acc;\r
}, []);\r
\r
console.log("20. Top students (marks > 80):", topStudents);\r
\r
// This replaces:\r
// students.filter(...).map(...)\r
// But does everything in ONE iteration.\r
`,d=new Date().getFullYear(),u=d-1998,y=()=>r.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 md:p-8 leading-relaxed",children:[r.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-slide-up {
          animation: fadeSlideUp 0.6s ease-out forwards;
        }
      `}),r.jsxs("div",{className:"max-w-4xl mx-auto space-y-8",children:[r.jsxs("section",{className:"fade-slide-up",style:{animationDelay:"0.1s"},children:[r.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"🔁 Topic 12: 20 Different Examples of reduce()"}),r.jsxs("p",{className:"text-lg",children:["The ",r.jsx("code",{children:".reduce()"})," method is incredibly versatile. This topic presents 20 practical examples covering common use cases — from simple sums to advanced data transformations."]})]}),r.jsxs("section",{className:"fade-slide-up bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md",style:{animationDelay:"0.2s"},children:[r.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[r.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:"📐"}),"Quick Recap: reduce() Signature"]}),r.jsx("pre",{className:"bg-white dark:bg-gray-950 p-3 rounded-md overflow-x-auto text-sm",children:`array.reduce((accumulator, currentValue, index, array) => {
  // return updated accumulator
}, initialValue);`}),r.jsxs("p",{className:"mt-3",children:[r.jsx("strong",{children:"Return type:"})," Any — number, string, object, array."]})]}),r.jsxs("section",{className:"fade-slide-up bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm",style:{animationDelay:"0.3s"},children:[r.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[r.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:"📋"}),"What You'll Learn – 20 Examples"]}),r.jsxs("div",{className:"grid sm:grid-cols-2 gap-2 text-sm",children:[r.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[r.jsx("li",{children:"1. Sum of numbers"}),r.jsx("li",{children:"2. Average"}),r.jsx("li",{children:"3. Product"}),r.jsx("li",{children:"4. Concatenate strings"}),r.jsx("li",{children:"5. Find maximum"}),r.jsx("li",{children:"6. Find minimum"}),r.jsx("li",{children:"7. Count occurrences"}),r.jsx("li",{children:"8. Group by property"}),r.jsx("li",{children:"9. Flatten array of arrays"}),r.jsx("li",{children:"10. Array → object (key-value)"})]}),r.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[r.jsx("li",{children:"11. Remove duplicates"}),r.jsx("li",{children:"12. Partition into two arrays"}),r.jsx("li",{children:"13. Running total"}),r.jsx("li",{children:"14. Frequency map"}),r.jsx("li",{children:"15. Statistics (mean, median, mode)"}),r.jsx("li",{children:"16. Merge objects"}),r.jsx("li",{children:"17. Lookup table"}),r.jsx("li",{children:"18. Validate all (like every)"}),r.jsx("li",{children:"19. Check any (like some)"}),r.jsx("li",{children:"20. Chaining inside reduce"})]})]})]}),r.jsxs("section",{className:"fade-slide-up space-y-4",style:{animationDelay:"0.4s"},children:[r.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:[r.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:"1️⃣"}),"Basics: Sum, Average, Product, String Concat, Max"]}),r.jsx(e,{title:"Examples 1–5: Basic reduce operations",initialCode:i})]}),r.jsxs("section",{className:"fade-slide-up space-y-4",style:{animationDelay:"0.5s"},children:[r.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:[r.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:"2️⃣"}),"Statistics: Min, Count, Group, Flatten, Key-Value"]}),r.jsx(e,{title:"Examples 6–10: Statistical and grouping operations",initialCode:c})]}),r.jsxs("section",{className:"fade-slide-up space-y-4",style:{animationDelay:"0.6s"},children:[r.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:[r.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:"3️⃣"}),"Data Structures: Dedupe, Partition, Running Total, Frequency, Stats"]}),r.jsx(e,{title:"Examples 11–15: Building and transforming structures",initialCode:o})]}),r.jsxs("section",{className:"fade-slide-up space-y-4",style:{animationDelay:"0.7s"},children:[r.jsxs("h2",{className:"text-2xl font-semibold flex items-center gap-2",children:[r.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:"4️⃣"}),"Advanced: Merge, Lookup, Validation, Chaining"]}),r.jsx(e,{title:"Examples 16–20: Advanced reduce patterns",initialCode:l})]}),r.jsxs("section",{className:"fade-slide-up bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-400",style:{animationDelay:"0.8s"},children:[r.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[r.jsx("span",{className:"text-red-600 dark:text-red-400",children:"⚠️"}),"Common Pitfalls"]}),r.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Initial value mismatch:"})," For sums, start with 0; for products, start with 1; for objects, start with ","{}","."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Mutating accumulator:"})," Directly modifying objects or arrays inside the reducer can cause side effects. Return a new value or copy."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Empty array without initial value:"})," Throws an error. Always provide an initial value if the array might be empty."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Overcomplicating:"})," Sometimes a simple loop is more readable. Use reduce only when it clarifies the intent."]})]})]}),r.jsxs("section",{className:"fade-slide-up bg-green-50 dark:bg-green-900/20 p-6 rounded-xl",style:{animationDelay:"0.9s"},children:[r.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[r.jsx("span",{className:"text-green-600 dark:text-green-400",children:"💡"}),"Best Practices & Tips"]}),r.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Name the accumulator meaningfully"})," –"," ",r.jsx("code",{children:"total"}),", ",r.jsx("code",{children:"grouped"}),", ",r.jsx("code",{children:"stats"}),"."]}),r.jsxs("li",{children:[r.jsxs("strong",{children:["Use spread or ",r.jsx("code",{children:"Object.assign"})]})," to update objects immutably."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Combine with other methods"})," – filter first, then reduce, or use reduce to build a structure and then map."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Add comments"})," for complex reducers – explain what the accumulator holds."]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Practice with console.log(acc)"})," inside the reducer to understand the transformation step by step."]})]})]}),r.jsxs("section",{className:"fade-slide-up bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl",style:{animationDelay:"1.0s"},children:[r.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[r.jsx("span",{className:"text-blue-600 dark:text-blue-400",children:"✅"}),"Mini Checklist"]}),r.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[r.jsx("li",{children:"I can write a sum, product, and average using reduce."}),r.jsx("li",{children:"I can group objects by a property."}),r.jsx("li",{children:"I can flatten an array of arrays."}),r.jsx("li",{children:"I can remove duplicates from an array."}),r.jsx("li",{children:"I can create a frequency map."}),r.jsx("li",{children:"I can build a lookup table (object from array)."})]})]}),r.jsxs("section",{className:"fade-slide-up bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800 transition-all duration-300 hover:shadow-lg",style:{animationDelay:"1.1s"},children:[r.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[r.jsx("span",{className:"text-amber-600 dark:text-amber-400",children:"🧑‍🏫"}),"Teacher's Note — Sukanta Hui"]}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"Sukanta Hui"})," — Programming Language, RDBMs, Operating System, Web Development"]}),r.jsx("p",{children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),r.jsxs("p",{children:["⏳ Teaching since 1998 — ",r.jsxs("strong",{children:[u," years"]})," of experience."]}),r.jsx("p",{className:"mt-3 italic",children:`"Reduce is the chameleon of array methods. Once you master it, you can replace many other methods with a single reduce. But remember: clarity over cleverness. Use these 20 examples as a reference, but always ask yourself: does this reduce make the code easier to understand? If not, a simple loop might be better. Practice each example until you can write them from memory — that's when the pattern clicks."`})]})]}),r.jsxs("section",{className:"fade-slide-up bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl",style:{animationDelay:"1.2s"},children:[r.jsxs("h2",{className:"text-xl font-semibold mb-2 flex items-center gap-2",children:[r.jsx("span",{className:"text-indigo-600 dark:text-indigo-400",children:"💭"}),"Hint — Observe carefully…"]}),r.jsx("p",{children:"In example 17 (lookup table), notice how we convert an array of students into an object keyed by their name. This pattern is extremely useful for fast lookups. Try changing the key to something else (like id) and see how the output changes."})]}),r.jsx("section",{className:"fade-slide-up flex justify-center py-4",style:{animationDelay:"1.3s"},children:r.jsxs("svg",{width:"400",height:"180",viewBox:"0 0 400 180",className:"transition-transform duration-300 hover:scale-105",children:[r.jsx("rect",{width:"400",height:"180",fill:"none"}),r.jsx("text",{x:"20",y:"30",fontSize:"14",fill:"currentColor",fontWeight:"bold",children:"20 reduce() examples →"}),Array.from({length:20},(m,n)=>{const s=Math.floor(n/10),a=30+n%10*30,t=60+s*40;return r.jsxs("g",{children:[r.jsx("rect",{x:a,y:t,width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",rx:"3",children:r.jsx("animate",{attributeName:"stroke",values:"currentColor; #3b82f6; currentColor",dur:"3s",begin:`${n*.1}s`,repeatCount:"indefinite"})}),r.jsx("text",{x:a+5,y:t+15,fontSize:"10",fill:"currentColor",children:n+1})]},n)}),r.jsx("line",{x1:"280",y1:"70",x2:"350",y2:"70",stroke:"currentColor",strokeWidth:"2",markerEnd:"url(#arrowhead)"}),r.jsx("rect",{x:"350",y:"50",width:"40",height:"40",rx:"4",fill:"none",stroke:"#3b82f6",strokeWidth:"3"}),r.jsx("text",{x:"355",y:"78",fontSize:"12",fill:"#3b82f6",children:"🎯"}),r.jsx("defs",{children:r.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:r.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#3b82f6"})})})]})})]})]});export{y as default};
