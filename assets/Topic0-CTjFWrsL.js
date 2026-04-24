import{r as s,j as c}from"./index-Da242x_v.js";import{J as m}from"./JavaScriptProjectAnswerTemplate-CDdtkD8R.js";import"./CodeBlock-CoUoWn4C.js";import"./prism-zhFG2M2I.js";import"./prism-json-D0UlpdKh.js";import"./file-code-D8UzdDLr.js";import"./copy-CqMdOgMJ.js";import"./download-1HFrR5oJ.js";import"./play-DlYZ_ALK.js";import"./graduation-cap-DwRx0A3F.js";import"./code-oEk3OR7w.js";import"./eye-off-mKmtyIK6.js";import"./eye-BLStUG20.js";import"./lightbulb-59I_h5Rc.js";import"./terminal-DUyAP-Qw.js";const u=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Todo List App</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Todo List App</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Todo List App\r
        // Write your code here\r
        \r
// Todo List with localStorage\r
let todos = JSON.parse(localStorage.getItem('todos') || '[]');\r
const app = document.getElementById('app');\r
function render() {\r
    app.innerHTML = \`\r
        <input type="text" id="todoInput" placeholder="Add new todo">\r
        <button id="addBtn">Add</button>\r
        <ul id="todoList">\r
            \${todos.map((todo, i) => \`\r
                <li>\r
                    <input type="checkbox" \${todo.completed ? 'checked' : ''} data-id="\${i}">\r
                    <span style="\${todo.completed ? 'text-decoration: line-through' : ''}">\${todo.text}</span>\r
                    <button data-id="\${i}" class="delete">Delete</button>\r
                </li>\r
            \`).join('')}\r
        </ul>\r
    \`;\r
    document.getElementById('addBtn').addEventListener('click', () => {\r
        const input = document.getElementById('todoInput');\r
        if (input.value.trim()) {\r
            todos.push({ text: input.value.trim(), completed: false });\r
            localStorage.setItem('todos', JSON.stringify(todos));\r
            render();\r
            input.value = '';\r
        }\r
    });\r
    document.querySelectorAll('#todoList input[type="checkbox"]').forEach(cb => {\r
        cb.addEventListener('change', (e) => {\r
            const idx = e.target.getAttribute('data-id');\r
            todos[idx].completed = e.target.checked;\r
            localStorage.setItem('todos', JSON.stringify(todos));\r
            render();\r
        });\r
    });\r
    document.querySelectorAll('#todoList .delete').forEach(btn => {\r
        btn.addEventListener('click', (e) => {\r
            const idx = e.target.getAttribute('data-id');\r
            todos.splice(idx, 1);\r
            localStorage.setItem('todos', JSON.stringify(todos));\r
            render();\r
        });\r
    });\r
}\r
render();\r
\r
    <\/script>\r
</body>\r
</html>\r
`,h=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Shopping Cart (Objects & Arrays)</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Shopping Cart (Objects & Arrays)</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Shopping Cart (Objects & Arrays)\r
        // Write your code here\r
        \r
// Simple shopping cart\r
let cart = [];\r
const app = document.getElementById('app');\r
const products = [\r
    { id: 1, name: 'Laptop', price: 800 },\r
    { id: 2, name: 'Mouse', price: 25 },\r
    { id: 3, name: 'Keyboard', price: 45 }\r
];\r
function render() {\r
    app.innerHTML = \`\r
        <h2>Products</h2>\r
        <ul>\r
            \${products.map(p => \`\r
                <li>\${p.name} - $\${p.price} \r
                    <button data-id="\${p.id}" class="addToCart">Add to Cart</button>\r
                </li>\r
            \`).join('')}\r
        </ul>\r
        <h2>Cart</h2>\r
        <ul id="cartList">\r
            \${cart.map((item, i) => \`\r
                <li>\${item.name} - $\${item.price} \r
                    <button data-id="\${i}" class="removeFromCart">Remove</button>\r
                </li>\r
            \`).join('')}\r
        </ul>\r
        <p>Total: $\${cart.reduce((sum, item) => sum + item.price, 0)}</p>\r
    \`;\r
    document.querySelectorAll('.addToCart').forEach(btn => {\r
        btn.addEventListener('click', (e) => {\r
            const id = parseInt(e.target.dataset.id);\r
            const product = products.find(p => p.id === id);\r
            cart.push(product);\r
            render();\r
        });\r
    });\r
    document.querySelectorAll('.removeFromCart').forEach(btn => {\r
        btn.addEventListener('click', (e) => {\r
            const idx = parseInt(e.target.dataset.id);\r
            cart.splice(idx, 1);\r
            render();\r
        });\r
    });\r
}\r
render();\r
\r
    <\/script>\r
</body>\r
</html>\r
`,g=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Student Grade Analyzer</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Student Grade Analyzer</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Student Grade Analyzer\r
        // Write your code here\r
        \r
// Student Grade Analyzer\r
const app = document.getElementById('app');\r
let students = [\r
    { name: 'Alice', grade: 85 },\r
    { name: 'Bob', grade: 92 },\r
    { name: 'Charlie', grade: 78 },\r
    { name: 'Diana', grade: 88 }\r
];\r
function render() {\r
    const avg = students.reduce((sum, s) => sum + s.grade, 0) / students.length;\r
    const highest = students.reduce((max, s) => s.grade > max.grade ? s : max, students[0]);\r
    const lowest = students.reduce((min, s) => s.grade < min.grade ? s : min, students[0]);\r
    const distribution = {\r
        A: students.filter(s => s.grade >= 90).length,\r
        B: students.filter(s => s.grade >= 80 && s.grade < 90).length,\r
        C: students.filter(s => s.grade >= 70 && s.grade < 80).length,\r
        D: students.filter(s => s.grade >= 60 && s.grade < 70).length,\r
        F: students.filter(s => s.grade < 60).length\r
    };\r
    app.innerHTML = \`\r
        <h2>Student Grades</h2>\r
        <ul>\r
            \${students.map(s => \`<li>\${s.name}: \${s.grade}</li>\`).join('')}\r
        </ul>\r
        <p>Average: \${avg.toFixed(2)}</p>\r
        <p>Highest: \${highest.name} (\${highest.grade})</p>\r
        <p>Lowest: \${lowest.name} (\${lowest.grade})</p>\r
        <p>Distribution: A:\${distribution.A}, B:\${distribution.B}, C:\${distribution.C}, D:\${distribution.D}, F:\${distribution.F}</p>\r
    \`;\r
}\r
render();\r
\r
    <\/script>\r
</body>\r
</html>\r
`,v=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Fetch and Display Data (Simulated API)</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Fetch and Display Data (Simulated API)</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Fetch and Display Data (Simulated API)\r
        // Write your code here\r
        \r
// Simulated API fetch\r
async function fetchUsers() {\r
    return new Promise(resolve => {\r
        setTimeout(() => {\r
            resolve([\r
                { id: 1, name: 'Alice' },\r
                { id: 2, name: 'Bob' }\r
            ]);\r
        }, 1000);\r
    });\r
}\r
const app = document.getElementById('app');\r
app.innerHTML = '<p>Loading users...</p>';\r
fetchUsers().then(users => {\r
    app.innerHTML = '<ul>' + users.map(u => \`<li>\${u.name}</li>\`).join('') + '</ul>';\r
});\r
\r
    <\/script>\r
</body>\r
</html>\r
`,f=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Timer and Stopwatch</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Timer and Stopwatch</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Timer and Stopwatch\r
        // Write your code here\r
        \r
const app = document.getElementById('app');\r
app.innerHTML = \`\r
    <div id="stopwatch">0:00:00</div>\r
    <button id="start">Start</button>\r
    <button id="stop">Stop</button>\r
    <button id="reset">Reset</button>\r
\`;\r
let seconds = 0, minutes = 0, hours = 0;\r
let timer;\r
const display = document.getElementById('stopwatch');\r
function updateDisplay() {\r
    display.textContent = \`\${hours}:\${minutes.toString().padStart(2,'0')}:\${seconds.toString().padStart(2,'0')}\`;\r
}\r
function startTimer() {\r
    timer = setInterval(() => {\r
        seconds++;\r
        if (seconds === 60) {\r
            seconds = 0;\r
            minutes++;\r
            if (minutes === 60) {\r
                minutes = 0;\r
                hours++;\r
            }\r
        }\r
        updateDisplay();\r
    }, 1000);\r
}\r
document.getElementById('start').addEventListener('click', () => {\r
    if (!timer) startTimer();\r
});\r
document.getElementById('stop').addEventListener('click', () => {\r
    clearInterval(timer);\r
    timer = null;\r
});\r
document.getElementById('reset').addEventListener('click', () => {\r
    clearInterval(timer);\r
    timer = null;\r
    seconds = minutes = hours = 0;\r
    updateDisplay();\r
});\r
updateDisplay();\r
\r
    <\/script>\r
</body>\r
</html>\r
`,y=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Interactive Quiz</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Interactive Quiz</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Interactive Quiz\r
        // Write your code here\r
        \r
// Simple quiz\r
const questions = [\r
    { text: 'What is 2+2?', options: ['3', '4', '5'], answer: 1 },\r
    { text: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris'], answer: 2 }\r
];\r
let current = 0, score = 0;\r
const app = document.getElementById('app');\r
function showQuestion() {\r
    const q = questions[current];\r
    app.innerHTML = \`\r
        <h2>\${q.text}</h2>\r
        \${q.options.map((opt, i) => \`<button data-opt="\${i}">\${opt}</button>\`).join('')}\r
        <p>Score: \${score}</p>\r
    \`;\r
    document.querySelectorAll('[data-opt]').forEach(btn => {\r
        btn.addEventListener('click', (e) => {\r
            const selected = parseInt(e.target.dataset.opt);\r
            if (selected === q.answer) score++;\r
            current++;\r
            if (current < questions.length) showQuestion();\r
            else app.innerHTML = \`<h2>Quiz finished! Score: \${score}/\${questions.length}</h2>\`;\r
        });\r
    });\r
}\r
showQuestion();\r
\r
    <\/script>\r
</body>\r
</html>\r
`,b=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Carousel/Slider</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Carousel/Slider</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Carousel/Slider\r
        // Write your code here\r
        \r
// Simple image carousel\r
const images = [\r
    'https://via.placeholder.com/300x200?text=Image+1',\r
    'https://via.placeholder.com/300x200?text=Image+2',\r
    'https://via.placeholder.com/300x200?text=Image+3'\r
];\r
let idx = 0;\r
const app = document.getElementById('app');\r
app.innerHTML = \`\r
    <img id="carouselImg" src="\${images[0]}" style="width:300px; height:200px;">\r
    <br>\r
    <button id="prev">Prev</button>\r
    <button id="next">Next</button>\r
\`;\r
const img = document.getElementById('carouselImg');\r
document.getElementById('prev').addEventListener('click', () => {\r
    idx = (idx - 1 + images.length) % images.length;\r
    img.src = images[idx];\r
});\r
document.getElementById('next').addEventListener('click', () => {\r
    idx = (idx + 1) % images.length;\r
    img.src = images[idx];\r
});\r
\r
    <\/script>\r
</body>\r
</html>\r
`,x=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Drag and Drop (Simple)</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Drag and Drop (Simple)</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Drag and Drop (Simple)\r
        // Write your code here\r
        \r
// Simple drag and drop\r
const app = document.getElementById('app');\r
app.innerHTML = '<div id="dragMe" style="width:100px; height:100px; background:red; position:absolute; top:100px; left:100px; cursor:move;"></div>';\r
const dragMe = document.getElementById('dragMe');\r
let isDragging = false, startX, startY, initialLeft, initialTop;\r
dragMe.addEventListener('mousedown', (e) => {\r
    isDragging = true;\r
    startX = e.clientX;\r
    startY = e.clientY;\r
    initialLeft = dragMe.offsetLeft;\r
    initialTop = dragMe.offsetTop;\r
    dragMe.style.cursor = 'grabbing';\r
});\r
document.addEventListener('mousemove', (e) => {\r
    if (!isDragging) return;\r
    const dx = e.clientX - startX;\r
    const dy = e.clientY - startY;\r
    dragMe.style.left = initialLeft + dx + 'px';\r
    dragMe.style.top = initialTop + dy + 'px';\r
});\r
document.addEventListener('mouseup', () => {\r
    isDragging = false;\r
    dragMe.style.cursor = 'move';\r
});\r
\r
    <\/script>\r
</body>\r
</html>\r
`,j=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Custom Filterable Table</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Custom Filterable Table</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Custom Filterable Table\r
        // Write your code here\r
        \r
// Filterable table\r
const data = [\r
    { name: 'Alice', age: 25, city: 'New York' },\r
    { name: 'Bob', age: 30, city: 'London' },\r
    { name: 'Charlie', age: 28, city: 'Paris' }\r
];\r
const app = document.getElementById('app');\r
function renderTable(filter = '') {\r
    const filtered = data.filter(row => row.name.toLowerCase().includes(filter.toLowerCase()) || row.city.toLowerCase().includes(filter.toLowerCase()));\r
    app.innerHTML = \`\r
        <input type="text" id="filterInput" placeholder="Filter by name or city">\r
        <table border="1">\r
            <tr><th>Name</th><th>Age</th><th>City</th></tr>\r
            \${filtered.map(row => \`<tr><td>\${row.name}</td><td>\${row.age}</td><td>\${row.city}</td></tr>\`).join('')}\r
        </table>\r
    \`;\r
    document.getElementById('filterInput').addEventListener('input', (e) => renderTable(e.target.value));\r
}\r
renderTable();\r
\r
    <\/script>\r
</body>\r
</html>\r
`,T=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Interactive Chart (Canvas)</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Interactive Chart (Canvas)</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Interactive Chart (Canvas)\r
        // Write your code here\r
        \r
// Simple bar chart on canvas\r
const data = [50, 80, 30, 90, 40];\r
const app = document.getElementById('app');\r
app.innerHTML = '<canvas id="myCanvas" width="400" height="200"></canvas>';\r
const canvas = document.getElementById('myCanvas');\r
const ctx = canvas.getContext('2d');\r
ctx.fillStyle = 'blue';\r
const barWidth = 40;\r
const startX = 30;\r
const startY = canvas.height - 30;\r
const maxVal = Math.max(...data);\r
for (let i = 0; i < data.length; i++) {\r
    const height = (data[i] / maxVal) * (canvas.height - 50);\r
    ctx.fillRect(startX + i * (barWidth + 10), startY - height, barWidth, height);\r
    ctx.fillStyle = 'black';\r
    ctx.fillText(data[i], startX + i * (barWidth + 10) + 10, startY - height - 5);\r
    ctx.fillStyle = 'blue';\r
}\r
\r
    <\/script>\r
</body>\r
</html>\r
`,w=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Form with Live Validation and Submit</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Form with Live Validation and Submit</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Form with Live Validation and Submit\r
        // Write your code here\r
        \r
// Form with live validation and localStorage\r
const app = document.getElementById('app');\r
app.innerHTML = \`\r
    <form id="myForm">\r
        <div><label>Name:</label><input type="text" id="name"><span class="error" id="nameError"></span></div>\r
        <div><label>Email:</label><input type="email" id="email"><span class="error" id="emailError"></span></div>\r
        <div><label>Password:</label><input type="password" id="password"><span class="error" id="passwordError"></span></div>\r
        <button type="submit">Save</button>\r
    </form>\r
    <div id="storedData"></div>\r
    <style>.error { color: red; font-size: 0.8em; }</style>\r
\`;\r
function showStored() {\r
    const stored = localStorage.getItem('formData');\r
    if (stored) {\r
        const data = JSON.parse(stored);\r
        document.getElementById('storedData').innerHTML = \`<h3>Stored Data</h3><p>Name: \${data.name}<br>Email: \${data.email}</p>\`;\r
    }\r
}\r
showStored();\r
const form = document.getElementById('myForm');\r
form.addEventListener('submit', (e) => {\r
    e.preventDefault();\r
    let valid = true;\r
    const name = document.getElementById('name');\r
    const email = document.getElementById('email');\r
    const password = document.getElementById('password');\r
    const nameErr = document.getElementById('nameError');\r
    const emailErr = document.getElementById('emailError');\r
    const passErr = document.getElementById('passwordError');\r
    nameErr.textContent = '';\r
    emailErr.textContent = '';\r
    passErr.textContent = '';\r
    if (!name.value.trim()) {\r
        nameErr.textContent = 'Name required';\r
        valid = false;\r
    }\r
    if (!email.value.trim() || !email.value.includes('@')) {\r
        emailErr.textContent = 'Valid email required';\r
        valid = false;\r
    }\r
    if (password.value.length < 6) {\r
        passErr.textContent = 'Password must be at least 6 characters';\r
        valid = false;\r
    }\r
    if (valid) {\r
        localStorage.setItem('formData', JSON.stringify({ name: name.value, email: email.value }));\r
        showStored();\r
        form.reset();\r
    }\r
});\r
\r
    <\/script>\r
</body>\r
</html>\r
`,O=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Sortable List with Drag and Drop</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Sortable List with Drag and Drop</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Sortable List with Drag and Drop\r
        // Write your code here\r
        \r
// Sortable list with drag and drop (simple)\r
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];\r
const app = document.getElementById('app');\r
function render() {\r
    app.innerHTML = \`<ul id="sortableList">\${items.map((item, i) => \`<li draggable="true" data-idx="\${i}">\${item}</li>\`).join('')}</ul>\`;\r
    const list = document.getElementById('sortableList');\r
    let dragSrc = null;\r
    list.addEventListener('dragstart', (e) => {\r
        dragSrc = e.target;\r
        e.dataTransfer.effectAllowed = 'move';\r
    });\r
    list.addEventListener('dragover', (e) => {\r
        e.preventDefault();\r
        e.dataTransfer.dropEffect = 'move';\r
    });\r
    list.addEventListener('drop', (e) => {\r
        e.preventDefault();\r
        if (dragSrc !== e.target) {\r
            const fromIdx = parseInt(dragSrc.dataset.idx);\r
            const toIdx = parseInt(e.target.dataset.idx);\r
            const moved = items.splice(fromIdx, 1)[0];\r
            items.splice(toIdx, 0, moved);\r
            render();\r
        }\r
    });\r
}\r
render();\r
\r
    <\/script>\r
</body>\r
</html>\r
`,A=`// Project: Basic Array Operations\r
// Description: Create an array, access elements, use push/pop, shift/unshift, splice.\r
\r
\r
let fruits = ['apple', 'banana', 'orange'];\r
console.log('Original:', fruits);\r
fruits.push('grape');\r
console.log('After push:', fruits);\r
fruits.pop();\r
console.log('After pop:', fruits);\r
fruits.unshift('mango');\r
console.log('After unshift:', fruits);\r
fruits.shift();\r
console.log('After shift:', fruits);\r
fruits.splice(1, 1, 'kiwi');\r
console.log('After splice:', fruits);\r
\r
`,S=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>map() – Transform Numbers</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>map() – Transform Numbers</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: map() – Transform Numbers\r
        // Write your code here\r
        \r
const numbers = [1, 2, 3, 4, 5];\r
const doubled = numbers.map(n => n * 2);\r
console.log('Original:', numbers);\r
console.log('Doubled:', doubled);\r
\r
    <\/script>\r
</body>\r
</html>\r
`,_=`// Project: filter() – Select Products\r
// Description: Filter an array of product objects to keep only those with price < 50 and in stock.\r
\r
\r
const products = [\r
    { name: 'Laptop', price: 800, inStock: true },\r
    { name: 'Mouse', price: 25, inStock: true },\r
    { name: 'Keyboard', price: 45, inStock: false },\r
    { name: 'Monitor', price: 300, inStock: true }\r
];\r
const cheapInStock = products.filter(p => p.price < 50 && p.inStock);\r
console.log('Cheap in-stock products:', cheapInStock);\r
\r
`,P=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>reduce() – Shopping Cart Total</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>reduce() – Shopping Cart Total</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: reduce() – Shopping Cart Total\r
        // Write your code here\r
        \r
const cart = [\r
    { name: 'Apple', price: 0.5, qty: 4 },\r
    { name: 'Banana', price: 0.3, qty: 6 },\r
    { name: 'Orange', price: 0.8, qty: 3 }\r
];\r
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);\r
console.log('Total cost:', total);\r
\r
    <\/script>\r
</body>\r
</html>\r
`,E=`// Project: find() and findIndex()\r
// Description: Locate a student by ID using find, and find the index of a task by title.\r
\r
\r
const students = [\r
    { id: 1, name: 'Alice' },\r
    { id: 2, name: 'Bob' },\r
    { id: 3, name: 'Charlie' }\r
];\r
const student = students.find(s => s.id === 2);\r
console.log('Found:', student);\r
const index = students.findIndex(s => s.name === 'Charlie');\r
console.log('Index of Charlie:', index);\r
\r
`,I=`// Project: sort() with Comparator\r
// Description: Sort an array of products by price ascending, then by rating descending.\r
\r
\r
const products = [\r
    { name: 'Laptop', price: 800, rating: 4.5 },\r
    { name: 'Mouse', price: 25, rating: 4.8 },\r
    { name: 'Keyboard', price: 45, rating: 4.2 }\r
];\r
// Sort by price ascending\r
products.sort((a, b) => a.price - b.price);\r
console.log('Sorted by price:', products);\r
// Sort by rating descending\r
products.sort((a, b) => b.rating - a.rating);\r
console.log('Sorted by rating:', products);\r
\r
`,C=`// Project: some() and every()\r
// Description: Check if any product has rating > 4.5 and if all tasks are completed.\r
\r
\r
const tasks = [\r
    { title: 'Task 1', completed: true },\r
    { title: 'Task 2', completed: false },\r
    { title: 'Task 3', completed: true }\r
];\r
const allDone = tasks.every(t => t.completed);\r
const anyDone = tasks.some(t => t.completed);\r
console.log('All completed?', allDone);\r
console.log('Any completed?', anyDone);\r
\r
`,k=`// Project: Chaining Methods\r
// Description: Chain filter, map, and reduce to get total price of discounted items.\r
\r
\r
const products = [\r
    { name: 'Laptop', price: 800, discount: 0.1 },\r
    { name: 'Mouse', price: 25, discount: 0 },\r
    { name: 'Keyboard', price: 45, discount: 0.05 }\r
];\r
const total = products\r
    .filter(p => p.discount > 0)\r
    .map(p => p.price * (1 - p.discount))\r
    .reduce((sum, val) => sum + val, 0);\r
console.log('Total discounted price:', total);\r
\r
`,D=`// Student Profile Analyzer\r
\r
// Variables with different data types\r
let name = "Alice";\r
let age = "25"; // string (will convert)\r
let marks = [85, 90, 78];\r
let isEnrolled = true;\r
let extra = null;\r
let notAssigned;\r
\r
// Type conversion\r
let numericAge = Number(age);\r
\r
// Calculate average marks\r
let total = 0;\r
for (let i = 0; i < marks.length; i++) {\r
  total += marks[i];\r
}\r
let average = total / marks.length;\r
\r
// Boolean logic\r
let isAdult = numericAge >= 18;\r
\r
// Type checking\r
console.log("Type of name:", typeof name);\r
console.log("Type of age before conversion:", typeof age);\r
console.log("Type of age after conversion:", typeof numericAge);\r
console.log("Type of marks:", typeof marks);\r
console.log("Type of isEnrolled:", typeof isEnrolled);\r
console.log("Type of extra:", typeof extra);\r
console.log("Type of notAssigned:", typeof notAssigned);\r
\r
// Final formatted output\r
console.log(\r
  \`Name: \${name} | Age: \${numericAge} | Average Marks: \${average.toFixed(\r
    2\r
  )} | Adult: \${isAdult}\`\r
);`,J=`// Project: Arithmetic and Assignment Operators\r
// Description: Perform basic arithmetic operations, use compound assignment, and calculate area and compound interest.\r
\r
\r
let a = 10, b = 3;\r
console.log('a + b =', a + b);\r
console.log('a - b =', a - b);\r
console.log('a * b =', a * b);\r
console.log('a / b =', a / b);\r
console.log('a % b =', a % b);\r
console.log('a ** b =', a ** b);\r
// Compound assignment\r
a += 5;\r
console.log('a after +=5:', a);\r
// Area of rectangle\r
let length = 8, width = 5;\r
let area = length * width;\r
console.log('Area:', area);\r
\r
`,F=`// Project: Comparison and Logical Operators\r
// Description: Compare values (== vs ===), use logical operators to combine conditions, and demonstrate truthy/falsy.\r
\r
\r
let a = 5, b = '5';\r
console.log('==', a == b);\r
console.log('===', a === b);\r
console.log('&&', true && false);\r
console.log('||', true || false);\r
console.log('!', !true);\r
console.log('Truthy values:', Boolean('hello'), Boolean(1), Boolean([]));\r
console.log('Falsy values:', Boolean(''), Boolean(0), Boolean(null));\r
\r
`,U=`// Project: Template Literals and String Concatenation\r
// Description: Build strings using + and template literals (\`...\`). Create dynamic messages.\r
\r
\r
let name = 'John';\r
let age = 30;\r
console.log('Hello, ' + name + '. You are ' + age + ' years old.');\r
console.log(\`Hello, \${name}. You are \${age} years old.\`);\r
\r
`,M=`// Smart Cart Calculator (Type Coercion)\r
\r
// Prices (mixed types)\r
let item1 = "100";   // string\r
let item2 = 50;      // number\r
let item3 = "30";    // string\r
\r
// ❌ Implicit coercion (wrong for addition)\r
let wrongTotal = item1 + item2 + item3;\r
console.log("Wrong Total (implicit):", wrongTotal); // "1005030"\r
\r
// ✅ Explicit conversion (correct)\r
let total =\r
  Number(item1) +\r
  Number(item2) +\r
  Number(item3);\r
\r
console.log("Correct Total:", total); // 180\r
\r
// Apply discount\r
let discount = "20"; // string\r
let finalAmount = total - Number(discount);\r
\r
console.log("Final Amount after discount:", finalAmount);\r
\r
// Boolean coercion example\r
let isValid = Boolean(total);\r
console.log("Is cart valid?", isValid);\r
\r
// Edge case: invalid conversion\r
let invalid = "abc";\r
let converted = Number(invalid);\r
\r
console.log("Invalid conversion:", converted); // NaN\r
console.log("Type of NaN:", typeof converted);\r
\r
// String conversion\r
let receipt = String(finalAmount);\r
console.log("Receipt (string):", receipt);\r
\r
// Final formatted output\r
console.log(\r
  \`Total: \${total}, Discount: \${discount}, Payable: \${finalAmount}\`\r
);`,B=`// Advanced Student Grading System\r
\r
let score = 82;\r
let attendance = 75;\r
\r
let grade;\r
let division;\r
let status;\r
let remark;\r
\r
// Grade calculation\r
if (score >= 90) {\r
    grade = "A";\r
} else if (score >= 80) {\r
    grade = "B";\r
} else if (score >= 70) {\r
    grade = "C";\r
} else if (score >= 60) {\r
    grade = "D";\r
} else {\r
    grade = "F";\r
}\r
\r
// Nested condition for pass/fail\r
if (score >= 40) {\r
    if (attendance >= 75) {\r
        status = "Pass";\r
    } else {\r
        status = "Fail (Low Attendance)";\r
    }\r
} else {\r
    status = "Fail";\r
}\r
\r
// Division calculation\r
if (score >= 60) {\r
    division = "First";\r
} else if (score >= 50) {\r
    division = "Second";\r
} else if (score >= 40) {\r
    division = "Third";\r
} else {\r
    division = "No Division";\r
}\r
\r
// Remarks using logical operators (short-circuit)\r
if (score >= 85 && attendance >= 80) {\r
    remark = "Excellent";\r
} else if (score >= 70 || attendance >= 80) {\r
    remark = "Good";\r
} else {\r
    remark = "Needs Improvement";\r
}\r
\r
// Final output\r
console.log(\r
    \`Grade: \${grade} | Division: \${division} | Status: \${status} | Remark: \${remark}\`\r
);`,L=`// Project: Ternary Operator – Even or Odd\r
// Description: Use the ternary operator to check if a number is even or odd.\r
\r
\r
let num = 7;\r
let parity = (num % 2 === 0) ? 'Even' : 'Odd';\r
console.log(\`\${num} is \${parity}\`);\r
\r
`,N=`// Project: Switch – Day of Week\r
// Description: Given a number (1‑7), use switch to output the day name.\r
\r
\r
function getDayName(dayNum) {\r
    switch(dayNum) {\r
        case 1: return 'Monday';\r
        case 2: return 'Tuesday';\r
        case 3: return 'Wednesday';\r
        case 4: return 'Thursday';\r
        case 5: return 'Friday';\r
        case 6: return 'Saturday';\r
        case 7: return 'Sunday';\r
        default: return 'Invalid day';\r
    }\r
}\r
console.log('Day 3:', getDayName(3));\r
console.log('Day 7:', getDayName(7));\r
\r
`,V=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>For Loop – Sum and Multiplication Tables</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>For Loop – Sum and Multiplication Tables</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: For Loop – Sum and Multiplication Tables\r
        // Write your code here\r
        \r
// Sum 1..100\r
let sum = 0;\r
for (let i = 1; i <= 100; i++) {\r
    sum += i;\r
}\r
console.log('Sum 1-100:', sum);\r
// Multiplication table for 5\r
console.log('5 times table:');\r
for (let i = 1; i <= 10; i++) {\r
    console.log(\`5 x \${i} = \${5 * i}\`);\r
}\r
\r
    <\/script>\r
</body>\r
</html>\r
`,R=`// Project: While Loop – Password Guesser\r
// Description: Simulate a simple password guesser using a while loop that breaks when correct.\r
\r
\r
// Simulated password guesser (using confirm to avoid prompt spam)\r
let password = 'secret';\r
let guess = '';\r
while (guess !== password) {\r
    guess = prompt('Enter password:');\r
    if (guess === null) break;\r
}\r
if (guess === password) alert('Access granted!');\r
\r
`,W=`// Project: Do‑While – Menu\r
// Description: Display a menu at least once and repeat until user selects exit.\r
\r
\r
// Menu simulation using confirm\r
let choice;\r
do {\r
    choice = confirm('Click OK to continue, Cancel to exit.');\r
} while (choice);\r
console.log('Exited.');\r
\r
`,$=`// Project: Selecting Elements and Changing Text\r
// Description: Use \`querySelector\` and \`textContent\` to modify a paragraph.\r
\r
\r
// This script expects an element with id="app" in the HTML\r
const app = document.getElementById('app');\r
if (app) {\r
    app.innerHTML = '<p>Text changed by JavaScript!</p>';\r
} else {\r
    console.log('Element #app not found');\r
}\r
\r
`,K=`// Project: Creating and Appending Elements\r
// Description: Create a new list item and append it to an unordered list.\r
\r
\r
const app = document.getElementById('app');\r
if (app) {\r
    const ul = document.createElement('ul');\r
    const li = document.createElement('li');\r
    li.textContent = 'New list item';\r
    ul.appendChild(li);\r
    app.appendChild(ul);\r
}\r
\r
`,q=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Handling Button Clicks</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Handling Button Clicks</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Handling Button Clicks\r
        // Write your code here\r
        \r
const app = document.getElementById('app');\r
app.innerHTML = '<button id="myBtn">Click me</button>';\r
const btn = document.getElementById('myBtn');\r
btn.addEventListener('click', () => {\r
    alert('Button clicked!');\r
});\r
\r
    <\/script>\r
</body>\r
</html>\r
`,H=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Input Field – Live Update</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Input Field – Live Update</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Input Field – Live Update\r
        // Write your code here\r
        \r
const app = document.getElementById('app');\r
app.innerHTML = \`\r
    <input type="text" id="liveInput" placeholder="Type something...">\r
    <p id="display"></p>\r
\`;\r
const input = document.getElementById('liveInput');\r
const display = document.getElementById('display');\r
input.addEventListener('input', (e) => {\r
    display.textContent = e.target.value;\r
});\r
\r
    <\/script>\r
</body>\r
</html>\r
`,z=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Form Validation</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Form Validation</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Form Validation\r
        // Write your code here\r
        \r
const app = document.getElementById('app');\r
app.innerHTML = \`\r
    <form id="myForm">\r
        <div>\r
            <label>Name:</label>\r
            <input type="text" id="name" required>\r
            <span class="error" id="nameError"></span>\r
        </div>\r
        <div>\r
            <label>Email:</label>\r
            <input type="email" id="email" required>\r
            <span class="error" id="emailError"></span>\r
        </div>\r
        <div>\r
            <label>Password:</label>\r
            <input type="password" id="password" required>\r
            <span class="error" id="passwordError"></span>\r
        </div>\r
        <button type="submit">Submit</button>\r
    </form>\r
    <style>.error { color: red; font-size: 0.8em; }</style>\r
\`;\r
const form = document.getElementById('myForm');\r
form.addEventListener('submit', (e) => {\r
    e.preventDefault();\r
    let valid = true;\r
    const name = document.getElementById('name');\r
    const email = document.getElementById('email');\r
    const password = document.getElementById('password');\r
    const nameError = document.getElementById('nameError');\r
    const emailError = document.getElementById('emailError');\r
    const passwordError = document.getElementById('passwordError');\r
    nameError.textContent = '';\r
    emailError.textContent = '';\r
    passwordError.textContent = '';\r
    if (!name.value.trim()) {\r
        nameError.textContent = 'Name is required';\r
        valid = false;\r
    }\r
    if (!email.value.trim() || !email.value.includes('@')) {\r
        emailError.textContent = 'Valid email is required';\r
        valid = false;\r
    }\r
    if (password.value.length < 6) {\r
        passwordError.textContent = 'Password must be at least 6 characters';\r
        valid = false;\r
    }\r
    if (valid) {\r
        alert('Form submitted!');\r
        form.reset();\r
    }\r
});\r
\r
    <\/script>\r
</body>\r
</html>\r
`,G=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Simple Modal</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Simple Modal</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Simple Modal\r
        // Write your code here\r
        \r
const app = document.getElementById('app');\r
app.innerHTML = \`\r
    <button id="openModal">Open Modal</button>\r
    <div id="modal" style="display:none; position:fixed; top:20%; left:20%; background:white; padding:20px; border:1px solid #ccc; z-index:1000;">\r
        <p>This is a modal!</p>\r
        <button id="closeModal">Close</button>\r
    </div>\r
    <div id="overlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:999;"></div>\r
\`;\r
const modal = document.getElementById('modal');\r
const overlay = document.getElementById('overlay');\r
const openBtn = document.getElementById('openModal');\r
const closeBtn = document.getElementById('closeModal');\r
function openModal() {\r
    modal.style.display = 'block';\r
    overlay.style.display = 'block';\r
}\r
function closeModal() {\r
    modal.style.display = 'none';\r
    overlay.style.display = 'none';\r
}\r
openBtn.addEventListener('click', openModal);\r
closeBtn.addEventListener('click', closeModal);\r
overlay.addEventListener('click', closeModal);\r
\r
    <\/script>\r
</body>\r
</html>\r
`,Y=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Keyboard Events – Move a Box</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Keyboard Events – Move a Box</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Keyboard Events – Move a Box\r
        // Write your code here\r
        \r
const app = document.getElementById('app');\r
app.innerHTML = \`\r
    <div id="box" style="width:50px; height:50px; background:blue; position:absolute; top:100px; left:100px;"></div>\r
    <p>Use arrow keys to move the box</p>\r
\`;\r
const box = document.getElementById('box');\r
let topPos = 100, leftPos = 100;\r
window.addEventListener('keydown', (e) => {\r
    const step = 10;\r
    switch(e.key) {\r
        case 'ArrowUp': topPos -= step; break;\r
        case 'ArrowDown': topPos += step; break;\r
        case 'ArrowLeft': leftPos -= step; break;\r
        case 'ArrowRight': leftPos += step; break;\r
        default: return;\r
    }\r
    box.style.top = topPos + 'px';\r
    box.style.left = leftPos + 'px';\r
});\r
\r
    <\/script>\r
</body>\r
</html>\r
`,Q=`// Project: Function Declaration vs Expression\r
// Description: Define a function using declaration and an expression; show hoisting difference.\r
\r
\r
// Function declaration (hoisted)\r
console.log(factorial(5)); // works even before definition\r
function factorial(n) {\r
    if (n <= 1) return 1;\r
    return n * factorial(n-1);\r
}\r
// Function expression (not hoisted)\r
const square = function(x) { return x * x; };\r
console.log(square(4));\r
\r
`,X=`// Project: Default Parameters and Return\r
// Description: Create a function with default parameters and early return.\r
\r
\r
function greet(name = 'Guest') {\r
    if (!name) return;\r
    return \`Hello \${name}\`;\r
}\r
console.log(greet('Alice'));\r
console.log(greet());\r
\r
`,Z=`// Project: Arrow Functions and Lexical this\r
// Description: Compare traditional function and arrow function, focusing on \`this\` binding.\r
\r
\r
const add = (a, b) => a + b;\r
const square = x => x * x;\r
const greet = name => \`Hello, \${name}!\`;\r
console.log(add(3, 4));\r
console.log(square(5));\r
console.log(greet('Alice'));\r
// Lexical this example\r
const obj = {\r
    name: 'Object',\r
    regular: function() { console.log(this.name); },\r
    arrow: () => console.log(this.name)\r
};\r
obj.regular(); // 'Object'\r
obj.arrow();   // undefined (window/global)\r
\r
`,ee=`// Project: Pure vs Impure Functions\r
// Description: Write a pure function (no side effects) and an impure function (modifies external state).\r
\r
\r
// Pure function\r
function add(a, b) {\r
    return a + b;\r
}\r
// Impure function (modifies external state)\r
let counter = 0;\r
function increment() {\r
    counter++;\r
}\r
console.log('Pure: add(2,3) =', add(2,3));\r
increment();\r
console.log('Impure: counter =', counter);\r
\r
`,ne=`// Project: Object Literals and Dot/Bracket Notation\r
// Description: Create an object, access/modify properties using dot and bracket notation.\r
\r
\r
const person = {\r
    name: 'Alice',\r
    age: 25,\r
    greet() {\r
        console.log(\`Hi, I'm \${this.name}\`);\r
    }\r
};\r
console.log(person.name);\r
person.greet();\r
// Dot vs bracket\r
console.log(person['age']);\r
person['city'] = 'New York';\r
console.log(person);\r
\r
`,te=`// Project: \`this\` in Methods\r
// Description: Define a method inside an object that uses \`this\` to access other properties.\r
\r
\r
const obj = {\r
    name: 'Object',\r
    regularMethod() {\r
        console.log('regularMethod this:', this.name);\r
    },\r
    arrowMethod: () => {\r
        console.log('arrowMethod this:', this.name);\r
    }\r
};\r
obj.regularMethod(); // 'Object'\r
obj.arrowMethod();   // undefined (or window)\r
\r
`,re=`// Project: Constructor Function and Class\r
// Description: Define a constructor function and an ES6 class; create instances.\r
\r
\r
// Constructor function\r
function Animal(name) {\r
    this.name = name;\r
}\r
Animal.prototype.speak = function() {\r
    console.log(\`\${this.name} makes a noise.\`);\r
};\r
// ES6 class\r
class Dog extends Animal {\r
    speak() {\r
        console.log(\`\${this.name} barks.\`);\r
    }\r
}\r
const animal = new Animal('Generic');\r
animal.speak();\r
const dog = new Dog('Rex');\r
dog.speak();\r
\r
`,ae=`// Project: Object Destructuring\r
// Description: Extract properties from an object into variables, with defaults.\r
\r
\r
// Array destructuring\r
const coordinates = [10, 20];\r
const [x, y] = coordinates;\r
console.log(\`x=\${x}, y=\${y}\`);\r
// Object destructuring\r
const user = { name: 'Alice', age: 25 };\r
const { name, age } = user;\r
console.log(\`name=\${name}, age=\${age}\`);\r
// With defaults\r
const { city = 'Unknown' } = user;\r
console.log(\`city=\${city}\`);\r
\r
`,oe=`// Project: Spread Operator with Objects\r
// Description: Use spread to shallow copy objects and merge them.\r
\r
\r
// Spread with arrays\r
const arr1 = [1, 2];\r
const arr2 = [3, 4];\r
const combined = [...arr1, ...arr2];\r
console.log(combined);\r
// Spread with objects\r
const obj1 = { a: 1, b: 2 };\r
const obj2 = { c: 3 };\r
const merged = { ...obj1, ...obj2 };\r
console.log(merged);\r
// Rest parameters\r
function sum(...numbers) {\r
    return numbers.reduce((total, n) => total + n, 0);\r
}\r
console.log(sum(1, 2, 3, 4));\r
\r
`,ie=`// Project: Optional Chaining and Nullish Coalescing\r
// Description: Access nested properties safely and provide default values.\r
\r
\r
const user = {\r
    name: 'Alice',\r
    address: {\r
        city: 'New York'\r
    }\r
};\r
console.log(user?.address?.city); // 'New York'\r
console.log(user?.contact?.phone); // undefined\r
// Nullish coalescing\r
const phone = user?.contact?.phone ?? 'No phone';\r
console.log(phone);\r
\r
`,se=`// Project: JSON and localStorage\r
// Description: Store an object in localStorage and retrieve it.\r
\r
\r
const user = { name: 'Alice', age: 25 };\r
// Store\r
localStorage.setItem('user', JSON.stringify(user));\r
// Retrieve\r
const stored = JSON.parse(localStorage.getItem('user'));\r
console.log(stored);\r
// Clear\r
localStorage.removeItem('user');\r
\r
`,ce=`// Project: Function Declarations Vs Function Expressions\r
// Description: This project demonstrates function declarations vs function expressions in JavaScript.\r
\r
\r
// Function declaration (hoisted)\r
console.log(factorial(5)); // works even before definition\r
function factorial(n) {\r
    if (n <= 1) return 1;\r
    return n * factorial(n-1);\r
}\r
// Function expression (not hoisted)\r
const square = function(x) { return x * x; };\r
console.log(square(4));\r
\r
`,de=`// Project: Parameters, Arguments And Default Parameters\r
// Description: This project demonstrates parameters, arguments and default parameters in JavaScript.\r
\r
\r
console.log("=== Parameters, Arguments And Default Parameters ===");\r
// This project demonstrates parameters, arguments and default parameters in JavaScript.\r
// Add your implementation here\r
\r
`,le=`// Project: Return Values And Early Returns\r
// Description: This project demonstrates return values and early returns in JavaScript.\r
\r
\r
console.log("=== Return Values And Early Returns ===");\r
// This project demonstrates return values and early returns in JavaScript.\r
// Add your implementation here\r
\r
`,pe=`// Project: Function Scope Basics: Local Vs Global Variables\r
// Description: This project demonstrates function scope basics: local vs global variables in JavaScript.\r
\r
\r
console.log("=== Function Scope Basics: Local Vs Global Variables ===");\r
// This project demonstrates function scope basics: local vs global variables in JavaScript.\r
// Add your implementation here\r
\r
`,me=`// Project: Arrow Functions And Concise Syntax\r
// Description: This project demonstrates arrow functions and concise syntax in JavaScript.\r
\r
\r
const add = (a, b) => a + b;\r
const square = x => x * x;\r
const greet = name => \`Hello, \${name}!\`;\r
console.log(add(3, 4));\r
console.log(square(5));\r
console.log(greet('Alice'));\r
// Lexical this example\r
const obj = {\r
    name: 'Object',\r
    regular: function() { console.log(this.name); },\r
    arrow: () => console.log(this.name)\r
};\r
obj.regular(); // 'Object'\r
obj.arrow();   // undefined (window/global)\r
\r
`,ue=`// Project: Pure Functions Vs Side Effects (Intro Idea)\r
// Description: This project demonstrates pure functions vs side effects (intro idea) in JavaScript.\r
\r
\r
console.log("=== Pure Functions Vs Side Effects (Intro Idea) ===");\r
// This project demonstrates pure functions vs side effects (intro idea) in JavaScript.\r
// Add your implementation here\r
\r
`,he=`// Project: Creating Arrays, Indexing And Length\r
// Description: This project demonstrates creating arrays, indexing and length in JavaScript.\r
\r
\r
console.log("=== Creating Arrays, Indexing And Length ===");\r
// This project demonstrates creating arrays, indexing and length in JavaScript.\r
// Add your implementation here\r
\r
`,ge=`// Project: Mutating Methods: Push, Pop, Shift, Unshift, Splice\r
// Description: This project demonstrates mutating methods: push, pop, shift, unshift, splice in JavaScript.\r
\r
\r
console.log("=== Mutating Methods: Push, Pop, Shift, Unshift, Splice ===");\r
// This project demonstrates mutating methods: push, pop, shift, unshift, splice in JavaScript.\r
// Add your implementation here\r
\r
`,ve=`// Project: Non-Mutating Methods: Slice, Concat\r
// Description: This project demonstrates non-mutating methods: slice, concat in JavaScript.\r
\r
\r
console.log("=== Non-Mutating Methods: Slice, Concat ===");\r
// This project demonstrates non-mutating methods: slice, concat in JavaScript.\r
// Add your implementation here\r
\r
`,fe=`// Project: Searching: Indexof, Includes, Find, Findindex\r
// Description: This project demonstrates searching: indexof, includes, find, findindex in JavaScript.\r
\r
\r
const students = [\r
    { id: 1, name: 'Alice' },\r
    { id: 2, name: 'Bob' },\r
    { id: 3, name: 'Charlie' }\r
];\r
const student = students.find(s => s.id === 2);\r
console.log('Found:', student);\r
const index = students.findIndex(s => s.name === 'Charlie');\r
console.log('Index of Charlie:', index);\r
\r
`,ye=`// Project: Iterating Arrays With For, For-Of And Foreach\r
// Description: This project demonstrates iterating arrays with for, for-of and foreach in JavaScript.\r
\r
\r
console.log("=== Iterating Arrays With For, For-Of And Foreach ===");\r
// This project demonstrates iterating arrays with for, for-of and foreach in JavaScript.\r
// Add your implementation here\r
\r
`,be=`// Project: Intro To Higher-Order Methods: Map, Filter, Reduce (Light Overview)\r
// Description: This project demonstrates intro to higher-order methods: map, filter, reduce (light overview) in JavaScript.\r
\r
\r
const numbers = [1, 2, 3, 4, 5];\r
const doubled = numbers.map(n => n * 2);\r
console.log('Original:', numbers);\r
console.log('Doubled:', doubled);\r
\r
`,xe=`// Project: Projects Basic\r
// Description: This project demonstrates projects basic in JavaScript.\r
\r
\r
console.log("=== Projects Basic ===");\r
// This project demonstrates projects basic in JavaScript.\r
// Add your implementation here\r
\r
`,je=`// Project: Project Advance\r
// Description: This project demonstrates project advance in JavaScript.\r
\r
\r
console.log("=== Project Advance ===");\r
// This project demonstrates project advance in JavaScript.\r
// Add your implementation here\r
\r
`,Te=`// Project: Object Literals: Keys, Values, Methods\r
// Description: This project demonstrates object literals: keys, values, methods in JavaScript.\r
\r
\r
const person = {\r
    name: 'Alice',\r
    age: 25,\r
    greet() {\r
        console.log(\`Hi, I'm \${this.name}\`);\r
    }\r
};\r
console.log(person.name);\r
person.greet();\r
// Dot vs bracket\r
console.log(person['age']);\r
person['city'] = 'New York';\r
console.log(person);\r
\r
`,we=`// Project: Accessing Properties: Dot Vs Bracket Notation\r
// Description: This project demonstrates accessing properties: dot vs bracket notation in JavaScript.\r
\r
\r
console.log("=== Accessing Properties: Dot Vs Bracket Notation ===");\r
// This project demonstrates accessing properties: dot vs bracket notation in JavaScript.\r
// Add your implementation here\r
\r
`,Oe=`// Project: Nested Objects And Arrays Of Objects\r
// Description: This project demonstrates nested objects and arrays of objects in JavaScript.\r
\r
\r
console.log("=== Nested Objects And Arrays Of Objects ===");\r
// This project demonstrates nested objects and arrays of objects in JavaScript.\r
// Add your implementation here\r
\r
`,Ae=`// Project: The This Keyword (Beginner-Level Understanding)\r
// Description: This project demonstrates the this keyword (beginner-level understanding) in JavaScript.\r
\r
\r
const obj = {\r
    name: 'Object',\r
    regularMethod() {\r
        console.log('regularMethod this:', this.name);\r
    },\r
    arrowMethod: () => {\r
        console.log('arrowMethod this:', this.name);\r
    }\r
};\r
obj.regularMethod(); // 'Object'\r
obj.arrowMethod();   // undefined (or window)\r
\r
`,Se=`// Project: Constructor Functions And The New Keyword (Overview)\r
// Description: This project demonstrates constructor functions and the new keyword (overview) in JavaScript.\r
\r
\r
// Constructor function\r
function Animal(name) {\r
    this.name = name;\r
}\r
Animal.prototype.speak = function() {\r
    console.log(\`\${this.name} makes a noise.\`);\r
};\r
// ES6 class\r
class Dog extends Animal {\r
    speak() {\r
        console.log(\`\${this.name} barks.\`);\r
    }\r
}\r
const animal = new Animal('Generic');\r
animal.speak();\r
const dog = new Dog('Rex');\r
dog.speak();\r
\r
`,_e=`// Project: Es6 Class Syntax, Constructor, Methods And Basic Inheritance (Conceptual)\r
// Description: This project demonstrates es6 class syntax, constructor, methods and basic inheritance (conceptual) in JavaScript.\r
\r
\r
// Constructor function\r
function Animal(name) {\r
    this.name = name;\r
}\r
Animal.prototype.speak = function() {\r
    console.log(\`\${this.name} makes a noise.\`);\r
};\r
// ES6 class\r
class Dog extends Animal {\r
    speak() {\r
        console.log(\`\${this.name} barks.\`);\r
    }\r
}\r
const animal = new Animal('Generic');\r
animal.speak();\r
const dog = new Dog('Rex');\r
dog.speak();\r
\r
`,Pe=`// Project: Object Literals: Keys, Values, Methods\r
// Description: This project demonstrates object literals: keys, values, methods in JavaScript.\r
\r
\r
const person = {\r
    name: 'Alice',\r
    age: 25,\r
    greet() {\r
        console.log(\`Hi, I'm \${this.name}\`);\r
    }\r
};\r
console.log(person.name);\r
person.greet();\r
// Dot vs bracket\r
console.log(person['age']);\r
person['city'] = 'New York';\r
console.log(person);\r
\r
`,Ee=`// Project: Accessing Properties: Dot Vs Bracket Notation\r
// Description: This project demonstrates accessing properties: dot vs bracket notation in JavaScript.\r
\r
\r
console.log("=== Accessing Properties: Dot Vs Bracket Notation ===");\r
// This project demonstrates accessing properties: dot vs bracket notation in JavaScript.\r
// Add your implementation here\r
\r
`,Ie=`// Project: Adding, Updating And Deleting Object Properties\r
// Description: This project demonstrates adding, updating and deleting object properties in JavaScript.\r
\r
\r
console.log("=== Adding, Updating And Deleting Object Properties ===");\r
// This project demonstrates adding, updating and deleting object properties in JavaScript.\r
// Add your implementation here\r
\r
`,Ce=`// Project: Checking Properties: In Operator And Hasownproperty()\r
// Description: This project demonstrates checking properties: in operator and hasownproperty() in JavaScript.\r
\r
\r
console.log("=== Checking Properties: In Operator And Hasownproperty() ===");\r
// This project demonstrates checking properties: in operator and hasownproperty() in JavaScript.\r
// Add your implementation here\r
\r
`,ke=`// Project: Nested Objects And Arrays Of Objects\r
// Description: This project demonstrates nested objects and arrays of objects in JavaScript.\r
\r
\r
console.log("=== Nested Objects And Arrays Of Objects ===");\r
// This project demonstrates nested objects and arrays of objects in JavaScript.\r
// Add your implementation here\r
\r
`,De=`// Project: Accessing Deeply Nested Values\r
// Description: This project demonstrates accessing deeply nested values in JavaScript.\r
\r
\r
console.log("=== Accessing Deeply Nested Values ===");\r
// This project demonstrates accessing deeply nested values in JavaScript.\r
// Add your implementation here\r
\r
`,Je=`// Project: The This Keyword Inside Objects (Beginner-Friendly)\r
// Description: This project demonstrates the this keyword inside objects (beginner-friendly) in JavaScript.\r
\r
\r
const obj = {\r
    name: 'Object',\r
    regularMethod() {\r
        console.log('regularMethod this:', this.name);\r
    },\r
    arrowMethod: () => {\r
        console.log('arrowMethod this:', this.name);\r
    }\r
};\r
obj.regularMethod(); // 'Object'\r
obj.arrowMethod();   // undefined (or window)\r
\r
`,Fe=`// Project: Arrow Functions Vs Normal Functions: This Difference\r
// Description: This project demonstrates arrow functions vs normal functions: this difference in JavaScript.\r
\r
\r
const add = (a, b) => a + b;\r
const square = x => x * x;\r
const greet = name => \`Hello, \${name}!\`;\r
console.log(add(3, 4));\r
console.log(square(5));\r
console.log(greet('Alice'));\r
// Lexical this example\r
const obj = {\r
    name: 'Object',\r
    regular: function() { console.log(this.name); },\r
    arrow: () => console.log(this.name)\r
};\r
obj.regular(); // 'Object'\r
obj.arrow();   // undefined (window/global)\r
\r
`,Ue=`// Project: Iterating Objects: For...In Loop\r
// Description: This project demonstrates iterating objects: for...in loop in JavaScript.\r
\r
\r
console.log("=== Iterating Objects: For...In Loop ===");\r
// This project demonstrates iterating objects: for...in loop in JavaScript.\r
// Add your implementation here\r
\r
`,Me=`// Project: Object.Keys(), Object.Values(), Object.Entries()\r
// Description: This project demonstrates object.keys(), object.values(), object.entries() in JavaScript.\r
\r
\r
console.log("=== Object.Keys(), Object.Values(), Object.Entries() ===");\r
// This project demonstrates object.keys(), object.values(), object.entries() in JavaScript.\r
// Add your implementation here\r
\r
`,Be=`// Project: Looping Arrays Of Objects Using Map, Filter, Reduce\r
// Description: This project demonstrates looping arrays of objects using map, filter, reduce in JavaScript.\r
\r
\r
const numbers = [1, 2, 3, 4, 5];\r
const doubled = numbers.map(n => n * 2);\r
console.log('Original:', numbers);\r
console.log('Doubled:', doubled);\r
\r
`,Le=`// Project: Objects As Reference Types\r
// Description: This project demonstrates objects as reference types in JavaScript.\r
\r
\r
console.log("=== Objects As Reference Types ===");\r
// This project demonstrates objects as reference types in JavaScript.\r
// Add your implementation here\r
\r
`,Ne=`// Project: Shallow Copy: Spread Operator And Object.Assign()\r
// Description: This project demonstrates shallow copy: spread operator and object.assign() in JavaScript.\r
\r
\r
// Spread with arrays\r
const arr1 = [1, 2];\r
const arr2 = [3, 4];\r
const combined = [...arr1, ...arr2];\r
console.log(combined);\r
// Spread with objects\r
const obj1 = { a: 1, b: 2 };\r
const obj2 = { c: 3 };\r
const merged = { ...obj1, ...obj2 };\r
console.log(merged);\r
// Rest parameters\r
function sum(...numbers) {\r
    return numbers.reduce((total, n) => total + n, 0);\r
}\r
console.log(sum(1, 2, 3, 4));\r
\r
`,Ve=`// Project: Deep Copy: Structuredclone() And Json Technique\r
// Description: This project demonstrates deep copy: structuredclone() and json technique in JavaScript.\r
\r
\r
const user = { name: 'Alice', age: 25 };\r
// Store\r
localStorage.setItem('user', JSON.stringify(user));\r
// Retrieve\r
const stored = JSON.parse(localStorage.getItem('user'));\r
console.log(stored);\r
// Clear\r
localStorage.removeItem('user');\r
\r
`,Re=`// Project: Shorthand Properties And Computed Property Names\r
// Description: This project demonstrates shorthand properties and computed property names in JavaScript.\r
\r
\r
console.log("=== Shorthand Properties And Computed Property Names ===");\r
// This project demonstrates shorthand properties and computed property names in JavaScript.\r
// Add your implementation here\r
\r
`,We=`// Project: Object Destructuring And Nested Destructuring\r
// Description: This project demonstrates object destructuring and nested destructuring in JavaScript.\r
\r
\r
// Array destructuring\r
const coordinates = [10, 20];\r
const [x, y] = coordinates;\r
console.log(\`x=\${x}, y=\${y}\`);\r
// Object destructuring\r
const user = { name: 'Alice', age: 25 };\r
const { name, age } = user;\r
console.log(\`name=\${name}, age=\${age}\`);\r
// With defaults\r
const { city = 'Unknown' } = user;\r
console.log(\`city=\${city}\`);\r
\r
`,$e=`// Project: Spread And Rest Operator For Objects\r
// Description: This project demonstrates spread and rest operator for objects in JavaScript.\r
\r
\r
// Spread with arrays\r
const arr1 = [1, 2];\r
const arr2 = [3, 4];\r
const combined = [...arr1, ...arr2];\r
console.log(combined);\r
// Spread with objects\r
const obj1 = { a: 1, b: 2 };\r
const obj2 = { c: 3 };\r
const merged = { ...obj1, ...obj2 };\r
console.log(merged);\r
// Rest parameters\r
function sum(...numbers) {\r
    return numbers.reduce((total, n) => total + n, 0);\r
}\r
console.log(sum(1, 2, 3, 4));\r
\r
`,Ke=`// Project: Default Values In Destructuring\r
// Description: This project demonstrates default values in destructuring in JavaScript.\r
\r
\r
// Array destructuring\r
const coordinates = [10, 20];\r
const [x, y] = coordinates;\r
console.log(\`x=\${x}, y=\${y}\`);\r
// Object destructuring\r
const user = { name: 'Alice', age: 25 };\r
const { name, age } = user;\r
console.log(\`name=\${name}, age=\${age}\`);\r
// With defaults\r
const { city = 'Unknown' } = user;\r
console.log(\`city=\${city}\`);\r
\r
`,qe=`// Project: Getters And Setters\r
// Description: This project demonstrates getters and setters in JavaScript.\r
\r
\r
console.log("=== Getters And Setters ===");\r
// This project demonstrates getters and setters in JavaScript.\r
// Add your implementation here\r
\r
`,He=`// Project: Optional Chaining (?.) And Nullish Coalescing (??)\r
// Description: This project demonstrates optional chaining (?.) and nullish coalescing (??) in JavaScript.\r
\r
\r
const products = [\r
    { name: 'Laptop', price: 800, discount: 0.1 },\r
    { name: 'Mouse', price: 25, discount: 0 },\r
    { name: 'Keyboard', price: 45, discount: 0.05 }\r
];\r
const total = products\r
    .filter(p => p.discount > 0)\r
    .map(p => p.price * (1 - p.discount))\r
    .reduce((sum, val) => sum + val, 0);\r
console.log('Total discounted price:', total);\r
\r
`,ze=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Object.Freeze(), Object.Seal() And Preventextensions()</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Object.Freeze(), Object.Seal() And Preventextensions()</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Object.Freeze(), Object.Seal() And Preventextensions()\r
        // Write your code here\r
        \r
console.log("=== Object.Freeze(), Object.Seal() And Preventextensions() ===");\r
// This project demonstrates object.freeze(), object.seal() and preventextensions() in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,Ge=`// Project: Constructor Functions And The New Keyword (Overview)\r
// Description: This project demonstrates constructor functions and the new keyword (overview) in JavaScript.\r
\r
\r
// Constructor function\r
function Animal(name) {\r
    this.name = name;\r
}\r
Animal.prototype.speak = function() {\r
    console.log(\`\${this.name} makes a noise.\`);\r
};\r
// ES6 class\r
class Dog extends Animal {\r
    speak() {\r
        console.log(\`\${this.name} barks.\`);\r
    }\r
}\r
const animal = new Animal('Generic');\r
animal.speak();\r
const dog = new Dog('Rex');\r
dog.speak();\r
\r
`,Ye=`// Project: Prototype And Prototype Chain (Conceptual Understanding)\r
// Description: This project demonstrates prototype and prototype chain (conceptual understanding) in JavaScript.\r
\r
\r
console.log("=== Prototype And Prototype Chain (Conceptual Understanding) ===");\r
// This project demonstrates prototype and prototype chain (conceptual understanding) in JavaScript.\r
// Add your implementation here\r
\r
`,Qe=`// Project: Adding Methods Using Prototypes\r
// Description: This project demonstrates adding methods using prototypes in JavaScript.\r
\r
\r
console.log("=== Adding Methods Using Prototypes ===");\r
// This project demonstrates adding methods using prototypes in JavaScript.\r
// Add your implementation here\r
\r
`,Xe=`// Project: Es6 Class Syntax: Constructor, Instance Methods, Static Methods\r
// Description: This project demonstrates es6 class syntax: constructor, instance methods, static methods in JavaScript.\r
\r
\r
// Constructor function\r
function Animal(name) {\r
    this.name = name;\r
}\r
Animal.prototype.speak = function() {\r
    console.log(\`\${this.name} makes a noise.\`);\r
};\r
// ES6 class\r
class Dog extends Animal {\r
    speak() {\r
        console.log(\`\${this.name} barks.\`);\r
    }\r
}\r
const animal = new Animal('Generic');\r
animal.speak();\r
const dog = new Dog('Rex');\r
dog.speak();\r
\r
`,Ze=`// Project: Class Inheritance Using Extends\r
// Description: This project demonstrates class inheritance using extends in JavaScript.\r
\r
\r
// Constructor function\r
function Animal(name) {\r
    this.name = name;\r
}\r
Animal.prototype.speak = function() {\r
    console.log(\`\${this.name} makes a noise.\`);\r
};\r
// ES6 class\r
class Dog extends Animal {\r
    speak() {\r
        console.log(\`\${this.name} barks.\`);\r
    }\r
}\r
const animal = new Animal('Generic');\r
animal.speak();\r
const dog = new Dog('Rex');\r
dog.speak();\r
\r
`,en=`// Project: Super() Keyword And Method Overriding\r
// Description: This project demonstrates super() keyword and method overriding in JavaScript.\r
\r
\r
console.log("=== Super() Keyword And Method Overriding ===");\r
// This project demonstrates super() keyword and method overriding in JavaScript.\r
// Add your implementation here\r
\r
`,nn=`// Project: Json.Parse() And Json.Stringify()\r
// Description: This project demonstrates json.parse() and json.stringify() in JavaScript.\r
\r
\r
const user = { name: 'Alice', age: 25 };\r
// Store\r
localStorage.setItem('user', JSON.stringify(user));\r
// Retrieve\r
const stored = JSON.parse(localStorage.getItem('user'));\r
console.log(stored);\r
// Clear\r
localStorage.removeItem('user');\r
\r
`,tn=`// Project: Storing And Retrieving Objects In Localstorage\r
// Description: This project demonstrates storing and retrieving objects in localstorage in JavaScript.\r
\r
\r
const user = { name: 'Alice', age: 25 };\r
// Store\r
localStorage.setItem('user', JSON.stringify(user));\r
// Retrieve\r
const stored = JSON.parse(localStorage.getItem('user'));\r
console.log(stored);\r
// Clear\r
localStorage.removeItem('user');\r
\r
`,rn=`// Project: Merging Objects And Checking Object Equality\r
// Description: This project demonstrates merging objects and checking object equality in JavaScript.\r
\r
\r
console.log("=== Merging Objects And Checking Object Equality ===");\r
// This project demonstrates merging objects and checking object equality in JavaScript.\r
// Add your implementation here\r
\r
`,an=`// Project: Working With Arrays Of Objects (Students, Products, Tasks)\r
// Description: This project demonstrates working with arrays of objects (students, products, tasks) in JavaScript.\r
\r
\r
console.log("=== Working With Arrays Of Objects (Students, Products, Tasks) ===");\r
// This project demonstrates working with arrays of objects (students, products, tasks) in JavaScript.\r
// Add your implementation here\r
\r
`,on=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Map() With Objects – Transforming Shapes And Selecting Fields</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Map() With Objects – Transforming Shapes And Selecting Fields</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Map() With Objects – Transforming Shapes And Selecting Fields\r
        // Write your code here\r
        \r
const numbers = [1, 2, 3, 4, 5];\r
const doubled = numbers.map(n => n * 2);\r
console.log('Original:', numbers);\r
console.log('Doubled:', doubled);\r
\r
    <\/script>\r
</body>\r
</html>\r
`,sn=`// Project: Filter() With Multiple Conditions And Nested Object Filtering\r
// Description: This project demonstrates filter() with multiple conditions and nested object filtering in JavaScript.\r
\r
\r
const products = [\r
    { name: 'Laptop', price: 800, inStock: true },\r
    { name: 'Mouse', price: 25, inStock: true },\r
    { name: 'Keyboard', price: 45, inStock: false },\r
    { name: 'Monitor', price: 300, inStock: true }\r
];\r
const cheapInStock = products.filter(p => p.price < 50 && p.inStock);\r
console.log('Cheap in-stock products:', cheapInStock);\r
\r
`,cn=`// Project: Reduce() For Totals, Grouping, Counting And Analytics\r
// Description: This project demonstrates reduce() for totals, grouping, counting and analytics in JavaScript.\r
\r
\r
const cart = [\r
    { name: 'Apple', price: 0.5, qty: 4 },\r
    { name: 'Banana', price: 0.3, qty: 6 },\r
    { name: 'Orange', price: 0.8, qty: 3 }\r
];\r
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);\r
console.log('Total cost:', total);\r
\r
`,dn=`// Project: Find() And Findindex() – Locating Complex Objects\r
// Description: This project demonstrates find() and findindex() – locating complex objects in JavaScript.\r
\r
\r
const students = [\r
    { id: 1, name: 'Alice' },\r
    { id: 2, name: 'Bob' },\r
    { id: 3, name: 'Charlie' }\r
];\r
const student = students.find(s => s.id === 2);\r
console.log('Found:', student);\r
const index = students.findIndex(s => s.name === 'Charlie');\r
console.log('Index of Charlie:', index);\r
\r
`,ln=`// Project: Sort() With Custom Comparator Functions (Marks, Price, Name)\r
// Description: This project demonstrates sort() with custom comparator functions (marks, price, name) in JavaScript.\r
\r
\r
const products = [\r
    { name: 'Laptop', price: 800, rating: 4.5 },\r
    { name: 'Mouse', price: 25, rating: 4.8 },\r
    { name: 'Keyboard', price: 45, rating: 4.2 }\r
];\r
// Sort by price ascending\r
products.sort((a, b) => a.price - b.price);\r
console.log('Sorted by price:', products);\r
// Sort by rating descending\r
products.sort((a, b) => b.rating - a.rating);\r
console.log('Sorted by rating:', products);\r
\r
`,pn=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Some() And Every() With Object Validation</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Some() And Every() With Object Validation</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Some() And Every() With Object Validation\r
        // Write your code here\r
        \r
const tasks = [\r
    { title: 'Task 1', completed: true },\r
    { title: 'Task 2', completed: false },\r
    { title: 'Task 3', completed: true }\r
];\r
const allDone = tasks.every(t => t.completed);\r
const anyDone = tasks.some(t => t.completed);\r
console.log('All completed?', allDone);\r
console.log('Any completed?', anyDone);\r
\r
    <\/script>\r
</body>\r
</html>\r
`,mn=`// Project: Chaining Array Methods (Map → Filter → Reduce)\r
// Description: This project demonstrates chaining array methods (map → filter → reduce) in JavaScript.\r
\r
\r
const numbers = [1, 2, 3, 4, 5];\r
const doubled = numbers.map(n => n * 2);\r
console.log('Original:', numbers);\r
console.log('Doubled:', doubled);\r
\r
`,un=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Deep Array Transformations Inside Nested Objects</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Deep Array Transformations Inside Nested Objects</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Deep Array Transformations Inside Nested Objects\r
        // Write your code here\r
        \r
console.log("=== Deep Array Transformations Inside Nested Objects ===");\r
// This project demonstrates deep array transformations inside nested objects in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,hn=`// Project: Real-World Datasets (Students, Courses, Products, Tasks)\r
// Description: This project demonstrates real-world datasets (students, courses, products, tasks) in JavaScript.\r
\r
\r
console.log("=== Real-World Datasets (Students, Courses, Products, Tasks) ===");\r
// This project demonstrates real-world datasets (students, courses, products, tasks) in JavaScript.\r
// Add your implementation here\r
\r
`,gn=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>What Is The Dom? Nodes, Elements And The Tree Structure</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>What Is The Dom? Nodes, Elements And The Tree Structure</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: What Is The Dom? Nodes, Elements And The Tree Structure\r
        // Write your code here\r
        \r
console.log("=== What Is The Dom? Nodes, Elements And The Tree Structure ===");\r
// This project demonstrates what is the dom? nodes, elements and the tree structure in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,vn=`// Project: Selecting Elements: Getelementbyid, Queryselector, Queryselectorall\r
// Description: This project demonstrates selecting elements: getelementbyid, queryselector, queryselectorall in JavaScript.\r
\r
\r
// This script expects an element with id="app" in the HTML\r
const app = document.getElementById('app');\r
if (app) {\r
    app.innerHTML = '<p>Text changed by JavaScript!</p>';\r
} else {\r
    console.log('Element #app not found');\r
}\r
\r
`,fn=`// Project: Changing Text, Html And Styles Dynamically\r
// Description: This project demonstrates changing text, html and styles dynamically in JavaScript.\r
\r
\r
console.log("=== Changing Text, Html And Styles Dynamically ===");\r
// This project demonstrates changing text, html and styles dynamically in JavaScript.\r
// Add your implementation here\r
\r
`,yn=`// Project: Creating, Appending And Removing Elements\r
// Description: This project demonstrates creating, appending and removing elements in JavaScript.\r
\r
\r
console.log("=== Creating, Appending And Removing Elements ===");\r
// This project demonstrates creating, appending and removing elements in JavaScript.\r
// Add your implementation here\r
\r
`,bn=`// Project: Working With Attributes, Classes And Data-* Attributes\r
// Description: This project demonstrates working with attributes, classes and data-* attributes in JavaScript.\r
\r
\r
// Constructor function\r
function Animal(name) {\r
    this.name = name;\r
}\r
Animal.prototype.speak = function() {\r
    console.log(\`\${this.name} makes a noise.\`);\r
};\r
// ES6 class\r
class Dog extends Animal {\r
    speak() {\r
        console.log(\`\${this.name} barks.\`);\r
    }\r
}\r
const animal = new Animal('Generic');\r
animal.speak();\r
const dog = new Dog('Rex');\r
dog.speak();\r
\r
`,xn=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Event Types: Click, Input, Change, Submit, Keyup, Keydown, Mouse Events</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Event Types: Click, Input, Change, Submit, Keyup, Keydown, Mouse Events</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Event Types: Click, Input, Change, Submit, Keyup, Keydown, Mouse Events\r
        // Write your code here\r
        \r
console.log("=== Event Types: Click, Input, Change, Submit, Keyup, Keydown, Mouse Events ===");\r
// This project demonstrates event types: click, input, change, submit, keyup, keydown, mouse events in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,jn=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Addeventlistener And Removing Event Listeners</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Addeventlistener And Removing Event Listeners</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Addeventlistener And Removing Event Listeners\r
        // Write your code here\r
        \r
console.log("=== Addeventlistener And Removing Event Listeners ===");\r
// This project demonstrates addeventlistener and removing event listeners in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,Tn=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Event Object Basics And Target Property</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Event Object Basics And Target Property</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Event Object Basics And Target Property\r
        // Write your code here\r
        \r
console.log("=== Event Object Basics And Target Property ===");\r
// This project demonstrates event object basics and target property in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,wn=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Event Bubbling And Capturing (Intro, Conceptual)</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Event Bubbling And Capturing (Intro, Conceptual)</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Event Bubbling And Capturing (Intro, Conceptual)\r
        // Write your code here\r
        \r
console.log("=== Event Bubbling And Capturing (Intro, Conceptual) ===");\r
// This project demonstrates event bubbling and capturing (intro, conceptual) in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,On=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Form Handling And Simple Validation With Javascript</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Form Handling And Simple Validation With Javascript</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Form Handling And Simple Validation With Javascript\r
        // Write your code here\r
        \r
console.log("=== Form Handling And Simple Validation With Javascript ===");\r
// This project demonstrates form handling and simple validation with javascript in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,An=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Building Components: Modal Popup, Tabs, Accordion</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Building Components: Modal Popup, Tabs, Accordion</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Building Components: Modal Popup, Tabs, Accordion\r
        // Write your code here\r
        \r
const app = document.getElementById('app');\r
app.innerHTML = \`\r
    <button id="openModal">Open Modal</button>\r
    <div id="modal" style="display:none; position:fixed; top:20%; left:20%; background:white; padding:20px; border:1px solid #ccc; z-index:1000;">\r
        <p>This is a modal!</p>\r
        <button id="closeModal">Close</button>\r
    </div>\r
    <div id="overlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:999;"></div>\r
\`;\r
const modal = document.getElementById('modal');\r
const overlay = document.getElementById('overlay');\r
const openBtn = document.getElementById('openModal');\r
const closeBtn = document.getElementById('closeModal');\r
function openModal() {\r
    modal.style.display = 'block';\r
    overlay.style.display = 'block';\r
}\r
function closeModal() {\r
    modal.style.display = 'none';\r
    overlay.style.display = 'none';\r
}\r
openBtn.addEventListener('click', openModal);\r
closeBtn.addEventListener('click', closeModal);\r
overlay.addEventListener('click', closeModal);\r
\r
    <\/script>\r
</body>\r
</html>\r
`,Sn=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Keyboard Events — Keydown, Keyup & Keypress</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Keyboard Events — Keydown, Keyup & Keypress</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Keyboard Events — Keydown, Keyup & Keypress\r
        // Write your code here\r
        \r
const app = document.getElementById('app');\r
app.innerHTML = \`\r
    <div id="box" style="width:50px; height:50px; background:blue; position:absolute; top:100px; left:100px;"></div>\r
    <p>Use arrow keys to move the box</p>\r
\`;\r
const box = document.getElementById('box');\r
let topPos = 100, leftPos = 100;\r
window.addEventListener('keydown', (e) => {\r
    const step = 10;\r
    switch(e.key) {\r
        case 'ArrowUp': topPos -= step; break;\r
        case 'ArrowDown': topPos += step; break;\r
        case 'ArrowLeft': leftPos -= step; break;\r
        case 'ArrowRight': leftPos += step; break;\r
        default: return;\r
    }\r
    box.style.top = topPos + 'px';\r
    box.style.left = leftPos + 'px';\r
});\r
\r
    <\/script>\r
</body>\r
</html>\r
`,_n=`// Project: Advanced: Function Declarations Vs Function Expressions\r
// Description: This project demonstrates advanced: function declarations vs function expressions in JavaScript.\r
\r
\r
// Function declaration (hoisted)\r
console.log(factorial(5)); // works even before definition\r
function factorial(n) {\r
    if (n <= 1) return 1;\r
    return n * factorial(n-1);\r
}\r
// Function expression (not hoisted)\r
const square = function(x) { return x * x; };\r
console.log(square(4));\r
\r
`,Pn=`// Project: Advanced: Parameters, Arguments And Default Parameters\r
// Description: This project demonstrates advanced: parameters, arguments and default parameters in JavaScript.\r
\r
\r
console.log("=== Advanced: Parameters, Arguments And Default Parameters ===");\r
// This project demonstrates advanced: parameters, arguments and default parameters in JavaScript.\r
// Add your implementation here\r
\r
`,En=`// Project: Advanced: Return Values And Early Returns\r
// Description: This project demonstrates advanced: return values and early returns in JavaScript.\r
\r
\r
console.log("=== Advanced: Return Values And Early Returns ===");\r
// This project demonstrates advanced: return values and early returns in JavaScript.\r
// Add your implementation here\r
\r
`,In=`// Project: Advanced: Function Scope Basics: Local Vs Global Variables\r
// Description: This project demonstrates advanced: function scope basics: local vs global variables in JavaScript.\r
\r
\r
console.log("=== Advanced: Function Scope Basics: Local Vs Global Variables ===");\r
// This project demonstrates advanced: function scope basics: local vs global variables in JavaScript.\r
// Add your implementation here\r
\r
`,Cn=`// Project: Advanced: Arrow Functions And Concise Syntax\r
// Description: This project demonstrates advanced: arrow functions and concise syntax in JavaScript.\r
\r
\r
const add = (a, b) => a + b;\r
const square = x => x * x;\r
const greet = name => \`Hello, \${name}!\`;\r
console.log(add(3, 4));\r
console.log(square(5));\r
console.log(greet('Alice'));\r
// Lexical this example\r
const obj = {\r
    name: 'Object',\r
    regular: function() { console.log(this.name); },\r
    arrow: () => console.log(this.name)\r
};\r
obj.regular(); // 'Object'\r
obj.arrow();   // undefined (window/global)\r
\r
`,kn=`// Project: Advanced: Pure Functions Vs Side Effects (Intro Idea)\r
// Description: This project demonstrates advanced: pure functions vs side effects (intro idea) in JavaScript.\r
\r
\r
console.log("=== Advanced: Pure Functions Vs Side Effects (Intro Idea) ===");\r
// This project demonstrates advanced: pure functions vs side effects (intro idea) in JavaScript.\r
// Add your implementation here\r
\r
`,Dn=`// Project: Advanced: Creating Arrays, Indexing And Length\r
// Description: This project demonstrates advanced: creating arrays, indexing and length in JavaScript.\r
\r
\r
console.log("=== Advanced: Creating Arrays, Indexing And Length ===");\r
// This project demonstrates advanced: creating arrays, indexing and length in JavaScript.\r
// Add your implementation here\r
\r
`,Jn=`// Project: Advanced: Mutating Methods: Push, Pop, Shift, Unshift, Splice\r
// Description: This project demonstrates advanced: mutating methods: push, pop, shift, unshift, splice in JavaScript.\r
\r
\r
console.log("=== Advanced: Mutating Methods: Push, Pop, Shift, Unshift, Splice ===");\r
// This project demonstrates advanced: mutating methods: push, pop, shift, unshift, splice in JavaScript.\r
// Add your implementation here\r
\r
`,Fn=`// Project: Advanced: Non-Mutating Methods: Slice, Concat\r
// Description: This project demonstrates advanced: non-mutating methods: slice, concat in JavaScript.\r
\r
\r
console.log("=== Advanced: Non-Mutating Methods: Slice, Concat ===");\r
// This project demonstrates advanced: non-mutating methods: slice, concat in JavaScript.\r
// Add your implementation here\r
\r
`,Un=`// Project: Advanced: Searching: Indexof, Includes, Find, Findindex\r
// Description: This project demonstrates advanced: searching: indexof, includes, find, findindex in JavaScript.\r
\r
\r
const students = [\r
    { id: 1, name: 'Alice' },\r
    { id: 2, name: 'Bob' },\r
    { id: 3, name: 'Charlie' }\r
];\r
const student = students.find(s => s.id === 2);\r
console.log('Found:', student);\r
const index = students.findIndex(s => s.name === 'Charlie');\r
console.log('Index of Charlie:', index);\r
\r
`,Mn=`// Project: Advanced: Iterating Arrays With For, For-Of And Foreach\r
// Description: This project demonstrates advanced: iterating arrays with for, for-of and foreach in JavaScript.\r
\r
\r
console.log("=== Advanced: Iterating Arrays With For, For-Of And Foreach ===");\r
// This project demonstrates advanced: iterating arrays with for, for-of and foreach in JavaScript.\r
// Add your implementation here\r
\r
`,Bn=`// Project: Advanced: Intro To Higher-Order Methods: Map, Filter, Reduce (Light Overview)\r
// Description: This project demonstrates advanced: intro to higher-order methods: map, filter, reduce (light overview) in JavaScript.\r
\r
\r
const numbers = [1, 2, 3, 4, 5];\r
const doubled = numbers.map(n => n * 2);\r
console.log('Original:', numbers);\r
console.log('Doubled:', doubled);\r
\r
`,Ln=`// Project: Advanced: Projects Basic\r
// Description: This project demonstrates advanced: projects basic in JavaScript.\r
\r
\r
console.log("=== Advanced: Projects Basic ===");\r
// This project demonstrates advanced: projects basic in JavaScript.\r
// Add your implementation here\r
\r
`,Nn=`// Project: Advanced: Project Advance\r
// Description: This project demonstrates advanced: project advance in JavaScript.\r
\r
\r
console.log("=== Advanced: Project Advance ===");\r
// This project demonstrates advanced: project advance in JavaScript.\r
// Add your implementation here\r
\r
`,Vn=`// Project: Advanced: Object Literals: Keys, Values, Methods\r
// Description: This project demonstrates advanced: object literals: keys, values, methods in JavaScript.\r
\r
\r
const person = {\r
    name: 'Alice',\r
    age: 25,\r
    greet() {\r
        console.log(\`Hi, I'm \${this.name}\`);\r
    }\r
};\r
console.log(person.name);\r
person.greet();\r
// Dot vs bracket\r
console.log(person['age']);\r
person['city'] = 'New York';\r
console.log(person);\r
\r
`,Rn=`// Project: Advanced: Accessing Properties: Dot Vs Bracket Notation\r
// Description: This project demonstrates advanced: accessing properties: dot vs bracket notation in JavaScript.\r
\r
\r
console.log("=== Advanced: Accessing Properties: Dot Vs Bracket Notation ===");\r
// This project demonstrates advanced: accessing properties: dot vs bracket notation in JavaScript.\r
// Add your implementation here\r
\r
`,Wn=`// Project: Advanced: Nested Objects And Arrays Of Objects\r
// Description: This project demonstrates advanced: nested objects and arrays of objects in JavaScript.\r
\r
\r
console.log("=== Advanced: Nested Objects And Arrays Of Objects ===");\r
// This project demonstrates advanced: nested objects and arrays of objects in JavaScript.\r
// Add your implementation here\r
\r
`,$n=`// Project: Advanced: The This Keyword (Beginner-Level Understanding)\r
// Description: This project demonstrates advanced: the this keyword (beginner-level understanding) in JavaScript.\r
\r
\r
const obj = {\r
    name: 'Object',\r
    regularMethod() {\r
        console.log('regularMethod this:', this.name);\r
    },\r
    arrowMethod: () => {\r
        console.log('arrowMethod this:', this.name);\r
    }\r
};\r
obj.regularMethod(); // 'Object'\r
obj.arrowMethod();   // undefined (or window)\r
\r
`,Kn=`// Project: Advanced: Constructor Functions And The New Keyword (Overview)\r
// Description: This project demonstrates advanced: constructor functions and the new keyword (overview) in JavaScript.\r
\r
\r
// Constructor function\r
function Animal(name) {\r
    this.name = name;\r
}\r
Animal.prototype.speak = function() {\r
    console.log(\`\${this.name} makes a noise.\`);\r
};\r
// ES6 class\r
class Dog extends Animal {\r
    speak() {\r
        console.log(\`\${this.name} barks.\`);\r
    }\r
}\r
const animal = new Animal('Generic');\r
animal.speak();\r
const dog = new Dog('Rex');\r
dog.speak();\r
\r
`,qn=`// Project: Advanced: Es6 Class Syntax, Constructor, Methods And Basic Inheritance (Conceptual)\r
// Description: This project demonstrates advanced: es6 class syntax, constructor, methods and basic inheritance (conceptual) in JavaScript.\r
\r
\r
// Constructor function\r
function Animal(name) {\r
    this.name = name;\r
}\r
Animal.prototype.speak = function() {\r
    console.log(\`\${this.name} makes a noise.\`);\r
};\r
// ES6 class\r
class Dog extends Animal {\r
    speak() {\r
        console.log(\`\${this.name} barks.\`);\r
    }\r
}\r
const animal = new Animal('Generic');\r
animal.speak();\r
const dog = new Dog('Rex');\r
dog.speak();\r
\r
`,Hn=`// Project: Advanced: Object Literals: Keys, Values, Methods\r
// Description: This project demonstrates advanced: object literals: keys, values, methods in JavaScript.\r
\r
\r
const person = {\r
    name: 'Alice',\r
    age: 25,\r
    greet() {\r
        console.log(\`Hi, I'm \${this.name}\`);\r
    }\r
};\r
console.log(person.name);\r
person.greet();\r
// Dot vs bracket\r
console.log(person['age']);\r
person['city'] = 'New York';\r
console.log(person);\r
\r
`,zn=`// Project: Advanced: Accessing Properties: Dot Vs Bracket Notation\r
// Description: This project demonstrates advanced: accessing properties: dot vs bracket notation in JavaScript.\r
\r
\r
console.log("=== Advanced: Accessing Properties: Dot Vs Bracket Notation ===");\r
// This project demonstrates advanced: accessing properties: dot vs bracket notation in JavaScript.\r
// Add your implementation here\r
\r
`,Gn=`// Project: Advanced: Adding, Updating And Deleting Object Properties\r
// Description: This project demonstrates advanced: adding, updating and deleting object properties in JavaScript.\r
\r
\r
console.log("=== Advanced: Adding, Updating And Deleting Object Properties ===");\r
// This project demonstrates advanced: adding, updating and deleting object properties in JavaScript.\r
// Add your implementation here\r
\r
`,Yn=`// Project: Advanced: Checking Properties: In Operator And Hasownproperty()\r
// Description: This project demonstrates advanced: checking properties: in operator and hasownproperty() in JavaScript.\r
\r
\r
console.log("=== Advanced: Checking Properties: In Operator And Hasownproperty() ===");\r
// This project demonstrates advanced: checking properties: in operator and hasownproperty() in JavaScript.\r
// Add your implementation here\r
\r
`,Qn=`// Project: Advanced: Nested Objects And Arrays Of Objects\r
// Description: This project demonstrates advanced: nested objects and arrays of objects in JavaScript.\r
\r
\r
console.log("=== Advanced: Nested Objects And Arrays Of Objects ===");\r
// This project demonstrates advanced: nested objects and arrays of objects in JavaScript.\r
// Add your implementation here\r
\r
`,Xn=`// Project: Advanced: Accessing Deeply Nested Values\r
// Description: This project demonstrates advanced: accessing deeply nested values in JavaScript.\r
\r
\r
console.log("=== Advanced: Accessing Deeply Nested Values ===");\r
// This project demonstrates advanced: accessing deeply nested values in JavaScript.\r
// Add your implementation here\r
\r
`,Zn=`// Project: Advanced: The This Keyword Inside Objects (Beginner-Friendly)\r
// Description: This project demonstrates advanced: the this keyword inside objects (beginner-friendly) in JavaScript.\r
\r
\r
const obj = {\r
    name: 'Object',\r
    regularMethod() {\r
        console.log('regularMethod this:', this.name);\r
    },\r
    arrowMethod: () => {\r
        console.log('arrowMethod this:', this.name);\r
    }\r
};\r
obj.regularMethod(); // 'Object'\r
obj.arrowMethod();   // undefined (or window)\r
\r
`,et=`// Project: Advanced: Arrow Functions Vs Normal Functions: This Difference\r
// Description: This project demonstrates advanced: arrow functions vs normal functions: this difference in JavaScript.\r
\r
\r
const add = (a, b) => a + b;\r
const square = x => x * x;\r
const greet = name => \`Hello, \${name}!\`;\r
console.log(add(3, 4));\r
console.log(square(5));\r
console.log(greet('Alice'));\r
// Lexical this example\r
const obj = {\r
    name: 'Object',\r
    regular: function() { console.log(this.name); },\r
    arrow: () => console.log(this.name)\r
};\r
obj.regular(); // 'Object'\r
obj.arrow();   // undefined (window/global)\r
\r
`,nt=`// Project: Advanced: Iterating Objects: For...In Loop\r
// Description: This project demonstrates advanced: iterating objects: for...in loop in JavaScript.\r
\r
\r
console.log("=== Advanced: Iterating Objects: For...In Loop ===");\r
// This project demonstrates advanced: iterating objects: for...in loop in JavaScript.\r
// Add your implementation here\r
\r
`,tt=`// Project: Advanced: Object.Keys(), Object.Values(), Object.Entries()\r
// Description: This project demonstrates advanced: object.keys(), object.values(), object.entries() in JavaScript.\r
\r
\r
console.log("=== Advanced: Object.Keys(), Object.Values(), Object.Entries() ===");\r
// This project demonstrates advanced: object.keys(), object.values(), object.entries() in JavaScript.\r
// Add your implementation here\r
\r
`,rt=`// Project: Advanced: Looping Arrays Of Objects Using Map, Filter, Reduce\r
// Description: This project demonstrates advanced: looping arrays of objects using map, filter, reduce in JavaScript.\r
\r
\r
const numbers = [1, 2, 3, 4, 5];\r
const doubled = numbers.map(n => n * 2);\r
console.log('Original:', numbers);\r
console.log('Doubled:', doubled);\r
\r
`,at=`// Project: Advanced: Objects As Reference Types\r
// Description: This project demonstrates advanced: objects as reference types in JavaScript.\r
\r
\r
console.log("=== Advanced: Objects As Reference Types ===");\r
// This project demonstrates advanced: objects as reference types in JavaScript.\r
// Add your implementation here\r
\r
`,ot=`// Project: Advanced: Shallow Copy: Spread Operator And Object.Assign()\r
// Description: This project demonstrates advanced: shallow copy: spread operator and object.assign() in JavaScript.\r
\r
\r
// Spread with arrays\r
const arr1 = [1, 2];\r
const arr2 = [3, 4];\r
const combined = [...arr1, ...arr2];\r
console.log(combined);\r
// Spread with objects\r
const obj1 = { a: 1, b: 2 };\r
const obj2 = { c: 3 };\r
const merged = { ...obj1, ...obj2 };\r
console.log(merged);\r
// Rest parameters\r
function sum(...numbers) {\r
    return numbers.reduce((total, n) => total + n, 0);\r
}\r
console.log(sum(1, 2, 3, 4));\r
\r
`,it=`// Project: Advanced: Deep Copy: Structuredclone() And Json Technique\r
// Description: This project demonstrates advanced: deep copy: structuredclone() and json technique in JavaScript.\r
\r
\r
const user = { name: 'Alice', age: 25 };\r
// Store\r
localStorage.setItem('user', JSON.stringify(user));\r
// Retrieve\r
const stored = JSON.parse(localStorage.getItem('user'));\r
console.log(stored);\r
// Clear\r
localStorage.removeItem('user');\r
\r
`,st=`// Project: Advanced: Shorthand Properties And Computed Property Names\r
// Description: This project demonstrates advanced: shorthand properties and computed property names in JavaScript.\r
\r
\r
console.log("=== Advanced: Shorthand Properties And Computed Property Names ===");\r
// This project demonstrates advanced: shorthand properties and computed property names in JavaScript.\r
// Add your implementation here\r
\r
`,ct=`// Project: Advanced: Object Destructuring And Nested Destructuring\r
// Description: This project demonstrates advanced: object destructuring and nested destructuring in JavaScript.\r
\r
\r
// Array destructuring\r
const coordinates = [10, 20];\r
const [x, y] = coordinates;\r
console.log(\`x=\${x}, y=\${y}\`);\r
// Object destructuring\r
const user = { name: 'Alice', age: 25 };\r
const { name, age } = user;\r
console.log(\`name=\${name}, age=\${age}\`);\r
// With defaults\r
const { city = 'Unknown' } = user;\r
console.log(\`city=\${city}\`);\r
\r
`,dt=`// Project: Advanced: Spread And Rest Operator For Objects\r
// Description: This project demonstrates advanced: spread and rest operator for objects in JavaScript.\r
\r
\r
// Spread with arrays\r
const arr1 = [1, 2];\r
const arr2 = [3, 4];\r
const combined = [...arr1, ...arr2];\r
console.log(combined);\r
// Spread with objects\r
const obj1 = { a: 1, b: 2 };\r
const obj2 = { c: 3 };\r
const merged = { ...obj1, ...obj2 };\r
console.log(merged);\r
// Rest parameters\r
function sum(...numbers) {\r
    return numbers.reduce((total, n) => total + n, 0);\r
}\r
console.log(sum(1, 2, 3, 4));\r
\r
`,lt=`// Project: Advanced: Default Values In Destructuring\r
// Description: This project demonstrates advanced: default values in destructuring in JavaScript.\r
\r
\r
// Array destructuring\r
const coordinates = [10, 20];\r
const [x, y] = coordinates;\r
console.log(\`x=\${x}, y=\${y}\`);\r
// Object destructuring\r
const user = { name: 'Alice', age: 25 };\r
const { name, age } = user;\r
console.log(\`name=\${name}, age=\${age}\`);\r
// With defaults\r
const { city = 'Unknown' } = user;\r
console.log(\`city=\${city}\`);\r
\r
`,pt=`// Project: Advanced: Getters And Setters\r
// Description: This project demonstrates advanced: getters and setters in JavaScript.\r
\r
\r
console.log("=== Advanced: Getters And Setters ===");\r
// This project demonstrates advanced: getters and setters in JavaScript.\r
// Add your implementation here\r
\r
`,mt=`// Project: Advanced: Optional Chaining (?.) And Nullish Coalescing (??)\r
// Description: This project demonstrates advanced: optional chaining (?.) and nullish coalescing (??) in JavaScript.\r
\r
\r
const products = [\r
    { name: 'Laptop', price: 800, discount: 0.1 },\r
    { name: 'Mouse', price: 25, discount: 0 },\r
    { name: 'Keyboard', price: 45, discount: 0.05 }\r
];\r
const total = products\r
    .filter(p => p.discount > 0)\r
    .map(p => p.price * (1 - p.discount))\r
    .reduce((sum, val) => sum + val, 0);\r
console.log('Total discounted price:', total);\r
\r
`,ut=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Advanced: Object.Freeze(), Object.Seal() And Preventextensions()</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Advanced: Object.Freeze(), Object.Seal() And Preventextensions()</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Advanced: Object.Freeze(), Object.Seal() And Preventextensions()\r
        // Write your code here\r
        \r
console.log("=== Advanced: Object.Freeze(), Object.Seal() And Preventextensions() ===");\r
// This project demonstrates advanced: object.freeze(), object.seal() and preventextensions() in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,ht=`// Project: Advanced: Constructor Functions And The New Keyword (Overview)\r
// Description: This project demonstrates advanced: constructor functions and the new keyword (overview) in JavaScript.\r
\r
\r
// Constructor function\r
function Animal(name) {\r
    this.name = name;\r
}\r
Animal.prototype.speak = function() {\r
    console.log(\`\${this.name} makes a noise.\`);\r
};\r
// ES6 class\r
class Dog extends Animal {\r
    speak() {\r
        console.log(\`\${this.name} barks.\`);\r
    }\r
}\r
const animal = new Animal('Generic');\r
animal.speak();\r
const dog = new Dog('Rex');\r
dog.speak();\r
\r
`,gt=`// Project: Advanced: Prototype And Prototype Chain (Conceptual Understanding)\r
// Description: This project demonstrates advanced: prototype and prototype chain (conceptual understanding) in JavaScript.\r
\r
\r
console.log("=== Advanced: Prototype And Prototype Chain (Conceptual Understanding) ===");\r
// This project demonstrates advanced: prototype and prototype chain (conceptual understanding) in JavaScript.\r
// Add your implementation here\r
\r
`,vt=`// Project: Advanced: Adding Methods Using Prototypes\r
// Description: This project demonstrates advanced: adding methods using prototypes in JavaScript.\r
\r
\r
console.log("=== Advanced: Adding Methods Using Prototypes ===");\r
// This project demonstrates advanced: adding methods using prototypes in JavaScript.\r
// Add your implementation here\r
\r
`,ft=`// Project: Advanced: Es6 Class Syntax: Constructor, Instance Methods, Static Methods\r
// Description: This project demonstrates advanced: es6 class syntax: constructor, instance methods, static methods in JavaScript.\r
\r
\r
// Constructor function\r
function Animal(name) {\r
    this.name = name;\r
}\r
Animal.prototype.speak = function() {\r
    console.log(\`\${this.name} makes a noise.\`);\r
};\r
// ES6 class\r
class Dog extends Animal {\r
    speak() {\r
        console.log(\`\${this.name} barks.\`);\r
    }\r
}\r
const animal = new Animal('Generic');\r
animal.speak();\r
const dog = new Dog('Rex');\r
dog.speak();\r
\r
`,yt=`// Project: Advanced: Class Inheritance Using Extends\r
// Description: This project demonstrates advanced: class inheritance using extends in JavaScript.\r
\r
\r
// Constructor function\r
function Animal(name) {\r
    this.name = name;\r
}\r
Animal.prototype.speak = function() {\r
    console.log(\`\${this.name} makes a noise.\`);\r
};\r
// ES6 class\r
class Dog extends Animal {\r
    speak() {\r
        console.log(\`\${this.name} barks.\`);\r
    }\r
}\r
const animal = new Animal('Generic');\r
animal.speak();\r
const dog = new Dog('Rex');\r
dog.speak();\r
\r
`,bt=`// Project: Advanced: Super() Keyword And Method Overriding\r
// Description: This project demonstrates advanced: super() keyword and method overriding in JavaScript.\r
\r
\r
console.log("=== Advanced: Super() Keyword And Method Overriding ===");\r
// This project demonstrates advanced: super() keyword and method overriding in JavaScript.\r
// Add your implementation here\r
\r
`,xt=`// Project: Advanced: Json.Parse() And Json.Stringify()\r
// Description: This project demonstrates advanced: json.parse() and json.stringify() in JavaScript.\r
\r
\r
const user = { name: 'Alice', age: 25 };\r
// Store\r
localStorage.setItem('user', JSON.stringify(user));\r
// Retrieve\r
const stored = JSON.parse(localStorage.getItem('user'));\r
console.log(stored);\r
// Clear\r
localStorage.removeItem('user');\r
\r
`,jt=`// Project: Advanced: Storing And Retrieving Objects In Localstorage\r
// Description: This project demonstrates advanced: storing and retrieving objects in localstorage in JavaScript.\r
\r
\r
const user = { name: 'Alice', age: 25 };\r
// Store\r
localStorage.setItem('user', JSON.stringify(user));\r
// Retrieve\r
const stored = JSON.parse(localStorage.getItem('user'));\r
console.log(stored);\r
// Clear\r
localStorage.removeItem('user');\r
\r
`,Tt=`// Project: Advanced: Merging Objects And Checking Object Equality\r
// Description: This project demonstrates advanced: merging objects and checking object equality in JavaScript.\r
\r
\r
console.log("=== Advanced: Merging Objects And Checking Object Equality ===");\r
// This project demonstrates advanced: merging objects and checking object equality in JavaScript.\r
// Add your implementation here\r
\r
`,wt=`// Project: Advanced: Working With Arrays Of Objects (Students, Products, Tasks)\r
// Description: This project demonstrates advanced: working with arrays of objects (students, products, tasks) in JavaScript.\r
\r
\r
console.log("=== Advanced: Working With Arrays Of Objects (Students, Products, Tasks) ===");\r
// This project demonstrates advanced: working with arrays of objects (students, products, tasks) in JavaScript.\r
// Add your implementation here\r
\r
`,Ot=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Advanced: Map() With Objects – Transforming Shapes And Selecting Fields</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Advanced: Map() With Objects – Transforming Shapes And Selecting Fields</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Advanced: Map() With Objects – Transforming Shapes And Selecting Fields\r
        // Write your code here\r
        \r
const numbers = [1, 2, 3, 4, 5];\r
const doubled = numbers.map(n => n * 2);\r
console.log('Original:', numbers);\r
console.log('Doubled:', doubled);\r
\r
    <\/script>\r
</body>\r
</html>\r
`,At=`// Project: Advanced: Filter() With Multiple Conditions And Nested Object Filtering\r
// Description: This project demonstrates advanced: filter() with multiple conditions and nested object filtering in JavaScript.\r
\r
\r
const products = [\r
    { name: 'Laptop', price: 800, inStock: true },\r
    { name: 'Mouse', price: 25, inStock: true },\r
    { name: 'Keyboard', price: 45, inStock: false },\r
    { name: 'Monitor', price: 300, inStock: true }\r
];\r
const cheapInStock = products.filter(p => p.price < 50 && p.inStock);\r
console.log('Cheap in-stock products:', cheapInStock);\r
\r
`,St=`// Project: Advanced: Reduce() For Totals, Grouping, Counting And Analytics\r
// Description: This project demonstrates advanced: reduce() for totals, grouping, counting and analytics in JavaScript.\r
\r
\r
const cart = [\r
    { name: 'Apple', price: 0.5, qty: 4 },\r
    { name: 'Banana', price: 0.3, qty: 6 },\r
    { name: 'Orange', price: 0.8, qty: 3 }\r
];\r
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);\r
console.log('Total cost:', total);\r
\r
`,_t=`// Project: Advanced: Find() And Findindex() – Locating Complex Objects\r
// Description: This project demonstrates advanced: find() and findindex() – locating complex objects in JavaScript.\r
\r
\r
const students = [\r
    { id: 1, name: 'Alice' },\r
    { id: 2, name: 'Bob' },\r
    { id: 3, name: 'Charlie' }\r
];\r
const student = students.find(s => s.id === 2);\r
console.log('Found:', student);\r
const index = students.findIndex(s => s.name === 'Charlie');\r
console.log('Index of Charlie:', index);\r
\r
`,Pt=`// Project: Advanced: Sort() With Custom Comparator Functions (Marks, Price, Name)\r
// Description: This project demonstrates advanced: sort() with custom comparator functions (marks, price, name) in JavaScript.\r
\r
\r
const products = [\r
    { name: 'Laptop', price: 800, rating: 4.5 },\r
    { name: 'Mouse', price: 25, rating: 4.8 },\r
    { name: 'Keyboard', price: 45, rating: 4.2 }\r
];\r
// Sort by price ascending\r
products.sort((a, b) => a.price - b.price);\r
console.log('Sorted by price:', products);\r
// Sort by rating descending\r
products.sort((a, b) => b.rating - a.rating);\r
console.log('Sorted by rating:', products);\r
\r
`,Et=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Advanced: Some() And Every() With Object Validation</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Advanced: Some() And Every() With Object Validation</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Advanced: Some() And Every() With Object Validation\r
        // Write your code here\r
        \r
const tasks = [\r
    { title: 'Task 1', completed: true },\r
    { title: 'Task 2', completed: false },\r
    { title: 'Task 3', completed: true }\r
];\r
const allDone = tasks.every(t => t.completed);\r
const anyDone = tasks.some(t => t.completed);\r
console.log('All completed?', allDone);\r
console.log('Any completed?', anyDone);\r
\r
    <\/script>\r
</body>\r
</html>\r
`,It=`// Project: Advanced: Chaining Array Methods (Map → Filter → Reduce)\r
// Description: This project demonstrates advanced: chaining array methods (map → filter → reduce) in JavaScript.\r
\r
\r
const numbers = [1, 2, 3, 4, 5];\r
const doubled = numbers.map(n => n * 2);\r
console.log('Original:', numbers);\r
console.log('Doubled:', doubled);\r
\r
`,Ct=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Advanced: Deep Array Transformations Inside Nested Objects</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Advanced: Deep Array Transformations Inside Nested Objects</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Advanced: Deep Array Transformations Inside Nested Objects\r
        // Write your code here\r
        \r
console.log("=== Advanced: Deep Array Transformations Inside Nested Objects ===");\r
// This project demonstrates advanced: deep array transformations inside nested objects in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,kt=`// Project: Advanced: Real-World Datasets (Students, Courses, Products, Tasks)\r
// Description: This project demonstrates advanced: real-world datasets (students, courses, products, tasks) in JavaScript.\r
\r
\r
console.log("=== Advanced: Real-World Datasets (Students, Courses, Products, Tasks) ===");\r
// This project demonstrates advanced: real-world datasets (students, courses, products, tasks) in JavaScript.\r
// Add your implementation here\r
\r
`,Dt=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Advanced: What Is The Dom? Nodes, Elements And The Tree Structure</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Advanced: What Is The Dom? Nodes, Elements And The Tree Structure</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Advanced: What Is The Dom? Nodes, Elements And The Tree Structure\r
        // Write your code here\r
        \r
console.log("=== Advanced: What Is The Dom? Nodes, Elements And The Tree Structure ===");\r
// This project demonstrates advanced: what is the dom? nodes, elements and the tree structure in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,Jt=`// Project: Advanced: Selecting Elements: Getelementbyid, Queryselector, Queryselectorall\r
// Description: This project demonstrates advanced: selecting elements: getelementbyid, queryselector, queryselectorall in JavaScript.\r
\r
\r
// This script expects an element with id="app" in the HTML\r
const app = document.getElementById('app');\r
if (app) {\r
    app.innerHTML = '<p>Text changed by JavaScript!</p>';\r
} else {\r
    console.log('Element #app not found');\r
}\r
\r
`,Ft=`// Project: Advanced: Changing Text, Html And Styles Dynamically\r
// Description: This project demonstrates advanced: changing text, html and styles dynamically in JavaScript.\r
\r
\r
console.log("=== Advanced: Changing Text, Html And Styles Dynamically ===");\r
// This project demonstrates advanced: changing text, html and styles dynamically in JavaScript.\r
// Add your implementation here\r
\r
`,Ut=`// Project: Advanced: Creating, Appending And Removing Elements\r
// Description: This project demonstrates advanced: creating, appending and removing elements in JavaScript.\r
\r
\r
console.log("=== Advanced: Creating, Appending And Removing Elements ===");\r
// This project demonstrates advanced: creating, appending and removing elements in JavaScript.\r
// Add your implementation here\r
\r
`,Mt=`// Project: Advanced: Working With Attributes, Classes And Data-* Attributes\r
// Description: This project demonstrates advanced: working with attributes, classes and data-* attributes in JavaScript.\r
\r
\r
// Constructor function\r
function Animal(name) {\r
    this.name = name;\r
}\r
Animal.prototype.speak = function() {\r
    console.log(\`\${this.name} makes a noise.\`);\r
};\r
// ES6 class\r
class Dog extends Animal {\r
    speak() {\r
        console.log(\`\${this.name} barks.\`);\r
    }\r
}\r
const animal = new Animal('Generic');\r
animal.speak();\r
const dog = new Dog('Rex');\r
dog.speak();\r
\r
`,Bt=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Advanced: Event Types: Click, Input, Change, Submit, Keyup, Keydown, Mouse Events</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Advanced: Event Types: Click, Input, Change, Submit, Keyup, Keydown, Mouse Events</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Advanced: Event Types: Click, Input, Change, Submit, Keyup, Keydown, Mouse Events\r
        // Write your code here\r
        \r
console.log("=== Advanced: Event Types: Click, Input, Change, Submit, Keyup, Keydown, Mouse Events ===");\r
// This project demonstrates advanced: event types: click, input, change, submit, keyup, keydown, mouse events in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,Lt=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Advanced: Addeventlistener And Removing Event Listeners</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Advanced: Addeventlistener And Removing Event Listeners</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Advanced: Addeventlistener And Removing Event Listeners\r
        // Write your code here\r
        \r
console.log("=== Advanced: Addeventlistener And Removing Event Listeners ===");\r
// This project demonstrates advanced: addeventlistener and removing event listeners in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,Nt=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Advanced: Event Object Basics And Target Property</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Advanced: Event Object Basics And Target Property</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Advanced: Event Object Basics And Target Property\r
        // Write your code here\r
        \r
console.log("=== Advanced: Event Object Basics And Target Property ===");\r
// This project demonstrates advanced: event object basics and target property in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,Vt=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Advanced: Event Bubbling And Capturing (Intro, Conceptual)</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Advanced: Event Bubbling And Capturing (Intro, Conceptual)</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Advanced: Event Bubbling And Capturing (Intro, Conceptual)\r
        // Write your code here\r
        \r
console.log("=== Advanced: Event Bubbling And Capturing (Intro, Conceptual) ===");\r
// This project demonstrates advanced: event bubbling and capturing (intro, conceptual) in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,Rt=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Advanced: Form Handling And Simple Validation With Javascript</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Advanced: Form Handling And Simple Validation With Javascript</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Advanced: Form Handling And Simple Validation With Javascript\r
        // Write your code here\r
        \r
console.log("=== Advanced: Form Handling And Simple Validation With Javascript ===");\r
// This project demonstrates advanced: form handling and simple validation with javascript in JavaScript.\r
// Add your implementation here\r
\r
    <\/script>\r
</body>\r
</html>\r
`,Wt=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Advanced: Building Components: Modal Popup, Tabs, Accordion</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Advanced: Building Components: Modal Popup, Tabs, Accordion</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Advanced: Building Components: Modal Popup, Tabs, Accordion\r
        // Write your code here\r
        \r
const app = document.getElementById('app');\r
app.innerHTML = \`\r
    <button id="openModal">Open Modal</button>\r
    <div id="modal" style="display:none; position:fixed; top:20%; left:20%; background:white; padding:20px; border:1px solid #ccc; z-index:1000;">\r
        <p>This is a modal!</p>\r
        <button id="closeModal">Close</button>\r
    </div>\r
    <div id="overlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:999;"></div>\r
\`;\r
const modal = document.getElementById('modal');\r
const overlay = document.getElementById('overlay');\r
const openBtn = document.getElementById('openModal');\r
const closeBtn = document.getElementById('closeModal');\r
function openModal() {\r
    modal.style.display = 'block';\r
    overlay.style.display = 'block';\r
}\r
function closeModal() {\r
    modal.style.display = 'none';\r
    overlay.style.display = 'none';\r
}\r
openBtn.addEventListener('click', openModal);\r
closeBtn.addEventListener('click', closeModal);\r
overlay.addEventListener('click', closeModal);\r
\r
    <\/script>\r
</body>\r
</html>\r
`,$t=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Advanced: Keyboard Events — Keydown, Keyup & Keypress</title>\r
    <style>\r
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }\r
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }\r
        button, input, textarea { margin: 5px; padding: 8px; }\r
        .error { color: red; font-size: 0.9em; }\r
    </style>\r
</head>\r
<body>\r
    <div class="container">\r
        <h1>Advanced: Keyboard Events — Keydown, Keyup & Keypress</h1>\r
        <div id="app">\r
            <!-- Dynamic content will appear here -->\r
        </div>\r
    </div>\r
    <script>\r
        // Project: Advanced: Keyboard Events — Keydown, Keyup & Keypress\r
        // Write your code here\r
        \r
const app = document.getElementById('app');\r
app.innerHTML = \`\r
    <div id="box" style="width:50px; height:50px; background:blue; position:absolute; top:100px; left:100px;"></div>\r
    <p>Use arrow keys to move the box</p>\r
\`;\r
const box = document.getElementById('box');\r
let topPos = 100, leftPos = 100;\r
window.addEventListener('keydown', (e) => {\r
    const step = 10;\r
    switch(e.key) {\r
        case 'ArrowUp': topPos -= step; break;\r
        case 'ArrowDown': topPos += step; break;\r
        case 'ArrowLeft': leftPos -= step; break;\r
        case 'ArrowRight': leftPos += step; break;\r
        default: return;\r
    }\r
    box.style.top = topPos + 'px';\r
    box.style.left = leftPos + 'px';\r
});\r
\r
    <\/script>\r
</body>\r
</html>\r
`,Kt=`// Project: Advanced: Function Declarations Vs Function Expressions\r
// Description: This project demonstrates advanced: function declarations vs function expressions in JavaScript.\r
\r
\r
// Function declaration (hoisted)\r
console.log(factorial(5)); // works even before definition\r
function factorial(n) {\r
    if (n <= 1) return 1;\r
    return n * factorial(n-1);\r
}\r
// Function expression (not hoisted)\r
const square = function(x) { return x * x; };\r
console.log(square(4));\r
\r
`,qt=`// Project: Advanced: Parameters, Arguments And Default Parameters\r
// Description: This project demonstrates advanced: parameters, arguments and default parameters in JavaScript.\r
\r
\r
console.log("=== Advanced: Parameters, Arguments And Default Parameters ===");\r
// This project demonstrates advanced: parameters, arguments and default parameters in JavaScript.\r
// Add your implementation here\r
\r
`,Ht=`// Project: Advanced: Return Values And Early Returns\r
// Description: This project demonstrates advanced: return values and early returns in JavaScript.\r
\r
\r
console.log("=== Advanced: Return Values And Early Returns ===");\r
// This project demonstrates advanced: return values and early returns in JavaScript.\r
// Add your implementation here\r
\r
`,zt=`// Project: Advanced: Function Scope Basics: Local Vs Global Variables\r
// Description: This project demonstrates advanced: function scope basics: local vs global variables in JavaScript.\r
\r
\r
console.log("=== Advanced: Function Scope Basics: Local Vs Global Variables ===");\r
// This project demonstrates advanced: function scope basics: local vs global variables in JavaScript.\r
// Add your implementation here\r
\r
`,Gt=`// Project: Advanced: Arrow Functions And Concise Syntax\r
// Description: This project demonstrates advanced: arrow functions and concise syntax in JavaScript.\r
\r
\r
const add = (a, b) => a + b;\r
const square = x => x * x;\r
const greet = name => \`Hello, \${name}!\`;\r
console.log(add(3, 4));\r
console.log(square(5));\r
console.log(greet('Alice'));\r
// Lexical this example\r
const obj = {\r
    name: 'Object',\r
    regular: function() { console.log(this.name); },\r
    arrow: () => console.log(this.name)\r
};\r
obj.regular(); // 'Object'\r
obj.arrow();   // undefined (window/global)\r
\r
`,Yt=`// Project: Advanced: Pure Functions Vs Side Effects (Intro Idea)\r
// Description: This project demonstrates advanced: pure functions vs side effects (intro idea) in JavaScript.\r
\r
\r
console.log("=== Advanced: Pure Functions Vs Side Effects (Intro Idea) ===");\r
// This project demonstrates advanced: pure functions vs side effects (intro idea) in JavaScript.\r
// Add your implementation here\r
\r
`,Qt="JavaScript – 200 Practical Projects",Xt="Web Development (JavaScript)",Zt="General",er=["Browser","VS Code","Live Server"],nr={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},tr=JSON.parse('[{"projectId":"BAS001","title":"Variables and Data Types","difficulty":"Beginner","description":"Declare variables using var, let, const; demonstrate number, string, boolean, null, undefined; show typeof and explicit conversion.","exampleText":"let name = \'Alice\'; let age = 25; let isStudent = true; console.log(typeof age);","exampleOutput":"number","answerFile":"./answers/BAS001.js","learningOutcome":"Understanding variable declaration and primitive types.","logicExplanation":"Variables store data values. JavaScript has `var`, `let`, and `const`. Primitive data types include numbers, strings, booleans, null, undefined, symbol, and bigint. Type conversion can be explicit (using `Number()`, `String()`) or implicit (coercion).","codeExplanation":"The code demonstrates declaring variables with different types, performing type checks with `typeof`, and showing type conversion."},{"projectId":"BAS002","title":"Arithmetic and Assignment Operators","difficulty":"Beginner","description":"Perform basic arithmetic operations, use compound assignment, and calculate area and compound interest.","exampleText":"let a = 10, b = 3; console.log(a % b); a += 5;","exampleOutput":"1\\n15","answerFile":"./answers/BAS002.js","learningOutcome":"Using arithmetic and assignment operators.","logicExplanation":"Arithmetic operators (+, -, *, /, %, **) are used to perform mathematical operations. The assignment operator (=) stores values. Compound assignments (+=, -=, etc.) combine operation and assignment.","codeExplanation":"The script calculates the area of a rectangle and compound interest, demonstrating arithmetic and assignment operators."},{"projectId":"BAS003","title":"Comparison and Logical Operators","difficulty":"Beginner","description":"Compare values (== vs ===), use logical operators to combine conditions, and demonstrate truthy/falsy.","exampleText":"console.log(5 == \'5\'); console.log(5 === \'5\'); console.log(!false);","exampleOutput":"true\\nfalse\\ntrue","answerFile":"./answers/BAS003.js","learningOutcome":"Difference between == and ===; logical operators.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"BAS004","title":"Template Literals and String Concatenation","difficulty":"Beginner","description":"Build strings using + and template literals (`...`). Create dynamic messages.","exampleText":"let name = \'John\'; console.log(\'Hello, \' + name); console.log(`Hello, ${name}`);","exampleOutput":"Hello, John\\nHello, John","answerFile":"./answers/BAS004.js","learningOutcome":"String concatenation and template literals.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"BAS005","title":"Smart Cart Calculator (Type Coercion & Conversion)","difficulty":"Beginner","description":"Simulate a shopping cart where prices are stored as strings. Demonstrate implicit and explicit type coercion while calculating totals, discounts, and final payable amount.","exampleText":"let price1 = \'100\'; let price2 = 50; console.log(price1 + price2);","exampleOutput":"10050 (implicit), 150 (explicit conversion)","answerFile":"./answers/BAS005.js","learningOutcome":"Understand how JavaScript performs implicit type coercion and how to safely use explicit conversion for calculations.","logicExplanation":"The program simulates a cart with mixed data types (string and number prices). It shows how JavaScript implicitly converts types during operations like addition and subtraction. It then uses explicit conversion (Number, String) to correctly calculate totals, apply discounts, and format output. It also demonstrates edge cases like invalid numeric conversion.","codeExplanation":"The code defines cart prices as both strings and numbers, performs operations showing implicit coercion, then fixes them using explicit conversion. It calculates total cost, applies discount logic, and prints formatted results using template literals."},{"projectId":"CTL001","title":"Advanced Student Grading System (If-Else + Nested Logic)","difficulty":"Beginner","description":"Build a grading system that calculates grade, pass/fail status, division, and remarks using if-else, nested conditions, and logical operators.","exampleText":"let score = 82; let attendance = 75;","exampleOutput":"Grade: B | Division: First | Status: Pass | Remark: Good","answerFile":"./answers/CTL001.js","learningOutcome":"Use multi-branch conditions, nested if statements, logical operators, and real-world decision making.","logicExplanation":"The program evaluates a student\'s score and attendance. It assigns grades using if-else-if, determines pass/fail using nested conditions, calculates division based on score ranges, and applies extra rules like attendance criteria. It also demonstrates short-circuit evaluation using logical operators.","codeExplanation":"The code defines student score and attendance, applies grading logic using if-else-if, uses nested if to check pass conditions, assigns division and remarks, and prints a formatted result using template literals."},{"projectId":"CTL002","title":"Ternary Operator – Even or Odd","difficulty":"Beginner","description":"Use the ternary operator to check if a number is even or odd.","exampleText":"let result = (num % 2 === 0) ? \'Even\' : \'Odd\';","exampleOutput":"Odd","answerFile":"./answers/CTL002.js","learningOutcome":"Concise conditional expression.","logicExplanation":"The ternary operator (`condition ? expr1 : expr2`) is a concise way to write simple if‑else statements. It returns one of two expressions based on the condition.","codeExplanation":"The code checks if a number is even or odd using a ternary operator and prints the result."},{"projectId":"CTL003","title":"Switch – Day of Week","difficulty":"Beginner","description":"Given a number (1‑7), use switch to output the day name.","exampleText":"switch(day) { case 1: return \'Monday\'; ... default: return \'Invalid\'; }","exampleOutput":"Wednesday","answerFile":"./answers/CTL003.js","learningOutcome":"Using switch with break.","logicExplanation":"The `switch` statement evaluates an expression and executes the matching case. `break` prevents fall‑through. It\'s useful for multiple discrete values.","codeExplanation":"A day‑of‑week converter uses `switch` to return the day name from a number."},{"projectId":"CTL004","title":"For Loop – Sum and Multiplication Tables","difficulty":"Beginner","description":"Calculate sum of 1..100, and print a multiplication table (e.g., 5x1 to 5x10).","exampleText":"for(let i=1;i<=100;i++) sum+=i; for(let i=1;i<=10;i++) console.log(`5 x ${i} = ${5*i}`);","exampleOutput":"5050\\n5 x 1 = 5 ...","answerFile":"./answers/CTL004.html","learningOutcome":"Basic for loop usage.","logicExplanation":"The `for` loop repeats a block a specific number of times, using an initializer, condition, and increment. It is ideal for iterating over ranges and arrays.","codeExplanation":"The script prints multiplication tables and calculates the sum of numbers from 1 to 100 using a for loop."},{"projectId":"CTL005","title":"While Loop – Password Guesser","difficulty":"Beginner","description":"Simulate a simple password guesser using a while loop that breaks when correct.","exampleText":"let pass = \'secret\'; let guess = \'\'; while(guess !== pass) { guess = prompt(\'Enter password:\'); }","exampleOutput":"prompt until correct","answerFile":"./answers/CTL005.js","learningOutcome":"While loop with break.","logicExplanation":"The `while` loop repeats as long as a condition remains true. It\'s suitable when the number of iterations is unknown.","codeExplanation":"A simple password guesser uses a `while` loop to prompt until the correct password is entered."},{"projectId":"CTL006","title":"Do‑While – Menu","difficulty":"Beginner","description":"Display a menu at least once and repeat until user selects exit.","exampleText":"do { choice = prompt(\'1. Add 2. Exit\'); } while(choice !== \'2\');","exampleOutput":"menu shown","answerFile":"./answers/CTL006.js","learningOutcome":"Do‑while guarantees one execution.","logicExplanation":"The `while` loop repeats as long as a condition remains true. It\'s suitable when the number of iterations is unknown.","codeExplanation":"A simple password guesser uses a `while` loop to prompt until the correct password is entered."},{"projectId":"FUN001","title":"Function Declaration vs Expression","difficulty":"Beginner","description":"Define a function using declaration and an expression; show hoisting difference.","exampleText":"declaration(); function declaration() { console.log(\'Works\'); }\\nconst expr = function() { console.log(\'Not hoisted\'); };","exampleOutput":"Works\\nNot hoisted","answerFile":"./answers/FUN001.js","learningOutcome":"Hoisting behavior.","logicExplanation":"Function declarations are hoisted, allowing them to be called before definition. They are the most common way to define reusable blocks.","codeExplanation":"A function to calculate factorial is defined and called, showing hoisting in action."},{"projectId":"FUN002","title":"Default Parameters and Return","difficulty":"Beginner","description":"Create a function with default parameters and early return.","exampleText":"function greet(name = \'Guest\') { if(!name) return; return `Hello ${name}`; }","exampleOutput":"Hello Alice\\nHello Guest","answerFile":"./answers/FUN002.js","learningOutcome":"Default values and early returns.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"FUN003","title":"Arrow Functions and Lexical this","difficulty":"Intermediate","description":"Compare traditional function and arrow function, focusing on `this` binding.","exampleText":"const obj = { name: \'Obj\', regular: function() { console.log(this.name); }, arrow: () => console.log(this.name) };","exampleOutput":"Obj\\nundefined","answerFile":"./answers/FUN003.js","learningOutcome":"Arrow functions do not bind their own `this`.","logicExplanation":"Arrow functions provide a shorter syntax and lexical `this`. They are often used as callbacks and in functional programming.","codeExplanation":"The code defines an arrow function to square numbers and uses it with `map`."},{"projectId":"FUN004","title":"Pure vs Impure Functions","difficulty":"Intermediate","description":"Write a pure function (no side effects) and an impure function (modifies external state).","exampleText":"let count = 0; function impure() { count++; } function pure(a,b) { return a+b; }","exampleOutput":"pure(1,2) always 3; impure changes count","answerFile":"./answers/FUN004.js","learningOutcome":"Understanding side effects.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ARR001","title":"Basic Array Operations","difficulty":"Beginner","description":"Create an array, access elements, use push/pop, shift/unshift, splice.","exampleText":"let fruits = [\'apple\',\'banana\']; fruits.push(\'orange\'); fruits.pop();","exampleOutput":"[\'apple\',\'banana\']","answerFile":"./answers/ARR001.js","learningOutcome":"Array mutation methods.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ARR002","title":"map() – Transform Numbers","difficulty":"Intermediate","description":"Given an array of numbers, use map to double each value and return a new array.","exampleText":"const numbers = [1,2,3]; const doubled = numbers.map(n => n*2);","exampleOutput":"[2,4,6]","answerFile":"./answers/ARR002.html","learningOutcome":"Using map for transformation.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"ARR003","title":"filter() – Select Products","difficulty":"Intermediate","description":"Filter an array of product objects to keep only those with price < 50 and in stock.","exampleText":"const cheapInStock = products.filter(p => p.price < 50 && p.inStock);","exampleOutput":"Array of matching products","answerFile":"./answers/ARR003.js","learningOutcome":"Filtering arrays of objects.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ARR004","title":"reduce() – Shopping Cart Total","difficulty":"Intermediate","description":"Calculate total price of items in a cart using reduce.","exampleText":"const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);","exampleOutput":"245.50","answerFile":"./answers/ARR004.html","learningOutcome":"Aggregating with reduce.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ARR005","title":"find() and findIndex()","difficulty":"Intermediate","description":"Locate a student by ID using find, and find the index of a task by title.","exampleText":"const student = students.find(s => s.id === 101); const index = tasks.findIndex(t => t.title === \'Buy milk\');","exampleOutput":"Student object, index number","answerFile":"./answers/ARR005.js","learningOutcome":"Finding elements and their positions.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ARR006","title":"sort() with Comparator","difficulty":"Intermediate","description":"Sort an array of products by price ascending, then by rating descending.","exampleText":"products.sort((a,b) => a.price - b.price || b.rating - a.rating);","exampleOutput":"Sorted array","answerFile":"./answers/ARR006.js","learningOutcome":"Custom sorting of objects.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ARR007","title":"some() and every()","difficulty":"Intermediate","description":"Check if any product has rating > 4.5 and if all tasks are completed.","exampleText":"const hasHighRated = products.some(p => p.rating > 4.5); const allDone = tasks.every(t => t.completed);","exampleOutput":"true/false","answerFile":"./answers/ARR007.js","learningOutcome":"Testing array conditions.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ARR008","title":"Chaining Methods","difficulty":"Advanced","description":"Chain filter, map, and reduce to get total price of discounted items.","exampleText":"const totalDiscounted = products.filter(p => p.discount).map(p => p.price * (1 - p.discount)).reduce((s, v) => s + v, 0);","exampleOutput":"123.45","answerFile":"./answers/ARR008.js","learningOutcome":"Composing array methods.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"OBJ001","title":"Object Literals and Dot/Bracket Notation","difficulty":"Beginner","description":"Create an object, access/modify properties using dot and bracket notation.","exampleText":"let car = { brand: \'Toyota\', model: \'Corolla\' }; car[\'year\'] = 2020; console.log(car.brand);","exampleOutput":"Toyota","answerFile":"./answers/OBJ001.js","learningOutcome":"Basic object manipulation.","logicExplanation":"Objects store collections of key‑value pairs. Dot notation (`obj.key`) and bracket notation (`obj[\'key\']`) access properties.","codeExplanation":"The code creates a person object with properties and methods, then accesses and modifies them."},{"projectId":"OBJ002","title":"`this` in Methods","difficulty":"Intermediate","description":"Define a method inside an object that uses `this` to access other properties.","exampleText":"const person = { name: \'Alice\', greet() { console.log(`Hi, I\'m ${this.name}`); } };","exampleOutput":"Hi, I\'m Alice","answerFile":"./answers/OBJ002.js","learningOutcome":"The `this` keyword inside object methods.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"OBJ003","title":"Constructor Function and Class","difficulty":"Intermediate","description":"Define a constructor function and an ES6 class; create instances.","exampleText":"class Animal { constructor(name) { this.name = name; } speak() { console.log(`${this.name} makes noise.`); } }","exampleOutput":"Dog makes noise.","answerFile":"./answers/OBJ003.js","learningOutcome":"Object creation using classes and constructors.","logicExplanation":"ES6 classes provide a clean syntax for object‑oriented programming. They support constructors, methods, inheritance, and static methods.","codeExplanation":"A `Vehicle` class and a `Car` subclass are defined, demonstrating inheritance and method overriding."},{"projectId":"OBJ004","title":"Object Destructuring","difficulty":"Intermediate","description":"Extract properties from an object into variables, with defaults.","exampleText":"const { name, age = 18 } = user;","exampleOutput":"name variable, age defaulted","answerFile":"./answers/OBJ004.js","learningOutcome":"Destructuring objects.","logicExplanation":"Destructuring extracts values from arrays or properties from objects into distinct variables. It simplifies working with complex data.","codeExplanation":"The script destructures an array of coordinates and an object\'s properties, then uses them."},{"projectId":"OBJ005","title":"Spread Operator with Objects","difficulty":"Intermediate","description":"Use spread to shallow copy objects and merge them.","exampleText":"const obj1 = { a: 1 }; const obj2 = { b: 2 }; const merged = { ...obj1, ...obj2 };","exampleOutput":"{ a: 1, b: 2 }","answerFile":"./answers/OBJ005.js","learningOutcome":"Spreading objects for copy/merge.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"OBJ006","title":"Optional Chaining and Nullish Coalescing","difficulty":"Advanced","description":"Access nested properties safely and provide default values.","exampleText":"const city = user?.address?.city ?? \'Unknown\';","exampleOutput":"Unknown if path missing","answerFile":"./answers/OBJ006.js","learningOutcome":"Safe property access and defaulting.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"OBJ007","title":"JSON and localStorage","difficulty":"Advanced","description":"Store an object in localStorage and retrieve it.","exampleText":"localStorage.setItem(\'user\', JSON.stringify({ name: \'Alice\' })); const user = JSON.parse(localStorage.getItem(\'user\'));","exampleOutput":"Alice","answerFile":"./answers/OBJ007.js","learningOutcome":"Persisting data with JSON.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"DOM001","title":"Selecting Elements and Changing Text","difficulty":"Beginner","description":"Use `querySelector` and `textContent` to modify a paragraph.","exampleText":"document.querySelector(\'p\').textContent = \'New text\';","exampleOutput":"Paragraph updated","answerFile":"./answers/DOM001.js","learningOutcome":"DOM selection and content manipulation.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"DOM002","title":"Creating and Appending Elements","difficulty":"Intermediate","description":"Create a new list item and append it to an unordered list.","exampleText":"const li = document.createElement(\'li\'); li.textContent = \'Item\'; document.querySelector(\'ul\').appendChild(li);","exampleOutput":"New <li> added","answerFile":"./answers/DOM002.js","learningOutcome":"Dynamic element creation.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"DOM003","title":"Handling Button Clicks","difficulty":"Beginner","description":"Add a click event listener to a button that shows an alert.","exampleText":"button.addEventListener(\'click\', () => alert(\'Clicked!\'));","exampleOutput":"Alert on click","answerFile":"./answers/DOM003.html","learningOutcome":"Basic event handling.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"DOM004","title":"Input Field – Live Update","difficulty":"Intermediate","description":"Display the value of an input field in real time as the user types.","exampleText":"input.addEventListener(\'input\', (e) => display.textContent = e.target.value);","exampleOutput":"Text updates instantly","answerFile":"./answers/DOM004.html","learningOutcome":"Input events.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"DOM005","title":"Form Validation","difficulty":"Advanced","description":"Validate a registration form (name, email, password) and show error messages.","exampleText":"function validate() { if (!name.value) { showError(\'Name required\'); return false; } ... }","exampleOutput":"Error messages or success","answerFile":"./answers/DOM005.html","learningOutcome":"Form handling and validation.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"DOM006","title":"Simple Modal","difficulty":"Advanced","description":"Create a modal that opens when clicking a button and closes with an X or outside click.","exampleText":"openBtn.addEventListener(\'click\', () => modal.style.display = \'block\'); closeBtn.addEventListener(\'click\', () => modal.style.display = \'none\');","exampleOutput":"Modal appears/disappears","answerFile":"./answers/DOM006.html","learningOutcome":"Building UI components.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"DOM007","title":"Keyboard Events – Move a Box","difficulty":"Advanced","description":"Move a div around the screen using arrow keys.","exampleText":"window.addEventListener(\'keydown\', (e) => { if(e.key === \'ArrowUp\') top -= 10; ... });","exampleOutput":"Box moves","answerFile":"./answers/DOM007.html","learningOutcome":"Handling keyboard input.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"ADV001","title":"Todo List App","difficulty":"Advanced","description":"Build a to‑do list with add, delete, and mark complete. Use localStorage.","exampleText":"Store tasks array, render list, attach event handlers, save to localStorage.","exampleOutput":"Functional todo app","answerFile":"./answers/ADV001.html","learningOutcome":"Integrating DOM, events, arrays, storage.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ADV002","title":"Shopping Cart (Objects & Arrays)","difficulty":"Advanced","description":"Create a product catalog, allow adding/removing items, calculate total.","exampleText":"cart = [], addToCart(product), removeFromCart(id), computeTotal().","exampleOutput":"Cart summary","answerFile":"./answers/ADV002.html","learningOutcome":"Complex state management with arrays of objects.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ADV003","title":"Student Grade Analyzer","difficulty":"Advanced","description":"Input student names and grades, compute average, highest, lowest, and letter grade distribution.","exampleText":"Use arrays of objects, reduce for average, sort for highest, filter for distribution.","exampleOutput":"Statistics and chart","answerFile":"./answers/ADV003.html","learningOutcome":"Data analysis with array methods.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ADV004","title":"Fetch and Display Data (Simulated API)","difficulty":"Advanced","description":"Use async/await with a simulated API call (setTimeout) to fetch user data and display.","exampleText":"async function fetchUsers() { return new Promise(resolve => setTimeout(() => resolve([...]), 1000)); }","exampleOutput":"Users rendered","answerFile":"./answers/ADV004.html","learningOutcome":"Async programming and promises.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ADV005","title":"Timer and Stopwatch","difficulty":"Advanced","description":"Create a stopwatch with start, stop, reset, using setInterval and events.","exampleText":"let timer; start.addEventListener(\'click\', () => timer = setInterval(update, 10));","exampleOutput":"Running stopwatch","answerFile":"./answers/ADV005.html","learningOutcome":"setInterval, clearInterval.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ADV006","title":"Interactive Quiz","difficulty":"Advanced","description":"Build a multiple‑choice quiz with questions from an array of objects, score tracking.","exampleText":"questions = [{ text: \'...\', options: [...], answer: 0 }]; display question, check answer, next.","exampleOutput":"Quiz with score","answerFile":"./answers/ADV006.html","learningOutcome":"Combining arrays, objects, DOM, events.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ADV007","title":"Carousel/Slider","difficulty":"Advanced","description":"Implement an image carousel with next/prev buttons and automatic sliding.","exampleText":"images array, index variable, update src, setInterval for auto.","exampleOutput":"Slideshow","answerFile":"./answers/ADV007.html","learningOutcome":"Dynamic UI updates and timers.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ADV008","title":"Drag and Drop (Simple)","difficulty":"Advanced","description":"Make a div draggable using mouse events (mousedown, mousemove, mouseup).","exampleText":"on mousedown start tracking, on mousemove update position, on mouseup stop.","exampleOutput":"Draggable element","answerFile":"./answers/ADV008.html","learningOutcome":"Advanced mouse event handling.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ADV009","title":"Custom Filterable Table","difficulty":"Advanced","description":"Create a table from an array of objects, add a search box to filter rows.","exampleText":"Render table; on input, filter array and re‑render.","exampleOutput":"Filtered table","answerFile":"./answers/ADV009.html","learningOutcome":"Live filtering and DOM rendering.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ADV010","title":"Interactive Chart (Canvas)","difficulty":"Advanced","description":"Use HTML canvas to draw a bar chart from an array of data.","exampleText":"canvas context, draw bars based on data values, add click to update.","exampleOutput":"Bar chart","answerFile":"./answers/ADV010.html","learningOutcome":"Canvas API and data visualization.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"ADV011","title":"Form with Live Validation and Submit","difficulty":"Advanced","description":"A registration form that validates fields in real time and shows an error summary. On submit, store data in localStorage and display it.","exampleText":"Use input events, regex for email, check password strength, prevent default.","exampleOutput":"Validated form with stored data","answerFile":"./answers/ADV011.html","learningOutcome":"Full form handling, storage.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"ADV012","title":"Sortable List with Drag and Drop","difficulty":"Advanced","description":"Create a list of items that can be reordered by dragging.","exampleText":"Use dragstart, dragend, dragover events; update array order.","exampleOutput":"Reordered list","answerFile":"./answers/ADV012.html","learningOutcome":"Drag and drop with arrays.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP001","title":"Function Declarations Vs Function Expressions","difficulty":"Beginner","description":"This project demonstrates function declarations vs function expressions in JavaScript.","exampleText":"// Code for Function Declarations Vs Function Expressions","exampleOutput":"See console or UI","answerFile":"./answers/TOP001.js","learningOutcome":"Understanding function declarations vs function expressions.","logicExplanation":"Function declarations are hoisted, allowing them to be called before definition. They are the most common way to define reusable blocks.","codeExplanation":"A function to calculate factorial is defined and called, showing hoisting in action."},{"projectId":"TOP002","title":"Parameters, Arguments And Default Parameters","difficulty":"Beginner","description":"This project demonstrates parameters, arguments and default parameters in JavaScript.","exampleText":"// Code for Parameters, Arguments And Default Parameters","exampleOutput":"See console or UI","answerFile":"./answers/TOP002.js","learningOutcome":"Understanding parameters, arguments and default parameters.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP003","title":"Return Values And Early Returns","difficulty":"Beginner","description":"This project demonstrates return values and early returns in JavaScript.","exampleText":"// Code for Return Values And Early Returns","exampleOutput":"See console or UI","answerFile":"./answers/TOP003.js","learningOutcome":"Understanding return values and early returns.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP004","title":"Function Scope Basics: Local Vs Global Variables","difficulty":"Beginner","description":"This project demonstrates function scope basics: local vs global variables in JavaScript.","exampleText":"// Code for Function Scope Basics: Local Vs Global Variables","exampleOutput":"See console or UI","answerFile":"./answers/TOP004.js","learningOutcome":"Understanding function scope basics: local vs global variables.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP005","title":"Arrow Functions And Concise Syntax","difficulty":"Beginner","description":"This project demonstrates arrow functions and concise syntax in JavaScript.","exampleText":"// Code for Arrow Functions And Concise Syntax","exampleOutput":"See console or UI","answerFile":"./answers/TOP005.js","learningOutcome":"Understanding arrow functions and concise syntax.","logicExplanation":"Arrow functions provide a shorter syntax and lexical `this`. They are often used as callbacks and in functional programming.","codeExplanation":"The code defines an arrow function to square numbers and uses it with `map`."},{"projectId":"TOP006","title":"Pure Functions Vs Side Effects (Intro Idea)","difficulty":"Beginner","description":"This project demonstrates pure functions vs side effects (intro idea) in JavaScript.","exampleText":"// Code for Pure Functions Vs Side Effects (Intro Idea)","exampleOutput":"See console or UI","answerFile":"./answers/TOP006.js","learningOutcome":"Understanding pure functions vs side effects (intro idea).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP007","title":"Creating Arrays, Indexing And Length","difficulty":"Beginner","description":"This project demonstrates creating arrays, indexing and length in JavaScript.","exampleText":"// Code for Creating Arrays, Indexing And Length","exampleOutput":"See console or UI","answerFile":"./answers/TOP007.js","learningOutcome":"Understanding creating arrays, indexing and length.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP008","title":"Mutating Methods: Push, Pop, Shift, Unshift, Splice","difficulty":"Beginner","description":"This project demonstrates mutating methods: push, pop, shift, unshift, splice in JavaScript.","exampleText":"// Code for Mutating Methods: Push, Pop, Shift, Unshift, Splice","exampleOutput":"See console or UI","answerFile":"./answers/TOP008.js","learningOutcome":"Understanding mutating methods: push, pop, shift, unshift, splice.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP009","title":"Non-Mutating Methods: Slice, Concat","difficulty":"Beginner","description":"This project demonstrates non-mutating methods: slice, concat in JavaScript.","exampleText":"// Code for Non-Mutating Methods: Slice, Concat","exampleOutput":"See console or UI","answerFile":"./answers/TOP009.js","learningOutcome":"Understanding non-mutating methods: slice, concat.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP010","title":"Searching: Indexof, Includes, Find, Findindex","difficulty":"Beginner","description":"This project demonstrates searching: indexof, includes, find, findindex in JavaScript.","exampleText":"// Code for Searching: Indexof, Includes, Find, Findindex","exampleOutput":"See console or UI","answerFile":"./answers/TOP010.js","learningOutcome":"Understanding searching: indexof, includes, find, findindex.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP011","title":"Iterating Arrays With For, For-Of And Foreach","difficulty":"Beginner","description":"This project demonstrates iterating arrays with for, for-of and foreach in JavaScript.","exampleText":"// Code for Iterating Arrays With For, For-Of And Foreach","exampleOutput":"See console or UI","answerFile":"./answers/TOP011.js","learningOutcome":"Understanding iterating arrays with for, for-of and foreach.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP012","title":"Intro To Higher-Order Methods: Map, Filter, Reduce (Light Overview)","difficulty":"Intermediate","description":"This project demonstrates intro to higher-order methods: map, filter, reduce (light overview) in JavaScript.","exampleText":"// Code for Intro To Higher-Order Methods: Map, Filter, Reduce (Light Overview)","exampleOutput":"See console or UI","answerFile":"./answers/TOP012.js","learningOutcome":"Understanding intro to higher-order methods: map, filter, reduce (light overview).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP013","title":"Projects Basic","difficulty":"Beginner","description":"This project demonstrates projects basic in JavaScript.","exampleText":"// Code for Projects Basic","exampleOutput":"See console or UI","answerFile":"./answers/TOP013.js","learningOutcome":"Understanding projects basic.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP014","title":"Project Advance","difficulty":"Beginner","description":"This project demonstrates project advance in JavaScript.","exampleText":"// Code for Project Advance","exampleOutput":"See console or UI","answerFile":"./answers/TOP014.js","learningOutcome":"Understanding project advance.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP015","title":"Object Literals: Keys, Values, Methods","difficulty":"Beginner","description":"This project demonstrates object literals: keys, values, methods in JavaScript.","exampleText":"// Code for Object Literals: Keys, Values, Methods","exampleOutput":"See console or UI","answerFile":"./answers/TOP015.js","learningOutcome":"Understanding object literals: keys, values, methods.","logicExplanation":"Objects store collections of key‑value pairs. Dot notation (`obj.key`) and bracket notation (`obj[\'key\']`) access properties.","codeExplanation":"The code creates a person object with properties and methods, then accesses and modifies them."},{"projectId":"TOP016","title":"Accessing Properties: Dot Vs Bracket Notation","difficulty":"Beginner","description":"This project demonstrates accessing properties: dot vs bracket notation in JavaScript.","exampleText":"// Code for Accessing Properties: Dot Vs Bracket Notation","exampleOutput":"See console or UI","answerFile":"./answers/TOP016.js","learningOutcome":"Understanding accessing properties: dot vs bracket notation.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP017","title":"Nested Objects And Arrays Of Objects","difficulty":"Beginner","description":"This project demonstrates nested objects and arrays of objects in JavaScript.","exampleText":"// Code for Nested Objects And Arrays Of Objects","exampleOutput":"See console or UI","answerFile":"./answers/TOP017.js","learningOutcome":"Understanding nested objects and arrays of objects.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP018","title":"The This Keyword (Beginner-Level Understanding)","difficulty":"Beginner","description":"This project demonstrates the this keyword (beginner-level understanding) in JavaScript.","exampleText":"// Code for The This Keyword (Beginner-Level Understanding)","exampleOutput":"See console or UI","answerFile":"./answers/TOP018.js","learningOutcome":"Understanding the this keyword (beginner-level understanding).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP019","title":"Constructor Functions And The New Keyword (Overview)","difficulty":"Beginner","description":"This project demonstrates constructor functions and the new keyword (overview) in JavaScript.","exampleText":"// Code for Constructor Functions And The New Keyword (Overview)","exampleOutput":"See console or UI","answerFile":"./answers/TOP019.js","learningOutcome":"Understanding constructor functions and the new keyword (overview).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP020","title":"Es6 Class Syntax, Constructor, Methods And Basic Inheritance (Conceptual)","difficulty":"Advanced","description":"This project demonstrates es6 class syntax, constructor, methods and basic inheritance (conceptual) in JavaScript.","exampleText":"// Code for Es6 Class Syntax, Constructor, Methods And Basic Inheritance (Conceptual)","exampleOutput":"See console or UI","answerFile":"./answers/TOP020.js","learningOutcome":"Understanding es6 class syntax, constructor, methods and basic inheritance (conceptual).","logicExplanation":"ES6 classes provide a clean syntax for object‑oriented programming. They support constructors, methods, inheritance, and static methods.","codeExplanation":"A `Vehicle` class and a `Car` subclass are defined, demonstrating inheritance and method overriding."},{"projectId":"TOP021","title":"Object Literals: Keys, Values, Methods","difficulty":"Beginner","description":"This project demonstrates object literals: keys, values, methods in JavaScript.","exampleText":"// Code for Object Literals: Keys, Values, Methods","exampleOutput":"See console or UI","answerFile":"./answers/TOP021.js","learningOutcome":"Understanding object literals: keys, values, methods.","logicExplanation":"Objects store collections of key‑value pairs. Dot notation (`obj.key`) and bracket notation (`obj[\'key\']`) access properties.","codeExplanation":"The code creates a person object with properties and methods, then accesses and modifies them."},{"projectId":"TOP022","title":"Accessing Properties: Dot Vs Bracket Notation","difficulty":"Beginner","description":"This project demonstrates accessing properties: dot vs bracket notation in JavaScript.","exampleText":"// Code for Accessing Properties: Dot Vs Bracket Notation","exampleOutput":"See console or UI","answerFile":"./answers/TOP022.js","learningOutcome":"Understanding accessing properties: dot vs bracket notation.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP023","title":"Adding, Updating And Deleting Object Properties","difficulty":"Beginner","description":"This project demonstrates adding, updating and deleting object properties in JavaScript.","exampleText":"// Code for Adding, Updating And Deleting Object Properties","exampleOutput":"See console or UI","answerFile":"./answers/TOP023.js","learningOutcome":"Understanding adding, updating and deleting object properties.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP024","title":"Checking Properties: In Operator And Hasownproperty()","difficulty":"Beginner","description":"This project demonstrates checking properties: in operator and hasownproperty() in JavaScript.","exampleText":"// Code for Checking Properties: In Operator And Hasownproperty()","exampleOutput":"See console or UI","answerFile":"./answers/TOP024.js","learningOutcome":"Understanding checking properties: in operator and hasownproperty().","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP025","title":"Nested Objects And Arrays Of Objects","difficulty":"Beginner","description":"This project demonstrates nested objects and arrays of objects in JavaScript.","exampleText":"// Code for Nested Objects And Arrays Of Objects","exampleOutput":"See console or UI","answerFile":"./answers/TOP025.js","learningOutcome":"Understanding nested objects and arrays of objects.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP026","title":"Accessing Deeply Nested Values","difficulty":"Advanced","description":"This project demonstrates accessing deeply nested values in JavaScript.","exampleText":"// Code for Accessing Deeply Nested Values","exampleOutput":"See console or UI","answerFile":"./answers/TOP026.js","learningOutcome":"Understanding accessing deeply nested values.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP027","title":"The This Keyword Inside Objects (Beginner-Friendly)","difficulty":"Beginner","description":"This project demonstrates the this keyword inside objects (beginner-friendly) in JavaScript.","exampleText":"// Code for The This Keyword Inside Objects (Beginner-Friendly)","exampleOutput":"See console or UI","answerFile":"./answers/TOP027.js","learningOutcome":"Understanding the this keyword inside objects (beginner-friendly).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP028","title":"Arrow Functions Vs Normal Functions: This Difference","difficulty":"Beginner","description":"This project demonstrates arrow functions vs normal functions: this difference in JavaScript.","exampleText":"// Code for Arrow Functions Vs Normal Functions: This Difference","exampleOutput":"See console or UI","answerFile":"./answers/TOP028.js","learningOutcome":"Understanding arrow functions vs normal functions: this difference.","logicExplanation":"Arrow functions provide a shorter syntax and lexical `this`. They are often used as callbacks and in functional programming.","codeExplanation":"The code defines an arrow function to square numbers and uses it with `map`."},{"projectId":"TOP029","title":"Iterating Objects: For...In Loop","difficulty":"Beginner","description":"This project demonstrates iterating objects: for...in loop in JavaScript.","exampleText":"// Code for Iterating Objects: For...In Loop","exampleOutput":"See console or UI","answerFile":"./answers/TOP029.js","learningOutcome":"Understanding iterating objects: for...in loop.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP030","title":"Object.Keys(), Object.Values(), Object.Entries()","difficulty":"Beginner","description":"This project demonstrates object.keys(), object.values(), object.entries() in JavaScript.","exampleText":"// Code for Object.Keys(), Object.Values(), Object.Entries()","exampleOutput":"See console or UI","answerFile":"./answers/TOP030.js","learningOutcome":"Understanding object.keys(), object.values(), object.entries().","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP031","title":"Looping Arrays Of Objects Using Map, Filter, Reduce","difficulty":"Beginner","description":"This project demonstrates looping arrays of objects using map, filter, reduce in JavaScript.","exampleText":"// Code for Looping Arrays Of Objects Using Map, Filter, Reduce","exampleOutput":"See console or UI","answerFile":"./answers/TOP031.js","learningOutcome":"Understanding looping arrays of objects using map, filter, reduce.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP032","title":"Objects As Reference Types","difficulty":"Beginner","description":"This project demonstrates objects as reference types in JavaScript.","exampleText":"// Code for Objects As Reference Types","exampleOutput":"See console or UI","answerFile":"./answers/TOP032.js","learningOutcome":"Understanding objects as reference types.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP033","title":"Shallow Copy: Spread Operator And Object.Assign()","difficulty":"Beginner","description":"This project demonstrates shallow copy: spread operator and object.assign() in JavaScript.","exampleText":"// Code for Shallow Copy: Spread Operator And Object.Assign()","exampleOutput":"See console or UI","answerFile":"./answers/TOP033.js","learningOutcome":"Understanding shallow copy: spread operator and object.assign().","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP034","title":"Deep Copy: Structuredclone() And Json Technique","difficulty":"Advanced","description":"This project demonstrates deep copy: structuredclone() and json technique in JavaScript.","exampleText":"// Code for Deep Copy: Structuredclone() And Json Technique","exampleOutput":"See console or UI","answerFile":"./answers/TOP034.js","learningOutcome":"Understanding deep copy: structuredclone() and json technique.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP035","title":"Shorthand Properties And Computed Property Names","difficulty":"Beginner","description":"This project demonstrates shorthand properties and computed property names in JavaScript.","exampleText":"// Code for Shorthand Properties And Computed Property Names","exampleOutput":"See console or UI","answerFile":"./answers/TOP035.js","learningOutcome":"Understanding shorthand properties and computed property names.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP036","title":"Object Destructuring And Nested Destructuring","difficulty":"Beginner","description":"This project demonstrates object destructuring and nested destructuring in JavaScript.","exampleText":"// Code for Object Destructuring And Nested Destructuring","exampleOutput":"See console or UI","answerFile":"./answers/TOP036.js","learningOutcome":"Understanding object destructuring and nested destructuring.","logicExplanation":"Destructuring extracts values from arrays or properties from objects into distinct variables. It simplifies working with complex data.","codeExplanation":"The script destructures an array of coordinates and an object\'s properties, then uses them."},{"projectId":"TOP037","title":"Spread And Rest Operator For Objects","difficulty":"Beginner","description":"This project demonstrates spread and rest operator for objects in JavaScript.","exampleText":"// Code for Spread And Rest Operator For Objects","exampleOutput":"See console or UI","answerFile":"./answers/TOP037.js","learningOutcome":"Understanding spread and rest operator for objects.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP038","title":"Default Values In Destructuring","difficulty":"Beginner","description":"This project demonstrates default values in destructuring in JavaScript.","exampleText":"// Code for Default Values In Destructuring","exampleOutput":"See console or UI","answerFile":"./answers/TOP038.js","learningOutcome":"Understanding default values in destructuring.","logicExplanation":"Destructuring extracts values from arrays or properties from objects into distinct variables. It simplifies working with complex data.","codeExplanation":"The script destructures an array of coordinates and an object\'s properties, then uses them."},{"projectId":"TOP039","title":"Getters And Setters","difficulty":"Beginner","description":"This project demonstrates getters and setters in JavaScript.","exampleText":"// Code for Getters And Setters","exampleOutput":"See console or UI","answerFile":"./answers/TOP039.js","learningOutcome":"Understanding getters and setters.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP040","title":"Optional Chaining (?.) And Nullish Coalescing (??)","difficulty":"Advanced","description":"This project demonstrates optional chaining (?.) and nullish coalescing (??) in JavaScript.","exampleText":"// Code for Optional Chaining (?.) And Nullish Coalescing (??)","exampleOutput":"See console or UI","answerFile":"./answers/TOP040.js","learningOutcome":"Understanding optional chaining (?.) and nullish coalescing (??).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP041","title":"Object.Freeze(), Object.Seal() And Preventextensions()","difficulty":"Beginner","description":"This project demonstrates object.freeze(), object.seal() and preventextensions() in JavaScript.","exampleText":"// Code for Object.Freeze(), Object.Seal() And Preventextensions()","exampleOutput":"See console or UI","answerFile":"./answers/TOP041.html","learningOutcome":"Understanding object.freeze(), object.seal() and preventextensions().","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP042","title":"Constructor Functions And The New Keyword (Overview)","difficulty":"Beginner","description":"This project demonstrates constructor functions and the new keyword (overview) in JavaScript.","exampleText":"// Code for Constructor Functions And The New Keyword (Overview)","exampleOutput":"See console or UI","answerFile":"./answers/TOP042.js","learningOutcome":"Understanding constructor functions and the new keyword (overview).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP043","title":"Prototype And Prototype Chain (Conceptual Understanding)","difficulty":"Advanced","description":"This project demonstrates prototype and prototype chain (conceptual understanding) in JavaScript.","exampleText":"// Code for Prototype And Prototype Chain (Conceptual Understanding)","exampleOutput":"See console or UI","answerFile":"./answers/TOP043.js","learningOutcome":"Understanding prototype and prototype chain (conceptual understanding).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP044","title":"Adding Methods Using Prototypes","difficulty":"Advanced","description":"This project demonstrates adding methods using prototypes in JavaScript.","exampleText":"// Code for Adding Methods Using Prototypes","exampleOutput":"See console or UI","answerFile":"./answers/TOP044.js","learningOutcome":"Understanding adding methods using prototypes.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP045","title":"Es6 Class Syntax: Constructor, Instance Methods, Static Methods","difficulty":"Beginner","description":"This project demonstrates es6 class syntax: constructor, instance methods, static methods in JavaScript.","exampleText":"// Code for Es6 Class Syntax: Constructor, Instance Methods, Static Methods","exampleOutput":"See console or UI","answerFile":"./answers/TOP045.js","learningOutcome":"Understanding es6 class syntax: constructor, instance methods, static methods.","logicExplanation":"ES6 classes provide a clean syntax for object‑oriented programming. They support constructors, methods, inheritance, and static methods.","codeExplanation":"A `Vehicle` class and a `Car` subclass are defined, demonstrating inheritance and method overriding."},{"projectId":"TOP046","title":"Class Inheritance Using Extends","difficulty":"Advanced","description":"This project demonstrates class inheritance using extends in JavaScript.","exampleText":"// Code for Class Inheritance Using Extends","exampleOutput":"See console or UI","answerFile":"./answers/TOP046.js","learningOutcome":"Understanding class inheritance using extends.","logicExplanation":"ES6 classes provide a clean syntax for object‑oriented programming. They support constructors, methods, inheritance, and static methods.","codeExplanation":"A `Vehicle` class and a `Car` subclass are defined, demonstrating inheritance and method overriding."},{"projectId":"TOP047","title":"Super() Keyword And Method Overriding","difficulty":"Beginner","description":"This project demonstrates super() keyword and method overriding in JavaScript.","exampleText":"// Code for Super() Keyword And Method Overriding","exampleOutput":"See console or UI","answerFile":"./answers/TOP047.js","learningOutcome":"Understanding super() keyword and method overriding.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP048","title":"Json.Parse() And Json.Stringify()","difficulty":"Beginner","description":"This project demonstrates json.parse() and json.stringify() in JavaScript.","exampleText":"// Code for Json.Parse() And Json.Stringify()","exampleOutput":"See console or UI","answerFile":"./answers/TOP048.js","learningOutcome":"Understanding json.parse() and json.stringify().","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP049","title":"Storing And Retrieving Objects In Localstorage","difficulty":"Beginner","description":"This project demonstrates storing and retrieving objects in localstorage in JavaScript.","exampleText":"// Code for Storing And Retrieving Objects In Localstorage","exampleOutput":"See console or UI","answerFile":"./answers/TOP049.js","learningOutcome":"Understanding storing and retrieving objects in localstorage.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP050","title":"Merging Objects And Checking Object Equality","difficulty":"Beginner","description":"This project demonstrates merging objects and checking object equality in JavaScript.","exampleText":"// Code for Merging Objects And Checking Object Equality","exampleOutput":"See console or UI","answerFile":"./answers/TOP050.js","learningOutcome":"Understanding merging objects and checking object equality.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP051","title":"Working With Arrays Of Objects (Students, Products, Tasks)","difficulty":"Beginner","description":"This project demonstrates working with arrays of objects (students, products, tasks) in JavaScript.","exampleText":"// Code for Working With Arrays Of Objects (Students, Products, Tasks)","exampleOutput":"See console or UI","answerFile":"./answers/TOP051.js","learningOutcome":"Understanding working with arrays of objects (students, products, tasks).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP052","title":"Map() With Objects – Transforming Shapes And Selecting Fields","difficulty":"Beginner","description":"This project demonstrates map() with objects – transforming shapes and selecting fields in JavaScript.","exampleText":"// Code for Map() With Objects – Transforming Shapes And Selecting Fields","exampleOutput":"See console or UI","answerFile":"./answers/TOP052.html","learningOutcome":"Understanding map() with objects – transforming shapes and selecting fields.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP053","title":"Filter() With Multiple Conditions And Nested Object Filtering","difficulty":"Beginner","description":"This project demonstrates filter() with multiple conditions and nested object filtering in JavaScript.","exampleText":"// Code for Filter() With Multiple Conditions And Nested Object Filtering","exampleOutput":"See console or UI","answerFile":"./answers/TOP053.js","learningOutcome":"Understanding filter() with multiple conditions and nested object filtering.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP054","title":"Reduce() For Totals, Grouping, Counting And Analytics","difficulty":"Beginner","description":"This project demonstrates reduce() for totals, grouping, counting and analytics in JavaScript.","exampleText":"// Code for Reduce() For Totals, Grouping, Counting And Analytics","exampleOutput":"See console or UI","answerFile":"./answers/TOP054.js","learningOutcome":"Understanding reduce() for totals, grouping, counting and analytics.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP055","title":"Find() And Findindex() – Locating Complex Objects","difficulty":"Advanced","description":"This project demonstrates find() and findindex() – locating complex objects in JavaScript.","exampleText":"// Code for Find() And Findindex() – Locating Complex Objects","exampleOutput":"See console or UI","answerFile":"./answers/TOP055.js","learningOutcome":"Understanding find() and findindex() – locating complex objects.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP056","title":"Sort() With Custom Comparator Functions (Marks, Price, Name)","difficulty":"Beginner","description":"This project demonstrates sort() with custom comparator functions (marks, price, name) in JavaScript.","exampleText":"// Code for Sort() With Custom Comparator Functions (Marks, Price, Name)","exampleOutput":"See console or UI","answerFile":"./answers/TOP056.js","learningOutcome":"Understanding sort() with custom comparator functions (marks, price, name).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP057","title":"Some() And Every() With Object Validation","difficulty":"Beginner","description":"This project demonstrates some() and every() with object validation in JavaScript.","exampleText":"// Code for Some() And Every() With Object Validation","exampleOutput":"See console or UI","answerFile":"./answers/TOP057.html","learningOutcome":"Understanding some() and every() with object validation.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP058","title":"Chaining Array Methods (Map → Filter → Reduce)","difficulty":"Advanced","description":"This project demonstrates chaining array methods (map → filter → reduce) in JavaScript.","exampleText":"// Code for Chaining Array Methods (Map → Filter → Reduce)","exampleOutput":"See console or UI","answerFile":"./answers/TOP058.js","learningOutcome":"Understanding chaining array methods (map → filter → reduce).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP059","title":"Deep Array Transformations Inside Nested Objects","difficulty":"Advanced","description":"This project demonstrates deep array transformations inside nested objects in JavaScript.","exampleText":"// Code for Deep Array Transformations Inside Nested Objects","exampleOutput":"See console or UI","answerFile":"./answers/TOP059.html","learningOutcome":"Understanding deep array transformations inside nested objects.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP060","title":"Real-World Datasets (Students, Courses, Products, Tasks)","difficulty":"Beginner","description":"This project demonstrates real-world datasets (students, courses, products, tasks) in JavaScript.","exampleText":"// Code for Real-World Datasets (Students, Courses, Products, Tasks)","exampleOutput":"See console or UI","answerFile":"./answers/TOP060.js","learningOutcome":"Understanding real-world datasets (students, courses, products, tasks).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP061","title":"What Is The Dom? Nodes, Elements And The Tree Structure","difficulty":"Beginner","description":"This project demonstrates what is the dom? nodes, elements and the tree structure in JavaScript.","exampleText":"// Code for What Is The Dom? Nodes, Elements And The Tree Structure","exampleOutput":"See console or UI","answerFile":"./answers/TOP061.html","learningOutcome":"Understanding what is the dom? nodes, elements and the tree structure.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP062","title":"Selecting Elements: Getelementbyid, Queryselector, Queryselectorall","difficulty":"Beginner","description":"This project demonstrates selecting elements: getelementbyid, queryselector, queryselectorall in JavaScript.","exampleText":"// Code for Selecting Elements: Getelementbyid, Queryselector, Queryselectorall","exampleOutput":"See console or UI","answerFile":"./answers/TOP062.js","learningOutcome":"Understanding selecting elements: getelementbyid, queryselector, queryselectorall.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP063","title":"Changing Text, Html And Styles Dynamically","difficulty":"Beginner","description":"This project demonstrates changing text, html and styles dynamically in JavaScript.","exampleText":"// Code for Changing Text, Html And Styles Dynamically","exampleOutput":"See console or UI","answerFile":"./answers/TOP063.js","learningOutcome":"Understanding changing text, html and styles dynamically.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP064","title":"Creating, Appending And Removing Elements","difficulty":"Beginner","description":"This project demonstrates creating, appending and removing elements in JavaScript.","exampleText":"// Code for Creating, Appending And Removing Elements","exampleOutput":"See console or UI","answerFile":"./answers/TOP064.js","learningOutcome":"Understanding creating, appending and removing elements.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP065","title":"Working With Attributes, Classes And Data-* Attributes","difficulty":"Beginner","description":"This project demonstrates working with attributes, classes and data-* attributes in JavaScript.","exampleText":"// Code for Working With Attributes, Classes And Data-* Attributes","exampleOutput":"See console or UI","answerFile":"./answers/TOP065.js","learningOutcome":"Understanding working with attributes, classes and data-* attributes.","logicExplanation":"ES6 classes provide a clean syntax for object‑oriented programming. They support constructors, methods, inheritance, and static methods.","codeExplanation":"A `Vehicle` class and a `Car` subclass are defined, demonstrating inheritance and method overriding."},{"projectId":"TOP066","title":"Event Types: Click, Input, Change, Submit, Keyup, Keydown, Mouse Events","difficulty":"Beginner","description":"This project demonstrates event types: click, input, change, submit, keyup, keydown, mouse events in JavaScript.","exampleText":"// Code for Event Types: Click, Input, Change, Submit, Keyup, Keydown, Mouse Events","exampleOutput":"See console or UI","answerFile":"./answers/TOP066.html","learningOutcome":"Understanding event types: click, input, change, submit, keyup, keydown, mouse events.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP067","title":"Addeventlistener And Removing Event Listeners","difficulty":"Beginner","description":"This project demonstrates addeventlistener and removing event listeners in JavaScript.","exampleText":"// Code for Addeventlistener And Removing Event Listeners","exampleOutput":"See console or UI","answerFile":"./answers/TOP067.html","learningOutcome":"Understanding addeventlistener and removing event listeners.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP068","title":"Event Object Basics And Target Property","difficulty":"Beginner","description":"This project demonstrates event object basics and target property in JavaScript.","exampleText":"// Code for Event Object Basics And Target Property","exampleOutput":"See console or UI","answerFile":"./answers/TOP068.html","learningOutcome":"Understanding event object basics and target property.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP069","title":"Event Bubbling And Capturing (Intro, Conceptual)","difficulty":"Intermediate","description":"This project demonstrates event bubbling and capturing (intro, conceptual) in JavaScript.","exampleText":"// Code for Event Bubbling And Capturing (Intro, Conceptual)","exampleOutput":"See console or UI","answerFile":"./answers/TOP069.html","learningOutcome":"Understanding event bubbling and capturing (intro, conceptual).","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP070","title":"Form Handling And Simple Validation With Javascript","difficulty":"Beginner","description":"This project demonstrates form handling and simple validation with javascript in JavaScript.","exampleText":"// Code for Form Handling And Simple Validation With Javascript","exampleOutput":"See console or UI","answerFile":"./answers/TOP070.html","learningOutcome":"Understanding form handling and simple validation with javascript.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP071","title":"Building Components: Modal Popup, Tabs, Accordion","difficulty":"Beginner","description":"This project demonstrates building components: modal popup, tabs, accordion in JavaScript.","exampleText":"// Code for Building Components: Modal Popup, Tabs, Accordion","exampleOutput":"See console or UI","answerFile":"./answers/TOP071.html","learningOutcome":"Understanding building components: modal popup, tabs, accordion.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP072","title":"Keyboard Events — Keydown, Keyup & Keypress","difficulty":"Beginner","description":"This project demonstrates keyboard events — keydown, keyup & keypress in JavaScript.","exampleText":"// Code for Keyboard Events — Keydown, Keyup & Keypress","exampleOutput":"See console or UI","answerFile":"./answers/TOP072.html","learningOutcome":"Understanding keyboard events — keydown, keyup & keypress.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP073","title":"Advanced: Function Declarations Vs Function Expressions","difficulty":"Advanced","description":"This project demonstrates advanced: function declarations vs function expressions in JavaScript.","exampleText":"// Code for Advanced: Function Declarations Vs Function Expressions","exampleOutput":"See console or UI","answerFile":"./answers/TOP073.js","learningOutcome":"Understanding advanced: function declarations vs function expressions.","logicExplanation":"Function declarations are hoisted, allowing them to be called before definition. They are the most common way to define reusable blocks.","codeExplanation":"A function to calculate factorial is defined and called, showing hoisting in action."},{"projectId":"TOP074","title":"Advanced: Parameters, Arguments And Default Parameters","difficulty":"Advanced","description":"This project demonstrates advanced: parameters, arguments and default parameters in JavaScript.","exampleText":"// Code for Advanced: Parameters, Arguments And Default Parameters","exampleOutput":"See console or UI","answerFile":"./answers/TOP074.js","learningOutcome":"Understanding advanced: parameters, arguments and default parameters.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP075","title":"Advanced: Return Values And Early Returns","difficulty":"Advanced","description":"This project demonstrates advanced: return values and early returns in JavaScript.","exampleText":"// Code for Advanced: Return Values And Early Returns","exampleOutput":"See console or UI","answerFile":"./answers/TOP075.js","learningOutcome":"Understanding advanced: return values and early returns.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP076","title":"Advanced: Function Scope Basics: Local Vs Global Variables","difficulty":"Advanced","description":"This project demonstrates advanced: function scope basics: local vs global variables in JavaScript.","exampleText":"// Code for Advanced: Function Scope Basics: Local Vs Global Variables","exampleOutput":"See console or UI","answerFile":"./answers/TOP076.js","learningOutcome":"Understanding advanced: function scope basics: local vs global variables.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP077","title":"Advanced: Arrow Functions And Concise Syntax","difficulty":"Advanced","description":"This project demonstrates advanced: arrow functions and concise syntax in JavaScript.","exampleText":"// Code for Advanced: Arrow Functions And Concise Syntax","exampleOutput":"See console or UI","answerFile":"./answers/TOP077.js","learningOutcome":"Understanding advanced: arrow functions and concise syntax.","logicExplanation":"Arrow functions provide a shorter syntax and lexical `this`. They are often used as callbacks and in functional programming.","codeExplanation":"The code defines an arrow function to square numbers and uses it with `map`."},{"projectId":"TOP078","title":"Advanced: Pure Functions Vs Side Effects (Intro Idea)","difficulty":"Advanced","description":"This project demonstrates advanced: pure functions vs side effects (intro idea) in JavaScript.","exampleText":"// Code for Advanced: Pure Functions Vs Side Effects (Intro Idea)","exampleOutput":"See console or UI","answerFile":"./answers/TOP078.js","learningOutcome":"Understanding advanced: pure functions vs side effects (intro idea).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP079","title":"Advanced: Creating Arrays, Indexing And Length","difficulty":"Advanced","description":"This project demonstrates advanced: creating arrays, indexing and length in JavaScript.","exampleText":"// Code for Advanced: Creating Arrays, Indexing And Length","exampleOutput":"See console or UI","answerFile":"./answers/TOP079.js","learningOutcome":"Understanding advanced: creating arrays, indexing and length.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP080","title":"Advanced: Mutating Methods: Push, Pop, Shift, Unshift, Splice","difficulty":"Advanced","description":"This project demonstrates advanced: mutating methods: push, pop, shift, unshift, splice in JavaScript.","exampleText":"// Code for Advanced: Mutating Methods: Push, Pop, Shift, Unshift, Splice","exampleOutput":"See console or UI","answerFile":"./answers/TOP080.js","learningOutcome":"Understanding advanced: mutating methods: push, pop, shift, unshift, splice.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP081","title":"Advanced: Non-Mutating Methods: Slice, Concat","difficulty":"Advanced","description":"This project demonstrates advanced: non-mutating methods: slice, concat in JavaScript.","exampleText":"// Code for Advanced: Non-Mutating Methods: Slice, Concat","exampleOutput":"See console or UI","answerFile":"./answers/TOP081.js","learningOutcome":"Understanding advanced: non-mutating methods: slice, concat.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP082","title":"Advanced: Searching: Indexof, Includes, Find, Findindex","difficulty":"Advanced","description":"This project demonstrates advanced: searching: indexof, includes, find, findindex in JavaScript.","exampleText":"// Code for Advanced: Searching: Indexof, Includes, Find, Findindex","exampleOutput":"See console or UI","answerFile":"./answers/TOP082.js","learningOutcome":"Understanding advanced: searching: indexof, includes, find, findindex.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP083","title":"Advanced: Iterating Arrays With For, For-Of And Foreach","difficulty":"Advanced","description":"This project demonstrates advanced: iterating arrays with for, for-of and foreach in JavaScript.","exampleText":"// Code for Advanced: Iterating Arrays With For, For-Of And Foreach","exampleOutput":"See console or UI","answerFile":"./answers/TOP083.js","learningOutcome":"Understanding advanced: iterating arrays with for, for-of and foreach.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP084","title":"Advanced: Intro To Higher-Order Methods: Map, Filter, Reduce (Light Overview)","difficulty":"Advanced","description":"This project demonstrates advanced: intro to higher-order methods: map, filter, reduce (light overview) in JavaScript.","exampleText":"// Code for Advanced: Intro To Higher-Order Methods: Map, Filter, Reduce (Light Overview)","exampleOutput":"See console or UI","answerFile":"./answers/TOP084.js","learningOutcome":"Understanding advanced: intro to higher-order methods: map, filter, reduce (light overview).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP085","title":"Advanced: Projects Basic","difficulty":"Advanced","description":"This project demonstrates advanced: projects basic in JavaScript.","exampleText":"// Code for Advanced: Projects Basic","exampleOutput":"See console or UI","answerFile":"./answers/TOP085.js","learningOutcome":"Understanding advanced: projects basic.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP086","title":"Advanced: Project Advance","difficulty":"Advanced","description":"This project demonstrates advanced: project advance in JavaScript.","exampleText":"// Code for Advanced: Project Advance","exampleOutput":"See console or UI","answerFile":"./answers/TOP086.js","learningOutcome":"Understanding advanced: project advance.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP087","title":"Advanced: Object Literals: Keys, Values, Methods","difficulty":"Advanced","description":"This project demonstrates advanced: object literals: keys, values, methods in JavaScript.","exampleText":"// Code for Advanced: Object Literals: Keys, Values, Methods","exampleOutput":"See console or UI","answerFile":"./answers/TOP087.js","learningOutcome":"Understanding advanced: object literals: keys, values, methods.","logicExplanation":"Objects store collections of key‑value pairs. Dot notation (`obj.key`) and bracket notation (`obj[\'key\']`) access properties.","codeExplanation":"The code creates a person object with properties and methods, then accesses and modifies them."},{"projectId":"TOP088","title":"Advanced: Accessing Properties: Dot Vs Bracket Notation","difficulty":"Advanced","description":"This project demonstrates advanced: accessing properties: dot vs bracket notation in JavaScript.","exampleText":"// Code for Advanced: Accessing Properties: Dot Vs Bracket Notation","exampleOutput":"See console or UI","answerFile":"./answers/TOP088.js","learningOutcome":"Understanding advanced: accessing properties: dot vs bracket notation.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP089","title":"Advanced: Nested Objects And Arrays Of Objects","difficulty":"Advanced","description":"This project demonstrates advanced: nested objects and arrays of objects in JavaScript.","exampleText":"// Code for Advanced: Nested Objects And Arrays Of Objects","exampleOutput":"See console or UI","answerFile":"./answers/TOP089.js","learningOutcome":"Understanding advanced: nested objects and arrays of objects.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP090","title":"Advanced: The This Keyword (Beginner-Level Understanding)","difficulty":"Advanced","description":"This project demonstrates advanced: the this keyword (beginner-level understanding) in JavaScript.","exampleText":"// Code for Advanced: The This Keyword (Beginner-Level Understanding)","exampleOutput":"See console or UI","answerFile":"./answers/TOP090.js","learningOutcome":"Understanding advanced: the this keyword (beginner-level understanding).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP091","title":"Advanced: Constructor Functions And The New Keyword (Overview)","difficulty":"Advanced","description":"This project demonstrates advanced: constructor functions and the new keyword (overview) in JavaScript.","exampleText":"// Code for Advanced: Constructor Functions And The New Keyword (Overview)","exampleOutput":"See console or UI","answerFile":"./answers/TOP091.js","learningOutcome":"Understanding advanced: constructor functions and the new keyword (overview).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP092","title":"Advanced: Es6 Class Syntax, Constructor, Methods And Basic Inheritance (Conceptual)","difficulty":"Advanced","description":"This project demonstrates advanced: es6 class syntax, constructor, methods and basic inheritance (conceptual) in JavaScript.","exampleText":"// Code for Advanced: Es6 Class Syntax, Constructor, Methods And Basic Inheritance (Conceptual)","exampleOutput":"See console or UI","answerFile":"./answers/TOP092.js","learningOutcome":"Understanding advanced: es6 class syntax, constructor, methods and basic inheritance (conceptual).","logicExplanation":"ES6 classes provide a clean syntax for object‑oriented programming. They support constructors, methods, inheritance, and static methods.","codeExplanation":"A `Vehicle` class and a `Car` subclass are defined, demonstrating inheritance and method overriding."},{"projectId":"TOP093","title":"Advanced: Object Literals: Keys, Values, Methods","difficulty":"Advanced","description":"This project demonstrates advanced: object literals: keys, values, methods in JavaScript.","exampleText":"// Code for Advanced: Object Literals: Keys, Values, Methods","exampleOutput":"See console or UI","answerFile":"./answers/TOP093.js","learningOutcome":"Understanding advanced: object literals: keys, values, methods.","logicExplanation":"Objects store collections of key‑value pairs. Dot notation (`obj.key`) and bracket notation (`obj[\'key\']`) access properties.","codeExplanation":"The code creates a person object with properties and methods, then accesses and modifies them."},{"projectId":"TOP094","title":"Advanced: Accessing Properties: Dot Vs Bracket Notation","difficulty":"Advanced","description":"This project demonstrates advanced: accessing properties: dot vs bracket notation in JavaScript.","exampleText":"// Code for Advanced: Accessing Properties: Dot Vs Bracket Notation","exampleOutput":"See console or UI","answerFile":"./answers/TOP094.js","learningOutcome":"Understanding advanced: accessing properties: dot vs bracket notation.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP095","title":"Advanced: Adding, Updating And Deleting Object Properties","difficulty":"Advanced","description":"This project demonstrates advanced: adding, updating and deleting object properties in JavaScript.","exampleText":"// Code for Advanced: Adding, Updating And Deleting Object Properties","exampleOutput":"See console or UI","answerFile":"./answers/TOP095.js","learningOutcome":"Understanding advanced: adding, updating and deleting object properties.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP096","title":"Advanced: Checking Properties: In Operator And Hasownproperty()","difficulty":"Advanced","description":"This project demonstrates advanced: checking properties: in operator and hasownproperty() in JavaScript.","exampleText":"// Code for Advanced: Checking Properties: In Operator And Hasownproperty()","exampleOutput":"See console or UI","answerFile":"./answers/TOP096.js","learningOutcome":"Understanding advanced: checking properties: in operator and hasownproperty().","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP097","title":"Advanced: Nested Objects And Arrays Of Objects","difficulty":"Advanced","description":"This project demonstrates advanced: nested objects and arrays of objects in JavaScript.","exampleText":"// Code for Advanced: Nested Objects And Arrays Of Objects","exampleOutput":"See console or UI","answerFile":"./answers/TOP097.js","learningOutcome":"Understanding advanced: nested objects and arrays of objects.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP098","title":"Advanced: Accessing Deeply Nested Values","difficulty":"Advanced","description":"This project demonstrates advanced: accessing deeply nested values in JavaScript.","exampleText":"// Code for Advanced: Accessing Deeply Nested Values","exampleOutput":"See console or UI","answerFile":"./answers/TOP098.js","learningOutcome":"Understanding advanced: accessing deeply nested values.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP099","title":"Advanced: The This Keyword Inside Objects (Beginner-Friendly)","difficulty":"Advanced","description":"This project demonstrates advanced: the this keyword inside objects (beginner-friendly) in JavaScript.","exampleText":"// Code for Advanced: The This Keyword Inside Objects (Beginner-Friendly)","exampleOutput":"See console or UI","answerFile":"./answers/TOP099.js","learningOutcome":"Understanding advanced: the this keyword inside objects (beginner-friendly).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP100","title":"Advanced: Arrow Functions Vs Normal Functions: This Difference","difficulty":"Advanced","description":"This project demonstrates advanced: arrow functions vs normal functions: this difference in JavaScript.","exampleText":"// Code for Advanced: Arrow Functions Vs Normal Functions: This Difference","exampleOutput":"See console or UI","answerFile":"./answers/TOP100.js","learningOutcome":"Understanding advanced: arrow functions vs normal functions: this difference.","logicExplanation":"Arrow functions provide a shorter syntax and lexical `this`. They are often used as callbacks and in functional programming.","codeExplanation":"The code defines an arrow function to square numbers and uses it with `map`."},{"projectId":"TOP101","title":"Advanced: Iterating Objects: For...In Loop","difficulty":"Advanced","description":"This project demonstrates advanced: iterating objects: for...in loop in JavaScript.","exampleText":"// Code for Advanced: Iterating Objects: For...In Loop","exampleOutput":"See console or UI","answerFile":"./answers/TOP101.js","learningOutcome":"Understanding advanced: iterating objects: for...in loop.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP102","title":"Advanced: Object.Keys(), Object.Values(), Object.Entries()","difficulty":"Advanced","description":"This project demonstrates advanced: object.keys(), object.values(), object.entries() in JavaScript.","exampleText":"// Code for Advanced: Object.Keys(), Object.Values(), Object.Entries()","exampleOutput":"See console or UI","answerFile":"./answers/TOP102.js","learningOutcome":"Understanding advanced: object.keys(), object.values(), object.entries().","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP103","title":"Advanced: Looping Arrays Of Objects Using Map, Filter, Reduce","difficulty":"Advanced","description":"This project demonstrates advanced: looping arrays of objects using map, filter, reduce in JavaScript.","exampleText":"// Code for Advanced: Looping Arrays Of Objects Using Map, Filter, Reduce","exampleOutput":"See console or UI","answerFile":"./answers/TOP103.js","learningOutcome":"Understanding advanced: looping arrays of objects using map, filter, reduce.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP104","title":"Advanced: Objects As Reference Types","difficulty":"Advanced","description":"This project demonstrates advanced: objects as reference types in JavaScript.","exampleText":"// Code for Advanced: Objects As Reference Types","exampleOutput":"See console or UI","answerFile":"./answers/TOP104.js","learningOutcome":"Understanding advanced: objects as reference types.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP105","title":"Advanced: Shallow Copy: Spread Operator And Object.Assign()","difficulty":"Advanced","description":"This project demonstrates advanced: shallow copy: spread operator and object.assign() in JavaScript.","exampleText":"// Code for Advanced: Shallow Copy: Spread Operator And Object.Assign()","exampleOutput":"See console or UI","answerFile":"./answers/TOP105.js","learningOutcome":"Understanding advanced: shallow copy: spread operator and object.assign().","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP106","title":"Advanced: Deep Copy: Structuredclone() And Json Technique","difficulty":"Advanced","description":"This project demonstrates advanced: deep copy: structuredclone() and json technique in JavaScript.","exampleText":"// Code for Advanced: Deep Copy: Structuredclone() And Json Technique","exampleOutput":"See console or UI","answerFile":"./answers/TOP106.js","learningOutcome":"Understanding advanced: deep copy: structuredclone() and json technique.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP107","title":"Advanced: Shorthand Properties And Computed Property Names","difficulty":"Advanced","description":"This project demonstrates advanced: shorthand properties and computed property names in JavaScript.","exampleText":"// Code for Advanced: Shorthand Properties And Computed Property Names","exampleOutput":"See console or UI","answerFile":"./answers/TOP107.js","learningOutcome":"Understanding advanced: shorthand properties and computed property names.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP108","title":"Advanced: Object Destructuring And Nested Destructuring","difficulty":"Advanced","description":"This project demonstrates advanced: object destructuring and nested destructuring in JavaScript.","exampleText":"// Code for Advanced: Object Destructuring And Nested Destructuring","exampleOutput":"See console or UI","answerFile":"./answers/TOP108.js","learningOutcome":"Understanding advanced: object destructuring and nested destructuring.","logicExplanation":"Destructuring extracts values from arrays or properties from objects into distinct variables. It simplifies working with complex data.","codeExplanation":"The script destructures an array of coordinates and an object\'s properties, then uses them."},{"projectId":"TOP109","title":"Advanced: Spread And Rest Operator For Objects","difficulty":"Advanced","description":"This project demonstrates advanced: spread and rest operator for objects in JavaScript.","exampleText":"// Code for Advanced: Spread And Rest Operator For Objects","exampleOutput":"See console or UI","answerFile":"./answers/TOP109.js","learningOutcome":"Understanding advanced: spread and rest operator for objects.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP110","title":"Advanced: Default Values In Destructuring","difficulty":"Advanced","description":"This project demonstrates advanced: default values in destructuring in JavaScript.","exampleText":"// Code for Advanced: Default Values In Destructuring","exampleOutput":"See console or UI","answerFile":"./answers/TOP110.js","learningOutcome":"Understanding advanced: default values in destructuring.","logicExplanation":"Destructuring extracts values from arrays or properties from objects into distinct variables. It simplifies working with complex data.","codeExplanation":"The script destructures an array of coordinates and an object\'s properties, then uses them."},{"projectId":"TOP111","title":"Advanced: Getters And Setters","difficulty":"Advanced","description":"This project demonstrates advanced: getters and setters in JavaScript.","exampleText":"// Code for Advanced: Getters And Setters","exampleOutput":"See console or UI","answerFile":"./answers/TOP111.js","learningOutcome":"Understanding advanced: getters and setters.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP112","title":"Advanced: Optional Chaining (?.) And Nullish Coalescing (??)","difficulty":"Advanced","description":"This project demonstrates advanced: optional chaining (?.) and nullish coalescing (??) in JavaScript.","exampleText":"// Code for Advanced: Optional Chaining (?.) And Nullish Coalescing (??)","exampleOutput":"See console or UI","answerFile":"./answers/TOP112.js","learningOutcome":"Understanding advanced: optional chaining (?.) and nullish coalescing (??).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP113","title":"Advanced: Object.Freeze(), Object.Seal() And Preventextensions()","difficulty":"Advanced","description":"This project demonstrates advanced: object.freeze(), object.seal() and preventextensions() in JavaScript.","exampleText":"// Code for Advanced: Object.Freeze(), Object.Seal() And Preventextensions()","exampleOutput":"See console or UI","answerFile":"./answers/TOP113.html","learningOutcome":"Understanding advanced: object.freeze(), object.seal() and preventextensions().","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP114","title":"Advanced: Constructor Functions And The New Keyword (Overview)","difficulty":"Advanced","description":"This project demonstrates advanced: constructor functions and the new keyword (overview) in JavaScript.","exampleText":"// Code for Advanced: Constructor Functions And The New Keyword (Overview)","exampleOutput":"See console or UI","answerFile":"./answers/TOP114.js","learningOutcome":"Understanding advanced: constructor functions and the new keyword (overview).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP115","title":"Advanced: Prototype And Prototype Chain (Conceptual Understanding)","difficulty":"Advanced","description":"This project demonstrates advanced: prototype and prototype chain (conceptual understanding) in JavaScript.","exampleText":"// Code for Advanced: Prototype And Prototype Chain (Conceptual Understanding)","exampleOutput":"See console or UI","answerFile":"./answers/TOP115.js","learningOutcome":"Understanding advanced: prototype and prototype chain (conceptual understanding).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP116","title":"Advanced: Adding Methods Using Prototypes","difficulty":"Advanced","description":"This project demonstrates advanced: adding methods using prototypes in JavaScript.","exampleText":"// Code for Advanced: Adding Methods Using Prototypes","exampleOutput":"See console or UI","answerFile":"./answers/TOP116.js","learningOutcome":"Understanding advanced: adding methods using prototypes.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP117","title":"Advanced: Es6 Class Syntax: Constructor, Instance Methods, Static Methods","difficulty":"Advanced","description":"This project demonstrates advanced: es6 class syntax: constructor, instance methods, static methods in JavaScript.","exampleText":"// Code for Advanced: Es6 Class Syntax: Constructor, Instance Methods, Static Methods","exampleOutput":"See console or UI","answerFile":"./answers/TOP117.js","learningOutcome":"Understanding advanced: es6 class syntax: constructor, instance methods, static methods.","logicExplanation":"ES6 classes provide a clean syntax for object‑oriented programming. They support constructors, methods, inheritance, and static methods.","codeExplanation":"A `Vehicle` class and a `Car` subclass are defined, demonstrating inheritance and method overriding."},{"projectId":"TOP118","title":"Advanced: Class Inheritance Using Extends","difficulty":"Advanced","description":"This project demonstrates advanced: class inheritance using extends in JavaScript.","exampleText":"// Code for Advanced: Class Inheritance Using Extends","exampleOutput":"See console or UI","answerFile":"./answers/TOP118.js","learningOutcome":"Understanding advanced: class inheritance using extends.","logicExplanation":"ES6 classes provide a clean syntax for object‑oriented programming. They support constructors, methods, inheritance, and static methods.","codeExplanation":"A `Vehicle` class and a `Car` subclass are defined, demonstrating inheritance and method overriding."},{"projectId":"TOP119","title":"Advanced: Super() Keyword And Method Overriding","difficulty":"Advanced","description":"This project demonstrates advanced: super() keyword and method overriding in JavaScript.","exampleText":"// Code for Advanced: Super() Keyword And Method Overriding","exampleOutput":"See console or UI","answerFile":"./answers/TOP119.js","learningOutcome":"Understanding advanced: super() keyword and method overriding.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP120","title":"Advanced: Json.Parse() And Json.Stringify()","difficulty":"Advanced","description":"This project demonstrates advanced: json.parse() and json.stringify() in JavaScript.","exampleText":"// Code for Advanced: Json.Parse() And Json.Stringify()","exampleOutput":"See console or UI","answerFile":"./answers/TOP120.js","learningOutcome":"Understanding advanced: json.parse() and json.stringify().","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP121","title":"Advanced: Storing And Retrieving Objects In Localstorage","difficulty":"Advanced","description":"This project demonstrates advanced: storing and retrieving objects in localstorage in JavaScript.","exampleText":"// Code for Advanced: Storing And Retrieving Objects In Localstorage","exampleOutput":"See console or UI","answerFile":"./answers/TOP121.js","learningOutcome":"Understanding advanced: storing and retrieving objects in localstorage.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP122","title":"Advanced: Merging Objects And Checking Object Equality","difficulty":"Advanced","description":"This project demonstrates advanced: merging objects and checking object equality in JavaScript.","exampleText":"// Code for Advanced: Merging Objects And Checking Object Equality","exampleOutput":"See console or UI","answerFile":"./answers/TOP122.js","learningOutcome":"Understanding advanced: merging objects and checking object equality.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP123","title":"Advanced: Working With Arrays Of Objects (Students, Products, Tasks)","difficulty":"Advanced","description":"This project demonstrates advanced: working with arrays of objects (students, products, tasks) in JavaScript.","exampleText":"// Code for Advanced: Working With Arrays Of Objects (Students, Products, Tasks)","exampleOutput":"See console or UI","answerFile":"./answers/TOP123.js","learningOutcome":"Understanding advanced: working with arrays of objects (students, products, tasks).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP124","title":"Advanced: Map() With Objects – Transforming Shapes And Selecting Fields","difficulty":"Advanced","description":"This project demonstrates advanced: map() with objects – transforming shapes and selecting fields in JavaScript.","exampleText":"// Code for Advanced: Map() With Objects – Transforming Shapes And Selecting Fields","exampleOutput":"See console or UI","answerFile":"./answers/TOP124.html","learningOutcome":"Understanding advanced: map() with objects – transforming shapes and selecting fields.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP125","title":"Advanced: Filter() With Multiple Conditions And Nested Object Filtering","difficulty":"Advanced","description":"This project demonstrates advanced: filter() with multiple conditions and nested object filtering in JavaScript.","exampleText":"// Code for Advanced: Filter() With Multiple Conditions And Nested Object Filtering","exampleOutput":"See console or UI","answerFile":"./answers/TOP125.js","learningOutcome":"Understanding advanced: filter() with multiple conditions and nested object filtering.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP126","title":"Advanced: Reduce() For Totals, Grouping, Counting And Analytics","difficulty":"Advanced","description":"This project demonstrates advanced: reduce() for totals, grouping, counting and analytics in JavaScript.","exampleText":"// Code for Advanced: Reduce() For Totals, Grouping, Counting And Analytics","exampleOutput":"See console or UI","answerFile":"./answers/TOP126.js","learningOutcome":"Understanding advanced: reduce() for totals, grouping, counting and analytics.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP127","title":"Advanced: Find() And Findindex() – Locating Complex Objects","difficulty":"Advanced","description":"This project demonstrates advanced: find() and findindex() – locating complex objects in JavaScript.","exampleText":"// Code for Advanced: Find() And Findindex() – Locating Complex Objects","exampleOutput":"See console or UI","answerFile":"./answers/TOP127.js","learningOutcome":"Understanding advanced: find() and findindex() – locating complex objects.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP128","title":"Advanced: Sort() With Custom Comparator Functions (Marks, Price, Name)","difficulty":"Advanced","description":"This project demonstrates advanced: sort() with custom comparator functions (marks, price, name) in JavaScript.","exampleText":"// Code for Advanced: Sort() With Custom Comparator Functions (Marks, Price, Name)","exampleOutput":"See console or UI","answerFile":"./answers/TOP128.js","learningOutcome":"Understanding advanced: sort() with custom comparator functions (marks, price, name).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP129","title":"Advanced: Some() And Every() With Object Validation","difficulty":"Advanced","description":"This project demonstrates advanced: some() and every() with object validation in JavaScript.","exampleText":"// Code for Advanced: Some() And Every() With Object Validation","exampleOutput":"See console or UI","answerFile":"./answers/TOP129.html","learningOutcome":"Understanding advanced: some() and every() with object validation.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP130","title":"Advanced: Chaining Array Methods (Map → Filter → Reduce)","difficulty":"Advanced","description":"This project demonstrates advanced: chaining array methods (map → filter → reduce) in JavaScript.","exampleText":"// Code for Advanced: Chaining Array Methods (Map → Filter → Reduce)","exampleOutput":"See console or UI","answerFile":"./answers/TOP130.js","learningOutcome":"Understanding advanced: chaining array methods (map → filter → reduce).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP131","title":"Advanced: Deep Array Transformations Inside Nested Objects","difficulty":"Advanced","description":"This project demonstrates advanced: deep array transformations inside nested objects in JavaScript.","exampleText":"// Code for Advanced: Deep Array Transformations Inside Nested Objects","exampleOutput":"See console or UI","answerFile":"./answers/TOP131.html","learningOutcome":"Understanding advanced: deep array transformations inside nested objects.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP132","title":"Advanced: Real-World Datasets (Students, Courses, Products, Tasks)","difficulty":"Advanced","description":"This project demonstrates advanced: real-world datasets (students, courses, products, tasks) in JavaScript.","exampleText":"// Code for Advanced: Real-World Datasets (Students, Courses, Products, Tasks)","exampleOutput":"See console or UI","answerFile":"./answers/TOP132.js","learningOutcome":"Understanding advanced: real-world datasets (students, courses, products, tasks).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP133","title":"Advanced: What Is The Dom? Nodes, Elements And The Tree Structure","difficulty":"Advanced","description":"This project demonstrates advanced: what is the dom? nodes, elements and the tree structure in JavaScript.","exampleText":"// Code for Advanced: What Is The Dom? Nodes, Elements And The Tree Structure","exampleOutput":"See console or UI","answerFile":"./answers/TOP133.html","learningOutcome":"Understanding advanced: what is the dom? nodes, elements and the tree structure.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP134","title":"Advanced: Selecting Elements: Getelementbyid, Queryselector, Queryselectorall","difficulty":"Advanced","description":"This project demonstrates advanced: selecting elements: getelementbyid, queryselector, queryselectorall in JavaScript.","exampleText":"// Code for Advanced: Selecting Elements: Getelementbyid, Queryselector, Queryselectorall","exampleOutput":"See console or UI","answerFile":"./answers/TOP134.js","learningOutcome":"Understanding advanced: selecting elements: getelementbyid, queryselector, queryselectorall.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP135","title":"Advanced: Changing Text, Html And Styles Dynamically","difficulty":"Advanced","description":"This project demonstrates advanced: changing text, html and styles dynamically in JavaScript.","exampleText":"// Code for Advanced: Changing Text, Html And Styles Dynamically","exampleOutput":"See console or UI","answerFile":"./answers/TOP135.js","learningOutcome":"Understanding advanced: changing text, html and styles dynamically.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP136","title":"Advanced: Creating, Appending And Removing Elements","difficulty":"Advanced","description":"This project demonstrates advanced: creating, appending and removing elements in JavaScript.","exampleText":"// Code for Advanced: Creating, Appending And Removing Elements","exampleOutput":"See console or UI","answerFile":"./answers/TOP136.js","learningOutcome":"Understanding advanced: creating, appending and removing elements.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP137","title":"Advanced: Working With Attributes, Classes And Data-* Attributes","difficulty":"Advanced","description":"This project demonstrates advanced: working with attributes, classes and data-* attributes in JavaScript.","exampleText":"// Code for Advanced: Working With Attributes, Classes And Data-* Attributes","exampleOutput":"See console or UI","answerFile":"./answers/TOP137.js","learningOutcome":"Understanding advanced: working with attributes, classes and data-* attributes.","logicExplanation":"ES6 classes provide a clean syntax for object‑oriented programming. They support constructors, methods, inheritance, and static methods.","codeExplanation":"A `Vehicle` class and a `Car` subclass are defined, demonstrating inheritance and method overriding."},{"projectId":"TOP138","title":"Advanced: Event Types: Click, Input, Change, Submit, Keyup, Keydown, Mouse Events","difficulty":"Advanced","description":"This project demonstrates advanced: event types: click, input, change, submit, keyup, keydown, mouse events in JavaScript.","exampleText":"// Code for Advanced: Event Types: Click, Input, Change, Submit, Keyup, Keydown, Mouse Events","exampleOutput":"See console or UI","answerFile":"./answers/TOP138.html","learningOutcome":"Understanding advanced: event types: click, input, change, submit, keyup, keydown, mouse events.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP139","title":"Advanced: Addeventlistener And Removing Event Listeners","difficulty":"Advanced","description":"This project demonstrates advanced: addeventlistener and removing event listeners in JavaScript.","exampleText":"// Code for Advanced: Addeventlistener And Removing Event Listeners","exampleOutput":"See console or UI","answerFile":"./answers/TOP139.html","learningOutcome":"Understanding advanced: addeventlistener and removing event listeners.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP140","title":"Advanced: Event Object Basics And Target Property","difficulty":"Advanced","description":"This project demonstrates advanced: event object basics and target property in JavaScript.","exampleText":"// Code for Advanced: Event Object Basics And Target Property","exampleOutput":"See console or UI","answerFile":"./answers/TOP140.html","learningOutcome":"Understanding advanced: event object basics and target property.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP141","title":"Advanced: Event Bubbling And Capturing (Intro, Conceptual)","difficulty":"Advanced","description":"This project demonstrates advanced: event bubbling and capturing (intro, conceptual) in JavaScript.","exampleText":"// Code for Advanced: Event Bubbling And Capturing (Intro, Conceptual)","exampleOutput":"See console or UI","answerFile":"./answers/TOP141.html","learningOutcome":"Understanding advanced: event bubbling and capturing (intro, conceptual).","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP142","title":"Advanced: Form Handling And Simple Validation With Javascript","difficulty":"Advanced","description":"This project demonstrates advanced: form handling and simple validation with javascript in JavaScript.","exampleText":"// Code for Advanced: Form Handling And Simple Validation With Javascript","exampleOutput":"See console or UI","answerFile":"./answers/TOP142.html","learningOutcome":"Understanding advanced: form handling and simple validation with javascript.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP143","title":"Advanced: Building Components: Modal Popup, Tabs, Accordion","difficulty":"Advanced","description":"This project demonstrates advanced: building components: modal popup, tabs, accordion in JavaScript.","exampleText":"// Code for Advanced: Building Components: Modal Popup, Tabs, Accordion","exampleOutput":"See console or UI","answerFile":"./answers/TOP143.html","learningOutcome":"Understanding advanced: building components: modal popup, tabs, accordion.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP144","title":"Advanced: Keyboard Events — Keydown, Keyup & Keypress","difficulty":"Advanced","description":"This project demonstrates advanced: keyboard events — keydown, keyup & keypress in JavaScript.","exampleText":"// Code for Advanced: Keyboard Events — Keydown, Keyup & Keypress","exampleOutput":"See console or UI","answerFile":"./answers/TOP144.html","learningOutcome":"Understanding advanced: keyboard events — keydown, keyup & keypress.","logicExplanation":"The Document Object Model (DOM) represents the page structure. JavaScript can select elements, modify them, and respond to user events.","codeExplanation":"The code demonstrates selecting elements, adding event listeners, and updating the page dynamically."},{"projectId":"TOP145","title":"Advanced: Function Declarations Vs Function Expressions","difficulty":"Advanced","description":"This project demonstrates advanced: function declarations vs function expressions in JavaScript.","exampleText":"// Code for Advanced: Function Declarations Vs Function Expressions","exampleOutput":"See console or UI","answerFile":"./answers/TOP145.js","learningOutcome":"Understanding advanced: function declarations vs function expressions.","logicExplanation":"Function declarations are hoisted, allowing them to be called before definition. They are the most common way to define reusable blocks.","codeExplanation":"A function to calculate factorial is defined and called, showing hoisting in action."},{"projectId":"TOP146","title":"Advanced: Parameters, Arguments And Default Parameters","difficulty":"Advanced","description":"This project demonstrates advanced: parameters, arguments and default parameters in JavaScript.","exampleText":"// Code for Advanced: Parameters, Arguments And Default Parameters","exampleOutput":"See console or UI","answerFile":"./answers/TOP146.js","learningOutcome":"Understanding advanced: parameters, arguments and default parameters.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP147","title":"Advanced: Return Values And Early Returns","difficulty":"Advanced","description":"This project demonstrates advanced: return values and early returns in JavaScript.","exampleText":"// Code for Advanced: Return Values And Early Returns","exampleOutput":"See console or UI","answerFile":"./answers/TOP147.js","learningOutcome":"Understanding advanced: return values and early returns.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP148","title":"Advanced: Function Scope Basics: Local Vs Global Variables","difficulty":"Advanced","description":"This project demonstrates advanced: function scope basics: local vs global variables in JavaScript.","exampleText":"// Code for Advanced: Function Scope Basics: Local Vs Global Variables","exampleOutput":"See console or UI","answerFile":"./answers/TOP148.js","learningOutcome":"Understanding advanced: function scope basics: local vs global variables.","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."},{"projectId":"TOP149","title":"Advanced: Arrow Functions And Concise Syntax","difficulty":"Advanced","description":"This project demonstrates advanced: arrow functions and concise syntax in JavaScript.","exampleText":"// Code for Advanced: Arrow Functions And Concise Syntax","exampleOutput":"See console or UI","answerFile":"./answers/TOP149.js","learningOutcome":"Understanding advanced: arrow functions and concise syntax.","logicExplanation":"Arrow functions provide a shorter syntax and lexical `this`. They are often used as callbacks and in functional programming.","codeExplanation":"The code defines an arrow function to square numbers and uses it with `map`."},{"projectId":"TOP150","title":"Advanced: Pure Functions Vs Side Effects (Intro Idea)","difficulty":"Advanced","description":"This project demonstrates advanced: pure functions vs side effects (intro idea) in JavaScript.","exampleText":"// Code for Advanced: Pure Functions Vs Side Effects (Intro Idea)","exampleOutput":"See console or UI","answerFile":"./answers/TOP150.js","learningOutcome":"Understanding advanced: pure functions vs side effects (intro idea).","logicExplanation":"This project applies the listed JavaScript concepts to solve a practical problem.","codeExplanation":"The code demonstrates the use of the relevant features in a clear, commented way."}]'),d={projectCategory:Qt,subject:Xt,board:Zt,class:"Beginner / Intermediate / Advanced",tools:er,institute:nr,projects:tr};function yr(){const[t,l]=s.useState(null);return s.useEffect(()=>{const r=Object.assign({"./topic0_files/answers/ADV001.html":u,"./topic0_files/answers/ADV002.html":h,"./topic0_files/answers/ADV003.html":g,"./topic0_files/answers/ADV004.html":v,"./topic0_files/answers/ADV005.html":f,"./topic0_files/answers/ADV006.html":y,"./topic0_files/answers/ADV007.html":b,"./topic0_files/answers/ADV008.html":x,"./topic0_files/answers/ADV009.html":j,"./topic0_files/answers/ADV010.html":T,"./topic0_files/answers/ADV011.html":w,"./topic0_files/answers/ADV012.html":O,"./topic0_files/answers/ARR001.js":A,"./topic0_files/answers/ARR002.html":S,"./topic0_files/answers/ARR003.js":_,"./topic0_files/answers/ARR004.html":P,"./topic0_files/answers/ARR005.js":E,"./topic0_files/answers/ARR006.js":I,"./topic0_files/answers/ARR007.js":C,"./topic0_files/answers/ARR008.js":k,"./topic0_files/answers/BAS001.js":D,"./topic0_files/answers/BAS002.js":J,"./topic0_files/answers/BAS003.js":F,"./topic0_files/answers/BAS004.js":U,"./topic0_files/answers/BAS005.js":M,"./topic0_files/answers/CTL001.js":B,"./topic0_files/answers/CTL002.js":L,"./topic0_files/answers/CTL003.js":N,"./topic0_files/answers/CTL004.html":V,"./topic0_files/answers/CTL005.js":R,"./topic0_files/answers/CTL006.js":W,"./topic0_files/answers/DOM001.js":$,"./topic0_files/answers/DOM002.js":K,"./topic0_files/answers/DOM003.html":q,"./topic0_files/answers/DOM004.html":H,"./topic0_files/answers/DOM005.html":z,"./topic0_files/answers/DOM006.html":G,"./topic0_files/answers/DOM007.html":Y,"./topic0_files/answers/FUN001.js":Q,"./topic0_files/answers/FUN002.js":X,"./topic0_files/answers/FUN003.js":Z,"./topic0_files/answers/FUN004.js":ee,"./topic0_files/answers/OBJ001.js":ne,"./topic0_files/answers/OBJ002.js":te,"./topic0_files/answers/OBJ003.js":re,"./topic0_files/answers/OBJ004.js":ae,"./topic0_files/answers/OBJ005.js":oe,"./topic0_files/answers/OBJ006.js":ie,"./topic0_files/answers/OBJ007.js":se,"./topic0_files/answers/TOP001.js":ce,"./topic0_files/answers/TOP002.js":de,"./topic0_files/answers/TOP003.js":le,"./topic0_files/answers/TOP004.js":pe,"./topic0_files/answers/TOP005.js":me,"./topic0_files/answers/TOP006.js":ue,"./topic0_files/answers/TOP007.js":he,"./topic0_files/answers/TOP008.js":ge,"./topic0_files/answers/TOP009.js":ve,"./topic0_files/answers/TOP010.js":fe,"./topic0_files/answers/TOP011.js":ye,"./topic0_files/answers/TOP012.js":be,"./topic0_files/answers/TOP013.js":xe,"./topic0_files/answers/TOP014.js":je,"./topic0_files/answers/TOP015.js":Te,"./topic0_files/answers/TOP016.js":we,"./topic0_files/answers/TOP017.js":Oe,"./topic0_files/answers/TOP018.js":Ae,"./topic0_files/answers/TOP019.js":Se,"./topic0_files/answers/TOP020.js":_e,"./topic0_files/answers/TOP021.js":Pe,"./topic0_files/answers/TOP022.js":Ee,"./topic0_files/answers/TOP023.js":Ie,"./topic0_files/answers/TOP024.js":Ce,"./topic0_files/answers/TOP025.js":ke,"./topic0_files/answers/TOP026.js":De,"./topic0_files/answers/TOP027.js":Je,"./topic0_files/answers/TOP028.js":Fe,"./topic0_files/answers/TOP029.js":Ue,"./topic0_files/answers/TOP030.js":Me,"./topic0_files/answers/TOP031.js":Be,"./topic0_files/answers/TOP032.js":Le,"./topic0_files/answers/TOP033.js":Ne,"./topic0_files/answers/TOP034.js":Ve,"./topic0_files/answers/TOP035.js":Re,"./topic0_files/answers/TOP036.js":We,"./topic0_files/answers/TOP037.js":$e,"./topic0_files/answers/TOP038.js":Ke,"./topic0_files/answers/TOP039.js":qe,"./topic0_files/answers/TOP040.js":He,"./topic0_files/answers/TOP041.html":ze,"./topic0_files/answers/TOP042.js":Ge,"./topic0_files/answers/TOP043.js":Ye,"./topic0_files/answers/TOP044.js":Qe,"./topic0_files/answers/TOP045.js":Xe,"./topic0_files/answers/TOP046.js":Ze,"./topic0_files/answers/TOP047.js":en,"./topic0_files/answers/TOP048.js":nn,"./topic0_files/answers/TOP049.js":tn,"./topic0_files/answers/TOP050.js":rn,"./topic0_files/answers/TOP051.js":an,"./topic0_files/answers/TOP052.html":on,"./topic0_files/answers/TOP053.js":sn,"./topic0_files/answers/TOP054.js":cn,"./topic0_files/answers/TOP055.js":dn,"./topic0_files/answers/TOP056.js":ln,"./topic0_files/answers/TOP057.html":pn,"./topic0_files/answers/TOP058.js":mn,"./topic0_files/answers/TOP059.html":un,"./topic0_files/answers/TOP060.js":hn,"./topic0_files/answers/TOP061.html":gn,"./topic0_files/answers/TOP062.js":vn,"./topic0_files/answers/TOP063.js":fn,"./topic0_files/answers/TOP064.js":yn,"./topic0_files/answers/TOP065.js":bn,"./topic0_files/answers/TOP066.html":xn,"./topic0_files/answers/TOP067.html":jn,"./topic0_files/answers/TOP068.html":Tn,"./topic0_files/answers/TOP069.html":wn,"./topic0_files/answers/TOP070.html":On,"./topic0_files/answers/TOP071.html":An,"./topic0_files/answers/TOP072.html":Sn,"./topic0_files/answers/TOP073.js":_n,"./topic0_files/answers/TOP074.js":Pn,"./topic0_files/answers/TOP075.js":En,"./topic0_files/answers/TOP076.js":In,"./topic0_files/answers/TOP077.js":Cn,"./topic0_files/answers/TOP078.js":kn,"./topic0_files/answers/TOP079.js":Dn,"./topic0_files/answers/TOP080.js":Jn,"./topic0_files/answers/TOP081.js":Fn,"./topic0_files/answers/TOP082.js":Un,"./topic0_files/answers/TOP083.js":Mn,"./topic0_files/answers/TOP084.js":Bn,"./topic0_files/answers/TOP085.js":Ln,"./topic0_files/answers/TOP086.js":Nn,"./topic0_files/answers/TOP087.js":Vn,"./topic0_files/answers/TOP088.js":Rn,"./topic0_files/answers/TOP089.js":Wn,"./topic0_files/answers/TOP090.js":$n,"./topic0_files/answers/TOP091.js":Kn,"./topic0_files/answers/TOP092.js":qn,"./topic0_files/answers/TOP093.js":Hn,"./topic0_files/answers/TOP094.js":zn,"./topic0_files/answers/TOP095.js":Gn,"./topic0_files/answers/TOP096.js":Yn,"./topic0_files/answers/TOP097.js":Qn,"./topic0_files/answers/TOP098.js":Xn,"./topic0_files/answers/TOP099.js":Zn,"./topic0_files/answers/TOP100.js":et,"./topic0_files/answers/TOP101.js":nt,"./topic0_files/answers/TOP102.js":tt,"./topic0_files/answers/TOP103.js":rt,"./topic0_files/answers/TOP104.js":at,"./topic0_files/answers/TOP105.js":ot,"./topic0_files/answers/TOP106.js":it,"./topic0_files/answers/TOP107.js":st,"./topic0_files/answers/TOP108.js":ct,"./topic0_files/answers/TOP109.js":dt,"./topic0_files/answers/TOP110.js":lt,"./topic0_files/answers/TOP111.js":pt,"./topic0_files/answers/TOP112.js":mt,"./topic0_files/answers/TOP113.html":ut,"./topic0_files/answers/TOP114.js":ht,"./topic0_files/answers/TOP115.js":gt,"./topic0_files/answers/TOP116.js":vt,"./topic0_files/answers/TOP117.js":ft,"./topic0_files/answers/TOP118.js":yt,"./topic0_files/answers/TOP119.js":bt,"./topic0_files/answers/TOP120.js":xt,"./topic0_files/answers/TOP121.js":jt,"./topic0_files/answers/TOP122.js":Tt,"./topic0_files/answers/TOP123.js":wt,"./topic0_files/answers/TOP124.html":Ot,"./topic0_files/answers/TOP125.js":At,"./topic0_files/answers/TOP126.js":St,"./topic0_files/answers/TOP127.js":_t,"./topic0_files/answers/TOP128.js":Pt,"./topic0_files/answers/TOP129.html":Et,"./topic0_files/answers/TOP130.js":It,"./topic0_files/answers/TOP131.html":Ct,"./topic0_files/answers/TOP132.js":kt,"./topic0_files/answers/TOP133.html":Dt,"./topic0_files/answers/TOP134.js":Jt,"./topic0_files/answers/TOP135.js":Ft,"./topic0_files/answers/TOP136.js":Ut,"./topic0_files/answers/TOP137.js":Mt,"./topic0_files/answers/TOP138.html":Bt,"./topic0_files/answers/TOP139.html":Lt,"./topic0_files/answers/TOP140.html":Nt,"./topic0_files/answers/TOP141.html":Vt,"./topic0_files/answers/TOP142.html":Rt,"./topic0_files/answers/TOP143.html":Wt,"./topic0_files/answers/TOP144.html":$t,"./topic0_files/answers/TOP145.js":Kt,"./topic0_files/answers/TOP146.js":qt,"./topic0_files/answers/TOP147.js":Ht,"./topic0_files/answers/TOP148.js":zt,"./topic0_files/answers/TOP149.js":Gt,"./topic0_files/answers/TOP150.js":Yt}),a={};Object.keys(r).forEach(e=>{const o=e.split("/").pop();a[o]=r[e]});const p=d.projects.map(e=>{const n=(e.answerFile||"").split("/").pop(),i=a[n];return i||console.warn(`⚠ Missing code file: ${n}`),{...e,answer:i||`// File "${n}" not found in answers folder`}});l({...d,projects:p})},[]),t?c.jsx(m,{data:t}):c.jsx("div",{className:"p-6 text-slate-400",children:"Loading projects..."})}export{yr as default};
