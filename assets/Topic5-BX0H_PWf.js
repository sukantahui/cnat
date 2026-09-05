import{b as l,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as m}from"./TeacherSukantaHui-DerPxfxp.js";import{P as i}from"./PythonFileLoader-hCi5osN-.js";import{F as x}from"./FAQTemplate-BHhlgA96.js";import{P as g}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-CH1iX9C8.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const f=[{question:"What does the HSV color model stand for?",shortAnswer:"Hue, Saturation, and Value (Brightness).",explanation:"HSV represents color intuitively based on color wavelength (Hue), purity (Saturation), and luminance (Value).",hint:"What do the letters H, S, and V represent?",level:"basic",codeExample:"# Hue (0.0-1.0), Saturation (0.0-1.0), Value (0.0-1.0)"},{question:"Which Python standard library module converts HSV to RGB?",shortAnswer:"The `colorsys` module with `colorsys.hsv_to_rgb(h, s, v)`.",explanation:"`colorsys` is built into Python and provides conversion between RGB, YIQ, HLS, and HSV color systems.",hint:"What standard library module handles color conversions?",level:"basic",codeExample:`import colorsys
r, g, b = colorsys.hsv_to_rgb(0.5, 1.0, 1.0)`},{question:"What range of values does `colorsys.hsv_to_rgb(h, s, v)` accept and return?",shortAnswer:"Floats between 0.0 and 1.0 for all input and output channels.",explanation:"This matches Python Turtle's default `colormode(1.0)` perfectly.",hint:"Do colorsys functions use 0-255 integers or 0.0-1.0 floats?",level:"basic",codeExample:"# Accepts [0.0, 1.0] floats → Returns (r, g, b) in [0.0, 1.0]"},{question:"How do you calculate a continuous hue transition across a loop of N steps?",shortAnswer:"Set `hue = i / total_steps` where `i` is the loop variable.",explanation:"As `i` goes from 0 to `total_steps - 1`, `hue` sweeps smoothly from 0.0 (Red) across the spectrum back to 1.0 (Red).",hint:"How do you normalize loop index to [0.0, 1.0]?",level:"basic",codeExample:`for i in range(300):
    hue = i / 300
    r, g, b = colorsys.hsv_to_rgb(hue, 1.0, 1.0)`},{question:"What color is Hue 0.0, Hue 0.33, and Hue 0.67 in the HSV spectrum?",shortAnswer:"Hue 0.0 is Pure Red, Hue 0.33 is Pure Green, and Hue 0.67 is Pure Blue.",explanation:"The 3 primary colors are spaced equally 120 degrees (1/3 of circle) apart.",hint:"What are the primary colors at 0, 1/3, and 2/3 of the wheel?",level:"basic",codeExample:"# 0.0 = Red | 0.33 = Green | 0.67 = Blue"},{question:"What is Linear Color Interpolation (Lerp)?",shortAnswer:"A mathematical formula `C = C1 + (C2 - C1) * t` that smoothly blends two colors C1 and C2 as parameter `t` moves from 0.0 to 1.0.",explanation:"Lerp is the standard method for linear two-color and multi-color gradients.",hint:"What is the formula for linear interpolation between two endpoints?",level:"moderate",codeExample:"r = r1 + (r2 - r1) * t"},{question:"Why does Python Turtle default colormode work seamlessly with `colorsys.hsv_to_rgb()`?",shortAnswer:"Because both use float values in the range [0.0, 1.0] by default.",explanation:"If you invoke `colormode(255)`, you must multiply RGB floats by 255 before passing to `t.color()`.",hint:"Why don't you need to multiply by 255 when using default colormode?",level:"moderate",codeExample:"t.color(colorsys.hsv_to_rgb(h, s, v))"},{question:"How do you create multiple repeating rainbow cycles across a single loop?",shortAnswer:"Multiply the index by a frequency multiplier and apply modulo: `hue = (i * frequency) % 1.0`.",explanation:"Modulo 1.0 wraps values exceeding 1.0 back to the start of the spectrum.",hint:"What operator wraps floating-point values at 1.0?",level:"moderate",codeExample:"hue = (i * 0.02) % 1.0"},{question:"How do you create a pastel color palette using HSV?",shortAnswer:"Lower the saturation `s` to 0.3 - 0.5 while keeping brightness `v` high at 1.0.",explanation:"Lower saturation mixes white into the pure chromatic hue, producing soft pastels.",hint:"Does lowering saturation or value create pastel tones?",level:"basic",codeExample:"r, g, b = colorsys.hsv_to_rgb(hue, 0.4, 1.0)"},{question:"How do you create neon or cyberpunk palettes using HSV?",shortAnswer:"Keep both saturation `s = 1.0` and brightness `v = 1.0` at maximum, and restrict hues to cyan (0.5), magenta (0.83), and yellow (0.16).",explanation:"High saturation and selected complementary hues produce vivid neon palettes.",hint:"What saturation and value settings give maximum neon vibrancy?",level:"moderate",codeExample:"palette = [0.16, 0.5, 0.83]"},{question:"How do you draw a 360-degree circular color wheel in Python Turtle?",shortAnswer:"Loop 360 times: `hue = deg / 360`, set color `(r, g, b)`, draw radial spoke `forward(radius); backward(radius); left(1)`.",explanation:"Each 1-degree radial spoke maps to its exact corresponding hue angle.",hint:"How do you map 360 degrees to 360 hues?",level:"moderate",codeExample:`for deg in range(360):
    t.color(colorsys.hsv_to_rgb(deg/360, 1.0, 1.0))
    t.forward(100); t.backward(100); t.left(1)`},{question:"What is the difference between linear RGB interpolation and perceptual LAB/HSV interpolation?",shortAnswer:"Linear RGB interpolation can pass through a muddy gray/brown midpoint; HSV/LAB maintains constant saturation and vibrancy.",explanation:"Perceptual color models interpolate along the hue circle rather than cutting through the color cube interior.",hint:"Why does interpolating hue around a circle look more vibrant than RGB lerp?",level:"advanced",codeExample:"# HSV hue rotation preserves vibrancy"},{question:"How do you create a fading trail effect behind the turtle cursor?",shortAnswer:"Reduce line brightness `v` or pen width `pensize` in reverse chronological order.",explanation:"Modulating value or alpha creates glowing motion trails.",hint:"How does reducing value create a fading effect?",level:"advanced",codeExample:"v = max(0.0, 1.0 - (age * 0.1))"},{question:"How do you draw a rainbow spiral vortex in Turtle?",shortAnswer:"In a 300-step spiral loop, compute `hue = i / 300`, set `t.color(colorsys.hsv_to_rgb(hue, 1, 1))`, and turn `t.left(59)`.",explanation:"Combining expanding spiral steps with continuous hue shifts renders rainbow vortices.",hint:"How do you combine hsv_to_rgb with spiral loops?",level:"basic",codeExample:`for i in range(300):
    t.color(colorsys.hsv_to_rgb(i/300, 1, 1)); t.forward(i*0.5); t.left(59)`},{question:"What happens if Hue exceeds 1.0 without modulo wrapping?",shortAnswer:"The colors wrap automatically in `colorsys.hsv_to_rgb()`, but explicit modulo `% 1.0` ensures standards compliance.",explanation:"`colorsys` internally normalizes `h % 1.0` in most implementations.",hint:"Does colorsys handle hue wrapping internally?",level:"basic",codeExample:"hue = hue % 1.0"},{question:"How do you generate a dual-color sunset gradient (orange to deep indigo)?",shortAnswer:"Interpolate `t` from 0.0 to 1.0 between `(255, 120, 0)` and `(30, 10, 80)` using linear interpolation.",explanation:"Vertical bar rendering with interpolated RGB values produces sky gradients.",hint:"How do vertical bars create smooth sky gradients?",level:"moderate",codeExample:"# Sunset gradient: orange → purple → indigo"},{question:"How do you apply a radial color gradient to a filled regular polygon?",shortAnswer:"Draw concentric shrinking polygons from outside in, stepping the fill color from dark to bright.",explanation:"Layered concentric polygons create pseudo-radial gradients in vector graphics.",hint:"How do shrinking polygons layer gradient fills?",level:"advanced",codeExample:`for r in range(100, 0, -5):
    t.fillcolor(get_color(r)); polygon(6, r)`},{question:"What is gamma correction in gradient rendering?",shortAnswer:"Applying a non-linear power curve `(color ** gamma)` to match human eye non-linear light perception.",explanation:"Standard linear gradients appear dark in the middle without gamma correction (gamma = 2.2).",hint:"Why do linear gradients appear slightly dark in the midpoint?",level:"expert",codeExample:"corrected = linear_val ** (1.0 / 2.2)"},{question:"How do you oscillate colors back and forth between two hues using sine waves?",shortAnswer:"Use `hue = center_hue + amp * math.sin(i * freq)`.",explanation:"Trigonometric modulation cycles smoothly between two target color endpoints.",hint:"How does math.sin create smooth color bouncing?",level:"moderate",codeExample:"hue = 0.5 + 0.3 * math.sin(i * 0.05)"},{question:"How do you draw a fire simulation gradient (black → red → orange → yellow → white)?",shortAnswer:"Define keyframe color stops `[(0.0, black), (0.25, red), (0.5, orange), (0.75, yellow), (1.0, white)]` and piecewise lerp between them.",explanation:"Multi-stop color ramp interpolation generates thermal and fire palettes.",hint:"What color sequence represents blackbody thermal radiation?",level:"advanced",codeExample:"# Multi-stop color gradient ramp"},{question:"Why is `screen.tracer(0)` required when drawing 100+ bar gradient meshes?",shortAnswer:"Drawing 100+ filled bars with individual color changes creates hundreds of canvas draw calls that cause lag without double-buffering.",explanation:"`tracer(0)` flushes all 100 bars in a single atomic buffer update.",hint:"How do you eliminate rendering stutter in multi-bar gradient meshes?",level:"basic",codeExample:"screen.tracer(0); draw_gradient(); screen.update()"},{question:"How do you create an iridescent holographic color effect in Turtle?",shortAnswer:"Modulate both Hue and Saturation rapidly with high-frequency sine waves: `h = (i*0.05)%1.0`, `s = 0.5 + 0.5*sin(i*0.1)`.",explanation:"Coupled phase-shifted oscillations simulate thin-film light interference.",hint:"How does varying hue and saturation simulate iridescence?",level:"expert",codeExample:"# Thin-film holographic modulation"},{question:"What is HSL and how does it differ from HSV in Python?",shortAnswer:"HSL stands for Lightness (pure white at 1.0), whereas HSV uses Value (pure color at V=1.0). Python provides `colorsys.hls_to_rgb()` for HSL.",explanation:"In HSV, maximum brightness (V=1.0, S=1.0) is a fully saturated pure color; in HSL, maximum lightness (L=1.0) is pure white.",hint:"Does HSL or HSV produce pure white when luminance is 1.0?",level:"advanced",codeExample:"colorsys.hls_to_rgb(h, l, s)"},{question:"How do you create an animated color-shifting mandala in Turtle?",shortAnswer:"In an animation loop, add a `frame_offset` to hue: `hue = (spoke / total + frame_offset) % 1.0` and redraw with `tracer(0)`.",explanation:"Incrementing `frame_offset` causes the colors to rotate around the mandala continuously.",hint:"How does adding a time offset rotate colors around a mandala?",level:"advanced",codeExample:"hue = (i / count + frame * 0.01) % 1.0"},{question:"How do you convert hex strings like `#38bdf8` to RGB floats for `t.color()`?",shortAnswer:"Slice the string into 2-character hex pairs, parse with `int(hex, 16)`, and divide by 255.0.",explanation:"Converts standard web hex colors into Python 0.0-1.0 floats.",hint:"How do you parse hex strings into RGB floats in Python?",level:"moderate",codeExample:"r, g, b = [int(hex_str[i:i+2], 16)/255.0 for i in (1, 3, 5)]"},{question:"What is a monochromatic color scheme in algorithmic graphics?",shortAnswer:"A palette created by locking Hue constant while varying Saturation and Value across loop steps.",explanation:"Varying lightness of a single base hue produces elegant, harmonious monochrome graphics.",hint:"How do you generate shades and tints of a single base color?",level:"basic",codeExample:"r, g, b = colorsys.hsv_to_rgb(0.6, s, v)"},{question:"What is a complementary color scheme in HSV?",shortAnswer:"Two colors whose hues are exactly 180 degrees (0.5 in normalized float) apart on the color wheel.",explanation:"Complementary colors (e.g. Cyan 0.5 and Orange 0.0) offer maximum visual contrast.",hint:"What is the hue distance between complementary colors?",level:"basic",codeExample:"comp_hue = (base_hue + 0.5) % 1.0"},{question:"What is a triadic color palette in HSV?",shortAnswer:"Three colors spaced evenly 120 degrees (1/3 or 0.333) apart on the hue circle.",explanation:"Triadic palettes (e.g. Red, Green, Blue or Orange, Purple, Teal) provide balanced harmony.",hint:"What fraction of the circle separates triadic colors?",level:"moderate",codeExample:"triad = [(base + i/3.0) % 1.0 for i in range(3)]"},{question:"Why should `math.sin` arguments be kept in radians when generating wave gradients?",shortAnswer:"Python's `math.sin()` expects radians; providing unbounded degree values produces erratic oscillations.",explanation:"Scaling radians smoothly with step increments guarantees clean periodic waveforms.",hint:"What unit does math.sin use in Python?",level:"basic",codeExample:"rad = (i / total) * 2 * math.pi"},{question:"What is the summary rule for mastering color gradients in Turtle Graphics?",shortAnswer:"Use `colorsys.hsv_to_rgb(hue, sat, val)` with normalized loop progress `(i / total_steps)` to generate smooth, continuous, and vibrant procedural color transitions.",explanation:"This simple formula transforms static line drawings into living, dynamic spectrum artworks.",hint:"What function and variable ratio produce procedural rainbow gradients?",level:"basic",codeExample:"t.color(colorsys.hsv_to_rgb(i / total, 1.0, 1.0))"}],b=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 5 - Color gradients and hue shifts inside iterative loops\r
