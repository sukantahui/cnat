import{j as e}from"./index-BHC-ARLC.js";import{J as t}from"./JavaFileLoader-nSGre88s.js";import{T as s}from"./TeacherSukantaHui-DvxCJFHD.js";import"./JavaCodeBlock-BHpnVLNH.js";import"./prism-ZZiGyemG.js";import"./browser-DkwuR6pG.js";import"./prism-java-BwO6k4I_.js";import"./git-branch-DdU2eNTK.js";const n=`package com.example.controller;\r
\r
import javax.servlet.ServletException;\r
import javax.servlet.http.HttpServlet;\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
import java.io.IOException;\r
import java.util.HashMap;\r
import java.util.Map;\r
\r
public class FrontControllerServlet extends HttpServlet {\r
    private Map<String, Command> commandMap = new HashMap<>();\r
\r
    @Override\r
    public void init() throws ServletException {\r
        // Register commands\r
        commandMap.put("login", new LoginController());\r
        commandMap.put("listStudents", new ListStudentsController());\r
        // ... other commands\r
    }\r
\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\r
        processRequest(req, resp);\r
    }\r
\r
    @Override\r
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\r
        processRequest(req, resp);\r
    }\r
\r
    private void processRequest(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\r
        String action = req.getParameter("action");\r
        if (action == null) action = "default";\r
\r
        Command command = commandMap.get(action);\r
        if (command == null) {\r
            resp.sendError(HttpServletResponse.SC_NOT_FOUND);\r
            return;\r
        }\r
\r
        String view = command.execute(req, resp);\r
        if (view != null) {\r
            req.getRequestDispatcher("/WEB-INF/views/" + view + ".jsp").forward(req, resp);\r
        }\r
    }\r
}`,a=`package com.example.controller;\r
\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
import javax.servlet.http.HttpSession;\r
\r
public class LoginController implements Command {\r
    @Override\r
    public String execute(HttpServletRequest req, HttpServletResponse resp) {\r
        String username = req.getParameter("username");\r
        String password = req.getParameter("password");\r
\r
        // Simulate authentication (should call a service)\r
        if ("admin".equals(username) && "secret".equals(password)) {\r
            HttpSession session = req.getSession();\r
            session.setAttribute("user", username);\r
            return "dashboard"; // view name -> dashboard.jsp\r
        } else {\r
            req.setAttribute("error", "Invalid credentials");\r
            return "login"; // back to login page\r
        }\r
    }\r
}`,l=`<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>\r
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>\r
<!DOCTYPE html>\r
<html>\r
<head>\r
    <title>Student List</title>\r
</head>\r
<body>\r
    <h2>Student List</h2>\r
    <ul>\r
        <c:forEach var="student" items="\${students}">\r
            <li>\${student}</li>\r
        </c:forEach>\r
    </ul>\r
    <a href="\${pageContext.request.contextPath}/controller?action=logout">Logout</a>\r
</body>\r
</html>`,i=`<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>\r
<!DOCTYPE html>\r
<html>\r
<head>\r
    <title>Login</title>\r
</head>\r
<body>\r
    <h2>Login</h2>\r
    <form action="\${pageContext.request.contextPath}/controller" method="post">\r
        <input type="hidden" name="action" value="login" />\r
        Username: <input type="text" name="username" /><br/>\r
        Password: <input type="password" name="password" /><br/>\r
        <input type="submit" value="Login" />\r
    </form>\r
    <c:if test="\${not empty error}">\r
        <p style="color:red;">\${error}</p>\r
    </c:if>\r
</body>\r
</html>`,o=`<?xml version="1.0" encoding="UTF-8"?>\r
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"\r
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee\r
                             http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"\r
         version="4.0">\r
\r
    <servlet>\r
        <servlet-name>FrontController</servlet-name>\r
        <servlet-class>com.example.controller.FrontControllerServlet</servlet-class>\r
    </servlet>\r
    <servlet-mapping>\r
        <servlet-name>FrontController</servlet-name>\r
        <url-pattern>/controller/*</url-pattern>\r
    </servlet-mapping>\r
\r
    <welcome-file-list>\r
        <welcome-file>index.jsp</welcome-file>\r
    </welcome-file-list>\r
</web-app>`,b=()=>{const r=new Date().getFullYear()-1998;return e.jsxs("div",{className:"w-full max-w-7xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 dark:text-gray-100",children:[e.jsxs("div",{className:"text-center space-y-2 animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent",children:"MVC with JSP and Servlets (Front Controller Pattern)"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:"Separating concerns for maintainable web applications"})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"What is MVC and Front Controller?"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]",children:[e.jsxs("p",{className:"leading-relaxed mb-4",children:[e.jsx("strong",{children:"Model-View-Controller (MVC)"})," is a design pattern that separates an application into three interconnected components:",e.jsx("strong",{children:"Model"})," (data/business logic), ",e.jsx("strong",{children:"View"})," (presentation), and ",e.jsx("strong",{children:"Controller"})," (request handling)."]}),e.jsxs("p",{className:"leading-relaxed",children:["The ",e.jsx("strong",{children:"Front Controller"})," pattern is a specialized controller that handles all incoming requests, centralizes common logic (authentication, logging), and delegates to appropriate handlers. In JSP/Servlet applications, the Front Controller is typically a servlet that dispatches to JSP views or other servlets based on the request."]}),e.jsxs("p",{className:"leading-relaxed mt-2",children:["This approach promotes ",e.jsx("strong",{children:"separation of concerns"}),", making the application easier to maintain, test, and scale."]})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.2s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"MVC + Front Controller Flow"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"750",height:"280",viewBox:"0 0 750 280",className:"w-full max-w-4xl h-auto",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#3b82f6"})})}),e.jsx("rect",{x:"20",y:"110",width:"80",height:"60",rx:"8",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"60",y:"145",textAnchor:"middle",fill:"white",children:"Client"}),e.jsx("line",{x1:"100",y1:"140",x2:"140",y2:"140",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"150",y:"100",width:"120",height:"80",rx:"8",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"210",y:"135",textAnchor:"middle",fill:"white",children:"Front Controller"}),e.jsx("text",{x:"210",y:"155",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"(Servlet)"}),e.jsx("line",{x1:"210",y1:"180",x2:"210",y2:"220",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"150",y:"220",width:"120",height:"50",rx:"8",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"210",y:"252",textAnchor:"middle",fill:"white",children:"Action/Command"}),e.jsx("line",{x1:"270",y1:"245",x2:"310",y2:"245",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"320",y:"220",width:"100",height:"50",rx:"8",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"370",y:"252",textAnchor:"middle",fill:"white",children:"Model"}),e.jsx("line",{x1:"370",y1:"220",x2:"370",y2:"180",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"320",y:"140",width:"100",height:"40",rx:"8",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"370",y:"165",textAnchor:"middle",fill:"white",children:"Dispatcher"}),e.jsx("line",{x1:"420",y1:"160",x2:"460",y2:"160",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"470",y:"130",width:"100",height:"60",rx:"8",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"520",y:"165",textAnchor:"middle",fill:"white",children:"View (JSP)"}),e.jsx("line",{x1:"570",y1:"160",x2:"610",y2:"140",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"590",y:"120",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Response"})]})}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-4",children:"The Front Controller receives all requests, delegates to commands, interacts with the model, and forwards to the appropriate view."})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.3s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"Key Components"}),e.jsxs("div",{className:"grid gap-6 md:grid-cols-3",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:scale-105",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"Model"}),e.jsx("p",{className:"leading-relaxed",children:"JavaBeans or POJOs that hold data and business logic. In a school system, Student, Teacher, Course classes."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:scale-105",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"View"}),e.jsx("p",{className:"leading-relaxed",children:"JSP pages that present data using JSTL/EL. They contain no business logic, only presentation."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:scale-105",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"Controller"}),e.jsx("p",{className:"leading-relaxed",children:"A servlet (Front Controller) that receives requests, delegates to command objects, and forwards to the view."})]})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.4s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"Implementation Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"1. Front Controller Servlet"}),e.jsx(t,{fileModule:n,title:"FrontControllerServlet.java",highlightLines:[15,16,17,18,19,20]}),e.jsxs("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:["The main entry point that handles all requests, extracts the ",e.jsx("code",{children:"action"})," parameter, and delegates to command classes."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"2. Command Implementation (LoginController)"}),e.jsx(t,{fileModule:a,title:"LoginController.java",highlightLines:[6,7,8]}),e.jsx("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:"Each command implements a common interface and returns a view name after processing."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"3. View (login.jsp)"}),e.jsx(t,{fileModule:i,title:"login.jsp",highlightLines:[8,9]}),e.jsx("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:"Simple JSP form that submits to the Front Controller with an action parameter."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"4. View (studentList.jsp)"}),e.jsx(t,{fileModule:l,title:"studentList.jsp",highlightLines:[5,6]}),e.jsx("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:"JSP that displays a list of students using JSTL. Data is passed from the controller via request attributes."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"5. web.xml Configuration"}),e.jsx(t,{fileModule:o,title:"web.xml",highlightLines:[6,7,8,9,10]}),e.jsxs("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:["Maps the Front Controller to a URL pattern (e.g., ",e.jsx("code",{children:"/controller/*"}),")."]})]})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.5s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"Real-world Applications"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("ul",{className:"list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Enterprise Applications:"})," Large systems use Front Controller to centralize security, logging, and navigation."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Frameworks:"})," Spring MVC, Struts, and other frameworks are built on this pattern."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"School Portals:"})," A single controller can handle student registration, fee payment, exam results, etc., by dispatching to specific commands."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"REST APIs:"})," Even RESTful APIs use a similar pattern where a dispatcher routes to resource handlers."]})]}),e.jsxs("p",{className:"mt-4 text-sm italic text-gray-500 dark:text-gray-400",children:["Example: In a school system at Barrackpore, a ",e.jsx("code",{children:"/app/*"})," servlet could route ",e.jsx("code",{children:"/app/student/list"})," to a command that retrieves students and forwards to ",e.jsx("code",{children:"studentList.jsp"}),"."]})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.6s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"💡 Tips & Tricks"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:["Use a ",e.jsx("strong",{children:"command interface"})," to enforce consistent execution across all actions."]}),e.jsxs("li",{children:["Implement a ",e.jsx("strong",{children:"request processor"})," to pre-populate common data (e.g., user session) before command execution."]}),e.jsx("li",{children:"Store view names as constants to avoid typos."}),e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"request dispatcher"})," for forwarding; never include business logic in JSPs."]}),e.jsxs("li",{children:["Consider using ",e.jsx("strong",{children:"ActionForm"})," objects to encapsulate request parameters and validation."]})]})})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.7s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"⚠️ Common Mistakes"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Leaking business logic into JSPs:"})," JSPs should only display data, not process it."]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Hardcoding action names:"})," Use a configuration file (e.g., XML or properties) to map actions to command classes."]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Forgetting to set the character encoding:"})," Ensure request/response encoding is set in the controller."]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Not handling exceptions:"})," Centralize exception handling in the controller to show friendly error pages."]}),e.jsxs("li",{children:["❌ ",e.jsxs("strong",{children:["Using ",e.jsx("code",{children:"redirect"})," instead of ",e.jsx("code",{children:"forward"})]})," when you need to preserve request attributes."]})]})})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.8s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsx("li",{children:"Keep controllers thin: move business logic to service classes (Model)."}),e.jsx("li",{children:"Use JSTL and EL for views; avoid scriptlets."}),e.jsx("li",{children:"Validate input in the controller before calling the model."}),e.jsxs("li",{children:["Implement a ",e.jsx("strong",{children:"base command"})," that provides common services like logging and authentication."]}),e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"dependency injection"})," (via frameworks or manual) to make commands testable."]})]})})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.9s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"🔍 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-gray-800/50 border border-blue-200 dark:border-gray-700 rounded-xl p-6",children:[e.jsxs("p",{className:"italic leading-relaxed",children:[e.jsx("strong",{children:"Think about…"})," How would you implement a logout feature without modifying every JSP? The Front Controller can handle it by checking a parameter and clearing the session."]}),e.jsxs("p",{className:"mt-3 leading-relaxed",children:[e.jsx("strong",{children:"Observe carefully…"})," The ",e.jsx("code",{children:"FrontControllerServlet"})," uses a ",e.jsx("code",{children:"Map"})," to look up commands. What would happen if the map didn't contain a key? How would you handle 404?"]}),e.jsxs("p",{className:"mt-3 leading-relaxed",children:[e.jsx("strong",{children:"Try changing this…"})," Modify the ",e.jsx("code",{children:"LoginController"})," to also set a welcome message attribute after successful login. Display it on the home page."]})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_1s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"list-check list-inside space-y-2",children:[e.jsx("li",{children:"✅ Understand the MVC pattern and separation of concerns."}),e.jsx("li",{children:"✅ Know the role of Front Controller: central request handling."}),e.jsx("li",{children:"✅ Implement commands with a common interface."}),e.jsx("li",{children:"✅ Use request dispatcher to forward to JSPs."}),e.jsx("li",{children:"✅ Store data in request/session attributes and display via JSTL/EL."}),e.jsx("li",{children:"✅ Map the controller servlet in web.xml."}),e.jsx("li",{children:"✅ Avoid scriptlets and business logic in JSPs."})]})})]}),e.jsx(s,{note:`The MVC pattern is the foundation of professional web development. In my ${r} years of teaching (since 1998), I've seen that students who master this pattern can build maintainable, scalable applications. The Front Controller pattern adds a layer of abstraction that simplifies adding cross-cutting concerns like security and logging. 
        A common mistake is to put too much code in the controller (fat controller). Always delegate heavy lifting to service objects. Also, remember that the view should only display data – no complex logic. 
        Use the request object to pass data to the view, and consider using a request-scoped bean to hold form data. This approach makes your application testable and easier to debug. 
        For example, when building a school management system, you can have a single controller that handles all student-related actions: /student?action=list, /student?action=add, etc. This keeps your URL structure clean and centralizes authorization checks.`})]})};export{b as default};
