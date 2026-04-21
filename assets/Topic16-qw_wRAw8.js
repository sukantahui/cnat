import{j as e}from"./index-ClZJ1mc6.js";import{c as t}from"./clsx-B-dksMZM.js";import{J as r}from"./JavaFileLoader-y96JywnD.js";import"./JavaCodeBlock-DXxFNkdo.js";import"./prism-CtX5WnCG.js";import"./browser-CgLClJ3Z.js";import"./prism-java-BwO6k4I_.js";const s=`import java.sql.*;\r
\r
public class BasicTryCatch {\r
    public static void main(String[] args) {\r
        Connection conn = null;\r
        Statement stmt = null;\r
        ResultSet rs = null;\r
        \r
        try {\r
            conn = DriverManager.getConnection(\r
                "jdbc:mysql://localhost:3306/schoolDB", "root", "password");\r
            stmt = conn.createStatement();\r
            rs = stmt.executeQuery("SELECT * FROM students");\r
            \r
            while (rs.next()) {\r
                System.out.println(rs.getString("name"));\r
            }\r
        } catch (SQLException e) {\r
            System.err.println("Database error occurred:");\r
            e.printStackTrace();\r
        } finally {\r
            // Clean up resources\r
            try { if (rs != null) rs.close(); } catch (SQLException e) { e.printStackTrace(); }\r
            try { if (stmt != null) stmt.close(); } catch (SQLException e) { e.printStackTrace(); }\r
            try { if (conn != null) conn.close(); } catch (SQLException e) { e.printStackTrace(); }\r
        }\r
    }\r
}`,i=`import java.sql.*;\r
\r
public class TryWithResources {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "password";\r
        \r
        // try-with-resources automatically closes Connection, Statement, ResultSet\r
        try (Connection conn = DriverManager.getConnection(url, user, password);\r
             Statement stmt = conn.createStatement();\r
             ResultSet rs = stmt.executeQuery("SELECT * FROM students")) {\r
            \r
            while (rs.next()) {\r
                System.out.println(rs.getString("name"));\r
            }\r
            \r
        } catch (SQLException e) {\r
            System.err.println("Database error: " + e.getMessage());\r
            e.printStackTrace();\r
        }\r
    }\r
}`,a=`import java.sql.*;\r
import java.io.*;\r
\r
public class MultiCatch {\r
    public static void main(String[] args) {\r
        try {\r
            // Simulate both SQL and file operations\r
            Class.forName("com.mysql.cj.jdbc.Driver"); // may throw ClassNotFoundException\r
            Connection conn = DriverManager.getConnection(\r
                "jdbc:mysql://localhost:3306/schoolDB", "root", "password");\r
            \r
            // Read SQL from a file (just for demo)\r
            BufferedReader reader = new BufferedReader(new FileReader("query.sql"));\r
            String query = reader.readLine();\r
            reader.close();\r
            \r
            try (Statement stmt = conn.createStatement();\r
                 ResultSet rs = stmt.executeQuery(query)) {\r
                while (rs.next()) {\r
                    System.out.println(rs.getString(1));\r
                }\r
            }\r
            \r
        } catch (ClassNotFoundException | SQLException | IOException e) {\r
            // Multi-catch: handle all these exception types uniformly\r
            System.err.println("An error occurred: " + e.getMessage());\r
            e.printStackTrace();\r
        }\r
    }\r
}`,o=`import java.sql.*;\r
\r
public class SQLExceptionMethods {\r
    public static void main(String[] args) {\r
        String url = "jdbc:mysql://localhost:3306/schoolDB";\r
        String user = "root";\r
        String password = "wrongpassword"; // Intentional wrong password\r
        \r
        try (Connection conn = DriverManager.getConnection(url, user, password)) {\r
            System.out.println("Connected (should not happen)");\r
        } catch (SQLException e) {\r
            System.out.println("SQLException caught!");\r
            System.out.println("Message: " + e.getMessage());\r
            System.out.println("SQLState: " + e.getSQLState());\r
            System.out.println("Error Code: " + e.getErrorCode());\r
            \r
            // Iterate through chained exceptions\r
            SQLException next = e.getNextException();\r
            while (next != null) {\r
                System.out.println("Next exception:");\r
                System.out.println("  Message: " + next.getMessage());\r
                System.out.println("  SQLState: " + next.getSQLState());\r
                System.out.println("  Error Code: " + next.getErrorCode());\r
                next = next.getNextException();\r
            }\r
        }\r
    }\r
}`,u=()=>{const n=new Date().getFullYear()-1998;return e.jsxs("div",{className:"dark:bg-gray-900 dark:text-gray-200 min-h-screen py-8 px-4 transition-colors duration-300",children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes gentlePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}),e.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[e.jsxs("section",{className:"animate-[fadeSlideUp_0.6s_ease-out]","aria-label":"Introduction to SQL Exception Handling",children:[e.jsx("h1",{className:"text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-4",children:"🚨 SQL Exception Handling and Best Practices"}),e.jsxs("p",{className:"text-lg leading-relaxed",children:["JDBC operations can throw ",e.jsx("code",{children:"SQLException"})," for various reasons: connection failures, syntax errors, constraint violations, etc. Proper exception handling is crucial for building robust applications. This topic covers how to handle ",e.jsx("code",{children:"SQLException"})," effectively, including retrieving error details, chaining exceptions, using try‑with‑resources, and following best practices."]}),e.jsxs("p",{className:"mt-2 text-md",children:[e.jsx("span",{className:"font-semibold",children:"Abhronila"})," from Ichapur's application crashed when the database went down because she didn't handle exceptions properly. After learning proper exception handling, her app now shows user‑friendly messages and logs the real cause for debugging."]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.7s_ease-out] space-y-4","aria-label":"Understanding SQLException",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🔍 Understanding SQLException"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:[e.jsxs("p",{className:"mb-3",children:[e.jsx("code",{children:"SQLException"})," is a checked exception that provides several methods to get detailed information about the error:"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2",children:[e.jsxs("li",{children:[e.jsx("code",{children:"getMessage()"})," – Returns the error message."]}),e.jsxs("li",{children:[e.jsx("code",{children:"getSQLState()"})," – Returns the SQLState string (standard error code)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"getErrorCode()"})," – Returns the vendor‑specific error code."]}),e.jsxs("li",{children:[e.jsx("code",{children:"getNextException()"})," – Returns the next exception in the chain (multiple errors)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"getCause()"})," – Returns the underlying cause (if any)."]})]}),e.jsx("p",{className:"mt-3 text-sm text-amber-600 dark:text-amber-400",children:"⚠️ SQLException can be chained – one exception may have another attached. Use a loop to iterate."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.8s_ease-out] space-y-4","aria-label":"Exception handling patterns",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"🧩 Exception Handling Patterns"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700"),children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-600 dark:text-indigo-400",children:"Basic try‑catch‑finally"}),e.jsx("p",{className:"text-sm mt-1",children:"The traditional way: open resources in try, handle exception in catch, close in finally. Verbose but works in Java 6 and earlier."})]}),e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700"),children:[e.jsx("h3",{className:"text-xl font-bold text-emerald-600 dark:text-emerald-400",children:"try‑with‑resources"}),e.jsxs("p",{className:"text-sm mt-1",children:["Java 7+ feature: automatically closes resources that implement ",e.jsx("code",{children:"AutoCloseable"}),". Cleaner, less error‑prone."]})]}),e.jsxs("div",{className:t("bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md","transition-all duration-300 hover:shadow-xl hover:scale-[1.02]","border border-gray-200 dark:border-gray-700 md:col-span-2"),children:[e.jsx("h3",{className:"text-xl font-bold text-sky-600 dark:text-sky-400",children:"Multi‑catch (Java 7+)"}),e.jsxs("p",{className:"text-sm mt-1",children:["Catch multiple exception types in one block: ",e.jsx("code",{children:"catch (SQLException | IOException e)"}),". Reduces duplication."]})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_0.9s_ease-out] space-y-4","aria-label":"Exception propagation diagram",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"📡 Exception Propagation"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-inner flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 150",className:"w-full max-w-2xl",stroke:"currentColor",fill:"none",strokeWidth:"2",children:[e.jsx("rect",{x:"50",y:"10",width:"120",height:"40",rx:"8",className:"stroke-indigo-400 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("text",{x:"70",y:"35",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"main()"}),e.jsx("rect",{x:"50",y:"60",width:"120",height:"40",rx:"8",className:"stroke-indigo-400 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("text",{x:"60",y:"85",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"processData()"}),e.jsx("rect",{x:"50",y:"110",width:"120",height:"40",rx:"8",className:"stroke-indigo-400 fill-indigo-50 dark:fill-indigo-900/20"}),e.jsx("text",{x:"60",y:"135",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"executeQuery()"}),e.jsx("path",{d:"M170 130 L240 100",stroke:"red",strokeWidth:"2",strokeDasharray:"4 4",children:e.jsx("animate",{attributeName:"strokeDashoffset",values:"0;8;0",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"190",y:"110",className:"text-xs fill-red-600",stroke:"none",children:"throws SQLException"}),e.jsx("rect",{x:"300",y:"40",width:"80",height:"60",rx:"8",className:"stroke-purple-400 fill-purple-50 dark:fill-purple-900/20"}),e.jsx("text",{x:"320",y:"75",className:"text-xs fill-gray-600 dark:fill-gray-400",stroke:"none",children:"DB"})]})}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 text-center",children:"Exceptions propagate up the call stack until caught. Uncaught exceptions terminate the thread."})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.0s_ease-out] space-y-6","aria-label":"Code examples for exception handling",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-medium",children:"🔹 Basic try‑catch‑finally (Old style)"}),e.jsx(r,{fileModule:s,title:"BasicTryCatch.java",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 try‑with‑resources (Java 7+)"}),e.jsx(r,{fileModule:i,title:"TryWithResources.java",highlightLines:[5,6,7,8,9,10,11,12,13]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Multi‑catch and SQLException details"}),e.jsx(r,{fileModule:a,title:"MultiCatch.java",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]}),e.jsx("h3",{className:"text-xl font-medium mt-6",children:"🔹 Using SQLException methods to diagnose errors"}),e.jsx(r,{fileModule:o,title:"SQLExceptionMethods.java",highlightLines:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-400",children:e.jsxs("p",{className:"text-sm font-medium text-indigo-800 dark:text-indigo-200",children:["💡 ",e.jsx("strong",{children:"Observe carefully:"})," In the multi‑catch example, we catch both ",e.jsx("code",{children:"SQLException"})," and",e.jsx("code",{children:"ClassNotFoundException"}),". Why can't we just catch ",e.jsx("code",{children:"Exception"}),"? (Hint: think about catching specific vs. generic exceptions.)"]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.1s_ease-out] space-y-3","aria-label":"Common mistakes",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-red-200 dark:border-red-800 pb-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-red-700 dark:text-red-300",children:[e.jsx("li",{children:"Swallowing exceptions (empty catch block) – hides problems and makes debugging impossible."}),e.jsx("li",{children:"Not closing resources in finally – leads to connection leaks."}),e.jsxs("li",{children:["Catching ",e.jsx("code",{children:"Exception"})," instead of specific exceptions – masks unexpected errors."]}),e.jsx("li",{children:"Logging the exception but not handling it (e.g., not rolling back a transaction)."}),e.jsxs("li",{children:["Forgetting that ",e.jsx("code",{children:"SQLException"})," can be chained – only checking the first exception may miss details."]}),e.jsxs("li",{children:["Using ",e.jsx("code",{children:"printStackTrace()"})," in production – not helpful for monitoring; use a logger."]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.2s_ease-out] space-y-3","aria-label":"Best practices",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-green-200 dark:border-green-800 pb-2",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-800 dark:text-green-200",children:[e.jsxs("li",{children:["Always use try‑with‑resources for ",e.jsx("code",{children:"Connection"}),", ",e.jsx("code",{children:"Statement"}),", and ",e.jsx("code",{children:"ResultSet"})," (Java 7+)."]}),e.jsxs("li",{children:["Catch specific exceptions (",e.jsx("code",{children:"SQLException"}),", ",e.jsx("code",{children:"IOException"}),") rather than generic ",e.jsx("code",{children:"Exception"}),"."]}),e.jsx("li",{children:"Log exceptions with a proper logging framework (SLF4J, Log4j, java.util.logging)."}),e.jsx("li",{children:"When catching, decide whether to handle (e.g., retry, rollback) or rethrow (possibly as a runtime exception)."}),e.jsx("li",{children:"In multi‑layer applications, translate low‑level exceptions to business exceptions at layer boundaries."}),e.jsx("li",{children:"Always iterate through the entire exception chain using a loop or recursion to capture all details."})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.3s_ease-out] space-y-3","aria-label":"Professional tips",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-amber-200 dark:border-amber-800 pb-2",children:"🧠 Tips & Tricks"}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"BatchUpdateException:"})," When batch fails, examine ",e.jsx("code",{children:"getUpdateCounts()"})," to see which statements succeeded."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Retry logic:"})," For transient errors (deadlock, timeout), implement a retry mechanism with exponential backoff."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Custom exception:"})," Create a ",e.jsx("code",{children:"DataAccessException"})," (runtime) to wrap ",e.jsx("code",{children:"SQLException"})," and avoid forcing callers to handle checked exceptions."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Connection validation:"})," Before using a connection from a pool, test it with ",e.jsx("code",{children:"isValid(5)"})," to avoid using stale connections."]}),e.jsxs("li",{children:["🔹 ",e.jsx("strong",{children:"Swadeep's trick:"})," In development, print the SQLState and error code to quickly identify the problem. Keep a reference of common SQLState codes (e.g., 23000 = integrity constraint violation)."]})]})})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.4s_ease-out] space-y-3","aria-label":"Teacher's note",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-indigo-200 dark:border-indigo-800 pb-2",children:"👩‍🏫 Teacher's Note"}),e.jsxs("div",{className:t("bg-indigo-100 dark:bg-indigo-900/40 p-5 rounded-xl","transition-all duration-300 hover:shadow-lg hover:bg-indigo-200 dark:hover:bg-indigo-800/60"),children:[e.jsx("p",{className:"font-bold text-indigo-900 dark:text-indigo-100",children:"Sukanta Hui"}),e.jsx("p",{className:"text-sm text-indigo-800 dark:text-indigo-200",children:"📧 sukantahui@codernaccotax.co.in | 📞 7003756860"}),e.jsxs("p",{className:"text-sm mt-1",children:["💼 ",n," years of experience in Programming, RDBMS, OS, Web Development."]}),e.jsxs("p",{className:"mt-3",children:[e.jsx("span",{className:"font-semibold",children:"Point to remember:"}),` Exception handling is not an afterthought – it's part of the design. Students often write code that works only in the "happy path". Emphasize that robust applications anticipate and handle failures gracefully.`,e.jsx("br",{}),e.jsx("span",{className:"italic",children:`"Tuhina, think of exception handling like airbags in a car – you hope you never need them, but you're glad they're there when something goes wrong."`})]})]})]}),e.jsxs("section",{className:"animate-[fadeSlideUp_1.5s_ease-out] space-y-3","aria-label":"Quick checklist",children:[e.jsx("h2",{className:"text-3xl font-semibold border-b-2 border-gray-300 dark:border-gray-600 pb-2",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["✔️ I understand the methods provided by ",e.jsx("code",{children:"SQLException"})," (getMessage, getSQLState, getErrorCode)."]}),e.jsx("li",{children:"✔️ I know how to use try‑with‑resources to auto‑close JDBC resources."}),e.jsxs("li",{children:["✔️ I can iterate through a chain of ",e.jsx("code",{children:"SQLException"}),"s."]}),e.jsx("li",{children:"✔️ I follow best practices: log exceptions, avoid swallowing, handle or rethrow appropriately."}),e.jsx("li",{children:"✔️ I can differentiate between transient and permanent errors and decide on retry logic."}),e.jsx("li",{children:"✔️ I am aware of common pitfalls and how to avoid them."})]})})]})]})]})};export{u as default};
