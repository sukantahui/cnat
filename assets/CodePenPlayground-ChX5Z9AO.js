import{b as t,j as e}from"./vendor-react-core-Doz9nIC6.js";import{F as E}from"./vendor-monaco-Bv7hoEkV.js";import{J as S,F as Z}from"./vendor-docs-CdhvdQhv.js";import{af as F,k as B,m as P,n as H,T as I}from"./vendor-icons-CIaKtAt4.js";function L({initialHTML:x=`<h1 id="title">Hello Baba</h1>
<button onclick="changeTitle()">Click Me</button>`,initialCSS:g="h1 { color: red; font-family: system-ui; }",initialJS:h=`
function changeTitle() {
  document.getElementById("title").innerText = "Button Working!";
  alert("Hello Baba ❤️");
  console.log("Button clicked");
}
`}){const[a,b]=t.useState(x),[c,f]=t.useState(g),[i,w]=t.useState(h),[n,N]=t.useState("html"),[m,k]=t.useState(!0),[j,y]=t.useState([]),[d,_]=t.useState(!1),v=t.useRef(null),C=t.useRef(null);function z(s){let o=s,l="";const p=/function\s+([a-zA-Z_$][0-9a-zA-Z_$]*)\s*\(/g;let r;for(;(r=p.exec(s))!==null;)l+=`window.${r[1]} = ${r[1]};
`;const T=/const\s+([a-zA-Z_$][0-9a-zA-Z_$]*)\s*=\s*\(/g;for(;(r=T.exec(s))!==null;)l+=`window.${r[1]} = ${r[1]};
`;return o+`

`+l}window.__penConsole=(s,o)=>{y(l=>[...l,{type:s,message:o.map(String).join(" ")}])};const u=()=>{y([]);const s=`
<!DOCTYPE html>
<html>
<head>
  <style>${c}</style>
</head>
<body>

${a}

<script>
  if (!window.__consoleHooked__) {
    window.__consoleHooked__ = true;

    var parentConsole = window.parent.__penConsole;
    console.log = (...args) => parentConsole("log", args);
    console.error = (...args) => parentConsole("error", args);
    console.warn = (...args) => parentConsole("warn", args);
  }
<\/script>

<script>
  try {
    ${z(i)}
  } catch (err) {
    console.error(err);
  }
<\/script>

</body>
</html>
`;v.current.srcdoc=s};t.useEffect(()=>{m&&(clearTimeout(C.current),C.current=setTimeout(u,500))},[a,c,i]),t.useEffect(()=>{u()},[]);const $=async()=>{const s=new S;s.file("index.html",a),s.file("style.css",c),s.file("script.js",i);const o=await s.generateAsync({type:"blob"});Z.saveAs(o,"codepen-project.zip")},R=()=>{b(x),f(g),w(h),u()},A=()=>{const s=n==="html"?"html":n==="css"?"css":"javascript",o=n==="html"?a:n==="css"?c:i,l=n==="html"?b:n==="css"?f:w;return e.jsx(E,{height:d?"88vh":"320px",language:s,theme:"vs-dark",value:o,onChange:p=>l(p),options:{minimap:{enabled:!1},fontSize:14}})};return e.jsxs("div",{className:`border border-slate-700 rounded-xl bg-slate-900 ${d?"fixed inset-0 z-[9999]":""}`,children:[e.jsxs("div",{className:"p-3 flex justify-between items-center bg-slate-800 text-slate-200",children:[e.jsx("div",{className:"flex gap-2",children:["html","css","js"].map(s=>e.jsx("button",{onClick:()=>N(s),className:`px-3 py-1 rounded ${n===s?"bg-sky-600":"bg-slate-700"}`,children:s.toUpperCase()},s))}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsxs("button",{onClick:R,className:"px-2 py-1 rounded bg-gray-600 flex items-center gap-1",children:[e.jsx(F,{size:14})," Reset"]}),e.jsx("button",{onClick:()=>k(!m),className:`px-2 py-1 rounded ${m?"bg-green-700":"bg-green-600"}`,children:"Auto"}),e.jsxs("button",{onClick:u,className:"px-2 py-1 rounded bg-emerald-600 flex items-center gap-1",children:[e.jsx(B,{size:14})," Run"]}),e.jsx("button",{onClick:$,className:"px-2 py-1 rounded bg-indigo-600",children:"ZIP"}),e.jsx("button",{onClick:()=>_(!d),className:"px-2 py-1 rounded bg-purple-600",children:d?e.jsx(P,{size:14}):e.jsx(H,{size:14})})]})]}),A(),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 border-t border-slate-700",children:[e.jsx("div",{className:"bg-black border-r border-slate-700",children:e.jsx("iframe",{ref:v,className:"w-full h-[300px] bg-white",sandbox:"allow-scripts allow-same-origin allow-modals allow-pointer-lock allow-popups allow-forms",title:"preview"})}),e.jsxs("div",{className:"bg-slate-900 text-slate-200 p-2 text-xs",children:[e.jsxs("div",{className:"flex gap-2 items-center mb-1 text-orange-400",children:[e.jsx(I,{size:14})," Console"]}),e.jsxs("div",{className:"h-[270px] overflow-auto bg-black p-2 rounded",children:[j.length===0&&e.jsx("div",{className:"text-slate-600",children:"No output yet."}),j.map((s,o)=>e.jsx("pre",{className:s.type==="error"?"text-red-400":s.type==="warn"?"text-yellow-300":"text-green-300",children:s.message},o))]})]})]})]})}export{L as C};
