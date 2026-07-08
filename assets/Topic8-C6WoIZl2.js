import{r as o,j as e}from"./index-gsr__VoO.js";import{J as n}from"./JavaFileLoader-Oc7S8mbZ.js";import{F as l}from"./FAQTemplate-CEVTVkoN.js";import{T as a}from"./TeacherSukantaHui-DvbQRa-c.js";import"./JavaCodeBlock-NUM7pLrI.js";import"./prism-CyJ4Ug4E.js";import"./browser--8xGBJJU.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";import"./git-branch-Bxm2eNpw.js";const c=`import javax.servlet.*;\r
import javax.servlet.annotation.*;\r
import java.sql.Connection;\r
import java.sql.DriverManager;\r
\r
@WebListener\r
public class AppStartupListener implements ServletContextListener {\r
    private Connection dbConnection;\r
\r
    @Override\r
    public void contextInitialized(ServletContextEvent sce) {\r
        System.out.println("Application starting...");\r
        // Initialize database connection\r
        try {\r
            Class.forName("com.mysql.jdbc.Driver");\r
            dbConnection = DriverManager.getConnection("jdbc:mysql://localhost/school", "user", "pass");\r
            sce.getServletContext().setAttribute("dbConnection", dbConnection);\r
        } catch (Exception e) {\r
            e.printStackTrace();\r
        }\r
        // Set app-wide attributes\r
        sce.getServletContext().setAttribute("appStartTime", System.currentTimeMillis());\r
    }\r
\r
    @Override\r
    public void contextDestroyed(ServletContextEvent sce) {\r
        System.out.println("Application shutting down...");\r
        // Clean up resources\r
        try { if (dbConnection != null) dbConnection.close(); } catch (Exception ignored) {}\r
    }\r
}`,d=`import javax.servlet.*;\r
import javax.servlet.annotation.*;\r
import javax.servlet.http.*;\r
\r
@WebListener\r
public class ActiveSessionCounter implements HttpSessionListener {\r
    private static int activeSessions = 0;\r
\r
    @Override\r
    public void sessionCreated(HttpSessionEvent se) {\r
        activeSessions++;\r
        se.getSession().getServletContext().setAttribute("activeSessions", activeSessions);\r
        System.out.println("Session created. Total active: " + activeSessions);\r
    }\r
\r
    @Override\r
    public void sessionDestroyed(HttpSessionEvent se) {\r
        activeSessions--;\r
        se.getSession().getServletContext().setAttribute("activeSessions", activeSessions);\r
        System.out.println("Session destroyed. Total active: " + activeSessions);\r
    }\r
}`,x=`import javax.servlet.*;\r
import javax.servlet.annotation.*;\r
import javax.servlet.http.*;\r
\r
@WebListener\r
public class RequestLoggingListener implements ServletRequestListener {\r
    private long startTime;\r
\r
    @Override\r
    public void requestInitialized(ServletRequestEvent sre) {\r
        startTime = System.nanoTime();\r
        HttpServletRequest req = (HttpServletRequest) sre.getServletRequest();\r
        System.out.println("Request started: " + req.getRequestURI());\r
    }\r
\r
    @Override\r
    public void requestDestroyed(ServletRequestEvent sre) {\r
        long duration = System.nanoTime() - startTime;\r
        HttpServletRequest req = (HttpServletRequest) sre.getServletRequest();\r
        System.out.println("Request finished: " + req.getRequestURI() + " in " + (duration / 1_000_000) + " ms");\r
    }\r
}`,h=`import javax.servlet.*;\r
import javax.servlet.annotation.*;\r
import javax.servlet.http.*;\r
\r
@WebListener\r
public class SessionAttributeTracker implements HttpSessionAttributeListener {\r
    @Override\r
    public void attributeAdded(HttpSessionBindingEvent event) {\r
        System.out.println("Session attribute added: " + event.getName() + " = " + event.getValue());\r
    }\r
\r
    @Override\r
    public void attributeRemoved(HttpSessionBindingEvent event) {\r
        System.out.println("Session attribute removed: " + event.getName());\r
    }\r
\r
    @Override\r
    public void attributeReplaced(HttpSessionBindingEvent event) {\r
        System.out.println("Session attribute replaced: " + event.getName() + " old value = " + event.getValue());\r
    }\r
}`,p=`import javax.servlet.*;\r
import javax.servlet.annotation.*;\r
import javax.servlet.http.*;\r
\r
@WebListener\r
public class AllInOneListener implements ServletContextListener, HttpSessionListener, ServletRequestListener {\r
    // ServletContextListener methods\r
    @Override public void contextInitialized(ServletContextEvent sce) {\r
        System.out.println("Context init (AllInOne)");\r
    }\r
    @Override public void contextDestroyed(ServletContextEvent sce) {\r
        System.out.println("Context destroyed");\r
    }\r
\r
    // HttpSessionListener methods\r
    @Override public void sessionCreated(HttpSessionEvent se) {\r
        System.out.println("Session created: " + se.getSession().getId());\r
    }\r
    @Override public void sessionDestroyed(HttpSessionEvent se) {\r
        System.out.println("Session destroyed: " + se.getSession().getId());\r
    }\r
\r
    // ServletRequestListener methods\r
    @Override public void requestInitialized(ServletRequestEvent sre) {\r
        System.out.println("Request initialized");\r
    }\r
    @Override public void requestDestroyed(ServletRequestEvent sre) {\r
        System.out.println("Request destroyed");\r
    }\r
}`,m=`<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"\r
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee \r
         http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"\r
         version="4.0">\r
    <listener>\r
        <listener-class>com.example.AppStartupListener</listener-class>\r
    </listener>\r
    <listener>\r
        <listener-class>com.example.ActiveSessionCounter</listener-class>\r
    </listener>\r
</web-app>`,u=[{question:"What is the purpose of ServletContextListener?",shortAnswer:"To react to web application startup and shutdown events.",explanation:"contextInitialized() runs when the app is deployed; contextDestroyed() when undeployed.",hint:"Used for one-time initialisation like database connection pools.",level:"basic",codeExample:"@WebListener public class MyListener implements ServletContextListener { ... }"},{question:"How do you register a listener without web.xml?",shortAnswer:"Use the @WebListener annotation on the listener class.",explanation:"The container scans for this annotation and auto-registers the listener.",level:"basic"},{question:"Which listener interface would you implement to track active user sessions?",shortAnswer:"HttpSessionListener",explanation:"Its sessionCreated() and sessionDestroyed() methods fire when sessions are created or invalidated.",level:"basic"},{question:"Can a single class implement multiple listener interfaces?",shortAnswer:"Yes, it will be registered for all implemented listener types.",explanation:"For example, a class can implement both ServletContextListener and HttpSessionListener.",level:"intermediate"},{question:"What method is called when a request is about to be processed?",shortAnswer:"ServletRequestListener.requestInitialized()",explanation:"It fires before any servlet or filter processes the request.",level:"basic"},{question:"How can you access the ServletContext inside a ServletContextListener?",shortAnswer:"Via ServletContextEvent.getServletContext()",level:"basic",codeExample:"public void contextInitialized(ServletContextEvent sce) { ServletContext ctx = sce.getServletContext(); }"}],C=()=>{const s=o.useRef([]);return o.useEffect(()=>{const t=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&(i.target.classList.add("animate-slide-up"),t.unobserve(i.target))})},{threshold:.1});return s.current.forEach(r=>{r&&t.observe(r)}),()=>t.disconnect()},[]),e.jsx("div",{className:"dark min-h-screen bg-gray-950 text-gray-100 font-sans leading-relaxed p-6 md:p-10",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("header",{className:"text-center space-y-4 animate-slide-up",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent",children:"Servlet Listeners"}),e.jsxs("p",{className:"text-lg text-gray-300 max-w-2xl mx-auto",children:[e.jsx("code",{children:"ServletContextListener"}),", ",e.jsx("code",{children:"HttpSessionListener"}),", ",e.jsx("code",{children:"ServletRequestListener"})," – reacting to lifecycle events in your web application."]})]}),e.jsxs("section",{ref:t=>s.current[0]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-green-400 flex items-center gap-2",children:[e.jsx("span",{children:"🎧"})," What are Servlet Listeners?"]}),e.jsx("p",{className:"mt-3 text-gray-300",children:"Listeners are Java classes that listen for and react to lifecycle events in a web application: when the application starts or stops, when a session is created or destroyed, when an attribute is added to a request, session, or context, and more. They enable you to run code at specific moments without modifying existing servlets."}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Listeners are part of the Servlet API and can be registered via ",e.jsx("code",{children:"@WebListener"})," annotation or in ",e.jsx("code",{children:"web.xml"}),". They are ideal for initialisation, cleanup, monitoring, and logging."]}),e.jsx("div",{className:"mt-4 p-4 bg-gray-800/50 rounded-xl border-l-4 border-green-500",children:e.jsxs("p",{className:"text-sm italic text-gray-300",children:["📘 ",e.jsx("strong",{children:"Real‑world analogy:"})," At Barrackpore High School, the principal (listener) is notified when school starts (context init), when a student enters a classroom (session created), and when a student leaves (session destroyed). The principal can then take action – updating attendance logs, allocating resources, or cleaning up."]})})]}),e.jsxs("section",{ref:t=>s.current[1]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-green-400",children:"📡 Listener Event Flow"}),e.jsx("div",{className:"mt-6 flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 750 280",className:"w-full max-w-4xl h-auto",children:[e.jsx("rect",{x:"20",y:"40",width:"160",height:"60",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"100",y:"65",textAnchor:"middle",fill:"#6ee7b7",fontSize:"13",children:"App Startup"}),e.jsx("text",{x:"100",y:"85",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"contextInitialized()"}),e.jsx("rect",{x:"230",y:"40",width:"160",height:"60",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"310",y:"65",textAnchor:"middle",fill:"#6ee7b7",fontSize:"13",children:"Session Created"}),e.jsx("text",{x:"310",y:"85",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"sessionCreated()"}),e.jsx("rect",{x:"440",y:"40",width:"160",height:"60",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"520",y:"65",textAnchor:"middle",fill:"#6ee7b7",fontSize:"13",children:"Request Arrives"}),e.jsx("text",{x:"520",y:"85",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"requestInitialized()"}),e.jsx("rect",{x:"650",y:"40",width:"80",height:"60",rx:"8",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"690",y:"75",textAnchor:"middle",fill:"#fcd34d",fontSize:"12",children:"Servlet"}),e.jsx("line",{x1:"180",y1:"70",x2:"228",y2:"70",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrL)"}),e.jsx("line",{x1:"390",y1:"70",x2:"438",y2:"70",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrL)"}),e.jsx("line",{x1:"600",y1:"70",x2:"648",y2:"70",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrL)"}),e.jsx("rect",{x:"650",y:"160",width:"80",height:"60",rx:"8",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"690",y:"195",textAnchor:"middle",fill:"#fcd34d",fontSize:"12",children:"Servlet"}),e.jsx("rect",{x:"440",y:"160",width:"160",height:"60",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"520",y:"185",textAnchor:"middle",fill:"#6ee7b7",fontSize:"13",children:"Request Destroyed"}),e.jsx("text",{x:"520",y:"205",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"requestDestroyed()"}),e.jsx("rect",{x:"230",y:"160",width:"160",height:"60",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"310",y:"185",textAnchor:"middle",fill:"#6ee7b7",fontSize:"13",children:"Session Destroyed"}),e.jsx("text",{x:"310",y:"205",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"sessionDestroyed()"}),e.jsx("rect",{x:"20",y:"160",width:"160",height:"60",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"100",y:"185",textAnchor:"middle",fill:"#6ee7b7",fontSize:"13",children:"App Shutdown"}),e.jsx("text",{x:"100",y:"205",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"contextDestroyed()"}),e.jsx("line",{x1:"520",y1:"70",x2:"520",y2:"158",stroke:"#6b7280",strokeWidth:"1.5",strokeDasharray:"4,4"}),e.jsx("line",{x1:"690",y1:"100",x2:"690",y2:"158",stroke:"#6b7280",strokeWidth:"1.5",strokeDasharray:"4,4"}),e.jsx("line",{x1:"520",y1:"220",x2:"310",y2:"220",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrL)"}),e.jsx("line",{x1:"310",y1:"220",x2:"100",y2:"220",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrL)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrL",markerWidth:"8",markerHeight:"8",refX:"6",refY:"4",orient:"auto",children:e.jsx("polygon",{points:"0 0, 8 4, 0 8",fill:"#10b981"})})}),e.jsx("text",{x:"370",y:"140",textAnchor:"middle",fill:"#9ca3af",fontSize:"11",children:"Request processing timeline"})]})}),e.jsx("p",{className:"text-center text-gray-400 text-sm mt-2",children:"Listeners react to lifecycle events: context (app), session, request, and attribute changes."})]}),e.jsxs("section",{ref:t=>s.current[2]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-green-400",children:"🌍 ServletContextListener"}),e.jsx("p",{className:"mt-3 text-gray-300",children:"Most commonly used listener. Fires when the web application is deployed (started) and when it is undeployed (stopped). Perfect for one‑time initialisation and cleanup."}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"contextInitialized(ServletContextEvent sce)"})," – called when app starts."]}),e.jsxs("li",{children:[e.jsx("code",{children:"contextDestroyed(ServletContextEvent sce)"})," – called when app shuts down."]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(n,{fileModule:c,title:"AppStartupListener.java – Database Initialisation",highlightLines:[8,9,10,16,17]})}),e.jsx("div",{className:"mt-4 p-3 bg-green-950/30 border-l-4 border-green-500 rounded",children:e.jsxs("p",{className:"text-sm text-gray-200",children:["💡 ",e.jsx("strong",{children:"Tip:"})," Use ",e.jsx("code",{children:"ServletContextEvent.getServletContext()"})," to store attributes that should be available to all servlets (e.g., a database connection pool)."]})})]}),e.jsxs("section",{ref:t=>s.current[3]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-green-400",children:"👥 HttpSessionListener"}),e.jsx("p",{className:"mt-3 text-gray-300",children:"Tracks session creation and destruction. Useful for counting active users, logging login/logout events, or releasing session‑specific resources."}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"sessionCreated(HttpSessionEvent se)"})," – new session created."]}),e.jsxs("li",{children:[e.jsx("code",{children:"sessionDestroyed(HttpSessionEvent se)"})," – session invalidated or timed out."]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(n,{fileModule:d,title:"ActiveSessionCounter.java – Count Online Users",highlightLines:[10,11,12,15,16,17]})})]}),e.jsxs("section",{ref:t=>s.current[4]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-green-400",children:"📨 ServletRequestListener"}),e.jsx("p",{className:"mt-3 text-gray-300",children:"Intercepts every request coming into the web application. Ideal for request logging, performance monitoring, or setting up request‑scoped resources."}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"requestInitialized(ServletRequestEvent sre)"})," – before request is processed."]}),e.jsxs("li",{children:[e.jsx("code",{children:"requestDestroyed(ServletRequestEvent sre)"})," – after response is sent."]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(n,{fileModule:x,title:"RequestLoggingListener.java – Log Request Timing",highlightLines:[8,9,10,15]})})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-green-400",children:"🏷️ Attribute Listeners"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Listen for changes to attributes in three scopes: ",e.jsx("strong",{children:"context"})," (",e.jsx("code",{children:"ServletContextAttributeListener"}),"), ",e.jsx("strong",{children:"session"})," (",e.jsx("code",{children:"HttpSessionAttributeListener"}),"), and ",e.jsx("strong",{children:"request"})," (",e.jsx("code",{children:"ServletRequestAttributeListener"}),")."]}),e.jsxs("p",{children:["Each provides three methods: ",e.jsx("code",{children:"attributeAdded()"}),", ",e.jsx("code",{children:"attributeRemoved()"}),", ",e.jsx("code",{children:"attributeReplaced()"}),"."]}),e.jsx("div",{className:"mt-5",children:e.jsx(n,{fileModule:h,title:"SessionAttributeTracker.java – Monitor Session Changes",highlightLines:[8,9,14,19]})})]}),e.jsxs("section",{ref:t=>s.current[5]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-green-400",children:"🔧 Registering Listeners"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Two ways: use ",e.jsx("code",{children:"@WebListener"})," annotation (Servlet 3.0+) or declare in ",e.jsx("code",{children:"web.xml"}),". Both are equivalent; annotation is simpler for most cases."]}),e.jsxs("div",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-mono text-green-400",children:"// Annotated"}),e.jsx("p",{className:"text-gray-300",children:e.jsx("code",{children:"@WebListener public class MyListener implements ServletContextListener { ... }"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-mono text-green-400",children:"// web.xml"}),e.jsx(n,{fileModule:m,title:"web.xml Listener Configuration",highlightLines:[3,4,5]})]})]})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-green-400",children:"🎭 Multiple Listeners in One Class"}),e.jsx("p",{className:"mt-3 text-gray-300",children:"A single class can implement several listener interfaces. The container will register it for all event types."}),e.jsx(n,{fileModule:p,title:"AllInOneListener.java – Multiple Interfaces",highlightLines:[5,34,39,44]})]}),e.jsxs("section",{ref:t=>s.current[6]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-green-400",children:"⚠️ Common Pitfalls (Beginners)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300 mt-3",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to register the listener"})," – either missing ",e.jsx("code",{children:"@WebListener"})," or web.xml entry."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Doing heavy work in listeners"})," – especially ",e.jsx("code",{children:"requestInitialized()"})," or ",e.jsx("code",{children:"sessionCreated()"})," – can slow down startup or each request."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming order of listeners"})," – listeners of the same type may be called in arbitrary order unless you use web.xml ordering."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Throwing exceptions in listeners"})," – uncaught exceptions can prevent application startup (for context listener) or break request processing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using HttpSessionListener but storing reference to session attributes:"})," Be careful with memory leaks – avoid storing session objects in static collections."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Not handling ",e.jsx("code",{children:"sessionDestroyed"})," for cleanup:"]})," If you allocate resources per session, you must release them here."]})]})]}),e.jsxs("section",{ref:t=>s.current[7]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-green-400",children:"✅ Best Practices (Industry)"}),e.jsxs("ul",{className:"list-decimal list-inside space-y-2 text-gray-300 mt-3",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"ServletContextListener"})," for startup tasks"]})," – loading configuration, initialising database pools, starting background threads."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Always release resources in ",e.jsx("code",{children:"contextDestroyed()"})]})," – close DB pools, stop threads, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep listener execution fast and exception‑free"})," – wrap in try‑catch and log errors."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Monitor active sessions with ",e.jsx("code",{children:"HttpSessionListener"})]})," – provide real‑time user count via a context attribute."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"ServletRequestListener"})," for request‑scoped logging and performance metrics"]})," – record start/end times."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Avoid storing session references in static maps"})," – can cause memory leaks if sessions are not removed properly."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Prefer ",e.jsx("code",{children:"@WebListener"})," for simplicity"]})," – but use web.xml if you need explicit ordering or conditional registration."]})]})]}),e.jsxs("section",{ref:t=>s.current[8]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-green-400",children:"📋 Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-4",children:["✅ Class implements correct listener interface","✅ Add @WebListener or define in web.xml","✅ Implement all required methods (even if empty)","✅ Use ServletContextEvent to access context","✅ Store application‑wide data in context init","✅ Clean up resources in destroy methods","✅ Track session counts with HttpSessionListener","✅ Avoid long operations in request listener","✅ Handle exceptions to prevent container failure","✅ Test listener order if multiple listeners"].map((t,r)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-200 text-sm",children:[e.jsx("span",{className:"text-green-400",children:"✓"})," ",t]},r))})]}),e.jsxs("section",{ref:t=>s.current[9]=t,className:"bg-gray-900/50 rounded-2xl p-6 border border-green-500/30",children:[e.jsx("h2",{className:"text-xl font-semibold text-green-400",children:"🧠 Hints – Think Like a Pro"}),e.jsxs("ul",{className:"space-y-2 text-gray-300 italic",children:[e.jsxs("li",{children:["🔍 ",e.jsx("strong",{children:"Observe carefully:"})," Deploy a simple app with a ",e.jsx("code",{children:"ServletContextListener"})," that prints a message. See when it appears in logs – at deployment, not on first request."]}),e.jsxs("li",{children:["⚙️ ",e.jsx("strong",{children:"Try changing:"})," Add a ",e.jsx("code",{children:"HttpSessionListener"})," and implement a logout button that calls ",e.jsx("code",{children:"session.invalidate()"})," – watch the listener fire."]}),e.jsxs("li",{children:["📂 ",e.jsx("strong",{children:"Think about:"})," Why is ",e.jsx("code",{children:"ServletRequestListener"})," a better place for request logging than a Filter? (Hint: filters can be bypassed, listeners are always called)."]}),e.jsxs("li",{children:["🧩 ",e.jsx("strong",{children:"Debug:"})," Your ",e.jsx("code",{children:"sessionDestroyed"})," never fires – check if session timeout is set correctly and that you are actually invalidating sessions."]})]})]}),e.jsx(l,{title:"Servlet Listeners FAQs",questions:u}),e.jsx("div",{className:"mt-8",children:e.jsx(a,{note:"Listeners are often overlooked but extremely useful. Emphasise that they are the entry point for any initialisation (e.g., loading a configuration file, setting up database connections). In the classroom, show a step-by-step: create a listener that sets an application start timestamp in context. Then create another listener counting online users. Combine them to show how listeners communicate via context attributes. Also note that listeners are not affected by <code>web.xml</code> `metadata-complete` unless that flag ignores annotations – so be careful. A great advanced exercise: use <code>ServletContextListener</code> to start a background scheduler (e.g., Quartz) and shut it down properly."})}),e.jsx("footer",{className:"text-center text-gray-500 text-sm pt-8 border-t border-gray-800",children:"Topic 8: Listeners (ServletContextListener, HttpSessionListener, etc.) – Part of Servlet Mastery Series"})]})})};export{C as default};
