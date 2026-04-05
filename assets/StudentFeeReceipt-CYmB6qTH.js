import{r as k,j as a}from"./index-BXlhguQt.js";import{c as he}from"./courses-C93V3GmA.js";const B="/assets/cnat-BerK4Qhb.png",xe="/assets/paid-stamp-B9Sa6ZVr.png";function ye(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}const be=(()=>{let e=0;const t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function S(e){const t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}let C=null;function K(e={}){return C||(e.includeStyleProperties?(C=e.includeStyleProperties,C):(C=S(window.getComputedStyle(document.documentElement)),C))}function E(e,t){const r=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return r?parseFloat(r.replace("px","")):0}function we(e){const t=E(e,"border-left-width"),n=E(e,"border-right-width");return e.clientWidth+t+n}function ve(e){const t=E(e,"border-top-width"),n=E(e,"border-bottom-width");return e.clientHeight+t+n}function Q(e,t={}){const n=t.width||we(e),r=t.height||ve(e);return{width:n,height:r}}function je(){let e,t;try{t=process}catch{}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}const w=16384;function ke(e){(e.width>w||e.height>w)&&(e.width>w&&e.height>w?e.width>e.height?(e.height*=w/e.width,e.width=w):(e.width*=w/e.height,e.height=w):e.width>w?(e.height*=w/e.width,e.width=w):(e.width*=w/e.height,e.height=w))}function R(e){return new Promise((t,n)=>{const r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>t(r))})},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=e})}async function Se(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function Ne(e,t,n){const r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),s=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${n}`),o.setAttribute("viewBox",`0 0 ${t} ${n}`),s.setAttribute("width","100%"),s.setAttribute("height","100%"),s.setAttribute("x","0"),s.setAttribute("y","0"),s.setAttribute("externalResourcesRequired","true"),o.appendChild(s),s.appendChild(e),Se(o)}const x=(e,t)=>{if(e instanceof t)return!0;const n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||x(n,t)};function Ce(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function Pe(e,t){return K(t).map(n=>{const r=e.getPropertyValue(n),o=e.getPropertyPriority(n);return`${n}: ${r}${o?" !important":""};`}).join(" ")}function Fe(e,t,n,r){const o=`.${e}:${t}`,s=n.cssText?Ce(n):Pe(n,r);return document.createTextNode(`${o}{${s}}`)}function W(e,t,n,r){const o=window.getComputedStyle(e,n),s=o.getPropertyValue("content");if(s===""||s==="none")return;const i=be();try{t.className=`${t.className} ${i}`}catch{return}const l=document.createElement("style");l.appendChild(Fe(i,n,o,r)),t.appendChild(l)}function Te(e,t,n){W(e,t,":before",n),W(e,t,":after",n)}const _="application/font-woff",q="image/jpeg",Ee={woff:_,woff2:_,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:q,jpeg:q,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function Re(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function L(e){const t=Re(e).toLowerCase();return Ee[t]||""}function $e(e){return e.split(/,/)[1]}function M(e){return e.search(/^(data:)/)!==-1}function Ae(e,t){return`data:${t};base64,${e}`}async function Z(e,t,n){const r=await fetch(e,t);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);const o=await r.blob();return new Promise((s,i)=>{const l=new FileReader;l.onerror=i,l.onloadend=()=>{try{s(n({res:r,result:l.result}))}catch(d){i(d)}},l.readAsDataURL(o)})}const D={};function De(e,t,n){let r=e.replace(/\?.*/,"");return n&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),t?`[${t}]${r}`:r}async function I(e,t,n){const r=De(e,t,n.includeQueryParams);if(D[r]!=null)return D[r];n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let o;try{const s=await Z(e,n.fetchRequestInit,({res:i,result:l})=>(t||(t=i.headers.get("Content-Type")||""),$e(l)));o=Ae(s,t)}catch(s){o=n.imagePlaceholder||"";let i=`Failed to fetch resource: ${e}`;s&&(i=typeof s=="string"?s:s.message),i&&console.warn(i)}return D[r]=o,o}async function Me(e){const t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):R(t)}async function Le(e,t){if(e.currentSrc){const s=document.createElement("canvas"),i=s.getContext("2d");s.width=e.clientWidth,s.height=e.clientHeight,i?.drawImage(e,0,0,s.width,s.height);const l=s.toDataURL();return R(l)}const n=e.poster,r=L(n),o=await I(n,r,t);return R(o)}async function Ie(e,t){var n;try{if(!((n=e?.contentDocument)===null||n===void 0)&&n.body)return await $(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function Oe(e,t){return x(e,HTMLCanvasElement)?Me(e):x(e,HTMLVideoElement)?Le(e,t):x(e,HTMLIFrameElement)?Ie(e,t):e.cloneNode(ee(e))}const ze=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT",ee=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SVG";async function Ue(e,t,n){var r,o;if(ee(t))return t;let s=[];return ze(e)&&e.assignedNodes?s=S(e.assignedNodes()):x(e,HTMLIFrameElement)&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?s=S(e.contentDocument.body.childNodes):s=S(((o=e.shadowRoot)!==null&&o!==void 0?o:e).childNodes),s.length===0||x(e,HTMLVideoElement)||await s.reduce((i,l)=>i.then(()=>$(l,n)).then(d=>{d&&t.appendChild(d)}),Promise.resolve()),t}function He(e,t,n){const r=t.style;if(!r)return;const o=window.getComputedStyle(e);o.cssText?(r.cssText=o.cssText,r.transformOrigin=o.transformOrigin):K(n).forEach(s=>{let i=o.getPropertyValue(s);s==="font-size"&&i.endsWith("px")&&(i=`${Math.floor(parseFloat(i.substring(0,i.length-2)))-.1}px`),x(e,HTMLIFrameElement)&&s==="display"&&i==="inline"&&(i="block"),s==="d"&&t.getAttribute("d")&&(i=`path(${t.getAttribute("d")})`),r.setProperty(s,i,o.getPropertyPriority(s))})}function Ve(e,t){x(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),x(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function Be(e,t){if(x(e,HTMLSelectElement)){const r=Array.from(t.children).find(o=>e.value===o.getAttribute("value"));r&&r.setAttribute("selected","")}}function We(e,t,n){return x(t,Element)&&(He(e,t,n),Te(e,t,n),Ve(e,t),Be(e,t)),t}async function _e(e,t){const n=e.querySelectorAll?e.querySelectorAll("use"):[];if(n.length===0)return e;const r={};for(let s=0;s<n.length;s++){const l=n[s].getAttribute("xlink:href");if(l){const d=e.querySelector(l),y=document.querySelector(l);!d&&y&&!r[l]&&(r[l]=await $(y,t,!0))}}const o=Object.values(r);if(o.length){const s="http://www.w3.org/1999/xhtml",i=document.createElementNS(s,"svg");i.setAttribute("xmlns",s),i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.overflow="hidden",i.style.display="none";const l=document.createElementNS(s,"defs");i.appendChild(l);for(let d=0;d<o.length;d++)l.appendChild(o[d]);e.appendChild(i)}return e}async function $(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(r=>Oe(r,t)).then(r=>Ue(e,r,t)).then(r=>We(e,r,t)).then(r=>_e(r,t))}const te=/url\((['"]?)([^'"]+?)\1\)/g,qe=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Ge=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Ye(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function Je(e){const t=[];return e.replace(te,(n,r,o)=>(t.push(o),n)),t.filter(n=>!M(n))}async function Xe(e,t,n,r,o){try{const s=n?ye(t,n):t,i=L(t);let l;return o||(l=await I(s,i,r)),e.replace(Ye(t),`$1${l}$3`)}catch{}return e}function Ke(e,{preferredFontFormat:t}){return t?e.replace(Ge,n=>{for(;;){const[r,,o]=qe.exec(n)||[];if(!o)return"";if(o===t)return`src: ${r};`}}):e}function re(e){return e.search(te)!==-1}async function ne(e,t,n){if(!re(e))return e;const r=Ke(e,n);return Je(r).reduce((s,i)=>s.then(l=>Xe(l,i,t,n)),Promise.resolve(r))}async function P(e,t,n){var r;const o=(r=t.style)===null||r===void 0?void 0:r.getPropertyValue(e);if(o){const s=await ne(o,null,n);return t.style.setProperty(e,s,t.style.getPropertyPriority(e)),!0}return!1}async function Qe(e,t){await P("background",e,t)||await P("background-image",e,t),await P("mask",e,t)||await P("-webkit-mask",e,t)||await P("mask-image",e,t)||await P("-webkit-mask-image",e,t)}async function Ze(e,t){const n=x(e,HTMLImageElement);if(!(n&&!M(e.src))&&!(x(e,SVGImageElement)&&!M(e.href.baseVal)))return;const r=n?e.src:e.href.baseVal,o=await I(r,L(r),t);await new Promise((s,i)=>{e.onload=s,e.onerror=t.onImageErrorHandler?(...d)=>{try{s(t.onImageErrorHandler(...d))}catch(y){i(y)}}:i;const l=e;l.decode&&(l.decode=s),l.loading==="lazy"&&(l.loading="eager"),n?(e.srcset="",e.src=o):e.href.baseVal=o})}async function et(e,t){const r=S(e.childNodes).map(o=>ae(o,t));await Promise.all(r).then(()=>e)}async function ae(e,t){x(e,Element)&&(await Qe(e,t),await Ze(e,t),await et(e,t))}function tt(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;return r!=null&&Object.keys(r).forEach(o=>{n[o]=r[o]}),e}const G={};async function Y(e){let t=G[e];if(t!=null)return t;const r=await(await fetch(e)).text();return t={url:e,cssText:r},G[e]=t,t}async function J(e,t){let n=e.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,s=(n.match(/url\([^)]+\)/g)||[]).map(async i=>{let l=i.replace(r,"$1");return l.startsWith("https://")||(l=new URL(l,e.url).href),Z(l,t.fetchRequestInit,({result:d})=>(n=n.replace(i,`url(${d})`),[i,d]))});return Promise.all(s).then(()=>n)}function X(e){if(e==null)return[];const t=[],n=/(\/\*[\s\S]*?\*\/)/gi;let r=e.replace(n,"");const o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const d=o.exec(r);if(d===null)break;t.push(d[0])}r=r.replace(o,"");const s=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",l=new RegExp(i,"gi");for(;;){let d=s.exec(r);if(d===null){if(d=l.exec(r),d===null)break;s.lastIndex=l.lastIndex}else l.lastIndex=s.lastIndex;t.push(d[0])}return t}async function rt(e,t){const n=[],r=[];return e.forEach(o=>{if("cssRules"in o)try{S(o.cssRules||[]).forEach((s,i)=>{if(s.type===CSSRule.IMPORT_RULE){let l=i+1;const d=s.href,y=Y(d).then(b=>J(b,t)).then(b=>X(b).forEach(N=>{try{o.insertRule(N,N.startsWith("@import")?l+=1:o.cssRules.length)}catch(A){console.error("Error inserting rule from remote css",{rule:N,error:A})}})).catch(b=>{console.error("Error loading remote css",b.toString())});r.push(y)}})}catch(s){const i=e.find(l=>l.href==null)||document.styleSheets[0];o.href!=null&&r.push(Y(o.href).then(l=>J(l,t)).then(l=>X(l).forEach(d=>{i.insertRule(d,i.cssRules.length)})).catch(l=>{console.error("Error loading remote stylesheet",l)})),console.error("Error inlining remote css file",s)}}),Promise.all(r).then(()=>(e.forEach(o=>{if("cssRules"in o)try{S(o.cssRules||[]).forEach(s=>{n.push(s)})}catch(s){console.error(`Error while reading CSS rules from ${o.href}`,s)}}),n))}function nt(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>re(t.style.getPropertyValue("src")))}async function at(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=S(e.ownerDocument.styleSheets),r=await rt(n,t);return nt(r)}function se(e){return e.trim().replace(/["']/g,"")}function st(e){const t=new Set;function n(r){(r.style.fontFamily||getComputedStyle(r).fontFamily).split(",").forEach(s=>{t.add(se(s))}),Array.from(r.children).forEach(s=>{s instanceof HTMLElement&&n(s)})}return n(e),t}async function ot(e,t){const n=await at(e,t),r=st(e);return(await Promise.all(n.filter(s=>r.has(se(s.style.fontFamily))).map(s=>{const i=s.parentStyleSheet?s.parentStyleSheet.href:null;return ne(s.cssText,i,t)}))).join(`
`)}async function it(e,t){const n=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await ot(e,t);if(n){const r=document.createElement("style"),o=document.createTextNode(n);r.appendChild(o),e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r)}}async function lt(e,t={}){const{width:n,height:r}=Q(e,t),o=await $(e,t,!0);return await it(o,t),await ae(o,t),tt(o,t),await Ne(o,n,r)}async function oe(e,t={}){const{width:n,height:r}=Q(e,t),o=await lt(e,t),s=await R(o),i=document.createElement("canvas"),l=i.getContext("2d"),d=t.pixelRatio||je(),y=t.canvasWidth||n,b=t.canvasHeight||r;return i.width=y*d,i.height=b*d,t.skipAutoScale||ke(i),i.style.width=`${y}`,i.style.height=`${b}`,t.backgroundColor&&(l.fillStyle=t.backgroundColor,l.fillRect(0,0,i.width,i.height)),l.drawImage(s,0,0,i.width,i.height),i}async function ct(e,t={}){return(await oe(e,t)).toDataURL()}async function dt(e,t={}){return(await oe(e,t)).toDataURL("image/jpeg",t.quality||1)}const gt=()=>{const e=()=>{const c=new Date,u=c.getFullYear(),g=String(c.getMonth()+1).padStart(2,"0"),m=String(c.getDate()).padStart(2,"0");return`${u}-${g}-${m}`},[t,n]=k.useState({studentName:"",phone:"",course:"",feeType:"non_monthly",monthlyFeeAmount:"",feesPaid:"",paymentDate:e(),paymentMode:"Cash",periodFrom:"",periodTo:""}),[r,o]=k.useState(null),[s,i]=k.useState(!1),[l,d]=k.useState([]),[y,b]=k.useState(!1),N=k.useRef(null);k.useEffect(()=>{d(he.courses)},[]);const A=()=>{const c="CNAT",u=new Date,g=u.getFullYear(),m=String(u.getMonth()+1).padStart(2,"0"),f=String(u.getDate()).padStart(2,"0"),T=String(u.getHours()).padStart(2,"0"),v=String(u.getMinutes()).padStart(2,"0"),h=String(u.getSeconds()).padStart(2,"0"),p=`${g}${m}${f}${T}${v}${h}`;return`${c}-${p}`},j=c=>{const{name:u,value:g}=c.target;n(m=>({...m,[u]:g}))},F=(c,u)=>{if(!c||!u)return 0;const g=new Date(c),m=new Date(u),f=(m.getFullYear()-g.getFullYear())*12+(m.getMonth()-g.getMonth())+1;return f>0?f:0},O=c=>{const u=c.target.value;n(g=>({...g,feeType:u,feesPaid:"",periodFrom:"",periodTo:"",monthlyFeeAmount:""}))},ie=()=>{if(t.feeType==="monthly"){const c=F(t.periodFrom,t.periodTo),u=parseFloat(t.monthlyFeeAmount)||0,g=c*u;n(m=>({...m,feesPaid:g.toString()}))}};k.useEffect(()=>{t.feeType==="monthly"&&t.periodFrom&&t.periodTo&&t.monthlyFeeAmount&&ie()},[t.periodFrom,t.periodTo,t.monthlyFeeAmount,t.feeType]);const z=c=>{if(!c||isNaN(c))return"";if(c=Math.floor(c),c===0)return"Zero Only";const u=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],g=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],m=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],f=p=>p===0?"":p<10?u[p]:p<20?m[p-10]:g[Math.floor(p/10)]+(p%10?" "+u[p%10]:""),T=p=>{if(p===0)return"";if(p<100)return f(p);const fe=Math.floor(p/100),V=p%100;return u[fe]+" Hundred"+(V?" and "+f(V):"")};let v="",h=c;if(h>=1e7){const p=Math.floor(h/1e7);v+=f(p)+" Crore",h%=1e7,h>0&&(v+=" ")}if(h>=1e5){const p=Math.floor(h/1e5);v+=f(p)+" Lakh",h%=1e5,h>0&&(v+=" ")}if(h>=1e3){const p=Math.floor(h/1e3);v+=T(p)+" Thousand",h%=1e3,h>0&&(v+=" ")}return h>0&&(v+=T(h)),v+" Only"},le=c=>c?new Date(c).toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}):"",U=c=>c?new Date(c).toLocaleDateString("en-IN",{month:"long",year:"numeric"}):"",H=c=>{switch(c){case"Cash":return"💵";case"Online (UPI)":return"📱";case"Online (Card)":return"💳";case"Online (Net Banking)":return"🏦";case"Cheque":return"📝";default:return"💰"}},ce=c=>{if(c.preventDefault(),!t.studentName||!t.phone||!t.course||!t.paymentDate||!t.paymentMode){alert("Please fill in all required fields");return}if(t.feeType==="monthly"){if(!t.periodFrom||!t.periodTo||!t.monthlyFeeAmount){alert("Please fill in period details and monthly fee amount for monthly fee type");return}if(!t.feesPaid||parseFloat(t.feesPaid)<=0){alert("Please calculate total fees by selecting period and monthly amount");return}}else if(!t.feesPaid){alert("Please enter the total fees amount");return}let u="",g="";if(t.feeType==="monthly"&&t.periodFrom&&t.periodTo){const m=F(t.periodFrom,t.periodTo),f=parseFloat(t.monthlyFeeAmount);u=`${U(t.periodFrom)} to ${U(t.periodTo)}`,g=` (${m} months × ₹${f.toLocaleString("en-IN")} = ₹${(m*f).toLocaleString("en-IN")})`}o({studentName:t.studentName,phone:t.phone,course:t.course,feeType:t.feeType,feesPaid:t.feesPaid,monthlyFeeAmount:t.monthlyFeeAmount,paymentDate:le(t.paymentDate),paymentMode:t.paymentMode,period:u,monthlyBreakdown:g,receiptNo:A()})},de=async()=>{if(!r){alert("Please generate a receipt first");return}b(!0);try{const c=N.current;if(!c)throw new Error("Receipt element not found");const u={quality:1,pixelRatio:2,backgroundColor:"#ffffff",cacheBust:!0,width:c.scrollWidth,height:c.scrollHeight,style:{margin:"0",padding:"0",transform:"none"}},g=await dt(c,u),m=document.createElement("a"),f=`Receipt_${r.receiptNo}_${r.studentName.replace(/\s/g,"_")}.jpg`;m.download=f,m.href=g,m.click(),alert(`Receipt saved successfully as ${f}`)}catch(c){console.error("Error saving receipt as JPG:",c),alert("Failed to save receipt as JPG. Please try again.")}finally{b(!1)}},ue=async()=>{if(!r){alert("Please generate a receipt first");return}b(!0);try{const c=N.current;if(!c)throw new Error("Receipt element not found");const u={pixelRatio:2,backgroundColor:"#ffffff",cacheBust:!0,width:c.scrollWidth,height:c.scrollHeight},g=await ct(c,u),m=document.createElement("a"),f=`Receipt_${r.receiptNo}_${r.studentName.replace(/\s/g,"_")}.png`;m.download=f,m.href=g,m.click(),alert(`Receipt saved successfully as ${f}`)}catch(c){console.error("Error saving receipt as PNG:",c),alert("Failed to save receipt. Please try again.")}finally{b(!1)}},me=()=>{if(!r){alert("Please generate a receipt first");return}const c=window.open("","_blank","width=800,height=600");if(!c){alert("Please allow pop-ups to print the receipt");return}const u=z(parseFloat(r.feesPaid)),g=parseFloat(r.feesPaid).toLocaleString("en-IN"),m=H(r.paymentMode);c.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Fee Receipt - Coder & AccoTax</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Times New Roman', Times, serif;
            background: white;
            margin: 0;
            padding: 0;
          }
          .receipt-container {
            max-width: 100%;
            width: 100%;
            margin: 0 auto;
            padding: 0;
            position: relative;
            overflow: visible;
          }
          .receipt {
            position: relative;
            background: white;
            border-radius: 0;
            box-shadow: none;
            margin: 0;
            padding: 0;
            overflow: visible;
          }
          .receipt-content {
            padding: 10px;
            position: relative;
            z-index: 1;
          }
          
          .header {
            text-align: center;
            border-bottom: 2px solid #1a3e6f;
            padding-bottom: 10px;
            margin-bottom: 12px;
          }
          .organisation-name {
            font-size: 20px;
            font-weight: bold;
            color: #1a3e6f;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
          .organisation-logo {
            height: 30px;
            width: auto;
            vertical-align: middle;
          }
          .organisation-tagline {
            font-size: 9px;
            color: #4a5568;
            margin-top: 3px;
          }
          .address {
            font-size: 8px;
            color: #4a5568;
            margin-top: 5px;
            line-height: 1.2;
          }
          .contact-row {
            display: flex;
            justify-content: center;
            gap: 10px;
            font-size: 8px;
            color: #4a5568;
            margin-top: 5px;
            flex-wrap: wrap;
          }
          .receipt-title {
            font-size: 14px;
            font-weight: bold;
            color: #2d3748;
            margin-top: 8px;
            background: #f0f4f8;
            display: inline-block;
            padding: 3px 12px;
            border-radius: 20px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin: 12px 0;
            padding: 10px;
            background: #f7fafc;
            border-radius: 6px;
          }
          .info-item {
            display: flex;
            flex-direction: column;
          }
          .info-label {
            font-size: 9px;
            font-weight: 600;
            color: #4a5568;
            text-transform: uppercase;
          }
          .info-value {
            font-size: 11px;
            font-weight: bold;
            color: #2d3748;
            margin-top: 3px;
            word-break: break-word;
          }
          .details-section {
            margin-bottom: 12px;
          }
          .section-title {
            font-size: 11px;
            font-weight: bold;
            color: #1a3e6f;
            border-left: 3px solid #1a3e6f;
            padding-left: 8px;
            margin-bottom: 8px;
          }
          .details-table {
            width: 100%;
            border-collapse: collapse;
          }
          .details-table tr {
            border-bottom: 1px solid #e2e8f0;
          }
          .details-table td {
            padding: 5px;
            font-size: 10px;
          }
          .details-table td:first-child {
            font-weight: 600;
            color: #4a5568;
            width: 35%;
          }
          .details-table td:last-child {
            color: #2d3748;
          }
          .fee-section {
            background: #f0f9ff;
            padding: 10px;
            margin: 12px 0;
            border-radius: 6px;
            border: 1px solid #cbd5e0;
          }
          .fee-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;
          }
          .fee-label {
            font-weight: bold;
            font-size: 11px;
            color: #4a5568;
          }
          .fee-amount {
            font-weight: bold;
            font-size: 14px;
            color: #2f855a;
          }
          .fee-breakdown {
            font-size: 8px;
            color: #718096;
            margin-top: 5px;
            font-style: italic;
          }
          .amount-words {
            font-size: 8px;
            color: #718096;
            margin-top: 6px;
            padding-top: 6px;
            border-top: 1px dashed #cbd5e0;
            font-style: italic;
          }
          .footer {
            text-align: center;
            border-top: 1px solid #e2e8f0;
            padding-top: 10px;
            margin-top: 12px;
          }
          .signature-area {
            display: flex;
            justify-content: space-between;
            margin: 12px 0 8px;
          }
          .signature-line {
            text-align: center;
            width: 45%;
          }
          .signature-line p:first-child {
            font-size: 8px;
            color: #718096;
            margin-bottom: 6px;
          }
          .signature-line p:last-child {
            font-size: 8px;
            font-weight: 600;
            color: #4a5568;
            border-top: 1px solid #cbd5e0;
            padding-top: 5px;
            display: inline-block;
            min-width: 80px;
          }
          .footer-note {
            font-size: 7px;
            color: #a0aec0;
            margin-top: 8px;
            line-height: 1.3;
          }
          .thankyou {
            font-size: 9px;
            font-weight: bold;
            color: #1a3e6f;
            margin-top: 6px;
          }
          
          /* Watermark styles */
          .watermark-container {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            z-index: 10;
            opacity: 0.1;
          }
          .watermark-image {
            width: 60%;
            height: auto;
            transform: rotate(-25deg);
          }

          /* PAID Stamp - Fixed positioning */
          .stamp-container {
            position: absolute;
            top: 80%;
            right: 45%;
            transform: translateY(-50%) rotate(-15deg);
            z-index: 20;
            pointer-events: none;
            opacity: 0.55;
          }

          .rounded-stamp {
            width: 110px;
            height: 110px;
            border-radius: 50%;
            position: relative;
            border: 3px solid #b30021;
            background: rgba(255, 255, 255, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }

          /* Outer ring effect */
          .rounded-stamp::before {
            content: "";
            position: absolute;
            inset: 6px;
            border-radius: 50%;
            border: 1px dashed #b30021;
            opacity: 0.7;
          }

          .stamp-text {
            text-align: center;
            transform: rotate(-2deg);
          }

          /* MAIN PAID TEXT */
          .stamp-paid {
            font-size: 22px;
            font-weight: 900;
            color: #b30021;
            letter-spacing: 2px;
          }

          /* Company text */
          .stamp-company {
            font-size: 7px;
            color: #b30021;
            font-weight: 700;
            margin-top: 4px;
            letter-spacing: 1px;
          }
          
          @media print {
            body {
              margin: 0;
              padding: 0;
            }
            .receipt-container {
              margin: 0;
              padding: 0;
            }
            .stamp-container {
              opacity: 0.7 !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .rounded-stamp {
              border: 3px solid #b30021 !important;
              background: white !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .stamp-paid {
              color: #b30021 !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .stamp-company {
              color: #b30021 !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            @page {
              margin: 0.5cm;
            }
          }
        </style>
      </head>
      <body>
        <div class="receipt-container">
          <div class="receipt">
            <!-- Watermark -->
            <div class="watermark-container">
              <img src="/assets/cnat.png" alt="Watermark" class="watermark-image" />
            </div>
            
            <!-- PAID Stamp - Now positioned at right side -->
            <div class="stamp-container">
              <div class="rounded-stamp">
                <div class="stamp-text">
                  <div class="stamp-paid">PAID</div>
                  <div class="stamp-company">Coder & AccoTax</div>
                </div>
              </div>
            </div>
            
            <div class="receipt-content">
              <div class="header">
                <div class="organisation-name">
                  <img src="/assets/cnat.png" alt="Coder & AccoTax Logo" class="organisation-logo" />
                  <span>CODER & ACCOTAX</span>
                </div>
                <div class="organisation-tagline">Quality Education | Professional Training | Tax Solutions</div>
                <div class="address">
                  25(10/A) Shibtala Road, PO-N C Pukur, Barrackpore, Kolkata-700122
                </div>
                <div class="contact-row">
                  <span>📞 +91 70037 56860</span>
                  <span>✉️ info@codernaccotax.co.in</span>
                </div>
                <div>
                  <span class="receipt-title">Fee Payment Receipt</span>
                </div>
              </div>
              
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Receipt No.</div>
                  <div class="info-value">${r.receiptNo}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Payment Date</div>
                  <div class="info-value">${r.paymentDate}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Payment Mode</div>
                  <div class="info-value">${m} ${r.paymentMode}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Student Name</div>
                  <div class="info-value">${r.studentName}</div>
                </div>
              </div>

              <div class="details-section">
                <div class="section-title">Course Details</div>
                <table class="details-table">
                  <tr>
                    <td>Phone Number</td>
                    <td>${r.phone}</td>
                  </tr>
                  <tr>
                    <td>Course Enrolled</td>
                    <td>${r.course}</td>
                  </tr>
                  ${r.period?`
                  <tr>
                    <td>Course Period</td>
                    <td>${r.period}</td>
                  </tr>
                  `:""}
                </table>
              </div>

              <div class="fee-section">
                <div class="fee-row">
                  <span class="fee-label">Course Fees</span>
                  <span class="fee-amount">₹ ${g}/-</span>
                </div>
                ${r.monthlyBreakdown?`
                <div class="fee-breakdown">
                  ${r.monthlyBreakdown}
                </div>
                `:""}
                <div class="fee-row">
                  <span class="fee-label">Payment Status</span>
                  <span style="color: #2f855a; font-weight: bold;">✓ PAID IN FULL</span>
                </div>
                <div class="amount-words">
                  Amount in words: Rupees ${u}
                </div>
              </div>

              <div class="footer">
                <div class="signature-area">
                  <div class="signature-line">
                    <p>Student's Signature</p>
                    <p>(Student)</p>
                  </div>
                  <div class="signature-line">
                    <p>Authorized Signatory</p>
                    <p>(Coder & AccoTax)</p>
                  </div>
                </div>
                <div class="footer-note">
                  This is a computer generated receipt - Valid without signature
                </div>
                <div class="thankyou">
                  ✨ Thank you for choosing Coder & AccoTax! ✨
                </div>
              </div>
            </div>
          </div>
        </div>
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              };
            }, 300);
          };
        <\/script>
      </body>
    </html>
  `),c.document.close()};k.useEffect(()=>{s?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[s]);const ge=r?z(parseFloat(r.feesPaid)):"",pe=r?H(r.paymentMode):"";return a.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-4",children:[a.jsx("div",{className:"flex justify-end mb-4 max-w-6xl mx-auto gap-2",children:a.jsx("button",{onClick:()=>i(!s),className:"flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-md hover:shadow-lg transition border border-gray-200 dark:border-gray-600 text-sm",children:s?a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"☀️"})," Light Mode"]}):a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"🌙"})," Dark Mode"]})})}),a.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden",children:[a.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3",children:[a.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[a.jsx("span",{children:"📝"})," Student Fee Payment Form"]}),a.jsx("p",{className:"text-blue-100 text-xs mt-1",children:"Enter payment details to generate receipt"})]}),a.jsxs("form",{onSubmit:ce,className:"p-5 space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Student Full Name *"}),a.jsx("input",{type:"text",name:"studentName",value:t.studentName,onChange:j,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter student name",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Phone Number *"}),a.jsx("input",{type:"tel",name:"phone",value:t.phone,onChange:j,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"10-digit mobile number",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Course Name *"}),a.jsxs("select",{name:"course",value:t.course,onChange:j,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer",required:!0,children:[a.jsx("option",{value:"",children:"Select a course"}),l.map(c=>a.jsx("option",{value:c.name,children:c.name},c.id))]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Fee Type *"}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsx("button",{type:"button",onClick:O,value:"non_monthly",className:`px-4 py-2 rounded-lg font-semibold transition ${t.feeType==="non_monthly"?"bg-blue-600 text-white":"bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"}`,children:"One-time / Fixed Fee"}),a.jsx("button",{type:"button",onClick:O,value:"monthly",className:`px-4 py-2 rounded-lg font-semibold transition ${t.feeType==="monthly"?"bg-blue-600 text-white":"bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"}`,children:"Monthly Fee"})]})]}),t.feeType==="monthly"?a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Monthly Fee Amount (₹) *"}),a.jsx("input",{type:"number",name:"monthlyFeeAmount",value:t.monthlyFeeAmount,onChange:j,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter monthly fee amount",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Course Period (Monthly) *"}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs text-gray-500 dark:text-gray-400 mb-1",children:"From"}),a.jsx("input",{type:"month",name:"periodFrom",value:t.periodFrom,onChange:j,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs text-gray-500 dark:text-gray-400 mb-1",children:"To"}),a.jsx("input",{type:"month",name:"periodTo",value:t.periodTo,onChange:j,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",required:!0})]})]}),t.periodFrom&&t.periodTo&&t.monthlyFeeAmount&&a.jsx("div",{className:"mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:a.jsxs("p",{className:"text-xs text-gray-600 dark:text-gray-300",children:["Total Months: ",a.jsx("strong",{children:F(t.periodFrom,t.periodTo)})," | Total Fees: ",a.jsxs("strong",{children:["₹ ",(F(t.periodFrom,t.periodTo)*(parseFloat(t.monthlyFeeAmount)||0)).toLocaleString("en-IN")]})]})})]})]}):a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Total Fees Amount (₹) *"}),a.jsx("input",{type:"number",name:"feesPaid",value:t.feesPaid,onChange:j,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter total fees amount",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Payment Date *"}),a.jsx("input",{type:"date",name:"paymentDate",value:t.paymentDate,onChange:j,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",required:!0})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Payment Mode *"}),a.jsxs("select",{name:"paymentMode",value:t.paymentMode,onChange:j,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer",required:!0,children:[a.jsx("option",{value:"Cash",children:"💵 Cash"}),a.jsx("option",{value:"Online (UPI)",children:"📱 Online (UPI)"}),a.jsx("option",{value:"Online (Card)",children:"💳 Online (Card)"}),a.jsx("option",{value:"Online (Net Banking)",children:"🏦 Online (Net Banking)"}),a.jsx("option",{value:"Cheque",children:"📝 Cheque"})]})]}),a.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-lg transition duration-200 shadow-md hover:shadow-lg",children:"Generate Receipt →"})]})]}),a.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col",children:[a.jsxs("div",{className:"bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 flex justify-between items-center flex-wrap gap-2",children:[a.jsxs("div",{children:[a.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[a.jsx("span",{children:"🧾"})," Receipt Preview"]}),a.jsx("p",{className:"text-green-100 text-xs mt-1",children:"Review before printing or saving"})]}),r&&a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:de,disabled:y,className:"flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed",children:y?"⏳ Saving...":"📸 Save as JPG"}),a.jsx("button",{onClick:ue,disabled:y,className:"flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed",children:"🖼️ Save as PNG"}),a.jsx("button",{onClick:me,className:"flex items-center gap-2 bg-white text-green-700 px-3 py-1.5 rounded-lg text-sm font-semibold shadow hover:shadow-lg transition",children:"🖨️ Print"})]})]}),a.jsx("div",{className:"p-5 flex-1 flex items-center justify-center overflow-auto",children:r?a.jsxs("div",{ref:N,className:"w-full max-w-sm mx-auto bg-white rounded-xl border-2 border-gray-200 shadow-lg overflow-hidden relative",style:{backgroundColor:"#ffffff",width:"380px"},children:[a.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none opacity-10",children:a.jsx("img",{src:B,alt:"Watermark",className:"w-48 h-auto transform rotate-[-25deg]",onError:c=>{c.target.style.display="none"}})}),a.jsx("div",{className:"absolute top-[60%] right-[40%] transform -translate-y-1/2 rotate-[-15deg] z-20 pointer-events-none",children:a.jsx("img",{src:xe,alt:"Paid Stamp",className:"w-28 opacity-60"})}),a.jsxs("div",{className:"p-4 space-y-3 relative z-10",children:[a.jsxs("div",{className:"text-center border-b pb-3",children:[a.jsxs("div",{className:"flex items-center justify-center gap-2 mb-1",children:[a.jsx("img",{src:B,alt:"Coder & AccoTax Logo",className:"h-8 w-auto",onError:c=>{c.target.style.display="none"}}),a.jsx("h3",{className:"text-lg font-bold text-blue-700",children:"Coder & AccoTax"})]}),a.jsx("p",{className:"text-[9px] text-gray-500 mt-1",children:"Fee Payment Receipt"})]}),a.jsxs("div",{className:"space-y-2 text-xs",children:[a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("span",{className:"font-semibold text-gray-600",children:"Receipt No:"}),a.jsx("span",{className:"text-gray-800 font-mono text-[10px]",children:r.receiptNo})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{className:"font-semibold text-gray-600",children:"Date:"}),a.jsx("span",{className:"text-gray-700",children:r.paymentDate})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{className:"font-semibold text-gray-600",children:"Mode:"}),a.jsxs("span",{className:"text-gray-700",children:[pe," ",r.paymentMode]})]}),a.jsxs("div",{className:"border-t pt-2 mt-2",children:[a.jsxs("div",{className:"flex justify-between mb-1",children:[a.jsx("span",{className:"font-semibold text-gray-600",children:"Student:"}),a.jsx("span",{className:"text-gray-800 font-medium text-right",children:r.studentName})]}),a.jsxs("div",{className:"flex justify-between mb-1",children:[a.jsx("span",{className:"font-semibold text-gray-600",children:"Phone:"}),a.jsx("span",{className:"text-gray-700",children:r.phone})]}),a.jsxs("div",{className:"flex justify-between mb-1",children:[a.jsx("span",{className:"font-semibold text-gray-600",children:"Course:"}),a.jsx("span",{className:"text-gray-700 text-right",children:r.course})]}),r.period&&a.jsxs("div",{className:"flex justify-between mb-1",children:[a.jsx("span",{className:"font-semibold text-gray-600",children:"Period:"}),a.jsx("span",{className:"text-gray-700 text-right text-[9px]",children:r.period})]})]}),a.jsxs("div",{className:"bg-green-50 p-3 rounded-lg mt-2",children:[a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("span",{className:"font-bold text-gray-700",children:"Amount Paid:"}),a.jsxs("span",{className:"font-bold text-green-600 text-base",children:["₹ ",parseFloat(r.feesPaid).toLocaleString("en-IN")]})]}),r.monthlyBreakdown&&a.jsx("div",{className:"text-[8px] text-gray-500 italic mt-1",children:r.monthlyBreakdown}),a.jsx("div",{className:"text-[8px] text-gray-500 italic mt-2 pt-1 border-t",children:ge})]})]}),a.jsxs("div",{className:"text-center pt-3 border-t",children:[a.jsx("p",{className:"text-[8px] text-gray-400",children:"✓ Valid without signature"}),a.jsx("p",{className:"text-[7px] text-gray-400 mt-1",children:"25(10/A) Shibtala Road, Barrackpore, Kol-122"}),a.jsx("p",{className:"text-[8px] text-blue-600 mt-2",children:"✨ Thank you! ✨"})]})]})]}):a.jsxs("div",{className:"flex flex-col items-center justify-center text-center p-6",children:[a.jsx("div",{className:"w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3",children:a.jsx("svg",{className:"w-10 h-10 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),a.jsx("p",{className:"text-gray-500 dark:text-gray-400 font-medium text-sm",children:"No receipt generated yet"}),a.jsx("p",{className:"text-xs text-gray-400 mt-1",children:'Fill the form and click "Generate Receipt"'})]})})]})]})]})};export{gt as default};
