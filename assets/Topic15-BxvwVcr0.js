import{r as a,j as t}from"./index-BxcHuftT.js";import{E as e}from"./EditableCodeBlock-DK-pKqv2.js";import"./index-lfB80H_P.js";import"./braces-uvHhEcRm.js";import"./file-code-B8psrjkP.js";import"./layout-list-Dx76mYNZ.js";import"./play-BEG4S0rO.js";import"./type-Bf3hrOjC.js";import"./refresh-cw-CeFmYcFg.js";import"./wand-sparkles-DDme7KTv.js";import"./copy-BD9CH8Pb.js";import"./download-Dvp1OFwY.js";import"./eye-off-CcREvAVU.js";import"./eye-C1Ed07Y0.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
const student = {
  name: "Ritaja",
  course: "JavaScript",
  batch: "Morning",
};

const keys = Object.keys(student);
console.log(keys);`}),t.jsx(e,{language:"javascript",initialCode:`// Example 2: Object.values()
const marks = {
  Ritaja: 95,
  Mounita: 90,
  Kaustav: 88,
};

const values = Object.values(marks);
console.log(values);`}),t.jsx(e,{language:"javascript",initialCode:`// Example 3: Object.entries() with forEach
const feesStatus = {
  Ritaja: "Paid",
  Pranjali: "Pending",
  Susmita: "Paid",
};

Object.entries(feesStatus).forEach(function (entry) {
  const name = entry[0];
  const status = entry[1];
  console.log(name + " -> " + status);
});`})]})}}export{v as default};
