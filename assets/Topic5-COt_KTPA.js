import{r as l,j as e}from"./index-CFVtO9P_.js";import{J as s}from"./JavaFileLoader-DM2o04bg.js";import{F as a}from"./FAQTemplate-CAe3FOoX.js";import{T as o}from"./TeacherSukantaHui-D1Z2v8eP.js";import"./JavaCodeBlock-n0rq4kmZ.js";import"./prism-BpRLhmdq.js";import"./browser-BLY_Ogsx.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";import"./git-branch-BV3XnfBa.js";const c=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
import java.util.logging.Logger;\r
\r
public class LoggingFilter implements Filter {\r
    private static final Logger log = Logger.getLogger(LoggingFilter.class.getName());\r
\r
    @Override\r
    public void init(FilterConfig filterConfig) throws ServletException {\r
        log.info("LoggingFilter initialized");\r
    }\r
\r
    @Override\r
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)\r
            throws IOException, ServletException {\r
        HttpServletRequest req = (HttpServletRequest) request;\r
        long start = System.nanoTime();\r
        log.info("Request URL: " + req.getRequestURL() + ", Method: " + req.getMethod());\r
        chain.doFilter(request, response);\r
        long end = System.nanoTime();\r
        log.info("Request processed in " + (end - start) / 1_000_000 + " ms");\r
    }\r
\r
    @Override\r
    public void destroy() {\r
        log.info("LoggingFilter destroyed");\r
    }\r
}`,d=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
\r
public class AuthenticationFilter implements Filter {\r
    @Override\r
    public void init(FilterConfig filterConfig) throws ServletException {}\r
\r
    @Override\r
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)\r
            throws IOException, ServletException {\r
        HttpServletRequest req = (HttpServletRequest) request;\r
        HttpServletResponse res = (HttpServletResponse) response;\r
        HttpSession session = req.getSession(false);\r
        boolean loggedIn = (session != null && session.getAttribute("user") != null);\r
        String loginURI = req.getContextPath() + "/login.html";\r
\r
        boolean isLoginRequest = req.getRequestURI().equals(loginURI);\r
        boolean isLoginAction = req.getRequestURI().endsWith("/login");\r
\r
        if (loggedIn || isLoginRequest || isLoginAction) {\r
            chain.doFilter(request, response);\r
        } else {\r
            res.sendRedirect(loginURI);\r
        }\r
    }\r
\r
    @Override\r
    public void destroy() {}\r
}`,h=`<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"\r
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee \r
         http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"\r
         version="4.0">\r
    \r
    <filter>\r
        <filter-name>LoggingFilter</filter-name>\r
        <filter-class>com.example.LoggingFilter</filter-class>\r
    </filter>\r
    <filter-mapping>\r
        <filter-name>LoggingFilter</filter-name>\r
        <url-pattern>/*</url-pattern>\r
    </filter-mapping>\r
\r
    <filter>\r
        <filter-name>AuthFilter</filter-name>\r
        <filter-class>com.example.AuthenticationFilter</filter-class>\r
        <init-param>\r
            <param-name>excludeUrls</param-name>\r
            <param-value>/login,/register,/public</param-value>\r
        </init-param>\r
    </filter>\r
    <filter-mapping>\r
        <filter-name>AuthFilter</filter-name>\r
        <url-pattern>/dashboard/*</url-pattern>\r
        <url-pattern>/profile/*</url-pattern>\r
    </filter-mapping>\r
</web-app>`,x=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.annotation.*;\r
import javax.servlet.http.*;\r
\r
@WebFilter(urlPatterns = { "/*" }, filterName = "EncodingFilter", initParams = {\r
    @WebInitParam(name = "encoding", value = "UTF-8")\r
})\r
public class EncodingFilter implements Filter {\r
    private String encoding;\r
\r
    @Override\r
    public void init(FilterConfig config) throws ServletException {\r
        encoding = config.getInitParameter("encoding");\r
    }\r
\r
    @Override\r
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)\r
            throws IOException, ServletException {\r
        request.setCharacterEncoding(encoding);\r
        response.setCharacterEncoding(encoding);\r
        chain.doFilter(request, response);\r
    }\r
