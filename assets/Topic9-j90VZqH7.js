import{j as e}from"./index-CK4WUhpx.js";import{T as n}from"./TeacherSukantaHui-CAKlTT30.js";import{P as o}from"./PythonFileLoader-0AHgfDjp.js";import{F as a}from"./FAQTemplate-omkku7A3.js";import"./github-BjzfPmy3.js";import"./createLucideIcon--yS5sPo-.js";import"./git-branch-YOW4_iC7.js";import"./PythonCodeBlock-CJl6yYEA.js";import"./prism-Bgw5yzRN.js";import"./browser-2mk3wPy-.js";import"./clsx-B-dksMZM.js";const i=[{question:"What is the key difference between relative and absolute movement?",shortAnswer:"Relative depends on current heading; absolute depends on fixed coordinates.",explanation:"Relative: forward/back/left/right. Absolute: goto/setx/sety.",hint:"Body vs world reference.",level:"basic",codeExample:""},{question:"Which command(s) are relative?",shortAnswer:"forward(), backward(), left(), right().",explanation:"These modify position/heading based on turtle's current state.",hint:"Also their aliases: fd, bk, lt, rt.",level:"basic",codeExample:"t.forward(100)"},{question:"Which command(s) are absolute?",shortAnswer:"goto(), setx(), sety(), setpos(), setposition().",explanation:"These move to specific world coordinates ignoring heading.",hint:"Teleport to (x,y).",level:"basic",codeExample:"t.goto(50, -30)"},{question:"If the turtle is at (0,0) facing north, what is the result of `forward(100)`?",shortAnswer:"Moves to (0, 100) (north).",explanation:"Relative to heading: north is 90°, so forward moves up.",hint:"North = positive y.",level:"basic",codeExample:"t.setheading(90); t.forward(100)"},{question:"If the turtle is at (50, 50) and you call `goto(100, 0)`, what is the new position regardless of heading?",shortAnswer:"(100, 0).",explanation:"goto sets absolute coordinates.",hint:"Ignores heading.",level:"basic",codeExample:"t.goto(100, 0)"},{question:"Why would you use relative movement to draw a square?",shortAnswer:"Because the pattern is repeating: forward, right 90, four times.",explanation:"Relative moves fit the shape naturally; absolute would require calculating each corner.",hint:"Loop with forward and right.",level:"moderate",codeExample:"for _ in range(4): t.forward(100); t.right(90)"},{question:"Why would you use absolute movement to draw a grid of dots?",shortAnswer:"Because each dot has fixed coordinates (x,y), independent of order.",explanation:"Relative would require tracking position and would be error‑prone.",hint:"Nested loops with computed x,y.",level:"moderate",codeExample:"for x in range(-100,101,20): for y in range(-100,101,20): t.goto(x,y); t.dot()"},{question:"Does `goto()` change the turtle's heading?",shortAnswer:"No, heading remains unchanged.",explanation:"Only position changes; the turtle still faces the same direction.",hint:"You can verify with `t.heading()` before and after.",level:"basic",codeExample:""},{question:"Does `forward(100)` change the turtle's heading?",shortAnswer:"No, only position changes; heading stays the same.",explanation:"Forward moves along current heading without turning.",hint:"Turning only happens with left/right or setheading.",level:"basic",codeExample:""},{question:"If you combine relative and absolute moves, what should you be careful about?",shortAnswer:"Position and heading offsets can accumulate unpredictably if not tracked.",explanation:"Keep track of where the turtle is and which mode you're using.",hint:"Print position often during debugging.",level:"moderate",codeExample:""},{question:"How can you draw a star at five different screen locations using absolute positioning?",shortAnswer:"Define a star‑drawing function using relative moves, then call it after `goto()` each location.",explanation:"Use relative inside the function, but absolute to position the function call.",hint:"Combine both: relocate then draw using relative.",level:"expert",codeExample:"def star(): for _ in range(5): t.forward(50); t.right(144); locations = [(0,0), (100,100), ...]; for x,y in locations: t.penup(); t.goto(x,y); t.pendown(); star()"},{question:"What happens if you call `forward(100)` when the turtle is hidden?",shortAnswer:"It moves forward and draws (if pen down) – visibility doesn't affect movement.",explanation:"Hiding only hides the cursor icon.",hint:"Pen still draws.",level:"basic",codeExample:"t.hideturtle(); t.forward(100)  # still moves and draws"},{question:"What happens if you call `goto(100, 100)` with pen up?",shortAnswer:"Moves to (100,100) without drawing a line.",explanation:"Pen up disables drawing during movement.",hint:"Useful for teleporting.",level:"basic",codeExample:"t.penup(); t.goto(100,100)"},{question:"How can you draw a triangle using relative movements?",shortAnswer:"Repeat 3 times: forward(side), left(120) (or right(120)).",explanation:"Exterior angle 120° for equilateral triangle.",hint:"Sum of exterior angles = 360°.",level:"moderate",codeExample:"for _ in range(3): t.forward(100); t.left(120)"},{question:"How can you draw a triangle using absolute coordinates?",shortAnswer:"Use `goto()` with three vertices: (0,0), (100,0), (50,86.6) and back to start.",explanation:"Compute coordinates manually.",hint:"Height = side * sqrt(3)/2.",level:"expert",codeExample:"pts = [(0,0), (100,0), (50,86.6), (0,0)]; for x,y in pts: t.goto(x,y)"},{question:"What is a real‑world analogy for relative movement?",shortAnswer:"Walking directions: 'walk 10 steps, turn left, walk 5 steps'.",explanation:"Depends on where you're facing at each step.",hint:"Body‑relative instructions.",level:"basic",codeExample:""},{question:"What is a real‑world analogy for absolute movement?",shortAnswer:"GPS coordinates or 'go to room 204 on the map'.",explanation:"Independent of your current location/direction.",hint:"Fixed reference system.",level:"basic",codeExample:""},{question:"If you want to draw a rectangle that is always aligned with the screen axes, which movement type is easier?",shortAnswer:"Absolute (goto with fixed x,y).",explanation:"Relative would require careful heading management; absolute just sets corners.",hint:"Even if heading changes, rectangle stays axis‑aligned.",level:"moderate",codeExample:""},{question:"If you want to draw a rectangle that rotates when the turtle rotates, which is better?",shortAnswer:"Relative (forward/right) – the rectangle rotates with heading.",explanation:"Relative moves are body‑centric; the shape orientation follows the turtle.",hint:"Use relative for local coordinate systems.",level:"moderate",codeExample:""},{question:"What does `setx(100)` do in terms of relative vs absolute?",shortAnswer:"Absolute: moves turtle to x=100, keeping y unchanged.",explanation:"Horizontal move only; ignores heading.",hint:"Like `goto(x, t.ycor())`.",level:"basic",codeExample:"t.setx(100)"},{question:"Why might a beginner accidentally draw a diagonal line when using `setx()` and `sety()`?",shortAnswer:"If pen is down, first setx draws horizontal, then sety draws vertical – creating an L, not diagonal.",explanation:"To draw diagonal, use `goto()` with both coordinates changed at once.",hint:"Two separate moves = corner, not straight line.",level:"moderate",codeExample:""},{question:"Can you mix relative and absolute in a single command?",shortAnswer:"Not directly; each command is either relative or absolute.",explanation:"But you can compute an absolute target using relative current position: e.g., `t.goto(t.xcor() + 50, t.ycor())`",hint:"Combine in expressions.",level:"expert",codeExample:"t.goto(t.xcor() + 50, t.ycor())  # relative forward 50 using absolute"},{question:"What is the advantage of storing the turtle's position before a series of relative moves?",shortAnswer:"You can return to that exact spot later using an absolute `goto()`.",explanation:"Common pattern: save position, draw something, then restore.",hint:"Use for modular drawing.",level:"moderate",codeExample:"old_pos = t.pos(); ... ; t.goto(old_pos)"},{question:"If you always use absolute commands, do you ever need to care about heading?",shortAnswer:"Yes, because heading still affects the shape of lines drawn with `forward()` or `circle()`.",explanation:"Absolute `goto()` ignores heading, but other commands don't.",hint:"If you only use goto, heading doesn't matter.",level:"moderate",codeExample:""},{question:"How would you draw a horizontal line of length 100 using only relative commands?",shortAnswer:"`t.setheading(0); t.forward(100)`.",explanation:"Ensure heading is east (0°), then forward.",hint:"Reset heading first.",level:"basic",codeExample:"t.setheading(0); t.forward(100)"},{question:"How would you draw a horizontal line of length 100 using only absolute commands?",shortAnswer:"`t.goto(100, t.ycor())` from start, or specify both endpoints.",explanation:"Move horizontally regardless of heading.",hint:"`t.goto(t.xcor() + 100, t.ycor())`",level:"moderate",codeExample:"t.goto(t.xcor() + 100, t.ycor())"},{question:"What is the output of `t.pos()` after `t.forward(50); t.backward(25)`?",shortAnswer:"(25, 0) if started at (0,0) facing east.",explanation:"Relative: forward 50, then backward 25 nets +25 in x.",hint:"Net displacement = sum of signed moves.",level:"moderate",codeExample:""},{question:"Which type of movement is more natural for drawing a fractal tree?",shortAnswer:"Relative – because each branch grows from the current position and heading.",explanation:"Fractals are self‑similar; relative recursion is easier.",hint:"See recursive turtle graphics.",level:"expert",codeExample:""},{question:"Why do professional CAD systems support both relative and absolute coordinate input?",shortAnswer:"Designers need both: relative for local features, absolute for global placement.",explanation:"Flexibility for different workflows.",hint:"Think of drawing a bolt pattern relative to a hole, then placing that hole absolutely.",level:"expert",codeExample:""},{question:"What is a common sign that you should switch from relative to absolute?",shortAnswer:"When you find yourself calculating positions from a fixed reference instead of chaining moves.",explanation:"Absolute is clearer for grids, charts, and when orientation doesn't matter.",hint:"If you need to 'jump' to a specific location.",level:"moderate",codeExample:""}],l=`import turtle\r
\r
screen = turtle.Screen()\r
screen.setup(600, 400)\r
screen.title("Relative vs Absolute - Same Path")\r
\r
# Create two turtles for side‑by‑side comparison\r
t_rel = turtle.Turtle()\r
t_rel.color("blue")\r
t_rel.shape("turtle")\r
t_rel.penup()\r
t_rel.goto(-200, 100)\r
t_rel.pendown()\r
t_rel.write("Relative", font=("Arial", 12, "bold"))\r
\r
t_abs = turtle.Turtle()\r
t_abs.color("red")\r
t_abs.shape("turtle")\r
t_abs.penup()\r
t_abs.goto(50, 100)\r
t_abs.pendown()\r
t_abs.write("Absolute", font=("Arial", 12, "bold"))\r
\r
# Draw same "L" shape using relative commands (left turtle)\r
t_rel.forward(80)\r
t_rel.left(90)\r
t_rel.forward(60)\r
t_rel.right(90)\r
t_rel.forward(40)\r
\r
# Draw same "L" shape using absolute coordinates (right turtle)\r
t_abs.goto(130, 100)   # after forward 80\r
t_abs.goto(130, 40)    # after left 90 forward 60\r
t_abs.goto(170, 40)    # after right 90 forward 40\r
\r
turtle.done()`,d=`import turtle\r
\r
screen = turtle.Screen()\r
screen.setup(700, 500)\r
screen.title("Draw a House: Relative vs Absolute")\r
\r
# Relative method\r
t_rel = turtle.Turtle()\r
t_rel.penup()\r
t_rel.goto(-250, -100)\r
t_rel.pendown()\r
t_rel.color("green")\r
t_rel.write("Relative House", font=("Arial", 10, "bold"))\r
\r
# Wall (square)\r
for _ in range(4):\r
    t_rel.forward(120)\r
    t_rel.left(90)\r
\r
# Roof (triangle)\r
t_rel.left(45)\r
t_rel.forward(85)\r
t_rel.left(90)\r
t_rel.forward(85)\r
t_rel.left(45)\r
\r
# Door\r
t_rel.penup()\r
t_rel.goto(-250 + 45, -100)\r
t_rel.pendown()\r
t_rel.forward(30)\r
t_rel.left(90)\r
t_rel.forward(50)\r
t_rel.left(90)\r
t_rel.forward(30)\r
\r
# Absolute method\r
t_abs = turtle.Turtle()\r
t_abs.penup()\r
t_abs.goto(50, -100)\r
t_abs.pendown()\r
t_abs.color("blue")\r
t_abs.write("Absolute House", font=("Arial", 10, "bold"))\r
\r
# Wall corners\r
wall_pts = [(50, -100), (170, -100), (170, 20), (50, 20), (50, -100)]\r
for x, y in wall_pts:\r
    t_abs.goto(x, y)\r
\r
# Roof\r
t_abs.goto(110, 70)\r
t_abs.goto(170, 20)\r
\r
# Door\r
t_abs.penup()\r
t_abs.goto(95, -100)\r
t_abs.pendown()\r
door_pts = [(95, -100), (125, -100), (125, -50), (95, -50), (95, -100)]\r
for x, y in door_pts:\r
    t_abs.goto(x, y)\r
\r
turtle.done()`,c=`import turtle\r
\r
screen = turtle.Screen()\r
screen.setup(700, 500)\r
screen.title("Grid (Absolute) vs Spiral (Relative)")\r
\r
# Absolute: draw grid of dots\r
t_abs = turtle.Turtle()\r
t_abs.speed(5)\r
t_abs.hideturtle()\r
t_abs.penup()\r
t_abs.color("cyan")\r
\r
start_x = -250\r
start_y = -150\r
spacing = 50\r
\r
t_abs.goto(-200, 180)\r
t_abs.write("Absolute: Grid of dots", font=("Arial", 10, "bold"))\r
\r
for row in range(7):\r
    y = start_y + row * spacing\r
    for col in range(7):\r
        x = start_x + col * spacing\r
        if -200 <= x <= 200 and -150 <= y <= 150:\r
            t_abs.goto(x, y)\r
            t_abs.dot(4)\r
\r
# Relative: draw spiral\r
t_rel = turtle.Turtle()\r
t_rel.penup()\r
t_rel.goto(200, 150)\r
t_rel.pendown()\r
t_rel.color("orange")\r
t_rel.write("Relative: Spiral", font=("Arial", 10, "bold"))\r
t_rel.penup()\r
t_rel.goto(200, 100)\r
t_rel.pendown()\r
\r
length = 10\r
for _ in range(40):\r
    t_rel.forward(length)\r
    t_rel.left(90)\r
    length += 5\r
\r
turtle.done()`,h=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes softGlow {
  0%,100% { box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
  50% { box-shadow: 0 8px 25px rgba(0,0,0,0.15); }
}
`,_=()=>{const s=[{name:"forward(distance) / fd()",returnType:"None",purpose:"Relative: moves forward in current heading.",usage:"t.forward(100)"},{name:"backward(distance) / bk()",returnType:"None",purpose:"Relative: moves backward opposite heading.",usage:"t.backward(50)"},{name:"left(angle) / lt()",returnType:"None",purpose:"Relative: rotates CCW by angle.",usage:"t.left(90)"},{name:"right(angle) / rt()",returnType:"None",purpose:"Relative: rotates CW by angle.",usage:"t.right(45)"},{name:"goto(x, y) / setpos()",returnType:"None",purpose:"Absolute: moves to specific coordinates.",usage:"t.goto(100, -50)"},{name:"setx(x)",returnType:"None",purpose:"Absolute: sets x-coordinate, keeps y.",usage:"t.setx(200)"},{name:"sety(y)",returnType:"None",purpose:"Absolute: sets y-coordinate, keeps x.",usage:"t.sety(150)"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:h}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent",children:"Relative vs Absolute Movement"}),e.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Understanding the difference, when to use each, and how they work together"}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 rounded-full text-sm",children:"🔄 Relative (forward/back/left/right)"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 rounded-full text-sm",children:"📍 Absolute (goto/setx/sety)"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 rounded-full text-sm",children:"⚖️ Combined Power"})]})]}),e.jsx("div",{className:"flex justify-center animate-[fadeInUp_0.6s_ease-out_0.1s]",children:e.jsxs("div",{className:"bg-gray-800/40 rounded-2xl p-4 backdrop-blur-sm hover:shadow-xl transition-all duration-300",children:[e.jsxs("svg",{width:"500",height:"420",viewBox:"0 0 500 420",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-[500px] h-auto",children:[e.jsx("rect",{x:"20",y:"20",width:"460",height:"380",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"1.5",rx:"10"}),e.jsx("text",{x:"145",y:"45",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"Relative Movement"}),e.jsxs("g",{transform:"translate(50, 70)",children:[e.jsx("circle",{cx:"50",cy:"100",r:"8",fill:"#14b8a6"}),e.jsx("polygon",{points:"65,100 58,94 58,106",fill:"#14b8a6"}),e.jsx("text",{x:"40",y:"85",fill:"#94a3b8",fontSize:"9",children:"Start"}),e.jsx("line",{x1:"50",y1:"100",x2:"130",y2:"100",stroke:"#f97316",strokeWidth:"2"}),e.jsx("line",{x1:"130",y1:"100",x2:"130",y2:"40",stroke:"#f97316",strokeWidth:"2"}),e.jsx("line",{x1:"130",y1:"40",x2:"170",y2:"40",stroke:"#f97316",strokeWidth:"2"}),e.jsx("line",{x1:"170",y1:"40",x2:"170",y2:"80",stroke:"#f97316",strokeWidth:"2"}),e.jsx("text",{x:"80",y:"95",fill:"#f97316",fontSize:"8",children:"fd(80)"}),e.jsx("text",{x:"135",y:"70",fill:"#f97316",fontSize:"8",children:"rt(90)"}),e.jsx("text",{x:"140",y:"35",fill:"#f97316",fontSize:"8",children:"fd(60)"}),e.jsx("text",{x:"145",y:"60",fill:"#f97316",fontSize:"8",children:"lt(90)"}),e.jsx("circle",{cx:"170",cy:"80",r:"6",fill:"#facc15"}),e.jsx("text",{x:"175",y:"85",fill:"#facc15",fontSize:"9",children:"End"})]}),e.jsx("text",{x:"360",y:"45",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"Absolute Movement"}),e.jsxs("g",{transform:"translate(250, 70)",children:[[-40,0,40,80,120].map(t=>[60,100,140,180].map(r=>e.jsx("circle",{cx:110+t,cy:r,r:"2",fill:"#475569"},`${t}${r}`))),e.jsx("line",{x1:"70",y1:"60",x2:"230",y2:"60",stroke:"#334155",strokeWidth:"0.5"}),e.jsx("line",{x1:"70",y1:"100",x2:"230",y2:"100",stroke:"#334155",strokeWidth:"0.5"}),e.jsx("line",{x1:"70",y1:"140",x2:"230",y2:"140",stroke:"#334155",strokeWidth:"0.5"}),e.jsx("line",{x1:"70",y1:"180",x2:"230",y2:"180",stroke:"#334155",strokeWidth:"0.5"}),e.jsx("circle",{cx:"110",cy:"140",r:"8",fill:"#14b8a6"}),e.jsx("text",{x:"100",y:"130",fill:"#94a3b8",fontSize:"8",children:"Start"}),e.jsx("line",{x1:"110",y1:"140",x2:"190",y2:"100",stroke:"#f43f5e",strokeWidth:"1.5",strokeDasharray:"4,2"}),e.jsx("circle",{cx:"190",cy:"100",r:"6",fill:"#f97316"}),e.jsx("text",{x:"195",y:"95",fill:"#f97316",fontSize:"8",children:"1"}),e.jsx("line",{x1:"190",y1:"100",x2:"150",y2:"60",stroke:"#f43f5e",strokeWidth:"1.5",strokeDasharray:"4,2"}),e.jsx("circle",{cx:"150",cy:"60",r:"6",fill:"#f97316"}),e.jsx("text",{x:"140",y:"55",fill:"#f97316",fontSize:"8",children:"2"}),e.jsx("line",{x1:"150",y1:"60",x2:"210",y2:"180",stroke:"#f43f5e",strokeWidth:"1.5",strokeDasharray:"4,2"}),e.jsx("circle",{cx:"210",cy:"180",r:"6",fill:"#facc15"}),e.jsx("text",{x:"215",y:"185",fill:"#facc15",fontSize:"9",children:"End"}),e.jsx("text",{x:"120",y:"210",fill:"#f43f5e",fontSize:"8",children:"goto(80,-40)"}),e.jsx("text",{x:"90",y:"225",fill:"#f43f5e",fontSize:"8",children:"goto(40,-80)"}),e.jsx("text",{x:"100",y:"240",fill:"#f43f5e",fontSize:"8",children:"goto(100,40)"})]}),e.jsx("text",{x:"50",y:"380",fill:"#94a3b8",fontSize:"11",children:"Relative: depends on heading & previous position | Absolute: independent of heading, fixed coordinates"})]}),e.jsx("p",{className:"text-center text-sm text-gray-400 mt-2",children:"Relative movement (left) chains commands; absolute (right) jumps to coordinates"})]})}),e.jsxs("section",{className:"space-y-4 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-emerald-500 pl-4",children:"🔄 Two Ways to Move"}),e.jsxs("div",{className:"bg-gray-800/30 rounded-xl p-5 space-y-3",children:[e.jsxs("p",{className:"leading-relaxed",children:[e.jsx("strong",{children:"Relative movement"})," changes position based on the turtle's current heading and location (",e.jsx("code",{children:"forward/backward/left/right"}),"). ",e.jsx("strong",{children:"Absolute movement"})," moves to exact coordinates regardless of heading (",e.jsx("code",{children:"goto/setx/sety"}),"). Both are essential; choosing the right one depends on the problem."]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-300",children:"Relative (Body‑centric)"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[e.jsxs("li",{children:["Commands: ",e.jsx("code",{children:"forward()"}),", ",e.jsx("code",{children:"backward()"}),", ",e.jsx("code",{children:"left()"}),", ",e.jsx("code",{children:"right()"}),"."]}),e.jsx("li",{children:"Depends on current heading."}),e.jsx("li",{children:"Great for polygons, spirals, and recurring patterns."}),e.jsx("li",{children:'Analogous: "walk forward 3 steps, turn left"'})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-300",children:"Absolute (World‑centric)"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[e.jsxs("li",{children:["Commands: ",e.jsx("code",{children:"goto()"}),", ",e.jsx("code",{children:"setx()"}),", ",e.jsx("code",{children:"sety()"}),"."]}),e.jsx("li",{children:"Independent of heading."}),e.jsx("li",{children:"Ideal for grids, plotting points, and teleporting."}),e.jsx("li",{children:'Analogous: "go to coordinates (10,5) on a map"'})]})]})]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-emerald-500 pl-4",children:"🗺️ Real‑world Analogies"}),e.jsxs("div",{className:"bg-gray-800/30 rounded-xl p-5",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("p",{className:"font-semibold text-emerald-300",children:"Relative: Walking Directions"}),e.jsx("p",{children:`"Walk 100 meters forward, turn right, walk 50 meters" – depends on where you're facing.`})]}),e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("p",{className:"font-semibold text-cyan-300",children:"Absolute: GPS Coordinates"}),e.jsx("p",{children:'"Go to latitude 22.57, longitude 88.36" – works regardless of your current direction.'})]})]}),e.jsx("p",{className:"mt-3 text-gray-400 text-sm",children:'In Barrackpore, telling a friend "go to the clock tower" is absolute; "walk towards the station and turn left" is relative.'})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-emerald-500 pl-4",children:"💻 Code Examples"}),e.jsx(o,{fileModule:l,title:"relative_vs_absolute.py",highlightLines:[8,9,10,11,12,13]}),e.jsx(o,{fileModule:d,title:"house_comparison.py",highlightLines:[8,9,10,11,12,13]}),e.jsx(o,{fileModule:c,title:"grid_vs_path.py",highlightLines:[8,9,10,11,12,13]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-emerald-500 pl-4",children:"🔧 Movement Methods Compared"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full bg-gray-800/30 rounded-xl text-sm",children:[e.jsx("thead",{className:"bg-gray-700/60",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left",children:"Method"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Depends On"}),e.jsx("th",{children:"Example"})]})}),e.jsx("tbody",{children:s.map((t,r)=>e.jsxs("tr",{className:"border-t border-gray-700 hover:bg-gray-700/30 transition",children:[e.jsx("td",{className:"px-4 py-2 font-mono text-emerald-300",children:t.name}),e.jsx("td",{className:"px-4 py-2 text-center",children:t.returnType==="None"?t.name.includes("goto")?"Absolute":"Relative":"N/A"}),e.jsx("td",{className:"px-4 py-2",children:t.purpose.split(":")[0]}),e.jsx("td",{className:"px-4 py-2 font-mono text-xs",children:t.usage})]},r))})]})})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsxs("div",{className:"bg-gray-800/40 rounded-xl p-5",children:[e.jsx("h3",{className:"text-2xl font-semibold text-amber-300",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 mt-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing current heading with world axes:"})," Relative movement always respects heading; absolute ignores it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using relative when absolute is simpler:"})," Drawing a grid with forward/back is messy; use goto."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Assuming ",e.jsx("code",{children:"goto()"})," changes heading:"]})," It doesn't–the turtle still faces original direction."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mixing relative and absolute without resetting position:"})," Can lead to unexpected offsets."]})]})]}),e.jsxs("div",{className:"bg-gray-800/40 rounded-xl p-5",children:[e.jsx("h3",{className:"text-2xl font-semibold text-green-300",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 mt-2",children:[e.jsx("li",{children:"For regular polygons/spirals → relative."}),e.jsx("li",{children:"For dot grids, charts, or predefined points → absolute."}),e.jsx("li",{children:"Store the turtle's starting position if you need to return after relative moves."}),e.jsx("li",{children:"Combine both: use relative for shape outlines, absolute to reposition."}),e.jsx("li",{children:"When debugging, print current position and heading to understand which mode you're in."})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-xl p-5 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"📝 Student Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2 mt-2",children:["I can explain the difference between relative and absolute movement","I know that forward/back/left/right are relative to current heading","I know that goto/setx/sety are absolute (world coordinates)","I can choose the right approach for a given drawing task","I can mix relative and absolute commands in a single program","I understand that heading does not affect absolute positioning"].map((t,r)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-400",children:"✓"}),e.jsx("span",{className:"text-gray-200",children:t})]},r))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.8s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-xl p-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"💡 Hints to Explore"}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Think about:"})," If you need to draw a star at five different screen locations, would you use relative or absolute?"]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Observe:"})," Run a program that draws a square with relative moves, then another that draws the same square with absolute coordinates."]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Insert a ",e.jsx("code",{children:"setheading(45)"})," before relative commands – see how the shape rotates; absolute remains same."]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-xl p-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"🚀 Expert Mindset"}),e.jsx("p",{children:"Professional graphics libraries (e.g., Cairo, SVG) support both relative and absolute path commands. Being fluent in both allows you to write more modular code. Relative is great for reusable “drawing procedures” (functions) that can be called from any location. Absolute is essential for layout and positioning UI elements."})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(a,{title:"Relative vs Absolute Movement FAQs",questions:i})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(n,{note:"This is a pivotal concept. Use two whiteboard diagrams: one showing a turtle at (0,0) facing east; relative commands: forward 100 → (100,0); left 90 → heading north. Compare with absolute: goto(100,100). Have students predict outcomes. Then let them write a program that draws the same shape using both methods – they will internalize the difference."})})]})]})};export{_ as default};
