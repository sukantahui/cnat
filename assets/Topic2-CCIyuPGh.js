import{j as e}from"./index-2tOzkblz.js";import{c as s}from"./clsx-B-dksMZM.js";import{J as a}from"./JavaFileLoader-DhoYw3Er.js";import"./JavaCodeBlock-BASb8EqV.js";import"./prism-DU24L__p.js";import"./browser-DNiOOvbZ.js";import"./prism-java-BwO6k4I_.js";const t=`import java.io.IOException;\r
import javax.servlet.ServletException;\r
import javax.servlet.annotation.WebServlet;\r
import javax.servlet.http.HttpServlet;\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
import javax.servlet.http.HttpSession;\r
\r
/**\r
 * LoginServlet – Example of a Servlet acting as the Controller.\r
 * It receives login credentials, validates them using a DAO (JDBC),\r
 * and forwards to the appropriate JSP.\r
 */\r
@WebServlet("/login")\r
public class LoginServlet extends HttpServlet {\r
\r
    @Override\r
    protected void doPost(HttpServletRequest request, HttpServletResponse response)\r
            throws ServletException, IOException {\r
\r
        // 1. Read parameters from the request\r
        String username = request.getParameter("username");\r
        String password = request.getParameter("password");\r
\r
        // 2. Call the business layer (here we use a DAO directly for simplicity)\r
        UserDAO userDAO = new UserDAO();\r
        UserBean user = userDAO.validateUser(username, password);\r
\r
        // 3. Depending on result, forward to appropriate JSP\r
        if (user != null) {\r
            HttpSession session = request.getSession();\r
            session.setAttribute("user", user);\r
            response.sendRedirect("welcome.jsp");  // redirect to avoid form resubmission\r
        } else {\r
            request.setAttribute("error", "Invalid username or password");\r
            request.getRequestDispatcher("login.jsp").forward(request, response);\r
        }\r
    }\r
}`,r=`import java.sql.*;\r
\r
/**\r
 * UserDAO – Example of a Data Access Object using JDBC.\r
 * It encapsulates all database operations related to users.\r
 */\r
public class UserDAO {\r
\r
    // Database credentials (in real app, externalize to properties)\r
    private static final String URL = "jdbc:mysql://localhost:3306/school";\r
    private static final String USER = "root";\r
    private static final String PASSWORD = "password";\r
\r
    /**\r
     * Validates a user by querying the database.\r
     * @param username the username\r
     * @param password the password\r
     * @return a UserBean if valid, null otherwise\r
     */\r
    public UserBean validateUser(String username, String password) {\r
        String sql = "SELECT * FROM users WHERE username = ? AND password = ?";\r
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);\r
             PreparedStatement ps = conn.prepareStatement(sql)) {\r
\r
            ps.setString(1, username);\r
            ps.setString(2, password);  // In real app, hash the password!\r
\r
            try (ResultSet rs = ps.executeQuery()) {\r
                if (rs.next()) {\r
                    UserBean user = new UserBean();\r
                    user.setId(rs.getInt("id"));\r
                    user.setUsername(rs.getString("username"));\r
                    user.setName(rs.getString("name"));\r
                    user.setEmail(rs.getString("email"));\r
                    return user;\r
                }\r
            }\r
        } catch (SQLException e) {\r
            e.printStackTrace();  // In real app, use logging\r
        }\r
        return null;\r
    }\r
\r
    // Other CRUD methods would go here...\r
}`,n=`import java.io.Serializable;\r
\r
/**\r
 * UserBean – A simple JavaBean (Model) that holds user data.\r
 * Used by both the Servlet and the JSP (via EL).\r
 */\r
public class UserBean implements Serializable {\r
    private static final long serialVersionUID = 1L;\r
\r
    private int id;\r
    private String username;\r
    private String name;\r
    private String email;\r
\r
    // No-argument constructor (required for JavaBeans)\r
    public UserBean() {}\r
\r
    // Getters and setters for each property\r
    public int getId() { return id; }\r
    public void setId(int id) { this.id = id; }\r
\r
    public String getUsername() { return username; }\r
    public void setUsername(String username) { this.username = username; }\r
\r
    public String getName() { return name; }\r
    public void setName(String name) { this.name = name; }\r
\r
    public String getEmail() { return email; }\r
    public void setEmail(String email) { this.email = email; }\r
\r
    @Override\r
    public String toString() {\r
        return "UserBean{id=" + id + ", username='" + username + "', name='" + name + "', email='" + email + "'}";\r
    }\r
}`;function p(){return e.jsxs("div",{className:"dark",children:[e.jsx("main",{className:s("min-h-screen bg-gray-50 px-4 py-12 font-sans leading-relaxed text-gray-800","dark:bg-gray-900 dark:text-gray-200","motion-safe:animate-[fadeIn_0.6s_ease-out]"),children:e.jsxs("div",{className:"mx-auto max-w-4xl space-y-8",children:[e.jsxs("header",{className:s("border-l-4 border-blue-600 pl-4","motion-safe:animate-[slideUp_0.5s_ease-out]"),children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"Role of JDBC, JSP, and Servlets"}),e.jsx("p",{className:"mt-2 text-lg text-gray-600 dark:text-gray-400",children:"The three pillars of Java web applications."})]}),e.jsxs("section",{className:s("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[100ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"How They Fit Together"}),e.jsx("p",{className:"mb-3",children:"In a typical Java web application, three core technologies handle the complete request‑response cycle:"}),e.jsxs("ul",{className:"list-inside list-disc space-y-1",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-bold text-blue-600 dark:text-blue-400",children:"Servlets"})," ","– act as the controller, receiving HTTP requests, processing them, and coordinating the response."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold text-green-600 dark:text-green-400",children:"JSP"})," ","– serves as the view, generating dynamic HTML content to be sent to the client."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-bold text-purple-600 dark:text-purple-400",children:"JDBC"})," ","– provides the data access layer, connecting to databases to retrieve or store information."]})]}),e.jsx("p",{className:"mt-3",children:"Together they form the basis of the Model‑View‑Controller (MVC) pattern: Servlet (Controller), JSP (View), and JavaBeans / POJOs (Model). JDBC is used inside the Model to interact with the database."})]}),e.jsxs("section",{className:s("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[200ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Request Flow with JDBC, JSP, and Servlets"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"650",height:"220",viewBox:"0 0 650 220",className:"max-w-full","aria-label":"Flow diagram: Client -> Servlet -> JDBC -> Database -> JSP -> Client",children:[e.jsx("rect",{width:"650",height:"220",fill:"transparent"}),e.jsxs("g",{className:"transition-all duration-300 hover:opacity-80",children:[e.jsx("rect",{x:"30",y:"80",width:"100",height:"60",rx:"8",fill:"#f97316",className:"transition-all duration-300 hover:fill-orange-400"}),e.jsx("text",{x:"60",y:"115",fill:"white",fontSize:"14",fontWeight:"bold",children:"Client"}),e.jsx("text",{x:"55",y:"130",fill:"white",fontSize:"10",children:"(Browser)"})]}),e.jsx("line",{x1:"130",y1:"110",x2:"200",y2:"110",stroke:"#4b5563",strokeWidth:"2",markerEnd:"url(#arrow)",className:"dark:stroke-gray-400"}),e.jsxs("g",{className:"transition-all duration-300 hover:opacity-80",children:[e.jsx("rect",{x:"210",y:"30",width:"120",height:"60",rx:"8",fill:"#3b82f6",className:"transition-all duration-300 hover:fill-blue-400"}),e.jsx("text",{x:"240",y:"65",fill:"white",fontSize:"14",fontWeight:"bold",children:"Servlet"}),e.jsx("text",{x:"235",y:"80",fill:"white",fontSize:"10",children:"(Controller)"}),e.jsx("circle",{cx:"320",cy:"60",r:"6",fill:"#fbbf24",children:e.jsx("animate",{attributeName:"opacity",values:"1;0.3;1",dur:"1.5s",repeatCount:"indefinite"})})]}),e.jsx("line",{x1:"270",y1:"90",x2:"270",y2:"140",stroke:"#4b5563",strokeWidth:"2",strokeDasharray:"4 4",markerEnd:"url(#arrow)",className:"dark:stroke-gray-400"}),e.jsxs("g",{className:"transition-all duration-300 hover:opacity-80",children:[e.jsx("rect",{x:"210",y:"150",width:"120",height:"60",rx:"8",fill:"#8b5cf6",className:"transition-all duration-300 hover:fill-purple-400"}),e.jsx("text",{x:"240",y:"185",fill:"white",fontSize:"14",fontWeight:"bold",children:"JDBC"}),e.jsx("text",{x:"235",y:"200",fill:"white",fontSize:"10",children:"(Data Access)"})]}),e.jsx("line",{x1:"330",y1:"180",x2:"400",y2:"180",stroke:"#4b5563",strokeWidth:"2",markerEnd:"url(#arrow)",className:"dark:stroke-gray-400"}),e.jsxs("g",{className:"transition-all duration-300 hover:opacity-80",children:[e.jsx("rect",{x:"410",y:"150",width:"120",height:"60",rx:"8",fill:"#ef4444",className:"transition-all duration-300 hover:fill-red-400"}),e.jsx("text",{x:"440",y:"185",fill:"white",fontSize:"14",fontWeight:"bold",children:"Database"})]}),e.jsx("line",{x1:"270",y1:"210",x2:"270",y2:"100",stroke:"#4b5563",strokeWidth:"2",strokeDasharray:"2 4",markerEnd:"url(#arrow)",className:"dark:stroke-gray-400"}),e.jsx("line",{x1:"330",y1:"60",x2:"410",y2:"60",stroke:"#4b5563",strokeWidth:"2",markerEnd:"url(#arrow)",className:"dark:stroke-gray-400"}),e.jsxs("g",{className:"transition-all duration-300 hover:opacity-80",children:[e.jsx("rect",{x:"420",y:"30",width:"120",height:"60",rx:"8",fill:"#10b981",className:"transition-all duration-300 hover:fill-green-400"}),e.jsx("text",{x:"450",y:"65",fill:"white",fontSize:"14",fontWeight:"bold",children:"JSP"}),e.jsx("text",{x:"445",y:"80",fill:"white",fontSize:"10",children:"(View)"})]}),e.jsx("line",{x1:"540",y1:"60",x2:"610",y2:"100",stroke:"#4b5563",strokeWidth:"2",markerEnd:"url(#arrow)",className:"dark:stroke-gray-400"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("path",{d:"M0,0 L10,5 L0,10 Z",fill:"#4b5563"})})})]})}),e.jsx("p",{className:"mt-4 text-center text-sm text-gray-600 dark:text-gray-400",children:"Flow: Client request → Servlet processes, calls JDBC → JDBC queries database → results returned → Servlet forwards to JSP → JSP generates HTML response → Client receives page."})]}),e.jsxs("section",{className:s("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[300ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Deep Dive: Each Component’s Role"}),e.jsxs("div",{className:"mb-6 rounded-lg border-l-4 border-blue-600 bg-blue-50 p-4 dark:bg-blue-900/20",children:[e.jsx("h3",{className:"mb-2 text-lg font-bold text-blue-800 dark:text-blue-300",children:"Servlet – The Controller"}),e.jsx("p",{className:"mb-2",children:"A Servlet is a Java class that extends the capabilities of a server. It receives HTTP requests, reads parameters, invokes business logic (often using JavaBeans or services), and decides which view (JSP) to forward the request to."}),e.jsxs("p",{className:"font-mono text-sm",children:["public class LoginServlet extends HttpServlet ","{... }"]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold",children:"Real-world:"})," When Tuhina submits a login form, the ",e.jsx("code",{children:"LoginServlet"})," validates her credentials using JDBC, then forwards to welcome.jsp or back to`"," ","` login.jsp with an error."]})]}),e.jsxs("div",{className:"mb-6 rounded-lg border-l-4 border-green-600 bg-green-50 p-4 dark:bg-green-900/20",children:[e.jsx("h3",{className:"mb-2 text-lg font-bold text-green-800 dark:text-green-300",children:"JSP – The View"}),e.jsx("p",{className:"mb-2",children:"JavaServer Pages (JSP) allow embedding Java code inside HTML to generate dynamic content. In modern practice, scriptlets are avoided; instead, JSP uses Expression Language (EL) and JSTL tags to display data passed from the Servlet."}),e.jsxs("p",{className:"font-mono text-sm",children:["<h2>Welcome, $","{","user.name","}","</h2>"]}),e.jsxs("p",{className:"mt-2",children:[e.jsx("span",{className:"font-semibold",children:"Real‑world:"})," After Abhronila logs in, the Servlet stores her details in request scope, and the JSP displays her personalized dashboard."]})]}),e.jsxs("div",{className:"rounded-lg border-l-4 border-purple-600 bg-purple-50 p-4 dark:bg-purple-900/20",children:[e.jsx("h3",{className:"mb-2 text-lg font-bold text-purple-800 dark:text-purple-300",children:"JDBC – The Data Layer"}),e.jsx("p",{className:"mb-2",children:"Java Database Connectivity (JDBC) is the API that connects Java applications to relational databases. It provides methods to query and update data, manage transactions, and handle result sets."}),e.jsxs("p",{className:"font-mono text-sm",children:["Connection conn = DriverManager.getConnection(url, user, password);",e.jsx("br",{}),'PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE username=?");',e.jsx("br",{}),"ResultSet rs = ps.executeQuery();"]}),e.jsxs("p",{className:"mt-2",children:[e.jsx("span",{className:"font-semibold",children:"Real‑world:"})," When Debangshu searches for books in the Naihati library system, the Servlet calls a DAO that uses JDBC to query the database and returns matching records."]})]})]}),e.jsxs("section",{className:s("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[400ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Java Code Examples"}),e.jsx("p",{className:"mb-4",children:"The following examples illustrate how each component is implemented in code."}),e.jsxs("div",{className:"mb-6",children:[e.jsx(a,{fileModule:t,title:"LoginServlet.java (Servlet – Controller)",highlightLines:[13,25]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"A Servlet that handles login requests, calls a DAO, and forwards to a JSP."})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(a,{fileModule:r,title:"UserDAO.java (JDBC – Data Layer)",highlightLines:[12,22]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"A Data Access Object that uses JDBC to query the database."})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(a,{fileModule:n,title:"UserBean.java (Model – used by JSP)",highlightLines:[5,15]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"A simple JavaBean that holds user data, typically used in JSP with EL."})]})]}),e.jsxs("section",{className:s("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[500ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Real‑World Example: Student Portal"}),e.jsx("p",{className:"mb-3",children:"Consider a student portal used in Barrackpore colleges. When Swadeep wants to view his grades:"}),e.jsxs("ol",{className:"list-inside list-decimal space-y-1",children:[e.jsxs("li",{children:["His browser sends a request to ",e.jsx("code",{children:"/grades"}),"."]}),e.jsxs("li",{children:["The ",e.jsx("code",{children:"GradeServlet"})," (Servlet) intercepts the request, retrieves Swadeep’s user ID from the session, and calls a ",e.jsx("code",{children:"GradeDAO"}),"."]}),e.jsxs("li",{children:["The ",e.jsx("code",{children:"GradeDAO"})," uses JDBC to execute a query on the database."]}),e.jsxs("li",{children:["The results are returned to the Servlet, which stores them in request attributes and forwards to ",e.jsx("code",{children:"grades.jsp"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"grades.jsp"})," uses JSTL to loop through the grades and display them in a neat HTML table."]})]}),e.jsx("p",{className:"mt-3",children:"This separation keeps the code organized: Servlet handles control flow, JSP handles presentation, and JDBC (in a DAO) handles data persistence."})]}),e.jsxs("section",{className:s("rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20","border border-blue-200 dark:border-blue-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[600ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"💡 Tips & Tricks"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Never put database code in JSPs:"})," JSP is for display only. Use Servlets or separate service/DAO classes for JDBC calls. This keeps your view clean and maintainable."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use PreparedStatement always:"})," It prevents SQL injection and handles escaping automatically. Tuhina learned this the hard way when a simple quote broke her query."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Forward, not redirect, for internal flow:"})," ","Use ",e.jsx("code",{children:"RequestDispatcher.forward()"})," to pass control to a JSP without an extra round trip. Redirect only when you need a new request (e.g., after a form submission to avoid double posting)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Keep JDBC resources closed:"})," Always close Connection, Statement, and ResultSet in finally blocks or use try‑with‑resources to avoid connection leaks."]})]})]}),e.jsxs("section",{className:s("rounded-lg bg-red-50 p-6 dark:bg-red-900/20","border border-red-200 dark:border-red-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[700ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"⚠️ Common Mistakes Beginners Make"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Mixing responsibilities:"})," Putting SQL queries directly inside JSP scriptlets. This makes the application impossible to maintain."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Forgetting to handle exceptions:"})," JDBC operations throw checked SQLException. Ignoring them leads to crashes and poor user experience."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Using Statement instead of PreparedStatement:"})," ","Vulnerable to SQL injection and harder to read."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Not closing database connections:"})," ","This quickly exhausts the connection pool and brings the application down."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Overloading Servlets with business logic:"})," ","Servlets should delegate to service classes; otherwise they become monolithic and untestable."]})]})]}),e.jsxs("section",{className:s("rounded-lg bg-green-50 p-6 dark:bg-green-900/20","border border-green-200 dark:border-green-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[800ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Apply MVC rigorously:"})," Servlet as Controller, JSP as View, JavaBeans/POJOs as Model. Use JDBC within the Model (often inside Data Access Objects)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use connection pooling:"})," In a real application, never open a new connection per request. Configure a DataSource with connection pooling (e.g., HikariCP) in your server."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Prefer JSTL and EL over scriptlets:"})," ","They make JSPs cleaner and easier to read. Modern JSP best practices forbid scriptlets entirely."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Handle transactions properly:"})," For operations that involve multiple updates, use transaction management (commit/rollback) either via JDBC or container‑managed transactions."]})]})]}),e.jsxs("section",{className:s("rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20","border border-yellow-200 dark:border-yellow-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[900ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"📋 Mini Checklist – What to Remember"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsx("li",{children:"☐ Servlets handle requests and control flow."}),e.jsx("li",{children:"☐ JSP generates the HTML view."}),e.jsx("li",{children:"☐ JDBC connects Java to databases."}),e.jsx("li",{children:"☐ Always use PreparedStatement to avoid SQL injection."}),e.jsx("li",{children:"☐ Keep JDBC code out of JSPs and Servlets (use DAO layer)."}),e.jsx("li",{children:"☐ Close resources (Connection, Statement, ResultSet) reliably."})]})]}),e.jsxs("section",{className:s("rounded-lg bg-indigo-50 p-6 dark:bg-indigo-900/20","border border-indigo-200 dark:border-indigo-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[1000ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"🤔 Think About…"}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"})," In the flow diagram, why does the Servlet forward to JSP instead of generating HTML itself? (Hint: separation of concerns, designer‑friendly templates.)"]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Try changing this:"})," If you removed JDBC and used files to store data, how would the architecture change? What new challenges would appear?"]})]}),e.jsxs("section",{className:s("rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20","border border-purple-200 dark:border-purple-800","transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"👨‍🏫 Teacher’s Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Sukanta Hui"})," (27 years of experience in Programming, RDBMS, OS, and Web Development)"]}),e.jsxs("p",{className:"mb-2",children:["📧"," ",e.jsx("a",{href:"mailto:sukantahui@codernaccotax.co.in",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"sukantahui@codernaccotax.co.in"})]}),e.jsx("p",{children:"📞 7003756860"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"italic",children:"“When I teach this, I always compare it to a restaurant. The Servlet is the waiter who takes your order; the JSP is the chef who prepares the dish (HTML); JDBC is the pantry where ingredients (data) are stored. Each has a specific job, and if one tries to do another’s job, the kitchen becomes chaos. Swadeep and Abhronila found this analogy helpful when building their first library system for Ichapur.”"}),e.jsxs("p",{className:"mt-2 text-sm",children:[e.jsx("span",{className:"font-semibold",children:"Remember:"})," Clear roles make applications easy to build, debug, and scale."]})]})]})]})]})}),e.jsx("style",{children:`
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