\r
    @Override\r
    public void destroy() {}\r
}`,p=`// web.xml order determines chain order\r
// First: LoggingFilter logs incoming request time\r
// Second: AuthenticationFilter checks session\r
// Third: CompressionFilter compresses response if client accepts gzip\r
\r
public class ChainedFiltersDemo {\r
    // No actual code – just demonstrating concept\r
    // In real filters, each filter calls chain.doFilter() to continue.\r
}`,g=[{question:"What is the purpose of a filter in Java servlets?",shortAnswer:"Filters intercept requests and responses to perform cross‑cutting tasks like logging, authentication, and encoding.",explanation:"Filters allow pre‑processing and post‑processing of requests without modifying servlet code.",hint:"Think of filters as reusable interceptors.",level:"basic",codeExample:"class MyFilter implements Filter { public void doFilter(...) { ... chain.doFilter(...); } }"},{question:"What method must a filter call to pass the request to the next entity?",shortAnswer:"chain.doFilter(request, response)",explanation:"Without calling doFilter(), the request processing stops.",level:"basic",codeExample:"chain.doFilter(request, response);"},{question:"How do you configure a filter without web.xml?",shortAnswer:"Use the @WebFilter annotation on the filter class.",explanation:'Servlet 3.0+ supports annotations, e.g., @WebFilter("/*").',level:"intermediate"}],S=()=>{const t=l.useRef([]);return l.useEffect(()=>{const r=new IntersectionObserver(i=>{i.forEach(n=>{n.isIntersecting&&(n.target.classList.add("animate-slide-up"),r.unobserve(n.target))})},{threshold:.1});return t.current.forEach(i=>{i&&r.observe(i)}),()=>r.disconnect()},[]),e.jsx("div",{className:"dark min-h-screen bg-gray-950 text-gray-100 font-sans leading-relaxed p-6 md:p-10",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("header",{className:"text-center space-y-4 animate-slide-up",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent",children:"Filters"}),e.jsx("p",{className:"text-lg text-gray-300 max-w-2xl mx-auto",children:"Intercept, pre‑process, and post‑process HTTP requests and responses – cleanly separating cross‑cutting concerns."})]}),e.jsxs("section",{ref:r=>t.current[0]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-purple-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔄"})," What is a Filter?"]}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["A filter is a Java component that intercepts requests ",e.jsx("strong",{children:"before"})," they reach a servlet (or JSP) and can also intercept responses ",e.jsx("strong",{children:"after"})," the servlet processes them. Filters are ideal for cross‑cutting concerns: logging, authentication, compression, character encoding, and request wrapping."]}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Filters are configured in ",e.jsx("code",{children:"web.xml"})," or via the ",e.jsx("code",{children:"@WebFilter"})," annotation. Multiple filters can be chained in a defined order."]}),e.jsx("div",{className:"mt-4 p-4 bg-gray-800/50 rounded-xl border-l-4 border-purple-500",children:e.jsxs("p",{className:"text-sm italic text-gray-300",children:["📘 ",e.jsx("strong",{children:"Real‑world analogy:"})," At Ichapur Public School, before students (requests) enter the exam hall (servlet), they pass through a security check (filter). After the exam, their answer sheets (response) pass through a scanning process (another filter). Filters are reusable and applied to many servlets."]})})]}),e.jsxs("section",{ref:r=>t.current[1]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"⛓️ Filter Chain Processing"}),e.jsx("div",{className:"mt-6 flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 800 160",className:"w-full max-w-4xl h-auto",children:[e.jsx("rect",{x:"10",y:"30",width:"100",height:"50",rx:"8",fill:"#1e293b",stroke:"#a855f7",strokeWidth:"2"}),e.jsx("text",{x:"60",y:"55",textAnchor:"middle",fill:"#d8b4fe",fontSize:"12",children:"Client"}),e.jsx("text",{x:"60",y:"70",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Request"}),e.jsx("rect",{x:"160",y:"30",width:"110",height:"50",rx:"8",fill:"#1e293b",stroke:"#a855f7",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"215",y:"50",textAnchor:"middle",fill:"#e9d5ff",fontSize:"12",children:"Filter 1"}),e.jsx("text",{x:"215",y:"65",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Auth / Log"}),e.jsx("rect",{x:"320",y:"30",width:"110",height:"50",rx:"8",fill:"#1e293b",stroke:"#a855f7",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",begin:"0.3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"375",y:"50",textAnchor:"middle",fill:"#e9d5ff",fontSize:"12",children:"Filter 2"}),e.jsx("text",{x:"375",y:"65",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Encoding"}),e.jsx("rect",{x:"480",y:"30",width:"110",height:"50",rx:"8",fill:"#1e293b",stroke:"#a855f7",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",begin:"0.6s",repeatCount:"indefinite"})}),e.jsx("text",{x:"535",y:"50",textAnchor:"middle",fill:"#e9d5ff",fontSize:"12",children:"Filter 3"}),e.jsx("text",{x:"535",y:"65",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Compress"}),e.jsx("rect",{x:"640",y:"30",width:"110",height:"50",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"695",y:"55",textAnchor:"middle",fill:"#6ee7b7",fontSize:"12",children:"Servlet"}),e.jsx("text",{x:"695",y:"70",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Business logic"}),e.jsx("line",{x1:"110",y1:"55",x2:"158",y2:"55",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrowF)"}),e.jsx("line",{x1:"270",y1:"55",x2:"318",y2:"55",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrowF)"}),e.jsx("line",{x1:"430",y1:"55",x2:"478",y2:"55",stroke:"#a855f7",strokeWidth:"2",markerEnd:"url(#arrowF)"}),e.jsx("line",{x1:"590",y1:"55",x2:"638",y2:"55",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrowF)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowF",markerWidth:"8",markerHeight:"8",refX:"6",refY:"4",orient:"auto",children:e.jsx("polygon",{points:"0 0, 8 4, 0 8",fill:"#a855f7"})})}),e.jsx("path",{d:"M695 90 L640 90 L590 90 L480 90 L430 90 L320 90 L270 90 L160 90 L110 90",fill:"none",stroke:"#f59e0b",strokeWidth:"1.5",strokeDasharray:"4,4",markerEnd:"url(#arrowRet)"}),e.jsx("text",{x:"350",y:"110",textAnchor:"middle",fill:"#fcd34d",fontSize:"10",children:"Response flows back through filters in reverse order"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowRet",markerWidth:"6",markerHeight:"6",refX:"4",refY:"3",orient:"auto",children:e.jsx("polygon",{points:"0 0, 6 3, 0 6",fill:"#f59e0b"})})})]})}),e.jsx("p",{className:"text-center text-gray-400 text-sm mt-2",children:"Filters execute sequentially; after the servlet finishes, the response goes back through the filters in reverse order."})]}),e.jsxs("section",{ref:r=>t.current[2]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"⚙️ Filter API & Lifecycle"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["A filter must implement the ",e.jsx("code",{children:"javax.servlet.Filter"})," interface with three methods:"]}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"void init(FilterConfig filterConfig)"})," – called once when the filter is loaded (initialisation)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)"})," – core logic; call ",e.jsx("code",{children:"chain.doFilter()"})," to pass to next filter/servlet."]}),e.jsxs("li",{children:[e.jsx("code",{children:"void destroy()"})," – called before removal."]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(s,{fileModule:c,title:"LoggingFilter.java – Basic Filter Implementation",highlightLines:[10,12,13,18]})})]}),e.jsxs("section",{ref:r=>t.current[3]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"📌 Configuring Filters"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-mono text-purple-300",children:"1. Using web.xml"}),e.jsx("p",{className:"text-gray-300",children:"Define filter and filter-mapping elements."}),e.jsx("div",{className:"mt-2",children:e.jsx(s,{fileModule:h,title:"WEB-INF/web.xml (Filter Mapping)",highlightLines:[2,3,8,9,10]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-mono text-purple-300",children:"2. Using @WebFilter Annotation (Servlet 3.0+)"}),e.jsx("p",{className:"text-gray-300",children:"Simpler, no XML needed."}),e.jsx("div",{className:"mt-2",children:e.jsx(s,{fileModule:x,title:"AnnotationFilter.java – @WebFilter Example",highlightLines:[5,6,7]})})]})]}),e.jsx("div",{className:"mt-4 p-3 bg-purple-950/30 border-l-4 border-purple-500 rounded",children:e.jsxs("p",{className:"text-sm text-gray-200",children:["💡 ",e.jsx("strong",{children:"Tip:"})," For URL patterns, use ",e.jsx("code",{children:"urlPatterns"})," attribute (e.g., ",e.jsx("code",{children:'@WebFilter("/*")'}),"). You can also specify servlet names via ",e.jsx("code",{children:"servletNames"}),"."]})})]}),e.jsxs("section",{ref:r=>t.current[4]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"🔐 Real-world Filter Examples"}),e.jsxs("div",{className:"space-y-6 mt-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl text-purple-300",children:"Authentication Filter"}),e.jsx("p",{className:"text-gray-300",children:"Check if user is logged in; otherwise redirect to login page."}),e.jsx(s,{fileModule:d,title:"AuthenticationFilter.java",highlightLines:[12,13,14,18]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl text-purple-300",children:"Chaining Multiple Filters"}),e.jsx("p",{className:"text-gray-300",children:"Order matters. Logging → Auth → Compression."}),e.jsx(s,{fileModule:p,title:"ChainedFiltersDemo.java (Conceptual)",highlightLines:[8,9,10]})]})]})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"📦 FilterConfig – Getting Init Parameters"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Similar to ServletConfig, ",e.jsx("code",{children:"FilterConfig"})," provides ",e.jsx("code",{children:"getInitParameter()"})," to read filter-specific parameters defined in ",e.jsx("code",{children:"web.xml"})," or via ",e.jsx("code",{children:"@WebFilter(initParams = ...)"}),"."]}),e.jsx("div",{className:"mt-3 p-3 bg-gray-800 rounded-lg",children:e.jsxs("p",{className:"font-mono text-sm",children:["// In web.xml: <init-param><param-name>excludePages</param-name><param-value>/login,/register</param-value></init-param>",e.jsx("br",{}),'// In filter: String exclude = filterConfig.getInitParameter("excludePages");']})})]}),e.jsxs("section",{ref:r=>t.current[5]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"⚠️ Common Pitfalls (Beginners)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300 mt-3",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Forgetting ",e.jsx("code",{children:"chain.doFilter()"}),":"]})," Without calling it, the request won't proceed – stuck filter."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Modifying response after committing:"})," Once response is committed, adding headers or changing status fails."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Incorrect order of filters:"})," Authentication should come before logging sensitive data, etc."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Not handling exceptions in ",e.jsx("code",{children:"doFilter()"}),":"]})," Uncaught exceptions break the chain – wrap in try/catch and log appropriately."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"HttpServletRequest"}),"/",e.jsx("code",{children:"HttpServletResponse"})," casting without checking:"]})," Filters can be applied to non-HTTP requests (e.g., JSP includes). Safe cast: ",e.jsx("code",{children:"if (request instanceof HttpServletRequest)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance issues:"})," Heavy operations in a filter (e.g., DB calls) for every request degrade performance."]})]})]}),e.jsxs("section",{ref:r=>t.current[6]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"✅ Best Practices (Industry)"}),e.jsxs("ul",{className:"list-decimal list-inside space-y-2 text-gray-300 mt-3",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Keep filters lightweight and fast"})," – cache initialised data, avoid I/O per request."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use filter for cross‑cutting concerns only"})," – logging, security, encoding, compression, caching."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Define order explicitly"})," – use ",e.jsx("code",{children:"<filter-mapping>"})," order in web.xml or ",e.jsx("code",{children:"@WebFilter"})," with ",e.jsx("code",{children:"filterName"})," and ordering rules (Servlet 3.0+)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Provide init parameters for configuration"})," – e.g., exclude paths, log level."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Always call ",e.jsx("code",{children:"chain.doFilter()"})," inside a try‑finally"]})," to ensure cleanup (e.g., timing)."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"HttpServletResponseWrapper"})," to modify response content"]})," (advanced use: add headers, compress)."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Register filters for specific URL patterns, not ",e.jsx("code",{children:"/*"})," unnecessarily"]})," – reduces overhead."]})]})]}),e.jsxs("section",{ref:r=>t.current[7]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"📋 Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-4",children:["✅ Implement Filter interface with init, doFilter, destroy","✅ Call chain.doFilter() to proceed","✅ Define filter mapping (web.xml or @WebFilter)","✅ Understand filter lifecycle (init once per app)","✅ Use FilterConfig to read init parameters","✅ Order filters logically (auth before logging)","✅ Test with different URL patterns (/*, *.do, /admin/*)","✅ Avoid heavy operations inside doFilter","✅ Handle exceptions inside doFilter","✅ Use response wrappers for advanced modifications"].map((r,i)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-200 text-sm",children:[e.jsx("span",{className:"text-purple-400",children:"✓"})," ",r]},i))})]}),e.jsxs("section",{ref:r=>t.current[8]=r,className:"bg-gray-900/50 rounded-2xl p-6 border border-purple-500/30",children:[e.jsx("h2",{className:"text-xl font-semibold text-purple-400",children:"🧠 Hints – Think Like a Pro"}),e.jsxs("ul",{className:"space-y-2 text-gray-300 italic",children:[e.jsxs("li",{children:["🔍 ",e.jsx("strong",{children:"Observe carefully:"})," Add a logging filter to your app – see console output for every request. Notice the order if you add two filters."]}),e.jsxs("li",{children:["⚙️ ",e.jsx("strong",{children:"Try changing:"})," Swap filter mappings order in web.xml – how does the output change?"]}),e.jsxs("li",{children:["📂 ",e.jsx("strong",{children:"Think about:"})," Why does ",e.jsx("code",{children:"chain.doFilter()"})," need to be called exactly once? What happens if you call it twice?"]}),e.jsxs("li",{children:["🧩 ",e.jsx("strong",{children:"Debug:"})," A filter is not executing – check mapping URL pattern, annotation presence, and application deployment (ensure classes compiled)."]})]})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-purple-400",children:"📚 Filter Ordering (Servlet 3.0+)"}),e.jsxs("p",{className:"text-gray-300",children:["When using annotations, order is not guaranteed. Use ",e.jsx("code",{children:"web.xml"})," for explicit ordering, or add ",e.jsx("code",{children:"<absolute-ordering>"})," element. Alternatively, use ",e.jsx("code",{children:"@WebFilter"})," with ",e.jsx("code",{children:"filterName"})," and ",e.jsx("code",{children:"@ServletFilter"})," (JSR 375) for security filters."]})]}),e.jsx(a,{title:"Servlet Filters FAQs",questions:g}),e.jsx("div",{className:"mt-8",children:e.jsx(o,{note:"Filters are one of the most powerful yet underused features in servlets. Students often underestimate their importance. Show them real examples: request logging, authentication, setting character encoding (UTF-8 for all responses), and caching headers. Emphasise that filters are not business logic – they are infrastructure. A common exercise: build a filter that measures request processing time and logs slow requests. Remind them to always call chain.doFilter() and to be careful with response commits. Also, encourage using annotations for quick prototyping, but web.xml for enterprise apps where ordering matters."})}),e.jsx("footer",{className:"text-center text-gray-500 text-sm pt-8 border-t border-gray-800",children:"Topic 5: Filters – Part of Servlet Mastery Series"})]})})};export{S as default};
