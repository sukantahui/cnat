import{r as i,j as a}from"./index-BFnLuail.js";import{J as d}from"./JavaCodeBlock-BW2HnNng.js";import"./prism-DTsTe1iV.js";import"./browser-BMQRQ0HI.js";import"./prism-java-CQA27I6F.js";function f({fileModule:r,title:o=null,highlightLines:l=[]}){const[c,s]=i.useState(""),[u,t]=i.useState(!0);i.useEffect(()=>{if(!r){t(!1);return}typeof r=="string"?(s(r),t(!1)):m(r)},[r]);async function m(e){try{if(t(!0),e.then){const n=await e;n.default&&s(n.default)}else e.default&&s(e.default)}catch(n){console.error("Error loading Java module:",n)}finally{t(!1)}}return u?a.jsxs("div",{className:"text-center py-8 text-slate-400",children:[a.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-sky-500 mx-auto mb-2"}),"Loading..."]}):a.jsx(d,{code:c,title:o||"Java File",highlightLines:l})}const p=`public class NumberComparator<T extends Number & Comparable<T>> {\r
    private T a, b;\r
\r
    public NumberComparator(T a, T b) {\r
        this.a = a;\r
        this.b = b;\r
    }\r
\r
    public T max() {\r
        return a.compareTo(b) > 0 ? a : b;\r
    }\r
}\r
`;function T(){return a.jsxs("div",{className:"p-6",children:[a.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Java Examples"}),a.jsx(f,{fileModule:p,title:"Main.java",highlightLines:[]})]})}export{T as default};
