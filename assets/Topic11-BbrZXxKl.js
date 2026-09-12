import{j as e}from"./vendor-react-core-CaA1o1Cx.js";import{J as t}from"./JavaFileLoader-C3jDj8qo.js";import{F as n}from"./FAQTemplate-D_90hN4m.js";import{P as a}from"./PlainTextPrint-yt10TRX1.js";import{T as s}from"./TeacherSukantaHui-Ds9F9lLV.js";import{cf as r,ay as i,k as o,cg as l,S as d}from"./vendor-icons-ri6cs58t.js";import"./JavaCodeBlock-CF1Ibqou.js";import"./vendor-prism-ntVuzLqd.js";const c=`/**\r
 * Java Core Tutorial - Module 003_002: StringBuilder, StringBuffer & String Formatting\r
 * Topic 11: Real-World Architecture: Building SQL, JSON & HTML Templates (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.stringbuilder;\r
\r
public class RealWorldTemplateBuilderCapstoneDemo {\r
\r
    public static class EnterpriseReportGenerator {\r
\r
        // 1. Dynamic SQL Query Generator\r
        public static String buildAdmissionQuery(String hubCity, double minGpa) {\r
            return """\r
                    SELECT\r
                        t.id,\r
                        t.name,\r
                        t.gpa,\r
                        t.email\r
                    FROM trainees t\r
                    INNER JOIN academy_hubs h ON t.hub_id = h.id\r
                    WHERE h.city_name = '%s'\r
                      AND t.gpa >= %.2f\r
                    ORDER BY t.gpa DESC;\r
                    """.formatted(hubCity, minGpa);\r
        }\r
\r
        // 2. REST API JSON Payload Generator\r
        public static String buildApiResponseJson(String status, int count, String location) {\r
            return """\r
                    {\r
                      "meta": {\r
                        "status": "%s",\r
                        "timestamp": %d\r
                      },\r
                      "data": {\r
                        "totalEnrolled": %d,\r
                        "primaryHub": "%s"\r
                      }\r
                    }\r
                    """.formatted(status, System.currentTimeMillis(), count, location);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: REAL-WORLD TEMPLATE BUILDER CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Generated Enterprise SQL Statement:");\r
        String sql = EnterpriseReportGenerator.buildAdmissionQuery("Barrackpore", 9.0);\r
        System.out.println(sql);\r
\r
        System.out.println(">>> 2. Generated REST API JSON Payload:");\r
        String json = EnterpriseReportGenerator.buildApiResponseJson("SUCCESS", 125, "Barrackpore Hub");\r
        System.out.println(json);\r
\r
        System.out.println("==========================================================================");\r
        System.out.println(" MODULE 003_002 STRINGBUILDER & FORMATTING 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,m=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_002: StringBuilder, StringBuffer & String Formatting\r
Topic 11: Real-World Template Builder Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 003_002 SUMMARY:\r
   - Mutable string builders eliminate heap garbage during string assembly.\r
   - StringBuilder (Java 5) is unsynchronized and high-speed.\r
   - StringBuffer (Java 1.0) is synchronized and thread-safe.\r
   - Buffer default capacity = 16; growth formula = (old * 2) + 2.\r
   - Text Blocks (Java 15+) use triple quotes '"""' for multi-line JSON, SQL, and HTML.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,u=[{question:"Why are Text Blocks considered a massive upgrade for writing SQL queries in Java?",shortAnswer:"They eliminate repetitive quote concatenation and escaped newlines, allowing SQL queries to be copied and pasted directly to and from database GUI consoles.",explanation:"A 20-line complex SQL query with CTEs and window functions remains beautifully formatted exactly as written in SQL tools.",hint:"Direct copy-paste between Java code and database tools without quotes.",level:"basic",codeExample:`String sql = """
    SELECT u.id, u.username, o.total
    FROM users u
    JOIN orders o ON u.id = o.user_id
    WHERE o.status = 'COMPLETED'
    ORDER BY o.created_at DESC;
    """;`},{question:"What is the critical security rule when constructing dynamic SQL queries with Text Blocks?",shortAnswer:"NEVER use string concatenation or .formatted() to inject untrusted user input into an SQL string! Always use PreparedStatement with '?' bind parameters.",explanation:"Formatting untrusted input (e.g. usernames or search queries) directly into SQL strings causes catastrophic SQL Injection vulnerabilities.",hint:"Direct formatting into SQL queries causes SQL Injection.",level:"basic",codeExample:`// DANGEROUS SQL INJECTION:
// String sql = "SELECT * FROM users WHERE id = %s".formatted(userInput);

// SAFE:
String sql = """
    SELECT * FROM users WHERE id = ?
    """;
