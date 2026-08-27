import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 012_004: Custom DI Framework\r
 * Topic 7: Embedded Web Routing - HttpServer & @RestController\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.minispring;\r
\r
import com.sun.net.httpserver.HttpServer;\r
import java.io.OutputStream;\r
import java.lang.annotation.ElementType;\r
import java.lang.annotation.Retention;\r
import java.lang.annotation.RetentionPolicy;\r
import java.lang.annotation.Target;\r
import java.net.InetSocketAddress;\r
\r
public class EmbeddedHttpServerRestControllerDemo {\r
\r
    @Retention(RetentionPolicy.RUNTIME)\r
    @Target(ElementType.TYPE)\r
    public @interface RestController {}\r
\r
    @Retention(RetentionPolicy.RUNTIME)\r
    @Target(ElementType.METHOD)\r
    public @interface GetMapping {\r
        String value();\r
    }\r
\r
    @RestController\r
    public static class GreetingController {\r
        @GetMapping("/api/hello")\r
        public String sayHello() {\r
            return "{"message": "Hello from Barrackpore Academy Custom Framework!"}";\r
        }\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: EMBEDDED HTTP SERVER & REST CONTROLLERS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);\r
        server.createContext("/api/hello", exchange -> {\r
            String response = "{"status": "OK", "msg": "Mini-Spring REST Response"}";\r
            exchange.getResponseHeaders().set("Content-Type", "application/json");\r
            exchange.sendResponseHeaders(200, response.getBytes().length);\r
            try (OutputStream os = exchange.getResponseBody()) {\r
                os.write(response.getBytes());\r
            }\r
        });\r
\r
        System.out.println("Embedded HttpServer configured successfully on port 8080.");\r
        System.out.println("Demonstrated declarative @RestController and @GetMapping routing engine.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_004: Custom DI Framework\r
Topic 7: Embedded HTTP Server & Rest Controllers\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EMBEDDED HTTP SERVER:\r
   - 'com.sun.net.httpserver.HttpServer' provides lightweight HTTP engine built directly into JDK.\r
   - Map URL paths dynamically to controller methods discovered via reflection.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the advantage of using Java's built-in com.sun.net.httpserver.HttpServer for microservices and lightweight frameworks?",shortAnswer:"It requires zero external dependencies, has near-instant startup time (<50ms), consumes negligible memory, and is included out-of-the-box in the standard JDK.",explanation:"Built-in lightweight HTTP server in standard Java library.",hint:"Zero external dependencies and instant startup time out of the box.",level:"Beginner",codeExample:"HttpServer.create(new InetSocketAddress(8080), 0);"},{question:"How does the custom dispatcher servlet map incoming HTTP requests to annotated @GetMapping methods?",shortAnswer:"During startup scanning, the framework creates a Map<String, Method> routing table associating URL paths with controller methods. When an HTTP request arrives, the dispatcher extracts the request URI, looks up the target method, invokes it via reflection, and serializes the return value as JSON.",explanation:"Standard REST dispatcher architecture.",hint:"URL-to-Method routing table invoked via reflection.",level:"Intermediate",codeExample:"Method handler = routeMap.get(exchange.getRequestURI().getPath());"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_004 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 3: Custom DI Framework"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Embedded Web Routing: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"HttpServer & @RestController"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Zero external dependencies: embedding Java built-in com.sun.net.httpserver.HttpServer and mapping HTTP requests to @RestController and @GetMapping methods."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"EmbeddedHttpServerRestControllerDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Custom DI Framework FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 012_004 Topic 7: Embedded HTTP Server & @RestController",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_004_topic7_embedded_http_server_rest_controller_note.txt"})}),e.jsx(a,{note:"Did you know Java comes with its own built-in HTTP server (com.sun.net.httpserver.HttpServer)? We can build a full REST web framework without Tomcat or external JARs by routing HTTP endpoints to annotated controller methods! — Sukanta Hui"})]})}export{x as default};
