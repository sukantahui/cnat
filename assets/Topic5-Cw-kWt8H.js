import{j as e}from"./index-BXlhguQt.js";import{c as t}from"./clsx-B-dksMZM.js";import{J as r}from"./JavaFileLoader-CdULjISb.js";import"./JavaCodeBlock-DvXL45Ks.js";import"./prism-CikWfFON.js";import"./browser-Bf4mcs6x.js";import"./prism-java-BwO6k4I_.js";const s=`import java.io.IOException;\r
import java.io.PrintWriter;\r
import javax.servlet.ServletException;\r
import javax.servlet.annotation.WebServlet;\r
import javax.servlet.http.HttpServlet;\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
\r
/**\r
 * Demonstrates handling different HTTP methods in a Servlet.\r
 */\r
@WebServlet("/method-demo")\r
public class MethodDemoServlet extends HttpServlet {\r
\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        resp.setContentType("text/plain");\r
        PrintWriter out = resp.getWriter();\r
        out.println("GET request received. This is safe and idempotent.");\r
        out.println("Query string: " + req.getQueryString());\r
    }\r
\r
    @Override\r
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        resp.setContentType("text/plain");\r
        PrintWriter out = resp.getWriter();\r
        out.println("POST request received. Used to create a new resource.");\r
        // In a real app, you'd read the body and create something.\r
    }\r
\r
    @Override\r
    protected void doPut(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        resp.setContentType("text/plain");\r
        PrintWriter out = resp.getWriter();\r
        out.println("PUT request received. Used to update (or create) a resource.");\r
    }\r
\r
    @Override\r
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        resp.setContentType("text/plain");\r
        PrintWriter out = resp.getWriter();\r
        out.println("DELETE request received. Resource removed (if it existed).");\r
    }\r
\r
    @Override\r
    protected void doHead(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        // For HEAD, we normally wouldn't write a body.\r
        resp.setContentType("text/plain");\r
        resp.setContentLength(0); // No body\r
        // You can set headers as needed.\r
    }\r
\r
    @Override\r
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        resp.setHeader("Allow", "GET, POST, PUT, DELETE, HEAD, OPTIONS");\r
    }\r
}`,n=`import java.io.IOException;\r
import java.io.PrintWriter;\r
import javax.servlet.ServletException;\r
import javax.servlet.annotation.WebServlet;\r
import javax.servlet.http.HttpServlet;\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
\r
/**\r
 * Demonstrates setting different HTTP status codes.\r
 */\r
@WebServlet("/status-demo")\r
public class StatusDemoServlet extends HttpServlet {\r
\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
\r
        String codeParam = req.getParameter("code");\r
\r
        if (codeParam == null) {\r
            // 200 OK - default\r
            resp.setStatus(HttpServletResponse.SC_OK);\r
            resp.setContentType("text/plain");\r
            resp.getWriter().println("Status: 200 OK");\r
            return;\r
        }\r
\r
        try {\r
            int code = Integer.parseInt(codeParam);\r
            switch (code) {\r
                case 200:\r
                    resp.setStatus(HttpServletResponse.SC_OK);\r
                    resp.getWriter().println("200 OK – All good.");\r
                    break;\r
                case 201:\r
                    resp.setStatus(HttpServletResponse.SC_CREATED);\r
                    resp.setHeader("Location", "/new-resource/123");\r
                    resp.getWriter().println("201 Created – New resource at /new-resource/123");\r
                    break;\r
                case 204:\r
                    resp.setStatus(HttpServletResponse.SC_NO_CONTENT);\r
                    // No body sent\r
                    break;\r
                case 301:\r
                    resp.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY);\r
                    resp.setHeader("Location", "/new-location");\r
                    resp.getWriter().println("301 Moved Permanently – Redirecting...");\r
                    break;\r
                case 400:\r
                    resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);\r
                    resp.getWriter().println("400 Bad Request – Check your parameters.");\r
                    break;\r
                case 401:\r
                    resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);\r
                    resp.setHeader("WWW-Authenticate", "Basic realm=\\"User Visible Realm\\"");\r
                    resp.getWriter().println("401 Unauthorized – Please log in.");\r
                    break;\r
                case 403:\r
                    resp.setStatus(HttpServletResponse.SC_FORBIDDEN);\r
                    resp.getWriter().println("403 Forbidden – You don't have permission.");\r
                    break;\r
                case 404:\r
                    resp.setStatus(HttpServletResponse.SC_NOT_FOUND);\r
                    resp.getWriter().println("404 Not Found – Resource doesn't exist.");\r
                    break;\r
                case 500:\r
                    resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);\r
                    resp.getWriter().println("500 Internal Server Error – Something went wrong.");\r
                    break;\r
                default:\r
                    resp.setStatus(HttpServletResponse.SC_OK);\r
                    resp.getWriter().println("Default 200 – Unrecognized code, but OK.");\r
            }\r
        } catch (NumberFormatException e) {\r
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);\r
            resp.getWriter().println("400 Bad Request – Invalid code parameter.");\r
        }\r
    }\r
}`,a=`import java.io.IOException;\r
import java.io.PrintWriter;\r
import java.util.Enumeration;\r
import javax.servlet.ServletException;\r
import javax.servlet.annotation.WebServlet;\r
import javax.servlet.http.HttpServlet;\r
import javax.servlet.http.HttpServletRequest;\r
import javax.servlet.http.HttpServletResponse;\r
\r
/**\r
 * Demonstrates reading request headers and setting response headers.\r
 */\r
@WebServlet("/header-demo")\r
public class HeaderDemoServlet extends HttpServlet {\r
\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
\r
        // --- Read request headers ---\r
        StringBuilder requestHeaders = new StringBuilder();\r
        Enumeration<String> headerNames = req.getHeaderNames();\r
        while (headerNames.hasMoreElements()) {\r
            String name = headerNames.nextElement();\r
            String value = req.getHeader(name);\r
            requestHeaders.append(name).append(": ").append(value).append("\\n");\r
        }\r
\r
        // --- Set response headers ---\r
        resp.setContentType("text/plain");\r
        resp.setHeader("X-Powered-By", "Java Servlet");\r
        resp.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");\r
        resp.setHeader("X-Custom-Header", "Hello from HeaderDemoServlet");\r
\r
        // Optionally, set a cookie\r
        // Cookie cookie = new Cookie("demo", "value");\r
        // resp.addCookie(cookie);\r
\r
        // --- Write response body ---\r
        PrintWriter out = resp.getWriter();\r
        out.println("Request Headers Received:");\r
        out.println("=========================");\r
        out.println(requestHeaders.toString());\r
\r
        out.println("\\nResponse Headers Set:");\r
        out.println("======================");\r
        out.println("Content-Type: " + resp.getContentType());\r
        out.println("X-Powered-By: Java Servlet");\r
        out.println("Cache-Control: no-cache, no-store, must-revalidate");\r
        out.println("X-Custom-Header: Hello from HeaderDemoServlet");\r
    }\r
\r
    @Override\r
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        // For POST, we might read the body content type and length\r
        resp.setContentType("text/plain");\r
        PrintWriter out = resp.getWriter();\r
        out.println("POST received. Content-Type: " + req.getContentType());\r
        out.println("Content-Length: " + req.getContentLength());\r
        out.println("Character Encoding: " + req.getCharacterEncoding());\r
    }\r
}`;function p(){return e.jsxs("div",{className:"dark",children:[e.jsx("main",{className:t("min-h-screen bg-gray-50 px-4 py-12 font-sans leading-relaxed text-gray-800","dark:bg-gray-900 dark:text-gray-200","motion-safe:animate-[fadeIn_0.6s_ease-out]"),children:e.jsxs("div",{className:"mx-auto max-w-4xl space-y-8",children:[e.jsxs("header",{className:t("border-l-4 border-blue-600 pl-4","motion-safe:animate-[slideUp_0.5s_ease-out]"),children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:"HTTP Protocol Basics"}),e.jsx("p",{className:"mt-2 text-lg text-gray-600 dark:text-gray-400",children:"Methods, Status Codes, and Headers – The Language of the Web."})]}),e.jsxs("section",{className:t("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[100ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"What is HTTP?"}),e.jsx("p",{className:"mb-3",children:"The Hypertext Transfer Protocol (HTTP) is the foundation of data communication on the World Wide Web. It is a stateless request‑response protocol: a client (usually a browser) sends a request to a server, and the server returns a response."}),e.jsx("p",{children:"Each HTTP message consists of a start line (request line or status line), headers (metadata), and an optional body. Understanding HTTP is essential for any web developer, as it dictates how clients and servers interact."})]}),e.jsxs("section",{className:t("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[200ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"HTTP Request Methods"}),e.jsx("p",{className:"mb-3",children:"The HTTP method (or verb) indicates the desired action to be performed on the identified resource. The most common methods are:"}),e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[e.jsxs("div",{className:"rounded-lg border-l-4 border-blue-600 bg-blue-50 p-3 dark:bg-blue-900/20",children:[e.jsx("h3",{className:"font-bold text-blue-800 dark:text-blue-300",children:"GET"}),e.jsx("p",{className:"text-sm",children:"Retrieve data from the server. Should be safe (no side effects) and idempotent. Used for fetching pages, images, API data."})]}),e.jsxs("div",{className:"rounded-lg border-l-4 border-green-600 bg-green-50 p-3 dark:bg-green-900/20",children:[e.jsx("h3",{className:"font-bold text-green-800 dark:text-green-300",children:"POST"}),e.jsx("p",{className:"text-sm",children:"Submit data to the server, often creating a new resource. Not idempotent – multiple requests may create multiple resources."})]}),e.jsxs("div",{className:"rounded-lg border-l-4 border-yellow-600 bg-yellow-50 p-3 dark:bg-yellow-900/20",children:[e.jsx("h3",{className:"font-bold text-yellow-800 dark:text-yellow-300",children:"PUT"}),e.jsx("p",{className:"text-sm",children:"Update an existing resource (or create if it doesn’t exist). Idempotent – multiple identical requests have the same effect."})]}),e.jsxs("div",{className:"rounded-lg border-l-4 border-red-600 bg-red-50 p-3 dark:bg-red-900/20",children:[e.jsx("h3",{className:"font-bold text-red-800 dark:text-red-300",children:"DELETE"}),e.jsx("p",{className:"text-sm",children:"Remove a resource. Idempotent – after the first deletion, subsequent calls return the same (e.g., 404)."})]}),e.jsxs("div",{className:"rounded-lg border-l-4 border-purple-600 bg-purple-50 p-3 dark:bg-purple-900/20",children:[e.jsx("h3",{className:"font-bold text-purple-800 dark:text-purple-300",children:"HEAD"}),e.jsx("p",{className:"text-sm",children:"Like GET but returns only headers, no body. Useful for checking resource existence or metadata."})]}),e.jsxs("div",{className:"rounded-lg border-l-4 border-indigo-600 bg-indigo-50 p-3 dark:bg-indigo-900/20",children:[e.jsx("h3",{className:"font-bold text-indigo-800 dark:text-indigo-300",children:"OPTIONS"}),e.jsx("p",{className:"text-sm",children:"Ask the server which methods are supported for a given resource. Used in CORS preflight requests."})]})]})]}),e.jsxs("section",{className:t("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[300ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"HTTP Status Codes"}),e.jsx("p",{className:"mb-3",children:"After receiving and processing a request, the server responds with a status code indicating the result. Codes are grouped into five classes:"}),e.jsxs("div",{className:"grid gap-3 sm:grid-cols-5",children:[e.jsxs("div",{className:"rounded bg-gray-100 p-2 text-center dark:bg-gray-700",children:[e.jsx("span",{className:"font-bold text-gray-800 dark:text-gray-200",children:"1xx"}),e.jsx("p",{className:"text-xs",children:"Informational"})]}),e.jsxs("div",{className:"rounded bg-green-100 p-2 text-center dark:bg-green-900/30",children:[e.jsx("span",{className:"font-bold text-green-800 dark:text-green-300",children:"2xx"}),e.jsx("p",{className:"text-xs",children:"Success"})]}),e.jsxs("div",{className:"rounded bg-yellow-100 p-2 text-center dark:bg-yellow-900/30",children:[e.jsx("span",{className:"font-bold text-yellow-800 dark:text-yellow-300",children:"3xx"}),e.jsx("p",{className:"text-xs",children:"Redirection"})]}),e.jsxs("div",{className:"rounded bg-red-100 p-2 text-center dark:bg-red-900/30",children:[e.jsx("span",{className:"font-bold text-red-800 dark:text-red-300",children:"4xx"}),e.jsx("p",{className:"text-xs",children:"Client Error"})]}),e.jsxs("div",{className:"rounded bg-orange-100 p-2 text-center dark:bg-orange-900/30",children:[e.jsx("span",{className:"font-bold text-orange-800 dark:text-orange-300",children:"5xx"}),e.jsx("p",{className:"text-xs",children:"Server Error"})]})]}),e.jsxs("div",{className:"mt-4 grid gap-2 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:"Common 2xx Success"}),e.jsxs("ul",{className:"list-inside list-disc text-sm",children:[e.jsxs("li",{children:[e.jsx("code",{children:"200 OK"})," – Standard success for GET, PUT, etc."]}),e.jsxs("li",{children:[e.jsx("code",{children:"201 Created"})," – Resource created (POST)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"204 No Content"})," – Success, no body (e.g., DELETE)."]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:"Common 4xx Client Error"}),e.jsxs("ul",{className:"list-inside list-disc text-sm",children:[e.jsxs("li",{children:[e.jsx("code",{children:"400 Bad Request"})," – Malformed syntax."]}),e.jsxs("li",{children:[e.jsx("code",{children:"401 Unauthorized"})," – Authentication required."]}),e.jsxs("li",{children:[e.jsx("code",{children:"403 Forbidden"})," – Authenticated but not allowed."]}),e.jsxs("li",{children:[e.jsx("code",{children:"404 Not Found"})," – Resource doesn’t exist."]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:"Common 3xx Redirection"}),e.jsxs("ul",{className:"list-inside list-disc text-sm",children:[e.jsxs("li",{children:[e.jsx("code",{children:"301 Moved Permanently"})," – New URL."]}),e.jsxs("li",{children:[e.jsx("code",{children:"302 Found"})," – Temporary redirect."]}),e.jsxs("li",{children:[e.jsx("code",{children:"304 Not Modified"})," – Use cached version."]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:"Common 5xx Server Error"}),e.jsxs("ul",{className:"list-inside list-disc text-sm",children:[e.jsxs("li",{children:[e.jsx("code",{children:"500 Internal Server Error"})," – Generic server error."]}),e.jsxs("li",{children:[e.jsx("code",{children:"502 Bad Gateway"})," – Invalid response from upstream."]}),e.jsxs("li",{children:[e.jsx("code",{children:"503 Service Unavailable"})," – Temporarily overloaded."]})]})]})]})]}),e.jsxs("section",{className:t("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[400ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"HTTP Headers"}),e.jsx("p",{className:"mb-3",children:"Headers provide additional information about the request or response. They are key‑value pairs sent after the start line."}),e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-blue-700 dark:text-blue-300",children:"Common Request Headers"}),e.jsxs("ul",{className:"list-inside list-disc text-sm",children:[e.jsxs("li",{children:[e.jsx("code",{children:"Host"})," – Domain name of the server."]}),e.jsxs("li",{children:[e.jsx("code",{children:"User-Agent"})," – Client software (browser, curl)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Accept"})," – Media types the client can handle (e.g., ",e.jsx("code",{children:"application/json"}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Content-Type"})," – Media type of the request body (e.g., ",e.jsx("code",{children:"application/x-www-form-urlencoded"}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Authorization"})," – Credentials for authentication."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Cookie"})," – Previously stored cookies."]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-green-700 dark:text-green-300",children:"Common Response Headers"}),e.jsxs("ul",{className:"list-inside list-disc text-sm",children:[e.jsxs("li",{children:[e.jsx("code",{children:"Content-Type"})," – Media type of the response body."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Content-Length"})," – Size of the response body in bytes."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Set-Cookie"})," – Instructs the client to store a cookie."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Cache-Control"})," – Caching directives."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Location"})," – Used in redirects (3xx) to specify new URL."]})]})]})]})]}),e.jsxs("section",{className:t("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[500ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Handling HTTP in Servlets"}),e.jsx("p",{className:"mb-4",children:"The following examples show how to work with methods, status codes, and headers in Java Servlets."}),e.jsxs("div",{className:"mb-6",children:[e.jsx(r,{fileModule:s,title:"MethodDemoServlet.java",highlightLines:[8,22]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"A servlet that responds differently based on the HTTP method."})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(r,{fileModule:n,title:"StatusDemoServlet.java",highlightLines:[8,22]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Demonstrates setting different status codes and sending custom error pages."})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(r,{fileModule:a,title:"HeaderDemoServlet.java",highlightLines:[12,30]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:"Shows how to read request headers and set response headers."})]})]}),e.jsxs("section",{className:t("rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[600ms]"),children:[e.jsx("h2",{className:"mb-4 text-xl font-semibold text-gray-900 dark:text-white",children:"Real‑World Context"}),e.jsx("p",{className:"mb-3",children:"Every time you browse the web, HTTP is at work. When Swadeep visits a college website in Barrackpore, his browser sends a GET request. The server responds with a 200 OK and the HTML page. If he submits a form, it's a POST request. If a page has moved, the server might return 301 with a Location header to redirect."}),e.jsxs("p",{children:["RESTful APIs rely heavily on proper HTTP method and status code usage. A well‑designed API uses 201 for creation, 204 for deletion, and 404 for missing resources. Headers like ",e.jsx("code",{children:"Authorization"})," carry tokens, and ",e.jsx("code",{children:"Content-Type"})," tells the client how to parse the response."]})]}),e.jsxs("section",{className:t("rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20","border border-blue-200 dark:border-blue-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[700ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"💡 Tips & Tricks"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use browser DevTools:"})," The Network tab shows all HTTP requests/responses – headers, status, timing. Great for debugging."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Learn curl:"})," ",e.jsx("code",{children:"curl -v"})," shows the full HTTP exchange. It's invaluable for testing APIs."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Understand idempotency:"})," GET, PUT, DELETE are idempotent; POST is not. This affects how you handle retries."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use correct status codes:"})," Don't just return 200 for everything. Use 201 for creation, 400 for bad input, etc. This helps clients understand what happened."]})]})]}),e.jsxs("section",{className:t("rounded-lg bg-red-50 p-6 dark:bg-red-900/20","border border-red-200 dark:border-red-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[800ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"⚠️ Common Mistakes Beginners Make"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Using GET for state changes:"})," GET should be safe. Using it to delete an item can cause accidental deletions (e.g., web crawlers)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Ignoring status codes:"})," Writing client code that only checks for 200 and fails on others."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Misusing redirects:"})," Using 302 when 301 is more appropriate, or forgetting the Location header."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Not setting Content-Type:"})," The client may not know how to interpret the response."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Assuming all clients send same headers:"})," ","Always check for null or missing headers."]})]})]}),e.jsxs("section",{className:t("rounded-lg bg-green-50 p-6 dark:bg-green-900/20","border border-green-200 dark:border-green-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[900ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Follow REST conventions:"})," Use GET for retrieval, POST for creation, PUT for update, DELETE for removal."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Return appropriate status codes:"})," Be precise. A validation error should be 400, not 500."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Set security headers:"})," Use",e.jsx("code",{children:"X-Content-Type-Options: nosniff"}),", ",e.jsx("code",{children:"X-Frame-Options"}),", etc., to improve security."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Use standard header names:"})," Follow IANA specifications. Custom headers can be prefixed with ",e.jsx("code",{children:"X-"}),"(though this is now discouraged; use a consistent prefix)."]})]})]}),e.jsxs("section",{className:t("rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20","border border-yellow-200 dark:border-yellow-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[1000ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"📋 Mini Checklist – What to Remember"}),e.jsxs("ul",{className:"list-inside list-disc space-y-2",children:[e.jsx("li",{children:"☐ HTTP methods: GET (safe), POST (create), PUT (update), DELETE (remove)."}),e.jsx("li",{children:"☐ Status codes: 2xx success, 3xx redirection, 4xx client error, 5xx server error."}),e.jsx("li",{children:"☐ Headers carry metadata (Content-Type, Authorization, etc.)."}),e.jsxs("li",{children:["☐ Servlets provide methods like ",e.jsx("code",{children:"getMethod()"}),", ",e.jsx("code",{children:"setStatus()"}),", and header access."]}),e.jsx("li",{children:"☐ Always set correct Content-Type."}),e.jsx("li",{children:"☐ Use browser DevTools or curl to inspect HTTP traffic."})]})]}),e.jsxs("section",{className:t("rounded-lg bg-indigo-50 p-6 dark:bg-indigo-900/20","border border-indigo-200 dark:border-indigo-800","transition-all duration-300 hover:shadow-lg","motion-safe:animate-[slideUp_0.5s_ease-out] motion-safe:animation-delay-[1100ms]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"🤔 Think About…"}),e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-medium",children:"Observe carefully:"}),` Why is GET considered "safe" and "idempotent"? What could go wrong if a bank's transfer API used GET instead of POST?`]}),e.jsxs("p",{children:[e.jsx("span",{className:"font-medium",children:"Try changing this:"})," In the MethodDemoServlet, what happens if you send a PUT request to a servlet that only implements doGet()? (Hint: check the HTTP spec for allowed methods and the default servlet behavior.)"]})]}),e.jsxs("section",{className:t("rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20","border border-purple-200 dark:border-purple-800","transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"),children:[e.jsx("h2",{className:"mb-3 text-xl font-semibold text-gray-900 dark:text-white",children:"👨‍🏫 Teacher’s Note – Sukanta Hui"}),e.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"mb-2",children:[e.jsx("span",{className:"font-bold",children:"Sukanta Hui"})," (27 years of experience in Programming, RDBMS, OS, and Web Development)"]}),e.jsxs("p",{className:"mb-2",children:["📧"," ",e.jsx("a",{href:"mailto:sukantahui@codernaccotax.co.in",className:"text-blue-600 dark:text-blue-400 hover:underline",children:"sukantahui@codernaccotax.co.in"})]}),e.jsx("p",{children:"📞 7003756860"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"italic",children:["“HTTP is the language your applications speak. I've seen too many developers treat it as a black box. But understanding the details – like why a 304 status saves bandwidth, or how to properly use cache headers – separates a good developer from a great one. When Abhronila was debugging a login issue, it turned out she wasn't sending the session cookie because she forgot to check the ",e.jsx("code",{children:"Set-Cookie"}),"header. Always inspect the raw HTTP – it never lies.”"]}),e.jsxs("p",{className:"mt-2 text-sm",children:[e.jsx("span",{className:"font-semibold",children:"Remember:"})," HTTP is your friend, not your enemy. Learn its nuances."]})]})]})]})]})}),e.jsx("style",{children:`
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

        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-\\[fadeIn_0\\.6s_ease-out\\],
          .motion-safe\\:animate-\\[slideUp_0\\.5s_ease-out\\] {
            animation: none !important;
          }
        }
      `})]})}export{p as default};
