import{j as e}from"./index-YH4u--c0.js";import{E as i}from"./EditablePythonCodeBlock-Ctj8aBFW.js";import"./index-C88JtG2I.js";import"./createLucideIcon-D7phWlUA.js";import"./braces-DEe5lwLV.js";import"./layout-list-H4xfDoOD.js";import"./play-BWUk_zaa.js";import"./type-BAYKHREU.js";import"./refresh-cw-B0Wn9xOb.js";import"./copy-D-9DuOQr.js";import"./download-Bn-I9ybH.js";import"./eye-off-BiNxchX8.js";import"./eye-7zfXSrAZ.js";function h(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"Basic Debugging with print() Statements"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Debugging means finding and fixing errors in your program. The simplest and most powerful debugging tool for beginners is the ",e.jsx("code",{children:"print()"})," function."]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Why print debugging?"}),e.jsx(i,{initialCode:`x = 10
y = 0

print("Before division: x =", x, ", y =", y)

# find error
result = x / y  # This will cause ZeroDivisionError

print("Result =", result)`})]}),e.jsx("p",{className:"text-slate-400 text-sm",children:"By printing values before the operation, you can identify the mistake."}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Tracking Program Flow"}),e.jsx(i,{initialCode:`print("Start Program")

for i in range(3):
    print("Loop iteration =", i)

print("End Program")`})]}),e.jsxs("section",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-sky-300 text-lg font-semibold",children:"Teacher’s Tips"}),e.jsxs("ul",{className:"list-disc text-slate-300 text-sm ml-6 mt-2 space-y-1",children:[e.jsx("li",{children:"Use print() to verify values at different lines."}),e.jsx("li",{children:"Check loop indexes, conditions, and variable updates."}),e.jsx("li",{children:"Print debugging builds a strong understanding of program logic."}),e.jsx("li",{children:"Professional developers still use print() for quick tests!"})]})]})]})}export{h as default};
