import{j as e}from"./index-CK4WUhpx.js";import{E as i}from"./EditablePythonCodeBlock-6OdLdI1a.js";import"./index-s7j91j2a.js";import"./createLucideIcon--yS5sPo-.js";import"./braces-6524uQsV.js";import"./layout-list-Cl8lmIC1.js";import"./play-CGI8rN0h.js";import"./type-DD2SMkRe.js";import"./refresh-cw-BeQoxRgF.js";import"./copy-dX76-Zhw.js";import"./download-CvyilHOI.js";import"./eye-off-wSbFtSgN.js";import"./eye-BOx9f4_I.js";function h(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"Basic Debugging with print() Statements"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Debugging means finding and fixing errors in your program. The simplest and most powerful debugging tool for beginners is the ",e.jsx("code",{children:"print()"})," function."]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Why print debugging?"}),e.jsx(i,{initialCode:`x = 10
y = 0

print("Before division: x =", x, ", y =", y)

# find error
result = x / y  # This will cause ZeroDivisionError

print("Result =", result)`})]}),e.jsx("p",{className:"text-slate-400 text-sm",children:"By printing values before the operation, you can identify the mistake."}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Tracking Program Flow"}),e.jsx(i,{initialCode:`print("Start Program")

for i in range(3):
    print("Loop iteration =", i)

print("End Program")`})]}),e.jsxs("section",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-sky-300 text-lg font-semibold",children:"Teacher’s Tips"}),e.jsxs("ul",{className:"list-disc text-slate-300 text-sm ml-6 mt-2 space-y-1",children:[e.jsx("li",{children:"Use print() to verify values at different lines."}),e.jsx("li",{children:"Check loop indexes, conditions, and variable updates."}),e.jsx("li",{children:"Print debugging builds a strong understanding of program logic."}),e.jsx("li",{children:"Professional developers still use print() for quick tests!"})]})]})]})}export{h as default};
