import{b as d,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as h}from"./TeacherSukantaHui-BaJcBHAy.js";import{P as a}from"./PythonFileLoader-hCi5osN-.js";import{F as p}from"./FAQTemplate-BHhlgA96.js";import{P as u}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-8ao-0upJ.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const m=[{question:"What does screen.setup(width, height) do in Python Turtle?",shortAnswer:"Sets the dimensions and optional position of the Turtle graphics window on the desktop.",explanation:"setup() configures the initial size of the OS application window in pixels or fractional percentages.",hint:"Which method initializes the window's pixel dimensions?",level:"basic",codeExample:`screen = turtle.Screen()
screen.setup(width=800, height=600)`},{question:"How do you set a custom title bar caption for the graphics window?",shortAnswer:"Using `screen.title('Your Title Text')`.",explanation:"title() updates the top operating system window frame caption string.",hint:"What method sets the text in the window title bar?",level:"basic",codeExample:"screen.title('AccoTax Graphics Studio - Barrackpore')"},{question:"How do you set the canvas background color in Turtle?",shortAnswer:"Using `screen.bgcolor(color)`.",explanation:"bgcolor() accepts color names, hex codes, or RGB tuples to fill the canvas background.",hint:"What method modifies the background color?",level:"basic",codeExample:"screen.bgcolor('#020617')"},{question:"What is the difference between `screen.setup()` and `screen.screensize()`?",shortAnswer:"setup() controls the outer OS viewport window size; screensize() controls the scrollable canvas drawing area inside.",explanation:"screensize defines the internal world coordinate bounds, which can be larger than the visible window.",hint:"One defines the outer window, the other defines the internal canvas.",level:"moderate",codeExample:`screen.setup(800, 600)      # Outer window
screen.screensize(1600, 1200) # Inner scrollable canvas`},{question:"How do you query the visible window width and height dynamically?",shortAnswer:"Using `screen.window_width()` and `screen.window_height()`.",explanation:"These methods return the active viewport dimensions in integer pixels.",hint:"What getter methods return window width and height?",level:"basic",codeExample:`w = screen.window_width()
h = screen.window_height()`},{question:"What coordinate bounds exist for a window created with `screen.setup(800, 600)`?",shortAnswer:"X-axis spans from -400 to +400; Y-axis spans from -300 to +300 with (0,0) at the center.",explanation:"Turtle uses a centered Cartesian coordinate plane where origin (0,0) is in the exact middle.",hint:"How is the center origin (0,0) related to window width and height?",level:"basic",codeExample:"# Left: -400, Right: +400, Top: +300, Bottom: -300"},{question:"What do the optional `startx` and `starty` parameters in `screen.setup()` control?",shortAnswer:"The desktop screen pixel position where the window opens.",explanation:"startx/starty position the top-left corner of the window relative to the monitor display.",hint:"What parameters position the window on the physical monitor screen?",level:"moderate",codeExample:"screen.setup(600, 400, startx=50, starty=50)"},{question:"Can percentage fractions like `screen.setup(0.8, 0.8)` be used?",shortAnswer:"Yes, float values between 0.0 and 1.0 represent fractions of the total monitor resolution.",explanation:"setup(0.8, 0.8) opens a window taking up 80% of the screen width and height.",hint:"Can setup() accept decimals between 0.0 and 1.0?",level:"moderate",codeExample:"screen.setup(0.75, 0.75) # 75% of monitor resolution"},{question:"How do you set a background image file in Turtle?",shortAnswer:"Using `screen.bgpic('image.gif')`.",explanation:"bgpic() loads and centers a GIF image as the canvas backdrop.",hint:"What image format does standard Tkinter Turtle support for bgpic()?",level:"moderate",codeExample:"screen.bgpic('space_background.gif')"},{question:"Why does `screen.bgpic()` only support GIF images in default Python?",shortAnswer:"Because Tkinter's underlying PhotoImage class natively supports only GIF and PPM/PGM formats without PIL/Pillow.",explanation:"To load PNG/JPEG images, the Pillow library is required to convert image data first.",hint:"What format limitation exists in standard Tkinter PhotoImage?",level:"advanced",codeExample:"# Standard Turtle supports .gif backgrounds"},{question:"How do you remove a background image previously loaded with `bgpic()`?",shortAnswer:"Call `screen.bgpic('nopic')`.",explanation:"Passing the special keyword string 'nopic' clears the background image.",hint:"What special string keyword removes the background picture?",level:"moderate",codeExample:"screen.bgpic('nopic')"},{question:"How do you calculate margin coordinates dynamically for any screen size?",shortAnswer:"Use `margin_x = screen.window_width() // 2 - padding`.",explanation:"Dynamic bounds calculation prevents hardcoded coordinate clipping across different screen setups.",hint:"How do you find the edge of the screen using window_width?",level:"moderate",codeExample:"edge_x = screen.window_width() // 2 - 20"},{question:"What happens if a turtle travels past the visible window boundary?",shortAnswer:"The turtle continues drawing in off-screen coordinate space; lines can be viewed by scrolling if screensize is larger.",explanation:"Turtle coordinates are unbounded mathematical floats; the window is merely a viewing portal.",hint:"Does Turtle crash if it moves off-screen?",level:"basic",codeExample:"t.goto(1000, 1000) # Continues drawing off-screen"},{question:"What is `screen.setworldcoordinates(llx, lly, urx, ury)`?",shortAnswer:"Remaps the canvas coordinate system to custom user-defined axes (lower-left and upper-right points).",explanation:"Allows placing (0,0) at the bottom-left corner for standard mathematical plotting or custom scales.",hint:"Which method remaps origin (0,0) from the center to custom bounds?",level:"expert",codeExample:"screen.setworldcoordinates(0, 0, 100, 100) # (0,0) is now bottom-left!"},{question:"Why should `screen.tracer(0)` be used when drawing complex procedural backgrounds?",shortAnswer:"To disable frame-by-frame animation delays and render thousands of background elements instantly.",explanation:"tracer(0) pauses visual redraws until `screen.update()` is called.",hint:"How do you render complex backdrops without watching every individual line?",level:"moderate",codeExample:`screen.tracer(0)
# draw 200 stars
screen.update()`},{question:"How do you query the current background color of the screen?",shortAnswer:"Call `screen.bgcolor()` with no arguments.",explanation:"Returns the active background color string or RGB tuple.",hint:"How do getters work for screen properties?",level:"basic",codeExample:"bg = screen.bgcolor()"},{question:"How do you draw a border frame along the exact perimeter of the window?",shortAnswer:"Calculate `hw = screen.window_width()//2 - 10` and `hh = screen.window_height()//2 - 10` and draw a rectangle.",explanation:"Using dynamic half-dimensions creates responsive canvas framing.",hint:"How do half-width and half-height define the window perimeter?",level:"moderate",codeExample:"# Responsive canvas perimeter border"},{question:"Does `turtle.clearscreen()` reset window dimensions or background color?",shortAnswer:"It deletes all drawings and resets background color back to white.",explanation:"clearscreen() completely resets the screen back to initial factory state.",hint:"Does clearscreen reset the canvas background?",level:"moderate",codeExample:"screen.clearscreen()"},{question:"What is the difference between `t.clear()` and `screen.clearscreen()`?",shortAnswer:"`t.clear()` removes drawings made by that turtle; `screen.clearscreen()` resets the entire canvas and all turtles.",explanation:"t.clear() is turtle-scoped, while clearscreen() is canvas-wide.",hint:"Which one resets all turtles and the background color?",level:"basic",codeExample:`t.clear()           # Local to turtle
screen.clearscreen() # Global canvas reset`},{question:"How do you create a split dual-color canvas background (half blue sky, half green grass)?",shortAnswer:"Draw two filled rectangles covering the top half and bottom half of the screen coordinates.",explanation:"Drawing large background shapes over coordinates [-hw, 0] to [hw, hh] creates multi-tone environments.",hint:"How do you draw horizon landscapes in Turtle?",level:"moderate",codeExample:"# Sky rectangle (Y > 0) + Grass rectangle (Y < 0)"},{question:"Can multiple windows be opened simultaneously in standard Turtle?",shortAnswer:"Standard Turtle module is built around a single Screen singleton per process.",explanation:"Tkinter Turtle manages one active root window; for multiple canvases, direct Tkinter Canvas widgets are used.",hint:"Is Screen a singleton or can you instantiate multiple screens?",level:"advanced",codeExample:"# Standard Turtle uses single Screen singleton"},{question:"How do you access the underlying Tkinter canvas object from Turtle?",shortAnswer:"Using `screen.getcanvas()` or `screen.cv`.",explanation:"Returns the native tkinter.Canvas object, enabling low-level Tkinter widget bindings.",hint:"What method exposes the underlying Tkinter widget?",level:"expert",codeExample:"tk_canvas = screen.getcanvas()"},{question:"How do you hide the operating system mouse cursor over the canvas?",shortAnswer:"Using `screen.getcanvas().config(cursor='none')`.",explanation:"Configuring the Tkinter canvas cursor attribute to 'none' hides the cursor for fullscreen game modes.",hint:"How do you configure Tkinter widget cursor properties?",level:"expert",codeExample:"screen.getcanvas().config(cursor='none')"},{question:"How do you maximize or make the window fullscreen in Turtle?",shortAnswer:"Using `screen.setup(1.0, 1.0)` or `screen.getcanvas().winfo_toplevel().attributes('-fullscreen', True)`.",explanation:"Passing 1.0 fractions to setup() or configuring the toplevel window attributes enables fullscreen display.",hint:"What fraction in setup() scales to full monitor size?",level:"advanced",codeExample:"screen.setup(1.0, 1.0)"},{question:"What is the default size of the Turtle canvas if `screen.setup()` is omitted?",shortAnswer:"50% width and 75% height of the monitor display.",explanation:"Default Turtle initialization calculates window dimensions based on display resolution.",hint:"Does Turtle pick a default percentage size if setup() is not called?",level:"basic",codeExample:"# Default setup is (0.5, 0.75)"},{question:"How do you draw a coordinate grid overlay with labeled axis numbers?",shortAnswer:"Loop across X and Y coordinate intervals with `t.goto()` and `t.write()`.",explanation:"Drawing gridlines every 50px creates a mathematical plotting workspace for students.",hint:"How do step loops draw evenly spaced axis lines?",level:"advanced",codeExample:"for x in range(-300, 301, 50): # draw vertical line"},{question:"How do you prevent the window from closing until the user clicks it?",shortAnswer:"Using `screen.exitonclick()`.",explanation:"exitonclick() binds the left mouse button to window termination and starts the mainloop.",hint:"What method exits when the user clicks anywhere on screen?",level:"basic",codeExample:"screen.exitonclick()"},{question:"What is the role of `screen.resetscreen()`?",shortAnswer:"Reinitializes all turtles on canvas back to origin (0,0) and initial headings.",explanation:"Resets all artist objects while preserving window setup.",hint:"What method resets all turtles back to starting position?",level:"moderate",codeExample:"screen.resetscreen()"},{question:"Why should `bgcolor()` be called before drawing foreground shapes?",shortAnswer:"To set the canvas color upfront and avoid visual flickering when background updates.",explanation:"Setting canvas properties first establishes the design theme before vector rendering begins.",hint:"Why should background be configured before foreground?",level:"basic",codeExample:"# Setup → bgcolor → draw geometry → done"},{question:"What is the summary golden rule of canvas window design?",shortAnswer:"Always configure `setup()`, `title()`, and `bgcolor()` in the initial initialization block, and use dynamic coordinate math (`window_width() // 2`) for responsive layouts.",explanation:"This guarantees professional presentation and prevents hardcoded boundary clipping on different screen resolutions.",hint:"What sequence guarantees clean window presentation?",level:"basic",codeExample:"# 1. screen.setup() → 2. screen.title() → 3. screen.bgcolor()"}],x=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 4 - Background canvas design and window customization\r
File: canvas_setup_and_window_customization.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates complete canvas window configuration:\r
- screen.setup(width, height, startx, starty)\r
- screen.title(title_string)\r
- screen.bgcolor(color)\r
- screen.screensize(canvwidth, canvheight)\r
"""\r
\r
import turtle\r
\r
def customize_canvas_window():\r
    # 1. Obtain the Screen singleton\r
    screen = turtle.Screen()\r
\r
    # 2. Window title and dimensions (800x600 centered on screen)\r
    screen.title("Deep Space Canvas Studio - Coder & AccoTax Barrackpore")\r
    screen.setup(width=800, height=600, startx=100, starty=100)\r
\r
    # 3. Canvas background color\r
    screen.bgcolor("#020617")  # Slate 950 deep cosmic blue\r
\r
    # 4. Logical scrollable world coordinate canvas\r
    screen.screensize(canvwidth=1200, canvheight=900, bg="#020617")\r
\r
    # 5. Draw decorative golden frame along screen margins\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.hideturtle()\r
    t.color("#fbbf24")\r
    t.pensize(2)\r
\r
    t.penup(); t.goto(-380, 280); t.pendown()\r
    for _ in range(2):\r
        t.forward(760)\r
        t.right(90)\r
        t.forward(560)\r
        t.right(90)\r
\r
    # Title header text\r
    t.penup(); t.goto(0, 240)\r
    t.write("PROFESSIONAL CANVAS STYLING", align="center", font=("Arial", 14, "bold"))\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    customize_canvas_window()\r
`,g=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 4 - Background canvas design and window customization\r
File: dark_theme_space_backdrop.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates procedural night sky generation with random star fields,\r
nebula gradients, and moon glow across a dark custom canvas.\r
"""\r
\r
import turtle\r
import random\r
\r
def generate_cosmic_backdrop():\r
    screen = turtle.Screen()\r
    screen.title("Procedural Starfield Backdrop - Coder & AccoTax")\r
    screen.bgcolor("#030712")  # Deep space black\r
    screen.setup(width=750, height=600)\r
    screen.tracer(0)  # Instant generation\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
