import{r as o,j as e}from"./index-BFnLuail.js";import{c as i}from"./clsx-B-dksMZM.js";const F=()=>{const[j,f]=o.useState([]),[u,c]=o.useState(null),[q,D]=o.useState({}),[_,k]=o.useState([{id:1,name:"Swadeep",action:"Submit Assignment",location:"Barrackpore",status:"pending"},{id:2,name:"Tuhina",action:"Ask Question",location:"Shyamnagar",status:"completed"},{id:3,name:"Abhronila",action:"Request Leave",location:"Naihati",status:"pending"},{id:4,name:"Debangshu",action:"Report Issue",location:"Ichapur",status:"in-progress"}]),[d,b]=o.useState({value1:0,value2:0,operation:"+",result:0,history:[]}),[T,m]=o.useState([{id:1,text:"Learn onClick with arguments",completed:!0,priority:"high"},{id:2,text:"Practice onChange patterns",completed:!1,priority:"medium"},{id:3,text:"Master form onSubmit",completed:!1,priority:"high"},{id:4,text:"Build event handling app",completed:!1,priority:"low"}]),[p,x]=o.useState([{id:101,name:"React Book",price:29.99,quantity:1,category:"Books"},{id:102,name:"JavaScript Guide",price:19.99,quantity:2,category:"Books"},{id:103,name:"Web Dev Course",price:99.99,quantity:1,category:"Courses"}]),l=(t,a="info")=>{f(s=>[{id:Date.now(),message:t,type:a,timestamp:new Date().toLocaleTimeString()},...s.slice(0,9)])},N=(t,a)=>{c({name:t,location:a}),l(`Inline arrow: ${t} from ${a}`,"inline-arrow")},w=(t,a)=>()=>{c({name:t,location:a}),l(`Wrapper function: ${t} from ${a}`,"wrapper")},C=t=>{const a=t.target.dataset.name,s=t.target.dataset.location;a&&s&&(c({name:a,location:s}),l(`Data attribute: ${a} from ${s}`,"data-attr"))},y=((t,a)=>(...s)=>{l(`Starting: ${a}`,"logging");const r=t(...s);return l(`Completed: ${a}`,"logging"),r})((t,a)=>{k(s=>s.map(r=>r.id===t?{...r,status:a}:r))},"Update Action Status"),g=t=>{const a=parseFloat(d.value1)||0,s=parseFloat(d.value2)||0;let r;switch(t){case"+":r=a+s;break;case"-":r=a-s;break;case"*":r=a*s;break;case"/":r=s!==0?a/s:"Error: Division by zero";break;default:r=0}b(n=>({...n,operation:t,result:r,history:[`${a} ${t} ${s} = ${r}`,...n.history.slice(0,4)]})),l(`Calculator: ${a} ${t} ${s} = ${r}`,"calculator")},S=(t,a)=>{b(s=>({...s,[t]:a}))},h=(t,a)=>{switch(a){case"toggle":m(r=>r.map(n=>n.id===t?{...n,completed:!n.completed}:n)),l(`Toggled todo ${t}`,"todo");break;case"delete":m(r=>r.filter(n=>n.id!==t)),l(`Deleted todo ${t}`,"todo");break;case"priority-up":const s={low:"medium",medium:"high",high:"high"};m(r=>r.map(n=>n.id===t?{...n,priority:s[n.priority]||n.priority}:n)),l(`Increased priority for todo ${t}`,"todo");break}},v=(t,a)=>{switch(a){case"increment":x(s=>s.map(r=>r.id===t?{...r,quantity:r.quantity+1}:r)),l(`Incremented item ${t}`,"cart");break;case"decrement":x(s=>s.map(r=>r.id===t&&r.quantity>1?{...r,quantity:r.quantity-1}:r)),l(`Decremented item ${t}`,"cart");break;case"remove":x(s=>s.filter(r=>r.id!==t)),l(`Removed item ${t} from cart`,"cart");break}},A=(t,a)=>{l(`Custom event with data: ${JSON.stringify(a)}`,"custom"),console.log("Original event:",t.type)},U=()=>{f([]),c(null),D({}),k([{id:1,name:"Swadeep",action:"Submit Assignment",location:"Barrackpore",status:"pending"},{id:2,name:"Tuhina",action:"Ask Question",location:"Shyamnagar",status:"completed"},{id:3,name:"Abhronila",action:"Request Leave",location:"Naihati",status:"pending"},{id:4,name:"Debangshu",action:"Report Issue",location:"Ichapur",status:"in-progress"}]),b({value1:0,value2:0,operation:"+",result:0,history:[]}),m([{id:1,text:"Learn onClick with arguments",completed:!0,priority:"high"},{id:2,text:"Practice onChange patterns",completed:!1,priority:"medium"},{id:3,text:"Master form onSubmit",completed:!1,priority:"high"},{id:4,text:"Build event handling app",completed:!1,priority:"low"}]),x([{id:101,name:"React Book",price:29.99,quantity:1,category:"Books"},{id:102,name:"JavaScript Guide",price:19.99,quantity:2,category:"Books"},{id:103,name:"Web Dev Course",price:99.99,quantity:1,category:"Courses"}]),l("All examples reset","reset")},I=p.reduce((t,a)=>t+a.price*a.quantity,0);return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8 transition-colors duration-500",children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulseArgument {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4);
            border-color: rgba(139, 92, 246, 0.3);
          }
          50% { 
            box-shadow: 0 0 0 10px rgba(139, 92, 246, 0);
            border-color: rgba(139, 92, 246, 0.7);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .history-entry {
          animation: slideInRight 0.3s ease-out;
        }
      `}),e.jsxs("div",{className:"max-w-6xl mx-auto mb-12 animate-[fadeSlideUp_0.8s_ease-out]",style:{animation:"fadeSlideUp 0.8s ease-out"},children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 tracking-tight",children:"Passing Arguments to Event Handlers"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:"Learn different patterns for passing data to event handlers in React"})]}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-8",children:[e.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 \r
                     border border-gray-200 dark:border-gray-700\r
                     hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-700\r
                     transition-all duration-300 animate-[fadeSlideUp_0.8s_ease-out_0.1s_both]`,style:{animation:"fadeSlideUp 0.8s ease-out 0.1s both"},children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center",children:[e.jsx("span",{className:`bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 \r
                           rounded-lg p-2 mr-3 text-xl`,children:"📘"}),"Why Pass Arguments to Event Handlers?"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg",children:[e.jsx("h3",{className:"font-bold text-purple-700 dark:text-purple-300 mb-2",children:"The Challenge"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Event handlers in React receive the event object as their first argument. But often we need to pass additional data like IDs, values, or other context. We can't simply call",e.jsx("code",{children:"onClick={handleClick(id)}"})," because that would invoke the function immediately."]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-red-50 dark:bg-red-900/20 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-red-700 dark:text-red-300 mb-2",children:"❌ WRONG: Immediate Invocation"}),e.jsxs("div",{className:"font-mono text-sm bg-gray-900 text-red-300 p-3 rounded",children:[`// This calls handleClick immediately!
`,`<button onClick={handleClick(id)}>
`,`  Click me
`,`</button>

`,"// Result: handleClick runs on render, not on click!"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Function is called during render, not when clicked"})]}),e.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h3",{className:"font-semibold text-green-700 dark:text-green-300 mb-2",children:"✅ CORRECT: Function Reference"}),e.jsxs("div",{className:"font-mono text-sm bg-gray-900 text-green-300 p-3 rounded",children:[`// This passes a function reference
`,`<button onClick={() => handleClick(id)}>
`,`  Click me
`,`</button>

`,"// Result: handleClick runs only on click"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"Arrow function creates a new function that calls handleClick with arguments"})]})]}),e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500",children:[e.jsx("h3",{className:"font-bold text-blue-700 dark:text-blue-300 mb-2",children:"Key Concept"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["React expects a ",e.jsx("strong",{children:"function reference"})," for event handlers, not a function call. We need to create a new function that, when called, will invoke our handler with the desired arguments."]})]})]})]}),e.jsxs("div",{className:`bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 \r
                     rounded-2xl shadow-lg p-6 md:p-8 border border-purple-100 dark:border-purple-900\r
                     hover:shadow-xl transition-all duration-300 animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]\r
                     motion-safe:animate-[pulseArgument_3s_ease-in-out_infinite]`,style:{animation:"fadeSlideUp 0.8s ease-out 0.2s both"},children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("span",{className:`bg-gradient-to-r from-purple-500 to-indigo-500 text-white \r
                           rounded-lg p-2 mr-3 text-xl`,children:"🔄"}),"Pattern Comparison: Student Selection"]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsxs("div",{className:"text-center mb-3",children:[e.jsx("div",{className:"text-2xl mb-2",children:"1."}),e.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:"Inline Arrow Function"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("button",{onClick:()=>N("Swadeep","Barrackpore"),className:`w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg\r
                           transition-all duration-300 hover:scale-[1.02]`,children:"Select Swadeep"}),e.jsx("button",{onClick:()=>N("Tuhina","Shyamnagar"),className:`w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg\r
                           transition-all duration-300 hover:scale-[1.02]`,children:"Select Tuhina"})]}),e.jsx("div",{className:"mt-4 font-mono text-xs bg-gray-900 text-green-300 p-2 rounded",children:`<button onClick={() =>
  handleClick(studentId)
}>`}),e.jsxs("div",{className:"mt-2 text-xs text-gray-500",children:[e.jsx("strong",{children:"Pros:"})," Simple, inline",e.jsx("br",{}),e.jsx("strong",{children:"Cons:"})," Creates new function on each render"]})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsxs("div",{className:"text-center mb-3",children:[e.jsx("div",{className:"text-2xl mb-2",children:"2."}),e.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:"Wrapper Function"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("button",{onClick:w("Abhronila","Naihati"),className:`w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg\r
                           transition-all duration-300 hover:scale-[1.02]`,children:"Select Abhronila"}),e.jsx("button",{onClick:w("Debangshu","Ichapur"),className:`w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg\r
                           transition-all duration-300 hover:scale-[1.02]`,children:"Select Debangshu"})]}),e.jsxs("div",{className:"mt-4 font-mono text-xs bg-gray-900 text-green-300 p-2 rounded",children:[`const handler = (id) => () => {
  handleClick(id);
};

