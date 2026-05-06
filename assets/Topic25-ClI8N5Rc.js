import{r as o,j as e}from"./index-BnfAr6UH.js";import{E as t}from"./EditableCodeBlock-CJAD9-yV.js";import"./index-BOJ7CUHh.js";import"./braces-CNDkIFm0.js";import"./file-code-2-2TDWSW.js";import"./layout-list-BzviaWtA.js";import"./play-Ckwl6zud.js";import"./type-Df_QG4NN.js";import"./refresh-cw-DP2gjNNw.js";import"./wand-sparkles-BegAdJAm.js";import"./copy-Cqsw3qgy.js";import"./download-DLZRmf4V.js";import"./eye-off-CnAXOkhW.js";import"./eye-DwZEsWI3.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 25 – Optional chaining (?.) and nullish coalescing (??)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Optional chaining to avoid errors
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
