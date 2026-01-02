import{r as l,j as e}from"./index-BulJBpSd.js";import{J as a}from"./JavaCodeBlock-DnqcQy2v.js";import"./prism-BPoWlcML.js";import"./prism-java-CQA27I6F.js";const r=`
@keyframes fadeSlideUp {
  0% { opacity: 0; transform: translateY(16px); }
  100% { opacity: 1; transform: translateY(0); }
}
`;class x extends l.Component{constructor(t){super(t),this.state={mounted:!1}}componentDidMount(){this.setState({mounted:!0})}render(){const t=this.state.mounted?"motion-safe:animate-[fadeSlideUp_0.6s_ease-out_forwards]":"opacity-0",s="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";return e.jsxs("div",{className:"space-y-16 px-4 sm:px-6 lg:px-10 py-10 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200",children:[e.jsx("style",{children:r}),e.jsxs("header",{className:`${t} space-y-4`,children:[e.jsx("h1",{className:"text-2xl sm:text-3xl font-semibold tracking-wide",children:"try-with-resources Statement"}),e.jsxs("p",{className:"max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300",children:["The ",e.jsx("code",{children:"try-with-resources"})," statement is a modern Java feature that automatically closes resources like files and streams, making code ",e.jsx("strong",{children:"safer, cleaner, and leak-free"}),"."]})]}),e.jsxs("section",{className:`${t} ${s}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-600 dark:text-sky-400 mb-3",children:"1. The Problem with Traditional try-finally"}),e.jsxs("p",{className:"leading-relaxed text-slate-600 dark:text-slate-300",children:["Before Java 7, developers had to close resources manually using a ",e.jsx("code",{children:"finally"})," block."]}),e.jsx(a,{code:`FileReader reader = null;

try {
    reader = new FileReader("data.txt");
    // read file
} catch (IOException e) {
    e.printStackTrace();
} finally {
    try {
        if (reader != null) reader.close();
    } catch (IOException e) {
        e.printStackTrace();
    }
}`}),e.jsx("p",{className:"mt-3 leading-relaxed text-slate-600 dark:text-slate-300",children:"This code works — but it is verbose and error-prone."})]}),e.jsxs("section",{className:`${t} ${s}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3",children:"2. What is try-with-resources?"}),e.jsxs("p",{className:"leading-relaxed text-slate-600 dark:text-slate-300",children:[e.jsx("code",{children:"try-with-resources"})," automatically closes any object that implements the ",e.jsx("code",{children:"AutoCloseable"})," interface."]}),e.jsx("p",{className:"mt-2 text-sm text-slate-600 dark:text-slate-300",children:e.jsx("strong",{children:"Syntax:"})}),e.jsx(a,{code:`try (ResourceType resource = new ResourceType()) {
    // use resource
} catch (Exception e) {
    // handle exception
}`})]}),e.jsxs("section",{className:`${t} ${s}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-3",children:"3. File I/O using try-with-resources"}),e.jsx(a,{code:`try (BufferedReader reader =
         new BufferedReader(new FileReader("data.txt"))) {

    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }

} catch (IOException e) {
    System.out.println("File error occurred");
}`}),e.jsxs("p",{className:"mt-3 leading-relaxed text-slate-600 dark:text-slate-300",children:["No explicit ",e.jsx("code",{children:"close()"})," call is required. Java guarantees closure even if an exception occurs."]})]}),e.jsxs("section",{className:`${t} ${s}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-amber-600 dark:text-amber-400 mb-3",children:"4. Multiple Resources in One try Block"}),e.jsx(a,{code:`try (
    FileReader fr = new FileReader("input.txt");
    BufferedReader br = new BufferedReader(fr);
    FileWriter fw = new FileWriter("output.txt")
) {
    fw.write(br.readLine());
} catch (IOException e) {
    e.printStackTrace();
}`}),e.jsx("p",{className:"mt-3 leading-relaxed text-slate-600 dark:text-slate-300",children:"Resources are closed automatically in reverse order."})]}),e.jsxs("section",{className:`${t} ${s}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3",children:"5. AutoCloseable Interface"}),e.jsxs("p",{className:"leading-relaxed text-slate-600 dark:text-slate-300",children:["Any class implementing ",e.jsx("code",{children:"AutoCloseable"}),"can be used in try-with-resources."]}),e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-2 text-slate-600 dark:text-slate-300",children:[e.jsx("li",{children:"All Java I/O streams"}),e.jsx("li",{children:"Scanner"}),e.jsx("li",{children:"Database connections"})]})]}),e.jsxs("section",{className:`${t} ${s}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-rose-600 dark:text-rose-400 mb-3",children:"6. Real-World Scenario"}),e.jsxs("p",{className:"leading-relaxed text-slate-600 dark:text-slate-300",children:["A configuration loader in ",e.jsx("strong",{children:"Barrackpore"}),"opens multiple files during startup."]}),e.jsx("p",{className:"mt-2 leading-relaxed text-slate-600 dark:text-slate-300",children:"Using try-with-resources ensures all files are closed even if initialization fails."})]}),e.jsxs("section",{className:`${t} ${s}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-red-600 dark:text-red-400 mb-3",children:"Common Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300",children:[e.jsx("li",{children:"Using resources outside try block"}),e.jsx("li",{children:"Assuming finally is still required"}),e.jsx("li",{children:"Forgetting AutoCloseable requirement"}),e.jsx("li",{children:"Overcomplicating simple I/O code"})]})]}),e.jsxs("section",{className:`${t} ${s}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-green-600 dark:text-green-400 mb-3",children:"Best Practices"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300",children:[e.jsx("li",{children:"Always prefer try-with-resources for I/O"}),e.jsx("li",{children:"Keep resource scope minimal"}),e.jsx("li",{children:"Let Java manage cleanup"})]})]}),e.jsxs("section",{className:`${t} ${s} border-dashed border-teal-400/50`,children:[e.jsx("h2",{className:"text-lg font-semibold text-teal-600 dark:text-teal-400",children:"💡 Hint"}),e.jsxs("p",{className:"leading-relaxed text-slate-600 dark:text-slate-300",children:["If you see a ",e.jsx("code",{children:"finally"})," block only closing resources, try-with-resources can replace it completely."]})]}),e.jsxs("section",{className:`${t} ${s}`,children:[e.jsx("h2",{className:"text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3",children:"Mini Checklist"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300",children:[e.jsx("li",{children:"Introduced in Java 7"}),e.jsx("li",{children:"Uses AutoCloseable"}),e.jsx("li",{children:"Closes resources automatically"})]})]}),e.jsxs("section",{className:`${t} rounded-xl border border-slate-300 dark:border-slate-700 p-6 bg-slate-100 dark:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`,children:[e.jsx("h2",{className:"text-xl font-semibold flex items-center gap-2",children:"🎓 Teacher’s Note"}),e.jsx("p",{className:"mt-3 leading-relaxed text-slate-600 dark:text-slate-300",children:"This is a turning point topic. Students who adopt try-with-resources start writing *modern, professional Java*."})]})]})}}export{x as default};
