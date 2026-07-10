import{r as o,j as e}from"./index-DKhGj2r9.js";import{E as t}from"./EditableCodeBlock-Bw_3eVxT.js";import"./index-Db0j1cdf.js";import"./createLucideIcon-DZ4EMxs8.js";import"./braces-CEKIThwN.js";import"./file-code-BLnEmaT3.js";import"./layout-list-BuOBAyKA.js";import"./play-B4tVruhT.js";import"./type-CPkc_PUl.js";import"./refresh-cw-CKv6YgUv.js";import"./wand-sparkles-CsthY_-w.js";import"./copy-Bb5mh8KX.js";import"./download-6Kfgauek.js";import"./eye-off-C6upiu6S.js";import"./eye-CHNAHx-m.js";class v extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 25 – Optional chaining (?.) and nullish coalescing (??)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Optional chaining to avoid errors
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
console.log("Mode:", mode);`})]})}}export{v as default};
