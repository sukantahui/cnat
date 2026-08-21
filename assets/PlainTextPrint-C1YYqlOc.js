import{r as h,j as d}from"./index-DCfh6IuU.js";import{c as w}from"./clsx-B-dksMZM.js";const r={name:"Coder & AccoTax",phone:"700356860",website:"https://codernaccotax.co.in",email:"codernaccotax@gmail.com",address:"25(10/A) Shibtala Road, PO: NC Pukur, Barrackpore",teacher:"Sukanta Hui"},M=({filePath:b,content:x,buttonText:A="Print Note",title:m="Printable Note",className:C,stampEnabled:y=!0,stampColor:k="#4f46e5",stampText:$=r.name,showDownload:H=!0,downloadButtonText:N="Download TXT",downloadFileName:T})=>{const[c,j]=h.useState(x||""),[g,P]=h.useState(!1),[f,v]=h.useState(null);h.useEffect(()=>{if(x){j(x),v(null);return}if(!b){v("No file path or content provided.");return}(async()=>{P(!0),v(null);try{const n=await fetch(b);if(!n.ok)throw new Error(`HTTP ${n.status}: ${n.statusText}`);const t=await n.text();j(t)}catch(n){v(n.message||"Failed to load the file."),console.error("PlainTextPrint fetch error:",n)}finally{P(!1)}})()},[b,x]);const i=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),z=s=>{const n=i(s).split(`
`);let t="";for(let a=0;a<n.length;a++){const p=n[a],o=p.trim();if(!o){t+=`
        <div class="paragraph-space"></div>
      `;continue}if(/^={5,}$/.test(o)){t+=`
        <hr class="note-divider note-divider-strong" />
      `;continue}if(/^-{5,}$/.test(o)){t+=`
        <hr class="note-divider note-divider-light" />
      `;continue}if(/^_{5,}$/.test(o)){t+=`
        <hr class="note-divider note-divider-thin" />
      `;continue}if(/^[-*]\s+/.test(o)){const e=o.replace(/^[-*]\s+/,"");t+=`
        <div class="note-bullet">
          <span class="bullet-marker">•</span>
          <span>${e}</span>
        </div>
      `;continue}if(/^\d+\.\s+/.test(o)){const e=o.match(/^(\d+)\.\s+(.*)$/);t+=`
        <div class="note-numbered">
          <span class="number-marker">${e[1]}.</span>
          <span>${e[2]}</span>
        </div>
      `;continue}if(o===o.toUpperCase()&&o.length<100&&!/^\d/.test(o)){t+=`
        <h2 class="note-heading">
          ${o}
        </h2>
      `;continue}t+=`
      <div class="note-line">
        ${p}
      </div>
    `}const l=t.split('<hr class="note-divider note-divider-light" />');return l.length>1&&(t=l.map((a,p)=>{if(p===l.length-1||a.match(/(<h2 class="note-heading">)(.*?)(<\/h2>)(?![\s\S]*<h2)/))return a;const e=a.match(/(<div class="note-line">)(.*?)(<\/div>)(?![\s\S]*<div class="note-line">)/);if(e){const S=`${e[1]}<strong>${e[2]}</strong>${e[3]}`;return a.replace(e[0],S)}return a}).join('<hr class="note-divider note-divider-light" />')),t},L=h.useCallback(()=>{if(!c&&!g){alert("No content to print. Please ensure the file has loaded.");return}const s=window.open("","_blank","width=900,height=700");if(!s){alert("Please allow pop-ups to print the note.");return}const t=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}),l=z(c);let a="";if(y){const o=i($),e=i(k);a=`
        <div class="stamp-wrapper">
          <div class="stamp">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="88" fill="none" stroke="${e}" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.4" />
              <circle cx="100" cy="100" r="80" fill="none" stroke="${e}" stroke-width="2" opacity="0.5" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="${e}" stroke-width="0.8" opacity="0.25" />
              <circle cx="100" cy="30" r="3" fill="${e}" opacity="0.4" />
              <circle cx="100" cy="170" r="3" fill="${e}" opacity="0.4" />
              <circle cx="30" cy="100" r="3" fill="${e}" opacity="0.4" />
              <circle cx="170" cy="100" r="3" fill="${e}" opacity="0.4" />
              <path d="M 80,105 L 92,117 L 120,83" stroke="${e}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.7" />
              <path id="stamp-path" d="M 40,100 A 60,60 0 1,1 160,100" fill="none" />
              <text font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" fill="${e}" letter-spacing="2" opacity="0.8">
                <textPath href="#stamp-path" startOffset="50%" text-anchor="middle">${o}</textPath>
              </text>
              <text x="100" y="155" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="8" fill="${e}" letter-spacing="3" opacity="0.5">CERTIFIED</text>
            </svg>
          </div>
        </div>
      `}const p=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${i(m)}</title>
  <style>
    @page {
      size: A4;
      margin: 18mm 16mm 25mm 16mm;
      @bottom-right {
        content: "Page " counter(page);
        font-size: 9px;
        color: #6b7280;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
      }
    }
    * { box-sizing: border-box; }
    body { margin: 0; padding: 0; background: white; color: #1f2937; font-family: Georgia, "Times New Roman", serif; font-size: 14px; line-height: 1.75; }
    .page { max-width: 820px; margin: 0 auto; }
    .organisation-header { text-align: center; padding-bottom: 14px; margin-bottom: 24px; border-bottom: 2px solid #312e81; }
    .organisation-name { font-family: Arial, Helvetica, sans-serif; font-size: 27px; font-weight: 800; color: #312e81; letter-spacing: 0.4px; margin-bottom: 5px; }
    .organisation-tagline { font-family: Arial, Helvetica, sans-serif; font-size: 11px; color: #6b7280; margin-bottom: 8px; }
    .organisation-contact { font-family: Arial, Helvetica, sans-serif; font-size: 10.5px; color: #374151; line-height: 1.6; }
    .organisation-contact a { color: #312e81; text-decoration: none; }
    .course-info { margin-bottom: 24px; padding: 12px 16px; background: #f8fafc; border: 1px solid #e5e7eb; border-left: 4px solid #4f46e5; border-radius: 5px; font-family: Arial, Helvetica, sans-serif; }
    .course-title { font-size: 18px; font-weight: 700; color: #111827; margin-bottom: 5px; }
    .teacher { font-size: 11px; color: #4b5563; }
    .note-content { margin-top: 10px; }
    .note-line { margin: 3px 0; }
    .paragraph-space { height: 8px; }
    .note-heading { font-family: Arial, Helvetica, sans-serif; font-size: 18px; color: #312e81; margin-top: 24px; margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px solid #d1d5db; page-break-after: avoid; }
    .note-divider { width: 100%; height: 0; border: 0; }
    .note-divider-strong { border-top: 2px solid #374151; margin: 20px 0; }
    .note-divider-light { border-top: 1px solid #9ca3af; margin: 10px 0 16px; }
    .note-divider-thin { border-top: 1px solid #d1d5db; margin: 12px 0; }
    .stamp-wrapper { display: flex; justify-content: flex-end; margin-top: 20px; margin-bottom: 12px; page-break-after: avoid; }
    .stamp { width: 110px; height: 110px; opacity: 0.8; transform: rotate(-6deg); }
    .stamp svg { width: 100%; height: 100%; display: block; }
    .document-footer { margin-top: 20px; padding-top: 12px; border-top: 1px solid #d1d5db; text-align: center; font-family: Arial, Helvetica, sans-serif; font-size: 9px; color: #6b7280; line-height: 1.6; }
    .footer-brand { font-weight: 700; color: #312e81; }
    @media print {
      body { background: white; }
      .page { max-width: none; }
      a { color: inherit; text-decoration: none; }
      .note-heading { page-break-after: avoid; }
      .note-line { orphans: 3; widows: 3; }
    }
  </style>
</head>
<body>
  <div class="page">
    <header class="organisation-header">
      <div class="organisation-name">${i(r.name)}</div>
      <div class="organisation-tagline">Computer Training • Programming • Accounts & Taxation</div>
      <div class="organisation-contact">
        📞 ${i(r.phone)} &nbsp;|&nbsp;
        🌐 <a href="${r.website}">${i(r.website)}</a> &nbsp;|&nbsp;
        ✉ <a href="mailto:${r.email}">${i(r.email)}</a>
        <br />${i(r.address)}
      </div>
    </header>
    <section class="course-info">
      <div class="course-title">${i(m)}</div>
      <div class="teacher">Teacher: ${i(r.teacher)}</div>
    </section>
    <main class="note-content">${l}</main>
    ${a}
    <footer class="document-footer">
      <div><span class="footer-brand">${i(r.name)}</span> — Educational Course Material</div>
      <div>${i(r.website)} &nbsp;|&nbsp; ${i(r.phone)}</div>
      <div>Printed on ${i(t)}</div>
    </footer>
  </div>
  <script>
    window.onload = function () {
      setTimeout(function () {
        window.print();
      }, 300);
    };
  <\/script>
</body>
</html>
`;s.document.open(),s.document.write(p),s.document.close()},[c,g,m,y,k,$]),E=h.useCallback(()=>{if(!c){alert("No content to download.");return}const s=T||`${m}.txt`,n=new Blob([c],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(n),l=document.createElement("a");l.href=t,l.download=s,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(t)},[c,T,m]),u=g||!!f||!c;return d.jsxs("div",{className:w("flex flex-wrap items-center justify-end gap-3",C),children:[d.jsxs("button",{onClick:L,disabled:u,className:w("inline-flex items-center gap-2 px-5 py-2.5 rounded-xl","bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/40 dark:hover:bg-indigo-800/50","text-indigo-700 dark:text-indigo-300","border border-indigo-200/60 dark:border-indigo-700/40","text-sm font-medium","transition-all duration-300","hover:shadow-md hover:shadow-indigo-500/20 dark:hover:shadow-indigo-400/20","hover:scale-[1.02] active:scale-[0.98]",{"opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none":u}),children:[d.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})}),g?"Loading…":f?"Error":A]}),H&&d.jsxs("button",{onClick:E,disabled:u,className:w("inline-flex items-center gap-2 px-5 py-2.5 rounded-xl","bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900/40 dark:hover:bg-emerald-800/50","text-emerald-700 dark:text-emerald-300","border border-emerald-200/60 dark:border-emerald-700/40","text-sm font-medium","transition-all duration-300","hover:shadow-md hover:shadow-emerald-500/20 dark:hover:shadow-emerald-400/20","hover:scale-[1.02] active:scale-[0.98]",{"opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none":u}),children:[d.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),g?"Loading…":f?"Error":N]}),f&&d.jsx("span",{className:"text-xs text-red-500 ml-2 w-full text-right",children:f})]})};export{M as P};
