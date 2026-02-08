import{r as l,j as e}from"./index-lKIIHiz2.js";import{J as a}from"./JavaCodeBlock-2qTOLj8n.js";import"./prism-kSm8Ix4h.js";import"./browser-lT1m_1ZU.js";import"./prism-java-CQA27I6F.js";const i=`
@keyframes fadeSlideUp {
  0% { opacity: 0; transform: translateY(18px); }
  100% { opacity: 1; transform: translateY(0); }
}
`;class m extends l.Component{constructor(s){super(s),this.state={mounted:!1}}componentDidMount(){this.setState({mounted:!0})}render(){const s=this.state.mounted?"motion-safe:animate-[fadeSlideUp_0.6s_ease-out_forwards]":"opacity-0",t="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";return e.jsxs("div",{className:"space-y-20 px-4 sm:px-6 lg:px-10 py-10 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200",children:[e.jsx("style",{children:i}),e.jsxs("header",{className:`${s} space-y-4`,children:[e.jsx("h1",{className:"text-2xl sm:text-3xl font-semibold tracking-wide",children:"Simple Programs Using File Handling (Extended Practice)"}),e.jsxs("p",{className:"max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300",children:["This topic strengthens file handling by walking through",e.jsx("strong",{children:"small but realistic programs"}),". Each example mirrors how files are used in schools, offices, and real Java applications."]})]}),e.jsxs("section",{className:`${s} ${t}`,children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"File Handling Flow (Conceptual)"}),e.jsx("svg",{viewBox:"0 0 600 120",className:"w-full h-auto","aria-label":"File handling flow diagram",children:e.jsxs("g",{className:"transition-all duration-300 hover:scale-[1.02]",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"10",y:"40",width:"120",height:"40",rx:"8"}),e.jsx("text",{x:"30",y:"66",className:"fill-current text-sm",children:"Java Program"}),e.jsx("line",{x1:"130",y1:"60",x2:"230",y2:"60"}),e.jsx("polygon",{points:"230,55 240,60 230,65",fill:"currentColor"}),e.jsx("rect",{x:"240",y:"40",width:"140",height:"40",rx:"8"}),e.jsx("text",{x:"260",y:"66",className:"fill-current text-sm",children:"Stream / Reader"}),e.jsx("line",{x1:"380",y1:"60",x2:"480",y2:"60"}),e.jsx("polygon",{points:"480,55 490,60 480,65",fill:"currentColor"}),e.jsx("rect",{x:"490",y:"40",width:"100",height:"40",rx:"8"}),e.jsx("text",{x:"515",y:"66",className:"fill-current text-sm",children:"File"})]})}),e.jsxs("p",{className:"mt-4 text-slate-600 dark:text-slate-300",children:["Every file program follows this pipeline:",e.jsx("strong",{children:"Program → Stream → File"}),"."]})]}),e.jsxs("section",{className:`${s} ${t}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-600 mb-2",children:"Example 1: Writing Data to a File"}),e.jsxs("p",{className:"leading-relaxed text-slate-600 dark:text-slate-300",children:["This program stores a simple message in a text file. It demonstrates ",e.jsx("strong",{children:"basic file creation and writing"}),"."]}),e.jsx(a,{code:`import java.io.*;

public class WriteExample {
    public static void main(String[] args) {
        try (FileWriter fw = new FileWriter("notes.txt")) {
            fw.write("Java File Handling Basics");
        } catch (IOException e) {
            System.out.println("Write failed");
        }
    }
}`}),e.jsxs("p",{className:"mt-3 text-slate-600 dark:text-slate-300",children:[e.jsx("strong",{children:"Explanation:"}),e.jsx("br",{}),e.jsx("code",{children:"FileWriter"})," creates the file if it does not exist. If the file already exists, it overwrites old content."]})]}),e.jsxs("section",{className:`${s} ${t}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-indigo-600 mb-2",children:"Example 2: Reading Data from a File"}),e.jsx("p",{className:"leading-relaxed text-slate-600 dark:text-slate-300",children:"Reading files is common in report generation, configuration loading, and data processing."}),e.jsx(a,{code:`import java.io.*;

public class ReadExample {
    public static void main(String[] args) {
        try (BufferedReader br =
                new BufferedReader(new FileReader("notes.txt"))) {

            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }

        } catch (IOException e) {
            System.out.println("Read failed");
        }
    }
}`}),e.jsxs("p",{className:"mt-3 text-slate-600 dark:text-slate-300",children:[e.jsx("strong",{children:"Explanation:"}),e.jsx("br",{}),e.jsx("code",{children:"BufferedReader"})," improves performance by reading chunks instead of one character at a time."]})]}),e.jsxs("section",{className:`${s} ${t}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-600 mb-2",children:"Example 3: Appending to a File"}),e.jsx("p",{className:"leading-relaxed text-slate-600 dark:text-slate-300",children:"Appending is essential for logs and history files where old data must be preserved."}),e.jsx(a,{code:`import java.io.*;

public class AppendExample {
    public static void main(String[] args) {
        try (BufferedWriter bw =
                new BufferedWriter(new FileWriter("notes.txt", true))) {

            bw.newLine();
            bw.write("New session started");

        } catch (IOException e) {
            System.out.println("Append failed");
        }
    }
}`}),e.jsxs("p",{className:"mt-3 text-slate-600 dark:text-slate-300",children:[e.jsx("strong",{children:"Key point:"}),e.jsx("br",{}),"The ",e.jsx("code",{children:"true"})," flag enables append mode. Missing it causes accidental data loss."]})]}),e.jsxs("section",{className:`${s} ${t}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-amber-600 mb-2",children:"Example 4: Checking File Properties"}),e.jsx("p",{className:"leading-relaxed text-slate-600 dark:text-slate-300",children:"Before reading or writing, programs often verify whether a file exists and is accessible."}),e.jsx(a,{code:`import java.io.File;

public class FileCheck {
    public static void main(String[] args) {
        File f = new File("notes.txt");

        System.out.println("Exists: " + f.exists());
        System.out.println("Readable: " + f.canRead());
        System.out.println("Size: " + f.length());
    }
}`}),e.jsx("p",{className:"mt-3 text-slate-600 dark:text-slate-300",children:"This prevents runtime failures caused by missing or restricted files."})]}),e.jsxs("section",{className:`${s} ${t}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-red-600 mb-2",children:"Common Beginner Mistakes"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300",children:[e.jsx("li",{children:"Overwriting files unintentionally"}),e.jsx("li",{children:"Not closing file resources"}),e.jsx("li",{children:"Ignoring IOException"}),e.jsx("li",{children:"Assuming files always exist"})]})]}),e.jsxs("section",{className:`${s} ${t} border-dashed border-teal-400/50`,children:[e.jsx("h2",{className:"text-lg font-semibold text-teal-600",children:"💡 Hint"}),e.jsx("p",{className:"leading-relaxed text-slate-600 dark:text-slate-300",children:"Try running these programs from different folders and observe how relative paths behave."})]}),e.jsxs("section",{className:`${s} ${t}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-indigo-600 mb-2",children:"Mini Checklist"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300",children:[e.jsx("li",{children:"Understand write vs append"}),e.jsx("li",{children:"Use buffering for reading"}),e.jsx("li",{children:"Check file existence"})]})]}),e.jsxs("section",{className:`${s} rounded-xl border border-slate-300 dark:border-slate-700 p-6 bg-slate-100 dark:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`,children:[e.jsx("h2",{className:"text-xl font-semibold",children:"🎓 Teacher’s Note"}),e.jsx("p",{className:"mt-3 leading-relaxed text-slate-600 dark:text-slate-300",children:"These examples are intentionally small. Mastery of small programs builds confidence for large systems later."})]})]})}}export{m as default};
