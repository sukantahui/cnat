import{j as e}from"./index-BQNsLvl4.js";import{c as s}from"./clsx-B-dksMZM.js";import{J as r}from"./JavaFileLoader-BClokBT_.js";import"./JavaCodeBlock-CePMXLH9.js";import"./prism-DE0MjEma.js";import"./browser-CfMtt9u_.js";import"./prism-java-BwO6k4I_.js";const t=`import java.io.IOException;\r
import javax.servlet.ServletException;\r
import javax.servlet.annotation.WebServlet;\r
import javax.servlet.http.HttpServlet;\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
\r
/**\r
 * ExampleServlet – Represents the Web Tier.\r
 * It receives HTTP requests, calls the business tier,\r
 * and forwards to a JSP for rendering.\r
 */\r
@WebServlet("/example")\r
public class ExampleServlet extends HttpServlet {\r
\r
    @Override\r
    protected void doGet(HttpServletRequest request, HttpServletResponse response)\r
            throws ServletException, IOException {\r
\r
        // 1. Read parameters (if any)\r
        String userId = request.getParameter("userId");\r
\r
        // 2. Call business tier (simplified – in real app, inject a service)\r
        UserService userService = new UserService();\r
        User user = userService.findUserById(userId);\r
\r
        // 3. Store data for the view\r
        request.setAttribute("user", user);\r
\r
        // 4. Forward to JSP\r
        request.getRequestDispatcher("/WEB-INF/views/userProfile.jsp")\r
               .forward(request, response);\r
    }\r
}`,a=`/**\r
 * This file demonstrates the separation of Business and Data tiers.\r
 * It contains a simple UserService (business tier) and UserDAO (data tier).\r
 */\r
\r
// ---------- Data Tier (DAO) ----------\r
class UserDAO {\r
    // In a real app, this would use JDBC or JPA.\r
    public User findById(String id) {\r
        // Simulate database access\r
        System.out.println("UserDAO: SELECT * FROM users WHERE id = " + id);\r
        return new User(id, "John Doe", "john@example.com");\r
    }\r
}\r
\r
// ---------- Business Tier (Service) ----------\r
class UserService {\r
    private UserDAO userDAO = new UserDAO(); // normally injected\r
\r
    public User findUserById(String id) {\r
        // Business logic could go here (validation, caching, etc.)\r
        if (id == null || id.isEmpty()) {\r
            throw new IllegalArgumentException("User ID cannot be empty");\r
        }\r
        return userDAO.findById(id);\r
    }\r
}\r
\r
// ---------- Simple POJO (Model) ----------\r
class User {\r
    private String id;\r
    private String name;\r
    private String email;\r
\r
    public User(String id, String name, String email) {\r
        this.id = id;\r
        this.name = name;\r
        this.email = email;\r
    }\r
\r
    // getters and setters (omitted for brevity)\r
}`,i=`/**\r
 * This file illustrates the conceptual flow of a request through the tiers.\r
 * It's a simplified simulation, not meant to be run as a web app.\r
 */\r
public class RequestResponseCycle {\r
\r
    // Simulated HTTP request\r
    static class HttpRequest {\r
        String path;\r
        String userId;\r
    }\r
\r
    // Simulated HTTP response\r
    static class HttpResponse {\r
        String content;\r
    }\r
\r
    // Web Tier (Servlet)\r
    static class WebTier {\r
        public void handleRequest(HttpRequest req, HttpResponse res) {\r
            System.out.println("Web Tier: Received request for " + req.path);\r
\r
            // Call business tier\r
            BusinessTier business = new BusinessTier();\r
            String userData = business.getUserData(req.userId);\r
\r
            // Prepare response (simulate forwarding to JSP)\r
            res.content = "<html><body>" + userData + "</body></html>";\r
            System.out.println("Web Tier: Response ready");\r
        }\r
    }\r
\r
    // Business Tier\r
    static class BusinessTier {\r
        public String getUserData(String userId) {\r
            System.out.println("Business Tier: Validating and processing...");\r
            if (userId == null) return "Invalid user";\r
\r
            // Call data tier\r
            DataTier data = new DataTier();\r
            return data.fetchUserProfile(userId);\r
        }\r
    }\r
\r
    // Data Tier\r
    static class DataTier {\r
        public String fetchUserProfile(String userId) {\r
            System.out.println("Data Tier: Querying database for user " + userId);\r
            // Simulate database result\r
            return "User{id=" + userId + ", name='Swadeep', city='Barrackpore'}";\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        // Simulate a client request\r
        HttpRequest req = new HttpRequest();\r
        req.path = "/profile";\r
        req.userId = "123";\r
\r
        HttpResponse res = new HttpResponse();\r
\r
        WebTier web = new WebTier();\r
        web.handleRequest(req, res);\r
\r
        System.out.println("\\nFinal response to client:\\n" + res.content);\r
    }\r
}`;function p(){return e.jsxs("div",{className:"dark",children:[e.jsx("main",{className:s("min-h-screen bg-gray-50 px-4 py-12 font-sans leading-relaxed text-gray-800","dark:bg-gray-900 dark:text-gray-200","motion-safe:animate-[fadeIn_0.6s_ease-out]"),children:e.jsxs("div",{className:"mx-auto max-w-4xl space-y-8",children:[e.jsxs("header",{className:s("border-l-4 border-blue-600 pl-4","motion-safe:animate-[slideUp_0.5s_ease-out]"),children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Web Application Architecture Fundamentals"}),e.jsx("p",{className:"mt-2 text-lg text-gray-600 dark:text-gray-400",children:"Understanding the blueprint of modern web applications."})]}),e.jsxs("section",{className:s("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[100ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"What is Web Application Architecture?"}),e.jsx("p",{className:"mb-3",children:"Web application architecture defines how the components of a web application (client, server, database, etc.) interact with each other. It’s the high‑level structure that ensures the application is scalable, secure, and maintainable."}),e.jsxs("p",{children:["In a typical Java web application, the architecture follows a",e.jsx("span",{className:"font-bold",children:" client‑server model"})," with multiple tiers: the client tier (browser), the web tier (Servlets/JSP), the business tier (EJBs or services), and the data tier (database accessed via JDBC). This separation of concerns is fundamental to building robust enterprise applications."]})]}),e.jsxs("section",{className:s("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[200ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Typical Multi‑Tier Web Architecture"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"700",height:"300",viewBox:"0 0 700 300",className:"max-w-full","aria-label":"Multi-tier web architecture diagram",children:[e.jsx("rect",{width:"700",height:"300",fill:"transparent"}),e.jsxs("g",{className:"transition-all duration-300 hover:opacity-80",children:[e.jsx("rect",{x:"30",y:"120",width:"120",height:"60",rx:"8",fill:"#f97316",className:"transition-all duration-300 hover:fill-orange-400"}),e.jsx("text",{x:"65",y:"155",fill:"white",fontSize:"14",fontWeight:"bold",children:"Client"}),e.jsx("text",{x:"55",y:"175",fill:"white",fontSize:"10",children:"(Browser, Mobile)"})]}),e.jsx("line",{x1:"150",y1:"150",x2:"220",y2:"150",stroke:"#4b5563",strokeWidth:"2",markerEnd:"url(#arrow)",className:"dark:stroke-gray-400"}),e.jsxs("g",{className:"transition-all duration-300 hover:opacity-80",children:[e.jsx("rect",{x:"230",y:"100",width:"140",height:"100",rx:"8",fill:"#3b82f6",className:"transition-all duration-300 hover:fill-blue-400"}),e.jsx("text",{x:"265",y:"140",fill:"white",fontSize:"14",fontWeight:"bold",children:"Web Tier"}),e.jsx("text",{x:"255",y:"165",fill:"white",fontSize:"10",children:"Servlets, JSP, Filters"})]}),e.jsx("line",{x1:"370",y1:"150",x2:"440",y2:"150",stroke:"#4b5563",strokeWidth:"2",markerEnd:"url(#arrow)",className:"dark:stroke-gray-400"}),e.jsxs("g",{className:"transition-all duration-300 hover:opacity-80",children:[e.jsx("rect",{x:"450",y:"100",width:"140",height:"100",rx:"8",fill:"#8b5cf6",className:"transition-all duration-300 hover:fill-purple-400"}),e.jsx("text",{x:"485",y:"140",fill:"white",fontSize:"14",fontWeight:"bold",children:"Business Tier"}),e.jsx("text",{x:"475",y:"165",fill:"white",fontSize:"10",children:"EJBs, Services, DAOs"})]}),e.jsx("line",{x1:"520",y1:"200",x2:"520",y2:"240",stroke:"#4b5563",strokeWidth:"2",markerEnd:"url(#arrow)",className:"dark:stroke-gray-400"}),e.jsxs("g",{className:"transition-all duration-300 hover:opacity-80",children:[e.jsx("rect",{x:"450",y:"250",width:"140",height:"60",rx:"8",fill:"#ef4444",className:"transition-all duration-300 hover:fill-red-400"}),e.jsx("text",{x:"485",y:"285",fill:"white",fontSize:"14",fontWeight:"bold",children:"Data Tier"}),e.jsx("text",{x:"475",y:"300",fill:"white",fontSize:"10",children:"Database (via JDBC)"})]}),e.jsx("line",{x1:"520",y1:"250",x2:"520",y2:"200",stroke:"#4b5563",strokeWidth:"2",strokeDasharray:"4 4",markerEnd:"url(#arrow)",className:"dark:stroke-gray-400"}),e.jsx("line",{x1:"590",y1:"150",x2:"230",y2:"150",stroke:"#4b5563",strokeWidth:"2",strokeDasharray:"4 4",markerEnd:"url(#arrow)",className:"dark:stroke-gray-400"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#4b5563"})})}),e.jsx("text",{x:"160",y:"130",fill:"#6b7280",fontSize:"12",children:"HTTP Request"}),e.jsx("text",{x:"160",y:"180",fill:"#6b7280",fontSize:"12",children:"HTTP Response (dashed)"})]})}),e.jsx("p",{className:"mt-4 text-center text-sm text-gray-600 dark:text-gray-400",children:"The client sends a request that flows through web and business tiers, possibly accessing data, then returns a response."})]}),e.jsxs("section",{className:s("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[300ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"The Four Tiers Explained"}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"rounded-lg border-l-4 border-orange-600 bg-orange-50 p-4 dark:bg-orange-900/20",children:[e.jsx("h3",{className:"mb-2 font-bold text-orange-800 dark:text-orange-300",children:"Client Tier"}),e.jsx("p",{children:"The user interface—typically a web browser or mobile app. It sends HTTP requests and renders the HTML/JSON response. No business logic resides here; it only displays data."})]}),e.jsxs("div",{className:"rounded-lg border-l-4 border-blue-600 bg-blue-50 p-4 dark:bg-blue-900/20",children:[e.jsx("h3",{className:"mb-2 font-bold text-blue-800 dark:text-blue-300",children:"Web Tier (Presentation Tier)"}),e.jsx("p",{children:"Handles HTTP requests, manages sessions, and decides which view to return. In Java, this is where Servlets, JSP, and filters live. It delegates business logic to the next tier."})]}),e.jsxs("div",{className:"rounded-lg border-l-4 border-purple-600 bg-purple-50 p-4 dark:bg-purple-900/20",children:[e.jsx("h3",{className:"mb-2 font-bold text-purple-800 dark:text-purple-300",children:"Business Tier (Application Tier)"}),e.jsx("p",{children:"Contains the core business logic: calculations, workflows, and rules. Implemented as EJBs, Spring services, or plain Java classes. It may also coordinate transactions and security."})]}),e.jsxs("div",{className:"rounded-lg border-l-4 border-red-600 bg-red-50 p-4 dark:bg-red-900/20",children:[e.jsx("h3",{className:"mb-2 font-bold text-red-800 dark:text-red-300",children:"Data Tier (Persistence Tier)"}),e.jsx("p",{children:"Responsible for data storage and retrieval. Typically a relational database accessed via JDBC, JPA, or Hibernate. It ensures data integrity and provides query capabilities."})]})]})]}),e.jsxs("section",{className:s("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[400ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Java Code Examples"}),e.jsx("p",{className:"mb-4",children:"The following examples illustrate how Java components map to the tiers described above."}),e.jsxs("div",{className:"mb-6",children:[e.jsx(r,{fileModule:t,title:"ExampleServlet.java (Web Tier)",highlightLines:[5,10]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"A simple Servlet that receives a request, calls a business service, and forwards to a JSP. This is the controller in MVC."})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(r,{fileModule:a,title:"LayeredArchitectureExample.java (Business & Data Tiers)",highlightLines:[9,18]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"A demonstration of separating concerns: a service class (business tier) uses a DAO (data tier) to fetch data."})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(r,{fileModule:i,title:"RequestResponseCycle.java (Conceptual)",highlightLines:[7,14]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"A conceptual illustration of the request‑response flow through the tiers, using simple method calls."})]})]}),e.jsxs("section",{className:s("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[500ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Real‑World Context"}),e.jsx("p",{className:"mb-3",children:"Consider the online portal used by students in Barrackpore to check exam results. The architecture follows the same pattern:"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Client:"})," Swadeep’s browser on his phone."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Web Tier:"})," A ",e.jsx("code",{children:"ResultServlet"})," ","receives the request and validates the input."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Business Tier:"})," A"," ",e.jsx("code",{children:"ResultService"})," computes grade points and checks eligibility."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold",children:"Data Tier:"})," A"," ",e.jsx("code",{children:"ResultDAO"})," uses JDBC to fetch marks from the database."]})]}),e.jsx("p",{className:"mt-3",children:"This layered approach allows each part to evolve independently—for example, the database can be replaced without changing the web tier."})]}),e.jsxs("section",{className:s("rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20","border border-blue-200 dark:border-blue-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[600ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"💡 Tips & Tricks"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Keep tiers loosely coupled:"})," Use interfaces between layers. The web tier should depend on service interfaces, not concrete implementations. This makes testing easier."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Don’t skip the business tier:"})," Even for simple apps, create a service layer. Putting logic in Servlets or directly in DAOs leads to spaghetti code."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Understand your deployment target:"})," ","If you’re using a Servlet container (like Tomcat), you won’t have EJB or JTA support unless you add them via libraries."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use DTOs for cross‑tier communication:"})," ","Data Transfer Objects (simple POJOs) help avoid exposing entity objects directly to the web tier."]})]})]}),e.jsxs("section",{className:s("rounded-lg bg-red-50 p-6 dark:bg-red-900/20","border border-red-200 dark:border-red-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[700ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"⚠️ Common Mistakes Beginners Make"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Tight coupling between tiers:"})," ","Directly calling database code from a JSP or Servlet. This destroys maintainability."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Ignoring the business tier:"})," Putting all logic in Servlets, which become huge and untestable."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Not using connection pooling:"})," ","Opening a new database connection per request kills performance."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Misunderstanding the request scope:"})," ","Storing large objects in session or not cleaning up attributes leads to memory issues."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Forgetting that the web is stateless:"})," ","Trying to maintain client state without proper session management."]})]})]}),e.jsxs("section",{className:s("rounded-lg bg-green-50 p-6 dark:bg-green-900/20","border border-green-200 dark:border-green-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[800ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Follow the principle of separation of concerns:"})," ","Each tier has a distinct responsibility."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use a well‑defined API between tiers:"})," ","Define clear interfaces so that tiers can be developed and tested in isolation."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Apply dependency injection:"})," Use frameworks like Spring to wire components together, making the architecture more flexible."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Design for scalability:"})," Stateless middle tiers can be easily replicated. Keep session data minimal or externalized."]})]})]}),e.jsxs("section",{className:s("rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20","border border-yellow-200 dark:border-yellow-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[900ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"📋 Mini Checklist – What to Remember"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsx("li",{children:"☐ Web apps follow a client‑server model with multiple tiers."}),e.jsx("li",{children:"☐ Tiers: Client, Web (presentation), Business, Data."}),e.jsx("li",{children:"☐ Each tier has a clear responsibility."}),e.jsx("li",{children:"☐ Use interfaces to decouple tiers."}),e.jsx("li",{children:"☐ Business logic belongs in the business tier, not in Servlets or JSPs."}),e.jsx("li",{children:"☐ Data access code (JDBC) belongs in the data tier (DAOs)."})]})]}),e.jsxs("section",{className:s("rounded-lg bg-indigo-50 p-6 dark:bg-indigo-900/20","border border-indigo-200 dark:border-indigo-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[1000ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"🤔 Think About…"}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"})," In the diagram, why are there two arrows (solid and dashed) between client and web tier? (Hint: think request vs. response.)"]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Try changing this:"})," What would happen if the business tier directly accessed the database without using a DAO? How would that affect testing and maintainability?"]})]}),e.jsxs("section",{className:s("rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20","border border-purple-200 dark:border-purple-800","transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"👨‍🏫 Teacher’s Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Sukanta Hui"})," (27 years of experience in Programming, RDBMS, OS, and Web Development)"]}),e.jsxs("p",{className:"mb-2",children:["📧"," ",e.jsx("a",{href:"mailto:sukantahui@codernaccotax.co.in",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"sukantahui@codernaccotax.co.in"})]}),e.jsx("p",{children:"📞 7003756860"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"italic",children:"“I’ve seen too many projects where a student, like Debangshu from Ichapur, tries to build everything in one layer—Servlets with embedded SQL and HTML. The result is a nightmare to debug. Remember: layers are your friends. They help you isolate problems, swap implementations, and work in teams. When Tuhina builds her first real application, I always tell her to sketch the tiers on paper before writing a single line of code.”"}),e.jsxs("p",{className:"mt-2 text-sm",children:[e.jsx("span",{className:"font-semibold",children:"Remember:"})," Architecture first, code second."]})]})]})]})]})}),e.jsx("style",{children:`
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

        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-\\[fadeIn_0\\.6s_ease-out\\],
          .motion-safe\\:animate-\\[slideUp_0\\.5s_ease-out\\] {
            animation: none !important;
          }
        }
      `})]})}export{p as default};