`,"<button onClick={handler(id)}>"]}),e.jsxs("div",{className:"mt-2 text-xs text-gray-500",children:[e.jsx("strong",{children:"Pros:"})," Clean JSX, reusable",e.jsx("br",{}),e.jsx("strong",{children:"Cons:"})," Extra function creation"]})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsxs("div",{className:"text-center mb-3",children:[e.jsx("div",{className:"text-2xl mb-2",children:"3."}),e.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:"Data Attributes"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("button",{"data-name":"Arghya","data-location":"Kolkata",onClick:C,className:`w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg\r
                           transition-all duration-300 hover:scale-[1.02]`,children:"Select Arghya"}),e.jsx("button",{"data-name":"Priya","data-location":"Howrah",onClick:C,className:`w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg\r
                           transition-all duration-300 hover:scale-[1.02]`,children:"Select Priya"})]}),e.jsxs("div",{className:"mt-4 font-mono text-xs bg-gray-900 text-green-300 p-2 rounded",children:[`<button 
  data-id={id}
  onClick={handleClick}
>

`,`// In handler:
const id = e.target.dataset.id;`]}),e.jsxs("div",{className:"mt-2 text-xs text-gray-500",children:[e.jsx("strong",{children:"Pros:"})," Single handler, HTML5 standard",e.jsx("br",{}),e.jsx("strong",{children:"Cons:"})," Type conversion needed"]})]})]}),u&&e.jsxs("div",{className:"mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800",children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-white mb-2",children:"Selected Student"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4",children:e.jsx("span",{className:"text-xl",children:"👨‍🎓"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-lg",children:u.name}),e.jsxs("div",{className:"text-gray-600 dark:text-gray-400",children:["From ",u.location]})]})]})]})]}),e.jsxs("div",{className:`bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 \r
                     rounded-2xl shadow-lg p-6 md:p-8 border border-green-100 dark:border-green-900\r
                     hover:shadow-xl transition-all duration-300 animate-[fadeSlideUp_0.8s_ease-out_0.3s_both]`,style:{animation:"fadeSlideUp 0.8s ease-out 0.3s both"},children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("span",{className:`bg-gradient-to-r from-green-500 to-emerald-500 text-white \r
                           rounded-lg p-2 mr-3 text-xl`,children:"📋"}),"Action Items with Multiple Arguments"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4",children:"Student Actions"}),e.jsx("div",{className:"space-y-4",children:_.map(t=>e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex justify-between items-start mb-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold",children:t.name}),e.jsx("div",{className:"text-sm text-gray-500",children:t.location})]}),e.jsx("span",{className:i("px-3 py-1 rounded-full text-xs font-medium",t.status==="completed"&&"bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",t.status==="pending"&&"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",t.status==="in-progress"&&"bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"),children:t.status})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"text-sm text-gray-500 mb-1",children:"Action:"}),e.jsx("div",{className:"font-medium",children:t.action})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx("button",{onClick:()=>y(t.id,"pending"),className:i("py-2 rounded text-sm transition-all duration-300 hover:scale-[1.02]",t.status==="pending"?"bg-yellow-500 text-white":"bg-yellow-100 hover:bg-yellow-200 text-yellow-800 dark:bg-yellow-900/30 dark:hover:bg-yellow-900/50 dark:text-yellow-300"),children:"Pending"}),e.jsx("button",{onClick:()=>y(t.id,"in-progress"),className:i("py-2 rounded text-sm transition-all duration-300 hover:scale-[1.02]",t.status==="in-progress"?"bg-blue-500 text-white":"bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 dark:text-blue-300"),children:"In Progress"}),e.jsx("button",{onClick:()=>y(t.id,"completed"),className:i("py-2 rounded text-sm transition-all duration-300 hover:scale-[1.02]",t.status==="completed"?"bg-green-500 text-white":"bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900/30 dark:hover:bg-green-900/50 dark:text-green-300"),children:"Completed"})]})]},t.id))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4",children:"Pattern Explanation"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-white mb-2",children:"Higher-Order Function Pattern"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-3",children:"This pattern uses a function that returns another function. The outer function captures the arguments, and the inner function uses them when called."}),e.jsxs("div",{className:"font-mono text-xs bg-gray-900 text-green-300 p-3 rounded",children:[`// Higher-order function with logging
