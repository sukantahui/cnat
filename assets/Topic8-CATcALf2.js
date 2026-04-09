import{j as e}from"./index-DLefW0Tp.js";import{c as t}from"./clsx-B-dksMZM.js";import{J as s}from"./JavaFileLoader-Bddd4QbW.js";import"./JavaCodeBlock-CGUYzLjP.js";import"./prism-CzJDobEc.js";import"./browser-COpx1UKX.js";import"./prism-java-BwO6k4I_.js";const n=`import java.io.IOException;\r
import javax.servlet.ServletException;\r
import javax.servlet.annotation.WebServlet;\r
import javax.servlet.http.HttpServlet;\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
\r
/**\r
 * Demonstrates the servlet lifecycle methods.\r
 * Deploy this servlet and watch the console logs to see when the container\r
 * calls init(), service(), and destroy().\r
 */\r
@WebServlet("/lifecycle")\r
public class LifecycleDemoServlet extends HttpServlet {\r
\r
    private int requestCount = 0;\r
\r
    @Override\r
    public void init() throws ServletException {\r
        System.out.println("LifecycleDemoServlet: init() called. Servlet initialized.");\r
    }\r
\r
    @Override\r
    protected void service(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        requestCount++;\r
        System.out.println("LifecycleDemoServlet: service() called. Request count: " + requestCount);\r
        // Let the superclass handle the HTTP method dispatch\r
        super.service(req, resp);\r
    }\r
\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        resp.setContentType("text/plain");\r
        resp.getWriter().println("LifecycleDemoServlet: doGet() called. Request count: " + requestCount);\r
    }\r
\r
    @Override\r
    public void destroy() {\r
        System.out.println("LifecycleDemoServlet: destroy() called. Servlet being taken out of service.");\r
    }\r
}`,r=`import javax.servlet.ServletContextEvent;\r
import javax.servlet.ServletContextListener;\r
import javax.servlet.annotation.WebListener;\r
\r
/**\r
 * A ServletContextListener that is notified when the web application\r
 * is initialized or destroyed. Useful for setting up shared resources\r
 * (e.g., database connection pools) at startup and cleaning them up at shutdown.\r
 */\r
@WebListener\r
public class AppContextListener implements ServletContextListener {\r
\r
    @Override\r
    public void contextInitialized(ServletContextEvent sce) {\r
        System.out.println("AppContextListener: Web application started.");\r
        // Example: initialize a database connection pool\r
        sce.getServletContext().setAttribute("startTime", System.currentTimeMillis());\r
    }\r
\r
    @Override\r
    public void contextDestroyed(ServletContextEvent sce) {\r
        System.out.println("AppContextListener: Web application stopped.");\r
        // Example: close database connection pool\r
    }\r
}`,i=`import java.io.IOException;\r
import java.io.PrintWriter;\r
import javax.servlet.ServletConfig;\r
import javax.servlet.ServletContext;\r
import javax.servlet.ServletException;\r
import javax.servlet.annotation.WebServlet;\r
import javax.servlet.http.HttpServlet;\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
import javax.servlet.http.HttpSession;\r
\r
/**\r
 * Demonstrates accessing container-provided objects:\r
 * ServletConfig, ServletContext, HttpSession.\r
 */\r
@WebServlet("/container-demo")\r
public class ContainerDemoServlet extends HttpServlet {\r
\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
\r
        resp.setContentType("text/html");\r
        PrintWriter out = resp.getWriter();\r
\r
        // 1. ServletConfig: per-servlet configuration\r
        ServletConfig config = getServletConfig();\r
        String servletName = config.getServletName();\r
\r
        // 2. ServletContext: application-wide shared space\r
        ServletContext context = getServletContext();\r
        String serverInfo = context.getServerInfo();\r
\r
        // 3. HttpSession: user session (created by container)\r
        HttpSession session = req.getSession(true); // create if not exists\r
        Integer visitCount = (Integer) session.getAttribute("visitCount");\r
        if (visitCount == null) {\r
            visitCount = 1;\r
        } else {\r
            visitCount++;\r
        }\r
        session.setAttribute("visitCount", visitCount);\r
\r
        out.println("<html><body>");\r
        out.println("<h2>Container Demo</h2>");\r
        out.println("<p>Servlet name (from ServletConfig): " + servletName + "</p>");\r
        out.println("<p>Server info (from ServletContext): " + serverInfo + "</p>");\r
        out.println("<p>Your session visit count: " + visitCount + "</p>");\r
        out.println("</body></html>");\r
    }\r
}`;function x(){return e.jsxs("div",{className:"dark",children:[e.jsx("main",{className:t("min-h-screen bg-gray-50 px-4 py-12 font-sans leading-relaxed text-gray-800","dark:bg-gray-900 dark:text-gray-200","motion-safe:animate-[fadeIn_0.6s_ease-out]"),children:e.jsxs("div",{className:"mx-auto max-w-4xl space-y-8",children:[e.jsxs("header",{className:t("border-l-4 border-blue-600 pl-4","motion-safe:animate-[slideUp_0.5s_ease-out]"),children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Introduction to Servlet Containers"}),e.jsx("p",{className:"mt-2 text-lg text-gray-600 dark:text-gray-400",children:"The runtime environment for Java servlets."})]}),e.jsxs("section",{className:t("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[100ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"What is a Servlet Container?"}),e.jsxs("p",{className:"mb-3",children:["A ",e.jsx("span",{className:"font-bold text-blue-600 dark:text-blue-400",children:"servlet container"})," (also called a web container) is the part of a web server that manages the lifecycle of servlets, maps URLs to servlets, and ensures that HTTP requests are properly delivered to and processed by servlets. It is the runtime environment for Java servlets and JSPs."]}),e.jsx("p",{children:"Popular examples include Apache Tomcat, Eclipse Jetty, and Undertow. A servlet container implements the Servlet specification (part of Java EE / Jakarta EE). It provides the infrastructure so that developers can focus on writing business logic inside servlets without worrying about low‑level networking, threading, or resource management."})]}),e.jsxs("section",{className:t("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[200ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Core Responsibilities of a Servlet Container"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Servlet Lifecycle Management:"})," The container loads servlet classes, instantiates them, calls ",e.jsx("code",{children:"init()"}),", manages service requests via ",e.jsx("code",{children:"service()"}),", and finally calls ",e.jsx("code",{children:"destroy()"})," when the servlet is taken out of service."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Request/Response Handling:"})," It creates ",e.jsx("code",{children:"HttpServletRequest"})," and ",e.jsx("code",{children:"HttpServletResponse"})," objects, passes them to the servlet's service method, and sends the response back to the client."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Multithreading Support:"})," The container typically assigns a separate thread to each request, allowing multiple clients to be served concurrently. (But beware of thread safety in servlets!)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Mapping URLs to Servlets:"})," It uses deployment descriptors (",e.jsx("code",{children:"web.xml"}),") or annotations (",e.jsx("code",{children:"@WebServlet"}),") to determine which servlet should handle a given URL pattern."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Security:"})," It can enforce authentication, authorization, and secure communication (SSL) based on declarative security settings."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"JSP Support:"})," The container translates JSP pages into servlets, compiles them, and executes them."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Session Management:"})," It maintains HTTP sessions, usually via cookies or URL rewriting."]})]})]}),e.jsxs("section",{className:t("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[300ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"How a Servlet Container Works"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"650",height:"250",viewBox:"0 0 650 250",className:"max-w-full","aria-label":"Servlet container internal flow",children:[e.jsx("rect",{width:"650",height:"250",fill:"transparent"}),e.jsxs("g",{className:"transition-all duration-300 hover:opacity-80",children:[e.jsx("rect",{x:"20",y:"100",width:"80",height:"40",rx:"5",fill:"#f97316"}),e.jsx("text",{x:"40",y:"125",fill:"white",fontSize:"12",fontWeight:"bold",children:"Client"})]}),e.jsx("line",{x1:"100",y1:"120",x2:"160",y2:"120",stroke:"#4b5563",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"170",y:"50",width:"360",height:"140",rx:"10",fill:"#e5e7eb",stroke:"#3b82f6",strokeWidth:"2",className:"dark:fill-gray-700 dark:stroke-blue-400"}),e.jsx("text",{x:"280",y:"40",fill:"#3b82f6",fontSize:"14",fontWeight:"bold",children:"Servlet Container"}),e.jsx("rect",{x:"190",y:"80",width:"80",height:"30",rx:"5",fill:"#10b981"}),e.jsx("text",{x:"200",y:"100",fill:"white",fontSize:"10",children:"Connector"}),e.jsx("rect",{x:"300",y:"80",width:"80",height:"30",rx:"5",fill:"#8b5cf6"}),e.jsx("text",{x:"315",y:"100",fill:"white",fontSize:"10",children:"Servlet"}),e.jsx("rect",{x:"410",y:"80",width:"80",height:"30",rx:"5",fill:"#f59e0b"}),e.jsx("text",{x:"425",y:"100",fill:"white",fontSize:"10",children:"Thread Pool"}),e.jsx("rect",{x:"190",y:"130",width:"80",height:"30",rx:"5",fill:"#ef4444"}),e.jsx("text",{x:"200",y:"150",fill:"white",fontSize:"10",children:"Session"}),e.jsx("rect",{x:"300",y:"130",width:"80",height:"30",rx:"5",fill:"#3b82f6"}),e.jsx("text",{x:"310",y:"150",fill:"white",fontSize:"10",children:"JSP Engine"}),e.jsx("line",{x1:"270",y1:"95",x2:"300",y2:"95",stroke:"#4b5563",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("line",{x1:"380",y1:"95",x2:"410",y2:"95",stroke:"#4b5563",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("line",{x1:"230",y1:"110",x2:"230",y2:"130",stroke:"#4b5563",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("line",{x1:"340",y1:"110",x2:"340",y2:"130",stroke:"#4b5563",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#4b5563"})})})]})}),e.jsx("p",{className:"mt-4 text-center text-sm text-gray-600 dark:text-gray-400",children:"The container receives a request, assigns a thread, invokes the servlet, manages sessions, and may compile JSPs on the fly."})]}),e.jsxs("section",{className:t("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[400ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Popular Servlet Containers"}),e.jsxs("div",{className:"grid gap-4 sm:grid-cols-3",children:[e.jsxs("div",{className:"rounded-lg border-l-4 border-blue-600 bg-blue-50 p-3 dark:bg-blue-900/20",children:[e.jsx("h3",{className:"font-bold text-blue-800 dark:text-blue-300",children:"Apache Tomcat"}),e.jsx("p",{className:"text-sm",children:"The most widely used open‑source servlet container. Lightweight, implements Servlet and JSP specifications. Often used for production web applications."})]}),e.jsxs("div",{className:"rounded-lg border-l-4 border-green-600 bg-green-50 p-3 dark:bg-green-900/20",children:[e.jsx("h3",{className:"font-bold text-green-800 dark:text-green-300",children:"Eclipse Jetty"}),e.jsx("p",{className:"text-sm",children:"Highly scalable, often embedded in applications (e.g., inside a JAR). Used in large‑scale projects like Apache ActiveMQ."})]}),e.jsxs("div",{className:"rounded-lg border-l-4 border-purple-600 bg-purple-50 p-3 dark:bg-purple-900/20",children:[e.jsx("h3",{className:"font-bold text-purple-800 dark:text-purple-300",children:"Undertow"}),e.jsx("p",{className:"text-sm",children:"Flexible, high‑performance web server from JBoss. Used as the default in WildFly and can be embedded. Supports both blocking and non‑blocking I/O."})]})]})]}),e.jsxs("section",{className:t("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[500ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Servlet Lifecycle Managed by Container"}),e.jsxs("ol",{className:"list-inside list-decimal space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Loading and Instantiation:"})," The container loads the servlet class (usually on first request or at startup) and creates an instance."]}),e.jsxs("li",{children:[e.jsxs("span",{className:"font-bold",children:["Initialization (",e.jsx("code",{children:"init()"}),"):"]})," ","The container calls the ",e.jsx("code",{children:"init()"})," method once. Here the servlet can set up resources (database connections, etc.)."]}),e.jsxs("li",{children:[e.jsxs("span",{className:"font-bold",children:["Request Handling (",e.jsx("code",{children:"service()"}),"):"]})," ","For each request, the container calls the ",e.jsx("code",{children:"service()"})," method, which dispatches to ",e.jsx("code",{children:"doGet()"}),", ",e.jsx("code",{children:"doPost()"}),", etc. This may happen concurrently in multiple threads."]}),e.jsxs("li",{children:[e.jsxs("span",{className:"font-bold",children:["Destruction (",e.jsx("code",{children:"destroy()"}),"):"]})," ","When the container decides to take the servlet out of service (e.g., when shutting down or reloading the application), it calls ",e.jsx("code",{children:"destroy()"}),"to release resources."]})]})]}),e.jsxs("section",{className:t("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[600ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Java Code Examples: Interacting with the Container"}),e.jsxs("div",{className:"mb-6",children:[e.jsx(s,{fileModule:n,title:"LifecycleDemoServlet.java",highlightLines:[10,20,27]}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["A servlet that logs the lifecycle methods. When deployed, you can see when the container calls ",e.jsx("code",{children:"init()"}),", ",e.jsx("code",{children:"service()"}),", and",e.jsx("code",{children:"destroy()"}),"."]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(s,{fileModule:r,title:"AppContextListener.java",highlightLines:[8,15]}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["A ",e.jsx("code",{children:"ServletContextListener"})," that is notified when the web application is initialized or destroyed. Useful for setting up shared resources."]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(s,{fileModule:i,title:"ContainerDemoServlet.java",highlightLines:[12,18]}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["Demonstrates accessing container‑provided objects like",e.jsx("code",{children:"ServletContext"})," and ",e.jsx("code",{children:"HttpSession"}),"."]})]})]}),e.jsxs("section",{className:t("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[700ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Real‑World Context"}),e.jsxs("p",{children:["In a production environment, the servlet container is often hidden behind a reverse proxy (like Apache HTTPD or Nginx) that handles SSL termination, load balancing, and serving static content. The container runs the dynamic part of the application. For example, the Barrackpore college website might use Tomcat to run the student portal, while Nginx serves images and CSS. Understanding the container helps you troubleshoot issues like",e.jsx("code",{children:"OutOfMemoryError"})," (tune the JVM) or thread starvation (adjust the connector's maxThreads)."]})]}),e.jsxs("section",{className:t("rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20","border border-blue-200 dark:border-blue-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[800ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"💡 Tips & Tricks"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Know your container's configuration:"})," ","Tomcat uses ",e.jsx("code",{children:"server.xml"})," for global settings (connectors, host) and ",e.jsx("code",{children:"context.xml"})," per application."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use listeners for startup/shutdown tasks:"})," ","Instead of relying on a servlet's ",e.jsx("code",{children:"init()"})," (which runs per servlet), use ",e.jsx("code",{children:"ServletContextListener"})," for app‑wide setup."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Monitor thread pools:"})," If your application becomes slow under load, check the container's thread pool settings – you may need more threads or a different executor."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Embedded containers simplify development:"})," ","With Spring Boot, you can embed Tomcat or Jetty and run your app as a plain Java main method."]})]})]}),e.jsxs("section",{className:t("rounded-lg bg-red-50 p-6 dark:bg-red-900/20","border border-red-200 dark:border-red-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[900ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"⚠️ Common Mistakes Beginners Make"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Assuming servlets are thread‑safe:"})," The container uses multiple threads to call the same servlet instance. If you have instance variables, you must handle synchronization or risk data corruption."]}),e.jsxs("li",{children:[e.jsxs("span",{className:"font-medium",children:["Forgetting that ",e.jsx("code",{children:"init()"})," runs once:"]})," ","Putting per‑request code in ",e.jsx("code",{children:"init()"})," will not work as expected."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Misunderstanding context vs. session:"})," ","Storing user‑specific data in ",e.jsx("code",{children:"ServletContext"})," makes it visible to all users – a classic security/privacy mistake."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Not configuring connectors properly:"})," ","Using default HTTP connector without SSL in production exposes sensitive data."]})]})]}),e.jsxs("section",{className:t("rounded-lg bg-green-50 p-6 dark:bg-green-900/20","border border-green-200 dark:border-green-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[1000ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Keep servlets stateless:"})," If possible, avoid instance variables; use local variables or thread‑safe constructs."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use async servlets for long‑running tasks:"})," ","Servlet 3.0+ supports asynchronous processing to free up container threads."]}),e.jsxs("li",{children:[e.jsxs("span",{className:"font-medium",children:["Configure ",e.jsx("code",{children:"loadOnStartup"})," for critical servlets:"]})," ","If a servlet is heavy to initialize, set a positive integer in",e.jsx("code",{children:"@WebServlet(loadOnStartup=1)"})," so it starts with the app."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Tune the container for your workload:"})," ","Adjust thread pool size, connection timeouts, and buffer sizes based on expected traffic."]})]})]}),e.jsxs("section",{className:t("rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20","border border-yellow-200 dark:border-yellow-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[1100ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"📋 Mini Checklist – What to Remember"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsx("li",{children:"☐ Servlet container manages servlet lifecycle: init, service, destroy."}),e.jsx("li",{children:"☐ It creates request/response objects and maps URLs to servlets."}),e.jsx("li",{children:"☐ Multiple threads may call the same servlet – watch thread safety."}),e.jsx("li",{children:"☐ Popular containers: Tomcat, Jetty, Undertow."}),e.jsx("li",{children:"☐ Use listeners for app startup/shutdown."}),e.jsx("li",{children:"☐ Container configuration files (server.xml, context.xml) control its behavior."})]})]}),e.jsxs("section",{className:t("rounded-lg bg-indigo-50 p-6 dark:bg-indigo-900/20","border border-indigo-200 dark:border-indigo-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[1200ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"🤔 Think About…"}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"})," In the lifecycle, why does the container create only one instance of each servlet? (Hint: memory efficiency and shared state.)"]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Try changing this:"})," If you deployed the same servlet class with two different URL mappings, how many instances would the container create? Why?"]})]}),e.jsxs("section",{className:t("rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20","border border-purple-200 dark:border-purple-800","transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"👨‍🏫 Teacher’s Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Sukanta Hui"})," (27 years of experience in Programming, RDBMS, OS, and Web Development)"]}),e.jsxs("p",{className:"mb-2",children:["📧"," ",e.jsx("a",{href:"mailto:sukantahui@codernaccotax.co.in",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"sukantahui@codernaccotax.co.in"})]}),e.jsx("p",{children:"📞 7003756860"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"italic",children:"“When I first learned servlets, I imagined the container as a magic box. But it's really a well‑defined engine. Understanding its internals helps you write better code and debug faster. I've seen students, like Abhronila, wonder why a counter in a servlet instance variable didn't work as expected – the answer was thread safety. The container doesn't protect you from concurrency; it gives you the tools to handle it.”"}),e.jsxs("p",{className:"mt-2 text-sm",children:[e.jsx("span",{className:"font-semibold",children:"Remember:"})," The container is your partner, not a mystery."]})]})]})]})]})}),e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animation-delay-\\[100ms\\] { animation-delay: 100ms; }
        .animation-delay-\\[200ms\\] { animation-delay: 200ms; }
        .animation-delay-\\[300ms\\] { animation-delay: 300ms; }
        .animation-delay-\\[400ms\\] { animation-delay: 400ms; }
        .animation-delay-\\[500ms\\] { animation-delay: 500ms; }
        .animation-delay-\\[600ms\\] { animation-delay: 600ms; }
        .animation-delay-\\[700ms\\] { animation-delay: 700ms; }
        .animation-delay-\\[800ms\\] { animation-delay: 800ms; }
        .animation-delay-\\[900ms\\] { animation-delay: 900ms; }
        .animation-delay-\\[1000ms\\] { animation-delay: 1000ms; }
        .animation-delay-\\[1100ms\\] { animation-delay: 1100ms; }
        .animation-delay-\\[1200ms\\] { animation-delay: 1200ms; }

        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-\\[fadeIn_0\\.6s_ease-out\\],
          .motion-safe\\:animate-\\[slideUp_0\\.5s_ease-out\\] {
            animation: none !important;
          }
        }
      `})]})}export{x as default};
