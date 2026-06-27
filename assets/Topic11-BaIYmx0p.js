import{j as e}from"./index-CNNP-EED.js";import{T as s}from"./TeacherSukantaHui-BOnCSEBg.js";import{P as r}from"./PythonFileLoader-CugKKKOc.js";import{F as l}from"./FAQTemplate-B-lMXd6e.js";import"./git-branch-BwKA7x2_.js";import"./PythonCodeBlock-BElLBy-9.js";import"./prism-CQDD5-RF.js";import"./browser-B7OMk5-w.js";import"./clsx-B-dksMZM.js";const i=[{question:"What is the external angle of a square?",shortAnswer:"90°.",explanation:"360° / 4 sides = 90° per turn.",hint:"Think of walking around a square.",level:"basic",codeExample:"t.right(90)"},{question:"How many times should you repeat the forward+turn loop to draw a square?",shortAnswer:"4 times.",explanation:"One iteration per side.",hint:"A square has 4 sides.",level:"basic",codeExample:"for _ in range(4): t.forward(100); t.right(90)"},{question:"What is the external angle for an equilateral triangle?",shortAnswer:"120°.",explanation:"360° / 3 = 120°.",hint:"Turn at each corner.",level:"basic",codeExample:"t.right(120)"},{question:"How would you draw a rectangle that is 200 units long and 100 units wide?",shortAnswer:"Repeat twice: forward(200), right(90), forward(100), right(90).",explanation:"Two pairs of equal sides.",hint:"One long, one short, repeat.",level:"moderate",codeExample:"for _ in range(2): t.forward(200); t.right(90); t.forward(100); t.right(90)"},{question:"Why does the turtle turn 90° for a square but 120° for a triangle?",shortAnswer:"External angle = 360° divided by number of sides.",explanation:"Square: 360/4=90°, triangle: 360/3=120°.",hint:"Sum of external angles always 360°.",level:"moderate",codeExample:"t.right(360 / n)"},{question:"What happens if you use `right(90)` but loop 3 times?",shortAnswer:"You get an open shape (not a triangle) – actually a 270° turn total, not closed.",explanation:"For a closed shape, external angle × sides must equal 360°.",hint:"Check: 90*3 = 270, not 360.",level:"moderate",codeExample:""},{question:"How can you draw a filled square?",shortAnswer:"Use `t.begin_fill()` before drawing and `t.end_fill()` after.",explanation:"The area enclosed by the path is filled with current fill color.",hint:"Set fill color with `t.fillcolor()`.",level:"basic",codeExample:"t.begin_fill(); for _ in range(4): t.forward(100); t.right(90); t.end_fill()"},{question:"What is the difference between drawing a square and a rectangle in code?",shortAnswer:"Square uses same side length 4 times; rectangle uses two different lengths, alternating.",explanation:"A square is a special case of rectangle with equal sides.",hint:"Rectangle: length, width, length, width.",level:"basic",codeExample:""},{question:"How do you draw a square starting from its center instead of a corner?",shortAnswer:"Move half the side left and up from center, then draw as usual.",explanation:"Center to corner offset: (-side/2, side/2) using penup.",hint:"Use `goto(x - side/2, y + side/2)`.",level:"expert",codeExample:""},{question:"What color methods can you use to fill a shape?",shortAnswer:"`pencolor()` for outline, `fillcolor()` for fill, or `color(pencolor, fillcolor)`.",explanation:"`begin_fill()` uses the current fill color.",hint:"Default fill is black.",level:"moderate",codeExample:"t.fillcolor('blue'); t.begin_fill(); ... ; t.end_fill()"},{question:"Why is it important to call `end_fill()` after drawing the shape?",shortAnswer:"It closes the fill region and applies the color.",explanation:"Without it, the shape may not be filled, or fill may be incomplete.",hint:"Always pair begin_fill with end_fill.",level:"basic",codeExample:""},{question:"How can you draw a triangle that is not equilateral?",shortAnswer:"Use different forward distances for each side and appropriate turn angles.",explanation:"Scalene triangle: three different sides, angles determined by law of cosines.",hint:"Harder; equilateral is simplest.",level:"expert",codeExample:""},{question:"What is a common mistake when drawing a triangle with `left(120)`?",shortAnswer:"Using `left(60)` (internal angle) instead of external 120°.",explanation:"Internal + external = 180°; internal 60° means external 120°.",hint:"You turn the external angle to change direction.",level:"moderate",codeExample:""},{question:"How would you draw a square rotated 45°?",shortAnswer:"Set heading to 45° BEFORE drawing the square.",explanation:"The entire square rotates because forward/right are relative.",hint:"`t.setheading(45)` before the loop.",level:"moderate",codeExample:"t.setheading(45); for _ in range(4): t.forward(100); t.right(90)"},{question:"What does `t.circle(50)` have to do with polygons?",shortAnswer:"A circle is a polygon with many sides (default 360 tiny sides).",explanation:"Approximated by many short straight segments.",hint:"You could draw a 36‑gon with 10° turns.",level:"moderate",codeExample:""},{question:"How can you draw a triangle using `goto()` with coordinates?",shortAnswer:"Calculate three vertices and loop through them with `goto()`.",explanation:"Use absolute positioning: (0,0), (100,0), (50,86.6).",hint:"Height = side * sqrt(3)/2.",level:"expert",codeExample:"pts = [(0,0), (100,0), (50,86.6), (0,0)]; for x,y in pts: t.goto(x,y)"},{question:"What is the purpose of `t.penup()` before drawing a new shape?",shortAnswer:"To move to a new location without drawing a line between shapes.",explanation:"Avoids unwanted connecting lines.",hint:"Teleport without a trace.",level:"basic",codeExample:"t.penup(); t.goto(200,200); t.pendown()"},{question:"How can you draw a rectangle that is taller than wide?",shortAnswer:"Set length (horizontal) smaller than width (vertical) or swap order.",explanation:"Example: forward(50), right(90), forward(120), right(90) – gives vertical rectangle.",hint:"Width = vertical side length.",level:"basic",codeExample:""},{question:"Write a function `draw_polygon(n, side)` that draws any regular polygon.",shortAnswer:"def draw_polygon(n, side): angle = 360/n; for _ in range(n): t.forward(side); t.right(angle)",explanation:"Generalizes square, triangle, pentagon, etc.",hint:"Use n as number of sides.",level:"expert",codeExample:"def draw_polygon(n, side): angle = 360/n; for _ in range(n): t.forward(side); t.right(angle)"},{question:"What is the external angle of a regular pentagon?",shortAnswer:"72°.",explanation:"360 / 5 = 72°.",hint:"Try drawing one with a loop.",level:"moderate",codeExample:"for _ in range(5): t.forward(100); t.right(72)"},{question:"Why does a square drawn with `left(90)` instead of `right(90)` still form a square?",shortAnswer:"It just rotates the square in opposite orientation (counter‑clockwise).",explanation:"External angle magnitude is still 90°, direction changes orientation.",hint:"Both produce a square, just facing different way.",level:"basic",codeExample:"t.left(90)  # CCW square"},{question:"How can you draw a hollow square (only outline) with thick lines?",shortAnswer:"Use `pensize()` before drawing, and do not call `begin_fill()`.",explanation:"Outline only, no fill.",hint:"`t.pensize(5)` makes thick border.",level:"basic",codeExample:"t.pensize(5); for _ in range(4): t.forward(100); t.right(90)"},{question:"What is a common error when using `begin_fill()` but forgetting to set fillcolor?",shortAnswer:"The shape will be filled with the default color (usually black).",explanation:"Set explicitly with `t.fillcolor('red')`.",hint:"Always set fill color if you want a specific color.",level:"moderate",codeExample:""},{question:"How would you draw a triangle that is right‑angled?",shortAnswer:"Use sides like forward(100), right(90), forward(100), then `goto(0,0)`.",explanation:"Right angle triangle with legs on axes.",hint:"Use absolute or relative.",level:"expert",codeExample:"t.forward(100); t.right(90); t.forward(100); t.goto(0,0)"},{question:"What is the effect of `t.speed(0)` on drawing shapes?",shortAnswer:"The shape appears instantly; no animation between steps.",explanation:"Useful for complex or repetitive drawings.",hint:"Faster execution, but no visual feedback of drawing process.",level:"moderate",codeExample:"t.speed(0)"},{question:"How can you draw a square and a triangle overlapping?",shortAnswer:"Draw square, then penup to start of triangle, pendown and draw triangle.",explanation:"Order matters; overlapping colors may mix if fill is used.",hint:"Use different colors to see overlap.",level:"moderate",codeExample:""},{question:"What is a 'polygon' in turtle graphics?",shortAnswer:"A closed shape with straight sides, drawn by repeating forward+turn.",explanation:"Regular polygons have equal sides and angles.",hint:"Square, triangle, pentagon, etc.",level:"basic",codeExample:""},{question:"Why might a rectangle drawn with a loop not close exactly?",shortAnswer:"If the turn angles or distances are slightly wrong due to floating point errors or logic mistake.",explanation:"Use exact integers and correct angles to avoid drift.",hint:"Check that the sum of turn angles = 360°.",level:"moderate",codeExample:""},{question:"What is the purpose of `t.home()` in shape drawing?",shortAnswer:"Returns turtle to origin (0,0) and resets heading to east.",explanation:"Useful as a reference point before drawing multiple shapes.",hint:"Not always needed; can use `goto(0,0)` instead.",level:"basic",codeExample:"t.home()"},{question:"How can you draw a triangle with a different orientation (e.g., pointing down)?",shortAnswer:"Start with `setheading(270)` before drawing or use `left(60)` differently.",explanation:"Adjust initial heading or turn sequence.",hint:"Rotate the entire triangle by starting with a different heading.",level:"moderate",codeExample:"t.setheading(0); for _ in range(3): t.forward(100); t.right(120)  # normal; to invert, start heading 180"}],o=`import turtle\r
\r
screen = turtle.Screen()\r
screen.setup(500, 400)\r
screen.title("Draw a Square")\r
\r
t = turtle.Turtle()\r
t.speed(3)\r
t.pensize(2)\r
t.color("green")\r
\r
side = 120\r
\r
# Draw square: 4 sides, 90° external angle\r
for _ in range(4):\r
    t.forward(side)\r
    t.right(90)\r
\r
# Mark start and fill\r
t.penup()\r
t.goto(-side//2, -side//2)\r
t.pendown()\r
t.begin_fill()\r
for _ in range(4):\r
    t.forward(side)\r
    t.right(90)\r
t.end_fill()\r
\r
turtle.done()`,d=`import turtle\r
\r
screen = turtle.Screen()\r
screen.setup(600, 400)\r
screen.title("Draw a Rectangle")\r
\r
t = turtle.Turtle()\r
t.speed(3)\r
t.pensize(2)\r
t.color("orange")\r
\r
length = 150\r
width = 80\r
\r
# Draw rectangle: two pairs of equal sides\r
for _ in range(2):\r
    t.forward(length)\r
    t.right(90)\r
    t.forward(width)\r
    t.right(90)\r
\r
t.penup()\r
t.goto(-length//2, -width//2)\r
t.pendown()\r
t.begin_fill()\r
for _ in range(2):\r
    t.forward(length)\r
    t.right(90)\r
    t.forward(width)\r
    t.right(90)\r
t.end_fill()\r
\r
turtle.done()`,h=`import turtle\r
\r
screen = turtle.Screen()\r
screen.setup(600, 400)\r
screen.title("Draw an Equilateral Triangle")\r
\r
t = turtle.Turtle()\r
t.speed(3)\r
t.pensize(2)\r
t.color("red")\r
\r
side = 130\r
\r
# External angle = 360/3 = 120°\r
for _ in range(3):\r
    t.forward(side)\r
    t.right(120)\r
\r
t.penup()\r
t.goto(0, 60)\r
t.pendown()\r
t.begin_fill()\r
for _ in range(3):\r
    t.forward(side)\r
    t.right(120)\r
t.end_fill()\r
\r
turtle.done()`,c=`import turtle\r
\r
screen = turtle.Screen()\r
screen.setup(700, 500)\r
screen.title("Shape Functions")\r
\r
t = turtle.Turtle()\r
t.speed(5)\r
\r
def square(x, y, size, color):\r
    t.penup()\r
    t.goto(x, y)\r
    t.pendown()\r
    t.color(color)\r
    t.begin_fill()\r
    for _ in range(4):\r
        t.forward(size)\r
        t.right(90)\r
    t.end_fill()\r
\r
def rectangle(x, y, length, width, color):\r
    t.penup()\r
    t.goto(x, y)\r
    t.pendown()\r
    t.color(color)\r
    t.begin_fill()\r
    for _ in range(2):\r
        t.forward(length)\r
        t.right(90)\r
        t.forward(width)\r
        t.right(90)\r
    t.end_fill()\r
\r
def triangle(x, y, side, color):\r
    t.penup()\r
    t.goto(x, y)\r
    t.pendown()\r
    t.color(color)\r
    t.begin_fill()\r
    for _ in range(3):\r
        t.forward(side)\r
        t.right(120)\r
    t.end_fill()\r
\r
# Draw a simple house\r
square(-100, -50, 100, "lightblue")\r
rectangle(-100, -50, 100, 100, "lightblue")   # body\r
triangle(-100, 50, 100, "red")                # roof\r
\r
t.hideturtle()\r
turtle.done()`,g=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes softGlow {
  0%,100% { box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
  50% { box-shadow: 0 8px 25px rgba(0,0,0,0.15); }
}
`,q=()=>{const a=[{name:"forward(distance)",returnType:"None",purpose:"Draw side of shape.",usage:"t.forward(100)"},{name:"right(angle)",returnType:"None",purpose:"External turn (clockwise).",usage:"t.right(90)  # square corner"},{name:"left(angle)",returnType:"None",purpose:"External turn (counter‑clockwise).",usage:"t.left(120) # triangle"},{name:"begin_fill() / end_fill()",returnType:"None",purpose:"Fill shape with color.",usage:"t.begin_fill() ... t.end_fill()"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:g}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent",children:"Basic Geometric Shapes"}),e.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Square, Rectangle, Triangle – step‑by‑step logic and geometry"}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 rounded-full text-sm",children:"⬛ Square"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 rounded-full text-sm",children:"📏 Rectangle"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 rounded-full text-sm",children:"🔺 Triangle"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 rounded-full text-sm",children:"🎨 Filled Shapes"})]})]}),e.jsx("div",{className:"flex justify-center animate-[fadeInUp_0.6s_ease-out_0.1s]",children:e.jsxs("div",{className:"bg-gray-800/40 rounded-2xl p-4 backdrop-blur-sm hover:shadow-xl transition-all duration-300",children:[e.jsxs("svg",{width:"500",height:"280",viewBox:"0 0 500 280",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-[500px] h-auto",children:[e.jsx("rect",{x:"20",y:"20",width:"460",height:"240",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"1.5",rx:"10"}),e.jsx("rect",{x:"50",y:"50",width:"100",height:"100",fill:"#2dd4bf",fillOpacity:"0.4",stroke:"#14b8a6",strokeWidth:"2"}),e.jsx("text",{x:"100",y:"180",fill:"#2dd4bf",fontSize:"12",textAnchor:"middle",children:"Square"}),e.jsx("text",{x:"100",y:"195",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"4 sides equal"}),e.jsx("text",{x:"100",y:"210",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"90° turns"}),e.jsx("rect",{x:"200",y:"70",width:"120",height:"60",fill:"#f97316",fillOpacity:"0.4",stroke:"#f97316",strokeWidth:"2"}),e.jsx("text",{x:"260",y:"180",fill:"#f97316",fontSize:"12",textAnchor:"middle",children:"Rectangle"}),e.jsx("text",{x:"260",y:"195",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"opposite sides equal"}),e.jsx("text",{x:"260",y:"210",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"90° turns"}),e.jsx("polygon",{points:"380,150 430,60 480,150",fill:"#f43f5e",fillOpacity:"0.4",stroke:"#f43f5e",strokeWidth:"2"}),e.jsx("text",{x:"430",y:"180",fill:"#f43f5e",fontSize:"12",textAnchor:"middle",children:"Triangle"}),e.jsx("text",{x:"430",y:"195",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"3 sides"}),e.jsx("text",{x:"430",y:"210",fill:"#94a3b8",fontSize:"9",textAnchor:"middle",children:"120° turns (ext.)"})]}),e.jsx("p",{className:"text-center text-sm text-gray-400 mt-2",children:"Basic geometric shapes: square, rectangle, and equilateral triangle"})]})}),e.jsxs("section",{className:"space-y-4 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-emerald-500 pl-4",children:"📐 Step‑by‑Step Logic"}),e.jsxs("div",{className:"bg-gray-800/30 rounded-xl p-5 space-y-3",children:[e.jsxs("p",{className:"leading-relaxed",children:["All regular polygons are drawn by repeating two steps: ",e.jsx("strong",{children:"move forward"})," (side length) and ",e.jsx("strong",{children:"turn"})," (external angle). The external angle = 360° / number of sides. For squares/rectangles, external angle = 90°. For equilateral triangle, external angle = 120°."]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-gray-800/50 p-3 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-300",children:"Square"}),e.jsxs("ul",{className:"text-sm list-disc pl-4",children:[e.jsx("li",{children:"4 sides, all equal."}),e.jsx("li",{children:"External angle = 90°."}),e.jsx("li",{children:"Loop 4 times: forward(side), right(90)."})]})]}),e.jsxs("div",{className:"bg-gray-800/50 p-3 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-cyan-300",children:"Rectangle"}),e.jsxs("ul",{className:"text-sm list-disc pl-4",children:[e.jsx("li",{children:"4 sides, opposite sides equal."}),e.jsx("li",{children:"External angle = 90°."}),e.jsx("li",{children:"Repeat: forward(length), right(90), forward(width), right(90)."})]})]}),e.jsxs("div",{className:"bg-gray-800/50 p-3 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-400",children:"Equilateral Triangle"}),e.jsxs("ul",{className:"text-sm list-disc pl-4",children:[e.jsx("li",{children:"3 sides, all equal."}),e.jsx("li",{children:"External angle = 120°."}),e.jsx("li",{children:"Loop 3 times: forward(side), right(120)."})]})]})]})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-emerald-500 pl-4",children:"🧮 The Math Behind Turns"}),e.jsxs("div",{className:"bg-gray-800/30 rounded-xl p-5",children:[e.jsx("p",{className:"leading-relaxed",children:"The sum of external angles of any polygon = 360°. So external angle = 360 / n, where n = number of sides. For a square: 360/4 = 90°. For an equilateral triangle: 360/3 = 120°. This works for any regular polygon (e.g., pentagon 72°, hexagon 60°)."}),e.jsx("div",{className:"mt-3 p-3 bg-gray-800/50 rounded-lg",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Teacher Tip:"})," Have students verify with a piece of paper: tear off a corner of a square – the external angle is 90°. Walk around a triangle – you turn 120° at each corner to face the next side."]})})]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-emerald-500 pl-4",children:"💻 Code Examples"}),e.jsx(r,{fileModule:o,title:"square.py",highlightLines:[6,7,8,9]}),e.jsx(r,{fileModule:d,title:"rectangle.py",highlightLines:[6,7,8,9,10]}),e.jsx(r,{fileModule:h,title:"triangle.py",highlightLines:[6,7,8,9]}),e.jsx(r,{fileModule:c,title:"shapes_function.py",highlightLines:[6,7,8,9,10,11,12,13,14,15]})]}),e.jsxs("section",{className:"space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsx("h2",{className:"text-3xl font-semibold border-l-4 border-emerald-500 pl-4",children:"🔧 Key Commands for Shapes"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full bg-gray-800/30 rounded-xl text-sm",children:[e.jsx("thead",{className:"bg-gray-700/60",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 text-left",children:"Command"}),e.jsx("th",{children:"Use in Shape"}),e.jsx("th",{children:"Example"})]})}),e.jsx("tbody",{children:a.map((t,n)=>e.jsxs("tr",{className:"border-t border-gray-700 hover:bg-gray-700/30 transition",children:[e.jsx("td",{className:"px-4 py-2 font-mono text-emerald-300",children:t.name}),e.jsx("td",{className:"px-4 py-2",children:t.purpose}),e.jsx("td",{className:"px-4 py-2 font-mono text-xs",children:t.usage})]},n))})]})})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsxs("div",{className:"bg-gray-800/40 rounded-xl p-5",children:[e.jsx("h3",{className:"text-2xl font-semibold text-amber-300",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 mt-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Internal vs external angle confusion:"})," Use external (turn angle) = 360/n."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to lift pen before moving to a new shape:"})," Creates unwanted connecting lines."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Incorrect loop count:"})," n sides = n iterations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using degrees when in radians mode:"})," Shapes become distorted."]})]})]}),e.jsxs("div",{className:"bg-gray-800/40 rounded-xl p-5",children:[e.jsx("h3",{className:"text-2xl font-semibold text-green-300",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 mt-2",children:[e.jsxs("li",{children:["Write a reusable function: ",e.jsx("code",{children:"def square(size): ..."}),"."]}),e.jsx("li",{children:"Use variables for side lengths and colors."}),e.jsxs("li",{children:["Fill shapes with ",e.jsx("code",{children:"begin_fill()"})," and ",e.jsx("code",{children:"end_fill()"}),"."]}),e.jsx("li",{children:"For rectangles, store length and width in clear variable names."}),e.jsx("li",{children:"Test with smaller side lengths first to ensure correct logic."})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-xl p-5 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"📝 Student Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2 mt-2",children:["I can draw a square of any size using a loop","I can draw a rectangle with specified length and width","I can draw an equilateral triangle (external angle 120°)","I understand that external angle = 360 / number of sides","I can fill shapes with color using begin_fill()/end_fill()","I can combine shapes to make a simple drawing (e.g., house)"].map((t,n)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-400",children:"✓"}),e.jsx("span",{className:"text-gray-200",children:t})]},n))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.8s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-xl p-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"💡 Hints to Explore"}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Think about:"})," Why does changing the loop count from 4 to 3 draw a triangle, but angles must change too?"]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Observe:"})," What happens if you use ",e.jsx("code",{children:"left(90)"})," instead of ",e.jsx("code",{children:"right(90)"}),"? The shape draws in opposite orientation."]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Draw a square, then a bigger square around it – you've made a frame!"]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-xl p-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"🚀 Expert Mindset"}),e.jsx("p",{children:"Understanding polygon drawing with external angles is the foundation for generating any regular polygon procedurally. In game development, these same loops are used to create collision boundaries, vision cones, and pathfinding waypoints. Mastering these basic shapes unlocks the ability to draw complex structures like stars, spirals, and even synthetic terrains."})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(l,{title:"Basic Geometric Shapes FAQs",questions:i})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(s,{note:"Start with tangible examples: have students walk a square on the floor (4 steps forward, turn 90°, repeat). Then draw on paper. Then code. Emphasize that the computer doesn't guess – we must tell it exactly the turn angle. For rectangle, discuss why two `forward` lengths are different. Let students like Debangshu and Tuhina create a 'shape gallery' – multiple shapes in one script using functions. This fosters modular thinking."})})]})]})};export{q as default};