PreparedStatement ps = conn.prepareStatement(sql);
ps.setInt(1, userId);`},{question:"How do Text Blocks simplify generating JSON payloads in unit tests and mock servers?",shortAnswer:'Double quotes (") around JSON keys and string values do NOT need backslash escaping.',explanation:`In classic strings, writing '{"name": "Alice"}' required '"{\\"name\\": \\"Alice\\"}"'. Text Blocks allow clean, unescaped raw JSON syntax.`,hint:"No backslash escaping required for JSON double quotes.",level:"basic",codeExample:`String json = """
    {
      "orderId": 1024,
      "customer": "Acme Corp",
      "shipped": true
    }
    """;`},{question:"How can you format dynamic values into a JSON template using Text Blocks?",shortAnswer:"Combine Text Blocks with format specifiers (%s, %d, %b) and call '.formatted(...)'.",explanation:"For mock endpoints or dynamic test fixtures, this creates clean parameterized JSON in seconds.",hint:"Use %s or %d inside the JSON template and call .formatted().",level:"basic",codeExample:`String json = """
    {
      "sku": "%s",
      "price": %.2f
    }
    """.formatted("WIDGET-99", 49.95);`},{question:"When generating HTML email templates with Text Blocks, how do you handle inline CSS containing double quotes?",shortAnswer:"Write double quotes normally without backslashes. Only triple quotes need escaping.",explanation:'HTML attributes like <div style="color: #0284c7; font-size: 14px;"> can be written completely naturally.',hint:"HTML attributes with double quotes require no escaping.",level:"basic",codeExample:`String email = """
    <div style="font-family: Arial; color: #1e293b;">
      <h1>Welcome, %s!</h1>
      <p>Your activation code is <strong>%s</strong>.</p>
    </div>
    """.formatted(userName, code);`},{question:"When should you combine Java 15 Text Blocks with StringBuilder in production services?",shortAnswer:"Use Text Blocks for static multi-line skeletons (headers, footers, row templates) and use StringBuilder for accumulating dynamic loop rows.",explanation:"A batch CSV generator or multi-row invoice uses Text Blocks for document layout and StringBuilder for the high-frequency row iteration.",hint:"Text Block for the document frame, StringBuilder for loop rows.",level:"moderate",codeExample:`StringBuilder report = new StringBuilder("""
    REPORT: DAILY AUDIT
    -------------------
    """);
