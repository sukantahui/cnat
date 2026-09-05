import{b as o,j as e,bg as l}from"./vendor-react-core-Doz9nIC6.js";import{P as c}from"./PythonFileLoader-hCi5osN-.js";import{P as g}from"./PlainTextPrint-C08xhKA4.js";import{F as b}from"./FAQTemplate-BHhlgA96.js";import{T as w}from"./TeacherSukantaHui-DerPxfxp.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const v=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 2: Screen configuration: setup(), title(), bgcolor(), screensize()\r
# File: screen_setup_and_window_geometry.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Demonstrating screen setup, window geometry, title branding,\r
#              and fractional monitor scaling.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class WindowGeometryConfig:\r
    title: str\r
    width: int | float\r
    height: int | float\r
    start_x: int | None = None\r
    start_y: int | None = None\r
\r
    @property\r
    def is_fractional(self) -> bool:\r
        return isinstance(self.width, float) and (0.0 < self.width <= 1.0)\r
\r
    def calculate_pixel_dimensions(self, monitor_w: int = 1920, monitor_h: int = 1080) -> tuple[int, int]:\r
        if self.is_fractional:\r
            return (int(monitor_w * self.width), int(monitor_h * self.height))\r
        return (int(self.width), int(self.height))\r
\r
def test_window_geometry():\r
    print("   [...] Testing Window Geometry & Screen Setup Calculator...")\r
    \r
    # 1. Standard Absolute Window (800x600)\r
    cfg1 = WindowGeometryConfig("Coder & Accotax Standard", 800, 600)\r
    w1, h1 = cfg1.calculate_pixel_dimensions()\r
    assert (w1, h1) == (800, 600)\r
    print(f"   [PASS] 1. Absolute window dimensions: {w1}x{h1} px")\r
\r
    # 2. Fractional Window (75% of 1080p monitor)\r
    cfg2 = WindowGeometryConfig("Presentation Display", 0.75, 0.75)\r
    w2, h2 = cfg2.calculate_pixel_dimensions(1920, 1080)\r
    assert (w2, h2) == (1440, 810)\r
    print(f"   [PASS] 2. Fractional window dimensions (75% scale): {w2}x{h2} px")\r
\r
def main():\r
    print("=" * 75)\r
    print("[SCREEN SETUP] Window Geometry & Responsive Monitor Scaling")\r
    print("=" * 75)\r
