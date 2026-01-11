import{r,j as e}from"./index-CP0D_LGO.js";import{J as i}from"./JavaCodeBlock-BzIKma5M.js";import"./prism-CByq7g21.js";import"./browser-C0cweKVX.js";import"./prism-java-CQA27I6F.js";const a=`
@keyframes fadeSlideUp {
  0% { opacity: 0; transform: translateY(16px); }
  100% { opacity: 1; transform: translateY(0); }
}
`;class x extends r.Component{constructor(s){super(s),this.state={mounted:!1}}componentDidMount(){this.setState({mounted:!0})}render(){const s=this.state.mounted?"motion-safe:animate-[fadeSlideUp_0.6s_ease-out_forwards]":"opacity-0",t="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md";return e.jsxs("div",{className:"space-y-28 leading-relaxed text-slate-700 dark:text-slate-300",children:[e.jsx("style",{children:a}),e.jsxs("header",{className:`${s} space-y-4`,children:[e.jsx("h2",{className:"text-2xl font-semibold text-indigo-600 dark:text-indigo-400",children:"Writing Binary Files in Java"}),e.jsxs("p",{className:"text-sm",children:["Writing a binary file means writing ",e.jsx("strong",{children:"raw byte data"}),"directly to storage without any character encoding or conversion."]}),e.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:"This approach is used for images, audio, video, PDFs, backups, and system files."})]}),e.jsx("section",{className:`${s} animation-delay-[100ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-500",children:"Process of Writing a Binary File (Step-by-Step)"}),e.jsxs("ol",{className:"list-decimal list-inside text-sm space-y-2 mt-3",children:[e.jsx("li",{children:"Decide that the file is binary (not human-readable)."}),e.jsxs("li",{children:["Create a ",e.jsx("code",{children:"FileOutputStream"})," to open the file."]}),e.jsxs("li",{children:["Wrap it with ",e.jsx("code",{children:"BufferedOutputStream"})," for performance."]}),e.jsxs("li",{children:["Write bytes using ",e.jsx("code",{children:"write()"}),"."]}),e.jsx("li",{children:"Flush the buffer to ensure data reaches disk."}),e.jsx("li",{children:"Close streams to release resources."})]}),e.jsxs("div",{className:"mt-4 p-3 rounded bg-slate-100 dark:bg-slate-800/60",children:[e.jsx("p",{className:"text-sm font-semibold text-indigo-400",children:"Logical Flow"}),e.jsx("p",{className:"text-sm",children:"Program → BufferedOutputStream → FileOutputStream → Disk"})]})]})}),e.jsx("section",{className:`${s} animation-delay-[200ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-500",children:"Methods & Constructors Explained"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-3 mt-3",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"FileOutputStream(String path)"}),e.jsx("br",{}),e.jsx("strong",{children:"Purpose:"})," Creates or overwrites a file for binary writing.",e.jsx("br",{}),e.jsx("strong",{children:"Why used:"})," Writes raw byte data directly to disk."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"BufferedOutputStream(OutputStream out)"}),e.jsx("br",{}),e.jsx("strong",{children:"Purpose:"})," Buffers data in memory before writing.",e.jsx("br",{}),e.jsx("strong",{children:"Why used:"})," Reduces disk I/O operations and improves speed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"void write(int b)"}),e.jsx("br",{}),e.jsx("strong",{children:"Parameter:"})," Single byte (0–255).",e.jsx("br",{}),e.jsx("strong",{children:"Purpose:"})," Writes one byte to the buffer."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"void flush()"}),e.jsx("br",{}),e.jsx("strong",{children:"Purpose:"})," Forces buffered data to be written to disk.",e.jsx("br",{}),e.jsx("strong",{children:"Critical:"})," Prevents data loss."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"void close()"}),e.jsx("br",{}),e.jsx("strong",{children:"Purpose:"})," Closes stream and releases system resources."]})]})]})}),e.jsx("section",{className:`${s} animation-delay-[300ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-500",children:"Examples of Writing Binary Files"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"font-semibold text-sm",children:"Example 1: Writing Single Bytes (Beginner)"}),e.jsx(i,{code:`FileOutputStream fos = new FileOutputStream("data.bin");
BufferedOutputStream bos = new BufferedOutputStream(fos);

bos.write(65);
bos.write(66);
bos.write(67);

bos.flush();
bos.close();
fos.close();`})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("p",{className:"font-semibold text-sm",children:"Example 2: Writing an Image Copy"}),e.jsx(i,{code:`BufferedInputStream bis =
    new BufferedInputStream(new FileInputStream("photo.jpg"));
BufferedOutputStream bos =
    new BufferedOutputStream(new FileOutputStream("photo_copy.jpg"));

int b;
while ((b = bis.read()) != -1) {
    bos.write(b);
}

bos.flush();
bis.close();
bos.close();`})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("p",{className:"font-semibold text-sm",children:"Example 3: Writing Backup File"}),e.jsx(i,{code:`BufferedOutputStream bos =
    new BufferedOutputStream(new FileOutputStream("backup.dat"));

for (int i = 0; i < 1000; i++) {
    bos.write(i);
}

bos.flush();
bos.close();`})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("p",{className:"font-semibold text-sm",children:"Example 4: Writing Binary Log Data"}),e.jsx(i,{code:`BufferedOutputStream bos =
    new BufferedOutputStream(new FileOutputStream("log.bin"));

long timestamp = System.currentTimeMillis();
bos.write((int) (timestamp & 0xFF));

bos.flush();
bos.close();`})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("p",{className:"font-semibold text-sm",children:"Example 5: Professional Pattern (Try-With-Resources)"}),e.jsx(i,{code:`try (BufferedOutputStream bos =
         new BufferedOutputStream(
             new FileOutputStream("final_output.bin"))) {

    for (int i = 1; i <= 500; i++) {
        bos.write(i);
    }
    bos.flush();
} catch (Exception e) {
    e.printStackTrace();
}`})]})]})}),e.jsx("section",{className:`${s} animation-delay-[400ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-red-500",children:"Common Beginner Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-2",children:[e.jsxs("li",{children:["Forgetting to call ",e.jsx("code",{children:"flush()"})]}),e.jsx("li",{children:"Using FileWriter for binary files"}),e.jsx("li",{children:"Not closing streams"}),e.jsx("li",{children:"Assuming write() writes immediately to disk"})]})]})}),e.jsx("section",{className:`${s} animation-delay-[500ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-500",children:"Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-2",children:[e.jsx("li",{children:"Always use buffered streams for binary writing"}),e.jsx("li",{children:"Flush output streams explicitly"}),e.jsx("li",{children:"Use try-with-resources in production"}),e.jsx("li",{children:"Validate file paths before writing"})]})]})}),e.jsx("section",{className:`${s} animation-delay-[600ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-500",children:"Hint for Students"}),e.jsxs("p",{className:"text-sm",children:["Try writing binary data without calling ",e.jsx("code",{children:"flush()"}),". Then compare file size and integrity. This experiment explains why buffering exists."]})]})}),e.jsx("section",{className:`${s} animation-delay-[700ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-500",children:"Quick Revision Checklist"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-1",children:[e.jsx("li",{children:"Binary writing uses byte streams"}),e.jsx("li",{children:"BufferedOutputStream improves performance"}),e.jsx("li",{children:"flush() ensures data safety"}),e.jsx("li",{children:"Always close streams"})]})]})}),e.jsxs("section",{className:`${s} animation-delay-[800ms] rounded-xl border 
          border-indigo-300/40 dark:border-indigo-700/40 
          bg-indigo-50/60 dark:bg-indigo-900/20 p-6 
          transition-all duration-300 hover:shadow-md`,children:[e.jsx("h3",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:"Teacher’s Note"}),e.jsx("p",{className:"text-sm mt-2",children:"Students often confuse writing text with writing bytes. Reinforce that binary writing has no concept of characters — only numbers and bytes."})]})]})}}export{x as default};