File: hsv_rainbow_cycle_loops.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates dynamic color gradient generation inside iterative loops:\r
- Uses Python's built-in \`colorsys.hsv_to_rgb()\` module.\r
- Hue \`h\` ranges from 0.0 to 1.0 (covering Red -> Yellow -> Green -> Cyan -> Blue -> Magenta -> Red).\r
"""\r
\r
import turtle\r
import colorsys\r
\r
def draw_rainbow_spiral():\r
    screen = turtle.Screen()\r
    screen.title("HSV Rainbow Color Cycle Spiral - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=600)\r
\r
    # Note: turtle colormode defaults to 1.0, which matches colorsys.hsv_to_rgb output!\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    total_steps = 300\r
\r
    for i in range(total_steps):\r
        # Calculate continuous hue from 0.0 to 1.0\r
        hue = i / total_steps\r
        r, g, b = colorsys.hsv_to_rgb(hue, 1.0, 1.0)\r
        t.color(r, g, b)\r
\r
        t.forward(i * 0.7)\r
        t.left(59)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_rainbow_spiral()\r
`,y=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 5 - Color gradients and hue shifts inside iterative loops\r
File: concentric_spectrum_mandala.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates shifting hue across radial spokes to produce a continuous\r
360-degree color wheel spectrum mandala.\r
"""\r
\r
import turtle\r
import colorsys\r
\r
def draw_spectrum_mandala():\r
    screen = turtle.Screen()\r
    screen.title("Concentric Spectrum Mandala - Coder & AccoTax")\r
    screen.bgcolor("#0f172a")\r
\r
    t = turtle.Turtle()\r
    t.speed(0)\r
    t.hideturtle()\r
    t.pensize(2)\r
\r
    spokes = 72\r
    turn_angle = 360 / spokes  # 5 degrees\r
\r
    for spoke in range(spokes):\r
        hue = spoke / spokes\r
        r, g, b = colorsys.hsv_to_rgb(hue, 0.9, 1.0)\r
        t.color(r, g, b)\r
\r
        # Draw spoke diamond\r
        t.forward(120)\r
        t.left(45)\r
        t.forward(40)\r
        t.left(135)\r
        t.forward(120)\r
        t.left(45)\r
        t.forward(40)\r
        t.left(135)\r
\r
        t.left(turn_angle)\r
\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_spectrum_mandala()\r
`,w=`"""\r
Module: 005_003_turtle-patterns\r
Topic: Topic 5 - Color gradients and hue shifts inside iterative loops\r
File: linear_gradient_polygon_mesh.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Demonstrates linear RGB color interpolation (Lerp) across 2D loop coordinates\r
to create a smooth two-color gradient square mesh.\r
"""\r
\r
import turtle\r
\r
def lerp_color(c1, c2, t):\r
    """Linear interpolation between color c1 (r, g, b) and c2 (r, g, b)."""\r
    return (\r
        c1[0] + (c2[0] - c1[0]) * t,\r
        c1[1] + (c2[1] - c1[1]) * t,\r
        c1[2] + (c2[2] - c1[2]) * t,\r
    )\r
\r
def draw_gradient_mesh():\r
    screen = turtle.Screen()\r
    screen.title("Linear Gradient Color Interpolation - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.colormode(255)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle()\r
    t.hideturtle()\r
\r
    # Start color (Cyan: 56, 189, 248) -> End color (Rose: 244, 63, 94)\r
    start_rgb = (56, 189, 248)\r
    end_rgb = (244, 63, 94)\r
\r
    bars = 100\r
    bar_width = 5\r
    bar_height = 200\r
    start_x = -250\r
\r
    for i in range(bars):\r
        factor = i / (bars - 1)\r
        r, g, b = lerp_color(start_rgb, end_rgb, factor)\r
        t.color(int(r), int(g), int(b))\r
        t.penup()\r
        t.goto(start_x + i * bar_width, -bar_height / 2)\r
        t.pendown()\r
        t.setheading(90)\r
        t.pensize(bar_width)\r
        t.forward(bar_height)\r
\r
    screen.update()\r
    turtle.done()\r
\r
if __name__ == "__main__":\r
    draw_gradient_mesh()\r
`,v=`================================================================================\r
  TOPIC 5: COLOR GRADIENTS AND HUE SHIFTS INSIDE ITERATIVE LOOPS\r
  MODULE: 005_003 - Turtle Patterns & Geometric Mathematics\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. THE HSV COLOR MODEL IN PYTHON GRAPHICS\r
--------------------------------------------------------------------------------\r
The standard RGB model requires adjusting 3 channels simultaneously to change\r
colors. The HSV model simplifies color gradients into:\r
- Hue (H): 0.0 to 1.0 (Angular position around the color spectrum wheel).\r
- Saturation (S): 0.0 (grayscale) to 1.0 (vibrant pure color).\r
- Value / Brightness (V): 0.0 (pure black) to 1.0 (full brightness).\r
\r
2. PYTHON's \`colorsys\` MODULE\r
--------------------------------------------------------------------------------\r
Python includes the built-in \`colorsys\` library:\r
\`\`\`python\r
import colorsys\r
\r
# Convert HSV float [0.0, 1.0] to RGB float [0.0, 1.0]\r
r, g, b = colorsys.hsv_to_rgb(hue, saturation, value)\r
t.color(r, g, b)  # Works directly because default turtle colormode is 1.0!\r
\`\`\`\r
\r
3. LINEAR COLOR INTERPOLATION (LERP)\r
--------------------------------------------------------------------------------\r
To transition smoothly between any two custom colors C1 and C2 over \`N\` steps:\r
\`factor = i / (N - 1)\` (ranges from 0.0 to 1.0)\r
\`color = C1 + (C2 - C1) * factor\`\r
\r
4. SPECTRUM MAPPING STRATEGIES\r
--------------------------------------------------------------------------------\r
1. Spiral Hue Cycle: \`hue = i / total_steps\`\r
2. Multi-Cycle Rainbow: \`hue = (i * frequency) % 1.0\`\r
3. Radial Spoke Spectrum: \`hue = spoke_index / total_spokes\`\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,_=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes hueRotateAnim {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}
`,A=()=>{const[a,c]=l.useState(1),[s,d]=l.useState("rainbow"),h=[{name:"colorsys.hsv_to_rgb(h, s, v)",returnType:"Tuple (r, g, b) floats [0, 1]",purpose:"Converts HSV color parameters into RGB values ready for Turtle colormode(1.0).",usage:"r, g, b = colorsys.hsv_to_rgb(hue, 1.0, 1.0)"},{name:"Normalized Hue: i / total_steps",returnType:"float [0.0, 1.0]",purpose:"Maps loop iteration progress directly to the full 360-degree color spectrum wheel.",usage:"hue = i / total_steps"},{name:"Linear Interpolation: Lerp(C1, C2, t)",returnType:"Tuple (r, g, b)",purpose:"Smoothly transitions between two specific RGB colors across a sequence of bars or tiles.",usage:"C = C1 + (C2 - C1) * factor"},{name:"Multi-Cycle Rainbow: (i * f) % 1.0",returnType:"Periodic float",purpose:"Generates repeating rapid rainbow color cycles along a long spiral or polygon chain.",usage:"hue = (i * 0.03) % 1.0"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:_}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_003 · Turtle Patterns & Geometric Mathematics · Topic 5"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-fuchsia-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent",children:"Color Gradients & Hue Shifts in Iterative Loops"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Transform monochrome vector lines into living spectrum artworks. Harness Python's ",e.jsx("code",{className:"text-fuchsia-300 font-mono",children:"colorsys"})," library to create continuous HSV rainbows, linear Lerp transitions, and radial spectrum mandalas."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🌈 colorsys.hsv_to_rgb()"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎨 0.0 - 1.0 Normalized Hue"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"✨ Linear Lerp Transitions"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🌈"})," HSV Color Wheel & Gradient Laboratory"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Inspect how loop progress maps directly to the visible color spectrum and tweak saturation levels."})]}),e.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-2 bg-gray-900 px-3 py-1.5 rounded-xl border border-slate-700",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Palette:"}),["rainbow","sunset","cyber"].map(r=>e.jsx("button",{onClick:()=>d(r),className:`px-2.5 py-1 rounded text-xs font-bold transition cursor-pointer capitalize ${s===r?"bg-fuchsia-500 text-slate-950 font-bold":"text-slate-400 hover:text-white"}`,children:r},r))]}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-900 px-3 py-1.5 rounded-xl border border-slate-700",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Saturation:"}),e.jsx("input",{type:"range",min:"0.2",max:"1.0",step:"0.1",value:a,onChange:r=>c(Number(r.target.value)),className:"w-16 accent-fuchsia-400 cursor-pointer"}),e.jsxs("span",{className:"font-mono text-xs text-fuchsia-300 w-6",children:[(a*100).toFixed(0),"%"]})]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-fuchsia-400 mb-2",children:"Radial Spoke Spectrum: hue = spoke / 36"}),e.jsx("svg",{viewBox:"0 0 240 200",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-xs h-auto",children:e.jsxs("g",{transform:"translate(120, 100)",children:[Array.from({length:36}).map((r,t)=>{const o=t*10*Math.PI/180,n=t*10,u=75*Math.cos(o),p=75*Math.sin(o);return e.jsx("line",{x1:"0",y1:"0",x2:u,y2:p,stroke:`hsl(${n}, ${a*100}%, 55%)`,strokeWidth:"3.5",strokeLinecap:"round"},t)}),e.jsx("circle",{cx:"0",cy:"0",r:"14",fill:"#020617",stroke:"#334155",strokeWidth:"2"})]})})]}),e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400",children:"Linear Lerp Mesh: 50 Interleaved Bars"}),e.jsx("div",{className:"w-full h-24 rounded-lg overflow-hidden flex border border-slate-700",children:Array.from({length:50}).map((r,t)=>{const o=t/49,n=s==="rainbow"?`hsl(${o*360}, ${a*100}%, 50%)`:s==="sunset"?`hsl(${30+o*250}, ${a*100}%, ${40+o*20}%)`:`hsl(${180+o*140}, ${a*100}%, 55%)`;return e.jsx("div",{className:"flex-1 h-full",style:{backgroundColor:n}},t)})}),e.jsxs("div",{className:"w-full flex justify-between text-[11px] font-mono text-slate-400",children:[e.jsx("span",{children:"Start: i=0 (0.0)"}),e.jsx("span",{children:"Midpoint: i=25 (0.5)"}),e.jsx("span",{children:"End: i=50 (1.0)"})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-fuchsia-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Procedural Color Gradient Formulas"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Gradient Model"}),e.jsx("th",{className:"py-3 px-4",children:"Mathematical Range"}),e.jsx("th",{className:"py-3 px-4",children:"Visual Behavior"}),e.jsx("th",{className:"py-3 px-4",children:"Python Implementation"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:h.map((r,t)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-fuchsia-300 font-bold text-xs",children:r.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-emerald-400 text-xs",children:r.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:r.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-sky-300 text-xs",children:r.usage})]},t))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Color Spectrum Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{fileModule:b,title:"hsv_rainbow_cycle_loops.py",highlightLines:[12,23,24,25]}),e.jsx(i,{fileModule:y,title:"concentric_spectrum_mandala.py",highlightLines:[12,20,21,22]}),e.jsx(i,{fileModule:w,title:"linear_gradient_polygon_mesh.py",highlightLines:[11,12,13,27,28]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-fuchsia-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🌈"})," Barrackpore Digital Art Expo: 300-Step Rainbow Vortex"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mamata and Mahima generate a 300-step spiral vortex using ",e.jsx("code",{className:"text-fuchsia-300 font-mono",children:"colorsys.hsv_to_rgb(i / 300, 1.0, 1.0)"}),". By seamlessly transitioning from vibrant red through emerald, cyan, and violet across 300 micro-segments, they win first prize in the regional computational arts festival."]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🌅"})," Jadavpur Game Lab: Procedural Sunset Horizon"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Debangshu uses linear RGB interpolation (Lerp) to construct a smooth 100-bar background gradient transitioning from fiery sunset orange (",e.jsx("code",{className:"text-amber-300 font-mono",children:"#fbbf24"}),") to deep night indigo (",e.jsx("code",{className:"text-indigo-300 font-mono",children:"#1e1b4b"}),") for his 2D retro arcade video game project."]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Color Gradient Pitfalls to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Colormode Mismatch Crashes"}),e.jsxs("p",{className:"text-slate-400",children:["Passing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"(255, 128, 0)"})," when default colormode is 1.0 raises ",e.jsx("code",{className:"text-rose-300",children:"TurtleGraphicsError"}),"! Either use 0.0-1.0 floats or invoke ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"screen.colormode(255)"})," first."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Integer Division Truncation"}),e.jsxs("p",{className:"text-slate-400",children:["In Python 2 or integer operations, ",e.jsx("code",{className:"text-rose-300 font-mono",children:"i // 300"})," evaluates to 0 for the entire loop, locking color permanently to pure Red. Always use true float division ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"i / 300"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Muddy RGB Midpoints"}),e.jsx("p",{className:"text-slate-400",children:"Interpolating directly between complementary colors in RGB passes through dull muddy gray. Use HSV hue rotation for vibrant saturated spectrum arcs."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Omission of tracer(0) on 100+ Color Changes"}),e.jsxs("p",{className:"text-slate-400",children:["Rapid color changes force hundreds of intermediate repaint events. Always enable double-buffering with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"screen.tracer(0)"}),"."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-emerald-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I understand the difference between RGB and HSV (Hue, Saturation, Value)","I know how to use Python's built-in colorsys.hsv_to_rgb(h, s, v) function","I can map loop index progress (i / total) to continuous hue spectrum transitions","I know how to write a linear color interpolation (Lerp) helper function","I understand why Turtle default colormode(1.0) matches colorsys float outputs","I can create repeating rainbow cycles using modulo floating-point arithmetic (% 1.0)"].map((r,t)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:r})]},t))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," Why lowering saturation from 1.0 to 0.4 turns sharp electric neon into soft pastel Japanese watercolor tones!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How setting ",e.jsx("code",{className:"text-sky-300 font-mono",children:"hue = (i * 0.05) % 1.0"})," compresses multiple full rainbow cycles along a single spiral arm!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Use a sine function ",e.jsx("code",{className:"text-fuchsia-300 font-mono",children:"hue = 0.5 + 0.3 * math.sin(i * 0.1)"})," to bounce the colors back and forth between glowing cyan and purple!"]})]}),e.jsxs("div",{className:"bg-purple-900/20 rounded-2xl p-5 border border-purple-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-purple-300",children:"🚀 Expert Mindset"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["In GPU shader programming (GLSL / HLSL), fragment shaders evaluate color equations across millions of pixels simultaneously using ",e.jsxs("strong",{children:["normalized UV coordinates ",e.jsx("code",{className:"text-purple-300 font-mono",children:"[0.0, 1.0]"})," and trigonometric color ramps"]}),". Learning how normalized parameterization (",e.jsx("code",{className:"text-purple-300 font-mono",children:"i / total"}),") drives HSV color models in Python Turtle directly prepares you for modern 3D shader development and visual effects engineering."]})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(x,{title:"Color Gradients & HSV Spectrum FAQs",questions:f})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(g,{content:v,title:"Topic 5: Color Gradients Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic5_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(m,{note:"When we teach color gradients at Coder & AccoTax in Barrackpore and Kolkata, introducing colorsys.hsv_to_rgb() is a pure moment of joy for our students. Instead of struggling with hardcoded RGB values, normalized hue math (i / total) instantly brings spirals and mandalas to life with mesmerizing rainbow spectrums. Encourage students to experiment with saturation and lightness to craft their own distinctive aesthetic styles!"})})]})]})};export{A as default};
