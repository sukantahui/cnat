import{j as e}from"./index-BjcB6RzK.js";import{E as i}from"./EditablePythonCodeBlock-BUl0L0Jq.js";import"./index-DMsSvuEi.js";import"./braces-rmDTwsn1.js";import"./layout-list-DXswQ4wB.js";import"./play-DX16GKke.js";import"./type-KuLbSU6d.js";import"./refresh-cw-BiBGBwpy.js";import"./copy-DI4a0ux7.js";import"./download-D9OBzpJs.js";import"./eye-off-BvUSmI0w.js";import"./eye-CPtAr_i7.js";function g(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"Basic Debugging with print() Statements"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Debugging means finding and fixing errors in your program. The simplest and most powerful debugging tool for beginners is the ",e.jsx("code",{children:"print()"})," function."]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Why print debugging?"}),e.jsx(i,{initialCode:`x = 10
y = 0

print("Before division: x =", x, ", y =", y)

# find error
result = x / y  # This will cause ZeroDivisionError

print("Result =", result)`})]}),e.jsx("p",{className:"text-slate-400 text-sm",children:"By printing values before the operation, you can identify the mistake."}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Tracking Program Flow"}),e.jsx(i,{initialCode:`print("Start Program")

for i in range(3):
    print("Loop iteration =", i)

print("End Program")`})]}),e.jsxs("section",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700",children:[e.jsx("h3",{className:"text-sky-300 text-lg font-semibold",children:"Teacher’s Tips"}),e.jsxs("ul",{className:"list-disc text-slate-300 text-sm ml-6 mt-2 space-y-1",children:[e.jsx("li",{children:"Use print() to verify values at different lines."}),e.jsx("li",{children:"Check loop indexes, conditions, and variable updates."}),e.jsx("li",{children:"Print debugging builds a strong understanding of program logic."}),e.jsx("li",{children:"Professional developers still use print() for quick tests!"})]})]})]})}export{g as default};