\r
    test_window_geometry()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] screen.setup() accepts absolute pixels or fractional floats")\r
    print("           for responsive desktop application design.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,y=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 2: Screen configuration: setup(), title(), bgcolor(), screensize()\r
# File: canvas_theming_and_bgcolor_control.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Background styling with Named Colors, Hex Codes, and RGB tuples.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class ThemePalette:\r
    theme_name: str\r
    bg_hex: str\r
    primary_pen_hex: str\r
    secondary_pen_hex: str\r
    rgb_255_tuple: tuple[int, int, int]\r
\r
class CanvasThemeManager:\r
    """Manages color palettes and theme configurations for Python Turtle."""\r
    PALETTES = {\r
        "CYBERPUNK_DARK": ThemePalette("Cyberpunk Dark", "#090d16", "#2dd4bf", "#f43f5e", (9, 13, 22)),\r
        "DEEP_OCEAN": ThemePalette("Deep Ocean", "#030712", "#38bdf8", "#818cf8", (3, 7, 18)),\r
        "NEBULA_PURPLE": ThemePalette("Nebula Purple", "#1e1b4b", "#c084fc", "#f472b6", (30, 27, 75)),\r
        "CLASSIC_SLATE": ThemePalette("Classic Slate", "#0f172a", "#34d399", "#fbbf24", (15, 23, 42)),\r
    }\r
\r
    @classmethod\r
    def get_palette(cls, theme_key: str) -> ThemePalette:\r
        return cls.PALETTES.get(theme_key, cls.PALETTES["CYBERPUNK_DARK"])\r
\r
def test_canvas_theming():\r
    print("   [...] Testing Canvas Background Theming & Color Modes...")\r
    palette = CanvasThemeManager.get_palette("CYBERPUNK_DARK")\r
\r
    assert palette.bg_hex == "#090d16"\r
    assert palette.rgb_255_tuple == (9, 13, 22)\r
    print(f"   [PASS] 1. Theme '{palette.theme_name}' loaded -> Hex: {palette.bg_hex} | RGB: {palette.rgb_255_tuple}")\r
\r
    # Verify all presets have valid RGB ranges (0 to 255)\r
    for key, p in CanvasThemeManager.PALETTES.items():\r
        r, g, b = p.rgb_255_tuple\r
        assert 0 <= r <= 255 and 0 <= g <= 255 and 0 <= b <= 255\r
        print(f"   [PASS] 2. Verified palette '{p.theme_name}' RGB integrity")\r
\r
def main():\r
    print("=" * 75)\r
    print("[CANVAS THEMING] Background Colors, Hex Palettes & RGB Colormode")\r
    print("=" * 75)\r
\r
    test_canvas_theming()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] Using screen.colormode(255) with curated dark themes")\r
    print("           creates high-contrast, professional visual graphics.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,j=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 2: Screen configuration: setup(), title(), bgcolor(), screensize()\r
# File: screensize_and_scrollable_canvases.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Virtual canvas buffer sizing, viewport aspect ratios,\r
#              and Tkinter scrollbar management.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class CanvasBufferArchitecture:\r
    viewport_width: int\r
    viewport_height: int\r
    canvas_buffer_width: int\r
    canvas_buffer_height: int\r
\r
    @property\r
    def requires_horizontal_scrollbar(self) -> bool:\r
        return self.canvas_buffer_width > self.viewport_width\r
\r
    @property\r
    def requires_vertical_scrollbar(self) -> bool:\r
        return self.canvas_buffer_height > self.viewport_height\r
\r
    @property\r
    def scrollable_x_span(self) -> int:\r
        return max(0, self.canvas_buffer_width - self.viewport_width)\r
\r
    @property\r
    def scrollable_y_span(self) -> int:\r
        return max(0, self.canvas_buffer_height - self.viewport_height)\r
\r
def test_canvas_buffer():\r
    print("   [...] Testing Virtual Canvas vs Viewport Sizing...")\r
    # Standard Viewport (800x600) with High-Res Canvas Buffer (2400x1800)\r
    arch = CanvasBufferArchitecture(\r
        viewport_width=800,\r
        viewport_height=600,\r
        canvas_buffer_width=2400,\r
        canvas_buffer_height=1800\r
    )\r
\r
    assert arch.requires_horizontal_scrollbar is True\r
    assert arch.requires_vertical_scrollbar is True\r
    assert arch.scrollable_x_span == 1600\r
    assert arch.scrollable_y_span == 1200\r
    print(f"   [PASS] 1. Viewport: {arch.viewport_width}x{arch.viewport_height} -> Virtual Buffer: {arch.canvas_buffer_width}x{arch.canvas_buffer_height}")\r
    print(f"   [PASS] 2. Scrollable X span: {arch.scrollable_x_span} px | Scrollable Y span: {arch.scrollable_y_span} px")\r
\r
def main():\r
    print("=" * 75)\r
    print("[VIRTUAL CANVAS] setup() vs screensize() Scrollable Buffer Analysis")\r
    print("=" * 75)\r
\r
    test_canvas_buffer()\r
\r
    print("=" * 75)\r
    print("[TAKEAWAY] screensize() allocates the total internal drawing resolution,")\r
    print("           while setup() defines the physical OS viewing window.")\r
    print("=" * 75)\r
\r
if __name__ == "__main__":\r
    main()\r
`,_=`"""\r
# Module: 005_001_turtle-foundation\r
# Topic 2: Screen configuration: setup(), title(), bgcolor(), screensize()\r
# File: institutional_multi_screen_presentation_suite.py\r
#\r
# Teacher & Mentor: Sukanta Hui\r
# Institution: Coder & Accotax (Barrackpore, Kolkata, West Bengal)\r
# Description: Screen configuration engine managing branded presentation windows\r
#              for student projects across Barrackpore and Kolkata.\r
"""\r
\r
from dataclasses import dataclass\r
\r
@dataclass\r
class StudentScreenPreset:\r
    student_name: str\r
    campus_location: str\r
    project_title: str\r
    window_w: int\r
    window_h: int\r
    bg_theme: str\r
\r
class InstitutionalScreenDirector:\r
    """Configures branded Turtle windows for student project exhibitions."""\r
    def __init__(self):\r
        self.presets: list[StudentScreenPreset] = []\r
\r
    def register_preset(self, preset: StudentScreenPreset):\r
        self.presets.append(preset)\r
\r
    def generate_manifest(self) -> list[str]:\r
        results = []\r
        for p in self.presets:\r
            results.append(\r
                f"[SCREEN MANIFEST] '{p.project_title}' ({p.student_name} - {p.campus_location}) | "\r
                f"Window: {p.window_w}x{p.window_h} px | Theme: {p.bg_theme}"\r
            )\r
        return results\r
\r
def test_screen_director():\r
    print("   [...] Running Institutional Screen Presentation Suite Test...")\r
    director = InstitutionalScreenDirector()\r
\r
    # Register Mamata, Mahima, and Susmita presentation presets\r
    director.register_preset(StudentScreenPreset("Mamata", "Barrackpore", "Algorithmic Geometric Mandelbrot", 1024, 768, "#090d16"))\r
    director.register_preset(StudentScreenPreset("Mahima", "Kolkata", "Distributed Particle Simulation", 1280, 800, "#030712"))\r
    director.register_preset(StudentScreenPreset("Susmita", "Ichapur", "Recursive Botanical Tree Generator", 900, 700, "#1e1b4b"))\r
\r
    manifest = director.generate_manifest()\r
    assert len(manifest) == 3\r
    for line in manifest:\r
        print(f"   [PASS] {line}")\r
\r
def main():\r
    print("=" * 80)\r
    print("[CASE STUDY] Institutional Student Exhibition Screen Director")\r
    print("=" * 80)\r
\r
    test_screen_director()\r
\r
    print("=" * 80)\r
    print("[TAKEAWAY] Cohesive screen setup, title branding, and dark theme")\r
    print("           presets ensure professional visual project presentations.")\r
    print("=" * 80)\r
\r
if __name__ == "__main__":\r
    main()\r
`,N=`================================================================================\r
                    CODER & ACCOTAX • EDUCATIONAL TUTORIAL SERIES\r
  PYTHON PROGRAMMING • SEGMENT 5: TURTLE & CREATIVE GRAPHICS • MODULE 005_001\r
      TOPIC 2: SCREEN CONFIGURATION: SETUP(), TITLE(), BGCOLOR(), SCREENSIZE()\r
================================================================================\r
Teacher & Mentor: Sukanta Hui\r
Location: Barrackpore, West Bengal, India\r
Website: https://www.codernaccotax.co.in\r
\r
--------------------------------------------------------------------------------\r
1. SCREEN CONFIGURATION METHODS\r
--------------------------------------------------------------------------------\r
  1. screen.setup(width, height, startx, starty):\r
     - Sets the physical OS window dimensions and screen positioning.\r
     - Integers represent pixels (e.g. width=800, height=600).\r
     - Floats represent fraction of user display screen (e.g. width=0.75 → 75% of monitor).\r
     - startx, starty define top-left corner coordinates on the physical monitor.\r
\r
  2. screen.title("Text"):\r
     - Sets the OS window bar title.\r
\r
  3. screen.bgcolor(color):\r
     - Sets background color. Supports named strings ("black"), Hex ("#0f172a"),\r
       or RGB tuples with screen.colormode(255).\r
\r
  4. screen.screensize(canvwidth, canvheight, bg):\r
     - Sets the internal virtual drawing canvas dimensions (adds scrollbars if larger\r
       than physical window viewport).\r
\r
================================================================================\r
       END OF STUDY NOTE • TOPIC 2: SCREEN CONFIGURATION\r
================================================================================\r
`,S=[{question:"What is the purpose of 'screen.setup(width, height, startx, starty)'?",shortAnswer:"'screen.setup()' configures the physical OS window dimensions (width and height) and the optional top-left starting position (startx, starty) on the monitor screen.",explanation:"Configuring the physical window geometry.",hint:"Sets window width, height, and starting screen placement coordinates.",level:"basic",codeExample:"screen.setup(width=800, height=600, startx=100, starty=100)"},{question:"What happens if you pass fractional float values to 'screen.setup(width, height)' (e.g. 'screen.setup(0.5, 0.5)')?",shortAnswer:"Float values between 0.0 and 1.0 represent a fraction of the user's total physical display monitor resolution (e.g. 0.5 creates a window occupying 50% of the screen width and height).",explanation:"Fractional monitor resolution scaling in screen.setup.",hint:"Floats (0.0 to 1.0) scale window size as a percentage of the user's screen.",level:"moderate",codeExample:"screen.setup(0.75, 0.75) # 75% of monitor screen width and height"},{question:"What is the difference between 'screen.setup()' and 'screen.screensize()'?",shortAnswer:"'screen.setup()' controls the physical operating system window viewport size, while 'screen.screensize()' controls the dimensions of the internal virtual drawing canvas buffer (attaching scrollbars if the canvas is larger than the window).",explanation:"Physical window viewport vs internal virtual canvas dimensions.",hint:"setup() = physical window size; screensize() = internal drawing canvas size (with scrollbars).",level:"moderate",codeExample:`screen.setup(600, 400)
screen.screensize(2000, 2000) # Creates scrollable canvas`},{question:"How do you set a custom window title in Python Turtle?",shortAnswer:`Using 'screen.title("Custom Title")'.`,explanation:"Branding and setting the OS window title bar.",hint:"Use screen.title('My Title').",level:"basic",codeExample:"screen.title('Coder & Accotax • Creative Turtle Art')"},{question:"What color formats can be passed to 'screen.bgcolor()' by default?",shortAnswer:"1. Named color strings (e.g. 'black', 'navy', 'crimson', 'teal'), 2. Hexadecimal color strings (e.g. '#0f172a', '#2dd4bf'), and 3. RGB tuples when colormode is configured.",explanation:"Supported color formats for canvas background.",hint:"Named strings, Hexadecimal strings, and RGB tuples.",level:"basic",codeExample:"screen.bgcolor('#090d16') # Hex dark theme"},{question:"How do you enable 0-255 integer RGB color values in Python Turtle?",shortAnswer:"By calling 'screen.colormode(255)' (the default mode is 1.0 where RGB values range from 0.0 to 1.0).",explanation:"Switching Turtle colormode between 1.0 float and 255 integer ranges.",hint:"Call screen.colormode(255).",level:"basic",codeExample:`screen.colormode(255)
screen.bgcolor((15, 23, 42)) # RGB tuple in 0-255 range`},{question:"What happens if you omit 'startx' and 'starty' in 'screen.setup(800, 600)'?",shortAnswer:"The window is automatically positioned at the exact center of the user's primary monitor display.",explanation:"Default centered window positioning in Tkinter.",hint:"The window is automatically centered on the user's monitor.",level:"basic",codeExample:"screen.setup(800, 600) # Centered on monitor"},{question:"How do you make a Turtle window fullscreen across the entire monitor?",shortAnswer:`By calling 'screen.setup(1.0, 1.0)' or using the underlying Tkinter root method 'screen.cv._rootwindow.attributes("-fullscreen", True)'.`,explanation:"Fullscreen window configuration techniques.",hint:"screen.setup(1.0, 1.0) occupies 100% of the display monitor.",level:"moderate",codeExample:"screen.setup(1.0, 1.0) # Fullscreen dimensions"},{question:"Can you change 'screen.bgcolor()' dynamically during an animation?",shortAnswer:`Yes; calling 'screen.bgcolor("new_color")' at any time immediately repaints the background canvas without clearing or erasing existing turtle drawings.`,explanation:"Dynamic runtime background updates.",hint:"Yes, calling bgcolor() dynamically updates the background without erasing existing lines.",level:"basic",codeExample:`screen.bgcolor('black')
# later...
screen.bgcolor('#1e1b4b')`},{question:"How do you access the underlying Tkinter Canvas object from a Turtle Screen?",shortAnswer:"Using 'screen.getcanvas()' (or 'screen.cv'), which returns the native 'tkinter.Canvas' object for advanced Tkinter integrations.",explanation:"Interfacing Turtle with standard Tkinter widgets.",hint:"Use screen.getcanvas().",level:"pro",codeExample:"tk_canvas = screen.getcanvas() # Native Tkinter Canvas object"},{question:"What is the purpose of 'screen.clear()' vs 'screen.resetscreen()'?",shortAnswer:"'screen.clear()' deletes all drawings and resets all turtles on the screen to initial state; 'screen.resetscreen()' does the same but maintains custom background colors and settings.",explanation:"Screen-level clearing and resetting methods.",hint:"clear() resets entire screen including turtles; resetscreen() maintains screen settings.",level:"moderate",codeExample:"screen.clear() # Erases everything on the screen"},{question:"How do you disable window resizing by the user?",shortAnswer:"Through the underlying Tkinter window reference: 'screen.cv._rootwindow.resizable(False, False)'.",explanation:"Locking window aspect ratio and preventing user resizing.",hint:"Access root window and set resizable(False, False).",level:"pro",codeExample:"screen.cv._rootwindow.resizable(False, False)"},{question:"Why is a dark background theme ('#090d16' or 'black') popular for creative generative art?",shortAnswer:"Dark backgrounds provide high visual contrast for vibrant neon and pastel colors (cyan, magenta, yellow, lime), mimicking modern computer terminals, games, and digital art studios.",explanation:"Color contrast and visual aesthetics in computer graphics.",hint:"High visual contrast makes neon and gradient colors pop cleanly.",level:"basic",codeExample:"screen.bgcolor('#090d16') # Sleek dark mode"},{question:"What is the return type of 'screen.window_width()' and 'screen.window_height()'?",shortAnswer:"They return integer values representing the current physical pixel dimensions of the window.",explanation:"Window dimension query return types.",hint:"Integer pixel counts.",level:"basic",codeExample:"w = screen.window_width() # e.g. 800"},{question:"How do you set a background image in Python Turtle?",shortAnswer:`Using 'screen.bgpic("image.gif")' (only GIF images are natively supported by Tkinter without PIL).`,explanation:"Background image loading in turtle.",hint:"Use screen.bgpic('filename.gif') with GIF format.",level:"moderate",codeExample:"screen.bgpic('landscape.gif')"},{question:"What happens if the virtual canvas size ('screensize') is smaller than the window viewport ('setup')?",shortAnswer:"The virtual drawing area is centered inside the physical window without scrollbars; drawings outside the screensize boundary are clipped.",explanation:"Canvas smaller than viewport behavior.",hint:"No scrollbars appear; drawing is centered in the window.",level:"moderate",codeExample:`screen.setup(800, 600)
screen.screensize(400, 300)`},{question:"Can multiple calls to 'turtle.Screen()' be made in a single Python script?",shortAnswer:"Yes, but 'turtle.Screen()' is a Singleton; every call returns the same underlying screen instance.",explanation:"Singleton design pattern of turtle.Screen.",hint:"turtle.Screen() is a Singleton that returns the same global screen instance.",level:"basic",codeExample:`s1 = turtle.Screen()
s2 = turtle.Screen()
assert s1 is s2 # True (Singleton)`},{question:"How do you set the window icon in Python Turtle?",shortAnswer:`Through Tkinter's root window method: 'screen.cv._rootwindow.iconbitmap("icon.ico")' on Windows.`,explanation:"Setting OS application icon.",hint:"Use iconbitmap('icon.ico') on the root window.",level:"pro",codeExample:"screen.cv._rootwindow.iconbitmap('app_icon.ico')"},{question:"What is the standard order of operations when initializing a Turtle program?",shortAnswer:"1. Create and configure the Screen (`setup`, `title`, `bgcolor`), 2. Set colormode if using RGB, 3. Create Turtle pen instances and configure their shapes/speeds, 4. Execute drawing logic, and 5. Enter event loop with `done()` or `exitonclick()`.",explanation:"Standard architectural pipeline for Turtle graphics scripts.",hint:"Screen config → colormode → Turtle instances → Drawing → Event loop.",level:"basic",codeExample:"# Standard Turtle Initialization Pipeline"},{question:"What is the ultimate rule of Turtle Screen configuration?",shortAnswer:"Always configure your screen explicitly with `setup(width, height)`, assign a descriptive `title()`, set a deliberate `bgcolor()`, choose the appropriate `colormode()`, and finish with `exitonclick()` or `done()` to create professional, rock-solid desktop graphics applications.",explanation:"The complete standard for configuring desktop graphics windows in Python.",hint:"setup + title + bgcolor + colormode + exitonclick.",level:"basic",codeExample:"# Enterprise Screen Configuration Standard"}];function z(){const d=o.useRef([]),[i,h]=o.useState("setupGeometry"),[r,p]=o.useState({name:"Cyberpunk Dark",bgHex:"#090d16",penHex:"#2dd4bf",rgb:"RGB (9, 13, 22)",accent:"text-teal-400"}),[a,m]=o.useState({label:"Standard Desktop (800x600)",width:800,height:600,aspectRatio:"4:3"}),u=[{name:"Cyberpunk Dark",bgHex:"#090d16",penHex:"#2dd4bf",rgb:"RGB (9, 13, 22)",accent:"text-teal-400"},{name:"Deep Ocean",bgHex:"#030712",penHex:"#38bdf8",rgb:"RGB (3, 7, 18)",accent:"text-cyan-400"},{name:"Nebula Purple",bgHex:"#1e1b4b",penHex:"#c084fc",rgb:"RGB (30, 27, 75)",accent:"text-purple-400"},{name:"Classic Slate",bgHex:"#0f172a",penHex:"#34d399",rgb:"RGB (15, 23, 42)",accent:"text-emerald-400"}],f=[{label:"Compact (640x480)",width:640,height:480,aspectRatio:"4:3"},{label:"Standard Desktop (800x600)",width:800,height:600,aspectRatio:"4:3"},{label:"HD Presentation (1024x768)",width:1024,height:768,aspectRatio:"4:3"},{label:"Widescreen 16:9 (1280x720)",width:1280,height:720,aspectRatio:"16:9"}];o.useEffect(()=>{const t=new IntersectionObserver(s=>{s.forEach(x=>{x.isIntersecting&&x.target.classList.add("section-visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return d.current.forEach(s=>{s&&t.observe(s)}),()=>t.disconnect()},[]);const n=t=>{t&&!d.current.includes(t)&&d.current.push(t)};return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 antialiased font-sans p-4 sm:p-6 md:p-10 pb-28 selection:bg-teal-500/30 selection:text-teal-200",children:[e.jsx("style",{children:`
        .section-hidden {
          transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .section-visible {
          transform: translateY(0);
        }
        @keyframes pulseGlowTeal {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(20, 184, 166, 0.4)); }
          50% { filter: drop-shadow(0 0 10px rgba(20, 184, 166, 0.8)); }
        }
        .animate-glow-teal {
          animation: pulseGlowTeal 3s infinite ease-in-out;
        }
      `}),e.jsxs("header",{ref:n,className:"section-hidden max-w-5xl mx-auto mb-12 pb-8 border-b border-slate-800/80",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-3",children:[e.jsx("span",{className:"text-xs sm:text-sm font-mono font-semibold bg-teal-950/80 text-teal-300 px-3 py-1 rounded-full border border-teal-800/80 shadow-sm shadow-teal-950/50",children:"Segment 5 • Module 005_001"}),e.jsx("span",{className:"text-xs sm:text-sm font-mono bg-cyan-950/80 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800/80 shadow-sm shadow-cyan-950/50",children:"Topic 2"}),e.jsx("span",{className:"text-xs sm:text-sm font-medium text-slate-400",children:"Python Turtle & Creative Graphics Programming"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Screen Configuration: ",e.jsx("span",{className:"text-teal-400",children:"setup(), title() & bgcolor()"})]}),e.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl font-normal leading-relaxed",children:["Master complete control over the Python Turtle display window and drawing canvas: configuring physical window dimensions and monitor placement with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"screen.setup()"}),", customizing window bar headers with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"screen.title()"}),", theming dark palettes and RGB color modes with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"screen.bgcolor()"})," and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"screen.colormode(255)"}),", and allocating high-resolution scrollable buffers with ",e.jsx("code",{className:"text-teal-300 font-mono",children:"screen.screensize()"}),"."]}),e.jsxs("div",{className:"flex flex-wrap gap-2 sm:gap-3 mt-5",children:[e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🖥️ screen.setup() Geometry"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🏷️ screen.title() Branding"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"🎨 screen.bgcolor() & RGB(255)"}),e.jsx("span",{className:"text-xs sm:text-sm bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-slate-300 font-medium",children:"📜 screen.screensize() Buffer"})]})]}),e.jsxs("div",{className:"max-w-5xl mx-auto space-y-16",children:[e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🏛️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"1. The Screen Configuration Lifecycle"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg",children:[e.jsx("p",{children:"The Turtle Screen acts as the operating system window container and Tkinter graphics canvas manager. Configuring it explicitly ensures professional presentation and reliable multi-monitor behavior:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 my-6 not-prose",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-teal-950/40 border border-teal-800/60 shadow-lg",children:[e.jsx("div",{className:"text-teal-400 font-bold text-sm mb-1",children:"1️⃣ setup() Geometry"}),e.jsx("code",{className:"text-xs font-mono text-teal-300 block mb-1",children:"width, height, x, y"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Sets physical window viewport size (pixels or fractional floats 0.0-1.0) and top-left monitor coordinates."})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 shadow-lg",children:[e.jsx("div",{className:"text-cyan-400 font-bold text-sm mb-1",children:"2️⃣ title() Branding"}),e.jsx("code",{className:"text-xs font-mono text-cyan-300 block mb-1",children:"OS Window Bar Title"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:'Customizes the application header text (e.g. "Coder & Accotax • Barrackpore Creative Lab").'})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 shadow-lg",children:[e.jsx("div",{className:"text-purple-400 font-bold text-sm mb-1",children:"3️⃣ bgcolor() Theming"}),e.jsx("code",{className:"text-xs font-mono text-purple-300 block mb-1",children:"Hex, Names, RGB(255)"}),e.jsxs("p",{className:"text-[11px] text-slate-300",children:["Defines background canvas color. Supports dark mode Hex (",e.jsx("code",{className:"text-purple-300 font-mono",children:"#090d16"}),") or RGB tuples with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"colormode(255)"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 shadow-lg",children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm mb-1",children:"4️⃣ screensize() Buffer"}),e.jsx("code",{className:"text-xs font-mono text-amber-300 block mb-1",children:"Virtual Drawing Canvas"}),e.jsx("p",{className:"text-[11px] text-slate-300",children:"Allocates the internal scrollable drawing buffer size, attaching scrollbars when larger than the window viewport."})]})]}),e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-xl border-l-4 border-teal-500 border border-slate-800/80",children:[e.jsx("h3",{className:"text-white font-bold text-base mb-1",children:"The Colormode(255) Requirement"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed font-mono",children:["By default, Python Turtle expects RGB color values in floating point range from ",e.jsx("code",{className:"text-teal-300 font-mono",children:"0.0 to 1.0"}),". To use standard integer RGB tuples like ",e.jsx("code",{className:"text-teal-300 font-mono",children:"(9, 13, 22)"}),", you MUST invoke ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"screen.colormode(255)"})," first!"]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-3xl",children:"📐"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"2. Visualizing Window Geometry, Color Modes & Buffers"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-semibold",children:[e.jsx("button",{onClick:()=>h("setupGeometry"),className:l("px-3 py-1.5 rounded-lg transition-all",i==="setupGeometry"?"bg-teal-900/50 text-teal-300 border border-teal-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"setup() Window Geometry"}),e.jsx("button",{onClick:()=>h("colorModes"),className:l("px-3 py-1.5 rounded-lg transition-all",i==="colorModes"?"bg-cyan-900/50 text-cyan-300 border border-cyan-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"bgcolor() & Colormode(255)"}),e.jsx("button",{onClick:()=>h("virtualBuffer"),className:l("px-3 py-1.5 rounded-lg transition-all",i==="virtualBuffer"?"bg-purple-900/50 text-purple-300 border border-purple-700/60 shadow-sm":"text-slate-400 hover:text-white"),children:"setup() vs screensize()"})]})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base",children:"Examining the structural geometry of window creation, color mode conversions, and virtual scrollable canvas buffers:"}),e.jsx("div",{className:"bg-slate-950 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800/90 shadow-2xl",children:i==="setupGeometry"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#2dd4bf",fontSize:"14",fontWeight:"bold",children:"SCREEN.SETUP(WIDTH, HEIGHT, STARTX, STARTY) MONITOR GEOMETRY"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#0f172a",stroke:"#14b8a6"}),e.jsx("text",{x:"20",y:"25",fill:"#94a3b8",fontSize:"9",children:"User Physical Display Monitor (1920x1080)"}),e.jsxs("g",{transform:"translate(180, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"460",height:"170",rx:"6",fill:"#042f2e",stroke:"#2dd4bf",strokeWidth:"2"}),e.jsx("rect",{x:"0",y:"0",width:"460",height:"26",rx:"6",fill:"#0d9488"}),e.jsx("circle",{cx:"15",cy:"13",r:"4",fill:"#f43f5e"}),e.jsx("circle",{cx:"28",cy:"13",r:"4",fill:"#facc15"}),e.jsx("circle",{cx:"41",cy:"13",r:"4",fill:"#4ade80"}),e.jsx("text",{x:"60",y:"17",fill:"#ffffff",fontSize:"9",fontWeight:"bold",children:'screen.title("Coder & Accotax • Geometric Studio")'}),e.jsx("text",{x:"140",y:"90",fill:"#a7f3d0",fontSize:"11",fontWeight:"bold",children:"Physical Viewport: width=800, height=600"}),e.jsx("text",{x:"160",y:"115",fill:"#ccfbf1",fontSize:"8",fontFamily:"monospace",children:"screen.setup(800, 600, startx=100, starty=100)"})]}),e.jsx("line",{x1:"30",y1:"40",x2:"180",y2:"40",stroke:"#facc15",strokeWidth:"1.5",strokeDasharray:"3 3"}),e.jsx("text",{x:"60",y:"35",fill:"#facc15",fontSize:"8",children:"startx = 100 px"}),e.jsx("line",{x1:"180",y1:"10",x2:"180",y2:"40",stroke:"#facc15",strokeWidth:"1.5",strokeDasharray:"3 3"}),e.jsx("text",{x:"185",y:"25",fill:"#facc15",fontSize:"8",children:"starty = 100 px"})]})]}):i==="colorModes"?e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",children:"CANVAS THEMING & COLORMODE(255) VS COLORMODE(1.0)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#082f49",stroke:"#0ea5e9"}),e.jsx("rect",{x:"30",y:"30",width:"370",height:"190",rx:"6",fill:"#0c4a6e",stroke:"#38bdf8"}),e.jsx("text",{x:"40",y:"55",fill:"#ffffff",fontSize:"11",fontWeight:"bold",children:"1. Standard RGB (0-255 Integer Mode)"}),e.jsx("text",{x:"40",y:"80",fill:"#bae6fd",fontSize:"8",children:"Call this first:"}),e.jsx("text",{x:"40",y:"100",fill:"#e0f2fe",fontSize:"9",fontFamily:"monospace",children:"screen.colormode(255)"}),e.jsx("text",{x:"40",y:"130",fill:"#bae6fd",fontSize:"8",children:"Pass standard integer RGB tuples:"}),e.jsx("text",{x:"40",y:"150",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"screen.bgcolor((9, 13, 22))"}),e.jsx("text",{x:"40",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Matches Web & CSS RGB Formats ✅"}),e.jsx("rect",{x:"420",y:"30",width:"370",height:"190",rx:"6",fill:"#042f2e",stroke:"#2dd4bf"}),e.jsx("text",{x:"430",y:"55",fill:"#5eead4",fontSize:"11",fontWeight:"bold",children:"2. Hexadecimal String Mode"}),e.jsx("text",{x:"430",y:"80",fill:"#ccfbf1",fontSize:"8",children:"Works in any colormode natively:"}),e.jsx("text",{x:"430",y:"100",fill:"#5eead4",fontSize:"9",fontFamily:"monospace",children:'screen.bgcolor("#090d16")'}),e.jsx("text",{x:"430",y:"130",fill:"#ccfbf1",fontSize:"8",children:"Pen Colors:"}),e.jsx("text",{x:"430",y:"150",fill:"#5eead4",fontSize:"9",fontFamily:"monospace",children:'t.color("#2dd4bf", "#f43f5e")'}),e.jsx("text",{x:"430",y:"195",fill:"#86efac",fontSize:"8",fontWeight:"bold",children:"Cleanest & Most Modern Syntax ✅"})]})]}):e.jsxs("svg",{viewBox:"0 0 880 340",className:"w-full h-auto min-w-[700px] font-sans",children:[e.jsx("text",{x:"30",y:"30",fill:"#c084fc",fontSize:"14",fontWeight:"bold",children:"PHYSICAL VIEWPORT (SETUP) VS VIRTUAL SCROLLABLE BUFFER (SCREENSIZE)"}),e.jsxs("g",{transform:"translate(30, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"820",height:"245",rx:"8",fill:"#1e1b4b",stroke:"#a855f7"}),e.jsx("rect",{x:"40",y:"25",width:"740",height:"195",rx:"6",fill:"#2e1065",stroke:"#c084fc",strokeDasharray:"4 4"}),e.jsx("text",{x:"50",y:"45",fill:"#d8b4fe",fontSize:"9",fontWeight:"bold",children:"Virtual Drawing Buffer: screen.screensize(2400, 1800)"}),e.jsxs("g",{transform:"translate(180, 55)",children:[e.jsx("rect",{x:"0",y:"0",width:"440",height:"135",rx:"6",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"20",y:"30",fill:"#38bdf8",fontSize:"10",fontWeight:"bold",children:"Physical OS Viewport: screen.setup(800, 600)"}),e.jsx("text",{x:"20",y:"55",fill:"#bae6fd",fontSize:"8",children:"Visible portion of the graphics to the user"}),e.jsx("rect",{x:"425",y:"5",width:"10",height:"125",rx:"2",fill:"#334155"}),e.jsx("rect",{x:"427",y:"20",width:"6",height:"40",rx:"2",fill:"#64748b"}),e.jsx("rect",{x:"5",y:"122",width:"420",height:"10",rx:"2",fill:"#334155"}),e.jsx("rect",{x:"40",y:"124",width:"60",height:"6",rx:"2",fill:"#64748b"})]}),e.jsx("text",{x:"190",y:"210",fill:"#facc15",fontSize:"8",fontWeight:"bold",children:"Tkinter automatically renders native scrollbars when screensize > setup!"})]})]})})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"🧪"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"3. Interactive Screen Theme & Geometry Configurator"})]}),e.jsx("p",{className:"text-slate-300 mb-6 text-base leading-relaxed",children:"Select curated dark theme palettes and window viewport resolutions to preview generated Python configuration code and simulated canvas appearance:"}),e.jsxs("div",{className:"bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800/90 space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"1. Select Background Theme Palette:"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:u.map((t,s)=>e.jsxs("button",{onClick:()=>p(t),className:l("p-3 rounded-xl border text-left transition-all",r.name===t.name?"bg-teal-950/80 border-teal-500 shadow-md shadow-teal-950/50":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"),children:[e.jsx("div",{className:"text-xs font-bold text-slate-200",children:t.name}),e.jsx("div",{className:"text-[10px] text-teal-400 font-mono mt-0.5",children:t.bgHex})]},s))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2",children:"2. Select Viewport Resolution Preset:"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:f.map((t,s)=>e.jsx("button",{onClick:()=>m(t),className:l("p-2.5 rounded-xl border text-xs font-bold transition-all text-center",a.label===t.label?"bg-cyan-950/80 border-cyan-500 text-cyan-200 shadow-md shadow-cyan-950/50":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"),children:t.label},s))})]}),e.jsxs("div",{className:"bg-slate-900/90 rounded-xl border border-slate-800 p-4 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-3 h-3 rounded-full bg-rose-500 inline-block"}),e.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-500 inline-block"}),e.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-500 inline-block"}),e.jsxs("span",{className:"text-xs text-slate-300 font-mono ml-2",children:["Coder & Accotax • ",r.name," (",a.width,"x",a.height,")"]})]}),e.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:a.aspectRatio})]}),e.jsxs("div",{style:{backgroundColor:r.bgHex},className:"w-full h-44 rounded-lg flex items-center justify-center border border-slate-800 transition-colors duration-300 relative overflow-hidden",children:[e.jsxs("svg",{viewBox:"0 0 200 100",className:"w-48 h-24",children:[e.jsx("polygon",{points:"100,20 160,80 40,80",fill:"none",stroke:r.penHex,strokeWidth:"2.5"}),e.jsx("circle",{cx:"100",cy:"20",r:"4",fill:r.penHex,className:"animate-glow-teal"})]}),e.jsx("div",{className:"absolute bottom-2 right-3 text-[10px] font-mono text-slate-400",children:r.rgb})]}),e.jsx("pre",{className:"p-3 bg-slate-950 rounded-lg text-xs font-mono text-teal-300 overflow-x-auto",children:`import turtle

