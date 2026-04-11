import{j as e}from"./index-CR1DasM0.js";import{J as t}from"./JavaFileLoader-DxLN4hA4.js";import{T as s}from"./TeacherSukantaHui-DVbF6Vfx.js";import"./JavaCodeBlock-BUWemFFh.js";import"./prism-JAmis3eQ.js";import"./browser-CxDBipX-.js";import"./prism-java-BwO6k4I_.js";import"./git-branch-ByGo6A14.js";const a=`<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>\r
<!DOCTYPE html>\r
<html>\r
<head>\r
    <title>AJAX Demo</title>\r
    <script>\r
        function loadData() {\r
            var xhr = new XMLHttpRequest();\r
            xhr.onreadystatechange = function() {\r
                if (xhr.readyState == 4 && xhr.status == 200) {\r
                    document.getElementById("result").innerHTML = xhr.responseText;\r
                }\r
            };\r
            var name = document.getElementById("name").value;\r
            xhr.open("GET", "DataServlet?name=" + encodeURIComponent(name), true);\r
            xhr.send();\r
        }\r
    <\/script>\r
</head>\r
<body>\r
    <h2>AJAX with XMLHttpRequest</h2>\r
    Enter name: <input type="text" id="name" />\r
    <button onclick="loadData()">Say Hello</button>\r
    <div id="result"></div>\r
</body>\r
</html>`,n=`package com.example.servlet;\r
\r
import javax.servlet.ServletException;\r
import javax.servlet.http.HttpServlet;\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
import java.io.IOException;\r
\r
public class DataServlet extends HttpServlet {\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\r
        String name = req.getParameter("name");\r
        if (name == null || name.isEmpty()) {\r
            name = "Guest";\r
        }\r
        resp.setContentType("text/plain");\r
        resp.getWriter().write("Hello, " + name + "!");\r
    }\r
}`,l=`// Modern fetch API example\r
async function fetchData() {\r
    try {\r
        const response = await fetch('DataServlet?name=Swadeep');\r
        const data = await response.text();\r
        document.getElementById('result').innerHTML = data;\r
    } catch (error) {\r
        console.error('Error:', error);\r
    }\r
}`,i=`<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>\r
<!DOCTYPE html>\r
<html>\r
<head>\r
    <title>jQuery AJAX Demo</title>\r
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>\r
    <script>\r
        $(document).ready(function() {\r
            $("#loadBtn").click(function() {\r
                $.ajax({\r
                    url: "DataServlet",\r
                    data: { name: $("#name").val() },\r
                    success: function(response) {\r
                        $("#result").html(response);\r
                    },\r
                    error: function() {\r
                        $("#result").html("Error occurred");\r
                    }\r
                });\r
            });\r
        });\r
    <\/script>\r
</head>\r
<body>\r
    <h2>jQuery AJAX</h2>\r
    Name: <input type="text" id="name" />\r
    <button id="loadBtn">Greet</button>\r
    <div id="result"></div>\r
</body>\r
</html>`,d=`package com.example.servlet;\r
\r
import javax.servlet.ServletException;\r
import javax.servlet.http.HttpServlet;\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
import java.io.IOException;\r
\r
public class JsonServlet extends HttpServlet {\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\r
        resp.setContentType("application/json");\r
        resp.setCharacterEncoding("UTF-8");\r
        String json = "{\\"message\\":\\"Hello, JSON!\\", \\"status\\":\\"success\\"}";\r
        resp.getWriter().write(json);\r
    }\r
}`,o=`<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>\r
<!DOCTYPE html>\r
<html>\r
<head>\r
    <title>Dynamic Table from JSON</title>\r
    <script>\r
        async function loadStudents() {\r
            try {\r
                const response = await fetch('StudentServlet');\r
                const students = await response.json();\r
                let table = '<table border="1"><tr><th>Name</th><th>Grade</th></tr>';\r
                students.forEach(s => {\r
                    table += \`<tr><td>\${s.name}</td><td>\${s.grade}</td></tr>\`;\r
                });\r
                table += '</table>';\r
                document.getElementById('tableContainer').innerHTML = table;\r
            } catch (error) {\r
                console.error('Error:', error);\r
            }\r
        }\r
    <\/script>\r
</head>\r
<body>\r
    <h2>Student List (AJAX)</h2>\r
    <button onclick="loadStudents()">Load Students</button>\r
    <div id="tableContainer"></div>\r
</body>\r
</html>`,y=()=>{const r=new Date().getFullYear()-1998;return e.jsxs("div",{className:"w-full max-w-7xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 dark:text-gray-100",children:[e.jsxs("div",{className:"text-center space-y-2 animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent",children:"Introduction to AJAX Integration"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400 leading-relaxed",children:"Asynchronous web interactions with JSP and Servlets"})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"What is AJAX?"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]",children:[e.jsxs("p",{className:"leading-relaxed mb-4",children:[e.jsx("strong",{children:"AJAX (Asynchronous JavaScript and XML)"})," is a technique that allows web pages to communicate with the server without reloading the entire page. It sends requests in the background and updates parts of the page dynamically."]}),e.jsx("p",{className:"leading-relaxed",children:"In JSP applications, AJAX is typically implemented using JavaScript (or jQuery) on the client side, and a servlet or JSP on the server side that returns data (often in JSON or XML format). This enables responsive, interactive features like auto‑complete, live search, form validation, and real‑time updates."})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.2s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"How AJAX Works (Visual)"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"750",height:"250",viewBox:"0 0 750 250",className:"w-full max-w-4xl h-auto",children:[e.jsx("defs",{children:e.jsx("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"#3b82f6"})})}),e.jsx("rect",{x:"20",y:"90",width:"100",height:"60",rx:"8",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"70",y:"125",textAnchor:"middle",fill:"white",children:"Browser"}),e.jsx("line",{x1:"70",y1:"150",x2:"70",y2:"190",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"20",y:"190",width:"100",height:"50",rx:"8",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"70",y:"222",textAnchor:"middle",fill:"white",children:"JavaScript"}),e.jsx("line",{x1:"120",y1:"215",x2:"160",y2:"215",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"170",y:"190",width:"100",height:"50",rx:"8",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"220",y:"222",textAnchor:"middle",fill:"white",children:"Servlet/JSP"}),e.jsx("line",{x1:"220",y1:"190",x2:"220",y2:"120",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsx("rect",{x:"150",y:"30",width:"140",height:"60",rx:"8",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"2"}),e.jsx("text",{x:"220",y:"65",textAnchor:"middle",fill:"white",children:"Partial Page Update"}),e.jsx("line",{x1:"120",y1:"120",x2:"150",y2:"60",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrow)"})]})}),e.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 mt-4",children:"JavaScript initiates a request, the server responds with data, and the page updates dynamically."})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.3s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"Key Components"}),e.jsxs("div",{className:"grid gap-6 md:grid-cols-2",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:scale-105",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"Client‑Side (JavaScript)"}),e.jsxs("p",{className:"leading-relaxed",children:["Uses ",e.jsx("code",{children:"XMLHttpRequest"})," or the modern ",e.jsx("code",{children:"fetch()"})," API to send asynchronous requests and handle responses."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:scale-105",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"Server‑Side (JSP/Servlet)"}),e.jsx("p",{className:"leading-relaxed",children:"Processes the request and returns data (plain text, HTML, JSON, or XML). No full page rendering."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:scale-105",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"Data Format"}),e.jsx("p",{className:"leading-relaxed",children:"JSON (JavaScript Object Notation) is the most common today due to its lightweight nature and easy parsing."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:scale-105",children:[e.jsx("h3",{className:"text-xl font-bold text-blue-600 dark:text-blue-400 mb-2",children:"DOM Manipulation"}),e.jsx("p",{className:"leading-relaxed",children:"After receiving the response, JavaScript updates specific parts of the DOM (e.g., filling a dropdown, displaying a message)."})]})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.4s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"1. Basic AJAX with XMLHttpRequest (JSP + Servlet)"}),e.jsx(t,{fileModule:a,title:"ajaxDemo.jsp",highlightLines:[15,16,17,18,19,20]}),e.jsx("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:"A JSP page with JavaScript that sends a request to a servlet and updates a div with the response."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"2. Servlet Handling AJAX Request"}),e.jsx(t,{fileModule:n,title:"DataServlet.java",highlightLines:[18,19,20]}),e.jsx("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:"A simple servlet that returns a text message based on a parameter."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"3. Using fetch() API (Modern JavaScript)"}),e.jsx(t,{fileModule:l,title:"simpleAjax.js",highlightLines:[3,4,5,6]}),e.jsx("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:"A JavaScript function using the fetch API to get data from a servlet."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"4. jQuery AJAX Example"}),e.jsx(t,{fileModule:i,title:"jqueryAjax.jsp",highlightLines:[10,11,12,13,14]}),e.jsxs("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:["Uses jQuery's ",e.jsx("code",{children:"$.ajax"})," for simplicity, often used in legacy projects."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"5. Returning JSON from Servlet"}),e.jsx(t,{fileModule:d,title:"JsonServlet.java",highlightLines:[14,15,16]}),e.jsx("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:"Creates a JSON string (manually or using a library like Gson) and returns it."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"6. Dynamic Table from JSON Response"}),e.jsx(t,{fileModule:o,title:"dynamicTable.jsp",highlightLines:[15,16,17,18]}),e.jsx("p",{className:"mt-3 text-sm text-gray-600 dark:text-gray-400",children:"Fetches JSON data and builds an HTML table dynamically."})]})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.5s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"Real-world Applications"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("ul",{className:"list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Live Search / Autocomplete:"})," As the user types, suggestions are fetched from the server."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Form Validation:"})," Validate email or username availability without reloading."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Infinite Scrolling:"})," Load more content as the user scrolls down."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Chat Applications:"})," Poll the server for new messages and display them."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dashboard Widgets:"})," Refresh data (like stock prices) periodically."]})]}),e.jsx("p",{className:"mt-4 text-sm italic text-gray-500 dark:text-gray-400",children:"Example: In a school system, AJAX can be used to fetch student details as you type their roll number, or to load exam results without refreshing the page."})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.6s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"💡 Tips & Tricks"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:'response.setContentType("application/json")'})," to inform the browser of JSON data."]}),e.jsx("li",{children:"For security, always validate and sanitize input on the server side."}),e.jsx("li",{children:"Handle errors gracefully: show user‑friendly messages when the request fails."}),e.jsx("li",{children:"Consider using a library like Gson or Jackson to convert Java objects to JSON easily."}),e.jsx("li",{children:"For larger applications, implement a RESTful API (e.g., using JAX‑RS or Spring MVC) instead of plain servlets."})]})})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.7s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"⚠️ Common Mistakes"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Forgetting to set response content type:"})," Browser may not parse JSON/XML correctly."]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Not handling asynchronous nature:"})," Trying to use the result before the request completes."]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Hardcoding URLs:"})," Use relative paths or ",e.jsx("code",{children:"${pageContext.request.contextPath}"})," for portability."]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Returning full HTML page fragments:"})," Usually better to return structured data (JSON) and let client build UI."]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Ignoring cross‑origin issues:"})," If servlet is on a different domain, CORS headers must be set."]})]})})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.8s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:["Use the ",e.jsx("code",{children:"fetch"})," API for modern browsers; fallback to XMLHttpRequest if needed."]}),e.jsx("li",{children:"Always send a meaningful HTTP status code (200, 404, 500) and handle accordingly."}),e.jsx("li",{children:"Implement a loading indicator to improve user experience during requests."}),e.jsx("li",{children:"Keep servlets focused on data access; separate business logic into service classes."}),e.jsx("li",{children:"Log AJAX requests on the server for debugging."})]})})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_0.9s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"🔍 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-gray-800/50 border border-blue-200 dark:border-gray-700 rounded-xl p-6",children:[e.jsxs("p",{className:"italic leading-relaxed",children:[e.jsx("strong",{children:"Think about…"}),' How would you implement a "check username availability" feature? The client would send the username, the servlet would query a database, and return a boolean or message.']}),e.jsxs("p",{className:"mt-3 leading-relaxed",children:[e.jsx("strong",{children:"Observe carefully…"})," In the ",e.jsx("code",{children:"jsonServlet.java"}),", we manually construct JSON. Can you think of a library that would make this easier?"]}),e.jsxs("p",{className:"mt-3 leading-relaxed",children:[e.jsx("strong",{children:"Try changing this…"})," Modify the ",e.jsx("code",{children:"dynamicTable.jsp"})," to sort the table by clicking on a column header, fetching sorted data from the server."]})]})]}),e.jsxs("section",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out_1s]",children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl",children:e.jsxs("ul",{className:"list-check list-inside space-y-2",children:[e.jsx("li",{children:"✅ Understand the AJAX workflow: client → server → update."}),e.jsx("li",{children:"✅ Know how to create XMLHttpRequest or use fetch()."}),e.jsx("li",{children:"✅ Implement a servlet that returns JSON or plain text."}),e.jsx("li",{children:"✅ Handle the response and update DOM elements."}),e.jsx("li",{children:"✅ Set proper response content type."}),e.jsx("li",{children:"✅ Handle errors and loading states."}),e.jsx("li",{children:"✅ Consider using libraries for easier JSON handling."})]})})]}),e.jsx(s,{note:`AJAX is a cornerstone of modern web applications. In my ${r} years of teaching (since 1998), I've seen students transform static JSPs into interactive, responsive applications once they grasp AJAX. 
        A common pitfall is trying to mix AJAX with full page submits. Remember that AJAX is asynchronous; you must handle the response in a callback. 
        When working with JSP, a typical pattern is to have a servlet act as a REST endpoint (returning JSON) and JSPs as the views. This keeps your code clean and maintainable.
        I recommend starting with fetch() and JSON, as they are the current standards. Don't forget to use the 'async/await' syntax to make your code cleaner. 
        Also, always consider security: validate inputs on the server side, and use HTTPS in production.`})]})};export{y as default};
