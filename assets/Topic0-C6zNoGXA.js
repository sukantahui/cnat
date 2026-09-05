import{b as o,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as b}from"./TeacherSukantaHui-DerPxfxp.js";import{P as i}from"./PythonFileLoader-hCi5osN-.js";import{F as v}from"./FAQTemplate-BHhlgA96.js";import{P as k}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CH1iX9C8.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const w=[{question:"What is Event-Driven Programming?",shortAnswer:"A programming paradigm where program flow is determined by user actions (mouse clicks, keypresses) or timer events rather than a sequential script.",explanation:"Event-driven systems register listener callbacks and wait for event triggers.",hint:"What programming model responds to user actions asynchronously?",level:"basic",codeExample:`screen.onclick(handle_click)
screen.mainloop()`},{question:"What is a Callback Function in Python?",shortAnswer:"A function passed as an argument to another function, intended to be executed when a specific event occurs.",explanation:"Callbacks allow frameworks like Turtle and Tkinter to call your custom logic upon user interaction.",hint:"What is a function passed as an argument to be called later called?",level:"basic",codeExample:`def on_click(x, y): print(x, y)
screen.onclick(on_click)`},{question:"Why must callback function names be passed WITHOUT parentheses `()` in event bindings?",shortAnswer:"Passing `func()` executes the function immediately once and binds its return value (`None`); passing `func` binds the function reference.",explanation:"This is the #1 beginner bug in Python event programming.",hint:"What happens if you include parentheses when binding an event handler?",level:"basic",codeExample:`# CORRECT: screen.onclick(my_func)
# BUG: screen.onclick(my_func())`},{question:"What role does the Event Queue play in graphical applications?",shortAnswer:"A FIFO buffer that collects OS hardware input events (clicks, keystrokes) until the event loop dispatches them to registered callbacks.",explanation:"Prevents missed inputs when the CPU is briefly busy with rendering.",hint:"What data structure stores incoming hardware input events?",level:"moderate",codeExample:"# OS Event Queue: [Click(100,50), Key('a'), Move(102,52)]"},{question:"What does `screen.mainloop()` do?",shortAnswer:"Enters Tkinter's persistent event listening loop, keeping the window open and actively processing user interactions.",explanation:"`mainloop()` blocks linear script exit, waiting continuously for user inputs.",hint:"What function starts the main GUI event dispatcher loop?",level:"basic",codeExample:"screen.mainloop()"},{question:"How do you pass extra arguments to a callback function when binding an event in Python?",shortAnswer:"Use a `lambda` expression or `functools.partial`: `screen.onkeypress(lambda: draw(color), 'c')`.",explanation:"Anonymous functions wrap parameterized calls into zero-argument callable references.",hint:"What Python keyword creates inline wrapper functions for parameterized callbacks?",level:"moderate",codeExample:"screen.onkeypress(lambda: set_color('red'), 'r')"},{question:"What are First-Class Functions in Python?",shortAnswer:"Functions that can be assigned to variables, passed as arguments to other functions, and returned from functions like any other data type.",explanation:"First-class functions make event-driven callback architectures possible in Python.",hint:"What property allows Python functions to be treated like regular objects and variables?",level:"moderate",codeExample:`handler = my_func
screen.onclick(handler)`},{question:"What is the difference between Polling and Event-Driven architecture?",shortAnswer:"Polling constantly checks state in a tight loop (`is_key_down?`); event-driven waits idly until the OS notifies the handler.",explanation:"Event-driven design consumes 0% CPU when idle compared to busy-waiting polling loops.",hint:"Which architecture waits idly for notifications instead of continuous checking?",level:"moderate",codeExample:"# Polling: while True: check_input() | Event: onkeypress(handler)"},{question:"What happens if a long-running computation is placed inside a callback function?",shortAnswer:"It blocks the event loop, freezing the GUI window and making it say 'Not Responding'.",explanation:"Callbacks must complete quickly (in milliseconds) to keep the user interface fluid.",hint:"Why should callbacks never execute 10-second heavy loops?",level:"moderate",codeExample:"# Keep callbacks lightweight to prevent UI freezing"},{question:"How do you bind a mouse click handler that receives click coordinates `(x, y)`?",shortAnswer:"Define a 2-parameter function `def on_click(x, y):` and pass it to `screen.onclick(on_click)`.",explanation:"Turtle automatically passes the clicked canvas coordinates `x` and `y` into the callback.",hint:"How many arguments does screen.onclick pass to its callback?",level:"basic",codeExample:`def handle_click(x, y):
    t.goto(x, y)
screen.onclick(handle_click)`},{question:"What is an Anonymous Function (`lambda`) in Python?",shortAnswer:"A small, single-line function defined without a name using the `lambda` keyword.",explanation:"Lambdas are frequently used for concise event callback adapters.",hint:"What keyword defines single-expression anonymous functions?",level:"basic",codeExample:"lambda: draw_circle(50)"},{question:"Why is `screen.listen()` mandatory before keyboard callbacks will work?",shortAnswer:"It gives window focus to the Turtle canvas so operating system keystrokes are routed to the Python process.",explanation:"Without focus, keyboard events are ignored or sent to other background apps.",hint:"What method requests keyboard window focus in Turtle?",level:"basic",codeExample:"screen.listen()"},{question:"What is Inversion of Control (IoC) in event-driven frameworks?",shortAnswer:"The framework (Tkinter/Turtle) calls your code, rather than your code calling the framework sequentially.",explanation:"Also known as the 'Hollywood Principle' ('Don't call us, we'll call you').",hint:"What architectural principle states the framework calls user code upon events?",level:"advanced",codeExample:"# Inversion of Control: Framework dispatches callbacks"},{question:"How do you unbind or disable an event listener in Python Turtle?",shortAnswer:"Pass `None` as the callback function: `screen.onclick(None)` or `screen.onkeypress(None, 'space')`.",explanation:"Passing `None` detaches the event handler from the event dispatcher.",hint:"What value unbinds an active event listener in Turtle?",level:"moderate",codeExample:"screen.onkeypress(None, 'space')  # Unbinds spacebar"},{question:"What is a State Machine in event-driven applications?",shortAnswer:"A computational model with discrete states where events trigger transitions from one state to another (e.g. Red → Green → Yellow).",explanation:"State machines organize complex event interactions cleanly.",hint:"What model represents discrete states and event transitions?",level:"advanced",codeExample:"# State Machine: 'menu' → 'playing' → 'game_over'"},{question:"How does `functools.partial` compare to `lambda` for event binding?",shortAnswer:"`partial` binds argument values at definition time, avoiding late-binding closure bugs often encountered in `lambda` loops.",explanation:"`partial(func, arg)` is cleaner and more robust for parameter binding.",hint:"What standard library module creates partially applied function references?",level:"advanced",codeExample:`from functools import partial
screen.onkeypress(partial(draw, 'blue'), 'b')`},{question:"How do you handle keyboard shortcuts with modifier keys (e.g. Shift + Key)?",shortAnswer:"Bind both lowercase and uppercase characters: `screen.onkeypress(func, 'a')` and `screen.onkeypress(func, 'A')`.",explanation:"Tkinter distinguishes uppercase characters when Shift or Caps Lock is engaged.",hint:"How do you bind both uppercase and lowercase keys in Turtle?",level:"moderate",codeExample:"screen.onkeypress(undo, 'u'); screen.onkeypress(undo, 'U')"},{question:"What is the Publish-Subscribe (Pub/Sub) pattern in event architecture?",shortAnswer:"Publishers emit named events, and multiple subscriber functions execute in response without direct coupling.",explanation:"Decouples event emitters from event consumers across large codebases.",hint:"What design pattern decouples event producers from consumers?",level:"expert",codeExample:"# EventBus.publish('player_died') → [play_sound, update_ui, show_gameover]"},{question:"Why should mutable global variables be encapsulated in a state dictionary for callbacks?",shortAnswer:"Dictionaries can be modified inside callbacks without needing the `global` keyword: `state['score'] += 10`.",explanation:"Dictionary state encapsulation prevents messy global variable declarations.",hint:"How does dictionary state avoid using the global keyword inside callbacks?",level:"moderate",codeExample:`state = {'score': 0}
def on_hit(): state['score'] += 10`},{question:"What happens if two different functions are bound to the exact same key?",shortAnswer:"The second binding overwrites the first; only the most recently registered callback will fire.",explanation:"Event registration keys map to a single active callback in standard Turtle.",hint:"Does registering a key a second time add to or replace the previous handler?",level:"moderate",codeExample:"# The latest binding overrides earlier bindings"},{question:"How do you create an interactive paint program using event callbacks?",shortAnswer:"Bind `screen.ondrag(t.goto)` for drawing, `screen.onclick(t.penup)` for picking up pen, and keys for color swaps.",explanation:"Combining mouse drag and keypress events creates a fully functional digital drawing canvas.",hint:"What 3 events assemble a basic interactive paint app?",level:"basic",codeExample:"t.ondrag(t.goto)"},{question:"What is Debouncing in event handling?",shortAnswer:"Limiting the rate at which a callback can fire, ignoring rapid repeated triggers until a time threshold passes.",explanation:"Debouncing prevents double-click glitches and keypress spamming.",hint:"What technique ignores rapid repeated event triggers?",level:"advanced",codeExample:"# Debounce: if time.time() - last_click > 0.3: fire()"},{question:"Why is `turtle.done()` interchangeable with `screen.mainloop()`?",shortAnswer:"In Python Turtle's source code, `turtle.done()` is simply an alias that calls `Tkinter.mainloop()`.",explanation:"Both enter the underlying Tkinter main event dispatcher.",hint:"Is turtle.done() an alias for mainloop()?",level:"basic",codeExample:"turtle.done()  # Alias for screen.mainloop()"},{question:"How do you bind arrow keys (`Up`, `Down`, `Left`, `Right`) in Python Turtle?",shortAnswer:"Use capitalized key names: `'Up'`, `'Down'`, `'Left'`, `'Right'`.",explanation:"Tkinter key naming conventions require capitalized arrow key identifiers.",hint:"How are arrow key strings formatted in onkeypress?",level:"basic",codeExample:"screen.onkeypress(move_up, 'Up')"},{question:"What is Event Bubbling in GUI widget hierarchies?",shortAnswer:"When an event on a child element (e.g. button) propagates upward to parent containers (e.g. canvas/window) if unhandled.",explanation:"Widget event propagation allows centralized event handling.",hint:"What term describes events traveling upward through widget hierarchies?",level:"advanced",codeExample:"# Event bubbling from child widget to parent canvas"},{question:"How do you bind the Spacebar and Escape keys in Turtle?",shortAnswer:"Use `'space'` (lowercase) and `'Escape'` (capitalized E).",explanation:"Standard Tkinter keysym strings define special keyboard keys.",hint:"What are the exact key names for Space and Escape in Turtle?",level:"basic",codeExample:"screen.onkeypress(fire, 'space'); screen.onkeypress(quit, 'Escape')"},{question:"Why is event-driven programming the foundation of all modern web and mobile apps?",shortAnswer:"Because modern graphical UIs are inherently reactive—waiting for user taps, clicks, swipes, and network responses.",explanation:"React, Flutter, iOS, Android, and JavaScript all use the event-driven callback model.",hint:"Why is event-driven architecture universal across frontend software?",level:"basic",codeExample:"# Universal reactive UI architecture"},{question:"How do you trace and debug which event callbacks are firing in real time?",shortAnswer:"Add logging statements `print(f'[EVENT] {event_name} at {time.time()}')` inside callback entry points.",explanation:"Event logging reveals event sequence and dispatch timings during development.",hint:"How do you inspect callback execution order?",level:"basic",codeExample:"def on_key(): print('[EVENT] Key pressed')"},{question:"What is the 3-step Golden Rule for Event-Driven Programming in Python Turtle?",shortAnswer:"1. Define callback functions | 2. Register bindings with `onclick()` / `onkeypress()` and `screen.listen()` | 3. Start `screen.mainloop()`.",explanation:"This 3-step blueprint forms the backbone of all interactive graphical software.",hint:"What 3 steps build interactive event-driven Turtle programs?",level:"basic",codeExample:"# 1. Define callbacks → 2. Bind & listen() → 3. mainloop()"},{question:"How does mastering event callbacks accelerate a student's career into full-stack development?",shortAnswer:"Because concepts of asynchronous callbacks, event listeners, state machines, and debouncing directly map to React, Node.js, and cloud event architectures.",explanation:"Event-driven programming is one of the most transferable skills in computer science.",hint:"How do Turtle event concepts connect to React and Node.js?",level:"basic",codeExample:"# Direct mapping to React onClick and Node.js EventEmitter"}],_=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 0 - Event-driven programming model concepts\r
File: event_driven_paradigm_intro.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates the Event-Driven Programming Model:\r
- Traditional Sequential: Program dictates exact execution order from top to bottom.\r
- Event-Driven: Program registers callback listeners and yields control to Tkinter's\r
  event dispatcher (\`screen.mainloop()\`), waiting for user triggers (clicks, keys, timers).\r
"""\r
\r
import turtle\r
\r
def run_event_driven_demo():\r
    screen = turtle.Screen()\r
    screen.title("Event-Driven Programming Model - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
    t.speed(0)\r
    t.pensize(3)\r
\r
    # Initial instruction text\r
    t.penup(); t.goto(0, 180); t.pendown()\r
    t.color("#38bdf8")\r
    t.write("EVENT DISPATCHER ACTIVE\\nClick Anywhere or Press 'C' for Color Cycle", align="center", font=("Arial", 12, "bold"))\r
\r
    colors = ["#f43f5e", "#fbbf24", "#34d399", "#38bdf8", "#a855f7"]\r
    color_idx = [0]\r
\r
    # Callback 1: Mouse Click Event Handler\r
    def on_canvas_click(x, y):\r
        """Asynchronous callback executed when the user clicks the mouse."""\r
        t.penup(); t.goto(x, y); t.pendown()\r
        current_color = colors[color_idx[0]]\r
        t.color(current_color, current_color)\r
        t.begin_fill(); t.circle(20); t.end_fill()\r
\r
    # Callback 2: Keypress Event Handler\r
    def on_change_color():\r
        """Asynchronous callback executed when the user presses 'C'."""\r
        color_idx[0] = (color_idx[0] + 1) % len(colors)\r
        t.penup(); t.goto(0, -220); t.pendown()\r
        t.color(colors[color_idx[0]])\r
        t.write(f"Active Brush: {colors[color_idx[0]]}", align="center", font=("Arial", 11, "bold"))\r
\r
    # Register Event Listeners\r
    screen.onclick(on_canvas_click)\r
    screen.onkeypress(on_change_color, "c")\r
    screen.onkeypress(on_change_color, "C")\r
\r
    # Give focus to event queue\r
    screen.listen()\r
\r
    # Hand control over to the Tkinter Event Loop\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_event_driven_demo()\r
`,E=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 0 - Event-driven programming model concepts\r
File: callbacks_first_class_functions.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Deep dive into First-Class Functions and Callbacks:\r
- Function references passed as arguments WITHOUT execution parentheses:\r
  \`screen.onclick(handle_click)\` vs \`screen.onclick(handle_click())\` [BUG!]\r
- Using \`functools.partial\` and \`lambda\` for parameterized event dispatch.\r
"""\r
\r
import turtle\r
from functools import partial\r
\r
def draw_shape(t, shape_type, color):\r
    """Parameterized shape renderer."""\r
    t.clear()\r
    t.penup(); t.goto(0, -50); t.pendown()\r
    t.color("white", color)\r
    t.begin_fill()\r
    if shape_type == "circle":\r
        t.circle(60)\r
    elif shape_type == "square":\r
        for _ in range(4): t.forward(100); t.left(90)\r
    elif shape_type == "triangle":\r
        for _ in range(3): t.forward(120); t.left(120)\r
    t.end_fill()\r
\r
def main():\r
    screen = turtle.Screen()\r
    screen.title("Callbacks as First-Class Functions - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
\r
    t = turtle.Turtle(); t.hideturtle(); t.speed(0); t.pensize(3)\r
\r
    # HUD\r
    t.penup(); t.goto(0, 180); t.pendown()\r
    t.color("#38bdf8")\r
    t.write("PRESS: [1] Circle | [2] Square | [3] Triangle", align="center", font=("Arial", 12, "bold"))\r
\r
    # Passing parameterized callbacks using lambda & functools.partial\r
    screen.onkeypress(lambda: draw_shape(t, "circle", "#f43f5e"), "1")\r
    screen.onkeypress(partial(draw_shape, t, "square", "#38bdf8"), "2")\r
    screen.onkeypress(lambda: draw_shape(t, "triangle", "#34d399"), "3")\r
\r
    screen.listen()\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    main()\r
`,N=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 0 - Event-driven programming model concepts\r
File: interactive_traffic_light_controller.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Interactive Traffic Light State Machine:\r
Demonstrates how user event triggers transition internal state\r
and trigger clean redraws.\r
"""\r
\r
import turtle\r
\r
def run_traffic_light_demo():\r
    screen = turtle.Screen()\r
    screen.title("Event-Driven Traffic Light Controller - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=600)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
\r
    state = {"active_light": "red"}  # "red", "yellow", "green"\r
\r
    def render_traffic_light():\r
        t.clear()\r
\r
        # Traffic Housing\r
        t.penup(); t.goto(-50, -180); t.pendown()\r
        t.color("#475569", "#0f172a"); t.pensize(3); t.begin_fill()\r
        for _ in range(2): t.forward(100); t.left(90); t.forward(300); t.left(90)\r
        t.end_fill()\r
\r
        # Lights configuration: (name, y, on_color, off_color)\r
        lights = [\r
            ("red", 60, "#ef4444", "#450a0a"),\r
            ("yellow", -30, "#eab308", "#422006"),\r
            ("green", -120, "#22c55e", "#052e16")\r
        ]\r
\r
        for name, ly, on_col, off_col in lights:\r
            t.penup(); t.goto(0, ly); t.pendown()\r
            col = on_col if state["active_light"] == name else off_col\r
            t.color(col, col); t.begin_fill(); t.circle(30); t.end_fill()\r
\r
        # Instructions\r
        t.penup(); t.goto(0, 180); t.pendown()\r
        t.color("#38bdf8")\r
        t.write("PRESS SPACEBAR TO ADVANCE LIGHT CYCLE", align="center", font=("Arial", 11, "bold"))\r
\r
        screen.update()\r
\r
    def advance_light():\r
        order = {"red": "green", "green": "yellow", "yellow": "red"}\r
        state["active_light"] = order[state["active_light"]]\r
        render_traffic_light()\r
\r
    # Initial Render\r
    render_traffic_light()\r
\r
    # Bind Event\r
    screen.onkeypress(advance_light, "space")\r
    screen.listen()\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_traffic_light_demo()\r
`,j=`================================================================================\r
  TOPIC 0: EVENT-DRIVEN PROGRAMMING MODEL CONCEPTS\r
  MODULE: 005_006 - Event Handling & User Interaction\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. SEQUENTIAL VS EVENT-DRIVEN PARADIGM\r
--------------------------------------------------------------------------------\r
- Sequential Programming:\r
  Code runs top-to-bottom in a strict, predetermined linear sequence.\r
\r
- Event-Driven Programming:\r
  Program registers callback handlers for specific events (clicks, keypresses, timers)\r
  and hands execution over to an Event Dispatcher Loop (\`screen.mainloop()\`).\r
  The user's actions dictate when and in what order code executes!\r
\r
2. THE EVENT-DRIVEN TRIAD\r
--------------------------------------------------------------------------------\r
1. Event: An external action (e.g. Mouse click at \`(x, y)\`, Keypress \`'space'\`).\r
2. Listener / Binding: Connects an event type to a Python function reference:\r
   \`screen.onclick(handle_click)\`\r
3. Callback Function: The Python function executed asynchronously when the event fires.\r
\r
3. FIRST-CLASS FUNCTIONS & CALLBACK RULES\r
--------------------------------------------------------------------------------\r
- Pass the function name WITHOUT parentheses:\r
  \`screen.onclick(my_function)\`  → CORRECT (Passes reference)\r
  \`screen.onclick(my_function())\` → BUG (Calls immediately and passes None)\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,T=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulseSignal {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); filter: drop-shadow(0 0 12px currentColor); }
}
`,U=()=>{const[r,p]=o.useState("red"),[h,l]=o.useState([{id:1,type:"INITIALIZE",msg:"screen.listen() engaged - Event queue active"}]),[m,u]=o.useState([{x:120,y:70,color:"#f43f5e",shape:"circle"},{x:220,y:90,color:"#38bdf8",shape:"square"}]),x=()=>{const t={red:"green",green:"yellow",yellow:"red"}[r];p(t),l(a=>[{id:Date.now(),type:"KEYPRESS ('space')",msg:`State Transition: ${r.toUpperCase()} → ${t.toUpperCase()}`},...a.slice(0,4)])},g=n=>{const t=n.currentTarget.getBoundingClientRect(),a=n.clientX-t.left,c=n.clientY-t.top,d=["#f43f5e","#fbbf24","#34d399","#38bdf8","#a855f7"],y=d[Math.floor(Math.random()*d.length)];u(s=>[...s.slice(-6),{x:a,y:c,color:y,shape:"circle"}]),l(s=>[{id:Date.now(),type:"ONCLICK",msg:`Dispatched on_click(${a.toFixed(0)}, ${c.toFixed(0)}) → Stamp Created`},...s.slice(0,4)])},f=[{name:"screen.onclick(fun)",returnType:"Mouse Event Listener",purpose:"Binds a 2-parameter callback `fun(x, y)` to canvas mouse clicks.",usage:"screen.onclick(on_canvas_click)"},{name:"screen.onkeypress(fun, key)",returnType:"Keyboard Event Listener",purpose:"Binds a parameterless callback `fun` to a specific keyboard key string.",usage:"screen.onkeypress(advance_light, 'space')"},{name:"screen.listen()",returnType:"Focus Dispatcher",purpose:"Gives window focus to Tkinter canvas so keyboard events are actively captured.",usage:"screen.listen()"},{name:"screen.mainloop()",returnType:"Event Loop Dispatcher",purpose:"Enters the persistent event listening loop, keeping the window alive and responsive.",usage:"screen.mainloop()"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:T}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_006 · Event Handling & Interaction · Topic 0"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent",children:"Event-Driven Programming Model Concepts"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Transition from linear scripts to reactive software. Master the ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"Event Queue"}),", ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"First-Class Callback Functions"}),", ",e.jsx("span",{className:"text-amber-300 font-semibold",children:"Inversion of Control (IoC)"}),", and ",e.jsx("span",{className:"text-purple-400 font-semibold",children:"Asynchronous State Machines"}),"."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"⚡ Asynchronous Event Listeners"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎯 First-Class Callback References"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🚦 Event-Driven State Machines"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," Interactive Event Dispatcher & State Machine"]}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Click anywhere on the canvas to trigger asynchronous ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"onclick(x, y)"})," callbacks, or trigger the Traffic Light event state transition."]})]}),e.jsxs("button",{onClick:x,className:"px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 transition cursor-pointer flex items-center gap-2",children:[e.jsx("span",{children:"🚦"})," Trigger Spacebar Event (Advance Light)"]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:"Interactive Canvas (Click to trigger onclick callback)"}),e.jsxs("svg",{viewBox:"0 0 320 190",xmlns:"http://www.w3.org/2000/svg",onClick:g,className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg cursor-crosshair border border-slate-800",children:[e.jsx("rect",{x:"25",y:"25",width:"55",height:"140",rx:"8",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),e.jsx("circle",{cx:"52",cy:"50",r:"16",fill:r==="red"?"#ef4444":"#450a0a",className:r==="red"?"animate-[pulseSignal_2s_infinite] text-red-500":""}),e.jsx("circle",{cx:"52",cy:"95",r:"16",fill:r==="yellow"?"#eab308":"#422006",className:r==="yellow"?"animate-[pulseSignal_2s_infinite] text-yellow-500":""}),e.jsx("circle",{cx:"52",cy:"140",r:"16",fill:r==="green"?"#22c55e":"#052e16",className:r==="green"?"animate-[pulseSignal_2s_infinite] text-green-500":""}),m.map((n,t)=>e.jsx("circle",{cx:n.x,cy:n.y,r:"12",fill:n.color,stroke:"#ffffff",strokeWidth:"1.5",className:"transition-all duration-300"},t)),e.jsx("text",{x:"195",y:"170",fill:"#64748b",fontSize:"8.5",textAnchor:"middle",fontFamily:"monospace",children:"CLICK CANVAS TO STAMP"})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"OS Event Queue Telemetry"}),e.jsx("span",{className:"font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300",children:"Event Loop: RUNNING"})]}),e.jsx("div",{className:"space-y-2 max-h-36 overflow-y-auto pr-1",children:h.map(n=>e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex items-start justify-between gap-2",children:[e.jsx("span",{className:"font-mono text-[10px] text-amber-300 font-bold shrink-0",children:n.type}),e.jsx("span",{className:"text-[11px] text-slate-300 font-mono text-right",children:n.msg})]},n.id))}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# Event Binding Blueprint"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`# 1. Bind Listeners (Pass reference WITHOUT ())
screen.onclick(on_canvas_click)
screen.onkeypress(advance_light, "space")
# 2. Give window focus
screen.listen()
# 3. Enter Event Dispatcher Loop
screen.mainloop()`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Event-Driven Architecture Core APIs"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Method / Keyword"}),e.jsx("th",{className:"py-3 px-4",children:"Event Domain"}),e.jsx("th",{className:"py-3 px-4",children:"Asynchronous Role"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Syntax"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:f.map((n,t)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:n.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:n.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:n.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:n.usage})]},t))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{fileModule:_,title:"event_driven_paradigm_intro.py",highlightLines:[24,32,40,41,44,47]}),e.jsx(i,{fileModule:E,title:"callbacks_first_class_functions.py",highlightLines:[12,18,35,36,37,39,40]}),e.jsx(i,{fileModule:N,title:"interactive_traffic_light_controller.py",highlightLines:[18,20,39,40,46,47,48]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🎨"})," Barrackpore Digital Sketchbook"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Susmita built a digital drawing app in Barrackpore. When she mistakenly wrote ",e.jsx("code",{className:"text-rose-300 font-mono",children:"screen.onclick(draw_circle())"}),", the circle drew immediately at startup and failed on mouse clicks. Teacher Sukanta Hui helped her remove the parentheses (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"screen.onclick(draw_circle)"}),"). Her sketchpad worked like magic!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🚦"})," Kolkata Smart Traffic Simulator"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Abhronila modeled a dynamic traffic signal junction in Kolkata. By binding pedestrian emergency pushbuttons to asynchronous event handlers with dictionary state transitions, her junction dynamically adjusted light cycles without freezing vehicle animation!"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Event-Driven Traps to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Calling the Function in Event Binding"}),e.jsxs("p",{className:"text-slate-400",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"screen.onclick(my_func())"})," executes the function immediately once and binds ",e.jsx("code",{className:"text-rose-300 font-mono",children:"None"}),". Always pass the function reference ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"screen.onclick(my_func)"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Forgetting screen.listen()"}),e.jsxs("p",{className:"text-slate-400",children:["Registering keyboard handlers without calling ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"screen.listen()"})," means the canvas never gains keyboard focus, ignoring all keystrokes."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Incorrect onclick Argument Count"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-cyan-300 font-mono",children:"screen.onclick"})," always passes ",e.jsx("code",{className:"text-amber-300 font-mono",children:"(x, y)"}),". Defining a 0-argument function ",e.jsx("code",{className:"text-rose-300 font-mono",children:"def click():"})," raises a ",e.jsx("code",{className:"text-rose-300 font-mono",children:"TypeError: takes 0 positional arguments but 2 were given"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Heavy Blocking Loops Inside Callbacks"}),e.jsxs("p",{className:"text-slate-400",children:["Placing a 5-second computation or ",e.jsx("code",{className:"text-rose-300 font-mono",children:"time.sleep(5)"})," inside an event callback freezes the GUI thread, causing the window to crash and stop responding."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I understand the difference between linear sequential scripts and event-driven architecture","I know that callbacks are first-class function references passed without parentheses `()`","I always call `screen.listen()` to enable keyboard event capturing","I know that `screen.onclick` passes `(x, y)` coordinates to its callback function","I use `lambda` or `functools.partial` to pass custom parameters to event handlers","I understand that `screen.mainloop()` / `turtle.done()` keeps the event dispatcher alive"].map((n,t)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:n})]},t))})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(v,{title:"Event-Driven Programming FAQs",questions:w})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(k,{content:j,title:"Topic 0: Event-Driven Programming Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic0_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(b,{note:"Welcome to Module 005_006 at Coder & AccoTax in Barrackpore and Kolkata! This is where software becomes truly interactive. Up until now, your code told the computer what to do step-by-step; today, you teach your program how to listen and respond to the user. Master callback functions and event listeners, and you will be ready to build any interactive GUI, game, or web app!"})})]})]})};export{U as default};
