import{r as a,j as e}from"./index-DjvKv1PW.js";import{J as s}from"./JavaFileLoader-_5MLrpTH.js";import{F as i}from"./FAQTemplate-ByAk5Pae.js";import{T as l}from"./TeacherSukantaHui-L5TKwlgX.js";import"./JavaCodeBlock-DFloxm48.js";import"./prism-BF08qRUT.js";import"./browser-BNqNpsb2.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";import"./git-branch-Cz06tWqr.js";const c=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.annotation.*;\r
import javax.servlet.http.*;\r
import java.util.concurrent.*;\r
\r
@WebServlet(urlPatterns = "/async", asyncSupported = true)\r
public class AsyncServlet extends HttpServlet {\r
    private ExecutorService executor = Executors.newCachedThreadPool();\r
\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        // Start asynchronous context\r
        AsyncContext asyncCtx = req.startAsync();\r
        // Set timeout (optional)\r
        asyncCtx.setTimeout(10000); // 10 seconds\r
\r
        // Submit long-running task to executor\r
        executor.submit(() -> {\r
            try {\r
                // Simulate long processing\r
                Thread.sleep(3000);\r
                String result = "Async task completed!";\r
                // Get response writer\r
                PrintWriter out = asyncCtx.getResponse().getWriter();\r
                out.println("<h2>" + result + "</h2>");\r
                // Complete the async processing\r
                asyncCtx.complete();\r
            } catch (Exception e) {\r
                e.printStackTrace();\r
                asyncCtx.complete();\r
            }\r
        });\r
    }\r
\r
    @Override\r
    public void destroy() {\r
        executor.shutdown();\r
    }\r
}`,d=`import javax.servlet.*;\r
import javax.servlet.annotation.*;\r
\r
@WebListener\r
public class CustomAsyncListener implements AsyncListener {\r
    @Override\r
    public void onStartAsync(AsyncEvent event) throws IOException {\r
        System.out.println("Async started: " + event.getAsyncContext().getRequest().getRequestURI());\r
    }\r
\r
    @Override\r
    public void onComplete(AsyncEvent event) throws IOException {\r
        System.out.println("Async completed");\r
    }\r
\r
    @Override\r
    public void onTimeout(AsyncEvent event) throws IOException {\r
        System.out.println("Async timeout! Sending error response.");\r
        event.getAsyncContext().getResponse().sendError(HttpServletResponse.SC_GATEWAY_TIMEOUT);\r
        event.getAsyncContext().complete();\r
    }\r
\r
    @Override\r
    public void onError(AsyncEvent event) throws IOException {\r
        System.out.println("Async error: " + event.getThrowable().getMessage());\r
        event.getAsyncContext().getResponse().sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);\r
        event.getAsyncContext().complete();\r
    }\r
}`,h=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.annotation.*;\r
import javax.servlet.http.*;\r
import java.util.concurrent.*;\r
\r
@WebServlet(urlPatterns = "/longtask", asyncSupported = true)\r
public class LongRunningTask extends HttpServlet {\r
    private static final int THREAD_POOL_SIZE = 10;\r
    private ExecutorService executor = Executors.newFixedThreadPool(THREAD_POOL_SIZE);\r
\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        AsyncContext asyncCtx = req.startAsync();\r
        asyncCtx.setTimeout(30000); // 30 seconds\r
\r
        executor.submit(() -> {\r
            try {\r
                // Simulate heavy task: database export, file processing, etc.\r
                for (int i = 0; i < 10; i++) {\r
                    System.out.println("Processing step " + i);\r
                    Thread.sleep(1000);\r
                }\r
                PrintWriter out = asyncCtx.getResponse().getWriter();\r
                out.println("Heavy task finished successfully!");\r
                asyncCtx.complete();\r
            } catch (Exception e) {\r
                e.printStackTrace();\r
                asyncCtx.complete();\r
            }\r
        });\r
    }\r
\r
    @Override\r
    public void destroy() {\r
        executor.shutdownNow();\r
    }\r
}`,u=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.annotation.*;\r
import javax.servlet.http.*;\r
\r
@WebServlet(urlPatterns = "/timeout", asyncSupported = true)\r
public class AsyncTimeoutServlet extends HttpServlet {\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        AsyncContext asyncCtx = req.startAsync();\r
        // Set very short timeout to demonstrate timeout handling\r
        asyncCtx.setTimeout(2000); // 2 seconds\r
\r
        // Add a listener to handle timeout gracefully\r
        asyncCtx.addListener(new AsyncListener() {\r
            @Override\r
            public void onTimeout(AsyncEvent event) throws IOException {\r
                System.out.println("Timeout triggered!");\r
                event.getAsyncContext().getResponse().setContentType("text/html");\r
                event.getAsyncContext().getResponse().getWriter().println("<h2>Request timed out</h2>");\r
                event.getAsyncContext().complete();\r
            }\r
            @Override public void onStartAsync(AsyncEvent event) {}\r
            @Override public void onComplete(AsyncEvent event) {}\r
            @Override public void onError(AsyncEvent event) {}\r
        });\r
\r
        // Simulate a long task that will exceed timeout\r
        asyncCtx.start(() -> {\r
            try {\r
                Thread.sleep(5000); // longer than timeout\r
            } catch (InterruptedException e) {}\r
        });\r
    }\r
}`,x=`<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"\r
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee \r
         http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"\r
         version="4.0">\r
