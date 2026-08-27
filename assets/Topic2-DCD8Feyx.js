import{b as a,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as h}from"./TeacherSukantaHui-CyIG3xbg.js";import{P as l}from"./PythonFileLoader-hCi5osN-.js";import{F as p}from"./FAQTemplate-CkSqDH4B.js";import{P as m}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CIaKtAt4.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const u=[{question:"What is the default colormode in Python Turtle?",shortAnswer:"colormode(1.0) — where RGB values are floats from 0.0 to 1.0.",explanation:"By default, Turtle expects RGB tuples to contain floats within [0.0, 1.0].",hint:"Are RGB channels floats (0.0 to 1.0) or integers (0 to 255) by default?",level:"basic",codeExample:"t.color((0.5, 0.2, 0.8))  # Default float mode"},{question:"How do you enable standard 0-255 integer RGB mode in Turtle?",shortAnswer:"Call `screen.colormode(255)` or `turtle.colormode(255)`.",explanation:"Setting colormode(255) allows passing standard 8-bit integer RGB tuples like `(255, 128, 0)`.",hint:"What method changes the color representation scale?",level:"basic",codeExample:`screen = turtle.Screen()
screen.colormode(255)
t.color((255, 128, 0))`},{question:"What exception occurs if you pass `(255, 0, 0)` while colormode is 1.0?",shortAnswer:"TurtleGraphicsError: bad color sequence: (255, 0, 0).",explanation:"Because 255 exceeds the maximum allowed float value of 1.0, Turtle raises a runtime graphics error.",hint:"What happens when a value exceeds 1.0 in 1.0 mode?",level:"moderate",codeExample:`# Causes error without colormode(255):
t.color((255, 0, 0))`},{question:"Can you pass hexadecimal color codes like '#38bdf8' to Turtle?",shortAnswer:"Yes, 6-digit hex color strings are supported directly.",explanation:"Hex strings work seamlessly with pencolor(), fillcolor(), and screen.bgcolor().",hint:"Do web hex codes starting with '#' work in Turtle?",level:"basic",codeExample:`t.color('#38bdf8')
screen.bgcolor('#0f172a')`},{question:"What is the difference between `t.color('red')` and `t.pencolor('red')`?",shortAnswer:"`color()` sets both pen stroke and fill color; `pencolor()` sets only stroke color.",explanation:"pencolor modifies only the drawn line, while color() updates both stroke and interior fill.",hint:"Which method updates both stroke and fill simultaneously?",level:"basic",codeExample:`t.pencolor('red')  # Stroke only
t.color('red')     # Stroke AND Fill`},{question:"How do you set pencolor and fillcolor in a single line using color()?",shortAnswer:"Pass two arguments: `t.color(pencolor, fillcolor)`.",explanation:"`t.color('blue', 'yellow')` sets the pen stroke to blue and fill color to yellow.",hint:"How does color() accept two distinct color arguments?",level:"basic",codeExample:"t.color('#38bdf8', '#0284c7')"},{question:"What Python standard library module is used for generating smooth rainbow color gradients?",shortAnswer:"The `colorsys` module.",explanation:"`colorsys.hsv_to_rgb(h, s, v)` converts continuous Hue angles (0.0 to 1.0) into RGB color channels.",hint:"What built-in module converts between HSV and RGB color spaces?",level:"moderate",codeExample:`import colorsys
r, g, b = colorsys.hsv_to_rgb(0.5, 1.0, 1.0)`},{question:"What are named colors in Turtle?",shortAnswer:"Predefined Tkinter color strings like 'gold', 'coral', 'midnight blue', 'dark turquoise'.",explanation:"Tkinter includes hundreds of human-readable X11/web color names.",hint:"What standard color names can you type as plain text strings?",level:"basic",codeExample:"t.color('forest green')"},{question:"How do you query the current pencolor and fillcolor of a Turtle?",shortAnswer:"Call `t.pencolor()` and `t.fillcolor()` with no arguments.",explanation:"Calling color methods without arguments returns their current string or RGB tuple value.",hint:"How do getter methods work in Turtle?",level:"moderate",codeExample:`pen_c = t.pencolor()
fill_c = t.fillcolor()`},{question:"How do you set the background color of the canvas window?",shortAnswer:"Using `screen.bgcolor(color)` or `turtle.bgcolor(color)`.",explanation:"bgcolor() modifies the entire canvas background color using names, hex, or RGB tuples.",hint:"Which method sets the background color?",level:"basic",codeExample:"screen.bgcolor('#020617')"},{question:"What happens to the cursor shape color when you change fillcolor?",shortAnswer:"The interior body of the turtle cursor updates to match the new fillcolor.",explanation:"The cursor icon reflects the active pencolor (outline) and fillcolor (body).",hint:"Does the turtle cursor icon display the active fill color?",level:"moderate",codeExample:"t.fillcolor('yellow')  # Turtle body turns yellow"},{question:"How do you convert hex '#FFFFFF' to integer RGB (255, 255, 255) in Python?",shortAnswer:"Using `tuple(int(hex_str[i:i+2], 16) for i in (1, 3, 5))`.",explanation:"Slice 2 hex characters at a time and parse in base 16.",hint:"How do you parse hex strings in base 16?",level:"advanced",codeExample:`hex_c = '#38bdf8'
rgb = tuple(int(hex_c[i:i+2], 16) for i in (1, 3, 5))`},{question:"Can colormode be set to custom numbers like colormode(100)?",shortAnswer:"No, Turtle only officially supports colormode(1.0) and colormode(255).",explanation:"Passing values other than 1.0 or 255 can cause internal Tkinter color mapping errors.",hint:"What are the only two valid colormode scale targets?",level:"moderate",codeExample:`screen.colormode(255) # Valid
screen.colormode(1.0) # Valid`},{question:"How do you create a linear color gradient between two colors across N steps?",shortAnswer:"Interpolate RGB channels linearly using `r = r1 + (r2 - r1) * (i / N)`.",explanation:"Linear interpolation (lerp) smoothly transitions red, green, and blue channels step by step.",hint:"What mathematical formula blends between two numbers?",level:"advanced",codeExample:`# Linear interpolation (lerp)
r = int(r1 + (r2 - r1) * (i / n))`},{question:"Why are hex colors preferred in modern web and UI styling with Turtle?",shortAnswer:"Because they allow exact 24-bit color fidelity matching CSS tokens like Tailwind color palettes.",explanation:"Hex codes give exact cross-platform color matching without ambiguity.",hint:"Why do web designers use hex codes instead of color names?",level:"basic",codeExample:"t.color('#38bdf8')  # Tailwind Sky 400"},{question:"What is the result of `t.color()` with no arguments?",shortAnswer:"A tuple containing `(pencolor, fillcolor)`.",explanation:"Calling `t.color()` returns a 2-element tuple of current stroke and fill colors.",hint:"What does calling color() as a getter return?",level:"moderate",codeExample:"p_col, f_col = t.color()"},{question:"Does changing bgcolor() erase drawings on the canvas?",shortAnswer:"No, bgcolor() only recolors the background canvas without affecting drawn vector lines.",explanation:"Drawn paths remain intact on top of the new background color.",hint:"Does changing canvas background delete your drawing?",level:"basic",codeExample:"screen.bgcolor('black')  # Drawings remain intact"},{question:"How do you cycle through a list of 5 brand colors in a drawing loop?",shortAnswer:"Use modulo indexing: `color_list[i % len(color_list)]`.",explanation:"Modulo indexing prevents IndexError and creates recurring cyclic color patterns.",hint:"What operator wraps list indices within bounds?",level:"basic",codeExample:`palette = ['#38bdf8', '#34d399', '#fbbf24', '#f43f5e', '#a78bfa']
t.color(palette[i % len(palette)])`},{question:"What is alpha transparency in Python Turtle?",shortAnswer:"Tkinter canvas does not natively support RGBA alpha transparency channels.",explanation:"Colors in standard Turtle are strictly opaque RGB (no 4th alpha channel in standard Tkinter canvas).",hint:"Does standard Turtle canvas support transparent RGBA colors?",level:"expert",codeExample:"# Turtle colors must be RGB (no alpha channel)"},{question:"How do you generate a pastel color palette programmatically?",shortAnswer:"In HSV space, use high Value (0.9-1.0) and moderate Saturation (0.3-0.5).",explanation:"Reducing saturation produces soft pastel shades while preserving hue variety.",hint:"How does lowering saturation affect color vibrance?",level:"advanced",codeExample:"r, g, b = colorsys.hsv_to_rgb(hue, 0.4, 0.95)"},{question:"Can multiple turtles draw with different colors simultaneously?",shortAnswer:"Yes, each Turtle instance maintains its own independent pencolor and fillcolor.",explanation:"Object-oriented Turtle encapsulation allows distinct colors per artist instance.",hint:"Are color properties object-scoped or global?",level:"basic",codeExample:"t1.color('red'); t2.color('blue')"},{question:"What happens if you supply an invalid color name like 'super_blue'?",shortAnswer:"Turtle raises `TurtleGraphicsError: bad color string: super_blue`.",explanation:"Tkinter validates color names against its internal registry.",hint:"What happens when an unrecognized color name is passed?",level:"basic",codeExample:"# Raises TurtleGraphicsError"},{question:"How do you calculate complementary colors in Python?",shortAnswer:"Shift hue by 0.5 (180 degrees) in HSV space: `comp_hue = (hue + 0.5) % 1.0`.",explanation:"Complementary colors sit exactly opposite each other on the 360-degree color wheel.",hint:"How far apart are complementary colors on the color wheel?",level:"expert",codeExample:"comp_hue = (hue + 0.5) % 1.0"},{question:"What is the difference between `screen.colormode()` and `turtle.colormode()`?",shortAnswer:"They both access the same global Screen singleton colormode.",explanation:"colormode is a Screen-level setting shared across all turtle instances on that canvas.",hint:"Is colormode per-turtle or per-screen?",level:"moderate",codeExample:"turtle.colormode(255) # Same as screen.colormode(255)"},{question:"How do you draw a shaded sphere illusion with color rings?",shortAnswer:"Draw concentric filled circles transitioning from dark outline colors to bright highlight colors.",explanation:"Modulating brightness/value creates depth and lighting gradient illusions.",hint:"How do 2D graphics simulate spherical lighting?",level:"advanced",codeExample:"# Concentric gradient circles"},{question:"What is the return type of `t.pencolor()` when in `colormode(255)`?",shortAnswer:"An integer RGB tuple `(r, g, b)` if set via RGB, or string if set via string.",explanation:"Returns the representation used when setting, or converted RGB tuple.",hint:"Does it return a string or tuple?",level:"moderate",codeExample:"print(t.pencolor())"},{question:"Why should `colormode(255)` be set at the very beginning of a script?",shortAnswer:"To avoid 'bad color sequence' errors before any RGB color assignments run.",explanation:"Setting colormode early ensures all subsequent function calls have the correct color scale.",hint:"Where in the setup phase should colormode be configured?",level:"basic",codeExample:`# Setup phase:
screen = turtle.Screen()
screen.colormode(255)`},{question:"How do you create random vibrant colors in Turtle?",shortAnswer:"Generate random RGB integers: `(random.randint(50, 255), random.randint(50, 255), random.randint(50, 255))`.",explanation:"Keeping channel minimums above 50 ensures bright, vibrant tones on dark backgrounds.",hint:"How does random integer generation produce RGB colors?",level:"moderate",codeExample:`import random
t.color(random.randint(50, 255), random.randint(50, 255), random.randint(50, 255))`},{question:"What is the role of `turtle.dot(size, color)` in color palettes?",shortAnswer:"It stamps a solid circular swatch of the specified color without changing active pen color.",explanation:"dot() accepts an optional color argument for quick palette swatches.",hint:"Can dot() use an independent color parameter?",level:"moderate",codeExample:"t.dot(30, '#38bdf8') # Stamps sky-blue dot"},{question:"What is the summary rule for Turtle color management?",shortAnswer:"Use hex codes (`#RRGGBB`) for exact design fidelity, and `colormode(255)` with `colorsys` for algorithmic gradients.",explanation:"This combination provides complete artistic control and mathematically sound gradients.",hint:"What two color approaches give maximum design and algorithmic power?",level:"basic",codeExample:"# Hex for UI + colormode(255) for HSV gradients"}],x=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 2 - Color systems (RGB 0-255 vs 0-1, hex codes, named colors)\r
File: color_systems_rgb_hex_named.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates all 4 primary color specification modes in Python Turtle:\r
1. Named string colors ('coral', 'midnight blue', 'gold')\r
2. Hexadecimal string codes ('#38bdf8', '#34d399')\r
3. Normalized RGB float tuples (0.0 to 1.0) with colormode(1.0)\r
4. Integer RGB tuples (0 to 255) with colormode(255)\r
"""\r
\r
import turtle\r
\r
def demonstrate_color_systems():\r
    screen = turtle.Screen()\r
    screen.title("Color Systems in Python Turtle - Coder & AccoTax")\r
    screen.bgcolor("#020617")  # Hex background\r
    screen.setup(width=750, height=600)\r
\r
    t = turtle.Turtle()\r
    t.speed(5)\r
    t.pensize(5)\r
\r
    # 1. Named String Colors (Tkinter Standard Names)\r
    t.penup()\r
    t.goto(-300, 150)\r
    t.pendown()\r
    t.color("coral")\r
    t.forward(120)\r
    t.penup(); t.forward(15)\r
    t.write("1. Named: 'coral'", font=("Arial", 10, "bold"))\r
\r
    # 2. Hexadecimal Color Codes\r
    t.penup()\r
    t.goto(-300, 70)\r
    t.pendown()\r
    t.color("#38bdf8")  # Sky Blue Hex\r
    t.forward(120)\r
    t.penup(); t.forward(15)\r
    t.write("2. Hex: '#38bdf8'", font=("Arial", 10, "bold"))\r
\r
    # 3. Normalized RGB Float Mode (0.0 to 1.0) - Default Mode\r
    screen.colormode(1.0)\r
    t.penup()\r
    t.goto(-300, -10)\r
    t.pendown()\r
    t.color((0.2, 0.8, 0.6))  # Teal RGB float\r
    t.forward(120)\r
    t.penup(); t.forward(15)\r
    t.write("3. Float RGB: (0.2, 0.8, 0.6)", font=("Arial", 10, "bold"))\r
\r
    # 4. Standard 8-bit Integer RGB Mode (0 to 255)\r
    screen.colormode(255)\r
    t.penup()\r
    t.goto(-300, -90)\r
    t.pendown()\r
    t.color((251, 191, 36))  # Amber RGB (251, 191, 36)\r
    t.forward(120)\r
    t.penup(); t.forward(15)\r
    t.write("4. Int RGB: (251, 191, 36) [colormode(255)]", font=("Arial", 10, "bold"))\r
\r
    t.hideturtle()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    demonstrate_color_systems()\r
`,g=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 2 - Color systems (RGB 0-255 vs 0-1, hex codes, named colors)\r
File: hsv_rainbow_wheel.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates dynamic rainbow color cycling using colorsys.hsv_to_rgb()\r
and screen.colormode(255) for smooth hue modulation.\r
"""\r
\r
import turtle\r
import colorsys\r
\r
def draw_rainbow_rosette():\r
    screen = turtle.Screen()\r
    screen.title("HSV Rainbow Hue Cycle - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.colormode(255)  # Enable 0-255 integer RGB\r
\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    total_petals = 72\r
    for i in range(total_petals):\r
        # Calculate Hue from 0.0 to 1.0\r
        hue = i / total_petals\r
        # Convert HSV (Hue, Saturation 1.0, Value 1.0) to RGB floats\r
        r_f, g_f, b_f = colorsys.hsv_to_rgb(hue, 1.0, 1.0)\r
        # Convert to 0-255 integers\r
        r, g, b = int(r_f * 255), int(g_f * 255), int(b_f * 255)\r
\r
        t.color((r, g, b))\r
        t.circle(120)\r
        t.left(360 / total_petals)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_rainbow_rosette()\r
`,b=`"""\r
Module: 005_002_turtle-design\r
Topic: Topic 2 - Color systems (RGB 0-255 vs 0-1, hex codes, named colors)\r
File: dual_pencolor_fillcolor.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates decoupling stroke color (pencolor) and interior fill color (fillcolor),\r
including the dual-argument color(pen, fill) signature.\r
"""\r
\r
import turtle\r
\r
def draw_styled_badges():\r
    screen = turtle.Screen()\r
    screen.title("Dual Color System: Pencolor vs Fillcolor - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
\r
    t = turtle.Turtle()\r
    t.speed(3)\r
    t.pensize(4)\r
\r
    # Shape 1: Direct pencolor() and fillcolor() calls\r
    t.penup(); t.goto(-180, 0); t.pendown()\r
    t.pencolor("#38bdf8")  # Sky Blue Stroke\r
    t.fillcolor("#0369a1")  # Deep Blue Fill\r
\r
    t.begin_fill()\r
    for _ in range(4):\r
        t.forward(100)\r
        t.left(90)\r
    t.end_fill()\r
\r
    # Shape 2: Dual color(pen, fill) signature\r
    t.penup(); t.goto(80, 0); t.pendown()\r
    t.color("#f43f5e", "#ffe4e6")  # Rose stroke, soft blush fill\r
\r
    t.begin_fill()\r
    for _ in range(4):\r
        t.forward(100)\r
        t.left(90)\r
    t.end_fill()\r
\r
    t.hideturtle()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_styled_badges()\r
`,f=`================================================================================\r
  TOPIC 2: COLOR SYSTEMS (RGB 0-255 VS 0-1, HEX CODES, NAMED COLORS)\r
  MODULE: 005_002 - Turtle Design & Aesthetic Customization\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. THE 4 WAYS TO SPECIFY COLORS IN PYTHON TURTLE\r
--------------------------------------------------------------------------------\r
1. Standard Tkinter Color Names:\r
   - Case-insensitive string names (e.g. "red", "navy", "dark orange", "gold").\r
   - Simple and immediate for beginner sketches.\r
\r
2. Hexadecimal String Codes:\r
   - 6-digit hex format: \`"#RRGGBB"\` (e.g. \`"#38bdf8"\`, \`"#34d399"\`).\r
   - Ideal for matching web palettes, Tailwind CSS tokens, and branding.\r
\r
3. Normalized RGB Float Mode (0.0 to 1.0):\r
   - Default Turtle mode (\`screen.colormode(1.0)\`).\r
   - Triple tuple of floats: \`(0.2, 0.6, 1.0)\`.\r
\r
4. 8-Bit Integer RGB Mode (0 to 255):\r
   - Requires setting \`screen.colormode(255)\`.\r
   - Standard 24-bit color channel values: \`(255, 128, 0)\`.\r
   - Required when integrating with external libraries or \`colorsys\` conversions.\r
\r
2. PENCOLOR VS FILLCOLOR VS COLOR()\r
--------------------------------------------------------------------------------\r
- \`t.pencolor(c)\`: Sets the stroke outline color and cursor outline.\r
- \`t.fillcolor(c)\`: Sets the interior fill color and cursor body.\r
- \`t.color(c)\`: Sets BOTH pencolor and fillcolor to the same color.\r
- \`t.color(pen_c, fill_c)\`: Sets pencolor and fillcolor in one single call.\r
\r
3. DYNAMIC COLOR MODULATION WITH COLORSYS\r
--------------------------------------------------------------------------------\r
To generate smooth rainbow cycles:\r
1. Set \`screen.colormode(255)\`\r
2. Import Python's built-in \`colorsys\` module\r
3. Calculate hue (0.0 to 1.0)\r
4. Convert HSV to RGB: \`r, g, b = [int(x*255) for x in colorsys.hsv_to_rgb(hue, 1.0, 1.0)]\`\r
5. Apply: \`t.color((r, g, b))\`\r
\r
4. CRITICAL PITFALL\r
--------------------------------------------------------------------------------\r
Passing integer RGB values like \`(255, 0, 0)\` without calling \`screen.colormode(255)\`\r
raises \`TurtleGraphicsError: bad color sequence: (255, 0, 0)\`! Always set\r
colormode(255) first.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================\r
`,y=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes colorRotate {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}
`,C=()=>{const[t,i]=a.useState("hex"),[o,c]=a.useState("#38bdf8"),d=[{name:"screen.colormode(cmode) / turtle.colormode()",returnType:"1.0 / 255 / None",purpose:"Configures RGB scale mode: 1.0 (float range 0.0-1.0) or 255 (integer range 0-255).",usage:"screen.colormode(255)"},{name:"turtle.pencolor(color)",returnType:"str / tuple / None",purpose:"Sets or queries the line drawing stroke color and cursor outline.",usage:"t.pencolor('#38bdf8')"},{name:"turtle.fillcolor(color)",returnType:"str / tuple / None",purpose:"Sets or queries the interior shape fill color and cursor body.",usage:"t.fillcolor('#0369a1')"},{name:"turtle.color(pen, fill=None)",returnType:"tuple / None",purpose:"Convenience method that sets both pencolor and fillcolor simultaneously.",usage:"t.color('coral', 'gold')"}],n=[{name:"Sky Blue",hex:"#38bdf8",rgbInt:"(56, 189, 248)",rgbFloat:"(0.22, 0.74, 0.97)"},{name:"Emerald",hex:"#34d399",rgbInt:"(52, 211, 153)",rgbFloat:"(0.20, 0.83, 0.60)"},{name:"Amber Gold",hex:"#fbbf24",rgbInt:"(251, 191, 36)",rgbFloat:"(0.98, 0.75, 0.14)"},{name:"Rose Pink",hex:"#f43f5e",rgbInt:"(244, 63, 94)",rgbFloat:"(0.96, 0.25, 0.37)"},{name:"Purple",hex:"#a78bfa",rgbInt:"(167, 139, 250)",rgbFloat:"(0.65, 0.55, 0.98)"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:y}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_002 · Turtle Design & Aesthetic Customization · Topic 2"}),e.jsxs("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent",children:["Color Systems: ",e.jsx("span",{className:"font-mono",children:"RGB (0-255 vs 1.0)"}),", Hex & Named Colors"]}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Unlock the full spectrum of digital color. Learn how to toggle 8-bit RGB modes with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"colormode(255)"}),", apply precision hex codes, decouple stroke and fill colors, and generate smooth HSV rainbow gradients."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🌈 RGB 0-255 vs 0.0-1.0"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎨 Hex & Named Tokens"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🔄 HSV Rainbow Gradients"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🎨"})," Interactive Color System Inspector"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Click any swatch to inspect its representation across all four Python Turtle color modes."})]}),e.jsx("div",{className:"flex items-center gap-2",children:["hex","rgb255","rgbFloat"].map(r=>e.jsx("button",{onClick:()=>i(r),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${t===r?"bg-emerald-500 text-white shadow-lg shadow-emerald-500/25":"bg-gray-800 text-slate-400 hover:bg-gray-700 border border-slate-700"}`,children:r==="hex"?"Hex Codes":r==="rgb255"?"colormode(255)":"colormode(1.0)"},r))})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-3",children:n.map(r=>e.jsxs("button",{onClick:()=>c(r.hex),className:`p-3 rounded-xl border text-left transition cursor-pointer ${o===r.hex?"bg-slate-900 border-sky-400 ring-2 ring-sky-400/20":"bg-gray-900/60 border-slate-800 hover:border-slate-700"}`,children:[e.jsx("div",{className:"w-full h-8 rounded-lg mb-2 shadow-inner",style:{backgroundColor:r.hex}}),e.jsx("div",{className:"font-bold text-xs text-slate-200",children:r.name}),e.jsx("div",{className:"font-mono text-[10px] text-slate-400 truncate",children:t==="hex"?r.hex:t==="rgb255"?r.rgbInt:r.rgbFloat})]},r.hex))}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 700 160",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-3xl h-auto",children:[e.jsx("rect",{x:"10",y:"10",width:"680",height:"140",rx:"12",fill:"#020617",stroke:"#1e293b",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(140, 80)",children:[e.jsx("polygon",{points:"0,-35 10,-10 35,-10 15,5 22,30 0,15 -22,30 -15,5 -35,-10 -10,-10",fill:o,stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("text",{x:"0",y:"50",fill:o,fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"Active Fill Color"})]}),e.jsx("rect",{x:"280",y:"30",width:"370",height:"100",rx:"8",fill:"#090d16",stroke:"#334155"}),e.jsx("text",{x:"300",y:"60",fill:"#38bdf8",fontSize:"11","font-family":"monospace",children:"# Python Turtle Command:"}),e.jsx("text",{x:"300",y:"85",fill:"#34d399",fontSize:"12","font-family":"monospace",fontWeight:"bold",children:t==="hex"?`t.color("${o}")`:t==="rgb255"?`screen.colormode(255)
t.color(${n.find(r=>r.hex===o)?.rgbInt})`:`screen.colormode(1.0)
t.color(${n.find(r=>r.hex===o)?.rgbFloat})`})]})})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Color System Method Prototypes"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Method Name"}),e.jsx("th",{className:"py-3 px-4",children:"Return Type"}),e.jsx("th",{className:"py-3 px-4",children:"Functionality"}),e.jsx("th",{className:"py-3 px-4",children:"Code Pattern"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:d.map((r,s)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-emerald-300 font-bold text-xs",children:r.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-sky-400 text-xs",children:r.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:r.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:r.usage})]},s))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Color Management Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(l,{fileModule:x,title:"color_systems_rgb_hex_named.py",highlightLines:[19,27,33,40]}),e.jsx(l,{fileModule:g,title:"hsv_rainbow_wheel.py",highlightLines:[14,21,23,27]}),e.jsx(l,{fileModule:b,title:"dual_pencolor_fillcolor.py",highlightLines:[16,17,26]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," Jadavpur Tech Lab: Solar Flare Spectrum Wheel"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Student Mamata models astronomical solar flares. By looping through 360 degrees and calculating HSV hue transitions using ",e.jsx("code",{className:"text-emerald-300",children:"colorsys.hsv_to_rgb()"}),", she renders an organic rainbow corona with seamless spectral transitions."]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-sky-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🎨"})," Kolkata Design Studio: Corporate Brand Palette"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Debangshu builds vector logo assets for a Kolkata startup. Using exact hex strings like ",e.jsx("code",{className:"text-sky-300 font-mono",children:'"#38bdf8"'})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:'"#059669"'}),", he ensures that the Turtle drawing matches the brand's official corporate identity guidelines."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Color System Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Passing (255,0,0) in 1.0 Mode"}),e.jsxs("p",{className:"text-slate-400",children:["Default colormode is 1.0. Passing integers without calling ",e.jsx("code",{className:"text-amber-300",children:"screen.colormode(255)"})," raises a ",e.jsx("code",{className:"text-rose-300",children:"TurtleGraphicsError"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Missing '#' in Hex Codes"}),e.jsxs("p",{className:"text-slate-400",children:["Passing ",e.jsx("code",{className:"text-rose-300",children:'"38bdf8"'})," instead of ",e.jsx("code",{className:"text-emerald-300",children:'"#38bdf8"'})," causes Tkinter to treat it as an invalid color name."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Assuming Alpha Transparency Exists"}),e.jsx("p",{className:"text-slate-400",children:"Standard Tkinter canvas does not support 4-channel RGBA transparent colors; Turtle colors must be opaque."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Leaky Color State Across Functions"}),e.jsx("p",{className:"text-slate-400",children:"Changing pencolor inside a shape function without restoring it recolors all subsequent artwork unexpectedly."})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I know how to enable 0-255 RGB mode using screen.colormode(255)","I can use 6-digit hex color strings like '#38bdf8' for exact palette matching","I know the difference between t.pencolor() (stroke) and t.fillcolor() (interior)","I can set both stroke and fill colors in one line using t.color(pen, fill)","I can convert HSV color angles into RGB rainbow gradients with colorsys","I understand why passing (255, 0, 0) fails without calling colormode(255) first"].map((r,s)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:r})]},s))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," Why web design tokens (Hex/RGB) are superior to simple color names like 'blue' or 'green' when crafting modern interfaces."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How setting dark canvas background ",e.jsx("code",{className:"text-sky-300",children:'screen.bgcolor("#020617")'})," makes neon hex strokes glow with high contrast."]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Use ",e.jsx("code",{className:"text-amber-300",children:"colorsys.hsv_to_rgb(hue, 0.4, 0.95)"})," to produce soft, aesthetic pastel color wheels."]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-2xl p-5 border border-purple-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"🚀 Expert Mindset"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Color is the most emotionally powerful attribute in computer graphics. Moving beyond hardcoded primary colors into ",e.jsx("strong",{children:"parametric color spaces (HSV/HSL)"})," allows you to write algorithmic shaders, procedural landscapes, and generative art that evolve dynamically across thousands of iterations."]})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(p,{title:"Turtle Color Systems FAQs",questions:u})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(m,{content:f,title:"Topic 2: Turtle Color Systems Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic2_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(h,{note:"During our classes in Barrackpore and Kolkata, the 'bad color sequence' error is the single most common stumbling block when students try using RGB values from Photoshop or Figma. I always teach students to write 'screen.colormode(255)' at line 2 of every creative script! Once colormode(255) is enabled, students can harness the infinite mathematical beauty of colorsys HSV loops."})})]})]})};export{C as default};
