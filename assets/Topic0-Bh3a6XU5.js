import{b as i,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as p}from"./TeacherSukantaHui-CEPuAfsb.js";import{P as a}from"./PythonFileLoader-hCi5osN-.js";import{F as c}from"./FAQTemplate-BHhlgA96.js";import{P as h}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-DGCamHnX.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const u=[{question:"What does turtle.penup() do?",shortAnswer:"Lifts the pen off the canvas so movements do not draw lines.",explanation:"When penup() is active, commands like forward() and goto() change the turtle's position without leaving ink on the canvas.",hint:"Think about lifting a pen off a sheet of paper.",level:"basic",codeExample:`t.penup()
t.goto(100, 100)  # No line drawn!
t.pendown()`},{question:"What does turtle.pendown() do?",shortAnswer:"Lowers the pen back onto the canvas so subsequent movements draw lines.",explanation:"pendown() restores the default drawing behavior after a penup() call.",hint:"What is the opposite of penup?",level:"basic",codeExample:`t.pendown()
t.forward(50)  # Draws a 50px line`},{question:"What are the common shorthand aliases for penup() and pendown()?",shortAnswer:"t.up() / t.pu() for penup(), and t.down() / t.pd() for pendown().",explanation:"Python's turtle module provides convenient 2-letter and short method aliases.",hint:"What are the 2-letter abbreviations of pen up and pen down?",level:"basic",codeExample:`t.pu()  # penup
t.pd()  # pendown`},{question:"How do you set the thickness of a drawn line in Turtle?",shortAnswer:"Using turtle.pensize(width) or turtle.width(width).",explanation:"pensize(width) takes a positive integer representing the line width in screen pixels.",hint:"Which method sets the pen size in pixels?",level:"basic",codeExample:`t.pensize(5)  # 5-pixel thick line
t.forward(100)`},{question:"How do you check whether the pen is currently down or up?",shortAnswer:"Using the boolean method turtle.isdown().",explanation:"t.isdown() returns True if the pen is down and drawing, and False if it is lifted.",hint:"What boolean query checks pen state?",level:"moderate",codeExample:`if not t.isdown():
    t.pendown()`},{question:"What is the default pensize when a new Turtle is created?",shortAnswer:"1 pixel.",explanation:"Every new Turtle instance initializes with a default stroke width of 1 pixel.",hint:"What is the thinnest single-pixel stroke?",level:"basic",codeExample:"print(t.pensize())  # 1"},{question:"How do you draw a dashed line with Turtle?",shortAnswer:"By looping forward with pen down, then forward with pen up repeatedly.",explanation:"Alternating between pendown() and penup() inside a loop creates regular dashed patterns.",hint:"How do you create alternating line and blank space?",level:"moderate",codeExample:`for _ in range(10):
    t.pendown()
    t.forward(15)
    t.penup()
    t.forward(10)`},{question:"What happens if you pass a float like 3.5 to pensize()?",shortAnswer:"Turtle accepts floating-point widths and renders anti-aliased strokes accordingly.",explanation:"Tkinter canvas lines can accept floating values, though integer pixels are standard.",hint:"Can line thickness have decimal precision?",level:"moderate",codeExample:"t.pensize(2.5)"},{question:"How do you move the turtle to (x, y) without drawing a transit line?",shortAnswer:"Call penup(), then goto(x, y), then pendown().",explanation:"This 3-step 'island hopping' pattern is the foundational idiom for repositioning turtles.",hint:"What must you do before and after goto(x, y)?",level:"basic",codeExample:`t.penup()
t.goto(-150, 200)
t.pendown()`},{question:"Does penup() affect the turtle.dot() command?",shortAnswer:"No, dot() stamps a circular point at the turtle's location even if the pen is up.",explanation:"turtle.dot(diameter, color) is an instantaneous stamp operation independent of pen trail state.",hint:"Does stamping a dot require dragging the pen?",level:"advanced",codeExample:`t.penup()
t.goto(0, 0)
t.dot(20, 'red')  # Renders successfully!`},{question:"Does penup() affect turtle.write() for rendering text?",shortAnswer:"No, write() renders text on the canvas regardless of whether the pen is up or down.",explanation:"Text rendering is an overlay operation and does not require active pen dragging.",hint:"Can text be printed on screen when pen is up?",level:"moderate",codeExample:`t.penup()
t.write('Hello Jadavpur!', font=('Arial', 14, 'normal'))`},{question:"Can pensize() be called with no arguments to get current width?",shortAnswer:"Yes, `t.pensize()` with no arguments returns the current pen size integer.",explanation:"Like many Turtle methods, pensize() acts as a getter when called without arguments.",hint:"How do you inspect the current line thickness?",level:"moderate",codeExample:"current_width = t.pensize()"},{question:"What error occurs if you pass a negative number or zero to pensize()?",shortAnswer:"Passing non-positive sizes or invalid types can cause visual anomalies or errors.",explanation:"Standard pen thickness should always be positive (>= 1).",hint:"Can physical pens have negative thickness?",level:"moderate",codeExample:"# Always use positive width: t.pensize(4)"},{question:"How can you create a line with gradually increasing thickness (calligraphy effect)?",shortAnswer:"Increase pensize inside a forward loop.",explanation:"Incrementing `t.pensize(i)` by 1 on each step creates a tapering geometric effect.",hint:"How does loop index i change line thickness over time?",level:"moderate",codeExample:`for i in range(1, 20):
    t.pensize(i)
    t.forward(10)`},{question:"What is penstate preservation in modular drawing functions?",shortAnswer:"Recording whether the pen was up/down before drawing and restoring that state on exit.",explanation:"This ensures that calling a helper function like `draw_star()` does not accidentally leave the pen in an unexpected state for the caller.",hint:"How do clean functions clean up after themselves?",level:"expert",codeExample:`was_down = t.isdown()
# do work...
if not was_down: t.penup()`},{question:"How do you draw a dotted line (points instead of dashes)?",shortAnswer:"Lift pen, move forward in steps, and call t.dot() at each step.",explanation:"Using `t.dot(size)` with `t.penup()` creates perfectly round dotted lines.",hint:"What method places a circular dot on canvas?",level:"moderate",codeExample:`t.penup()
for _ in range(15):
    t.dot(6, 'cyan')
    t.forward(20)`},{question:"Does changing pensize() retroactively change lines already drawn?",shortAnswer:"No, pensize() only affects lines drawn after the method call.",explanation:"Canvas drawings are permanent vector line segments. Changing pen attributes applies only forward in time.",hint:"Does changing your physical pen alter drawings already made on paper?",level:"basic",codeExample:`t.pensize(2); t.forward(50)  # 2px
t.pensize(10); t.forward(50) # 10px`},{question:"What is the function of turtle.pen()?",shortAnswer:"It returns or sets a dictionary containing all pen state attributes simultaneously.",explanation:"`t.pen()` manages shown, pendown, pencolor, fillcolor, pensize, speed, and resizemode in a single dictionary.",hint:"Which method returns all pen settings in a single dictionary?",level:"advanced",codeExample:`state = t.pen()
print(state['pensize'], state['pendown'])`},{question:"How can you restore an entire pen state from a dictionary?",shortAnswer:"Pass the saved dictionary to `t.pen(saved_dict)`.",explanation:"Calling `t.pen(old_state)` restores all attributes (color, size, up/down) in one command.",hint:"How do you unpack a saved state back into the pen?",level:"expert",codeExample:`old_state = t.pen()
# modify pen...
t.pen(old_state) # Restored!`},{question:"Why is pen control crucial for drawing coordinate axes (X and Y axes)?",shortAnswer:"To position the turtle at (-X, 0) and (0, -Y) without drawing diagonal lines from the origin.",explanation:"Drawing coordinate systems requires lifting the pen to navigate to the axis extremities cleanly.",hint:"How do you jump to axis start points without leaving marks?",level:"moderate",codeExample:"t.penup(); t.goto(-300, 0); t.pendown(); t.forward(600)"},{question:"What is the difference between `t.pensize(w)` and `t.shapesize(w)`?",shortAnswer:"pensize() alters drawn line thickness; shapesize() scales the turtle cursor icon.",explanation:"pensize modifies drawing ink, while shapesize modifies the visual size of the turtle shape itself.",hint:"One scales the ink, the other scales the cursor.",level:"moderate",codeExample:`t.pensize(5)   # Thick line
t.shapesize(2) # 2x larger turtle icon`},{question:"How do you draw a grid of dots across the entire screen?",shortAnswer:"Use nested loops over X and Y coordinates with penup() and dot().",explanation:"Iterate across x in range(-200, 201, 40) and y in range(-200, 201, 40) with `t.goto(x,y); t.dot(4)`.",hint:"What structure generates a 2D matrix of points?",level:"advanced",codeExample:`t.penup()
for x in range(-200, 201, 50):
    for y in range(-200, 201, 50):
        t.goto(x, y); t.dot(4, 'white')`},{question:"Does turtle.stamp() depend on penup() or pendown()?",shortAnswer:"No, stamp() leaves an impression of the turtle cursor regardless of pen state.",explanation:"Stamp creates a static copy of the turtle shape at its current position and heading.",hint:"Does stamping a rubber stamp require drawing a line?",level:"moderate",codeExample:"t.penup(); t.goto(100, 50); t.stamp()"},{question:"Can multiple Turtle instances have different pensizes simultaneously?",shortAnswer:"Yes, each Turtle instance encapsulates its own independent pen state.",explanation:"Turtle A can have `pensize(2)` and red color while Turtle B has `pensize(8)` and green color.",hint:"Are pen attributes global or object-specific?",level:"basic",codeExample:`t1 = turtle.Turtle(); t1.pensize(2)
t2 = turtle.Turtle(); t2.pensize(8)`},{question:"Why should you lift the pen when generating random scatter plots?",shortAnswer:"To prevent random connecting zigzag lines between discrete data points.",explanation:"Scatter plots represent individual points; drawing lines between them misleads the visualization.",hint:"Do scatter plots connect points with lines?",level:"moderate",codeExample:`t.penup()
for x, y in data_points:
    t.goto(x, y); t.dot(6, 'orange')`},{question:"What is the return type of t.isdown()?",shortAnswer:"Boolean (True or False).",explanation:"t.isdown() returns True if the pen is down, False if it is up.",hint:"Is it a string, number, or boolean?",level:"basic",codeExample:"state = t.isdown()  # True / False"},{question:"How does setting pensize(10) affect sharp polygon corners?",shortAnswer:"It produces rounded/mitered corner joins rendered by the underlying Tkinter engine.",explanation:"Thick lines emphasize the joint geometry between intersecting segments.",hint:"What happens when thick line strokes meet at an angle?",level:"advanced",codeExample:`t.pensize(15)
for _ in range(3): t.forward(100); t.left(120)`},{question:"What is the best practice for resetting pen attributes back to defaults?",shortAnswer:"Call `t.pensize(1)` and `t.pendown()` explicitly, or `t.reset()`.",explanation:"Explicit reset ensures subsequent drawings start with predictable standard attributes.",hint:"How do you ensure clean state across functions?",level:"basic",codeExample:`t.pensize(1)
t.pendown()`},{question:"How do you draw concentric circles with increasing line weights?",shortAnswer:"Loop over increasing radius values while adjusting `t.pensize()` and repositioning with `penup()`.",explanation:"Reposition to `(0, -radius)` with penup(), then draw circle with adjusted pensize.",hint:"How do you center concentric circles without transit lines?",level:"moderate",codeExample:`for r in range(20, 120, 20):
    t.penup(); t.goto(0, -r); t.pendown()
    t.pensize(r // 15); t.circle(r)`},{question:"What is the summary golden rule of pen control?",shortAnswer:"Always lift the pen before moving to a new starting location, and set pensize before drawing strokes.",explanation:"This simple habit eliminates 99% of accidental stray lines in Turtle graphical programming.",hint:"What two actions keep drawings clean and sharp?",level:"basic",codeExample:`# Golden Rule:
# 1. t.penup() → 2. t.goto() → 3. t.pensize() → 4. t.pendown()`}],x=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 0 - Pen Control: penup(), pendown(), and pensize()\r
File: pen_control_basics.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates basic pen state management in Python Turtle:\r
lifting the pen to move without drawing, placing the pen down,\r
and modifying line width dynamically.\r
"""\r
\r
import turtle\r
\r
def demonstrate_pen_control():\r
    # 1. Canvas Setup\r
    screen = turtle.Screen()\r
    screen.title("Pen Control: penup(), pendown() & pensize() - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
    screen.setup(width=700, height=600)\r
\r
    # 2. Artist Setup\r
    t = turtle.Turtle()\r
    t.shape("turtle")\r
    t.color("#38bdf8")\r
    t.speed(3)\r
\r
    # 3. Draw a solid line with pensize 2\r
    t.pensize(2)\r
    t.forward(120)\r
\r
    # 4. Lift pen (penup) and relocate without drawing\r
    print("Pen lifted. Moving to new coordinate without drawing line...")\r
    t.penup()\r
    t.forward(60)\r
\r
    # 5. Place pen down (pendown) and draw thick line\r
    print("Pen placed down. Resuming drawing with pensize 6...")\r
    t.pendown()\r
    t.pensize(6)\r
    t.color("#34d399")\r
    t.forward(120)\r
\r
    # 6. Check pen state using isdown()\r
    print(f"Is pen currently drawing? {t.isdown()}")\r
\r
    t.hideturtle()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    demonstrate_pen_control()\r
`,m=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 0 - Pen Control: penup(), pendown(), and pensize()\r
File: dotted_dashed_lines.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Shows how to draw patterned dashed and dotted borders using\r
iterative penup() and pendown() cycles.\r
"""\r
\r
import turtle\r
\r
def draw_dashed_border():\r
    screen = turtle.Screen()\r
    screen.title("Dashed and Dotted Geometry - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.color("#fbbf24")\r
    t.pensize(3)\r
\r
    # Move to starting corner\r
    t.penup()\r
    t.goto(-200, 200)\r
\r
    # Draw a 400x400 dashed square\r
    for side in range(4):\r
        # 10 dashes of 20px line + 20px gap per side\r
        for dash in range(10):\r
            t.pendown()\r
            t.forward(20)\r
            t.penup()\r
            t.forward(20)\r
        t.right(90)\r
\r
    t.hideturtle()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_dashed_border()\r
`,g=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 0 - Pen Control: penup(), pendown(), and pensize()\r
File: island_hopping_shapes.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates drawing multiple disconnected geometric shapes across\r
the canvas without leaving connecting transit lines.\r
"""\r
\r
import turtle\r
\r
def draw_polygon(t, x, y, sides, radius, line_color, line_width):\r
    """Helper function to draw a polygon at an absolute coordinate."""\r
    t.penup()\r
    t.goto(x, y)\r
    t.setheading(0)\r
    t.color(line_color)\r
    t.pensize(line_width)\r
    t.pendown()\r
\r
    angle = 360 / sides\r
    for _ in range(sides):\r
        t.forward(radius)\r
        t.left(angle)\r
\r
def draw_island_composition():\r
    screen = turtle.Screen()\r
    screen.title("Multi-Island Geometry - Coder & AccoTax")\r
    screen.bgcolor("#090d16")\r
    screen.setup(width=750, height=600)\r
\r
    t = turtle.Turtle()\r
    t.speed(6)\r
\r
    # 1. Draw Triangle at Top-Left\r
    draw_polygon(t, -200, 100, sides=3, radius=80, line_color="#38bdf8", line_width=4)\r
\r
    # 2. Draw Square at Center\r
    draw_polygon(t, -40, -40, sides=4, radius=80, line_color="#34d399", line_width=3)\r
\r
    # 3. Draw Hexagon at Bottom-Right\r
    draw_polygon(t, 140, -150, sides=6, radius=60, line_color="#f43f5e", line_width=5)\r
\r
    # 4. Stamp center point\r
    t.penup()\r
    t.goto(0, 0)\r
    t.dot(15, "#fbbf24")\r
\r
    t.hideturtle()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_island_composition()\r
`,w=`================================================================================\r
  TOPIC 0: PEN CONTROL: PENUP(), PENDOWN(), AND PENSIZE()\r
  MODULE: 005_002 - Turtle Design & Aesthetic Customization\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS PEN CONTROL IN TURTLE GRAPHICS?\r
--------------------------------------------------------------------------------\r
By default, whenever a Turtle moves across the screen, it leaves a continuous\r
trail behind it (as if dragging an active pen against paper). Pen control allows\r
programmers to manipulate this drawing behavior dynamically:\r
\r
1. \`t.penup()\` (or \`t.up()\`, \`t.pu()\`):\r
   - Lifts the virtual pen off the canvas.\r
   - Any subsequent movement (\`forward\`, \`goto\`, \`setposition\`) will change\r
     the turtle's coordinates WITHOUT leaving a visible line.\r
\r
2. \`t.pendown()\` (or \`t.down()\`, \`t.pd()\`):\r
   - Lowers the virtual pen back onto the canvas.\r
   - Movement commands will resume drawing lines.\r
\r
3. \`t.pensize(width)\` (or \`t.width(width)\`):\r
   - Sets the line thickness in integer pixels (e.g., \`pensize(5)\` draws a\r
     5-pixel wide stroke).\r
\r
4. \`t.isdown()\`:\r
   - Returns boolean \`True\` if the pen is currently drawing, or \`False\` if lifted.\r
\r
2. CORE USE CASES OF PEN CONTROL\r
--------------------------------------------------------------------------------\r
1. Disconnected Shapes (Island Hopping):\r
   Moving the turtle to separate quadrants of the screen to draw multiple\r
   independent figures without trailing connecting lines.\r
\r
2. Dashed and Dotted Lines:\r
   Iteratively toggling \`pendown()\` (move 20px) and \`penup()\` (move 15px) inside\r
   a loop to create perforated borders and technical gridlines.\r
\r
3. Dynamic Line Width Gradients:\r
   Increasing or decreasing \`pensize(i)\` inside iterative spiraling loops to create\r
   calligraphic or 3D depth illusions.\r
\r
3. GOLDEN RULES FOR CLEAN PEN MANAGEMENT\r
--------------------------------------------------------------------------------\r
- Always pair repositioning with \`penup()\` → \`goto(x, y)\` → \`pendown()\`.\r
- Check \`t.isdown()\` before running nested subroutines if a function requires\r
  restoring the original pen state.\r
- Set \`pensize()\` before starting complex geometric loops for consistent stroke weight.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================\r
`,f=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 15px rgba(56, 189, 248, 0.2); }
  50% { box-shadow: 0 0 25px rgba(56, 189, 248, 0.4); }
}
`,T=()=>{const[n,o]=i.useState("down"),[s,l]=i.useState(4),d=[{name:"turtle.penup() / turtle.up() / turtle.pu()",returnType:"None",purpose:"Lifts the pen off the canvas. Subsequent movements do not draw lines.",usage:"t.penup()"},{name:"turtle.pendown() / turtle.down() / turtle.pd()",returnType:"None",purpose:"Lowers the pen back onto the canvas so movements resume drawing lines.",usage:"t.pendown()"},{name:"turtle.pensize(width) / turtle.width(w)",returnType:"int / None",purpose:"Sets the line drawing thickness in integer pixels (default is 1).",usage:"t.pensize(5)"},{name:"turtle.isdown()",returnType:"bool",purpose:"Returns True if the pen is currently down; False if lifted.",usage:"if not t.isdown(): t.pendown()"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:f}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_002 · Turtle Design & Aesthetic Customization · Topic 0"}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent",children:["Pen Control: ",e.jsx("span",{className:"font-mono",children:"penup()"}),", ",e.jsx("span",{className:"font-mono",children:"pendown()"})," & ",e.jsx("span",{className:"font-mono",children:"pensize()"})]}),e.jsx("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Master the art of canvas navigation without stray marks. Learn how to lift the pen for island-hopping, create patterned dashed lines, and dynamically alter stroke widths."}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"✒️ Stroke Thickness"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🦘 Island Hopping (penup)"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"〰️ Dashed & Dotted Patterns"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🎨"})," Interactive Pen Control Visualizer"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Toggle pen states and adjust stroke width to observe how Turtle renders vector paths."})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:()=>o(n==="down"?"up":"down"),className:`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${n==="down"?"bg-emerald-500 text-white shadow-lg shadow-emerald-500/25":"bg-rose-500 text-white shadow-lg shadow-rose-500/25"}`,children:e.jsx("span",{children:n==="down"?"🖊️ Pen DOWN (Drawing)":"✋ Pen UP (Lifted)"})}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-900 px-3 py-1.5 rounded-xl border border-slate-700",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"pensize:"}),e.jsx("input",{type:"range",min:"1",max:"12",value:s,onChange:t=>l(Number(t.target.value)),className:"w-24 accent-sky-400 cursor-pointer"}),e.jsxs("span",{className:"font-mono text-xs text-sky-400 font-bold w-4",children:[s,"px"]})]})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 700 180",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-3xl h-auto",children:[e.jsx("rect",{x:"10",y:"10",width:"680",height:"160",rx:"12",fill:"#020617",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("line",{x1:"50",y1:"90",x2:"220",y2:"90",stroke:"#38bdf8",strokeWidth:s,strokeLinecap:"round"}),e.jsx("circle",{cx:"50",cy:"90",r:"5",fill:"#38bdf8"}),e.jsx("text",{x:"135",y:"65",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"1. pendown()"}),e.jsxs("text",{x:"135",y:"125",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:["Solid Line (pensize=",s,")"]}),e.jsx("line",{x1:"230",y1:"90",x2:"380",y2:"90",stroke:"#64748b",strokeWidth:"1.5",strokeDasharray:"4,4"}),e.jsx("text",{x:"305",y:"65",fill:"#f43f5e",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"2. penup()"}),e.jsx("text",{x:"305",y:"125",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Clean Gap (No Ink!)"}),e.jsx("line",{x1:"390",y1:"90",x2:"560",y2:"90",stroke:n==="down"?"#34d399":"#475569",strokeWidth:n==="down"?s:1,strokeDasharray:n==="down"?"none":"2,2",strokeLinecap:"round"}),e.jsx("circle",{cx:"560",cy:"90",r:"6",fill:n==="down"?"#34d399":"#94a3b8"}),e.jsxs("text",{x:"475",y:"65",fill:n==="down"?"#34d399":"#94a3b8",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:["3. ",n==="down"?"Drawing Resumed":"Pen is Lifted"]}),e.jsx("text",{x:"475",y:"125",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:n==="down"?"Active Canvas Ink":"Invisible Transit"}),e.jsx("g",{transform:`translate(${n==="down"?560:380}, 90)`,children:e.jsx("polygon",{points:"0,-10 15,0 0,10 4,0",fill:"#fbbf24"})})]})})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Pen Control Method Prototypes & Syntax"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Method Name & Aliases"}),e.jsx("th",{className:"py-3 px-4",children:"Return"}),e.jsx("th",{className:"py-3 px-4",children:"Functionality"}),e.jsx("th",{className:"py-3 px-4",children:"Code Pattern"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:d.map((t,r)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-sky-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-emerald-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:t.usage})]},r))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Practical Python Scripts for Pen Control"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(a,{fileModule:x,title:"pen_control_basics.py",highlightLines:[14,21,28,33]}),e.jsx(a,{fileModule:m,title:"dotted_dashed_lines.py",highlightLines:[14,21,23,25]}),e.jsx(a,{fileModule:g,title:"island_hopping_shapes.py",highlightLines:[12,17,27,30,33]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-sky-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," Jadavpur University: Coordinate Grid Plotter"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Student Mamata plots disconnected data points across 4 quadrants. By calling ",e.jsx("code",{className:"text-sky-300",children:"penup()"})," before jumping to each coordinate, she renders a clean Cartesian grid without unwanted diagonal lines connecting the origin to each point."]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🚂"})," Barrackpore Station: Railway Track Pattern"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Debangshu uses alternating ",e.jsx("code",{className:"text-emerald-300",children:"pendown()"})," and ",e.jsx("code",{className:"text-emerald-300",children:"penup()"})," cycles inside a loop to draw railway sleeper ties and dashed road lanes across a 500-pixel street scene."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Pen Control Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Forgetting to Lower the Pen"}),e.jsxs("p",{className:"text-slate-400",children:["Calling ",e.jsx("code",{className:"text-amber-300",children:"penup()"})," and forgetting ",e.jsx("code",{className:"text-emerald-300",children:"pendown()"})," results in the turtle moving invisibly without drawing any shapes."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Forgetting to Lift Before goto()"}),e.jsx("p",{className:"text-slate-400",children:"Moving to a new starting point while the pen is down leaves an ugly diagonal line directly through your artwork."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Passing 0 or Negative pensize"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-rose-300",children:"pensize(0)"})," causes inconsistent rendering across platforms. Always use positive integers ",e.jsx("code",{className:"text-emerald-300",children:"pensize(1)"})," or higher."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Global Pen State Side-Effects"}),e.jsx("p",{className:"text-slate-400",children:"Modifying pensize inside a helper function without resetting it causes subsequent drawings to inherit thick strokes unintentionally."})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I know how to lift the pen using penup() to reposition without drawing","I can lower the pen using pendown() to resume drawing lines","I can change line thickness dynamically using pensize(pixels)","I understand how to create dashed borders by alternating penup and pendown","I can check active pen drawing state using the isdown() query","I always lift the pen before using goto() to start a new disconnected shape"].map((t,r)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},r))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," Why architectural blueprints and CAD tools separate geometry into discrete stroke weights (fine gridlines vs bold outer walls)."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How ",e.jsx("code",{className:"text-sky-300",children:"t.dot()"})," stamps perfect circular points even when the pen is lifted with ",e.jsx("code",{className:"text-sky-300",children:"t.penup()"}),"."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Increase ",e.jsx("code",{className:"text-amber-300",children:"pensize(i)"})," inside a spiral loop to create calligraphic 3D depth effects."]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-2xl p-5 border border-purple-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"🚀 Expert Mindset"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["In professional computer graphics and SVG rendering, path commands are divided into ",e.jsx("strong",{children:"MoveTo (M)"})," and ",e.jsx("strong",{children:"LineTo (L)"})," instructions. In Turtle, ",e.jsx("code",{className:"text-purple-300",children:"penup() + goto()"})," represents MoveTo, while ",e.jsx("code",{className:"text-purple-300",children:"pendown() + forward()"})," represents LineTo. Mastering this distinction unlocks the mental model for 2D vector engines."]})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(c,{title:"Pen Control & pensize() FAQs",questions:u})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(h,{content:w,title:"Topic 0: Pen Control Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic0_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(p,{note:"When teaching graphics in Barrackpore and Kolkata, I always emphasize that pen control is what separates messy beginner sketches from clean, professional vector art. Always drill into students the 3-step mantra: 'Pen UP → Goto Coordinates → Pen DOWN'. Once this habit is second nature, students can place complex buildings, celestial constellations, and multi-colored mandalas across their canvas with pinpoint mathematical precision."})})]})]})};export{T as default};
