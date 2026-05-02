import{r as s,j as c}from"./index-COd1BgDP.js";import{J as p}from"./JavaScriptProjectAnswerTemplate-5B2AUNeh.js";import"./CodeBlock-D48gpafx.js";import"./prism-XSjjC35C.js";import"./prism-json-D0UlpdKh.js";import"./file-code-CL2zX7Xy.js";import"./copy-CkJm4ude.js";import"./download-XOywrey6.js";import"./play-jI2NV5Sw.js";import"./graduation-cap-CooAqweA.js";import"./code-DRxI1sx2.js";import"./eye-off-sWV9Qimf.js";import"./eye-D4RF8Ay-.js";import"./lightbulb-DVwx0Tcu.js";import"./terminal-BeYziq34.js";const f=`// Function Declarations vs Function Expressions\r
console.log(declaration()); // Works due to hoisting\r
\r
function declaration() {\r
    return 'Function declaration works!';\r
}\r
\r
// console.log(expression()); // TypeError: expression is not a function\r
const expression = function() {\r
    return 'Function expression works only after assignment';\r
};\r
\r
console.log(expression()); // Now it works\r
`,m=`// Parameters, Arguments, and Default Parameters\r
function greet(name = 'Guest') {\r
    return \`Hello, \${name}\`;\r
}\r
\r
console.log(greet('Alice')); // Hello, Alice\r
console.log(greet());        // Hello, Guest\r
`,g=`// Return Values and Early Returns\r
function divide(a, b) {\r
    if (b === 0) {\r
        return 'Error: division by zero'; // early return\r
    }\r
    return a / b;\r
}\r
\r
console.log(divide(10, 5)); // 2\r
console.log(divide(10, 0)); // Error: division by zero\r
`,h=`// Function Scope: Local vs Global Variables\r
let globalVar = 'global';\r
\r
function testScope() {\r
    let localVar = 'local';\r
    console.log('Inside function:', globalVar, localVar);\r
}\r
\r
testScope();\r
// console.log(localVar); // ReferenceError: localVar is not defined\r
`,b=`// Arrow Functions and Concise Syntax\r
// Traditional function\r
function add(a, b) {\r
    return a + b;\r
}\r
\r
// Arrow function\r
const addArrow = (a, b) => a + b;\r
\r
console.log(add(2, 3), addArrow(2, 3)); // 5 5\r
\r
// Lexical this\r
const obj = {\r
    name: 'Arrow',\r
    traditional: function() {\r
        console.log('Traditional this:', this.name);\r
    },\r
    arrow: () => {\r
        console.log('Arrow this:', this.name);\r
    }\r
};\r
obj.traditional(); // Arrow\r
obj.arrow();       // undefined (or global)\r
`,x=`// Pure Functions vs Side Effects\r
let counter = 0;\r
\r
// Impure function: modifies external state\r
function impure() {\r
    counter++;\r
    return counter;\r
}\r
\r
// Pure function: no side effects, same input => same output\r
function pure(a, b) {\r
    return a + b;\r
}\r
\r
console.log(pure(1, 2)); // 3\r
console.log(pure(1, 2)); // 3\r
console.log(impure());   // 1\r
console.log(impure());   // 2\r
`,w=`// Function Hoisting\r
hoisted(); // Works\r
\r
function hoisted() {\r
    console.log('Hoisted!');\r
}\r
\r
// notHoisted(); // TypeError: notHoisted is not a function\r
var notHoisted = function() {\r
    console.log('Not hoisted');\r
};\r
notHoisted(); // Works now\r
`,y=`// Immediately Invoked Function Expressions (IIFE)\r
(function() {\r
    var privateVar = 'I am private';\r
    console.log('IIFE executed:', privateVar);\r
})();\r
\r
// privateVar is not accessible here\r
// console.log(privateVar); // ReferenceError\r
`,F=`// Callback Functions\r
function processUserInput(callback) {\r
    const name = 'John';\r
    callback(name);\r
}\r
\r
processUserInput(function(name) {\r
    console.log(\`Hello, \${name}\`);\r
});\r
`,v=`// Higher-Order Functions\r
function applyTwice(f, x) {\r
    return f(f(x));\r
}\r
\r
const double = n => n * 2;\r
console.log(applyTwice(double, 3)); // 12 (3*2*2)\r
`,_=`// Function Rest Parameters\r
function sum(...numbers) {\r
    return numbers.reduce((total, num) => total + num, 0);\r
}\r
\r
console.log(sum(1, 2, 3));       // 6\r
console.log(sum(10, 20, 30, 40)); // 100\r
`,C=`// Function Spread Operator\r
const numbers = [5, 10, 15, 20];\r
const max = Math.max(...numbers);\r
console.log(max); // 20\r
`,j=`// Closure Basics\r
function outer(x) {\r
    return function inner(y) {\r
        return x + y;\r
    };\r
}\r
\r
const add5 = outer(5);\r
console.log(add5(3)); // 8\r
console.log(outer(10)(2)); // 12\r
`,T=`// Function Factories (Returning Functions)\r
function multiplier(factor) {\r
    return function(x) {\r
        return x * factor;\r
    };\r
}\r
\r
const double = multiplier(2);\r
const triple = multiplier(3);\r
\r
console.log(double(5)); // 10\r
console.log(triple(5)); // 15\r
`,U=`// Recursion – Factorial\r
function factorial(n) {\r
    if (n <= 1) return 1;\r
    return n * factorial(n - 1);\r
}\r
\r
console.log(factorial(5)); // 120\r
console.log(factorial(0)); // 1\r
`,N=`// Recursion – Fibonacci\r
function fib(n) {\r
    if (n <= 1) return n;\r
    return fib(n - 1) + fib(n - 2);\r
}\r
\r
console.log(fib(6));  // 8\r
console.log(fib(10)); // 55\r
// Note: This is inefficient for large n; memoization would help.\r
`,E=`// Function Methods: call, apply, bind\r
function greet(greeting) {\r
    console.log(\`\${greeting}, \${this.name}\`);\r
}\r
\r
const person = { name: 'Alice' };\r
\r
// call\r
greet.call(person, 'Hello'); // Hello, Alice\r
\r
// apply\r
greet.apply(person, ['Hi']); // Hi, Alice\r
\r
// bind\r
const boundGreet = greet.bind(person, 'Hey');\r
boundGreet(); // Hey, Alice\r
`,I=`// Function Arguments Object\r
function sumAll() {\r
    let total = 0;\r
    for (let i = 0; i < arguments.length; i++) {\r
        total += arguments[i];\r
    }\r
    return total;\r
}\r
\r
console.log(sumAll(1, 2, 3, 4)); // 10\r
console.log(sumAll(5, 10));      // 15\r
`,O=`// Default Parameters with Object Destructuring\r
function configure({ port = 3000, host = 'localhost' } = {}) {\r
    console.log(\`Server running on \${host}:\${port}\`);\r
}\r
\r
configure();               // Server running on localhost:3000\r
configure({ port: 8080 }); // Server running on localhost:8080\r
configure({ host: 'example.com', port: 80 }); // Server running on example.com:80\r
`,k=`// Function Composition\r
const compose = (f, g) => x => f(g(x));\r
\r
const addOne = x => x + 1;\r
const double = x => x * 2;\r
\r
const addOneThenDouble = compose(double, addOne);\r
console.log(addOneThenDouble(3)); // (3+1)*2 = 8\r
`,A=`// Memoization (Caching)\r
function memoize(fn) {\r
    const cache = {};\r
    return function(...args) {\r
        const key = JSON.stringify(args);\r
        if (cache[key]) {\r
            console.log('Returning from cache');\r
            return cache[key];\r
        }\r
        const result = fn(...args);\r
        cache[key] = result;\r
        return result;\r
    };\r
}\r
\r
const fib = memoize(function(n) {\r
    if (n <= 1) return n;\r
    return fib(n - 1) + fib(n - 2);\r
});\r
\r
console.log(fib(40)); // fast due to memoization\r
`,S=`// Currying\r
const curry = fn => a => b => fn(a, b);\r
\r
const add = (a, b) => a + b;\r
const curriedAdd = curry(add);\r
\r
console.log(curriedAdd(5)(3)); // 8\r
const add5 = curriedAdd(5);\r
console.log(add5(10)); // 15\r
`,P=`// Async Functions (Promise basics)\r
async function fetchData() {\r
    return new Promise(resolve => {\r
        setTimeout(() => resolve('Data received'), 1000);\r
    });\r
}\r
\r
async function displayData() {\r
    const data = await fetchData();\r
    console.log(data);\r
}\r
\r
displayData(); // Data received after 1 second\r
`,D=`// setTimeout and setInterval with Functions\r
setTimeout(() => {\r
    console.log('Timeout executed after 2 seconds');\r
}, 2000);\r
\r
let count = 0;\r
const interval = setInterval(() => {\r
    count++;\r
    console.log(\`Interval count: \${count}\`);\r
    if (count === 3) clearInterval(interval);\r
}, 1000);\r
`,H=`// Function Binding in Event Handlers\r
class Button {\r
    constructor(label) {\r
        this.label = label;\r
    }\r
\r
    handleClick() {\r
        console.log(\`Button \${this.label} clicked\`);\r
    }\r
}\r
\r
const btn = new Button('Submit');\r
// Simulate a click handler that loses context\r
setTimeout(btn.handleClick, 1000); // Button undefined clicked\r
// Bind fixes it\r
setTimeout(btn.handleClick.bind(btn), 1000); // Button Submit clicked\r
`,z=`// Function Generators (Intro)\r
function* idGenerator() {\r
    let id = 1;\r
    while (true) {\r
        yield id++;\r
    }\r
}\r
\r
const gen = idGenerator();\r
console.log(gen.next().value); // 1\r
console.log(gen.next().value); // 2\r
console.log(gen.next().value); // 3\r
`,R=`// Throttling and Debouncing (Concept)\r
function throttle(fn, delay) {\r
    let lastCall = 0;\r
    return function(...args) {\r
        const now = Date.now();\r
        if (now - lastCall >= delay) {\r
            lastCall = now;\r
            fn(...args);\r
        }\r
    };\r
}\r
\r
function debounce(fn, delay) {\r
    let timer;\r
    return function(...args) {\r
        clearTimeout(timer);\r
        timer = setTimeout(() => fn(...args), delay);\r
    };\r
}\r
\r
// Simulate rapid calls\r
const log = throttle(() => console.log('Throttled'), 1000);\r
const logDebounced = debounce(() => console.log('Debounced'), 1000);\r
\r
setInterval(log, 200); // logs at most once per second\r
setInterval(logDebounced, 200); // logs only after 1 second of no calls\r
setTimeout(() => clearInterval(interval1), 5000); // demo stop\r
`,B=`// Function with Rest and Spread Combined\r
function logAll(...args) {\r
    console.log(...args);\r
}\r
\r
logAll(1, 2, 3, 4); // 1 2 3 4\r
`,V=`// Error Handling in Functions (try/catch)\r
function safeParse(jsonString) {\r
    try {\r
        return JSON.parse(jsonString);\r
    } catch (error) {\r
        console.log('Parsing error:', error.message);\r
        return null;\r
    }\r
}\r
\r
console.log(safeParse('{"name":"Alice"}')); // { name: 'Alice' }\r
console.log(safeParse('invalid json'));     // null\r
`,G=`// Comprehensive Function Practice: Utility Library\r
const utils = (function() {\r
    // Compose\r
    const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);\r
\r
    // Memoize\r
    const memoize = fn => {\r
        const cache = {};\r
        return (...args) => {\r
            const key = JSON.stringify(args);\r
            if (cache[key]) return cache[key];\r
            const result = fn(...args);\r
            cache[key] = result;\r
            return result;\r
        };\r
    };\r
\r
    // Throttle\r
    const throttle = (fn, delay) => {\r
        let lastCall = 0;\r
        return (...args) => {\r
            const now = Date.now();\r
            if (now - lastCall >= delay) {\r
                lastCall = now;\r
                fn(...args);\r
            }\r
        };\r
    };\r
\r
    // Debounce\r
    const debounce = (fn, delay) => {\r
        let timer;\r
        return (...args) => {\r
            clearTimeout(timer);\r
            timer = setTimeout(() => fn(...args), delay);\r
        };\r
    };\r
\r
    return { compose, memoize, throttle, debounce };\r
})();\r
\r
// Example usage\r
const add = a => b => a + b;\r
const add5 = add(5);\r
const double = x => x * 2;\r
const add5ThenDouble = utils.compose(double, add5);\r
console.log(add5ThenDouble(3)); // (3+5)*2 = 16\r
\r
const factorial = utils.memoize(n => n <= 1 ? 1 : n * factorial(n-1));\r
console.log(factorial(5)); // 120, cached for future calls\r
\r
const log = utils.throttle(() => console.log('Throttled'), 1000);\r
log(); // will run at most once per second\r
`,J="JavaScript Functions – 30 Practical Projects",M="Web Development (JavaScript)",$="General",L=["Browser Console","VS Code","Any modern browser"],q={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},W=JSON.parse('[{"projectId":"FUNC001","title":"Function Declarations vs Function Expressions","difficulty":"Beginner","description":"Compare hoisting behavior of function declarations and function expressions.","exampleText":"console.log(declaration()); function declaration() { return \'Hoisted!\'; }\\nconst expression = function() { return \'Not hoisted!\'; };","exampleOutput":"Hoisted!; TypeError: expression is not a function","answerFile":"./answers/FUNC001.js","learningOutcome":"Understanding hoisting and the difference between declaration and expression.","logicExplanation":"Function declarations are hoisted and can be called before definition, while function expressions are not hoisted and are assigned to variables. Declarations are useful for global functions, expressions are often used as callbacks.","codeExplanation":"The code shows a function declaration (hoisted) and a function expression (assigned to a variable). It demonstrates that the declaration can be called above its definition, while the expression cannot."},{"projectId":"FUNC002","title":"Parameters, Arguments, and Default Parameters","difficulty":"Beginner","description":"Demonstrate function parameters, passing arguments, and default parameter values.","exampleText":"function greet(name = \'Guest\') { return `Hello, ${name}`; }","exampleOutput":"Hello, Alice; Hello, Guest","answerFile":"./answers/FUNC002.js","learningOutcome":"Using parameters and default values.","logicExplanation":"Parameters are placeholders in function definition; arguments are actual values passed. Default parameters allow setting fallback values if an argument is omitted or undefined.","codeExplanation":"The script defines a function with parameters, uses default values, and shows how arguments are matched to parameters."},{"projectId":"FUNC003","title":"Return Values and Early Returns","difficulty":"Beginner","description":"Show how return values work and how early returns can simplify logic.","exampleText":"function divide(a, b) { if (b === 0) return \'Error: division by zero\'; return a / b; }","exampleOutput":"2; Error: division by zero","answerFile":"./answers/FUNC003.js","learningOutcome":"Returning values and using early returns.","logicExplanation":"Functions return values using `return`. If no `return` is present, the function returns `undefined`. Early returns can exit a function early based on conditions, avoiding nested logic.","codeExplanation":"The code has a function that uses early returns to handle invalid inputs and returns a computed result otherwise."},{"projectId":"FUNC004","title":"Function Scope: Local vs Global Variables","difficulty":"Beginner","description":"Illustrate the difference between global and local variables inside a function.","exampleText":"let globalVar = \'global\';\\nfunction testScope() { let localVar = \'local\'; console.log(globalVar, localVar); }","exampleOutput":"global local","answerFile":"./answers/FUNC004.js","learningOutcome":"Understanding variable scope.","logicExplanation":"Variables declared inside a function with `var`, `let`, or `const` are local to that function. Global variables are accessible everywhere, but local variables shadow globals within the function scope.","codeExplanation":"The script demonstrates a global variable and a local variable with the same name, showing how the local shadows the global."},{"projectId":"FUNC005","title":"Arrow Functions and Concise Syntax","difficulty":"Beginner","description":"Compare traditional functions with arrow functions, focusing on syntax and this binding.","exampleText":"const add = (a, b) => a + b;\\nconst obj = { name: \'Arrow\', method: () => this.name };","exampleOutput":"add(2,3) -> 5; obj.method() -> undefined (or global)","answerFile":"./answers/FUNC005.js","learningOutcome":"Arrow function syntax and lexical this.","logicExplanation":"Arrow functions provide a shorter syntax, do not have their own `this`, and are not hoisted. They are ideal for short callbacks and when lexical `this` is needed.","codeExplanation":"The code compares a traditional function with an arrow function. It shows the syntax differences and how `this` behaves."},{"projectId":"FUNC006","title":"Pure Functions vs Side Effects","difficulty":"Intermediate","description":"Define pure and impure functions, and understand the concept of side effects.","exampleText":"let counter = 0;\\nfunction impure() { counter++; }\\nfunction pure(a, b) { return a + b; }","exampleOutput":"pure(1,2) always 3; impure modifies external state.","answerFile":"./answers/FUNC006.js","learningOutcome":"Identifying pure functions and side effects.","logicExplanation":"Pure functions always return the same output for the same input and cause no side effects (e.g., no mutation of external state). Impure functions may modify variables outside their scope or rely on external state.","codeExplanation":"The script defines a pure function that adds two numbers, and an impure function that modifies a global variable."},{"projectId":"FUNC007","title":"Function Hoisting","difficulty":"Beginner","description":"Explore how function declarations are hoisted, while expressions are not.","exampleText":"hoisted(); function hoisted() { console.log(\'Works\'); }\\n// notHoisted(); // Error\\nvar notHoisted = function() {};","exampleOutput":"Works; Error if notHoisted called before assignment","answerFile":"./answers/FUNC007.js","learningOutcome":"Hoisting behavior of functions.","logicExplanation":"Hoisting moves function declarations to the top of their scope. Function expressions are not hoisted; only the variable declaration is hoisted, but the assignment remains in place.","codeExplanation":"The code calls a function declared later (works) and attempts to call a function expression before its assignment (fails)."},{"projectId":"FUNC008","title":"Immediately Invoked Function Expressions (IIFE)","difficulty":"Intermediate","description":"Create and execute an IIFE to encapsulate code and avoid polluting global scope.","exampleText":"(function() { var private = 10; console.log(private); })();","exampleOutput":"10; private is not accessible outside","answerFile":"./answers/FUNC008.js","learningOutcome":"Using IIFE for scope isolation.","logicExplanation":"IIFEs are functions that are defined and executed immediately. They create a new scope, avoiding polluting the global namespace, and are often used for module patterns.","codeExplanation":"The script creates an IIFE that executes instantly and returns a value, and shows how variables inside are not accessible globally."},{"projectId":"FUNC009","title":"Callback Functions","difficulty":"Intermediate","description":"Pass a function as an argument to another function and execute it later.","exampleText":"function processUserInput(callback) { callback(\'John\'); }","exampleOutput":"Hello, John","answerFile":"./answers/FUNC009.js","learningOutcome":"Understanding callbacks.","logicExplanation":"Callbacks are functions passed as arguments to other functions, to be executed later. They are fundamental to asynchronous programming and higher-order functions.","codeExplanation":"The code defines a function that accepts a callback and invokes it, demonstrating both named and anonymous callbacks."},{"projectId":"FUNC010","title":"Higher-Order Functions","difficulty":"Intermediate","description":"Create a function that takes another function as an argument or returns a function.","exampleText":"function applyTwice(f, x) { return f(f(x)); }","exampleOutput":"applyTwice(n => n*2, 3) -> 12","answerFile":"./answers/FUNC010.js","learningOutcome":"Higher-order functions concept.","logicExplanation":"Higher-order functions are functions that take other functions as arguments or return a function. Array methods like `map`, `filter`, and `reduce` are common examples.","codeExplanation":"The script creates a custom higher-order function that accepts a function and applies it to each element of an array."},{"projectId":"FUNC011","title":"Function Rest Parameters","difficulty":"Intermediate","description":"Use rest parameters to handle an indefinite number of arguments as an array.","exampleText":"function sum(...numbers) { return numbers.reduce((a,b) => a+b, 0); }","exampleOutput":"sum(1,2,3) -> 6","answerFile":"./answers/FUNC011.js","learningOutcome":"Rest parameters.","logicExplanation":"Rest parameters allow a function to accept an indefinite number of arguments as an array. They are denoted by `...` before the parameter.","codeExplanation":"The code defines a function that uses rest parameters to sum any number of arguments, showing the array conversion."},{"projectId":"FUNC012","title":"Function Spread Operator","difficulty":"Intermediate","description":"Spread array elements as arguments to a function.","exampleText":"const nums = [1,2,3]; Math.max(...nums);","exampleOutput":"3","answerFile":"./answers/FUNC012.js","learningOutcome":"Spread operator with function calls.","logicExplanation":"The spread operator (`...`) expands an iterable (like an array) into individual arguments. It is useful for passing array elements to functions that expect separate parameters.","codeExplanation":"The script uses spread to pass array elements to a function that normally takes separate arguments."},{"projectId":"FUNC013","title":"Closure Basics","difficulty":"Advanced","description":"Create a closure where an inner function retains access to outer variables.","exampleText":"function outer(x) { return function inner(y) { return x + y; }; }","exampleOutput":"outer(5)(3) -> 8","answerFile":"./answers/FUNC013.js","learningOutcome":"Understanding closures.","logicExplanation":"A closure is formed when a function retains access to variables from its outer scope even after the outer function has returned. It\'s used for data privacy and creating factories.","codeExplanation":"The code creates a function that returns an inner function, and the inner function remembers the outer variable, demonstrating closure."},{"projectId":"FUNC014","title":"Function Factories (Returning Functions)","difficulty":"Advanced","description":"Write a function that returns another function, often used to create customized functions.","exampleText":"function multiplier(factor) { return function(x) { return x * factor; }; }","exampleOutput":"double(5) -> 10","answerFile":"./answers/FUNC014.js","learningOutcome":"Factory functions and closures.","logicExplanation":"Function factories are functions that return other functions, often used to create customized functions with preset parameters.","codeExplanation":"The script defines a multiplier factory that takes a factor and returns a function that multiplies a number by that factor."},{"projectId":"FUNC015","title":"Recursion – Factorial","difficulty":"Intermediate","description":"Implement factorial using recursion.","exampleText":"function factorial(n) { return n <= 1 ? 1 : n * factorial(n-1); }","exampleOutput":"factorial(5) -> 120","answerFile":"./answers/FUNC015.js","learningOutcome":"Recursive thinking.","logicExplanation":"Recursion is when a function calls itself. The factorial function (n! = n * (n-1)!) is a classic recursive example.","codeExplanation":"The code implements factorial recursively, with a base case for 0 and 1, and shows the call stack."},{"projectId":"FUNC016","title":"Recursion – Fibonacci","difficulty":"Intermediate","description":"Compute Fibonacci numbers recursively.","exampleText":"function fib(n) { return n <= 1 ? n : fib(n-1) + fib(n-2); }","exampleOutput":"fib(6) -> 8","answerFile":"./answers/FUNC016.js","learningOutcome":"Recursion with performance considerations.","logicExplanation":"The Fibonacci sequence is defined recursively: fib(n) = fib(n-1) + fib(n-2). Recursion can be expensive without memoization.","codeExplanation":"The script computes Fibonacci numbers recursively and notes performance issues with large n."},{"projectId":"FUNC017","title":"Function Methods: call, apply, bind","difficulty":"Advanced","description":"Use call, apply, and bind to control the value of this and arguments.","exampleText":"function greet() { console.log(this.name); }\\nconst obj = { name: \'Alice\' };","exampleOutput":"Alice (via call); Alice (via bind)","answerFile":"./answers/FUNC017.js","learningOutcome":"Explicit this binding.","logicExplanation":"`call` and `apply` invoke a function with a specified `this` and arguments. `bind` returns a new function with a bound `this`.","codeExplanation":"The code demonstrates using `call` and `apply` to invoke a function with different contexts, and uses `bind` to create a bound function."},{"projectId":"FUNC018","title":"Function Arguments Object","difficulty":"Intermediate","description":"Access the arguments object inside a regular function (non-arrow).","exampleText":"function sum() { return Array.from(arguments).reduce((a,b) => a+b, 0); }","exampleOutput":"sum(1,2,3) -> 6","answerFile":"./answers/FUNC018.js","learningOutcome":"Arguments object and its array-like nature.","logicExplanation":"The `arguments` object (available in non-arrow functions) is an array-like object containing the passed arguments. It\'s often replaced by rest parameters in modern code.","codeExplanation":"The script uses the `arguments` object to sum any number of arguments, showing its array-like nature."},{"projectId":"FUNC019","title":"Default Parameters with Object Destructuring","difficulty":"Intermediate","description":"Combine default parameters and object destructuring for flexible options.","exampleText":"function configure({ port = 3000, host = \'localhost\' } = {}) { console.log(port, host); }","exampleOutput":"3000 localhost (defaults)","answerFile":"./answers/FUNC019.js","learningOutcome":"Destructuring defaults.","logicExplanation":"Default parameters can be combined with object destructuring to provide default values for properties, making function calls more flexible.","codeExplanation":"The function accepts an options object with destructured properties and default values, allowing optional parameters."},{"projectId":"FUNC020","title":"Function Composition","difficulty":"Advanced","description":"Combine multiple functions into one using composition.","exampleText":"const compose = (f, g) => x => f(g(x));","exampleOutput":"compose(x => x*2, x => x+1)(5) -> 12","answerFile":"./answers/FUNC020.js","learningOutcome":"Function composition.","logicExplanation":"Function composition is combining multiple functions into one, where the output of one becomes the input of another. It\'s a functional programming technique.","codeExplanation":"The script defines a compose function that takes two functions and returns a new function that applies them in sequence."},{"projectId":"FUNC021","title":"Memoization (Caching)","difficulty":"Advanced","description":"Cache function results to avoid recalculating.","exampleText":"function memoize(fn) { const cache = {}; return function(...args) { const key = JSON.stringify(args); if (cache[key]) return cache[key]; return cache[key] = fn(...args); }; }","exampleOutput":"Memoized Fibonacci runs faster","answerFile":"./answers/FUNC021.js","learningOutcome":"Optimization with memoization.","logicExplanation":"Memoization caches function results based on input arguments to avoid redundant computations. It\'s useful for expensive recursive functions.","codeExplanation":"The code adds memoization to the Fibonacci function, drastically improving performance for repeated calls."},{"projectId":"FUNC022","title":"Currying","difficulty":"Advanced","description":"Transform a function that takes multiple arguments into a sequence of unary functions.","exampleText":"const curry = (fn) => (a) => (b) => fn(a,b);","exampleOutput":"curry((a,b) => a+b)(5)(3) -> 8","answerFile":"./answers/FUNC022.js","learningOutcome":"Currying concept.","logicExplanation":"Currying transforms a function that takes multiple arguments into a sequence of functions each taking a single argument.","codeExplanation":"The script implements a curried version of a multiplication function and shows how it can be partially applied."},{"projectId":"FUNC023","title":"Async Functions (Promise basics)","difficulty":"Advanced","description":"Use async/await to handle asynchronous operations.","exampleText":"async function fetchData() { return new Promise(resolve => setTimeout(() => resolve(\'data\'), 1000)); }","exampleOutput":"data after 1 second","answerFile":"./answers/FUNC023.js","learningOutcome":"Async/await with Promises.","logicExplanation":"Async functions return a Promise and allow using `await` to pause execution until a Promise resolves. They simplify asynchronous code.","codeExplanation":"The code defines an async function that simulates fetching data with `setTimeout` and returns a Promise, then uses `await` to get the result."},{"projectId":"FUNC024","title":"setTimeout and setInterval with Functions","difficulty":"Intermediate","description":"Schedule function execution with timers.","exampleText":"setTimeout(() => console.log(\'timeout\'), 1000);","exampleOutput":"timeout after 1 sec","answerFile":"./answers/FUNC024.js","learningOutcome":"Timers and scheduling.","logicExplanation":"`setTimeout` and `setInterval` schedule function execution after a delay. They are used for timers, animations, and periodic tasks.","codeExplanation":"The script shows a timeout that logs after 2 seconds and an interval that increments a counter every second, then clears it."},{"projectId":"FUNC025","title":"Function Binding in Event Handlers","difficulty":"Intermediate","description":"Preserve this context when attaching event handlers.","exampleText":"button.addEventListener(\'click\', this.handleClick.bind(this));","exampleOutput":"this correctly refers to the component","answerFile":"./answers/FUNC025.js","learningOutcome":"Binding event handlers.","logicExplanation":"When event handlers are passed as callbacks, the value of `this` may change. Using `bind` ensures the correct context.","codeExplanation":"The code simulates a button click handler, showing how `this` would be lost and how `bind` preserves it."},{"projectId":"FUNC026","title":"Function Generators (Intro)","difficulty":"Advanced","description":"Create generator functions that yield values lazily.","exampleText":"function* idGenerator() { let id = 1; while(true) { yield id++; } }","exampleOutput":"1, 2, 3, ...","answerFile":"./answers/FUNC026.js","learningOutcome":"Generator functions.","logicExplanation":"Generator functions (`function*`) can yield multiple values over time and pause execution, producing an iterator. They are used for lazy sequences and async flows.","codeExplanation":"The script defines a generator that yields numbers 1 to 3, and iterates over it using `for...of`."},{"projectId":"FUNC027","title":"Throttling and Debouncing (Concept)","difficulty":"Advanced","description":"Implement throttle and debounce functions to limit execution frequency.","exampleText":"function throttle(fn, delay) { let lastCall = 0; return function(...args) { ... }; }","exampleOutput":"Logs at most once per delay","answerFile":"./answers/FUNC027.js","learningOutcome":"Performance optimization techniques.","logicExplanation":"Throttling limits how often a function can be called (e.g., once per 100ms), while debouncing delays execution until after a pause.","codeExplanation":"The code provides simple implementations of throttle and debounce, and demonstrates their effect with repeated calls."},{"projectId":"FUNC028","title":"Function with Rest and Spread Combined","difficulty":"Intermediate","description":"Use rest to collect arguments and spread to pass them to another function.","exampleText":"function logAll(...args) { console.log(...args); }","exampleOutput":"Logs all arguments individually","answerFile":"./answers/FUNC028.js","learningOutcome":"Combining rest and spread.","logicExplanation":"Rest and spread can be combined to accept a variable number of arguments and then pass them to another function.","codeExplanation":"The script defines a function that uses rest to collect arguments, then uses spread to call another function with them."},{"projectId":"FUNC029","title":"Error Handling in Functions (try/catch)","difficulty":"Intermediate","description":"Use try/catch to handle errors gracefully inside functions.","exampleText":"function safeParse(json) { try { return JSON.parse(json); } catch { return null; } }","exampleOutput":"null on invalid JSON","answerFile":"./answers/FUNC029.js","learningOutcome":"Error handling.","logicExplanation":"`try...catch` blocks allow handling errors gracefully inside functions, preventing crashes and enabling recovery.","codeExplanation":"The function attempts a risky operation (like parsing invalid JSON) and catches the error, returning a default value instead."},{"projectId":"FUNC030","title":"Comprehensive Function Practice: Utility Library","difficulty":"Advanced","description":"Build a small utility library using many function concepts: composition, memoization, throttling, etc.","exampleText":"const utils = { compose, memoize, throttle, ... }","exampleOutput":"A working set of utility functions.","answerFile":"./answers/FUNC030.js","learningOutcome":"Integrating multiple function concepts.","logicExplanation":"This comprehensive project combines multiple function concepts into a utility library. It includes pure functions, closures, higher-order functions, error handling, and more, demonstrating real-world usage.","codeExplanation":"The code defines a set of utility functions (e.g., compose, memoize, throttle) and uses them to build a small application, showcasing integration of various function features."}]'),l={projectCategory:J,subject:M,board:$,class:"Beginner / Intermediate / Advanced",tools:L,institute:q,projects:W};function ue(){const[t,u]=s.useState(null);return s.useEffect(()=>{const r=Object.assign({"./topic8_files/answers/FUNC001.js":f,"./topic8_files/answers/FUNC002.js":m,"./topic8_files/answers/FUNC003.js":g,"./topic8_files/answers/FUNC004.js":h,"./topic8_files/answers/FUNC005.js":b,"./topic8_files/answers/FUNC006.js":x,"./topic8_files/answers/FUNC007.js":w,"./topic8_files/answers/FUNC008.js":y,"./topic8_files/answers/FUNC009.js":F,"./topic8_files/answers/FUNC010.js":v,"./topic8_files/answers/FUNC011.js":_,"./topic8_files/answers/FUNC012.js":C,"./topic8_files/answers/FUNC013.js":j,"./topic8_files/answers/FUNC014.js":T,"./topic8_files/answers/FUNC015.js":U,"./topic8_files/answers/FUNC016.js":N,"./topic8_files/answers/FUNC017.js":E,"./topic8_files/answers/FUNC018.js":I,"./topic8_files/answers/FUNC019.js":O,"./topic8_files/answers/FUNC020.js":k,"./topic8_files/answers/FUNC021.js":A,"./topic8_files/answers/FUNC022.js":S,"./topic8_files/answers/FUNC023.js":P,"./topic8_files/answers/FUNC024.js":D,"./topic8_files/answers/FUNC025.js":H,"./topic8_files/answers/FUNC026.js":z,"./topic8_files/answers/FUNC027.js":R,"./topic8_files/answers/FUNC028.js":B,"./topic8_files/answers/FUNC029.js":V,"./topic8_files/answers/FUNC030.js":G}),o={};Object.keys(r).forEach(e=>{const a=e.split("/").pop();o[a]=r[e]});const d=l.projects.map(e=>{const n=(e.answerFile||"").split("/").pop(),i=o[n];return i||console.warn(`⚠ Missing code file: ${n}`),{...e,answer:i||`// File "${n}" not found in answers folder`}});u({...l,projects:d})},[]),t?c.jsx(p,{data:t}):c.jsx("div",{className:"p-6 text-slate-400",children:"Loading projects..."})}export{ue as default};
