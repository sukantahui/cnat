import{r as i,j as e}from"./index-Be2ZQ4sg.js";import{J as a}from"./JavaCodeBlock-BFNna1gF.js";import"./prism-D1xoIJ84.js";import"./browser-Lj54ij0H.js";import"./prism-java-CQA27I6F.js";const r=`
@keyframes fadeSlideUp {
  0% { opacity: 0; transform: translateY(16px); }
  100% { opacity: 1; transform: translateY(0); }
}
`;class x extends i.Component{constructor(s){super(s),this.state={mounted:!1}}componentDidMount(){this.setState({mounted:!0})}render(){const s=this.state.mounted?"motion-safe:animate-[fadeSlideUp_0.6s_ease-out_forwards]":"opacity-0",t="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md";return e.jsxs("div",{className:"space-y-28 leading-relaxed text-slate-700 dark:text-slate-300",children:[e.jsx("style",{children:r}),e.jsxs("header",{className:`${s} space-y-4`,children:[e.jsx("h2",{className:"text-2xl font-semibold text-indigo-600 dark:text-indigo-400",children:"BufferedInputStream and BufferedOutputStream"}),e.jsxs("p",{className:"text-sm",children:["Reading or writing a binary file one byte at a time is",e.jsx("strong",{children:" functionally correct"})," but",e.jsx("strong",{children:" performance-inefficient"}),"."]}),e.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:"Java solves this problem using buffered byte streams."})]}),e.jsx("section",{className:`${s} animation-delay-[100ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-500",children:"Why Buffering is Needed"}),e.jsxs("p",{className:"text-sm mt-2",children:["Every read or write operation on a file involves",e.jsx("strong",{children:" costly I/O interaction"})," with the disk."]}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-3 space-y-1",children:[e.jsx("li",{children:"Reading byte-by-byte causes frequent disk access"}),e.jsx("li",{children:"Disk I/O is much slower than memory"}),e.jsx("li",{children:"Performance drops significantly for large files"})]}),e.jsxs("p",{className:"text-sm mt-3",children:[e.jsx("strong",{children:"Buffering"})," reduces disk access by reading or writing data in chunks."]})]})}),e.jsx("section",{className:`${s} animation-delay-[200ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-500",children:"BufferedInputStream"}),e.jsxs("p",{className:"text-sm mt-2",children:[e.jsx("strong",{children:"BufferedInputStream"})," reads a block of bytes into an internal memory buffer and serves subsequent reads from memory instead of disk."]}),e.jsxs("p",{className:"text-sm mt-3",children:[e.jsx("strong",{children:"Constructor (Prototype):"}),e.jsx("br",{}),e.jsx("code",{children:"BufferedInputStream(InputStream in)"})]}),e.jsxs("p",{className:"text-sm mt-2",children:[e.jsx("strong",{children:"Return Type:"})," int (byte value or -1)"]}),e.jsx(a,{code:`FileInputStream fis = new FileInputStream("video.mp4");
BufferedInputStream bis = new BufferedInputStream(fis);

int data;
while ((data = bis.read()) != -1) {
    // process byte efficiently
}

bis.close();
fis.close();`})]})}),e.jsx("section",{className:`${s} animation-delay-[300ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-500",children:"BufferedOutputStream"}),e.jsxs("p",{className:"text-sm mt-2",children:[e.jsx("strong",{children:"BufferedOutputStream"})," stores written bytes in a memory buffer and writes them to disk in bulk."]}),e.jsxs("p",{className:"text-sm mt-3",children:[e.jsx("strong",{children:"Constructor (Prototype):"}),e.jsx("br",{}),e.jsx("code",{children:"BufferedOutputStream(OutputStream out)"})]}),e.jsx(a,{code:`FileOutputStream fos = new FileOutputStream("backup.mp4");
BufferedOutputStream bos = new BufferedOutputStream(fos);

bos.write(data);

// Important
bos.flush();
bos.close();
fos.close();`})]})}),e.jsx("section",{className:`${s} animation-delay-[400ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-500",children:"Example: Efficient Binary File Copy"}),e.jsx("p",{className:"text-sm",children:"This is how professional systems copy large binary files."}),e.jsx(a,{code:`FileInputStream fis = new FileInputStream("source.mp3");
BufferedInputStream bis = new BufferedInputStream(fis);

FileOutputStream fos = new FileOutputStream("destination.mp3");
BufferedOutputStream bos = new BufferedOutputStream(fos);

int data;
while ((data = bis.read()) != -1) {
    bos.write(data);
}

bos.flush();
bis.close();
bos.close();
fis.close();
fos.close();`})]})}),e.jsx("section",{className:`${s} animation-delay-[500ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-500",children:"Real-World Use Cases"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-2",children:[e.jsx("li",{children:"Video and audio streaming systems"}),e.jsx("li",{children:"File upload/download modules"}),e.jsx("li",{children:"Backup and restore utilities"}),e.jsx("li",{children:"Large PDF and image processing"})]})]})}),e.jsx("section",{className:`${s} animation-delay-[600ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-red-500",children:"Common Beginner Mistakes"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-2",children:[e.jsxs("li",{children:["Forgetting to call ",e.jsx("code",{children:"flush()"})]}),e.jsx("li",{children:"Closing underlying stream before buffer"}),e.jsx("li",{children:"Using buffering for very small files unnecessarily"}),e.jsx("li",{children:"Assuming buffering changes file content (it does not)"})]})]})}),e.jsx("section",{className:`${s} animation-delay-[700ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-emerald-500",children:"Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-2",children:[e.jsx("li",{children:"Always use buffering for large binary files"}),e.jsxs("li",{children:["Call ",e.jsx("code",{children:"flush()"})," before closing output streams"]}),e.jsx("li",{children:"Wrap streams logically (File → Buffered)"}),e.jsx("li",{children:"Prefer try-with-resources in production code"})]})]})}),e.jsx("section",{className:`${s} animation-delay-[750ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-500",children:"Function & Method Descriptions (Important)"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"FileInputStream(String filePath)"}),e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Purpose:"})," ","Opens a binary file for reading raw byte data.",e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Used when:"})," ","Reading images, audio, video, PDFs, or any non-text file."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"BufferedInputStream(InputStream in)"}),e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Purpose:"})," ","Wraps an input stream to improve performance using buffering.",e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Why needed:"})," ","Reduces disk access by reading chunks into memory."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"int read()"}),e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Return type:"})," ","int",e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Returns:"})," ","Byte value (0–255) or ",e.jsx("code",{children:"-1"})," when end of file is reached.",e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Common mistake:"})," ","Forgetting to check ",e.jsx("code",{children:"-1"}),", causing infinite loops."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"FileOutputStream(String filePath)"}),e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Purpose:"})," ","Creates or overwrites a file to write binary data.",e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Used when:"})," ","Saving copied files, backups, downloads."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"BufferedOutputStream(OutputStream out)"}),e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Purpose:"})," ","Buffers output data before writing to disk.",e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Advantage:"})," ","Improves speed and reduces disk I/O."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"void write(int b)"}),e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Purpose:"})," ","Writes a single byte to the output buffer.",e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Note:"})," ","Data may remain in buffer until flushed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"void flush()"}),e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Purpose:"})," ","Forces buffered data to be written to the file immediately.",e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Critical:"})," ","Prevents data loss in buffered output streams."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"void close()"}),e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Purpose:"})," ","Releases system resources and closes the stream.",e.jsx("br",{}),e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Best practice:"})," ","Close buffered stream first, then underlying stream."]})]})]})}),e.jsx("section",{className:`${s} animation-delay-[150ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-500",children:"Note: Process of Reading a Binary File (Step-by-Step)"}),e.jsxs("p",{className:"text-sm mt-2",children:["Reading a binary file means reading ",e.jsx("strong",{children:"raw byte data"}),"directly from storage without any character encoding or conversion."]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"font-semibold text-sm text-indigo-400",children:"Step 1: Identify the File Type"}),e.jsxs("p",{className:"text-sm",children:["First, decide whether the file is human-readable. If the file is an image, audio, video, or PDF, it is a",e.jsx("strong",{children:" binary file"})," and must be handled using byte streams."]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"font-semibold text-sm text-indigo-400",children:"Step 2: Create FileInputStream"}),e.jsxs("p",{className:"text-sm",children:["A ",e.jsx("code",{children:"FileInputStream"})," is created to establish a connection between the Java program and the binary file on disk."]}),e.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:"Purpose: Opens the file for byte-level reading."})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"font-semibold text-sm text-indigo-400",children:"Step 3: Wrap with BufferedInputStream"}),e.jsxs("p",{className:"text-sm",children:["The ",e.jsx("code",{children:"BufferedInputStream"})," wraps the file stream to improve performance by reading data in chunks instead of byte-by-byte from disk."]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"font-semibold text-sm text-indigo-400",children:"Step 4: Read Bytes Using read()"}),e.jsxs("p",{className:"text-sm",children:["The ",e.jsx("code",{children:"read()"})," method is used inside a loop to read one byte at a time."]}),e.jsxs("ul",{className:"list-disc list-inside text-sm mt-2 space-y-1",children:[e.jsxs("li",{children:["Returns ",e.jsx("code",{children:"0–255"})," → valid byte"]}),e.jsxs("li",{children:["Returns ",e.jsx("code",{children:"-1"})," → end of file (EOF)"]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"font-semibold text-sm text-indigo-400",children:"Step 5: Process the Byte"}),e.jsx("p",{className:"text-sm",children:"Each byte can be processed as required — copied to another file, stored, or transmitted. Binary data should not be printed as characters."})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"font-semibold text-sm text-indigo-400",children:"Step 6: Close the Streams"}),e.jsx("p",{className:"text-sm",children:"After reading is complete, the buffered stream is closed first, followed by the file stream, to release system resources."})]}),e.jsxs("div",{className:"mt-6 p-4 rounded-lg bg-slate-100 dark:bg-slate-800/60",children:[e.jsx("p",{className:"text-sm font-semibold text-indigo-400",children:"Logical Flow Summary"}),e.jsx("p",{className:"text-sm mt-1",children:"Binary File → FileInputStream → BufferedInputStream → read() → process → close"})]})]})}),e.jsx("section",{className:`${s} animation-delay-[450ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-500",children:"More Examples (Important Practice)"}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold",children:"Example 1: Reading a Small Binary File (Beginner)"}),e.jsx("p",{className:"text-sm",children:"Suitable for small files like icons or thumbnails where performance is not critical."}),e.jsx(a,{code:`FileInputStream fis = new FileInputStream("logo.png");
BufferedInputStream bis = new BufferedInputStream(fis);

int data;
while ((data = bis.read()) != -1) {
    System.out.print(data + " ");
}

bis.close();
fis.close();`})]}),e.jsxs("div",{className:"mt-8 space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold",children:"Example 2: Writing Binary Data to a File"}),e.jsxs("p",{className:"text-sm",children:["Demonstrates buffered writing and the importance of",e.jsx("code",{className:"mx-1",children:"flush()"}),"."]}),e.jsx(a,{code:`FileOutputStream fos = new FileOutputStream("sample.bin");
BufferedOutputStream bos = new BufferedOutputStream(fos);

bos.write(65);   // A
bos.write(66);   // B
bos.write(67);   // C

bos.flush();
bos.close();
fos.close();`})]}),e.jsxs("div",{className:"mt-8 space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold",children:"Example 3: Copying a Large File Efficiently (Professional)"}),e.jsx("p",{className:"text-sm",children:"Used in backup tools, media servers, and file migration systems."}),e.jsx(a,{code:`FileInputStream fis = new FileInputStream("movie.mkv");
BufferedInputStream bis = new BufferedInputStream(fis);

FileOutputStream fos = new FileOutputStream("movie_copy.mkv");
BufferedOutputStream bos = new BufferedOutputStream(fos);

int byteData;
while ((byteData = bis.read()) != -1) {
    bos.write(byteData);
}

bos.flush();
bis.close();
bos.close();
fis.close();
fos.close();`})]}),e.jsxs("div",{className:"mt-8 space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold",children:"Example 4: Professional Pattern (Try-With-Resources)"}),e.jsx("p",{className:"text-sm",children:"This is how modern Java applications safely handle streams."}),e.jsx(a,{code:`try (
    BufferedInputStream bis =
        new BufferedInputStream(new FileInputStream("data.zip"));
    BufferedOutputStream bos =
        new BufferedOutputStream(new FileOutputStream("data_copy.zip"))
) {
    int b;
    while ((b = bis.read()) != -1) {
        bos.write(b);
    }
    bos.flush();
} catch (Exception e) {
    e.printStackTrace();
}`})]})]})}),e.jsx("section",{className:`${s} animation-delay-[800ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-amber-500",children:"Hint for Students"}),e.jsx("p",{className:"text-sm",children:"Try copying a large video file once with FileInputStream only and once with BufferedInputStream. Compare execution time and CPU usage."})]})}),e.jsx("section",{className:`${s} animation-delay-[900ms]`,children:e.jsxs("div",{className:t,children:[e.jsx("h3",{className:"text-lg font-semibold text-indigo-500",children:"Quick Revision Checklist"}),e.jsxs("ul",{className:"list-disc list-inside text-sm space-y-1",children:[e.jsx("li",{children:"Why buffering improves performance"}),e.jsx("li",{children:"BufferedInputStream purpose"}),e.jsx("li",{children:"BufferedOutputStream purpose"}),e.jsx("li",{children:"When buffering is necessary"})]})]})}),e.jsxs("section",{className:`${s} animation-delay-[1000ms] rounded-xl border 
          border-indigo-300/40 dark:border-indigo-700/40 
          bg-indigo-50/60 dark:bg-indigo-900/20 p-6 
          transition-all duration-300 hover:shadow-md`,children:[e.jsx("h3",{className:"text-indigo-600 dark:text-indigo-400 font-semibold",children:"Teacher’s Note"}),e.jsxs("p",{className:"text-sm mt-2",children:["Students often underestimate buffering. Emphasize that buffering does not change logic — it changes ",e.jsx("strong",{children:"performance"}),". This distinction is critical for real-world systems."]})]})]})}}export{x as default};
