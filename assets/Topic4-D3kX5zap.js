import{r as o,j as e}from"./index-DKhGj2r9.js";import{J as i}from"./JavaFileLoader-DwhOVPk0.js";import{F as l}from"./FAQTemplate-DNMa4yDj.js";import{T as a}from"./TeacherSukantaHui-C0AXZMBk.js";import"./JavaCodeBlock-BDo80ffG.js";import"./prism-CMJExfNS.js";import"./browser-DA-_IcxN.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";import"./github-BlE0UCNo.js";import"./createLucideIcon-DZ4EMxs8.js";import"./git-branch-BCLsXsvv.js";const c=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
\r
public class CookieServlet extends HttpServlet {\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        // Create a cookie\r
        Cookie userCookie = new Cookie("username", "Swadeep");\r
        userCookie.setMaxAge(60 * 60 * 24); // 1 day\r
        userCookie.setPath("/");\r
        userCookie.setHttpOnly(true);\r
        resp.addCookie(userCookie);\r
\r
        // Read cookies from request\r
        Cookie[] cookies = req.getCookies();\r
        String userName = null;\r
        if (cookies != null) {\r
            for (Cookie c : cookies) {\r
                if ("username".equals(c.getName())) {\r
                    userName = c.getValue();\r
                    break;\r
                }\r
            }\r
        }\r
\r
        resp.setContentType("text/html");\r
        PrintWriter out = resp.getWriter();\r
        out.println("<h2>Hello " + (userName != null ? userName : "Guest") + "</h2>");\r
        out.println("<p>Cookie has been set (if not already).</p>");\r
    }\r
}`,d=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
\r
public class LoginSessionServlet extends HttpServlet {\r
    @Override\r
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        String username = req.getParameter("username");\r
        String password = req.getParameter("password");\r
\r
        // Dummy authentication\r
        if ("Tuhina".equals(username) && "pass123".equals(password)) {\r
            HttpSession session = req.getSession();\r
            session.setAttribute("user", username);\r
            session.setMaxInactiveInterval(30 * 60); // 30 minutes\r
\r
            resp.sendRedirect("dashboard");\r
        } else {\r
            resp.sendRedirect("login.html?error=1");\r
        }\r
    }\r
\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        HttpSession session = req.getSession(false);\r
        if (session != null && session.getAttribute("user") != null) {\r
            resp.getWriter().println("Welcome back, " + session.getAttribute("user"));\r
        } else {\r
            resp.getWriter().println("Not logged in");\r
        }\r
    }\r
}`,x=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
\r
public class ProfileServlet extends HttpServlet {\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        HttpSession session = req.getSession();\r
        // Always encode URLs before outputting them\r
        String profileLink = resp.encodeURL("profile/view");\r
        String editLink = resp.encodeURL("profile/edit");\r
        // For redirects:\r
        String redirectLocation = resp.encodeRedirectURL("dashboard");\r
\r
        resp.setContentType("text/html");\r
        PrintWriter out = resp.getWriter();\r
        out.println("<a href='" + profileLink + "'>View Profile</a><br/>");\r
        out.println("<a href='" + editLink + "'>Edit Profile</a>");\r
    }\r
}`,h=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
\r
public class SessionTrackingDemo extends HttpServlet {\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        // 1. Get or create session\r
        HttpSession session = req.getSession();\r
        // 2. Store some data\r
        Integer visitCount = (Integer) session.getAttribute("visitCount");\r
        if (visitCount == null) visitCount = 0;\r
        visitCount++;\r
        session.setAttribute("visitCount", visitCount);\r
\r
        // 3. Set a persistent cookie (example)\r
        Cookie pref = new Cookie("theme", "dark");\r
        pref.setMaxAge(60*60*24*30);\r
        pref.setPath("/");\r
        resp.addCookie(pref);\r
\r
        // 4. Generate encoded URLs for fallback\r
        String nextLink = resp.encodeURL("next");\r
\r
        resp.setContentType("text/html");\r
        PrintWriter out = resp.getWriter();\r
        out.println("<p>Session ID: " + session.getId() + "</p>");\r
        out.println("<p>Visit count: " + visitCount + "</p>");\r
        out.println("<a href='" + nextLink + "'>Next page</a>");\r
    }\r
}`,p=`import java.io.*;\r
import javax.servlet.*;\r
import javax.servlet.http.*;\r
\r
public class LogoutServlet extends HttpServlet {\r
    @Override\r
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)\r
            throws ServletException, IOException {\r
        HttpSession session = req.getSession(false);\r
        if (session != null) {\r
            session.invalidate();  // destroys session\r
        }\r
        // Optionally delete the session cookie\r
        Cookie cookie = new Cookie("JSESSIONID", "");\r
        cookie.setMaxAge(0);\r
        resp.addCookie(cookie);\r
        resp.sendRedirect("login.html");\r
    }\r
}`,m=[{question:"Why is HTTP called a stateless protocol?",shortAnswer:"Each request is independent; the server does not retain any memory of previous requests.",explanation:"Statelessness simplifies the protocol but requires session management for user-specific interactions.",hint:"Think about how a simple web server handles consecutive requests from the same user without sessions.",level:"basic",codeExample:"// No built-in memory between requests"},{question:"How do you obtain an existing session without creating a new one?",shortAnswer:"request.getSession(false) returns null if no session exists.",explanation:"Passing false prevents automatic session creation; useful for checking login status.",level:"basic",codeExample:"HttpSession session = request.getSession(false); if (session == null) { // not logged in }"}],L=()=>{const t=o.useRef([]);return o.useEffect(()=>{const s=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting&&(n.target.classList.add("animate-slide-up"),s.unobserve(n.target))})},{threshold:.1});return t.current.forEach(r=>{r&&s.observe(r)}),()=>s.disconnect()},[]),e.jsx("div",{className:"dark min-h-screen bg-gray-950 text-gray-100 font-sans leading-relaxed p-6 md:p-10",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("header",{className:"text-center space-y-4 animate-slide-up",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent",children:"Session Management"}),e.jsx("p",{className:"text-lg text-gray-300 max-w-2xl mx-auto",children:"Cookies, HttpSession, and URL Rewriting – keeping track of users across stateless HTTP."})]}),e.jsxs("section",{ref:s=>t.current[0]=s,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-blue-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔐"})," Why do we need sessions?"]}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["HTTP is ",e.jsx("strong",{children:"stateless"})," – each request stands alone. But e‑commerce, school portals (e.g., Barrackpore High's online grade viewer) need to remember who you are across multiple page clicks. Session management solves this by associating multiple requests from the same user."]}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Three primary techniques: ",e.jsx("strong",{children:"Cookies"})," (client‑side), ",e.jsx("strong",{children:"HttpSession"})," (server‑side with a session ID), and ",e.jsx("strong",{children:"URL rewriting"})," (fallback when cookies are disabled)."]}),e.jsx("div",{className:"mt-4 p-4 bg-gray-800/50 rounded-xl border-l-4 border-blue-500",children:e.jsxs("p",{className:"text-sm italic text-gray-300",children:["📘 ",e.jsx("strong",{children:"Real‑world analogy:"})," Swadeep visits a school website. A cookie is like a temporary ID card stored in his browser. HttpSession is the school's office record that keeps his preferences. URL rewriting adds that ID to every link – like writing his roll number on every form."]})})]}),e.jsxs("section",{ref:s=>t.current[1]=s,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-blue-400",children:"🛠️ Three Session Tracking Techniques"}),e.jsxs("div",{className:"mt-6 flex flex-wrap justify-center gap-8",children:[e.jsxs("svg",{viewBox:"0 0 200 160",className:"w-48 h-auto",children:[e.jsx("rect",{x:"10",y:"10",width:"180",height:"140",rx:"10",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"1.5"}),e.jsx("text",{x:"100",y:"35",textAnchor:"middle",fill:"#60a5fa",fontWeight:"bold",fontSize:"14",children:"Cookies"}),e.jsx("text",{x:"100",y:"60",textAnchor:"middle",fill:"#cbd5e1",fontSize:"11",children:"Client‑side"}),e.jsx("text",{x:"100",y:"80",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Stored in browser"}),e.jsx("text",{x:"100",y:"100",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Name‑value pairs"}),e.jsx("text",{x:"100",y:"120",textAnchor:"middle",fill:"#f87171",fontSize:"10",children:"Size limit ~4KB"})]}),e.jsxs("svg",{viewBox:"0 0 200 160",className:"w-48 h-auto",children:[e.jsx("rect",{x:"10",y:"10",width:"180",height:"140",rx:"10",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"1.5"}),e.jsx("text",{x:"100",y:"35",textAnchor:"middle",fill:"#60a5fa",fontWeight:"bold",fontSize:"14",children:"HttpSession"}),e.jsx("text",{x:"100",y:"60",textAnchor:"middle",fill:"#cbd5e1",fontSize:"11",children:"Server‑side"}),e.jsx("text",{x:"100",y:"80",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Session ID cookie"}),e.jsx("text",{x:"100",y:"100",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Stores objects"}),e.jsx("text",{x:"100",y:"120",textAnchor:"middle",fill:"#34d399",fontSize:"10",children:"Secure & flexible"})]}),e.jsxs("svg",{viewBox:"0 0 200 160",className:"w-48 h-auto",children:[e.jsx("rect",{x:"10",y:"10",width:"180",height:"140",rx:"10",fill:"#1e293b",stroke:"#3b82f6",strokeWidth:"1.5"}),e.jsx("text",{x:"100",y:"35",textAnchor:"middle",fill:"#60a5fa",fontWeight:"bold",fontSize:"14",children:"URL Rewriting"}),e.jsx("text",{x:"100",y:"60",textAnchor:"middle",fill:"#cbd5e1",fontSize:"11",children:"Fallback technique"}),e.jsx("text",{x:"100",y:"80",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"Appends session ID"}),e.jsx("text",{x:"100",y:"100",textAnchor:"middle",fill:"#9ca3af",fontSize:"10",children:"In all URLs"}),e.jsx("text",{x:"100",y:"120",textAnchor:"middle",fill:"#fbbf24",fontSize:"10",children:"Works without cookies"})]})]})]}),e.jsxs("section",{ref:s=>t.current[2]=s,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-blue-400",children:"🍪 Cookies – Client‑Side State"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["A cookie is a small piece of data sent from the server to the client, stored by the browser, and sent back with every subsequent request. Servlets use ",e.jsx("code",{children:"javax.servlet.http.Cookie"})," class."]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-xl font-mono text-blue-300",children:"📌 Key Methods"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"Cookie(String name, String value)"})," – constructor."]}),e.jsxs("li",{children:[e.jsx("code",{children:"void setMaxAge(int seconds)"})," – defines cookie lifetime (0 = delete)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"void setPath(String uri)"})," – restricts cookie to specific path."]}),e.jsxs("li",{children:[e.jsx("code",{children:"void setSecure(boolean flag)"})," – only send over HTTPS."]}),e.jsxs("li",{children:[e.jsx("code",{children:"void setHttpOnly(boolean flag)"})," – prevents JavaScript access (XSS protection)."]})]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(i,{fileModule:c,title:"CookieServlet.java – Setting and Reading Cookies",highlightLines:[12,16,20,29]})}),e.jsx("div",{className:"mt-4 p-3 bg-blue-950/30 border-l-4 border-blue-500 rounded",children:e.jsxs("p",{className:"text-sm text-gray-200",children:["💡 ",e.jsx("strong",{children:"Tip:"})," Always set ",e.jsx("code",{children:"HttpOnly"})," and ",e.jsx("code",{children:"Secure"})," flags for sensitive cookies. Use ",e.jsx("code",{children:"setMaxAge()"}),' to avoid "session cookies" that expire when browser closes.']})})]}),e.jsxs("section",{ref:s=>t.current[3]=s,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-blue-400",children:"📦 HttpSession – Server‑Side Session"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["The container creates a unique ",e.jsx("code",{children:"HttpSession"})," object for each user. It maintains a session ID (usually via a cookie named ",e.jsx("code",{children:"JSESSIONID"}),") and can store any Java objects as attributes."]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-xl font-mono text-blue-300",children:"📌 Key Methods"}),e.jsxs("ul",{className:"list-disc list-inside text-gray-300 mt-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"HttpSession session = request.getSession()"})," – creates or retrieves session."]}),e.jsxs("li",{children:[e.jsx("code",{children:"void setAttribute(String name, Object value)"})," – store data."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object getAttribute(String name)"})," – retrieve data."]}),e.jsxs("li",{children:[e.jsx("code",{children:"void invalidate()"})," – destroys session (logout)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"void setMaxInactiveInterval(int seconds)"})," – timeout."]})]})]}),e.jsx("div",{className:"mt-5",children:e.jsx(i,{fileModule:d,title:"LoginSessionServlet.java – Using HttpSession after Login",highlightLines:[13,18,19,28]})}),e.jsx("div",{className:"mt-5",children:e.jsx(i,{fileModule:p,title:"LogoutServlet.java – Invalidating Session",highlightLines:[8,9]})})]}),e.jsxs("section",{ref:s=>t.current[4]=s,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-blue-400",children:"🔗 URL Rewriting – When Cookies Are Disabled"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Some users disable cookies. URL rewriting appends the session ID to every URL as a query parameter (",e.jsx("code",{children:";jsessionid=..."}),"). Servlets provide the ",e.jsx("code",{children:"encodeURL()"})," and ",e.jsx("code",{children:"encodeRedirectURL()"})," methods to automatically add the session ID if cookies are not supported."]}),e.jsx("div",{className:"mt-5",children:e.jsx(i,{fileModule:x,title:"ProfileServlet.java – URL Rewriting Example",highlightLines:[12,13,24]})}),e.jsx("div",{className:"mt-4 p-3 bg-amber-950/30 border-l-4 border-amber-500 rounded",children:e.jsxs("p",{className:"text-sm text-gray-200",children:["💡 ",e.jsx("strong",{children:"Pro tip:"})," Always use ",e.jsx("code",{children:"response.encodeURL()"})," for every link and ",e.jsx("code",{children:"encodeRedirectURL()"})," for redirects. This gracefully degrades when cookies are off."]})})]}),e.jsxs("section",{ref:s=>t.current[5]=s,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-blue-400",children:"📊 Comparison of Session Management Techniques"}),e.jsx("div",{className:"overflow-x-auto mt-4",children:e.jsxs("table",{className:"min-w-full text-sm text-left text-gray-300",children:[e.jsx("thead",{className:"bg-gray-800 text-blue-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2",children:"Feature"}),e.jsx("th",{children:"Cookies"}),e.jsx("th",{children:"HttpSession"}),e.jsx("th",{children:"URL Rewriting"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-700",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2",children:"Storage"}),e.jsx("td",{children:"Client browser"}),e.jsx("td",{children:"Server memory"}),e.jsx("td",{children:"URL parameter"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2",children:"Size limit"}),e.jsx("td",{children:"~4KB per cookie"}),e.jsx("td",{children:"Virtually unlimited"}),e.jsx("td",{children:"Limited by URL length"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2",children:"Security"}),e.jsx("td",{children:"Vulnerable (can be stolen)"}),e.jsx("td",{children:"More secure (session ID)"}),e.jsx("td",{children:"Session ID visible in URL"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2",children:"Persistence"}),e.jsx("td",{children:"Can be made persistent"}),e.jsx("td",{children:"Timeout / invalidate"}),e.jsx("td",{children:"Only for current session"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-2",children:"Requires cookies"}),e.jsx("td",{children:"Yes (to read)"}),e.jsx("td",{children:"Yes for default tracking"}),e.jsx("td",{children:"No"})]})]})]})})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-blue-400",children:"⚙️ Session Configuration & Listeners"}),e.jsxs("p",{className:"mt-3 text-gray-300",children:["Set session timeout in ",e.jsx("code",{children:"web.xml"})," or programmatically. Use ",e.jsx("code",{children:"HttpSessionListener"})," to track session creation/destruction (e.g., count online users)."]}),e.jsx("div",{className:"mt-3 p-3 bg-gray-800 rounded-lg",children:e.jsxs("p",{className:"font-mono text-sm",children:["// web.xml timeout (minutes)",e.jsx("br",{}),"<session-config>",e.jsx("br",{}),"  <session-timeout>30</session-timeout>",e.jsx("br",{}),"</session-config>"]})})]}),e.jsxs("section",{ref:s=>t.current[6]=s,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-blue-400",children:"⚠️ Common Pitfalls (Beginners)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-300 mt-3",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Not calling ",e.jsx("code",{children:"getSession()"})," before using session"]})," – results in ",e.jsx("code",{children:"NullPointerException"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Storing large objects in HttpSession"})," – causes memory overhead and poor performance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to invalidate session on logout"})," – session remains active, posing security risk."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Using cookies without ",e.jsx("code",{children:"HttpOnly"})]})," – XSS attacks can steal session cookies."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["URL rewriting without ",e.jsx("code",{children:"encodeURL()"})]})," – session breaks when cookies are disabled."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Setting ",e.jsx("code",{children:"maxAge"})," to negative vs zero"]})," – negative means session cookie (browser close); zero deletes immediately."]})]})]}),e.jsxs("section",{ref:s=>t.current[7]=s,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-blue-400",children:"✅ Best Practices (Industry)"}),e.jsxs("ul",{className:"list-decimal list-inside space-y-2 text-gray-300 mt-3",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use HttpSession for user‑specific data"})," (shopping cart, logged‑in user ID)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep session data minimal"})," – store only identifiers, fetch fresh data from DB when needed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Set reasonable session timeouts"})," (15–30 minutes for typical web apps)."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Always call ",e.jsx("code",{children:"invalidate()"})," on logout"]})," and remove cookies client‑side."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"encodeURL()"})," for all internal links"]})," to support cookie‑disabled clients."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Mark session cookies as ",e.jsx("code",{children:"Secure"})," and ",e.jsx("code",{children:"HttpOnly"})]}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Regenerate session ID after login"})," to prevent session fixation attacks: ",e.jsx("code",{children:"request.changeSessionId()"})," (Servlet 3.1+)."]})]})]}),e.jsxs("section",{ref:s=>t.current[8]=s,className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-blue-400",children:"📋 Mini Checklist"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-4",children:["✅ Understand stateless HTTP → need for sessions","✅ Know three tracking techniques: cookies, HttpSession, URL rewriting","✅ Use request.getSession() correctly","✅ Store and retrieve session attributes","✅ Set cookie maxAge, HttpOnly, Secure flags","✅ Call response.encodeURL() for every URL","✅ Invalidate session on logout","✅ Set session timeout in web.xml or programmatically","✅ Avoid storing heavy objects in session","✅ Regenerate session ID after authentication"].map((s,r)=>e.jsxs("div",{className:"flex items-center gap-2 text-gray-200 text-sm",children:[e.jsx("span",{className:"text-blue-400",children:"✓"})," ",s]},r))})]}),e.jsxs("section",{ref:s=>t.current[9]=s,className:"bg-gray-900/50 rounded-2xl p-6 border border-blue-500/30",children:[e.jsx("h2",{className:"text-xl font-semibold text-blue-400",children:"🧠 Hints – Think Like a Pro"}),e.jsxs("ul",{className:"space-y-2 text-gray-300 italic",children:[e.jsxs("li",{children:["🔍 ",e.jsx("strong",{children:"Observe carefully:"})," Open your browser dev tools → Application → Cookies. See JSESSIONID after visiting a servlet that calls ",e.jsx("code",{children:"getSession()"}),"."]}),e.jsxs("li",{children:["⚙️ ",e.jsx("strong",{children:"Try changing:"})," Disable cookies in your browser. Does your app still work? If not, you forgot ",e.jsx("code",{children:"encodeURL()"}),"."]}),e.jsxs("li",{children:["📂 ",e.jsx("strong",{children:"Think about:"})," Why is it dangerous to put sensitive data like passwords in a cookie (even encrypted)?"]}),e.jsxs("li",{children:["🧩 ",e.jsx("strong",{children:"Debug:"})," Session attributes not persisting? Check if you called ",e.jsx("code",{children:"invalidate()"})," accidentally or timeout is too short."]})]})]}),e.jsxs("section",{className:"bg-gray-900/50 rounded-2xl p-6 border border-gray-800",children:[e.jsx("h2",{className:"text-2xl font-semibold text-blue-400",children:"💻 Full Session Tracking Demo"}),e.jsx(i,{fileModule:h,title:"SessionTrackingDemo.java – All Three Techniques",highlightLines:[14,18,25,30]})]}),e.jsx(l,{title:"Session Management FAQs",questions:m}),e.jsx("div",{className:"mt-8",children:e.jsx(a,{note:"Students often forget that HTTP is stateless. Use the 'school library card' analogy: Cookie = card the student keeps; HttpSession = librarian's record; URL rewriting = writing student ID on each book request. Emphasise that encodeURL() is not optional if you want a robust app. Show them how to inspect cookies and session attributes using browser tools and a simple debug servlet. Also warn about session fixation – always regenerate session ID after login, especially in academic systems where multiple users share a computer."})}),e.jsx("footer",{className:"text-center text-gray-500 text-sm pt-8 border-t border-gray-800",children:"Topic 4: Session Management (Cookies, HttpSession, URL Rewriting) – Part of Servlet Mastery Series"})]})})};export{L as default};