for(Item item : items) {
    report.append(String.format("%-15s | $%.2f%n", item.name, item.price));
}`},{question:"How do you escape double quotes inside dynamic values to prevent JSON corruption?",shortAnswer:'Use a dedicated JSON library (Jackson, Gson) or escape dynamic values (e.g. val.replace("\\"", "\\\\\\"")) before formatting.',explanation:`If a user's name contains a double quote (e.g. John "The Rock"), inserting it raw into a JSON template will break the JSON grammar.`,hint:"Dynamic values must have internal quotes escaped or use Jackson/Gson.",level:"moderate"},{question:"How do you generate dynamic CSV files using StringBuilder and format specifiers?",shortAnswer:"Loop through data rows, appending comma-separated values and line breaks via sb.append().",explanation:"Pre-size the StringBuilder, format values without intermediate objects, and write out to stream.",hint:"Comma-separated columns with %n or \\n line breaks.",level:"basic",codeExample:`StringBuilder csv = new StringBuilder("ID,NAME,SCORE\\n");
for(Student s : students) {
    csv.append(s.id).append(',').append(s.name).append(',').append(s.score).append('\\n');
}`},{question:"What is the advantage of using Text Blocks for GraphQL query definitions in Java?",shortAnswer:"GraphQL queries are deeply nested multi-line strings with curly braces and fields; Text Blocks represent them identically to their native GraphQL schema syntax.",explanation:"Makes Java GraphQL client code readable, maintainable, and easy to test against GraphiQL IDEs.",hint:"Nested curly braces and field selection match native GraphQL syntax.",level:"moderate",codeExample:`String query = """
    query GetUser($id: ID!) {
      user(id: $id) {
        id
        name
        email
      }
    }
    """;`},{question:"How can you build multi-line XML / SOAP payloads with Text Blocks?",shortAnswer:"Write the XML tags directly without escaping angle brackets (< >) or attribute quotes.",explanation:"XML prolog, namespaces, and nested tags remain cleanly formatted.",hint:"XML angle brackets and attribute quotes need zero escaping in text blocks.",level:"basic",codeExample:`String xml = """
    <?xml version="1.0" encoding="UTF-8"?>
    <invoice id="%d">
      <amount currency="USD">%.2f</amount>
    </invoice>
    """.formatted(invId, amount);`},{question:"What is the performance benefit of using Text Blocks for templates compared to loading external .txt files?",shortAnswer:"Text Blocks are compiled directly into bytecode constants in memory, requiring zero file I/O or disk latency at runtime.",explanation:"Loading external template files requires disk reads, error handling, and classloader lookups. Text Blocks are available instantly in memory.",hint:"Zero disk I/O; available immediately in JVM bytecode constants.",level:"moderate"},{question:"How do you generate a markdown document dynamically using StringBuilder and Text Blocks?",shortAnswer:"Use Text Blocks for headings, blockquotes, and tables, and append dynamic list items using StringBuilder.",explanation:"Markdown tables require strict alignment, which Text Blocks express cleanly in Java code.",hint:"Text blocks for table templates and headers, StringBuilder for rows.",level:"basic"},{question:"Why should you avoid hardcoding sensitive secrets (passwords, API tokens) inside Text Block templates?",shortAnswer:"Because Text Blocks are compiled into class files and stored as plain text in the String Constant Pool, making them trivial to decompile.",explanation:"Never put production database passwords in a text block; load them from secure environment variables or vault services at runtime.",hint:"Class files can be decompiled easily to reveal plain text constants.",level:"moderate"},{question:"How do you handle conditional sections in an HTML template built with Text Blocks?",shortAnswer:'Interpolate empty string "" when false, or concatenate conditional sub-blocks using ternary operators or if-statements.',explanation:'For example: String banner = isVip ? """<div class="vip">VIP</div>""" : "";',hint:"Use conditional sub-blocks or ternary operators.",level:"moderate",codeExample:`String banner = isVip ? """
    <span class="badge">VIP Member</span>
    """ : "";`},{question:"Can Text Blocks be used to define Dockerfile or shell script templates in Java testcontainers?",shortAnswer:"Yes! Testcontainers and DevOps tooling in Java frequently use Text Blocks to define inline Dockerfiles, Bash scripts, or Nginx configs.",explanation:"Multi-line shell scripts with quotes and variables are represented cleanly without escaping every quote.",hint:"Ideal for inline Dockerfiles and shell scripts in Testcontainers.",level:"advanced",codeExample:`String dockerfile = """
    FROM eclipse-temurin:21-jdk-alpine
    WORKDIR /app
    COPY . .
    ENTRYPOINT ["java", "-jar", "app.jar"]
    """;`},{question:"How do you validate that a generated JSON Text Block is syntactically valid in Java?",shortAnswer:"Parse it through ObjectMapper (Jackson) or JsonParser (Gson) in a unit test.",explanation:"If the JSON has syntax errors (like missing commas or unbalanced braces), the parser will throw a JsonParseException immediately.",hint:"Verify with Jackson ObjectMapper in unit tests.",level:"moderate"},{question:"What is the best way to handle large SQL IN-clauses (e.g. 'WHERE id IN (?, ?, ?)') dynamically?",shortAnswer:"Use StringBuilder to generate the required number of '?' placeholders, then embed into the SQL Text Block.",explanation:'Writing a small loop: sb.append("?,".repeat(count - 1)).append("?") generates the exact bind placeholder string.',hint:"Generate placeholders with StringBuilder/repeat, then bind parameters.",level:"advanced"},{question:"How does Text Block compile-time whitespace stripping prevent bloated HTTP payload sizes?",shortAnswer:"By automatically stripping common leading indentation, leaving only necessary line breaks and content in the final String.",explanation:"If your source code is indented 12 spaces deep, the compiler strips those 12 spaces, saving bandwidth over network wires.",hint:"Removes source code indentation so network payloads stay compact.",level:"moderate"},{question:"What is String.format vs Text Blocks String Template preview in Java 21 (JEP 430)?",shortAnswer:'Java 21 introduced String Templates (STR."...") as a preview feature, though Text Blocks with .formatted() remains the finalized standard solution across LTS versions.',explanation:"While String Templates were previewed, Text Blocks combined with .formatted() is universally available and fully supported in all Java 15+ environments.",hint:"Text blocks with .formatted() is finalized and standard in Java 15-21+.",level:"advanced"},{question:"Summary: What are the three golden rules for template generation in Java backend development?",shortAnswer:"1. Use Text Blocks for clean multi-line readability. 2. Use .formatted() for variable interpolation. 3. Use PreparedStatement (never string interpolation) for SQL parameters.",explanation:"Following these rules ensures expressive, maintainable, high-performance, and secure enterprise code.",hint:"Readability with Text Blocks, flexibility with .formatted(), security with PreparedStatement.",level:"basic"}];function v(){return e.jsxs("div",{className:"mt-6 space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen rounded-2xl border border-slate-800/60",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_002 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Real-World Architecture: Building SQL Queries, JSON Payloads & HTML Templates"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize all mutable buffers, format specifiers, and Java 15 Text Blocks into an enterprise microservice reporting layer: generating dynamic SQL statements and formatted JSON payloads."})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-700/70 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400",children:e.jsx(r,{size:24})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20",children:"Personal Assistant Guide"}),e.jsx("span",{className:"text-xs text-slate-500",children:"• Architecture & Templating"})]}),e.jsx("h2",{className:"text-lg md:text-xl font-bold text-white mt-0.5",children:"Putting It All Together: Dynamic SQL, JSON & HTML in Enterprise Java"})]})]}),e.jsxs("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:["Hello, developer! In production Java microservices, you will constantly generate multi-line database queries (SQL, JPQL), configuration payloads, outgoing API responses (JSON, XML), and transactional email notifications (HTML). Before Java 15, engineers had to write messy string concatenations with escaped quotes ",e.jsx("code",{className:"text-amber-300 font-mono",children:'\\"'})," and ugly ",e.jsx("code",{className:"text-amber-300 font-mono",children:"\\n"})," characters, or build cumbersome loops with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"StringBuilder"}),". Now, by pairing ",e.jsx("strong",{children:"Java 15 Text Blocks"})," with fluent ",e.jsx("code",{className:"text-emerald-300 font-mono",children:".formatted(...)"})," and leveraging ",e.jsx("code",{className:"text-sky-300 font-mono",children:"StringBuilder"})," for variable loop batches, your code stays clean, readable, and lightning-fast."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"rounded-xl border border-slate-700/60 bg-slate-900/60 p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sky-400 font-semibold text-sm",children:[e.jsx(i,{size:16}),e.jsx("span",{children:"Multi-Line SQL Queries"})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Text blocks let you paste SQL queries straight from MySQL Workbench or pgAdmin with complete multi-line formatting intact. No trailing spaces or string-plus concats required."})]}),e.jsxs("div",{className:"rounded-xl border border-slate-700/60 bg-slate-900/60 p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold text-sm",children:[e.jsx(o,{size:16}),e.jsx("span",{children:"Clean JSON Payloads"})]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Double quotes are natively allowed inside Text Blocks! You can write standard JSON keys and values ",e.jsx("code",{className:"text-slate-300 font-mono",children:'"status": "%s"'})," without ugly backslash escaping."]})]}),e.jsxs("div",{className:"rounded-xl border border-slate-700/60 bg-slate-900/60 p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-semibold text-sm",children:[e.jsx(l,{size:16}),e.jsx("span",{children:"Production Security Rule"})]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Use ",e.jsx("code",{className:"text-emerald-300 font-mono",children:".formatted()"})," for static structures, reporting, and internal logs. For live database queries with user input, always use ",e.jsx("code",{className:"text-slate-300 font-mono",children:"PreparedStatement"})," parameters to prevent SQL injection!"]})]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs md:text-sm text-slate-300",children:[e.jsxs("div",{className:"font-semibold text-emerald-300 flex items-center gap-1.5",children:[e.jsx(d,{size:15}),e.jsx("span",{children:"Architecture Decision Blueprint:"})]}),e.jsxs("ul",{className:"space-y-1.5 list-disc list-inside text-slate-400 pl-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Static Templates with Variables:"})," Use Java 15 Text Blocks + ",e.jsx("code",{className:"text-emerald-300 font-mono",children:".formatted(...)"})," for fixed structural layouts (SQL views, JSON API responses, HTML emails)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dynamic Loop Batching:"})," Use ",e.jsx("code",{className:"text-sky-300 font-mono",children:"StringBuilder"})," inside loops when the number of items is dynamic (e.g. generating CSV exports or multi-value batch inserts)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Thread-Safe Concurrency:"})," Use ",e.jsx("code",{className:"text-purple-300 font-mono",children:"StringBuffer"})," only if the buffer is a shared mutable field accessed concurrently across multiple worker threads."]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:c,title:"RealWorldTemplateBuilderCapstoneDemo.java",highlightLines:[12,13,23,27,28,40,48]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Template Capstone FAQs",questions:u})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:m,title:"Module 003_002 Topic 11: Template Builder Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_002_topic11_template_capstone_note.txt"})}),e.jsx(s,{note:"Congratulations on completing Module 003_002! You have mastered StringBuilder, StringBuffer, buffer capacity growth formulas, advanced format specifiers, and modern Java 15 Text Blocks! — Sukanta Hui"})]})}export{v as default};
