import{b as s,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as f}from"./TeacherSukantaHui-RpFLNJ5A.js";import{P as l}from"./PythonFileLoader-hCi5osN-.js";import{F as y}from"./FAQTemplate-BHhlgA96.js";import{P as w}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-wprqVFW_.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const v=[{question:"What is Bounding Box Hit-Testing for canvas UI buttons?",shortAnswer:"Checking if a click point `(x, y)` satisfies `btn.x <= x <= btn.x + btn.w` and `btn.y <= y <= btn.y + btn.h`.",explanation:"Allows building lightweight, scalable UI buttons using data dictionaries without spawning multiple turtle instances.",hint:"What mathematical condition checks if a point lies inside a rectangle?",level:"basic",codeExample:"if (bx <= x <= bx + bw) and (by <= y <= by + bh): fire_action()"},{question:"What is the main advantage of Turtle Sprite Buttons (`turtle.onclick`) over manual bounding boxes?",shortAnswer:"`turtle.onclick` leverages Tkinter's native C hit-testing automatically and makes tactile click scaling animations effortless.",explanation:"Sprite buttons handle coordinate transformation and hit-testing out of the box.",hint:"Why use turtle.onclick for interactive buttons?",level:"basic",codeExample:"btn_turtle.onclick(handle_click)"},{question:"How do you create a tactile button depression animation upon clicking?",shortAnswer:"Temporarily scale the button smaller (`shapesize(0.9 * scale)`) on click, and restore original size after 100ms using `ontimer`.",explanation:"Provides immediate visual and physical feedback to the user.",hint:"How is physical button compression animated in Turtle?",level:"moderate",codeExample:"btn.shapesize(2.2, 5.5); screen.ontimer(lambda: btn.shapesize(2.5, 6), 100)"},{question:"What are the 4 standard states of a modern UI button?",shortAnswer:"1. Normal (idle) | 2. Hover (mouse over) | 3. Active / Pressed (clicking) | 4. Disabled (unclickable greyed out).",explanation:"Standard design system button lifecycle states.",hint:"What are the 4 fundamental UI button states?",level:"basic",codeExample:"# States: NORMAL, HOVER, PRESSED, DISABLED"},{question:"How do you center text labels inside a rectangular button in Turtle?",shortAnswer:"Write at `(btn.x + btn.w / 2, btn.y + vertical_offset)` with `align='center'`.",explanation:"Align='center' positions text typography symmetrically within the button bounding box.",hint:"What coordinate centers text inside a rectangle?",level:"basic",codeExample:"t.goto(bx + bw/2, by + bh/2 - 6); t.write('START', align='center')"},{question:"What is a Toggle Button (Switch)?",shortAnswer:"A button that alternates between two boolean states upon each click (e.g. SOUND ON ↔ SOUND OFF).",explanation:"Toggles store boolean state and update label/color dynamically.",hint:"What button alternates between two states on each click?",level:"basic",codeExample:"is_muted = not is_muted; update_label()"},{question:"How do you style a Disabled button in Turtle?",shortAnswer:"Render with muted grey background (`#334155`), dark grey text (`#64748b`), and ignore click events inside its bounding box.",explanation:"Visual styling and disabled event guards prevent invalid user actions.",hint:"How are disabled buttons rendered and guarded?",level:"moderate",codeExample:"if btn.disabled: return"},{question:"What is a Docked Toolbar Ribbon in application design?",shortAnswer:"A dedicated persistent bar anchored along the screen edge containing action buttons (Play, Pause, Reset, Settings).",explanation:"Docked ribbons organize application controls cleanly without cluttering the main game arena.",hint:"What UI layout anchors action buttons along the screen edge?",level:"moderate",codeExample:"# Bottom-docked dashboard ribbon"},{question:"How do you render rounded corner buttons (Capsules/Pills) in Python Turtle?",shortAnswer:"Draw horizontal rectangles capped by semicircles on both ends using `t.circle(radius, 180)`.",explanation:"Capsule buttons provide modern, sleek UI aesthetics.",hint:"How are rounded pill buttons constructed geometrically?",level:"moderate",codeExample:"t.forward(w); t.circle(r, 180); t.forward(w); t.circle(r, 180)"},{question:"How do you create a Radio Button Group where only one option can be active at a time?",shortAnswer:"Store a single `active_id` variable; clicking any option sets `active_id = chosen_id` and re-renders all radio buttons.",explanation:"Mutual exclusivity ensures single-choice selection (e.g. Difficulty: Easy / Normal / Hard).",hint:"How do radio button groups enforce single selection?",level:"advanced",codeExample:"selected_difficulty = 'HARD'; render_radios()"},{question:"What is Event Debouncing on fast button clicks?",shortAnswer:"Ignoring subsequent clicks for 200ms after a click to prevent double-triggering actions like starting multiple game loops.",explanation:"Debounce guards protect against accidental multi-clicks.",hint:"What prevents accidental double clicks on buttons?",level:"advanced",codeExample:"if now - last_click < 0.2: return; last_click = now"},{question:"Why should buttons be defined in a structured data list (`buttons = [...]`)?",shortAnswer:"Data-driven UI allows adding, styling, and repositioning 10+ buttons by simply editing a list without changing rendering loops.",explanation:"Separates UI configuration data from rendering mechanics (DRY principle).",hint:"Why use data-driven button lists rather than hardcoded code blocks?",level:"moderate",codeExample:"buttons = [{'id': 'save', 'x': 0, 'y': 0, 'w': 100, 'h': 40}]"},{question:"How do you create an interactive audio volume toggle with volume bars in Turtle?",shortAnswer:"Draw 5 vertical volume bars; clicking bar `i` sets `volume = (i + 1) * 20%` and colors active bars cyan.",explanation:"Segmented volume meters provide intuitive visual feedback.",hint:"How is an interactive 5-bar volume widget constructed?",level:"moderate",codeExample:"for i in range(5): draw_bar(i < active_vol)"},{question:"What is Mouse-Over Hover Detection on Tkinter canvas?",shortAnswer:"Binding `<Motion>` to check if the mouse pointer is inside a button rectangle, changing button background color to a lighter tint.",explanation:"Hover lighting highlights interactive targets before clicking.",hint:"What event detects mouse movement over canvas elements?",level:"advanced",codeExample:"canvas.bind('<Motion>', check_hover)"},{question:"How do you build a Dropdown Select Menu in Turtle?",shortAnswer:"Clicking the header button expands a vertical list of option buttons; selecting an option updates the header and collapses the menu.",explanation:"Dynamic dropdowns conserve screen space until activated.",hint:"How do expandable dropdown select menus function?",level:"advanced",codeExample:"is_open = not is_open; if is_open: draw_options()"},{question:"Why should `screen.tracer(0)` and `screen.update()` be used when rendering UI toolbars?",shortAnswer:"To draw all buttons, borders, and text labels instantly in RAM, avoiding visual button flickering.",explanation:"Double-buffering delivers crisp, professional UI redraws.",hint:"Why is double-buffering required for clean UI dashboards?",level:"basic",codeExample:"screen.tracer(0); render_toolbar(); screen.update()"},{question:"How do you implement an interactive Modal Confirmation Dialog ('Are you sure?')?",shortAnswer:"Dim the background; draw a centered card with message text and two clickable buttons: '[YES, QUIT]' and '[CANCEL]'.",explanation:"Confirmation modals prevent accidental loss of game progress.",hint:"How are confirmation dialogs constructed in canvas UIs?",level:"moderate",codeExample:"draw_modal('Quit Game?'); draw_btn('Yes'); draw_btn('Cancel')"},{question:"What is Button Padding and Margin in UI layout design?",shortAnswer:"Padding is the space between button text and border; margin is the spacing between adjacent buttons.",explanation:"Consistent padding and margins create harmonious, readable interfaces.",hint:"What terms describe internal and external button spacing?",level:"basic",codeExample:"# Padding & Margin spacing standards"},{question:"How do you create an animated Loading Spinner button?",shortAnswer:"While an async operation loads, replace button text with a rotating arc `t.circle(12, 90)` updated on an `ontimer` loop.",explanation:"Loading animations inform users that work is in progress.",hint:"How do button loading spinners indicate async tasks?",level:"advanced",codeExample:"spinner_angle = (spinner_angle + 30) % 360"},{question:"How do you bind hotkey accelerators to UI buttons (e.g. Space to trigger Play button)?",shortAnswer:"Bind both `screen.onclick` to the button bounding box AND `screen.onkeypress` to the same action handler function.",explanation:"Allows users to trigger actions via mouse clicks or keyboard shortcuts interchangeably.",hint:"How do you connect both mouse clicks and keyboard hotkeys to one action?",level:"basic",codeExample:"screen.onkeypress(toggle_play, 'space')"},{question:"What is an Icon Button (Glyph Button)?",shortAnswer:"A compact button containing a vector symbol (e.g. ⚙, 🔊, ▶, ✕) rather than full text.",explanation:"Icon buttons maximize canvas real estate in tight toolbars.",hint:"What type of button displays symbols instead of text words?",level:"basic",codeExample:"btn['label'] = '⚙'"},{question:"How do you calculate grid coordinates for a 3x3 Button Keypad (Calculator/Pinpad)?",shortAnswer:"`row = i // 3; col = i % 3; x = start_x + col*(w + gap); y = start_y - row*(h + gap)`.",explanation:"Modulo and integer division formulas lay out button matrices automatically.",hint:"What formula positions buttons into 2D grid matrix rows and columns?",level:"moderate",codeExample:"x = start_x + (i % 3)*60; y = start_y - (i // 3)*60"},{question:"Why should button hit boxes be slightly larger than the visual text itself?",shortAnswer:"To provide a generous clickable area (Fitts's Law), making buttons effortless to click without requiring pixel-perfect mouse precision.",explanation:"Fitts's Law is a foundational principle of human-computer interaction.",hint:"What HCI principle states larger clickable areas improve speed and accuracy?",level:"moderate",codeExample:"# Fitts's Law generous click target padding"},{question:"How do you implement a Tooltip on canvas buttons?",shortAnswer:"When hover is detected over a button for > 0.5s, draw a small floating black bubble with helpful explanatory text.",explanation:"Tooltips explain icon button functions without cluttering the main UI.",hint:"What UI element pops up explanatory text when hovering over buttons?",level:"advanced",codeExample:"draw_tooltip(x, y + 30, 'Mute Audio')"},{question:"How do you play custom sound effects on button clicks in Python?",shortAnswer:"Invoke `playsound('click.wav')` or `pygame.mixer.Sound('click.wav').play()` inside the click handler.",explanation:"Audio feedback provides crisp multimodal confirmation of user input.",hint:"How is audio feedback added to button clicks?",level:"moderate",codeExample:"def on_click(x, y): play_sound('click.wav'); action()"},{question:"What is Dynamic Color Theming (Dark Mode ↔ Light Mode) for canvas UIs?",shortAnswer:"Storing color palette tokens in a dictionary (`theme = {'bg': '#020617', 'card': '#0f172a'}`) and swapping dictionaries upon toggle.",explanation:"Centralized design tokens allow instantaneous whole-app theme swapping.",hint:"How are design tokens used to toggle Dark and Light themes?",level:"moderate",codeExample:"theme = dark_palette if is_dark else light_palette"},{question:"Why is a custom GUI canvas engine better than mixing Tkinter native buttons into Turtle?",shortAnswer:"Because native OS Tkinter buttons sit in separate window layers that don't scale with canvas coordinates, don't export to EPS, and look like 1995 Windows 95 widgets.",explanation:"Pure canvas vector buttons look modern, match game art themes, and scale with graphics.",hint:"Why draw custom canvas buttons rather than using default Tkinter widget buttons?",level:"basic",codeExample:"# Custom canvas vector UI integration"},{question:"What is the 3-step Golden Rule for Interactive UI Buttons in Python Turtle?",shortAnswer:"1. Define buttons as a data list with bounding box geometry | 2. Render buttons & centered labels in double buffer | 3. Hit-test and dispatch in `screen.onclick()`.",explanation:"This 3-step blueprint guarantees scalable, professional graphical user interfaces.",hint:"What 3 steps build custom interactive UI toolbars in Turtle?",level:"basic",codeExample:"# 1. Button data list → 2. Batch render → 3. Hit-test in onclick"},{question:"How does building custom UI components in Python prepare students for React, Flutter, and TailwindCSS?",shortAnswer:"Because component props, state-driven rendering, bounding box layouts, and event dispatching are the exact foundations of modern frontend engineering.",explanation:"Custom UI development bridges computer graphics to enterprise frontend frameworks.",hint:"How do custom canvas buttons connect to React components and TailwindCSS?",level:"basic",codeExample:"# Direct mapping to React UI components and state design"},{question:"How does completing Module 005_006 elevate a student's programming capability?",shortAnswer:"It transforms them from writing passive script calculators into full-fledged interactive software engineers capable of designing complete user-driven applications.",explanation:"User interaction is the gateway to real-world software creation.",hint:"What milestone does completing Module 005_006 represent?",level:"basic",codeExample:"# Full-stack interactive software engineering mastery"}],_=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 7 - Creating interactive buttons and clickable UI on canvas\r
File: clickable_canvas_button_engine.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Bounding Box Button Manager:\r
- Defines buttons as data dicts \`{'name': 'START', 'x': -100, 'y': 50, 'w': 200, 'h': 45, 'color': '#38bdf8'}\`\r
- Renders button rectangles and centered typography.\r
- Hit testing: \`is_inside = (btn['x'] <= x <= btn['x'] + btn['w']) and (btn['y'] <= y <= btn['y'] + btn['h'])\`.\r
"""\r
\r
import turtle\r
\r
def run_button_engine():\r
    screen = turtle.Screen()\r
    screen.title("Bounding Box Button Engine - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
    status_msg = ["CLICK ANY BUTTON"]\r
\r
    buttons = [\r
        {"id": "play", "text": "▶ PLAY GAME", "x": -110, "y": 40, "w": 220, "h": 50, "bg": "#0284c7", "fg": "white"},\r
        {"id": "settings", "text": "⚙ SETTINGS", "x": -110, "y": -30, "w": 220, "h": 50, "bg": "#334155", "fg": "#38bdf8"},\r
        {"id": "quit", "text": "✕ QUIT", "x": -110, "y": -100, "w": 220, "h": 50, "bg": "#881337", "fg": "#f43f5e"}\r
    ]\r
\r
    def render_ui():\r
        t.clear()\r
\r
        # Render Header\r
        t.penup(); t.goto(0, 150); t.pendown()\r
        t.color("#38bdf8")\r
        t.write("CANVAS UI BUTTON MANAGER", align="center", font=("Arial", 16, "bold"))\r
\r
        # Render Buttons\r
        for b in buttons:\r
            # Button Rectangle\r
            t.penup(); t.goto(b["x"], b["y"]); t.pendown()\r
            t.color(b["bg"], b["bg"]); t.begin_fill()\r
            for _ in range(2): t.forward(b["w"]); t.left(90); t.forward(b["h"]); t.left(90)\r
            t.end_fill()\r
\r
            # Button Border\r
            t.color("#64748b"); t.pensize(2)\r
            for _ in range(2): t.forward(b["w"]); t.left(90); t.forward(b["h"]); t.left(90)\r
\r
            # Centered Text Label\r
            t.penup(); t.goto(b["x"] + b["w"]/2, b["y"] + 15); t.pendown()\r
            t.color(b["fg"])\r
            t.write(b["text"], align="center", font=("Arial", 12, "bold"))\r
\r
        # Status HUD\r
        t.penup(); t.goto(0, -180); t.pendown(); t.color("#34d399")\r
        t.write(f"STATUS: {status_msg[0]}", align="center", font=("Arial", 12, "bold"))\r
\r
        screen.update()\r
\r
    def on_click(x, y):\r
        # Hit-test all buttons\r
        clicked = False\r
        for b in buttons:\r
            if (b["x"] <= x <= b["x"] + b["w"]) and (b["y"] <= y <= b["y"] + b["h"]):\r
                status_msg[0] = f"DISPATCHED ACTION: '{b['id'].upper()}'"\r
                clicked = True\r
                break\r
        if not clicked:\r
            status_msg[0] = f"CLICKED BACKGROUND AT ({x:.0f}, {y:.0f})"\r
        render_ui()\r
\r
    screen.onclick(on_click)\r
    render_ui()\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_button_engine()\r
`,k=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 7 - Creating interactive buttons and clickable UI on canvas\r
File: tactile_animated_turtle_buttons.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Tactile Sprite Buttons with Click Depth Depression:\r
- Turtles styled as square buttons using \`t.shapesize(2.5, 6)\`.\r
- When clicked, shrinks temporarily to simulate physical tactile button compression!\r
"""\r
\r
import turtle\r
\r
def run_tactile_buttons():\r
    screen = turtle.Screen()\r
    screen.title("Tactile Animated Turtle Buttons - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
\r
    # Status Turtle\r
    hud = turtle.Turtle(); hud.hideturtle()\r
    def update_hud(text):\r
        hud.clear()\r
        hud.penup(); hud.goto(0, 160); hud.pendown()\r
        hud.color("#38bdf8")\r
        hud.write(text, align="center", font=("Arial", 14, "bold"))\r
\r
    def create_tactile_button(x, y, color, label_text, action_name):\r
        btn = turtle.Turtle()\r
        btn.shape("square")\r
        btn.shapesize(2.5, 6)  # 50px height x 120px width\r
        btn.color("white", color)\r
        btn.penup()\r
        btn.goto(x, y)\r
\r
        # Label\r
        lbl = turtle.Turtle(); lbl.hideturtle()\r
        lbl.penup(); lbl.goto(x, y - 8); lbl.pendown()\r
        lbl.color("white")\r
        lbl.write(label_text, align="center", font=("Arial", 11, "bold"))\r
\r
        def on_btn_click(cx, cy):\r
            # Tactile Depression Animation\r
            btn.shapesize(2.2, 5.5)  # Shrink on press\r
            update_hud(f"TACTILE CLICK TRIGGERED: {action_name}")\r
            # Restore size after 120ms\r
            screen.ontimer(lambda: btn.shapesize(2.5, 6), 120)\r
\r
        btn.onclick(on_btn_click)\r
        return btn\r
\r
    create_tactile_button(-150, 0, "#059669", "BOOST", "SPEED_BOOST (+50%)")\r
    create_tactile_button(0, 0, "#0284c7", "SHIELD", "DEFENSE_SHIELD (ON)")\r
    create_tactile_button(150, 0, "#dc2626", "NUKE", "TACTICAL_NUKE (FIRED)")\r
\r
    update_hud("CLICK ANY BUTTON FOR TACTILE FEEDBACK")\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_tactile_buttons()\r
`,T=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 7 - Creating interactive buttons and clickable UI on canvas\r
File: complete_interactive_game_toolbar.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Full In-Game Dashboard Toolbar:\r
- Bottom docked toolbar with 4 interactive UI widgets:\r
  1. [PLAY / PAUSE] toggle button\r
  2. [RESET] game button\r
  3. [SOUND: ON/OFF] audio switcher\r
  4. [THEME: DARK/LIGHT] theme toggle\r
