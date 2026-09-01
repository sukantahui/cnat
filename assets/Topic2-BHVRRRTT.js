import{b as c,j as e}from"./vendor-react-core-Doz9nIC6.js";import{T as k}from"./TeacherSukantaHui-BaJcBHAy.js";import{P as d}from"./PythonFileLoader-hCi5osN-.js";import{F as g}from"./FAQTemplate-BHhlgA96.js";import{P as f}from"./PlainTextPrint-C08xhKA4.js";import"./vendor-icons-8ao-0upJ.js";import"./PythonCodeBlock-CsFlBAp6.js";import"./vendor-prism-ZrEUZN6d.js";const b=[{question:"What is the key difference between `screen.onkeypress()` and `screen.onkeyrelease()`?",shortAnswer:"`onkeypress()` fires the moment a key is depressed; `onkeyrelease()` fires when the physical key springs back up.",explanation:"Pairing press and release events enables continuous multi-key state tracking.",hint:"Which event fires on key down versus key up?",level:"basic",codeExample:`screen.onkeypress(press_handler, 'Up')
screen.onkeyrelease(release_handler, 'Up')`},{question:"Why does directly moving an object inside `onkeypress()` cause jerky, stuttering motion?",shortAnswer:"Because the OS introduces a 500ms initial repeat delay before sending repeated keystrokes.",explanation:"Direct event moving relies on OS typing repeat rates instead of the game's internal 60 FPS clock.",hint:"What OS typing behavior causes a stutter before continuous movement?",level:"basic",codeExample:"# BAD: def move_up(): t.forward(10)"},{question:"How do you achieve silky-smooth 60 FPS 8-directional movement in Python Turtle?",shortAnswer:"Maintain a `keys = {}` state dictionary toggled by `onkeypress`/`onkeyrelease`, and apply velocity inside a 16ms `ontimer` loop.",explanation:"Decoupling key state tracking from physics integration eliminates all input stutter.",hint:"What pattern tracks held keys for a 60 FPS physics loop?",level:"moderate",codeExample:`keys['Up'] = True
# in loop: if keys['Up']: y += speed`},{question:"What is the exact keysym string for the Spacebar in Python Turtle?",shortAnswer:"`'space'` (all lowercase).",explanation:"Tkinter requires `'space'` in lowercase; writing `'Space'` or `'SPACE'` causes the binding to be ignored.",hint:"Is Space capitalized or lowercase in Turtle?",level:"basic",codeExample:"screen.onkeypress(fire, 'space')"},{question:"How do you bind the Enter / Return key in Python Turtle?",shortAnswer:"`'Return'` (capitalized R).",explanation:"Tkinter uses the standard X11 keysym `'Return'` for the Enter key.",hint:"What is the exact keysym string for the Enter key?",level:"basic",codeExample:"screen.onkeypress(start_game, 'Return')"},{question:"How do you handle diagonal movement (e.g. moving Up and Right simultaneously)?",shortAnswer:"Check both `keys['Up']` and `keys['Right']` on the same frame, applying both `vy += speed` and `vx += speed`.",explanation:"Key state dictionaries allow any number of simultaneous keys to combine vectors naturally.",hint:"How does a key state dictionary enable diagonal movement?",level:"moderate",codeExample:`if keys['Up']: y += speed
if keys['Right']: x += speed`},{question:"What is the exact keysym string for the Escape key?",shortAnswer:"`'Escape'` (capitalized E).",explanation:"Standard Tkinter keysym string for the Esc key.",hint:"How is the Escape key formatted in Turtle?",level:"basic",codeExample:"screen.onkeypress(pause_game, 'Escape')"},{question:"Why should you bind both `'w'` and `'W'` for character movement?",shortAnswer:"Because keypress strings are case-sensitive; binding only `'w'` fails when the player has Caps Lock turned on.",explanation:"Binding both uppercase and lowercase variants prevents Caps Lock control lockouts.",hint:"Why is case sensitivity important for WASD controls?",level:"basic",codeExample:`screen.onkeypress(move_w, 'w')
screen.onkeypress(move_w, 'W')`},{question:"How do you bind the 4 Arrow Keys in Python Turtle?",shortAnswer:"`'Up'`, `'Down'`, `'Left'`, `'Right'` (all with capitalized initial letters).",explanation:"Tkinter standardizes arrow keys as title-cased direction names.",hint:"What are the keysym names for the 4 arrow keys?",level:"basic",codeExample:"for k in ['Up', 'Down', 'Left', 'Right']: screen.onkeypress(handlers[k], k)"},{question:"What is Key Ghosting / Key Jamming in hardware keyboards?",shortAnswer:"A hardware limitation where cheap keyboards cannot register more than 3 simultaneous keypresses in the same circuit zone.",explanation:"Gaming keyboards use anti-ghosting matrices to allow 10+ simultaneous keypresses.",hint:"What hardware limitation prevents multiple simultaneous keys from registering?",level:"advanced",codeExample:"# Hardware key ghosting limitation"},{question:"How do you normalize diagonal movement speed so diagonal flight isn't 41% faster?",shortAnswer:"If moving diagonally, divide displacement by `sqrt(2)` (~1.414) so total speed equals `speed`.",explanation:"Vector normalization prevents the classic diagonal speed boost exploit.",hint:"Why is vector normalization required for diagonal movement?",level:"moderate",codeExample:`if dx != 0 and dy != 0:
    dx *= 0.7071; dy *= 0.7071`},{question:"What is the keysym string for the Backspace key in Turtle?",shortAnswer:"`'BackSpace'` (capital B and capital S).",explanation:"Tkinter uses camel-cased `'BackSpace'` for the backspace key.",hint:"How is the Backspace key formatted in keysym strings?",level:"moderate",codeExample:"screen.onkeypress(delete_char, 'BackSpace')"},{question:"How do you bind the Tab key in Python Turtle?",shortAnswer:"`'Tab'` (capital T).",explanation:"Tkinter standard keysym for the tabulator key.",hint:"What is the keysym name for the Tab key?",level:"basic",codeExample:"screen.onkeypress(switch_target, 'Tab')"},{question:"How do you bind number keys (0 through 9) across the top of the keyboard?",shortAnswer:"Pass string literals `'0'`, `'1'`, `'2'`, ... `'9'` to `onkeypress`.",explanation:"Numeric keys match their single-character string representations.",hint:"How are numeric keys bound in onkeypress?",level:"basic",codeExample:"screen.onkeypress(select_weapon_1, '1')"},{question:"What is the difference between `screen.onkey(fun, key)` and `screen.onkeypress(fun, key)` in Python 3.12+?",shortAnswer:"In modern Python Turtle, `onkey` and `onkeypress` are identical aliases that bind keypress events.",explanation:"In historical Python 2.x, `onkey` bound to key release; modern versions standardized `onkey` to keypress.",hint:"Are onkey and onkeypress interchangeable in modern Python?",level:"moderate",codeExample:"screen.onkeypress(fn, 'space')"},{question:"How do you create an interactive cheat code sequence (e.g. Konami Code: Up Up Down Down)?",shortAnswer:"Append pressed keys to a `history` list and check if `history[-10:] == konami_sequence` on each keypress.",explanation:"Buffer slicing easily matches secret input sequences.",hint:"How are cheat code input sequences detected in code?",level:"advanced",codeExample:"if key_history[-4:] == ['Up', 'Up', 'Down', 'Down']: unlock_cheat()"},{question:"How do you bind function keys (`F1` through `F12`) in Turtle?",shortAnswer:"Use strings `'F1'`, `'F2'`, ... `'F12'` (capital F followed by number).",explanation:"Standard keysym names for keyboard function row keys.",hint:"How are F1 to F12 keys bound in Turtle?",level:"basic",codeExample:"screen.onkeypress(toggle_fullscreen, 'F11')"},{question:"Why does pressing and holding a key trigger multiple `onkeypress` events on Windows?",shortAnswer:"Windows OS fires repeated keydown messages based on system keyboard repeat delay settings.",explanation:"Key state dictionaries ignore duplicate keypress signals once `keys[k] = True` is already set.",hint:"Why does the OS send duplicate keydown messages during holds?",level:"advanced",codeExample:"# Key state dict naturally deduplicates OS key repeats"},{question:"How do you clear all active keys when the game is paused or loses focus?",shortAnswer:"`for k in keys: keys[k] = False` or `keys.clear()`.",explanation:"Wiping active key states prevents 'phantom sticky key' bugs upon resuming.",hint:"How do you reset all held keys upon pausing?",level:"basic",codeExample:"for k in keys_pressed: keys_pressed[k] = False"},{question:"How do you bind punctuation keys like Plus, Minus, Comma, Period?",shortAnswer:"Use their literal characters: `'+'`, `'-'`, `','`, `'.'`. (or keysyms `'plus'`, `'minus'`).",explanation:"Punctuation characters can be bound directly.",hint:"How are plus and minus keys bound in onkeypress?",level:"basic",codeExample:"screen.onkeypress(zoom_in, '+'); screen.onkeypress(zoom_out, '-')"},{question:"What is Key Mapping / Re-binding in game options menus?",shortAnswer:"Storing actions in a dictionary (e.g. `controls['jump'] = 'space'`) and dynamically rebinding `onkeypress` based on user config.",explanation:"Abstracting physical keys to logical actions allows custom player keybindings.",hint:"How do custom key remapping systems work in games?",level:"advanced",codeExample:"controls = {'jump': 'space', 'fire': 'f'}"},{question:"How do you create a smooth car steering system with acceleration and steering angle?",shortAnswer:"Up/Down adjusts `speed += acceleration`; Left/Right adjusts `heading += turn_speed`; position steps along `heading` vector.",explanation:"Car steering separates throttle acceleration from rotational angular velocity.",hint:"How does car steering physics differ from 4-directional grid movement?",level:"moderate",codeExample:`if keys['Up']: speed += 0.5
if keys['Left']: angle += 5`},{question:"What is the keysym string for the Delete key in Python Turtle?",shortAnswer:"`'Delete'` (capital D).",explanation:"Tkinter standard keysym for the forward delete key.",hint:"What is the keysym string for Delete?",level:"basic",codeExample:"screen.onkeypress(delete_selected, 'Delete')"},{question:"How do you bind mouse buttons alongside keyboard inputs?",shortAnswer:"Use `screen.onclick()` for left click, `screen.onclick(fun, 2)` for middle click, and `screen.onclick(fun, 3)` for right click.",explanation:"Turtle supports all 3 primary mouse buttons.",hint:"How do you bind middle and right mouse clicks in Turtle?",level:"moderate",codeExample:`screen.onclick(primary_fire, 1)
screen.onclick(alt_fire, 3)`},{question:"Why should player movement speeds be expressed in pixels-per-second rather than pixels-per-frame?",shortAnswer:"To ensure that multiplying by delta-time `dt` produces identical real-world movement speed across all computer displays.",explanation:"Framerate-independent kinematic design guarantees fair multiplayer and consistent gameplay.",hint:"Why express movement in pixels/sec with delta time?",level:"moderate",codeExample:"x += speed_px_per_sec * dt"},{question:"How do you bind WASD controls efficiently using a loop?",shortAnswer:"`for k in ['w', 'a', 's', 'd']: screen.onkeypress(partial(set_key, k, True), k); screen.onkeyrelease(partial(set_key, k, False), k)`.",explanation:"Loops combined with `functools.partial` bind multi-key pairs cleanly in 2 lines.",hint:"How can a loop bind WASD press and release pairs compactly?",level:"advanced",codeExample:"for k in ['w','a','s','d']: bind_press_release(k)"},{question:"What is the difference between Discrete Actions (e.g. jump/fire) and Continuous Actions (e.g. walk/steer)?",shortAnswer:"Discrete actions execute once per key tap; continuous actions require holding the key down over multiple animation frames.",explanation:"Discrete actions use single callbacks; continuous actions use key state dictionaries.",hint:"How do one-shot actions differ from continuous held movement?",level:"basic",codeExample:"# Discrete: fire_bullet() | Continuous: keys['Right'] = True"},{question:"How do you implement rapid-fire automatic weapons while spacebar is held down?",shortAnswer:"Set `keys['space'] = True` on press; inside the 60 FPS loop, fire a bullet every 10 frames if `keys['space']` is True.",explanation:"Cooldown frame timers combined with key state tracking create automatic firing mechanisms.",hint:"How do cooldown timers create automatic firing loops?",level:"moderate",codeExample:"if keys['space'] and cooldown == 0: fire(); cooldown = 10"},{question:"What is the 3-step Golden Rule for Professional Keyboard Input in Python Turtle?",shortAnswer:"1. Maintain a `keys` state dictionary | 2. Bind `onkeypress` to True and `onkeyrelease` to False | 3. Update physics in 60 FPS `ontimer` loop.",explanation:"This 3-step blueprint guarantees butter-smooth, arcade-grade multi-key control.",hint:"What 3 steps build professional multi-key flight controls in Turtle?",level:"basic",codeExample:"# 1. Key dict → 2. onkeypress/onkeyrelease pairs → 3. 60 FPS loop"},{question:"How does key state dictionary tracking prepare developers for game development in PyGame and Unity?",shortAnswer:"Because PyGame's `pygame.key.get_pressed()` and Unity's `Input.GetKey()` use the exact same continuous boolean state polling architecture.",explanation:"Continuous input architecture is universal across all commercial game engines.",hint:"How does Turtle key state tracking map to PyGame and Unity input systems?",level:"basic",codeExample:"# Direct mapping to PyGame and Unity input architecture"}],w=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 2 - Keyboard input binding: screen.onkey() and screen.onkeypress()\r
File: onkey_vs_onkeypress_comparison.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Comparison between Keyboard Input Binding Methods:\r
1. Discrete Staccato Trigger: \`onkeypress(step_move, 'Up')\`\r
   - Moves only once per physical keypress or suffers from OS key-repeat stutter delay.\r
2. Continuous Smooth Movement: Key State Dictionary (\`keys['Up'] = True/False\`)\r
   - Binds \`onkeypress\` to set \`True\` and \`onkeyrelease\` to set \`False\`.\r
   - Physics loop applies continuous velocity every 16 ms tick for butter-smooth movement!\r
"""\r
\r
import turtle\r
\r
def run_keyboard_binding_demo():\r
    screen = turtle.Screen()\r
    screen.title("Keyboard Binding Mechanics - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
\r
    # Ship Kinematic State\r
    ship = {"x": 0.0, "y": 0.0, "vx": 0.0, "vy": 0.0, "speed": 5.0}\r
\r
    # Key State Dictionary (Multi-key tracking)\r
    keys_pressed = {"Up": False, "Down": False, "Left": False, "Right": False}\r
\r
    # Key Press / Release Handlers\r
    def press_up(): keys_pressed["Up"] = True\r
    def release_up(): keys_pressed["Up"] = False\r
\r
    def press_down(): keys_pressed["Down"] = True\r
    def release_down(): keys_pressed["Down"] = False\r
\r
    def press_left(): keys_pressed["Left"] = True\r
    def release_left(): keys_pressed["Left"] = False\r
\r
    def press_right(): keys_pressed["Right"] = True\r
    def release_right(): keys_pressed["Right"] = False\r
\r
    # Bind Press and Release Pairs\r
    screen.onkeypress(press_up, "Up")\r
    screen.onkeyrelease(release_up, "Up")\r
\r
    screen.onkeypress(press_down, "Down")\r
    screen.onkeyrelease(release_down, "Down")\r
\r
    screen.onkeypress(press_left, "Left")\r
    screen.onkeyrelease(release_left, "Left")\r
\r
    screen.onkeypress(press_right, "Right")\r
    screen.onkeyrelease(release_right, "Right")\r
\r
    screen.listen()\r
\r
    # 60 FPS Game Loop\r
    def game_loop():\r
        t.clear()\r
\r
        # Update ship from active key states (Supports diagonal movement!)\r
        ship["vx"] = 0\r
        ship["vy"] = 0\r
        if keys_pressed["Up"]:    ship["vy"] += ship["speed"]\r
        if keys_pressed["Down"]:  ship["vy"] -= ship["speed"]\r
        if keys_pressed["Left"]:  ship["vx"] -= ship["speed"]\r
        if keys_pressed["Right"]: ship["vx"] += ship["speed"]\r
\r
        ship["x"] = max(-330, min(330, ship["x"] + ship["vx"]))\r
        ship["y"] = max(-230, min(230, ship["y"] + ship["vy"]))\r
\r
        # Draw Ship\r
        t.penup(); t.goto(ship["x"], ship["y"]); t.pendown()\r
        t.color("white", "#38bdf8"); t.begin_fill(); t.circle(18); t.end_fill()\r
\r
        # Telemetry HUD\r
        active_keys = [k for k, v in keys_pressed.items() if v]\r
        t.penup(); t.goto(-330, 230); t.pendown()\r
        t.color("#34d399")\r
        t.write(f"ACTIVE KEYS: {active_keys or 'None'} | POS: ({ship['x']:.0f}, {ship['y']:.0f})", font=("Arial", 11, "bold"))\r
\r
        screen.update()\r
        screen.ontimer(game_loop, 16)\r
\r
    game_loop()\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_keyboard_binding_demo()\r
`,v=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 2 - Keyboard input binding: screen.onkey() and screen.onkeypress()\r
File: continuous_multikey_arcade_movement.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Professional Arcade 8-Directional Flight Engine:\r
Supports simultaneous multi-key combinations (e.g., Up + Right = Diagonal Flight,\r
Spacebar = Weapon Fire) with zero input delay or OS key-repeat stutter.\r
"""\r
\r
import turtle\r
\r
def run_arcade_flight_engine():\r
    screen = turtle.Screen()\r
    screen.title("8-Directional Flight Engine - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
\r
    player = {"x": 0.0, "y": 0.0, "angle": 0, "speed": 6.0}\r
    bullets = []\r
    keys = {"w": False, "s": False, "a": False, "d": False}\r
\r
    # Bind WASD Press and Release\r
    for k in ["w", "s", "a", "d"]:\r
        screen.onkeypress(lambda key=k: keys.update({key: True}), k)\r
        screen.onkeyrelease(lambda key=k: keys.update({key: False}), k)\r
\r
    def fire_bullet():\r
        bullets.append({"x": player["x"], "y": player["y"] + 20, "vy": 12})\r
\r
    screen.onkeypress(fire_bullet, "space")\r
    screen.listen()\r
\r
    def main_tick():\r
        t.clear()\r
\r
        # Update Player Motion\r
        dx = (1 if keys["d"] else 0) - (1 if keys["a"] else 0)\r
        dy = (1 if keys["w"] else 0) - (1 if keys["s"] else 0)\r
\r
        player["x"] = max(-330, min(330, player["x"] + dx * player["speed"]))\r
        player["y"] = max(-230, min(230, player["y"] + dy * player["speed"]))\r
\r
        # Update Bullets\r
        active_b = []\r
        for b in bullets:\r
            b["y"] += b["vy"]\r
            if b["y"] < 250:\r
                active_b.append(b)\r
                t.penup(); t.goto(b["x"], b["y"]); t.pendown()\r
                t.color("#fbbf24"); t.pensize(3); t.forward(10); t.pensize(1)\r
        bullets[:] = active_b\r
\r
        # Draw Player Ship\r
        t.penup(); t.goto(player["x"] - 15, player["y"] - 15); t.pendown()\r
        t.color("#38bdf8", "#0284c7"); t.begin_fill()\r
        t.forward(30); t.left(120); t.forward(30); t.left(120); t.forward(30); t.left(120)\r
        t.end_fill()\r
\r
        # Telemetry\r
        t.penup(); t.goto(-330, 230); t.pendown(); t.color("#34d399")\r
        t.write(f"WASD: 8-WAY FLIGHT | SPACE: FIRE BULLETS ({len(bullets)} ACTIVE)", font=("Arial", 11, "bold"))\r
\r
        screen.update()\r
        screen.ontimer(main_tick, 16)\r
\r
    main_tick()\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_arcade_flight_engine()\r
`,_=`"""\r
Module: 005_006_turtle-interaction\r
Topic: Topic 2 - Keyboard input binding: screen.onkey() and screen.onkeypress()\r
File: interactive_keysym_inspector.py\r
Teacher & Mentor: Sukanta Hui\r
\r
Description:\r
Interactive Keysym Inspector:\r
Displays exact Tkinter keysym names for common keys:\r
- Arrow keys: "Up", "Down", "Left", "Right"\r
- Actions: "space", "Return", "Escape", "Tab", "BackSpace"\r
- Letters: "w", "a", "s", "d" / "W", "A", "S", "D"\r
"""\r
\r
import turtle\r
\r
def run_keysym_inspector():\r
    screen = turtle.Screen()\r
    screen.title("Interactive Keysym Inspector - Coder & AccoTax")\r
    screen.bgcolor("#020617")\r
    screen.setup(width=750, height=550)\r
    screen.tracer(0)\r
\r
    t = turtle.Turtle(); t.hideturtle()\r
    active_keys = []\r
\r
    def handle_key(name):\r
        active_keys.append(name)\r
        if len(active_keys) > 6: active_keys.pop(0)\r
\r
        t.clear()\r
        t.penup(); t.goto(0, 150); t.pendown()\r
        t.color("#38bdf8")\r
        t.write("KEYSYM INSPECTOR ACTIVE · PRESS ANY KEY", align="center", font=("Arial", 12, "bold"))\r
\r
        # Render Detected Key Badges\r
        for idx, k in enumerate(active_keys):\r
            y = 60 - (idx * 38)\r
            t.penup(); t.goto(-140, y); t.pendown()\r
            t.color("#334155", "#0f172a"); t.pensize(2); t.begin_fill()\r
            for _ in range(2): t.forward(280); t.left(90); t.forward(30); t.left(90)\r
            t.end_fill()\r
\r
            t.penup(); t.goto(0, y + 8); t.pendown()\r
            t.color("#34d399")\r
            t.write(f"KEYSYM DETECTED: '{k}'", align="center", font=("Courier", 11, "bold"))\r
\r
        screen.update()\r
\r
    # Bind broad spectrum of keysyms\r
    test_keys = [\r
        "Up", "Down", "Left", "Right", "space", "Return", "Escape", "Tab",\r
        "w", "s", "a", "d", "W", "S", "A", "D", "r", "R", "c", "C"\r
    ]\r
\r
    for k in test_keys:\r
        screen.onkeypress(lambda key=k: handle_key(key), k)\r
\r
    screen.listen()\r
    handle_key("START")\r
    screen.mainloop()\r
\r
if __name__ == "__main__":\r
    run_keysym_inspector()\r
`,j='================================================================================\r\n  TOPIC 2: KEYBOARD INPUT BINDING: SCREEN.ONKEY() AND SCREEN.ONKEYPRESS()\r\n  MODULE: 005_006 - Event Handling & User Interaction\r\n  COURSE: Python Creative Graphics & Foundations\r\n  TEACHER & MENTOR: Sukanta Hui\r\n================================================================================\r\n\r\n1. ONKEY VS ONKEYPRESS VS ONKEYRELEASE\r\n--------------------------------------------------------------------------------\r\n- `screen.onkeypress(fun, key)`:\r\n  Fires immediately when the physical key is pressed down.\r\n\r\n- `screen.onkeyrelease(fun, key)`:\r\n  Fires when the user releases the physical key.\r\n\r\n- `screen.onkey(fun, key)`:\r\n  In modern Python Turtle, acts as a convenience alias for `onkeyrelease` or `onkeypress`.\r\n\r\n2. STACCATO VS CONTINUOUS MULTI-KEY STATE TRACKING\r\n--------------------------------------------------------------------------------\r\n- Beginner Anti-Pattern (Staccato):\r\n  Directly calling `t.forward(10)` inside `onkeypress`. Causes a 500ms OS key-repeat\r\n  stutter and cannot handle diagonal multi-key movement (e.g. Up + Right).\r\n\r\n- Professional Best Practice (Key State Dictionary):\r\n  Set `keys[\'Up\'] = True` on press and `keys[\'Up\'] = False` on release.\r\n  A 60 FPS `ontimer` physics loop checks active keys and applies smooth velocity!\r\n\r\n3. COMMON KEYSYM STRINGS\r\n--------------------------------------------------------------------------------\r\n- Arrows: `"Up"`, `"Down"`, `"Left"`, `"Right"`\r\n- Controls: `"space"`, `"Return"`, `"Escape"`, `"Tab"`, `"BackSpace"`\r\n- Characters: `"w"`, `"a"`, `"s"`, `"d"` (case-sensitive!)\r\n\r\n================================================================================\r\n  END OF NOTE - Coder & AccoTax Classroom Reference Series\r\n================================================================================',S=`
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulseKey {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.6)); }
}
`,K=()=>{const[t,m]=c.useState({Up:!1,Down:!1,Left:!1,Right:!1,space:!1}),[a,h]=c.useState({x:160,y:90}),[p,y]=c.useState([]);c.useEffect(()=>{const s=setInterval(()=>{h(n=>{let r=0,o=0;const l=4.5;return t.Up&&(o-=l),t.Down&&(o+=l),t.Left&&(r-=l),t.Right&&(r+=l),r!==0&&o!==0&&(r*=.7071,o*=.7071),{x:Math.max(25,Math.min(295,n.x+r)),y:Math.max(25,Math.min(155,n.y+o))}}),y(n=>n.map(r=>({...r,y:r.y-8})).filter(r=>r.y>15))},25);return()=>clearInterval(s)},[t]);const i=s=>{m(n=>({...n,[s]:!n[s]}))},u=()=>{y(s=>[...s,{x:a.x,y:a.y-12}])},x=[{name:"screen.onkeypress(fun, key)",returnType:"Key Down Listener",purpose:"Binds callback `fun` to physical key depression event (e.g. `keys['Up'] = True`).",usage:"screen.onkeypress(lambda: set_k('Up', True), 'Up')"},{name:"screen.onkeyrelease(fun, key)",returnType:"Key Up Listener",purpose:"Binds callback `fun` to physical key release event (e.g. `keys['Up'] = False`).",usage:"screen.onkeyrelease(lambda: set_k('Up', False), 'Up')"},{name:"Key State Dictionary Pattern",returnType:"Continuous Input Architecture",purpose:"Tracks boolean state of all active keys, enabling fluid 8-directional diagonal movement.",usage:`if keys['Up'] and keys['Right']:
    move_diagonal()`},{name:"Keysym String Standard",returnType:"Input Identifiers",purpose:"Exact case-sensitive Tkinter keysym names: 'space', 'Return', 'Escape', 'Up', 'Down'.",usage:"screen.onkeypress(fire, 'space')"}];return e.jsxs("div",{className:"dark bg-gray-900 text-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8",children:[e.jsx("style",{children:S}),e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[fadeInUp_0.5s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider",children:"Module 005_006 · Event Handling & Interaction · Topic 2"}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent",children:"Keyboard Input Binding: onkey() & onkeypress()"}),e.jsxs("p",{className:"text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",children:["Eliminate OS typing delay stutter. Master ",e.jsx("span",{className:"text-cyan-300 font-semibold",children:"Continuous Multi-Key State Dictionaries"}),", ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"8-Directional Diagonal Flight"}),", ",e.jsx("span",{className:"text-amber-300 font-semibold",children:"onkeypress / onkeyrelease pairs"}),", and ",e.jsx("span",{className:"text-purple-400 font-semibold",children:"Exact Keysym Mapping"}),"."]}),e.jsxs("div",{className:"flex justify-center gap-4 flex-wrap pt-2",children:[e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🎮 Continuous 60 FPS Key State Dict"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"🕹️ 8-Directional Diagonal Flight"}),e.jsx("span",{className:"px-4 py-2 bg-gray-800 border border-slate-700/60 rounded-full text-xs font-medium text-slate-200",children:"⌨️ Exact Keysym Syntax ('space', 'Return', 'Escape')"})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 space-y-6 animate-[fadeInUp_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/60 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"🕹️"})," Interactive Multi-Key State & Flight Lab"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Toggle multiple direction keys simultaneously to observe fluid diagonal flight, or press Space to fire lasers."})]}),e.jsxs("button",{onClick:u,className:"px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 transition cursor-pointer flex items-center gap-2",children:[e.jsx("span",{children:"🔥"})," Fire Weapon (space)"]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center p-4 bg-slate-950 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-mono text-cyan-400 mb-2",children:"Flight Arena Viewport (Multi-Key Kinematics)"}),e.jsxs("svg",{viewBox:"0 0 320 180",xmlns:"http://www.w3.org/2000/svg",className:"w-full max-w-sm h-auto bg-slate-950 rounded-lg border border-slate-800",children:[e.jsx("line",{x1:"20",y1:"90",x2:"300",y2:"90",stroke:"#1e293b",strokeWidth:"1",strokeDasharray:"4 4"}),e.jsx("line",{x1:"160",y1:"20",x2:"160",y2:"160",stroke:"#1e293b",strokeWidth:"1",strokeDasharray:"4 4"}),p.map((s,n)=>e.jsx("line",{x1:s.x,y1:s.y,x2:s.x,y2:s.y-8,stroke:"#fbbf24",strokeWidth:"2.5",strokeLinecap:"round"},n)),e.jsxs("g",{transform:`translate(${a.x}, ${a.y})`,children:[e.jsx("polygon",{points:"0,-14 -12,10 12,10",fill:"#38bdf8",stroke:"#ffffff",strokeWidth:"1.5"}),e.jsx("circle",{cx:"0",cy:"0",r:"3",fill:"#020617"}),(t.Up||t.Down||t.Left||t.Right)&&e.jsx("polygon",{points:"-4,10 0,16 4,10",fill:"#fbbf24",opacity:"0.8"})]}),e.jsxs("text",{x:"25",y:"25",fill:"#94a3b8",fontSize:"8.5",fontFamily:"monospace",children:["POS: (",a.x.toFixed(0),", ",a.y.toFixed(0),") | BULLETS: ",p.length]})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1.5 mt-4",children:[e.jsx("button",{onClick:()=>i("Up"),className:`w-12 h-9 rounded-lg text-xs font-bold font-mono transition cursor-pointer border ${t.Up?"bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-md":"bg-gray-800 text-slate-300 border-slate-700"}`,children:"▲ Up"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>i("Left"),className:`w-14 h-9 rounded-lg text-xs font-bold font-mono transition cursor-pointer border ${t.Left?"bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-md":"bg-gray-800 text-slate-300 border-slate-700"}`,children:"◀ Left"}),e.jsx("button",{onClick:()=>i("Down"),className:`w-12 h-9 rounded-lg text-xs font-bold font-mono transition cursor-pointer border ${t.Down?"bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-md":"bg-gray-800 text-slate-300 border-slate-700"}`,children:"▼ Down"}),e.jsx("button",{onClick:()=>i("Right"),className:`w-14 h-9 rounded-lg text-xs font-bold font-mono transition cursor-pointer border ${t.Right?"bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-md":"bg-gray-800 text-slate-300 border-slate-700"}`,children:"Right ▶"})]})]})]}),e.jsxs("div",{className:"space-y-4 bg-gray-900 p-5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"text-sm font-bold text-cyan-400 flex justify-between items-center",children:[e.jsx("span",{children:"Key State Dictionary Inspector"}),e.jsx("span",{className:"font-mono text-xs text-emerald-300",children:"Continuous 60 FPS"})]}),e.jsx("div",{className:"grid grid-cols-2 gap-2 pt-1",children:Object.entries(t).map(([s,n])=>e.jsxs("div",{className:"p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center",children:[e.jsxs("span",{className:"font-mono text-slate-400 font-bold",children:['keys["',s,'"]']}),e.jsx("span",{className:`font-mono font-bold text-[11px] px-2 py-0.5 rounded ${n?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-slate-800 text-slate-500"}`,children:String(n).toUpperCase()})]},s))}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono uppercase tracking-wider block",children:"# Press / Release Binding Architecture"}),e.jsx("pre",{className:"font-mono text-emerald-300 text-xs overflow-x-auto",children:`# 1. Bind Press / Release Pairs
screen.onkeypress(lambda: set_k("Up", True), "Up")
screen.onkeyrelease(lambda: set_k("Up", False), "Up")

# 2. In 60 FPS ontimer loop:
if keys["Up"]:    ship_y += speed
if keys["Right"]: ship_x += speed`})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/60 rounded-2xl p-6 border border-slate-800 animate-[fadeInUp_0.6s_ease-out_0.2s]",children:[e.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Keyboard Event Binding Specifications"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider",children:[e.jsx("th",{className:"py-3 px-4",children:"Method / Concept"}),e.jsx("th",{className:"py-3 px-4",children:"Event Trigger"}),e.jsx("th",{className:"py-3 px-4",children:"Input Handling Role"}),e.jsx("th",{className:"py-3 px-4",children:"Standard Syntax"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800 text-gray-200",children:x.map((s,n)=>e.jsxs("tr",{className:"hover:bg-gray-800/40 transition",children:[e.jsx("td",{className:"py-3.5 px-4 font-mono text-cyan-300 font-bold text-xs",children:s.name}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-indigo-400 text-xs",children:s.returnType}),e.jsx("td",{className:"py-3.5 px-4 text-xs text-gray-300",children:s.purpose}),e.jsx("td",{className:"py-3.5 px-4 font-mono text-amber-300 text-xs",children:s.usage})]},n))})]})})]}),e.jsxs("div",{className:"space-y-6 animate-[fadeInUp_0.6s_ease-out_0.3s]",children:[e.jsxs("h2",{className:"text-2xl font-bold text-slate-100 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Professional Python Implementation Scripts"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(d,{fileModule:w,title:"onkey_vs_onkeypress_comparison.py",highlightLines:[23,26,27,36,37,56,57,58,59,74]}),e.jsx(d,{fileModule:v,title:"continuous_multikey_arcade_movement.py",highlightLines:[21,25,26,35,36,43,56]}),e.jsx(d,{fileModule:_,title:"interactive_keysym_inspector.py",highlightLines:[18,20,39,40,44]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 animate-[fadeInUp_0.6s_ease-out_0.4s]",children:[e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"🚀"})," Barrackpore Space Shooter: Diagonal Flight"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Debangshu built a space combat game in Barrackpore. When he used basic ",e.jsx("code",{className:"text-rose-300 font-mono",children:"onkeypress(move)"}),", holding Up and Right only moved the ship in one direction with severe stutter. Teacher Sukanta Hui guided him to build a ",e.jsx("strong",{children:"Key State Dictionary"})," with press/release pairs. His ship flew diagonally with butter-smooth 60 FPS agility!"]})]}),e.jsxs("div",{className:"bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-emerald-400 text-lg flex items-center gap-2",children:[e.jsx("span",{children:"⌨️"})," Kolkata Keysym Debugging"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Mamata in Kolkata spent an afternoon wondering why ",e.jsx("code",{className:"text-rose-300 font-mono",children:"onkeypress(fire, 'Space')"})," was ignored. By checking the exact Keysym specification, she changed it to lowercase ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"'space'"})," and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"'Return'"})," for Enter. Her game controls reacted instantly!"]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-slate-800 space-y-4 animate-[fadeInUp_0.6s_ease-out_0.5s]",children:[e.jsxs("h3",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Top 4 Keyboard Binding Traps to Avoid"]}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4 text-xs text-gray-300",children:[e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"1. Capitalizing 'Space' or 'escape'"}),e.jsxs("p",{className:"text-slate-400",children:["Tkinter keysyms are strictly case-sensitive: Space must be ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"'space'"})," (lowercase), while Escape must be ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"'Escape'"})," and Enter is ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"'Return'"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"2. Moving Directly Inside onkeypress"}),e.jsx("p",{className:"text-slate-400",children:"Direct movement commands inside keypress callbacks suffer from the operating system's 500ms keyboard repeat delay, creating stuttering jerky controls."})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"3. Binding Only Lowercase WASD"}),e.jsxs("p",{className:"text-slate-400",children:["Binding only ",e.jsx("code",{className:"text-rose-300 font-mono",children:"'w'"})," stops working whenever Caps Lock is turned on. Always bind both ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"'w'"})," and ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"'W'"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-gray-900 rounded-xl border border-slate-700/60 space-y-1",children:[e.jsx("strong",{className:"text-rose-400 block text-sm",children:"4. Un-normalized Diagonal Speed"}),e.jsxs("p",{className:"text-slate-400",children:["Moving both ",e.jsx("code",{className:"text-amber-300 font-mono",children:"dx"})," and ",e.jsx("code",{className:"text-amber-300 font-mono",children:"dy"})," at full speed makes diagonal movement 41% faster than orthogonal flight. Multiply diagonals by ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"0.7071"}),"."]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/50 rounded-2xl p-6 border border-cyan-500/30 animate-[fadeInUp_0.6s_ease-out_0.6s]",children:[e.jsx("h3",{className:"text-xl font-semibold text-cyan-400 mb-3",children:"📝 Student Mastery Checklist"}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-2.5 text-xs text-gray-200",children:["I know the difference between discrete key taps and continuous key state tracking","I use `onkeypress` to set key state to `True` and `onkeyrelease` to set it to `False`","I know the exact keysym names: `'space'`, `'Return'`, `'Escape'`, `'Up'`, `'Down'`","I bind both uppercase and lowercase keys (`'w'` and `'W'`) for Caps Lock safety","I normalize diagonal movement speeds by multiplying by `0.7071` (`1 / sqrt(2)`)","I update entity positions inside a 16 ms 60 FPS `ontimer` physics loop"].map((s,n)=>e.jsxs("div",{className:"flex items-start gap-2 p-2 rounded-lg bg-gray-900/60 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"✓"}),e.jsx("span",{children:s})]},n))})]}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.8s]",children:e.jsx(g,{title:"Keyboard Input Binding FAQs",questions:b})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.9s]",children:e.jsx(f,{content:j,title:"Topic 2: Keyboard Input Binding Study Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Study Note",downloadFileName:"topic2_note.txt"})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_1s]",children:e.jsx(k,{note:"When we teach game controls at Coder & AccoTax in Barrackpore and Kolkata, I show students the Key State Dictionary pattern. When they feel the dramatic difference between stuttery onkeypress movement and fluid 60 FPS multi-key flight, they realize how professional game physics are engineered. Keep your input state clean, your bindings paired, and your loops fast!"})})]})]})};export{K as default};
