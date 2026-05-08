import{r as l,j as e}from"./index-DaJZPAzN.js";import{J as s}from"./JavaFileLoader-Dk2SGSBN.js";import{F as a}from"./FAQTemplate-DQ2GNpWa.js";import{T as o}from"./TeacherSukantaHui-CP7zNjK7.js";import"./JavaCodeBlock-Bcd8JLFq.js";import"./prism-e-aEJA5c.js";import"./browser-Bk--L9W0.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";import"./git-branch-B_kKbcQG.js";const c=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
import javax.servlet.annotation.*;\r
\r
@WebServlet(\r
    name = "UserServlet",\r
    urlPatterns = { "/profile", "/user/info" },\r
    loadOnStartup = 1,\r
    description = "Handles user profile requests"\r
)\r
public class UserServlet extends HttpServlet {\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        resp.setContentType("text/html");\r
        resp.getWriter().println("<h2>User Profile Page</h2>");\r
    }\r
}`,d=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
import javax.servlet.annotation.*;\r
\r
@WebFilter(\r
    filterName = "AuthFilter",\r
    urlPatterns = { "/admin/*", "/dashboard/*" },\r
    dispatcherTypes = { DispatcherType.REQUEST, DispatcherType.FORWARD }\r
)\r
public class AuthFilter implements Filter {\r
    @Override\r
    public void doFilter(ServletRequest request, ServletResponse response,\r
                         FilterChain chain) throws IOException, ServletException {\r
        HttpServletRequest req = (HttpServletRequest) request;\r
        HttpSession session = req.getSession(false);\r
        if (session != null && session.getAttribute("user") != null) {\r
            chain.doFilter(request, response);\r
        } else {\r
            ((HttpServletResponse) response).sendRedirect(req.getContextPath() + "/login");\r
        }\r
    }\r
    @Override public void init(FilterConfig config) {}\r
    @Override public void destroy() {}\r
}`,x=`import javax.servlet.*;\r
import javax.servlet.annotation.*;\r
import javax.servlet.http.*;\r
\r
@WebListener\r
public class AppListener implements ServletContextListener, HttpSessionListener {\r
    private int activeSessions = 0;\r
\r
    @Override\r
    public void contextInitialized(ServletContextEvent sce) {\r
        System.out.println("Application started");\r
        sce.getServletContext().setAttribute("appVersion", "2.0");\r
    }\r
\r
    @Override\r
    public void contextDestroyed(ServletContextEvent sce) {\r
        System.out.println("Application shutting down");\r
    }\r
\r
    @Override\r
    public void sessionCreated(HttpSessionEvent se) {\r
        activeSessions++;\r
        se.getSession().getServletContext().setAttribute("activeSessions", activeSessions);\r
    }\r
\r
    @Override\r
    public void sessionDestroyed(HttpSessionEvent se) {\r
        activeSessions--;\r
        se.getSession().getServletContext().setAttribute("activeSessions", activeSessions);\r
    }\r
}`,h=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
import javax.servlet.annotation.*;\r
\r
@WebServlet(\r
    urlPatterns = "/config",\r
    initParams = {\r
        @WebInitParam(name = "timeout", value = "300"),\r
        @WebInitParam(name = "theme", value = "dark")\r
    }\r
)\r
public class ConfigurableServlet extends HttpServlet {\r
    private int timeout;\r
    private String theme;\r
\r
    @Override\r
    public void init() throws ServletException {\r
        timeout = Integer.parseInt(getServletConfig().getInitParameter("timeout"));\r
        theme = getServletConfig().getInitParameter("theme");\r
    }\r
\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws IOException {\r
        resp.getWriter().println("Timeout: " + timeout + ", Theme: " + theme);\r
    }\r
}`,p=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
import javax.servlet.annotation.*;\r
\r
@WebServlet(urlPatterns = "/longtask", asyncSupported = true)\r
public class AsyncServlet extends HttpServlet {\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        AsyncContext ctx = req.startAsync();\r
        ctx.start(() -> {\r
            try {\r
                // Simulate long processing\r
                Thread.sleep(5000);\r
                resp.getWriter().println("Task completed");\r
                ctx.complete();\r
            } catch (Exception e) { e.printStackTrace(); }\r
        });\r
    }\r
}`,m=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
import javax.servlet.annotation.*;\r
\r
@WebServlet(urlPatterns = "/longtask", asyncSupported = true)\r
public class AsyncServlet extends HttpServlet {\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        AsyncContext ctx = req.startAsync();\r
        ctx.start(() -> {\r
            try {\r
                // Simulate long processing\r
                Thread.sleep(5000);\r
                resp.getWriter().println("Task completed");\r
                ctx.complete();\r
            } catch (Exception e) { e.printStackTrace(); }\r
        });\r
    }\r
}`,u=[{question:"What is the minimum Servlet version required to use annotations like @WebServlet?",shortAnswer:"Servlet 3.0 (part of Java EE 6)",explanation:"Servlet 3.0 introduced annotations to reduce web.xml configuration.",hint:"Check your web.xml version or container support.",level:"basic",codeExample:'@WebServlet("/hello")'},{question:"How do you define multiple URL patterns for a servlet using annotations?",shortAnswer:"Use the urlPatterns attribute with an array of strings.",explanation:'Example: @WebServlet(urlPatterns = {"/user", "/account/*"})',level:"basic"},{question:"What annotation would you use to register a ServletContextListener without web.xml?",shortAnswer:"@WebListener",explanation:"The container scans for this annotation and automatically registers the listener.",level:"basic"},{question:"How can you specify init parameters for a servlet using annotations?",shortAnswer:"Use the initParams attribute of @WebServlet with an array of @WebInitParam.",level:"intermediate",codeExample:'@WebServlet(urlPatterns="/", initParams={@WebInitParam(name="p",value="v")})'},{question:"Can you use both @WebServlet and web.xml for the same servlet? What happens?",shortAnswer:"Yes, but web.xml overrides the annotation if both define the same servlet name or conflicting mappings.",explanation:"Container merges definitions; web.xml has higher precedence.",level:"advanced"}],N=()=>{const r=l.useRef([]);return l.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(i.target.classList.add("animate-slide-up"),t.unobserve(i.target))})},{threshold:.1});return r.current.forEach(n=>{n&&t.observe(n)}),()=>t.disconnect()},[]),e.jsx("div",{className:"dark min-h-screen bg-gray-950 text-gray-100 font-sans leading-relaxed p-6 md:p-10",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("header",{className:"text-center space-y-4 animate-slide-up",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",children:"Servlet Annotations"}),e.jsxs("p",{className:"text-lg text-gray-300 max-w-2xl mx-auto",children:[e.jsx("code",{children:"@WebServlet"}),", ",e.jsx("code",{children:"@WebFilter"}),", ",e.jsx("code",{children:"@WebListener"})," – eliminating ",e.jsx("code",{children:"web.xml"})," for modern Servlet 3.0+ applications."]})]}),e.jsxs("section",{ref:t=>r.current[0]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-cyan-400 flex items-center gap-2",children:[e.jsx("span",{children:"🏷️"})," What are Servlet Annotations?"]}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Starting from Servlet 3.0 (part of Java EE 6), the specification introduced annotations to reduce (or eliminate) the need for the ",e.jsx("code",{children:"web.xml"})," deployment descriptor. Annotations provide metadata directly in the Java source, making configuration ",e.jsx("strong",{children:"co-located with the code"})," and improving developer productivity."]}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Three main annotations: ",e.jsx("code",{children:"@WebServlet"})," defines a servlet and its URL mapping(s); ",e.jsx("code",{children:"@WebFilter"})," declares a filter and its interception patterns; ",e.jsx("code",{children:"@WebListener"})," registers a listener for context, session, or request events."]}),e.jsx("div",{className:"mt-4 p-4 bg-gray-800/50 rounded-xl border-l-4 border-cyan-500",children:e.jsxs("p",{className:"text-sm italic text-gray-300",children:["📘 ",e.jsx("strong",{children:"Real‑world context:"})," Shyamnagar Public School’s new DevOps team wants to move away from complex XML. They use ",e.jsx("code",{children:'@WebServlet("/grades")'})," on ",e.jsx("code",{children:"GradeServlet"}),", ",e.jsx("code",{children:'@WebFilter("/api/*")'})," for API logging, and ",e.jsx("code",{children:"@WebListener"})," to count active sessions – all without touching ",e.jsx("code",{children:"web.xml"}),"."]})})]}),e.jsxs("section",{ref:t=>r.current[1]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-cyan-400",children:"🔍 Annotation vs XML Configuration"}),e.jsxs("div",{className:"mt-6 flex flex-wrap justify-center gap-8",children:[e.jsxs("svg",{viewBox:"0 0 300 180",className:"w-72 h-auto",children:[e.jsx("rect",{x:"10",y:"10",width:"280",height:"160",rx:"10",fill:"#1e293b",stroke:"#06b6d4",strokeWidth:"1.5"}),e.jsx("text",{x:"150",y:"35",textAnchor:"middle",fill:"#67e8f9",fontWeight:"bold",fontSize:"14",children:"✔ Annotations"}),e.jsx("text",{x:"150",y:"60",textAnchor:"middle",fill:"#cbd5e1",fontSize:"12",children:"Code + config together"}),e.jsx("text",{x:"150",y:"80",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:'@WebServlet("/login")'}),e.jsx("text",{x:"150",y:"100",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"No external file needed"}),e.jsx("text",{x:"150",y:"120",textAnchor:"middle",fill:"#34d399",fontSize:"11",children:"➕ Faster development"}),e.jsx("text",{x:"150",y:"140",textAnchor:"middle",fill:"#f87171",fontSize:"11",children:"➖ Harder to override"})]}),e.jsxs("svg",{viewBox:"0 0 300 180",className:"w-72 h-auto",children:[e.jsx("rect",{x:"10",y:"10",width:"280",height:"160",rx:"10",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"150",y:"35",textAnchor:"middle",fill:"#fcd34d",fontWeight:"bold",fontSize:"14",children:"📄 web.xml"}),e.jsx("text",{x:"150",y:"60",textAnchor:"middle",fill:"#cbd5e1",fontSize:"12",children:"Centralised configuration"}),e.jsx("text",{x:"150",y:"80",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"<servlet>...</servlet>"}),e.jsx("text",{x:"150",y:"100",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"Changes without recompile"}),e.jsx("text",{x:"150",y:"120",textAnchor:"middle",fill:"#34d399",fontSize:"11",children:"➕ External overrides"}),e.jsx("text",{x:"150",y:"140",textAnchor:"middle",fill:"#f87171",fontSize:"11",children:"➖ Verbose, separate file"})]})]})]}),e.jsxs("section",{ref:t=>r.current[2]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-cyan-400",children:"🌐 @WebServlet"}),e.jsx("p",{className:"mt-3 text-gray-300",children:"Marks a class as a servlet and provides URL mapping(s) and initialisation parameters. Attributes include:"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"value"})," or ",e.jsx("code",{children:"urlPatterns"})," – one or more URL patterns (e.g., ",e.jsx("code",{children:'"/login"'}),", ",e.jsx("code",{children:"/admin/*"}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"name"})," – servlet name (optional, defaults to class name)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"initParams"})," – array of ",e.jsx("code",{children:"@WebInitParam"})," for servlet‑specific init parameters."]}),e.jsxs("li",{children:[e.jsx("code",{children:"loadOnStartup"})," – integer priority for eager loading (positive values)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"asyncSupported"})," – boolean to enable asynchronous processing (default false)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"description"})," – textual description."]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(s,{fileModule:c,title:"UserServlet.java – @WebServlet Example",highlightLines:[5,6,7,8]})}),e.jsx("div",{className:"mt-5",children:e.jsx(s,{fileModule:h,title:"ConfigurableServlet.java – With Init Params",highlightLines:[5,6,7]})})]}),e.jsxs("section",{ref:t=>r.current[3]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-cyan-400",children:"🚦 @WebFilter"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Declares a filter. Attributes mirror those of ",e.jsx("code",{children:"@WebServlet"})," but with filter‑specific ones:"]}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"filterName"})," – logical name of the filter."]}),e.jsxs("li",{children:[e.jsx("code",{children:"urlPatterns"})," or ",e.jsx("code",{children:"value"})," – patterns to intercept."]}),e.jsxs("li",{children:[e.jsx("code",{children:"servletNames"})," – apply filter to specific servlet names."]}),e.jsxs("li",{children:[e.jsx("code",{children:"dispatcherTypes"})," – ",e.jsx("code",{children:"DispatcherType"})," array (REQUEST, FORWARD, INCLUDE, ERROR, ASYNC)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"initParams"})," – filter init parameters."]}),e.jsxs("li",{children:[e.jsx("code",{children:"asyncSupported"})," – whether filter supports async."]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(s,{fileModule:d,title:"AuthFilter.java – @WebFilter Example",highlightLines:[5,6,7]})})]}),e.jsxs("section",{ref:t=>r.current[4]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-cyan-400",children:"👂 @WebListener"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Annotates a class that implements one or more listener interfaces (",e.jsx("code",{children:"ServletContextListener"}),", ",e.jsx("code",{children:"HttpSessionListener"}),", ",e.jsx("code",{children:"ServletRequestListener"}),", etc.). The container automatically registers it without any XML entry."]}),e.jsx("div",{className:"mt-5",children:e.jsx(s,{fileModule:x,title:"AppListener.java – @WebListener Example",highlightLines:[5,6,7,8]})}),e.jsx("div",{className:"mt-4 p-3 bg-cyan-950/30 border-l-4 border-cyan-500 rounded",children:e.jsxs("p",{className:"text-sm text-gray-200",children:["💡 ",e.jsx("strong",{children:"Tip:"})," Multiple listener interfaces can be implemented in one class – the container will register all of them automatically."]})})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-cyan-400",children:"📌 Annotations vs web.xml – Which to Choose?"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Annotations are great for development and when you want self‑contained components. However, externalising configuration in ",e.jsx("code",{children:"web.xml"})," allows you to modify mappings without recompiling – useful in production environments where different deployments may need different URL patterns or init parameters."]}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["You can ",e.jsx("strong",{children:"mix both"}),". If a servlet is both annotated and declared in ",e.jsx("code",{children:"web.xml"}),", the web.xml settings override the annotation. Also, you can set ",e.jsx("code",{children:'metadata-complete="true"'})," in ",e.jsx("code",{children:"web.xml"})," to ignore annotations entirely (useful for portability)."]}),e.jsx("div",{className:"mt-5",children:e.jsx(s,{fileModule:p,title:"equivalent_web.xml – Overriding Annotation",highlightLines:[2,3,4,8,9,10]})})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-cyan-400",children:"⚡ Async Support with Annotations"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Use ",e.jsx("code",{children:"asyncSupported = true"})," in ",e.jsx("code",{children:"@WebServlet"})," or ",e.jsx("code",{children:"@WebFilter"})," to enable asynchronous request processing, allowing the container thread to return while the request continues in a separate thread."]}),e.jsx(s,{fileModule:m,title:"AsyncServlet.java – Async Supported",highlightLines:[5,6,13]})]}),e.jsxs("section",{ref:t=>r.current[5]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-cyan-400",children:"⚠️ Common Pitfalls (Beginners)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300 mt-3",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Wrong annotation retention:"})," Servlet annotations are runtime‑visible – but mixing with older Java versions? Works only on Servlet 3.0+ containers."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Forgetting ",e.jsx("code",{children:"@WebServlet"})," on class:"]})," The servlet won't be registered – you'll get 404."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Conflicting mappings:"})," If you have the same URL pattern in both annotation and ",e.jsx("code",{children:"web.xml"}),", the container may deploy twice or cause errors (depends on container)."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"@WebFilter"})," without implementing ",e.jsx("code",{children:"Filter"}),":"]})," The class must implement ",e.jsx("code",{children:"javax.servlet.Filter"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming ordering:"})," Annotated filters have no guaranteed order unless you use ",e.jsx("code",{children:"web.xml"})," or ",e.jsx("code",{children:"@WebFilter"})," with ",e.jsx("code",{children:"filterName"})," and absolute ordering in XML."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Not setting ",e.jsx("code",{children:"asyncSupported"})," when using ",e.jsx("code",{children:"AsyncContext"}),":"]})," Results in ",e.jsx("code",{children:"IllegalStateException"}),"."]})]})]}),e.jsxs("section",{ref:t=>r.current[6]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-cyan-400",children:"✅ Best Practices (Industry)"}),e.jsxs("ul",{className:"list-decimal list-inside space-y-2 text-gray-300 mt-3",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prefer annotations for new development"})," – faster, less XML boilerplate."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"web.xml"})," for environment-specific overrides"]})," – e.g., different URL paths for staging vs production."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Always specify ",e.jsx("code",{children:"loadOnStartup"})," for critical servlets"]})," – ensures they are initialised early."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Group related servlets with meaningful names in ",e.jsx("code",{children:"@WebServlet(name=...)"})]})," – helps debugging and logging."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Avoid using both annotations and ",e.jsx("code",{children:"web.xml"})," for the same component"]})," unless you need overriding."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Set ",e.jsx("code",{children:"asyncSupported = true"})," only when needed"]})," – adds complexity and thread management overhead."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"@WebInitParam"})," for simple configuration"]})," – but keep sensitive data out of code (use context params or JNDI)."]})]})]}),e.jsxs("section",{ref:t=>r.current[7]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-cyan-400",children:"📋 Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-4",children:["✅ Add @WebServlet to servlet class with urlPatterns","✅ Add @WebFilter to filter class with appropriate patterns","✅ Add @WebListener to listener class","✅ Use @WebInitParam for init parameters","✅ Set loadOnStartup when needed","✅ Ensure container version is >= 3.0","✅ Decide between annotation and web.xml per component","✅ Test URL mappings after deployment","✅ Use asyncSupported only if implementing async","✅ Remember order of filters – use web.xml if strict ordering required"].map((t,n)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-200 text-sm",children:[e.jsx("span",{className:"text-cyan-400",children:"✓"})," ",t]},n))})]}),e.jsxs("section",{ref:t=>r.current[8]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-cyan-500/30",children:[e.jsx("h2",{className:"text-xl font-semibold text-cyan-400",children:"🧠 Hints – Think Like a Pro"}),e.jsxs("ul",{className:"space-y-2 text-gray-300 italic",children:[e.jsxs("li",{children:["🔍 ",e.jsx("strong",{children:"Observe carefully:"})," Deploy the same servlet with and without ",e.jsx("code",{children:"web.xml"})," – watch the startup logs to see registration messages."]}),e.jsxs("li",{children:["⚙️ ",e.jsx("strong",{children:"Try changing:"})," Add multiple URL patterns to ",e.jsx("code",{children:"@WebServlet"})," – e.g., ",e.jsx("code",{children:"/student/*"})," – see how the container dispatches."]}),e.jsxs("li",{children:["📂 ",e.jsx("strong",{children:"Think about:"})," Why would a large enterprise still prefer ",e.jsx("code",{children:"web.xml"})," despite annotations? (Hint: Configuration management and reusability)"]}),e.jsxs("li",{children:["🧩 ",e.jsx("strong",{children:"Debug:"})," Your ",e.jsx("code",{children:"@WebFilter"})," is not working. Check if the class is in the right package and WEB-INF/classes is correctly packaged."]})]})]}),e.jsx(a,{title:"Servlet Annotations FAQs",questions:u}),e.jsx("div",{className:"mt-8",children:e.jsx(o,{note:"Annotations are a huge leap from the verbose XML days. Show students how much boilerplate disappears: a typical web.xml with one servlet takes ~15 lines, while @WebServlet takes 1 line. But also warn them: annotations couple configuration to code, making it harder to change mappings without recompilation. In industry, many projects still use a hybrid approach: annotate servlets but keep security constraints, error pages, and environment‑specific parameters in web.xml. A great class exercise: convert a legacy web.xml to annotations and compare the two versions. Also point out that for large applications, annotations can become scattered – a well‑maintained web.xml can act as a central registry."})}),e.jsx("footer",{className:"text-center text-gray-500 text-sm pt-8 border-t border-gray-800",children:"Topic 7: Servlet Annotations (@WebServlet, @WebFilter, @WebListener) – Part of Servlet Mastery Series"})]})})};export{N as default};