screen = turtle.Screen()
screen.setup(width=${a.width}, height=${a.height})
screen.title("Coder & Accotax • ${r.name}")
screen.bgcolor("${r.bgHex}")
screen.colormode(255)`})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"💻"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"4. Production Code Labs & Screen Configuration Suites"})]}),e.jsx("p",{className:"text-slate-300 mb-8 text-base leading-relaxed",children:"Inspect, run, and master all four production-grade screen configuration labs covering window geometry, color theming, virtual buffers, and multi-screen student presentations:"}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-teal-300",children:"Lab 1: Window Geometry, Setup Coordinates & Fractional Scaling"}),e.jsxs("p",{className:"text-sm text-slate-400",children:["Configuring absolute pixel viewports, monitor placement (",e.jsx("code",{className:"text-teal-300 font-mono",children:"startx"}),", ",e.jsx("code",{className:"text-teal-300 font-mono",children:"starty"}),"), and responsive float dimensions."]})]}),e.jsx(c,{fileModule:v,title:"screen_setup_and_window_geometry.py",highlightLines:[16,26,38]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-cyan-300",children:"Lab 2: Canvas Theming, Hex Codes & RGB Colormode(255) Control"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Switching between curated dark theme palettes and validating 0-255 RGB integer tuple integrity."})]}),e.jsx(c,{fileModule:y,title:"canvas_theming_and_bgcolor_control.py",highlightLines:[16,26,38]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-purple-300",children:"Lab 3: Virtual Canvas Buffers (screensize) vs Physical Viewports (setup)"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Allocating high-resolution virtual buffers and calculating scrollable pixel spans for large generative art canvases."})]}),e.jsx(c,{fileModule:j,title:"screensize_and_scrollable_canvases.py",highlightLines:[16,26,38]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300",children:"Lab 4: Institutional Student Exhibition Screen Director Case Study"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Multi-project screen director applying custom themes and resolutions for Mamata, Mahima, and Susmita."})]}),e.jsx(c,{fileModule:_,title:"institutional_multi_screen_presentation_suite.py",highlightLines:[16,28,42,54]})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"5. Screen Configuration Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"1. Passing RGB (0-255) Without colormode(255)"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Calling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"bgcolor((15, 23, 42))"})," raises a ",e.jsx("code",{className:"text-rose-400 font-mono",children:"TurtleGraphicsError: bad color sequence"})," because default mode expects floats 0.0-1.0."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: screen.colormode(255) before passing RGB tuples"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"2. Confusing setup() with screensize()"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Calling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"screensize(800, 600)"})," does not change the physical window size; it only resizes the internal drawing buffer."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Use screen.setup(800, 600) for the physical window"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"3. Hardcoding Window Positions"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Hardcoding ",e.jsx("code",{className:"text-rose-400 font-mono",children:"startx=1500"})," can push the window off-screen on users with smaller 1366x768 laptop displays."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: Omit startx/starty to auto-center the window"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/50",children:[e.jsx("h3",{className:"text-rose-300 font-bold text-base mb-1",children:"4. Omitting Exit Binding"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed mb-2",children:["Configuring the screen without concluding the script with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"exitonclick()"})," causes the window to terminate immediately."]}),e.jsx("pre",{className:"text-[11px] font-mono bg-slate-950/80 p-2 rounded text-rose-300",children:"# FIX: screen.exitonclick() at the end of the script"})]})]})]}),e.jsxs("section",{ref:n,className:"section-hidden bg-slate-900/80 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-950/40 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-3xl",children:"✅"}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white",children:"6. Screen Configuration Best Practices Checklist"})]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm sm:text-base",children:[e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Configure Early in Script:"})," Invoke ",e.jsx("code",{className:"text-teal-300 font-mono",children:"screen.setup()"})," and ",e.jsx("code",{className:"text-teal-300 font-mono",children:"screen.bgcolor()"})," before creating turtle objects."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Use Dark Mode Theming:"})," Pair high-contrast dark backgrounds (",e.jsx("code",{className:"text-teal-300 font-mono",children:"#090d16"}),") with neon pens (",e.jsx("code",{className:"text-teal-300 font-mono",children:"#2dd4bf"}),")."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Add Informative Window Titles:"})," Brand windows clearly with ",e.jsx("code",{className:"text-teal-300 font-mono",children:'screen.title("...")'}),"."]})]}),e.jsxs("div",{className:"flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-teal-400 font-bold",children:"✓"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white",children:"Conclude with exitonclick():"})," Ensure clean user-initiated window dismissal."]})]})]})]}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(b,{title:"Screen Configuration & Canvas Theming FAQs",questions:S})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(g,{content:N,title:"Topic 2: Screen Configuration & Theming Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic2_note.txt"})}),e.jsx("section",{ref:n,className:"section-hidden",children:e.jsx(w,{note:"A polished desktop graphics application begins with a clean, branded window. When Mamata, Mahima, and Susmita prepared their final graphics exhibits at our Barrackpore and Kolkata centers, configuring dark themed backgrounds (#090d16) and descriptive title bars elevated their projects from simple class exercises into museum-worthy digital art installations. Always take pride in your application's first impression!"})})]})]})}export{z as default};