`,`const withLogging = (fn, actionName) => {
`,`  return (...args) => {
`,"    console.log(`Starting: ${actionName}`);\n",`    const result = fn(...args);
`,"    console.log(`Completed: ${actionName}`);\n",`    return result;
`,`  };
`,`};

`,`// Usage
`,`const handleAction = withLogging(
`,`  (id, status) => { /* update logic */ },
`,`  'Update Status'
`,`);

`,`// In JSX
`,`<button onClick={() => handleAction(id, 'completed')}>
`,`  Mark Complete
`,"</button>"]})]}),e.jsxs("div",{className:"p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-yellow-700 dark:text-yellow-300 mb-2",children:"Performance Consideration"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Inline arrow functions create new function instances on every render. For lists with many items, consider using memoization or the wrapper function pattern."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-lg",children:[e.jsx("div",{className:"text-sm text-gray-400 mb-2",children:"Multiple Arguments Pattern"}),e.jsxs("div",{className:"font-mono text-xs text-green-300",children:[`// Passing multiple arguments
`,`<button onClick={() => handleAction(id, status, user)}>
`,`  Do Action
`,`</button>

`,`// Handler receives all arguments
`,`const handleAction = (id, status, user) => {
`,`  console.log(id, status, user);
`,`  // Update logic here
`,"};"]})]})]})]})]})]}),e.jsxs("div",{className:`bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 \r
                     rounded-2xl shadow-lg p-6 md:p-8 border border-blue-100 dark:border-blue-900\r
                     hover:shadow-xl transition-all duration-300 animate-[fadeSlideUp_0.8s_ease-out_0.4s_both]`,style:{animation:"fadeSlideUp 0.8s ease-out 0.4s both"},children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("span",{className:`bg-gradient-to-r from-blue-500 to-cyan-500 text-white \r
                           rounded-lg p-2 mr-3 text-xl`,children:"🧮"}),"Calculator: Dynamic Operation Arguments"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4",children:"Calculator"}),e.jsx("div",{className:"p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 dark:text-gray-400 mb-1",children:"Value 1"}),e.jsx("input",{type:"number",value:d.value1,onChange:t=>S("value1",t.target.value),className:`w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg\r
                               bg-white dark:bg-gray-800 text-gray-800 dark:text-white`})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 dark:text-gray-400 mb-1",children:"Value 2"}),e.jsx("input",{type:"number",value:d.value2,onChange:t=>S("value2",t.target.value),className:`w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg\r
                               bg-white dark:bg-gray-800 text-gray-800 dark:text-white`})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[e.jsx("button",{onClick:()=>g("+"),className:`p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg\r
                               transition-all duration-300 hover:scale-[1.02]`,children:"+"}),e.jsx("button",{onClick:()=>g("-"),className:`p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg\r
                               transition-all duration-300 hover:scale-[1.02]`,children:"-"}),e.jsx("button",{onClick:()=>g("*"),className:`p-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg\r
                               transition-all duration-300 hover:scale-[1.02]`,children:"×"}),e.jsx("button",{onClick:()=>g("/"),className:`p-3 bg-red-500 hover:bg-red-600 text-white rounded-lg\r
                               transition-all duration-300 hover:scale-[1.02]`,children:"÷"})]}),e.jsxs("div",{className:"p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg",children:[e.jsx("div",{className:"text-sm text-gray-500 mb-1",children:"Result"}),e.jsx("div",{className:"text-2xl font-bold text-blue-600 dark:text-blue-400",children:d.result}),e.jsxs("div",{className:"text-sm text-gray-500 mt-1",children:[d.value1," ",d.operation," ",d.value2]})]})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4",children:"Calculation History"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-white mb-3",children:"Recent Calculations"}),e.jsx("div",{className:"space-y-2",children:d.history.length===0?e.jsx("div",{className:"text-center py-4 text-gray-500",children:"No calculations yet"}):d.history.map((t,a)=>e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded",children:[e.jsx("div",{className:"font-mono",children:t}),e.jsx("div",{className:"text-xs text-gray-500",children:a===0?"Latest":`${a} ago`})]},a))})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-lg",children:[e.jsx("div",{className:"text-sm text-gray-400 mb-2",children:"Operation Handler Pattern"}),e.jsxs("div",{className:"font-mono text-xs text-green-300",children:[`// Single handler for multiple operations
`,`const handleOperation = (operation) => {
`,"const value1 = parseFloat(calculator.value1) || 0;","const value2 = parseFloat(calculator.value2) || 0;",`let result;

`,`  switch (operation) {
`,`    case '+': result = value1 + value2; break;
`,`    case '-': result = value1 - value2; break;
`,`    // ... other operations
`,`  }

`,`  setCalculator(prev => ({ ...prev, operation, result }));
`,`};

`,`// In JSX - pass operation as argument
`,`<button onClick={() => handleOperation('+')}>+</button>
`,"<button onClick={() => handleOperation('-')}>-</button>"]})]})]})]})]})]}),e.jsxs("div",{className:`bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 \r
                     rounded-2xl shadow-lg p-6 md:p-8 border border-orange-100 dark:border-orange-900\r
                     hover:shadow-xl transition-all duration-300 animate-[fadeSlideUp_0.8s_ease-out_0.5s_both]`,style:{animation:"fadeSlideUp 0.8s ease-out 0.5s both"},children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("span",{className:`bg-gradient-to-r from-orange-500 to-red-500 text-white \r
                           rounded-lg p-2 mr-3 text-xl`,children:"✅"}),"Todo List: Multiple Actions per Item"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4",children:"Todo Items"}),e.jsx("div",{className:"space-y-4",children:T.map(t=>e.jsxs("div",{className:i("p-4 rounded-lg border transition-all duration-300",t.completed?"bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800":"bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",t.priority==="high"&&"border-l-4 border-red-500",t.priority==="medium"&&"border-l-4 border-yellow-500",t.priority==="low"&&"border-l-4 border-blue-500"),children:[e.jsxs("div",{className:"flex items-start justify-between mb-3",children:[e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("button",{onClick:()=>h(t.id,"toggle"),className:i("w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",t.completed?"bg-green-500 border-green-500":"border-gray-300 dark:border-gray-600 hover:border-green-500"),children:t.completed&&"✓"}),e.jsxs("div",{children:[e.jsx("div",{className:i("font-medium",t.completed&&"line-through text-gray-500"),children:t.text}),e.jsxs("div",{className:"flex items-center space-x-2 mt-1",children:[e.jsxs("span",{className:i("px-2 py-1 rounded-full text-xs",t.priority==="high"&&"bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",t.priority==="medium"&&"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",t.priority==="low"&&"bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"),children:[t.priority," priority"]}),e.jsx("span",{className:i("px-2 py-1 rounded-full text-xs",t.completed?"bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300":"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"),children:t.completed?"Completed":"Pending"})]})]})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:()=>h(t.id,"priority-up"),className:"p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors",title:"Increase priority",children:"⬆"}),e.jsx("button",{onClick:()=>h(t.id,"delete"),className:"p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors",title:"Delete todo",children:"🗑"})]})]}),e.jsx("div",{className:"flex space-x-2 mt-3",children:e.jsx("button",{onClick:()=>h(t.id,"toggle"),className:`flex-1 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 \r
                                 rounded text-sm transition-colors`,children:t.completed?"Mark Incomplete":"Mark Complete"})})]},t.id))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4",children:"Action Pattern"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-white mb-2",children:"Switch Statement Pattern"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-3",children:"This pattern uses a single handler with a switch statement to handle multiple action types for the same item."}),e.jsxs("div",{className:"font-mono text-xs bg-gray-900 text-green-300 p-3 rounded",children:[`// Single handler for multiple todo actions
`,`const handleTodoAction = (todoId, action) => {
`,`  switch (action) {
`,`    case 'toggle':
`,`      // Toggle completion logic
`,`      break;
`,`    case 'delete':
`,`      // Delete todo logic
`,`      break;
`,`    case 'priority-up':
`,`      // Increase priority logic
`,`      break;
`,`  }
`,`};

`,`// In JSX - pass todo ID and action type
`,`<button onClick={() => handleTodoAction(id, 'toggle')}>
`,`  Toggle Complete
`,`</button>
`,`<button onClick={() => handleTodoAction(id, 'delete')}>
`,`  Delete
`,"</button>"]})]}),e.jsxs("div",{className:"p-4 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-700 dark:text-green-300 mb-2",children:"Benefits"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"• Single handler function for all related actions"}),e.jsx("li",{children:"• Clear separation of action types"}),e.jsx("li",{children:"• Easy to add new action types"}),e.jsx("li",{children:"• Consistent pattern across all items"})]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-lg",children:[e.jsx("div",{className:"text-sm text-gray-400 mb-2",children:"Alternative: Multiple Handlers"}),e.jsxs("div",{className:"font-mono text-xs text-yellow-300",children:[`// Alternative: Separate handlers
`,`const handleToggle = (id) => { /* ... */ };
`,`const handleDelete = (id) => { /* ... */ };
`,`const handlePriorityUp = (id) => { /* ... */ };

`,`// In JSX
`,`<button onClick={() => handleToggle(id)}>Toggle</button>
`,"<button onClick={() => handleDelete(id)}>Delete</button>"]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Trade-off: More handler functions but each is simpler"})]})]})]})]})]}),e.jsxs("div",{className:`bg-gradient-to-r from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-900 \r
                     rounded-2xl shadow-lg p-6 md:p-8 border border-pink-100 dark:border-pink-900\r
                     hover:shadow-xl transition-all duration-300 animate-[fadeSlideUp_0.8s_ease-out_0.6s_both]`,style:{animation:"fadeSlideUp 0.8s ease-out 0.6s both"},children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("span",{className:`bg-gradient-to-r from-pink-500 to-rose-500 text-white \r
                           rounded-lg p-2 mr-3 text-xl`,children:"🛒"}),"Shopping Cart: Complex Item Updates"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4",children:"Cart Items"}),e.jsxs("div",{className:"space-y-4",children:[p.map(t=>e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex justify-between items-start mb-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold",children:t.name}),e.jsx("div",{className:"text-sm text-gray-500",children:t.category})]}),e.jsxs("div",{className:"text-lg font-bold text-blue-600 dark:text-blue-400",children:["$",(t.price*t.quantity).toFixed(2)]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:()=>v(t.id,"decrement"),disabled:t.quantity<=1,className:i("w-8 h-8 rounded-full flex items-center justify-center",t.quantity<=1?"bg-gray-200 dark:bg-gray-700 text-gray-400":"bg-red-100 hover:bg-red-200 text-red-600 dark:bg-red-900/30 dark:hover:bg-red-900/50 dark:text-red-300"),children:"-"}),e.jsx("div",{className:"w-12 text-center font-bold",children:t.quantity}),e.jsx("button",{onClick:()=>v(t.id,"increment"),className:`w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 text-green-600 \r
                                   dark:bg-green-900/30 dark:hover:bg-green-900/50 dark:text-green-300\r
                                   flex items-center justify-center`,children:"+"}),e.jsxs("div",{className:"ml-4 text-gray-600 dark:text-gray-400",children:["$",t.price," each"]})]}),e.jsx("button",{onClick:()=>v(t.id,"remove"),className:"p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors",children:"Remove"})]})]},t.id)),e.jsx("div",{className:"p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-500",children:"Total Items"}),e.jsx("div",{className:"text-xl font-bold",children:p.reduce((t,a)=>t+a.quantity,0)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-gray-500",children:"Cart Total"}),e.jsxs("div",{className:"text-2xl font-bold text-green-600 dark:text-green-400",children:["$",I.toFixed(2)]})]})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4",children:"Quantity Update Pattern"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-white mb-2",children:"Action-Based Updates"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-3",children:"Similar to the todo pattern, but with quantity-specific logic for increment and decrement operations."}),e.jsxs("div",{className:"font-mono text-xs bg-gray-900 text-green-300 p-3 rounded",children:[`// Cart update handler with action types
`,`const handleCartUpdate = (itemId, action) => {
`,`  switch (action) {
`,`    case 'increment':
`,`      setCart(prev => prev.map(item =>
`,`        item.id === itemId
`,`          ? { ...item, quantity: item.quantity + 1 }
`,`          : item
`,`      ));
`,`      break;
`,`    
`,`    case 'decrement':
`,`      setCart(prev => prev.map(item =>
`,`        item.id === itemId && item.quantity > 1
`,`          ? { ...item, quantity: item.quantity - 1 }
`,`          : item
`,`      ));
`,`      break;
`,`    
`,`    case 'remove':
`,`      setCart(prev => prev.filter(item => item.id !== itemId));
`,`      break;
`,`  }
`,`};

`,`// Usage in JSX
`,`<button onClick={() => handleCartUpdate(item.id, 'increment')}>
`,`  +
`,`</button>
`,`<button onClick={() => handleCartUpdate(item.id, 'decrement')}>
`,`  -
`,"</button>"]})]}),e.jsxs("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-blue-700 dark:text-blue-300 mb-2",children:"Conditional Logic"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Note how the decrement action includes a condition to prevent quantity from going below 1. This demonstrates how you can include conditional logic within your action handlers."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-lg",children:[e.jsx("div",{className:"text-sm text-gray-400 mb-2",children:"Alternative: Separate Value"}),e.jsxs("div",{className:"font-mono text-xs text-yellow-300",children:[`// Alternative: Pass new quantity directly
`,`const handleQuantityChange = (itemId, newQuantity) => {
`,`  if (newQuantity < 1) return;
`,`  setCart(prev => prev.map(item =>
`,`    item.id === itemId
`,`      ? { ...item, quantity: newQuantity }
`,`      : item
`,`  ));
`,`};

`,`// Usage
`,`<button onClick={() => handleQuantityChange(id, quantity + 1)}>
`,`  Increase
`,"</button>"]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"More flexible but requires calculating new value in JSX"})]})]})]})]})]}),e.jsxs("div",{className:`bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 \r
                     rounded-2xl shadow-lg p-6 md:p-8 border border-indigo-100 dark:border-indigo-900\r
                     hover:shadow-xl transition-all duration-300 animate-[fadeSlideUp_0.8s_ease-out_0.7s_both]`,style:{animation:"fadeSlideUp 0.8s ease-out 0.7s both"},children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center",children:[e.jsx("span",{className:`bg-gradient-to-r from-indigo-500 to-purple-500 text-white \r
                           rounded-lg p-2 mr-3 text-xl`,children:"🎯"}),"Additional Patterns & Best Practices"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white",children:"Form Submission Pattern"}),e.jsx("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:e.jsxs("div",{className:"font-mono text-sm bg-gray-900 text-green-300 p-3 rounded",children:[`// Form component with inline handler
`,`const FormComponent = () => {
`,`  const [formData, setFormData] = useState({ name: '', email: '' });
`,`  
`,`  const handleSubmit = (e, extraData) => {
`,`    e.preventDefault();
`,`    // Combine form data with extra arguments
`,`    onSubmit({ ...formData, ...extraData });
`,`  };
`,`  
`,`  return (
`,`    <form onSubmit={(e) => handleSubmit(e, { source: 'web', timestamp: Date.now() })}>
`,`      {/* form fields */}
`,`      <button type="submit">Submit</button>
`,`    </form>
`,`  );
`,"};"]})}),e.jsxs("div",{className:"p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-yellow-700 dark:text-yellow-300 mb-2",children:"Key Insight"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"You can pass both the event object and custom arguments to form handlers. The event object is always the first argument."})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white",children:"Event + Custom Data"}),e.jsx("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:e.jsxs("div",{className:"font-mono text-sm bg-gray-900 text-green-300 p-3 rounded",children:[`// Handler that accepts both event and custom data
`,`const handleClickWithData = (e, customData) => {
`,`  // Can still prevent default if needed
`,`  if (customData.preventDefault) {
`,`    e.preventDefault();
`,`  }
`,`  
`,`  // Use both event data and custom data
`,`  console.log('Target:', e.target);
`,`  console.log('Custom:', customData);
`,`};

`,`// Usage
`,`<a 
`,`  href="#" 
`,`  onClick={(e) => handleClickWithData(e, { id: 1, action: 'delete' })}
`,`>
`,`  Delete Item
`,"</a>"]})}),e.jsxs("div",{className:"flex space-x-4 mt-4",children:[e.jsx("button",{onClick:t=>A(t,{action:"test",value:123}),className:"px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors",children:"Test Event + Data"}),e.jsx("button",{onClick:t=>A(t,{type:"analytics",event:"button_click",page:"arguments_demo"}),className:"px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors",children:"Analytics Event"})]})]})]}),e.jsxs("div",{className:"mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800",children:[e.jsx("h3",{className:"font-bold text-gray-800 dark:text-white mb-4",children:"Best Practices Summary"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center",children:"✓"}),e.jsx("span",{className:"font-medium",children:"Use inline arrow for simple cases"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 ml-8",children:"Perfect for components with few re-renders"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center",children:"✓"}),e.jsx("span",{className:"font-medium",children:"Use wrapper functions for performance"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 ml-8",children:"When dealing with large lists or frequent re-renders"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center",children:"✓"}),e.jsx("span",{className:"font-medium",children:"Consider data attributes"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 ml-8",children:"When you need to extract data from DOM elements"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center",children:"✓"}),e.jsx("span",{className:"font-medium",children:"Use higher-order functions"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 ml-8",children:"For cross-cutting concerns like logging or analytics"})]})]})]})]}),e.jsxs("div",{className:`bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 \r
                     rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700\r
                     hover:shadow-xl transition-all duration-300 animate-[fadeSlideUp_0.8s_ease-out_0.8s_both]`,style:{animation:"fadeSlideUp 0.8s ease-out 0.8s both"},children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white flex items-center",children:[e.jsx("span",{className:"bg-gray-800 dark:bg-gray-700 text-white rounded-lg p-2 mr-3 text-xl",children:"📝"}),"Event History"]}),e.jsx("button",{onClick:U,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors",children:"Reset All"})]}),e.jsx("div",{className:"space-y-3",children:j.length===0?e.jsx("div",{className:"text-center py-8 text-gray-500",children:"No events yet. Click some buttons to see the history!"}):j.map(t=>e.jsxs("div",{className:"history-entry p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:i("w-2 h-2 rounded-full",t.type==="inline-arrow"&&"bg-blue-500",t.type==="wrapper"&&"bg-green-500",t.type==="data-attr"&&"bg-purple-500",t.type==="logging"&&"bg-yellow-500",t.type==="counter"&&"bg-pink-500",t.type==="calculator"&&"bg-cyan-500",t.type==="todo"&&"bg-orange-500",t.type==="cart"&&"bg-red-500",t.type==="form"&&"bg-indigo-500",t.type==="custom"&&"bg-teal-500",t.type==="reset"&&"bg-gray-500")}),e.jsx("div",{className:"font-medium",children:t.message})]}),e.jsx("div",{className:"text-sm text-gray-500",children:t.timestamp})]}),e.jsxs("div",{className:"text-xs text-gray-400 mt-1 ml-5",children:["Type: ",t.type]})]},t.id))})]}),e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-gray-600 dark:text-gray-400 mb-2",children:"Pass arguments confidently to your React event handlers!"}),e.jsx("div",{className:"text-sm text-gray-500",children:"Patterns demonstrated: Inline Arrow Functions • Wrapper Functions • Data Attributes • Higher-Order Functions • Switch Statement Handlers • Form Submission • Custom Events"})]})]})]})};export{F as default};
