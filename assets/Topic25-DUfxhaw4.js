import{r as o,j as e}from"./index-CmAIoOXN.js";import{E as t}from"./EditableCodeBlock-BlMKhSHY.js";import"./index-Ctno6LPZ.js";import"./braces-DM1jAfMm.js";import"./file-code-Dknl8_wy.js";import"./layout-list-C0IShk2V.js";import"./play-BOo6cwEF.js";import"./type-BX72wN3g.js";import"./refresh-cw-BbngG8iQ.js";import"./wand-sparkles-BhMA9XzZ.js";import"./copy-DM6uKa4-.js";import"./download-Dist3jgj.js";import"./eye-off-CcBA_c8J.js";import"./eye-BJpbV_yU.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 25 – Optional chaining (?.) and nullish coalescing (??)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Optional chaining to avoid errors
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
