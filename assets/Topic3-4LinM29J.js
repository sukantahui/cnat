import{r as t,j as n}from"./index-Ci-Q4Ner.js";import{Q as l}from"./QuestionPaperTemplate-Bv-7neRw.js";import"./PrintButton-BBi_CW9k.js";const c="JS-BASICS-SET-01",u="JavaScript Fundamentals Question Paper",d="45 Minutes",p=20,m=[{section:"A",type:"Very Short Answer (1 Mark Each)",marksPerQuestion:1,totalQuestions:5,questions:[{q:"What is JavaScript?",marks:1,answer:"JavaScript is a programming language used to create dynamic and interactive content on web pages."},{q:"Where can JavaScript run?",marks:1,answer:"JavaScript runs in browsers, servers (Node.js), and tools like VS Code."},{q:"What does console.log() do?",marks:1,answer:"console.log() prints output or messages to the browser console for debugging."},{q:"What is the difference between let and const?",marks:1,answer:"let allows reassignment, while const does not allow reassignment after initialization."},{q:"What is typeof operator?",marks:1,answer:"typeof is used to check the data type of a variable."}]},{section:"B",type:"Short Answer (2 Marks Each)",marksPerQuestion:2,totalQuestions:5,questions:[{q:"Explain how HTML, CSS, and JavaScript work together.",marks:2,answer:"HTML provides structure, CSS provides styling, and JavaScript adds interactivity to web pages."},{q:"What are primitive data types in JavaScript?",marks:2,answer:"Primitive data types include number, string, boolean, null, undefined, symbol, and bigint."},{q:"Differentiate between == and === operators.",marks:2,answer:"== compares values with type conversion, while === compares both value and type strictly."},{q:"What are logical operators?",marks:2,answer:"Logical operators (&&, ||, !) are used to combine or invert boolean conditions."},{q:"What are truthy and falsy values?",marks:2,answer:"Truthy values evaluate to true, while falsy values (false, 0, '', null, undefined, NaN) evaluate to false."}]},{section:"C",type:"Medium Answer (5 Marks Each)",marksPerQuestion:5,totalQuestions:2,questions:[{q:"Write a JavaScript program demonstrating variables, data types, operators, and type conversion.",marks:5,answer:`\`\`\`javascript
let a = 10;
let b = '20';

// Type conversion
let c = Number(b);

// Operators
let sum = a + c;
let isEqual = (a === c);

console.log('Sum:', sum);
console.log('Strict Equal:', isEqual);
\`\`\``},{q:"Write a program using if-else and switch to display grade based on marks.",marks:5,answer:`\`\`\`javascript
let marks = 85;
let grade;

if(marks >= 90) grade = 'A';
else if(marks >= 80) grade = 'B';
else grade = 'C';

switch(grade) {
    case 'A': console.log('Excellent'); break;
    case 'B': console.log('Good'); break;
    default: console.log('Needs Improvement');
}
\`\`\``}]},{section:"D",type:"Long Answer (5 Marks)",marksPerQuestion:5,totalQuestions:1,questions:[{q:`Write a JavaScript program using loops and functions to:
1. Calculate factorial of a number
2. Print multiplication table
3. Use a function to return result`,marks:5,answer:`\`\`\`javascript
function factorial(n) {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function table(num) {
    for(let i = 1; i <= 10; i++) {
        console.log(num + ' x ' + i + ' = ' + (num * i));
    }
}

console.log('Factorial:', factorial(5));
table(5);
\`\`\``}]}],g={paperId:c,title:u,duration:d,totalMarks:p,sections:m};function f(){const[s,o]=t.useState(!1);t.useEffect(()=>{const e=()=>{const i=localStorage.getItem("token");o(i!==null)};e(),window.addEventListener("storage",e);const a=()=>e();return window.addEventListener("authChange",a),()=>{window.removeEventListener("storage",e),window.removeEventListener("authChange",a)}},[]);const r={name:"Coder & AccoTax",address:"25(10/A) Shibtala Road, PO - N.C. Pukur, Barrackpore, Kol-122",phone:"+91 7003756860",email:"contact@codernaccotax.co.in",website:"www.codernaccotax.co.in"};return n.jsx("div",{className:"p-6 bg-gray-900 min-h-screen",children:n.jsx(l,{data:g,isLoggedIn:s,organizationDetails:r})})}export{f as default};