\r
    <servlet>\r
        <servlet-name>AsyncServlet</servlet-name>\r
        <servlet-class>com.example.AsyncServlet</servlet-class>\r
        <async-supported>true</async-supported>\r
    </servlet>\r
    <servlet-mapping>\r
        <servlet-name>AsyncServlet</servlet-name>\r
        <url-pattern>/async</url-pattern>\r
    </servlet-mapping>\r
\r
    <filter>\r
        <filter-name>AsyncFilter</filter-name>\r
        <filter-class>com.example.AsyncFilter</filter-class>\r
        <async-supported>true</async-supported>\r
    </filter>\r
    <filter-mapping>\r
        <filter-name>AsyncFilter</filter-name>\r
        <url-pattern>/*</url-pattern>\r
        <dispatcher>REQUEST</dispatcher>\r
        <dispatcher>ASYNC</dispatcher>\r
    </filter-mapping>\r
</web-app>`,p=[{question:"What is the main purpose of asynchronous servlets?",shortAnswer:"To free container threads while long-running operations execute in separate threads, improving scalability.",explanation:"Async servlets release the original request thread, allowing it to handle other requests.",hint:"Think of a restaurant waiter taking orders and then a chef cooking – the waiter is free to take more orders.",level:"basic",codeExample:"@WebServlet(asyncSupported=true) ... AsyncContext ctx = request.startAsync();"},{question:"Which annotation attribute enables asynchronous support in a servlet?",shortAnswer:"asyncSupported = true in @WebServlet.",explanation:"If not set, calling startAsync() throws IllegalStateException.",level:"basic"},{question:"What method on HttpServletRequest starts asynchronous processing?",shortAnswer:"startAsync()",explanation:"It returns an AsyncContext object that controls the async operation.",level:"basic"},{question:"What happens if you don't call complete() on AsyncContext?",shortAnswer:"The response remains open until timeout, then container completes it with an error.",explanation:"You must explicitly complete to send the response.",level:"intermediate"},{question:"How do you set a timeout for an asynchronous request?",shortAnswer:"asyncContext.setTimeout(milliseconds);",explanation:"Default timeout is container-specific (usually 30 seconds).",level:"intermediate"},{question:"What is AsyncListener and when would you use it?",shortAnswer:"An interface to receive callbacks for async events: onStartAsync, onComplete, onTimeout, onError.",explanation:"Used for logging, cleanup, or custom timeout handling.",level:"advanced"},{question:"Can you use asynchronous processing with filters?",shortAnswer:"Yes, filters must also declare asyncSupported=true and can wrap the request/response.",explanation:"Filters with async support can intercept async dispatch.",level:"intermediate"},{question:"What is the difference between AsyncContext.start() and using a separate thread directly?",shortAnswer:"start() is a convenience to run a task using a container-managed thread (not always recommended).",explanation:"Better to use an application-managed executor to control thread pool.",level:"advanced"},{question:"Why should you avoid using thread pools that grow unbounded?",shortAnswer:"They can cause resource exhaustion and degrade performance.",explanation:"Use a fixed thread pool or bounded queue.",level:"intermediate"},{question:"Can you forward or include after calling startAsync()?",shortAnswer:"Yes, using AsyncContext.dispatch() instead of RequestDispatcher.",explanation:"dispatch() allows forwarding to another resource in async mode.",level:"advanced"},{question:"What happens to the response if you write to it before calling complete()?",shortAnswer:"It's buffered and sent when complete() is called, but you can also write incrementally.",explanation:"Premature flushing may commit the response prematurely.",level:"intermediate"},{question:"Is asynchronous processing suitable for CPU-bound tasks?",shortAnswer:"Not really; it won't improve throughput and may add overhead.",explanation:"Async is best for I/O-bound operations waiting on external services.",level:"intermediate"},{question:"How does async processing affect session management?",shortAnswer:"Session is still available, but be careful with concurrent access.",explanation:"Multiple async tasks accessing same session need synchronization.",level:"advanced"},{question:"Can you use async servlets with WebSockets?",shortAnswer:"Yes, but WebSockets already provide asynchronous messaging; servlet async is more for HTTP long-polling.",explanation:"They can be complementary in some architectures.",level:"advanced"},{question:"What is the default timeout for an AsyncContext?",shortAnswer:"Container-dependent; typical default is 30 seconds.",explanation:"Set explicitly for predictable behavior.",level:"intermediate"},{question:"What is the purpose of AsyncContext.dispatch()?",shortAnswer:"To forward the request to another resource (JSP, servlet) within the same async cycle.",explanation:"The dispatched resource will see the same request/response objects.",level:"advanced"},{question:"Can multiple async tasks write to the same response?",shortAnswer:"No, only one task should call complete() and write the response.",explanation:"Concurrent writes lead to unpredictable output.",level:"advanced"},{question:"What is the difference between Servlet 3.0 and Servlet 3.1 async features?",shortAnswer:"Servlet 3.0 added basic async; 3.1 added non-blocking I/O (ReadListener/WriteListener).",explanation:"Non-blocking I/O allows reading/writing request/response data asynchronously.",level:"advanced"},{question:"How do you handle errors in an async task?",shortAnswer:"Catch exceptions and call asyncContext.complete() with error response or dispatch to error page.",explanation:"Uncaught exceptions in worker threads won't propagate to container.",level:"intermediate"},{question:"What happens if you call asyncContext.start() from within another async task?",shortAnswer:"It starts another async operation, but generally not recommended due to nesting complexity.",explanation:"You can chain async operations, but manage carefully.",level:"advanced"},{question:"How does async processing affect the number of concurrent requests a server can handle?",shortAnswer:"It dramatically increases concurrency by freeing container threads during I/O waits.",explanation:"Example: Tomcat with 200 threads can handle 2000+ concurrent slow requests.",level:"intermediate"},{question:"What is the purpose of AsyncEvent.getSuppliedRequest()?",shortAnswer:"It returns the request object originally supplied to startAsync() (may be wrapped).",explanation:"Useful if filters have wrapped the request.",level:"advanced"},{question:"Can you reuse the same AsyncContext after complete()?",shortAnswer:"No, it becomes invalid; any further calls throw IllegalStateException.",explanation:"Once complete, the async cycle ends.",level:"intermediate"},{question:"Is it possible to have asynchronous filters?",shortAnswer:"Yes, filters with asyncSupported can be called during async dispatch.",explanation:"Set <async-supported>true</async-supported> in web.xml.",level:"advanced"},{question:"What is the difference between AsyncContext.start() and submitting a task to an ExecutorService?",shortAnswer:"start() uses container's managed thread pool; ExecutorService gives you control over thread management.",explanation:"For production, prefer ExecutorService to avoid container thread pool exhaustion.",level:"advanced"},{question:"How do you pass data from the async task back to the original request?",shortAnswer:"Use request.setAttribute() before dispatch or write directly to response.",explanation:"Attributes set in async task are visible to dispatched resources.",level:"intermediate"},{question:"What happens if a filter without asyncSupported receives an async request?",shortAnswer:"The filter is bypassed during async dispatch.",explanation:"Filters must declare asyncSupported to participate in async cycles.",level:"advanced"},{question:"Can you call startAsync() inside an async task's run() method?",shortAnswer:"No, startAsync() must be called from the original container thread or initially from service().",explanation:"The request is already in async mode; starting another requires careful handling.",level:"advanced"},{question:"What is the typical use case for async servlets in modern web apps?",shortAnswer:"Long-polling, server-sent events, or handling slow external API calls.",explanation:"Modern alternatives include WebSockets and reactive frameworks.",level:"intermediate"},{question:"How do you test async servlets in unit tests?",shortAnswer:"Use mock objects (e.g., Mockito) or a lightweight container like embedded Tomcat with async support.",explanation:"Testing async requires simulating timeouts and concurrency.",level:"advanced"}],q=()=>{const n=a.useRef([]);return a.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&(o.target.classList.add("animate-slide-up"),t.unobserve(o.target))})},{threshold:.1});return n.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]),e.jsx("div",{className:"dark min-h-screen bg-gray-950 text-gray-100 font-sans leading-relaxed p-6 md:p-10",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("header",{className:"text-center space-y-4 animate-slide-up",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"Asynchronous Servlets"}),e.jsx("p",{className:"text-lg text-gray-300 max-w-2xl mx-auto",children:"Handling long‑running requests without blocking container threads – scalable and non‑blocking I/O with Servlet 3.0+ asynchronous processing."})]}),e.jsxs("section",{ref:t=>n.current[0]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-red-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," What are Asynchronous Servlets?"]}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Traditional servlets use one thread per request. If a request involves a long operation (e.g., database query, web service call, file processing), the container thread remains occupied, leading to poor scalability. ",e.jsx("strong",{children:"Asynchronous servlets"})," allow you to release the container thread while the operation continues in a separate thread, then resume the response later."]}),e.jsx("p",{className:"mt-3 text-gray-300",children:"Introduced in Servlet 3.0 (and enhanced in 3.1 with non‑blocking I/O), this feature is essential for applications with many concurrent long‑polling, chat, or data‑processing requests."}),e.jsx("div",{className:"mt-4 p-4 bg-gray-800/50 rounded-xl border-l-4 border-red-500",children:e.jsxs("p",{className:"text-sm italic text-gray-300",children:["📘 ",e.jsx("strong",{children:"Real‑world analogy:"})," In Barrackpore High School, a teacher (container thread) takes a student's assignment (request). Instead of sitting idle while the assignment is graded (long task), the teacher starts a teaching assistant (worker thread) and immediately helps the next student. When the assistant finishes, the teacher returns the graded work to the first student."]})})]}),e.jsxs("section",{ref:t=>n.current[1]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-red-400",children:"🔄 Synchronous vs Asynchronous Processing"}),e.jsxs("div",{className:"mt-6 flex flex-wrap justify-center gap-8",children:[e.jsxs("svg",{viewBox:"0 0 320 200",className:"w-80 h-auto",children:[e.jsx("rect",{x:"20",y:"20",width:"280",height:"160",rx:"10",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("text",{x:"160",y:"45",textAnchor:"middle",fill:"#fca5a5",fontWeight:"bold",fontSize:"14",children:"❌ Synchronous"}),e.jsx("rect",{x:"40",y:"60",width:"80",height:"30",rx:"5",fill:"#2d3748",stroke:"#f87171"}),e.jsx("text",{x:"80",y:"80",textAnchor:"middle",fill:"#fca5a5",fontSize:"11",children:"Request A"}),e.jsx("rect",{x:"40",y:"100",width:"80",height:"30",rx:"5",fill:"#2d3748",stroke:"#f87171"}),e.jsx("text",{x:"80",y:"120",textAnchor:"middle",fill:"#fca5a5",fontSize:"11",children:"Request B"}),e.jsx("text",{x:"160",y:"80",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"Container Thread"}),e.jsx("text",{x:"160",y:"110",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"(Blocked)"}),e.jsx("text",{x:"240",y:"80",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"Long task →"}),e.jsx("text",{x:"160",y:"150",textAnchor:"middle",fill:"#f87171",fontSize:"10",children:"Thread wasted while waiting"})]}),e.jsxs("svg",{viewBox:"0 0 320 200",className:"w-80 h-auto",children:[e.jsx("rect",{x:"10",y:"10",width:"300",height:"180",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"160",y:"35",textAnchor:"middle",fill:"#6ee7b7",fontWeight:"bold",fontSize:"14",children:"✅ Asynchronous"}),e.jsx("rect",{x:"30",y:"50",width:"80",height:"25",rx:"5",fill:"#2d3748",stroke:"#34d399"}),e.jsx("text",{x:"70",y:"67",textAnchor:"middle",fill:"#6ee7b7",fontSize:"10",children:"Request A"}),e.jsx("rect",{x:"30",y:"80",width:"80",height:"25",rx:"5",fill:"#2d3748",stroke:"#34d399"}),e.jsx("text",{x:"70",y:"97",textAnchor:"middle",fill:"#6ee7b7",fontSize:"10",children:"Request B"}),e.jsx("rect",{x:"30",y:"110",width:"80",height:"25",rx:"5",fill:"#2d3748",stroke:"#34d399"}),e.jsx("text",{x:"70",y:"127",textAnchor:"middle",fill:"#6ee7b7",fontSize:"10",children:"Request C"}),e.jsx("text",{x:"160",y:"70",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"Container Thread"}),e.jsx("text",{x:"160",y:"100",textAnchor:"middle",fill:"#34d399",fontSize:"11",children:"Released early"}),e.jsx("text",{x:"250",y:"70",textAnchor:"middle",fill:"#fcd34d",fontSize:"10",children:"Worker Pool"}),e.jsx("rect",{x:"220",y:"85",width:"70",height:"20",rx:"4",fill:"#2d3748",stroke:"#fcd34d"}),e.jsx("text",{x:"255",y:"100",textAnchor:"middle",fill:"#fef08a",fontSize:"9",children:"Async task"}),e.jsx("text",{x:"160",y:"150",textAnchor:"middle",fill:"#34d399",fontSize:"10",children:"More concurrent requests possible"})]})]})]}),e.jsxs("section",{ref:t=>n.current[2]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-red-400",children:"🔧 Enabling Asynchronous Support"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Two steps: mark the servlet with ",e.jsx("code",{children:"asyncSupported = true"})," in ",e.jsx("code",{children:"@WebServlet"})," or in ",e.jsx("code",{children:"web.xml"}),". Then call ",e.jsx("code",{children:"request.startAsync()"})," to obtain an ",e.jsx("code",{children:"AsyncContext"}),"."]}),e.jsx("div",{className:"mt-5",children:e.jsx(s,{fileModule:c,title:"AsyncServlet.java – Basic Async Example",highlightLines:[5,6,12,13,14,20]})}),e.jsx("div",{className:"mt-4 p-3 bg-red-950/30 border-l-4 border-red-500 rounded",children:e.jsxs("p",{className:"text-sm text-gray-200",children:["💡 ",e.jsx("strong",{children:"Important:"})," The servlet's ",e.jsx("code",{children:"service()"})," method must exit after starting async. Do ",e.jsx("strong",{children:"not"})," write to response before calling ",e.jsx("code",{children:"asyncContext.complete()"}),"."]})})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-red-400",children:"📦 AsyncContext – The Core Object"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 mt-3 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"ServletRequest getRequest()"})," – get original request (wrapped)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ServletResponse getResponse()"})," – get original response."]}),e.jsxs("li",{children:[e.jsx("code",{children:"void start(Runnable run)"})," – dispatch a thread to process the async task."]}),e.jsxs("li",{children:[e.jsx("code",{children:"void complete()"})," – finish the async processing, commit response."]}),e.jsxs("li",{children:[e.jsx("code",{children:"void dispatch(String path)"})," – forward to another resource (e.g., JSP)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"void setTimeout(long timeoutMs)"})," / ",e.jsx("code",{children:"long getTimeout()"})," – manage timeout."]}),e.jsxs("li",{children:[e.jsx("code",{children:"void addListener(AsyncListener listener)"})," – listen for async events."]})]})]}),e.jsxs("section",{ref:t=>n.current[3]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-red-400",children:"⏱️ Timeout and Error Handling"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["If an async operation takes too long, the container will call ",e.jsx("code",{children:"AsyncListener.onTimeout()"})," and complete the response with an error. You can set a timeout or implement custom logic."]}),e.jsx(s,{fileModule:u,title:"AsyncTimeoutServlet.java – Setting Timeout",highlightLines:[12,13,20,21,22]})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-red-400",children:"👂 AsyncListener – Monitor Async Lifecycle"}),e.jsx("p",{className:"mt-3 text-gray-300",children:"Receive callbacks on async completion, timeout, error, or start. Useful for logging or resource cleanup."}),e.jsx(s,{fileModule:d,title:"CustomAsyncListener.java – Logging async events",highlightLines:[6,7,8,12]})]}),e.jsxs("section",{ref:t=>n.current[4]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-red-400",children:"🏭 Executor Pattern with Async Servlets"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Instead of starting raw threads, use a shared thread pool (e.g., ",e.jsx("code",{children:"ExecutorService"}),"). This prevents resource exhaustion."]}),e.jsx(s,{fileModule:h,title:"LongRunningTask.java – Using ExecutorService",highlightLines:[9,16,17]})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-red-400",children:"📄 Configuring Async in web.xml"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["If you prefer XML over annotations, add ",e.jsx("code",{children:"<async-supported>true</async-supported>"})," to servlet and filter definitions."]}),e.jsx(s,{fileModule:x,title:"web.xml – Async Configuration",highlightLines:[4,5,9,10]})]}),e.jsxs("section",{ref:t=>n.current[5]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-red-400",children:"⚠️ Common Pitfalls (Beginners)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300 mt-3",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Omitting ",e.jsx("code",{children:"asyncSupported=true"})]})," – ",e.jsx("code",{children:"request.startAsync()"})," throws ",e.jsx("code",{children:"IllegalStateException"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Not calling ",e.jsx("code",{children:"complete()"})]})," – The response hangs; client waits until timeout."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accessing request/response after container thread returns"})," – The original request/response objects are still valid (they are wrapped), but you must not rely on thread-local data."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Sharing ",e.jsx("code",{children:"AsyncContext"})," across threads without synchronization"]})," – Only one thread should call ",e.jsx("code",{children:"complete()"})," or ",e.jsx("code",{children:"dispatch()"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Starting too many threads without a pool"})," – Can exhaust server resources; always use an ",e.jsx("code",{children:"ExecutorService"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Handling exceptions in async threads"})," – Uncaught exceptions won't propagate to the container; you must manually call ",e.jsx("code",{children:"asyncContext.complete()"})," with error."]})]})]}),e.jsxs("section",{ref:t=>n.current[6]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-red-400",children:"✅ Best Practices (Industry)"}),e.jsxs("ul",{className:"list-decimal list-inside space-y-2 text-gray-300 mt-3",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always set a timeout"})," – prevent infinite hanging requests."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use a dedicated thread pool"})," – ",e.jsx("code",{children:"Executors.newCachedThreadPool()"})," or a fixed pool sized appropriately."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Implement ",e.jsx("code",{children:"AsyncListener"})," for critical monitoring"]})," – log timeouts and errors."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Do not hold references to ",e.jsx("code",{children:"HttpSession"})," or other request-scoped objects longer than necessary"]})," – they may cause memory leaks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Consider using non‑blocking I/O (Servlet 3.1)"})," – ",e.jsx("code",{children:"ReadListener"})," / ",e.jsx("code",{children:"WriteListener"})," for streaming large data."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test with load tools"})," – async servlets can improve throughput, but misconfiguration can degrade performance."]})]})]}),e.jsxs("section",{ref:t=>n.current[7]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-red-400",children:"📋 Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-4",children:["✅ Add asyncSupported=true to @WebServlet (or web.xml)","✅ Call request.startAsync() inside service()","✅ Store AsyncContext for later completion","✅ Always call asyncContext.complete() when done","✅ Set timeout to avoid hanging requests","✅ Use executor service, not raw threads","✅ Implement AsyncListener for error handling","✅ Avoid writing to response before complete()","✅ Handle exceptions in worker threads","✅ Test with concurrent load to measure improvement"].map((t,r)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-200 text-sm",children:[e.jsx("span",{className:"text-red-400",children:"✓"})," ",t]},r))})]}),e.jsxs("section",{ref:t=>n.current[8]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-red-500/30",children:[e.jsx("h2",{className:"text-xl font-semibold text-red-400",children:"🧠 Hints – Think Like a Pro"}),e.jsxs("ul",{className:"space-y-2 text-gray-300 italic",children:[e.jsxs("li",{children:["🔍 ",e.jsx("strong",{children:"Observe carefully:"})," In server logs, note that the request thread exits quickly while async task runs on another thread."]}),e.jsxs("li",{children:["⚙️ ",e.jsx("strong",{children:"Try changing:"})," Remove ",e.jsx("code",{children:"asyncSupported=true"})," and see the IllegalStateException."]}),e.jsxs("li",{children:["📂 ",e.jsx("strong",{children:"Think about:"})," How would you implement a chat application where clients long-poll for new messages?"]}),e.jsxs("li",{children:["🧩 ",e.jsx("strong",{children:"Debug:"})," Use AsyncListener to log when timeout or error occurs – helps track misconfigured async tasks."]})]})]}),e.jsx(i,{title:"Asynchronous Servlets FAQs",questions:p}),e.jsx("div",{className:"mt-8",children:e.jsx(l,{note:"Asynchronous servlets are a game-changer for scalability. Students often think they magically make things faster – clarify that they free up container threads, not speed up individual requests. A great live demo: create a servlet that sleeps for 5 seconds synchronously vs asynchronously; show how many concurrent requests can be handled. Emphasise that async is not a silver bullet – only use for I/O-bound or long-polling tasks, not CPU-bound work. Also mention Servlet 3.1 non-blocking I/O for even better scalability."})}),e.jsx("footer",{className:"text-center text-gray-500 text-sm pt-8 border-t border-gray-800",children:"Topic 9: Asynchronous Servlets – Part of Servlet Mastery Series"})]})})};export{q as default};
