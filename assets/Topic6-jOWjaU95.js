import{r as s,j as l}from"./index-2tOzkblz.js";import{J as m}from"./JavaScriptProjectAnswerTemplate-Ub7LlLgw.js";import"./CodeBlock-CFOSdALg.js";import"./prism-DU24L__p.js";import"./prism-json-D0UlpdKh.js";import"./file-code-DBePoNRe.js";import"./copy-CbL44MIv.js";import"./download-BfzMDmZO.js";import"./play-PNWXmE5L.js";import"./graduation-cap-D-h0ep6j.js";import"./code-DB5MZpjz.js";import"./eye-off-BqsY3cZ6.js";import"./eye-BTz061w4.js";import"./lightbulb-YYE1dJPf.js";import"./terminal-BbKu1xZp.js";const u=`// DOM Tree Explorer\r
function printDOMTree(node, indent = '') {\r
    if (node.nodeType === Node.ELEMENT_NODE) {\r
        console.log(indent + node.tagName.toLowerCase());\r
        for (let i = 0; i < node.children.length; i++) {\r
            printDOMTree(node.children[i], indent + '  ');\r
        }\r
    } else if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {\r
        console.log(indent + '"' + node.textContent.trim() + '"');\r
    }\r
}\r
\r
// Start from document body (or document.documentElement for full HTML)\r
console.log('DOM Tree:');\r
printDOMTree(document.body);\r
`,g=`// Select Elements Practice\r
// Assume the HTML contains:\r
// <div id="main">Hello</div>\r
// <p class="info">First info</p>\r
// <p class="info">Second info</p>\r
// <div data-custom="example">Data attribute</div>\r
\r
// getElementById\r
const mainDiv = document.getElementById('main');\r
console.log('getElementById:', mainDiv);\r
\r
// querySelector (first match)\r
const firstInfo = document.querySelector('.info');\r
console.log('querySelector (.info):', firstInfo);\r
\r
// querySelectorAll (NodeList)\r
const allInfos = document.querySelectorAll('.info');\r
console.log('querySelectorAll (.info) count:', allInfos.length);\r
allInfos.forEach((p, idx) => console.log(\`  Info \${idx+1}:\`, p));\r
\r
// querySelector by attribute\r
const dataDiv = document.querySelector('[data-custom]');\r
console.log('querySelector ([data-custom]):', dataDiv);\r
`,h=`// Dynamic Content Changer\r
// HTML: <div id="target">Original text</div>\r
// <button id="changeBtn">Change Me</button>\r
\r
const target = document.getElementById('target');\r
const button = document.getElementById('changeBtn');\r
\r
button.addEventListener('click', () => {\r
    // Change text\r
    target.textContent = 'Text has been changed!';\r
    \r
    // Change HTML (add an emoji)\r
    target.innerHTML = '<strong>New!</strong> ✨';\r
    \r
    // Change style\r
    target.style.backgroundColor = 'lightblue';\r
    target.style.padding = '10px';\r
    target.style.borderRadius = '5px';\r
    \r
    // Toggle a class for fun\r
    target.classList.toggle('highlight');\r
});\r
`,v=`// Interactive To-Do List\r
// HTML: <input id="taskInput" type="text" placeholder="New task">\r
// <button id="addBtn">Add</button>\r
// <ul id="taskList"></ul>\r
\r
const taskInput = document.getElementById('taskInput');\r
const addBtn = document.getElementById('addBtn');\r
const taskList = document.getElementById('taskList');\r
\r
function addTask() {\r
    const text = taskInput.value.trim();\r
    if (text === '') return;\r
\r
    // Create new list item\r
    const li = document.createElement('li');\r
    li.textContent = text;\r
\r
    // Complete button\r
    const completeBtn = document.createElement('button');\r
    completeBtn.textContent = '✔';\r
    completeBtn.style.marginLeft = '10px';\r
    completeBtn.addEventListener('click', () => {\r
        li.classList.toggle('completed');\r
    });\r
\r
    // Delete button\r
    const deleteBtn = document.createElement('button');\r
    deleteBtn.textContent = '✖';\r
    deleteBtn.style.marginLeft = '5px';\r
    deleteBtn.addEventListener('click', () => {\r
        li.remove();\r
    });\r
\r
    li.appendChild(completeBtn);\r
    li.appendChild(deleteBtn);\r
    taskList.appendChild(li);\r
\r
    taskInput.value = '';\r
}\r
\r
addBtn.addEventListener('click', addTask);\r
taskInput.addEventListener('keypress', (e) => {\r
    if (e.key === 'Enter') addTask();\r
});\r
`,f=`// Attribute & Class Manipulator\r
// HTML: <div id="demo" class="box" data-info="initial">Demo Div</div>\r
// Buttons: Set Attribute, Get Attribute, Add Class, Remove Class, Toggle Class, Read Data\r
\r
const demo = document.getElementById('demo');\r
\r
// Get attribute\r
function showAttr() {\r
    const attr = demo.getAttribute('data-info');\r
    alert('data-info = ' + attr);\r
}\r
\r
// Set attribute\r
function setAttr() {\r
    const newVal = prompt('Enter new value for data-info:');\r
    if (newVal) demo.setAttribute('data-info', newVal);\r
}\r
\r
// Add class\r
function addClass() {\r
    demo.classList.add('highlight');\r
}\r
\r
// Remove class\r
function removeClass() {\r
    demo.classList.remove('highlight');\r
}\r
\r
// Toggle class\r
function toggleClass() {\r
    demo.classList.toggle('highlight');\r
}\r
\r
// Read data attribute using dataset\r
function readData() {\r
    const info = demo.dataset.info;\r
    alert('Dataset info = ' + info);\r
}\r
\r
// Attach to buttons (assuming they exist in HTML)\r
document.getElementById('getAttrBtn')?.addEventListener('click', showAttr);\r
document.getElementById('setAttrBtn')?.addEventListener('click', setAttr);\r
document.getElementById('addClassBtn')?.addEventListener('click', addClass);\r
document.getElementById('removeClassBtn')?.addEventListener('click', removeClass);\r
document.getElementById('toggleClassBtn')?.addEventListener('click', toggleClass);\r
document.getElementById('readDataBtn')?.addEventListener('click', readData);\r
`,b=`// Event Handling Demo\r
// HTML: <button id="clickBtn">Click me</button>\r
// <div id="hoverDiv" style="width:200px; height:100px; background:gray;">Hover over me</div>\r
// <input id="keyInput" placeholder="Type something">\r
\r
const clickBtn = document.getElementById('clickBtn');\r
const hoverDiv = document.getElementById('hoverDiv');\r
const keyInput = document.getElementById('keyInput');\r
\r
clickBtn.addEventListener('click', () => {\r
    console.log('Button clicked!');\r
    alert('Button clicked!');\r
});\r
\r
hoverDiv.addEventListener('mouseenter', () => {\r
    console.log('Mouse entered the div');\r
    hoverDiv.style.backgroundColor = 'lightblue';\r
});\r
hoverDiv.addEventListener('mouseleave', () => {\r
    console.log('Mouse left the div');\r
    hoverDiv.style.backgroundColor = 'gray';\r
});\r
\r
keyInput.addEventListener('keypress', (e) => {\r
    console.log(\`Key pressed: \${e.key}\`);\r
    // Optional: display on page\r
});\r
`,y=`// Form Input Tracker\r
// HTML: <input id="trackInput" type="text" placeholder="Type something">\r
// <p id="displayText">Your text will appear here</p>\r
\r
const trackInput = document.getElementById('trackInput');\r
const displayText = document.getElementById('displayText');\r
\r
trackInput.addEventListener('input', () => {\r
    displayText.textContent = trackInput.value || 'Your text will appear here';\r
});\r
`,x=`// Simple Image Slider\r
// HTML: <div class="slider">\r
//   <img id="sliderImage" src="image1.jpg" alt="Image">\r
//   <p id="caption">Caption 1</p>\r
//   <button id="prevBtn">Prev</button>\r
//   <button id="nextBtn">Next</button>\r
// </div>\r
\r
const images = [\r
    { src: 'image1.jpg', caption: 'Beautiful Sunset' },\r
    { src: 'image2.jpg', caption: 'Mountain View' },\r
    { src: 'image3.jpg', caption: 'Ocean Waves' }\r
];\r
\r
let currentIndex = 0;\r
const imgElement = document.getElementById('sliderImage');\r
const captionElement = document.getElementById('caption');\r
const prevBtn = document.getElementById('prevBtn');\r
const nextBtn = document.getElementById('nextBtn');\r
\r
function updateSlider() {\r
    imgElement.src = images[currentIndex].src;\r
    captionElement.textContent = images[currentIndex].caption;\r
}\r
\r
prevBtn.addEventListener('click', () => {\r
    currentIndex = (currentIndex - 1 + images.length) % images.length;\r
    updateSlider();\r
});\r
\r
nextBtn.addEventListener('click', () => {\r
    currentIndex = (currentIndex + 1) % images.length;\r
    updateSlider();\r
});\r
\r
updateSlider(); // initial\r
`,w=`// Modal Dialog\r
// HTML: <button id="openModalBtn">Open Modal</button>\r
// <div id="modal" class="modal">\r
//   <div class="modal-content">\r
//     <span class="close">&times;</span>\r
//     <p>Modal content goes here!</p>\r
//   </div>\r
// </div>\r
\r
const modal = document.getElementById('modal');\r
const openBtn = document.getElementById('openModalBtn');\r
const closeSpan = document.querySelector('.close');\r
\r
openBtn.addEventListener('click', () => {\r
    modal.style.display = 'block';\r
});\r
\r
closeSpan.addEventListener('click', () => {\r
    modal.style.display = 'none';\r
});\r
\r
window.addEventListener('click', (event) => {\r
    if (event.target === modal) {\r
        modal.style.display = 'none';\r
    }\r
});\r
`,I=`// Accordion Component\r
// HTML: <div class="accordion">\r
//   <div class="accordion-item">\r
//     <div class="accordion-header">Section 1</div>\r
//     <div class="accordion-content">Content 1...</div>\r
//   </div>\r
//   ... more items\r
// </div>\r
\r
const headers = document.querySelectorAll('.accordion-header');\r
headers.forEach(header => {\r
    header.addEventListener('click', () => {\r
        const content = header.nextElementSibling;\r
        const isActive = content.classList.contains('active');\r
        \r
        // Optional: close all other items\r
        document.querySelectorAll('.accordion-content').forEach(c => {\r
            if (c !== content) c.classList.remove('active');\r
        });\r
        \r
        // Toggle current\r
        content.classList.toggle('active');\r
    });\r
});\r
`,E=`// Responsive Hamburger Menu\r
// HTML: <nav class="navbar">\r
//   <div class="hamburger">&#9776;</div>\r
//   <ul class="nav-links">\r
//     <li><a href="#">Home</a></li>\r
//     <li><a href="#">About</a></li>\r
//     <li><a href="#">Contact</a></li>\r
//   </ul>\r
// </nav>\r
// CSS: .nav-links { display: flex; } @media (max-width:768px){ .nav-links { display: none; } .nav-links.active { display: flex; } }\r
\r
const hamburger = document.querySelector('.hamburger');\r
const navLinks = document.querySelector('.nav-links');\r
\r
hamburger.addEventListener('click', () => {\r
    navLinks.classList.toggle('active');\r
});\r
`,S=`// Sortable List (Drag and Drop)\r
// HTML: <ul id="sortableList">\r
//   <li draggable="true">Item 1</li>\r
//   <li draggable="true">Item 2</li>\r
//   <li draggable="true">Item 3</li>\r
// </ul>\r
\r
const list = document.getElementById('sortableList');\r
let dragSrcElement = null;\r
\r
function handleDragStart(e) {\r
    dragSrcElement = this;\r
    e.dataTransfer.effectAllowed = 'move';\r
    e.dataTransfer.setData('text/html', this.innerHTML);\r
}\r
\r
function handleDragOver(e) {\r
    e.preventDefault();\r
    e.dataTransfer.dropEffect = 'move';\r
}\r
\r
function handleDrop(e) {\r
    e.preventDefault();\r
    if (dragSrcElement !== this) {\r
        dragSrcElement.innerHTML = this.innerHTML;\r
        this.innerHTML = e.dataTransfer.getData('text/html');\r
    }\r
    return false;\r
}\r
\r
const items = list.querySelectorAll('li');\r
items.forEach(item => {\r
    item.addEventListener('dragstart', handleDragStart);\r
    item.addEventListener('dragover', handleDragOver);\r
    item.addEventListener('drop', handleDrop);\r
});\r
`,T=`// Local Storage Notes App\r
// HTML: <div class="notes-app">\r
//   <input id="noteInput" type="text" placeholder="Add a note">\r
//   <button id="addNoteBtn">Add</button>\r
//   <ul id="notesList"></ul>\r
// </div>\r
\r
const noteInput = document.getElementById('noteInput');\r
const addBtn = document.getElementById('addNoteBtn');\r
const notesList = document.getElementById('notesList');\r
\r
let notes = [];\r
\r
function loadNotes() {\r
    const stored = localStorage.getItem('notes');\r
    if (stored) {\r
        notes = JSON.parse(stored);\r
        renderNotes();\r
    }\r
}\r
\r
function saveNotes() {\r
    localStorage.setItem('notes', JSON.stringify(notes));\r
}\r
\r
function renderNotes() {\r
    notesList.innerHTML = '';\r
    notes.forEach((note, index) => {\r
        const li = document.createElement('li');\r
        li.textContent = note;\r
        const deleteBtn = document.createElement('button');\r
        deleteBtn.textContent = 'Delete';\r
        deleteBtn.addEventListener('click', () => {\r
            notes.splice(index, 1);\r
            saveNotes();\r
            renderNotes();\r
        });\r
        li.appendChild(deleteBtn);\r
        notesList.appendChild(li);\r
    });\r
}\r
\r
addBtn.addEventListener('click', () => {\r
    const text = noteInput.value.trim();\r
    if (text) {\r
        notes.push(text);\r
        saveNotes();\r
        renderNotes();\r
        noteInput.value = '';\r
    }\r
});\r
\r
loadNotes();\r
`,k=`// Infinite Scroll\r
// HTML: <div id="contentContainer"></div>\r
\r
const container = document.getElementById('contentContainer');\r
let page = 1;\r
let loading = false;\r
\r
function loadMore() {\r
    if (loading) return;\r
    loading = true;\r
    // Simulate async fetch\r
    setTimeout(() => {\r
        for (let i = 0; i < 10; i++) {\r
            const item = document.createElement('div');\r
            item.textContent = \`Item \${page * 10 + i}\`;\r
            container.appendChild(item);\r
        }\r
        page++;\r
        loading = false;\r
    }, 500);\r
}\r
\r
window.addEventListener('scroll', () => {\r
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {\r
        loadMore();\r
    }\r
});\r
\r
loadMore(); // initial\r
`,C=`// Dynamic Table Generator\r
// HTML: <div id="tableContainer"></div>\r
\r
const data = [\r
    { name: 'Alice', age: 25, grade: 'A' },\r
    { name: 'Bob', age: 22, grade: 'B' },\r
    { name: 'Charlie', age: 28, grade: 'C' }\r
];\r
\r
function generateTable(data) {\r
    const table = document.createElement('table');\r
    table.border = '1';\r
    // header\r
    const thead = document.createElement('thead');\r
    const headerRow = document.createElement('tr');\r
    Object.keys(data[0]).forEach(key => {\r
        const th = document.createElement('th');\r
        th.textContent = key;\r
        headerRow.appendChild(th);\r
    });\r
    thead.appendChild(headerRow);\r
    table.appendChild(thead);\r
    // body\r
    const tbody = document.createElement('tbody');\r
    data.forEach(row => {\r
        const tr = document.createElement('tr');\r
        Object.values(row).forEach(val => {\r
            const td = document.createElement('td');\r
            td.textContent = val;\r
            tr.appendChild(td);\r
        });\r
        tbody.appendChild(tr);\r
    });\r
    table.appendChild(tbody);\r
    return table;\r
}\r
\r
const container = document.getElementById('tableContainer');\r
container.appendChild(generateTable(data));\r
`,B=`// Form Validation\r
// HTML: <form id="regForm">\r
//   <input id="name" placeholder="Name" required>\r
//   <input id="email" placeholder="Email" type="email">\r
//   <input id="password" placeholder="Password" type="password">\r
//   <input id="confirm" placeholder="Confirm Password" type="password">\r
//   <button type="submit">Register</button>\r
// </form>\r
// <div id="errorMessages"></div>\r
\r
const form = document.getElementById('regForm');\r
const nameInput = document.getElementById('name');\r
const emailInput = document.getElementById('email');\r
const passwordInput = document.getElementById('password');\r
const confirmInput = document.getElementById('confirm');\r
const errorDiv = document.getElementById('errorMessages');\r
\r
form.addEventListener('submit', (e) => {\r
    e.preventDefault();\r
    const errors = [];\r
    \r
    if (nameInput.value.trim() === '') errors.push('Name is required');\r
    \r
    const email = emailInput.value.trim();\r
    if (email === '') errors.push('Email is required');\r
    else if (!/^\\S+@\\S+\\.\\S+$/.test(email)) errors.push('Invalid email format');\r
    \r
    const pwd = passwordInput.value;\r
    if (pwd.length < 6) errors.push('Password must be at least 6 characters');\r
    if (pwd !== confirmInput.value) errors.push('Passwords do not match');\r
    \r
    if (errors.length > 0) {\r
        errorDiv.innerHTML = errors.map(e => \`<p style="color:red">\${e}</p>\`).join('');\r
    } else {\r
        errorDiv.innerHTML = '<p style="color:green">Form submitted successfully!</p>';\r
        // form.submit(); // uncomment to actually submit\r
    }\r
});\r
`,L=`// Tabbed Interface\r
// HTML: <div class="tabs">\r
//   <button class="tab-btn active" data-tab="tab1">Tab 1</button>\r
//   <button class="tab-btn" data-tab="tab2">Tab 2</button>\r
//   <button class="tab-btn" data-tab="tab3">Tab 3</button>\r
// </div>\r
// <div class="tab-content active" id="tab1">Content 1</div>\r
// <div class="tab-content" id="tab2">Content 2</div>\r
// <div class="tab-content" id="tab3">Content 3</div>\r
\r
const tabBtns = document.querySelectorAll('.tab-btn');\r
const tabContents = document.querySelectorAll('.tab-content');\r
\r
tabBtns.forEach(btn => {\r
    btn.addEventListener('click', () => {\r
        const tabId = btn.getAttribute('data-tab');\r
        // remove active from all buttons and contents\r
        tabBtns.forEach(b => b.classList.remove('active'));\r
        tabContents.forEach(c => c.classList.remove('active'));\r
        // add active to current\r
        btn.classList.add('active');\r
        document.getElementById(tabId).classList.add('active');\r
    });\r
});\r
`,_=`// Search Filter\r
// HTML: <input id="searchInput" type="text" placeholder="Search...">\r
// <ul id="itemList">\r
//   <li>Apple</li><li>Banana</li><li>Orange</li><li>Grapes</li>\r
// </ul>\r
\r
const searchInput = document.getElementById('searchInput');\r
const items = document.querySelectorAll('#itemList li');\r
\r
searchInput.addEventListener('input', () => {\r
    const term = searchInput.value.toLowerCase();\r
    items.forEach(item => {\r
        if (item.textContent.toLowerCase().includes(term)) {\r
            item.style.display = '';\r
        } else {\r
            item.style.display = 'none';\r
        }\r
    });\r
});\r
`,D=`// Countdown Timer\r
// HTML: <input id="minutes" type="number" placeholder="Minutes">\r
// <input id="seconds" type="number" placeholder="Seconds">\r
// <button id="startBtn">Start</button>\r
// <button id="pauseBtn">Pause</button>\r
// <button id="resetBtn">Reset</button>\r
// <div id="timerDisplay">00:00</div>\r
\r
let timerInterval = null;\r
let remainingSeconds = 0;\r
const minutesInput = document.getElementById('minutes');\r
const secondsInput = document.getElementById('seconds');\r
const startBtn = document.getElementById('startBtn');\r
const pauseBtn = document.getElementById('pauseBtn');\r
const resetBtn = document.getElementById('resetBtn');\r
const timerDisplay = document.getElementById('timerDisplay');\r
\r
function updateDisplay() {\r
    const mins = Math.floor(remainingSeconds / 60);\r
    const secs = remainingSeconds % 60;\r
    timerDisplay.textContent = \`\${String(mins).padStart(2, '0')}:\${String(secs).padStart(2, '0')}\`;\r
    if (remainingSeconds <= 0) {\r
        clearInterval(timerInterval);\r
        timerInterval = null;\r
        alert('Time is up!');\r
    }\r
}\r
\r
function startTimer() {\r
    if (timerInterval) return;\r
    if (remainingSeconds <= 0) {\r
        const mins = parseInt(minutesInput.value) || 0;\r
        const secs = parseInt(secondsInput.value) || 0;\r
        remainingSeconds = mins * 60 + secs;\r
        if (remainingSeconds <= 0) return;\r
        updateDisplay();\r
    }\r
    timerInterval = setInterval(() => {\r
        if (remainingSeconds > 0) {\r
            remainingSeconds--;\r
            updateDisplay();\r
        } else {\r
            clearInterval(timerInterval);\r
            timerInterval = null;\r
        }\r
    }, 1000);\r
}\r
\r
function pauseTimer() {\r
    if (timerInterval) {\r
        clearInterval(timerInterval);\r
        timerInterval = null;\r
    }\r
}\r
\r
function resetTimer() {\r
    clearInterval(timerInterval);\r
    timerInterval = null;\r
    remainingSeconds = 0;\r
    updateDisplay();\r
    minutesInput.value = '';\r
    secondsInput.value = '';\r
}\r
\r
startBtn.addEventListener('click', startTimer);\r
pauseBtn.addEventListener('click', pauseTimer);\r
resetBtn.addEventListener('click', resetTimer);\r
`,M=`// Custom Tooltip\r
// HTML: <div data-tooltip="This is a tooltip">Hover over me</div>\r
// <button data-tooltip="Click here for help">Help</button>\r
\r
let tooltip = null;\r
\r
function showTooltip(event) {\r
    const target = event.target;\r
    const text = target.getAttribute('data-tooltip');\r
    if (!text) return;\r
    \r
    if (tooltip) tooltip.remove();\r
    tooltip = document.createElement('div');\r
    tooltip.textContent = text;\r
    tooltip.style.position = 'absolute';\r
    tooltip.style.backgroundColor = 'black';\r
    tooltip.style.color = 'white';\r
    tooltip.style.padding = '5px';\r
    tooltip.style.borderRadius = '4px';\r
    tooltip.style.fontSize = '12px';\r
    tooltip.style.zIndex = '1000';\r
    document.body.appendChild(tooltip);\r
    \r
    const rect = target.getBoundingClientRect();\r
    tooltip.style.left = rect.left + window.scrollX + 'px';\r
    tooltip.style.top = rect.top + window.scrollY - tooltip.offsetHeight - 5 + 'px';\r
}\r
\r
function hideTooltip() {\r
    if (tooltip) {\r
        tooltip.remove();\r
        tooltip = null;\r
    }\r
}\r
\r
const tooltipElements = document.querySelectorAll('[data-tooltip]');\r
tooltipElements.forEach(el => {\r
    el.addEventListener('mouseenter', showTooltip);\r
    el.addEventListener('mouseleave', hideTooltip);\r
});\r
`,j="JavaScript DOM Manipulation – 20 Practical Projects",O="Web Development (JavaScript)",A="General",J=["Browser Console","VS Code","Any modern browser"],H={author:"Sukanta Hui",name:"Coder & AccoTax",location:"Barrackpore & Naihati"},N=JSON.parse('[{"projectId":"JS001","title":"DOM Tree Explorer","difficulty":"Beginner","description":"Write a function that logs the entire DOM tree structure starting from the document root, showing each element\'s tag name and text content.","exampleText":"Open any webpage and run the script in the console.","exampleOutput":"A nested tree of nodes printed to the console.","answerFile":"./answers/JS001.js","learningOutcome":"Understand the DOM hierarchy, recursion, node traversal.","logicExplanation":"The DOM (Document Object Model) represents the structure of an HTML document as a tree of nodes. Each element, attribute, and text becomes a node. Understanding this tree is key to dynamic web pages.","codeExplanation":"This script logs the DOM tree structure. It recursively walks through the document, printing the tag name or text content of each node, showing the hierarchy."},{"projectId":"JS002","title":"Select Elements Practice","difficulty":"Beginner","description":"Create an HTML page with various elements (id, class, attributes). Write JavaScript to select and log these elements using getElementById, querySelector, and querySelectorAll.","exampleText":"HTML: <div id=\'main\'>Hello</div> <p class=\'info\'>Text</p>","exampleOutput":"Console shows selected elements.","answerFile":"./answers/JS002.js","learningOutcome":"Using different selection methods, understanding NodeList vs HTMLCollection.","logicExplanation":"To manipulate the DOM, you first need to select elements. `getElementById` selects by id, `querySelector` uses CSS selectors and returns the first match, while `querySelectorAll` returns a list.","codeExplanation":"The code demonstrates how to select elements using various methods, then logs the selected elements to the console. It also shows how to get a collection and loop through it."},{"projectId":"JS003","title":"Dynamic Content Changer","difficulty":"Beginner","description":"Write a script that changes the text, HTML, and styles of selected elements when a button is clicked.","exampleText":"Button click triggers changes.","exampleOutput":"The content and style of elements update dynamically.","answerFile":"./answers/JS003.js","learningOutcome":"Manipulating innerHTML, textContent, and CSS properties via JavaScript.","logicExplanation":"Once an element is selected, you can change its content and style. Use `textContent` or `innerHTML` for text, and `style` property for CSS. This allows real-time updates without reloading the page.","codeExplanation":"This script picks elements and modifies their text, HTML, and CSS. It includes examples of changing colors, adding new content, and toggling visibility."},{"projectId":"JS004","title":"Interactive To-Do List","difficulty":"Intermediate","description":"Build a to-do list where users can add new tasks, mark them as completed, and delete them. Use DOM creation and removal methods.","exampleText":"Input field + Add button; each task has complete and delete buttons.","exampleOutput":"Tasks appear and can be managed interactively.","answerFile":"./answers/JS004.js","learningOutcome":"Creating elements dynamically, event delegation, removing elements.","logicExplanation":"Dynamic creation and removal of elements is essential for interactive UIs. You can use `createElement`, `appendChild`, `removeChild`, and newer methods like `append` and `remove`.","codeExplanation":"A simple to-do list is implemented. The user can add tasks (creating elements), mark them complete, and delete them (removing elements). This demonstrates event handling and dynamic DOM updates."},{"projectId":"JS005","title":"Attribute & Class Manipulator","difficulty":"Intermediate","description":"Create a set of buttons that demonstrate how to get/set attributes, toggle classes, and read/write data attributes on an element.","exampleText":"A div with attributes and classes; buttons to modify them.","exampleOutput":"The div\'s appearance and attributes change on button clicks.","answerFile":"./answers/JS005.js","learningOutcome":"Using getAttribute, setAttribute, classList, dataset.","logicExplanation":"Attributes, classes, and data attributes let you store extra information and apply styling. Use `getAttribute`, `setAttribute`, `classList` methods, and `dataset` to manipulate them.","codeExplanation":"The script shows how to get and set attributes, add/remove/toggle CSS classes, and read/write custom data attributes. Buttons and inputs demonstrate each operation."},{"projectId":"JS006","title":"Event Handling Demo","difficulty":"Beginner","description":"Create a page with several elements (button, div, input) and attach event handlers for click, mouseover, and keypress events. Show messages in a console or on screen.","exampleText":"Click the button, hover over a div, type in input.","exampleOutput":"Console logs or on-screen messages appear indicating which event fired.","answerFile":"./answers/JS006.js","learningOutcome":"Adding event listeners, event object, handling different event types.","logicExplanation":"Events allow JavaScript to react to user actions. Common events include click, mouseover, keydown, etc. Event listeners can be attached to elements to trigger functions.","codeExplanation":"This code demonstrates attaching event listeners to various elements. It shows click, mouseenter/mouseleave, and keypress events, logging messages and updating the UI accordingly."},{"projectId":"JS007","title":"Form Input Tracker","difficulty":"Beginner","description":"Create a form with an input field and a paragraph. As the user types, display the current input value in the paragraph (live preview).","exampleText":"Type something in the input field.","exampleOutput":"The paragraph updates in real time with the same text.","answerFile":"./answers/JS007.js","learningOutcome":"Using the input event, updating DOM on every keystroke.","logicExplanation":"Real‑time form tracking uses input events to capture user keystrokes and display them elsewhere. This is useful for previews or live validation.","codeExplanation":"The script listens to the `input` event on a text field and displays the current value in another element, updating on every keystroke."},{"projectId":"JS008","title":"Simple Image Slider","difficulty":"Intermediate","description":"Build an image slider with previous/next buttons. Display an image, its caption, and allow navigation through a set of images.","exampleText":"Click \'Next\' or \'Previous\' to cycle through images.","exampleOutput":"The main image and caption change accordingly.","answerFile":"./answers/JS008.js","learningOutcome":"Array indexing, updating image src and text, event handling.","logicExplanation":"An image slider cycles through a set of images using next/previous buttons. It can also support automatic sliding. This uses array indexing and updating the `src` attribute of an image element.","codeExplanation":"The code maintains an array of image URLs. On button clicks, it increments/decrements an index and updates the main image\'s `src`. It also updates the caption."},{"projectId":"JS009","title":"Modal Dialog","difficulty":"Intermediate","description":"Create a modal dialog that appears when a button is clicked, and can be closed via a close button or clicking outside the modal.","exampleText":"Click \'Open Modal\', then close it.","exampleOutput":"A centered modal appears/disappears.","answerFile":"./answers/JS009.js","learningOutcome":"CSS display toggling, event propagation, overlay handling.","logicExplanation":"A modal is a dialog box that appears on top of the page, disabling background interaction. It is typically hidden until triggered, and can be closed by a button or clicking outside.","codeExplanation":"The script shows/hides a modal overlay by toggling CSS classes. It includes an open button, a close button, and an optional click outside the modal content to close."},{"projectId":"JS010","title":"Accordion Component","difficulty":"Intermediate","description":"Build an accordion with at least three sections. Each section has a header; clicking a header expands its content and collapses others.","exampleText":"Click on section headers.","exampleOutput":"Only one content panel is visible at a time.","answerFile":"./answers/JS010.js","learningOutcome":"Element selection, sibling traversal, toggling classes.","logicExplanation":"An accordion consists of collapsible sections. Clicking a header expands or collapses its associated content. This improves space usage and user experience.","codeExplanation":"The code selects all accordion headers. On header click, it toggles the visibility of the corresponding content and optionally closes other open sections for a typical accordion behaviour."},{"projectId":"JS011","title":"Responsive Hamburger Menu","difficulty":"Intermediate","description":"Create a responsive navigation bar that collapses into a hamburger icon on small screens. Clicking the icon toggles the menu visibility.","exampleText":"Resize browser window and click the hamburger icon.","exampleOutput":"Menu expands/collapses when icon is clicked.","answerFile":"./answers/JS011.js","learningOutcome":"CSS media queries, class toggling, responsive design.","logicExplanation":"A hamburger menu is a common pattern for mobile navigation. Clicking the icon toggles the visibility of a navigation menu, often using CSS transforms or max-height transitions.","codeExplanation":"The script adds a click listener to the hamburger icon. It toggles a class on the navigation menu that controls its display or height, making it responsive."},{"projectId":"JS012","title":"Sortable List","difficulty":"Expert","description":"Implement a drag-and-drop reorderable list. Allow users to rearrange list items by dragging and dropping them.","exampleText":"Drag items in the list.","exampleOutput":"Items can be moved to different positions.","answerFile":"./answers/JS012.js","learningOutcome":"HTML5 Drag and Drop API, event handling, DOM manipulation.","logicExplanation":"Sortable lists allow users to reorder items by dragging and dropping. This can be implemented using the HTML5 Drag and Drop API or with mouse events.","codeExplanation":"This code uses the HTML5 Drag and Drop API. Each list item has `draggable=true`. Events like `dragstart`, `dragover`, and `drop` are handled to rearrange items in the list."},{"projectId":"JS013","title":"Local Storage Notes App","difficulty":"Intermediate","description":"Build a simple notes app where users can add, edit, and delete notes. All notes should be saved to localStorage so they persist after page reload.","exampleText":"Add a note, refresh the page.","exampleOutput":"The note still appears after refresh.","answerFile":"./answers/JS013.js","learningOutcome":"localStorage, JSON parsing/stringifying, CRUD operations.","logicExplanation":"Local storage allows saving data in the browser persistently. A notes app can store notes as strings, retrieve them on page load, and update when notes are added or removed.","codeExplanation":"The script loads notes from localStorage on page load. Users can add, edit, and delete notes; each change saves the updated array back to localStorage. The notes are dynamically rendered as list items."},{"projectId":"JS014","title":"Infinite Scroll","difficulty":"Expert","description":"Create a page that loads more items (e.g., cards) as the user scrolls near the bottom. Use fake data or fetch from a simulated API.","exampleText":"Scroll to the bottom of the page.","exampleOutput":"New items are appended dynamically.","answerFile":"./answers/JS014.js","learningOutcome":"Scroll event, debouncing, dynamic content loading.","logicExplanation":"Infinite scroll loads more content as the user scrolls near the bottom. It detects scroll position and fetches additional items (here simulated with fake data).","codeExplanation":"The code listens to the window\'s scroll event. When scroll position is near the bottom, it calls a function to append new items to the container, simulating an API call."},{"projectId":"JS015","title":"Dynamic Table Generator","difficulty":"Intermediate","description":"Given an array of objects (e.g., students with name, age, grade), generate an HTML table dynamically and display it on the page.","exampleText":"Use the provided data (or input).","exampleOutput":"A table with headers and rows appears.","answerFile":"./answers/JS015.js","learningOutcome":"Creating tables dynamically, innerHTML vs createElement.","logicExplanation":"Dynamic table generation creates HTML tables from JavaScript data. It is useful for displaying structured data like CSV, JSON, or database results.","codeExplanation":"This script builds a table element from an array of objects. It creates the `<table>`, `<thead>`, and `<tbody>`, populates rows and cells, and appends it to the DOM."},{"projectId":"JS016","title":"Form Validation","difficulty":"Intermediate","description":"Create a registration form with fields: name, email, password, confirm password. Validate on submit and show error messages. Prevent submission if invalid.","exampleText":"Fill and submit the form.","exampleOutput":"Error messages appear for invalid fields; if valid, an alert or success message is shown.","answerFile":"./answers/JS016.js","learningOutcome":"Form validation, regex, event.preventDefault, error display.","logicExplanation":"Form validation checks user input before submission. It can validate required fields, email format, password strength, and provide immediate feedback.","codeExplanation":"The code adds event listeners to form fields and the submit button. It validates each field (e.g., email regex, password length) and displays error messages, preventing submission if invalid."},{"projectId":"JS017","title":"Tabbed Interface","difficulty":"Intermediate","description":"Create a tab component with at least three tabs. Clicking a tab shows its content and hides the others.","exampleText":"Click different tab buttons.","exampleOutput":"Only the content of the selected tab is visible.","answerFile":"./answers/JS017.js","learningOutcome":"CSS class switching, managing multiple content panels.","logicExplanation":"Tabs allow switching between different content panels without reloading the page. Each tab button hides its corresponding content and shows the selected one.","codeExplanation":"The script attaches click handlers to tab buttons. It removes an \'active\' class from all content panels and adds it to the one associated with the clicked tab."},{"projectId":"JS018","title":"Search Filter","difficulty":"Beginner","description":"Create a search box that filters a list of items as the user types. Only items containing the search term should remain visible.","exampleText":"Type a word in the search box.","exampleOutput":"The list updates in real time, showing only matching items.","answerFile":"./answers/JS018.js","learningOutcome":"Input event, filtering arrays, toggling display.","logicExplanation":"A search filter dynamically shows/hides list items based on user input. It can be used for search boxes, filtering product lists, etc.","codeExplanation":"The code listens to the input event on a search box. For each list item, it compares the item\'s text with the search term (case‑insensitive) and toggles the `display` style."},{"projectId":"JS019","title":"Countdown Timer","difficulty":"Intermediate","description":"Create a countdown timer where the user can set minutes/seconds, start, pause, and reset. Display the remaining time and play an alert when finished.","exampleText":"Set 1 minute, start the timer.","exampleOutput":"Timer counts down to zero, then alerts.","answerFile":"./answers/JS019.js","learningOutcome":"setInterval/clearInterval, state management, user input handling.","logicExplanation":"A countdown timer uses `setInterval` to decrement time and update the display. It should stop when reaching zero and optionally trigger a callback.","codeExplanation":"The script gets the target time (or seconds from input) and starts an interval that updates the display every second. When time runs out, it clears the interval and shows a message."},{"projectId":"JS020","title":"Custom Tooltip","difficulty":"Intermediate","description":"Create a custom tooltip that appears when hovering over elements with a data-tooltip attribute. The tooltip should follow the mouse or be positioned near the element.","exampleText":"Hover over any element with a data-tooltip attribute.","exampleOutput":"A tooltip appears with the attribute\'s text.","answerFile":"./answers/JS020.js","learningOutcome":"Mouse events, dynamic element creation and removal, positioning.","logicExplanation":"Tooltips provide additional information on hover. A custom tooltip can be created by showing/hiding a div near the cursor or target element using mouse events.","codeExplanation":"The code selects elements with a `data-tooltip` attribute. On mouseenter, it creates or shows a tooltip element with the attribute\'s text, positions it, and on mouseleave hides/destroys it."}]'),d={projectCategory:j,subject:O,board:A,class:"Beginner / Intermediate",tools:J,institute:H,projects:N};function ee(){const[n,c]=s.useState(null);return s.useEffect(()=>{const r=Object.assign({"./topic6_files/answers/JS001.js":u,"./topic6_files/answers/JS002.js":g,"./topic6_files/answers/JS003.js":h,"./topic6_files/answers/JS004.js":v,"./topic6_files/answers/JS005.js":f,"./topic6_files/answers/JS006.js":b,"./topic6_files/answers/JS007.js":y,"./topic6_files/answers/JS008.js":x,"./topic6_files/answers/JS009.js":w,"./topic6_files/answers/JS010.js":I,"./topic6_files/answers/JS011.js":E,"./topic6_files/answers/JS012.js":S,"./topic6_files/answers/JS013.js":T,"./topic6_files/answers/JS014.js":k,"./topic6_files/answers/JS015.js":C,"./topic6_files/answers/JS016.js":B,"./topic6_files/answers/JS017.js":L,"./topic6_files/answers/JS018.js":_,"./topic6_files/answers/JS019.js":D,"./topic6_files/answers/JS020.js":M}),a={};Object.keys(r).forEach(e=>{const i=e.split("/").pop();a[i]=r[e]});const p=d.projects.map(e=>{const t=(e.answerFile||"").split("/").pop(),o=a[t];return o||console.warn(`⚠ Missing code file: ${t}`),{...e,answer:o||`// File "${t}" not found in answers folder`}});c({...d,projects:p})},[]),n?l.jsx(m,{data:n}):l.jsx("div",{className:"p-6 text-slate-400",children:"Loading projects..."})}export{ee as default};
