import{j as e,a as s}from"./index-BHk924y7.js";function l(){return e.jsxs("div",{className:"space-y-10",children:[e.jsx("h1",{className:"text-2xl font-bold text-sky-300",children:"Core Data Types in Python — int, float, str, bool"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Python has four essential built-in data types used in the foundation of every program:",e.jsx("code",{children:"int"}),", ",e.jsx("code",{children:"float"}),", ",e.jsx("code",{children:"str"}),", and ",e.jsx("code",{children:"bool"}),". These types are dynamically assigned, meaning Python automatically decides the type based on the value."]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"1. int (Integer)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Used for whole numbers — no decimals allowed. Python can store very large integers without overflow."}),e.jsx(s,{initialCode:`a = 10
b = -50
c = 9876543210123456789  # Python can store huge numbers

print(type(a))
print(a, b, c)`}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"No fixed size (unlike C, Java)."}),e.jsx("li",{children:"Automatically grows in memory as needed."})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"2. float (Decimal Numbers)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Represents decimal or fractional numbers."}),e.jsx(s,{initialCode:`x = 3.14
y = -9.999
z = 2.0  # Yes, this is a float

print(x, y, z)
print(type(z))`}),e.jsxs("p",{className:"text-slate-400 text-xs",children:["Floats are stored in 64-bit IEEE format (same as C’s ",e.jsx("code",{children:"double"}),")."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"3. str (String)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Strings are sequences of characters enclosed in quotes."}),e.jsx(s,{initialCode:`name = "Ritaja"
city = 'Kolkata'
msg = """This is a
multi-line string."""

print(name)
print(city)
print(msg)`}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Strings are:"}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Immutable (cannot be changed after creation)"}),e.jsx("li",{children:"Indexed and sliceable"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"4. bool (True / False)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Boolean type stores logical values ",e.jsx("code",{children:"True"})," and ",e.jsx("code",{children:"False"}),". Internally, they behave like integers 1 and 0."]}),e.jsx(s,{initialCode:`is_active = True
is_admin = False

print(is_active, is_admin)
print(True + True)   # 1 + 1
print(False * 10)    # 0 * 10`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-200",children:"5. Checking the Type with type()"}),e.jsx(s,{initialCode:`print(type(100))        # int
print(type(3.14))       # float
print(type("Hello"))    # str
print(type(True))       # bool`})]}),e.jsxs("section",{className:"space-y-4 bg-slate-900/50 border border-slate-700 p-5 rounded-xl",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Common Mistakes"}),e.jsxs("ul",{className:"list-disc ml-6 text-slate-300 text-sm space-y-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:'"10"'})," (string) is **not** the same as ",e.jsx("code",{children:"10"})," (integer)."]}),e.jsx("li",{children:"You cannot add strings + numbers directly without conversion."}),e.jsxs("li",{children:["Floating numbers may introduce rounding errors like ",e.jsx("code",{children:"0.1 + 0.2 ≠ 0.3"}),"."]}),e.jsx("li",{children:"Booleans behave like numbers (True=1, False=0)."})]})]}),e.jsxs("section",{className:"bg-slate-800/40 p-5 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-sky-300 text-lg font-semibold",children:"Teacher’s Tips"}),e.jsxs("ul",{className:"list-disc ml-6 mt-2 text-slate-300 text-sm space-y-2",children:[e.jsx("li",{children:"Explain dynamic typing: Python assigns type based on value, not declaration."}),e.jsxs("li",{children:["Make students practice ",e.jsx("code",{children:"type()"})," to build clarity."]}),e.jsx("li",{children:"Show real-world uses: marks (int), percentage (float), yes/no (bool), names (str)."}),e.jsx("li",{children:"Highlight immutability of strings early—it helps avoid confusion later."})]})]})]})}export{l as default};
