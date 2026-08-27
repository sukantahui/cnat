import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import{P as r}from"./PythonFileLoader-hCi5osN-.js";import{F as i}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CIaKtAt4.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const l=[{question:"What is the primary purpose of turtle.done() in a Python Turtle program?",shortAnswer:"To start the Tkinter GUI main event loop and keep the graphics window open.",explanation:"Without turtle.done(), Python finishes running procedural commands and terminates the script immediately, causing the graphics window to flash and close in milliseconds.",hint:"Think about why the window stays open after drawing finishes.",level:"basic",codeExample:`import turtle
turtle.forward(100)
turtle.done()  # Keeps window open`},{question:"What is the difference between turtle.done() and turtle.mainloop()?",shortAnswer:"They are completely identical aliases for Tkinter's mainloop().",explanation:"In Python's turtle library source code, `turtle.done()` is defined simply as an alias pointing directly to `turtle.mainloop()`.",hint:"Are they different or just different names for the same function?",level:"basic",codeExample:`turtle.done()      # Standard alias
turtle.mainloop()  # Exact same function`},{question:"What does screen.exitonclick() do?",shortAnswer:"It keeps the window open until the user clicks anywhere on the canvas, then closes it.",explanation:"screen.exitonclick() binds a left-click event listener to screen.bye() and immediately starts the main event loop.",hint:"What action triggers the window to close?",level:"basic",codeExample:`screen = turtle.Screen()
turtle.circle(50)
screen.exitonclick()  # Closes on click`},{question:"Where should turtle.done() be placed in a script?",shortAnswer:"At the very end of the script (last statement).",explanation:"turtle.done() is a blocking call that transfers execution to the GUI event loop. Any code written after turtle.done() will not run until the graphics window is closed.",hint:"Does it go at the beginning, middle, or end?",level:"basic",codeExample:`# At the end of file:
if __name__ == '__main__':
    draw_scene()
    turtle.done()`},{question:"What happens if you run a Turtle script without turtle.done() in VS Code or Terminal?",shortAnswer:"The window opens, draws instantly, and closes immediately before you can view it.",explanation:"The Python interpreter reaches the end of the script and exits cleanly, which tears down the Tkinter process and canvas window.",hint:"Why does the canvas vanish instantly?",level:"basic",codeExample:`# Flashes and closes:
import turtle
turtle.circle(100)
# Missing turtle.done()!`},{question:"What is an event loop in GUI programming?",shortAnswer:"An infinite loop that listens for and dispatches user actions and OS events.",explanation:"The event loop continuously polls for keyboard strokes, mouse clicks, window resizing, and window redraw signals from the operating system.",hint:"How does a window know when you click a button?",level:"moderate",codeExample:`# Under the hood:
# while window_open:
#     process_os_events()`},{question:"Why does IDLE sometimes keep Turtle windows open without turtle.done()?",shortAnswer:"Because IDLE itself is a Tkinter application with an active event loop.",explanation:"IDLE runs on Tkinter and maintains a continuous event loop, preventing the window from closing. However, outside IDLE (in VS Code, PyCharm, or Terminal), turtle.done() is strictly required.",hint:"What GUI framework does the Python IDLE editor use?",level:"moderate",codeExample:"# Always write portable code by including turtle.done() regardless of IDE."},{question:"What is turtle.bye() and when is it used?",shortAnswer:"It programmatically destroys the graphics window and exits the canvas.",explanation:"turtle.bye() shuts down the Tkinter window. It is commonly bound to an 'Escape' or 'Q' key press for quitting games.",hint:"How do you close the window using code?",level:"moderate",codeExample:`screen = turtle.Screen()
screen.onkey(turtle.bye, 'q')
screen.listen()`},{question:"What exception is raised if the user closes the window while drawing commands are still executing?",shortAnswer:"turtle.Terminator exception.",explanation:"If the canvas is closed while procedural loops are still sending drawing commands, Turtle raises `turtle.Terminator` because the underlying Tkinter canvas no longer exists.",hint:"What is the name of the Turtle termination exception?",level:"advanced",codeExample:`try:
    for i in range(1000):
        t.forward(1)
except turtle.Terminator:
    print('Window closed safely.')`},{question:"Can you call turtle.done() multiple times in the same script?",shortAnswer:"No, calling it multiple times or restarting a canvas after closing causes errors in standard scripts.",explanation:"Once the Tkinter window is destroyed by closing, creating new turtles without properly resetting the Screen will fail.",hint:"Can a destroyed GUI process be restarted in the same script without re-initialization?",level:"advanced",codeExample:`turtle.done()
# Do NOT call turtle.done() again below!`},{question:"What is the purpose of t.hideturtle() before calling turtle.done()?",shortAnswer:"To hide the arrow/turtle cursor so only the finished drawing is visible.",explanation:"Hiding the turtle cursor produces clean, professional presentation artwork without leaving an arrowhead sitting in the middle of the drawing.",hint:"How do you make the cursor invisible for the final artwork?",level:"basic",codeExample:`t.circle(100)
t.hideturtle()  # Cleaner presentation
turtle.done()`},{question:"How does screen.tracer(0) relate to the program lifecycle and update()?",shortAnswer:"tracer(0) pauses auto-rendering, requiring update() before done() to display the final frame.",explanation:"When tracer(0) is enabled for fast rendering, the screen only refreshes when `screen.update()` is called. Calling update() before done() ensures all drawn pixels appear.",hint:"What method must be called to refresh the canvas when tracer is turned off?",level:"advanced",codeExample:`screen.tracer(0)
# Draw complex 10,000 line fractal
screen.update()  # Render now
turtle.done()`},{question:"What are the 4 main stages of a structured Turtle application lifecycle?",shortAnswer:"1. Initialization, 2. Entity Creation, 3. Drawing/Interaction, 4. Event Loop Completion.",explanation:"Structuring code into these four discrete phases ensures modular, reusable, and bug-free graphics programs.",hint:"Think about Setup -> Creation -> Drawing -> Completion.",level:"moderate",codeExample:"# 1. Screen -> 2. Turtle -> 3. Logic -> 4. turtle.done()"},{question:"What does screen.setup(width, height) configure during initialization?",shortAnswer:"The pixel width and height dimensions of the graphics window.",explanation:"screen.setup() sets the initial canvas window size on the user's desktop monitor.",hint:"How do you define the canvas dimensions?",level:"basic",codeExample:`screen = turtle.Screen()
screen.setup(width=800, height=600)`},{question:"Why should drawing loops not be placed after turtle.done()?",shortAnswer:"Because turtle.done() blocks execution; code below it only runs after the window closes.",explanation:"turtle.done() yields control to the OS GUI loop. The Python interpreter will not proceed to the next line until the window is destroyed.",hint:"Is turtle.done() blocking or non-blocking?",level:"basic",codeExample:`turtle.done()
print('This prints ONLY after you close the window!')`},{question:"How do you handle keyboard-driven exit in a Turtle game?",shortAnswer:"Bind a key like 'Escape' to screen.bye() or a custom exit handler.",explanation:"Use `screen.onkey(screen.bye, 'Escape')` and ensure `screen.listen()` is active.",hint:"Which method registers a key event in Turtle?",level:"moderate",codeExample:`screen.listen()
screen.onkey(screen.bye, 'Escape')
turtle.done()`},{question:"What is the return value of turtle.done()?",shortAnswer:"None.",explanation:"turtle.done() does not return a value; its sole function is to enter the main event loop.",hint:"Does turtle.done() compute anything or manage GUI state?",level:"basic",codeExample:`result = turtle.done()
print(result)  # None`},{question:"What happens if an unhandled Python exception occurs before turtle.done()?",shortAnswer:"Execution stops, and the window may either freeze or close immediately.",explanation:"If an error like NameError or ZeroDivisionError occurs during drawing, execution halts immediately and never reaches turtle.done().",hint:"Will turtle.done() execute if an exception aborts the script earlier?",level:"moderate",codeExample:`# Error aborts script before reaching done():
x = 10 / 0  # ZeroDivisionError`},{question:"How can you create a self-closing Turtle window after a fixed delay?",shortAnswer:"Use screen.ontimer(screen.bye, milliseconds) before turtle.done().",explanation:"ontimer registers a callback to execute after a specified time interval (e.g. 5000 ms = 5 seconds) without blocking rendering.",hint:"What Turtle method schedules a timed callback?",level:"advanced",codeExample:`screen.ontimer(screen.bye, 3000)  # Closes in 3 seconds
turtle.done()`},{question:"What is the difference between screen.reset() and screen.clear() in the lifecycle?",shortAnswer:"reset() restores turtle positions and settings; clear() clears drawings while keeping positions.",explanation:"reset() clears the canvas and re-centers all turtles to (0,0) with initial headings. clear() removes drawing lines without resetting turtle states.",hint:"Which one resets the turtle back to origin (0, 0)?",level:"moderate",codeExample:`screen.reset()  # Full reset
screen.clear()  # Erase lines only`},{question:"Why is a `try...except turtle.Terminator` block useful in interactive games?",shortAnswer:"It prevents ugly tracebacks in the terminal when players close the game window unexpectedly.",explanation:"When a game loop is running at 60 FPS, closing the window interrupts active turtle updates. Catching `turtle.Terminator` allows clean exit messages.",hint:"How do you achieve graceful degradation on user exit?",level:"expert",codeExample:`try:
    while True:
        game_step()
except turtle.Terminator:
    print('Goodbye!')`},{question:"Can turtle.done() be used with object-oriented Screen instances?",shortAnswer:"Yes, you can use `turtle.done()` or `screen.mainloop()` interchangeably.",explanation:"Both access the same shared root Tkinter instance.",hint:"Does the module-level done() work with Screen objects?",level:"basic",codeExample:`s = turtle.Screen()
# Both work:
s.mainloop()
# or turtle.done()`},{question:"What is the recommended design pattern for encapsulating a complete Turtle program?",shortAnswer:"Define setup, drawing, and execution in a `main()` function with a `__name__ == '__main__'` guard.",explanation:"This modular architecture prevents accidental execution when importing functions into other test scripts or modules.",hint:"What standard Python guard is used for main execution?",level:"moderate",codeExample:`def main():
    # drawing logic
    turtle.done()

if __name__ == '__main__':
    main()`},{question:"How does turtle.done() interact with Python's garbage collector?",shortAnswer:"It keeps all active objects in memory because the Tkinter root holds references to canvas items.",explanation:"All lines, stamps, and turtle objects remain alive and displayed in memory until the event loop terminates and Tkinter destroys its window.",hint:"Do drawn shapes remain in RAM while the window is active?",level:"advanced",codeExample:"# Memory holds all drawn elements during event loop."},{question:"Why should you avoid using time.sleep() inside the event loop for animation?",shortAnswer:"time.sleep() freezes the main thread and blocks OS event processing, making the window unresponsive.",explanation:"Use `screen.ontimer()` instead of `time.sleep()` so the event loop can continue processing user inputs and window redraws.",hint:"What happens to a GUI when the main thread is put to sleep?",level:"expert",codeExample:`# BAD: time.sleep(0.1) in loop
# GOOD: screen.ontimer(update_frame, 16)`},{question:"What is the role of `turtle.title(text)` during initialization?",shortAnswer:"It sets the text title displayed in the operating system's window title bar.",explanation:"Customizing the window title gives applications and games a professional appearance.",hint:"Where does the title appear on the screen?",level:"basic",codeExample:"turtle.title('Mamata\\'s Geometric Garden - Jadavpur')"},{question:"How do you ensure proper cleanup when running multiple independent Turtle tests?",shortAnswer:"Call `turtle.bye()` and `turtle.TurtleScreen._RUNNING = True` or create fresh isolated processes.",explanation:"Tkinter stores global singleton states that require explicit cleanup when running automated testing suites.",hint:"Why do automated tests need isolated Tkinter processes?",level:"expert",codeExample:"# Clean teardown in test fixtures"},{question:"What is the difference between `turtle.done()` and `sys.exit()`?",shortAnswer:"`turtle.done()` keeps the GUI alive; `sys.exit()` terminates the entire Python process immediately.",explanation:"`turtle.done()` blocks execution while letting Tkinter handle interactions. `sys.exit()` immediately aborts Python and destroys all windows.",hint:"Which one exits the program immediately?",level:"moderate",codeExample:`turtle.done()  # Window stays open
sys.exit()     # Immediate termination`},{question:"Can you run non-GUI Python code concurrently with `turtle.done()`?",shortAnswer:"Only if background threads or `screen.ontimer()` callbacks are configured beforehand.",explanation:"Because `turtle.done()` blocks the main thread, any subsequent procedural code in the main thread cannot execute until the window closes.",hint:"How does the main thread behave once it enters the event loop?",level:"expert",codeExample:`# Schedule recurring tasks with ontimer before done():
screen.ontimer(background_worker, 1000)
turtle.done()`},{question:"What is the ultimate golden rule of Turtle program lifecycle?",shortAnswer:"Always end your Turtle script with `turtle.done()` or `screen.exitonclick()` as the final statement.",explanation:"This single line ensures cross-platform reliability on Windows, macOS, and Linux across all IDEs and execution environments.",hint:"What must be the very last command in every Turtle script?",level:"basic",codeExample:`# The Golden Rule:
# 1. Draw your art
# 2. turtle.done()`}],d=`"""\r
Module: 005_001_turtle-foundation\r
Topic: Topic 16 - Introduction to turtle.done() and program lifecycle completion\r
File: turtle_lifecycle_done.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates the complete Turtle program lifecycle, showing how turtle.done()\r
initializes the Tkinter GUI main event loop and prevents the canvas from closing abruptly.\r
"""\r
\r
import turtle\r
\r
def draw_completed_artwork():\r
    # 1. Initialization Phase: Setup canvas window\r
    screen = turtle.Screen()\r
    screen.title("Turtle Program Lifecycle Completion - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")  # Dark slate background\r
    screen.setup(width=600, height=600)\r
\r
    # 2. Entity Creation Phase: Instantiate turtle artist\r
    artist = turtle.Turtle()\r
    artist.shape("turtle")\r
    artist.color("#38bdf8")  # Sky blue pen\r
    artist.pensize(3)\r
    artist.speed(6)\r
\r
    # 3. Execution / Drawing Phase: Procedural graphics\r
    # Draw a vibrant geometric star rosette\r
    for step in range(8):\r
        artist.forward(120)\r
        artist.left(135)\r
\r
    # Move to center and stamp completion mark\r
    artist.penup()\r
    artist.goto(0, -180)\r
    artist.color("#34d399")  # Emerald green text\r
    artist.write("Program Execution Completed!", align="center", font=("Arial", 14, "bold"))\r
    artist.hideturtle()\r
\r
    # 4. Completion / Event Loop Phase: Keep window alive\r
    print("Drawing finished. Handing control over to turtle.done() event loop...")\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_completed_artwork()\r
`,c=`"""\r
Module: 005_001_turtle-foundation\r
Topic: Topic 16 - Introduction to turtle.done() and program lifecycle completion\r
File: exitonclick_event_loop.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates screen.exitonclick() vs turtle.done() for interactive canvas closure.\r
"""\r
\r
import turtle\r
\r
def interactive_exit_demo():\r
    screen = turtle.Screen()\r
    screen.title("Click Canvas Anywhere to Exit")\r
    screen.bgcolor("#1e1b4b")  # Deep indigo canvas\r
    screen.setup(width=650, height=650)\r
\r
    artist = turtle.Turtle()\r
    artist.speed(8)\r
    artist.color("#f43f5e")  # Rose pen\r
\r
    # Draw hexagonal spiral\r
    for i in range(50):\r
        artist.forward(i * 3)\r
        artist.left(59)\r
\r
    artist.penup()\r
    artist.goto(0, -220)\r
    artist.color("#fbbf24")  # Amber text\r
    artist.write("Click anywhere on this canvas to close!", align="center", font=("Verdana", 12, "normal"))\r
    artist.hideturtle()\r
\r
    # exitonclick() binds a mouse click listener to screen.bye() and starts mainloop\r
    print("Canvas waiting for user mouse click...")\r
    screen.exitonclick()\r
\r
if __name__ == "__main__":\r
    interactive_exit_demo()\r
`,h=`"""\r
Module: 005_001_turtle-foundation\r
Topic: Topic 16 - Introduction to turtle.done() and program lifecycle completion\r
File: program_completion_pattern.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Shows the professional, production-grade template for building clean,\r
crash-free Turtle programs with safe teardown handling.\r
"""\r
\r
import turtle\r
import sys\r
\r
def run_production_canvas():\r
    try:\r
        # Phase 1: Window Setup\r
        screen = turtle.Screen()\r
        screen.title("Professional Turtle Lifecycle Template")\r
        screen.bgcolor("#020617")\r
        screen.setup(width=700, height=700)\r
\r
        # Phase 2: Drawing Logic\r
        t = turtle.Turtle()\r
        t.speed(0)\r
        t.hideturtle()\r
        t.color("#38bdf8")\r
\r
        for radius in range(20, 180, 15):\r
            t.penup()\r
            t.goto(0, -radius)\r
            t.pendown()\r
            t.circle(radius)\r
\r
        t.penup()\r
        t.goto(0, 0)\r
        t.dot(12, "#34d399")\r
\r
        # Phase 3: Lifecycle Finalizer\r
        print("Drawing complete. Starting Tkinter GUI loop...")\r
        turtle.mainloop()  # Equivalent to turtle.done()\r
\r
    except turtle.Terminator:\r
        print("Window was closed by user (turtle.Terminator caught safely).")\r
    except Exception as e:\r
        print(f"Unexpected error occurred: {e}", file=sys.stderr)\r
    finally:\r
        print("Turtle program cleanup finished.")\r
\r
if __name__ == "__main__":\r
    run_production_canvas()\r
`,u=`================================================================================\r
  TOPIC 16: INTRODUCTION TO TURTLE.DONE() & PROGRAM LIFECYCLE COMPLETION\r
  MODULE: 005_001 - Turtle Graphics Foundation\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS TURTLE.DONE() AND WHY IS IT ESSENTIAL?\r
--------------------------------------------------------------------------------\r
In standard Python scripts, execution terminates once the last line of code is\r
processed. When using Turtle graphics, the window is created using the underlying\r
Tkinter GUI toolkit. If your script ends without starting the Tkinter event loop,\r
the operating system immediately destroys the canvas window in a fraction of a\r
second.\r
\r
\`turtle.done()\` (or \`turtle.mainloop()\`) tells Tkinter:\r
"The drawing instructions are finished. Now keep the window open, listen for\r
system events (mouse clicks, resizing, window closing), and do not terminate\r
until the user closes the window."\r
\r
2. THE 4 STAGES OF THE TURTLE PROGRAM LIFECYCLE\r
--------------------------------------------------------------------------------\r
Stage 1: Initialization Phase\r
  - Importing turtle module (\`import turtle\`)\r
  - Initializing canvas dimensions and background (\`screen = turtle.Screen()\`)\r
  - Setting coordinate modes and window title.\r
\r
Stage 2: Entity Instantiation Phase\r
  - Creating turtle instances (\`t = turtle.Turtle()\`)\r
  - Setting speed, pen width, pen color, and shape.\r
\r
Stage 3: Procedural Drawing Phase\r
  - Executing linear commands (\`forward\`, \`right\`, \`circle\`)\r
  - Iterating loops for geometric patterns and mandalas.\r
  - Calling user-defined drawing functions.\r
\r
Stage 4: Completion & Event Loop Phase\r
  - Hiding turtle cursor (\`t.hideturtle()\`)\r
  - Handing control over to \`turtle.done()\` or \`screen.exitonclick()\`.\r
\r
3. KEY LIFECYCLE METHODS\r
--------------------------------------------------------------------------------\r
1. turtle.done() / turtle.mainloop()\r
   - Starts the GUI main loop. Keeps the window alive indefinitely.\r
   - Must be the LAST statement in your turtle script.\r
\r
2. screen.exitonclick()\r
   - Convenient shortcut that automatically binds mouse click to window exit.\r
   - Also starts the main event loop internally.\r
\r
3. turtle.bye()\r
   - Programmatically destroys the canvas window and halts the event loop.\r
\r
4. COMMON BEGINNER MISTAKES\r
--------------------------------------------------------------------------------\r
- Forgetting \`turtle.done()\`: The window flashes and disappears instantly.\r
- Calling \`turtle.done()\` inside a loop: Halts the loop after the first step.\r
- Calling drawing commands after \`turtle.done()\`: Lines below \`turtle.done()\`\r
  will not execute until the window is closed!\r
- Catching \`turtle.Terminator\`: Always use try/except if users might close the\r
  window while a long animation is still rendering.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================\r
`,p=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 15px rgba(56, 189, 248, 0.2); }
  50% { box-shadow: 0 0 25px rgba(56, 189, 248, 0.4); }
}
`,k=()=>{const s=[{name:"turtle.done()",returnType:"None",purpose:"Starts the Tkinter GUI main event loop and keeps the canvas window open.",usage:"turtle.done()"},{name:"turtle.mainloop()",returnType:"None",purpose:"Exact identical alias of turtle.done() that enters the event loop.",usage:"turtle.mainloop()"},{name:"screen.exitonclick()",returnType:"None",purpose:"Binds mouse-click on canvas to window exit and starts the event loop.",usage:"screen.exitonclick()"},{name:"turtle.bye()",returnType:"None",purpose:"Programmatically destroys the turtle canvas window and shuts down the event loop.",usage:"turtle.bye()"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:p}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_001 · Turtle Foundation · Topic 16"}),e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent",children:["Program Lifecycle & ",e.jsx("span",{className:"font-mono",children:"turtle.done()"})," Completion"]}),e.jsx("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Understanding the 4 stages of a Turtle application lifecycle, how the Tkinter event loop keeps the window open, and professional termination patterns."}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🏁 Stage 4 Completion"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🔄 Tkinter Event Loop"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🖱️ exitonclick() vs. done()"})]})]}),e.jsx("div",{className:"flex justify-center animate-[fadeInUp_0.6s_ease-out_0.1s]",children:e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 w-full max-w-4xl",children:[e.jsx("h3",{className:"text-center text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider",children:"The 4 Discrete Phases of the Turtle Program Lifecycle"}),e.jsxs("svg",{viewBox:"0 0 800 240",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-auto",children:[e.jsx("rect",{x:"20",y:"40",width:"160",height:"150",rx:"12",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("circle",{cx:"100",cy:"75",r:"18",fill:"#0284c7"}),e.jsx("text",{x:"100",y:"80",fill:"#ffffff",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"1"}),e.jsx("text",{x:"100",y:"115",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"Setup & Window"}),e.jsx("text",{x:"100",y:"138",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Screen() setup"}),e.jsx("text",{x:"100",y:"153",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"bgcolor(), title()"}),e.jsx("path",{d:"M 185 115 L 215 115",stroke:"#38bdf8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"220",y:"40",width:"160",height:"150",rx:"12",fill:"#0f172a",stroke:"#818cf8",strokeWidth:"2"}),e.jsx("circle",{cx:"300",cy:"75",r:"18",fill:"#4f46e5"}),e.jsx("text",{x:"300",y:"80",fill:"#ffffff",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"2"}),e.jsx("text",{x:"300",y:"115",fill:"#818cf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"Entity Creation"}),e.jsx("text",{x:"300",y:"138",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"t = Turtle()"}),e.jsx("text",{x:"300",y:"153",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"color(), pensize()"}),e.jsx("path",{d:"M 385 115 L 415 115",stroke:"#818cf8",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"420",y:"40",width:"160",height:"150",rx:"12",fill:"#0f172a",stroke:"#34d399",strokeWidth:"2"}),e.jsx("circle",{cx:"500",cy:"75",r:"18",fill:"#059669"}),e.jsx("text",{x:"500",y:"80",fill:"#ffffff",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"3"}),e.jsx("text",{x:"500",y:"115",fill:"#34d399",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"Procedural Draw"}),e.jsx("text",{x:"500",y:"138",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"forward(), circle()"}),e.jsx("text",{x:"500",y:"153",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"loops & math art"}),e.jsx("path",{d:"M 585 115 L 615 115",stroke:"#34d399",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"620",y:"40",width:"160",height:"150",rx:"12",fill:"#0f172a",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("circle",{cx:"700",cy:"75",r:"18",fill:"#d97706"}),e.jsx("text",{x:"700",y:"80",fill:"#ffffff",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"4"}),e.jsx("text",{x:"700",y:"115",fill:"#f59e0b",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"Event Loop"}),e.jsx("text",{x:"700",y:"138",fill:"#fde68a",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"turtle.done()"}),e.jsx("text",{x:"700",y:"155",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Keeps Window Open"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#38bdf8"})})})]})]})}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Lifecycle Management Method Signatures"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Method Prototype"}),e.jsx("th",{className:"py-3 px-4",children:"Return Type"}),e.jsx("th",{className:"py-3 px-4",children:"Purpose"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Code Example"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:s.map((t,n)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-sky-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-emerald-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:t.usage})]},n))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Program Lifecycle Code Files"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(r,{fileModule:d,title:"turtle_lifecycle_done.py",highlightLines:[12,19,27,36]}),e.jsx(r,{fileModule:c,title:"exitonclick_event_loop.py",highlightLines:[11,20,27]}),e.jsx(r,{fileModule:h,title:"program_completion_pattern.py",highlightLines:[12,28,30]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-rose-950/30 rounded-2xl p-6 border border-rose-500/30 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-rose-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"❌"})," What Happens Without turtle.done()"]}),e.jsx("p",{className:"text-xs text-gray-300 leading-relaxed",children:"When running scripts in VS Code, Terminal, or PyCharm, Python reaches the last line of code, finishes its process, and instructs the operating system to immediately destroy the Tkinter window."}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl font-mono text-xs text-rose-300",children:["# Script terminates immediately:",e.jsx("br",{}),"turtle.circle(100)",e.jsx("br",{}),"# 💥 Window flashes for 0.05s and vanishes!"]})]}),e.jsxs("div",{className:"bg-emerald-950/30 rounded-2xl p-6 border border-emerald-500/30 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"✔"})," What turtle.done() Does Under the Hood"]}),e.jsxs("p",{className:"text-xs text-gray-300 leading-relaxed",children:[e.jsx("code",{className:"text-emerald-300",children:"turtle.done()"})," delegates execution to the Tkinter GUI mainloop. It continuously listens for OS redraw events, mouse clicks, and keyboard strokes, keeping the window active until you close it."]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl font-mono text-xs text-emerald-300",children:["# Window stays open indefinitely:",e.jsx("br",{}),"turtle.circle(100)",e.jsx("br",{}),"turtle.done()  # 🛡️ Handover to event loop!"]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Program Lifecycle Mistakes to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Writing Code After turtle.done()"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-amber-300",children:"turtle.done()"})," is a blocking function. Any drawing commands placed below it will not execute until the window is closed!"]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Calling done() Inside Loops"}),e.jsxs("p",{className:"text-slate-400",children:["Placing ",e.jsx("code",{className:"text-amber-300",children:"turtle.done()"})," inside a ",e.jsx("code",{className:"text-sky-300",children:"for"})," or ",e.jsx("code",{className:"text-sky-300",children:"while"})," loop halts the loop on iteration 1."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Confusing done() with time.sleep()"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-rose-300",children:"time.sleep(5)"})," temporarily freezes the program, but still terminates after 5 seconds. Use ",e.jsx("code",{className:"text-emerald-300",children:"turtle.done()"})," for permanent open canvas."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Unhandled turtle.Terminator"}),e.jsxs("p",{className:"text-slate-400",children:["If the user closes the window during an active animation, catch ",e.jsx("code",{className:"text-sky-300",children:"turtle.Terminator"})," to exit cleanly without terminal stack traces."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I understand why turtle.done() is required outside IDLE environments","I know that turtle.done() and turtle.mainloop() are identical aliases","I can use screen.exitonclick() to close graphics on a mouse click","I understand the 4 discrete phases of a structured Turtle application","I know that turtle.done() must be the very last statement in my script","I know how to catch turtle.Terminator for graceful error-free window closure"].map((t,n)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},n))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," Why game loops in Pygame and Godot also rely on a mainloop pattern to process frame ticks."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How hiding the cursor with ",e.jsx("code",{className:"text-sky-300",children:"t.hideturtle()"})," before calling ",e.jsx("code",{className:"text-sky-300",children:"turtle.done()"})," elevates presentation aesthetics."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Replace ",e.jsx("code",{className:"text-amber-300",children:"turtle.done()"})," with ",e.jsx("code",{className:"text-amber-300",children:"screen.exitonclick()"})," in your favorite mandala script."]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-2xl p-5 border border-purple-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"🚀 Expert Mindset"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Every GUI framework—from desktop Tkinter and PyQt to web event loops in JavaScript and mobile Flutter engines—operates on the same fundamental loop pattern: initialize, render, and listen for events. Mastering ",e.jsx("code",{className:"text-purple-300 font-mono",children:"turtle.done()"})," gives you the foundational mental model for all event-driven architectures."]})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(i,{title:"Turtle Lifecycle & turtle.done() FAQs",questions:l})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(a,{content:u,title:"Topic 16: Turtle Lifecycle Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic16_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(o,{note:"During our classes in Barrackpore and Kolkata, the number one question beginners ask on day one is: 'Why did my turtle drawing disappear instantly?' Teaching students that Python runs code top-to-bottom and exits unless instructed to wait with turtle.done() is a crucial conceptual milestone. Always encourage students to wrap their finished graphics with turtle.done() or screen.exitonclick() so they can proudly admire and present their creative coding!"})})]})]})};export{k as default};