\r
    # 1. Scatter 100 random twinkling stars\r
    star_colors = ["#ffffff", "#fef08a", "#93c5fd", "#f472b6"]\r
    for _ in range(100):\r
        t.penup()\r
        x = random.randint(-360, 360)\r
        y = random.randint(-280, 280)\r
        t.goto(x, y)\r
        star_size = random.choice([2, 3, 4])\r
        t.dot(star_size, random.choice(star_colors))\r
\r
    # 2. Glowing Moon at Top-Right\r
    t.penup(); t.goto(220, 160); t.pendown()\r
    t.color("#fef9c3", "#fef08a")  # Pale yellow moon\r
    t.begin_fill()\r
    t.circle(45)\r
    t.end_fill()\r
\r
    # Render all vectors immediately\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    generate_cosmic_backdrop()\r
`,w=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 4 - Background canvas design and window customization\r
File: screen_dimension_and_scroll_canvas.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates querying window geometry attributes and understanding the distinction\r
between physical viewport window (setup) and logical canvas world (screensize).\r
"""\r
\r
import turtle\r
\r
def inspect_canvas_geometry():\r
    screen = turtle.Screen()\r
    screen.title("Geometry Inspector - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
\r
    # Set viewport to 700x500\r
    screen.setup(width=700, height=500)\r
\r
    # Query active screen properties\r
    win_w = screen.window_width()\r
    win_h = screen.window_height()\r
\r
    print("Screen Geometry Attributes:")\r
    print(f"  Viewport Width : {win_w}px (Half bounds: -{win_w//2} to +{win_w//2})")\r
    print(f"  Viewport Height: {win_h}px (Half bounds: -{win_h//2} to +{win_h//2})")\r
\r
    t = turtle.Turtle()\r
    t.color("#38bdf8")\r
    t.pensize(2)\r
\r
    # Draw Crosshair Center Lines\r
    t.penup(); t.goto(-win_w // 2, 0); t.pendown(); t.goto(win_w // 2, 0)\r
    t.penup(); t.goto(0, -win_h // 2); t.pendown(); t.goto(0, win_h // 2)\r
\r
    # Label Origin and Bounds\r
    t.penup(); t.goto(10, 10)\r
    t.write("Origin (0, 0)", font=("Arial", 11, "bold"))\r
\r
    t.hideturtle()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    inspect_canvas_geometry()\r
`,b=`================================================================================\r
  TOPIC 4: BACKGROUND CANVAS DESIGN AND WINDOW CUSTOMIZATION\r
  MODULE: 005_002 - Turtle Design & Aesthetic Customization\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. WHAT IS CANVAS WINDOW CUSTOMIZATION?\r
--------------------------------------------------------------------------------\r
The canvas window is the graphical viewport hosting all turtle drawing operations.\r
Customizing the window provides proper framing, branding, and color harmony:\r
\r
1. \`screen.setup(width, height, startx, starty)\`:\r
   - \`width\`, \`height\`: Viewport dimensions in integer pixels or float percentages.\r
   - \`startx\`, \`starty\`: Optional pixel position on the physical desktop monitor.\r
\r
2. \`screen.title("Title Text")\`:\r
   - Changes the OS title bar caption text.\r
\r
3. \`screen.bgcolor(color)\`:\r
   - Sets the background color of the canvas using names, hex codes, or RGB tuples.\r
\r
4. \`screen.screensize(canvwidth, canvheight, bg)\`:\r
   - Sets the internal scrollable canvas size (independent of the outer viewport).\r
\r
5. \`screen.window_width()\` and \`screen.window_height()\`:\r
   - Return active viewport dimensions in pixels.\r
\r
2. VIEWPORT VS LOGICAL CANVAS WORLD\r
--------------------------------------------------------------------------------\r
- \`screen.setup(800, 600)\`: Defines how large the OS window appears on screen.\r
  Coordinate space spans from X: [-400, +400] and Y: [-300, +300].\r
- \`screen.screensize(1600, 1200)\`: Defines how large the scrollable drawing area\r
  is inside that window.\r
\r
3. BEST PRACTICES FOR CANVAS STYLING\r
--------------------------------------------------------------------------------\r
- Always call \`screen.setup()\` and \`screen.title()\` as the first two statements\r
  after \`turtle.Screen()\` creation.\r
- Prefer modern dark theme backgrounds (e.g. \`"#020617"\`, \`"#0f172a"\`) to make\r
  vibrant vector lines stand out with high visual contrast.\r
- Calculate coordinate bounds dynamically using \`screen.window_width() // 2\`\r
  for responsive margin positioning.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================\r
`,f=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes starTwinkle {
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}
`,A=()=>{const[n,l]=d.useState("cosmic"),o=800,i=600,c=[{name:"screen.setup(width, height, startx, starty)",returnType:"None",purpose:"Configures physical OS window viewport dimensions and desktop monitor position.",usage:"screen.setup(800, 600, startx=100, starty=100)"},{name:"screen.title(titlestring)",returnType:"None",purpose:"Sets the text caption in the top OS window frame header.",usage:"screen.title('AccoTax Graphics Studio')"},{name:"screen.bgcolor(color)",returnType:"str / tuple / None",purpose:"Sets or queries the background canvas color.",usage:"screen.bgcolor('#020617')"},{name:"screen.screensize(canvwidth, canvheight, bg)",returnType:"tuple / None",purpose:"Sets the scrollable world coordinate canvas dimensions inside the window.",usage:"screen.screensize(1600, 1200)"}],s={cosmic:{bg:"#020617",border:"#38bdf8",star:"#fbbf24",label:"Cosmic Dark (Slate 950)"},cyberpunk:{bg:"#180828",border:"#f43f5e",star:"#34d399",label:"Cyberpunk Neon (#180828)"},blueprint:{bg:"#0c2340",border:"#60a5fa",star:"#93c5fd",label:"Architectural Blueprint"}};return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:f}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_002 · Turtle Design & Aesthetic Customization · Topic 4"}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent",children:["Canvas Design & ",e.jsx("span",{className:"font-mono",children:"Screen()"})," Window Customization"]}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Frame your vector artwork with professional window styling. Learn how to configure dimensions with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"setup()"}),", brand title headers, set cosmic dark themes with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"bgcolor()"}),", and master Cartesian coordinate boundaries."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🖼️ setup(width, height)"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🌌 Procedural Backdrops"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"📐 Viewport vs Canvas World"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Interactive Window & Canvas Bounds Studio"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Switch canvas themes and explore Cartesian coordinate limits based on active window dimensions."})]}),e.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:Object.keys(s).map(t=>e.jsx("button",{onClick:()=>l(t),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer capitalize ${n===t?"bg-sky-500 text-white shadow-lg shadow-sky-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:t},t))})]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 700 240",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-3xl h-auto",children:[e.jsx("rect",{x:"20",y:"20",width:"660",height:"200",rx:"10",fill:s[n].bg,stroke:"#334155",strokeWidth:"2"}),e.jsx("rect",{x:"20",y:"20",width:"660",height:"30",rx:"10",fill:"#0f172a"}),e.jsx("circle",{cx:"40",cy:"35",r:"4.5",fill:"#f43f5e"}),e.jsx("circle",{cx:"55",cy:"35",r:"4.5",fill:"#fbbf24"}),e.jsx("circle",{cx:"70",cy:"35",r:"4.5",fill:"#34d399"}),e.jsx("text",{x:"350",y:"39",fill:"#94a3b8",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:'screen.title("Deep Space Canvas Studio - Coder & AccoTax")'}),e.jsx("line",{x1:"50",y1:"135",x2:"650",y2:"135",stroke:"#475569",strokeWidth:"1",strokeDasharray:"3,3"}),e.jsx("line",{x1:"350",y1:"55",x2:"350",y2:"215",stroke:"#475569",strokeWidth:"1",strokeDasharray:"3,3"}),e.jsx("circle",{cx:"350",cy:"135",r:"4",fill:s[n].border}),e.jsx("text",{x:"360",y:"130",fill:s[n].border,fontSize:"11",fontWeight:"bold",children:"Origin (0,0)"}),e.jsxs("text",{x:"50",y:"150",fill:"#94a3b8",fontSize:"10",children:["X: -",o/2]}),e.jsxs("text",{x:"610",y:"150",fill:"#94a3b8",fontSize:"10",children:["X: +",o/2]}),e.jsxs("text",{x:"355",y:"70",fill:"#94a3b8",fontSize:"10",children:["Y: +",i/2]}),e.jsxs("text",{x:"355",y:"210",fill:"#94a3b8",fontSize:"10",children:["Y: -",i/2]}),e.jsx("circle",{cx:"350",cy:"135",r:"40",fill:"none",stroke:s[n].border,strokeWidth:"2"}),e.jsx("polygon",{points:"350,110 360,125 375,125 363,135 368,150 350,140 332,150 337,135 325,125 340,125",fill:s[n].star})]})})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Canvas Window Method Signatures"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Method Name"}),e.jsx("th",{className:"py-3 px-4",children:"Return Type"}),e.jsx("th",{className:"py-3 px-4",children:"Functionality"}),e.jsx("th",{className:"py-3 px-4",children:"Code Pattern"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:c.map((t,r)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-sky-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-emerald-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:t.usage})]},r))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Canvas Setup Code Files"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(a,{fileModule:x,title:"canvas_setup_and_window_customization.py",highlightLines:[14,18,21,24]}),e.jsx(a,{fileModule:g,title:"dark_theme_space_backdrop.py",highlightLines:[14,16,17,24,34]}),e.jsx(a,{fileModule:w,title:"screen_dimension_and_scroll_canvas.py",highlightLines:[15,18,19,29,30]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-sky-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," Jadavpur Astronomy Lab: Planetary Orbit Simulator"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Student Mamata models elliptical planetary orbits. By calling ",e.jsx("code",{className:"text-sky-300 font-mono",children:'screen.bgcolor("#030712")'})," and scattering 150 randomized star dots across the background with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"screen.tracer(0)"}),", she creates an immersive cosmic backdrop before launching real-time orbital animations."]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-purple-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🎮"})," Barrackpore Arcade: Fullscreen Retro Pong Game"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Debangshu uses ",e.jsx("code",{className:"text-purple-300 font-mono",children:"screen.setup(800, 600)"})," with dynamically computed boundary walls (",e.jsx("code",{className:"text-slate-300 font-mono",children:"hw = screen.window_width() // 2"}),") to ensure paddles and the bouncing ball collide accurately on all student monitor resolutions."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Canvas Setup Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Calling setup() Late in Script"}),e.jsxs("p",{className:"text-slate-400",children:["Calling ",e.jsx("code",{className:"text-amber-300",children:"setup()"})," after drawing has begun can resize the window and trigger unwanted viewport recalculations. Always call it on line 2!"]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Hardcoding Coordinate Bounds"}),e.jsxs("p",{className:"text-slate-400",children:["Assuming the screen is always 400px wide leads to clipped shapes. Always calculate bounds dynamically with ",e.jsx("code",{className:"text-emerald-300",children:"screen.window_width() // 2"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Passing Non-GIF Images to bgpic()"}),e.jsxs("p",{className:"text-slate-400",children:["Standard Turtle only supports ",e.jsx("code",{className:"text-rose-300",children:".gif"})," backdrops. Passing a PNG or JPEG without PIL conversion raises a ",e.jsx("code",{className:"text-rose-300",children:"TclError"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Confusing setup() with screensize()"}),e.jsxs("p",{className:"text-slate-400",children:[e.jsx("code",{className:"text-sky-300",children:"setup()"})," controls the outer application window, while ",e.jsx("code",{className:"text-amber-300",children:"screensize()"})," controls the inner scrollable canvas."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I know how to configure window dimensions using screen.setup(width, height)","I can brand my application window title using screen.title('Caption')","I can set custom dark theme canvas backgrounds using screen.bgcolor('#020617')","I understand Cartesian bounds: X spans [-w/2, +w/2], Y spans [-h/2, +h/2]","I can query active viewport dimensions dynamically using window_width() and window_height()","I know that procedural backgrounds should be rendered with tracer(0) for speed"].map((t,r)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},r))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," Why professional video games always display custom window captions and themed backgrounds before rendering the main menu."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How setting fractional values like ",e.jsx("code",{className:"text-sky-300",children:"screen.setup(0.8, 0.8)"})," creates a responsive window that adapts to 1080p, 2K, and 4K displays automatically."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Use ",e.jsx("code",{className:"text-amber-300",children:"screen.setworldcoordinates(0, 0, 100, 100)"})," to map the screen into a percentage-based 0-100 coordinate grid!"]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-2xl p-5 border border-purple-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"🚀 Expert Mindset"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Every GUI framework—from desktop Tkinter and Qt to web HTML Canvas and mobile game engines—begins with ",e.jsx("strong",{children:"Viewport Configuration & World Space Mapping"}),". In Turtle, mastering ",e.jsx("code",{className:"text-purple-300 font-mono",children:"setup()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"screensize()"}),", and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"bgcolor()"})," provides the architectural mental model for responsive 2D coordinate spaces and camera viewports."]})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(p,{title:"Canvas Design & Window Customization FAQs",questions:m})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(u,{content:b,title:"Topic 4: Canvas Design & Window Setup Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic4_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(h,{note:"When we teach graphic design and game development at Coder & AccoTax in Barrackpore and Kolkata, the first habit I instill in students is: 'Never settle for default white canvas windows!' A customized window title, tailored resolution (800x600), and sleek dark background immediately transform a student assignment into a polished, professional software showcase."})})]})]})};export{A as default};
