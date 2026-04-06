import{r as S,j as n}from"./index-CAtQrb46.js";import{c as $e}from"./courses-C9iQVG4E.js";const z="/assets/cnat-BerK4Qhb.png",O="/assets/paid-stamp-B9Sa6ZVr.png";function Ae(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const a=document.implementation.createHTMLDocument(),r=a.createElement("base"),o=a.createElement("a");return a.head.appendChild(r),a.body.appendChild(o),e&&(r.href=e),o.href=t,o.href}const De=(()=>{let t=0;const e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function P(t){const e=[];for(let a=0,r=t.length;a<r;a++)e.push(t[a]);return e}let R=null;function se(t={}){return R||(t.includeStyleProperties?(R=t.includeStyleProperties,R):(R=P(window.getComputedStyle(document.documentElement)),R))}function I(t,e){const r=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return r?parseFloat(r.replace("px","")):0}function Ie(t){const e=I(t,"border-left-width"),a=I(t,"border-right-width");return t.clientWidth+e+a}function Le(t){const e=I(t,"border-top-width"),a=I(t,"border-bottom-width");return t.clientHeight+e+a}function oe(t,e={}){const a=e.width||Ie(t),r=e.height||Le(t);return{width:a,height:r}}function Me(){let t,e;try{e=process}catch{}const a=e&&e.env?e.env.devicePixelRatio:null;return a&&(t=parseInt(a,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const j=16384;function Ue(t){(t.width>j||t.height>j)&&(t.width>j&&t.height>j?t.width>t.height?(t.height*=j/t.width,t.width=j):(t.width*=j/t.height,t.height=j):t.width>j?(t.height*=j/t.width,t.width=j):(t.width*=j/t.height,t.height=j))}function L(t){return new Promise((e,a)=>{const r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>e(r))})},r.onerror=a,r.crossOrigin="anonymous",r.decoding="async",r.src=t})}async function qe(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function ze(t,e,a){const r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),s=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${e}`),o.setAttribute("height",`${a}`),o.setAttribute("viewBox",`0 0 ${e} ${a}`),s.setAttribute("width","100%"),s.setAttribute("height","100%"),s.setAttribute("x","0"),s.setAttribute("y","0"),s.setAttribute("externalResourcesRequired","true"),o.appendChild(s),s.appendChild(t),qe(o)}const b=(t,e)=>{if(t instanceof e)return!0;const a=Object.getPrototypeOf(t);return a===null?!1:a.constructor.name===e.name||b(a,e)};function Oe(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function We(t,e){return se(e).map(a=>{const r=t.getPropertyValue(a),o=t.getPropertyPriority(a);return`${a}: ${r}${o?" !important":""};`}).join(" ")}function _e(t,e,a,r){const o=`.${t}:${e}`,s=a.cssText?Oe(a):We(a,r);return document.createTextNode(`${o}{${s}}`)}function X(t,e,a,r){const o=window.getComputedStyle(t,a),s=o.getPropertyValue("content");if(s===""||s==="none")return;const i=De();try{e.className=`${e.className} ${i}`}catch{return}const c=document.createElement("style");c.appendChild(_e(i,a,o,r)),e.appendChild(c)}function Ve(t,e,a){X(t,e,":before",a),X(t,e,":after",a)}const Z="application/font-woff",ee="image/jpeg",Be={woff:Z,woff2:Z,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:ee,jpeg:ee,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function He(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function V(t){const e=He(t).toLowerCase();return Be[e]||""}function Ge(t){return t.split(/,/)[1]}function _(t){return t.search(/^(data:)/)!==-1}function Qe(t,e){return`data:${e};base64,${t}`}async function ie(t,e,a){const r=await fetch(t,e);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);const o=await r.blob();return new Promise((s,i)=>{const c=new FileReader;c.onerror=i,c.onloadend=()=>{try{s(a({res:r,result:c.result}))}catch(m){i(m)}},c.readAsDataURL(o)})}const W={};function Ye(t,e,a){let r=t.replace(/\?.*/,"");return a&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?`[${e}]${r}`:r}async function B(t,e,a){const r=Ye(t,e,a.includeQueryParams);if(W[r]!=null)return W[r];a.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let o;try{const s=await ie(t,a.fetchRequestInit,({res:i,result:c})=>(e||(e=i.headers.get("Content-Type")||""),Ge(c)));o=Qe(s,e)}catch(s){o=a.imagePlaceholder||"";let i=`Failed to fetch resource: ${t}`;s&&(i=typeof s=="string"?s:s.message),i&&console.warn(i)}return W[r]=o,o}async function Je(t){const e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):L(e)}async function Ke(t,e){if(t.currentSrc){const s=document.createElement("canvas"),i=s.getContext("2d");s.width=t.clientWidth,s.height=t.clientHeight,i?.drawImage(t,0,0,s.width,s.height);const c=s.toDataURL();return L(c)}const a=t.poster,r=V(a),o=await B(a,r,e);return L(o)}async function Xe(t,e){var a;try{if(!((a=t?.contentDocument)===null||a===void 0)&&a.body)return await M(t.contentDocument.body,e,!0)}catch{}return t.cloneNode(!1)}async function Ze(t,e){return b(t,HTMLCanvasElement)?Je(t):b(t,HTMLVideoElement)?Ke(t,e):b(t,HTMLIFrameElement)?Xe(t,e):t.cloneNode(le(t))}const et=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT",le=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SVG";async function tt(t,e,a){var r,o;if(le(e))return e;let s=[];return et(t)&&t.assignedNodes?s=P(t.assignedNodes()):b(t,HTMLIFrameElement)&&(!((r=t.contentDocument)===null||r===void 0)&&r.body)?s=P(t.contentDocument.body.childNodes):s=P(((o=t.shadowRoot)!==null&&o!==void 0?o:t).childNodes),s.length===0||b(t,HTMLVideoElement)||await s.reduce((i,c)=>i.then(()=>M(c,a)).then(m=>{m&&e.appendChild(m)}),Promise.resolve()),e}function rt(t,e,a){const r=e.style;if(!r)return;const o=window.getComputedStyle(t);o.cssText?(r.cssText=o.cssText,r.transformOrigin=o.transformOrigin):se(a).forEach(s=>{let i=o.getPropertyValue(s);s==="font-size"&&i.endsWith("px")&&(i=`${Math.floor(parseFloat(i.substring(0,i.length-2)))-.1}px`),b(t,HTMLIFrameElement)&&s==="display"&&i==="inline"&&(i="block"),s==="d"&&e.getAttribute("d")&&(i=`path(${e.getAttribute("d")})`),r.setProperty(s,i,o.getPropertyPriority(s))})}function nt(t,e){b(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),b(t,HTMLInputElement)&&e.setAttribute("value",t.value)}function at(t,e){if(b(t,HTMLSelectElement)){const r=Array.from(e.children).find(o=>t.value===o.getAttribute("value"));r&&r.setAttribute("selected","")}}function st(t,e,a){return b(e,Element)&&(rt(t,e,a),Ve(t,e,a),nt(t,e),at(t,e)),e}async function ot(t,e){const a=t.querySelectorAll?t.querySelectorAll("use"):[];if(a.length===0)return t;const r={};for(let s=0;s<a.length;s++){const c=a[s].getAttribute("xlink:href");if(c){const m=t.querySelector(c),w=document.querySelector(c);!m&&w&&!r[c]&&(r[c]=await M(w,e,!0))}}const o=Object.values(r);if(o.length){const s="http://www.w3.org/1999/xhtml",i=document.createElementNS(s,"svg");i.setAttribute("xmlns",s),i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.overflow="hidden",i.style.display="none";const c=document.createElementNS(s,"defs");i.appendChild(c);for(let m=0;m<o.length;m++)c.appendChild(o[m]);t.appendChild(i)}return t}async function M(t,e,a){return!a&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(r=>Ze(r,e)).then(r=>tt(t,r,e)).then(r=>st(t,r,e)).then(r=>ot(r,e))}const ce=/url\((['"]?)([^'"]+?)\1\)/g,it=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,lt=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function ct(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function dt(t){const e=[];return t.replace(ce,(a,r,o)=>(e.push(o),a)),e.filter(a=>!_(a))}async function ut(t,e,a,r,o){try{const s=a?Ae(e,a):e,i=V(e);let c;return o||(c=await B(s,i,r)),t.replace(ct(e),`$1${c}$3`)}catch{}return t}function mt(t,{preferredFontFormat:e}){return e?t.replace(lt,a=>{for(;;){const[r,,o]=it.exec(a)||[];if(!o)return"";if(o===e)return`src: ${r};`}}):t}function de(t){return t.search(ce)!==-1}async function ue(t,e,a){if(!de(t))return t;const r=mt(t,a);return dt(r).reduce((s,i)=>s.then(c=>ut(c,i,e,a)),Promise.resolve(r))}async function T(t,e,a){var r;const o=(r=e.style)===null||r===void 0?void 0:r.getPropertyValue(t);if(o){const s=await ue(o,null,a);return e.style.setProperty(t,s,e.style.getPropertyPriority(t)),!0}return!1}async function pt(t,e){await T("background",t,e)||await T("background-image",t,e),await T("mask",t,e)||await T("-webkit-mask",t,e)||await T("mask-image",t,e)||await T("-webkit-mask-image",t,e)}async function gt(t,e){const a=b(t,HTMLImageElement);if(!(a&&!_(t.src))&&!(b(t,SVGImageElement)&&!_(t.href.baseVal)))return;const r=a?t.src:t.href.baseVal,o=await B(r,V(r),e);await new Promise((s,i)=>{t.onload=s,t.onerror=e.onImageErrorHandler?(...m)=>{try{s(e.onImageErrorHandler(...m))}catch(w){i(w)}}:i;const c=t;c.decode&&(c.decode=s),c.loading==="lazy"&&(c.loading="eager"),a?(t.srcset="",t.src=o):t.href.baseVal=o})}async function ft(t,e){const r=P(t.childNodes).map(o=>me(o,e));await Promise.all(r).then(()=>t)}async function me(t,e){b(t,Element)&&(await pt(t,e),await gt(t,e),await ft(t,e))}function ht(t,e){const{style:a}=t;e.backgroundColor&&(a.backgroundColor=e.backgroundColor),e.width&&(a.width=`${e.width}px`),e.height&&(a.height=`${e.height}px`);const r=e.style;return r!=null&&Object.keys(r).forEach(o=>{a[o]=r[o]}),t}const te={};async function re(t){let e=te[t];if(e!=null)return e;const r=await(await fetch(t)).text();return e={url:t,cssText:r},te[t]=e,e}async function ne(t,e){let a=t.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,s=(a.match(/url\([^)]+\)/g)||[]).map(async i=>{let c=i.replace(r,"$1");return c.startsWith("https://")||(c=new URL(c,t.url).href),ie(c,e.fetchRequestInit,({result:m})=>(a=a.replace(i,`url(${m})`),[i,m]))});return Promise.all(s).then(()=>a)}function ae(t){if(t==null)return[];const e=[],a=/(\/\*[\s\S]*?\*\/)/gi;let r=t.replace(a,"");const o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const m=o.exec(r);if(m===null)break;e.push(m[0])}r=r.replace(o,"");const s=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",c=new RegExp(i,"gi");for(;;){let m=s.exec(r);if(m===null){if(m=c.exec(r),m===null)break;s.lastIndex=c.lastIndex}else c.lastIndex=s.lastIndex;e.push(m[0])}return e}async function xt(t,e){const a=[],r=[];return t.forEach(o=>{if("cssRules"in o)try{P(o.cssRules||[]).forEach((s,i)=>{if(s.type===CSSRule.IMPORT_RULE){let c=i+1;const m=s.href,w=re(m).then(v=>ne(v,e)).then(v=>ae(v).forEach(F=>{try{o.insertRule(F,F.startsWith("@import")?c+=1:o.cssRules.length)}catch(E){console.error("Error inserting rule from remote css",{rule:F,error:E})}})).catch(v=>{console.error("Error loading remote css",v.toString())});r.push(w)}})}catch(s){const i=t.find(c=>c.href==null)||document.styleSheets[0];o.href!=null&&r.push(re(o.href).then(c=>ne(c,e)).then(c=>ae(c).forEach(m=>{i.insertRule(m,i.cssRules.length)})).catch(c=>{console.error("Error loading remote stylesheet",c)})),console.error("Error inlining remote css file",s)}}),Promise.all(r).then(()=>(t.forEach(o=>{if("cssRules"in o)try{P(o.cssRules||[]).forEach(s=>{a.push(s)})}catch(s){console.error(`Error while reading CSS rules from ${o.href}`,s)}}),a))}function yt(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>de(e.style.getPropertyValue("src")))}async function bt(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");const a=P(t.ownerDocument.styleSheets),r=await xt(a,e);return yt(r)}function pe(t){return t.trim().replace(/["']/g,"")}function wt(t){const e=new Set;function a(r){(r.style.fontFamily||getComputedStyle(r).fontFamily).split(",").forEach(s=>{e.add(pe(s))}),Array.from(r.children).forEach(s=>{s instanceof HTMLElement&&a(s)})}return a(t),e}async function vt(t,e){const a=await bt(t,e),r=wt(t);return(await Promise.all(a.filter(s=>r.has(pe(s.style.fontFamily))).map(s=>{const i=s.parentStyleSheet?s.parentStyleSheet.href:null;return ue(s.cssText,i,e)}))).join(`
`)}async function jt(t,e){const a=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await vt(t,e);if(a){const r=document.createElement("style"),o=document.createTextNode(a);r.appendChild(o),t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r)}}async function St(t,e={}){const{width:a,height:r}=oe(t,e),o=await M(t,e,!0);return await jt(o,e),await me(o,e),ht(o,e),await ze(o,a,r)}async function ge(t,e={}){const{width:a,height:r}=oe(t,e),o=await St(t,e),s=await L(o),i=document.createElement("canvas"),c=i.getContext("2d"),m=e.pixelRatio||Me(),w=e.canvasWidth||a,v=e.canvasHeight||r;return i.width=w*m,i.height=v*m,e.skipAutoScale||Ue(i),i.style.width=`${w}`,i.style.height=`${v}`,e.backgroundColor&&(c.fillStyle=e.backgroundColor,c.fillRect(0,0,i.width,i.height)),c.drawImage(s,0,0,i.width,i.height),i}async function kt(t,e={}){return(await ge(t,e)).toDataURL()}async function Nt(t,e={}){return(await ge(t,e)).toDataURL("image/jpeg",e.quality||1)}const Ft=()=>{const t=()=>{const d=new Date,l=d.getFullYear(),u=String(d.getMonth()+1).padStart(2,"0"),g=String(d.getDate()).padStart(2,"0");return`${l}-${u}-${g}`},[e,a]=S.useState({studentName:"",phone:"",course:"",feeType:"non_monthly",monthlyFeeAmount:"",feesPaid:"",paymentDate:t(),paymentMode:"Cash",periodFrom:"",periodTo:""}),[r,o]=S.useState(null),[s,i]=S.useState(!1),[c,m]=S.useState([]),[w,v]=S.useState(!1),[F,E]=S.useState(!1),H=S.useRef(null),[fe,he]=S.useState(""),[xe,ye]=S.useState("");S.useEffect(()=>{m($e.courses),(async()=>{try{const u=await(await fetch(z)).blob(),g=new FileReader;g.onloadend=()=>{he(g.result)},g.readAsDataURL(u);const y=await(await fetch(O)).blob(),h=new FileReader;h.onloadend=()=>{ye(h.result)},h.readAsDataURL(y)}catch(l){console.error("Error loading images:",l)}})()},[]);const be=(d,l,u,g)=>{const f="CNAT",y=`${d.trim()}_${l}_${u}_${g}`,x=(K=>{let C=0;for(let q=0;q<K.length;q++){const Ee=K.charCodeAt(q);C=(C<<5)-C+Ee,C=C&C}return Math.abs(C).toString(36).toUpperCase()})(y),p=new Date,A=p.getFullYear(),N=String(p.getMonth()+1).padStart(2,"0"),D=String(p.getDate()).padStart(2,"0"),Re=`${A}${N}${D}`,Te=x.substring(0,8);return`${f}-${Re}-${Te}`},k=d=>{const{name:l,value:u}=d.target;a(g=>({...g,[l]:u}))},$=(d,l)=>{if(!d||!l)return 0;const u=new Date(d),g=new Date(l),f=(g.getFullYear()-u.getFullYear())*12+(g.getMonth()-u.getMonth())+1;return f>0?f:0},G=d=>{const l=d.target.value;a(u=>({...u,feeType:l,feesPaid:"",periodFrom:"",periodTo:"",monthlyFeeAmount:""}))},we=()=>{if(e.feeType==="monthly"){const d=$(e.periodFrom,e.periodTo),l=parseFloat(e.monthlyFeeAmount)||0,u=d*l;a(g=>({...g,feesPaid:u.toString()}))}};S.useEffect(()=>{e.feeType==="monthly"&&e.periodFrom&&e.periodTo&&e.monthlyFeeAmount&&we()},[e.periodFrom,e.periodTo,e.monthlyFeeAmount,e.feeType]);const Q=d=>{if(!d||isNaN(d))return"";if(d=Math.floor(d),d===0)return"Zero Only";const l=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],u=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],g=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],f=p=>p===0?"":p<10?l[p]:p<20?g[p-10]:u[Math.floor(p/10)]+(p%10?" "+l[p%10]:""),y=p=>{if(p===0)return"";if(p<100)return f(p);const A=Math.floor(p/100),N=p%100;return l[A]+" Hundred"+(N?" and "+f(N):"")};let h="",x=d;if(x>=1e7){const p=Math.floor(x/1e7);h+=f(p)+" Crore",x%=1e7,x>0&&(h+=" ")}if(x>=1e5){const p=Math.floor(x/1e5);h+=f(p)+" Lakh",x%=1e5,x>0&&(h+=" ")}if(x>=1e3){const p=Math.floor(x/1e3);h+=y(p)+" Thousand",x%=1e3,x>0&&(h+=" ")}return x>0&&(h+=y(x)),h+" Only"},ve=d=>d?new Date(d).toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}):"",Y=d=>d?new Date(d).toLocaleDateString("en-IN",{month:"long",year:"numeric"}):"",J=d=>{switch(d){case"Cash":return"💵";case"Online (UPI)":return"📱";case"Online (Card)":return"💳";case"Online (Net Banking)":return"🏦";case"Cheque":return"📝";default:return"💰"}},U=async(d="jpeg")=>{const l=H.current;if(!l)throw new Error("Receipt element not found");const u={overflow:l.style.overflow,width:l.style.width,position:l.style.position};l.style.overflow="visible",l.style.width="fit-content",l.style.position="relative";const g=l.scrollWidth,f=l.scrollHeight,y={quality:1,pixelRatio:3,backgroundColor:"#ffffff",cacheBust:!0,width:g,height:f,style:{margin:"0",padding:"0",transform:"none",overflow:"visible"},skipAutoScale:!1,preferDimensions:!0};let h;return d==="jpeg"?h=await Nt(l,y):h=await kt(l,y),l.style.overflow=u.overflow,l.style.width=u.width,l.style.position=u.position,h},je=async()=>{if(!r){alert("Please generate a receipt first");return}const d=e.phone;if(!d){alert("Student phone number is required to send via WhatsApp");return}let l=d.replace(/\D/g,"");l.length===10&&(l="91"+l),!l.startsWith("91")&&l.length===12&&(l=l.substring(0,2)==="91"?l:"91"+l),E(!0);try{const u=await U("jpeg"),f=await(await fetch(u)).blob(),y=new File([f],`Receipt_${r.receiptNo}.jpg`,{type:"image/jpeg"}),h=`📄 *Fee Payment Receipt - Coder & AccoTax* 📄

👤 *Student:* ${r.studentName}
📚 *Course:* ${r.course}
💰 *Amount Paid:* ₹${parseFloat(r.feesPaid).toLocaleString("en-IN")}/-
📅 *Date:* ${r.paymentDate}
🧾 *Receipt No:* ${r.receiptNo}

Thank you for choosing Coder & AccoTax! ✨
For any queries, contact: +91 70037 56860`,x=encodeURIComponent(h),p=`https://wa.me/${l}?text=${x}`;if(window.open(p,"_blank"),window.confirm(`WhatsApp will open now. Please follow these steps:

1. The message text will be pre-filled
2. Click on the attachment (📎) icon
3. Select "Gallery" or "Document"
4. Choose the receipt image you want to send

Would you like to download the receipt image now to easily attach it?`)){const N=document.createElement("a"),D=`Receipt_${r.receiptNo}_${r.studentName.replace(/\s/g,"_")}.jpg`;N.download=D,N.href=u,N.click(),setTimeout(()=>{alert(`✅ Receipt saved as "${D}".

Please attach this image in WhatsApp to complete sending.`)},500)}}catch(u){console.error("Error sending to WhatsApp:",u),alert("Failed to send receipt via WhatsApp. Please try again or use the Save/Print options.")}finally{E(!1)}},Se=async()=>{if(!r){alert("Please generate a receipt first");return}v(!0);try{const d=await U("jpeg"),l=document.createElement("a"),u=`Receipt_${r.receiptNo}_${r.studentName.replace(/\s/g,"_")}.jpg`;l.download=u,l.href=d,l.click(),alert(`Receipt saved successfully as ${u}`)}catch(d){console.error("Error saving receipt as JPG:",d),alert("Failed to save receipt as JPG. Please try again.")}finally{v(!1)}},ke=async()=>{if(!r){alert("Please generate a receipt first");return}v(!0);try{const d=await U("png"),l=document.createElement("a"),u=`Receipt_${r.receiptNo}_${r.studentName.replace(/\s/g,"_")}.png`;l.download=u,l.href=d,l.click(),alert(`Receipt saved successfully as ${u}`)}catch(d){console.error("Error saving receipt as PNG:",d),alert("Failed to save receipt as PNG. Please try again.")}finally{v(!1)}},Ne=d=>{if(d.preventDefault(),!e.studentName||!e.phone||!e.course||!e.paymentDate||!e.paymentMode){alert("Please fill in all required fields");return}if(e.feeType==="monthly"){if(!e.periodFrom||!e.periodTo||!e.monthlyFeeAmount){alert("Please fill in period details and monthly fee amount for monthly fee type");return}if(!e.feesPaid||parseFloat(e.feesPaid)<=0){alert("Please calculate total fees by selecting period and monthly amount");return}}else if(!e.feesPaid){alert("Please enter the total fees amount");return}let l="",u="";if(e.feeType==="monthly"&&e.periodFrom&&e.periodTo){const f=$(e.periodFrom,e.periodTo),y=parseFloat(e.monthlyFeeAmount);l=`${Y(e.periodFrom)} to ${Y(e.periodTo)}`,u=` (${f} months × ₹${y.toLocaleString("en-IN")} = ₹${(f*y).toLocaleString("en-IN")})`}const g=be(e.studentName,e.course,e.paymentDate,e.feesPaid);o({studentName:e.studentName,phone:e.phone,course:e.course,feeType:e.feeType,feesPaid:e.feesPaid,monthlyFeeAmount:e.monthlyFeeAmount,paymentDate:ve(e.paymentDate),paymentMode:e.paymentMode,period:l,monthlyBreakdown:u,receiptNo:g})},Pe=()=>{if(!r){alert("Please generate a receipt first");return}const d=window.open("","_blank","width=800,height=600");if(!d){alert("Please allow pop-ups to print the receipt");return}const l=Q(parseFloat(r.feesPaid)),u=parseFloat(r.feesPaid).toLocaleString("en-IN"),g=J(r.paymentMode),f=fe||"/assets/cnat.png",y=xe||O;d.document.write(`
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
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: auto;
          }
          .receipt-container {
            width: 100%;
            max-width: 100%;
            margin: 0;
            position: relative;
            overflow: visible;
          }
          .receipt {
            position: relative;
            background: white;
            border-radius: 0;
            box-shadow: none;
            margin: 0;
            padding: 10px 20px 20px 20px;
            overflow: visible;
            width: 100%;
          }
          .receipt-content {
            padding: 10px;
            position: relative;
            z-index: 1;
            width: 100%;
          }
          
          .header {
            text-align: center;
            border-bottom: 2px solid #1a3e6f;
            padding-bottom: 10px;
            margin-bottom: 12px;
          }
          .organisation-name {
            font-size: 24px;
            font-weight: bold;
            color: #1a3e6f;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
          .organisation-logo {
            height: 35px;
            width: auto;
            vertical-align: middle;
          }
          .organisation-tagline {
            font-size: 10px;
            color: #4a5568;
            margin-top: 3px;
          }
          .address {
            font-size: 9px;
            color: #4a5568;
            margin-top: 5px;
            line-height: 1.3;
          }
          .contact-row {
            display: flex;
            justify-content: center;
            gap: 15px;
            font-size: 9px;
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
            padding: 4px 15px;
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
            margin-bottom: 3px;
          }
          .info-value {
            font-size: 11px;
            font-weight: bold;
            color: #2d3748;
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
            padding: 6px;
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
          
          /* QR Code Section */
          .qr-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 12px 0;
            padding: 10px;
            background: #faf5ff;
            border-radius: 6px;
            border: 1px solid #d8b4fe;
          }
          .qr-info {
            flex: 1;
            padding-right: 10px;
          }
          .qr-title {
            font-size: 10px;
            font-weight: bold;
            color: #6b21a5;
            margin-bottom: 5px;
          }
          .qr-text {
            font-size: 8px;
            color: #4a5568;
            margin-bottom: 3px;
          }
          .upi-id {
            font-size: 9px;
            font-weight: bold;
            color: #1a3e6f;
            background: white;
            padding: 3px 6px;
            border-radius: 4px;
            display: inline-block;
            margin-top: 5px;
          }
          .qr-code {
            width: 70px;
            height: 70px;
            object-fit: contain;
          }
          
          .footer {
            text-align: center;
            border-top: 1px solid #e2e8f0;
            padding-top: 10px;
            margin-top: 10px;
          }
          .signature-area {
            display: flex;
            justify-content: space-between;
            margin: 10px 0 8px;
          }
          .signature-line {
            text-align: center;
            width: 45%;
          }
          .signature-line p:first-child {
            font-size: 8px;
            color: #718096;
            margin-bottom: 5px;
          }
          .signature-line p:last-child {
            font-size: 9px;
            font-weight: 600;
            color: #4a5568;
            border-top: 1px solid #cbd5e0;
            padding-top: 5px;
            display: inline-block;
            min-width: 100px;
          }
          .footer-note {
            font-size: 7px;
            color: #a0aec0;
            margin-top: 6px;
            line-height: 1.3;
          }
          .contact-info {
            margin-top: 8px;
            padding-top: 6px;
            border-top: 1px solid #e2e8f0;
          }
          .contact-info p {
            font-size: 8px;
            color: #4a5568;
            margin-top: 3px;
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
            opacity: 0.08;
          }
          .watermark-image {
            width: 50%;
            height: auto;
            transform: rotate(-25deg);
          }

          /* PAID Stamp - Fixed positioning */
          .stamp-container {
            position: absolute;
            top: 55%;
            right: 12%;
            transform: translateY(-50%) rotate(-15deg);
            z-index: 20;
            pointer-events: none;
          }

          .paid-stamp-image {
            width: 120px;
            height: auto;
            opacity: 0.6;
          }
          
          @media print {
            body {
              margin: 0;
              padding: 0;
            }
            .receipt-container {
              margin: 0;
              padding: 0;
              width: 100%;
            }
            .receipt {
              padding: 0;
              margin: 0;
              width: 100%;
            }
            .stamp-container {
              opacity: 0.7 !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .paid-stamp-image {
              opacity: 0.7 !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .qr-section {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            @page {
              size: A4;
              margin: 0cm;
            }
          }
        </style>
      </head>
      <body>
        <div class="receipt-container">
          <div class="receipt">
            <!-- Watermark -->
            <div class="watermark-container">
              <img src="${f}" alt="Watermark" class="watermark-image" />
            </div>
            
            <!-- PAID Stamp Image -->
            <div class="stamp-container">
              <img src="${y}" alt="Paid Stamp" class="paid-stamp-image" />
            </div>
            
            <div class="receipt-content">
              <div class="header">
                <div class="organisation-name">
                  <img src="${f}" alt="Coder & AccoTax Logo" class="organisation-logo" />
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
                  <div class="info-value">${g} ${r.paymentMode}</div>
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
                  <span class="fee-amount">₹ ${u}/-</span>
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
                  Amount in words: Rupees ${l}
                </div>
              </div>

              <!-- QR Code Section for Online Payment -->
              <div class="qr-section">
                <div class="qr-info">
                  <div class="qr-title">📱 Pay Online via UPI</div>
                  <div class="qr-text">Scan QR code to make payment</div>
                  <div class="qr-text">Any UPI App (Google Pay, PhonePe, Paytm)</div>
                  <div class="upi-id">UPI ID: 9432456083@upi</div>
                </div>
                <div class="qr-code">
                  <img src="https://quickchart.io/qr?text=upi://pay?pa=9432456083@upi&pn=Coder%20%26%20AccoTax&cu=INR&am=${parseFloat(r.feesPaid)}" alt="UPI QR Code" style="width: 70px; height: 70px;" />
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
                <div class="contact-info">
                  <p>📞 For any query: <strong>7003756860</strong></p>
                  <p>🌐 Visit us: <strong style="color: #1a3e6f;">www.codernaccotax.co.in</strong></p>
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
            }, 500);
          };
        <\/script>
      </body>
    </html>
  `),d.document.close()};S.useEffect(()=>{s?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[s]);const Ce=r?Q(parseFloat(r.feesPaid)):"",Fe=r?J(r.paymentMode):"";return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-4",children:[n.jsx("div",{className:"flex justify-end mb-4 max-w-6xl mx-auto gap-2",children:n.jsx("button",{onClick:()=>i(!s),className:"flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-md hover:shadow-lg transition border border-gray-200 dark:border-gray-600 text-sm",children:s?n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"☀️"})," Light Mode"]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"🌙"})," Dark Mode"]})})}),n.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden",children:[n.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3",children:[n.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[n.jsx("span",{children:"📝"})," Student Fee Payment Form"]}),n.jsx("p",{className:"text-blue-100 text-xs mt-1",children:"Enter payment details to generate receipt"})]}),n.jsxs("form",{onSubmit:Ne,className:"p-5 space-y-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Student Full Name *"}),n.jsx("input",{type:"text",name:"studentName",value:e.studentName,onChange:k,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter student name",required:!0})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Phone Number *"}),n.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:k,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"10-digit mobile number",required:!0})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Course Name *"}),n.jsxs("select",{name:"course",value:e.course,onChange:k,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer",required:!0,children:[n.jsx("option",{value:"",children:"Select a course"}),c.map(d=>n.jsx("option",{value:d.name,children:d.name},d.id))]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Fee Type *"}),n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsx("button",{type:"button",onClick:G,value:"non_monthly",className:`px-4 py-2 rounded-lg font-semibold transition ${e.feeType==="non_monthly"?"bg-blue-600 text-white":"bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"}`,children:"One-time / Fixed Fee"}),n.jsx("button",{type:"button",onClick:G,value:"monthly",className:`px-4 py-2 rounded-lg font-semibold transition ${e.feeType==="monthly"?"bg-blue-600 text-white":"bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"}`,children:"Monthly Fee"})]})]}),e.feeType==="monthly"?n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Monthly Fee Amount (₹) *"}),n.jsx("input",{type:"number",name:"monthlyFeeAmount",value:e.monthlyFeeAmount,onChange:k,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter monthly fee amount",required:!0})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Course Period (Monthly) *"}),n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs text-gray-500 dark:text-gray-400 mb-1",children:"From"}),n.jsx("input",{type:"month",name:"periodFrom",value:e.periodFrom,onChange:k,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",required:!0})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs text-gray-500 dark:text-gray-400 mb-1",children:"To"}),n.jsx("input",{type:"month",name:"periodTo",value:e.periodTo,onChange:k,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",required:!0})]})]}),e.periodFrom&&e.periodTo&&e.monthlyFeeAmount&&n.jsx("div",{className:"mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:n.jsxs("p",{className:"text-xs text-gray-600 dark:text-gray-300",children:["Total Months: ",n.jsx("strong",{children:$(e.periodFrom,e.periodTo)})," | Total Fees: ",n.jsxs("strong",{children:["₹ ",($(e.periodFrom,e.periodTo)*(parseFloat(e.monthlyFeeAmount)||0)).toLocaleString("en-IN")]})]})})]})]}):n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Total Fees Amount (₹) *"}),n.jsx("input",{type:"number",name:"feesPaid",value:e.feesPaid,onChange:k,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter total fees amount",required:!0})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Payment Date *"}),n.jsx("input",{type:"date",name:"paymentDate",value:e.paymentDate,onChange:k,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",required:!0})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Payment Mode *"}),n.jsxs("select",{name:"paymentMode",value:e.paymentMode,onChange:k,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer",required:!0,children:[n.jsx("option",{value:"Cash",children:"💵 Cash"}),n.jsx("option",{value:"Online (UPI)",children:"📱 Online (UPI)"}),n.jsx("option",{value:"Online (Card)",children:"💳 Online (Card)"}),n.jsx("option",{value:"Online (Net Banking)",children:"🏦 Online (Net Banking)"}),n.jsx("option",{value:"Cheque",children:"📝 Cheque"})]})]}),n.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-lg transition duration-200 shadow-md hover:shadow-lg",children:"Generate Receipt →"})]})]}),n.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col",children:[n.jsxs("div",{className:"bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 flex justify-between items-center flex-wrap gap-2",children:[n.jsxs("div",{children:[n.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[n.jsx("span",{children:"🧾"})," Receipt Preview"]}),n.jsx("p",{className:"text-green-100 text-xs mt-1",children:"Review before printing or saving"})]}),r&&n.jsxs("div",{className:"flex gap-2 flex-wrap",children:[n.jsx("button",{onClick:Se,disabled:w,className:"flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed",children:w?"⏳ Saving...":"📸 Save as JPG"}),n.jsx("button",{onClick:ke,disabled:w,className:"flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed",children:"🖼️ Save as PNG"}),n.jsx("button",{onClick:je,disabled:F,className:"flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed",children:F?"⏳ Sending...":"💬 Send to WhatsApp"}),n.jsx("button",{onClick:Pe,className:"flex items-center gap-2 bg-white text-green-700 px-3 py-1.5 rounded-lg text-sm font-semibold shadow hover:shadow-lg transition",children:"🖨️ Print"})]})]}),n.jsx("div",{className:"p-5 flex-1 flex items-center justify-center overflow-auto",children:r?n.jsxs("div",{ref:H,className:"w-full max-w-sm mx-auto bg-white rounded-xl border-2 border-gray-200 shadow-lg overflow-visible relative",style:{backgroundColor:"#ffffff",width:"380px"},children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none opacity-10",children:n.jsx("img",{src:z,alt:"Watermark",className:"w-48 h-auto transform rotate-[-25deg]",onError:d=>{d.target.style.display="none"}})}),n.jsx("div",{className:"absolute top-[60%] right-[40%] transform -translate-y-1/2 rotate-[-15deg] z-20 pointer-events-none",children:n.jsx("img",{src:O,alt:"Paid Stamp",className:"w-28 opacity-60"})}),n.jsxs("div",{className:"p-4 space-y-3 relative z-10",children:[n.jsxs("div",{className:"text-center border-b pb-3",children:[n.jsxs("div",{className:"flex items-center justify-center gap-2 mb-1",children:[n.jsx("img",{src:z,alt:"Coder & AccoTax Logo",className:"h-8 w-auto",onError:d=>{d.target.style.display="none"}}),n.jsx("h3",{className:"text-lg font-bold text-blue-700",children:"Coder & AccoTax"})]}),n.jsx("p",{className:"text-[9px] text-gray-500 mt-1",children:"Fee Payment Receipt"})]}),n.jsxs("div",{className:"space-y-2 text-xs",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"font-semibold text-gray-600",children:"Receipt No:"}),n.jsx("span",{className:"text-gray-800 font-mono text-[10px]",children:r.receiptNo})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"font-semibold text-gray-600",children:"Date:"}),n.jsx("span",{className:"text-gray-700",children:r.paymentDate})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"font-semibold text-gray-600",children:"Mode:"}),n.jsxs("span",{className:"text-gray-700",children:[Fe," ",r.paymentMode]})]}),n.jsxs("div",{className:"border-t pt-2 mt-2",children:[n.jsxs("div",{className:"flex justify-between mb-1",children:[n.jsx("span",{className:"font-semibold text-gray-600",children:"Student:"}),n.jsx("span",{className:"text-gray-800 font-medium text-right",children:r.studentName})]}),n.jsxs("div",{className:"flex justify-between mb-1",children:[n.jsx("span",{className:"font-semibold text-gray-600",children:"Phone:"}),n.jsx("span",{className:"text-gray-700",children:r.phone})]}),n.jsxs("div",{className:"flex justify-between mb-1",children:[n.jsx("span",{className:"font-semibold text-gray-600",children:"Course:"}),n.jsx("span",{className:"text-gray-700 text-right",children:r.course})]}),r.period&&n.jsxs("div",{className:"flex justify-between mb-1",children:[n.jsx("span",{className:"font-semibold text-gray-600",children:"Period:"}),n.jsx("span",{className:"text-gray-700 text-right text-[9px]",children:r.period})]})]}),n.jsxs("div",{className:"bg-green-50 p-3 rounded-lg mt-2",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"font-bold text-gray-700",children:"Amount Paid:"}),n.jsxs("span",{className:"font-bold text-green-600 text-base",children:["₹ ",parseFloat(r.feesPaid).toLocaleString("en-IN")]})]}),r.monthlyBreakdown&&n.jsx("div",{className:"text-[8px] text-gray-500 italic mt-1",children:r.monthlyBreakdown}),n.jsx("div",{className:"text-[8px] text-gray-500 italic mt-2 pt-1 border-t",children:Ce})]})]}),n.jsxs("div",{className:"text-center pt-3 border-t",children:[n.jsx("p",{className:"text-[8px] text-gray-400",children:"✓ Valid without signature"}),n.jsx("p",{className:"text-[7px] text-gray-400 mt-1",children:"25(10/A) Shibtala Road, Barrackpore, Kol-122"}),n.jsx("div",{className:"mt-2 pt-2 flex justify-center",children:n.jsx("img",{src:"https://quickchart.io/qr?text=upi://pay?pa=9432456083@upi&pn=Coder%20%26%20AccoTax&cu=INR",alt:"UPI QR Code",className:"w-16 h-16 mx-auto"})}),n.jsx("div",{className:"text-[6px] text-gray-400 mt-1",children:"UPI ID: 9432456083@upi"}),n.jsxs("div",{className:"mt-2 pt-1 border-t border-gray-100",children:[n.jsxs("p",{className:"text-[7px] text-gray-500",children:["📞 For any query: ",n.jsx("span",{className:"font-semibold text-gray-700",children:"7003756860"})]}),n.jsxs("p",{className:"text-[7px] text-gray-500 mt-0.5",children:["🌐 Visit us: ",n.jsx("span",{className:"font-semibold text-blue-600",children:"www.codernaccotax.co.in"})]})]}),n.jsx("p",{className:"text-[8px] text-blue-600 mt-2",children:"✨ Thank you! ✨"})]})]})]}):n.jsxs("div",{className:"flex flex-col items-center justify-center text-center p-6",children:[n.jsx("div",{className:"w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3",children:n.jsx("svg",{className:"w-10 h-10 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),n.jsx("p",{className:"text-gray-500 dark:text-gray-400 font-medium text-sm",children:"No receipt generated yet"}),n.jsx("p",{className:"text-xs text-gray-400 mt-1",children:'Fill the form and click "Generate Receipt"'})]})})]})]})]})};export{Ft as default};
