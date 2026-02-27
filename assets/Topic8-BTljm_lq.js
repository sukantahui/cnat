import{r as t,j as e}from"./index-meFSU1Lv.js";import{c as s}from"./clsx-B-dksMZM.js";import{J as r}from"./JavaScriptEditableCodeBlock-CciyG39L.js";const i=`// Simulate an asynchronous operation, like fetching data\r
const fetchData = new Promise((resolve, reject) => {\r
  setTimeout(() => {\r
    const success = true; // change to false to test rejection\r
    if (success) {\r
      resolve("Data received from server");\r
    } else {\r
      reject("Network error");\r
    }\r
  }, 1000);\r
});\r
\r
console.log("Start: requesting data...");\r
\r
fetchData\r
  .then((result) => {\r
    console.log("Success:", result);\r
  })\r
  .catch((error) => {\r
    console.error("Error:", error);\r
  });\r
\r
console.log("End: request initiated (non-blocking)");`,o=`// Step 1: Validate user\r
function validateUser(userId) {\r
  return new Promise((resolve) => {\r
    setTimeout(() => {\r
      console.log("1. User validated");\r
      resolve({ id: userId, name: "Swadeep" });\r
    }, 500);\r
  });\r
}\r
\r
// Step 2: Fetch user's posts\r
function fetchPosts(user) {\r
  return new Promise((resolve) => {\r
    setTimeout(() => {\r
      console.log("2. Posts fetched for", user.name);\r
      resolve(["Post1", "Post2"]);\r
    }, 500);\r
  });\r
}\r
\r
// Step 3: Count posts\r
function countPosts(posts) {\r
  return new Promise((resolve) => {\r
    setTimeout(() => {\r
      console.log("3. Counting posts...");\r
      resolve(posts.length);\r
    }, 500);\r
  });\r
}\r
\r
// Chain them\r
validateUser(101)\r
  .then((user) => fetchPosts(user))\r
  .then((posts) => countPosts(posts))\r
  .then((count) => {\r
    console.log(\`Total posts: \${count}\`);\r
  })\r
  .catch((err) => console.error("Error:", err));`,l=`// Reusing the same promise‑returning functions from promise_chain.js\r
// (Assume validateUser, fetchPosts, countPosts are defined as above)\r
\r
async function displayPostCount(userId) {\r
  try {\r
    const user = await validateUser(userId);\r
    const posts = await fetchPosts(user);\r
    const count = await countPosts(posts);\r
    console.log(\`Total posts: \${count}\`);\r
  } catch (error) {\r
    console.error("Something went wrong:", error);\r
  }\r
}\r
\r
console.log("Calling async function...");\r
displayPostCount(101);\r
console.log("Async function is running in background.");`,c=`// Function that may reject\r
function riskyOperation(shouldFail) {\r
  return new Promise((resolve, reject) => {\r
    setTimeout(() => {\r
      if (shouldFail) {\r
        reject("Operation failed: something went wrong");\r
      } else {\r
        resolve("Operation succeeded!");\r
      }\r
    }, 500);\r
  });\r
}\r
\r
// Handling with .catch()\r
riskyOperation(true)\r
  .then((result) => console.log("Result:", result))\r
  .catch((error) => console.error("Caught with .catch():", error));\r
\r
// Handling with async/await and try/catch\r
async function runRisky() {\r
  try {\r
    const result = await riskyOperation(true);\r
    console.log("Async result:", result);\r
  } catch (error) {\r
    console.error("Caught with try/catch:", error);\r
  }\r
}\r
\r
runRisky();`,d=`
  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`,u=()=>{const[n,a]=t.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 md:p-8 leading-relaxed",children:[e.jsx("style",{children:d}),e.jsxs("header",{className:s("max-w-4xl mx-auto mb-12 text-center","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]"),children:[e.jsx("h1",{className:"text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"Promises & Async/Await: The Evolution"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:"From callback chaos to clean asynchronous code"})]}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:s("bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","transition-all duration-300 hover:shadow-lg"),style:{animationDelay:"0.1s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"w-1 h-6 bg-blue-500 rounded-full"}),"The Evolution of Async JavaScript"]}),e.jsx("div",{className:"flex justify-center items-center py-4",children:e.jsxs("svg",{width:"500",height:"120",viewBox:"0 0 500 120",className:"max-w-full",children:[e.jsxs("g",{className:"group",children:[e.jsx("circle",{cx:"80",cy:"60",r:"25",fill:"#f56565",className:"transition-all duration-300 group-hover:r-30 group-hover:filter group-hover:drop-shadow-lg"}),e.jsx("text",{x:"80",y:"65",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"Callback"}),e.jsx("text",{x:"80",y:"100",textAnchor:"middle",fill:"currentColor",fontSize:"12",className:"font-medium",children:"(2009)"}),e.jsx("line",{x1:"105",y1:"60",x2:"195",y2:"60",stroke:"#94a3b8",strokeWidth:"2",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",from:"8",to:"0",dur:"1s",repeatCount:"indefinite"})})]}),e.jsxs("g",{className:"group",children:[e.jsx("circle",{cx:"200",cy:"60",r:"25",fill:"#48bb78",className:"transition-all duration-300 group-hover:r-30 group-hover:filter group-hover:drop-shadow-lg"}),e.jsx("text",{x:"200",y:"65",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"Promise"}),e.jsx("text",{x:"200",y:"100",textAnchor:"middle",fill:"currentColor",fontSize:"12",className:"font-medium",children:"(ES6)"}),e.jsx("line",{x1:"225",y1:"60",x2:"315",y2:"60",stroke:"#94a3b8",strokeWidth:"2",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",from:"8",to:"0",dur:"1s",repeatCount:"indefinite"})})]}),e.jsxs("g",{className:"group",children:[e.jsx("circle",{cx:"340",cy:"60",r:"25",fill:"#4299e1",className:"transition-all duration-300 group-hover:r-30 group-hover:filter group-hover:drop-shadow-lg"}),e.jsx("text",{x:"340",y:"65",textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",children:"Async/Await"}),e.jsx("text",{x:"340",y:"100",textAnchor:"middle",fill:"currentColor",fontSize:"12",className:"font-medium",children:"(ES2017)"})]})]})}),e.jsxs("p",{className:"text-center text-gray-600 dark:text-gray-400 mt-2",children:[e.jsx("span",{className:"font-semibold",children:"Callback Hell"})," → ",e.jsx("span",{className:"font-semibold",children:"Promises"})," →"," ",e.jsx("span",{className:"font-semibold",children:"Async/Await"})]})]}),e.jsxs("section",{className:s("bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","transition-all duration-300 hover:shadow-lg"),style:{animationDelay:"0.2s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"w-1 h-6 bg-green-500 rounded-full"}),"What is a Promise?"]}),e.jsxs("p",{className:"mb-4",children:["A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. Think of it like a real‑world promise — for example, ",e.jsx("strong",{children:"Swadeep"})," promises to bring sweets from"," ",e.jsx("strong",{children:"Barrackpore"}),". At first, it’s ",e.jsx("em",{children:"pending"}),". Then it either ",e.jsx("em",{children:"fulfills"})," (sweets arrive) or ",e.jsx("em",{children:"rejects"})," (he forgets)."]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 my-6",children:[e.jsxs("div",{className:"p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow",children:[e.jsx("h3",{className:"font-bold",children:"Pending"}),e.jsx("p",{className:"text-sm",children:"Initial state, neither fulfilled nor rejected."})]}),e.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400 transition-all duration-300 hover:scale-105 hover:shadow",children:[e.jsx("h3",{className:"font-bold",children:"Fulfilled"}),e.jsx("p",{className:"text-sm",children:"Operation completed successfully."})]}),e.jsxs("div",{className:"p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-400 transition-all duration-300 hover:scale-105 hover:shadow",children:[e.jsx("h3",{className:"font-bold",children:"Rejected"}),e.jsx("p",{className:"text-sm",children:"Operation failed."})]})]}),e.jsx("h3",{className:"text-xl font-medium mt-6 mb-2",children:"Basic Promise Creation"}),e.jsx(r,{initialCode:i,title:"promise_basic.js - Creating and consuming a Promise"}),e.jsxs("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("strong",{children:"Prototype:"})," ",e.jsx("code",{children:"new Promise(executor)"})," — returns a Promise object."]})]}),e.jsxs("section",{className:s("bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","transition-all duration-300 hover:shadow-lg"),style:{animationDelay:"0.3s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"w-1 h-6 bg-purple-500 rounded-full"}),"Promise Chaining"]}),e.jsxs("p",{className:"mb-4",children:["Promises solve the “callback hell” by allowing you to chain asynchronous operations. Each ",e.jsx("code",{children:".then()"})," ","returns a new promise, making the code flat and readable."]}),e.jsx(r,{initialCode:o,title:"promise_chain.js - Sequential async steps"}),e.jsxs("p",{className:"mt-4 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("strong",{children:"Tip:"})," Always return a value or a promise from ",e.jsx("code",{children:".then()"})," to keep the chain going."]})]}),e.jsxs("section",{className:s("bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","transition-all duration-300 hover:shadow-lg"),style:{animationDelay:"0.4s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"w-1 h-6 bg-blue-500 rounded-full"}),"Async/Await: Writing Async Code Like Sync"]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("code",{children:"async"})," functions always return a Promise. Inside them, you can use ",e.jsx("code",{children:"await"})," to pause execution until a Promise settles. This makes asynchronous code look and behave more like synchronous code."]}),e.jsx(r,{initialCode:l,title:"async_await_example.js - Using async/await"}),e.jsx("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Observe carefully:"})," The function marked ",e.jsx("code",{children:"async"})," automatically wraps the return value in a Promise. If you return a value, it becomes a fulfilled promise; if you throw, it becomes a rejected promise."]})})]}),e.jsxs("section",{className:s("bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","transition-all duration-300 hover:shadow-lg"),style:{animationDelay:"0.5s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"w-1 h-6 bg-red-500 rounded-full"}),"Error Handling: ",e.jsx("code",{children:".catch()"})," vs ",e.jsx("code",{children:"try/catch"})]}),e.jsxs("p",{className:"mb-4",children:["With promises, you handle errors using ",e.jsx("code",{children:".catch()"}),". With async/await, you wrap ",e.jsx("code",{children:"await"})," ","calls in ",e.jsx("code",{children:"try...catch"}),". Both are valid and can be mixed."]}),e.jsx(r,{initialCode:c,title:"error_handling.js - Catching errors"})]}),e.jsxs("section",{className:s("bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","transition-all duration-300 hover:shadow-lg"),style:{animationDelay:"0.6s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"w-1 h-6 bg-orange-500 rounded-full"}),"Common Pitfalls & Best Practices"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-red-600 dark:text-red-400 mb-2",children:"❌ Beginner Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm",children:[e.jsxs("li",{children:["Forgetting to return a promise in a ",e.jsx("code",{children:".then()"})," chain."]}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"async/await"})," without ",e.jsx("code",{children:"try/catch"})," – unhandled rejections."]}),e.jsx("li",{children:"Creating new Promise when not needed (many APIs already return promises)."}),e.jsxs("li",{children:["Assuming ",e.jsx("code",{children:"await"})," makes code synchronous (it doesn’t block the event loop)."]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-green-600 dark:text-green-400 mb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm",children:[e.jsxs("li",{children:["Always handle errors – either with ",e.jsx("code",{children:".catch()"})," or ",e.jsx("code",{children:"try/catch"}),"."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"Promise.all"})," for independent parallel tasks."]}),e.jsxs("li",{children:["Avoid mixing too many ",e.jsx("code",{children:".then()"})," and ",e.jsx("code",{children:"await"})," in the same function."]}),e.jsxs("li",{children:["Name your promise variables clearly (e.g., ",e.jsx("code",{children:"userDataPromise"}),")."]}),e.jsxs("li",{children:["Remember: ",e.jsx("code",{children:"async"})," functions always return a Promise – even if you return ",e.jsx("code",{children:"undefined"}),"."]})]})]})]})]}),e.jsxs("section",{className:s("bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","transition-all duration-300 hover:shadow-lg"),style:{animationDelay:"0.7s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"w-1 h-6 bg-indigo-500 rounded-full"}),"Real-World Scenarios"]}),e.jsx("p",{className:"mb-4",children:"Promises and async/await are everywhere in modern JavaScript:"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Fetching data from an API"})," – e.g., getting weather for ",e.jsx("strong",{children:"Ichapur"}),"."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Reading files"})," in Node.js (fs.promises)."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Database queries"})," – ",e.jsx("strong",{children:"Tuhina"})," fetching student records."]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Timers / delays"})," – e.g., waiting for a user action."]})]})]})]}),e.jsxs("section",{className:s("bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 rounded-xl p-6 shadow-md","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","transition-all duration-300 hover:shadow-lg hover:border-amber-500",n?"scale-[1.01]":""),style:{animationDelay:"0.8s"},onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:[e.jsx("span",{className:"w-1 h-6 bg-amber-500 rounded-full"}),"👨‍🏫 Teacher's Note"]}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2",children:[e.jsx("strong",{children:"Sukanta Hui"})," (27 years experience)"]}),e.jsxs("p",{className:"text-sm",children:["Email: ",e.jsx("a",{href:"mailto:sukantahui@codernaccotax.co.in",className:"text-blue-600 dark:text-blue-400 underline",children:"sukantahui@codernaccotax.co.in"}),e.jsx("br",{}),"Mobile: 7003756860"]}),e.jsxs("p",{className:"mt-3",children:['"Think of promises as a way to write asynchronous code without losing your sanity. Start with small examples — like having ',e.jsx("strong",{children:"Debangshu"})," order food from ",e.jsx("strong",{children:"Shyamnagar"})," — and gradually introduce error handling. Always emphasise that ",e.jsx("code",{children:"await"})," only works inside",e.jsx("code",{children:"async"}),' functions."']})]}),e.jsxs("div",{className:"flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-inner",children:[e.jsx("h3",{className:"font-bold mb-2",children:"🎯 Points to remember:"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-1",children:[e.jsx("li",{children:"Promise states: pending → fulfilled / rejected (one-way)."}),e.jsx("li",{children:"Async functions always return a Promise."}),e.jsx("li",{children:"Await stops execution of the function, not the whole program."}),e.jsx("li",{children:"Always handle rejections – unhandled rejections can crash Node.js."})]})]})]})]}),e.jsxs("section",{className:s("bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md","animate-[fadeInUp_0.6s_ease-out] motion-safe:animate-[fadeInUp_0.6s_ease-out]","transition-all duration-300 hover:shadow-lg"),style:{animationDelay:"0.9s"},children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"w-1 h-6 bg-teal-500 rounded-full"}),"✅ Mini Checklist & Hint"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold mb-2",children:"Checklist"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"})," I understand the three states of a Promise."]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"})," I can chain multiple ",e.jsx("code",{children:".then()"})," calls."]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"})," I know how to convert a callback function to return a Promise."]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"})," I can use ",e.jsx("code",{children:"async/await"})," with error handling."]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"})," I remember that ",e.jsx("code",{children:"await"})," is only valid inside",e.jsx("code",{children:"async"})," functions."]})]})]}),e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("h3",{className:"font-bold mb-2",children:"💡 Hint"}),e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Observe carefully:"})," When you mark a function as ",e.jsx("code",{children:"async"}),", it automatically wraps the returned value in a resolved promise. Try changing the return value of an async function and log it without ",e.jsx("code",{children:"await"})," — you’ll see a Promise object."]}),e.jsxs("p",{className:"text-sm mt-2",children:[e.jsx("strong",{children:"Think about:"})," What happens if you forget ",e.jsx("code",{children:"await"})," before a promise? You get a pending promise instead of the resolved value."]})]})]})]})]})]})};export{u as default};
