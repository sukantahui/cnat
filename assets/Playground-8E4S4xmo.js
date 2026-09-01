import{b as f,j as e}from"./vendor-react-core-Doz9nIC6.js";import{F as C}from"./vendor-monaco-Bv7hoEkV.js";import{h as k,aB as N,bJ as L,i as T,j as b,k as z,R as M,l as E,m as R,ay as F,az as H,n as D,D as O,bK as J,o as P,p as B}from"./vendor-icons-8ao-0upJ.js";class w extends f.Component{constructor(t){super(t),this._postMessageHandler=n=>{!n.data||!n.data.type||n.data.type==="console"&&this.setState(c=>({consoleOutput:[...c.consoleOutput,{type:n.data.level||"log",message:n.data.message}]}))},window.addEventListener("message",this._postMessageHandler,!1);const o=n=>this.normalizeCode(n||""),a=t.initialSnippets||{},i=o(a.javascript??t.initialCode??""),l=o(a.html??`<!-- HTML goes here -->
<div id='app'>Hello from Coder & AccoTax!</div>`),r=o(a.css??`/* CSS goes here */
body { font-family: system-ui; }`);this.state={error:"",errorLine:null,consoleOutput:[],editorHeight:240,isFullscreen:!1,showLineNumbers:!0,autoRun:!1,fontSize:14,theme:"vs-dark",showConsole:!0,showSplitView:!1,previewCode:"",previewKey:Date.now(),showFontMenu:!1,showThemeMenu:!1,activeTab:t.defaultTab||"javascript",codes:{javascript:i,html:l,css:r}},this.editorRef=null,this.monaco=null,this.decorations=[],this.previewFrame=null}componentWillUnmount(){window.removeEventListener("message",this._postMessageHandler,!1)}normalizeCode=t=>t.replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\");handleEditorDidMount=(t,o)=>{this.editorRef=t,this.monaco=o,this.applyMonacoTheme(this.state.theme),this.updateEditorHeight(),t.onDidContentSizeChange(()=>this.updateEditorHeight()),t.onDidChangeModelContent(()=>{this.state.autoRun&&this.state.activeTab==="javascript"&&(clearTimeout(this.typingTimer),this.typingTimer=setTimeout(()=>this.runCode(),600))})};updateEditorHeight=()=>{if(!this.editorRef)return;const t=Math.max(this.editorRef.getContentHeight(),180);this.setState({editorHeight:t},()=>{this.editorRef.layout()})};applyMonacoTheme=t=>{if(!this.monaco)return;Object.entries({dracula:{base:"vs-dark",inherit:!0,colors:{"editor.background":"#1e1e2e"}},"one-dark":{base:"vs-dark",inherit:!0,colors:{"editor.background":"#282c34"}},"solarized-dark":{base:"vs-dark",inherit:!0,colors:{"editor.background":"#002b36"}},"solarized-light":{base:"vs",inherit:!0,colors:{"editor.background":"#fdf6e3"}},"github-dark":{base:"vs-dark",inherit:!0,colors:{"editor.background":"#0d1117"}},"github-light":{base:"vs",inherit:!0,colors:{"editor.background":"#ffffff"}}}).forEach(([a,i])=>this.monaco.editor.defineTheme(a,i)),this.monaco.editor.setTheme(t)};updatePreview=()=>{const{javascript:t,html:o,css:a}=this.state.codes,i=`
      <html>
        <head>
          <meta charset="UTF-8" />
          <style>${a}</style>
        </head>

        <body>
          ${o}

          <!-- ========================= -->
          <!-- JS Console Bridge (works with async) -->
          <!-- ========================= -->
          <script>
            (function() {
              function send(level, args) {
                try {
                  var msg = args.map(a => {
                    try { return typeof a === 'object' ? JSON.stringify(a) : String(a); }
                    catch { return String(a); }
                  }).join(' ');

                  window.parent.postMessage({
                    type: 'console',
                    level: level,
                    message: msg
                  }, '*');
                } catch(e){}
              }

              const oldLog = console.log;
              const oldWarn = console.warn;
              const oldError = console.error;

              console.log = function() { send('log', [...arguments]); oldLog.apply(console, arguments); };
              console.warn = function() { send('warn', [...arguments]); oldWarn.apply(console, arguments); };
              console.error = function() { send('error', [...arguments]); oldError.apply(console, arguments); };
            })();
          <\/script>

          <!-- ========================= -->
          <!-- User Code -->
          <!-- ========================= -->
          <script>
            try {
              ${t}
            } catch (e) {
              window.parent.postMessage({
                type: 'console',
                level: 'error',
                message: String(e)
              }, '*');
            }
          <\/script>
        </body>
      </html>
    `;this.setState({previewCode:i,previewKey:Date.now()})};runCode=()=>{const t=this.state.codes.javascript;this.setState({error:"",errorLine:null,consoleOutput:[]});const o=[],a=console.log,i=console.error,l=r=>typeof r=="object"?JSON.stringify(r,null,2):String(r);console.log=(...r)=>{o.push({type:"log",message:r.map(l).join(" ")}),a(...r)},console.error=(...r)=>{o.push({type:"error",message:r.map(l).join(" ")}),i(...r)};try{new Function(t)(),this.setState({consoleOutput:o})}catch(r){const n=(r.stack||"").match(/<anonymous>:(\d+):/),c=n?Number(n[1]):null;this.setState({error:r.message,errorLine:c}),c&&this.editorRef&&this.monaco&&(this.decorations=this.editorRef.deltaDecorations([],[{range:new this.monaco.Range(c,1,c,1),options:{isWholeLine:!0,className:"bg-red-900/40"}}]))}console.log=a,console.error=i,this.state.showSplitView&&this.updatePreview()};lintCode=()=>{const t=this.state.codes.javascript;try{new Function(t),this.setState({error:"No syntax errors ✔️",errorLine:null})}catch(o){const a=(o.stack||"").match(/<anonymous>:(\d+):/);this.setState({error:o.message,errorLine:a?Number(a[1]):null})}};formatCode=()=>{if(this.state.activeTab!=="javascript")return this.setState({error:"Formatting only works for JavaScript",errorLine:null});try{const t=window.prettier,o=window.prettierPlugins.babel;if(!t||!o)return this.setState({error:"Prettier not loaded",errorLine:null});const a=t.format(this.state.codes.javascript,{parser:"babel",plugins:[o]});this.setState(i=>({codes:{...i.codes,javascript:a},error:"",errorLine:null}))}catch(t){this.setState({error:"Format Error: "+t.message})}};resetCode=()=>{const t=a=>this.normalizeCode(a||""),o=this.props.initialSnippets||{};this.setState({codes:{javascript:t(o.javascript??this.props.initialCode??""),html:t(o.html??`<!-- HTML goes here -->
<div id='app'>Hello from Coder & AccoTax!</div>`),css:t(o.css??`/* CSS goes here */
body { font-family: system-ui; }`)},error:"",errorLine:null,consoleOutput:[]})};downloadCode=()=>{const{activeTab:t,codes:o}=this.state,a=t==="javascript"?"js":t==="html"?"html":"css",i=new Blob([o[t]],{type:"text/plain"}),l=URL.createObjectURL(i),r=document.createElement("a");r.href=l,r.download=`snippet.${a}`,r.click(),URL.revokeObjectURL(l)};render(){const{error:t,consoleOutput:o,editorHeight:a,isFullscreen:i,showLineNumbers:l,autoRun:r,fontSize:n,theme:c,showConsole:p,showSplitView:h,previewCode:j,previewKey:v,activeTab:d,codes:m,showFontMenu:x,showThemeMenu:g}=this.state,S=d==="html"?"html":d==="css"?"css":"javascript";return e.jsxs("div",{className:`border border-slate-700 rounded-xl bg-slate-900 overflow-visible ${i?"fixed inset-0 z-[9999] p-4":""}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between bg-slate-800 px-3 py-2 text-xs z-[9999] relative",children:[e.jsx("span",{className:"text-slate-400 font-semibold",children:"Editable Code"}),e.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[e.jsx("div",{className:"flex rounded overflow-hidden border border-slate-700",children:["javascript","html","css"].map(s=>e.jsxs("button",{onClick:()=>this.setState({activeTab:s,error:"",errorLine:null}),className:`px-2 py-1 flex items-center gap-1 ${d===s?"bg-sky-600 text-white":"bg-slate-900 text-slate-300"}`,children:[s==="javascript"&&e.jsx(k,{size:14}),s==="html"&&e.jsx(N,{size:14}),s==="css"&&e.jsx(L,{size:14}),s.toUpperCase()]},s))}),e.jsxs("button",{onClick:()=>this.setState({showLineNumbers:!l}),className:"px-2 py-1 rounded bg-indigo-600 text-white flex items-center gap-1",children:[e.jsx(T,{size:14})," Lines"]}),e.jsxs("button",{onClick:()=>this.setState({autoRun:!r}),className:`px-2 py-1 rounded ${r?"bg-green-700":"bg-green-600"} text-white flex items-center gap-1`,children:[e.jsx(b,{size:14})," Auto"]}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:()=>this.setState({showFontMenu:!x}),className:"px-2 py-1 rounded bg-blue-600 text-white flex items-center gap-1",children:[e.jsx(z,{size:14})," Font"]}),x&&e.jsx("div",{className:"absolute right-0 mt-1 w-32 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-[99999] p-1 text-xs",children:[10,12,14,16,18,20,22,24].map(s=>e.jsxs("button",{onClick:()=>this.setState({fontSize:s,showFontMenu:!1}),className:`w-full text-left px-2 py-1 rounded ${n===s?"bg-sky-600 text-white":"text-slate-300 hover:bg-slate-700"}`,children:[s,"px"]},s))})]}),e.jsxs("div",{className:"relative",children:[e.jsx("button",{onClick:()=>this.setState({showThemeMenu:!g}),className:"px-2 py-1 rounded bg-yellow-600 text-white flex items-center gap-1",children:"🎨 Theme"}),g&&e.jsx("div",{className:"absolute right-0 mt-1 w-44 bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-1 text-xs z-[99999]",children:[{id:"vs-dark",label:"VSCode Dark+"},{id:"vs",label:"VSCode Light+"},{id:"dracula",label:"Dracula"},{id:"one-dark",label:"One Dark Pro"},{id:"solarized-dark",label:"Solarized Dark"},{id:"solarized-light",label:"Solarized Light"},{id:"github-dark",label:"GitHub Dark"},{id:"github-light",label:"GitHub Light"}].map(s=>e.jsx("button",{onClick:()=>{this.applyMonacoTheme(s.id),this.setState({theme:s.id,showThemeMenu:!1})},className:`w-full text-left px-2 py-1 rounded ${c===s.id?"bg-sky-600 text-white":"text-slate-300 hover:bg-slate-700"}`,children:s.label},s.id))})]}),e.jsxs("button",{onClick:this.resetCode,className:"px-2 py-1 rounded bg-gray-600 text-white flex items-center gap-1",children:[e.jsx(M,{size:14})," Reset"]}),e.jsxs("button",{onClick:()=>this.setState(s=>({isFullscreen:!s.isFullscreen}),()=>this.editorRef?.layout()),className:"px-2 py-1 rounded bg-purple-600 text-white flex items-center gap-1",children:[i?e.jsx(E,{size:14}):e.jsx(R,{size:14}),"Full"]}),e.jsxs("button",{onClick:this.formatCode,className:"px-2 py-1 rounded bg-sky-600 text-white flex items-center gap-1",children:[e.jsx(F,{size:14})," Format"]}),e.jsxs("button",{onClick:this.lintCode,className:"px-2 py-1 rounded bg-amber-600 text-white flex items-center gap-1",children:[e.jsx(H,{size:14})," Lint"]}),e.jsxs("button",{onClick:this.runCode,className:"px-2 py-1 rounded bg-emerald-600 text-white flex items-center gap-1",children:[e.jsx(b,{size:14})," Run"]}),e.jsxs("button",{onClick:()=>{navigator.clipboard.writeText(m[d]),alert("Copied!")},className:"px-2 py-1 rounded bg-slate-600 text-white flex items-center gap-1",children:[e.jsx(D,{size:14})," Copy"]}),e.jsxs("button",{onClick:this.downloadCode,className:"px-2 py-1 rounded bg-teal-600 text-white flex items-center gap-1",children:[e.jsx(O,{size:14})," Save"]}),e.jsxs("button",{onClick:()=>this.setState(s=>({showSplitView:!s.showSplitView}),()=>this.state.showSplitView&&this.updatePreview()),className:"px-2 py-1 rounded bg-cyan-600 text-white flex items-center gap-1",children:[e.jsx(J,{size:14}),h?"Hide":"Split"]}),e.jsxs("button",{onClick:()=>this.setState({showConsole:!p}),className:"px-2 py-1 rounded bg-orange-600 text-white flex items-center gap-1",children:[p?e.jsx(P,{size:14}):e.jsx(B,{size:14}),"Console"]})]})]}),e.jsxs("div",{className:`flex w-full ${h?"gap-2":""}`,children:[e.jsx("div",{className:h?"w-1/2":"w-full",children:e.jsx(C,{language:S,value:m[d],onChange:(s="")=>this.setState(u=>({codes:{...u.codes,[d]:String(s)}})),height:a,theme:c,onMount:this.handleEditorDidMount,options:{fontSize:n,minimap:{enabled:!1},automaticLayout:!0,lineNumbers:l?"on":"off",scrollBeyondLastLine:!1,padding:{top:18,bottom:18}}})}),h&&e.jsx("div",{className:"w-1/2 border-l border-slate-700 bg-black",children:e.jsx("iframe",{title:"preview",srcDoc:j,sandbox:"allow-scripts allow-same-origin",className:"w-full h-full",ref:s=>this.previewFrame=s},v)})]}),t&&e.jsxs("div",{className:"bg-red-900/40 border-t border-red-700 px-3 py-2 text-red-300 text-xs",children:["⚠ ",t]}),p&&e.jsxs("div",{className:"bg-black border-t border-slate-700 px-3 py-2 h-40 overflow-auto text-xs",children:[e.jsx("p",{className:"text-slate-400 mb-1",children:"Console Output:"}),o.length===0&&e.jsx("p",{className:"text-slate-600",children:"No output yet."}),o.map((s,u)=>e.jsx("pre",{className:`whitespace-pre-wrap ${s.type==="error"?"text-red-400":s.type==="warn"?"text-yellow-300":"text-green-300"}`,children:s.message},u))]})]})}}w.defaultProps={initialCode:"",initialSnippets:null,defaultTab:"javascript"};class W extends f.Component{render(){return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-6 space-y-8",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h1",{className:"text-3xl font-bold text-sky-400",children:"JavaScript Interactive Playground"}),e.jsx("p",{className:"text-slate-400 text-sm max-w-2xl mx-auto",children:"Experiment with JavaScript, HTML & CSS in real-time. Built for Coder & AccoTax, Barrackpore — learn by writing, running & debugging your own code."})]}),e.jsx("div",{className:"max-w-7xl mx-auto",children:e.jsx(w,{defaultTab:"javascript",fileBaseName:"playground-snippet",initialSnippets:{javascript:`// Welcome to the JavaScript Playground!
// You can write any JS code here and click RUN.
// Or enable AUTO to execute automatically.

console.log("Welcome to Coder & AccoTax Playground!");

// Example: Simple DOM manipulation
const box = document.getElementById("demo-box");
if (box) {
  box.textContent = "JS updated this text!";
  box.style.padding = "10px";
  box.style.background = "#0ea5e9";
  box.style.color = "white";
}
`,html:`<!-- HTML Workspace -->
<h2 style="color:#38bdf8;">Playground Demo Box</h2>
<div id="demo-box">This will be modified by JavaScript…</div>

<!-- You can write any HTML here -->
<p style="margin-top:10px;">
  Edit the HTML, CSS and JS from the tabs above.
</p>
`,css:`/* CSS Workspace */
body {
  font-family: system-ui;
  margin: 12px;
  background: #020617;
  color: #e5e7eb;
}

#demo-box {
  border: 1px solid #64748b;
  padding: 8px;
  margin-top: 10px;
  border-radius: 6px;
}
`}})})]})}}export{W as default};