"""\r
\r
import turtle\r
\r
def run_toolbar_dashboard():\r
    screen = turtle.Screen()\r
    screen.title("In-Game Dashboard Toolbar - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
\r
    app_state = {\r
        "is_playing": False,\r
        "sound_on": True,\r
        "theme": "DARK",\r
        "clicks": 0\r
    }\r
\r
    toolbar_buttons = [\r
        {"id": "play_pause", "label": "▶ PLAY", "x": -260, "y": -230, "w": 110, "h": 40, "col": "#059669"},\r
        {"id": "reset",      "label": "↺ RESET", "x": -130, "y": -230, "w": 110, "h": 40, "col": "#dc2626"},\r
        {"id": "sound",      "label": "🔊 AUDIO: ON", "x": 0, "y": -230, "w": 130, "h": 40, "col": "#0284c7"},\r
        {"id": "theme",      "label": "🌓 THEME", "x": 150, "y": -230, "w": 110, "h": 40, "col": "#7c3aed"}\r
    ]\r
\r
    def render_dashboard():\r
        t.clear()\r
\r
        # Update dynamic button labels\r
        toolbar_buttons[0]["label"] = "⏸ PAUSE" if app_state["is_playing"] else "▶ PLAY"\r
        toolbar_buttons[2]["label"] = "🔊 AUDIO: ON" if app_state["sound_on"] else "🔇 AUDIO: OFF"\r
\r
        # Docked Toolbar Background Bar\r
        t.penup(); t.goto(-375, -250); t.pendown()\r
        t.color("#0f172a", "#020617"); t.begin_fill()\r
        for _ in range(2): t.forward(750); t.left(90); t.forward(80); t.left(90)\r
        t.end_fill()\r
\r
        # Render Buttons\r
        for b in toolbar_buttons:\r
            t.penup(); t.goto(b["x"], b["y"]); t.pendown()\r
            t.color(b["col"], b["col"]); t.begin_fill()\r
            for _ in range(2): t.forward(b["w"]); t.left(90); t.forward(b["h"]); t.left(90)\r
            t.end_fill()\r
\r
            t.penup(); t.goto(b["x"] + b["w"]/2, b["y"] + 12); t.pendown()\r
            t.color("white")\r
            t.write(b["label"], align="center", font=("Arial", 10, "bold"))\r
\r
        # Main Arena Status Readout\r
        t.penup(); t.goto(0, 50); t.pendown()\r
        t.color("#38bdf8")\r
        t.write(f"GAME STATUS: {'RUNNING' if app_state['is_playing'] else 'STOPPED'}", align="center", font=("Arial", 18, "bold"))\r
\r
        t.penup(); t.goto(0, 0); t.pendown()\r
        t.color("#34d399")\r
        t.write(f"AUDIO: {'ENABLED' if app_state['sound_on'] else 'MUTED'}  |  TOTAL CLICKS: {app_state['clicks']}", align="center", font=("Arial", 12))\r
\r
        screen.update()\r
\r
    def handle_click(x, y):\r
        app_state["clicks"] += 1\r
        for b in toolbar_buttons:\r
            if (b["x"] <= x <= b["x"] + b["w"]) and (b["y"] <= y <= b["y"] + b["h"]):\r
                if b["id"] == "play_pause": app_state["is_playing"] = not app_state["is_playing"]\r
                elif b["id"] == "reset": app_state["is_playing"] = False; app_state["clicks"] = 0\r
                elif b["id"] == "sound": app_state["sound_on"] = not app_state["sound_on"]\r
                break\r
        render_dashboard()\r
\r
    screen.onclick(handle_click)\r
    render_dashboard()\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_toolbar_dashboard()\r
`,N=`================================================================================\r
  TOPIC 7: CREATING INTERACTIVE BUTTONS AND CLICKABLE UI ON CANVAS\r
  MODULE: 005_006 - Event Handling & User Interaction\r
  COURSE: Python Creative Graphics & Foundations\r
  TEACHER & MENTOR: Sukanta Hui\r
================================================================================\r
\r
1. TWO BUTTON ARCHITECTURES IN TURTLE\r
--------------------------------------------------------------------------------\r
1. Bounding Box Manager (\`screen.onclick\` + Geometry Math):\r
   - Define buttons as dictionary structs \`{'id': 'play', 'x': -100, 'y': 0, 'w': 200, 'h': 50}\`\r
   - In \`screen.onclick(x, y)\`: test \`btn['x'] <= x <= btn['x'] + btn['w']\`\r
   - Advantage: Infinite buttons drawn with 1 turtle; perfect for toolbars and menus.\r
\r
2. Turtle Sprite Buttons (\`turtle.onclick\`):\r
   - Instantiate a \`turtle.Turtle()\`, set \`shapesize(2.5, 6)\`\r
   - Attach \`t.onclick(handler)\`\r
   - Advantage: Automatic polygon hit testing and tactile depression animations!\r
\r
2. TACTILE COMPRESSION ANIMATION\r
--------------------------------------------------------------------------------\r
When a button is clicked, shrink its dimensions temporarily:\r
\`btn.shapesize(2.2, 5.5)\` → \`screen.ontimer(lambda: btn.shapesize(2.5, 6), 100)\`\r
This gives the user immediate visual and tactile feedback.\r
\r
3. BUILDING A COMPLETE UI TOOLBAR\r
--------------------------------------------------------------------------------\r
Combine Play/Pause toggles, Reset triggers, Audio switches, and Color pickers into\r
a persistent bottom-docked dashboard ribbon.\r
\r
================================================================================\r
  END OF NOTE - Coder & AccoTax Classroom Reference Series\r
================================================================================`,A=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes clickDepress {
  0% { transform: scale(1); }
  50% { transform: scale(0.92); }
  100% { transform: scale(1); }
}
`,H=()=>{const[n,c]=s.useState(!1),[i,p]=s.useState(!0),[h,d]=s.useState(120),[x,m]=s.useState("Click any dashboard button"),[r,u]=s.useState(null),o=(t,a,b)=>{u(t),setTimeout(()=>u(null),150),m(`⚡ Action Dispatched: [${a.toUpperCase()}]`),b&&b()},g=[{name:"Bounding Box Hit-Testing",returnType:"Spatial Geometry Math",purpose:"Tests if mouse (x, y) coordinates fall within button rectangle: `bx <= x <= bx + bw` and `by <= y <= by + bh`.",usage:`if (bx <= x <= bx + bw) and (by <= y <= by + bh):
    dispatch_action()`},{name:"turtle.onclick() Sprite Buttons",returnType:"Tactile Sprite UI",purpose:"Instantiates turtle button shapes with `shapesize(2.5, 6)` and tactile depression click animations.",usage:`btn.shapesize(2.2, 5.5)
screen.ontimer(lambda: btn.shapesize(2.5, 6), 100)`},{name:"Docked Dashboard Ribbon",returnType:"UI Layout Pattern",purpose:"Anchors action controls (Play, Reset, Audio, Theme) along bottom canvas border.",usage:"draw_docked_toolbar(buttons)"},{name:"Dynamic State Toggle Buttons",returnType:"Reactive Control",purpose:"Alternates boolean states (Play ↔ Pause, Audio ON ↔ Audio OFF) updating label and color dynamically.",usage:"is_playing = not is_playing"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:A}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_006 · Event Handling & Interaction · Topic 7"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent",children:"Interactive Buttons & Clickable UI on Canvas"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Construct professional graphical user interfaces in pure Python. Master ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"Bounding Box Hit-Testing"}),", ",e.jsx("span",{className:"text-emerald-400 font-bold",children:"Tactile Button Click Depressions"}),", ",e.jsx("span",{className:"text-amber-300 font-semibold",children:"Docked Toolbars"}),", and ",e.jsx("span",{className:"text-purple-400 font-semibold",children:"Dynamic Toggle Switches"}),"."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎛️ Bounding Box Button Engine"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"💥 Tactile Click Compression Animation"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎮 In-Game Docked Dashboard Ribbon"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🎛️"})," Interactive In-Game Dashboard & UI Ribbon"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Click the docked toolbar buttons to trigger tactile animations, toggle audio, boost speed, and observe real-time bounding box hit-testing."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-cyan-300 font-bold",children:["SCORE: ",h," PTS"]}),e.jsxs("span",{className:`px-3 py-1 rounded-lg text-xs font-mono font-bold border ${n?"bg-emerald-500/20 text-emerald-300 border-emerald-500/40":"bg-rose-500/20 text-rose-300 border-rose-500/40"}`,children:["STATUS: ",n?"RUNNING":"STOPPED"]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:"Game Canvas & Docked Toolbar Surface"}),e.jsxs("svg",{viewBox:"0 0 320 180",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg border border-slate-800 select-none",children:[e.jsx("rect",{x:"15",y:"15",width:"290",height:"110",rx:"4",fill:"#0f172a",stroke:"#1e293b",strokeWidth:"1"}),e.jsxs("g",{transform:"translate(160, 70)",children:[e.jsx("circle",{cx:"0",cy:"0",r:n?"18":"14",fill:n?"#38bdf8":"#64748b",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("circle",{cx:"0",cy:"0",r:"6",fill:"#020617"})]}),e.jsx("rect",{x:"15",y:"132",width:"290",height:"36",rx:"4",fill:"#020617",stroke:"#334155",strokeWidth:"1.5"}),e.jsxs("g",{transform:"translate(25, 137)",onClick:()=>o("play",n?"Pause":"Play",()=>c(!n)),className:`cursor-pointer transition-transform duration-100 ${r==="play"?"scale-95":""}`,children:[e.jsx("rect",{x:"0",y:"0",width:"60",height:"26",rx:"4",fill:n?"#f59e0b":"#059669"}),e.jsx("text",{x:"30",y:"17",fill:"#ffffff",fontSize:"8.5",fontWeight:"bold",textAnchor:"middle",fontFamily:"sans-serif",children:n?"⏸ PAUSE":"▶ PLAY"})]}),e.jsxs("g",{transform:"translate(93, 137)",onClick:()=>o("boost","Boost +50",()=>d(t=>t+50)),className:`cursor-pointer transition-transform duration-100 ${r==="boost"?"scale-95":""}`,children:[e.jsx("rect",{x:"0",y:"0",width:"60",height:"26",rx:"4",fill:"#0284c7"}),e.jsx("text",{x:"30",y:"17",fill:"#ffffff",fontSize:"8.5",fontWeight:"bold",textAnchor:"middle",fontFamily:"sans-serif",children:"⚡ BOOST"})]}),e.jsxs("g",{transform:"translate(161, 137)",onClick:()=>o("audio",i?"Audio Muted":"Audio On",()=>p(!i)),className:`cursor-pointer transition-transform duration-100 ${r==="audio"?"scale-95":""}`,children:[e.jsx("rect",{x:"0",y:"0",width:"65",height:"26",rx:"4",fill:"#6366f1"}),e.jsx("text",{x:"32.5",y:"17",fill:"#ffffff",fontSize:"8.5",fontWeight:"bold",textAnchor:"middle",fontFamily:"sans-serif",children:i?"🔊 AUDIO":"🔇 MUTED"})]}),e.jsxs("g",{transform:"translate(234, 137)",onClick:()=>o("reset","Reset Game",()=>{c(!1),d(0)}),className:`cursor-pointer transition-transform duration-100 ${r==="reset"?"scale-95":""}`,children:[e.jsx("rect",{x:"0",y:"0",width:"60",height:"26",rx:"4",fill:"#dc2626"}),e.jsx("text",{x:"30",y:"17",fill:"#ffffff",fontSize:"8.5",fontWeight:"bold",textAnchor:"middle",fontFamily:"sans-serif",children:"↺ RESET"})]})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"Bounding Box Hit-Testing Telemetry"}),e.jsx("span",{className:"font-mono text-xs text-emerald-300 font-bold",children:"O(B) Linear Check"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-400 text-[11px]",children:"Last UI Dispatch Event"}),e.jsx("div",{className:"text-xs font-mono font-bold mt-1 text-cyan-300",children:x})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# Bounding Box Hit-Testing Blueprint"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`def on_canvas_click(x, y):
    for b in buttons:
        if (b["x"] <= x <= b["x"] + b["w"]) and \\
           (b["y"] <= y <= b["y"] + b["h"]):
            b["action"]()
            return`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Interactive Canvas UI Core APIs"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Pattern / Component"}),e.jsx("th",{className:"py-3 px-4",children:"UI Layer"}),e.jsx("th",{className:"py-3 px-4",children:"Interactive Role"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Syntax"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:g.map((t,a)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:t.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:t.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:t.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:t.usage})]},a))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(l,{fileModule:_,title:"clickable_canvas_button_engine.py",highlightLines:[19,20,21,35,46,56,57,58]}),e.jsx(l,{fileModule:k,title:"tactile_animated_turtle_buttons.py",highlightLines:[25,26,38,40,42,47,48]}),e.jsx(l,{fileModule:T,title:"complete_interactive_game_toolbar.py",highlightLines:[26,27,28,29,36,37,63,64,65]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🎛️"})," Barrackpore Digital Soundboard Dashboard"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Mahima built an electronic music synthesizer dashboard in Barrackpore. By anchoring an 8-button soundboard ribbon along the bottom edge, clicking buttons triggered drum samples, basslines, and synth pads with instant tactile depression animations!"})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🎨"})," Kolkata Graphic Design Suite Toolbar"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Abhronila in Kolkata constructed a graphic design workstation with Brush, Eraser, Fill, and Undo toolbar buttons. By implementing the Bounding Box Manager, clicking buttons switched tools effortlessly without creating dozens of separate turtle objects!"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Canvas UI Traps to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Confusing Top-Left vs Bottom-Left Coordinates"}),e.jsxs("p",{className:"text-slate-400",children:["Turtle draws rectangles starting from the bottom-left corner ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"(x, y)"})," up to ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"(x + w, y + h)"}),". Testing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"y - h"})," causes clicks to be missed."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Creating 50 Turtle Objects for Buttons"}),e.jsxs("p",{className:"text-slate-400",children:["Spawning a new ",e.jsx("code",{className:"text-rose-300 font-mono",children:"turtle.Turtle()"})," for every button and text label consumes hundreds of Tkinter handles. Use 1 turtle to render all bounding box buttons."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Zero Visual Feedback on Clicks"}),e.jsxs("p",{className:"text-slate-400",children:["Buttons that don't animate or change color feel broken to users. Always provide tactile scaling (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"shapesize(0.9)"}),") or status banner updates upon click."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Hardcoding Button Coordinates Everywhere"}),e.jsx("p",{className:"text-slate-400",children:"Duplicating button coordinates in the draw function and click handler causes bugs when moving buttons. Always define buttons once in a data dictionary list."})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I know how to test if a click coordinate falls inside a button bounding box","I center button text labels using `(btn.x + btn.w/2)` and `align='center'`","I implement tactile depression animations on button clicks using `shapesize()` and `ontimer()`","I build docked toolbar ribbons containing Play, Pause, Reset, and Audio toggles","I define buttons as structured data dictionaries to follow clean DRY principles","I know how to build complete interactive graphical applications in Python Turtle"].map((t,a)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:t})]},a))})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s]",children:[e.jsxs("div",{className:"bg-cyan-900/20 rounded-2xl p-5 border border-cyan-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-cyan-300",children:"💡 Hints to Explore"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Think about:"})," How modern design systems (TailwindCSS, Material Design, Apple HIG) structure button states, padding, elevation, and tactile feedback!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Observe:"})," How clicking the buttons in our simulator triggers instant visual compression and dispatches state updates!"]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["👉 ",e.jsx("strong",{children:"Try changing:"})," Add a 5th button to the toolbar that switches between Dark Mode and Light Mode color schemes!"]})]}),e.jsxs("div",{className:"bg-indigo-900/20 rounded-2xl p-5 border border-indigo-500/30 space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-300",children:"🚀 Expert Mindset"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Congratulations on completing Module 005_006! You have conquered the entire spectrum of event handling and user interaction: event loops, window focus, continuous multi-key bindings, mouse click hit-testing, freehand dragging, vehicle kinematics, finite state machines, and custom graphical UI toolbars. You now possess the full power to engineer rich, responsive, interactive desktop software!"})]})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(y,{title:"Interactive Canvas UI & Buttons FAQs",questions:v})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(w,{content:N,title:"Topic 7: Canvas UI & Interactive Buttons Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic7_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(f,{note:"As we conclude Module 005_006 at Coder & AccoTax in Barrackpore and Kolkata, I want to celebrate how much you have grown. You began with simple passive drawings; now you are designing complete interactive user interfaces with clickable dashboards, real-time vehicle physics, and state machines. You have officially stepped into the world of real interactive software development!"})})]})]})};export{H as default};
