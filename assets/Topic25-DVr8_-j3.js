import{r as o,j as e}from"./index-BHC-ARLC.js";import{E as t}from"./EditableCodeBlock-CIvCYvLg.js";import"./index-ME8AnmeB.js";import"./braces-BQvFuFD9.js";import"./file-code-55V_qcat.js";import"./layout-list--tQkMoA1.js";import"./play-S6YlOQBD.js";import"./type-Nkw_JIR4.js";import"./refresh-cw-B3VDvcQ8.js";import"./wand-sparkles-By4oPjZ3.js";import"./copy-DNi4hkEF.js";import"./download-BuOPxyOv.js";import"./eye-off-xALAcrMX.js";import"./eye-DBhLFmsq.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 25 – Optional chaining (?.) and nullish coalescing (??)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Optional chaining to avoid errors
const student = {
  name: "Pranjali",
  courses: {
    python: { status: "Completed" },
  },
};

console.log(student.courses?.python?.status);
console.log(student.courses?.javascript?.status); // undefined, no error`}),e.jsx(t,{language:"javascript",initialCode:`// Example 2: Optional chaining with arrays
const batches = {
  morning: ["Ritaja", "Kaustav"],
};

console.log(batches.morning?.[0]);      // "Ritaja"
console.log(batches.evening?.[0]);      // undefined (no error)`}),e.jsx(t,{language:"javascript",initialCode:`// Example 3: Nullish coalescing for default values
const settings = {
  theme: "dark",
  itemsPerPage: 0, // valid value
};

const theme = settings.theme ?? "light";
const items = settings.itemsPerPage ?? 10;

console.log("Theme:", theme);
console.log("Items per page:", items);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 4: Optional chaining + nullish coalescing together
const studentProfile = {
  name: "Susmita",
  preferences: {
    language: "en",
  },
};

const language = studentProfile.preferences?.language ?? "en";
const mode = studentProfile.preferences?.mode ?? "light";

console.log("Language:", language);
console.log("Mode:", mode);`})]})}}export{f as default};
