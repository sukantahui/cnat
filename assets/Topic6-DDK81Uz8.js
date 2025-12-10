import{j as e,E as s}from"./index-C1Y0luCw.js";function a(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-sky-300",children:"Truthy & Falsy Values in JavaScript"}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["In JavaScript, ",e.jsx("strong",{children:"every value"})," becomes either",e.jsx("span",{className:"text-emerald-400 font-semibold",children:" truthy "}),"or",e.jsx("span",{className:"text-rose-400 font-semibold",children:" falsy "}),"when evaluated inside conditions such as ",e.jsx("code",{className:"text-sky-300",children:"if"}),"."]}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"Understanding truthy and falsy behavior helps avoid unexpected bugs in conditionals."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-rose-300",children:"The 7 Falsy Values"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base",children:"Only these **seven** values are considered falsy:"}),e.jsxs("ul",{className:"list-disc pl-5 text-slate-400 leading-relaxed space-y-1 text-sm md:text-base",children:[e.jsx("li",{children:e.jsx("code",{children:"false"})}),e.jsx("li",{children:e.jsx("code",{children:"0"})}),e.jsx("li",{children:e.jsx("code",{children:"-0"})}),e.jsxs("li",{children:[e.jsx("code",{children:'""'})," (empty string)"]}),e.jsx("li",{children:e.jsx("code",{children:"null"})}),e.jsx("li",{children:e.jsx("code",{children:"undefined"})}),e.jsx("li",{children:e.jsx("code",{children:"NaN"})})]}),e.jsx(s,{language:"javascript",initialCode:`let values = [false, 0, "", null, undefined, NaN];

for (let value of values) {
  if (value) {
    console.log(value, "=> truthy");
  } else {
    console.log(value, "=> falsy");
  }
}`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400",children:"Truthy Values"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"All other values are truthy. Common examples:"}),e.jsxs("ul",{className:"list-disc pl-5 text-slate-400 leading-relaxed space-y-1 text-sm md:text-base",children:[e.jsxs("li",{children:["Any non-zero number (",e.jsx("code",{children:"1"}),", ",e.jsx("code",{children:"-5"}),", ",e.jsx("code",{children:"3.14"}),")"]}),e.jsxs("li",{children:["Any non-empty string (",e.jsx("code",{children:'"0"'}),", ",e.jsx("code",{children:'"hello"'}),")"]}),e.jsxs("li",{children:[e.jsx("code",{children:"[]"})," (empty array)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"{}"})," (empty object)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"function() "})," (any function)"]})]}),e.jsx(s,{language:"javascript",initialCode:`let values = [1, -5, "0", " ", [], {}, function() {}];

for (let value of values) {
  if (value) {
    console.log(value, "=> truthy");
  } else {
    console.log(value, "=> falsy");
  }
}`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"Truthy/Falsy in IF Statements"}),e.jsx("p",{className:"text-slate-300 leading-relaxed text-sm md:text-base",children:"JavaScript converts values to boolean automatically:"}),e.jsx(s,{language:"javascript",initialCode:`let name = "";

if (name) {
  console.log("Name entered:", name);
} else {
  console.log("Please enter your name.");
}`}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-sm md:text-base",children:["Because ",e.jsx("code",{children:'""'})," is falsy, the ",e.jsx("code",{children:"else"})," block runs."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-rose-300",children:"Common Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-5 text-slate-400 leading-relaxed space-y-2 text-sm md:text-base",children:[e.jsxs("li",{children:[e.jsx("code",{children:"0"})," is falsy, but ",e.jsx("code",{children:'"0"'})," is truthy."]}),e.jsxs("li",{children:[e.jsx("code",{children:"[]"}),' is truthy even though it appears "empty".']}),e.jsxs("li",{children:[e.jsx("code",{children:"{}"})," is truthy — all objects are truthy."]})]}),e.jsx(s,{language:"javascript",initialCode:`console.log(Boolean(0));     // false
console.log(Boolean("0"));   // true
console.log(Boolean([]));    // true
console.log(Boolean({}));    // true`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-xl font-semibold text-sky-300",children:["Boolean Conversion Using ",e.jsx("code",{children:"!!"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsx("code",{children:"!!"})," is a quick way to convert any value to a boolean."]}),e.jsx(s,{language:"javascript",initialCode:`console.log(!!0);        // false
console.log(!!"");       // false
console.log(!!"hello");  // true
console.log(!!123);      // true
console.log(!!null);     // false
console.log(!!{});       // true
console.log(!![]);       // true`})]}),e.jsxs("section",{className:"space-y-4 pb-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-emerald-400",children:"Practice — Predict the Output"}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base",children:"Guess whether each value is truthy or falsy before running the code."}),e.jsx(s,{language:"javascript",initialCode:`let values = [0, "0", "", " ", null, undefined, [], {}, NaN];

for (let value of values) {
  if (value) {
    console.log(value, "=> truthy");
  } else {
    console.log(value, "=> falsy");
  }
}`})]})]})}export{a as default};
